import type { MetadataRoute } from 'next';

import { getSiteUrl } from '@/lib/site-url';

const SITE_URL = getSiteUrl();

/**
 * Crawler policy for the ORYEN site.
 *
 * - Allow public pages (Reality Check lives on /aanbod|/offer; team on /team;
 *   insights on /inzichten|/insights).
 * - Block Studio, API, thank-you, and insight tag facets.
 * - Disallow /_next but allow static chunks for rendering.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/_next/static'],
        disallow: [
          '/studio',
          '/studio/',
          '/api',
          '/api/',
          '/_next',
          '/*/bedankt',
          '/*/thank-you',
          '/*/insights/tag/',
          '/*/inzichten/tag/',
        ],
      },
    ],
    sitemap: `${SITE_URL.replace(/\/$/, '')}/sitemap.xml`,
    host: SITE_URL.replace(/\/$/, ''),
  };
}
