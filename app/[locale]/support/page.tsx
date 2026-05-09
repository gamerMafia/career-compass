import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Coffee, Heart, Sparkles, Users } from 'lucide-react';
import TipJar from '@/components/TipJar';

export default async function SupportPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('support');

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 text-white flex items-center justify-center mb-4">
          <Coffee size={28} />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('title')}</h1>
        <p className="text-slate-600 max-w-xl mx-auto">{t('subtitle')}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {[
          { Icon: Heart, label: t('reason1') },
          { Icon: Users, label: t('reason2') },
          { Icon: Sparkles, label: t('reason3') },
        ].map((c, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 text-center">
            <c.Icon className="text-brand-600 mx-auto mb-2" />
            <p className="text-sm text-slate-700">{c.label}</p>
          </div>
        ))}
      </div>

      <TipJar persistent />
    </div>
  );
}
