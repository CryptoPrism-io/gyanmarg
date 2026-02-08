/**
 * Assembly script for Bharat module lesson files
 * Concatenates scratchpad content into final lesson files
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const SCRATCHPAD = 'C:/Users/44776/AppData/Local/Temp/claude/C--Users-44776-Downloads-Ebooks-Courses-Ebooks-Gyanmarg/f26b5637-1dec-4935-bde3-d10b8c238119/scratchpad';
const PATHWAYS = 'C:/Users/44776/Downloads/Ebooks-Courses/Ebooks/Gyanmarg/app/src/data/pathways';

function readFile(dir, name) {
  const path = join(dir, name);
  if (!existsSync(path)) {
    console.error(`  MISSING: ${path}`);
    return null;
  }
  return readFileSync(path, 'utf-8');
}

function stripImport(content) {
  // Remove import lines and leading blank lines
  return content.replace(/^import\s+.*;\s*\n*/gm, '').replace(/^\s*\n/, '');
}

function stripTrailingComments(content) {
  // Remove trailing "TO BE CONTINUED" style comments
  return content.replace(/\n\/\/\s*(TO BE|Due to|Save space|LEVEL \d+:).*$/gm, '').trimEnd() + '\n';
}

function extractExportBlock(content, exportName) {
  // Extract a specific export const block from content
  const lines = content.split('\n');
  let result = [];
  let capturing = false;
  let depth = 0;

  for (const line of lines) {
    if (line.includes(`export const ${exportName}`)) {
      capturing = true;
      depth = 0;
    }
    if (capturing) {
      result.push(line);
      depth += (line.match(/\[/g) || []).length;
      depth -= (line.match(/\]/g) || []).length;
      if (depth <= 0 && line.trim().startsWith(']')) {
        break;
      }
    }
  }
  return result.join('\n');
}

function extractContinuationContent(content) {
  // Extract raw lesson objects from continuation files (no export header)
  // Skip comments at start, find first { and take everything up to last }
  const lines = content.split('\n');
  let start = -1;
  let end = -1;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim().startsWith('{') && start === -1) {
      start = i;
    }
    if (lines[i].trim().startsWith('}') || lines[i].trim() === '},') {
      end = i;
    }
  }

  if (start === -1) return '';
  return lines.slice(start, end + 1).join('\n');
}

function mergeArrayWithContinuation(mainContent, continuationContent) {
  // Find the last ]; in mainContent and insert continuation before it
  const lastClose = mainContent.lastIndexOf('];');
  if (lastClose === -1) return mainContent;

  const before = mainContent.substring(0, lastClose).trimEnd();
  const after = mainContent.substring(lastClose);

  // Add comma if needed
  const needsComma = !before.trimEnd().endsWith(',');
  return before + (needsComma ? ',' : '') + '\n' + continuationContent + '\n' + after;
}

// ==========================================
// ASSEMBLE EACH MODULE
// ==========================================

console.log('=== Assembling Bharat Module Lesson Files ===\n');

// 1. SANSKRIT (new file - pure concatenation)
console.log('1. Sanskrit & Mantras...');
{
  const parts = [
    readFile(SCRATCHPAD, 'sans-1-5.ts'),         // Level 1, 2
    readFile(SCRATCHPAD, 'gap-sans-3-5.ts'),      // Level 3, 4, 5
    readFile(SCRATCHPAD, 'sans-6-10.ts'),          // Level 6, 7
    readFile(SCRATCHPAD, 'sans-8-10-part2.ts'),    // Level 8
    readFile(SCRATCHPAD, 'gap-sans-9-10.ts'),      // Level 9, 10
  ];

  if (parts.every(p => p !== null)) {
    let output = parts[0]; // Keep import from first file
    for (let i = 1; i < parts.length; i++) {
      output += '\n' + stripImport(stripTrailingComments(parts[i]));
    }
    writeFileSync(join(PATHWAYS, 'sanskrit-mantras-lessons.ts'), output);
    console.log('  Written: sanskrit-mantras-lessons.ts');

    // Count exports
    const exports = output.match(/export const sansLessonsLevel\d+/g) || [];
    console.log(`  Exports: ${exports.map(e => e.match(/Level(\d+)/)[1]).join(', ')}`);
  }
}

