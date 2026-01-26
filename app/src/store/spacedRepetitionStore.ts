import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { FlashcardWithScheduling, ReviewRating, ReviewHistoryEntry, SpacedRepetitionCard } from '@/types';
import { allFlashcards as flashcards } from '@/data/flashcards-index';

interface SpacedRepetitionState {
  cards: FlashcardWithScheduling[];
  reviewHistory: ReviewHistoryEntry[];
  initialized: boolean;
  lastReviewDate: string | null;
  totalReviews: number;

  // Actions
  initializeCards: () => void;
  reviewCard: (cardId: string, rating: ReviewRating) => void;
  getDueCards: () => FlashcardWithScheduling[];
  getCardsByCategory: (category: string) => FlashcardWithScheduling[];
  resetCard: (cardId: string) => void;
  addCustomCard: (card: SpacedRepetitionCard) => void;

  // Stats
  getTodaysDueCount: () => number;
  getMasteredCount: () => number;
  getReviewStreak: () => number;
  getCardStats: () => { total: number; due: number; mastered: number; learning: number };
}

/**
 * SM-2 Algorithm Implementation
 * Based on SuperMemo 2 algorithm by Piotr Wozniak
 *
 * Rating scale:
 * 0 - Complete blackout, no recall
 * 1 - Incorrect, but remembered upon seeing answer
 * 2 - Incorrect, but answer seemed easy to recall (Hard)
 * 3 - Correct, but with serious difficulty
 * 4 - Correct, after hesitation (Good)
 * 5 - Perfect recall (Easy)
 */
function calculateSM2(
  card: FlashcardWithScheduling,
  rating: ReviewRating
): Pick<FlashcardWithScheduling, 'easeFactor' | 'interval' | 'repetitions' | 'lapses'> {
  let { easeFactor, interval, repetitions, lapses } = card;

  if (rating < 3) {
    // Failed review - reset progress
    repetitions = 0;
    interval = 1;
    lapses += 1;
  } else {
    // Successful review
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitions += 1;
  }

  // Update ease factor using SM-2 formula
  // EF' = EF + (0.1 - (5-q) * (0.08 + (5-q) * 0.02))
  const q = rating;
  easeFactor = easeFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));

  // Ensure ease factor doesn't go below 1.3
  easeFactor = Math.max(1.3, easeFactor);

  return { easeFactor, interval, repetitions, lapses };
}

/**
 * Convert base flashcard to scheduled flashcard
 */
function initializeCard(card: SpacedRepetitionCard): FlashcardWithScheduling {
  const today = new Date().toISOString().split('T')[0];
  return {
    ...card,
    easeFactor: 2.5,
    interval: 0,
    repetitions: 0,
    nextReviewDate: today, // Due immediately
    lapses: 0,
  };
}

/**
 * Calculate next review date from interval
 */
function getNextReviewDate(interval: number): string {
  const date = new Date();
  date.setDate(date.getDate() + interval);
  return date.toISOString().split('T')[0];
}

