import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserProfile, OnboardingData, UserSettings, OnboardingProgress } from '@/types';
import { triggerSync } from '@/store/firebaseSync';

interface UserState {
  // Profile
  profile: UserProfile | null;
  isOnboarded: boolean;

  // Onboarding Progress (persisted for resumption)
  onboardingProgress: OnboardingProgress | null;

  // Settings
  settings: UserSettings;

  // Notification settings
  notificationPermission: 'granted' | 'denied' | 'default';
  reviewReminder: { enabled: boolean; time: string } | null;

  // Pending achievement notification
  pendingAchievement: { id: string; name: string; xpReward: number } | null;

  // Favorite modules
  favoriteModules: string[];

  // Daily login tracking
  lastLoginDate: string | null; // ISO date string (YYYY-MM-DD)
  consecutiveLogins: number;
  dailyRewardClaimed: boolean;
  totalLogins: number;

  // Actions
  setProfile: (profile: UserProfile) => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
  completeOnboarding: (data: OnboardingData) => void;
  updateSettings: (settings: Partial<UserSettings>) => void;
  resetUser: () => void;

  // Onboarding Progress Actions
  setOnboardingStep: (step: number, data: Partial<OnboardingData>) => void;
  clearOnboardingProgress: () => void;
  getOnboardingProgress: () => OnboardingProgress | null;

  // Notification Actions
  setNotificationPermission: (permission: 'granted' | 'denied' | 'default') => void;
  setReviewReminder: (reminder: { enabled: boolean; time: string } | null) => void;

  // Achievement notification
  setPendingAchievement: (achievement: { id: string; name: string; xpReward: number } | null) => void;
  clearPendingAchievement: () => void;

  // Favorite modules
  toggleFavoriteModule: (moduleId: string) => void;
  isFavoriteModule: (moduleId: string) => boolean;

  // Daily login actions
  checkDailyLogin: () => { isNewDay: boolean; reward: number | null; streak: number };
  claimDailyReward: () => void;
}

const defaultSettings: UserSettings = {
  theme: 'dark',
  notifications: true,
  soundEnabled: true,
  dailyReminder: null,
};

// Helper function to calculate daily reward based on streak
function calculateDailyReward(streak: number): number {
  if (streak === 1) return 50;
  if (streak === 2) return 75;
  if (streak === 3) return 100; // + streak freeze (handled separately)
  if (streak >= 7) return 250; // + badge for week (handled separately)
  // Days 4-6
  return 100 + (streak - 3) * 25;
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      profile: null,
      isOnboarded: true,
      onboardingProgress: null,
      settings: defaultSettings,
      notificationPermission: 'default',
      reviewReminder: null,
      pendingAchievement: null,
      favoriteModules: [],
      lastLoginDate: null,
      consecutiveLogins: 0,
      dailyRewardClaimed: false,
      totalLogins: 0,

      setProfile: (profile) => set({ profile }),

      updateProfile: (updates) =>
        set((state) => ({
          profile: state.profile ? { ...state.profile, ...updates } : null,
        })),

      completeOnboarding: (data) => {
        set({
          profile: {
            name: data.name,
            primaryGoal: data.primaryGoal,
            learningStyle: data.learningStyle,
            dailyTime: data.dailyTime,
            selectedDomains: data.selectedDomains,
            createdAt: new Date().toISOString(),
          },
          isOnboarded: true,
          onboardingProgress: null, // Clear progress after completion
        });
        // Trigger Firebase sync after onboarding
        triggerSync();
      },

      updateSettings: (updates) => {
        set((state) => ({
          settings: { ...state.settings, ...updates },
        }));
        triggerSync();
      },

      resetUser: () =>
        set({
          profile: null,
          isOnboarded: false,
          onboardingProgress: null,
          settings: defaultSettings,
          notificationPermission: 'default',
          reviewReminder: null,
          pendingAchievement: null,
          favoriteModules: [],
        }),

      // Onboarding Progress Actions
      setOnboardingStep: (step, data) =>
        set((state) => ({
          onboardingProgress: {
            currentStep: step,
            data: { ...state.onboardingProgress?.data, ...data },
            startedAt: state.onboardingProgress?.startedAt || new Date().toISOString(),
          },
        })),

      clearOnboardingProgress: () => set({ onboardingProgress: null }),

      getOnboardingProgress: () => get().onboardingProgress,

      // Notification Actions
      setNotificationPermission: (permission) =>
        set({ notificationPermission: permission }),

      setReviewReminder: (reminder) =>
        set({ reviewReminder: reminder }),

      // Achievement notification
      setPendingAchievement: (achievement) =>
        set({ pendingAchievement: achievement }),

      clearPendingAchievement: () =>
        set({ pendingAchievement: null }),

      // Favorite modules
      toggleFavoriteModule: (moduleId) =>
        set((state) => ({
          favoriteModules: state.favoriteModules.includes(moduleId)
            ? state.favoriteModules.filter((id) => id !== moduleId)
            : [...state.favoriteModules, moduleId],
        })),

      isFavoriteModule: (moduleId) =>
        get().favoriteModules.includes(moduleId),

      // Daily login actions
      checkDailyLogin: () => {
        const state = get();
        const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
        const lastLogin = state.lastLoginDate;

        // First time login
        if (!lastLogin) {
          set({
            lastLoginDate: today,
            consecutiveLogins: 1,
            dailyRewardClaimed: false,
            totalLogins: 1,
          });
          return { isNewDay: true, reward: 50, streak: 1 };
        }

        // Already logged in today
        if (lastLogin === today) {
          return {
            isNewDay: false,
            reward: state.dailyRewardClaimed ? null : calculateDailyReward(state.consecutiveLogins),
            streak: state.consecutiveLogins,
          };
        }

        // New day - check if streak continues
        const lastDate = new Date(lastLogin);
        const currentDate = new Date(today);
        const diffTime = currentDate.getTime() - lastDate.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        let newStreak = state.consecutiveLogins;
        if (diffDays === 1) {
          // Consecutive day
          newStreak = state.consecutiveLogins + 1;
        } else if (diffDays > 1) {
          // Streak broken
          newStreak = 1;
        }

        set({
          lastLoginDate: today,
          consecutiveLogins: newStreak,
          dailyRewardClaimed: false,
          totalLogins: state.totalLogins + 1,
        });

        return {
          isNewDay: true,
          reward: calculateDailyReward(newStreak),
          streak: newStreak,
        };
      },

      claimDailyReward: () => {
        set({ dailyRewardClaimed: true });
      },
    }),
    {
      name: 'gyanmarg-user',
    }
  )
);

// Selector hooks
export const useIsOnboarded = () => useUserStore(state => state.isOnboarded);
export const useOnboardingProgress = () => useUserStore(state => state.onboardingProgress);
export const usePendingAchievement = () => useUserStore(state => state.pendingAchievement);
export const useSettings = () => useUserStore(state => state.settings);
export const useFavoriteModules = () => useUserStore(state => state.favoriteModules);

export default useUserStore;
