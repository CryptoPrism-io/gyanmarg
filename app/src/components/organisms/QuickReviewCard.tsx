import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Clock, Zap, BookOpen, ChevronRight } from 'lucide-react';
import { springBouncy } from '@/lib/animations';
import { useSpacedRepetitionStore } from '@/store/spacedRepetitionStore';

/**
 * QuickReviewCard — Integrates spaced repetition into daily flow
 * Shows a teaser of the next due card + makes it friction-free to start a 5-card burst
 * Closes the habit loop: Cue (card preview) → Routine (quick review) → Reward (streak +XP)
 */
export function QuickReviewCard() {
  const navigate = useNavigate();
  const getDueCards = useSpacedRepetitionStore((s) => s.getDueCards);
  const dueCards = useMemo(() => getDueCards(), [getDueCards]);

  // Get next due card
  const nextCard = useMemo(() => {
    if (dueCards.length === 0) return null;
    return dueCards[0];
  }, [dueCards]);

  // Calculate time until next review
  const timeUntilNext = useMemo(() => {
    if (!nextCard) return '';
    const nextReviewDate = new Date(nextCard.nextReviewDate);
    const now = new Date();

    if (nextReviewDate <= now) return 'due now';

    const diffMs = nextReviewDate.getTime() - now.getTime();
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffHours / 24);

    if (diffDays > 0) return `in ${diffDays}d`;
    if (diffHours > 0) return `in ${diffHours}h`;
    return 'due soon';
  }, [nextCard]);

  if (!nextCard || dueCards.length === 0) return null;

  const handleStartQuickReview = () => {
    navigate('/review');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={springBouncy}
      className="w-full group"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-lavender/15 via-purple-500/10 to-pink-500/10 border border-lavender/20 hover:border-lavender/40 transition-all duration-300 p-4 sm:p-5 shadow-lg hover:shadow-xl hover:shadow-lavender/10">
        {/* Animated glow on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-lavender/20 to-transparent blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="relative space-y-3">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-lavender/20 border border-lavender/30 flex items-center justify-center shrink-0">
                <Brain className="w-5 h-5 text-lavender" />
              </div>
              <div>
                <p className="text-xs font-semibold text-lavender/70 uppercase tracking-wider">
                  Quick Review
                </p>
                <p className="text-[11px] text-text-muted mt-0.5">
                  {dueCards.length} card{dueCards.length !== 1 ? 's' : ''} due
                </p>
              </div>
            </div>

            {/* Time badge */}
            <div className="flex items-center gap-1 text-[10px] text-lavender bg-lavender/10 px-2.5 py-1 rounded-full">
              <Clock className="w-3 h-3" />
              <span>{timeUntilNext}</span>
            </div>
          </div>

          {/* Card Preview — Shows front of next due card */}
          <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-4 min-h-[80px] flex items-center justify-center">
            <p className="text-sm text-text-secondary text-center font-medium leading-relaxed line-clamp-3">
              {nextCard.front}
            </p>
          </div>

          {/* Difficulty + Category */}
          <div className="flex items-center gap-2 flex-wrap">
            {nextCard.difficulty && (
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-text-muted">
                {nextCard.difficulty}
              </span>
            )}
            {nextCard.tags && nextCard.tags.length > 0 && (
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-text-muted">
                {nextCard.tags[0]}
              </span>
            )}
          </div>

          {/* CTA Row */}
          <div className="flex items-center justify-between pt-2">
            <div className="text-[11px] text-text-muted flex items-center gap-1.5">
              <Zap className="w-3 h-3 text-golden" />
              <span>5-card burst: +75 XP</span>
            </div>
            <button
              onClick={handleStartQuickReview}
              className="flex items-center gap-1.5 text-lavender font-semibold text-xs bg-lavender/10 px-3 py-1.5 rounded-lg hover:bg-lavender/20 transition-all group-hover:translate-x-0.5"
            >
              <span>Review</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Streak reminder */}
          <div className="text-[10px] text-text-muted bg-white/[0.02] border border-white/[0.08] rounded-lg px-3 py-2 flex items-center gap-2">
            <BookOpen className="w-3 h-3 text-golden shrink-0" />
            <span>Review streaks unlock special achievements</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
