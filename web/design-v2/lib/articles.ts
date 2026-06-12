export type ArticleBlock =
  | { type: 'heading'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'table'; headers: string[]; rows: string[][] }

export type Faq = { q: string; a: string }

export type Article = {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  blocks: ArticleBlock[]
  faqs: Faq[]
}

export const articles: Article[] = [
  {
    slug: 'marketingbureau-versus-strategische-doorlichting',
    title:
      'Wat is het verschil tussen een marketingbureau en een strategische doorlichting?',
    excerpt:
      'Een marketingbureau begint bij uitvoering: het maakt en runt campagnes, content, websites en advertenties. Een strategische doorlichting begint een stap eerder — bij de oorzaak.',
    date: '31 mei 2026',
    author: 'Christophe Dejaeghere / ORYEN',
    blocks: [
      { type: 'subheading', text: 'Het bureau start bij de oplossing' },
      {
        type: 'paragraph',
        text: 'Een marketingbureau is gebouwd om uit te voeren. Je komt er met een vraag — meer leads, een nieuwe website, een campagne — en het bureau levert dat. Dat is nuttig wanneer je al weet wat je nodig hebt.',
      },
      {
        type: 'paragraph',
        text: 'Het risico zit in het vertrekpunt. Een bureau veronderstelt meestal dat het antwoord in marketing ligt, want dat is wat het verkoopt. De vraag "is meer marketing hier eigenlijk wel de juiste zet?" wordt zelden eerst gesteld. Zo komt budget terecht op de uitvoering van een oplossing waarvan nog niet vaststaat dat ze het echte probleem raakt.',
      },
      { type: 'subheading', text: 'De doorlichting start bij de oorzaak' },
      {
        type: 'paragraph',
        text: 'Een strategische doorlichting draait de volgorde om. Ze begint niet met wat er gemaakt moet worden, maar met de vraag waar het commercieel vastloopt. Soms ligt dat bij marketing. Vaak ergens anders: in de positionering, de opvolging, de afstemming tussen sales en marketing, de tools of een keuze die te vroeg gemaakt werd.',
      },
      {
        type: 'paragraph',
        text: 'Pas als die oorzaak scherp is, volgt de beslissing over wat eerst moet — en wat beter nog wacht. Daardoor kan een doorlichting net zo goed concluderen dat je géén nieuwe campagne nodig hebt, maar eerst iets intern moet rechtzetten. Een bureau dat van campagnes leeft, komt zelden tot die conclusie.',
      },
      { type: 'heading', text: 'Het verschil in één tabel' },
      {
        type: 'table',
        headers: ['', 'Marketingbureau', 'Strategische doorlichting'],
        rows: [
          ['Vertrekpunt', 'de oplossing (uitvoering)', 'de oorzaak (diagnose)'],
          [
            'Eerste vraag',
            'wat gaan we maken?',
            'waar verliest het resultaat kracht?',
          ],
          [
            'Uitkomst',
            'campagnes, content, website, leads',
            'een helder beeld van de breuk, prioriteiten en volgorde',
          ],
          [
            'Belang',
            'meer doen',
            'het juiste eerst doen — en weten wat je beter laat',
          ],
          [
            'Wanneer zinvol',
            'als je weet wat je nodig hebt',
            'als je veel doet maar te weinig resultaat ziet',
          ],
        ],
      },
      { type: 'subheading', text: 'Welke heb je wanneer nodig?' },
      {
        type: 'paragraph',
        text: 'De twee sluiten elkaar niet uit, maar de volgorde telt. Een doorlichting is zinvol wanneer je het gevoel hebt dat er al genoeg gebeurt, maar dat het resultaat niet in verhouding staat tot de inspanning — of wanneer je op het punt staat opnieuw te investeren in een tool, campagne of medewerker zonder zeker te zijn dat dat de juiste zet is.',
      },
      {
        type: 'paragraph',
        text: 'Een bureau is zinvol wanneer de richting al vaststaat en het werk vooral om goede uitvoering draait. De fout die geld kost, is uitvoering inschakelen vóór de oorzaak scherp is. Dan betaal je voor beweging in plaats van resultaat.',
      },
      {
        type: 'paragraph',
        text: 'Dat is waarom ORYEN met een Reality Check begint en niet met een offerte voor uitvoering: eerst weten waar het vastloopt, dan pas kiezen wat nodig is — en door wie.',
      },
    ],
    faqs: [
      {
        q: 'Is een strategische doorlichting niet gewoon een dure intake?',
        a: 'Nee. Een intake dient om een opdracht te verkopen. Een doorlichting kan net concluderen dat je beter níéts uitvoert vóór een onderliggend probleem is opgelost. Het is een beslismoment, geen verkoopstap.',
      },
      {
        q: 'Kan een marketingbureau die diagnose niet zelf doen?',
        a: 'Soms wel, maar er zit een belangenconflict in: een partij die van uitvoering leeft, heeft er baat bij dat het antwoord uitvoering is. Een doorlichting is waardevol juist omdat ze ook "nu niet doen" als uitkomst kan hebben.',
      },
      {
        q: 'Wat als de doorlichting toch uitwijst dat ik marketing nodig heb?',
        a: 'Dan weet je dat met zekerheid, en bovendien wélke marketing en in welke volgorde. Je investeert dan gericht in plaats van op een vermoeden. De diagnose maakt de uitvoering die erna komt effectiever.',
      },
    ],
  },
  {
    slug: 'waarom-marketing-sales-niet-rendeert',
    title:
      'Waarom rendeert marketing en sales niet — en hoe weet je waar het echt vastloopt?',
    excerpt:
      'Als marketing en sales te weinig opbrengen, ligt de oorzaak zelden bij te weinig inspanning. Meestal werken de onderdelen niet samen.',
    date: '30 mei 2026',
    author: 'Christophe Dejaeghere / ORYEN',
    blocks: [
      { type: 'heading', text: 'Meer doen lost het zelden op' },
      {
        type: 'paragraph',
        text: 'Er gebeurt in de meeste bedrijven al genoeg. Er wordt gecommuniceerd, opgevolgd, geïnvesteerd in tools en beslist. Toch blijft het gevoel: hier halen we niet uit wat erin zit.',
      },
      {
        type: 'paragraph',
        text: 'De reflex is dan om iets toe te voegen. Een extra campagne. Een nieuwe website. Een CRM. Meer salesdruk. Een bureau erbij. Maar wie niet weet waar het precies vastloopt, voegt iets toe aan een systeem dat de bestaande lekken niet dicht. Het resultaat is meer beweging, niet meer resultaat.',
      },
      {
        type: 'paragraph',
        text: 'De juiste vraag is niet of er nog iets bij moet. De vraag is waar de commerciële werking vandaag kracht verliest.',
      },
      {
        type: 'heading',
        text: 'Waar verliest een bedrijf commercieel kracht? Zes plekken',
      },
      {
        type: 'paragraph',
        text: 'In de praktijk zit de breuk bijna altijd op één of meer van zes plekken. Ze hangen samen, en daarom voelt het probleem vaak diffuus.',
      },
      { type: 'subheading', text: 'Positionering' },
      {
        type: 'paragraph',
        text: 'Is helder voor wie het bedrijf er is en welk probleem het oplost? Een te brede doelgroep of een vage belofte maakt alle marketing daarna minder scherp.',
      },
      { type: 'subheading', text: 'Commerciële flow' },
      {
        type: 'paragraph',
        text: 'Komt aandacht logisch binnen, wordt ze goed opgevolgd, en leidt ze tot verkoop? Veel bedrijven trekken instroom aan zonder dat er een logische opvolging achter zit.',
      },
      { type: 'subheading', text: 'Marketing-samenhang' },
      {
        type: 'paragraph',
        text: 'Werken website, content, campagnes, CRM en rapportering als één geheel, of als losse eilanden? Losse acties zonder lijn verliezen kracht onderweg.',
      },
      { type: 'subheading', text: 'Sales readiness' },
      {
        type: 'paragraph',
        text: 'Is sales klaar om vraag op te vangen en om te zetten? Als dat hapert, moet marketing de saleschaos compenseren — en dat lukt nooit volledig.',
      },
      { type: 'subheading', text: 'Digitale fit' },
      {
        type: 'paragraph',
        text: 'Sluiten de tools en automatisering aan op de echte noden, of lopen ze voor op de strategie? Technologie die vooruit is gekozen op de commerciële logica brengt zelden op wat ervan verwacht werd.',
      },
      { type: 'subheading', text: 'Prioriteit en hefboom' },
      {
        type: 'paragraph',
        text: 'Is duidelijk wat eerst moet, wat later kan en wat beter stopt? Als alles even belangrijk lijkt, krijgt niets de juiste volgorde.',
      },
      { type: 'heading', text: 'Hoe je vindt waar het écht vastloopt' },
      {
        type: 'paragraph',
        text: 'Het verschil zien tussen symptoom en oorzaak vraagt geen nieuw plan, maar een gerichte doorlichting in vier stappen.',
      },
      { type: 'subheading', text: 'In kaart brengen' },
      {
        type: 'paragraph',
        text: 'Eerst scherp krijgen wat er vandaag al gebeurt in aanbod, marketing, sales, opvolging en tools. Niet wat zou moeten, maar wat er is.',
      },
      { type: 'subheading', text: 'Realiteit toetsen' },
      {
        type: 'paragraph',
        text: 'Waar blijft het resultaat achter, en welke aannames kloppen mogelijk niet? Vaak rust een hele aanpak op een overtuiging die nooit getoetst is.',
      },
      { type: 'subheading', text: 'Oorzaak bepalen' },
      {
        type: 'paragraph',
        text: 'Zit de breuk in de propositie, de doelgroep, sales, marketing, opvolging, tools, mensen of interne afstemming? Eén oorzaak verklaart vaak meerdere symptomen.',
      },
      { type: 'subheading', text: 'Keuze maken' },
      {
        type: 'paragraph',
        text: 'Wat moet eerst worden aangepakt, en wat doe je beter nog niet? Dat laatste is even belangrijk: weten wat je nú niet doet, voorkomt verspilde investeringen.',
      },
      { type: 'heading', text: 'Wat dit oplevert' },
      {
        type: 'paragraph',
        text: 'Wie deze volgorde aanhoudt, stopt met gokken. In plaats van opnieuw geld, tijd of mensen in te zetten op een vermoeden, ligt er een helder beeld van waar het vastloopt, welke ingreep eerst verschil maakt, en wat beter nog wacht.',
      },
      {
        type: 'paragraph',
        text: 'Dat is precies wat een ORYEN Reality Check doet: een scherpe doorlichting van waar sales, marketing en opvolging resultaat verliezen — en welke stap nu echt telt. Niet om meer te doen, maar om te weten wat eerst moet.',
      },
    ],
    faqs: [
      {
        q: 'Hoe weet ik of het probleem bij marketing of bij sales ligt?',
        a: 'Vaak ligt het bij geen van beide afzonderlijk, maar bij de overgang ertussen: leads die niet of slecht worden opgevolgd. Een doorlichting kijkt naar de hele flow, niet naar één afdeling.',
      },
      {
        q: 'Heeft een nieuwe website of CRM zin als ik niet weet waar het misloopt?',
        a: 'Zelden. Een nieuwe tool versterkt wat er al werkt, maar dicht geen onderliggende breuk. Eerst bepalen waar het vastloopt voorkomt dat je investeert in iets dat de oorzaak niet raakt.',
      },
      {
        q: 'Wat als er gewoon te weinig leads zijn?',
        a: 'Dat is een aanname die het toetsen waard is. Soms zijn er genoeg leads, maar lekt de opvolging. Soms klopt de positionering niet, waardoor de verkeerde leads binnenkomen. De oorzaak zit niet altijd waar ze lijkt te zitten.',
      },
      {
        q: 'Is dit niet gewoon een audit?',
        a: 'Nee. Een audit somt op wat er is. Een Reality Check benoemt waar het vastloopt, in welke volgorde het moet worden aangepakt, en wat je beter nog niet doet.',
      },
    ],
  },
]

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug)
}
