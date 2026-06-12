import { cache } from 'react';

import {
  getBootstrapHomeContent,
  getBootstrapHomeMeta,
  getBootstrapSiteSettings,
} from '@/lib/sanity/bootstrap/local-bootstrap';
import type { HomeContent } from '@/types/home-content';

export type HomeImageUrls = {
  hero: string;
  featured: string;
  portrait: string;
};

export type HomeSeoResolved = {
  title: string;
  description: string;
  ogTitle: string | null;
  ogDescription: string | null;
  robotsIndex: boolean;
};

const defaultImages: HomeImageUrls = {
  hero: '/images/hero-stone.png',
  featured: '/images/HofvanCleve.jpg',
  portrait: '/images/team/christophe.jpg',
};

/**
 * Homepage body copy is always read from in-repo bootstrap JSON — never Sanity.
 * Keeps the homepage live when CMS is unavailable.
 */
export async function loadHomepageContent(locale: string): Promise<{
  content: HomeContent;
  imageUrls: HomeImageUrls;
  seo: HomeSeoResolved;
}> {
  const settings = getBootstrapSiteSettings(locale);
  const meta = getBootstrapHomeMeta(locale);

  return {
    content: getBootstrapHomeContent(locale),
    imageUrls: defaultImages,
    seo: {
      title: meta.title,
      description: meta.description,
      ogTitle: meta.title,
      ogDescription: meta.description,
      robotsIndex: settings.defaultRobotsIndex,
    },
  };
}

/** One fetch per request per locale (metadata + page). */
export const getCachedHomepageContent = cache(loadHomepageContent);
