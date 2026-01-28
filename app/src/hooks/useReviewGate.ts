import { useSpacedRepetitionStore } from '@/store/spacedRepetitionStore';

export type WarningLevel = 'none' | 'warning' | 'blocked';

export interface ReviewGateStatus {
  isBlocked: boolean;
  dueCount: number;
  threshold: number;
  reviewsNeeded: number;
  warningLevel: WarningLevel;
}

const REVIEW_THRESHOLD = 10;

/**
 * Hook to check if user is blocked from starting new lessons
 * due to too many pending flashcard reviews.
 *
 * Rules:
 * - 0-5 due: Green (no warning)
 * - 6-10 due: Yellow warning ("Review soon")
 * - >10 due: Red blocked (must review)
 */
export function useReviewGate(): ReviewGateStatus {
  const getTodaysDueCount = useSpacedRepetitionStore(state => state.getTodaysDueCount);
  const dueCount = getTodaysDueCount();

  const getWarningLevel = (count: number): WarningLevel => {
    if (count <= 5) return 'none';
    if (count <= REVIEW_THRESHOLD) return 'warning';
    return 'blocked';
  };

  return {
    isBlocked: dueCount > REVIEW_THRESHOLD,
    dueCount,
    threshold: REVIEW_THRESHOLD,
    reviewsNeeded: Math.max(0, dueCount - REVIEW_THRESHOLD),
    warningLevel: getWarningLevel(dueCount),
  };
}

export default useReviewGate;
