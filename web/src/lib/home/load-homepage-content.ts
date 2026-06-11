import {
  getBootstrapHomeContent,
  getBootstrapHomeMeta,
} from '@/lib/sanity/bootstrap/local-bootstrap';
import { loadSiteSettings } from '@/lib/sanity/load-site-settings';
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
  hero: '/images/rock.jpg',
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
  const settings = await loadSiteSettings(locale);
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
