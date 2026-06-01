import type { MetadataRoute } from 'next';

import {
  absoluteCanonicalUrl,
  getLocalizedPathname,
  locales,
  type StaticPathnameHref,
} from '@/i18n/routing';
import { loadCaseStudyList } from '@/lib/sanity/load-case-studies';
import { getInsightSlugPair } from '@/lib/insights/insight-slug-pairs';
import { loadMergedInsightArticleList } from '@/lib/insights/merge-insight-lists';

import { getSiteUrl } from '@/lib/site-url';

const SITE_URL = getSiteUrl().replace(/\/$/, '');

/** Canonical public routes (homepage + static pages + overview pages).
 *  Excluded: `/bedankt`, `/privacy`, `/cookies`, `/insights/tag/*`, and legacy
 *  redirects (`/reality-check`, `/over-oryen`, `/about`) that 301 to canonical URLs. */
const STATIC_ROUTES: StaticPathnameHref[] = [
  '/',
  '/aanpak',
  '/aanbod',
  '/cases',
  '/team',
  '/contact',
  '/insights',
];

function priorityFor(href: StaticPathnameHref): number {
  if (href === '/') return 1;
  if (href === '/aanbod') return 0.9;
  if (href === '/aanpak') return 0.8;
  return 0.7;
}

function changeFreqFor(
  href: StaticPathnameHref
): MetadataRoute.Sitemap[number]['changeFrequency'] {
  if (href === '/cases' || href === '/insights') return 'weekly';
  return 'monthly';
}

/** Shared `alternates.languages` map for a given canonical key. */
function languagesFor(href: StaticPathnameHref): Record<string, string> {
  return Object.fromEntries(locales.map((l) => [l, absoluteCanonicalUrl(l, href)]));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // Static public routes × locales.
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.flatMap((href) => {
    const languages = languagesFor(href);
    return locales.map((locale) => ({
      url: absoluteCanonicalUrl(locale, href),
      lastModified: now,
      changeFrequency: changeFreqFor(href),
      priority: priorityFor(href),
      alternates: { languages },
    }));
  });

  // Dynamic: case studies per locale.
  const caseLists = await Promise.all(
    locales.map(async (locale) => ({ locale, list: await loadCaseStudyList(locale) }))
  );
  const caseEntries: MetadataRoute.Sitemap = caseLists.flatMap(({ locale, list }) => {
    const base = getLocalizedPathname(locale, '/cases');
    return list
      .filter((c) => c.slug)
      .map((c) => ({
        url: `${SITE_URL}/${locale}${base}/${c.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }));
  });

  // Dynamic: insight articles per locale.
  const insightLists = await Promise.all(
    locales.map(async (locale) => ({
      locale,
      list: await loadMergedInsightArticleList(locale),
    }))
  );
  const insightEntries: MetadataRoute.Sitemap = insightLists.flatMap(({ locale, list }) => {
    const base = getLocalizedPathname(locale, '/insights');
    return list
      .filter((a) => a.slug)
      .map((a) => {
        const lastModified = a.publishedAt ? new Date(a.publishedAt) : now;
        const isFileArticle = a._id.startsWith('file:');
        const pair =
          isFileArticle && a.slug
            ? getInsightSlugPair(locale, a.slug)
            : null;
        const languages = pair
          ? {
              nl: `${SITE_URL}/nl${getLocalizedPathname('nl', '/insights')}/${pair.nl}`,
              en: `${SITE_URL}/en${getLocalizedPathname('en', '/insights')}/${pair.en}`,
            }
          : undefined;
        return {
          url: `${SITE_URL}/${locale}${base}/${a.slug}`,
          lastModified,
          changeFrequency: 'monthly' as const,
          priority: isFileArticle ? 0.7 : 0.5,
          ...(languages ? { alternates: { languages } } : {}),
        };
      });
  });

  return [...staticEntries, ...caseEntries, ...insightEntries];
}
