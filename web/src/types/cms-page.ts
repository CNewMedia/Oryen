import type { ResolvedPageSeo } from '@/lib/sanity/resolve-page-seo';

export type OverviewHeaderContent = {
  eyebrow: string;
  title: string;
  intro: string;
};

export type ContactFormLabels = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  submit: string;
  optional: string;
};

export type ContactPageContent = {
  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
    primaryCta: string;
    primaryCtaHref: string;
    secondaryCta: string | null;
    secondaryCtaHref: string | null;
  };
  expectations: { headline: string; body: string };
  form: { headline: string; labels: ContactFormLabels };
  reassurance: { body: string; note: string };
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

/** About page — `studio/schemas/documents/overOnsPage.ts` (`oryen.overOns.{locale}`). */
export type OverOnsPageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  body: unknown[] | null;
  seo: ResolvedPageSeo;
};
