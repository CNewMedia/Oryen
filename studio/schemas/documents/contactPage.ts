import { defineField, defineType } from 'sanity';

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact',
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'internalTitle',
      title: 'Internal title',
      type: 'string',
      initialValue: 'Contact',
    }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'intro', title: 'Intro', type: 'text', rows: 5 }),
    defineField({
      name: 'sections',
      title: 'Extra sections (optional)',
      type: 'array',
      of: [
        { type: 'hero' },
        { type: 'ctaBlock' },
        { type: 'statBlock' },
        { type: 'quoteBlock' },
        { type: 'faqBlock' },
      ],
    }),
  ],
  preview: {
    select: { title: 'internalTitle', locale: 'locale' },
    prepare({ title, locale }) {
      return { title: title || 'Contact', subtitle: locale?.toUpperCase() };
    },
  },
});
