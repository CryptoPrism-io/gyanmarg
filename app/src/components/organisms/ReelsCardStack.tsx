import { useState, useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, Brain } from 'lucide-react';
import { Icon } from '@/components/atoms/Icon';
import { useProgressStore } from '@/store/progressStore';
import { useCardStack } from '@/hooks/useCardStack';
import { useSoundEffects } from '@/hooks/useSoundEffects';
import { FloatingXP } from '@/components/atoms/FloatingXP';
import { RichMarkdown } from '@/components/molecules/RichMarkdown';
import { VizCardRenderer } from '@/components/molecules/VizCardRenderer';
import { GenerativeArt } from '@/components/atoms/GenerativeArt';
import type { PathwayLesson, QuizQuestion } from '@/types';
import type { CardContent } from '@/hooks/useCardStack';

interface NextLessonInfo {
  lesson: PathwayLesson;
  levelTitle: string;
}

interface ReelsCardStackProps {
  lesson: PathwayLesson;
  onComplete: () => void;
  isComplete: boolean;
  moduleColor?: string;
  moduleId?: string;
  nextLesson?: NextLessonInfo | null;
  onNextLesson?: (lesson: PathwayLesson) => void;
  flashcardCount?: number;
  heroImage?: string;
  isLastLessonInLevel?: boolean;
}

const COUNTDOWN_SECONDS = 7;

// Visual themes for content cards — editorial labels only (no icons)
const contentThemes = [
  { label: 'Explore' },
  { label: 'Deep Dive' },
  { label: 'Discover' },
  { label: 'Insight' },
  { label: 'Focus' },
];

// === QUIZ CARD ===
function QuizCardContent({ quiz, onAnswer }: { quiz: QuizQuestion; onAnswer: (correct: boolean) => void }) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    setShowResult(true);
    onAnswer(selectedAnswer === quiz.correct);
  };

  const isCorrect = selectedAnswer === quiz.correct;

  return (
    <div className="flex flex-col gap-4">
      <p className="text-text-primary font-display font-semibold text-lg leading-relaxed">
        {quiz.question}
      </p>

      <div className="space-y-2.5">
        {quiz.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(idx)}
            disabled={showResult}
            className={`w-full py-3.5 px-4 rounded-xl text-left transition-all border flex items-center gap-3 ${
              showResult
                ? idx === quiz.correct
                  ? 'bg-sage/12 border-sage/30'
                  : idx === selectedAnswer
                    ? 'bg-coral/12 border-coral/30'
                    : 'bg-white/[0.02] border-white/[0.06]'
                : selectedAnswer === idx
                  ? 'bg-lavender/12 border-lavender/30'
                  : 'bg-white/[0.02] border-white/[0.06] hover:border-white/15'
            }`}
          >
            <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
              showResult
                ? idx === quiz.correct
                  ? 'bg-sage text-base'
                  : idx === selectedAnswer ? 'bg-coral text-base' : 'bg-surface text-text-muted'
                : selectedAnswer === idx ? 'bg-lavender text-base' : 'bg-surface text-text-muted'
            }`}>
              {showResult && idx === quiz.correct ? (
                <CheckCircle2 className="w-4 h-4" />
              ) : showResult && idx === selectedAnswer && idx !== quiz.correct ? (
                <Icon name="close" size={16} weight={300} />
              ) : (
                String.fromCharCode(65 + idx)
              )}
            </div>
            <span className="text-sm text-text-primary leading-relaxed flex-1">{option}</span>
          </button>
        ))}
      </div>

      {selectedAnswer !== null && !showResult && (
        <motion.button
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={handleSubmit}
          className="mx-auto px-10 py-2.5 rounded-full bg-lavender/90 text-sm font-semibold text-white shadow-lg shadow-lavender/20"
        >
          Check Answer
        </motion.button>
      )}

      {showResult && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-xl ${isCorrect ? 'bg-sage/8 border border-sage/20' : 'bg-coral/8 border border-coral/20'}`}
        >
          <p className={`font-semibold text-sm mb-1 ${isCorrect ? 'text-sage' : 'text-coral'}`}>
            {isCorrect ? 'Correct!' : 'Not quite!'}
          </p>
          <p className="text-text-secondary text-sm leading-relaxed">{quiz.explanation}</p>
        </motion.div>
      )}
    </div>
  );
}

