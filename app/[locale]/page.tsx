import { setRequestLocale, getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { ArrowRight, Sparkles, Brain, FileText, HeartHandshake, Globe, Gift, Beaker, Briefcase, Palette, Wrench, Cog, ChevronDown } from 'lucide-react';
import type { Locale } from '@/i18n';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const featureIcons = [Brain, Sparkles, FileText, HeartHandshake, Globe, Gift];
  const featureKeys = ['ai', 'quiz', 'report', 'parent', 'lang', 'free'] as const;

  const streams = [
    { key: 'science', icon: Beaker, color: 'from-indigo-500 to-blue-500' },
    { key: 'commerce', icon: Briefcase, color: 'from-emerald-500 to-teal-500' },
    { key: 'arts', icon: Palette, color: 'from-pink-500 to-rose-500' },
    { key: 'diploma', icon: Cog, color: 'from-amber-500 to-orange-500' },
    { key: 'iti', icon: Wrench, color: 'from-purple-500 to-fuchsia-500' },
  ] as const;

  const testimonials = [
    { name: 'Krishna Patel', role: 'Class 10, Ahmedabad', quote: 'Mane khabar nahi hati Diploma ma evdo scope che. Career Compass e badhu samjhavyu!' },
    { name: 'Mrs. Shah', role: 'Parent, Surat', quote: 'मेरे बेटे की रुचि देखकर सही रास्ता मिला। बहुत आभार।' },
    { name: 'Ravi Mehta', role: 'Class 10, Rajkot', quote: 'Quiz fun tha. AI counselor ne meri strengths exactly batayi.' },
    { name: 'Diya Joshi', role: 'Class 10, Vadodara', quote: 'મેં Arts પસંદ કરી — હવે confidence છે.' },
  ];

  const faqItems = (t.raw('faq.items') as { q: string; a: string }[]);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 gradient-bg animate-gradient-x opacity-10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/50 to-white" />
        <div className="max-w-7xl mx-auto px-4 pt-16 pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium mb-6 animate-fade-in">
            <Sparkles size={14} className="text-brand-600" />
            {t('hero.badge')}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto">
            <span className="gradient-text">{t('hero.title')}</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">{t('hero.subtitle')}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={`/${locale}/quiz`}
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-brand-600/30 transition"
            >
              {t('hero.cta')} <ArrowRight size={18} />
            </Link>
            <Link
              href={`/${locale}/careers`}
              className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-brand-300 px-7 py-3.5 rounded-xl font-semibold transition"
            >
              {t('hero.secondary')}
            </Link>
          </div>
          <div className="grid grid-cols-3 max-w-2xl mx-auto mt-12 gap-4 text-center">
            {(['stat1', 'stat2', 'stat3'] as const).map((k) => (
              <div key={k} className="p-4 rounded-2xl glass">
                <div className="text-sm font-semibold text-slate-700">{t(`hero.${k}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STREAMS */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{t('streams.title')}</h2>
          <p className="text-slate-600">{t('streams.subtitle')}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {streams.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.key}
                className="group relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-300 hover:shadow-xl transition cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center mb-4`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-bold text-lg mb-2">{t(`streams.${s.key}.name`)}</h3>
                <p className="text-sm text-slate-600">{t(`streams.${s.key}.desc`)}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{t('features.title')}</h2>
            <p className="text-slate-600">{t('features.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featureKeys.map((k, i) => {
              const Icon = featureIcons[i];
              return (
                <div key={k} className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition">
                  <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold mb-1">{t(`features.items.${k}.title`)}</h3>
                  <p className="text-sm text-slate-600">{t(`features.items.${k}.desc`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('testimonials.title')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((tm, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200">
              <p className="text-slate-700 italic mb-4">“{tm.quote}”</p>
              <div className="text-sm font-semibold">{tm.name}</div>
              <div className="text-xs text-slate-500">{tm.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">{t('faq.title')}</h2>
        <div className="space-y-3">
          {faqItems.map((f, i) => (
            <details key={i} className="group bg-white rounded-2xl border border-slate-200 p-5 open:shadow-md">
              <summary className="flex justify-between items-center cursor-pointer font-semibold list-none">
                {f.q}
                <ChevronDown size={18} className="group-open:rotate-180 transition" />
              </summary>
              <p className="mt-3 text-slate-600 text-sm">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 mb-20">
        <div className="rounded-3xl gradient-bg animate-gradient-x p-10 md:p-14 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{t('hero.title')}</h2>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">{t('hero.subtitle')}</p>
          <Link
            href={`/${locale}/quiz`}
            className="inline-flex items-center gap-2 bg-white text-brand-700 px-7 py-3.5 rounded-xl font-bold hover:scale-105 transition"
          >
            {t('hero.cta')} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
