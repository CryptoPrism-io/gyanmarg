import { useState, useMemo, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Brain, Sparkles, ChevronRight } from 'lucide-react';
import { springSoft } from '@/lib/animations';
import { FlashCard, RatingButtons } from '@/components/molecules/FlashCard';
import { useSpacedRepetitionStore } from '@/store/spacedRepetitionStore';
import { useProgressStore } from '@/store/progressStore';
import { getFlashcardsForLessonIds } from '@/data/lesson-flashcard-map';
import type { SpacedRepetitionCard } from '@/types';
import type { FlashcardWithScheduling, ReviewRating } from '@/types';

const MAX_CARDS_PER_SESSION = 8;

const CELEBRATION_COLORS = ['#F7C948', '#FF6B6B', '#48BB78', '#805AD5', '#4299E1', '#ED8936'];

function CelebrationBurst() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 14 }, (_, i) => {
        const angle = (i / 14) * 360;
        const rad = (angle * Math.PI) / 180;
        const distance = 70 + Math.random() * 50;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            animate={{
              opacity: 0,
              x: Math.cos(rad) * distance,
              y: Math.sin(rad) * distance - 20,
              scale: 0,
            }}
            transition={{ duration: 1.3, delay: i * 0.04, ease: 'easeOut' }}
            className="absolute left-1/2 top-1/2 rounded-full"
            style={{
              width: 5 + Math.random() * 5,
              height: 5 + Math.random() * 5,
              backgroundColor: CELEBRATION_COLORS[i % CELEBRATION_COLORS.length],
            }}
          />
        );
      })}
    </div>
  );
}

const colorGradients: Record<string, string> = {
  blue: 'from-sky to-lavender',
  emerald: 'from-sage to-sage-light',
  purple: 'from-lavender to-lavender-light',
  amber: 'from-golden to-sunrise',
  cyan: 'from-sky to-sage',
  rose: 'from-coral to-blush',
  yellow: 'from-golden to-sunrise',
  green: 'from-sage to-golden',
  orange: 'from-sunrise to-golden',
  teal: 'from-sky to-sage',
  indigo: 'from-lavender to-sky',
  violet: 'from-lavender to-blush',
};

interface QuickReviseOverlayProps {
  lessonIds: string[];
  reviseLabel: string;
  moduleColor?: string;
  onClose: () => void;
}

// Lazy flashcard loader
let _flashcardsCache: SpacedRepetitionCard[] | null = null;

