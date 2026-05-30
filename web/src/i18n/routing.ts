import { defineRouting } from 'next-intl/routing';

import { getSiteUrl } from '@/lib/site-url';

export const locales = ['nl', 'en'] as const;
export type Locale = (typeof locales)[number];

/** Single source for localized path segments (used by next-intl + canonical URLs). */
export const localizedPathnames = {
  '/': '/',
  '/aanbod': { nl: '/aanbod', en: '/offer' },
  '/aanpak': { nl: '/aanpak', en: '/approach' },
  '/cases': '/cases',
  '/insights': { nl: '/inzichten', en: '/insights' },
  '/over-oryen': { nl: '/over-oryen', en: '/about' },
  '/team': '/team',
  '/contact': '/contact',
  '/reality-check': '/reality-check',
  '/bedankt': { nl: '/bedankt', en: '/thank-you' },
  '/privacy': '/privacy',
  '/cookies': '/cookies',
} as const;

export type PathnameHref = keyof typeof localizedPathnames;

export const routing = defineRouting({
  locales,
  defaultLocale: 'nl',
  /** Do not use Accept-Language or locale cookie — everyone defaults to Dutch unless they open `/en`. */
  localeDetection: false,
  localePrefix: 'always',
  pathnames: localizedPathnames,
});

/** Localized path segment for a locale (leading slash, no locale prefix). */
export function getLocalizedPathname(locale: string, href: PathnameHref): string {
  const def = localizedPathnames[href];
  if (typeof def === 'string') return def;
  return locale === 'en' ? def.en : def.nl;
}

/** Full absolute canonical URL for SEO `alternates.canonical`. */
export function absoluteCanonicalUrl(locale: string, href: PathnameHref): string {
  const base = getSiteUrl().replace(/\/$/, '');
  const seg = getLocalizedPathname(locale, href);
  const path = seg === '/' ? '' : seg;
  return `${base}/${locale}${path}`;
}
