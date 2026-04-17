/**
 * Module Completion → Flashcard Unlock Map
 *
 * ZERO-WEIGHT: Uses pre-generated lesson-manifest.ts (54 KB)
 * instead of importing modules.ts (which pulls in 26 MB of pathway data).
 * This allows Dashboard to load without any pathway files in memory.
 */

import type { SpacedRepetitionCard } from '@/types';
import { lessonManifest, moduleToPathwayKey } from './lesson-manifest';

// ============================================
// BUILD MODULE DATA FROM MANIFEST (NOT modules.ts)
// ============================================

interface ModuleLessonData {
  moduleId: string;
  allLessonIds: string[];
  matchPathwayIds: Set<string>;
}

const moduleData: ModuleLessonData[] = [];
const lessonToModule: Record<string, string> = {};

// Build from the lightweight manifest — no pathway imports needed
for (const [moduleId, pathwayKey] of Object.entries(moduleToPathwayKey)) {
  const lessonIds = lessonManifest[pathwayKey];
  if (!lessonIds || lessonIds.length === 0) continue;

  for (const id of lessonIds) {
    lessonToModule[id] = moduleId;
  }

  // Build pathwayId match set
  const matchPathwayIds = new Set<string>();
  matchPathwayIds.add(moduleId);
  for (const lessonId of lessonIds) {
    const match = lessonId.match(/^(.+?)-\d+$/);
    if (match) matchPathwayIds.add(match[1]);
  }

  moduleData.push({ moduleId, allLessonIds: lessonIds, matchPathwayIds });
}

// ============================================
// PUBLIC API (unchanged signatures)
// ============================================

function isModuleCompleted(data: ModuleLessonData, completedSet: Set<string>): boolean {
  return data.allLessonIds.every(id => completedSet.has(id));
}

export function getCompletedModuleIds(completedLessonIds: string[]): Set<string> {
  if (completedLessonIds.length === 0) return new Set();
  const completedSet = new Set(completedLessonIds);
  const completed = new Set<string>();
  for (const data of moduleData) {
    if (isModuleCompleted(data, completedSet)) completed.add(data.moduleId);
  }
  return completed;
}

export function getUnlockedPathwayIds(completedLessonIds: string[]): Set<string> {
  if (completedLessonIds.length === 0) return new Set();
  const completedSet = new Set(completedLessonIds);
  const unlocked = new Set<string>();
  for (const data of moduleData) {
    if (isModuleCompleted(data, completedSet)) {
      for (const pid of data.matchPathwayIds) unlocked.add(pid);
    }
  }
  return unlocked;
}

export function isFlashcardUnlockedByLesson(card: SpacedRepetitionCard, lessonId: string): boolean {
  const modId = lessonToModule[lessonId];
  if (!modId) return false;
  const data = moduleData.find(d => d.moduleId === modId);
  if (!data) return false;
  return card.pathwayId ? data.matchPathwayIds.has(card.pathwayId) : false;
}

export function getUnlockedFlashcards(allCards: SpacedRepetitionCard[], completedLessonIds: string[]): SpacedRepetitionCard[] {
  const unlockedPids = getUnlockedPathwayIds(completedLessonIds);
  if (unlockedPids.size === 0) return [];
  return allCards.filter(card => card.pathwayId && unlockedPids.has(card.pathwayId));
}

export function getFlashcardCountForLesson(allCards: SpacedRepetitionCard[], lessonId: string, completedLessonIds?: string[]): number {
  const modId = lessonToModule[lessonId];
  if (!modId) return 0;
  const data = moduleData.find(d => d.moduleId === modId);
  if (!data) return 0;
  if (completedLessonIds) {
    const completedSet = new Set(completedLessonIds);
    completedSet.add(lessonId);
    if (!data.allLessonIds.every(id => completedSet.has(id))) return 0;
  }
  return allCards.filter(card => card.pathwayId && data.matchPathwayIds.has(card.pathwayId)).length;
}

export function isModuleCompletionLesson(lessonId: string): boolean {
  for (const data of moduleData) {
    if (data.allLessonIds[data.allLessonIds.length - 1] === lessonId) return true;
  }
  return false;
}

export function getModuleForLesson(lessonId: string): string | null {
  return lessonToModule[lessonId] || null;
}

export function getFlashcardsForLessonIds(allCards: SpacedRepetitionCard[], lessonIds: string[]): SpacedRepetitionCard[] {
  return getUnlockedFlashcards(allCards, lessonIds);
}

export function hasFlashcardsForLessons(_allCards: SpacedRepetitionCard[], lessonIds: string[]): boolean {
  return lessonIds.some(id => id in lessonToModule);
}
