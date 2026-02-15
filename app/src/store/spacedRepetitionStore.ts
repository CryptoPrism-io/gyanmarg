import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { FlashcardWithScheduling, ReviewRating, ReviewHistoryEntry, SpacedRepetitionCard } from '@/types';
import { allFlashcards } from '@/data/flashcards-index';
import { reviewCategories } from '@/data/review-categories';
import { getUnlockedPathwayIds } from '@/data/lesson-flashcard-map';
import { triggerSync } from '@/store/firebaseSync';

interface CategoryStats {
  categoryId: string;
  total: number;
  due: number;
  mastered: number;
  learning: number;
  isUnlocked: boolean;
}

interface SpacedRepetitionState {
  // Only stores cards that have been UNLOCKED (from completed lessons)
  unlockedCards: FlashcardWithScheduling[];
  reviewHistory: ReviewHistoryEntry[];
  lastReviewDate: string | null;
  totalReviews: number;
  _lastResyncVersion?: number;

  // Actions
  syncUnlockedCards: (completedLessonIds: string[]) => void;
  resyncCards: (completedLessonIds: string[]) => void;
  reviewCard: (cardId: string, rating: ReviewRating) => void;
  getDueCards: (categoryId?: string) => FlashcardWithScheduling[];
  getCardsByCategory: (categoryId: string) => FlashcardWithScheduling[];
  resetCard: (cardId: string) => void;

  // Stats
  getTodaysDueCount: (categoryId?: string) => number;
  getMasteredCount: () => number;
  getReviewStreak: () => number;
  getCardStats: () => { total: number; due: number; mastered: number; learning: number; locked: number };
  getCategoryStats: (completedLessonIds: string[]) => CategoryStats[];
  getTotalAvailableCards: () => number;
}

/**
 * SM-2 Algorithm Implementation
 */
function calculateSM2(
  card: FlashcardWithScheduling,
  rating: ReviewRating
): Pick<FlashcardWithScheduling, 'easeFactor' | 'interval' | 'repetitions' | 'lapses'> {
  let { easeFactor, interval, repetitions, lapses } = card;

  if (rating < 3) {
    repetitions = 0;
    interval = 1;
    lapses += 1;
  } else {
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitions += 1;
  }

  const q = rating;
  easeFactor = easeFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
  easeFactor = Math.max(1.3, easeFactor);

  return { easeFactor, interval, repetitions, lapses };
}

function initializeCard(card: SpacedRepetitionCard): FlashcardWithScheduling {
  const today = new Date().toISOString().split('T')[0];
  return {
    ...card,
    easeFactor: 2.5,
    interval: 0,
    repetitions: 0,
    nextReviewDate: today,
    lapses: 0,
  };
}

function getNextReviewDate(interval: number): string {
  const date = new Date();
  date.setDate(date.getDate() + interval);
  return date.toISOString().split('T')[0];
}

/**
 * Check if a flashcard belongs to a category (exact pathwayId matching)
 */
function cardBelongsToCategory(card: FlashcardWithScheduling, categoryId: string): boolean {
  const category = reviewCategories.find(c => c.id === categoryId);
  if (!category) return false;

  const cardPathway = card.pathwayId || '';
  return category.pathwayIds.includes(cardPathway);
}

