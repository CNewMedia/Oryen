/**
 * Central GROQ strings. Import from route loaders / server components.
 * Expand per document type as content grows.
 */

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  _id,
  title,
  defaultSeo,
  "ogImageUrl": defaultSeo.ogImage.asset->url
}`;

export const navigationQuery = `*[_type == "navigation"][0]{
  _id,
  items[]{ label, href, children[]{ label, href } }
}`;

export const homePageQuery = `*[_type == "homePage"][0]{
  _id,
  title,
  seo
}`;

export const servicesIndexQuery = `*[_type == "service" && defined(slug.current)] | order(title asc) {
  _id,
  title,
  "slug": slug.current
}`;

export const serviceBySlugQuery = `*[_type == "service" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  seo
}`;

export const sectorsIndexQuery = `*[_type == "sector" && defined(slug.current)] | order(title asc) {
  _id,
  title,
  "slug": slug.current
}`;

export const sectorBySlugQuery = `*[_type == "sector" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  seo
}`;

export const insightsIndexQuery = `*[_type == "insight" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt
}`;

export const insightBySlugQuery = `*[_type == "insight" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  seo,
  body
}`;

export const footerQuery = `*[_type == "footer"][0]{
  _id,
  columns[]{ heading, links[]{ label, href } }
}`;
