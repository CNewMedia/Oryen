import { defineField, defineType } from 'sanity';

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact',
  type: 'document',
  description:
    'Calm, decision-oriented contact page. Shared contact details (email, address, phone) live on Site settings.',
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
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({ name: 'headline', title: 'Headline', type: 'string' }),
        defineField({
          name: 'sub',
          title: 'Supporting copy',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'primaryCta',
          title: 'Primary CTA label',
          type: 'string',
        }),
        defineField({
          name: 'primaryCtaHref',
          title: 'Primary CTA href',
          description:
            'Internal anchor (e.g. #contact-form) or path. Defaults to #contact-form.',
          type: 'string',
        }),
        defineField({
          name: 'secondaryCta',
          title: 'Secondary CTA label (optional)',
          type: 'string',
        }),
        defineField({
          name: 'secondaryCtaHref',
          title: 'Secondary CTA href (optional)',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'expectations',
      title: 'What to expect',
      type: 'object',
      fields: [
        defineField({ name: 'headline', title: 'Headline', type: 'string' }),
        defineField({
          name: 'body',
          title: 'Body',
          type: 'text',
          rows: 4,
        }),
      ],
    }),
    defineField({
      name: 'form',
      title: 'Contact form',
      type: 'object',
      fields: [
        defineField({
          name: 'headline',
          title: 'Headline above form',
          type: 'string',
        }),
        defineField({
          name: 'labels',
          title: 'Field labels',
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Name', type: 'string' }),
            defineField({ name: 'email', title: 'Email', type: 'string' }),
            defineField({ name: 'company', title: 'Company', type: 'string' }),
            defineField({ name: 'phone', title: 'Phone', type: 'string' }),
            defineField({ name: 'message', title: 'Message', type: 'string' }),
            defineField({ name: 'submit', title: 'Submit button', type: 'string' }),
            defineField({
              name: 'optional',
              title: 'Optional suffix',
              description: 'Shown next to optional fields, e.g. "(optioneel)".',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'reassurance',
      title: 'Reassurance',
      type: 'object',
      fields: [
        defineField({ name: 'body', title: 'Body', type: 'string' }),
        defineField({ name: 'note', title: 'Footnote', type: 'string' }),
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
