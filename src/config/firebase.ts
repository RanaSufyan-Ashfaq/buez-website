import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";

/**
 * Firebase for the landing page — READ ONLY.
 *
 * Points at the exact same Firebase project as the BUEZ mobile app
 * (`buez-b73cc`) so the Founder Phase numbers shown here are the same
 * documents the app writes to. Nothing on the website ever writes to
 * Firestore or authenticates; the only access needed is a public read of
 * `config/founderProgram` (see src/services/founder.service.ts).
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
 * A missing/incomplete `.env` must never take the marketing site down, so the
 * config is validated up front and every consumer degrades to its fallback
 * instead of throwing at import time.
 */
export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId,
);

let app: FirebaseApp | null = null;
let db: Firestore | null = null;

/** Lazily initialises Firebase, or returns null when it isn't configured. */
export const getFirebaseDb = (): Firestore | null => {
  if (!isFirebaseConfigured) {
    if (import.meta.env.DEV) {
      console.warn(
        "[Firebase] VITE_FIREBASE_* env vars are missing — live Founder stats are disabled.",
      );
    }
    return null;
  }

  try {
    if (!app) app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    if (!db) db = getFirestore(app);
    return db;
  } catch (error) {
    console.error("[Firebase] initialisation failed:", error);
    return null;
  }
};
