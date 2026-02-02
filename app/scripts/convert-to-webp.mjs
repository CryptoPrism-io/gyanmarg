#!/usr/bin/env node
/**
 * Convert all PNG images to WebP format for better performance
 * Run with: node scripts/convert-to-webp.mjs
 */

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = join(__dirname, '../src/assets/ai-images');

async function getFilesRecursively(dir) {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await getFilesRecursively(fullPath));
    } else if (entry.name.endsWith('.png')) {
      files.push(fullPath);
    }
  }
  return files;
}

async function convertToWebP(pngPath) {
  const webpPath = pngPath.replace('.png', '.webp');

  try {
    const originalStats = await stat(pngPath);
    const originalSize = originalStats.size;

    await sharp(pngPath)
      .webp({ quality: 85 }) // Good balance of quality and size
      .toFile(webpPath);

    const newStats = await stat(webpPath);
    const newSize = newStats.size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);

    console.log(`✓ ${pngPath.split('ai-images')[1]}`);
    console.log(`  ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newSize / 1024 / 1024).toFixed(2)}MB (${savings}% smaller)`);

    return { original: originalSize, converted: newSize };
  } catch (error) {
    console.error(`✗ Failed to convert ${pngPath}: ${error.message}`);
    return { original: 0, converted: 0 };
  }
}

async function main() {
  console.log('Converting PNG images to WebP...\n');

  const pngFiles = await getFilesRecursively(ASSETS_DIR);
  console.log(`Found ${pngFiles.length} PNG files\n`);

  let totalOriginal = 0;
  let totalConverted = 0;

  for (const file of pngFiles) {
    const result = await convertToWebP(file);
    totalOriginal += result.original;
    totalConverted += result.converted;
  }

  console.log('\n========================================');
  console.log(`Total: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB → ${(totalConverted / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Savings: ${((totalOriginal - totalConverted) / 1024 / 1024).toFixed(2)}MB (${((totalOriginal - totalConverted) / totalOriginal * 100).toFixed(1)}%)`);
  console.log('\nNext: Update imports in your code to use .webp files');
}

main().catch(console.error);
