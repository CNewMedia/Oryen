import { type SchemaTypeDefinition } from 'sanity';

import { caseStudy } from './documents/caseStudy';
import { footer } from './documents/footer';
import { homePage } from './documents/homePage';
import { insight } from './documents/insight';
import { navigation } from './documents/navigation';
import { sector } from './documents/sector';
import { service } from './documents/service';
import { siteSettings } from './documents/siteSettings';
import { teamMember } from './documents/teamMember';
import { testimonial } from './documents/testimonial';
import { blockContent } from './objects/blockContent';
import { ctaBlock } from './objects/ctaBlock';
import { link } from './objects/link';
import { navItem } from './objects/navItem';
import { seo } from './objects/seo';

export const schemaTypes: SchemaTypeDefinition[] = [
  blockContent,
  seo,
  link,
  navItem,
  ctaBlock,
  siteSettings,
  navigation,
  homePage,
  service,
  sector,
  caseStudy,
  insight,
  testimonial,
  teamMember,
  footer,
];
