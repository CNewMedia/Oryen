import { getBootstrapContactPage } from '@/lib/sanity/bootstrap/local-bootstrap';
import { getSanityClient } from '@/lib/sanity/client';
import { loadSiteSettings } from '@/lib/sanity/load-site-settings';
import { resolvePageSeo } from '@/lib/sanity/resolve-page-seo';
import type { ContactFormLabels, ContactPageContent } from '@/types/cms-page';

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

function str(v: unknown, fallback: string): string {
  return typeof v === 'string' && v.trim() ? v : fallback;
}

function strOrNull(v: unknown, fallback: string | null): string | null {
  if (typeof v === 'string' && v.trim()) return v;
  return fallback;
}

const QUERY = `*[_type == "contactPage" && (locale == $locale || _id == $id)][0]`;

export async function loadContactPage(locale: string): Promise<ContactPageContent> {
  const settings = await loadSiteSettings(locale);
  const base = getBootstrapContactPage(locale);
  const client = getSanityClient();
  if (!client) return base;

  const id = `oryen.contact.${locale}`;
  const doc = (await client.fetch(QUERY, { locale, id })) as Record<
    string,
    unknown
  > | null;
  if (!doc) return base;

  const heroRaw = isRecord(doc.hero) ? doc.hero : {};
  const hero = {
    eyebrow: str(heroRaw.eyebrow, base.hero.eyebrow),
    headline: str(heroRaw.headline, base.hero.headline),
    sub: str(heroRaw.sub, base.hero.sub),
    primaryCta: str(heroRaw.primaryCta, base.hero.primaryCta),
    primaryCtaHref: str(heroRaw.primaryCtaHref, base.hero.primaryCtaHref),
    secondaryCta: strOrNull(heroRaw.secondaryCta, base.hero.secondaryCta),
    secondaryCtaHref: strOrNull(
      heroRaw.secondaryCtaHref,
      base.hero.secondaryCtaHref
    ),
  };

  const expRaw = isRecord(doc.expectations) ? doc.expectations : {};
  const expectations = {
    headline: str(expRaw.headline, base.expectations.headline),
    body: str(expRaw.body, base.expectations.body),
  };

  const formRaw = isRecord(doc.form) ? doc.form : {};
  const labelsRaw = isRecord(formRaw.labels) ? formRaw.labels : {};
  const labels: ContactFormLabels = {
    name: str(labelsRaw.name, base.form.labels.name),
    email: str(labelsRaw.email, base.form.labels.email),
    company: str(labelsRaw.company, base.form.labels.company),
    phone: str(labelsRaw.phone, base.form.labels.phone),
    message: str(labelsRaw.message, base.form.labels.message),
    submit: str(labelsRaw.submit, base.form.labels.submit),
    optional: str(labelsRaw.optional, base.form.labels.optional),
  };
  const form = {
    headline: str(formRaw.headline, base.form.headline),
    labels,
  };

  const reaRaw = isRecord(doc.reassurance) ? doc.reassurance : {};
  const reassurance = {
    body: str(reaRaw.body, base.reassurance.body),
    note: str(reaRaw.note, base.reassurance.note),
  };

  const seo = resolvePageSeo(doc.seo, settings, hero.headline, hero.sub);

  return { hero, expectations, form, reassurance, seo };
}
