import type { InsightListItem } from '@/types/insight';

import { marketingAgencyVersusStrategicDiagnosis } from '@/lib/insights/content/marketing-agency-versus-strategic-diagnosis';
import { marketingbureauVersusDoorlichting } from '@/lib/insights/content/marketingbureau-versus-strategische-doorlichting';
import { whyMarketingAndSalesDontDeliver } from '@/lib/insights/content/why-marketing-and-sales-dont-deliver';

export type InsightArticleFaqItem = {
  question: string;
  answer: string;
};

export type InsightArticleTableRow = {
  label: string;
  bureau: string;
  doorlichting: string;
};

export type InsightArticleSection =
  | { kind: 'h2'; heading: string; paragraphs: string[] }
  | { kind: 'h3'; heading: string; paragraphs: string[] }
  | { kind: 'table'; heading: string; rows: InsightArticleTableRow[] };

/** File-based insight article — add new entries to `INSIGHT_ARTICLES` only. */
export type FileInsightArticle = {
  slug: string;
  locale: 'nl' | 'en';
  title: string;
  metaTitle: string;
  metaDescription: string;
  author: string;
  publishedDate: string;
  modifiedDate: string;
  lead: string;
  excerpt?: string;
  sections: InsightArticleSection[];
  /** Optional pull quote rendered after the first section (hub only). */
  pullQuote?: string;
  cta: { label: string };
  faq: {
    heading: string;
    items: InsightArticleFaqItem[];
  };
};

