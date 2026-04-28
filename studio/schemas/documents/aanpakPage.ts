import { defineArrayMember, defineField, defineType } from 'sanity';

/** Matches `AanpakPageContent.steps.steps` in the web app. */
const aanpakStepRow = defineArrayMember({
  type: 'object',
  name: 'aanpakStepRow',
  fields: [
    defineField({ name: 'n', title: 'Number label', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'body', title: 'Body', type: 'text', rows: 3 }),
  ],
});

/** Methodology page — mirrors `Aanpak` in locale JSON; optional hero photo. */
export const aanpakPage = defineType({
  name: 'aanpakPage',
  title: 'Aanpak',
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
      name: 'heroBgImage',
      title: 'Hero photo (optional)',
      type: 'image',
      description:
        'Under the blueprint. Leave empty for blueprint-only hero (default).',
      options: { hotspot: true },
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({ name: 'headlineLine1', title: 'Headline line 1', type: 'string' }),
        defineField({ name: 'headlineLine2', title: 'Headline line 2', type: 'string' }),
        defineField({
          name: 'headlineEm',
          title: 'Headline accent (italic)',
          type: 'string',
        }),
        defineField({ name: 'body1', title: 'Body 1', type: 'text', rows: 3 }),
        defineField({ name: 'body2', title: 'Body 2', type: 'text', rows: 3 }),
        defineField({ name: 'primaryCta', title: 'Primary CTA label', type: 'string' }),
        defineField({ name: 'secondaryCta', title: 'Secondary CTA label', type: 'string' }),
      ],
    }),
    defineField({
      name: 'why',
      title: 'Waarom',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Spine / eyebrow', type: 'string' }),
        defineField({ name: 'headlineLine1', title: 'Headline line 1', type: 'string' }),
        defineField({ name: 'headlineLine2', title: 'Headline line 2 (accent)', type: 'string' }),
        defineField({ name: 'body1', title: 'Body 1', type: 'text', rows: 4 }),
        defineField({ name: 'body2', title: 'Body 2', type: 'text', rows: 4 }),
        defineField({
          name: 'tail',
          title: 'Second block (same section)',
          type: 'object',
          fields: [
            defineField({ name: 'headlineLine1', title: 'Headline line 1', type: 'string' }),
            defineField({
              name: 'headlineLine2Em',
              title: 'Headline accent',
              type: 'string',
            }),
            defineField({ name: 'body', title: 'Body', type: 'text', rows: 4 }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'lens',
      title: 'Hoe ORYEN kijkt',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Spine / eyebrow', type: 'string' }),
        defineField({ name: 'headlineLine1', title: 'Headline line 1', type: 'string' }),
        defineField({ name: 'headlineEm', title: 'Headline accent', type: 'string' }),
        defineField({ name: 'leadIn', title: 'Lead', type: 'text', rows: 3 }),
        defineField({
          name: 'lookAtIntro',
          title: 'Intro before list (optional)',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'lookAt',
          title: 'Observation rows',
          type: 'array',
          of: [defineArrayMember({ type: 'string' })],
        }),
        defineField({ name: 'conclusion', title: 'Closing line', type: 'text', rows: 2 }),
      ],
    }),
    defineField({
      name: 'steps',
      title: 'Vier stappen',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Spine / eyebrow', type: 'string' }),
        defineField({ name: 'headline', title: 'Headline', type: 'string' }),
        defineField({ name: 'stepPrefix', title: 'Step prefix', type: 'string' }),
        defineField({
          name: 'steps',
          title: 'Steps',
          type: 'array',
          of: [aanpakStepRow],
        }),
      ],
    }),
    defineField({
      name: 'methodBridge',
      title: 'Van methode naar concrete zet',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Spine / eyebrow', type: 'string' }),
        defineField({
          name: 'microEyebrow',
          title: 'Small label above summary',
          type: 'string',
        }),
        defineField({ name: 'summary', title: 'Summary', type: 'text', rows: 4 }),
        defineField({ name: 'headline', title: 'Headline', type: 'string' }),
        defineField({ name: 'body1', title: 'Body 1', type: 'text', rows: 4 }),
        defineField({ name: 'body2', title: 'Body 2 (optional)', type: 'text', rows: 3 }),
        defineField({ name: 'followTitle', title: 'Follow block title', type: 'string' }),
        defineField({ name: 'followBody', title: 'Follow block body', type: 'text', rows: 4 }),
        defineField({ name: 'cta', title: 'Primary CTA label', type: 'string' }),
        defineField({
          name: 'secondaryCta',
          title: 'Secondary link label',
          type: 'string',
        }),
        defineField({
          name: 'secondaryCtaHref',
          title: 'Secondary link path',
          type: 'string',
          description: 'e.g. /aanbod',
        }),
      ],
    }),
    defineField({
      name: 'closing',
      title: 'Afsluiting',
      type: 'object',
      fields: [
        defineField({
          name: 'spineLabel',
          title: 'Spine label',
          type: 'string',
          description: 'e.g. 05 — Eerst scherpte',
        }),
        defineField({ name: 'headlineLine1', title: 'Headline line 1', type: 'string' }),
        defineField({ name: 'headlineLine2', title: 'Headline accent', type: 'string' }),
        defineField({ name: 'body1', title: 'Body 1', type: 'text', rows: 4 }),
        defineField({ name: 'body2', title: 'Body 2', type: 'text', rows: 4 }),
        defineField({
          name: 'supportHook',
          title: 'Support paragraph (legacy)',
          type: 'text',
          rows: 3,
        }),
        defineField({ name: 'primaryCta', title: 'Primary CTA label', type: 'string' }),
        defineField({
          name: 'primaryCtaHref',
          title: 'Primary CTA path',
          type: 'string',
        }),
        defineField({ name: 'secondaryCta', title: 'Secondary CTA label', type: 'string' }),
        defineField({
          name: 'secondaryCtaHref',
          title: 'Secondary CTA path',
          type: 'string',
        }),
        defineField({
          name: 'footnote',
          title: 'Italic line beside secondary',
          type: 'string',
        }),
      ],
    }),
  ],
});
