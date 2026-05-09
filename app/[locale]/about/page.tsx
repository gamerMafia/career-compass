import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Heart, Users, Globe, Target } from 'lucide-react';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">{t('title')}</h1>
      <p className="text-lg text-slate-700 mb-4">{t('p1')}</p>
      <p className="text-lg text-slate-700 mb-10">{t('p2')}</p>
      <div className="rounded-2xl gradient-bg text-white p-8 mb-10">
        <Target className="mb-3" />
        <h2 className="font-bold text-xl mb-2">{t('mission')}</h2>
        <p>{t('missionText')}</p>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {[Heart, Users, Globe].map((Icon, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200">
            <Icon className="text-brand-600 mb-2" />
            <div className="font-semibold">
              {['Built with care', 'For every student', 'In your language'][i]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
