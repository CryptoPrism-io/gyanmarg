import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserProgress, PathwayProgress, Achievement, LessonBookmark, WeeklyChallenge, ChallengeCompletion } from '@/types';
import { getAchievementById } from '@/data/achievements';
import { useUserStore } from '@/store/userStore';
import { triggerSync } from '@/store/firebaseSync';

// Weekly challenge templates
const weeklyTemplates: Omit<WeeklyChallenge, 'id' | 'startDate' | 'endDate' | 'current' | 'completed' | 'claimed'>[] = [
  { title: 'Knowledge Seeker', description: 'Complete 7 lessons this week', target: 7, metric: 'lessons', xpReward: 500 },
  { title: 'XP Hunter', description: 'Earn 1000 XP this week', target: 1000, metric: 'xp', xpReward: 300 },
  { title: 'Deep Focus', description: 'Complete 300 minutes of deep work', target: 300, metric: 'deepWork', xpReward: 400 },
  { title: 'Memory Palace', description: 'Review 50 flashcards', target: 50, metric: 'reviews', xpReward: 400 },
];

interface ProgressState {
  // User Progress
  userProgress: UserProgress;
  pathwayProgress: PathwayProgress;
  achievements: Achievement[];

  // Bookmarks & Resume
  bookmarks: LessonBookmark[];
  lastViewedLesson: LessonBookmark | null;

  // Weekly Challenge
  weeklyChallenge: WeeklyChallenge | null;

  // Challenge Completions (reward-based progressive system)
  challengeCompletions: ChallengeCompletion[];

  // Enhanced Streak
  longestStreak: number;
  streakFreezes: number;
  lastFreezeUsed: string | null;
  freezeRefreshDate: string;

  // Level-up tracking
  pendingLevelUp: number | null;

  // XP & Level Actions
  addXP: (amount: number) => void;
  addMicroXP: (amount: number) => void; // For small XP gains (card swipes) - no level up check
  getXPForNextLevel: () => number;
  getCurrentLevelXP: () => number;
  getLevelProgress: () => number;
  clearPendingLevelUp: () => void;

  // Lesson Actions
  completeLesson: (lessonId: string, xpReward: number) => void;
  isLessonCompleted: (lessonId: string) => boolean;

  // Bookmark Actions
  bookmarkLesson: (bookmark: Omit<LessonBookmark, 'timestamp'>) => void;
  removeBookmark: (lessonId: string) => void;
  updateLessonProgress: (lessonId: string, pathwayId: string, moduleId: string, scrollPosition: number) => void;
  getBookmarks: () => LessonBookmark[];
  getLastViewedLesson: () => LessonBookmark | null;

  // Achievement Actions
  unlockAchievement: (achievementId: string, xpReward: number) => void;
  hasAchievement: (achievementId: string) => boolean;

  // Deep Work Actions
  addDeepWorkMinutes: (minutes: number) => void;

  // Streak Actions
  updateStreak: () => void;
  useStreakFreeze: () => boolean;
  refreshStreakFreeze: () => void;

  // Weekly Challenge Actions
  generateWeeklyChallenge: () => void;
  updateWeeklyProgress: (metric: string, amount: number) => void;
  claimWeeklyReward: () => void;

  // Habit tracking
  incrementHabitsCompleted: () => void;

  // Flashcard review tracking
  incrementReviewCount: () => void;

  // Challenge Actions (reward-based progressive system)
  completeChallenge: (challengeId: string, response: string, xpReward: number) => void;
  isChallengeCompleted: (challengeId: string) => boolean;
  getChallengeCompletions: () => ChallengeCompletion[];
  getChallengeResponse: (challengeId: string) => string | null;

  // Visualization Unlocking
  unlockedVisualizations: string[];
  unlockVisualization: (vizId: string) => boolean;
  isVisualizationUnlocked: (vizId: string) => boolean;
  getUnlockedVisualizationsCount: () => number;

  // Reset
  resetProgress: () => void;
}

const defaultUserProgress: UserProgress = {
  xp: 0,
  level: 1,
  habitsCompleted: 0,
  deepWorkMinutes: 0,
  lessonsCompleted: [],
  achievements: [],
  currentStreak: 0,
  lastActivityDate: new Date().toISOString().split('T')[0],
};

