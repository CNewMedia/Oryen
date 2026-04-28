import { type SchemaTypeDefinition } from 'sanity';

import { aanbodPage } from './documents/aanbodPage';
import { aanpakPage } from './documents/aanpakPage';
import { caseStudy } from './documents/caseStudy';
import { casestudiesOverviewPage } from './documents/casestudiesOverviewPage';
import { contactPage } from './documents/contactPage';
import { legalPage } from './documents/legalPage';
import { thankYouPage } from './documents/thankYouPage';
import { homepage } from './documents/homepage';
import { insightArticle } from './documents/insightArticle';
import { insightsOverviewPage } from './documents/insightsOverviewPage';
import { overOnsPage } from './documents/overOnsPage';
import { service } from './documents/service';
import { siteSettings } from './documents/siteSettings';
import { teamMember } from './documents/teamMember';
import { testimonial } from './documents/testimonial';
import { buttonLink } from './objects/buttonLink';
import { ctaBlock } from './objects/ctaBlock';
import { faqBlock } from './objects/faqBlock';
import { faqItem } from './objects/faqItem';
import { hero } from './objects/hero';
import {
  homeAboutSection,
  homeApproachSection,
  homeApproachStep,
  homeDiagnosisSection,
  homeFeaturedCase,
  homeHeroSection,
  homeMiniCase,
  homeOfferSection,
  homeProofSection,
  homeSelectionSection,
} from './objects/homepageSections';
import { quoteBlock } from './objects/quoteBlock';
import { richText } from './objects/richText';
import { seo } from './objects/seo';
import { statBlock } from './objects/statBlock';
import { trackingSettings } from './objects/trackingSettings';

export const schemaTypes: SchemaTypeDefinition[] = [
  seo,
  trackingSettings,
  buttonLink,
  richText,
  hero,
  ctaBlock,
  statBlock,
  quoteBlock,
  faqItem,
  faqBlock,
  homeApproachStep,
  homeMiniCase,
  homeHeroSection,
  homeDiagnosisSection,
  homeApproachSection,
  homeFeaturedCase,
  homeProofSection,
  homeSelectionSection,
  homeAboutSection,
  homeOfferSection,
  siteSettings,
  homepage,
  aanbodPage,
  aanpakPage,
  casestudiesOverviewPage,
  insightsOverviewPage,
  overOnsPage,
  contactPage,
  thankYouPage,
  legalPage,
  service,
  caseStudy,
  insightArticle,
  testimonial,
  teamMember,
];
