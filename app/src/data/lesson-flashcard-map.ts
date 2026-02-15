/**
 * Module Completion → Flashcard Unlock Map
 *
 * Simple rule: Complete ALL lessons in ALL levels of a module
 * to unlock ALL flashcards for that module.
 *
 * Uses the SAME completion logic as the Learn page:
 * every level → every lesson must be in completedLessonIds.
 *
 * Matches flashcards by moduleId AND common pathwayId variants
 * (e.g., module 'brain-neuroscience' also matches cards with pathwayId 'brain').
 */

import type { SpacedRepetitionCard } from '@/types';
import { modules } from './modules';

// ============================================
// BUILD MODULE DATA AT IMPORT TIME
// ============================================

interface ModuleLessonData {
  moduleId: string;
  allLessonIds: string[];
  /** pathwayId values that flashcards might use for this module */
  matchPathwayIds: Set<string>;
}

const moduleData: ModuleLessonData[] = [];

/** Reverse map: lessonId → which module it belongs to */
const lessonToModule: Record<string, string> = {};

for (const mod of modules) {
  if (!mod.pathway || mod.pathway.length === 0) continue;

  const allLessonIds: string[] = [];
  for (const level of mod.pathway) {
    for (const lesson of level.lessons) {
      allLessonIds.push(lesson.id);
      lessonToModule[lesson.id] = mod.id;
    }
  }

  if (allLessonIds.length === 0) continue;

  // Build pathwayId match set:
  // - The module id itself (e.g., 'brain-neuroscience')
  // - Common shortened forms derived from lesson prefixes
  const matchPathwayIds = new Set<string>();
  matchPathwayIds.add(mod.id);

  // Extract unique lesson prefixes (everything before the last dash+number)
  // e.g., 'brain-025' → 'brain', 'shiva-020' → 'shiva', 'temple-science-15' → 'temple-science'
  for (const lessonId of allLessonIds) {
    const match = lessonId.match(/^(.+?)-\d+$/);
    if (match) {
      matchPathwayIds.add(match[1]);
    }
  }

  moduleData.push({ moduleId: mod.id, allLessonIds, matchPathwayIds });
}

// ============================================
// PUBLIC API
// ============================================

/**
 * Check if a module is fully completed (ALL lessons done).
 * Same logic as Learn page's completedModulesData.
 */
function isModuleCompleted(data: ModuleLessonData, completedSet: Set<string>): boolean {
  return data.allLessonIds.every(id => completedSet.has(id));
}

/**
 * Get the set of completed module IDs from completed lesson IDs.
 * A module is complete when ALL its lessons are done.
 */
export function getCompletedModuleIds(completedLessonIds: string[]): Set<string> {
  if (completedLessonIds.length === 0) return new Set();

  const completedSet = new Set(completedLessonIds);
  const completed = new Set<string>();

  for (const data of moduleData) {
    if (isModuleCompleted(data, completedSet)) {
      completed.add(data.moduleId);
    }
  }

  return completed;
}

/**
 * Get all pathwayIds that should be unlocked (for flashcard matching).
 * Returns the union of all matchPathwayIds for completed modules.
 */
export function getUnlockedPathwayIds(completedLessonIds: string[]): Set<string> {
  if (completedLessonIds.length === 0) return new Set();

  const completedSet = new Set(completedLessonIds);
  const unlocked = new Set<string>();

  for (const data of moduleData) {
    if (isModuleCompleted(data, completedSet)) {
      for (const pid of data.matchPathwayIds) {
        unlocked.add(pid);
      }
    }
  }

  return unlocked;
}

/**
 * Check if a flashcard should be unlocked based on a completed lesson.
 * Only returns true if:
 *  1. The lesson belongs to a module
 *  2. ALL lessons in that module are completed
 *  3. The card's pathwayId matches the module
 *
 * NOTE: This function is called per-card per-lesson which is expensive.
 * Prefer getUnlockedFlashcards() for bulk operations.
 */
export function isFlashcardUnlockedByLesson(
  card: SpacedRepetitionCard,
  lessonId: string
): boolean {
  // This is a simplified single-lesson check used by resync.
  // It returns true if the card's pathwayId matches the module that this lesson belongs to.
  const modId = lessonToModule[lessonId];
  if (!modId) return false;

  const data = moduleData.find(d => d.moduleId === modId);
  if (!data) return false;

  return card.pathwayId ? data.matchPathwayIds.has(card.pathwayId) : false;
}

/**
 * Get all flashcards that should be unlocked given completed lessons.
 * Only unlocks cards for FULLY COMPLETED modules.
 */
export function getUnlockedFlashcards(
  allCards: SpacedRepetitionCard[],
  completedLessonIds: string[]
): SpacedRepetitionCard[] {
  const unlockedPids = getUnlockedPathwayIds(completedLessonIds);
  if (unlockedPids.size === 0) return [];

  return allCards.filter(card =>
    card.pathwayId && unlockedPids.has(card.pathwayId)
  );
}

/**
 * Get flashcard count that would be unlocked by completing a module.
 * Only > 0 if this is the LAST remaining lesson needed to complete the module.
 */
export function getFlashcardCountForLesson(
  allCards: SpacedRepetitionCard[],
  lessonId: string,
  completedLessonIds?: string[]
): number {
  const modId = lessonToModule[lessonId];
  if (!modId) return 0;

  const data = moduleData.find(d => d.moduleId === modId);
  if (!data) return 0;

  // Check if completing this lesson would complete the module
  if (completedLessonIds) {
    const completedSet = new Set(completedLessonIds);
    completedSet.add(lessonId);
    const allDone = data.allLessonIds.every(id => completedSet.has(id));
    if (!allDone) return 0;
  }

  return allCards.filter(card =>
    card.pathwayId && data.matchPathwayIds.has(card.pathwayId)
  ).length;
}

/**
 * Check if a lesson is the final lesson of a module's last level.
 */
export function isModuleCompletionLesson(lessonId: string): boolean {
  for (const data of moduleData) {
    if (data.allLessonIds[data.allLessonIds.length - 1] === lessonId) {
      return true;
    }
  }
  return false;
}

/**
 * Get the module ID for a lesson.
 */
export function getModuleForLesson(lessonId: string): string | null {
  return lessonToModule[lessonId] || null;
}

/**
 * Get all flashcards for completed modules (used by QuickReviseOverlay).
 */
export function getFlashcardsForLessonIds(
  allCards: SpacedRepetitionCard[],
  lessonIds: string[]
): SpacedRepetitionCard[] {
  return getUnlockedFlashcards(allCards, lessonIds);
}

/**
 * Check if completing any given lessons would have flashcard impact.
 */
export function hasFlashcardsForLessons(
  _allCards: SpacedRepetitionCard[],
  lessonIds: string[]
): boolean {
  return lessonIds.some(id => id in lessonToModule);
}
