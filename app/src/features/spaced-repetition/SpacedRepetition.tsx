import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, RotateCcw, Check, Star, Calendar, TrendingUp, Sparkles } from 'lucide-react';
import { useProgressStore } from '@/store/progressStore';
import { useSpacedRepetitionStore } from '@/store/spacedRepetitionStore';
import { useSoundEffects } from '@/hooks';
import { ModuleLayout } from '@/components/templates';
import { GlassCard } from '@/components/molecules';
import { FlashCard, RatingButtons } from '@/components/molecules/FlashCard';
import { Button, Badge, ProgressBar } from '@/components/atoms';
import type { ReviewRating } from '@/types';

// Rating map for SM-2 algorithm
const ratingToSM2: Record<'hard' | 'good' | 'easy', ReviewRating> = {
  hard: 2,
  good: 4,
  easy: 5,
};

export function SpacedRepetition() {
  const { addXP, unlockAchievement, hasAchievement, incrementReviewCount } = useProgressStore();
  const initializeCards = useSpacedRepetitionStore((s) => s.initializeCards);
  const getDueCards = useSpacedRepetitionStore((s) => s.getDueCards);
  const reviewCard = useSpacedRepetitionStore((s) => s.reviewCard);
  const getCardStats = useSpacedRepetitionStore((s) => s.getCardStats);
  const cards = useSpacedRepetitionStore((s) => s.cards);
  const { playCardFlip, playCorrect, playXpGain } = useSoundEffects();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [reviewed, setReviewed] = useState<string[]>([]);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [sessionXP, setSessionXP] = useState(0);

  // Initialize cards on mount
  useEffect(() => {
    initializeCards();
  }, [initializeCards]);

  // Memoize computed values to avoid infinite loops
  const dueCards = useMemo(() => getDueCards(), [getDueCards, cards, reviewed]);
  const cardStats = useMemo(() => getCardStats(), [getCardStats, cards]);
  const sessionCards = useMemo(() => dueCards.slice(0, 10), [dueCards]);
  const currentCard = sessionCards[currentIndex];
  const progress = sessionCards.length > 0
    ? (reviewed.length / sessionCards.length) * 100
    : 0;

  const handleFlip = (flipped: boolean) => {
    setIsFlipped(flipped);
    if (flipped) {
      setShowRating(true);
      playCardFlip();
    }
  };

  const handleRate = (rating: 'hard' | 'good' | 'easy') => {
    if (!currentCard) return;

    // Convert rating to SM-2 scale and update card
    const sm2Rating = ratingToSM2[rating];
    reviewCard(currentCard.id, sm2Rating);
    incrementReviewCount();

    // Award XP based on rating
    const xpMap = { hard: 10, good: 20, easy: 30 };
    const earnedXP = xpMap[rating];
    addXP(earnedXP);
    setSessionXP(prev => prev + earnedXP);
    playXpGain();

    // Track reviewed cards
    setReviewed((prev) => [...prev, currentCard.id]);

    // Check for achievements
    if (reviewed.length === 0 && !hasAchievement('first_review')) {
      unlockAchievement('first_review', 50);
    }

    playCorrect();

    // Move to next card or end session
    if (currentIndex < sessionCards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsFlipped(false);
      setShowRating(false);
    } else {
      setSessionComplete(true);
    }
  };

  const resetSession = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setShowRating(false);
    setReviewed([]);
    setSessionComplete(false);
    setSessionXP(0);
  };

  // No cards available
  if (dueCards.length === 0 && !sessionComplete) {
    return (
      <ModuleLayout
        title="Spaced Repetition"
        subtitle="Strengthen your memory"
        icon={<Brain className="w-5 h-5" />}
        headerGradient="aurora"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-sage/10 border border-sage/20 rounded-2xl flex items-center justify-center">
            <Check className="w-10 h-10 text-sage" />
          </div>
          <h2 className="text-2xl font-display font-bold text-text-primary mb-2">
            All caught up!
          </h2>
          <p className="text-text-secondary mb-6">
            No cards are due for review right now. Great job staying on top of your learning!
          </p>

          {/* Stats Card */}
          <GlassCard className="max-w-sm mx-auto mb-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-display font-bold text-text-primary">{cardStats.total}</p>
                <p className="text-xs text-text-muted">Total Cards</p>
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-sage">{cardStats.mastered}</p>
                <p className="text-xs text-text-muted">Mastered</p>
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-lavender">{cardStats.learning}</p>
                <p className="text-xs text-text-muted">Learning</p>
              </div>
            </div>
          </GlassCard>

          <p className="text-sm text-text-muted flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4" />
            Come back tomorrow for more reviews
          </p>
        </motion.div>
      </ModuleLayout>
    );
  }

  if (sessionComplete) {
    const remainingDue = getDueCards().length;

    return (
      <ModuleLayout
        title="Review Complete!"
        icon={<Brain className="w-5 h-5" />}
        headerGradient="aurora"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-sage/10 border border-sage/20 rounded-2xl flex items-center justify-center">
            <Sparkles className="w-10 h-10 text-sage" />
          </div>
          <h2 className="text-2xl font-display font-bold text-text-primary mb-2">
            Session Complete!
          </h2>
          <p className="text-text-secondary mb-6">
            You reviewed {reviewed.length} cards and strengthened your memory.
          </p>

          <GlassCard className="max-w-sm mx-auto mb-6">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-golden/10 border border-golden/20 flex items-center justify-center">
                <Star className="w-6 h-6 text-golden" />
              </div>
              <span className="text-3xl font-display font-bold text-golden">
                +{sessionXP}
              </span>
            </div>
            <p className="text-sm text-text-muted">XP Earned</p>
          </GlassCard>

          {/* Progress Stats */}
          <GlassCard className="max-w-sm mx-auto mb-6">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-sage" />
                <span className="text-text-secondary">Cards Mastered</span>
              </div>
              <span className="text-text-primary font-medium">{cardStats.mastered} / {cardStats.total}</span>
            </div>
          </GlassCard>

          {remainingDue > 0 ? (
            <Button variant="primary" onClick={resetSession} glow>
              <RotateCcw className="w-4 h-4 mr-2" />
              Review {remainingDue} More Cards
            </Button>
          ) : (
            <p className="text-sm text-text-muted flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              All caught up! Come back tomorrow.
            </p>
          )}
        </motion.div>
      </ModuleLayout>
    );
  }

  return (
    <ModuleLayout
      title="Spaced Repetition"
      subtitle="Strengthen your memory"
      icon={<Brain className="w-5 h-5" />}
      headerGradient="aurora"
      rightContent={
        <Badge variant="primary" size="md">
          {reviewed.length + 1} / {sessionCards.length}
        </Badge>
      }
    >
      {/* Progress */}
      <GlassCard className="mb-6">
        <div className="flex items-center justify-between text-sm mb-3">
          <span className="text-text-secondary font-medium">Session Progress</span>
          <span className="text-lavender font-semibold">{Math.round(progress)}%</span>
        </div>
        <ProgressBar value={progress} variant="gradient" size="md" animated />
      </GlassCard>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="glass rounded-xl p-3 text-center border border-white/10">
          <p className="text-lg font-display font-bold text-coral">{dueCards.length}</p>
          <p className="text-xs text-text-muted">Due Today</p>
        </div>
        <div className="glass rounded-xl p-3 text-center border border-white/10">
          <p className="text-lg font-display font-bold text-sage">{cardStats.mastered}</p>
          <p className="text-xs text-text-muted">Mastered</p>
        </div>
        <div className="glass rounded-xl p-3 text-center border border-white/10">
          <p className="text-lg font-display font-bold text-lavender">{cardStats.learning}</p>
          <p className="text-xs text-text-muted">Learning</p>
        </div>
      </div>

      {/* Current Card */}
      {currentCard && (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="max-w-md mx-auto"
          >
            <FlashCard
              front={currentCard.front}
              back={currentCard.back}
              category={currentCard.category}
              onFlip={handleFlip}
            />

            {showRating && (
              <RatingButtons onRate={handleRate} />
            )}

            {!isFlipped && (
              <p className="text-center text-sm text-text-muted mt-4">
                Tap the card to reveal the answer
              </p>
            )}

            {/* Next Review Info */}
            {currentCard.interval > 0 && (
              <p className="text-center text-xs text-text-muted mt-2">
                Last interval: {currentCard.interval} day{currentCard.interval > 1 ? 's' : ''}
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      )}

      {/* Info Box */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 relative overflow-hidden rounded-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-lavender/10 to-lavender/5" />
        <div className="absolute inset-0 border border-lavender/20 rounded-2xl" />

        <div className="relative p-5">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-lavender/10 border border-lavender/20 flex items-center justify-center shrink-0">
              <Brain className="w-5 h-5 text-lavender" />
            </div>
            <div>
              <h4 className="font-medium text-lavender mb-1">About Spaced Repetition</h4>
              <p className="text-sm text-text-secondary">
                Using the SM-2 algorithm, cards you find difficult will appear more frequently.
                As you master cards, review intervals will increase from days to weeks.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </ModuleLayout>
  );
}

export default SpacedRepetition;
