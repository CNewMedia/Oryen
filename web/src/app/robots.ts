import type { MetadataRoute } from 'next';

import { getSiteUrl } from '@/lib/site-url';

const SITE_URL = getSiteUrl();

/**
 * Crawler policy for the ORYEN site.
 *
 * - Allow all public pages.
 * - Disallow Studio, internal API, Next runtime assets, deprecated redirects,
 *   insight tag facets (thin/duplicate), and the thank-you confirmation.
 * - Reference the sitemap so search engines discover localized routes and
 *   dynamic cases/insights.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/studio',
          '/studio/',
          '/api',
          '/api/',
          '/_next',
          '/*/bedankt',
          '/*/thank-you',
          '/*/reality-check',
          '/*/over-oryen',
          '/*/about',
          '/*/insights/tag/',
          '/*/inzichten/tag/',
        ],
      },
    ],
    sitemap: `${SITE_URL.replace(/\/$/, '')}/sitemap.xml`,
    host: SITE_URL.replace(/\/$/, ''),
  };
}
