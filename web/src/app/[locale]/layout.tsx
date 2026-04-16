import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';

import { TrackingScripts } from '@/components/analytics/tracking-scripts';
import { PremiumChrome } from '@/components/premium/premium-page-effects';
import { SiteFooter } from '@/components/shell/site-footer';
import { SiteHeader } from '@/components/shell/site-header';
import { LocaleHtmlLang } from '@/components/system/locale-html-lang';
import { getCachedSiteSettings } from '@/lib/sanity/cached-loaders';
import { locales } from '@/i18n/routing';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://oryen.be';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as (typeof locales)[number])) {
    return {};
  }
  const settings = await getCachedSiteSettings(locale);
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: settings.defaultMetaTitle,
      template: `%s | ${settings.siteTitle}`,
    },
    description: settings.defaultMetaDescription,
    openGraph: {
      title: settings.defaultOgTitle ?? settings.defaultMetaTitle,
      description: settings.defaultOgDescription ?? settings.defaultMetaDescription,
      type: 'website',
    },
    robots: settings.defaultRobotsIndex ? undefined : { index: false, follow: false },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const settings = await getCachedSiteSettings(locale);

  return (
    <>
      <LocaleHtmlLang locale={locale} />
      <PremiumChrome />
      <TrackingScripts tracking={settings.tracking} />
      <NextIntlClientProvider locale={locale} messages={messages}>
        <SiteHeader
          brandWordmark={settings.headerBrandWordmark}
          tagline={settings.headerTagline}
          ctaLabel={settings.headerCtaLabel}
        />
        <main>{children}</main>
      </NextIntlClientProvider>
      <SiteFooter
        brandShort={settings.footerBrandShort}
        tagline={settings.footerTagline}
        domain={settings.footerDomain}
      />
    </>
  );
}
