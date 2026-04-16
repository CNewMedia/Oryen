import type { ResolvedPageSeo } from '@/lib/sanity/resolve-page-seo';

export type OverviewHeaderContent = {
  eyebrow: string;
  title: string;
  intro: string;
};

export type ContactPageContent = OverviewHeaderContent & {
  seo: ResolvedPageSeo;
};

export type ThankYouPageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  supportingText: string;
  secondaryCtaLabel: string;
  secondaryCtaPath: string;
  primaryCtaLabel: string;
  primaryCtaPath: string;
  seo: ResolvedPageSeo;
};

export type LegalPageContent = {
  eyebrow: string;
  title: string;
  body: unknown[] | null;
  seo: ResolvedPageSeo;
};
