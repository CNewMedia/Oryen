/**
 * Offline / no-project-id bootstrap copy for ORYEN pages.
 * Source: `content/oryen-*.json` (not imported from `messages/` at runtime).
 */
import type { AanbodContent } from '@/types/aanbod';
import type { AanpakPageContent } from '@/types/aanpak-page';
import type {
  ContactFormLabels,
  ContactPageContent,
  LegalPageContent,
  OverOnsPageContent,
  OverviewHeaderContent,
  ThankYouPageContent,
} from '@/types/cms-page';
import type { HomeContent } from '@/types/home-content';
import type { SiteSettingsResolved } from '@/types/site-settings';

import { siteImages } from '@/lib/site-images';

import { getLegalPageBody, getLegalPageDescription } from './content/legal-copy';
import oryEn from './content/oryen-en.json';
import oryNl from './content/oryen-nl.json';

type Ory = typeof oryNl;

function pickOry(locale: string): Ory {
  return locale === 'en' ? (oryEn as unknown as Ory) : oryNl;
}

export function getBootstrapHomeContent(locale: string): HomeContent {
  return pickOry(locale).Home as unknown as HomeContent;
}

export function getBootstrapAanpakPage(locale: string): AanpakPageContent {
  const m = pickOry(locale);
  const base = (m as unknown as { Aanpak: AanpakPageContent }).Aanpak;
  /** Default: blueprint-only hero; set `heroImageUrl` in CMS for optional photo underlay. */
  return { ...base };
}

export function getBootstrapAanbodContent(locale: string): AanbodContent {
  const m = pickOry(locale);
  return { ...(m.Aanbod as unknown as AanbodContent) };
}

export function getBootstrapSiteSettings(locale: string): SiteSettingsResolved {
  const m = pickOry(locale);
  return {
    locale,
    siteTitle: m.Meta.siteName,
    defaultMetaTitle: m.Meta.siteName,
    defaultMetaDescription: m.Meta.defaultDescription,
    defaultOgTitle: null,
    defaultOgDescription: null,
    defaultRobotsIndex: true,
    headerBrandWordmark: m.Global.header.brandWordmark,
    headerTagline: m.Global.header.tagline,
    headerCtaLabel: m.Nav.cta,
    footerBrandShort: m.Global.footer.brandShort,
    footerTagline: m.Global.footer.tagline,
    footerDomain: m.Global.footer.domain,
    contactEmail: 'info@cnip.be',
    contactPhone: null,
    contactAddress: 'Ottergemsesteenweg Zuid 808 b125\n9000 Gent',
    legalLinks: [
      { label: m.Pages.privacy.eyebrow, href: '/privacy' },
      { label: m.Pages.cookies.eyebrow, href: '/cookies' },
    ],
    socialLinks: [],
    tracking: {
      gtmEnabled: false,
      gtmContainerId: null,
      ga4Enabled: false,
      ga4MeasurementId: null,
      googleAdsEnabled: false,
      googleAdsConversionId: null,
      googleAdsConversionLabel: null,
      metaPixelEnabled: false,
      metaPixelId: null,
      linkedinEnabled: false,
      linkedinPartnerId: null,
      headScripts: null,
      bodyEndScripts: null,
    },
  };
}

export function getBootstrapOverOnsPage(locale: string): OverOnsPageContent {
  const m = pickOry(locale);
  const p = m.Pages.about;
  const title = `${p.title} | ${m.Meta.siteName}`;
  return {
    eyebrow: p.eyebrow,
    title: p.title,
    intro: p.intro,
    body: null,
    seo: {
      title,
      description: p.intro,
      ogTitle: title,
      ogDescription: p.intro,
      robotsIndex: true,
    },
  };
}

export function getBootstrapContactPage(locale: string): ContactPageContent {
  const m = pickOry(locale);
  const c = (m as unknown as { Contact: RawContact }).Contact;
  const metaTitle = c.meta.title;
  return {
    hero: {
      eyebrow: c.hero.eyebrow,
      headline: c.hero.headline,
      sub: c.hero.sub,
      primaryCta: c.hero.primaryCta,
      primaryCtaHref: c.hero.primaryCtaHref ?? '#contact-form',
      secondaryCta: c.hero.secondaryCta ?? null,
      secondaryCtaHref: c.hero.secondaryCtaHref ?? null,
    },
    expectations: {
      headline: c.expectations.headline,
      body: c.expectations.body,
    },
    form: {
      headline: c.form.headline,
      labels: c.form.labels as ContactFormLabels,
    },
    reassurance: {
      body: c.reassurance.body,
      note: c.reassurance.note,
    },
    seo: {
      title: metaTitle,
      description: c.meta.description,
      ogTitle: metaTitle,
      ogDescription: c.meta.description,
      robotsIndex: true,
    },
  };
}

type RawContact = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
    primaryCta: string;
    primaryCtaHref?: string;
    secondaryCta?: string | null;
    secondaryCtaHref?: string | null;
  };
  expectations: { headline: string; body: string };
  form: { headline: string; labels: ContactFormLabels };
  reassurance: { body: string; note: string };
};

export function getBootstrapThankYouPage(locale: string): ThankYouPageContent {
  const m = pickOry(locale);
  const p = m.Pages.thankYou;
  const supportingNl =
    'We lezen elk bericht zelf. Geen automatisering — wel oprechte opvolging.';
  const supportingEn =
    'We read every message ourselves. No automation — genuine follow-up.';
  const title = `${p.title} | ${m.Meta.siteName}`;
  return {
    eyebrow: p.eyebrow,
    title: p.title,
    intro: p.intro,
    supportingText: locale === 'nl' ? supportingNl : supportingEn,
    secondaryCtaLabel: locale === 'nl' ? 'Naar cases' : 'View cases',
    secondaryCtaPath: '/cases',
    primaryCtaLabel: locale === 'nl' ? 'Naar home' : 'Home',
    primaryCtaPath: '/',
    seo: {
      title,
      description: p.intro,
      ogTitle: title,
      ogDescription: p.intro,
      // Form confirmation — noindex by default.
      robotsIndex: false,
    },
  };
}

export function getBootstrapLegalPage(
  locale: string,
  key: 'privacy' | 'cookies'
): LegalPageContent {
  const m = pickOry(locale);
  const p = m.Pages[key];
  const title = `${p.title} | ${m.Meta.siteName}`;
  const description = getLegalPageDescription(locale, key);
  return {
    eyebrow: p.eyebrow,
    title: p.title,
    body: getLegalPageBody(locale, key),
    seo: {
      title,
      description,
      ogTitle: title,
      ogDescription: description,
      robotsIndex: true,
    },
  };
}

export function getBootstrapInsightsOverview(locale: string): OverviewHeaderContent {
  const p = pickOry(locale).Pages.insights;
  return {
    eyebrow: p.eyebrow,
    title: p.title,
    intro: p.intro,
  };
}

export function getBootstrapCasesOverview(locale: string): OverviewHeaderContent {
  const p = pickOry(locale).Pages.cases;
  return {
    eyebrow: p.eyebrow,
    title: p.title,
    intro: p.intro,
  };
}
