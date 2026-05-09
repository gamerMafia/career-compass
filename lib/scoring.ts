import { quizQuestions, type Stream, type Aptitude } from './quizData';

export interface ScoreResult {
  streams: Record<Stream, number>;
  streamPercents: Record<Stream, number>;
  aptitudes: Record<Aptitude, number>;
  best: Stream;
  confidence: number;
  ranked: { stream: Stream; percent: number }[];
}

const ALL_STREAMS: Stream[] = ['SCIENCE', 'COMMERCE', 'ARTS', 'DIPLOMA', 'ITI'];
const ALL_APTITUDES: Aptitude[] = [
  'logical', 'numerical', 'verbal', 'creative',
  'practical', 'social', 'technical', 'leadership',
];

export function scoreAnswers(answers: Record<number, number>): ScoreResult {
  const streams: Record<Stream, number> = {
    SCIENCE: 0, COMMERCE: 0, ARTS: 0, DIPLOMA: 0, ITI: 0,
  };
  const aptitudes: Record<Aptitude, number> = {
    logical: 0, numerical: 0, verbal: 0, creative: 0,
    practical: 0, social: 0, technical: 0, leadership: 0,
  };

  for (const q of quizQuestions) {
    const idx = answers[q.id];
    if (idx === undefined) continue;
    const opt = q.options[idx];
    if (!opt) continue;
    for (const s of ALL_STREAMS) streams[s] += opt.scores[s] ?? 0;
    if (opt.aptitude) {
      for (const a of ALL_APTITUDES) aptitudes[a] += opt.aptitude[a] ?? 0;
    }
  }

  const total = ALL_STREAMS.reduce((sum, s) => sum + streams[s], 0) || 1;
  const streamPercents = ALL_STREAMS.reduce((acc, s) => {
    acc[s] = Math.round((streams[s] / total) * 100);
    return acc;
  }, {} as Record<Stream, number>);

  const ranked = ALL_STREAMS
    .map((s) => ({ stream: s, percent: streamPercents[s] }))
    .sort((a, b) => b.percent - a.percent);

  const best = ranked[0].stream;
  const confidence = Math.min(100, Math.max(40, ranked[0].percent + (ranked[0].percent - ranked[1].percent)));

  return { streams, streamPercents, aptitudes, best, confidence, ranked };
}
