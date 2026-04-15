import type { AanbodContent } from '@/types/aanbod';

import { getSanityClient } from './client';

type SanityDoc = Record<string, unknown>;

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

const QUERY = `*[_type == "aanbodPage" && locale == $locale][0]`;

function mergeSanity(base: AanbodContent, doc: SanityDoc): AanbodContent {
  let out: AanbodContent = { ...base };

  const seo = doc.seo;
  if (isRecord(seo)) {
    const mt = seo.metaTitle;
    const md = seo.metaDescription;
    out = {
      ...out,
      meta: {
        title: typeof mt === 'string' && mt.trim() ? mt : base.meta.title,
        description:
          typeof md === 'string' && md.trim() ? md : base.meta.description,
      },
    };
  }

  if (isRecord(doc.hero)) {
    out = { ...out, hero: { ...base.hero, ...doc.hero } as AanbodContent['hero'] };
  }
  if (isRecord(doc.whatItIs)) {
    out = {
      ...out,
      whatItIs: { ...base.whatItIs, ...doc.whatItIs } as AanbodContent['whatItIs'],
    };
  }
  if (isRecord(doc.whatYouGet)) {
    out = {
      ...out,
      whatYouGet: {
        ...base.whatYouGet,
        ...doc.whatYouGet,
      } as AanbodContent['whatYouGet'],
    };
  }
  if (isRecord(doc.forWho)) {
    out = {
      ...out,
      forWho: { ...base.forWho, ...doc.forWho } as AanbodContent['forWho'],
    };
  }
  if (isRecord(doc.howItWorks)) {
    out = {
      ...out,
      howItWorks: {
        ...base.howItWorks,
        ...doc.howItWorks,
      } as AanbodContent['howItWorks'],
    };
  }
  if (isRecord(doc.pricing)) {
    out = {
      ...out,
      pricing: { ...base.pricing, ...doc.pricing } as AanbodContent['pricing'],
    };
  }
  if (isRecord(doc.reassurance)) {
    out = {
      ...out,
      reassurance: {
        ...base.reassurance,
        ...doc.reassurance,
      } as AanbodContent['reassurance'],
    };
  }
  if (isRecord(doc.closing)) {
    out = {
      ...out,
      closing: { ...base.closing, ...doc.closing } as AanbodContent['closing'],
    };
  }

  return out;
}

export async function loadAanbodFromSanity(
  locale: string,
  fallback: AanbodContent
): Promise<AanbodContent> {
  const client = getSanityClient();
  if (!client) return fallback;

  try {
    const doc = (await client.fetch(
      QUERY,
      { locale }
    )) as SanityDoc | null;
    if (!doc) return fallback;
    return mergeSanity(fallback, doc);
  } catch {
    return fallback;
  }
}
