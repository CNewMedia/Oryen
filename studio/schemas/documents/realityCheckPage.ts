import { defineField, defineType } from 'sanity';

import { sectionsField } from './_shared';

export const realityCheckPage = defineType({
  name: 'realityCheckPage',
  title: 'Reality Check (legacy — gebruik Aanbod)',
  type: 'document',
  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal title',
      type: 'string',
      initialValue: 'Reality Check',
    }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
    sectionsField,
  ],
});
