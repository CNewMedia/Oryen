/**
 * Apply sharpened homepage copydeck to oryen-nl.json / oryen-en.json (Home section).
 * Run: node web/scripts/patch-home-copydeck.cjs
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

function load(name) {
  return JSON.parse(
    fs.readFileSync(path.join(root, 'src/lib/sanity/bootstrap/content', name), 'utf8')
  );
}

function save(name, j) {
  fs.writeFileSync(
    path.join(root, 'src/lib/sanity/bootstrap/content', name),
    JSON.stringify(j, null, 2) + '\n',
    'utf8'
  );
}

const nlHome = {
  meta: {
    title: 'ORYEN — Direction before action',
    description:
      'ORYEN toont waar sales, marketing en opvolging resultaat verliezen. Eerst weten waar het commercieel vastloopt — dan pas kiezen wat nodig is.',
  },
  hero: {
    titleLine1: 'ORYEN toont waar sales, marketing en opvolging resultaat verliezen.',
    titleLine2: '',
    titleEm: '',
    claim: '',
    sub: '',
    primaryCta: 'Plan een Reality Check',
    secondaryCta: 'Bekijk de aanpak',
  },
  recognition: {
    headline: 'Er gebeurt vaak al genoeg.',
    body:
      'Er gebeurt vaak al genoeg in uw bedrijf.\nEr wordt gecommuniceerd. Er wordt opgevolgd. Er worden tools gebruikt. Er worden beslissingen genomen.\n\nMaar toch blijft het gevoel:\n\nhier halen we niet uit wat erin zit.\n\nDe vraag is dan niet meteen of er méér moet gebeuren.\n\nDe echte vraag is:\n\nwaar gaat het vandaag mis — en welke ingreep maakt nu echt verschil?',
    cta: 'Plan een Reality Check',
  },
  diagnosis: {
    spine: '01 — Diagnose',
    headlineEm: 'Niet elk probleem\nvraagt meer marketing.',
    p1:
      'Soms zit het in sales.\nSoms in opvolging.\nSoms in de propositie.\nSoms in tools.\nSoms in mensen.\nSoms in interne afstemming.\nSoms in een keuze die te vroeg werd gemaakt.\n\nToch gebeurt vaak hetzelfde:\ner komt een bureau bij, een nieuwe tool, een extra campagne, meer budget of meer druk op het team.\n\nTerwijl de echte oorzaak nog niet scherp genoeg benoemd is.\n\nORYEN kijkt niet alleen naar wat er gebeurt.\nWe kijken naar wat eronder zit:\n\nwaar loopt aandacht verloren?\nwaar haakt opvolging af?\nwaar wordt verkoop moeilijker dan nodig?\nwaar wordt marketing ruis in plaats van hefboom?\nwaar klopt de gekozen oplossing niet met het echte probleem?',
    focus: '',
  },
  approach: {
    spine: '02 — Aanpak',
    headline: 'Eerst weten waar resultaat verloren gaat.',
    headlineEm: 'Dan pas kiezen wat nodig is.',
    note1:
      'ORYEN maakt duidelijk waar sales, marketing en opvolging elkaar versterken — of net tegenwerken.\n\nNiet om nog meer ruis te creëren.\nWel om scherp te krijgen:\n\nwat vandaag resultaat tegenhoudt;\nwaar tijd, budget of energie verloren gaat;\nwelke aanname niet klopt;\nwat nu prioriteit heeft;\nwat beter nog wacht;\nen welke ingreep eerst verschil maakt.',
    introHl: '',
    stepPrefix: 'Stap',
    steps: [
      {
        n: '01',
        name: 'In kaart brengen',
        q: 'Wat gebeurt er vandaag al?\n\nWe kijken naar aanbod, doelgroep, communicatie, sales, opvolging, tools en interne keuzes.\n\nNiet vanuit theorie.\nWel vanuit de vraag:\n\nwat doet dit vandaag met resultaat?',
      },
      {
        n: '02',
        name: 'Resultaat toetsen',
        q: 'Waar blijft het resultaat achter?\n\nNiet alleen in cijfers, maar ook in signalen:\n\nleads die niet goed passen;\nopvolging die te traag of te versnipperd loopt;\nsales die moeite heeft om het verschil uit te leggen;\nmarketing die wel zichtbaar is, maar weinig beweging brengt;\ntools die meer complexiteit dan grip geven;\nklanten die afhaken, twijfelen of blijven vergelijken.',
      },
      {
        n: '03',
        name: 'Oorzaak bepalen',
        q: 'Waar zit de echte oorzaak?\n\nIn de propositie?\nIn doelgroepkeuze?\nIn sales?\nIn marketing?\nIn opvolging?\nIn tools?\nIn mensen?\nIn interne afstemming?\nOf in een beslissing die logisch leek, maar vertrok van een verkeerde aanname?\n\nDat onderscheid maakt het verschil.\n\nWant wie het verkeerde probleem oplost, blijft investeren zonder wezenlijke vooruitgang.',
      },
      {
        n: '04',
        name: 'Keuze maken',
        q: 'Wat moet eerst worden aangepakt?\n\nNiet alles tegelijk.\nNiet nog een lijst met losse acties.\n\nWel een heldere prioriteit:\n\ndit eerst.\ndit nog niet.\ndit stopzetten.\ndit anders bekijken.\n\nZo ontstaat richting vóór uitvoering.',
      },
    ],
    moreCta: 'Bekijk de volledige aanpak',
  },
  proof: {
    spine: '03 — Bewijs',
    headline: 'ORYEN bepaalde eerst de richting.',
    headlineEm: 'Daarna pas de uitvoering.',
    featured: {
      client: 'Hof van Cleve',
      title:
        'Een driesterren-restaurant met onaantastbare reputatie, maar weinig binding bij een jonger publiek dat het toekomstig clienteel moest worden.',
      line1:
        'Niet commercieel zichtbaarder maken. Wel het merk aantrekkelijk maken bij een nieuwe generatie zonder de klasse te verliezen.',
      line2:
        'Vier jaar gericht werken aan betrokkenheid en jeugdiger merkgevoel. Tot een jongere overnemer de fakkel kon overnemen.',
      line3: '',
    },
    minis: [
      {
        client: 'Willems Veranda',
        subtitle:
          'Sterk vakmanschap, maar online nauwelijks vindbaar — en dus afgesloten van hoe klanten vandaag zoeken en kiezen.',
        body: 'Niet eerst meer reclame. Eerst de digitale aansluiting maken die er nog niet was.',
        result:
          'Dat maakte het merk structureel beter vindbaar, met tientallen kernzoektermen in de top drie.',
      },
      {
        client: 'Concordia Textiles',
        subtitle:
          'Digitalisering die intern vastliep op uiteenlopende verwachtingen en een complexe structuur.',
        body: 'Niet meteen uitrollen. Eerst intern op één lijn krijgen wat haalbaar, wenselijk en prioritair was.',
        result: 'Dat maakte de digitalisering uitvoerbaar, met draagvlak en duidelijke prioriteiten.',
      },
      {
        client: 'BMW — lokale dealer',
        subtitle:
          'Sterke positie, maar communicatief niet te onderscheiden van andere dealers in de regio.',
        body: 'Niet eerst meer budget. Eerst kiezen wat hen lokaal écht anders maakte.',
        result: 'Dat bracht opnieuw digitale aanvragen op gang uit de eigen regio.',
      },
    ],
  },
  offer: {
    spine: '04 — Reality Check',
    name: 'Reality Check',
    body:
      'De Reality Check is het eerste betaalde moment waarin ORYEN scherp krijgt waar sales, marketing en opvolging resultaat verliezen — en welke ingreep eerst verschil maakt.\n\nGeen vrijblijvende intake.\nGeen verkoopgesprek in vermomming.\nGeen lange lijst met losse aanbevelingen.\n\nWel een scherp eerste beslismoment waarmee duidelijk wordt:\n\nwat vandaag resultaat tegenhoudt;\nwaar de oorzaak waarschijnlijk zit;\nwat nu prioriteit heeft;\nwat voorlopig geen zin heeft;\nwelke volgende stap logisch is.',
    price: '€2.950 ex btw',
    deliverables: [
      'Commerciële scorecard — waar het commercieel vastloopt, in één helder beeld',
      'Eerste besliskader — wat nu prioriteit heeft, wat wacht, en waarom',
      '90-dagen koerslijn — korte horizon met focus',
      'Stoplijst — wat u beter nog niet doet vóór de basis klopt',
    ],
    solutionsNote:
      'Wanneer uit de diagnose blijkt dat uw digitale infrastructuur, website of platform de groei blokkeert, zetten we de strategie om in tastbare producten via ons executielabel ORYEN Solutions.',
    ctaPrimary: 'Plan een Reality Check met Christophe',
    secondaryNote: 'Geen automatisch traject.\nRechtstreeks met Christophe.',
  },
  insights: {
    spine: '05 — Inzichten',
    headline: 'Artikels over commerciële keuzes',
    intro: 'waar loopt het werkelijk vast?',
    cta: 'Bekijk de inzichten',
  },
};

const enHome = {
  meta: {
    title: 'ORYEN — Direction before action',
    description:
      'ORYEN shows where sales, marketing and follow-up lose results. First know where things stall commercially — then choose what is needed.',
  },
  hero: {
    titleLine1: 'ORYEN shows where sales, marketing and follow-up lose results.',
    titleLine2: '',
    titleEm: '',
    claim: '',
    sub: '',
    primaryCta: 'Book a Reality Check',
    secondaryCta: 'See the approach',
  },
  recognition: {
    headline: 'Often enough is already happening.',
    body:
      'Often enough is already happening in your company.\nThere is communication. There is follow-up. Tools are used. Decisions are made.\n\nAnd yet the feeling remains:\n\nwe are not getting out what we put in.\n\nThe question is not immediately whether more needs to be done.\n\nThe real question is:\n\nwhere does it go wrong today — and which intervention actually makes a difference now?',
    cta: 'Book a Reality Check',
  },
  diagnosis: {
    spine: '01 — Diagnosis',
    headlineEm: 'Not every problem\ncalls for more marketing.',
    p1:
      'Sometimes it sits in sales.\nSometimes in follow-up.\nSometimes in the proposition.\nSometimes in tools.\nSometimes in people.\nSometimes in internal alignment.\nSometimes in a decision made too early.\n\nYet the same thing often happens:\nanother agency, a new tool, an extra campaign, more budget or more pressure on the team.\n\nWhile the real cause has not been named sharply enough.\n\nORYEN does not only look at what happens.\nWe look at what sits underneath:\n\nwhere does attention leak?\nwhere does follow-up drop off?\nwhere does sales become harder than it needs to be?\nwhere does marketing become noise instead of leverage?\nwhere does the chosen solution miss the real problem?',
    focus: '',
  },
  approach: {
    spine: '02 — Approach',
    headline: 'First know where results are lost.',
    headlineEm: 'Then choose what is needed.',
    note1:
      'ORYEN makes clear where sales, marketing and follow-up reinforce each other — or work against each other.\n\nNot to create more noise.\nBut to get sharp on:\n\nwhat holds back results today;\nwhere time, budget or energy is lost;\nwhich assumption does not hold;\nwhat deserves priority now;\nwhat is better left waiting;\nand which intervention makes the first difference.',
    introHl: '',
    stepPrefix: 'Step',
    steps: nlHome.approach.steps.map((s, i) => ({
      n: s.n,
      name: ['Map out', 'Check results', 'Pinpoint the cause', 'Make the call'][i],
      q: [
        'What is happening today?\n\nWe look at offer, audience, communication, sales, follow-up, tools and internal choices.\n\nNot from theory.\nBut from one question:\n\nwhat does this do to results today?',
        'Where do results fall short?\n\nNot only in numbers, but in signals:\n\nleads that do not fit;\nfollow-up that is too slow or fragmented;\nsales struggling to explain the difference;\nmarketing that is visible but brings little movement;\ntools that add complexity instead of grip;\ncustomers who drop off, hesitate or keep comparing.',
        'Where is the real cause?\n\nIn the proposition?\nIn audience choice?\nIn sales?\nIn marketing?\nIn follow-up?\nIn tools?\nIn people?\nIn internal alignment?\nOr in a decision that seemed logical but started from a wrong assumption?\n\nThat distinction matters.\n\nBecause whoever solves the wrong problem keeps investing without real progress.',
        'What must be tackled first?\n\nNot everything at once.\nNot another list of loose actions.\n\nBut a clear priority:\n\nthis first.\nthis not yet.\nthis stop.\nthis revisit.\n\nThat is how direction comes before execution.',
      ][i],
    })),
    moreCta: 'See the full approach',
  },
  proof: {
    spine: '03 — Proof',
    headline: 'ORYEN set the direction first.',
    headlineEm: 'Execution only after.',
    featured: {
      client: 'Hof van Cleve',
      title:
        'A three-star restaurant with an impeccable reputation, but little connection with a younger audience that needed to become the future clientele.',
      line1:
        'Not about becoming more commercially visible. About making the brand attractive to a new generation without losing its class.',
      line2:
        'Four years of focused work on engagement and a younger brand feel — until a younger successor could take the torch.',
      line3: '',
    },
    minis: [
      {
        client: 'Willems Veranda',
        subtitle:
          'Strong craftsmanship, but barely discoverable online — cut off from how customers search and choose today.',
        body: 'Not more advertising first. First building the digital connection that was not there yet.',
        result:
          'That made the brand structurally easier to find, with dozens of core search terms in the top three.',
      },
      {
        client: 'Concordia Textiles',
        subtitle:
          'Digitisation stalling internally against diverging expectations and a complex structure.',
        body: 'Not rolling out at once. First aligning internally on what was feasible, desirable and priority.',
        result: 'That made digitisation workable, with buy-in and clear priorities.',
      },
      {
        client: 'BMW — local dealer',
        subtitle:
          'A strong position, but in messaging hard to tell apart from other dealers in the region.',
        body: 'Not more budget first. First choosing what truly set them apart locally.',
        result: 'That restarted digital enquiries from their own region.',
      },
    ],
  },
  offer: {
    spine: '04 — Reality Check',
    name: 'Reality Check',
    body:
      'The Reality Check is the first paid moment where ORYEN gets sharp on where sales, marketing and follow-up lose results — and which intervention makes the first difference.\n\nNo casual intake.\nNot a sales conversation in disguise.\nNo long list of loose recommendations.\n\nBut a sharp first decision moment that makes clear:\n\nwhat holds back results today;\nwhere the cause likely sits;\nwhat deserves priority now;\nwhat does not make sense yet;\nwhich next step is logical.',
    price: '€2,950 ex VAT',
    deliverables: [
      'Commercial scorecard — where things stall commercially, in one clear picture',
      'First decision framework — what takes priority now, what waits, and why',
      '90-day course line — a short horizon with focus',
      'Stop list — what you are better off not doing until the basics hold',
    ],
    solutionsNote:
      'When the diagnosis shows that your digital infrastructure, website or platform is blocking growth, we turn strategy into tangible products through our execution label ORYEN Solutions.',
    ctaPrimary: 'Book a Reality Check with Christophe',
    secondaryNote: 'No automatic trajectory.\nDirectly with Christophe.',
  },
  insights: {
    spine: '05 — Insights',
    headline: 'Articles on commercial choices',
    intro: 'where does it really stall?',
    cta: 'See the insights',
  },
};

const nl = load('oryen-nl.json');
nl.Home = nlHome;
nl.Pages.insights = {
  eyebrow: 'Inzichten',
  title: 'Artikels over commerciële keuzes',
  intro: 'Artikels over commerciële keuzes — waar loopt het werkelijk vast?',
};
save('oryen-nl.json', nl);

const en = load('oryen-en.json');
en.Home = enHome;
en.Pages.insights = {
  eyebrow: 'Insights',
  title: 'Articles on commercial choices',
  intro: 'Articles on commercial choices — where does it really stall?',
};
save('oryen-en.json', en);

console.log('Home copydeck applied to oryen-nl.json and oryen-en.json');
