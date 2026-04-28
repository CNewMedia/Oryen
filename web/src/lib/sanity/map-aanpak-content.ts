import type { AanpakPageContent, AanpakStep, AanpakWhyTail } from '@/types/aanpak-page';

type SanityDoc = Record<string, unknown>;

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

function mergeWhyTail(base: AanpakWhyTail | undefined, doc: unknown): AanpakWhyTail | undefined {
  if (!isRecord(doc)) return base;
  const b = base ?? {
    headlineLine1: '',
    body: '',
  };
  return {
    headlineLine1:
      typeof doc.headlineLine1 === 'string' && doc.headlineLine1.trim()
        ? doc.headlineLine1
        : b.headlineLine1,
    headlineLine2Em:
      typeof doc.headlineLine2Em === 'string' ? doc.headlineLine2Em : b.headlineLine2Em,
    body: typeof doc.body === 'string' && doc.body.trim() ? doc.body : b.body,
  };
}

function sanitizeFromBase(merged: AanpakPageContent, base: AanpakPageContent): AanpakPageContent {
  const steps = Array.isArray(merged.steps.steps) ? merged.steps.steps : base.steps.steps;

  let why = { ...merged.why };
  if (merged.why.tail) {
    why = {
      ...why,
      tail: mergeWhyTail(base.why.tail, merged.why.tail),
    };
  }

  const out: AanpakPageContent = {
    ...merged,
    why,
    steps: { ...merged.steps, steps: steps as AanpakStep[] },
    closing: {
      ...merged.closing,
      primaryCtaHref: merged.closing.primaryCtaHref?.trim()
        ? merged.closing.primaryCtaHref
        : base.closing.primaryCtaHref,
      secondaryCtaHref: merged.closing.secondaryCtaHref?.trim()
        ? merged.closing.secondaryCtaHref
        : base.closing.secondaryCtaHref,
    },
  };

  if (merged.lens) {
    const lookAt = Array.isArray(merged.lens.lookAt)
      ? merged.lens.lookAt
      : base.lens?.lookAt ?? [];
    out.lens = { ...merged.lens, lookAt };
  }

  return out;
}

function mergeSanity(base: AanpakPageContent, doc: SanityDoc): AanpakPageContent {
  let out: AanpakPageContent = { ...base };

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
    out = { ...out, hero: { ...base.hero, ...doc.hero } as AanpakPageContent['hero'] };
  }
  if (isRecord(doc.why)) {
    const w = doc.why;
    const { tail: wTail, ...wRest } = w;
    const tail = isRecord(wTail)
      ? mergeWhyTail(base.why.tail, wTail)
      : base.why.tail;
    out = {
      ...out,
      why: {
        ...base.why,
        ...wRest,
        ...(tail !== undefined ? { tail } : {}),
      } as AanpakPageContent['why'],
    };
  }
  if (isRecord(doc.lens)) {
    const lensBase = base.lens ?? {
      eyebrow: '',
      headlineLine1: '',
      leadIn: '',
      lookAt: [] as string[],
      conclusion: '',
    };
    out = {
      ...out,
      lens: { ...lensBase, ...doc.lens } as NonNullable<AanpakPageContent['lens']>,
    };
  }
  if (isRecord(doc.steps)) {
    out = {
      ...out,
      steps: { ...base.steps, ...doc.steps } as AanpakPageContent['steps'],
    };
  }
  if (isRecord(doc.methodBridge)) {
    out = {
      ...out,
      methodBridge: {
        ...(base.methodBridge ?? {}),
        ...doc.methodBridge,
      } as AanpakPageContent['methodBridge'],
    };
  }
  if (isRecord(doc.closing)) {
    out = {
      ...out,
      closing: { ...base.closing, ...doc.closing } as AanpakPageContent['closing'],
    };
  }

  return sanitizeFromBase(out, base);
}

export function mergeAanpakFromSanity(
  doc: SanityDoc | null,
  base: AanpakPageContent
): AanpakPageContent {
  if (!doc) return base;
  return mergeSanity(base, doc);
}
