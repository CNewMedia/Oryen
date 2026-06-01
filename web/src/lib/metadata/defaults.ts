import type { Metadata } from 'next';

import type { StaticPathnameHref } from '@/i18n/routing';
import { absoluteCanonicalUrl, getLocalizedPathname } from '@/i18n/routing';
import { getInsightSlugPair } from '@/lib/insights/insight-slug-pairs';
import { siteImages } from '@/lib/site-images';
import { getSiteUrl } from '@/lib/site-url';

/**
 * Strategy B (single rule): every page sets the full `<title>` string via `absolute`,
 * so the locale layout must not use `title.template` (avoids "… | ORYEN | ORYEN").
 */
export function documentTitleAbsolute(fullTitle: string): Metadata['title'] {
  return { absolute: fullTitle };
}

/** Make OG `images[].url` absolute (Next expects absolute URLs for social cards). */
export function absoluteOgImageUrl(url: string): string {
  const siteUrl = getSiteUrl().replace(/\/$/, '');
  if (url.startsWith('http://') || url.startsWith('https://')) {
    if (url.includes('vercel.app')) {
      const path = url.replace(/^https?:\/\/[^/]+/, '') || '/';
      return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
    }
    return url;
  }
  return `${siteUrl}${url.startsWith('/') ? '' : '/'}${url}`;
}

/**
 * Default OG image when a route has no page-specific visual.
 * `NEXT_PUBLIC_OG_IMAGE_URL` overrides; otherwise uses the homepage hero asset
 * (`siteImages.hero`) so production never silently omits `openGraph.images`.
 */
export function defaultOgImageField(): NonNullable<Metadata['openGraph']>['images'] {
  const raw = process.env.NEXT_PUBLIC_OG_IMAGE_URL?.trim();
  if (raw) {
    const url =
      raw.startsWith('http://') || raw.startsWith('https://')
        ? raw
        : `${getSiteUrl().replace(/\/$/, '')}${raw.startsWith('/') ? '' : '/'}${raw}`;
    return [{ url }];
  }
  return [{ url: absoluteOgImageUrl(siteImages.hero) }];
}

/** Per-page hero wins; otherwise default OG (env override or `siteImages.hero`). */
export function ogImagesForPage(
  heroUrl: string | null | undefined
): NonNullable<Metadata['openGraph']>['images'] {
  if (heroUrl) return [{ url: absoluteOgImageUrl(heroUrl) }];
  return defaultOgImageField();
}

export function alternatesForPath(
  locale: string,
  href: StaticPathnameHref
): Metadata['alternates'] {
  return {
    canonical: absoluteCanonicalUrl(locale, href),
    languages: {
      nl: absoluteCanonicalUrl('nl', href),
      en: absoluteCanonicalUrl('en', href),
    },
  };
}

/** Insights overview — nl ↔ en hub. */
export function alternatesInsightsOverview(locale: string): Metadata['alternates'] {
  return alternatesForPath(locale, '/insights');
}

/** Canonical for dynamic routes (case/insight slug, tag filter). */
/** Case study detail — `/cases` is the same segment for nl and en. */
export function alternatesCaseDetail(locale: string, slug: string): Metadata['alternates'] {
  const base = getSiteUrl().replace(/\/$/, '');
  const nl = `${base}/nl/cases/${slug}`;
  const en = `${base}/en/cases/${slug}`;
  return {
    canonical: locale === 'en' ? en : nl,
    languages: { nl, en },
  };
}

/** Insight article — cross-locale hreflang for paired file articles. */
export function alternatesInsightDetail(locale: string, slug: string): Metadata['alternates'] {
  const base = getSiteUrl().replace(/\/$/, '');
  const pair = getInsightSlugPair(locale, slug);
  if (pair) {
    const nl = `${base}/nl${getLocalizedPathname('nl', '/insights')}/${pair.nl}`;
    const en = `${base}/en${getLocalizedPathname('en', '/insights')}/${pair.en}`;
    return {
      canonical: locale === 'en' ? en : nl,
      languages: { nl, en },
    };
  }
  const canonical = `${base}/${locale}${getLocalizedPathname(locale, '/insights')}/${slug}`;
  return {
    canonical,
    languages: { [locale]: canonical },
  };
}

/** Insights tag filter. */
export function alternatesInsightTag(locale: string, tag: string): Metadata['alternates'] {
  const base = getSiteUrl().replace(/\/$/, '');
  const enc = encodeURIComponent(tag);
  const nl = `${base}/nl${getLocalizedPathname('nl', '/insights')}/tag/${enc}`;
  const en = `${base}/en${getLocalizedPathname('en', '/insights')}/tag/${enc}`;
  return {
    canonical: locale === 'en' ? en : nl,
    languages: { nl, en },
  };
}
