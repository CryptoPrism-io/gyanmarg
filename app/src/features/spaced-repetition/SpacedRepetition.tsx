import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, RotateCcw, Check, Star, Calendar, TrendingUp } from 'lucide-react';
import { useProgressStore } from '@/store/progressStore';
import { useSpacedRepetitionStore } from '@/store/spacedRepetitionStore';
import { useSoundEffects } from '@/hooks';
import { ModuleLayout } from '@/components/templates';
import { Card } from '@/components/molecules';
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
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-success/10 rounded-full flex items-center justify-center">
            <Check className="w-10 h-10 text-success" />
          </div>
          <h2 className="text-2xl font-semibold text-primary mb-2">
            All caught up!
          </h2>
          <p className="text-secondary mb-6">
            No cards are due for review right now. Great job staying on top of your learning!
          </p>

          {/* Stats Card */}
          <Card className="max-w-sm mx-auto mb-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-semibold text-primary">{cardStats.total}</p>
                <p className="text-xs text-muted">Total Cards</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-success">{cardStats.mastered}</p>
                <p className="text-xs text-muted">Mastered</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-purple-400">{cardStats.learning}</p>
                <p className="text-xs text-muted">Learning</p>
              </div>
            </div>
          </Card>

          <p className="text-sm text-muted flex items-center justify-center gap-2">
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
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-success/10 rounded-full flex items-center justify-center">
            <Check className="w-10 h-10 text-success" />
          </div>
          <h2 className="text-2xl font-semibold text-primary mb-2">
            Session Complete!
          </h2>
          <p className="text-secondary mb-6">
            You reviewed {reviewed.length} cards and strengthened your memory.
          </p>

          <div className="bg-secondary rounded-xl p-6 max-w-sm mx-auto mb-6">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Star className="w-6 h-6 text-amber-500" />
              <span className="text-3xl font-semibold text-amber-500">
                +{sessionXP}
              </span>
            </div>
            <p className="text-sm text-muted">XP Earned</p>
          </div>

          {/* Progress Stats */}
          <Card className="max-w-sm mx-auto mb-6">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-success" />
                <span className="text-secondary">Cards Mastered</span>
              </div>
              <span className="text-primary font-medium">{cardStats.mastered} / {cardStats.total}</span>
            </div>
          </Card>

          {remainingDue > 0 ? (
            <Button icon={<RotateCcw className="w-4 h-4" />} onClick={resetSession}>
              Review {remainingDue} More Cards
            </Button>
          ) : (
            <p className="text-sm text-muted flex items-center justify-center gap-2">
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
      rightContent={
        <Badge variant="primary">
          {reviewed.length + 1} / {sessionCards.length}
        </Badge>
      }
    >
      {/* Progress */}
      <Card className="mb-6" padding="sm">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-secondary">Session Progress</span>
          <span className="text-muted">{Math.round(progress)}%</span>
        </div>
        <ProgressBar value={progress} variant="gradient" size="sm" />
      </Card>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-secondary rounded-xl p-3 text-center">
          <p className="text-lg font-semibold text-warning">{dueCards.length}</p>
          <p className="text-xs text-muted">Due Today</p>
        </div>
        <div className="bg-secondary rounded-xl p-3 text-center">
          <p className="text-lg font-semibold text-success">{cardStats.mastered}</p>
          <p className="text-xs text-muted">Mastered</p>
        </div>
        <div className="bg-secondary rounded-xl p-3 text-center">
          <p className="text-lg font-semibold text-purple-400">{cardStats.learning}</p>
          <p className="text-xs text-muted">Learning</p>
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
              <p className="text-center text-sm text-muted mt-4">
                Tap the card to reveal the answer
              </p>
            )}

            {/* Next Review Info */}
            {currentCard.interval > 0 && (
              <p className="text-center text-xs text-muted mt-2">
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
        className="mt-8 bg-purple-500/10 border border-purple-500/20 rounded-xl p-4"
      >
        <h4 className="font-medium text-purple-400 mb-2">About Spaced Repetition</h4>
        <p className="text-sm text-secondary">
          Using the SM-2 algorithm, cards you find difficult will appear more frequently.
          As you master cards, review intervals will increase from days to weeks.
        </p>
      </motion.div>
    </ModuleLayout>
  );
}

export default SpacedRepetition;
