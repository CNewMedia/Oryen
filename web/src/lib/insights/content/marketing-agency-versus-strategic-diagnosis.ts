import type { FileInsightArticle } from '@/lib/insights/articles';

/** Spoke 1 EN — agency vs strategic diagnosis (Deel 1). */
export const marketingAgencyVersusStrategicDiagnosis: FileInsightArticle = {
  slug: 'marketing-agency-versus-strategic-diagnosis',
  locale: 'en',
  title:
    'What is the difference between a marketing agency and a strategic diagnosis?',
  metaTitle: 'Marketing agency or strategic diagnosis? | ORYEN',
  metaDescription:
    'An agency executes; a diagnosis finds the cause first. The difference — and when you need which. ORYEN starts at the break, not the campaign.',
  author: 'Christophe Dejaeghere / ORYEN',
  publishedDate: '2026-05-31',
  modifiedDate: '2026-05-31',
  lead:
    'A marketing agency starts with execution: it creates and runs campaigns, content, websites and ads to gain visibility and leads. A strategic diagnosis starts one step earlier, at the cause: it investigates where sales, marketing and follow-up lose result today and what must be addressed first — before new budget goes to execution. The agency solves by doing. The diagnosis first determines whether, what and in which order something should happen.',
  sections: [
    {
      kind: 'h3',
      heading: 'The agency starts with the solution',
      paragraphs: [
        'A marketing agency is built to execute. You come with a question — more leads, a new website, a campaign — and the agency delivers. That is useful when you already know what you need.',
        'The risk sits in the starting point. An agency usually assumes the answer lies in marketing, because that is what it sells. The question "is more marketing actually the right move here?" is rarely asked first. Budget then lands on executing a solution when it is not yet clear it hits the real problem.',
      ],
    },
    {
      kind: 'h3',
      heading: 'The diagnosis starts with the cause',
      paragraphs: [
        'A strategic diagnosis reverses the order. It does not start with what must be made, but with where things get commercially stuck. Sometimes that is marketing. Often it is elsewhere: positioning, follow-up, alignment between sales and marketing, tools, or a choice made too early.',
        'Only when that cause is sharp does the decision follow on what must come first — and what is better left waiting. A diagnosis can therefore just as well conclude that you do not need a new campaign, but must fix something internally first. An agency that lives on campaigns rarely reaches that conclusion.',
      ],
    },
    {
      kind: 'table',
      heading: 'The difference in one table',
      rows: [
        {
          label: 'Starting point',
          bureau: 'the solution (execution)',
          doorlichting: 'the cause (diagnosis)',
        },
        {
          label: 'First question',
          bureau: 'what will we make?',
          doorlichting: 'where does result lose force?',
        },
        {
          label: 'Outcome',
          bureau: 'campaigns, content, website, leads',
          doorlichting: 'a clear picture of the break, priorities and order',
        },
        {
          label: 'What matters',
          bureau: 'do more',
          doorlichting: 'do the right thing first — and know what to leave',
        },
        {
          label: 'When it makes sense',
          bureau: 'when you know what you need',
          doorlichting: 'when you do a lot but see too little result',
        },
      ],
    },
    {
      kind: 'h3',
      heading: 'Which do you need when?',
      paragraphs: [
        'The two do not exclude each other, but order counts. A diagnosis makes sense when you feel enough is already happening, but [result is not in proportion to the effort](/insights/why-marketing-and-sales-dont-deliver) — or when you are about to invest again in a tool, campaign or hire without being sure that is the right move.',
        'An agency makes sense when direction is already set and the work is mainly about good execution. The mistake that costs money is bringing in execution before the cause is sharp. Then you pay for motion instead of result.',
        'That is why ORYEN starts with a [Reality Check](/aanbod), not a quote for execution: first know where things stall, then choose what is needed — and by whom.',
      ],
    },
  ],
  cta: {
    label: 'Book a Reality Check call with Christophe',
  },
  faq: {
    heading: 'Frequently asked questions',
    items: [
      {
        question: 'Is a strategic diagnosis not just an expensive intake?',
        answer:
          'No. An intake is there to sell an assignment. A diagnosis can conclude you are better off doing nothing until an underlying problem is fixed. It is a decision moment, not a sales step.',
      },
      {
        question: 'Can a marketing agency not do that diagnosis itself?',
        answer:
          'Sometimes, but there is a conflict of interest: a party that lives on execution benefits when the answer is execution. A diagnosis is valuable precisely because "not now" can be an outcome.',
      },
      {
        question: 'What if the diagnosis still shows I need marketing?',
        answer:
          'Then you know that with certainty, and which marketing and in which order. You invest with focus instead of on a hunch. The diagnosis makes the execution that follows more effective.',
      },
    ],
  },
};
