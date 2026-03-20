import createImageUrlBuilder from '@sanity/image-url';

import { getSanityClient } from './client';

const builder = () => createImageUrlBuilder(getSanityClient());

/** Sanity image field / asset reference from GROQ. */
export function urlForImage(source: Parameters<ReturnType<typeof builder>['image']>[0]) {
  return builder().image(source);
}
