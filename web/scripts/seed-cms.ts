/**
 * Idempotent seed for ORYEN singleton documents (nl + en).
 *
 * Required env:
 *   NEXT_PUBLIC_SANITY_PROJECT_ID
 *   NEXT_PUBLIC_SANITY_DATASET (default: production)
 *   SANITY_API_WRITE_TOKEN — Editor token with write access to the dataset
 *
 * Loads `web/.env.local` and `web/.env` automatically (run via npm from `web/`).
 *
 * Run from repo root:
 *   npm run seed:cms
 * or from web/:
 *   npm run seed:cms
 */
import { config as loadEnv } from 'dotenv';
import { createClient } from '@sanity/client';
import { existsSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

/** Works when cwd is `web/` (npm workspace) or repo root. */
function loadWebEnv(): void {
  const paths = [
    resolve(process.cwd(), '.env.local'),
    resolve(process.cwd(), '.env'),
    resolve(process.cwd(), 'web/.env.local'),
    resolve(process.cwd(), 'web/.env'),
  ];
  for (const p of paths) {
    if (existsSync(p)) loadEnv({ path: p });
  }
}
loadWebEnv();

type Locale = 'nl' | 'en';

type OryBundle = {
  Meta: { siteName: string; defaultDescription: string };
  Global: {
    header: { brandWordmark: string; tagline: string };
    footer: { brandShort: string; tagline: string; domain: string };
  };
  Nav: { cta: string };
  Home: Record<string, unknown>;
  Aanbod: Record<string, unknown>;
  Pages: {
    contact: { eyebrow: string; title: string; intro: string };
    thankYou: { eyebrow: string; title: string; intro: string };
    privacy: { eyebrow: string; title: string; intro: string };
    cookies: { eyebrow: string; title: string; intro: string };
    insights: { eyebrow: string; title: string; intro: string };
    cases: { eyebrow: string; title: string; intro: string };
  };
};

function loadBundle(locale: Locale): OryBundle {
  const name = locale === 'nl' ? 'oryen-nl.json' : 'oryen-en.json';
  const path = join(
    process.cwd(),
    'src/lib/sanity/bootstrap/content',
    name
  );
  const raw = readFileSync(path, 'utf8');
  return JSON.parse(raw) as OryBundle;
}

function siteSettingsDoc(locale: Locale, m: OryBundle): Record<string, unknown> {
  return {
    _id: `oryen.siteSettings.${locale}`,
    _type: 'siteSettings',
    locale,
    siteTitle: m.Meta.siteName,
    defaultSeo: {
      metaTitle: m.Meta.siteName,
      metaDescription: m.Meta.defaultDescription,
      robotsIndex: true,
    },
    headerBrandWordmark: m.Global.header.brandWordmark,
    headerTagline: m.Global.header.tagline,
    headerCtaLabel: m.Nav.cta,
    footerBrandShort: m.Global.footer.brandShort,
    footerTagline: m.Global.footer.tagline,
    footerDomain: m.Global.footer.domain,
    contactEmail: 'hello@oryen.be',
  };
}

function homepageDoc(locale: Locale, m: OryBundle): Record<string, unknown> {
  const H = m.Home as Record<string, unknown>;
  return {
    _id: `oryen.homepage.${locale}`,
    _type: 'homepage',
    locale,
    internalTitle: 'Homepage',
    seo: {
      metaTitle: m.Meta.siteName,
      metaDescription: m.Meta.defaultDescription,
      robotsIndex: true,
    },
    hero: H.hero,
    diagnosis: H.diagnosis,
    approach: H.approach,
    proof: H.proof,
    selection: H.selection,
    about: H.about,
    offer: H.offer,
  };
}

function aanbodDoc(locale: Locale, m: OryBundle): Record<string, unknown> {
  const A = m.Aanbod as Record<string, unknown>;
  const meta = A.meta as { title: string; description: string };
  return {
    _id: `oryen.aanbod.${locale}`,
    _type: 'aanbodPage',
    locale,
    seo: {
      metaTitle: meta.title,
      metaDescription: meta.description,
      robotsIndex: true,
    },
    hero: A.hero,
    offerClarity: A.offerClarity,
    whatYouGet: A.whatYouGet,
    howItWorks: A.howItWorks,
    whatAfter: A.whatAfter,
    pricing: A.pricing,
    reassurance: A.reassurance,
    closing: A.closing,
  };
}

function insightsOverviewDoc(locale: Locale, m: OryBundle): Record<string, unknown> {
  const p = m.Pages.insights;
  return {
    _id: `oryen.insightsOverview.${locale}`,
    _type: 'insightsOverviewPage',
    locale,
    internalTitle: 'Insights',
    seo: {
      metaTitle: `${p.title} | ${m.Meta.siteName}`,
      metaDescription: p.intro,
      robotsIndex: true,
    },
    eyebrow: p.eyebrow,
    title: p.title,
    intro: p.intro,
    sections: [],
  };
}

function casesOverviewDoc(locale: Locale, m: OryBundle): Record<string, unknown> {
  const p = m.Pages.cases;
  return {
    _id: `oryen.casestudiesOverview.${locale}`,
    _type: 'casestudiesOverviewPage',
    locale,
    internalTitle: 'Casestudies',
    seo: {
      metaTitle: `${p.title} | ${m.Meta.siteName}`,
      metaDescription: p.intro,
      robotsIndex: true,
    },
    eyebrow: p.eyebrow,
    title: p.title,
    intro: p.intro,
    sections: [],
  };
}

function contactDoc(locale: Locale, m: OryBundle): Record<string, unknown> {
  const p = m.Pages.contact;
  return {
    _id: `oryen.contact.${locale}`,
    _type: 'contactPage',
    locale,
    internalTitle: 'Contact',
    seo: {
      metaTitle: `${p.title} | ${m.Meta.siteName}`,
      metaDescription: p.intro,
      robotsIndex: true,
    },
    eyebrow: p.eyebrow,
    title: p.title,
    intro: p.intro,
    sections: [],
  };
}

function thankYouDoc(locale: Locale, m: OryBundle): Record<string, unknown> {
  const p = m.Pages.thankYou;
  const supportingNl =
    'We lezen elk bericht zelf. Geen automatisering — wel oprechte opvolging.';
  const supportingEn =
    'We read every message ourselves. No automation — genuine follow-up.';
  return {
    _id: `oryen.thankYou.${locale}`,
    _type: 'thankYouPage',
    locale,
    seo: {
      metaTitle: `${p.title} | ${m.Meta.siteName}`,
      metaDescription: p.intro,
      robotsIndex: true,
    },
    eyebrow: p.eyebrow,
    title: p.title,
    intro: p.intro,
    supportingText: locale === 'nl' ? supportingNl : supportingEn,
    secondaryCtaLabel: locale === 'nl' ? 'Naar cases' : 'View cases',
    secondaryCtaPath: '/cases',
    primaryCtaLabel: locale === 'nl' ? 'Naar home' : 'Home',
    primaryCtaPath: '/',
  };
}

function legalDoc(
  locale: Locale,
  m: OryBundle,
  legalKey: 'privacy' | 'cookies'
): Record<string, unknown> {
  const p = m.Pages[legalKey];
  const placeholder =
    locale === 'nl'
      ? 'Definitieve juridische tekst volgt in Sanity.'
      : 'Final legal copy will be managed in Sanity.';
  return {
    _id: `oryen.legal.${locale}.${legalKey}`,
    _type: 'legalPage',
    locale,
    legalKey,
    title: p.title,
    seo: {
      metaTitle: `${p.title} | ${m.Meta.siteName}`,
      metaDescription: placeholder,
      robotsIndex: true,
    },
    body: [],
  };
}

function allDocsForLocale(locale: Locale): Record<string, unknown>[] {
  const m = loadBundle(locale);
  return [
    siteSettingsDoc(locale, m),
    homepageDoc(locale, m),
    aanbodDoc(locale, m),
    insightsOverviewDoc(locale, m),
    casesOverviewDoc(locale, m),
    contactDoc(locale, m),
    thankYouDoc(locale, m),
    legalDoc(locale, m, 'privacy'),
    legalDoc(locale, m, 'cookies'),
  ];
}

/** No locale field on schema — one document each for the whole site. */
function realityCheckDoc(): Record<string, unknown> {
  return {
    _id: 'oryen.realityCheck',
    _type: 'realityCheckPage',
    internalTitle: 'Reality Check',
    seo: {
      metaTitle: 'Reality Check',
      metaDescription: 'ORYEN',
      robotsIndex: true,
    },
    sections: [],
  };
}

function overOnsDoc(): Record<string, unknown> {
  return {
    _id: 'oryen.overOns',
    _type: 'overOnsPage',
    internalTitle: 'Over ons',
    seo: {
      metaTitle: 'Over ons',
      metaDescription: 'ORYEN',
      robotsIndex: true,
    },
    sections: [],
  };
}

async function main(): Promise<void> {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim();
  const dataset =
    process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() || 'production';
  const token = process.env.SANITY_API_WRITE_TOKEN?.trim();

  if (!projectId) {
    console.error(
      'Missing NEXT_PUBLIC_SANITY_PROJECT_ID. Set it in the environment.'
    );
    process.exit(1);
  }
  if (!token) {
    console.error(
      'Missing SANITY_API_WRITE_TOKEN (Editor token with write access to the dataset).'
    );
    process.exit(1);
  }

  const client = createClient({
    projectId,
    dataset,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01',
    token,
    useCdn: false,
  });

  const docs = [
    realityCheckDoc(),
    overOnsDoc(),
    ...allDocsForLocale('nl'),
    ...allDocsForLocale('en'),
  ];
  const tx = client.transaction();
  for (const doc of docs) {
    tx.createOrReplace(doc as never);
  }
  await tx.commit();
  console.log(
    `Seeded ${docs.length} documents to ${projectId}/${dataset} (createOrReplace).`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
