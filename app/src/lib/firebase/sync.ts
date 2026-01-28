// Sync logic between localStorage and Firestore
import { getUserDocument, createUserDocument, syncAllToFirestore } from './firestore';
import type { FirebaseAuthUser, LocalStorageData, FirestoreUserDocument } from './types';

// Storage keys for all Zustand stores
const STORAGE_KEYS = {
  user: 'gyanmarg-user',
  progress: 'gyanmarg-progress',
  habits: 'gyanmarg-habits',
  spacedRepetition: 'gyanmarg-spaced-repetition-v3',
};

// Default values for stores
const defaultUserData = {
  profile: null,
  isOnboarded: false,
  settings: {
    theme: 'dark' as const,
    notifications: true,
    soundEnabled: true,
    dailyReminder: null,
  },
};

const defaultProgressData = {
  userProgress: {
    xp: 0,
    level: 1,
    habitsCompleted: 0,
    deepWorkMinutes: 0,
    lessonsCompleted: [] as string[],
    achievements: [] as string[],
    currentStreak: 0,
    lastActivityDate: new Date().toISOString().split('T')[0],
  },
  pathwayProgress: {
    completedLessons: [] as string[],
    currentLesson: null,
    totalXP: 0,
    streakDays: 0,
    lastActivity: new Date().toISOString(),
  },
  achievements: [],
  bookmarks: [],
  lastViewedLesson: null,
  weeklyChallenge: null,
  challengeCompletions: [],
  longestStreak: 0,
  streakFreezes: 1,
  lastFreezeUsed: null,
  freezeRefreshDate: new Date().toISOString().split('T')[0],
};

const defaultHabitsData = {
  habits: [],
  completions: [],
};

const defaultSpacedRepetitionData = {
  unlockedCards: [],
  reviewHistory: [],
  lastReviewDate: null,
  totalReviews: 0,
};

/**
 * Get data from localStorage stores
 */
export function getLocalStorageData(): LocalStorageData {
  const parseStore = <T>(key: string, defaultValue: T): T => {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return defaultValue;
      const parsed = JSON.parse(raw);
      // Zustand persist wraps data in { state: ... }
      return parsed.state || defaultValue;
    } catch (error) {
      console.error(`[Sync] Error parsing ${key}:`, error);
      return defaultValue;
    }
  };

  return {
    user: parseStore(STORAGE_KEYS.user, defaultUserData),
    progress: parseStore(STORAGE_KEYS.progress, defaultProgressData),
    habits: parseStore(STORAGE_KEYS.habits, defaultHabitsData),
    spacedRepetition: parseStore(STORAGE_KEYS.spacedRepetition, defaultSpacedRepetitionData),
  };
}

/**
 * Check if localStorage has meaningful data (user has started using the app)
 */
export function hasLocalStorageData(): boolean {
  const data = getLocalStorageData();
  return data.user.isOnboarded;
}

/**
 * Hydrate Zustand stores from Firestore data
 * This writes directly to localStorage which triggers Zustand's persist middleware
 */
export function hydrateFromFirestore(firestoreData: FirestoreUserDocument): void {
  try {
    // User store
    localStorage.setItem(STORAGE_KEYS.user, JSON.stringify({
      state: firestoreData.user,
      version: 0,
    }));

    // Progress store
    localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify({
      state: {
        ...firestoreData.progress,
        pendingLevelUp: null, // UI-only, never synced
      },
      version: 0,
    }));

    // Habits store
    localStorage.setItem(STORAGE_KEYS.habits, JSON.stringify({
      state: firestoreData.habits,
      version: 0,
    }));

    // Spaced repetition store
    localStorage.setItem(STORAGE_KEYS.spacedRepetition, JSON.stringify({
      state: firestoreData.spacedRepetition,
      version: 0,
    }));

    console.log('[Sync] Stores hydrated from Firestore');
  } catch (error) {
    console.error('[Sync] Error hydrating stores:', error);
    throw error;
  }
}

/**
 * Merge localStorage data with Firestore data
 * Strategy: localStorage wins (more recent local changes take precedence)
 */
function mergeData(local: LocalStorageData, remote: FirestoreUserDocument): LocalStorageData {
  // For now, we use a simple "local wins" strategy
  // In the future, this could be more sophisticated with timestamps per field
  return {
    user: local.user.isOnboarded ? local.user : remote.user,
    progress: {
      ...remote.progress,
      ...local.progress,
      // Merge completed lessons (union)
      userProgress: {
        ...remote.progress.userProgress,
        ...local.progress.userProgress,
        lessonsCompleted: Array.from(new Set([
          ...remote.progress.userProgress.lessonsCompleted,
          ...local.progress.userProgress.lessonsCompleted,
        ])),
        achievements: Array.from(new Set([
          ...remote.progress.userProgress.achievements,
          ...local.progress.userProgress.achievements,
        ])),
        // Take the higher XP/level
        xp: Math.max(remote.progress.userProgress.xp, local.progress.userProgress.xp),
        level: Math.max(remote.progress.userProgress.level, local.progress.userProgress.level),
        currentStreak: Math.max(remote.progress.userProgress.currentStreak, local.progress.userProgress.currentStreak),
      },
      pathwayProgress: {
        ...remote.progress.pathwayProgress,
        ...local.progress.pathwayProgress,
        completedLessons: Array.from(new Set([
          ...remote.progress.pathwayProgress.completedLessons,
          ...local.progress.pathwayProgress.completedLessons,
        ])),
        totalXP: Math.max(remote.progress.pathwayProgress.totalXP, local.progress.pathwayProgress.totalXP),
      },
      // Merge challenge completions
      challengeCompletions: [
        ...remote.progress.challengeCompletions,
        ...local.progress.challengeCompletions.filter(
          lc => !remote.progress.challengeCompletions.some(rc => rc.challengeId === lc.challengeId)
        ),
      ],
      // Take highest streak values
      longestStreak: Math.max(remote.progress.longestStreak, local.progress.longestStreak),
    },
    habits: {
      // Merge habits by ID
      habits: mergeById(remote.habits.habits, local.habits.habits),
      completions: mergeHabitCompletions(remote.habits.completions, local.habits.completions),
    },
    spacedRepetition: {
      // Merge unlocked cards by ID, prefer local scheduling data
      unlockedCards: mergeById(remote.spacedRepetition.unlockedCards, local.spacedRepetition.unlockedCards),
      reviewHistory: [
        ...remote.spacedRepetition.reviewHistory,
        ...local.spacedRepetition.reviewHistory,
      ].slice(-1000), // Keep last 1000 entries
      lastReviewDate: local.spacedRepetition.lastReviewDate || remote.spacedRepetition.lastReviewDate,
      totalReviews: Math.max(remote.spacedRepetition.totalReviews, local.spacedRepetition.totalReviews),
    },
  };
}

