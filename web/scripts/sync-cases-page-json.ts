/**
 * Embeds `CasesPage` from `cases-page-data.ts` into `oryen-*.json` for parity with bootstrap JSON.
 * Run from `web/`: npx tsx scripts/sync-cases-page-json.ts
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { CASES_PAGE_EN, CASES_PAGE_NL } from '../src/lib/sanity/bootstrap/cases-page-data';

const dir = join(process.cwd(), 'src/lib/sanity/bootstrap/content');

for (const [file, data] of [
  ['oryen-nl.json', CASES_PAGE_NL],
  ['oryen-en.json', CASES_PAGE_EN],
] as const) {
  const p = join(dir, file);
  const j = JSON.parse(readFileSync(p, 'utf8')) as Record<string, unknown>;
  j.CasesPage = data;
  writeFileSync(p, `${JSON.stringify(j, null, 2)}\n`);
}

console.log('Synced CasesPage into oryen-nl.json and oryen-en.json');
