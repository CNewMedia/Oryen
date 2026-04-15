import { defineField, defineType } from 'sanity';

/** Structured Reality Check / Aanbod page — mirrors web i18n keys; optional CMS override. */
export const aanbodPage = defineType({
  name: 'aanbodPage',
  title: 'Aanbod (Reality Check)',
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
      initialValue: 'nl',
    }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({ name: 'headlineLine1', title: 'Headline line 1', type: 'string' }),
        defineField({ name: 'headlineLine2Em', title: 'Headline line 2 (accent)', type: 'string' }),
        defineField({ name: 'sub', title: 'Sub', type: 'text', rows: 4 }),
        defineField({ name: 'primaryCta', title: 'Primary CTA label', type: 'string' }),
        defineField({ name: 'secondaryCta', title: 'Secondary CTA label', type: 'string' }),
      ],
    }),
    defineField({
      name: 'whatItIs',
      title: 'What it is',
      type: 'object',
      fields: [
        defineField({ name: 'spine', title: 'Spine label', type: 'string' }),
        defineField({ name: 'headline', title: 'Headline', type: 'string' }),
        defineField({ name: 'body', title: 'Body', type: 'text', rows: 5 }),
      ],
    }),
    defineField({
      name: 'whatYouGet',
      title: 'What you get',
      type: 'object',
      fields: [
        defineField({ name: 'spine', title: 'Spine label', type: 'string' }),
        defineField({ name: 'headline', title: 'Headline', type: 'string' }),
        defineField({
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),
    defineField({
      name: 'forWho',
      title: 'For who',
      type: 'object',
      fields: [
        defineField({ name: 'spine', title: 'Spine label', type: 'string' }),
        defineField({ name: 'headline', title: 'Headline', type: 'string' }),
        defineField({ name: 'body', title: 'Body', type: 'text', rows: 6 }),
      ],
    }),
    defineField({
      name: 'howItWorks',
      title: 'How it works',
      type: 'object',
      fields: [
        defineField({ name: 'spine', title: 'Spine label', type: 'string' }),
        defineField({ name: 'headline', title: 'Headline', type: 'string' }),
        defineField({
          name: 'steps',
          title: 'Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'n', title: 'Step number', type: 'string' }),
                defineField({ name: 'title', title: 'Title', type: 'string' }),
                defineField({ name: 'body', title: 'Body', type: 'text', rows: 4 }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'pricing',
      title: 'Pricing / offer',
      type: 'object',
      fields: [
        defineField({ name: 'spine', title: 'Spine label', type: 'string' }),
        defineField({ name: 'name', title: 'Name', type: 'string' }),
        defineField({ name: 'priceLine', title: 'Price line', type: 'string' }),
        defineField({ name: 'body', title: 'Body', type: 'text', rows: 4 }),
      ],
    }),
    defineField({
      name: 'reassurance',
      title: 'Reassurance block',
      type: 'object',
      fields: [
        defineField({ name: 'headline', title: 'Headline', type: 'string' }),
        defineField({ name: 'body', title: 'Body', type: 'text', rows: 5 }),
        defineField({ name: 'note', title: 'Note', type: 'text', rows: 2 }),
      ],
    }),
    defineField({
      name: 'closing',
      title: 'Closing quote',
      type: 'object',
      fields: [
        defineField({ name: 'line1', title: 'Line 1', type: 'string' }),
        defineField({ name: 'line2', title: 'Line 2', type: 'string' }),
      ],
    }),
  ],
  preview: {
    select: { locale: 'locale', title: 'seo.metaTitle' },
    prepare({ locale, title }) {
      return { title: title || 'Aanbod', subtitle: locale?.toUpperCase() };
    },
  },
});
