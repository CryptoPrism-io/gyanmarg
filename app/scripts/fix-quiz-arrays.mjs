/**
 * Fix quiz arrays: quiz: [{ ... }] → quiz: { ... }
 * The LessonContent.quiz type expects a single QuizQuestion, not an array.
 * Some agents wrote arrays. This script converts arrays to single objects
 * by taking only the first question if there are multiples.
 */
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const PATHWAYS = 'C:/Users/44776/Downloads/Ebooks-Courses/Ebooks/Gyanmarg/app/src/data/pathways';

const files = [
  'jyotish-vastu-lessons.ts',
  'upanishads-lessons.ts',
  'upanishads-gap.ts',
  'bhagavad-gita-lessons.ts',
  'ramayana-mahabharata-lessons.ts',
  'shiv-sutras-lessons.ts',
  'ayurveda-lessons.ts',
  'yoga-philosophy-lessons.ts',
  'sanskrit-mantras-lessons.ts',
];

for (const file of files) {
  const path = join(PATHWAYS, file);
  let content;
  try {
    content = readFileSync(path, 'utf-8');
  } catch {
    continue;
  }

  // Find quiz: [ patterns and convert to quiz: {
  // Pattern: quiz: [\n        {\n ... }\n      ]
  // Replace with: quiz: {\n ... }

  let fixes = 0;
  const lines = content.split('\n');
  const result = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Detect quiz: [
    if (line.match(/^\s+quiz:\s*\[$/)) {
      fixes++;
      // Replace [ with nothing, take the first quiz object, skip closing ]
      const indent = line.match(/^(\s+)/)[1];

      // Collect lines until we find the closing ]
      let depth = 1;
      i++;
      let firstObject = [];
      let inFirstObject = true;
      let objectDepth = 0;

      while (i < lines.length && depth > 0) {
        const innerLine = lines[i];

        // Track array depth
        for (const ch of innerLine) {
          if (ch === '[') depth++;
          if (ch === ']') depth--;
        }

        if (depth <= 0) {
          // This is the closing ] line — skip it
          // But we need to output the closing of the quiz object
          break;
        }

        if (inFirstObject) {
          // Track object depth within first object
          for (const ch of innerLine) {
            if (ch === '{') objectDepth++;
            if (ch === '}') objectDepth--;
          }

          firstObject.push(innerLine);

          // If objectDepth returns to 0 and we see },
          if (objectDepth === 0 && innerLine.trim().match(/^\},?$/)) {
            inFirstObject = false;
          }
        }
        // Skip remaining objects (we only want the first one)

        i++;
      }

      // Output quiz: { (without array brackets)
      // Remove the leading { from first line and trailing }, from last line
      if (firstObject.length > 0) {
        // First line of object should be "        {"
        const firstLine = firstObject[0];
        if (firstLine.trim() === '{') {
          // Replace "quiz: [" with "quiz: {"
          result.push(indent + 'quiz: {');
          // Add middle lines
          for (let j = 1; j < firstObject.length - 1; j++) {
            result.push(firstObject[j]);
          }
          // Last line: "        }," or "        }" — keep it
          const lastLine = firstObject[firstObject.length - 1];
          // Remove trailing comma if the array had one
          result.push(lastLine.replace(/\},?$/, '}'));
        } else {
          // Object starts on same line as {
          result.push(indent + 'quiz: ' + firstLine.trim());
          for (let j = 1; j < firstObject.length; j++) {
            const l = firstObject[j];
            result.push(j === firstObject.length - 1 ? l.replace(/\},?$/, '}') : l);
          }
        }
      }
    } else {
      result.push(line);
    }

    i++;
  }

  if (fixes > 0) {
    writeFileSync(path, result.join('\n'));
    console.log(`${file}: fixed ${fixes} quiz arrays → objects`);
  }
}
