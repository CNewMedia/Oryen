/**
 * Apply verbatim NL homepage + insights intro from the Cursor implementation package.
 * Run: node web/scripts/patch-site-copydeck.cjs
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

const nl = load('oryen-nl.json');

nl.Nav.team = 'Over ORYEN';

nl.Home.meta.description =
  'ORYEN maakt duidelijk waar het commercieel vastloopt — en wat eerst moet worden aangepakt.';

nl.Home.hero = {
  titleLine1:
    'ORYEN maakt duidelijk waar het commercieel vastloopt — en wat eerst moet worden aangepakt.',
  titleLine2: '',
  titleEm: '',
  claim:
    'We onderzoeken waarom marketing, sales en opvolging niet het resultaat opleveren dat u verwacht, vóór u opnieuw investeert in campagnes, tools, websites of extra uitvoerende partners.',
  sub: '',
  primaryCta: 'Plan een Reality Check',
  secondaryCta: 'Bekijk de aanpak',
};

nl.Home.recognition = {
  headline: 'Er gebeurt vaak al genoeg.',
  body:
    'Er wordt gecommuniceerd. Er wordt opgevolgd. Er worden tools gebruikt. Er worden beslissingen genomen.\n\nMaar toch blijft het gevoel: hier halen we niet uit wat erin zit.\n\nDe vraag is dan niet of er méér moet gebeuren. De echte vraag is: waar gaat het vandaag mis — en welke ingreep maakt nu echt verschil?',
  cta: 'Plan een Reality Check',
};

nl.Home.diagnosis.p1 =
  'Soms zit het probleem in sales. Soms in opvolging. Soms in de propositie. Soms in tools, mensen of interne afstemming. Soms in een keuze die te vroeg of zonder samenhang werd gemaakt.\n\nToch gebeurt vaak hetzelfde: er komt een bureau bij, een nieuwe tool, een extra campagne of meer budget. Terwijl de echte oorzaak nog niet scherp genoeg benoemd is.\n\nORYEN kijkt niet alleen naar wat er gebeurt. We kijken naar wat eronder zit.';

nl.Home.approach.note1 = '';
nl.Home.approach.steps = [
  { n: '01', name: 'In kaart brengen', q: 'Wat gebeurt er vandaag al?' },
  { n: '02', name: 'Resultaat toetsen', q: 'Waar blijft het resultaat achter?' },
  { n: '03', name: 'Oorzaak bepalen', q: 'Waar zit de echte oorzaak?' },
  { n: '04', name: 'Keuze maken', q: 'Wat moet eerst worden aangepakt?' },
];

nl.Home.proof.featured = {
  client: 'Hof van Cleve',
  title:
    'Een driesterrenrestaurant met onaantastbare reputatie, maar weinig binding bij een jonger publiek dat het toekomstig cliënteel moest worden. Niet commercieel zichtbaarder maken. Wel het merk aantrekkelijk maken bij een nieuwe generatie zonder de klasse te verliezen. Vier jaar gericht werken aan betrokkenheid en jeugdiger merkgevoel. Tot een jongere overnemer de fakkel kon overnemen.',
  line1: '',
  line2: '',
  line3: '',
};

nl.Home.proof.minis = [
  {
    client: 'Willems Veranda',
    subtitle:
      'Sterk vakmanschap, maar online nauwelijks vindbaar — en dus afgesloten van hoe klanten vandaag zoeken en kiezen. Niet eerst meer reclame. Eerst de digitale aansluiting maken die er nog niet was. Dat maakte het merk structureel beter vindbaar, met tientallen kernzoektermen in de top drie.',
    body: '',
    result: '',
  },
  {
    client: 'Concordia Textiles',
    subtitle:
      'Digitalisering die intern vastliep op uiteenlopende verwachtingen en een complexe structuur. Niet meteen uitrollen. Eerst intern op één lijn krijgen wat haalbaar, wenselijk en prioritair was. Dat maakte de digitalisering uitvoerbaar, met draagvlak en duidelijke prioriteiten.',
    body: '',
    result: '',
  },
  {
    client: 'BMW — lokale dealer',
    subtitle:
      'Sterke positie, maar communicatief niet te onderscheiden van andere dealers in de regio. Niet eerst meer budget. Eerst kiezen wat hen lokaal écht anders maakte. Dat bracht opnieuw digitale aanvragen op gang uit de eigen regio.',
    body: '',
    result: '',
  },
];

nl.Home.offer = {
  spine: '04 — Reality Check',
  name: 'Een scherp eerste beslismoment.',
  body:
    'De Reality Check is het eerste betaalde moment waarin ORYEN scherp krijgt waar sales, marketing en opvolging resultaat verliezen — en welke ingreep eerst verschil maakt.\n\nGeen vrijblijvende intake.\nGeen verkoopgesprek in vermomming.\nGeen lange lijst met losse aanbevelingen.\n\nWel één compacte commerciële scorecard met:',
  price: '€2.950 excl. btw',
  deliverables: [
    'waar het commercieel vastloopt',
    'wat nu prioriteit heeft',
    'wat beter nog wacht',
    'welke volgende stap logisch is',
    'wat u beter niet doet vóór de basis klopt',
  ],
  solutionsNote:
    'Daarna beslist u zelf of u zelfstandig verdergaat, met uw bestaande partners werkt, of ORYEN inschakelt voor verdere begeleiding of digitale productbouw via ORYEN Solutions.',
  ctaPrimary: 'Plan een Reality Check met Christophe',
  secondaryNote: 'Geen automatisch traject.\nRechtstreeks met Christophe.',
};

nl.Home.insights = {
  spine: '05 — Inzichten',
  headline: 'Denken vóór doen.',
  intro:
    'Artikels over commerciële keuzes, marketing die niet rendeert, salesopvolging, digitale systemen en de vraag die vóór elke investering moet komen:\n\nwaar loopt het werkelijk vast?',
  cta: 'Bekijk de inzichten',
};

nl.Pages.insights = {
  eyebrow: 'Inzichten',
  title: 'Inzichten',
  intro:
    'Artikels over commerciële keuzes, marketing die niet rendeert, salesopvolging, digitale systemen en de vraag die vóór elke investering moet komen: waar loopt het werkelijk vast?',
};

save('oryen-nl.json', nl);

const en = load('oryen-en.json');
en.Nav.team = 'About ORYEN';
en.Pages.insights = {
  eyebrow: 'Insights',
  title: 'Insights',
  intro:
    "Articles about commercial choices, marketing that doesn't pay off, sales follow-up, digital systems and the question that must come before every investment: where does it really stall?",
};
save('oryen-en.json', en);

console.log('Site copydeck NL + insights intros applied');
