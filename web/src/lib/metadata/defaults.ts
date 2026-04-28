import type { Metadata } from 'next';

import type { PathnameHref } from '@/i18n/routing';
import { absoluteCanonicalUrl, getLocalizedPathname } from '@/i18n/routing';
import { siteImages } from '@/lib/site-images';

/**
 * Strategy B (single rule): every page sets the full `<title>` string via `absolute`,
 * so the locale layout must not use `title.template` (avoids "… | ORYEN | ORYEN").
 */
export function documentTitleAbsolute(fullTitle: string): Metadata['title'] {
  return { absolute: fullTitle };
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://oryen.be';

/** Make OG `images[].url` absolute (Next expects absolute URLs for social cards). */
export function absoluteOgImageUrl(url: string): string {
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  return `${SITE_URL.replace(/\/$/, '')}${url.startsWith('/') ? '' : '/'}${url}`;
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
        : `${SITE_URL.replace(/\/$/, '')}${raw.startsWith('/') ? '' : '/'}${raw}`;
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
  href: PathnameHref
): Metadata['alternates'] {
  return {
    canonical: absoluteCanonicalUrl(locale, href),
    languages: {
      nl: absoluteCanonicalUrl('nl', href),
      en: absoluteCanonicalUrl('en', href),
    },
  };
}

/** Canonical for dynamic routes (case/insight slug, tag filter). */
/** Case study detail — `/cases` is the same segment for nl and en. */
export function alternatesCaseDetail(locale: string, slug: string): Metadata['alternates'] {
  const base = SITE_URL.replace(/\/$/, '');
  const nl = `${base}/nl/cases/${slug}`;
  const en = `${base}/en/cases/${slug}`;
  return {
    canonical: locale === 'en' ? en : nl,
    languages: { nl, en },
  };
}

/** Insight article — NL uses `/inzichten`, EN uses `/insights`. */
export function alternatesInsightDetail(locale: string, slug: string): Metadata['alternates'] {
  const base = SITE_URL.replace(/\/$/, '');
  const nl = `${base}/nl${getLocalizedPathname('nl', '/insights')}/${slug}`;
  const en = `${base}/en${getLocalizedPathname('en', '/insights')}/${slug}`;
  return {
    canonical: locale === 'en' ? en : nl,
    languages: { nl, en },
  };
}

/** Insights tag filter. */
export function alternatesInsightTag(locale: string, tag: string): Metadata['alternates'] {
  const base = SITE_URL.replace(/\/$/, '');
  const enc = encodeURIComponent(tag);
  const nl = `${base}/nl${getLocalizedPathname('nl', '/insights')}/tag/${enc}`;
  const en = `${base}/en${getLocalizedPathname('en', '/insights')}/tag/${enc}`;
  return {
    canonical: locale === 'en' ? en : nl,
    languages: { nl, en },
  };
}
