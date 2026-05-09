'use client';
import { use, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { CheckCircle2, XCircle, TrendingUp, Clock, IndianRupee, BarChart3 } from 'lucide-react';
import type { Recommendation } from '@/lib/recommendation';
import type { ScoreResult } from '@/lib/scoring';
import type { Recommendation12, Score12, Stream12 } from '@/lib/class12';
import { parentDosDonts } from '@/lib/careers';
import type { Lang } from '@/lib/quizData';

interface StoredResult {
  recommendation: Recommendation | Recommendation12;
  score: ScoreResult | Score12;
  lang: Lang;
  level?: 10 | 12;
  priorStream?: Stream12;
}

export default function ParentPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const t = useTranslations('parent');
  const tr = useTranslations('result');
  const [data, setData] = useState<StoredResult | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem('cc_result');
    if (raw) setData(JSON.parse(raw));
  }, []);

  if (!data) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">{t('noResult')}</h1>
        <Link href={`/${locale}/quiz`} className="bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold inline-block">
          {tr('takeQuiz')}
        </Link>
      </div>
    );
  }

  const lang = (data.lang as Lang) ?? 'en';
  const isClass12 = data.level === 12;
  const rec = data.recommendation;
  const score = data.score;
  const dd = parentDosDonts[lang];

  // Class 10 → top aptitudes; Class 12 → top alternative tracks
  let strengths: string[] = [];
  if (isClass12) {
    const s = score as Score12;
    strengths = s.ranked.slice(0, 4).map((r) => r.track.replace(/_/g, ' '));
  } else {
    const s = score as ScoreResult;
    if (s.aptitudes) {
      strengths = Object.entries(s.aptitudes)
        .sort((a, b) => (b[1] as number) - (a[1] as number))
        .slice(0, 4)
        .map(([k]) => k);
    }
  }

  const bestLabel = isClass12 ? (rec as Recommendation12).bestName : (rec as Recommendation).best;
  const growth = isClass12 ? '' : (rec as Recommendation).growth;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('title')}</h1>
        <p className="text-slate-600">{t('subtitle')}</p>
      </div>

      <div className="rounded-3xl gradient-bg p-8 text-white text-center mb-8">
        <div className="text-sm opacity-80 uppercase">{t('path')}</div>
        <div className="text-4xl md:text-5xl font-extrabold mt-1">{bestLabel}</div>
        {isClass12 && (
          <div className="text-sm mt-2 opacity-80">Class 12 {(data.priorStream ?? '').toString()}</div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-5 mb-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200">
          <h2 className="font-bold mb-3 flex items-center gap-2"><BarChart3 size={18} className="text-brand-600" /> {t('strengths')}</h2>
          {strengths.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {strengths.map((a) => (
                <span key={a} className="px-3 py-1.5 rounded-full bg-brand-50 text-brand-700 text-sm font-medium capitalize">{a.toLowerCase()}</span>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-500">—</p>
          )}
        </div>
        <div className="bg-white rounded-2xl p-6 border border-slate-200">
          <h2 className="font-bold mb-3 flex items-center gap-2"><Clock size={18} className="text-blue-600" /> {t('duration')}</h2>
          <p className="text-slate-700">{rec.duration}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-slate-200">
          <h2 className="font-bold mb-3 flex items-center gap-2"><IndianRupee size={18} className="text-emerald-600" /> {t('salary')}</h2>
          <p className="text-slate-700 text-lg font-semibold">{rec.salary}</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-slate-200">
          <h2 className="font-bold mb-3 flex items-center gap-2"><TrendingUp size={18} className="text-purple-600" /> {t('demand')}</h2>
          <p className="text-slate-700">{rec.demand}{growth ? ` — ${growth}` : ''}</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-slate-200 mb-8">
        <h2 className="font-bold text-lg mb-3">For You as a Parent</h2>
        <p className="text-slate-700 leading-relaxed italic">“{rec.parentGuidance}”</p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
          <h2 className="font-bold mb-4 flex items-center gap-2 text-emerald-700">
            <CheckCircle2 size={20} /> {t('dos')}
          </h2>
          <ul className="space-y-2.5 text-slate-700">
            {dd.dos.map((d, i) => (
              <li key={i} className="flex gap-2"><span className="text-emerald-600 mt-1">✓</span>{d}</li>
            ))}
          </ul>
        </div>
        <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
          <h2 className="font-bold mb-4 flex items-center gap-2 text-rose-700">
            <XCircle size={20} /> {t('donts')}
          </h2>
          <ul className="space-y-2.5 text-slate-700">
            {dd.donts.map((d, i) => (
              <li key={i} className="flex gap-2"><span className="text-rose-600 mt-1">✗</span>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
