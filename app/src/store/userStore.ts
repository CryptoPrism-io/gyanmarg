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

  // Free modules (picked during onboarding, always accessible)
  freeModules: string[];

  // Payment state
  purchasedModules: string[];  // module IDs bought individually for ₹99
  hasLifetimeAccess: boolean;  // true if user paid ₹999 lifetime

  // Favorite modules
  favoriteModules: string[];

  // Free trial
  trialStartDate: string | null; // ISO date string when trial started, null = not started

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

  // Payment actions
  purchaseModule: (moduleId: string) => void;
  activateLifetime: () => void;

  // Free modules selector
  isFreeModule: (id: string) => boolean;

  // Favorite modules
  toggleFavoriteModule: (moduleId: string) => void;
  isFavoriteModule: (moduleId: string) => boolean;

  // Free trial actions
  startTrial: () => void;
  isTrialActive: () => boolean;
  isTrialExpired: () => boolean;
}

const defaultSettings: UserSettings = {
  theme: 'dark',
  notifications: true,
  soundEnabled: true,
  dailyReminder: null,
};

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
      freeModules: [],
      purchasedModules: [],
      hasLifetimeAccess: false,
      favoriteModules: [],
      trialStartDate: null,

      setProfile: (profile) => set({ profile }),

      updateProfile: (updates) =>
        set((state) => ({
          profile: state.profile ? { ...state.profile, ...updates } : null,
        })),

      completeOnboarding: (data) => {
        set({
          profile: {
            name: data.name,
            primaryGoal: data.primaryGoal ?? '',
            learningStyle: data.learningStyle ?? '',
            dailyTime: data.dailyTime ?? 15,
            selectedDomains: data.selectedDomains ?? [],
            createdAt: new Date().toISOString(),
          },
          freeModules: data.freeModules ?? [],
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
          freeModules: [],
          purchasedModules: [],
          hasLifetimeAccess: false,
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

      // Payment actions
      purchaseModule: (moduleId) => {
        set((state) => ({
          purchasedModules: state.purchasedModules.includes(moduleId)
            ? state.purchasedModules
            : [...state.purchasedModules, moduleId],
        }));
        triggerSync();
      },

      activateLifetime: () => {
        set({ hasLifetimeAccess: true });
        triggerSync();
      },

      // Free modules selector
      isFreeModule: (id) =>
        (get().freeModules ?? []).includes(id),

      // Favorite modules
      toggleFavoriteModule: (moduleId) =>
        set((state) => ({
          favoriteModules: state.favoriteModules.includes(moduleId)
            ? state.favoriteModules.filter((id) => id !== moduleId)
            : [...state.favoriteModules, moduleId],
        })),

      isFavoriteModule: (moduleId) =>
        get().favoriteModules.includes(moduleId),

      // Free trial actions
      startTrial: () => {
        set({ trialStartDate: new Date().toISOString() });
        triggerSync();
      },

      isTrialActive: () => {
        const { trialStartDate } = get();
        if (!trialStartDate) return false;
        const daysElapsed = Math.floor((Date.now() - new Date(trialStartDate).getTime()) / (1000 * 60 * 60 * 24));
        return daysElapsed < 60;
      },

      isTrialExpired: () => {
        const { trialStartDate } = get();
        if (!trialStartDate) return false;
        const daysElapsed = Math.floor((Date.now() - new Date(trialStartDate).getTime()) / (1000 * 60 * 60 * 24));
        return daysElapsed >= 60;
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
