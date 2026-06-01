import type { FileInsightArticle } from '@/lib/insights/articles';

/** Spoke 1 EN — agency vs strategic diagnosis (approved Part 1 manuscript). */
export const marketingAgencyVersusStrategicDiagnosis: FileInsightArticle = {
  slug: 'marketing-agency-versus-strategic-diagnosis',
  locale: 'en',
  title:
    "What's the difference between a marketing agency and a strategic diagnosis?",
  metaTitle: 'Marketing agency or strategic diagnosis? | ORYEN',
  metaDescription:
    'An agency executes; a diagnosis looks for the cause first. The difference — and when you need which. ORYEN starts with the break, not the campaign.',
  author: 'Christophe Dejaeghere / ORYEN',
  publishedDate: '2026-05-31',
  modifiedDate: '2026-05-31',
  lead:
    'A marketing agency starts with execution: it makes and runs campaigns, content, websites and ads to win more visibility and leads. A strategic diagnosis starts a step earlier, at the cause: it examines where sales, marketing and follow-up are losing results today and what needs fixing first — before new budget goes into execution. The agency solves by doing. The diagnosis first determines whether, what and in what order anything should happen at all.',
  sections: [
    {
      kind: 'h3',
      heading: 'The agency starts with the solution',
      paragraphs: [
        "A marketing agency is built to execute. You come in with a request — more leads, a new website, a campaign — and the agency delivers it. That's useful when you already know what you need.",
        'The risk is in the starting point. An agency usually assumes the answer lies in marketing, because that\'s what it sells. The question "is more marketing actually the right move here?" is rarely asked first. So budget lands on executing a solution that hasn\'t been confirmed to address the real problem.',
      ],
    },
    {
      kind: 'h3',
      heading: 'The diagnosis starts with the cause',
      paragraphs: [
        'A strategic diagnosis reverses the order. It starts not with what should be made, but with the question of where the business is stalling commercially. Sometimes that\'s in marketing. Often somewhere else: in the positioning, the follow-up, the alignment between sales and marketing, the tools, or a choice made too early.',
        "Only once that cause is clear does the decision about what comes first follow — and what's better left waiting. That's why a diagnosis can just as easily conclude that you don't need a new campaign, but first need to put something right internally. An agency that lives on campaigns rarely reaches that conclusion.",
      ],
    },
    {
      kind: 'table',
      heading: 'The difference in one table',
      rows: [
        {
          label: 'Starting point',
          bureau: 'the solution (execution)',
          doorlichting: 'the cause',
        },
        {
          label: 'First question',
          bureau: 'what are we going to make?',
          doorlichting: 'where are results losing force?',
        },
        {
          label: 'Outcome',
          bureau: 'campaigns, content, website, leads',
          doorlichting: 'a clear picture of the break, priorities and order',
        },
        {
          label: 'Focus',
          bureau: 'doing more',
          doorlichting:
            'doing the right thing first — and knowing what to leave',
        },
        {
          label: 'When it helps',
          bureau: 'when you know what you need',
          doorlichting:
            "when you're doing a lot but seeing too little result",
        },
      ],
    },
    {
      kind: 'h3',
      heading: 'Which do you need, and when?',
      paragraphs: [
        "The two don't exclude each other, but the order matters. A diagnosis makes sense when you feel that enough is already happening, but [the results don't match the effort](/insights/why-marketing-and-sales-dont-deliver) — or when you're about to invest again in a tool, campaign or hire without being sure it's the right move.",
        "An agency makes sense when the direction is already set and the work is mainly about good execution. The mistake that costs money is bringing in execution before the cause is clear. Then you pay for motion instead of results.",
        "That's why ORYEN starts with a [Reality Check](/aanbod) rather than a quote for execution: first know where it stalls, then choose what's needed — and by whom.",
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
        question: "Isn't a strategic diagnosis just an expensive intake?",
        answer:
          "No. An intake exists to sell an engagement. A diagnosis can just as well conclude that you're better off executing nothing until an underlying problem is solved. It's a decision point, not a sales step.",
      },
      {
        question: "Can't a marketing agency do that diagnosis itself?",
        answer:
          'Sometimes, but there\'s a conflict of interest: a party that lives on execution benefits when the answer is execution. A diagnosis is valuable precisely because "not now" can be one of its outcomes.',
      },
      {
        question: 'What if the diagnosis does point to needing marketing?',
        answer:
          'Then you know that for certain, and moreover which marketing and in what order. You invest deliberately instead of on a hunch. The diagnosis makes the execution that follows more effective.',
      },
    ],
  },
};
