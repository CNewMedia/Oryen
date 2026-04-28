import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';

import { TrackingScripts } from '@/components/analytics/tracking-scripts';
import { PremiumChrome } from '@/components/premium/premium-page-effects';
import { SiteFooter, type FooterNavItem } from '@/components/shell/site-footer';
import { SiteHeader, type HeaderNavItem } from '@/components/shell/site-header';
import { LocaleHtmlLang } from '@/components/system/locale-html-lang';
import { defaultOgImageField } from '@/lib/metadata/defaults';
import { getCachedSiteSettings } from '@/lib/sanity/cached-loaders';
import { locales } from '@/i18n/routing';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://oryen.be';

/**
 * CMS-backed routes: always revalidate so Studio publishes are not stuck behind a stale RSC cache.
 * (Same freshness model for singletons, overviews, and detail pages.)
 */
export const revalidate = 0;

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
  const ogImages = defaultOgImageField();
  return {
    metadataBase: new URL(siteUrl),
    // String fallback only — no `title.template`; routes set the full string via `title.absolute`.
    title: settings.defaultMetaTitle,
    description: settings.defaultMetaDescription,
    openGraph: {
      title: settings.defaultOgTitle ?? settings.defaultMetaTitle,
      description: settings.defaultOgDescription ?? settings.defaultMetaDescription,
      type: 'website',
      siteName: settings.siteTitle,
      ...(ogImages ? { images: ogImages } : {}),
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
  const [messages, settings, tNav] = await Promise.all([
    getMessages(),
    getCachedSiteSettings(locale),
    getTranslations({ locale, namespace: 'Nav' }),
  ]);

  // `/over-oryen` was deprecated in Wave 2: the trust/people role is carried
  // by `/team`; the positioning + creds live on the homepage. The route still
  // resolves (redirects to `/team`) for backward compatibility, but it is no
  // longer part of the primary/utility nav.
  const primaryNavItems: HeaderNavItem[] = [
    { label: tNav('aanpak'), href: '/aanpak' },
    { label: tNav('cases'), href: '/cases' },
    { label: tNav('team'), href: '/team' },
    { label: tNav('contact'), href: '/contact' },
  ];
  const footerPrimary: FooterNavItem[] = primaryNavItems;

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
          openMenuLabel={tNav('openMenu')}
          closeMenuLabel={tNav('closeMenu')}
          primaryLabel={tNav('primary')}
          navItems={primaryNavItems}
        />
        <main>{children}</main>
      </NextIntlClientProvider>
      <SiteFooter
        brandShort={settings.footerBrandShort}
        tagline={settings.footerTagline}
        domain={settings.footerDomain}
        primaryLinks={footerPrimary}
        primaryLabel={tNav('utility')}
        legalLinks={settings.legalLinks}
        legalLabel={tNav('legal')}
        socialLinks={settings.socialLinks}
      />
    </>
  );
}
