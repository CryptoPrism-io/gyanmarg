import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { GameScore, GameType } from '@/types/game';
import { HINT_COST, MAX_HINTS_PER_SESSION } from '@/types/game';
import { useProgressStore } from '@/store/progressStore';

interface GameState {
  // Scores
  gameScores: GameScore[];
  totalGamesPlayed: number;
  totalGameXP: number;

  // Hint tracking (session-based, not persisted — reset on each game start)
  hintsUsedThisSession: number;

  // Actions
  addScore: (score: GameScore) => void;
  getHighScore: (lessonId: string, gameType: GameType) => GameScore | null;
  getScoresForLesson: (lessonId: string) => GameScore[];
  getLessonsPlayed: () => string[];

  // Hint actions
  useHint: () => boolean; // returns false if max hints reached or not enough XP
  resetSessionHints: () => void;
  canUseHint: () => boolean;

  // Reset
  resetGameData: () => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      gameScores: [],
      totalGamesPlayed: 0,
      totalGameXP: 0,
      hintsUsedThisSession: 0,

      addScore: (score) =>
        set((state) => ({
          gameScores: [...state.gameScores, score],
          totalGamesPlayed: state.totalGamesPlayed + 1,
          totalGameXP: state.totalGameXP + score.xpEarned,
        })),

      getHighScore: (lessonId, gameType) => {
        const scores = get().gameScores.filter(
          (s) => s.lessonId === lessonId && s.gameType === gameType
        );
        if (scores.length === 0) return null;
        return scores.reduce((best, s) => (s.score > best.score ? s : best), scores[0]);
      },

      getScoresForLesson: (lessonId) => {
        return get().gameScores.filter((s) => s.lessonId === lessonId);
      },

      getLessonsPlayed: () => {
        return [...new Set(get().gameScores.map((s) => s.lessonId))];
      },

      useHint: () => {
        const state = get();
        if (state.hintsUsedThisSession >= MAX_HINTS_PER_SESSION) return false;

        // Deduct XP via progressStore
        const deducted = useProgressStore.getState().deductXP(HINT_COST);
        if (!deducted) return false;

        set({ hintsUsedThisSession: state.hintsUsedThisSession + 1 });
        return true;
      },

      resetSessionHints: () => set({ hintsUsedThisSession: 0 }),

      canUseHint: () => {
        const state = get();
        return (
          state.hintsUsedThisSession < MAX_HINTS_PER_SESSION &&
          useProgressStore.getState().userProgress.xp >= HINT_COST
        );
      },

      resetGameData: () =>
        set({
          gameScores: [],
          totalGamesPlayed: 0,
          totalGameXP: 0,
          hintsUsedThisSession: 0,
        }),
    }),
    {
      name: 'gyanmarg-games',
      partialize: (state) => ({
        gameScores: state.gameScores,
        totalGamesPlayed: state.totalGamesPlayed,
        totalGameXP: state.totalGameXP,
        // hintsUsedThisSession intentionally NOT persisted
      }),
    }
  )
);

export default useGameStore;
