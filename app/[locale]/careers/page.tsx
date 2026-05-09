'use client';
import { use, useState } from 'react';
import { useTranslations } from 'next-intl';
import { careers } from '@/lib/careers';
import type { Stream, Lang } from '@/lib/quizData';
import { Sparkles, TrendingUp, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const streams: { key: Stream | 'ALL'; label: string }[] = [
  { key: 'ALL', label: 'All' },
  { key: 'SCIENCE', label: 'Science' },
  { key: 'COMMERCE', label: 'Commerce' },
  { key: 'ARTS', label: 'Arts' },
  { key: 'DIPLOMA', label: 'Diploma' },
  { key: 'ITI', label: 'ITI' },
];

const STREAM_COLORS: Record<Stream, string> = {
  SCIENCE: 'bg-indigo-500',
  COMMERCE: 'bg-emerald-500',
  ARTS: 'bg-pink-500',
  DIPLOMA: 'bg-amber-500',
  ITI: 'bg-purple-500',
};

export default function CareersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const lang = locale as Lang;
  const t = useTranslations('careers');
  const [filter, setFilter] = useState<Stream | 'ALL'>('ALL');
  const [q, setQ] = useState('');

  const filtered = careers.filter(
    (c) => (filter === 'ALL' || c.stream === filter) &&
      (q === '' || c.name.toLowerCase().includes(q.toLowerCase())),
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('title')}</h1>
        <p className="text-slate-600">{t('subtitle')}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search careers..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 outline-none"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {streams.map((s) => (
            <button
              key={s.key}
              onClick={() => setFilter(s.key)}
              className={cn(
                'px-4 py-2 rounded-xl text-sm font-medium border transition',
                filter === s.key
                  ? 'bg-brand-600 text-white border-brand-600'
                  : 'bg-white border-slate-200 hover:border-brand-300'
              )}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((c) => (
          <div key={c.name} className="bg-white rounded-2xl p-5 border border-slate-200 hover:shadow-lg transition relative">
            {c.modern && (
              <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold uppercase flex items-center gap-1">
                <Sparkles size={10} /> Modern
              </span>
            )}
            <span className={cn('inline-block px-2 py-0.5 rounded text-xs font-semibold text-white mb-3', STREAM_COLORS[c.stream])}>
              {c.stream}
            </span>
            <h3 className="font-bold text-lg mb-2">{c.name}</h3>
            <p className="text-sm text-slate-600 mb-4">{c.desc[lang]}</p>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-slate-500">{t('salary')}</span><span className="font-semibold">{c.salary}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">{t('demand')}</span>
                <span className="font-semibold flex items-center gap-1"><TrendingUp size={12} /> {c.demand}</span>
              </div>
              <div className="pt-2 border-t border-slate-100">
                <div className="text-slate-500 mb-1">{t('skills')}</div>
                <div className="flex flex-wrap gap-1">
                  {c.skills.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px]">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="text-center py-16 text-slate-500">No careers match your filters.</div>
      )}
    </div>
  );
}
