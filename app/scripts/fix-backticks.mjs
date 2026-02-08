import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const PATHWAYS = 'C:/Users/44776/Downloads/Ebooks-Courses/Ebooks/Gyanmarg/app/src/data/pathways';

const files = [
  'shiv-sutras-lessons.ts',
  'upanishads-lessons.ts',
  'upanishads-gap.ts',
  'bhagavad-gita-lessons.ts',
  'ramayana-mahabharata-lessons.ts',
  'ayurveda-lessons.ts',
  'yoga-philosophy-lessons.ts',
  'sanskrit-mantras-lessons.ts',
  'jyotish-vastu-lessons.ts',
];

const bt = String.fromCharCode(96); // backtick
const triple = bt + bt + bt;
const escaped = '\\' + bt + '\\' + bt + '\\' + bt;

for (const file of files) {
  const path = join(PATHWAYS, file);
  let content = readFileSync(path, 'utf-8');
  const count = (content.match(new RegExp(triple.replace(/`/g, '\\`'), 'g')) || []).length;
  if (count > 0) {
    content = content.split(triple).join(escaped);
    writeFileSync(path, content);
    console.log(`${file}: fixed ${count} triple backtick occurrences`);
  }
}

console.log('Done!');
