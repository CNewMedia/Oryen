import type {
  AanbodBodyStanza,
  AanbodClosing,
  AanbodContent,
  AanbodGuarantee,
  AanbodOutputRow,
  AanbodWatHetIs,
} from '@/types/aanbod';

type SanityDoc = Record<string, unknown>;

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

function splitDisplayHeadline(
  combined: string | undefined,
  fallback1: string,
  fallbackEm: string
): { line1: string; lineEm: string } {
  const h = combined?.trim();
  if (!h) return { line1: fallback1, lineEm: fallbackEm };
  const idx = h.lastIndexOf('. ');
  if (idx <= 0) return { line1: h, lineEm: '' };
  return {
    line1: h.slice(0, idx + 1).trim(),
    lineEm: h.slice(idx + 2).trim(),
  };
}

function deriveOutputsFromItems(items: string[]): AanbodOutputRow[] {
  return items.map((raw) => {
    const idx = raw.indexOf(' — ');
    if (idx === -1) return { title: raw.trim(), description: '' };
    return {
      title: raw.slice(0, idx).trim(),
      description: raw.slice(idx + 3).trim(),
    };
  });
}

function deriveGuaranteesFromItems(items: string[]): AanbodGuarantee[] {
  return items.map((text, i) => ({
    mark: String(i + 1).padStart(2, '0'),
    text,
  }));
}

function stanzasFromLegacyBody(body: string): AanbodBodyStanza[] {
  const parts = body.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
  return parts.map((text, i) => ({
    text,
    italic:
      i === parts.length - 1 &&
      (text.startsWith('Maar ') ||
        text.startsWith('But ') ||
        /^but only\b/i.test(text)),
  }));
}

function watHetIsFromOfferClarity(
  oc: AanbodContent['offerClarity'],
  base: AanbodWatHetIs
): AanbodWatHetIs {
  const leftTitle = oc.leftTitle ?? '';
  const lines = leftTitle.split(/\n/).map((s) => s.trim()).filter(Boolean);
  return {
    spine: '01 — Wat het is',
    eyebrow: oc.eyebrow ?? base.eyebrow,
    headlineLine1: lines[0] ?? base.headlineLine1,
    headlineLine2Em: (lines[1] ?? lines.slice(1).join(' ')) || base.headlineLine2Em,
    body: oc.leftBody ?? base.body,
  };
}

function normalizeClosing(closing: AanbodClosing, base: AanbodClosing): AanbodClosing {
  const hasNewHeadline =
    Boolean(closing.headlineLine1?.trim()) && Boolean(closing.headlineLine2?.trim());
  if (hasNewHeadline) {
    return { ...base, ...closing };
  }
  if (closing.line1?.trim() && closing.line2?.trim()) {
    const paras = (closing.body ?? '').split(/\n\n+/).filter(Boolean);
    return {
      ...base,
      ...closing,
      spine: closing.spine ?? base.spine,
      headlineLine1: closing.line1,
      headlineLine2: '',
      headlineEm: closing.line2 ?? '',
      body1: paras[0] ?? base.body1,
      body2: paras.slice(1).join('\n\n') || base.body2,
      primaryCta: closing.ctaLabel ?? closing.primaryCta ?? base.primaryCta,
      footnote: closing.footnote ?? base.footnote,
      secondaryCta: closing.secondaryCta ?? base.secondaryCta,
      secondaryCtaHref: closing.secondaryCtaHref ?? base.secondaryCtaHref,
    };
  }
  return { ...base, ...closing };
}

function normalizeWhatAfter(
  wa: NonNullable<AanbodContent['whatAfter']>,
  base: NonNullable<AanbodContent['whatAfter']>,
  reassuranceBody?: string
): NonNullable<AanbodContent['whatAfter']> {
  let stanzas = Array.isArray(wa.stanzas) ? wa.stanzas : [];
  if (!stanzas.length && wa.body?.trim()) {
    stanzas = stanzasFromLegacyBody(wa.body);
  }
  if (!stanzas.length && reassuranceBody?.trim()) {
    stanzas = [{ text: reassuranceBody, italic: false }];
  }
  let guarantees = Array.isArray(wa.guarantees) ? wa.guarantees : [];
  if (!guarantees.length && Array.isArray(wa.items) && wa.items.length) {
    guarantees = deriveGuaranteesFromItems(wa.items);
  }
  const headlineLine1 = wa.headlineLine1?.trim()
    ? wa.headlineLine1
    : base.headlineLine1;
  const headlineEm = wa.headlineEm?.trim() ? wa.headlineEm : base.headlineEm;
  return {
    ...base,
    ...wa,
    stanzas: stanzas.length ? stanzas : base.stanzas,
    guarantees: guarantees.length ? guarantees : base.guarantees,
    headlineLine1,
    headlineEm,
    signature: wa.signature?.trim() ? wa.signature : base.signature,
  };
}

/**
 * Partial CMS objects must not wipe arrays used by `.map` — restore from `base`.
 */
