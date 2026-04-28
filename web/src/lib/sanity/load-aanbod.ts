import type { AanbodContent } from '@/types/aanbod';

import { getBootstrapAanbodContent } from '@/lib/sanity/bootstrap/local-bootstrap';
import { allowBootstrapWithoutSanityClient } from '@/lib/sanity/bootstrap/sanity-mode';
import { getSanityClient } from '@/lib/sanity/client';
import { urlForImage } from '@/lib/sanity/image';
import { mergeAanbodFromSanity } from '@/lib/sanity/map-aanbod-content';

type SanityDoc = Record<string, unknown>;

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

/** Matches `web/scripts/seed-cms.ts` singleton ids (`oryen.aanbod.nl` / `oryen.aanbod.en`). */
const QUERY = `*[_type == "aanbodPage" && (locale == $locale || _id == $id)][0]`;

export async function loadAanbod(locale: string): Promise<AanbodContent> {
  const bootstrap = getBootstrapAanbodContent(locale);
  const client = getSanityClient();
  if (!client) {
    if (!allowBootstrapWithoutSanityClient()) {
      console.error(
        '[ORYEN] NEXT_PUBLIC_SANITY_PROJECT_ID is not set. Serving bootstrap Aanbod content. Configure Vercel env or set ORYEN_ALLOW_OFFLINE_CMS=true for local production testing.'
      );
    }
    return bootstrap;
  }

  const id = `oryen.aanbod.${locale}`;
  const doc = (await client.fetch(QUERY, { locale, id })) as SanityDoc | null;
  if (!doc) {
    console.warn(
      `[ORYEN] aanbodPage missing for locale "${locale}" (expected id ${id} or locale match); using bootstrap. Seed CMS or publish the document.`
    );
    return bootstrap;
  }
  /** Merge onto locale bootstrap so partial/empty CMS fields never wipe the page (EMPTY shell would). */
  const merged = mergeAanbodFromSanity(doc, bootstrap);
  const heroUrl = isRecord(doc) ? urlForImage(doc.heroBgImage as never) : undefined;
  return {
    ...merged,
    ...(heroUrl
      ? { heroImageUrl: heroUrl }
      : merged.heroImageUrl
        ? { heroImageUrl: merged.heroImageUrl }
        : {}),
  };
}
