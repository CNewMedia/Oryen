import { createClient, type SanityClient } from '@sanity/client';

let _client: SanityClient | null | undefined;

export function getSanityClient(): SanityClient | null {
  if (_client !== undefined) return _client;
  const id = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim();
  if (!id) {
    _client = null;
    return _client;
  }
  try {
    const readToken =
      process.env.SANITY_API_READ_TOKEN?.trim() ||
      process.env.SANITY_API_TOKEN?.trim() ||
      undefined;
    _client = createClient({
      projectId: id,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
      apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01',
      /**
       * `useCdn: true` (Sanity API CDN) caches GROQ responses — Studio edits and new
       * image asset refs can lag or look "stuck" on the site. Default off; set
       * `SANITY_USE_CDN=true` if you prefer cached reads at the cost of freshness.
       */
      useCdn: process.env.SANITY_USE_CDN === 'true',
      /**
       * Private datasets and some project settings require a token for GROQ reads.
       * Use a read-only token; never use NEXT_PUBLIC_* for tokens.
       */
      ...(readToken ? { token: readToken } : {}),
    });
  } catch {
    _client = null;
  }
  return _client;
}
