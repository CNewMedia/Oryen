import { defineField, defineType } from 'sanity';

/** One document per locale (`oryen.overOns.nl` / `oryen.overOns.en`) — matches web loaders and seed. */
export const overOnsPage = defineType({
  name: 'overOnsPage',
  title: 'Over ons / About',
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
      initialValue: 'Over ons',
    }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' }),
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'intro', title: 'Intro', type: 'text', rows: 5 }),
    defineField({ name: 'body', title: 'Body', type: 'richText' }),
  ],
  preview: {
    select: { title: 'internalTitle', locale: 'locale' },
    prepare({ title, locale }) {
      return { title: title || 'Over ons', subtitle: locale?.toUpperCase() };
    },
  },
});
