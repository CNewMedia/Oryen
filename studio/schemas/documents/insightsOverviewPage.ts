import { defineField, defineType } from 'sanity';

import { sectionsField } from './_shared';

export const insightsOverviewPage = defineType({
  name: 'insightsOverviewPage',
  title: 'Insights (overview)',
  type: 'document',
  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal title',
      type: 'string',
      initialValue: 'Insights',
    }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
    sectionsField,
  ],
});
