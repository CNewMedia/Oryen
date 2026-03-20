import type { MetadataRoute } from 'next';

import { siteUrl } from '@/lib/seo/metadata';
import { insightsIndexQuery, sectorsIndexQuery } from '@/lib/sanity/queries';
import { sanityFetchIfConfigured } from '@/lib/sanity/fetch';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteUrl();
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/services',
    '/insights',
    '/about',
    '/contact',
  ].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));

  const [sectors, insights] = await Promise.all([
    sanityFetchIfConfigured<Array<{ slug: string }>>({
      query: sectorsIndexQuery,
      tags: ['sector'],
    }),
    sanityFetchIfConfigured<Array<{ slug: string }>>({
      query: insightsIndexQuery,
      tags: ['insight'],
    }),
  ]);

  const dynamic: MetadataRoute.Sitemap = [];

  for (const s of sectors ?? []) {
    dynamic.push({
      url: `${base}/sectors/${s.slug}`,
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }
  for (const s of insights ?? []) {
    dynamic.push({
      url: `${base}/insights/${s.slug}`,
      changeFrequency: 'weekly',
      priority: 0.5,
    });
  }

  return [...staticRoutes, ...dynamic];
}
