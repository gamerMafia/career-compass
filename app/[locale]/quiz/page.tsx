'use client';
import { useState, use, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { quizQuestions, type Lang } from '@/lib/quizData';
import { Q12_BANK, type Stream12 } from '@/lib/class12';
import { ArrowLeft, ArrowRight, Sparkles, CheckCircle2, GraduationCap, Beaker, Briefcase, Palette } from 'lucide-react';
import { cn } from '@/lib/utils';

type Stage = 'level' | 'stream' | 'questions';
type Level = 10 | 12;

export default function QuizPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const lang = locale as Lang;
  const t = useTranslations('quiz');
  const router = useRouter();

  const [stage, setStage] = useState<Stage>('level');
  const [level, setLevel] = useState<Level | null>(null);
  const [stream12, setStream12] = useState<Stream12 | null>(null);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitting, setSubmitting] = useState(false);

  const questions = useMemo(() => {
    if (level === 12 && stream12) return Q12_BANK[stream12];
    return quizQuestions;
  }, [level, stream12]);

  const total = questions.length;
  const q = questions[step];
  const progress = total ? Math.round(((step + 1) / total) * 100) : 0;

  const choose = (idx: number) => setAnswers((p) => ({ ...p, [q.id]: idx }));

  const next = async () => {
    if (step < total - 1) {
      setStep((s) => s + 1);
    } else {
      setSubmitting(true);
      try {
        const res = await fetch('/api/recommend', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ answers, lang, level, priorStream: stream12 }),
        });
        const data = await res.json();
        localStorage.setItem('cc_result', JSON.stringify({ ...data, lang, ts: Date.now() }));
        router.push(`/${locale}/result`);
      } catch (e) {
        console.error(e);
        setSubmitting(false);
      }
    }
  };

  // ---------- Loading ----------
  if (submitting) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
        <div className="relative w-24 h-24 mb-6">
          <div className="absolute inset-0 rounded-full gradient-bg animate-gradient-x animate-pulse" />
          <Sparkles className="absolute inset-0 m-auto text-white" size={36} />
        </div>
        <h2 className="text-2xl font-bold text-center max-w-lg">{t('loading')}</h2>
        <p className="text-slate-600 mt-2 text-center">{t('loadingSub')}</p>
      </div>
    );
  }

  // ---------- Stage 1: Level ----------
  if (stage === 'level') {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto rounded-2xl gradient-bg flex items-center justify-center text-white mb-4">
            <GraduationCap size={28} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('selectLevel')}</h1>
          <p className="text-slate-600">{t('intro')}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <button
            onClick={() => { setLevel(10); setStage('questions'); }}
            className="group bg-white rounded-2xl p-7 border-2 border-slate-200 hover:border-brand-500 hover:shadow-xl text-left transition"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center text-xl font-extrabold mb-4">10</div>
            <h3 className="font-bold text-lg mb-1">{t('class10')}</h3>
            <p className="text-sm text-slate-600 mb-3">{t('class10Desc')}</p>
            <span className="text-brand-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">{t('start')} <ArrowRight size={14} /></span>
          </button>
          <button
            onClick={() => { setLevel(12); setStage('stream'); }}
            className="group bg-white rounded-2xl p-7 border-2 border-slate-200 hover:border-brand-500 hover:shadow-xl text-left transition"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-orange-500 text-white flex items-center justify-center text-xl font-extrabold mb-4">12</div>
            <h3 className="font-bold text-lg mb-1">{t('class12')}</h3>
            <p className="text-sm text-slate-600 mb-3">{t('class12Desc')}</p>
            <span className="text-brand-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">{t('start')} <ArrowRight size={14} /></span>
          </button>
        </div>
      </div>
    );
  }

  // ---------- Stage 2: Stream picker (only for class 12) ----------
  if (stage === 'stream') {
    const streams: { key: Stream12; label: string; Icon: typeof Beaker; color: string }[] = [
      { key: 'SCIENCE', label: t('science'), Icon: Beaker, color: 'from-indigo-500 to-blue-500' },
      { key: 'COMMERCE', label: t('commerce'), Icon: Briefcase, color: 'from-emerald-500 to-teal-500' },
      { key: 'ARTS', label: t('arts'), Icon: Palette, color: 'from-pink-500 to-rose-500' },
    ];
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <button onClick={() => setStage('level')} className="text-sm text-slate-500 hover:text-brand-600 mb-4 inline-flex items-center gap-1">
          <ArrowLeft size={14} /> Back
        </button>
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('selectStream')}</h1>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {streams.map((s) => (
            <button
              key={s.key}
              onClick={() => { setStream12(s.key); setStage('questions'); }}
              className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-brand-500 hover:shadow-xl text-left transition"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center mb-4`}>
                <s.Icon size={22} />
              </div>
              <h3 className="font-bold text-lg">{s.label}</h3>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ---------- Stage 3: Questions ----------
  const selected = answers[q.id];
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="mb-6">
        <div className="flex justify-between text-xs text-slate-500 mb-2">
          <span>{t('progress', { current: step + 1, total })}</span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full gradient-bg animate-gradient-x transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={q.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
          className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-6 leading-snug">{q.question[lang]}</h2>
          <div className="space-y-3">
            {q.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => choose(idx)}
                className={cn(
                  'w-full text-left px-5 py-4 rounded-xl border-2 transition flex items-center justify-between',
                  selected === idx
                    ? 'border-brand-600 bg-brand-50 text-brand-900'
                    : 'border-slate-200 hover:border-brand-300 hover:bg-slate-50'
                )}
              >
                <span className="font-medium">{opt.text[lang]}</span>
                {selected === idx && <CheckCircle2 size={20} className="text-brand-600 shrink-0" />}
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between mt-6">
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-200 disabled:opacity-40 hover:bg-slate-50"
        >
          <ArrowLeft size={16} /> {t('back')}
        </button>
        <button
          onClick={next}
          disabled={selected === undefined}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold disabled:opacity-40"
        >
          {step === total - 1 ? t('submit') : t('next')} <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
