import { notFound } from 'next/navigation';

import { getSanityClient } from '@/lib/sanity/client';
import { urlForImage } from '@/lib/sanity/image';
import { loadSiteSettings } from '@/lib/sanity/load-site-settings';
import { resolvePageSeo } from '@/lib/sanity/resolve-page-seo';
import type { InsightArticleDetail, InsightListItem } from '@/types/insight';

const LIST = `*[_type == "insightArticle" && locale == $locale && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc) {
  _id,
  title,
  excerpt,
  "publishedAt": publishedAt,
  readingMinutes,
  authorName,
  "slug": slug.current,
  tags,
  heroImage,
  featured
}`;

const BY_TAG = `*[_type == "insightArticle" && locale == $locale && defined(slug.current) && $tag in tags] | order(coalesce(publishedAt, _createdAt) desc) {
  _id,
  title,
  excerpt,
  "publishedAt": publishedAt,
  readingMinutes,
  authorName,
  "slug": slug.current,
  tags,
  heroImage,
  featured
}`;

const ONE = `*[_type == "insightArticle" && locale == $locale && slug.current == $slug][0]{
  title,
  excerpt,
  "publishedAt": publishedAt,
  readingMinutes,
  authorName,
  "slug": slug.current,
  tags,
  heroImage,
  body,
  seo
}`;

function mapRow(r: Record<string, unknown>): InsightListItem {
  return {
    _id: String(r._id ?? ''),
    title: typeof r.title === 'string' ? r.title : '',
    excerpt: typeof r.excerpt === 'string' ? r.excerpt : null,
    slug: typeof r.slug === 'string' ? r.slug : '',
    publishedAt:
      typeof r.publishedAt === 'string' ? r.publishedAt : null,
    readingMinutes:
      typeof r.readingMinutes === 'number' ? r.readingMinutes : null,
    authorName: typeof r.authorName === 'string' ? r.authorName : null,
    tags: Array.isArray(r.tags)
      ? r.tags.filter((t): t is string => typeof t === 'string')
      : null,
    heroImageUrl: urlForImage(r.heroImage) ?? null,
    featured: r.featured === true,
  };
}

export async function loadInsightArticleList(
  locale: string
): Promise<InsightListItem[]> {
  const client = getSanityClient();
  if (!client) return [];
  const rows = (await client.fetch(LIST, { locale })) as unknown;
  if (!Array.isArray(rows)) return [];
  return rows.map((r) =>
    mapRow(typeof r === 'object' && r !== null ? (r as Record<string, unknown>) : {})
  );
}

export async function loadInsightArticleListByTag(
  locale: string,
  tag: string
): Promise<InsightListItem[]> {
  const client = getSanityClient();
  if (!client) return [];
  const rows = (await client.fetch(BY_TAG, {
    locale,
    tag,
  } as Record<string, string>)) as unknown;
  if (!Array.isArray(rows)) return [];
  return rows.map((r) =>
    mapRow(typeof r === 'object' && r !== null ? (r as Record<string, unknown>) : {})
  );
}

export async function loadInsightArticleBySlug(
  locale: string,
  slug: string
): Promise<InsightArticleDetail | null> {
  const client = getSanityClient();
  if (!client) return null;
  const doc = (await client.fetch(ONE, { locale, slug })) as Record<
    string,
    unknown
  > | null;
  if (!doc) return null;

  const settings = await loadSiteSettings(locale);
  const title = typeof doc.title === 'string' ? doc.title : '';
  const excerpt = typeof doc.excerpt === 'string' ? doc.excerpt : null;
  const desc = excerpt ?? title;
  const seo = resolvePageSeo(doc.seo, settings, title, desc);

  return {
    title,
    excerpt,
    slug: typeof doc.slug === 'string' ? doc.slug : slug,
    publishedAt:
      typeof doc.publishedAt === 'string' ? doc.publishedAt : null,
    readingMinutes:
      typeof doc.readingMinutes === 'number' ? doc.readingMinutes : null,
    authorName: typeof doc.authorName === 'string' ? doc.authorName : null,
    tags: Array.isArray(doc.tags)
      ? doc.tags.filter((t): t is string => typeof t === 'string')
      : null,
    body: Array.isArray(doc.body) ? (doc.body as unknown[]) : null,
    heroImageUrl: urlForImage(doc.heroImage) ?? null,
    seo,
  };
}

export async function requireInsightArticleBySlug(
  locale: string,
  slug: string
): Promise<InsightArticleDetail> {
  const a = await loadInsightArticleBySlug(locale, slug);
  if (!a) notFound();
  return a;
}
