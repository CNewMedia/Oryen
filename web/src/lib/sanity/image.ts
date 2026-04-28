import imageUrlBuilder from '@sanity/image-url';

/**
 * Build URLs from env only — do **not** import `getSanityClient` here. Combining
 * `@sanity/client` (serverExternal) with this module has triggered Webpack runtime
 * errors: `Cannot read properties of undefined (reading 'call')`.
 *
 * EU projects: set `NEXT_PUBLIC_SANITY_IMAGE_CDN_BASE=https://cdn.eu.sanity.io`
 * (or match your Studio API host: `api.eu` → `cdn.eu`).
 */
function getImageBuilder() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim();
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
  if (!projectId || !dataset) return null;
  const baseUrl =
    process.env.NEXT_PUBLIC_SANITY_IMAGE_CDN_BASE?.trim() ||
    'https://cdn.sanity.io';
  return imageUrlBuilder({ projectId, dataset, baseUrl });
}

export function urlForImage(source: unknown): string | undefined {
  if (!source || typeof source !== 'object') return undefined;
  const builder = getImageBuilder();
  if (!builder) return undefined;
  try {
    return builder.image(source as never).width(2400).fit('max').auto('format').url();
  } catch (e) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[ORYEN] urlForImage failed', e);
    }
    return undefined;
  }
}
