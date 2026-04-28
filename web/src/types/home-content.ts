/** ORYEN homepage section model — mirrors Sanity `homepage` document fields. */

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
    claim: string;
    sub: string;
    primaryCta: string;
    secondaryCta: string;
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
  selection: {
    spine: string;
    headline: string;
    headlineEm: string;
    forItems: string[];
    forLabel?: string;
    forList?: string[];
    notForLabel: string;
    notFor: string[];
  };
  about: {
    spine: string;
    headline: string;
    headlineEm: string;
    statement: string;
    body?: string;
    creds: string;
    signature: string;
    /** Tekst onder de handtekening, vóór de team-link (bijv. persoonlijke noot). */
    postSignature?: string;
    quote: string;
  };
  offer: {
    spine: string;
    name: string;
    body: string;
    ctaPrimary: string;
    secondaryHlBeforeEm: string;
    secondaryHlEm: string;
    secondaryBody: string;
    secondaryNote: string;
  };
};
