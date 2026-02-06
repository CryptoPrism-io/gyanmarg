import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Sparkles, RotateCcw, ChevronRight } from 'lucide-react';
import { TinderCard } from '@/components/molecules/TinderCard';
import { FloatingXP } from '@/components/atoms/FloatingXP';
import { QuickGamePicker } from '@/components/games/QuickGamePicker';

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
  moduleId?: string;
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

const COUNTDOWN_SECONDS = 7;

const CELEBRATION_COLORS = ['#F7C948', '#FF6B6B', '#48BB78', '#805AD5', '#4299E1', '#ED8936'];

function CelebrationBurst() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 14 }, (_, i) => {
        const angle = (i / 14) * 360;
        const rad = angle * Math.PI / 180;
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

export function TinderCardStack({
  lesson,
  onComplete,
  isComplete: lessonComplete,
  moduleColor = 'orange',
  moduleId,
  onXPEarned,
  nextLesson,
  onNextLesson,
}: TinderCardStackProps) {
  const gradient = colorGradients[moduleColor] || colorGradients.orange;
  const { playXpGain, playSuccess, playClick } = useSoundEffects();
  const [showingCompletion, setShowingCompletion] = useState(false);
  const [showQuickGame, setShowQuickGame] = useState(false);
  const [gameBonusXP, setGameBonusXP] = useState(0);
  const [countdown, setCountdown] = useState(COUNTDOWN_SECONDS);
  const autoCompletedRef = useRef(false);
  const [cardReady, setCardReady] = useState(false);
  const CARD_COOLDOWN = 1.5; // seconds before next card is allowed

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
      // Block swipe during cooldown
      if (!cardReady) return;

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
    [swipeCard, playXpGain, playClick, cardReady]
  );

  const handleFloatingXPComplete = useCallback(() => {
    setFloatingXP({ amount: 0, show: false });
  }, []);

  const handleUndo = useCallback(() => {
    undoSwipe();
    playClick();
  }, [undoSwipe, playClick]);

  // Mark lesson done (without showing celebration yet)
  const markLessonDone = useCallback(() => {
    playSuccess();
    onComplete();
  }, [onComplete, playSuccess]);

  // When quick game finishes → show celebration
  const handleGameFinish = useCallback((gameXP: number) => {
    setGameBonusXP(gameXP);
    setShowQuickGame(false);
    setShowingCompletion(true);
    setCountdown(COUNTDOWN_SECONDS);
  }, []);

  // Auto-complete when all cards are swiped: mark done → show quick game
  useEffect(() => {
    if (isComplete && !lessonComplete && !showingCompletion && !showQuickGame && !autoCompletedRef.current) {
      autoCompletedRef.current = true;
      // Small delay so the last card animation finishes
      const timer = setTimeout(() => {
        markLessonDone();
        setShowQuickGame(true);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isComplete, lessonComplete, showingCompletion, showQuickGame, markLessonDone]);

  // Auto-advance countdown — only when showing a completion UI (not during quick game)
  const shouldCountdown = isComplete && !showQuickGame && (showingCompletion || lessonComplete) && !!nextLesson && !!onNextLesson;
  useEffect(() => {
    if (shouldCountdown) {
      if (countdown <= 0) {
        onNextLesson!(nextLesson!.lesson);
        return;
      }
      const timer = setTimeout(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [shouldCountdown, countdown, nextLesson, onNextLesson]);

  // Card cooldown: prevent spam-clicking through cards
  useEffect(() => {
    setCardReady(false);
    const timer = setTimeout(() => {
      setCardReady(true);
    }, CARD_COOLDOWN * 1000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Visible cards (current + next 2)
  const visibleCards = cards.slice(currentIndex, currentIndex + 3);

  const combinedXP = totalXP + gameBonusXP;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[60vh] py-8">
      {/* Progress Bar — hidden during quick game and completion */}
      {!isComplete && (
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
      )}

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
                lessonId={lesson.id}
                moduleId={moduleId}
              />
            ))}
        </AnimatePresence>

        {/* Quick Game Phase */}
        {isComplete && showQuickGame && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-0 flex items-center justify-center overflow-y-auto"
          >
            <div className="w-full max-w-md px-4 py-4">
              <QuickGamePicker lesson={lesson} onFinish={handleGameFinish} />
            </div>
          </motion.div>
        )}

        {/* Completion State */}
        {isComplete && !showQuickGame && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center p-8 max-w-md">
              {lessonComplete && !showingCompletion ? (
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

                  {/* Next lesson with countdown bar */}
                  {nextLesson && onNextLesson && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-6 pt-4 border-t border-white/10"
                    >
                      <p className="text-xs text-text-muted mb-3 text-center">
                        Up next in {countdown}s
                      </p>
                      <button
                        onClick={() => onNextLesson(nextLesson.lesson)}
                        className="relative w-full text-left p-3 rounded-xl border border-white/10 hover:border-golden/30 bg-white/[0.03] hover:bg-white/[0.06] transition-all group overflow-hidden"
                      >
                        {/* Countdown progress line at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.05]">
                          <motion.div
                            className="h-full bg-gradient-to-r from-golden to-sunrise"
                            initial={{ width: '100%' }}
                            animate={{ width: '0%' }}
                            transition={{ duration: COUNTDOWN_SECONDS, ease: 'linear' }}
                          />
                        </div>
                        <div className="relative">
                          <p className="text-sm font-medium text-text-primary group-hover:text-golden transition-colors">
                            {nextLesson.lesson.title}
                          </p>
                          <p className="text-xs text-text-muted mt-1">
                            {nextLesson.lesson.duration} min • {nextLesson.lesson.xpReward} XP
                          </p>
                        </div>
                      </button>
                    </motion.div>
                  )}
                </div>
              ) : showingCompletion ? (
                // Celebration with particle burst
                <div className="relative glass rounded-2xl p-6 border border-golden/30">
                  {/* Celebration particles */}
                  <CelebrationBurst />

                  {/* Celebration icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="relative w-16 h-16 mx-auto mb-4 rounded-full bg-golden/20 flex items-center justify-center"
                  >
                    <Sparkles className="w-8 h-8 text-golden" />
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="relative text-xl font-display font-bold text-golden mb-2"
                  >
                    Lesson Complete!
                  </motion.h2>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="relative flex items-center justify-center gap-2 text-golden font-semibold mb-1"
                  >
                    <span>+{combinedXP} XP earned</span>
                  </motion.div>

                  {gameBonusXP > 0 && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="relative text-xs text-text-muted mb-2"
                    >
                      includes +{gameBonusXP} game bonus
                    </motion.p>
                  )}

                  {/* Netflix-style next lesson countdown */}
                  {nextLesson && onNextLesson && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="relative mt-6 pt-4 border-t border-white/10"
                    >
                      <p className="text-xs text-text-muted mb-3">
                        Up next in {countdown}s • {nextLesson.levelTitle}
                      </p>

                      <button
                        onClick={() => onNextLesson(nextLesson.lesson)}
                        className="relative w-full text-left p-3 rounded-xl border border-white/10 hover:border-golden/30 bg-white/[0.03] hover:bg-white/[0.06] transition-all group overflow-hidden"
                      >
                        {/* Countdown progress line at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.05]">
                          <motion.div
                            className="h-full bg-gradient-to-r from-golden to-sunrise"
                            initial={{ width: '100%' }}
                            animate={{ width: '0%' }}
                            transition={{ duration: COUNTDOWN_SECONDS, ease: 'linear' }}
                          />
                        </div>
                        <div className="relative">
                          <p className="text-sm font-medium text-text-primary group-hover:text-golden transition-colors">
                            {nextLesson.lesson.title}
                          </p>
                          <p className="text-xs text-text-muted mt-1">
                            {nextLesson.lesson.duration} min • {nextLesson.lesson.xpReward} XP
                          </p>
                        </div>
                      </button>
                    </motion.div>
                  )}

                  {!nextLesson && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="relative text-sm text-text-muted mt-4"
                    >
                      Great job! You've completed this section.
                    </motion.p>
                  )}
                </div>
              ) : null}
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

          {/* Next card button with cooldown indicator */}
          <button
            onClick={() => handleSwipe('right')}
            disabled={!cardReady}
            className={`relative w-14 h-14 rounded-full border flex items-center justify-center transition-all overflow-hidden ${
              cardReady
                ? 'bg-gradient-to-r from-sage/20 to-sage/30 border-sage/50 hover:scale-105 cursor-pointer'
                : 'bg-surface/30 border-white/10 cursor-not-allowed'
            }`}
          >
            {/* Cooldown progress line - circular bottom sweep */}
            {!cardReady && (
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-golden to-sunrise"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: CARD_COOLDOWN, ease: 'linear' }}
              />
            )}
            <ChevronRight className={`w-7 h-7 ${cardReady ? 'text-sage' : 'text-white/20'}`} />
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
