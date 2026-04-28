import type { AanpakPageContent } from '@/types/aanpak-page';

import { getBootstrapAanpakPage } from '@/lib/sanity/bootstrap/local-bootstrap';
import { allowBootstrapWithoutSanityClient } from '@/lib/sanity/bootstrap/sanity-mode';
import { getSanityClient } from '@/lib/sanity/client';
import { urlForImage } from '@/lib/sanity/image';
import { mergeAanpakFromSanity } from '@/lib/sanity/map-aanpak-content';

type SanityDoc = Record<string, unknown>;

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

/** Matches `web/scripts/seed-cms.ts` singleton ids (`oryen.aanpak.nl` / `oryen.aanpak.en`). */
const QUERY = `*[_type == "aanpakPage" && (locale == $locale || _id == $id)][0]`;

export async function loadAanpak(locale: string): Promise<AanpakPageContent> {
  const bootstrap = getBootstrapAanpakPage(locale);
  const client = getSanityClient();
  if (!client) {
    if (!allowBootstrapWithoutSanityClient()) {
      console.error(
        '[ORYEN] NEXT_PUBLIC_SANITY_PROJECT_ID is not set. Serving bootstrap Aanpak content. Configure Vercel env or set ORYEN_ALLOW_OFFLINE_CMS=true for local production testing.'
      );
    }
    return bootstrap;
  }

  const id = `oryen.aanpak.${locale}`;
  const doc = (await client.fetch(QUERY, { locale, id })) as SanityDoc | null;
  if (!doc) {
    console.warn(
      `[ORYEN] aanpakPage missing for locale "${locale}" (expected id ${id} or locale match); using bootstrap. Seed CMS or publish the document.`
    );
    return bootstrap;
  }

  const merged = mergeAanpakFromSanity(doc, bootstrap);
  const heroUrl = isRecord(doc) ? urlForImage(doc.heroBgImage as never) : undefined;
  return {
    ...merged,
    ...(heroUrl ? { heroImageUrl: heroUrl } : {}),
  };
}
