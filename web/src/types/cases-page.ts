/** Full cases overview — `/[locale]/cases` (bootstrap + CMS overlay). */
export type CaseDisplayMode = 'photo' | 'typographic';

export type CasesPageMetric = { value: string; label: string };

export type CasesPageCase = {
  slug: string;
  title: string;
  categoryLabel: string;
  tagline: string;
  situation: string;
  metrics: CasesPageMetric[];
  oryenLine: string;
  outcome: string;
  displayMode: CaseDisplayMode;
  /** Public path under `/public`, e.g. `/images/cases/foo.jpg` */
  imageSrc: string | null;
  /** Optional `/public` video (e.g. `.mov`) — shown with poster when `imageSrc` set */
  videoSrc: string | null;
};

export type CasesPageContent = {
  meta: { title: string; description: string };
  hero: {
    spine: string;
    eyebrow: string;
    headlineBefore: string;
    headlineEm: string;
    sub: string;
  };
  disclaimer: {
    eyebrow: string;
    body: string;
    ctaLabel: string;
  };
  cases: CasesPageCase[];
};