function sanitizeAanbodFromBase(merged: AanbodContent, base: AanbodContent): AanbodContent {
  const ofMerged = merged.hero.offerFrame;
  const ofBase = base.hero.offerFrame ?? { label: '', pillars: [] as string[] };
  const offerFrame =
    ofMerged && Array.isArray(ofMerged.pillars) && ofMerged.pillars.length > 0
      ? { ...ofBase, ...ofMerged, pillars: ofMerged.pillars }
      : { ...ofBase, pillars: [] };

  const items = merged.whatYouGet.items ?? base.whatYouGet.items ?? [];
  let outputs = Array.isArray(merged.whatYouGet.outputs)
    ? merged.whatYouGet.outputs
    : [];
  if (!outputs.length && Array.isArray(items) && items.length) {
    outputs = deriveOutputsFromItems(items);
  }

  let watHetIs: AanbodWatHetIs | undefined;
  if (merged.watHetIs?.headlineLine1?.trim()) {
    watHetIs = merged.watHetIs;
  } else if (base.watHetIs?.headlineLine1?.trim()) {
    watHetIs = watHetIsFromOfferClarity(merged.offerClarity, base.watHetIs);
  } else {
    watHetIs = undefined;
  }

  const wySplit = splitDisplayHeadline(
    merged.whatYouGet.headline,
    base.whatYouGet.headlineLine1,
    base.whatYouGet.headlineLine2Em
  );
  const whatYouGetHeadlineLine1 =
    merged.whatYouGet.headlineLine1?.trim() || wySplit.line1;
  const whatYouGetHeadlineLine2Em =
    merged.whatYouGet.headlineLine2Em?.trim() || wySplit.lineEm;

  const hiSplit = splitDisplayHeadline(
    merged.howItWorks.headline,
    base.howItWorks.headlineLine1,
    base.howItWorks.headlineLine2Em
  );
  const howHeadlineLine1 =
    merged.howItWorks.headlineLine1?.trim() || hiSplit.line1;
  const howHeadlineLine2Em =
    merged.howItWorks.headlineLine2Em?.trim() || hiSplit.lineEm;

  const oc = merged.offerClarity;
  const baseOc = base.offerClarity;
  const offerClarityMerged = {
    ...baseOc,
    ...oc,
    spine: oc.spine?.trim() || baseOc.spine,
    pastEyebrow: oc.pastEyebrow?.trim() || baseOc.pastEyebrow,
    fitHeadlineLine1: oc.fitHeadlineLine1?.trim() || baseOc.fitHeadlineLine1,
    fitHeadlineEm: oc.fitHeadlineEm?.trim() || baseOc.fitHeadlineEm,
    fitHeadlineLine2: oc.fitHeadlineLine2?.trim() || baseOc.fitHeadlineLine2,
    fitIntro:
      oc.fitIntro?.trim() ||
      merged.reassurance?.body?.trim() ||
      baseOc.fitIntro,
    fitOutro: oc.fitOutro?.trim() || baseOc.fitOutro,
  };

  const reassurance = merged.reassurance ?? base.reassurance;
  let whatAfter: AanbodContent['whatAfter'];
  const waM = merged.whatAfter;
  const waB = base.whatAfter;
  if (waM || waB) {
    whatAfter = normalizeWhatAfter(
      { ...(waB ?? {}), ...(waM ?? {}) } as NonNullable<AanbodContent['whatAfter']>,
      (waB ?? waM!) as NonNullable<AanbodContent['whatAfter']>,
      reassurance?.body
    );
  } else {
    whatAfter = undefined;
  }

  const closing = normalizeClosing(merged.closing, base.closing);

  const pricing =
    merged.pricing && base.pricing
      ? {
          ...base.pricing,
          ...merged.pricing,
          includedItems: Array.isArray(merged.pricing.includedItems)
            ? merged.pricing.includedItems
            : base.pricing.includedItems,
        }
      : merged.pricing ?? base.pricing;

  const mergedRest = { ...merged };
  delete (mergedRest as Record<string, unknown>).watHetIs;
  delete (mergedRest as Record<string, unknown>).whatAfter;
  const out: AanbodContent = {
    ...mergedRest,
    hero: {
      ...merged.hero,
      offerFrame,
      characterLines: Array.isArray(merged.hero.characterLines)
        ? merged.hero.characterLines
        : base.hero.characterLines,
    },
    ...(watHetIs ? { watHetIs } : {}),
    offerClarity: {
      ...offerClarityMerged,
      welItems: Array.isArray(merged.offerClarity.welItems)
        ? merged.offerClarity.welItems
        : base.offerClarity.welItems,
      notForItems: Array.isArray(merged.offerClarity.notForItems)
        ? merged.offerClarity.notForItems
        : base.offerClarity.notForItems,
    },
    whatYouGet: {
      ...merged.whatYouGet,
      headlineLine1: whatYouGetHeadlineLine1,
      headlineLine2Em: whatYouGetHeadlineLine2Em,
      outputs: outputs.length ? outputs : base.whatYouGet.outputs,
      items: Array.isArray(items) ? items : base.whatYouGet.items,
    },
    howItWorks: {
      ...merged.howItWorks,
      headlineLine1: howHeadlineLine1,
      headlineLine2Em: howHeadlineLine2Em,
      steps: Array.isArray(merged.howItWorks.steps)
        ? merged.howItWorks.steps
        : base.howItWorks.steps,
    },
    ...(whatAfter ? { whatAfter } : {}),
    closing,
  };
  if (pricing) out.pricing = pricing;
  if (reassurance) out.reassurance = reassurance;
  return out;
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
  if (isRecord(doc.watHetIs)) {
    out = {
      ...out,
      watHetIs: {
        ...(base.watHetIs ?? {}),
        ...doc.watHetIs,
      } as AanbodWatHetIs,
    };
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
  if (isRecord(doc.whatAfter)) {
    out = {
      ...out,
      whatAfter: {
        ...(base.whatAfter ?? {}),
        ...doc.whatAfter,
      } as NonNullable<AanbodContent['whatAfter']>,
    };
  }
  if (isRecord(doc.pricing) && base.pricing) {
    out = {
      ...out,
      pricing: { ...base.pricing, ...doc.pricing } as NonNullable<AanbodContent['pricing']>,
    };
  }
  if (isRecord(doc.reassurance) && base.reassurance) {
    out = {
      ...out,
      reassurance: {
        ...base.reassurance,
        ...doc.reassurance,
      } as NonNullable<AanbodContent['reassurance']>,
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
