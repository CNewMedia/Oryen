export type AanpakStep = {
  n: string;
  title: string;
  body: string;
};

/** Optional second block inside “Waarom” (cream section), e.g. lens-style bridge. */
export type AanpakWhyTail = {
  headlineLine1: string;
  headlineLine2Em?: string;
  body: string;
};

/** ORYEN methodology page — sits between positioning (home) and offer (aanbod). */
export type AanpakPageContent = {
  meta: { title: string; description: string };
  /**
   * Optional hero photo under the blueprint (e.g. route). Omit or empty for
   * blueprint-only hero (matches static HTML reference).
   */
  heroImageUrl?: string;
  hero: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2?: string;
    /** Italic accent line (third line of the hero headline). */
    headlineEm?: string;
    body1: string;
    body2: string;
    primaryCta: string;
    secondaryCta: string;
  };
  why: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    body1: string;
    body2: string;
    /** Second narrative block in the same cream section (reference `s01-second`). */
    tail?: AanpakWhyTail;
  };
  /**
   * Optional “Hoe ORYEN kijkt” block. Omitted on the slim Aanpak page to avoid
   * duplicating home positioning.
   */
  lens?: {
    eyebrow: string;
    headlineLine1: string;
    /** Italic second line of the lens headline (e.g. “onder meer naar kijken.”). */
    headlineEm?: string;
    headlineLine2?: string;
    leadIn: string;
    lookAtIntro?: string;
    lookAt: string[];
    conclusion: string;
  };
  steps: {
    eyebrow: string;
    headline: string;
    stepPrefix: string;
    steps: AanpakStep[];
  };
  /** Optional bridge section; omitted on the slim Aanpak page. */
  methodBridge?: {
    eyebrow: string;
    /** Small mono label above summary (e.g. “Volgende stap”). */
    microEyebrow?: string;
    summary: string;
    headline: string;
    body1: string;
    body2?: string;
    followTitle: string;
    followBody: string;
    cta: string;
    secondaryCta?: string;
    secondaryCtaHref?: string;
  };
  closing: {
    spineLabel?: string;
    headlineLine1: string;
    headlineLine2: string;
    body1: string;
    body2?: string;
    supportHook?: string;
    primaryCta: string;
    primaryCtaHref: string;
    secondaryCta: string;
    secondaryCtaHref: string;
    /** Italic line beside secondary link (e.g. tagline). */
    footnote?: string;
  };
};