const defaultPathwayProgress: PathwayProgress = {
  completedLessons: [],
  currentLesson: null,
  totalXP: 0,
  streakDays: 0,
  lastActivity: new Date().toISOString(),
};

function getWeekDates(): { start: string; end: string } {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const startDate = new Date(now);
  startDate.setDate(now.getDate() - dayOfWeek);
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 6);
  return {
    start: startDate.toISOString().split('T')[0],
    end: endDate.toISOString().split('T')[0],
  };
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      userProgress: defaultUserProgress,
      pathwayProgress: defaultPathwayProgress,
      achievements: [],
      bookmarks: [],
      lastViewedLesson: null,
      weeklyChallenge: null,
      challengeCompletions: [],
      unlockedVisualizations: [], // Users start with no unlocked visualizations
      longestStreak: 0,
      streakFreezes: 1,
      lastFreezeUsed: null,
      freezeRefreshDate: new Date().toISOString().split('T')[0],
      pendingLevelUp: null,

      addXP: (amount) =>
        set((state) => {
          const newXP = state.userProgress.xp + amount;
          const oldLevel = state.userProgress.level;
          const newLevel = Math.floor(newXP / 500) + 1;

          // Detect level up
          const leveledUp = newLevel > oldLevel;

          // Update weekly challenge if tracking XP
          let updatedWeekly = state.weeklyChallenge;
          if (updatedWeekly && updatedWeekly.metric === 'xp' && !updatedWeekly.completed) {
            updatedWeekly = {
              ...updatedWeekly,
              current: Math.min(updatedWeekly.current + amount, updatedWeekly.target),
              completed: updatedWeekly.current + amount >= updatedWeekly.target,
            };
          }

          // Trigger Firebase sync
          triggerSync();

          return {
            userProgress: {
              ...state.userProgress,
              xp: newXP,
              level: newLevel,
            },
            weeklyChallenge: updatedWeekly,
            pendingLevelUp: leveledUp ? newLevel : state.pendingLevelUp,
          };
        }),

      getXPForNextLevel: () => {
        const { level } = get().userProgress;
        return level * 500;
      },

      getCurrentLevelXP: () => {
        const { xp, level } = get().userProgress;
        return xp - (level - 1) * 500;
      },

      getLevelProgress: () => {
        const currentXP = get().getCurrentLevelXP();
        const neededXP = get().getXPForNextLevel();
        return Math.min((currentXP / neededXP) * 100, 100);
      },

      clearPendingLevelUp: () => set({ pendingLevelUp: null }),

      // Add micro XP for small gains (card swipes) - accumulates but doesn't trigger level up modal
      addMicroXP: (amount) =>
        set((state) => {
          const newXP = state.userProgress.xp + amount;
          const newLevel = Math.floor(newXP / 500) + 1;

          // Update weekly challenge if tracking XP
          let updatedWeekly = state.weeklyChallenge;
          if (updatedWeekly && updatedWeekly.metric === 'xp' && !updatedWeekly.completed) {
            updatedWeekly = {
              ...updatedWeekly,
              current: Math.min(updatedWeekly.current + amount, updatedWeekly.target),
              completed: updatedWeekly.current + amount >= updatedWeekly.target,
            };
          }

          return {
            userProgress: {
              ...state.userProgress,
              xp: newXP,
              level: newLevel,
            },
            weeklyChallenge: updatedWeekly,
            // Note: We don't set pendingLevelUp here to avoid interrupting card flow
          };
        }),

      completeLesson: (lessonId, xpReward) =>
        set((state) => {
          if (state.userProgress.lessonsCompleted.includes(lessonId)) {
            return state;
          }
          const newXP = state.userProgress.xp + xpReward;
          const oldLevel = state.userProgress.level;
          const newLevel = Math.floor(newXP / 500) + 1;
          const leveledUp = newLevel > oldLevel;

          // Update weekly challenge if tracking lessons
          let updatedWeekly = state.weeklyChallenge;
          if (updatedWeekly && updatedWeekly.metric === 'lessons' && !updatedWeekly.completed) {
            updatedWeekly = {
              ...updatedWeekly,
              current: Math.min(updatedWeekly.current + 1, updatedWeekly.target),
              completed: updatedWeekly.current + 1 >= updatedWeekly.target,
            };
          }

          // Trigger Firebase sync
          triggerSync();

          return {
            userProgress: {
              ...state.userProgress,
              xp: newXP,
              level: newLevel,
              lessonsCompleted: [...state.userProgress.lessonsCompleted, lessonId],
            },
            pathwayProgress: {
              ...state.pathwayProgress,
              completedLessons: [...state.pathwayProgress.completedLessons, lessonId],
              totalXP: state.pathwayProgress.totalXP + xpReward,
              lastActivity: new Date().toISOString(),
            },
            weeklyChallenge: updatedWeekly,
            pendingLevelUp: leveledUp ? newLevel : state.pendingLevelUp,
          };
        }),

      isLessonCompleted: (lessonId) => {
        return get().userProgress.lessonsCompleted.includes(lessonId);
      },

      // Bookmark Actions
      bookmarkLesson: (bookmark) =>
        set((state) => {
          const existingIndex = state.bookmarks.findIndex(b => b.lessonId === bookmark.lessonId);
          const newBookmark: LessonBookmark = {
            ...bookmark,
            timestamp: new Date().toISOString(),
          };

          if (existingIndex >= 0) {
            const newBookmarks = [...state.bookmarks];
            newBookmarks[existingIndex] = newBookmark;
            return { bookmarks: newBookmarks };
          }

          return { bookmarks: [...state.bookmarks, newBookmark] };
        }),

      removeBookmark: (lessonId) =>
        set((state) => ({
          bookmarks: state.bookmarks.filter(b => b.lessonId !== lessonId),
        })),

      updateLessonProgress: (lessonId, pathwayId, moduleId, scrollPosition) =>
        set((state) => {
          const bookmark: LessonBookmark = {
            lessonId,
            pathwayId,
            moduleId,
            scrollPosition,
            timestamp: new Date().toISOString(),
            completed: state.userProgress.lessonsCompleted.includes(lessonId),
          };
          return { lastViewedLesson: bookmark };
        }),

      getBookmarks: () => get().bookmarks,

      getLastViewedLesson: () => get().lastViewedLesson,

      unlockAchievement: (achievementId, xpReward) => {
        const state = get();
        if (state.userProgress.achievements.includes(achievementId)) {
          return;
        }

        // Get achievement details for notification
        const achievement = getAchievementById(achievementId);
        if (achievement) {
          // Trigger achievement notification in userStore
          useUserStore.getState().setPendingAchievement({
            id: achievementId,
            name: achievement.name,
            xpReward: achievement.xpReward,
          });
        }

        set((state) => {
          const newXP = state.userProgress.xp + xpReward;
          const oldLevel = state.userProgress.level;
          const newLevel = Math.floor(newXP / 500) + 1;
          const leveledUp = newLevel > oldLevel;

          // Trigger Firebase sync
          triggerSync();

          return {
            userProgress: {
              ...state.userProgress,
              xp: newXP,
              level: newLevel,
              achievements: [...state.userProgress.achievements, achievementId],
            },
            pendingLevelUp: leveledUp ? newLevel : state.pendingLevelUp,
          };
        });
      },

      hasAchievement: (achievementId) => {
        return get().userProgress.achievements.includes(achievementId);
      },

      addDeepWorkMinutes: (minutes) =>
        set((state) => {
          // Update weekly challenge if tracking deep work
          let updatedWeekly = state.weeklyChallenge;
          if (updatedWeekly && updatedWeekly.metric === 'deepWork' && !updatedWeekly.completed) {
            updatedWeekly = {
              ...updatedWeekly,
              current: Math.min(updatedWeekly.current + minutes, updatedWeekly.target),
              completed: updatedWeekly.current + minutes >= updatedWeekly.target,
            };
          }

          return {
            userProgress: {
              ...state.userProgress,
              deepWorkMinutes: state.userProgress.deepWorkMinutes + minutes,
            },
            weeklyChallenge: updatedWeekly,
          };
        }),

      updateStreak: () =>
        set((state) => {
          const today = new Date().toISOString().split('T')[0];
          const lastActivity = state.userProgress.lastActivityDate;
          const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
          const twoDaysAgo = new Date(Date.now() - 2 * 86400000).toISOString().split('T')[0];

          let newStreak = state.userProgress.currentStreak;
          let streakFreezes = state.streakFreezes;
          let lastFreezeUsed = state.lastFreezeUsed;

          if (lastActivity === yesterday) {
            // Normal streak continuation
            newStreak += 1;
          } else if (lastActivity === twoDaysAgo && streakFreezes > 0) {
            // Use streak freeze
            streakFreezes -= 1;
            lastFreezeUsed = today;
            newStreak += 1; // Streak preserved
          } else if (lastActivity !== today) {
            // Streak broken
            newStreak = 1;
          }

          // Update longest streak
          const longestStreak = Math.max(newStreak, state.longestStreak);

          return {
            userProgress: {
              ...state.userProgress,
              currentStreak: newStreak,
              lastActivityDate: today,
            },
            longestStreak,
            streakFreezes,
            lastFreezeUsed,
          };
        }),

      useStreakFreeze: () => {
        const state = get();
        if (state.streakFreezes > 0) {
          set({
            streakFreezes: state.streakFreezes - 1,
            lastFreezeUsed: new Date().toISOString().split('T')[0],
          });
          return true;
        }
        return false;
      },

      refreshStreakFreeze: () =>
        set((state) => {
          const today = new Date();
          const dayOfWeek = today.getDay(); // 0 = Sunday
          const todayStr = today.toISOString().split('T')[0];

          // Refresh on Sunday if not already refreshed today
          if (dayOfWeek === 0 && state.freezeRefreshDate !== todayStr) {
            return {
              streakFreezes: 1,
              freezeRefreshDate: todayStr,
            };
          }
          return state;
        }),

      generateWeeklyChallenge: () =>
        set((state) => {
          const { start, end } = getWeekDates();

          // Check if current challenge is still valid
          if (state.weeklyChallenge && state.weeklyChallenge.endDate >= start) {
            return state;
          }

          // Pick a random challenge template
          const template = weeklyTemplates[Math.floor(Math.random() * weeklyTemplates.length)];

          const challenge: WeeklyChallenge = {
            id: `weekly-${start}`,
            ...template,
            current: 0,
            startDate: start,
            endDate: end,
            completed: false,
            claimed: false,
          };

          return { weeklyChallenge: challenge };
        }),

      updateWeeklyProgress: (metric, amount) =>
        set((state) => {
          if (!state.weeklyChallenge || state.weeklyChallenge.metric !== metric || state.weeklyChallenge.completed) {
            return state;
          }

          const newCurrent = Math.min(state.weeklyChallenge.current + amount, state.weeklyChallenge.target);
          return {
            weeklyChallenge: {
              ...state.weeklyChallenge,
              current: newCurrent,
              completed: newCurrent >= state.weeklyChallenge.target,
            },
          };
        }),

      claimWeeklyReward: () =>
        set((state) => {
          if (!state.weeklyChallenge || !state.weeklyChallenge.completed || state.weeklyChallenge.claimed) {
            return state;
          }

          const reward = state.weeklyChallenge.xpReward;
          const newXP = state.userProgress.xp + reward;
          const oldLevel = state.userProgress.level;
          const newLevel = Math.floor(newXP / 500) + 1;
          const leveledUp = newLevel > oldLevel;

          return {
            userProgress: {
              ...state.userProgress,
              xp: newXP,
              level: newLevel,
            },
            weeklyChallenge: {
              ...state.weeklyChallenge,
              claimed: true,
            },
            pendingLevelUp: leveledUp ? newLevel : state.pendingLevelUp,
          };
        }),

      incrementHabitsCompleted: () =>
        set((state) => {
          // Update weekly challenge if tracking habits
          let updatedWeekly = state.weeklyChallenge;
          if (updatedWeekly && updatedWeekly.metric === 'habits' && !updatedWeekly.completed) {
            updatedWeekly = {
              ...updatedWeekly,
              current: Math.min(updatedWeekly.current + 1, updatedWeekly.target),
              completed: updatedWeekly.current + 1 >= updatedWeekly.target,
            };
          }

          return {
            userProgress: {
              ...state.userProgress,
              habitsCompleted: state.userProgress.habitsCompleted + 1,
            },
            weeklyChallenge: updatedWeekly,
          };
        }),

      incrementReviewCount: () =>
        set((state) => {
          // Update weekly challenge if tracking reviews
          let updatedWeekly = state.weeklyChallenge;
          if (updatedWeekly && updatedWeekly.metric === 'reviews' && !updatedWeekly.completed) {
            updatedWeekly = {
              ...updatedWeekly,
              current: Math.min(updatedWeekly.current + 1, updatedWeekly.target),
              completed: updatedWeekly.current + 1 >= updatedWeekly.target,
            };
          }

          return {
            weeklyChallenge: updatedWeekly,
          };
        }),

      // Challenge completion with user action response
      completeChallenge: (challengeId: string, response: string, xpReward: number) => {
        const state = get();
        // Check if already completed
        if (state.challengeCompletions.some(c => c.challengeId === challengeId)) {
          return;
        }

        const completion: ChallengeCompletion = {
          challengeId,
          response,
          completedAt: new Date().toISOString(),
          xpEarned: xpReward,
        };

        set((state) => {
          const newXP = state.userProgress.xp + xpReward;
          const oldLevel = state.userProgress.level;
          const newLevel = Math.floor(newXP / 500) + 1;
          const leveledUp = newLevel > oldLevel;

          // Trigger Firebase sync
          triggerSync();

          return {
            challengeCompletions: [...state.challengeCompletions, completion],
            userProgress: {
              ...state.userProgress,
              xp: newXP,
              level: newLevel,
            },
            pendingLevelUp: leveledUp ? newLevel : state.pendingLevelUp,
          };
        });
      },

      isChallengeCompleted: (challengeId: string) => {
        return get().challengeCompletions.some(c => c.challengeId === challengeId);
      },

      getChallengeCompletions: () => {
        return get().challengeCompletions;
      },

      getChallengeResponse: (challengeId: string) => {
        const completion = get().challengeCompletions.find(c => c.challengeId === challengeId);
        return completion?.response ?? null;
      },

      // Visualization unlocking - costs 500 XP per visualization
      unlockVisualization: (vizId: string) => {
        const state = get();
        const UNLOCK_COST = 500;

        // Already unlocked
        if (state.unlockedVisualizations.includes(vizId)) {
          return true;
        }

        // Check if user has enough XP
        if (state.userProgress.xp < UNLOCK_COST) {
          return false;
        }

        // Deduct XP and unlock
        set((state) => {
          const newXP = state.userProgress.xp - UNLOCK_COST;
          const newLevel = Math.floor(newXP / 500) + 1;

          // Trigger Firebase sync
          triggerSync();

          return {
            userProgress: {
              ...state.userProgress,
              xp: newXP,
              level: newLevel,
            },
            unlockedVisualizations: [...state.unlockedVisualizations, vizId],
          };
        });

        return true;
      },

      isVisualizationUnlocked: (vizId: string) => {
        return get().unlockedVisualizations.includes(vizId);
      },

      getUnlockedVisualizationsCount: () => {
        return get().unlockedVisualizations.length;
      },

      resetProgress: () =>
        set({
          userProgress: defaultUserProgress,
          pathwayProgress: defaultPathwayProgress,
          achievements: [],
          bookmarks: [],
          lastViewedLesson: null,
          weeklyChallenge: null,
          challengeCompletions: [],
          unlockedVisualizations: [],
          longestStreak: 0,
          streakFreezes: 1,
          lastFreezeUsed: null,
          freezeRefreshDate: new Date().toISOString().split('T')[0],
          pendingLevelUp: null,
        }),
    }),
    {
      name: 'gyanmarg-progress',
    }
  )
);

// Selector hooks
export const usePendingLevelUp = () => useProgressStore(state => state.pendingLevelUp);
export const useWeeklyChallenge = () => useProgressStore(state => state.weeklyChallenge);
export const useStreakInfo = () => useProgressStore(state => ({
  currentStreak: state.userProgress.currentStreak,
  longestStreak: state.longestStreak,
  streakFreezes: state.streakFreezes,
}));

export default useProgressStore;
