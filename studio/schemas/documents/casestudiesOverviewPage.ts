import { defineField, defineType } from 'sanity';

import { sectionsField } from './_shared';

export const casestudiesOverviewPage = defineType({
  name: 'casestudiesOverviewPage',
  title: 'Casestudies (overview)',
  type: 'document',
  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal title',
      type: 'string',
      initialValue: 'Casestudies',
    }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
    sectionsField,
  ],
});
