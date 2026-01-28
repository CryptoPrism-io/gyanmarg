// Firebase configuration and initialization
import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';

/**
 * Firebase configuration from environment variables
 * Create a .env.local file with these values from your Firebase console:
 *
 * VITE_FIREBASE_API_KEY=xxx
 * VITE_FIREBASE_AUTH_DOMAIN=xxx.firebaseapp.com
 * VITE_FIREBASE_PROJECT_ID=xxx
 * VITE_FIREBASE_STORAGE_BUCKET=xxx.appspot.com
 * VITE_FIREBASE_MESSAGING_SENDER_ID=xxx
 * VITE_FIREBASE_APP_ID=xxx
 */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

/**
 * Check if Firebase is properly configured
 */
export function isFirebaseConfigured(): boolean {
  return Boolean(
    firebaseConfig.apiKey &&
    firebaseConfig.authDomain &&
    firebaseConfig.projectId &&
    firebaseConfig.appId
  );
}

// Initialize Firebase app (singleton pattern)
let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;

/**
 * Initialize Firebase services
 * Returns null values if Firebase is not configured
 */
export function initializeFirebase(): { app: FirebaseApp | null; auth: Auth | null; db: Firestore | null } {
  if (!isFirebaseConfigured()) {
    console.warn('[Firebase] Not configured. Set VITE_FIREBASE_* environment variables.');
    return { app: null, auth: null, db: null };
  }

  // Check if already initialized
  if (getApps().length > 0) {
    app = getApps()[0];
  } else {
    app = initializeApp(firebaseConfig);
  }

  auth = getAuth(app);
  db = getFirestore(app);

  return { app, auth, db };
}

/**
 * Get Firebase Auth instance
 */
export function getFirebaseAuth(): Auth | null {
  if (!auth && isFirebaseConfigured()) {
    initializeFirebase();
  }
  return auth;
}

/**
 * Get Firestore instance
 */
export function getFirestoreDb(): Firestore | null {
  if (!db && isFirebaseConfigured()) {
    initializeFirebase();
  }
  return db;
}

/**
 * Get Firebase App instance
 */
export function getFirebaseApp(): FirebaseApp | null {
  if (!app && isFirebaseConfigured()) {
    initializeFirebase();
  }
  return app;
}

// Initialize on module load if configured
if (isFirebaseConfigured()) {
  initializeFirebase();
}
