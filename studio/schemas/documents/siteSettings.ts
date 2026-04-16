import { defineArrayMember, defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
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
      name: 'siteTitle',
      title: 'Site title (browser tab default)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'defaultSeo',
      title: 'Default SEO',
      type: 'seo',
      description: 'Fallback when a page has no SEO block.',
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      options: { accept: 'image/png, image/x-icon, image/svg+xml' },
    }),
    defineField({
      name: 'headerBrandWordmark',
      title: 'Header — brand wordmark',
      type: 'string',
    }),
    defineField({
      name: 'headerTagline',
      title: 'Header — tagline',
      type: 'string',
    }),
    defineField({
      name: 'headerCtaLabel',
      title: 'Header — CTA label',
      type: 'string',
    }),
    defineField({
      name: 'footerBrandShort',
      title: 'Footer — brand',
      type: 'string',
    }),
    defineField({
      name: 'footerTagline',
      title: 'Footer — tagline',
      type: 'string',
    }),
    defineField({
      name: 'footerDomain',
      title: 'Footer — domain (display)',
      type: 'string',
      description: 'e.g. oryen.be',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact email',
      type: 'string',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact phone',
      type: 'string',
    }),
    defineField({
      name: 'legalLinks',
      title: 'Legal / utility links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'legalLink',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'href', title: 'Path or URL', type: 'string' }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'socialLink',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'url', title: 'URL', type: 'url' }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'tracking',
      title: 'Tracking & marketing',
      type: 'trackingSettings',
    }),
  ],
  preview: {
    select: { locale: 'locale', title: 'siteTitle' },
    prepare({ locale, title }) {
      return { title: title || 'Site settings', subtitle: locale?.toUpperCase() };
    },
  },
});
