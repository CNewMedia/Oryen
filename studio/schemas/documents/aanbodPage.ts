import { defineArrayMember, defineField, defineType } from 'sanity';

const outputRow = defineArrayMember({
  type: 'object',
  name: 'aanbodOutputRow',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
  ],
});

const phaseStep = defineArrayMember({
  type: 'object',
  name: 'aanbodPhaseStep',
  fields: [
    defineField({ name: 'n', title: 'Step number', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'body', title: 'Body', type: 'text', rows: 5 }),
    defineField({
      name: 'includes',
      title: '“Inclusief” line',
      type: 'string',
      description: 'Optional line under the phase (e.g. Inclusief: …).',
    }),
  ],
});

const bodyStanza = defineArrayMember({
  type: 'object',
  name: 'aanbodBodyStanza',
  fields: [
    defineField({ name: 'text', title: 'Text', type: 'text', rows: 3 }),
    defineField({
      name: 'italic',
      title: 'Emphasised (italic)',
      type: 'boolean',
      initialValue: false,
    }),
  ],
});

const guaranteeRow = defineArrayMember({
  type: 'object',
  name: 'aanbodGuarantee',
  fields: [
    defineField({ name: 'mark', title: 'Mark (e.g. 01)', type: 'string' }),
    defineField({ name: 'text', title: 'Text', type: 'string' }),
  ],
});

