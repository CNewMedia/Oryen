import type { MetadataRoute } from 'next';

import {
  absoluteCanonicalUrl,
  getLocalizedPathname,
  locales,
  type PathnameHref,
} from '@/i18n/routing';
import { loadCaseStudyList } from '@/lib/sanity/load-case-studies';
import { loadInsightArticleList } from '@/lib/sanity/load-insights';

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://oryen.be').replace(/\/$/, '');

/** Canonical public routes (homepage + static pages + overview pages).
 *  Deprecated / noindex routes (`/over-oryen`, `/bedankt`, `/reality-check`,
 *  `/privacy`, `/cookies`, `/insights/tag/*`) are intentionally excluded. */
const STATIC_ROUTES: PathnameHref[] = [
  '/',
  '/aanpak',
  '/aanbod',
  '/cases',
  '/insights',
  '/team',
  '/contact',
];

function priorityFor(href: PathnameHref): number {
  if (href === '/') return 1;
  if (href === '/aanbod') return 0.9;
  if (href === '/aanpak') return 0.8;
  return 0.7;
}

function changeFreqFor(href: PathnameHref): MetadataRoute.Sitemap[number]['changeFrequency'] {
  if (href === '/cases' || href === '/insights') return 'weekly';
  return 'monthly';
}

/** Shared `alternates.languages` map for a given canonical key. */
function languagesFor(href: PathnameHref): Record<string, string> {
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
    locales.map(async (locale) => ({ locale, list: await loadInsightArticleList(locale) }))
  );
  const insightEntries: MetadataRoute.Sitemap = insightLists.flatMap(({ locale, list }) => {
    const base = getLocalizedPathname(locale, '/insights');
    return list
      .filter((a) => a.slug)
      .map((a) => {
        const lastModified = a.publishedAt ? new Date(a.publishedAt) : now;
        return {
          url: `${SITE_URL}/${locale}${base}/${a.slug}`,
          lastModified,
          changeFrequency: 'monthly' as const,
          priority: 0.5,
        };
      });
  });

  return [...staticEntries, ...caseEntries, ...insightEntries];
}
