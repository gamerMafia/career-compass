import { NextResponse, after } from 'next/server';
import { scoreAnswers } from '@/lib/scoring';
import { ruleBasedRecommendation, buildAIPrompt, type Recommendation } from '@/lib/recommendation';
import { scoreAnswers12, recommend12, TRACK_INFO, type Stream12, type Recommendation12 } from '@/lib/class12';
import type { Lang } from '@/lib/quizData';
import { streamMeta } from '@/lib/careers';
import { incrementCount } from '@/lib/counter';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const answers = body.answers as Record<number, number>;
    const lang = (body.lang as Lang) ?? 'en';
    const level = (body.level ?? 10) as 10 | 12;
    const priorStream = body.priorStream as Stream12 | undefined;

    if (!answers || typeof answers !== 'object') {
      return NextResponse.json({ error: 'Invalid answers' }, { status: 400 });
    }

    // ---------- CLASS 12 FLOW ----------
    if (level === 12 && priorStream) {
      const score12 = scoreAnswers12(priorStream, answers);
      let rec12: Recommendation12 = recommend12(priorStream, score12, lang);

      if (process.env.OPENAI_API_KEY) {
        try {
          const { default: OpenAI } = await import('openai');
          const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
          const langLabel: Record<Lang, string> = {
            en: 'English', hi: 'Hindi (Devanagari)', gu: 'Gujarati', hinglish: 'Hinglish (Roman-script Hindi)',
          };
          const completion = await client.chat.completions.create({
            model: process.env.OPENAI_MODEL ?? 'gpt-4o-mini',
            response_format: { type: 'json_object' },
            messages: [
              { role: 'system', content: `You are an Indian career counselor for Class 12 ${priorStream} students in Gujarat. Reply ONLY in ${langLabel[lang]}. Return JSON: { "why": "2-3 sentences", "topCareers": ["5 careers"], "skills": ["5 skills"], "roadmap": ["4 timeline steps"], "parentGuidance": "2-3 sentences for parents" }` },
              { role: 'user', content: `Best track: ${score12.best} (${TRACK_INFO[score12.best].name.en}). Track scores: ${JSON.stringify(score12.trackPercents)}. Confidence: ${score12.confidence}%.` },
            ],
            temperature: 0.7,
          });
          const raw = completion.choices[0]?.message?.content;
          if (raw) {
            const parsed = JSON.parse(raw);
            rec12 = {
              ...rec12,
              why: parsed.why ?? rec12.why,
              topCareers: Array.isArray(parsed.topCareers) ? parsed.topCareers : rec12.topCareers,
              skills: Array.isArray(parsed.skills) ? parsed.skills : rec12.skills,
              roadmap: Array.isArray(parsed.roadmap) ? parsed.roadmap : rec12.roadmap,
              parentGuidance: parsed.parentGuidance ?? rec12.parentGuidance,
            };
          }
        } catch (err) {
          console.error('OpenAI error (12), fallback:', err);
        }
      }

      after(() => incrementCount().catch(() => {}));
      return NextResponse.json({ score: score12, recommendation: rec12, level: 12, priorStream });
    }

    // ---------- CLASS 10 FLOW ----------
    const score = scoreAnswers(answers);
    let rec: Recommendation = ruleBasedRecommendation(score, lang);

    if (process.env.OPENAI_API_KEY) {
      try {
        const { default: OpenAI } = await import('openai');
        const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
        const { system, user } = buildAIPrompt(score, lang);
        const completion = await client.chat.completions.create({
          model: process.env.OPENAI_MODEL ?? 'gpt-4o-mini',
          response_format: { type: 'json_object' },
          messages: [
            { role: 'system', content: system },
            { role: 'user', content: user },
          ],
          temperature: 0.7,
        });
        const raw = completion.choices[0]?.message?.content;
        if (raw) {
          const parsed = JSON.parse(raw);
          const meta = streamMeta[score.best];
          rec = {
            best: score.best,
            confidence: score.confidence,
            why: parsed.why ?? rec.why,
            topCareers: Array.isArray(parsed.topCareers) ? parsed.topCareers : rec.topCareers,
            skills: Array.isArray(parsed.skills) ? parsed.skills : rec.skills,
            roadmap: Array.isArray(parsed.roadmap) ? parsed.roadmap : rec.roadmap,
            parentGuidance: parsed.parentGuidance ?? rec.parentGuidance,
            growth: meta.growth[lang],
            duration: meta.duration[lang],
            salary: meta.salary,
            demand: meta.demand,
            source: 'ai',
          };
        }
      } catch (err) {
        console.error('OpenAI error, falling back:', err);
      }
    }

    after(() => incrementCount().catch(() => {}));
    return NextResponse.json({ score, recommendation: rec, level: 10 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
