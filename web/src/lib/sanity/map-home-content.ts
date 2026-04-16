import type { HomeContent } from '@/types/home-content';

type SanityDoc = Record<string, unknown>;

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

function str(v: unknown, fallback: string): string {
  return typeof v === 'string' ? v : fallback;
}

/** Merge Sanity homepage document into `base` (empty shell or dev fallback). */
export function mergeHomeFromSanity(doc: SanityDoc | null, base: HomeContent): HomeContent {
  if (!doc) return base;

  const h = isRecord(doc.hero) ? doc.hero : {};
  const d = isRecord(doc.diagnosis) ? doc.diagnosis : {};
  const ap = isRecord(doc.approach) ? doc.approach : {};
  const pr = isRecord(doc.proof) ? doc.proof : {};
  const sel = isRecord(doc.selection) ? doc.selection : {};
  const ab = isRecord(doc.about) ? doc.about : {};
  const of = isRecord(doc.offer) ? doc.offer : {};

  const stepsRaw = ap.steps;
  const steps = Array.isArray(stepsRaw)
    ? stepsRaw
        .map((s) => {
          if (!isRecord(s)) return null;
          return {
            n: str(s.n, ''),
            name: str(s.name, ''),
            q: str(s.q, ''),
          };
        })
        .filter(
          (x): x is { n: string; name: string; q: string } =>
            x !== null && !!(x.n || x.name)
        )
    : base.approach.steps;

  const minisRaw = pr.minis;
  const minis = Array.isArray(minisRaw)
    ? minisRaw
        .map((m) => {
          if (!isRecord(m)) return null;
          return {
            client: str(m.client, ''),
            subtitle: str(m.subtitle, ''),
            body: str(m.body, ''),
            result: str(m.result, ''),
          };
        })
        .filter(
          (x): x is (typeof base.proof.minis)[number] =>
            x !== null && !!x.client
        )
    : base.proof.minis;

  const feat = isRecord(pr.featured) ? pr.featured : {};
  const featured = {
    client: str(feat.client, base.proof.featured.client),
    title: str(feat.title, base.proof.featured.title),
    line1: str(feat.line1, base.proof.featured.line1),
    line2: str(feat.line2, base.proof.featured.line2),
    line3: str(feat.line3, base.proof.featured.line3),
  };

  const forItemsRaw = sel.forItems;
  const forItems = Array.isArray(forItemsRaw)
    ? forItemsRaw.map((x) => (typeof x === 'string' ? x : '')).filter(Boolean)
    : base.selection.forItems;

  const notForRaw = sel.notFor;
  const notFor = Array.isArray(notForRaw)
    ? notForRaw.map((x) => (typeof x === 'string' ? x : '')).filter(Boolean)
    : base.selection.notFor;

  return {
    hero: {
      titleLine1: str(h.titleLine1, base.hero.titleLine1),
      titleLine2: str(h.titleLine2, base.hero.titleLine2),
      titleEm: str(h.titleEm, base.hero.titleEm),
      claim: str(h.claim, base.hero.claim),
      sub: str(h.sub, base.hero.sub),
      primaryCta: str(h.primaryCta, base.hero.primaryCta),
      secondaryCta: str(h.secondaryCta, base.hero.secondaryCta),
    },
    diagnosis: {
      spine: str(d.spine, base.diagnosis.spine),
      headlineEm: str(d.headlineEm, base.diagnosis.headlineEm),
      p1: str(d.p1, base.diagnosis.p1),
      focus: str(d.focus, base.diagnosis.focus),
    },
    approach: {
      spine: str(ap.spine, base.approach.spine),
      headline: str(ap.headline, base.approach.headline),
      headlineEm: str(ap.headlineEm, base.approach.headlineEm),
      note1: str(ap.note1, base.approach.note1),
      introHl: str(ap.introHl, base.approach.introHl),
      stepPrefix: str(ap.stepPrefix, base.approach.stepPrefix),
      steps: steps.length ? steps : base.approach.steps,
    },
    proof: {
      spine: str(pr.spine, base.proof.spine),
      headline: str(pr.headline, base.proof.headline),
      headlineEm: str(pr.headlineEm, base.proof.headlineEm),
      featured,
      minis: minis.length ? minis : base.proof.minis,
    },
    selection: {
      spine: str(sel.spine, base.selection.spine),
      headline: str(sel.headline, base.selection.headline),
      headlineEm: str(sel.headlineEm, base.selection.headlineEm),
      forItems: forItems.length ? forItems : base.selection.forItems,
      notForLabel: str(sel.notForLabel, base.selection.notForLabel),
      notFor: notFor.length ? notFor : base.selection.notFor,
    },
    about: {
      spine: str(ab.spine, base.about.spine),
      headline: str(ab.headline, base.about.headline),
      headlineEm: str(ab.headlineEm, base.about.headlineEm),
      statement: str(ab.statement, base.about.statement),
      creds: str(ab.creds, base.about.creds),
      signature: str(ab.signature, base.about.signature),
      quote: str(ab.quote, base.about.quote),
    },
    offer: {
      spine: str(of.spine, base.offer.spine),
      name: str(of.name, base.offer.name),
      body: str(of.body, base.offer.body),
      ctaPrimary: str(of.ctaPrimary, base.offer.ctaPrimary),
      secondaryHlBeforeEm: str(
        of.secondaryHlBeforeEm,
        base.offer.secondaryHlBeforeEm
      ),
      secondaryHlEm: str(of.secondaryHlEm, base.offer.secondaryHlEm),
      secondaryBody: str(of.secondaryBody, base.offer.secondaryBody),
      secondaryNote: str(of.secondaryNote, base.offer.secondaryNote),
    },
  };
}
