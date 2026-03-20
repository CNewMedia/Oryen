import { defineField, defineType } from 'sanity';

import { sectionsField } from './_shared';

export const overOnsPage = defineType({
  name: 'overOnsPage',
  title: 'Over ons',
  type: 'document',
  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal title',
      type: 'string',
      initialValue: 'Over ons',
    }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
    sectionsField,
  ],
});
