/**
 * Slim homepage in oryen-*.json; move expanded copy to Aanpak / Aanbod.
 * Team copy: update web/src/lib/team/content.ts manually after (Christophe-block).
 * Run: node web/scripts/patch-homepage-slim.cjs
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

function audienceBlock(sel) {
  const voor = sel.forList.map((x) => `• ${x}`).join('\n');
  const niet = sel.notFor.map((x) => `• ${x}`).join('\n');
  return `${sel.forLabel}\n\n${voor}\n\n${sel.notForLabel}\n\n${niet}`;
}

function patchNl() {
  const j = load('oryen-nl.json');
  const prev = JSON.parse(JSON.stringify(j.Home));

  j.Home = {
    hero: prev.hero,
    diagnosis: {
      spine: '01 — Diagnose',
      headlineEm: 'Niet elk probleem\nvraagt meer marketing.',
      p1:
        'Soms zit het in sales. In opvolging. In de propositie. In tools, mensen of interne afstemming. Soms in een keuze die te vroeg werd gemaakt.\n\nToch gebeurt vaak hetzelfde: een bureau erbij, een nieuwe tool, een extra campagne, meer budget.\n\nTerwijl de echte oorzaak nog niet scherp benoemd is.\n\nORYEN kijkt niet alleen naar wat er gebeurt — maar naar wat eronder zit.',
      focus: '',
    },
    approach: {
      spine: '02 — Aanpak',
      headline: 'Eerst weten waar resultaat verloren gaat.',
      headlineEm: 'Dan pas kiezen wat nodig is.',
      note1: '',
      introHl: '',
      stepPrefix: 'Stap',
      steps: [
        { n: '01', name: 'In kaart brengen', q: 'Wat gebeurt er vandaag al?' },
        { n: '02', name: 'Resultaat toetsen', q: 'Waar blijft het resultaat achter?' },
        { n: '03', name: 'Oorzaak bepalen', q: 'Waar zit de echte oorzaak?' },
        { n: '04', name: 'Keuze maken', q: 'Wat moet eerst worden aangepakt?' },
      ],
      moreCta: 'Bekijk de volledige aanpak',
    },
    proof: prev.proof,
    selection: {
      spine: '04 — Voor wie',
      headline: 'Voor wie eerst wil weten',
      headlineEm: 'waar resultaat verloren gaat.',
      forItems: [
        'ORYEN is er voor ondernemers, salesverantwoordelijken en beslissers die voelen dat er veel gebeurt, maar dat het resultaat niet in verhouding staat tot de inspanning.',
        'Voor wie niet zomaar meer marketing, meer salesdruk of een nieuwe tool wil inschakelen — maar eerst wil weten waar de oorzaak zit.',
      ],
      forLabel: prev.selection.forLabel,
      forList: [],
      notForLabel: prev.selection.notForLabel,
      notFor: [],
    },
    about: {
      spine: '05 — Over ORYEN',
      headline: 'Niet sneller van alles doen.',
      headlineEm: 'Eerst juist beslissen.',
      statement: '',
      body:
        'Geen klassieke bureaustructuur. Geen lagen van accountmanagement. Wel een klein kernteam rond Christophe Dejaeghere — 23 jaar B2B-ervaring, rechtstreeks aanspreekbaar.\n\nORYEN kijkt niet naar marketing of sales als losse onderdelen, maar naar de werking ertussen.',
      creds: '',
      signature: '',
      postSignature: '',
      quote:
        'De duurste beslissingen zijn meestal niet de grote beslissingen.\nHet zijn de beslissingen die te vroeg worden genomen.',
    },
    offer: {
      spine: '06 — Aanbod',
      name: 'Reality Check',
      body:
        'Het eerste betaalde moment waarin ORYEN scherp krijgt waar sales, marketing en opvolging resultaat verliezen — en welke ingreep eerst verschil maakt.\n\nGeen vrijblijvende intake. Geen verkoopgesprek in vermomming.\n\nU vertrekt met duidelijkheid, prioriteiten en een concrete volgende stap. Of u daarna verder werkt met ORYEN, beslist u pas dan.',
      ctaPrimary: 'Plan een Reality Check-gesprek',
      secondaryHlBeforeEm: '',
      secondaryHlEm: '',
      secondaryBody: '',
      secondaryNote: 'Geen automatisch traject.\nRechtstreeks met Christophe.',
    },
  };

  j.Home.hero.claim =
    'Er gebeurt vaak al genoeg in uw bedrijf.\nEr wordt gecommuniceerd. Er wordt opgevolgd. Er worden tools gebruikt. Er worden beslissingen genomen.\n\nMaar toch blijft het gevoel: hier halen we niet uit wat erin zit.';
  j.Home.hero.sub =
    'De vraag is dan niet meteen of er méér moet gebeuren.\n\nDe echte vraag is: waar gaat het vandaag mis — en welke ingreep maakt nu echt verschil?';

  j.Aanpak.why.body1 = `${j.Aanpak.why.body1}\n\n${prev.diagnosis.p1}`.trim();
  j.Aanpak.lens.conclusion = `${prev.approach.note1}\n\n${j.Aanpak.lens.conclusion}`.trim();
  j.Aanpak.steps.steps = prev.approach.steps.map((s) => ({
    n: s.n,
    title: s.name,
    body: s.q,
  }));
  j.Aanpak.closing.body2 = audienceBlock(prev.selection);

  j.Aanbod.watHetIs.body = `${j.Aanbod.watHetIs.body}\n\n${prev.offer.body}`.trim();
  const hl1 = prev.offer.secondaryHlBeforeEm.replace(/<br\s*\/?>/gi, ' ');
  const hl2 = prev.offer.secondaryHlEm.replace(/<br\s*\/?>/gi, ' ');
  j.Aanbod.hero.sub = `${j.Aanbod.hero.sub}\n\n${hl1}\n${hl2}\n\n${prev.offer.secondaryBody}`.trim();

  save('oryen-nl.json', j);
  console.log('oryen-nl.json updated');
}

function patchEn() {
  const j = load('oryen-en.json');
  const prev = JSON.parse(JSON.stringify(j.Home));

  j.Home = {
    hero: prev.hero,
    diagnosis: {
      spine: '01 — Diagnosis',
      headlineEm: 'Not every problem\ncalls for more marketing.',
      p1:
        'Sometimes it sits in sales. In follow-up. In the proposition. In tools, people or internal alignment. Sometimes in a decision made too early.\n\nYet the same thing often happens: another agency, a new tool, an extra campaign, more budget.\n\nWhile the real cause has not been named sharply enough.\n\nORYEN does not only look at what happens — but at what sits underneath.',
      focus: '',
    },
    approach: {
      spine: '02 — Approach',
      headline: 'First know where results are lost.',
      headlineEm: 'Then choose what is needed.',
      note1: '',
      introHl: '',
      stepPrefix: 'Step',
      steps: [
        { n: '01', name: 'Map', q: 'What is already happening today?' },
        { n: '02', name: 'Test results', q: 'Where does result lag behind?' },
        { n: '03', name: 'Find the cause', q: 'Where is the real cause?' },
        { n: '04', name: 'Make the call', q: 'What must be tackled first?' },
      ],
      moreCta: 'See the full approach',
    },
    proof: prev.proof,
    selection: {
      spine: '04 — Who it is for',
      headline: 'For those who first want to know',
      headlineEm: 'where results are lost.',
      forItems: [
        'ORYEN is for entrepreneurs, sales leads and decision-makers who feel a lot is happening, but the result is not in proportion to the effort.',
        'For those who do not simply want more marketing, more sales pressure or a new tool — but first want to know where the cause is.',
      ],
      forLabel: prev.selection.forLabel,
      forList: [],
      notForLabel: prev.selection.notForLabel,
      notFor: [],
    },
    about: {
      spine: '05 — About ORYEN',
      headline: 'Not doing more, faster.',
      headlineEm: 'First deciding right.',
      statement: '',
      body:
        'No classic agency structure. No layers of account management. A small core team around Christophe Dejaeghere — 23 years of B2B experience, directly approachable.\n\nORYEN does not look at marketing or sales as separate boxes, but at how they work together.',
      creds: '',
      signature: '',
      postSignature: '',
      quote:
        'The most expensive decisions are usually not the big decisions.\nThey are the decisions taken too early.',
    },
    offer: {
      spine: '06 — Offer',
      name: 'Reality Check',
      body:
        'The first paid moment where ORYEN gets sharp on where sales, marketing and follow-up lose results — and which intervention makes the difference first.\n\nNot a casual intake. Not a sales call in disguise.\n\nYou leave with clarity, priorities and a concrete next step. Whether you continue with ORYEN after that, you decide only then.',
      ctaPrimary: 'Book a Reality Check conversation',
      secondaryHlBeforeEm: '',
      secondaryHlEm: '',
      secondaryBody: '',
      secondaryNote: 'No automatic trajectory.\nDirectly with Christophe.',
    },
  };

  j.Home.hero.claim =
    'Often enough is already happening in your company.\nThere is communication. There is follow-up. Tools are used. Decisions are made.\n\nAnd yet the feeling remains: we are not getting out what we put in.';
  j.Home.hero.sub =
    'The question is not immediately whether more needs to be done.\n\nThe real question is: where does it go wrong today — and which intervention actually makes a difference now?';

  j.Aanpak.why.body1 = `${j.Aanpak.why.body1}\n\n${prev.diagnosis.p1}`.trim();
  j.Aanpak.lens.conclusion = `${prev.approach.note1}\n\n${j.Aanpak.lens.conclusion}`.trim();
  j.Aanpak.steps.steps = prev.approach.steps.map((s) => ({
    n: s.n,
    title: s.name,
    body: s.q,
  }));
  j.Aanpak.closing.body2 = audienceBlock(prev.selection);

  j.Aanbod.watHetIs.body = `${j.Aanbod.watHetIs.body}\n\n${prev.offer.body}`.trim();
  const hl1 = prev.offer.secondaryHlBeforeEm.replace(/<br\s*\/?>/gi, ' ');
  const hl2 = prev.offer.secondaryHlEm.replace(/<br\s*\/?>/gi, ' ');
  j.Aanbod.hero.sub = `${j.Aanbod.hero.sub}\n\n${hl1}\n${hl2}\n\n${prev.offer.secondaryBody}`.trim();

  save('oryen-en.json', j);
  console.log('oryen-en.json updated');
}

patchNl();
patchEn();
