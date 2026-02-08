/**
 * Assembly Pass 2: Integrate remaining gap files
 */
import { readFileSync, writeFileSync, existsSync, appendFileSync } from 'fs';
import { join } from 'path';

const SCRATCHPAD = 'C:/Users/44776/AppData/Local/Temp/claude/C--Users-44776-Downloads-Ebooks-Courses-Ebooks-Gyanmarg/f26b5637-1dec-4935-bde3-d10b8c238119/scratchpad';
const PATHWAYS = 'C:/Users/44776/Downloads/Ebooks-Courses/Ebooks/Gyanmarg/app/src/data/pathways';

function readFile(dir, name) {
  const path = join(dir, name);
  if (!existsSync(path)) return null;
  return readFileSync(path, 'utf-8');
}

function stripImport(content) {
  return content.replace(/^import\s+.*;\s*\n*/gm, '').replace(/^\s*\n/, '');
}

function stripTrailingComments(content) {
  return content.replace(/\n\/\/\s*(TO BE|Due to|Save space|LEVEL \d+:).*$/gm, '').trimEnd() + '\n';
}

console.log('=== Assembly Pass 2 ===\n');

// 1. SHIV SUTRAS - append levels 8-10
console.log('1. Shiv Sutras - appending levels 8-10...');
{
  const gap = readFile(SCRATCHPAD, 'gap-shiv-8-10.ts');
  if (gap) {
    appendFileSync(join(PATHWAYS, 'shiv-sutras-lessons.ts'), '\n' + stripImport(stripTrailingComments(gap)));
    console.log('  Appended levels 8-10');
  }
}

// 2. JYOTISH - append levels 8-10
console.log('2. Jyotish - appending levels 8-10...');
{
  const gap = readFile(SCRATCHPAD, 'gap-jyot-8-10.ts');
  if (gap) {
    appendFileSync(join(PATHWAYS, 'jyotish-vastu-lessons.ts'), '\n' + stripImport(stripTrailingComments(gap)));
    console.log('  Appended levels 8-10');
  }
}

// 3. GITA - append gitaLessonsLevel9Remaining
console.log('3. Gita - appending Level 9 remaining...');
{
  const gap = readFile(SCRATCHPAD, 'gap-gita-yoga-remaining.ts');
  if (gap) {
    // Extract only gita block
    const lines = gap.split('\n');
    let gitaBlock = [];
    let capturing = false;
    let depth = 0;
    for (const line of lines) {
      if (line.includes('export const gitaLessonsLevel9Remaining')) {
        capturing = true;
        depth = 0;
      }
      if (capturing) {
        gitaBlock.push(line);
        depth += (line.match(/\[/g) || []).length;
        depth -= (line.match(/\]/g) || []).length;
        if (depth <= 0 && line.trim().startsWith(']')) break;
      }
    }
    if (gitaBlock.length > 0) {
      appendFileSync(join(PATHWAYS, 'bhagavad-gita-lessons.ts'), '\n' + gitaBlock.join('\n') + '\n');
      console.log('  Appended gitaLessonsLevel9Remaining');
    }
  }
}

// 4. YOGA - append yogaLessonsLevel5Remaining
console.log('4. Yoga - appending Level 5 remaining...');
{
  const gap = readFile(SCRATCHPAD, 'gap-gita-yoga-remaining.ts');
  if (gap) {
    const lines = gap.split('\n');
    let yogaBlock = [];
    let capturing = false;
    let depth = 0;
    for (const line of lines) {
      if (line.includes('export const yogaLessonsLevel5Remaining')) {
        capturing = true;
        depth = 0;
      }
      if (capturing) {
        yogaBlock.push(line);
        depth += (line.match(/\[/g) || []).length;
        depth -= (line.match(/\]/g) || []).length;
        if (depth <= 0 && line.trim().startsWith(']')) break;
      }
    }
    if (yogaBlock.length > 0) {
      appendFileSync(join(PATHWAYS, 'yoga-philosophy-lessons.ts'), '\n' + yogaBlock.join('\n') + '\n');
      console.log('  Appended yogaLessonsLevel5Remaining');
    }
  }
}

// 5. EPIC - append epicLesson039 and epicLessonsLevel7Remaining
console.log('5. Epic - appending remaining...');
{
  const gap = readFile(SCRATCHPAD, 'gap-epic-remaining.ts');
  if (gap) {
    appendFileSync(join(PATHWAYS, 'ramayana-mahabharata-lessons.ts'), '\n' + stripImport(stripTrailingComments(gap)));
    console.log('  Appended epicLesson039 + epicLessonsLevel7Remaining');
  }
}

// 6. UPANISHADS - append remaining if available
console.log('6. Upanishads - checking for gap file...');
{
  const gap = readFile(SCRATCHPAD, 'gap-upan-remaining.ts');
  if (gap) {
    appendFileSync(join(PATHWAYS, 'upanishads-lessons.ts'), '\n' + stripImport(stripTrailingComments(gap)));
    console.log('  Appended upanishads remaining');
  } else {
    console.log('  PENDING - gap file not yet available');
  }
}

// Report final lesson counts
console.log('\n=== Final Lesson Counts ===');
const files = [
  ['bhagavad-gita-lessons.ts', 'gita'],
  ['ramayana-mahabharata-lessons.ts', 'epic'],
  ['upanishads-lessons.ts', 'upan'],
  ['shiv-sutras-lessons.ts', 'shiv'],
  ['ayurveda-lessons.ts', 'ayur'],
  ['yoga-philosophy-lessons.ts', 'yoga'],
  ['sanskrit-mantras-lessons.ts', 'sans'],
  ['jyotish-vastu-lessons.ts', 'jyot'],
];

for (const [file, prefix] of files) {
  const content = readFileSync(join(PATHWAYS, file), 'utf-8');
  const ids = content.match(new RegExp(`id: '${prefix}-\\d+`, 'g')) || [];
  const exports = content.match(new RegExp(`export const ${prefix}\\w+Level`, 'g')) || [];
  console.log(`  ${file}: ${ids.length} lessons, ${exports.length} level exports`);
}

console.log('\n=== Pass 2 Complete ===');
