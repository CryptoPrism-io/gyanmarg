// Firebase/Firestore types for Gyanmarg
import type { Timestamp } from 'firebase/firestore';
import type {
  UserProfile,
  UserSettings,
  UserProgress,
  PathwayProgress,
  Achievement,
  LessonBookmark,
  WeeklyChallenge,
  ChallengeCompletion,
  Habit,
  HabitCompletion,
  FlashcardWithScheduling,
  ReviewHistoryEntry,
} from '@/types';

/**
 * Firebase Auth user info (from Google Sign-In)
 */
export interface FirebaseAuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

/**
 * Auth state for the application
 */
export interface AuthState {
  user: FirebaseAuthUser | null;
  isLoading: boolean;
  error: string | null;
}

/**
 * Complete Firestore document structure for a user
 * Path: /users/{uid}
 */
export interface FirestoreUserDocument {
  // Metadata
  uid: string;
  email: string;
  displayName: string;
  photoURL: string | null;
  createdAt: Timestamp;
  lastSyncAt: Timestamp;

  // From userStore
  user: {
    profile: UserProfile | null;
    isOnboarded: boolean;
    settings: UserSettings;
  };

  // From progressStore
  progress: {
    userProgress: UserProgress;
    pathwayProgress: PathwayProgress;
    achievements: Achievement[];
    bookmarks: LessonBookmark[];
    lastViewedLesson: LessonBookmark | null;
    weeklyChallenge: WeeklyChallenge | null;
    challengeCompletions: ChallengeCompletion[];
    longestStreak: number;
    streakFreezes: number;
    lastFreezeUsed: string | null;
    freezeRefreshDate: string;
    // Note: pendingLevelUp is UI-only, NOT synced
  };

  // From habitStore
  habits: {
    habits: Habit[];
    completions: HabitCompletion[];
  };

  // From spacedRepetitionStore
  spacedRepetition: {
    unlockedCards: FlashcardWithScheduling[];
    reviewHistory: ReviewHistoryEntry[]; // Limited to 1000 entries
    lastReviewDate: string | null;
    totalReviews: number;
  };
}

/**
 * Data extracted from localStorage stores for syncing
 */
export interface LocalStorageData {
  user: {
    profile: UserProfile | null;
    isOnboarded: boolean;
    settings: UserSettings;
  };
  progress: {
    userProgress: UserProgress;
    pathwayProgress: PathwayProgress;
    achievements: Achievement[];
    bookmarks: LessonBookmark[];
    lastViewedLesson: LessonBookmark | null;
    weeklyChallenge: WeeklyChallenge | null;
    challengeCompletions: ChallengeCompletion[];
    longestStreak: number;
    streakFreezes: number;
    lastFreezeUsed: string | null;
    freezeRefreshDate: string;
  };
  habits: {
    habits: Habit[];
    completions: HabitCompletion[];
  };
  spacedRepetition: {
    unlockedCards: FlashcardWithScheduling[];
    reviewHistory: ReviewHistoryEntry[];
    lastReviewDate: string | null;
    totalReviews: number;
  };
}

/**
 * Sync status tracking
 */
export interface SyncStatus {
  lastSyncAt: Date | null;
  isSyncing: boolean;
  error: string | null;
}
