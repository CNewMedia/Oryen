export type AanbodStep = {
  n: string;
  title: string;
  body: string;
  /** Shown under the phase body (e.g. “Inclusief: …”). */
  includes?: string;
};

export type AanbodOutputRow = {
  title: string;
  description: string;
};

export type AanbodGuarantee = {
  mark: string;
  text: string;
};

export type AanbodBodyStanza = {
  text: string;
  /** Renders as emphasised body (template third paragraph). */
  italic?: boolean;
};

/** “Wat het is” — cream block after hero (template s01). */
export type AanbodWatHetIs = {
  spine: string;
  eyebrow: string;
  headlineLine1: string;
  headlineLine2Em: string;
  body: string;
};

/** Closing band (template s06). */
export type AanbodClosing = {
  spine: string;
  headlineLine1: string;
  headlineLine2: string;
  headlineEm: string;
  body1: string;
  body2: string;
  primaryCta: string;
  footnote?: string;
  secondaryCta?: string;
  secondaryCtaHref?: string;
  /** Legacy single-line headline parts (CMS migration). */
  line1?: string;
  line2?: string;
  body?: string;
  ctaLabel?: string;
};

/** Reality Check / offer page — mirrors Sanity `aanbodPage` + bootstrap JSON. */
export type AanbodContent = {
  meta: { title: string; description: string };
  /** Optional OG / hero underlay; blueprint hero when unset. */
  heroImageUrl?: string;
  hero: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2Em: string;
    sub: string;
    /** Left-border character lines under the sub (template). */
    characterLines: string[];
    primaryCta: string;
    secondaryCta: string;
    /** Same-page section id without `#` (e.g. `hoe-het-gaat`) when secondary is in-page. */
    secondaryCtaAnchor?: string;
    /** When set, secondary CTA links here instead of `#secondaryCtaAnchor`. */
    secondaryCtaHref?: string;
    /** Right-hand rail; omit or empty pillars to hide (slim Reality Check page). */
    offerFrame?: { label: string; pillars: string[] };
  };
  /** Cream block after hero; omit for slim offer pages. */
  watHetIs?: AanbodWatHetIs;
  offerClarity: {
    /** Legacy spine label for “Wat het is” block — optional. */
    eyebrow?: string;
    spine: string;
    pastEyebrow: string;
    fitHeadlineLine1: string;
    fitHeadlineEm: string;
    fitHeadlineLine2: string;
    fitIntro: string;
    welLabel: string;
    welItems: string[];
    notForLabel: string;
    notForItems: string[];
    /** Paragraph after Wel/Niet lists (e.g. honesty disclaimer). */
    fitOutro?: string;
    /** Legacy columns — optional, for older CMS payloads. */
    leftTitle?: string;
    leftBody?: string;
    rightTitle?: string;
    rightLead?: string;
    forBody?: string;
  };
  whatYouGet: {
    spine?: string;
    eyebrow: string;
    headlineLine1: string;
    headlineLine2Em: string;
    subline: string;
    outputs: AanbodOutputRow[];
    /** Legacy flat bullets — optional; mapper can derive `outputs`. */
    headline?: string;
    items?: string[];
  };
  howItWorks: {
    spine: string;
    eyebrow: string;
    headlineLine1: string;
    headlineLine2Em: string;
    stepPrefix: string;
    steps: AanbodStep[];
    /** Legacy single headline — optional. */
    headline?: string;
  };
  /** “Na de Reality Check” band; omit on slim template. */
  whatAfter?: {
    spine: string;
    eyebrow: string;
    headlineLine1: string;
    headlineEm: string;
    stanzas: AanbodBodyStanza[];
    guarantees: AanbodGuarantee[];
    signature: string;
    /** Legacy — optional. */
    headline?: string;
    body?: string;
    items?: string[];
  };
  closing: AanbodClosing;
  /**
   * Legacy product / reassurance blocks — not rendered in the Reality Check
   * template; kept for Sanity merge and gradual CMS migration.
   */
  pricing?: {
    spine: string;
    name: string;
    supportLine: string;
    body: string;
    includedTitle: string;
    includedItems: string[];
  };
  reassurance?: { headline: string; body: string; note: string };
};