/** Structured Aanbod / Reality Check page — mirrors web bootstrap + template fields. */
export const aanbodPage = defineType({
  name: 'aanbodPage',
  title: 'Aanbod',
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
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({ name: 'headlineLine1', title: 'Headline line 1', type: 'string' }),
        defineField({
          name: 'headlineLine2Em',
          title: 'Headline accent (supports line breaks)',
          type: 'text',
          rows: 3,
        }),
        defineField({ name: 'sub', title: 'Sub', type: 'text', rows: 4 }),
        defineField({
          name: 'characterLines',
          title: 'Character lines (left border)',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({ name: 'primaryCta', title: 'Primary CTA label', type: 'string' }),
        defineField({ name: 'secondaryCta', title: 'Secondary CTA label', type: 'string' }),
        defineField({
          name: 'secondaryCtaAnchor',
          title: 'Secondary anchor id (no #)',
          description: 'Same-page scroll target, e.g. hoe-het-gaat',
          type: 'string',
        }),
        defineField({
          name: 'offerFrame',
          title: 'Offer frame (aside)',
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({
              name: 'pillars',
              title: 'Pillars',
              type: 'array',
              of: [{ type: 'string' }],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'watHetIs',
      title: 'Wat het is (section 01)',
      type: 'object',
      fields: [
        defineField({ name: 'spine', title: 'Spine label', type: 'string' }),
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({ name: 'headlineLine1', title: 'Headline line 1', type: 'string' }),
        defineField({ name: 'headlineLine2Em', title: 'Headline accent', type: 'string' }),
        defineField({ name: 'body', title: 'Body (italic block)', type: 'text', rows: 4 }),
      ],
    }),
    defineField({
      name: 'offerClarity',
      title: 'Past dit bij u + legacy columns',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Legacy eyebrow', type: 'string' }),
        defineField({ name: 'spine', title: 'Spine label (section 04)', type: 'string' }),
        defineField({ name: 'pastEyebrow', title: 'Section eyebrow', type: 'string' }),
        defineField({ name: 'fitHeadlineLine1', title: 'Fit headline line 1', type: 'string' }),
        defineField({ name: 'fitHeadlineEm', title: 'Fit headline (accent line)', type: 'string' }),
        defineField({ name: 'fitHeadlineLine2', title: 'Fit headline line 2', type: 'string' }),
        defineField({ name: 'fitIntro', title: 'Intro under headline', type: 'text', rows: 4 }),
        defineField({ name: 'leftTitle', title: 'Legacy left title', type: 'string' }),
        defineField({ name: 'leftBody', title: 'Legacy left body', type: 'text', rows: 6 }),
        defineField({ name: 'rightTitle', title: 'Legacy right title', type: 'string' }),
        defineField({ name: 'rightLead', title: 'Legacy right lead', type: 'text', rows: 4 }),
        defineField({ name: 'forBody', title: 'Legacy for-body', type: 'text', rows: 5 }),
        defineField({ name: 'welLabel', title: '“Wel” label', type: 'string' }),
        defineField({
          name: 'welItems',
          title: 'Wel items',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({ name: 'notForLabel', title: '“Niet” label', type: 'string' }),
        defineField({
          name: 'notForItems',
          title: 'Niet items',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),
    defineField({
      name: 'whatYouGet',
      title: 'What you get',
      type: 'object',
      fields: [
        defineField({ name: 'spine', title: 'Spine label', type: 'string' }),
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({ name: 'headline', title: 'Legacy single headline', type: 'string' }),
        defineField({ name: 'headlineLine1', title: 'Headline line 1', type: 'string' }),
        defineField({ name: 'headlineLine2Em', title: 'Headline accent', type: 'string' }),
        defineField({ name: 'subline', title: 'Subline', type: 'text', rows: 3 }),
        defineField({
          name: 'outputs',
          title: 'Output rows (title + description)',
          type: 'array',
          of: [outputRow],
        }),
        defineField({
          name: 'items',
          title: 'Legacy flat items',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),
    defineField({
      name: 'howItWorks',
      title: 'How it works',
      type: 'object',
      fields: [
        defineField({ name: 'spine', title: 'Spine label', type: 'string' }),
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({ name: 'headline', title: 'Legacy headline', type: 'string' }),
        defineField({ name: 'headlineLine1', title: 'Headline line 1', type: 'string' }),
        defineField({ name: 'headlineLine2Em', title: 'Headline accent', type: 'string' }),
        defineField({ name: 'stepPrefix', title: 'Step prefix (e.g. Stap / Step)', type: 'string' }),
        defineField({
          name: 'steps',
          title: 'Steps',
          type: 'array',
          of: [phaseStep],
        }),
      ],
    }),
    defineField({
      name: 'whatAfter',
      title: 'What happens after',
      type: 'object',
      fields: [
        defineField({ name: 'spine', title: 'Spine label', type: 'string' }),
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({ name: 'headline', title: 'Legacy headline', type: 'string' }),
        defineField({ name: 'headlineLine1', title: 'Headline line 1', type: 'string' }),
        defineField({ name: 'headlineEm', title: 'Headline accent', type: 'string' }),
        defineField({ name: 'body', title: 'Legacy body', type: 'text', rows: 5 }),
        defineField({
          name: 'stanzas',
          title: 'Body stanzas',
          type: 'array',
          of: [bodyStanza],
        }),
        defineField({
          name: 'guarantees',
          title: 'Guarantee grid',
          type: 'array',
          of: [guaranteeRow],
        }),
        defineField({ name: 'signature', title: 'Signature line', type: 'string' }),
        defineField({
          name: 'items',
          title: 'Legacy bullets',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),
    defineField({
      name: 'pricing',
      title: 'Product block (legacy / not on template)',
      description:
        'The Reality Check is published without a visible fee. Do not enter a price here.',
      type: 'object',
      fields: [
        defineField({ name: 'spine', title: 'Spine label', type: 'string' }),
        defineField({ name: 'name', title: 'Product name', type: 'string' }),
        defineField({
          name: 'supportLine',
          title: 'Support line',
          description:
            'Short caption below the product name (not a price). E.g. “Eén product. Eén eerste beslissing.”',
          type: 'string',
        }),
        defineField({ name: 'body', title: 'Body', type: 'text', rows: 4 }),
        defineField({ name: 'includedTitle', title: 'Included title', type: 'string' }),
        defineField({
          name: 'includedItems',
          title: 'Included items',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),
    defineField({
      name: 'reassurance',
      title: 'Reassurance block (legacy)',
      type: 'object',
      fields: [
        defineField({ name: 'headline', title: 'Headline', type: 'string' }),
        defineField({ name: 'body', title: 'Body', type: 'text', rows: 5 }),
        defineField({ name: 'note', title: 'Note', type: 'text', rows: 2 }),
      ],
    }),
    defineField({
      name: 'closing',
      title: 'Closing',
      type: 'object',
      fields: [
        defineField({ name: 'spine', title: 'Spine label', type: 'string' }),
        defineField({ name: 'headlineLine1', title: 'Headline line 1', type: 'string' }),
        defineField({ name: 'headlineLine2', title: 'Headline line 2', type: 'string' }),
        defineField({ name: 'headlineEm', title: 'Headline accent', type: 'string' }),
        defineField({ name: 'body1', title: 'Body 1', type: 'text', rows: 3 }),
        defineField({ name: 'body2', title: 'Body 2', type: 'text', rows: 3 }),
        defineField({ name: 'primaryCta', title: 'Primary CTA label', type: 'string' }),
        defineField({ name: 'footnote', title: 'Footnote (italic beside link)', type: 'string' }),
        defineField({ name: 'secondaryCta', title: 'Secondary CTA label', type: 'string' }),
        defineField({
          name: 'secondaryCtaHref',
          title: 'Secondary CTA path',
          type: 'string',
        }),
        defineField({ name: 'line1', title: 'Legacy line 1', type: 'string' }),
        defineField({ name: 'line2', title: 'Legacy line 2', type: 'string' }),
        defineField({ name: 'body', title: 'Legacy body', type: 'text', rows: 4 }),
        defineField({ name: 'ctaLabel', title: 'Legacy CTA label', type: 'string' }),
      ],
    }),
    defineField({
      name: 'heroBgImage',
      title: 'Hero background image',
      type: 'image',
      description: 'Optional under the blueprint.',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { locale: 'locale', title: 'seo.metaTitle' },
    prepare({ locale, title }) {
      return { title: title || 'Aanbod', subtitle: locale?.toUpperCase() };
    },
  },
});
