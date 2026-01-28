// Firebase Authentication functions
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import { getFirebaseAuth, isFirebaseConfigured } from './config';
import type { FirebaseAuthUser } from './types';

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();

/**
 * Convert Firebase User to our FirebaseAuthUser type
 */
function mapFirebaseUser(user: User): FirebaseAuthUser {
  return {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
  };
}

/**
 * Sign in with Google popup
 * @returns The signed-in user or null if failed/cancelled
 */
export async function signInWithGoogle(): Promise<FirebaseAuthUser | null> {
  const auth = getFirebaseAuth();
  if (!auth) {
    console.error('[Auth] Firebase Auth not initialized');
    return null;
  }

  try {
    const result = await signInWithPopup(auth, googleProvider);
    return mapFirebaseUser(result.user);
  } catch (error: unknown) {
    // User cancelled or error occurred
    const errorCode = (error as { code?: string })?.code;
    if (errorCode === 'auth/popup-closed-by-user' || errorCode === 'auth/cancelled-popup-request') {
      console.log('[Auth] Sign-in popup closed by user');
      return null;
    }
    console.error('[Auth] Sign-in error:', error);
    throw error;
  }
}

/**
 * Sign out the current user
 */
export async function signOut(): Promise<void> {
  const auth = getFirebaseAuth();
  if (!auth) {
    console.error('[Auth] Firebase Auth not initialized');
    return;
  }

  try {
    await firebaseSignOut(auth);
  } catch (error) {
    console.error('[Auth] Sign-out error:', error);
    throw error;
  }
}

/**
 * Get the current authenticated user (synchronous)
 * @returns The current user or null if not authenticated
 */
export function getCurrentUser(): FirebaseAuthUser | null {
  const auth = getFirebaseAuth();
  if (!auth?.currentUser) {
    return null;
  }
  return mapFirebaseUser(auth.currentUser);
}

/**
 * Subscribe to auth state changes
 * @param callback Function to call when auth state changes
 * @returns Unsubscribe function
 */
export function onAuthChange(
  callback: (user: FirebaseAuthUser | null) => void
): () => void {
  const auth = getFirebaseAuth();
  if (!auth) {
    // Firebase not configured - call callback with null immediately
    callback(null);
    return () => {};
  }

  return onAuthStateChanged(auth, (user) => {
    callback(user ? mapFirebaseUser(user) : null);
  });
}

/**
 * Check if user is currently signed in
 */
export function isSignedIn(): boolean {
  const auth = getFirebaseAuth();
  return Boolean(auth?.currentUser);
}

/**
 * Check if Firebase Auth is available
 */
export function isAuthAvailable(): boolean {
  return isFirebaseConfigured() && Boolean(getFirebaseAuth());
}