/**
 * Merge arrays of items by ID, preferring local items
 */
function mergeById<T extends { id: string }>(remote: T[], local: T[]): T[] {
  const localMap = new Map(local.map(item => [item.id, item]));
  const merged = [...local];

  for (const remoteItem of remote) {
    if (!localMap.has(remoteItem.id)) {
      merged.push(remoteItem);
    }
  }

  return merged;
}

/**
 * Merge habit completions, keeping unique entries
 */
function mergeHabitCompletions(
  remote: { habitId: string; date: string; completed: boolean }[],
  local: { habitId: string; date: string; completed: boolean }[]
): { habitId: string; date: string; completed: boolean }[] {
  const key = (c: { habitId: string; date: string }) => `${c.habitId}-${c.date}`;
  const localMap = new Map(local.map(c => [key(c), c]));

  for (const remoteItem of remote) {
    const k = key(remoteItem);
    if (!localMap.has(k)) {
      localMap.set(k, remoteItem);
    }
  }

  return Array.from(localMap.values());
}

/**
 * Main sync function called when user signs in
 *
 * Flow:
 * 1. Check if Firestore document exists for this user
 * 2. If NO document exists (new Firebase user):
 *    - Check if localStorage has data (isOnboarded)
 *    - If yes: Upload localStorage to Firestore
 *    - If no: User needs to go through onboarding
 * 3. If document EXISTS (returning user):
 *    - Check if localStorage has data
 *    - If yes: Merge localStorage and Firestore (local wins on conflicts)
 *    - If no: Hydrate localStorage from Firestore
 */
export async function syncOnLogin(authUser: FirebaseAuthUser): Promise<{
  needsOnboarding: boolean;
  merged: boolean;
  error: string | null;
}> {
  try {
    const firestoreData = await getUserDocument(authUser.uid);
    const localData = getLocalStorageData();
    const hasLocal = hasLocalStorageData();

    if (!firestoreData) {
      // New Firebase user - no Firestore document
      console.log('[Sync] New Firebase user');

      if (hasLocal) {
        // Has localStorage data - upload to Firestore
        console.log('[Sync] Uploading localStorage to Firestore');
        await createUserDocument(
          authUser.uid,
          authUser.email || '',
          authUser.displayName || '',
          authUser.photoURL,
          localData
        );
        return { needsOnboarding: false, merged: false, error: null };
      } else {
        // No localStorage data - user needs onboarding
        console.log('[Sync] User needs onboarding');
        return { needsOnboarding: true, merged: false, error: null };
      }
    } else {
      // Returning user - Firestore document exists
      console.log('[Sync] Returning Firebase user');

      if (hasLocal) {
        // Has localStorage data - merge
        console.log('[Sync] Merging localStorage with Firestore');
        const mergedData = mergeData(localData, firestoreData);

        // Update both localStorage and Firestore with merged data
        hydrateFromFirestore({
          ...firestoreData,
          user: mergedData.user,
          progress: mergedData.progress,
          habits: mergedData.habits,
          spacedRepetition: mergedData.spacedRepetition,
        });

        await syncAllToFirestore(authUser.uid, mergedData);
        return { needsOnboarding: false, merged: true, error: null };
      } else {
        // No localStorage data - hydrate from Firestore
        console.log('[Sync] Hydrating localStorage from Firestore');
        hydrateFromFirestore(firestoreData);
        return { needsOnboarding: !firestoreData.user.isOnboarded, merged: false, error: null };
      }
    }
  } catch (error) {
    console.error('[Sync] Error during sync:', error);
    return {
      needsOnboarding: !hasLocalStorageData(),
      merged: false,
      error: error instanceof Error ? error.message : 'Sync failed',
    };
  }
}

/**
 * Sync current localStorage state to Firestore
 * Call this after any significant state change
 */
export async function syncToFirestore(uid: string): Promise<void> {
  const data = getLocalStorageData();
  await syncAllToFirestore(uid, data);
}

/**
 * Create a debounced sync function to avoid too many Firestore writes
 */
export function createDebouncedSync(uid: string, delayMs = 2000): () => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      syncToFirestore(uid).catch(error => {
        console.error('[Sync] Debounced sync error:', error);
      });
    }, delayMs);
  };
}
