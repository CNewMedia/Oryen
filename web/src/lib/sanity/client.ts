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
    _client = createClient({
      projectId: id,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
      apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01',
      useCdn: process.env.NODE_ENV === 'production',
    });
  } catch {
    _client = null;
  }
  return _client;
}
