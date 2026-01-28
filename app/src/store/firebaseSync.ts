// Firebase sync utilities for Zustand stores
import { getCurrentUser, createDebouncedSync } from '@/lib/firebase';

// Global debounced sync function - initialized when user signs in
let debouncedSync: (() => void) | null = null;

/**
 * Initialize the sync function when user is authenticated
 */
export function initializeSync(): void {
  const user = getCurrentUser();
  if (user) {
    debouncedSync = createDebouncedSync(user.uid, 2000);
    console.log('[StoreSync] Initialized for user:', user.uid);
  }
}

/**
 * Clear the sync function when user signs out
 */
export function clearSync(): void {
  debouncedSync = null;
  console.log('[StoreSync] Cleared');
}

/**
 * Trigger a sync to Firestore
 * This is debounced to avoid too many writes
 */
export function triggerSync(): void {
  if (debouncedSync) {
    debouncedSync();
  }
}

/**
 * Check if sync is available (user is authenticated)
 */
export function isSyncAvailable(): boolean {
  return debouncedSync !== null;
}

/**
 * Zustand middleware to auto-sync to Firebase on state changes
 * Usage: create(firebase(subscribeWithSelector((set, get) => ({ ... }))))
 */
export function withFirebaseSync<T extends object>(
  config: (
    set: (partial: Partial<T> | ((state: T) => Partial<T>)) => void,
    get: () => T,
    api: unknown
  ) => T
) {
  return (
    set: (partial: Partial<T> | ((state: T) => Partial<T>)) => void,
    get: () => T,
    api: unknown
  ): T => {
    const wrappedSet = (partial: Partial<T> | ((state: T) => Partial<T>)) => {
      set(partial);
      // Trigger sync after state update
      triggerSync();
    };

    return config(wrappedSet, get, api);
  };
}