export const useSpacedRepetitionStore = create<SpacedRepetitionState>()(
  persist(
    (set, get) => ({
      cards: [],
      reviewHistory: [],
      initialized: false,
      lastReviewDate: null,
      totalReviews: 0,

      /**
       * Initialize cards from flashcard data
       * Only runs once or when new cards are added
       */
      initializeCards: () => {
        const state = get();

        if (state.initialized && state.cards.length > 0) {
          // Check for new flashcards to add
          const existingIds = new Set(state.cards.map(c => c.id));
          const newCards = flashcards
            .filter(fc => !existingIds.has(fc.id))
            .map(initializeCard);

          if (newCards.length > 0) {
            set(state => ({
              cards: [...state.cards, ...newCards],
            }));
          }
          return;
        }

        // First time initialization
        const initializedCards = flashcards.map(initializeCard);
        set({
          cards: initializedCards,
          initialized: true,
        });
      },

      /**
       * Review a card and update its scheduling
       */
      reviewCard: (cardId: string, rating: ReviewRating) => {
        const today = new Date().toISOString().split('T')[0];

        set(state => {
          const cardIndex = state.cards.findIndex(c => c.id === cardId);
          if (cardIndex === -1) return state;

          const card = state.cards[cardIndex];
          const previousInterval = card.interval;

          // Calculate new scheduling using SM-2
          const updates = calculateSM2(card, rating);
          const newInterval = updates.interval;
          const nextReviewDate = getNextReviewDate(newInterval);

          // Create updated card
          const updatedCard: FlashcardWithScheduling = {
            ...card,
            ...updates,
            nextReviewDate,
            lastReviewDate: today,
          };

          // Update cards array
          const newCards = [...state.cards];
          newCards[cardIndex] = updatedCard;

          // Add to review history
          const historyEntry: ReviewHistoryEntry = {
            cardId,
            rating,
            timestamp: new Date().toISOString(),
            previousInterval,
            newInterval,
          };

          return {
            cards: newCards,
            reviewHistory: [...state.reviewHistory, historyEntry],
            lastReviewDate: today,
            totalReviews: state.totalReviews + 1,
          };
        });
      },

      /**
       * Get cards that are due for review (nextReviewDate <= today)
       */
      getDueCards: () => {
        const state = get();
        const today = new Date().toISOString().split('T')[0];

        return state.cards
          .filter(card => card.nextReviewDate <= today)
          .sort((a, b) => {
            // Prioritize cards with more lapses
            if (a.lapses !== b.lapses) return b.lapses - a.lapses;
            // Then by due date
            return a.nextReviewDate.localeCompare(b.nextReviewDate);
          });
      },

      /**
       * Get cards filtered by category
       */
      getCardsByCategory: (category: string) => {
        const state = get();
        return state.cards.filter(card => card.category === category);
      },

      /**
       * Reset a card's progress (start over)
       */
      resetCard: (cardId: string) => {
        const today = new Date().toISOString().split('T')[0];

        set(state => {
          const cardIndex = state.cards.findIndex(c => c.id === cardId);
          if (cardIndex === -1) return state;

          const newCards = [...state.cards];
          newCards[cardIndex] = {
            ...newCards[cardIndex],
            easeFactor: 2.5,
            interval: 0,
            repetitions: 0,
            nextReviewDate: today,
            lapses: 0,
          };

          return { cards: newCards };
        });
      },

      /**
       * Add a custom flashcard
       */
      addCustomCard: (card: SpacedRepetitionCard) => {
        const scheduledCard = initializeCard(card);
        set(state => ({
          cards: [...state.cards, scheduledCard],
        }));
      },

      /**
       * Get count of cards due today
       */
      getTodaysDueCount: () => {
        return get().getDueCards().length;
      },

      /**
       * Get count of mastered cards (interval > 21 days)
       */
      getMasteredCount: () => {
        const state = get();
        return state.cards.filter(card => card.interval > 21).length;
      },

      /**
       * Get review streak (consecutive days with reviews)
       */
      getReviewStreak: () => {
        const state = get();
        if (!state.lastReviewDate) return 0;

        const today = new Date();
        const lastReview = new Date(state.lastReviewDate);
        const diffDays = Math.floor((today.getTime() - lastReview.getTime()) / (1000 * 60 * 60 * 24));

        // If last review was today or yesterday, count the streak
        if (diffDays <= 1) {
          // Count consecutive days from review history
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

      /**
       * Get comprehensive card statistics
       */
      getCardStats: () => {
        const state = get();
        const today = new Date().toISOString().split('T')[0];

        const due = state.cards.filter(c => c.nextReviewDate <= today).length;
        const mastered = state.cards.filter(c => c.interval > 21).length;
        const learning = state.cards.filter(c => c.repetitions > 0 && c.interval <= 21).length;

        return {
          total: state.cards.length,
          due,
          mastered,
          learning,
        };
      },
    }),
    {
      name: 'gyanmarg-spaced-repetition',
      partialize: (state) => ({
        cards: state.cards,
        reviewHistory: state.reviewHistory.slice(-1000), // Keep last 1000 reviews
        initialized: state.initialized,
        lastReviewDate: state.lastReviewDate,
        totalReviews: state.totalReviews,
      }),
    }
  )
);

// Selector hooks for common operations
export const useDueCards = () => useSpacedRepetitionStore(state => state.getDueCards());
export const useTodaysDueCount = () => useSpacedRepetitionStore(state => state.getTodaysDueCount());
export const useCardStats = () => useSpacedRepetitionStore(state => state.getCardStats());

export default useSpacedRepetitionStore;
