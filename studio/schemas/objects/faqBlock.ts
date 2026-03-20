import { defineArrayMember, defineField, defineType } from 'sanity';

export const faqBlock = defineType({
  name: 'faqBlock',
  title: 'FAQ block',
  type: 'object',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [defineArrayMember({ type: 'faqItem' })],
    }),
  ],
});
