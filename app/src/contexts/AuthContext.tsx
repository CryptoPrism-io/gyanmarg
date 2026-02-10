// Authentication Context Provider
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
  type ReactNode,
} from 'react';
import {
  signInWithGoogle,
  signOut as firebaseSignOut,
  onAuthChange,
  isFirebaseConfigured,
  syncOnLogin,
  syncToFirestore,
  createDebouncedSync,
  hasLocalStorageData,
  type FirebaseAuthUser,
} from '@/lib/firebase';
import { initializeSync, clearSync } from '@/store/firebaseSync';

// Sync interval for periodic backup — purely a crash safety net
// Real syncs happen via: debounce (on store change), visibilitychange (tab switch), beforeunload (close)
// Set to 30 minutes to avoid disrupting active learning sessions
const PERIODIC_SYNC_INTERVAL = 30 * 60 * 1000; // 30 minutes

interface AuthContextValue {
  // Auth state
  user: FirebaseAuthUser | null;
  isLoading: boolean;
  isConfigured: boolean;

  // Sync state
  isSyncing: boolean;
  syncError: string | null;
  lastSyncAt: Date | null;

  // Actions
  signIn: () => Promise<{ success: boolean; needsOnboarding: boolean; error: string | null }>;
  signOut: () => Promise<void>;
  syncNow: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  // Auth state
  const [user, setUser] = useState<FirebaseAuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const isConfigured = isFirebaseConfigured();

