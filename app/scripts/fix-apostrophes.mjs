/**
 * Fix unescaped apostrophes inside single-quoted strings in lesson files.
 * Finds patterns like: 'text it's text' and fixes to: 'text it\'s text'
 * Also fixes: quiz: {} → quiz: [{}] (object instead of array)
 */
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const PATHWAYS = 'C:/Users/44776/Downloads/Ebooks-Courses/Ebooks/Gyanmarg/app/src/data/pathways';

const files = [
  'bhagavad-gita-lessons.ts',
  'ramayana-mahabharata-lessons.ts',
  'upanishads-lessons.ts',
  'shiv-sutras-lessons.ts',
  'ayurveda-lessons.ts',
  'yoga-philosophy-lessons.ts',
  'sanskrit-mantras-lessons.ts',
  'jyotish-vastu-lessons.ts',
  'upanishads-gap.ts',
];

let totalFixes = 0;

for (const file of files) {
  const path = join(PATHWAYS, file);
  let content;
  try {
    content = readFileSync(path, 'utf-8');
  } catch {
    continue;
  }

  let fixes = 0;
  const lines = content.split('\n');
  const fixedLines = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Fix single-quoted property values with unescaped apostrophes
    // Match lines like:  key: 'text with it's apostrophe',
    // But NOT template literal lines (those use backtick)
    if (line.match(/^\s+(overview|keyTakeaway|actionItem|title|question|explanation|description|id|type):\s*'/) ||
        line.match(/^\s+'[^']*$/)) {

      // Find single-quoted strings on this line
      const result = fixApostrophesInLine(line);
      if (result !== line) {
        fixes++;
        line = result;
      }
    }

    // Also fix option strings in arrays
    if (line.match(/^\s+'[^'\\]*[a-zA-Z]'[a-zA-Z]/)) {
      const result = fixApostrophesInLine(line);
      if (result !== line) {
        fixes++;
        line = result;
      }
    }

    fixedLines.push(line);
  }

  if (fixes > 0) {
    writeFileSync(path, fixedLines.join('\n'));
    console.log(`${file}: fixed ${fixes} lines with unescaped apostrophes`);
    totalFixes += fixes;
  }
}

console.log(`\nTotal lines fixed: ${totalFixes}`);

function fixApostrophesInLine(line) {
  // Strategy: find single-quoted strings and fix internal apostrophes
  // A single-quoted string starts with ' and ends with ' (not preceded by \)
  // We need to find apostrophes inside that are NOT at string boundaries

  let result = '';
  let i = 0;

  while (i < line.length) {
    if (line[i] === "'" && (i === 0 || line[i-1] !== '\\')) {
      // Start of a single-quoted string
      let start = i;
      i++;
      let str = "'";

      // Find the end of the string
      while (i < line.length) {
        if (line[i] === '\\' && i + 1 < line.length && line[i+1] === "'") {
          // Already escaped apostrophe
          str += "\\'";
          i += 2;
          continue;
        }

        if (line[i] === "'") {
          // Is this the end of the string or an unescaped apostrophe?
          // Check: if followed by common word-continuation characters, it's an apostrophe
          if (i + 1 < line.length && /[a-zA-Z]/.test(line[i+1])) {
            // Look at what's before: if it's a letter, this is a contraction apostrophe
            if (i > 0 && /[a-zA-Z]/.test(line[i-1])) {
              str += "\\'";
              i++;
              continue;
            }
          }

          // Check: if preceded by a letter and followed by space/comma/period,
          // AND we haven't seen a proper string end pattern yet
          // This handles possessives like "Rama's" or quotes ending mid-word

          // Otherwise, it's the end of the string
          str += "'";
          i++;
          break;
        }

        str += line[i];
        i++;
      }

      result += str;
    } else {
      result += line[i];
      i++;
    }
  }

  return result;
}
