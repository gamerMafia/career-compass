'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Compass, Coffee } from 'lucide-react';
import type { Locale } from '@/i18n';

export default function Footer({ locale }: { locale: Locale }) {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');
  return (
    <footer className="border-t border-slate-200 bg-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-bold mb-2">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white">
              <Compass size={16} />
            </div>
            <span className="gradient-text">Career Compass</span>
          </div>
          <p className="text-sm text-slate-600">{t('tag')}</p>
          <Link
            href={`/${locale}/support`}
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-white text-sm font-semibold hover:opacity-90 transition"
          >
            <Coffee size={14} /> {nav('support')}
          </Link>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Product</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href={`/${locale}/quiz`} className="hover:text-brand-600">{nav('quiz')}</Link></li>
            <li><Link href={`/${locale}/careers`} className="hover:text-brand-600">{nav('careers')}</Link></li>
            <li><Link href={`/${locale}/parent`} className="hover:text-brand-600">{nav('parent')}</Link></li>
            <li><Link href={`/${locale}/support`} className="hover:text-pink-600 inline-flex items-center gap-1"><Coffee size={12} /> {nav('support')}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href={`/${locale}/about`} className="hover:text-brand-600">{nav('about')}</Link></li>
            <li><Link href={`/${locale}/contact`} className="hover:text-brand-600">{nav('contact')}</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Career Compass. {t('rights')}
      </div>
    </footer>
  );
}
