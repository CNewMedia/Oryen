export type AanbodStep = {
  n: string;
  title: string;
  body: string;
};

/** Reality Check / offer page — mirrors Sanity `aanbodPage` + bootstrap JSON. */
export type AanbodContent = {
  meta: { title: string; description: string };
  hero: {
    headlineLine1: string;
    headlineLine2Em: string;
    sub: string;
    primaryCta: string;
    secondaryCta: string;
    offerFrame: { label: string; pillars: string[] };
  };
  offerClarity: {
    eyebrow: string;
    leftTitle: string;
    leftBody: string;
    rightTitle: string;
    rightLead: string;
    forBody: string;
    welLabel: string;
    welItems: string[];
    notForLabel: string;
    notForItems: string[];
  };
  whatYouGet: {
    eyebrow: string;
    headline: string;
    subline: string;
    items: string[];
  };
  howItWorks: {
    headline: string;
    stepPrefix: string;
    steps: AanbodStep[];
  };
  /** What happens after — roadmap ownership, optional follow-on (no hard sell). */
  whatAfter: {
    eyebrow: string;
    headline: string;
    body: string;
    items: string[];
  };
  pricing: {
    spine: string;
    name: string;
    priceLine: string;
    body: string;
    includedTitle: string;
    includedItems: string[];
  };
  reassurance: { headline: string; body: string; note: string };
  closing: { line1: string; line2: string; ctaLabel: string };
};
