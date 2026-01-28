// Firebase module barrel exports
export {
  initializeFirebase,
  isFirebaseConfigured,
  getFirebaseAuth,
  getFirestoreDb,
  getFirebaseApp,
} from './config';

export {
  signInWithGoogle,
  signOut,
  getCurrentUser,
  onAuthChange,
  isSignedIn,
  isAuthAvailable,
} from './auth';

export {
  getUserDocument,
  userDocumentExists,
  createUserDocument,
  updateUserDocument,
  syncAllToFirestore,
} from './firestore';

export {
  getLocalStorageData,
  hasLocalStorageData,
  hydrateFromFirestore,
  syncOnLogin,
  syncToFirestore,
  createDebouncedSync,
} from './sync';

export type {
  FirebaseAuthUser,
  AuthState,
  FirestoreUserDocument,
  LocalStorageData,
  SyncStatus,
} from './types';
