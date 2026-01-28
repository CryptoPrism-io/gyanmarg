import { motion } from 'framer-motion';
import { Brain, AlertTriangle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/atoms';
import { ProgressBar } from '@/components/atoms';

interface ReviewGateBannerProps {
  dueCount: number;
  reviewsNeeded: number;
}

/**
 * Banner shown when user is blocked from starting new lessons
 * due to too many pending flashcard reviews (>10 due)
 */
export function ReviewGateBanner({
  dueCount,
  reviewsNeeded,
}: ReviewGateBannerProps) {
  const navigate = useNavigate();

  // Progress towards unblocking (how close they are to clearing enough)
  const progressToUnblock = dueCount > 0
    ? Math.max(0, ((dueCount - reviewsNeeded) / dueCount) * 100)
    : 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 rounded-xl bg-coral/10 border border-coral/30 mb-6"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-coral/20 border border-coral/30 flex items-center justify-center shrink-0">
          <Brain className="w-5 h-5 text-coral" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-coral">Review Required</h3>
          <p className="text-text-secondary text-sm mt-1">
            You have <span className="text-coral font-medium">{dueCount} flashcards</span> due for review.
            Clear <span className="text-coral font-medium">{reviewsNeeded}</span> to unlock the next lesson.
          </p>

          {/* Progress bar showing how many more to clear */}
          <div className="mt-3">
            <div className="flex items-center justify-between text-xs text-text-muted mb-1">
              <span>Progress to unlock</span>
              <span>{reviewsNeeded} more to go</span>
            </div>
            <ProgressBar
              value={progressToUnblock}
              variant="default"
              size="sm"
            />
          </div>

          <Button
            variant="primary"
            size="sm"
            className="mt-3"
            onClick={() => navigate('/review')}
          >
            Go to Review
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

interface ReviewWarningBannerProps {
  dueCount: number;
}

/**
 * Warning banner shown when user has 6-10 due reviews
 * Lessons are still accessible but user is warned
 */
export function ReviewWarningBanner({ dueCount }: ReviewWarningBannerProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-3 rounded-xl bg-golden/10 border border-golden/30 mb-6"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-golden shrink-0" />
          <p className="text-sm text-text-secondary">
            <span className="text-golden font-medium">{dueCount} reviews due</span> - review soon to stay unlocked
          </p>
        </div>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => navigate('/review')}
        >
          Review
        </Button>
      </div>
    </motion.div>
  );
}

export default ReviewGateBanner;
