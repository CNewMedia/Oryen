import { type SchemaTypeDefinition } from 'sanity';

import { aanbodPage } from './documents/aanbodPage';
import { caseStudy } from './documents/caseStudy';
import { casestudiesOverviewPage } from './documents/casestudiesOverviewPage';
import { contactPage } from './documents/contactPage';
import { homepage } from './documents/homepage';
import { insightArticle } from './documents/insightArticle';
import { insightsOverviewPage } from './documents/insightsOverviewPage';
import { overOnsPage } from './documents/overOnsPage';
import { realityCheckPage } from './documents/realityCheckPage';
import { service } from './documents/service';
import { siteSettings } from './documents/siteSettings';
import { teamMember } from './documents/teamMember';
import { testimonial } from './documents/testimonial';
import { buttonLink } from './objects/buttonLink';
import { ctaBlock } from './objects/ctaBlock';
import { faqBlock } from './objects/faqBlock';
import { faqItem } from './objects/faqItem';
import { hero } from './objects/hero';
import { quoteBlock } from './objects/quoteBlock';
import { richText } from './objects/richText';
import { seo } from './objects/seo';
import { statBlock } from './objects/statBlock';

export const schemaTypes: SchemaTypeDefinition[] = [
  seo,
  buttonLink,
  richText,
  hero,
  ctaBlock,
  statBlock,
  quoteBlock,
  faqItem,
  faqBlock,
  siteSettings,
  homepage,
  realityCheckPage,
  aanbodPage,
  casestudiesOverviewPage,
  insightsOverviewPage,
  overOnsPage,
  contactPage,
  service,
  caseStudy,
  insightArticle,
  testimonial,
  teamMember,
];
