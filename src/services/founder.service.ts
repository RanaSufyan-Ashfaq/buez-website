import { doc, onSnapshot } from "firebase/firestore";
import { getFirebaseDb } from "../config/firebase";

/**
 * Founder Phase statistics, read from the SAME document the BUEZ mobile app
 * uses as its single source of truth: `config/founderProgram`.
 *
 * The app increments `claimedCount` inside the claim transaction
 * (app/services/Founder.service.tsx → claimFounderSpot), so this is a
 * read-only mirror of that counter — no duplicate storage, no extra writes,
 * and the shapes/fallbacks below intentionally match the app's `readStats`.
 */
export const FOUNDER_TOTAL_SPOTS = 100;

const FOUNDER_CONFIG_COLLECTION = "config";
const FOUNDER_CONFIG_DOC = "founderProgram";

export interface FounderStats {
  total: number;
  filled: number;
  remaining: number;
}

export const FOUNDER_STATS_FALLBACK: FounderStats = {
  total: FOUNDER_TOTAL_SPOTS,
  filled: 0,
  remaining: FOUNDER_TOTAL_SPOTS,
};

/** Mirrors `readStats` in the mobile app so both surfaces derive numbers identically. */
const readStats = (data: unknown): FounderStats => {
  const record = (data ?? {}) as { limit?: unknown; claimedCount?: unknown };

  const total =
    typeof record.limit === "number" && record.limit > 0
      ? record.limit
      : FOUNDER_TOTAL_SPOTS;
  const claimed =
    typeof record.claimedCount === "number" && record.claimedCount > 0
      ? record.claimedCount
      : 0;
  const filled = Math.min(claimed, total);

  return { total, filled, remaining: Math.max(total - filled, 0) };
};

/**
 * Real-time subscription to the Founder stats. Returns an unsubscribe fn.
 *
 * `onError` is only signalled — the caller keeps the last known good values so
 * a transient Firestore hiccup never blanks out the UI.
 */
export const subscribeFounderStats = (
  onChange: (stats: FounderStats) => void,
  onError?: (error: unknown) => void,
): (() => void) => {
  const db = getFirebaseDb();
  if (!db) {
    onError?.(new Error("Firebase is not configured"));
    return () => {};
  }

  try {
    return onSnapshot(
      doc(db, FOUNDER_CONFIG_COLLECTION, FOUNDER_CONFIG_DOC),
      (snapshot) => onChange(readStats(snapshot.exists() ? snapshot.data() : null)),
      (error) => {
        console.error("[Founder] subscribeFounderStats error:", error);
        onError?.(error);
      },
    );
  } catch (error) {
    console.error("[Founder] subscribeFounderStats setup error:", error);
    onError?.(error);
    return () => {};
  }
};
