import type { ResolvedPageSeo } from '@/lib/sanity/resolve-page-seo';

export type CaseStudyListItem = {
  _id: string;
  title: string;
  clientName: string | null;
  sector: string | null;
  slug: string;
  summary: string | null;
  featured: boolean;
  heroImageUrl: string | null;
};

export type CaseMetric = { label: string | null; value: string | null };

export type CaseStudyDetail = {
  title: string;
  clientName: string | null;
  sector: string | null;
  slug: string;
  summary: string | null;
  whatEveryoneSaw: string | null;
  whatOryenSaw: string | null;
  strategicShift: string | null;
  resultImpact: string | null;
  quote: string | null;
  metrics: CaseMetric[];
  body: unknown[] | null;
  heroImageUrl: string | null;
  seo: ResolvedPageSeo;
};