// === SINGLE REEL CARD ===
function ReelCard({
  card,
  index,
  totalCards,
  onQuizAnswer,
  lessonId,
  moduleId,
}: {
  card: CardContent;
  index: number;
  totalCards: number;
  onQuizAnswer: (correct: boolean) => void;
  lessonId?: string;
  moduleId?: string;
}) {
  const isCardStarred = useProgressStore((s) => s.isCardStarred);
  const starCard = useProgressStore((s) => s.starCard);
  const unstarCard = useProgressStore((s) => s.unstarCard);
  const isStarred = isCardStarred(card.id);

  const handleToggleStar = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isStarred) {
      unstarCard(card.id);
    } else if (lessonId && moduleId) {
      starCard({ cardId: card.id, lessonId, moduleId, cardType: card.type, title: card.title, content: card.content });
    }
  };

  const theme = card.type === 'content' ? contentThemes[index % contentThemes.length] : null;
  const typeLabel = theme?.label
    ?? (card.type === 'overview' ? 'Overview'
      : card.type === 'takeaway' ? 'Remember This'
      : card.type === 'action' ? 'Level Action'
      : card.type === 'quiz' ? 'Quick Check'
      : card.type === 'visualization' ? 'Reward'
      : card.type);

  return (
    <div className="h-full flex flex-col px-6 pb-6 pt-4">
      {/* Type label + bookmark — editorial style */}
      <div className="flex items-center justify-between mb-6 shrink-0">
        <div className="flex items-center gap-3">
          <span className={`text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]`}>{typeLabel}</span>
          <div className="w-8 h-[1px] bg-[var(--color-accent)]" />
        </div>
        {card.type !== 'quiz' && (
          <Icon
            name="bookmark"
            size={18}
            filled={isStarred}
            weight={isStarred ? 400 : 200}
            className={isStarred ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-muted)] opacity-40'}
            onClick={handleToggleStar}
          />
        )}
      </div>

      {/* Content — editorial typography */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent pr-1">
        {card.type === 'overview' && (
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-serif leading-[1.15] tracking-tight">{card.title}</h2>
            <p className="text-[15px] leading-[1.75] text-[var(--color-text-secondary)]">{card.content}</p>
          </div>
        )}

        {card.type === 'content' && (
          <div className="flex flex-col gap-4">
            {card.title && (
              <h3 className="text-xl font-serif tracking-tight">{card.title}</h3>
            )}
            <div className="text-[15px] text-[var(--color-text-secondary)] leading-[1.75]">
              <RichMarkdown content={card.content} />
            </div>
          </div>
        )}

        {card.type === 'quiz' && card.quiz && (
          <QuizCardContent quiz={card.quiz} onAnswer={onQuizAnswer} />
        )}

        {card.type === 'takeaway' && (
          <div className="flex flex-col justify-center h-full py-8">
            <div className="w-12 h-[1px] bg-[var(--color-sage)] mb-8" />
            <p className="text-2xl font-serif italic leading-[1.3] max-w-md">
              &ldquo;{card.content}&rdquo;
            </p>
          </div>
        )}

        {card.type === 'action' && (
          <div className="flex flex-col justify-center h-full py-8">
            <div className="w-12 h-[1px] bg-[var(--color-accent)] mb-8" />
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--color-accent)] mb-4">Your Move</p>
            <p className="text-xl font-serif leading-[1.4] max-w-md">
              {card.content}
            </p>
          </div>
        )}

        {card.type === 'visualization' && card.vizId && (
          <VizCardRenderer vizId={card.vizId} />
        )}

        {/* Generative particle art — fills blank space, forms constellation on completion */}
        {card.type !== 'quiz' && card.type !== 'visualization' && (
          <div className="mt-auto flex-1 min-h-[120px] max-h-[280px]">
            <GenerativeArt
              cardIndex={index}
              totalCards={totalCards}
              cardTitle={card.title}
              cardContent={card.content}
            />
          </div>
        )}
      </div>
    </div>
  );
}

