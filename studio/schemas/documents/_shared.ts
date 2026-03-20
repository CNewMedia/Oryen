import { defineArrayMember, defineField } from 'sanity';

/** Reusable section stack for marketing pages (singleton documents). */
export const sectionsField = defineField({
  name: 'sections',
  title: 'Sections',
  type: 'array',
  of: [
    defineArrayMember({ type: 'hero' }),
    defineArrayMember({ type: 'ctaBlock' }),
    defineArrayMember({ type: 'statBlock' }),
    defineArrayMember({ type: 'quoteBlock' }),
    defineArrayMember({ type: 'faqBlock' }),
  ],
});