  // Sync state
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncError, setSyncError] = useState<string | null>(null);
  const [lastSyncAt, setLastSyncAt] = useState<Date | null>(null);

  // Debounced sync function ref
  const debouncedSyncRef = useRef<(() => void) | null>(null);

  // Track if we've already synced on this session (to avoid duplicate syncs)
  // IMPORTANT: Store in localStorage instead of ref so it persists across page reloads
  const getHasAutoSynced = useCallback(() => {
    return localStorage.getItem('gyanmarg-has-auto-synced') === 'true';
  }, []);

  const setHasAutoSynced = useCallback((value: boolean) => {
    if (value) {
      localStorage.setItem('gyanmarg-has-auto-synced', 'true');
    } else {
      localStorage.removeItem('gyanmarg-has-auto-synced');
    }
  }, []);

  // Periodic sync interval ref
  const periodicSyncRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Immediate sync function (no debounce) for critical moments
  const immediateSync = useCallback(async (uid: string) => {
    try {
      await syncToFirestore(uid);
      console.log('[Sync] Immediate sync completed');
    } catch (error) {
      console.error('[Sync] Immediate sync failed:', error);
    }
  }, []);

  // Listen to auth state changes
  useEffect(() => {
    if (!isConfigured) {
      setIsLoading(false);
      return;
    }

    const unsubscribe = onAuthChange(async (authUser) => {
      setUser(authUser);
      setIsLoading(false);

      // Set up debounced sync when user signs in
      if (authUser) {
        debouncedSyncRef.current = createDebouncedSync(authUser.uid);
        // Initialize global sync for stores
        initializeSync();

        // AUTO-SYNC FOR RETURNING USERS ON NEW DEVICES
        // If user is already authenticated but localStorage is empty/stale,
        // automatically pull data from Firestore
        if (!getHasAutoSynced() && !hasLocalStorageData()) {
          console.log('[Sync] Detected returning user on new device, auto-syncing...');
          setHasAutoSynced(true); // Persist to localStorage to prevent reload loops
          setIsSyncing(true);

          try {
            const syncResult = await syncOnLogin(authUser);
            if (syncResult.error) {
              setSyncError(syncResult.error);
            } else {
              setLastSyncAt(new Date());
            }

            // Reload to apply hydrated data to Zustand stores
            // This reload is now safe because hasAutoSynced persists in localStorage
            if (syncResult.hydrated || syncResult.merged) {
              console.log('[Sync] Reloading to apply synced data...');
              window.location.reload();
            }
          } catch (error) {
            console.error('[Sync] Auto-sync failed:', error);
            setHasAutoSynced(false); // Reset flag if sync failed
          } finally {
            setIsSyncing(false);
          }
        }
      } else {
        debouncedSyncRef.current = null;
        // Clear global sync
        clearSync();
        setHasAutoSynced(false);
      }
    });

    return unsubscribe;
  }, [isConfigured]);

  // ROBUST SYNC: visibilitychange, beforeunload, and periodic sync
  useEffect(() => {
    if (!user) return;

    const uid = user.uid;

    // Sync when user switches tabs or minimizes (visibilitychange)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        console.log('[Sync] Page hidden, syncing...');
        immediateSync(uid);
      }
    };

    // Sync before page unload (closing tab, navigating away)
    const handleBeforeUnload = () => {
      console.log('[Sync] Page unloading, syncing...');
      // Use sendBeacon for more reliable sync on page close
      // Fall back to immediate sync
      immediateSync(uid);
    };

    // Periodic sync as safety net for crashes — skip if user is actively learning
    periodicSyncRef.current = setInterval(() => {
      if (document.visibilityState !== 'visible') return;

      // Skip sync during active lessons/reviews to avoid disrupting user flow
      const isInLesson = !!document.querySelector('[class*="z-[9999]"]');
      const isInReview = window.location.pathname.includes('/review');
      if (isInLesson || isInReview) return;

      immediateSync(uid);
    }, PERIODIC_SYNC_INTERVAL);

    window.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('pagehide', handleBeforeUnload);

    return () => {
      window.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('pagehide', handleBeforeUnload);

      if (periodicSyncRef.current) {
        clearInterval(periodicSyncRef.current);
        periodicSyncRef.current = null;
      }
    };
  }, [user, immediateSync]);

  // Listen to localStorage changes to trigger sync
  useEffect(() => {
    if (!user || !debouncedSyncRef.current) return;

    const handleStorage = (event: StorageEvent) => {
      // Only sync for gyanmarg store changes
      // Ignore the auto-sync flag itself to prevent feedback loops
      if (
        event.key?.startsWith('gyanmarg-') &&
        event.key !== 'gyanmarg-has-auto-synced' &&
        debouncedSyncRef.current
      ) {
        debouncedSyncRef.current();
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [user]);

  // Sign in with Google
  const signIn = useCallback(async (): Promise<{
    success: boolean;
    needsOnboarding: boolean;
    error: string | null;
  }> => {
    if (!isConfigured) {
      return { success: false, needsOnboarding: true, error: 'Firebase not configured' };
    }

    setIsSyncing(true);
    setSyncError(null);

    try {
      const authUser = await signInWithGoogle();

      if (!authUser) {
        // User cancelled sign-in
        return { success: false, needsOnboarding: false, error: null };
      }

      // Sync data after sign-in
      const syncResult = await syncOnLogin(authUser);

      if (syncResult.error) {
        setSyncError(syncResult.error);
      } else {
        setLastSyncAt(new Date());
      }

      // If merged or hydrated from cloud, reload to apply data to Zustand stores
      if (syncResult.merged || syncResult.hydrated) {
        window.location.reload();
      }

      return {
        success: true,
        needsOnboarding: syncResult.needsOnboarding,
        error: syncResult.error,
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Sign in failed';
      setSyncError(errorMessage);
      return { success: false, needsOnboarding: false, error: errorMessage };
    } finally {
      setIsSyncing(false);
    }
  }, [isConfigured]);

  // Sign out
  const signOut = useCallback(async () => {
    try {
      await firebaseSignOut();
      // Note: We keep localStorage so user can continue anonymously
      setLastSyncAt(null);
      setSyncError(null);
    } catch (error) {
      console.error('[Auth] Sign out error:', error);
    }
  }, []);

  // Manual sync
  const syncNow = useCallback(async () => {
    if (!user) return;

    setIsSyncing(true);
    setSyncError(null);

    try {
      await syncToFirestore(user.uid, {
        email: user.email || '',
        displayName: user.displayName || '',
        photoURL: user.photoURL,
      });
      setLastSyncAt(new Date());
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Sync failed';
      setSyncError(errorMessage);
    } finally {
      setIsSyncing(false);
    }
  }, [user]);

  const value: AuthContextValue = {
    user,
    isLoading,
    isConfigured,
    isSyncing,
    syncError,
    lastSyncAt,
    signIn,
    signOut,
    syncNow,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/**
 * Hook to access auth context
 */
export function useAuthContext(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
}

export default AuthProvider;
