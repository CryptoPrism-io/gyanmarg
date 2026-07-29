import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserProgress, PathwayProgress, Achievement, LessonBookmark, WeeklyChallenge, ChallengeCompletion } from '@/types';
import { getAchievementById } from '@/data/achievements';
import { useUserStore } from '@/store/userStore';
import { triggerSync } from '@/store/firebaseSync';
import { analytics } from '@/lib/analytics';
import type { Badge } from '@/data/badges';
import { BADGES, checkBadgeUnlock } from '@/data/badges';
import { getVizForLevel } from '@/data/vizLevelMap';
import type { NotificationSchedule } from '@/lib/notifications';
import { getDefaultSchedule } from '@/lib/notifications';

const XP_PER_LEVEL = 500;
const VIZ_PURCHASE_COST = 5000;

// Starred cards — saved from lesson card flow
export interface StarredCard {
  cardId: string;        // unique card ID from useCardStack
  lessonId: string;      // parent lesson
  moduleId: string;      // parent module
  cardType: 'overview' | 'content' | 'quiz' | 'takeaway' | 'action' | 'visualization';
  title: string;
  content: string;       // card text/markdown content
  starredAt: string;     // ISO timestamp
}

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

  // Notifications
  notificationSchedule: NotificationSchedule;

  // Level-up tracking
  pendingLevelUp: number | null;

  // Pending viz unlock (shown as capstone reward after level completion)
  pendingVizUnlock: { vizId: string; moduleId: string; levelId: string } | null;

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

  // Notification Actions
  updateNotificationSchedule: (schedule: Partial<NotificationSchedule>) => void;
  toggleNotifications: (enabled: boolean) => void;
  setNotificationTime: (time: string) => void;

  // Challenge Actions (reward-based progressive system)
  completeChallenge: (challengeId: string, response: string, xpReward: number) => void;
  isChallengeCompleted: (challengeId: string) => boolean;
  getChallengeCompletions: () => ChallengeCompletion[];
  getChallengeResponse: (challengeId: string) => string | null;

  // Starred Cards
  starredCards: StarredCard[];
  starCard: (card: Omit<StarredCard, 'starredAt'>) => void;
  unstarCard: (cardId: string) => void;
  isCardStarred: (cardId: string) => boolean;
  getStarredCards: () => StarredCard[];

  // Badges
  unlockedBadges: Badge[];
  checkAndUnlockBadges: () => string[]; // Returns IDs of newly unlocked badges
  hasBadge: (badgeId: string) => boolean;
  getBadges: () => Badge[];
  getBadgeProgress: (badgeId: string) => number;

  // Hint XP deduction (for game hints — never levels down)
  deductXP: (amount: number) => boolean;

  // Visualization Unlocking
  unlockedVisualizations: string[];
  isVisualizationUnlocked: (vizId: string) => boolean;
  getUnlockedVisualizationsCount: () => number;
  clearPendingVizUnlock: () => void;
  purchaseViz: (vizId: string) => boolean; // deducts 5000 XP, returns false if insufficient

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
      starredCards: [],
      unlockedBadges: [], // Users start with no badges
      unlockedVisualizations: [], // Populated by level completions
      pendingVizUnlock: null,
      longestStreak: 0,
      streakFreezes: 1,
      lastFreezeUsed: null,
      freezeRefreshDate: new Date().toISOString().split('T')[0],
      notificationSchedule: getDefaultSchedule(),
      pendingLevelUp: null,

      addXP: (amount) => {
        set((state) => {
          const newXP = state.userProgress.xp + amount;
          const oldLevel = state.userProgress.level;
          const newLevel = Math.floor(newXP / XP_PER_LEVEL) + 1;

          // Detect level up
          const leveledUp = newLevel > oldLevel;

          // Track analytics
          if (leveledUp) {
            analytics.events.levelUp(newLevel);
          }

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
        });

        // Check for badge unlocks after XP update
        get().checkAndUnlockBadges();
      },

      getXPForNextLevel: () => {
        const { level } = get().userProgress;
        return level * XP_PER_LEVEL;
      },

      getCurrentLevelXP: () => {
        const { xp, level } = get().userProgress;
        return xp - (level - 1) * XP_PER_LEVEL;
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
          const newLevel = Math.floor(newXP / XP_PER_LEVEL) + 1;

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

      completeLesson: (lessonId, xpReward) => {
        const state = get();
        if (state.userProgress.lessonsCompleted.includes(lessonId)) {
          return;
        }

        // Track lesson completion
        analytics.track('lesson_completed', { lesson_id: lessonId, xp_reward: xpReward });

        set((state) => {
          const newXP = state.userProgress.xp + xpReward;
          const oldLevel = state.userProgress.level;
          const newLevel = Math.floor(newXP / XP_PER_LEVEL) + 1;
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
        });

        // Check for badge unlocks after lesson completion
        get().checkAndUnlockBadges();

        // Check if this is a viz-reward lesson (ID contains '-viz-')
        if (lessonId.includes('-viz-')) {
          const levelId = lessonId.replace('-viz-', '-');
          const vizInfo = getVizForLevel(levelId);
          if (vizInfo && !get().unlockedVisualizations.includes(vizInfo.vizId)) {
            set((state) => ({
              unlockedVisualizations: [...state.unlockedVisualizations, vizInfo.vizId],
              pendingVizUnlock: { vizId: vizInfo.vizId, moduleId: vizInfo.mapping.moduleId, levelId: vizInfo.mapping.levelId },
            }));
            analytics.track('viz_unlocked', { viz_id: vizInfo.vizId, level_id: levelId, module_id: vizInfo.mapping.moduleId });
            triggerSync();
          }
        }
      },

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

        // Track achievement unlock
        analytics.events.achievementUnlocked(achievementId);

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
          const newLevel = Math.floor(newXP / XP_PER_LEVEL) + 1;
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
          const newLevel = Math.floor(newXP / XP_PER_LEVEL) + 1;
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

      // Notification Actions
      updateNotificationSchedule: (schedule) =>
        set((state) => ({
          notificationSchedule: { ...state.notificationSchedule, ...schedule },
        })),

      toggleNotifications: (enabled) =>
        set((state) => ({
          notificationSchedule: { ...state.notificationSchedule, enabled },
        })),

      setNotificationTime: (time) =>
        set((state) => ({
          notificationSchedule: { ...state.notificationSchedule, scheduledTime: time },
        })),

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
          const newLevel = Math.floor(newXP / XP_PER_LEVEL) + 1;
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

      // Starred Cards
      starCard: (card) =>
        set((state) => {
          if (state.starredCards.some((c) => c.cardId === card.cardId)) return state;
          return {
            starredCards: [...state.starredCards, { ...card, starredAt: new Date().toISOString() }],
          };
        }),

      unstarCard: (cardId) =>
        set((state) => ({
          starredCards: state.starredCards.filter((c) => c.cardId !== cardId),
        })),

      isCardStarred: (cardId) => get().starredCards.some((c) => c.cardId === cardId),

      getStarredCards: () => get().starredCards,

      // Badges
      checkAndUnlockBadges: () => {
        const state = get();
        const newlyUnlockedIds: string[] = [];

        // Calculate user stats for badge checks
        const userStats = {
          streak: state.userProgress.currentStreak,
          modulesCompleted: state.pathwayProgress.completedLessons.length,
          xp: state.userProgress.xp,
          lessonsCompleted: state.userProgress.lessonsCompleted.length,
          reviewsCompleted: state.userProgress.habitsCompleted, // Using habitsCompleted as review count
        };

        // Check all badges for unlock
        const unlockedBadgeIds = state.unlockedBadges.map((b) => b.id);

        for (const badge of BADGES) {
          // Skip if already unlocked
          if (unlockedBadgeIds.includes(badge.id)) continue;

          // Check if requirements are met
          if (checkBadgeUnlock(badge, userStats)) {
            newlyUnlockedIds.push(badge.id);

            // Add unlockedAt timestamp
            const unlockedBadge: Badge = {
              ...badge,
              unlockedAt: new Date().toISOString(),
            };

            set((state) => ({
              unlockedBadges: [...state.unlockedBadges, unlockedBadge],
            }));

            // Track analytics
            analytics.track('badge_unlocked', {
              badge_id: badge.id,
              badge_name: badge.name,
              badge_tier: badge.tier,
              badge_category: badge.category,
            });
          }
        }

        return newlyUnlockedIds;
      },

      hasBadge: (badgeId) => get().unlockedBadges.some((b) => b.id === badgeId),

      getBadges: () => get().unlockedBadges,

      getBadgeProgress: (badgeId) => {
        const state = get();
        const badge = BADGES.find((b) => b.id === badgeId);
        if (!badge) return 0;

        const userStats = {
          streak: state.userProgress.currentStreak,
          modulesCompleted: state.pathwayProgress.completedLessons.length,
          xp: state.userProgress.xp,
          lessonsCompleted: state.userProgress.lessonsCompleted.length,
          reviewsCompleted: state.userProgress.habitsCompleted,
        };

        let current = 0;
        switch (badge.requirement.type) {
          case 'streak':
            current = userStats.streak;
            break;
          case 'modules':
            current = userStats.modulesCompleted;
            break;
          case 'xp':
            current = userStats.xp;
            break;
          case 'lessons':
            current = userStats.lessonsCompleted;
            break;
          case 'reviews':
            current = userStats.reviewsCompleted;
            break;
        }

        return Math.min(100, (current / badge.requirement.value) * 100);
      },

      // Deduct XP for game hints — never levels down
      deductXP: (amount: number) => {
        const state = get();
        if (state.userProgress.xp < amount) return false;

        set((state) => {
          const newXP = state.userProgress.xp - amount;
          // Level safeguard: never go below current level
          const newLevel = Math.max(Math.floor(newXP / XP_PER_LEVEL) + 1, state.userProgress.level);

          return {
            userProgress: {
              ...state.userProgress,
              xp: newXP,
              level: newLevel,
            },
          };
        });

        return true;
      },

      purchaseViz: (vizId: string) => {
        const state = get();
        if (state.userProgress.xp < VIZ_PURCHASE_COST) return false;
        if (state.unlockedVisualizations.includes(vizId)) return true;
        set((s) => ({
          userProgress: { ...s.userProgress, xp: s.userProgress.xp - VIZ_PURCHASE_COST },
          unlockedVisualizations: [...s.unlockedVisualizations, vizId],
        }));
        return true;
      },

      isVisualizationUnlocked: (vizId: string) => {
        return get().unlockedVisualizations.includes(vizId);
      },

      getUnlockedVisualizationsCount: () => {
        return get().unlockedVisualizations.length;
      },

      clearPendingVizUnlock: () => {
        set({ pendingVizUnlock: null });
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
          starredCards: [],
          unlockedVisualizations: [],
          longestStreak: 0,
          streakFreezes: 1,
          lastFreezeUsed: null,
          freezeRefreshDate: new Date().toISOString().split('T')[0],
          notificationSchedule: getDefaultSchedule(),
          pendingLevelUp: null,
          pendingVizUnlock: null,
        }),
    }),
    {
      name: 'gyanmarg-progress',
    }
  )
);

// Selector hooks
export const usePendingLevelUp = () => useProgressStore(state => state.pendingLevelUp);
export const usePendingVizUnlock = () => useProgressStore(state => state.pendingVizUnlock);
export const useWeeklyChallenge = () => useProgressStore(state => state.weeklyChallenge);
export const useStreakInfo = () => useProgressStore(state => ({
  currentStreak: state.userProgress.currentStreak,
  longestStreak: state.longestStreak,
  streakFreezes: state.streakFreezes,
}));

export default useProgressStore;