// === MAIN REELS STACK ===
export function ReelsCardStack({
  lesson,
  onComplete,
  isComplete: lessonComplete,
  moduleId,
  nextLesson,
  onNextLesson,
  flashcardCount = 0,
  isLastLessonInLevel = false,
}: ReelsCardStackProps) {
  const { playXpGain, playSuccess } = useSoundEffects();
  const [showingCompletion, setShowingCompletion] = useState(false);
  const [countdown, setCountdown] = useState(COUNTDOWN_SECONDS);
  const autoCompletedRef = useRef(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const quizAnsweredRef = useRef<Set<string>>(new Set());
  const xpAwardedRef = useRef<Set<number>>(new Set());

  const addMicroXP = useProgressStore((s) => s.addMicroXP);

  const [floatingXP, setFloatingXP] = useState<{ amount: number; show: boolean }>({ amount: 0, show: false });

  const {
    cards,
    totalXP,
    swipeCard,
  } = useCardStack({
    lesson,
    onXPEarned: (amount) => addMicroXP(amount),
    isLastLessonInLevel,
  });

  // Award XP as user scrolls through cards
  useEffect(() => {
    if (activeCardIndex > 0 && !xpAwardedRef.current.has(activeCardIndex)) {
      xpAwardedRef.current.add(activeCardIndex);
      const card = cards[activeCardIndex - 1]; // Award for the card they just passed
      if (card && card.type !== 'quiz') {
        const xp = card.xpReward;
        swipeCard('right');
        setFloatingXP({ amount: xp, show: true });
        playXpGain();
      }
    }
  }, [activeCardIndex, cards, swipeCard, playXpGain]);

  const handleQuizAnswer = useCallback((cardId: string, correct: boolean) => {
    if (quizAnsweredRef.current.has(cardId)) return;
    quizAnsweredRef.current.add(cardId);
    swipeCard('right', correct);
    const xp = correct ? 5 : 1;
    setFloatingXP({ amount: xp, show: true });
    playXpGain();
  }, [swipeCard, playXpGain]);

  const handleFloatingXPComplete = useCallback(() => {
    setFloatingXP({ amount: 0, show: false });
  }, []);

  const markLessonDone = useCallback(() => {
    playSuccess();
    onComplete();
  }, [onComplete, playSuccess]);

  // Auto-complete when user scrolls to end
  useEffect(() => {
    if (activeCardIndex >= cards.length && cards.length > 0 && !lessonComplete && !showingCompletion && !autoCompletedRef.current) {
      autoCompletedRef.current = true;
      // Award XP for last card
      if (!xpAwardedRef.current.has(cards.length)) {
        xpAwardedRef.current.add(cards.length);
        const lastCard = cards[cards.length - 1];
        if (lastCard && lastCard.type !== 'quiz' && !quizAnsweredRef.current.has(lastCard.id)) {
          swipeCard('right');
        }
      }
      setTimeout(() => {
        markLessonDone();
        setShowingCompletion(true);
        setCountdown(COUNTDOWN_SECONDS);
      }, 300);
    }
  }, [activeCardIndex, cards, lessonComplete, showingCompletion, markLessonDone, swipeCard]);

  // Countdown for next lesson
  const shouldCountdown = (showingCompletion || lessonComplete) && activeCardIndex >= cards.length && !!nextLesson && !!onNextLesson;
  useEffect(() => {
    if (shouldCountdown) {
      if (countdown <= 0) {
        onNextLesson!(nextLesson!.lesson);
        return;
      }
      const timer = setTimeout(() => setCountdown(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [shouldCountdown, countdown, nextLesson, onNextLesson]);

  // Scroll observer: detect which card is in view
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const idx = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(idx)) setActiveCardIndex(idx);
          }
        }
      },
      { root: container, threshold: 0.5 }
    );

    const cards = container.querySelectorAll('[data-index]');
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [cards.length]);

  const completionXP = totalXP;

  const scrollProgress = cards.length > 0 ? ((activeCardIndex) / cards.length) * 100 : 0;

  return (
    <div className="relative flex flex-col h-full">
      {/* Floating XP */}
      <FloatingXP amount={floatingXP.amount} show={floatingXP.show} onComplete={handleFloatingXPComplete} />

      {/* Right-side vertical scroll indicator (Reels-style) */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-1.5">
        {cards.map((_, i) => (
          <motion.div
            key={i}
            className="rounded-full"
            animate={{
              width: activeCardIndex === i ? 4 : 3,
              height: activeCardIndex === i ? 14 : 6,
              backgroundColor: activeCardIndex === i ? '#F59E0B' : i < activeCardIndex ? 'rgba(245,158,11,0.4)' : 'rgba(255,255,255,0.12)',
            }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>

      {/* Top-left card counter + XP */}
      <div className="absolute top-2 left-4 right-12 z-20 flex items-center justify-between">
        <span className="text-[11px] text-text-muted/60 font-medium">{Math.min(activeCardIndex + 1, cards.length)} of {cards.length}</span>
        {totalXP > 0 && (
          <span className="text-[11px] font-bold text-golden/80">+{totalXP} XP</span>
        )}
      </div>

      {/* Thin scroll progress line at very top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] z-20 bg-white/[0.06]">
        <motion.div
          className="h-full bg-golden/60"
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Reels scroll container */}
      <div
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto snap-y snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>

        {cards.map((card, i) => (
          <div
            key={card.id}
            data-index={i}
            className="snap-start h-full w-full shrink-0 flex flex-col pt-8"
          >
            <ReelCard
              card={card}
              index={i}
              totalCards={cards.length}
              onQuizAnswer={(correct) => handleQuizAnswer(card.id, correct)}
              lessonId={lesson.id}
              moduleId={moduleId}
            />

            {/* Scroll-up hint at bottom */}
            {i < cards.length - 1 && activeCardIndex === i && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="shrink-0 flex flex-col items-center pb-4 pt-2 gap-1"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Icon name="expand_less" size={20} weight={200} className="text-white/25" />
                </motion.div>
                <span className="text-[10px] text-white/20">scroll up</span>
              </motion.div>
            )}
          </div>
        ))}

        {/* Completion slide */}
        <div data-index={cards.length} className="snap-start h-full w-full shrink-0 flex items-center justify-center pt-12">
          <div className="text-center p-8 max-w-md">
            {lessonComplete && !showingCompletion ? (
              <div className="glass rounded-2xl p-6 border border-sage/30">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sage/20 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-sage" />
                </div>
                <h2 className="text-xl font-display font-bold text-sage mb-2">Lesson Complete!</h2>
                <p className="text-text-secondary text-sm mb-3">You&apos;ve already completed this lesson.</p>
                <div className="flex items-center justify-center gap-2 text-golden font-semibold">
                  <Sparkles className="w-4 h-4" />
                  <span>+{totalXP} XP this session</span>
                </div>

                {flashcardCount > 0 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                    className="mt-3 py-2.5 px-4 rounded-xl border border-lavender/30 bg-lavender/10 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-lavender/20 flex items-center justify-center shrink-0">
                      <Brain className="w-4 h-4 text-lavender" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-lavender">Revision Available</p>
                      <p className="text-xs text-text-muted">{flashcardCount} flashcards to revise</p>
                    </div>
                  </motion.div>
                )}

                {nextLesson && onNextLesson && (
                  <NextLessonCountdown
                    nextLesson={nextLesson}
                    onNextLesson={onNextLesson}
                    countdown={countdown}
                  />
                )}
              </div>
            ) : showingCompletion ? (
              <div className="relative glass rounded-2xl p-6 border border-golden/30">
                <CelebrationBurst />
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className="relative w-16 h-16 mx-auto mb-4 rounded-full bg-golden/20 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-golden" />
                </motion.div>
                <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
                  className="relative text-xl font-display font-bold text-golden mb-2">
                  Lesson Complete!
                </motion.h2>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                  className="relative flex items-center justify-center gap-2 text-golden font-semibold mb-1">
                  <span>+{completionXP} XP earned</span>
                </motion.div>

                {flashcardCount > 0 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
                    className="relative mt-3 py-2.5 px-4 rounded-xl border border-lavender/30 bg-lavender/10 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-lavender/20 flex items-center justify-center shrink-0">
                      <Brain className="w-4 h-4 text-lavender" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-lavender">Revision Unlocked!</p>
                      <p className="text-xs text-text-muted">{flashcardCount} flashcards</p>
                    </div>
                  </motion.div>
                )}

                {nextLesson && onNextLesson && (
                  <NextLessonCountdown
                    nextLesson={nextLesson}
                    onNextLesson={onNextLesson}
                    countdown={countdown}
                  />
                )}

                {!nextLesson && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                    className="relative text-sm text-text-muted mt-4">
                    Great job! You&apos;ve completed this section.
                  </motion.p>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

// === NEXT LESSON COUNTDOWN ===
function NextLessonCountdown({ nextLesson, onNextLesson, countdown }: {
  nextLesson: NextLessonInfo;
  onNextLesson: (lesson: PathwayLesson) => void;
  countdown: number;
}) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
      className="relative mt-6 pt-4 border-t border-white/10">
      <p className="text-xs text-text-muted mb-3">Up next in {countdown}s</p>
      <button
        onClick={() => onNextLesson(nextLesson.lesson)}
        className="relative w-full text-left p-3 rounded-xl border border-white/10 hover:border-golden/30 bg-white/[0.03] hover:bg-white/[0.06] transition-all group overflow-hidden"
      >
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
            {nextLesson.lesson.duration} min &middot; {nextLesson.lesson.xpReward} XP
          </p>
        </div>
      </button>
    </motion.div>
  );
}

// === CELEBRATION BURST ===
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
            animate={{ opacity: 0, x: Math.cos(rad) * distance, y: Math.sin(rad) * distance - 20, scale: 0 }}
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

export default ReelsCardStack;
