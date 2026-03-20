import type { MetadataRoute } from 'next';

import { siteUrl } from '@/lib/seo/metadata';
import {
  caseStudyIndexQuery,
  insightArticleIndexQuery,
} from '@/lib/sanity/queries';
import { sanityFetchIfConfigured } from '@/lib/sanity/fetch';

const staticPaths = [
  '',
  '/reality-check',
  '/aanbod',
  '/casestudies',
  '/over-ons',
  '/contact',
  '/insights',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteUrl();
  const staticRoutes: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));

  const [caseStudies, insights] = await Promise.all([
    sanityFetchIfConfigured<Array<{ slug: string }>>({
      query: caseStudyIndexQuery,
      tags: ['caseStudy'],
    }),
    sanityFetchIfConfigured<Array<{ slug: string }>>({
      query: insightArticleIndexQuery,
      tags: ['insightArticle'],
    }),
  ]);

  const dynamic: MetadataRoute.Sitemap = [];

  for (const s of caseStudies ?? []) {
    dynamic.push({
      url: `${base}/casestudies/${s.slug}`,
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
