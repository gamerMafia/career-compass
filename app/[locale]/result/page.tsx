'use client';
import { use, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import {
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip, Cell,
} from 'recharts';
import { Download, RefreshCw, Users, Sparkles, TrendingUp, Briefcase, Lightbulb, Map } from 'lucide-react';
import TipJar from '@/components/TipJar';
import type { Recommendation } from '@/lib/recommendation';
import type { ScoreResult } from '@/lib/scoring';
import type { Recommendation12, Score12, Stream12 } from '@/lib/class12';

interface StoredResult {
  recommendation: Recommendation | Recommendation12;
  score: ScoreResult | Score12;
  lang: string;
  level?: 10 | 12;
  priorStream?: Stream12;
}

const STREAM_COLORS: Record<string, string> = {
  SCIENCE: '#6366f1', COMMERCE: '#10b981', ARTS: '#ec4899',
  DIPLOMA: '#f59e0b', ITI: '#8b5cf6',
  ENGINEERING: '#6366f1', MEDICAL: '#ef4444', COMPUTER_AI: '#06b6d4',
  RESEARCH: '#8b5cf6', DEFENCE: '#475569', PHARMACY: '#10b981',
  CA: '#10b981', BBA_MBA: '#0ea5e9', BANKING_FINANCE: '#22c55e',
  ENTREPRENEUR: '#f59e0b', DIGITAL_MARKETING: '#ec4899', ECONOMICS: '#6366f1',
  LAW: '#0f172a', IAS_UPSC: '#dc2626', DESIGN: '#ec4899',
  JOURNALISM: '#0891b2', PSYCHOLOGY: '#a855f7', TEACHING: '#16a34a',
};

export default function ResultPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const t = useTranslations('result');
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
          {t('takeQuiz')}
        </Link>
      </div>
    );
  }

  const isClass12 = data.level === 12;
  const rec = data.recommendation;
  const score = data.score;

  // Build chart data
  let radarData: { axis: string; value: number }[] = [];
  let barData: { name: string; percent: number; key: string }[] = [];
  let bestKey: string;
  let bestLabel: string;

  if (isClass12) {
    const s = score as Score12;
    const r = rec as Recommendation12;
    bestKey = r.best;
    bestLabel = r.bestName;
    barData = s.ranked.map((x) => ({ name: x.track.replace(/_/g, ' '), percent: x.percent, key: x.track }));
    radarData = barData.slice(0, 6).map((b) => ({ axis: b.name, value: b.percent }));
  } else {
    const s = score as ScoreResult;
    const r = rec as Recommendation;
    bestKey = r.best;
    bestLabel = r.best;
    barData = Object.entries(s.streamPercents).map(([k, v]) => ({ name: k, percent: v, key: k }));
    radarData = Object.entries(s.aptitudes).map(([k, v]) => ({
      axis: k.charAt(0).toUpperCase() + k.slice(1), value: v,
    }));
  }

  const handlePrint = () => window.print();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 print-area">
      {/* Hero card */}
      <div className="rounded-3xl p-8 md:p-10 gradient-bg animate-gradient-x text-white mb-8 relative overflow-hidden print:bg-brand-600">
        <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/10 rounded-full blur-3xl print:hidden" />
        <div className="relative">
          <div className="text-sm uppercase tracking-wider opacity-80 mb-2">
            {isClass12 ? `Class 12 ${(data.priorStream ?? '').toString()} → ${t('best')}` : t('best')}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3">{bestLabel}</h1>
          <div className="flex flex-wrap gap-4 items-center text-sm">
            <div className="px-4 py-1.5 bg-white/20 rounded-full">
              {t('confidence')}: <strong>{rec.confidence}%</strong>
            </div>
            {!isClass12 && (
              <div className="px-4 py-1.5 bg-white/20 rounded-full">
                Source: {(rec as Recommendation).source === 'ai' ? '🤖 AI' : '📊 Smart Match'}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="text-brand-600" size={20} />
            <h2 className="font-bold text-lg">{t('why')}</h2>
          </div>
          <p className="text-slate-700 leading-relaxed">{rec.why}</p>
          {isClass12 && (rec as Recommendation12).desc && (
            <p className="text-slate-500 text-sm mt-3">{(rec as Recommendation12).desc}</p>
          )}
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-200">
          <h2 className="font-bold text-lg mb-2 px-2">{isClass12 ? 'Track Match' : t('aptitude')}</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="axis" tick={{ fontSize: 9 }} />
                <PolarRadiusAxis tick={{ fontSize: 9 }} />
                <Radar dataKey="value" stroke="#6366f1" fill="#6366f1" fillOpacity={0.4} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-slate-200 mb-8">
        <h2 className="font-bold text-lg mb-4">{t('match')}</h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} layout="vertical" margin={{ left: 30 }}>
              <XAxis type="number" domain={[0, 100]} hide />
              <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fontWeight: 600 }} width={130} />
              <Tooltip />
              <Bar dataKey="percent" radius={[0, 8, 8, 0]}>
                {barData.map((entry) => (
                  <Cell key={entry.key} fill={STREAM_COLORS[entry.key] ?? '#6366f1'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <Briefcase className="text-emerald-600" size={20} />
            <h2 className="font-bold text-lg">{t('careers')}</h2>
          </div>
          <ul className="space-y-2">
            {rec.topCareers.map((c, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-700">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="text-amber-600" size={20} />
            <h2 className="font-bold text-lg">{t('skills')}</h2>
          </div>
          <ul className="space-y-2">
            {rec.skills.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-700">
                <span className="text-amber-500 mt-1">●</span>{s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-slate-200 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Map className="text-brand-600" size={20} />
          <h2 className="font-bold text-lg">{t('roadmap')}</h2>
        </div>
        <div className="relative space-y-4 ml-3">
          {rec.roadmap.map((step, i) => (
            <div key={i} className="relative pl-6">
              <span className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-brand-600" />
              {i < rec.roadmap.length - 1 && <span className="absolute left-1 top-4 w-0.5 h-full bg-brand-200" />}
              <p className="text-slate-700">{step}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100">
          <TrendingUp className="text-emerald-600 mb-2" size={20} />
          <div className="text-xs text-emerald-700 uppercase font-semibold">Salary</div>
          <div className="font-bold text-lg">{rec.salary}</div>
        </div>
        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <Briefcase className="text-blue-600 mb-2" size={20} />
          <div className="text-xs text-blue-700 uppercase font-semibold">Demand</div>
          <div className="font-bold text-lg">{rec.demand}</div>
        </div>
        <div className="bg-purple-50 rounded-2xl p-5 border border-purple-100">
          <Map className="text-purple-600 mb-2" size={20} />
          <div className="text-xs text-purple-700 uppercase font-semibold">Duration</div>
          <div className="font-bold text-lg">{rec.duration}</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-slate-200 mb-8 print:break-inside-avoid">
        <h2 className="font-bold text-lg mb-2">For Parents</h2>
        <p className="text-slate-700 leading-relaxed italic">“{rec.parentGuidance}”</p>
      </div>

      <div className="flex flex-wrap gap-3 justify-center print:hidden">
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-xl font-semibold"
        >
          <Download size={18} /> {t('downloadPdf')}
        </button>
        <Link href={`/${locale}/parent`} className="inline-flex items-center gap-2 bg-white border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-brand-300">
          <Users size={18} /> {t('parentBtn')}
        </Link>
        <Link href={`/${locale}/quiz`} className="inline-flex items-center gap-2 bg-white border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-brand-300">
          <RefreshCw size={18} /> {t('retake')}
        </Link>
      </div>

      <TipJar />
    </div>
  );
}
