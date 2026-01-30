import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Sparkles, RotateCcw, ChevronRight, ArrowRight } from 'lucide-react';
import { TinderCard } from '@/components/molecules/TinderCard';
import { FloatingXP } from '@/components/atoms/FloatingXP';
import { Button } from '@/components/atoms';
import { useCardStack } from '@/hooks/useCardStack';
import { useSoundEffects } from '@/hooks/useSoundEffects';
import type { PathwayLesson } from '@/types';

interface NextLessonInfo {
  lesson: PathwayLesson;
  levelTitle: string;
}

interface TinderCardStackProps {
  lesson: PathwayLesson;
  onComplete: () => void;
  isComplete: boolean;
  moduleColor?: string;
  onXPEarned?: (amount: number) => void;
  nextLesson?: NextLessonInfo | null;
  onNextLesson?: (lesson: PathwayLesson) => void;
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

export function TinderCardStack({
  lesson,
  onComplete,
  isComplete: lessonComplete,
  moduleColor = 'orange',
  onXPEarned,
  nextLesson,
  onNextLesson,
}: TinderCardStackProps) {
  const gradient = colorGradients[moduleColor] || colorGradients.orange;
  const { playXpGain, playSuccess, playClick } = useSoundEffects();
  const [showingCompletion, setShowingCompletion] = useState(false);

  // Floating XP animation state
  const [floatingXP, setFloatingXP] = useState<{ amount: number; show: boolean }>({
    amount: 0,
    show: false,
  });

  // Card stack hook
  const {
    cards,
    currentIndex,
    totalXP,
    swipeCard,
    undoSwipe,
    isComplete,
    progress,
  } = useCardStack({
    lesson,
    onXPEarned: (amount) => {
      onXPEarned?.(amount);
    },
  });

  const handleSwipe = useCallback(
    (direction: 'left' | 'right', quizCorrect?: boolean) => {
      if (direction === 'right') {
        const xpEarned = swipeCard(direction, quizCorrect);

        // Show floating XP animation
        setFloatingXP({ amount: xpEarned, show: true });

        // Play sound
        playXpGain();
      } else {
        swipeCard(direction);
        playClick();
      }
    },
    [swipeCard, playXpGain, playClick]
  );

  const handleFloatingXPComplete = useCallback(() => {
    setFloatingXP({ amount: 0, show: false });
  }, []);

  const handleUndo = useCallback(() => {
    undoSwipe();
    playClick();
  }, [undoSwipe, playClick]);

  const handleComplete = useCallback(() => {
    playSuccess();
    onComplete();
    setShowingCompletion(true);
  }, [onComplete, playSuccess]);

  // Auto-advance to next lesson after showing completion
  // Use lesson.id in deps to avoid resetting timer on every re-render
  const nextLessonId = nextLesson?.lesson.id;
  useEffect(() => {
    if (showingCompletion && nextLesson && onNextLesson) {
      const timer = setTimeout(() => {
        onNextLesson(nextLesson.lesson);
      }, 2000); // Show completion for 2 seconds then auto-advance
      return () => clearTimeout(timer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showingCompletion, nextLessonId]);

  // Visible cards (current + next 2)
  const visibleCards = cards.slice(currentIndex, currentIndex + 3);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[60vh] py-8">
      {/* Progress Bar */}
      <div className="w-full max-w-md mx-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-text-muted">
            {currentIndex} of {cards.length} cards
          </span>
          <span className="text-sm font-semibold text-golden">
            +{totalXP} XP earned
          </span>
        </div>
        <div className="h-2 bg-surface rounded-full overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${gradient}`}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Card Stack Area */}
      <div className="relative w-full h-[55vh] max-h-[600px]">
        {/* Floating XP Animation */}
        <FloatingXP
          amount={floatingXP.amount}
          show={floatingXP.show}
          onComplete={handleFloatingXPComplete}
        />

        {/* Cards */}
        <AnimatePresence mode="popLayout">
          {!isComplete &&
            visibleCards.map((card, index) => (
              <TinderCard
                key={card.id}
                card={card}
                isTop={index === 0}
                stackIndex={index}
                onSwipe={handleSwipe}
                gradient={gradient}
                totalCards={cards.length}
                currentCardNumber={currentIndex + 1}
              />
            ))}
        </AnimatePresence>

        {/* Completion State */}
        {isComplete && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center p-8 max-w-md">
              {lessonComplete ? (
                // Already completed lesson - show summary card
                <div className="glass rounded-2xl p-6 border border-sage/30">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sage/20 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-sage" />
                  </div>
                  <h2 className="text-xl font-display font-bold text-sage mb-2">
                    Lesson Complete!
                  </h2>
                  <p className="text-text-secondary text-sm mb-3">
                    You've already completed this lesson.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-golden font-semibold">
                    <Sparkles className="w-4 h-4" />
                    <span>+{totalXP} XP this session</span>
                  </div>

                  {/* Next lesson button */}
                  {nextLesson && onNextLesson && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-6 pt-4 border-t border-white/10"
                    >
                      <Button
                        variant="secondary"
                        onClick={() => onNextLesson(nextLesson.lesson)}
                        className="w-full gap-2"
                      >
                        <span>Next: {nextLesson.lesson.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  )}
                </div>
              ) : showingCompletion ? (
                // Just completed - show celebration card with next lesson
                <div className="glass rounded-2xl p-6 border border-golden/30">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-golden/20 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-golden" />
                  </div>
                  <h2 className="text-xl font-display font-bold text-golden mb-2">
                    Lesson Complete!
                  </h2>
                  <div className="flex items-center justify-center gap-2 text-golden font-semibold mb-2">
                    <span>+{totalXP} XP earned</span>
                  </div>

                  {/* Next lesson preview */}
                  {nextLesson && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-6 pt-4 border-t border-white/10"
                    >
                      <p className="text-xs text-text-muted mb-2">Up next • {nextLesson.levelTitle}</p>
                      <div className="flex items-center justify-center gap-2 text-text-primary">
                        <ArrowRight className="w-4 h-4 text-sunrise animate-pulse" />
                        <span className="font-medium">{nextLesson.lesson.title}</span>
                      </div>
                      <motion.div
                        className="mt-3 h-1 bg-surface rounded-full overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <motion.div
                          className="h-full bg-gradient-to-r from-sunrise to-golden"
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 2, ease: 'linear' }}
                        />
                      </motion.div>
                    </motion.div>
                  )}

                  {!nextLesson && (
                    <p className="text-sm text-text-muted mt-4">
                      Great job! You've completed this section.
                    </p>
                  )}
                </div>
              ) : (
                // All cards done, confirm completion
                <>
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-golden/20 flex items-center justify-center">
                    <Sparkles className="w-10 h-10 text-golden" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-text-primary mb-2">
                    All Cards Complete!
                  </h2>
                  <p className="text-text-secondary mb-4">
                    You've gone through all {cards.length} cards and earned{' '}
                    <span className="text-golden font-semibold">+{totalXP} XP</span>
                  </p>
                  <Button
                    variant="primary"
                    onClick={handleComplete}
                    glow
                    className="gap-2"
                  >
                    Complete Lesson
                    <Sparkles className="w-4 h-4" />
                  </Button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </div>

      {/* Bottom Controls */}
      {!isComplete && (
        <div className="flex items-center justify-center gap-4 mt-6">
          {/* Undo button */}
          <button
            onClick={handleUndo}
            disabled={currentIndex === 0}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
              currentIndex === 0
                ? 'bg-surface/30 text-text-muted cursor-not-allowed'
                : 'bg-surface hover:bg-elevated text-text-primary'
            }`}
          >
            <RotateCcw className="w-5 h-5" />
          </button>

          {/* Quick swipe buttons for accessibility */}
          <button
            onClick={() => handleSwipe('right')}
            className="w-14 h-14 rounded-full bg-gradient-to-r from-sage/20 to-sage/30 border border-sage/50 flex items-center justify-center hover:scale-105 transition-transform"
          >
            <ChevronRight className="w-7 h-7 text-sage" />
          </button>
        </div>
      )}

      {/* Swipe instructions */}
      {!isComplete && (
        <p className="text-text-muted text-sm mt-4 text-center">
          Swipe cards to continue • Tap buttons for quick navigation
        </p>
      )}
    </div>
  );
}

export default TinderCardStack;
