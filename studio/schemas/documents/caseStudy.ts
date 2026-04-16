import { defineArrayMember, defineField, defineType } from 'sanity';

/** ORYEN case study — strategic narrative, not a generic portfolio tile. */
export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case study',
  type: 'document',
  fields: [
    defineField({
      name: 'locale',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'Nederlands', value: 'nl' },
          { title: 'English', value: 'en' },
        ],
        layout: 'radio',
      },
      initialValue: 'nl',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'translationOf',
      title: 'Translation of (other locale)',
      type: 'reference',
      to: [{ type: 'caseStudy' }],
      description: 'Link the EN/Nl pair for editors.',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'clientName',
      title: 'Client name',
      type: 'string',
    }),
    defineField({
      name: 'sector',
      title: 'Sector',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
    defineField({ name: 'summary', title: 'Summary', type: 'text', rows: 4 }),
    defineField({
      name: 'whatEveryoneSaw',
      title: 'What everyone saw',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'whatOryenSaw',
      title: 'What ORYEN saw',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'strategicShift',
      title: 'Strategic shift',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'resultImpact',
      title: 'Result / impact',
      type: 'text',
      rows: 5,
    }),
    defineField({ name: 'quote', title: 'Optional quote', type: 'text', rows: 3 }),
    defineField({
      name: 'metrics',
      title: 'Metrics',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'metric',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'value', title: 'Value', type: 'string' }),
          ],
        }),
      ],
    }),
    defineField({ name: 'body', title: 'Body (extended)', type: 'richText' }),
    defineField({ name: 'hero', title: 'Hero block', type: 'hero' }),
    defineField({
      name: 'heroVisual',
      title: 'Hero visual',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'featured',
      title: 'Featured on overview',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'sortOrder',
      title: 'Manual order (lower = first)',
      type: 'number',
    }),
    defineField({
      name: 'relatedServices',
      title: 'Related services',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'service' }] })],
    }),
  ],
});