// 2. YOGA (new file - needs Part2 handling)
console.log('\n2. Yoga Philosophy...');
{
  const parts = [
    readFile(SCRATCHPAD, 'yoga-1-5-part1.ts'),    // Level 1, 2, 3 (partial)
    readFile(SCRATCHPAD, 'yoga-1-5-part2.ts'),     // Level 3 Part2, Level 4 (partial)
    readFile(SCRATCHPAD, 'yoga-1-5-part3.ts'),     // Level 4 Part2, Level 5
    readFile(SCRATCHPAD, 'yoga-6-10.ts'),           // Level 6-10
  ];

  if (parts.every(p => p !== null)) {
    let output = parts[0]; // Keep import
    for (let i = 1; i < parts.length; i++) {
      output += '\n' + stripImport(stripTrailingComments(parts[i]));
    }
    writeFileSync(join(PATHWAYS, 'yoga-philosophy-lessons.ts'), output);
    console.log('  Written: yoga-philosophy-lessons.ts');

    const exports = output.match(/export const yoga\w+/g) || [];
    console.log(`  Exports: ${exports.length} arrays`);
  }
}

// 3. GITA (append to existing)
console.log('\n3. Bhagavad Gita...');
{
  const existing = readFile(PATHWAYS, 'bhagavad-gita-lessons.ts');
  const levels5to9 = readFile(SCRATCHPAD, 'gita-5-10.ts');
  const mixed = readFile(SCRATCHPAD, 'gap-gita10-upan8.ts');

  if (existing && levels5to9 && mixed) {
    const level10 = extractExportBlock(mixed, 'gitaLessonsLevel10');
    let output = stripTrailingComments(existing);
    output += '\n' + stripImport(stripTrailingComments(levels5to9));
    output += '\n' + level10 + '\n';
    writeFileSync(join(PATHWAYS, 'bhagavad-gita-lessons.ts'), output);
    console.log('  Written: bhagavad-gita-lessons.ts');

    const exports = output.match(/export const gitaLessonsLevel\d+/g) || [];
    console.log(`  Exports: ${exports.map(e => e.match(/Level(\d+)/)[1]).join(', ')}`);
  }
}

// 4. EPIC (append to existing)
console.log('\n4. Ramayana & Mahabharata...');
{
  const existing = readFile(PATHWAYS, 'ramayana-mahabharata-lessons.ts');
  const levels4to6 = readFile(SCRATCHPAD, 'epic-4-10.ts');
  const level7 = readFile(SCRATCHPAD, 'epic-continuation.ts');
  const levels8to10 = readFile(SCRATCHPAD, 'gap-epic-8-10.ts');

  if (existing && levels4to6 && level7 && levels8to10) {
    let output = stripTrailingComments(existing);
    output += '\n' + stripImport(stripTrailingComments(levels4to6));
    output += '\n' + stripImport(stripTrailingComments(level7));
    output += '\n' + stripImport(stripTrailingComments(levels8to10));
    writeFileSync(join(PATHWAYS, 'ramayana-mahabharata-lessons.ts'), output);
    console.log('  Written: ramayana-mahabharata-lessons.ts');

    const exports = output.match(/export const epicLessonsLevel\d+/g) || [];
    console.log(`  Exports: ${exports.map(e => e.match(/Level(\d+)/)[1]).join(', ')}`);
  }
}

// 5. UPANISHADS (append to existing + extract from mixed file)
console.log('\n5. Upanishads...');
{
  const existing = readFile(PATHWAYS, 'upanishads-lessons.ts');
  const levels4to6 = readFile(SCRATCHPAD, 'upan-4-10.ts');
  const levels7_9_10 = readFile(SCRATCHPAD, 'upan-7-10-continuation.ts');
  const mixed = readFile(SCRATCHPAD, 'gap-gita10-upan8.ts');

  if (existing && levels4to6 && levels7_9_10 && mixed) {
    const level8 = extractExportBlock(mixed, 'upanLessonsLevel8');
    let output = stripTrailingComments(existing);
    output += '\n' + stripImport(stripTrailingComments(levels4to6));
    output += '\n' + stripImport(stripTrailingComments(levels7_9_10));
    output += '\n' + level8 + '\n';
    writeFileSync(join(PATHWAYS, 'upanishads-lessons.ts'), output);
    console.log('  Written: upanishads-lessons.ts');

    const exports = output.match(/export const upanLessonsLevel\d+/g) || [];
    console.log(`  Exports: ${exports.map(e => e.match(/Level(\d+)/)[1]).join(', ')}`);
  }
}

