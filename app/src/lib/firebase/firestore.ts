// Firestore CRUD operations
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { getFirestoreDb } from './config';
import type { FirestoreUserDocument, LocalStorageData } from './types';

const USERS_COLLECTION = 'users';

/**
 * Get a user's document from Firestore
 * @param uid User's Firebase UID
 * @returns The user document or null if not found
 */
export async function getUserDocument(uid: string): Promise<FirestoreUserDocument | null> {
  const db = getFirestoreDb();
  if (!db) {
    console.error('[Firestore] Database not initialized');
    return null;
  }

  try {
    const docRef = doc(db, USERS_COLLECTION, uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as FirestoreUserDocument;
    }
    return null;
  } catch (error) {
    console.error('[Firestore] Error getting user document:', error);
    throw error;
  }
}

/**
 * Check if a user document exists
 * @param uid User's Firebase UID
 */
export async function userDocumentExists(uid: string): Promise<boolean> {
  const db = getFirestoreDb();
  if (!db) return false;

  try {
    const docRef = doc(db, USERS_COLLECTION, uid);
    const docSnap = await getDoc(docRef);
    return docSnap.exists();
  } catch (error) {
    console.error('[Firestore] Error checking user document:', error);
    return false;
  }
}

/**
 * Create a new user document
 * @param uid User's Firebase UID
 * @param email User's email
 * @param displayName User's display name
 * @param photoURL User's photo URL
 * @param data Initial data from localStorage
 */
export async function createUserDocument(
  uid: string,
  email: string,
  displayName: string,
  photoURL: string | null,
  data: LocalStorageData
): Promise<void> {
  const db = getFirestoreDb();
  if (!db) {
    console.error('[Firestore] Database not initialized');
    throw new Error('Firestore not initialized');
  }

  const now = serverTimestamp();

  const userDoc: Omit<FirestoreUserDocument, 'createdAt' | 'lastSyncAt'> & {
    createdAt: ReturnType<typeof serverTimestamp>;
    lastSyncAt: ReturnType<typeof serverTimestamp>;
  } = {
    uid,
    email,
    displayName,
    photoURL,
    createdAt: now,
    lastSyncAt: now,
    user: data.user,
    progress: data.progress,
    habits: data.habits,
    spacedRepetition: {
      ...data.spacedRepetition,
      // Limit review history to 1000 entries
      reviewHistory: data.spacedRepetition.reviewHistory.slice(-1000),
    },
  };

  try {
    const docRef = doc(db, USERS_COLLECTION, uid);
    await setDoc(docRef, userDoc);
    console.log('[Firestore] User document created');
  } catch (error) {
    console.error('[Firestore] Error creating user document:', error);
    throw error;
  }
}

/**
 * Update user document with new data
 * @param uid User's Firebase UID
 * @param data Data to update
 */
export async function updateUserDocument(
  uid: string,
  data: Partial<LocalStorageData>
): Promise<void> {
  const db = getFirestoreDb();
  if (!db) {
    console.error('[Firestore] Database not initialized');
    throw new Error('Firestore not initialized');
  }

  try {
    const docRef = doc(db, USERS_COLLECTION, uid);

    // Build update object - only include provided fields
    const updateData: Record<string, unknown> = {
      lastSyncAt: serverTimestamp(),
    };

    if (data.user !== undefined) {
      updateData.user = data.user;
    }
    if (data.progress !== undefined) {
      updateData.progress = data.progress;
    }
    if (data.habits !== undefined) {
      updateData.habits = data.habits;
    }
    if (data.spacedRepetition !== undefined) {
      updateData.spacedRepetition = {
        ...data.spacedRepetition,
        // Limit review history to 1000 entries
        reviewHistory: data.spacedRepetition.reviewHistory.slice(-1000),
      };
    }

    await updateDoc(docRef, updateData);
    console.log('[Firestore] User document updated');
  } catch (error) {
    console.error('[Firestore] Error updating user document:', error);
    throw error;
  }
}

/**
 * Sync all stores to Firestore
 * @param uid User's Firebase UID
 * @param data Complete data from all stores
 */
export async function syncAllToFirestore(
  uid: string,
  data: LocalStorageData
): Promise<void> {
  const db = getFirestoreDb();
  if (!db) {
    console.error('[Firestore] Database not initialized');
    return;
  }

  try {
    const docRef = doc(db, USERS_COLLECTION, uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // Update existing document
      await updateDoc(docRef, {
        lastSyncAt: serverTimestamp(),
        user: data.user,
        progress: data.progress,
        habits: data.habits,
        spacedRepetition: {
          ...data.spacedRepetition,
          reviewHistory: data.spacedRepetition.reviewHistory.slice(-1000),
        },
      });
    } else {
      // This shouldn't happen if createUserDocument was called first
      console.warn('[Firestore] Document does not exist, skipping sync');
    }
  } catch (error) {
    console.error('[Firestore] Error syncing to Firestore:', error);
    // Don't throw - sync failures shouldn't break the app
  }
}

/**
 * Convert Firestore Timestamp to ISO string
 */
export function timestampToISO(timestamp: Timestamp | null | undefined): string | null {
  if (!timestamp) return null;
  return timestamp.toDate().toISOString();
}
