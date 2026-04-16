import { notFound } from 'next/navigation';

import { getSanityClient } from '@/lib/sanity/client';
import { urlForImage } from '@/lib/sanity/image';
import { loadSiteSettings } from '@/lib/sanity/load-site-settings';
import { resolvePageSeo } from '@/lib/sanity/resolve-page-seo';
import type { CaseMetric, CaseStudyDetail, CaseStudyListItem } from '@/types/case-study';

const LIST = `*[_type == "caseStudy" && locale == $locale && defined(slug.current)] | order(coalesce(sortOrder, 999) asc, title asc) {
  _id,
  title,
  clientName,
  sector,
  "slug": slug.current,
  summary,
  featured,
  heroVisual
}`;

const ONE = `*[_type == "caseStudy" && locale == $locale && slug.current == $slug][0]{
  title,
  clientName,
  sector,
  "slug": slug.current,
  summary,
  whatEveryoneSaw,
  whatOryenSaw,
  strategicShift,
  resultImpact,
  quote,
  metrics,
  body,
  heroVisual,
  seo
}`;

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

export async function loadCaseStudyList(
  locale: string
): Promise<CaseStudyListItem[]> {
  const client = getSanityClient();
  if (!client) return [];
  const rows = (await client.fetch(LIST, { locale })) as unknown;
  if (!Array.isArray(rows)) return [];
  return rows.map((r) => {
    const o = isRecord(r) ? r : {};
    return {
      _id: String(o._id ?? ''),
      title: typeof o.title === 'string' ? o.title : '',
      clientName: typeof o.clientName === 'string' ? o.clientName : null,
      sector: typeof o.sector === 'string' ? o.sector : null,
      slug: typeof o.slug === 'string' ? o.slug : '',
      summary: typeof o.summary === 'string' ? o.summary : null,
      featured: o.featured === true,
      heroImageUrl: urlForImage(o.heroVisual) ?? null,
    };
  });
}

function mapMetrics(raw: unknown): CaseMetric[] {
  if (!Array.isArray(raw)) return [];
  return raw.map((m) => {
    if (!isRecord(m)) return { label: null, value: null };
    return {
      label: typeof m.label === 'string' ? m.label : null,
      value: typeof m.value === 'string' ? m.value : null,
    };
  });
}

export async function loadCaseStudyBySlug(
  locale: string,
  slug: string
): Promise<CaseStudyDetail | null> {
  const client = getSanityClient();
  if (!client) return null;
  const doc = (await client.fetch(ONE, { locale, slug })) as Record<
    string,
    unknown
  > | null;
  if (!doc) return null;

  const settings = await loadSiteSettings(locale);
  const title = typeof doc.title === 'string' ? doc.title : '';
  const summary = typeof doc.summary === 'string' ? doc.summary : null;
  const desc = summary ?? title;
  const seo = resolvePageSeo(doc.seo, settings, title, desc);

  return {
    title,
    clientName: typeof doc.clientName === 'string' ? doc.clientName : null,
    sector: typeof doc.sector === 'string' ? doc.sector : null,
    slug: typeof doc.slug === 'string' ? doc.slug : slug,
    summary,
    whatEveryoneSaw:
      typeof doc.whatEveryoneSaw === 'string' ? doc.whatEveryoneSaw : null,
    whatOryenSaw:
      typeof doc.whatOryenSaw === 'string' ? doc.whatOryenSaw : null,
    strategicShift:
      typeof doc.strategicShift === 'string' ? doc.strategicShift : null,
    resultImpact:
      typeof doc.resultImpact === 'string' ? doc.resultImpact : null,
    quote: typeof doc.quote === 'string' ? doc.quote : null,
    metrics: mapMetrics(doc.metrics),
    body: Array.isArray(doc.body) ? (doc.body as unknown[]) : null,
    heroImageUrl: urlForImage(doc.heroVisual) ?? null,
    seo,
  };
}

export async function requireCaseStudyBySlug(
  locale: string,
  slug: string
): Promise<CaseStudyDetail> {
  const c = await loadCaseStudyBySlug(locale, slug);
  if (!c) notFound();
  return c;
}
