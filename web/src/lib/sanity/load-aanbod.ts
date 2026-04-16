import { notFound } from 'next/navigation';

import type { AanbodContent } from '@/types/aanbod';

import { getBootstrapAanbodContent } from '@/lib/sanity/bootstrap/local-bootstrap';
import { allowBootstrapWithoutSanityClient } from '@/lib/sanity/bootstrap/sanity-mode';
import { EMPTY_AANBOD_CONTENT } from '@/lib/sanity/empty-content';
import { mergeAanbodFromSanity } from '@/lib/sanity/map-aanbod-content';
import { getSanityClient } from '@/lib/sanity/client';

type SanityDoc = Record<string, unknown>;

const QUERY = `*[_type == "aanbodPage" && locale == $locale][0]`;

export async function loadAanbod(locale: string): Promise<AanbodContent> {
  const client = getSanityClient();
  if (!client) {
    if (!allowBootstrapWithoutSanityClient()) {
      throw new Error(
        'ORYEN: Sanity is not configured and bootstrap is not allowed in this environment.'
      );
    }
    return getBootstrapAanbodContent(locale);
  }

  const doc = (await client.fetch(QUERY, { locale })) as SanityDoc | null;
  if (!doc) notFound();
  return mergeAanbodFromSanity(doc, EMPTY_AANBOD_CONTENT);
}
