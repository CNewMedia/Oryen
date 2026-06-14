import type { HomeContent } from '@/types/home-content';

export function splitParagraphs(text: string): string[] {
  return text
    .split(/\n\n+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

export function parseRecognitionBody(body: string): {
  listItems: string[];
  emphasisLine: { before: string; highlight: string } | null;
  middleLine: string | null;
  closingQuestion: string | null;
} {
  const blocks = splitParagraphs(body);
  const first = blocks[0] ?? '';
  const listItems = first.includes('\n')
    ? first.split('\n').map((s) => s.trim()).filter(Boolean)
    : first
        .split(/(?<=[.!?])\s+/)
        .map((s) => s.trim())
        .filter(Boolean);

  let emphasisLine: { before: string; highlight: string } | null = null;
  let middleLine: string | null = null;
  let closingQuestion: string | null = null;

  if (blocks.length >= 2) {
    const b1 = blocks[1];
    if (b1.endsWith(':') && blocks[2] && !blocks[2].includes('?')) {
      emphasisLine = { before: `${b1} `, highlight: blocks[2] };
      middleLine = blocks[3] ?? null;
      const tail = blocks.slice(4);
      if (tail.length >= 2 && tail[tail.length - 2]?.endsWith(':')) {
        closingQuestion = tail[tail.length - 1] ?? null;
      } else {
        closingQuestion = tail.join(' ') || blocks[blocks.length - 1] || null;
      }
    } else {
      const colonIdx = b1.indexOf(':');
      if (colonIdx !== -1) {
        emphasisLine = {
          before: `${b1.slice(0, colonIdx + 1).trim()} `,
          highlight: b1.slice(colonIdx + 1).trim(),
        };
        middleLine = blocks[2] ?? null;
        closingQuestion = blocks[3] ?? null;
      }
    }
  }

  return { listItems, emphasisLine, middleLine, closingQuestion };
}

export function parseDiagnosisBody(p1: string, focus: string): {
  listItems: string[];
  paragraphs: string[];
  closingLine: string;
} {
  const blocks = splitParagraphs(p1);
  const first = blocks[0] ?? '';
  const listItems = first.includes('\n')
    ? first.split('\n').map((s) => s.trim()).filter(Boolean)
    : first
        .split(/(?<=[.!?])\s+/)
        .map((s) => s.trim())
        .filter(Boolean);

  if (focus.trim()) {
    return { listItems, paragraphs: blocks.slice(1), closingLine: focus.trim() };
  }

  const closingLine = blocks[blocks.length - 1] ?? '';
  const paragraphs = blocks.slice(1, -1);

  return { listItems, paragraphs, closingLine };
}

export function parseOfferBody(body: string): {
  intro: string;
  exclusions: string[];
  scorecardIntro: string;
} {
  const blocks = splitParagraphs(body);
  const intro = blocks[0] ?? '';
  const middle = blocks[1] ?? '';
  const exclusions = middle.includes('\n')
    ? middle.split('\n').map((s) => s.trim()).filter(Boolean)
    : middle ? [middle] : [];
  const scorecardIntro = blocks[2]?.replace(/:$/, '').trim() ?? '';
  return { intro, exclusions, scorecardIntro };
}

export function parseInsightsIntro(intro: string): {
  lead: string;
  question: string;
} {
  const blocks = splitParagraphs(intro);
  if (blocks.length >= 2) {
    return { lead: blocks[0] ?? '', question: blocks[1] ?? '' };
  }
  return { lead: intro, question: '' };
}

export function parsePrice(price: string): { amount: string; suffix: string } {
  const trimmed = price.trim();
  const match = trimmed.match(/^([€$][\d.,]+)\s*(.*)$/);
  if (match) {
    return { amount: match[1], suffix: (match[2] ?? '').trim() };
  }
  const excl = trimmed.match(/^(.+?)\s+(excl\b.*)$/i);
  if (excl) {
    return { amount: excl[1].trim(), suffix: excl[2].trim() };
  }
  return { amount: trimmed, suffix: '' };
}

/** Join secondary-note lines without doubling sentence punctuation. */
export function formatSecondaryNote(note: string): string {
  return note
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .join(' ');
}

export function joinHeadline(headline: string, headlineEm: string): string {
  return [headline, headlineEm].filter(Boolean).join(' ').replace(/\n+/g, ' ').trim();
}

export function getCasesFromProof(proof: HomeContent['proof']) {
  const featuredBody = [
    proof.featured.title,
    proof.featured.line1,
    proof.featured.line2,
    proof.featured.line3,
  ]
    .filter(Boolean)
    .join(' ');

  return [
    { name: proof.featured.client, body: featuredBody },
    ...proof.minis.map((m) => ({
      name: m.client,
      body: [m.subtitle, m.body, m.result].filter(Boolean).join(' '),
    })),
  ];
}

export const HERO_TAGS: Record<string, string[]> = {
  nl: ['marketing', 'sales', 'opvolging'],
  en: ['marketing', 'sales', 'follow-up'],
};

export const PRIORITY_CARD_COPY: Record<
  string,
  { title: string; rows: string[]; active: string; footer: string }
> = {
  nl: {
    title: 'Prioriteit',
    rows: ['NU', 'STRAKS', 'NIET NU'],
    active: 'Actief',
    footer: 'Niet alles tegelijk. Eerst wat nu echt verschil maakt.',
  },
  en: {
    title: 'Priority',
    rows: ['NOW', 'NEXT', 'NOT NOW'],
    active: 'Active',
    footer: 'Not everything at once. First what makes the real difference now.',
  },
};

export const SCORECARD_LABEL: Record<string, string> = {
  nl: 'Commerciële scorecard',
  en: 'Commercial scorecard',
};

export const ARCHITECTURE_COPY: Record<
  string,
  {
    title: string;
    intro: string;
    pillars: { name: string; role: string; line: string }[];
  }
> = {
  nl: {
    title: 'De ORYEN-architectuur.',
    intro:
      'ORYEN bepaalt waar commerciële groei vastloopt. ORYEN Solutions bouwt de digitale producten en systemen die helpen om die frictie weg te nemen. ORYEN.eu verankert de Europese merkaanwezigheid van ORYEN®.',
    pillars: [
      {
        name: 'ORYEN',
        role: 'Strategische commerciële helderheid',
        line: 'Bepaalt waar commerciële groei vastloopt.',
      },
      {
        name: 'ORYEN Solutions',
        role: 'Digitale productbouwers',
        line: 'Bouwt de digitale producten en systemen die helpen om die frictie weg te nemen.',
      },
      {
        name: 'ORYEN.eu',
        role: 'Europese merkaanwezigheid',
        line: 'Verankert de Europese merkaanwezigheid van ORYEN®.',
      },
    ],
  },
  en: {
    title: 'The ORYEN architecture.',
    intro:
      'ORYEN identifies where commercial growth gets stuck. ORYEN Solutions builds the digital products and systems that help remove that friction. ORYEN.eu anchors the European brand presence of ORYEN®.',
    pillars: [
      {
        name: 'ORYEN',
        role: 'Strategic commercial clarity',
        line: 'Determines where commercial growth stalls.',
      },
      {
        name: 'ORYEN Solutions',
        role: 'Digital product builders',
        line: 'Builds the digital products and systems that help remove that friction.',
      },
      {
        name: 'ORYEN.eu',
        role: 'European brand presence',
        line: 'Anchors the European brand presence of ORYEN®.',
      },
    ],
  },
};
