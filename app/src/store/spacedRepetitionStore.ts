import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { FlashcardWithScheduling, ReviewRating, ReviewHistoryEntry, SpacedRepetitionCard } from '@/types';
import { allFlashcards } from '@/data/flashcards-index';
import { reviewCategories, getCategoryForPathwayId } from '@/data/review-categories';
import { isFlashcardUnlockedByLesson } from '@/data/lesson-flashcard-map';
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

  // Actions
  syncUnlockedCards: (completedLessonIds: string[]) => void;
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
 * Check if a flashcard belongs to a category
 */
function cardBelongsToCategory(card: FlashcardWithScheduling, categoryId: string): boolean {
  const category = reviewCategories.find(c => c.id === categoryId);
  if (!category) return false;

  // Check if card's pathwayId matches any of the category's pathwayIds
  const cardPathway = card.pathwayId?.toLowerCase() || '';
  const cardCategory = card.category?.toLowerCase() || '';

  return category.pathwayIds.some(p => {
    const pLower = p.toLowerCase();
    return cardPathway.includes(pLower) ||
           pLower.includes(cardPathway) ||
           cardCategory.includes(pLower) ||
           pLower.includes(cardCategory);
  });
}

/**
 * Get category ID for a flashcard
 */
function getCardCategoryId(card: SpacedRepetitionCard): string | null {
  const category = getCategoryForPathwayId(card.pathwayId || '');
  return category?.id || null;
}

export const useSpacedRepetitionStore = create<SpacedRepetitionState>()(
  persist(
    (set, get) => ({
      unlockedCards: [],
      reviewHistory: [],
      lastReviewDate: null,
      totalReviews: 0,

      /**
       * Sync unlocked cards based on completed lessons
       * GRANULAR: Each lesson only unlocks its specific flashcards (5-15 cards per lesson)
       * Uses tag-based matching from lesson-flashcard-map.ts
       */
      syncUnlockedCards: (completedLessonIds: string[]) => {
        if (completedLessonIds.length === 0) return;

        const state = get();
        const existingCardIds = new Set(state.unlockedCards.map(c => c.id));

        // Find flashcards that match ANY completed lesson's tags
        // Each lesson only unlocks ~5-15 related cards, not the whole category
        const newCardsToUnlock = allFlashcards.filter(card => {
          if (existingCardIds.has(card.id)) return false;

          // Check if any completed lesson unlocks this specific card
          return completedLessonIds.some(lessonId =>
            isFlashcardUnlockedByLesson(card, lessonId)
          );
        });

        if (newCardsToUnlock.length > 0) {
          const initializedNewCards = newCardsToUnlock.map(initializeCard);
          set(state => ({
            unlockedCards: [...state.unlockedCards, ...initializedNewCards],
          }));
          triggerSync();
        }
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

          // Count potential cards (all flashcards in this category)
          const potentialCards = allFlashcards.filter(card => {
            const cardCategoryId = getCardCategoryId(card);
            return cardCategoryId === category.id;
          });

          // Category is "unlocked" if ANY cards from it are unlocked
          const isUnlocked = categoryCards.length > 0;

          return {
            categoryId: category.id,
            total: categoryCards.length,
            due: categoryCards.filter(c => c.nextReviewDate <= today).length,
            mastered: categoryCards.filter(c => c.interval > 21).length,
            learning: categoryCards.filter(c => c.repetitions > 0 && c.interval <= 21).length,
            isUnlocked,
            potentialTotal: potentialCards.length,
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
      }),
    }
  )
);

export const useDueCards = () => useSpacedRepetitionStore(state => state.getDueCards());
export const useTodaysDueCount = () => useSpacedRepetitionStore(state => state.getTodaysDueCount());
export const useCardStats = () => useSpacedRepetitionStore(state => state.getCardStats());

export default useSpacedRepetitionStore;
