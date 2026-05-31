import type { FileInsightArticle } from '@/lib/insights/articles';

/** Spoke 1 — bureau vs strategische doorlichting (goedgekeurde Deel 1-tekst). */
export const marketingbureauVersusDoorlichting: FileInsightArticle = {
  slug: 'marketingbureau-versus-strategische-doorlichting',
  locale: 'nl',
  title:
    'Wat is het verschil tussen een marketingbureau en een strategische doorlichting?',
  metaTitle: 'Marketingbureau of strategische doorlichting? | ORYEN',
  metaDescription:
    'Een bureau voert uit, een doorlichting zoekt eerst de oorzaak. Het verschil — en wanneer je wat nodig hebt. ORYEN begint bij de breuk, niet bij de campagne.',
  author: 'Christophe Dejaeghere / ORYEN',
  publishedDate: '2026-05-31',
  modifiedDate: '2026-05-31',
  lead:
    'Een marketingbureau begint bij uitvoering: het maakt en runt campagnes, content, websites en advertenties om meer zichtbaarheid en leads te halen. Een strategische doorlichting begint een stap eerder, bij de oorzaak: ze onderzoekt waar sales, marketing en opvolging vandaag resultaat verliezen en wat eerst moet worden aangepakt — vóór er nieuw budget naar uitvoering gaat. Het bureau lost op door te doen. De doorlichting bepaalt eerst óf, wat en in welke volgorde er iets moet gebeuren.',
  sections: [
    {
      kind: 'h3',
      heading: 'Het bureau start bij de oplossing',
      paragraphs: [
        'Een marketingbureau is gebouwd om uit te voeren. Je komt er met een vraag — meer leads, een nieuwe website, een campagne — en het bureau levert dat. Dat is nuttig wanneer je al weet wat je nodig hebt.',
        'Het risico zit in het vertrekpunt. Een bureau veronderstelt meestal dat het antwoord in marketing ligt, want dat is wat het verkoopt. De vraag "is meer marketing hier eigenlijk wel de juiste zet?" wordt zelden eerst gesteld. Zo komt budget terecht op de uitvoering van een oplossing waarvan nog niet vaststaat dat ze het echte probleem raakt.',
      ],
    },
    {
      kind: 'h3',
      heading: 'De doorlichting start bij de oorzaak',
      paragraphs: [
        'Een strategische doorlichting draait de volgorde om. Ze begint niet met wat er gemaakt moet worden, maar met de vraag waar het commercieel vastloopt. Soms ligt dat bij marketing. Vaak ergens anders: in de positionering, de opvolging, de afstemming tussen sales en marketing, de tools of een keuze die te vroeg gemaakt werd.',
        'Pas als die oorzaak scherp is, volgt de beslissing over wat eerst moet — en wat beter nog wacht. Daardoor kan een doorlichting net zo goed concluderen dat je géén nieuwe campagne nodig hebt, maar eerst iets intern moet rechtzetten. Een bureau dat van campagnes leeft, komt zelden tot die conclusie.',
      ],
    },
    {
      kind: 'table',
      heading: 'Het verschil in één tabel',
      rows: [
        {
          label: 'Vertrekpunt',
          bureau: 'de oplossing (uitvoering)',
          doorlichting: 'de oorzaak (diagnose)',
        },
        {
          label: 'Eerste vraag',
          bureau: 'wat gaan we maken?',
          doorlichting: 'waar verliest het resultaat kracht?',
        },
        {
          label: 'Uitkomst',
          bureau: 'campagnes, content, website, leads',
          doorlichting:
            'een helder beeld van de breuk, prioriteiten en volgorde',
        },
        {
          label: 'Belang',
          bureau: 'meer doen',
          doorlichting:
            'het juiste eerst doen — en weten wat je beter laat',
        },
        {
          label: 'Wanneer zinvol',
          bureau: 'als je weet wat je nodig hebt',
          doorlichting:
            'als je veel doet maar te weinig resultaat ziet',
        },
      ],
    },
    {
      kind: 'h3',
      heading: 'Welke heb je wanneer nodig?',
      paragraphs: [
        'De twee sluiten elkaar niet uit, maar de volgorde telt. Een doorlichting is zinvol wanneer je het gevoel hebt dat er al genoeg gebeurt, maar dat [het resultaat niet in verhouding staat tot de inspanning](/inzichten/waarom-marketing-sales-niet-rendeert) — of wanneer je op het punt staat opnieuw te investeren in een tool, campagne of medewerker zonder zeker te zijn dat dat de juiste zet is.',
        'Een bureau is zinvol wanneer de richting al vaststaat en het werk vooral om goede uitvoering draait. De fout die geld kost, is uitvoering inschakelen vóór de oorzaak scherp is. Dan betaal je voor beweging in plaats van resultaat.',
        'Dat is waarom ORYEN met een [Reality Check](/aanbod) begint en niet met een offerte voor uitvoering: eerst weten waar het vastloopt, dan pas kiezen wat nodig is — en door wie.',
      ],
    },
  ],
  cta: {
    label: 'Plan een Reality Check-gesprek met Christophe',
  },
  faq: {
    heading: 'Veelgestelde vragen',
    items: [
      {
        question: 'Is een strategische doorlichting niet gewoon een dure intake?',
        answer:
          'Nee. Een intake dient om een opdracht te verkopen. Een doorlichting kan net concluderen dat je beter níéts uitvoert vóór een onderliggend probleem is opgelost. Het is een beslismoment, geen verkoopstap.',
      },
      {
        question: 'Kan een marketingbureau die diagnose niet zelf doen?',
        answer:
          'Soms wel, maar er zit een belangenconflict in: een partij die van uitvoering leeft, heeft er baat bij dat het antwoord uitvoering is. Een doorlichting is waardevol juist omdat ze ook "nu niet doen" als uitkomst kan hebben.',
      },
      {
        question: 'Wat als de doorlichting toch uitwijst dat ik marketing nodig heb?',
        answer:
          'Dan weet je dat met zekerheid, en bovendien wélke marketing en in welke volgorde. Je investeert dan gericht in plaats van op een vermoeden. De diagnose maakt de uitvoering die erna komt effectiever.',
      },
    ],
  },
};
