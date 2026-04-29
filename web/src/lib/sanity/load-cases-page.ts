import { getBootstrapCasesPage } from '@/lib/sanity/bootstrap/local-bootstrap';
import { getSanityClient } from '@/lib/sanity/client';
import { urlForImage } from '@/lib/sanity/image';
import { loadSiteSettings } from '@/lib/sanity/load-site-settings';
import { resolvePageSeo } from '@/lib/sanity/resolve-page-seo';
import type { ResolvedPageSeo } from '@/lib/sanity/resolve-page-seo';
import type { CasesPageCase, CasesPageContent } from '@/types/cases-page';

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

function str(v: unknown, fallback: string): string {
  return typeof v === 'string' && v.trim() ? v : fallback;
}

function pickLong(...vals: unknown[]): string {
  for (const v of vals) {
    if (typeof v === 'string' && v.trim()) return v.trim();
  }
  return '';
}

function mapMetrics(raw: unknown): { value: string; label: string }[] {
  if (!Array.isArray(raw)) return [];
  const out: { value: string; label: string }[] = [];
  for (const m of raw) {
    if (!isRecord(m)) continue;
    const value = typeof m.value === 'string' ? m.value : '';
    const label = typeof m.label === 'string' ? m.label : '';
    if (!value && !label) continue;
    out.push({ value: value || '—', label: label || '' });
  }
  return out;
}

const OVERVIEW_QUERY = `*[_type == "casestudiesOverviewPage" && (locale == $locale || _id == $id)][0]`;

const CASES_QUERY = `*[_type == "caseStudy" && locale == $locale && defined(slug.current)] | order(coalesce(sortOrder, 999) asc, title asc) {
  "slug": slug.current,
  title,
  categoryLabel,
  tagline,
  situation,
  oryenLine,
  outcome,
  whatEveryoneSaw,
  whatOryenSaw,
  resultImpact,
  metrics,
  displayMode,
  overviewVideoUrl,
  heroVisual
}`;

function mergeHero(
  base: CasesPageContent['hero'],
  raw: unknown
): CasesPageContent['hero'] {
  if (!isRecord(raw)) return base;
  return {
    spine: str(raw.spine, base.spine),
    eyebrow: str(raw.eyebrow, base.eyebrow),
    headlineBefore: str(raw.headlineBefore, base.headlineBefore),
    headlineEm: str(raw.headlineEm, base.headlineEm),
    sub: str(raw.sub, base.sub),
  };
}

function mergeDisclaimer(
  base: CasesPageContent['disclaimer'],
  raw: unknown
): CasesPageContent['disclaimer'] {
  if (!isRecord(raw)) return base;
  return {
    eyebrow: str(raw.eyebrow, base.eyebrow),
    body: str(raw.body, base.body),
    ctaLabel: str(raw.ctaLabel, base.ctaLabel),
  };
}

function mergeCasesPageContent(
  base: CasesPageContent,
  doc: Record<string, unknown> | null
): CasesPageContent {
  if (!doc) return base;
  const heroRaw = isRecord(doc.hero) ? doc.hero : null;
  const discRaw = isRecord(doc.disclaimer) ? doc.disclaimer : null;
  return {
    meta: base.meta,
    hero: mergeHero(base.hero, heroRaw),
    disclaimer: mergeDisclaimer(base.disclaimer, discRaw),
    cases: base.cases,
  };
}

/** Prefer flat seo doc meta when nested seo sets titles. */
function mergeMetaFromSeo(
  base: CasesPageContent,
  doc: Record<string, unknown> | null
): CasesPageContent {
  if (!doc) return base;
  const seo = isRecord(doc.seo) ? doc.seo : null;
  if (!seo) return base;
  const mt =
    typeof seo.metaTitle === 'string' && seo.metaTitle.trim()
      ? seo.metaTitle.trim()
      : base.meta.title;
  const md =
    typeof seo.metaDescription === 'string' && seo.metaDescription.trim()
      ? seo.metaDescription.trim()
      : base.meta.description;
  return {
    ...base,
    meta: { title: mt, description: md },
  };
}

function mergeOneCase(
  base: CasesPageCase,
  raw: Record<string, unknown>
): CasesPageCase {
  const situation =
    pickLong(raw.situation, raw.whatEveryoneSaw) || base.situation;
  const outcome =
    pickLong(raw.outcome, raw.resultImpact) || base.outcome;
  const oryenLine =
    pickLong(raw.oryenLine, raw.whatOryenSaw) || base.oryenLine;

  const metricsRaw = mapMetrics(raw.metrics);
  const heroUrl = urlForImage(raw.heroVisual);
  const img = heroUrl ?? base.imageSrc;

  const dm = raw.displayMode;
  const displayMode: CasesPageCase['displayMode'] =
    dm === 'typographic'
      ? 'typographic'
      : dm === 'photo'
        ? 'photo'
        : base.displayMode;

  const vu =
    typeof raw.overviewVideoUrl === 'string' && raw.overviewVideoUrl.trim()
      ? raw.overviewVideoUrl.trim()
      : base.videoSrc;

  return {
    ...base,
    title: str(raw.title, base.title),
    categoryLabel: str(raw.categoryLabel, base.categoryLabel),
    tagline: str(raw.tagline, base.tagline),
    situation,
    outcome,
    oryenLine,
    metrics: metricsRaw.length ? metricsRaw : base.metrics,
    displayMode,
    imageSrc: img,
    videoSrc: vu,
  };
}

function mergeCasesList(
  baseCases: CasesPageCase[],
  rows: unknown[]
): CasesPageCase[] {
  const map = new Map<string, Record<string, unknown>>();
  for (const r of rows) {
    if (!isRecord(r)) continue;
    const slug = typeof r.slug === 'string' ? r.slug : '';
    if (slug) map.set(slug, r);
  }
  return baseCases.map((c) => {
    const doc = map.get(c.slug);
    return doc ? mergeOneCase(c, doc) : c;
  });
}

export type CasesPageData = {
  content: CasesPageContent;
  seo: ResolvedPageSeo;
};

export async function loadCasesPage(locale: string): Promise<CasesPageData> {
  const settings = await loadSiteSettings(locale);
  const base = getBootstrapCasesPage(locale);
  const client = getSanityClient();

  if (!client) {
    const seo = resolvePageSeo(
      null,
      settings,
      base.meta.title,
      base.meta.description
    );
    return { content: base, seo };
  }

  const id = `oryen.casestudiesOverview.${locale}`;
  const doc = (await client.fetch(OVERVIEW_QUERY, { locale, id })) as Record<
    string,
    unknown
  > | null;

  let content = mergeCasesPageContent(base, doc);
  content = mergeMetaFromSeo(content, doc);

  const rows = (await client.fetch(CASES_QUERY, { locale })) as unknown;
  const list = Array.isArray(rows) ? rows : [];

  content = {
    ...content,
    cases: mergeCasesList(content.cases, list),
  };

  const seo = resolvePageSeo(
    doc?.seo,
    settings,
    content.meta.title,
    content.meta.description
  );

  return { content, seo };
}
