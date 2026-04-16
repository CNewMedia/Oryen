import type { AanbodContent } from '@/types/aanbod';

type SanityDoc = Record<string, unknown>;

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

/**
 * Partial CMS objects must not wipe arrays used by `.map` — restore from `base`.
 */
function sanitizeAanbodFromBase(
  merged: AanbodContent,
  base: AanbodContent
): AanbodContent {
  const of = merged.hero.offerFrame;
  const ofBase = base.hero.offerFrame;
  const offerFrame =
    of && typeof of === 'object' && !Array.isArray(of)
      ? {
          ...ofBase,
          ...of,
          pillars: Array.isArray(of.pillars) ? of.pillars : ofBase.pillars,
        }
      : ofBase;

  return {
    ...merged,
    hero: { ...merged.hero, offerFrame },
    offerClarity: {
      ...merged.offerClarity,
      welItems: Array.isArray(merged.offerClarity.welItems)
        ? merged.offerClarity.welItems
        : base.offerClarity.welItems,
      notForItems: Array.isArray(merged.offerClarity.notForItems)
        ? merged.offerClarity.notForItems
        : base.offerClarity.notForItems,
    },
    whatYouGet: {
      ...merged.whatYouGet,
      items: Array.isArray(merged.whatYouGet.items)
        ? merged.whatYouGet.items
        : base.whatYouGet.items,
    },
    howItWorks: {
      ...merged.howItWorks,
      steps: Array.isArray(merged.howItWorks.steps)
        ? merged.howItWorks.steps
        : base.howItWorks.steps,
    },
    pricing: {
      ...merged.pricing,
      includedItems: Array.isArray(merged.pricing.includedItems)
        ? merged.pricing.includedItems
        : base.pricing.includedItems,
    },
  };
}

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
  if (isRecord(doc.offerClarity)) {
    out = {
      ...out,
      offerClarity: {
        ...base.offerClarity,
        ...doc.offerClarity,
      } as AanbodContent['offerClarity'],
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

  return sanitizeAanbodFromBase(out, base);
}

/** Merge Sanity aanbod document into `base` (empty shell or dev fallback). */
export function mergeAanbodFromSanity(doc: SanityDoc | null, base: AanbodContent): AanbodContent {
  if (!doc) return base;
  return mergeSanity(base, doc);
}
