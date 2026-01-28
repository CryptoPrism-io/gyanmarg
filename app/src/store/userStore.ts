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
      isOnboarded: false,
      onboardingProgress: null,
      settings: defaultSettings,
      notificationPermission: 'default',
      reviewReminder: null,
      pendingAchievement: null,

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
            focusAreas: data.focusAreas,
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

export default useUserStore;
