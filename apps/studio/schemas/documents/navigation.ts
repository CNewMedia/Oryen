import { defineArrayMember, defineField, defineType } from 'sanity';

export const navigation = defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal title',
      type: 'string',
      initialValue: 'Main navigation',
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [defineArrayMember({ type: 'navItem' })],
    }),
  ],
});