// 6. AYURVEDA (append + merge continuation into Level 6)
console.log('\n6. Ayurveda...');
{
  const existing = readFile(PATHWAYS, 'ayurveda-lessons.ts');
  const levels4to6partial = readFile(SCRATCHPAD, 'ayur-4-10.ts');
  const level6cont = readFile(SCRATCHPAD, 'ayur-continuation.ts');
  const level7 = readFile(SCRATCHPAD, 'ayur-final-levels.ts');
  const levels8to10 = readFile(SCRATCHPAD, 'gap-ayur-8-10.ts');

  if (existing && levels4to6partial && level6cont && level7 && levels8to10) {
    // Merge continuation into Level 6 array
    const contContent = extractContinuationContent(level6cont);
    let mergedLevels4to6 = mergeArrayWithContinuation(levels4to6partial, contContent);

    let output = stripTrailingComments(existing);
    output += '\n' + stripImport(stripTrailingComments(mergedLevels4to6));
    output += '\n' + stripImport(stripTrailingComments(level7));
    output += '\n' + stripImport(stripTrailingComments(levels8to10));
    writeFileSync(join(PATHWAYS, 'ayurveda-lessons.ts'), output);
    console.log('  Written: ayurveda-lessons.ts');

    const exports = output.match(/export const ayurLessonsLevel\d+/g) || [];
    console.log(`  Exports: ${exports.map(e => e.match(/Level(\d+)/)[1]).join(', ')}`);
  }
}

// 7. SHIV SUTRAS (append - levels 8-10 may still be generating)
console.log('\n7. Shiv Sutras...');
{
  const existing = readFile(PATHWAYS, 'shiv-sutras-lessons.ts');
  const levels3to5 = readFile(SCRATCHPAD, 'shiv-3-10.ts');
  const shivCont = readFile(SCRATCHPAD, 'shiv-continuation.ts');
  const levels6to7 = readFile(SCRATCHPAD, 'shiv-complete-6-10.ts');
  const levels8to10 = readFile(SCRATCHPAD, 'gap-shiv-8-10.ts');

  if (existing && levels3to5 && levels6to7) {
    // Check if shiv-3-10.ts has a truncated last array that needs continuation
    const shivContContent = shivCont ? extractContinuationContent(shivCont) : '';
    let mergedLevels3to5 = levels3to5;
    if (shivContContent) {
      mergedLevels3to5 = mergeArrayWithContinuation(levels3to5, shivContContent);
    }

    let output = stripTrailingComments(existing);
    output += '\n' + stripImport(stripTrailingComments(mergedLevels3to5));
    output += '\n' + stripImport(stripTrailingComments(levels6to7));

    if (levels8to10) {
      output += '\n' + stripImport(stripTrailingComments(levels8to10));
      console.log('  Written: shiv-sutras-lessons.ts (COMPLETE)');
    } else {
      console.log('  Written: shiv-sutras-lessons.ts (levels 8-10 PENDING)');
    }
    writeFileSync(join(PATHWAYS, 'shiv-sutras-lessons.ts'), output);

    const exports = output.match(/export const shivLessonsLevel\d+/g) || [];
    console.log(`  Exports: ${exports.map(e => e.match(/Level(\d+)/)[1]).join(', ')}`);
  }
}

// 8. JYOTISH (append - levels 8-10 may still be generating)
console.log('\n8. Jyotish & Vastu...');
{
  const existing = readFile(PATHWAYS, 'jyotish-vastu-lessons.ts');
  const levels4to7 = readFile(SCRATCHPAD, 'jyot-4-10.ts');
  const levels8to10 = readFile(SCRATCHPAD, 'gap-jyot-8-10.ts');

  if (existing && levels4to7) {
    let output = stripTrailingComments(existing);
    output += '\n' + stripImport(stripTrailingComments(levels4to7));

    if (levels8to10) {
      output += '\n' + stripImport(stripTrailingComments(levels8to10));
      console.log('  Written: jyotish-vastu-lessons.ts (COMPLETE)');
    } else {
      console.log('  Written: jyotish-vastu-lessons.ts (levels 8-10 PENDING)');
    }
    writeFileSync(join(PATHWAYS, 'jyotish-vastu-lessons.ts'), output);

    const exports = output.match(/export const jyotLessonsLevel\d+/g) || [];
    console.log(`  Exports: ${exports.map(e => e.match(/Level(\d+)/)[1]).join(', ')}`);
  }
}

console.log('\n=== Assembly Complete ===');
