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
  // Strategy: "best of both" — take max for numbers, union for arrays, remote wins for non-empty fields local doesn't have
  const localXP = local.progress.userProgress.xp || 0;
  const remoteXP = remote.progress.userProgress.xp || 0;
  const localLevel = local.progress.userProgress.level || 1;
  const remoteLevel = remote.progress.userProgress.level || 1;

  return {
    user: local.user.isOnboarded ? local.user : remote.user,
    progress: {
      // Remote as base, then overlay local non-default fields
      ...remote.progress,
      userProgress: {
        ...remote.progress.userProgress,
        // Union merge for arrays
        lessonsCompleted: Array.from(new Set([
          ...remote.progress.userProgress.lessonsCompleted,
          ...local.progress.userProgress.lessonsCompleted,
        ])),
        achievements: Array.from(new Set([
          ...remote.progress.userProgress.achievements,
          ...local.progress.userProgress.achievements,
        ])),
        // Always take the higher value
        xp: Math.max(remoteXP, localXP),
        level: Math.max(remoteLevel, localLevel),
        habitsCompleted: Math.max(remote.progress.userProgress.habitsCompleted || 0, local.progress.userProgress.habitsCompleted || 0),
        deepWorkMinutes: Math.max(remote.progress.userProgress.deepWorkMinutes || 0, local.progress.userProgress.deepWorkMinutes || 0),
        currentStreak: Math.max(remote.progress.userProgress.currentStreak || 0, local.progress.userProgress.currentStreak || 0),
        // Keep whichever lastActivityDate is more recent
        lastActivityDate: (local.progress.userProgress.lastActivityDate || '') > (remote.progress.userProgress.lastActivityDate || '')
          ? local.progress.userProgress.lastActivityDate
          : remote.progress.userProgress.lastActivityDate,
      },
      pathwayProgress: {
        ...remote.progress.pathwayProgress,
        completedLessons: Array.from(new Set([
          ...remote.progress.pathwayProgress.completedLessons,
          ...local.progress.pathwayProgress.completedLessons,
        ])),
        totalXP: Math.max(remote.progress.pathwayProgress.totalXP || 0, local.progress.pathwayProgress.totalXP || 0),
        streakDays: Math.max(remote.progress.pathwayProgress.streakDays || 0, local.progress.pathwayProgress.streakDays || 0),
        currentLesson: local.progress.pathwayProgress.currentLesson || remote.progress.pathwayProgress.currentLesson,
      },
      // Merge bookmarks (union by lessonId)
      bookmarks: (() => {
        const localBookmarks = local.progress.bookmarks || [];
        const remoteBookmarks = remote.progress.bookmarks || [];
        const seen = new Set(localBookmarks.map(b => b.lessonId));
        return [...localBookmarks, ...remoteBookmarks.filter(b => !seen.has(b.lessonId))];
      })(),
      // Merge challenge completions
      challengeCompletions: [
        ...remote.progress.challengeCompletions,
        ...(local.progress.challengeCompletions || []).filter(
          lc => !remote.progress.challengeCompletions.some(rc => rc.challengeId === lc.challengeId)
        ),
      ],
      // Take highest streak values
      longestStreak: Math.max(remote.progress.longestStreak || 0, local.progress.longestStreak || 0),
      // Keep weekly challenge from whichever side has one
      weeklyChallenge: local.progress.weeklyChallenge || remote.progress.weeklyChallenge,
      lastViewedLesson: local.progress.lastViewedLesson || remote.progress.lastViewedLesson,
      streakFreezes: Math.max(remote.progress.streakFreezes || 0, local.progress.streakFreezes || 0),
      lastFreezeUsed: local.progress.lastFreezeUsed || remote.progress.lastFreezeUsed,
      freezeRefreshDate: local.progress.freezeRefreshDate || remote.progress.freezeRefreshDate,
    },
    habits: {
      habits: mergeById(remote.habits.habits, local.habits.habits),
      completions: mergeHabitCompletions(remote.habits.completions, local.habits.completions),
    },
    spacedRepetition: {
      unlockedCards: mergeById(remote.spacedRepetition.unlockedCards, local.spacedRepetition.unlockedCards),
      reviewHistory: [
        ...remote.spacedRepetition.reviewHistory,
        ...local.spacedRepetition.reviewHistory,
      ].slice(-1000),
      lastReviewDate: local.spacedRepetition.lastReviewDate || remote.spacedRepetition.lastReviewDate,
      totalReviews: Math.max(remote.spacedRepetition.totalReviews || 0, local.spacedRepetition.totalReviews || 0),
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
  hydrated: boolean;
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
        return { needsOnboarding: false, merged: false, hydrated: false, error: null };
      } else {
        // No localStorage data - user needs onboarding
        console.log('[Sync] User needs onboarding');
        return { needsOnboarding: true, merged: false, hydrated: false, error: null };
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
        return { needsOnboarding: false, merged: true, hydrated: false, error: null };
      } else {
        // No localStorage data - hydrate from Firestore
        console.log('[Sync] Hydrating localStorage from Firestore');
        hydrateFromFirestore(firestoreData);
        return { needsOnboarding: !firestoreData.user.isOnboarded, merged: false, hydrated: true, error: null };
      }
    }
  } catch (error) {
    console.error('[Sync] Error during sync:', error);
    return {
      needsOnboarding: !hasLocalStorageData(),
      merged: false,
      hydrated: false,
      error: error instanceof Error ? error.message : 'Sync failed',
    };
  }
}

/**
 * Sync current localStorage state to Firestore
 * Call this after any significant state change
 */
export async function syncToFirestore(
  uid: string,
  userInfo?: { email: string; displayName: string; photoURL: string | null }
): Promise<void> {
  const data = getLocalStorageData();
  await syncAllToFirestore(uid, data, userInfo);
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
