import { getBootstrapHomeContent } from '@/lib/sanity/bootstrap/local-bootstrap';
import { getSanityClient } from '@/lib/sanity/client';
import { mergeHomeFromSanity } from '@/lib/sanity/map-home-content';
import { loadSiteSettings } from '@/lib/sanity/load-site-settings';
import { urlForImage } from '@/lib/sanity/image';
import type { HomeContent } from '@/types/home-content';
import type { SiteSettingsResolved } from '@/types/site-settings';

type SanityDoc = Record<string, unknown>;

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

/** Matches `web/scripts/seed-cms.ts` ids (`oryen.homepage.nl` / `oryen.homepage.en`). */
const QUERY = `*[_type == "homepage" && (locale == $locale || _id == $id)][0]`;

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

function resolveHomeSeo(
  doc: SanityDoc | null,
  settings: SiteSettingsResolved
): HomeSeoResolved {
  if (!doc || !isRecord(doc.seo)) {
    return {
      title: settings.defaultMetaTitle,
      description: settings.defaultMetaDescription,
      ogTitle: settings.defaultOgTitle ?? settings.defaultMetaTitle,
      ogDescription:
        settings.defaultOgDescription ?? settings.defaultMetaDescription,
      robotsIndex: settings.defaultRobotsIndex,
    };
  }
  const s = doc.seo as Record<string, unknown>;
  const mt =
    typeof s.metaTitle === 'string' && s.metaTitle.trim()
      ? s.metaTitle
      : settings.defaultMetaTitle;
  const md =
    typeof s.metaDescription === 'string' && s.metaDescription.trim()
      ? s.metaDescription
      : settings.defaultMetaDescription;
  const ogT =
    typeof s.ogTitle === 'string' && s.ogTitle.trim() ? s.ogTitle : mt;
  const ogD =
    typeof s.ogDescription === 'string' && s.ogDescription.trim()
      ? s.ogDescription
      : md;
  return {
    title: mt,
    description: md,
    ogTitle: ogT,
    ogDescription: ogD,
    robotsIndex:
      typeof s.robotsIndex === 'boolean' ? s.robotsIndex : settings.defaultRobotsIndex,
  };
}

const defaultImages: HomeImageUrls = {
  hero: '/images/rock.jpg',
  featured: '/images/HofvanCleve.jpg',
  portrait: '/images/team/christophe.jpg',
};

export async function loadHomepage(locale: string): Promise<{
  content: HomeContent;
  imageUrls: HomeImageUrls;
  seo: HomeSeoResolved;
}> {
  const settings = await loadSiteSettings(locale);
  const client = getSanityClient();
  if (!client) {
    return {
      content: getBootstrapHomeContent(locale),
      imageUrls: defaultImages,
      seo: resolveHomeSeo(null, settings),
    };
  }

  const id = `oryen.homepage.${locale}`;
  const doc = (await client.fetch(QUERY, { locale, id })) as SanityDoc | null;
  if (!doc) {
    console.warn(
      `[ORYEN] homepage missing for locale "${locale}"; using bootstrap shell. Seed CMS or publish the homepage document.`
    );
    return {
      content: getBootstrapHomeContent(locale),
      imageUrls: defaultImages,
      seo: resolveHomeSeo(null, settings),
    };
  }

  /** Merge onto locale bootstrap so partial CMS never blanks fields the editor omitted. */
  const content = mergeHomeFromSanity(doc, getBootstrapHomeContent(locale));

  const heroUrl = isRecord(doc) ? urlForImage(doc.heroBgImage as never) : undefined;
  const featUrl = isRecord(doc)
    ? urlForImage(doc.featuredCaseImage as never)
    : undefined;
  const portUrl = isRecord(doc)
    ? urlForImage(doc.portraitImage as never)
    : undefined;

  if (
    process.env.NODE_ENV === 'development' &&
    isRecord(doc) &&
    doc.portraitImage &&
    typeof doc.portraitImage === 'object' &&
    !portUrl
  ) {
    console.warn(
      '[ORYEN] homepage portraitImage is set but no CDN URL was built (check asset ref / publish). Falling back to static portrait.'
    );
  }

  return {
    content,
    imageUrls: {
      hero: heroUrl ?? defaultImages.hero,
      featured: featUrl ?? defaultImages.featured,
      portrait: portUrl ?? defaultImages.portrait,
    },
    seo: resolveHomeSeo(doc, settings),
  };
}
