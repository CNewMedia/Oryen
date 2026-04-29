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
      name: 'categoryLabel',
      title: 'Category label (cases overview, small caps)',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline (italic lead)',
      type: 'string',
    }),
    defineField({
      name: 'situation',
      title: 'Situation (overview)',
      type: 'text',
      rows: 6,
      description:
        'Cases overview narrative. Falls back to “What everyone saw” when empty.',
    }),
    defineField({
      name: 'oryenLine',
      title: 'ORYEN line (italic)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'outcome',
      title: 'Outcome (overview)',
      type: 'text',
      rows: 6,
      description: 'Falls back to “Result / impact” when empty.',
    }),
    defineField({
      name: 'displayMode',
      title: 'Overview visual mode',
      type: 'string',
      options: {
        list: [
          { title: 'Photo / video', value: 'photo' },
          { title: 'Typographic (no photo)', value: 'typographic' },
        ],
        layout: 'radio',
      },
      initialValue: 'photo',
    }),
    defineField({
      name: 'overviewVideoUrl',
      title: 'Overview video URL (optional)',
      type: 'url',
      description:
        'Optional public URL to a video file (e.g. .mov). Poster uses hero visual when set.',
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
