import type { ResolvedPageSeo } from '@/lib/sanity/resolve-page-seo';

export type InsightListItem = {
  _id: string;
  title: string;
  excerpt: string | null;
  slug: string;
  publishedAt: string | null;
  readingMinutes: number | null;
  authorName: string | null;
  tags: string[] | null;
  heroImageUrl: string | null;
  featured: boolean;
};

export type InsightArticleDetail = {
  title: string;
  excerpt: string | null;
  slug: string;
  publishedAt: string | null;
  readingMinutes: number | null;
  authorName: string | null;
  tags: string[] | null;
  body: unknown[] | null;
  heroImageUrl: string | null;
  seo: ResolvedPageSeo;
};
