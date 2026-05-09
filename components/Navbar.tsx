'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { locales, type Locale } from '@/i18n';
import { cn } from '@/lib/utils';
import { Compass, Menu, X, Globe, Coffee } from 'lucide-react';

const langLabels: Record<Locale, string> = {
  en: 'English',
  hi: 'हिन्दी',
  gu: 'ગુજરાતી',
  hinglish: 'Hinglish',
};

export default function Navbar({ locale }: { locale: Locale }) {
  const t = useTranslations('nav');
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const switchLang = (newLocale: Locale) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
    setLangOpen(false);
  };

  const links = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/quiz`, label: t('quiz') },
    { href: `/${locale}/careers`, label: t('careers') },
    { href: `/${locale}/parent`, label: t('parent') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/contact`, label: t('contact') },
    { href: `/${locale}/support`, label: t('support'), icon: Coffee },
  ];

  return (
    <header className="sticky top-0 z-50 glass border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-2 font-bold text-lg">
          <div className="w-9 h-9 rounded-xl gradient-bg animate-gradient-x flex items-center justify-center text-white">
            <Compass size={20} />
          </div>
          <span className="gradient-text">Career Compass</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => {
            const Icon = (l as { icon?: typeof Coffee }).icon;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  'text-sm font-medium hover:text-brand-600 transition inline-flex items-center gap-1',
                  pathname === l.href && 'text-brand-600',
                  Icon && 'text-pink-600 hover:text-pink-700'
                )}
              >
                {Icon && <Icon size={14} />}
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-slate-100 text-sm"
            >
              <Globe size={16} />
              <span className="hidden sm:inline">{langLabels[locale]}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
                {locales.map((l) => (
                  <button
                    key={l}
                    onClick={() => switchLang(l)}
                    className={cn(
                      'block w-full text-left px-4 py-2 text-sm hover:bg-brand-50',
                      l === locale && 'bg-brand-50 text-brand-700 font-semibold'
                    )}
                  >
                    {langLabels[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            href={`/${locale}/quiz`}
            className="hidden sm:inline-flex bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
          >
            {t('start')}
          </Link>

          <button onClick={() => setOpen((v) => !v)} className="md:hidden p-2">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          {links.map((l) => {
            const Icon = (l as { icon?: typeof Coffee }).icon;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'flex items-center gap-2 px-4 py-3 text-sm border-b border-slate-100',
                  Icon && 'text-pink-600 font-semibold'
                )}
              >
                {Icon && <Icon size={16} />}
                {l.label}
              </Link>
            );
          })}
          <Link
            href={`/${locale}/quiz`}
            onClick={() => setOpen(false)}
            className="block px-4 py-3 text-sm font-semibold text-brand-600"
          >
            {t('start')}
          </Link>
        </div>
      )}
    </header>
  );
}
