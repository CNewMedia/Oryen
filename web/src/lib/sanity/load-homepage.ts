import {
  loadHomepageContent,
  type HomeImageUrls,
  type HomeSeoResolved,
} from '@/lib/home/load-homepage-content';

export type { HomeImageUrls, HomeSeoResolved };

/** Homepage copy is repo-only — delegates to `loadHomepageContent`. */
export async function loadHomepage(locale: string) {
  return loadHomepageContent(locale);
}
