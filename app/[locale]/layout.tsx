import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/next';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar locale={locale as Locale} />
          <main className="flex-1">{children}</main>
          <Footer locale={locale as Locale} />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
