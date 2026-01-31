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
  type FirebaseAuthUser,
} from '@/lib/firebase';
import { initializeSync, clearSync } from '@/store/firebaseSync';

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
      } else {
        debouncedSyncRef.current = null;
        // Clear global sync
        clearSync();
      }
    });

    return unsubscribe;
  }, [isConfigured]);

  // Listen to localStorage changes to trigger sync
  useEffect(() => {
    if (!user || !debouncedSyncRef.current) return;

    const handleStorage = (event: StorageEvent) => {
      // Only sync for gyanmarg store changes
      if (event.key?.startsWith('gyanmarg-') && debouncedSyncRef.current) {
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

      // If merged, reload to apply hydrated data
      if (syncResult.merged) {
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
