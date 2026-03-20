/**
 * Central GROQ strings. Import from server components / route handlers.
 */

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  _id,
  siteTitle,
  defaultSeo,
  "ogImageUrl": defaultSeo.ogImage.asset->url
}`;

export const homepageQuery = `*[_type == "homepage"][0]{
  _id,
  internalTitle,
  seo
}`;

export const realityCheckPageQuery = `*[_type == "realityCheckPage"][0]{
  _id,
  internalTitle,
  seo
}`;

export const aanbodPageQuery = `*[_type == "aanbodPage"][0]{
  _id,
  internalTitle,
  seo
}`;

export const casestudiesOverviewPageQuery = `*[_type == "casestudiesOverviewPage"][0]{
  _id,
  internalTitle,
  seo
}`;

export const insightsOverviewPageQuery = `*[_type == "insightsOverviewPage"][0]{
  _id,
  internalTitle,
  seo
}`;

export const overOnsPageQuery = `*[_type == "overOnsPage"][0]{
  _id,
  internalTitle,
  seo
}`;

export const contactPageQuery = `*[_type == "contactPage"][0]{
  _id,
  internalTitle,
  seo
}`;

export const caseStudyIndexQuery = `*[_type == "caseStudy" && defined(slug.current)] | order(title asc) {
  _id,
  title,
  "slug": slug.current
}`;

export const caseStudyBySlugQuery = `*[_type == "caseStudy" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  summary,
  seo,
  body
}`;

export const insightArticleIndexQuery = `*[_type == "insightArticle" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt
}`;

export const insightArticleBySlugQuery = `*[_type == "insightArticle" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  seo,
  body
}`;
