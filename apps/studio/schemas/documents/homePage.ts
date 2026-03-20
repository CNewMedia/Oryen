import { defineArrayMember, defineField, defineType } from 'sanity';

export const homePage = defineType({
  name: 'homePage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal title',
      type: 'string',
      initialValue: 'Homepage',
    }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
    defineField({
      name: 'ctas',
      title: 'CTA blocks',
      type: 'array',
      of: [defineArrayMember({ type: 'ctaBlock' })],
    }),
  ],
});