export function QuickReviseOverlay({
  lessonIds,
  reviseLabel,
  moduleColor = 'orange',
  onClose,
}: QuickReviseOverlayProps) {
  const reviewCard = useSpacedRepetitionStore((s) => s.reviewCard);
  const unlockedCards = useSpacedRepetitionStore((s) => s.unlockedCards);
  const addMicroXP = useProgressStore((s) => s.addMicroXP);
  const gradient = colorGradients[moduleColor] || colorGradients.orange;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [totalXPEarned, setTotalXPEarned] = useState(0);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [ratingDisabled, setRatingDisabled] = useState(false);
  const [allFlashcards, setAllFlashcards] = useState<SpacedRepetitionCard[]>(_flashcardsCache || []);

  useEffect(() => {
    if (_flashcardsCache) return;
    import('@/data/flashcards-index').then(m => {
      _flashcardsCache = m.allFlashcards;
      setAllFlashcards(m.allFlashcards);
    });
  }, []);

  // Select cards for this session
  const sessionCards = useMemo(() => {
    const today = new Date().toISOString().split('T')[0];

    // Get all flashcards matching these lessons
    const matchingRawCards = getFlashcardsForLessonIds(allFlashcards, lessonIds);
    const matchingCardIds = new Set(matchingRawCards.map((c) => c.id));

    // Cross-reference with unlocked cards for SM-2 state
    const matchingUnlocked = unlockedCards.filter((c) => matchingCardIds.has(c.id));

    if (matchingUnlocked.length === 0) return [];

    // Prioritize: due cards first, then by lowest interval
    const due: FlashcardWithScheduling[] = [];
    const notDue: FlashcardWithScheduling[] = [];

    for (const card of matchingUnlocked) {
      if (card.nextReviewDate <= today) {
        due.push(card);
      } else {
        notDue.push(card);
      }
    }

    due.sort((a, b) => a.nextReviewDate.localeCompare(b.nextReviewDate));
    notDue.sort((a, b) => a.interval - b.interval);

    const combined = [...due, ...notDue];
    return combined.slice(0, MAX_CARDS_PER_SESSION);
  }, [lessonIds, unlockedCards]);

  const currentCard = sessionCards[currentIndex];

  const handleFlip = useCallback((flipped: boolean) => {
    setIsFlipped(flipped);
  }, []);

  const handleRate = useCallback(
    (rating: 'hard' | 'good' | 'easy') => {
      if (!currentCard || ratingDisabled) return;
      setRatingDisabled(true);

      // Map to SM-2 rating
      const sm2Rating: ReviewRating = rating === 'hard' ? 2 : rating === 'good' ? 4 : 5;

      // Review in SM-2
      reviewCard(currentCard.id, sm2Rating);

      // Award XP: 15 base * multiplier
      const multiplier = rating === 'hard' ? 0.5 : rating === 'good' ? 1 : 1.5;
      const xpEarned = Math.round(15 * multiplier);
      addMicroXP(xpEarned);
      setTotalXPEarned((prev) => prev + xpEarned);

      // Advance to next card after brief delay
      setTimeout(() => {
        if (currentIndex + 1 >= sessionCards.length) {
          setSessionComplete(true);
        } else {
          setCurrentIndex((prev) => prev + 1);
          setIsFlipped(false);
          setRatingDisabled(false);
        }
      }, 300);
    },
    [currentCard, currentIndex, sessionCards.length, reviewCard, addMicroXP, ratingDisabled]
  );

  const content = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-base z-[10001] flex flex-col"
    >
      {/* Header */}
      <div className="flex-shrink-0 border-b border-white/10">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-xl bg-surface/50 hover:bg-surface flex items-center justify-center transition-colors"
              aria-label="Close revision"
            >
              <X className="w-5 h-5 text-text-muted" />
            </button>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <Brain className="w-4 h-4 text-lavender" />
                <span className="text-xs font-medium text-lavender">Quick Revise</span>
              </div>
              <p className="text-sm font-semibold text-text-primary line-clamp-1">
                {reviseLabel}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {!sessionComplete && sessionCards.length > 0 && (
              <span className="text-sm text-text-muted">
                {currentIndex + 1}/{sessionCards.length}
              </span>
            )}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-golden/10 border border-golden/30">
              <Sparkles className="w-4 h-4 text-golden" />
              <span className="text-sm font-semibold text-golden">+{totalXPEarned} XP</span>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        {!sessionComplete && sessionCards.length > 0 && (
          <div className="max-w-2xl mx-auto px-4 pb-2">
            <div className="h-1.5 bg-surface rounded-full overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${gradient}`}
                animate={{ width: `${((currentIndex + 1) / sessionCards.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Empty state */}
          {sessionCards.length === 0 && (
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-lavender/20 flex items-center justify-center">
                <Brain className="w-8 h-8 text-lavender" />
              </div>
              <h2 className="text-xl font-display font-bold text-text-primary mb-2">
                No flashcards available yet
              </h2>
              <p className="text-sm text-text-muted mb-6">
                Complete more lessons to unlock flashcards for revision.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-lavender/10 text-lavender font-semibold border border-lavender/30 hover:bg-lavender/20 transition-colors"
              >
                Go Back
              </button>
            </div>
          )}

          {/* Active card */}
          {!sessionComplete && currentCard && (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCard.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.25 }}
              >
                <FlashCard
                  front={currentCard.front}
                  back={currentCard.back}
                  category={currentCard.category}
                  onFlip={handleFlip}
                />

                {/* Rating buttons - show after flip */}
                {isFlipped && (
                  <RatingButtons onRate={handleRate} disabled={ratingDisabled} />
                )}

                {!isFlipped && (
                  <p className="text-center text-text-muted text-sm mt-4 flex items-center justify-center gap-2">
                    Tap card to reveal answer
                    <ChevronRight className="w-4 h-4" />
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          )}

          {/* Session complete */}
          {sessionComplete && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="relative glass rounded-2xl p-8 border border-golden/30">
                <CelebrationBurst />

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={springSoft}
                  className="relative w-16 h-16 mx-auto mb-4 rounded-full bg-golden/20 flex items-center justify-center"
                >
                  <Brain className="w-8 h-8 text-golden" />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="relative text-xl font-display font-bold text-golden mb-2"
                >
                  Revision Complete!
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="relative space-y-2 mb-6"
                >
                  <div className="flex items-center justify-center gap-2 text-golden font-semibold text-lg">
                    <Sparkles className="w-5 h-5" />
                    <span>+{totalXPEarned} XP earned</span>
                  </div>
                  <p className="text-sm text-text-muted">
                    {sessionCards.length} cards reviewed
                  </p>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  onClick={onClose}
                  className="relative px-8 py-3 rounded-xl bg-gradient-to-r from-golden to-golden-light text-background font-semibold hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-shadow"
                >
                  Done
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );

  return createPortal(content, document.body);
}

export default QuickReviseOverlay;
