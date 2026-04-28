import { defineField, defineType } from 'sanity';

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  description:
    'Reference library only — not wired to the public site. Use for quotes or future social proof blocks.',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'attribution', title: 'Name', type: 'string' }),
    defineField({ name: 'role', title: 'Role / company', type: 'string' }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
});
