import type { HomeContent } from '@/types/home-content';

type SanityDoc = Record<string, unknown>;

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

function str(v: unknown, fallback: string): string {
  return typeof v === 'string' ? v : fallback;
}

function strList(v: unknown, fallback: string[]): string[] {
  if (!Array.isArray(v)) return fallback;
  return v.map((x) => (typeof x === 'string' ? x : '')).filter(Boolean);
}

/** Merge Sanity homepage document into repo bootstrap (legacy seed path). */
export function mergeHomeFromSanity(doc: SanityDoc | null, base: HomeContent): HomeContent {
  if (!doc) return base;

  const h = isRecord(doc.hero) ? doc.hero : {};
  const rec = isRecord(doc.recognition) ? doc.recognition : {};
  const d = isRecord(doc.diagnosis) ? doc.diagnosis : {};
  const ap = isRecord(doc.approach) ? doc.approach : {};
  const pr = isRecord(doc.proof) ? doc.proof : {};
  const of = isRecord(doc.offer) ? doc.offer : {};
  const ins = isRecord(doc.insights) ? doc.insights : {};

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
    recognition: {
      headline: str(rec.headline, base.recognition.headline),
      body: str(rec.body, base.recognition.body),
      cta: str(rec.cta, base.recognition.cta),
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
      moreCta: str(ap.moreCta, base.approach.moreCta ?? ''),
    },
    proof: {
      spine: str(pr.spine, base.proof.spine),
      headline: str(pr.headline, base.proof.headline),
      headlineEm: str(pr.headlineEm, base.proof.headlineEm),
      featured,
      minis: minis.length ? minis : base.proof.minis,
    },
    offer: {
      spine: str(of.spine, base.offer.spine),
      name: str(of.name, base.offer.name),
      body: str(of.body, base.offer.body),
      price: str(of.price, base.offer.price),
      deliverables: strList(of.deliverables, base.offer.deliverables),
      solutionsNote: str(of.solutionsNote, base.offer.solutionsNote),
      ctaPrimary: str(of.ctaPrimary, base.offer.ctaPrimary),
      secondaryNote: str(of.secondaryNote, base.offer.secondaryNote),
    },
    insights: {
      spine: str(ins.spine, base.insights.spine),
      headline: str(ins.headline, base.insights.headline),
      intro: str(ins.intro, base.insights.intro),
      cta: str(ins.cta, base.insights.cta),
    },
  };
}
