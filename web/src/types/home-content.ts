/** ORYEN homepage section model — in-repo copy (`oryen-*.json`), not Sanity. */

export type HomeApproachStep = {
  n: string;
  name: string;
  q: string;
};

export type HomeMiniCase = {
  client: string;
  subtitle: string;
  body: string;
  result: string;
};

export type HomeFeaturedCase = {
  client: string;
  title: string;
  line1: string;
  line2: string;
  line3: string;
};

export type HomeContent = {
  hero: {
    titleLine1: string;
    titleLine2: string;
    titleEm: string;
    /** @deprecated Recognition block — kept for type compat */
    claim: string;
    /** @deprecated Recognition block — kept for type compat */
    sub: string;
    primaryCta: string;
    secondaryCta: string;
  };
  recognition: {
    headline: string;
    body: string;
    cta: string;
  };
  diagnosis: {
    spine: string;
    headlineEm: string;
    p1: string;
    focus: string;
  };
  approach: {
    spine: string;
    headline: string;
    headlineEm: string;
    note1: string;
    introHl: string;
    stepPrefix: string;
    steps: HomeApproachStep[];
    moreCta?: string;
  };
  proof: {
    spine: string;
    headline: string;
    headlineEm: string;
    featured: HomeFeaturedCase;
    minis: HomeMiniCase[];
  };
  offer: {
    spine: string;
    name: string;
    body: string;
    price: string;
    deliverables: string[];
    solutionsNote: string;
    ctaPrimary: string;
    secondaryNote: string;
  };
  insights: {
    spine: string;
    headline: string;
    intro: string;
    cta: string;
  };
  /** Legacy — not rendered on homepage */
  selection?: {
    spine: string;
    headline: string;
    headlineEm: string;
    forItems: string[];
    forLabel?: string;
    forList?: string[];
    notForLabel: string;
    notFor: string[];
  };
  /** Legacy — not rendered on homepage */
  about?: {
    spine: string;
    headline: string;
    headlineEm: string;
    statement: string;
    body?: string;
    creds: string;
    signature: string;
    postSignature?: string;
    quote: string;
  };
};
