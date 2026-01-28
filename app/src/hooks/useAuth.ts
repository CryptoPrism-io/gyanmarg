// Auth hook - convenience wrapper around AuthContext
import { useAuthContext } from '@/contexts/AuthContext';

/**
 * Hook to access authentication state and actions
 *
 * Usage:
 * ```tsx
 * const { user, signIn, signOut, isLoading } = useAuth();
 *
 * if (isLoading) return <Loading />;
 *
 * if (!user) {
 *   return <button onClick={signIn}>Sign in with Google</button>;
 * }
 *
 * return <button onClick={signOut}>Sign out</button>;
 * ```
 */
export function useAuth() {
  return useAuthContext();
}

export default useAuth;
