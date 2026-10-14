// User-data persistence.
//
// Data now lives in DynamoDB behind the Polymind API (infra/polymind-api), not in
// Firestore. Sign-in is still Firebase Auth: every request carries the signed-in
// user's Firebase ID token, and the API only ever reads/writes that user's record.
// Function names are unchanged so sync.ts and the UI don't need to know.
import { getFirebaseAuth } from './config';
import type { FirestoreUserDocument, LocalStorageData } from './types';

const API_URL = (import.meta.env.VITE_POLYMIND_API_URL || '').replace(/\/$/, '');

// Limit review history to 1000 entries (the API enforces the same cap)
const MAX_REVIEW_HISTORY = 1000;

class ApiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

async function apiFetch(path: string, init: RequestInit = {}): Promise<Response> {
  if (!API_URL) {
    throw new Error('Sync API not configured. Set VITE_POLYMIND_API_URL.');
  }
  const user = getFirebaseAuth()?.currentUser;
  if (!user) {
    throw new Error('Not signed in');
  }
  const token = await user.getIdToken();
  const res = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: {
      ...(init.body ? { 'content-type': 'application/json' } : {}),
      authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok && res.status !== 404) {
    throw new ApiError(res.status, `Sync API ${init.method || 'GET'} ${path} failed (${res.status})`);
  }
  return res;
}

function syncedFields(data: Partial<LocalStorageData>) {
  const fields: Record<string, unknown> = {};
  if (data.user !== undefined) fields.user = data.user;
  if (data.progress !== undefined) fields.progress = data.progress;
  if (data.habits !== undefined) fields.habits = data.habits;
  if (data.spacedRepetition !== undefined) {
    fields.spacedRepetition = {
      ...data.spacedRepetition,
      reviewHistory: data.spacedRepetition.reviewHistory.slice(-MAX_REVIEW_HISTORY),
    };
  }
  return fields;
}

/**
 * Get the signed-in user's document
 * @param uid User's Firebase UID (must be the signed-in user)
 * @returns The user document or null if not found
 */
export async function getUserDocument(uid: string): Promise<FirestoreUserDocument | null> {
  try {
    const res = await apiFetch('/users/me');
    if (res.status === 404) return null;
    const doc = (await res.json()) as FirestoreUserDocument;
    if (doc.uid !== uid) {
      throw new Error('Signed-in user does not match requested uid');
    }
    return doc;
  } catch (error) {
    console.error('[Sync] Error getting user document:', error);
    throw error;
  }
}

/**
 * Check if the signed-in user's document exists
 * @param uid User's Firebase UID
 */
export async function userDocumentExists(uid: string): Promise<boolean> {
  try {
    return (await getUserDocument(uid)) !== null;
  } catch (error) {
    console.error('[Sync] Error checking user document:', error);
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
  _uid: string,
  email: string,
  displayName: string,
  photoURL: string | null,
  data: LocalStorageData
): Promise<void> {
  try {
    const res = await apiFetch('/users/me', {
      method: 'POST',
      body: JSON.stringify({ email, displayName, photoURL, ...syncedFields(data) }),
    });
    if (res.status === 404) throw new ApiError(404, 'Sync API route not found');
    console.log('[Sync] User document created');
  } catch (error) {
    console.error('[Sync] Error creating user document:', error);
    throw error;
  }
}

/**
 * Update user document with new data
 * @param uid User's Firebase UID
 * @param data Data to update
 */
export async function updateUserDocument(
  _uid: string,
  data: Partial<LocalStorageData>
): Promise<void> {
  try {
    const res = await apiFetch('/users/me', {
      method: 'PATCH',
      body: JSON.stringify(syncedFields(data)),
    });
    if (res.status === 404) throw new ApiError(404, 'User document does not exist');
    console.log('[Sync] User document updated');
  } catch (error) {
    console.error('[Sync] Error updating user document:', error);
    throw error;
  }
}

/**
 * Sync all stores to the API
 * @param uid User's Firebase UID
 * @param data Complete data from all stores
 * @param userInfo Optional user info for creating new documents
 */
export async function syncAllToFirestore(
  uid: string,
  data: LocalStorageData,
  userInfo?: { email: string; displayName: string; photoURL: string | null }
): Promise<void> {
  console.log('[Sync] Starting sync for user:', uid);

  try {
    // Update existing document; create it if it doesn't exist yet
    const res = await apiFetch('/users/me', {
      method: 'PATCH',
      body: JSON.stringify(syncedFields(data)),
    });
    if (res.status !== 404) {
      console.log('[Sync] User document updated');
      return;
    }

    console.log('[Sync] Document does not exist, creating...');
    const created = await apiFetch('/users/me', {
      method: 'POST',
      body: JSON.stringify({
        email: userInfo?.email || '',
        displayName: userInfo?.displayName || data.user.profile?.name || 'User',
        photoURL: userInfo?.photoURL || null,
        ...syncedFields(data),
      }),
    });
    if (created.status === 404) throw new ApiError(404, 'Sync API route not found');
    console.log('[Sync] User document created');
  } catch (error) {
    // A 409 means another tab created the document first; the next sync updates it.
    if (error instanceof ApiError && error.status === 409) {
      console.warn('[Sync] Document was created concurrently; will update on next sync');
      return;
    }
    console.error('[Sync] Error syncing:', error);
    // Throw so the UI can show the error
    throw error;
  }
}

/**
 * Convert a stored timestamp (ISO string) to an ISO string
 */
export function timestampToISO(timestamp: string | null | undefined): string | null {
  if (!timestamp) return null;
  return new Date(timestamp).toISOString();
}

export interface BetaUserData {
  uid: string;
  name: string;
  email: string;
  age: string;
  gender: string;
}

/**
 * Save a beta user signup
 */
export async function saveBetaUser(data: BetaUserData): Promise<void> {
  if (!API_URL) return; // Silently skip if the API isn't configured

  try {
    await apiFetch('/beta-users/me', {
      method: 'PUT',
      body: JSON.stringify({ name: data.name, email: data.email, age: data.age, gender: data.gender }),
    });
    console.log('[Sync] Beta user saved:', data.uid);
  } catch (error) {
    console.error('[Sync] Error saving beta user:', error);
    // Don't throw — beta save failure shouldn't block access grant
  }
}
