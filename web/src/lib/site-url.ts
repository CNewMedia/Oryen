/** Canonical public origin — never use the Vercel default hostname in metadata. */
export const PRODUCTION_SITE_URL = 'https://oryen.be';

/**
 * Origin for metadataBase, canonicals, Open Graph, sitemap, and robots.
 *
 * - Production builds (VERCEL_ENV=production) always use oryen.be.
 * - Any NEXT_PUBLIC_SITE_URL pointing at *.vercel.app is ignored (common misconfig).
 * - Fallback: https://oryen.be
 *
 * For local dev with localhost canonicals, set in `.env.local`:
 *   NEXT_PUBLIC_SITE_URL=http://localhost:3000
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (process.env.VERCEL_ENV === 'production') {
    return PRODUCTION_SITE_URL;
  }

  if (fromEnv) {
    const normalized = fromEnv.replace(/\/$/, '');
    if (normalized.includes('vercel.app')) {
      return PRODUCTION_SITE_URL;
    }
    return normalized;
  }

  return PRODUCTION_SITE_URL;
}
