import { defineField, defineType } from 'sanity';

import { sectionsField } from './_shared';

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal title',
      type: 'string',
      initialValue: 'Contact',
    }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
    sectionsField,
  ],
});
