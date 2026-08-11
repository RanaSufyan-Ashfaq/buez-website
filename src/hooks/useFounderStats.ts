import { useEffect, useState } from "react";
import {
  FOUNDER_STATS_FALLBACK,
  subscribeFounderStats,
  type FounderStats,
} from "../services/founder.service";

export interface UseFounderStatsResult extends FounderStats {
  /** 0–100, ready to drop straight into a progress-bar width. */
  percentFilled: number;
  isLoading: boolean;
  isError: boolean;
}

/**
 * Live Founder Phase stats for the landing page.
 *
 * Renders `0 / 100` until the first snapshot lands (no layout shift, no fake
 * numbers) and KEEPS the last good values if the stream later errors, so the
 * hero/pricing counters never flicker back to a placeholder.
 */
export const useFounderStats = (): UseFounderStatsResult => {
  const [stats, setStats] = useState<FounderStats>(FOUNDER_STATS_FALLBACK);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let active = true;

    const unsubscribe = subscribeFounderStats(
      (next) => {
        if (!active) return;
        setStats(next);
        setIsError(false);
        setIsLoading(false);
      },
      () => {
        if (!active) return;
        // Deliberately does NOT reset `stats` — last known good values stay on screen.
        setIsError(true);
        setIsLoading(false);
      },
    );

    return () => {
      active = false;
      unsubscribe();
    };
  }, []);

  const percentFilled =
    stats.total > 0
      ? Math.min(Math.max((stats.filled / stats.total) * 100, 0), 100)
      : 0;

  return { ...stats, percentFilled, isLoading, isError };
};
