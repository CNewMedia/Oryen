import { defineField, defineType } from 'sanity';

export const insight = defineType({
  name: 'insight',
  title: 'Insight / article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
    defineField({ name: 'body', title: 'Body', type: 'blockContent' }),
  ],
});
