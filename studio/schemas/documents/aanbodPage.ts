import { defineField, defineType } from 'sanity';

import { sectionsField } from './_shared';

export const aanbodPage = defineType({
  name: 'aanbodPage',
  title: 'Aanbod',
  type: 'document',
  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal title',
      type: 'string',
      initialValue: 'Aanbod',
    }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
    sectionsField,
  ],
});
