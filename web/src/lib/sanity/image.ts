import imageUrlBuilder from '@sanity/image-url';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim();
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';

const builder =
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset })
    : null;

export function urlForImage(source: unknown): string | undefined {
  if (!builder || !source || typeof source !== 'object') return undefined;
  try {
    return builder.image(source as never).width(2400).fit('max').auto('format').url();
  } catch {
    return undefined;
  }
}