const waaromMarketingSales: FileInsightArticle = {
  slug: 'waarom-marketing-sales-niet-rendeert',
  locale: 'nl',
  title:
    'Waarom rendeert marketing en sales niet — en hoe weet je waar het echt vastloopt?',
  metaTitle: 'Waarom rendeert je marketing en sales niet? | ORYEN',
  metaDescription:
    'Marketing en sales die te weinig opbrengen? De oorzaak is zelden te weinig inspanning. ORYEN toont waar je commerciële werking vastloopt — en wat eerst moet.',
  author: 'Christophe Dejaeghere',
  publishedDate: '2026-05-30',
  modifiedDate: '2026-05-30',
  lead:
    'Als marketing en sales te weinig opbrengen, ligt de oorzaak zelden bij te weinig inspanning. Meestal werken de onderdelen niet samen: aandacht komt binnen maar wordt slecht opgevolgd, sales en marketing trekken niet aan dezelfde kar, of er is geïnvesteerd in tools die de echte blokkade niet wegnemen. De eerste stap is daarom niet méér doen, maar bepalen waar de commerciële werking kracht verliest — en wat eerst moet worden aangepakt.',
  sections: [
    {
      kind: 'h2',
      heading: 'Meer doen lost het zelden op',
      paragraphs: [
        'Er gebeurt in de meeste bedrijven al genoeg. Er wordt gecommuniceerd, opgevolgd, geïnvesteerd in tools en beslist. Toch blijft het gevoel: hier halen we niet uit wat erin zit.',
        'De reflex is dan om iets toe te voegen. Een extra campagne. Een nieuwe website. Een CRM. Meer salesdruk. Een bureau erbij. Maar wie niet weet waar het precies vastloopt, voegt iets toe aan een systeem dat de bestaande lekken niet dicht. Het resultaat is meer beweging, niet meer resultaat. Twijfelt u of u een bureau of eerst een [strategische doorlichting](/inzichten/marketingbureau-versus-strategische-doorlichting) nodig hebt, begin daar.',
      ],
    },
    {
      kind: 'h2',
      heading: 'Waar verliest een bedrijf commercieel kracht? Zes plekken',
      paragraphs: [
        'In de praktijk zit de breuk bijna altijd op één of meer van zes plekken. Ze hangen samen, en daarom voelt het probleem vaak diffuus.',
      ],
    },
    {
      kind: 'h3',
      heading: 'Positionering',
      paragraphs: [
        'Is helder voor wie het bedrijf er is en welk probleem het oplost? Een te brede doelgroep of een vage belofte maakt alle marketing daarna minder scherp.',
      ],
    },
    {
      kind: 'h3',
      heading: 'Commerciële flow',
      paragraphs: [
        'Komt aandacht logisch binnen, wordt ze goed opgevolgd, en leidt ze tot verkoop? Veel bedrijven trekken instroom aan zonder dat er een logische opvolging achter zit.',
      ],
    },
    {
      kind: 'h3',
      heading: 'Marketing-samenhang',
      paragraphs: [
        'Werken website, content, campagnes, CRM en rapportering als één geheel, of als losse eilanden? Losse acties zonder lijn verliezen kracht onderweg.',
      ],
    },
    {
      kind: 'h3',
      heading: 'Sales readiness',
      paragraphs: [
        'Is sales klaar om vraag op te vangen en om te zetten? Als dat hapert, moet marketing de saleschaos compenseren — en dat lukt nooit volledig.',
      ],
    },
    {
      kind: 'h3',
      heading: 'Digitale fit',
      paragraphs: [
        'Sluiten de tools en automatisering aan op de echte noden, of lopen ze voor op de strategie? Technologie die vooruit is gekozen op de commerciële logica brengt zelden op wat ervan verwacht werd.',
      ],
    },
    {
      kind: 'h3',
      heading: 'Prioriteit en hefboom',
      paragraphs: [
        'Is duidelijk wat eerst moet, wat later kan en wat beter stopt? Als alles even belangrijk lijkt, krijgt niets de juiste volgorde.',
      ],
    },
    {
      kind: 'h2',
      heading: 'Hoe je vindt waar het écht vastloopt',
      paragraphs: [
        'Het verschil zien tussen symptoom en oorzaak vraagt geen nieuw plan, maar een gerichte doorlichting in vier stappen.',
      ],
    },
    {
      kind: 'h3',
      heading: 'In kaart brengen',
      paragraphs: [
        'Eerst scherp krijgen wat er vandaag al gebeurt in aanbod, marketing, sales, opvolging en tools. Niet wat zou moeten, maar wat er is.',
      ],
    },
    {
      kind: 'h3',
      heading: 'Realiteit toetsen',
      paragraphs: [
        'Waar blijft het resultaat achter, en welke aannames kloppen mogelijk niet? Vaak rust een hele aanpak op een overtuiging die nooit getoetst is.',
      ],
    },
    {
      kind: 'h3',
      heading: 'Oorzaak bepalen',
      paragraphs: [
        'Zit de breuk in de propositie, de doelgroep, sales, marketing, opvolging, tools, mensen of interne afstemming? Eén oorzaak verklaart vaak meerdere symptomen.',
      ],
    },
    {
      kind: 'h3',
      heading: 'Keuze maken',
      paragraphs: [
        'Wat moet eerst worden aangepakt, en wat doe je beter nog niet? Dat laatste is even belangrijk: weten wat je nú niet doet, voorkomt verspilde investeringen.',
      ],
    },
    {
      kind: 'h2',
      heading: 'Wat dit oplevert',
      paragraphs: [
        'Wie deze volgorde aanhoudt, stopt met gokken. In plaats van opnieuw geld, tijd of mensen in te zetten op een vermoeden, ligt er een helder beeld van waar het vastloopt, welke ingreep eerst verschil maakt, en wat beter nog wacht.',
        'Dat is precies wat een ORYEN Reality Check doet: een scherpe doorlichting van waar sales, marketing en opvolging resultaat verliezen — en welke stap nu echt telt. Niet om meer te doen, maar om te weten wat eerst moet.',
      ],
    },
  ],
  pullQuote:
    'De juiste vraag is niet of er nog iets bij moet. De vraag is waar de commerciële werking vandaag kracht verliest.',
  cta: {
    label: 'Plan een Reality Check-gesprek met Christophe',
  },
  faq: {
    heading: 'Veelgestelde vragen',
    items: [
      {
        question: 'Hoe weet ik of het probleem bij marketing of bij sales ligt?',
        answer:
          'Vaak ligt het bij geen van beide afzonderlijk, maar bij de overgang ertussen: leads die niet of slecht worden opgevolgd. Een doorlichting kijkt naar de hele flow, niet naar één afdeling.',
      },
      {
        question:
          'Heeft een nieuwe website of CRM zin als ik niet weet waar het misloopt?',
        answer:
          'Zelden. Een nieuwe tool versterkt wat er al werkt, maar dicht geen onderliggende breuk. Eerst bepalen waar het vastloopt voorkomt dat je investeert in iets dat de oorzaak niet raakt.',
      },
      {
        question: 'Wat als er gewoon te weinig leads zijn?',
        answer:
          'Dat is een aanname die het toetsen waard is. Soms zijn er genoeg leads, maar lekt de opvolging. Soms klopt de positionering niet, waardoor de verkeerde leads binnenkomen. De oorzaak zit niet altijd waar ze lijkt te zitten.',
      },
      {
        question: 'Is dit niet gewoon een audit?',
        answer:
          'Nee. Een audit somt op wat er is. Een Reality Check benoemt waar het vastloopt, in welke volgorde het moet worden aangepakt, en wat je beter nog niet doet.',
      },
    ],
  },
};

/** All file-based articles — append new articles here. */
export const INSIGHT_ARTICLES: FileInsightArticle[] = [
  marketingbureauVersusDoorlichting,
  marketingAgencyVersusStrategicDiagnosis,
  waaromMarketingSales,
  whyMarketingAndSalesDontDeliver,
];

export function getFileInsightArticles(locale: string): FileInsightArticle[] {
  return INSIGHT_ARTICLES.filter((a) => a.locale === locale);
}

export function getFileInsightArticleBySlug(
  locale: string,
  slug: string
): FileInsightArticle | null {
  return (
    getFileInsightArticles(locale).find((a) => a.slug === slug) ?? null
  );
}

export function fileInsightArticleToListItem(
  article: FileInsightArticle
): InsightListItem {
  return {
    _id: `file:${article.slug}`,
    title: article.title,
    excerpt: article.excerpt ?? article.lead,
    slug: article.slug,
    publishedAt: article.publishedDate,
    readingMinutes: null,
    authorName: article.author,
    tags: null,
    heroImageUrl: null,
    featured: false,
  };
}

export function getFileInsightArticleListItems(
  locale: string
): InsightListItem[] {
  return getFileInsightArticles(locale)
    .sort(
      (a, b) =>
        new Date(b.publishedDate).getTime() -
        new Date(a.publishedDate).getTime()
    )
    .map(fileInsightArticleToListItem);
}