export const useSpacedRepetitionStore = create<SpacedRepetitionState>()(
  persist(
    (set, get) => ({
      unlockedCards: [],
      reviewHistory: [],
      lastReviewDate: null,
      totalReviews: 0,

      /**
       * Sync unlocked cards based on completed modules.
       * Rule: Complete ALL lessons in a module → unlock up to MAX_CARDS_PER_MODULE flashcards.
       * Prioritizes: beginner → intermediate → advanced for balanced learning.
       */
      syncUnlockedCards: (completedLessonIds: string[]) => {
        if (completedLessonIds.length === 0) return;

        const MAX_CARDS_PER_MODULE = 50;
        const state = get();
        const existingCardIds = new Set(state.unlockedCards.map(c => c.id));

        // Count existing cards per pathwayId
        const existingCountByPathway: Record<string, number> = {};
        state.unlockedCards.forEach(c => {
          const pid = c.pathwayId || '';
          existingCountByPathway[pid] = (existingCountByPathway[pid] || 0) + 1;
        });

        // Get all pathwayIds for fully completed modules
        const unlockedPids = getUnlockedPathwayIds(completedLessonIds);
        if (unlockedPids.size === 0) return;

        // Find candidate cards (matching completed modules, not already unlocked)
        const candidateCards = allFlashcards.filter(card => {
          if (existingCardIds.has(card.id)) return false;
          return card.pathwayId ? unlockedPids.has(card.pathwayId) : false;
        });

        // Group candidates by pathwayId and cap each at MAX_CARDS_PER_MODULE
        const difficultyOrder = { beginner: 0, intermediate: 1, advanced: 2 };
        const grouped: Record<string, typeof candidateCards> = {};
        candidateCards.forEach(card => {
          const pid = card.pathwayId || 'unknown';
          if (!grouped[pid]) grouped[pid] = [];
          grouped[pid].push(card);
        });

        const newCardsToUnlock: typeof candidateCards = [];
        for (const [pid, cards] of Object.entries(grouped)) {
          const existingCount = existingCountByPathway[pid] || 0;
          const slotsAvailable = Math.max(0, MAX_CARDS_PER_MODULE - existingCount);
          if (slotsAvailable === 0) continue;

          // Sort by difficulty (beginner first) for balanced learning
          const sorted = cards.sort((a, b) =>
            (difficultyOrder[a.difficulty] || 1) - (difficultyOrder[b.difficulty] || 1)
          );
          newCardsToUnlock.push(...sorted.slice(0, slotsAvailable));
        }

        if (newCardsToUnlock.length > 0) {
          const initializedNewCards = newCardsToUnlock.map(initializeCard);
          set(state => ({
            unlockedCards: [...state.unlockedCards, ...initializedNewCards],
          }));
          triggerSync();
        }
      },

      /**
       * Re-evaluate all unlocked cards against current matching logic.
       * Removes cards that were unlocked by previous overly-broad matching.
       * Enforces MAX_CARDS_PER_MODULE cap, preserving cards with review history.
       */
      resyncCards: (completedLessonIds: string[]) => {
        const CURRENT_RESYNC_VERSION = 5; // v5: Gemini-generated cards (2418 across 76 modules)
        const MAX_CARDS_PER_MODULE = 50;
        const state = get();

        if (state._lastResyncVersion === CURRENT_RESYNC_VERSION) return;

        if (completedLessonIds.length === 0) {
          if (state.unlockedCards.length > 0) {
            set({ unlockedCards: [], _lastResyncVersion: CURRENT_RESYNC_VERSION });
          }
          return;
        }

        // Re-evaluate: keep only cards for fully completed modules
        const unlockedPids = getUnlockedPathwayIds(completedLessonIds);
        const validCards = state.unlockedCards.filter(card =>
          card.pathwayId ? unlockedPids.has(card.pathwayId) : false
        );

        // Enforce per-module cap: keep cards with review history first, then by difficulty
        const grouped: Record<string, typeof validCards> = {};
        validCards.forEach(card => {
          const pid = card.pathwayId || 'unknown';
          if (!grouped[pid]) grouped[pid] = [];
          grouped[pid].push(card);
        });

        const cappedCards: typeof validCards = [];
        for (const [pid, cards] of Object.entries(grouped)) {
          if (cards.length <= MAX_CARDS_PER_MODULE) {
            cappedCards.push(...cards);
          } else {
            // Prioritize: reviewed cards first (preserve progress), then beginner→advanced
            const sorted = cards.sort((a, b) => {
              // Cards with review history come first
              const aReviewed = (a.repetitions || 0) > 0 ? 0 : 1;
              const bReviewed = (b.repetitions || 0) > 0 ? 0 : 1;
              if (aReviewed !== bReviewed) return aReviewed - bReviewed;
              // Then by difficulty
              const diffOrder = { beginner: 0, intermediate: 1, advanced: 2 };
              return (diffOrder[a.difficulty] || 1) - (diffOrder[b.difficulty] || 1);
            });
            cappedCards.push(...sorted.slice(0, MAX_CARDS_PER_MODULE));
            console.log(`[SpacedRepetition] Capped ${pid}: ${cards.length} → ${MAX_CARDS_PER_MODULE} cards`);
          }
        }

        const removed = state.unlockedCards.length - cappedCards.length;
        if (removed > 0) {
          console.log(`[SpacedRepetition] Resync v4: removed ${removed} cards (cap + validation)`);
        }

        set({ unlockedCards: cappedCards, _lastResyncVersion: CURRENT_RESYNC_VERSION });
      },

      reviewCard: (cardId: string, rating: ReviewRating) => {
        const today = new Date().toISOString().split('T')[0];

        set(state => {
          const cardIndex = state.unlockedCards.findIndex(c => c.id === cardId);
          if (cardIndex === -1) return state;

          const card = state.unlockedCards[cardIndex];
          const previousInterval = card.interval;

          const updates = calculateSM2(card, rating);
          const newInterval = updates.interval;
          const nextReviewDate = getNextReviewDate(newInterval);

          const updatedCard: FlashcardWithScheduling = {
            ...card,
            ...updates,
            nextReviewDate,
            lastReviewDate: today,
          };

          const newCards = [...state.unlockedCards];
          newCards[cardIndex] = updatedCard;

          const historyEntry: ReviewHistoryEntry = {
            cardId,
            rating,
            timestamp: new Date().toISOString(),
            previousInterval,
            newInterval,
          };

          return {
            unlockedCards: newCards,
            reviewHistory: [...state.reviewHistory, historyEntry],
            lastReviewDate: today,
            totalReviews: state.totalReviews + 1,
          };
        });

        // Trigger Firebase sync
        triggerSync();
      },

      /**
       * Get due cards, optionally filtered by category
       */
      getDueCards: (categoryId?: string) => {
        const state = get();
        const today = new Date().toISOString().split('T')[0];

        let cards = state.unlockedCards.filter(card => card.nextReviewDate <= today);

        if (categoryId) {
          cards = cards.filter(card => cardBelongsToCategory(card, categoryId));
        }

        return cards.sort((a, b) => {
          if (a.lapses !== b.lapses) return b.lapses - a.lapses;
          return a.nextReviewDate.localeCompare(b.nextReviewDate);
        });
      },

      getCardsByCategory: (categoryId: string) => {
        return get().unlockedCards.filter(card => cardBelongsToCategory(card, categoryId));
      },

      resetCard: (cardId: string) => {
        const today = new Date().toISOString().split('T')[0];

        set(state => {
          const cardIndex = state.unlockedCards.findIndex(c => c.id === cardId);
          if (cardIndex === -1) return state;

          const newCards = [...state.unlockedCards];
          newCards[cardIndex] = {
            ...newCards[cardIndex],
            easeFactor: 2.5,
            interval: 0,
            repetitions: 0,
            nextReviewDate: today,
            lapses: 0,
          };

          return { unlockedCards: newCards };
        });
      },

      getTodaysDueCount: (categoryId?: string) => {
        return get().getDueCards(categoryId).length;
      },

      getMasteredCount: () => {
        return get().unlockedCards.filter(card => card.interval > 21).length;
      },

      getReviewStreak: () => {
        const state = get();
        if (!state.lastReviewDate) return 0;

        const today = new Date();
        const lastReview = new Date(state.lastReviewDate);
        const diffDays = Math.floor((today.getTime() - lastReview.getTime()) / (1000 * 60 * 60 * 24));

        if (diffDays <= 1) {
          const reviewDates = [...new Set(
            state.reviewHistory.map(r => r.timestamp.split('T')[0])
          )].sort().reverse();

          let streak = 0;
          let checkDate = new Date(today);

          for (const dateStr of reviewDates) {
            const reviewDate = new Date(dateStr);
            const diff = Math.floor((checkDate.getTime() - reviewDate.getTime()) / (1000 * 60 * 60 * 24));

            if (diff <= 1) {
              streak++;
              checkDate = reviewDate;
            } else {
              break;
            }
          }

          return streak;
        }

        return 0;
      },

      getCardStats: () => {
        const state = get();
        const today = new Date().toISOString().split('T')[0];

        const unlocked = state.unlockedCards.length;
        const due = state.unlockedCards.filter(c => c.nextReviewDate <= today).length;
        const mastered = state.unlockedCards.filter(c => c.interval > 21).length;
        const learning = state.unlockedCards.filter(c => c.repetitions > 0 && c.interval <= 21).length;
        const locked = allFlashcards.length - unlocked;

        return { total: unlocked, due, mastered, learning, locked };
      },

      /**
       * Get stats for each category
       * A category is "unlocked" if it has ANY cards unlocked (not all)
       */
      getCategoryStats: (_completedLessonIds: string[]): CategoryStats[] => {
        const state = get();
        const today = new Date().toISOString().split('T')[0];

        return reviewCategories.map(category => {
          const categoryCards = state.unlockedCards.filter(card =>
            cardBelongsToCategory(card, category.id)
          );

          const isUnlocked = categoryCards.length > 0;

          return {
            categoryId: category.id,
            total: categoryCards.length,
            due: categoryCards.filter(c => c.nextReviewDate <= today).length,
            mastered: categoryCards.filter(c => c.interval > 21).length,
            learning: categoryCards.filter(c => c.repetitions > 0 && c.interval <= 21).length,
            isUnlocked,
          };
        });
      },

      getTotalAvailableCards: () => {
        return allFlashcards.length;
      },
    }),
    {
      name: 'gyanmarg-spaced-repetition-v3', // New key for category-based system
      partialize: (state) => ({
        unlockedCards: state.unlockedCards,
        reviewHistory: state.reviewHistory.slice(-1000),
        lastReviewDate: state.lastReviewDate,
        totalReviews: state.totalReviews,
        _lastResyncVersion: state._lastResyncVersion,
      }),
    }
  )
);

export const useDueCards = () => useSpacedRepetitionStore(state => state.getDueCards());
export const useTodaysDueCount = () => useSpacedRepetitionStore(state => state.getTodaysDueCount());
export const useCardStats = () => useSpacedRepetitionStore(state => state.getCardStats());

export default useSpacedRepetitionStore;
