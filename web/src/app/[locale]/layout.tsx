import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';

import { PremiumChrome } from '@/components/premium/premium-page-effects';
import { SiteFooter } from '@/components/shell/site-footer';
import { SiteHeader } from '@/components/shell/site-header';
import { LocaleHtmlLang } from '@/components/system/locale-html-lang';
import { locales } from '@/i18n/routing';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const g = await getTranslations({ locale, namespace: 'Global' });

  return (
    <>
      <LocaleHtmlLang locale={locale} />
      <PremiumChrome />
      <NextIntlClientProvider locale={locale} messages={messages}>
        <SiteHeader />
        <main>{children}</main>
      </NextIntlClientProvider>
      <SiteFooter
        brandShort={g('footer.brandShort')}
        tagline={g('footer.tagline')}
        domain={g('footer.domain')}
      />
    </>
  );
}
