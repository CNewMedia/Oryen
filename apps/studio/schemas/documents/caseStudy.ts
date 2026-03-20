import { defineArrayMember, defineField, defineType } from 'sanity';

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case study',
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
    defineField({ name: 'client', title: 'Client', type: 'string' }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
    defineField({ name: 'summary', title: 'Summary', type: 'text', rows: 4 }),
    defineField({ name: 'body', title: 'Body', type: 'blockContent' }),
    defineField({
      name: 'relatedServices',
      title: 'Related services',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'service' }] })],
    }),
    defineField({
      name: 'relatedSectors',
      title: 'Related sectors',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'sector' }] })],
    }),
  ],
});
