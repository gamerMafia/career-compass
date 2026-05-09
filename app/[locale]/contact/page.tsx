'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Mail, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [sent, setSent] = useState(false);
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">{t('title')}</h1>
        <p className="text-slate-600">{t('subtitle')}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="space-y-4"
          >
            <input required placeholder={t('name')} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 outline-none" />
            <input required type="email" placeholder={t('email')} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 outline-none" />
            <input placeholder={t('school')} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 outline-none" />
            <textarea required rows={4} placeholder={t('message')} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 outline-none" />
            <button className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2">
              <Send size={16} /> {t('send')}
            </button>
            {sent && (
              <div className="flex items-center gap-2 text-emerald-700 text-sm bg-emerald-50 rounded-lg px-3 py-2">
                <CheckCircle2 size={16} /> {t('sent')}
              </div>
            )}
          </form>
        </div>
        <div className="space-y-4">
          <a href="mailto:nik.tejani008@gmail.com" className="flex items-center gap-3 p-5 rounded-2xl bg-white border border-slate-200 hover:border-brand-300">
            <Mail className="text-brand-600" /><span>nik.tejani008@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
