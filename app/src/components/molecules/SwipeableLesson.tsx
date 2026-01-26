import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Lightbulb, Target, HelpCircle, CheckCircle, X } from 'lucide-react';
import { Button, Badge } from '@/components/atoms';
import type { PathwayLesson } from '@/types';

interface ContentCard {
  id: string;
  type: 'overview' | 'content' | 'takeaway' | 'action' | 'quiz';
  title?: string;
  content: string;
  icon?: React.ReactNode;
  color?: string;
}

interface SwipeableLessonProps {
  lesson: PathwayLesson;
  onComplete: () => void;
  isComplete: boolean;
  quizAnswer: number | null;
  setQuizAnswer: (answer: number | null) => void;
  showQuizResult: boolean;
  setShowQuizResult: (show: boolean) => void;
}

export function SwipeableLesson({
  lesson,
  onComplete,
  isComplete,
  quizAnswer,
  setQuizAnswer,
  showQuizResult,
  setShowQuizResult,
}: SwipeableLessonProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Break lesson content into cards
  const cards = useMemo(() => {
    const result: ContentCard[] = [];

    // Overview card
    result.push({
      id: 'overview',
      type: 'overview',
      title: lesson.title,
      content: lesson.content.overview,
      icon: <Lightbulb className="w-6 h-6" />,
      color: 'accent',
    });

    // Split main content into chunks (by double newlines or headers)
    const contentParts = lesson.content.mainContent
      .split(/\n\n(?=\*\*[^*]+\*\*)|(?<=\n\n)(?=\*\*[^*]+\*\*)/)
      .filter((p) => p.trim());

    // Group content into readable chunks (2-3 paragraphs per card)
    let currentChunk: string[] = [];
    contentParts.forEach((part, idx) => {
      currentChunk.push(part);
      // Create a card every 2 paragraphs or at a header
      if (currentChunk.length >= 2 || part.startsWith('**') || idx === contentParts.length - 1) {
        result.push({
          id: `content-${result.length}`,
          type: 'content',
          content: currentChunk.join('\n\n'),
        });
        currentChunk = [];
      }
    });

    // Key takeaway card
    result.push({
      id: 'takeaway',
      type: 'takeaway',
      title: 'Key Takeaway',
      content: lesson.content.keyTakeaway,
      icon: <Target className="w-6 h-6" />,
      color: 'warning',
    });

    // Action item card (if exists)
    if (lesson.content.actionItem) {
      result.push({
        id: 'action',
        type: 'action',
        title: 'Action Item',
        content: lesson.content.actionItem,
        icon: <CheckCircle className="w-6 h-6" />,
        color: 'purple',
      });
    }

    // Quiz card (if exists)
    if (lesson.content.quiz) {
      result.push({
        id: 'quiz',
        type: 'quiz',
        title: 'Quick Check',
        content: lesson.content.quiz.question,
        icon: <HelpCircle className="w-6 h-6" />,
        color: 'blue',
      });
    }

    return result;
  }, [lesson]);

  const currentCard = cards[currentIndex];
  const isLastCard = currentIndex === cards.length - 1;
  const isQuizCard = currentCard?.type === 'quiz';
  const canComplete = !lesson.content.quiz || showQuizResult;

  const goNext = () => {
    if (currentIndex < cards.length - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    const threshold = 50;
    if (info.offset.x > threshold && currentIndex > 0) {
      goPrev();
    } else if (info.offset.x < -threshold && currentIndex < cards.length - 1) {
      goNext();
    }
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const colorClasses: Record<string, string> = {
    accent: 'from-accent/5 via-transparent to-indigo-500/5 border-accent/20',
    warning: 'from-warning/5 via-transparent to-amber-500/5 border-warning/20',
    purple: 'from-purple-500/5 via-transparent to-pink-500/5 border-purple-500/20',
    blue: 'from-blue-500/5 via-transparent to-cyan-500/5 border-blue-500/20',
    default: 'from-secondary/50 via-transparent to-elevated/50 border-border/50',
  };

  const iconColorClasses: Record<string, string> = {
    accent: 'text-accent',
    warning: 'text-warning',
    purple: 'text-purple-400',
    blue: 'text-blue-400',
    default: 'text-muted',
  };

  const accentBarColors: Record<string, string> = {
    accent: 'bg-accent',
    warning: 'bg-warning',
    purple: 'bg-purple-500',
    blue: 'bg-blue-500',
    default: 'bg-border',
  };

  const renderCardContent = (card: ContentCard) => {
    if (card.type === 'quiz' && lesson.content.quiz) {
      return (
        <div className="space-y-3">
          <p className="text-base text-primary font-medium text-center mb-4">{lesson.content.quiz.question}</p>
          <div className="space-y-2">
            {lesson.content.quiz.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => !showQuizResult && setQuizAnswer(idx)}
                disabled={showQuizResult}
                className={`w-full p-3 rounded-xl text-left transition-all text-sm ${
                  showQuizResult
                    ? idx === lesson.content.quiz!.correct
                      ? 'bg-success/20 border-2 border-success'
                      : idx === quizAnswer
                        ? 'bg-error/20 border-2 border-error'
                        : 'bg-primary/30 border border-border/50'
                    : quizAnswer === idx
                      ? 'bg-accent/20 border-2 border-accent'
                      : 'bg-primary/30 border border-border/50 hover:bg-primary/50'
                }`}
              >
                <span className="font-medium mr-2 text-muted">{String.fromCharCode(65 + idx)}.</span>
                <span className="text-primary">{option}</span>
              </button>
            ))}
          </div>

          {quizAnswer !== null && !showQuizResult && (
            <Button fullWidth onClick={() => setShowQuizResult(true)}>
              Check Answer
            </Button>
          )}

          {showQuizResult && (
            <div
              className={`p-3 rounded-xl text-center ${
                quizAnswer === lesson.content.quiz.correct ? 'bg-success/20' : 'bg-error/20'
              }`}
            >
              <p className="font-semibold mb-1 flex items-center justify-center gap-2">
                {quizAnswer === lesson.content.quiz.correct ? (
                  <>
                    <CheckCircle className="w-5 h-5 text-success" /> Correct!
                  </>
                ) : (
                  <>
                    <X className="w-5 h-5 text-error" /> Not quite
                  </>
                )}
              </p>
              <p className="text-xs text-secondary">{lesson.content.quiz.explanation}</p>
            </div>
          )}
        </div>
      );
    }

    // For overview, takeaway, action cards - centered quote style
    if (card.type === 'overview' || card.type === 'takeaway' || card.type === 'action') {
      return (
        <p className="text-lg text-center text-secondary leading-relaxed italic">
          "{card.content}"
        </p>
      );
    }

    // For content cards - clean readable text
    return (
      <div
        className="text-center text-secondary leading-loose text-base"
        dangerouslySetInnerHTML={{
          __html: card.content
            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary font-semibold block mt-4 mb-2 text-lg not-italic">$1</strong>')
            .replace(/\n\n/g, '</p><p class="mt-3">')
            .replace(/\n/g, '<br />'),
        }}
      />
    );
  };

  return (
    <div className="flex flex-col h-full">
      {/* Progress Dots */}
      <div className="flex justify-center gap-1.5 mb-4">
        {cards.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`h-1.5 rounded-full transition-all ${
              idx === currentIndex
                ? 'w-6 bg-accent'
                : idx < currentIndex
                  ? 'w-1.5 bg-success'
                  : 'w-1.5 bg-border'
            }`}
          />
        ))}
      </div>

      {/* Card Counter */}
      <div className="text-center text-sm text-muted mb-4">
        {currentIndex + 1} / {cards.length}
      </div>

      {/* Swipeable Card */}
      <div className="flex-1 relative overflow-hidden min-h-[450px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className={`absolute inset-0 rounded-3xl border-2 bg-gradient-to-b cursor-grab active:cursor-grabbing flex flex-col ${
              colorClasses[currentCard?.color || 'default']
            }`}
          >
            {/* Accent Bar at Top */}
            <div className={`h-1 rounded-t-3xl ${accentBarColors[currentCard?.color || 'default']}`} />

            {/* Card Content - Centered with lots of whitespace */}
            <div className="flex-1 flex flex-col justify-center px-8 py-12">
              {/* Card Header */}
              {currentCard?.title && (
                <div className="text-center mb-8">
                  {currentCard.icon && (
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/50 mb-4 ${iconColorClasses[currentCard.color || 'default']}`}>
                      {currentCard.icon}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-primary">{currentCard.title}</h3>
                </div>
              )}

              {/* Card Body - Constrained width for readability */}
              <div className="max-w-md mx-auto w-full">
                <div className="overflow-y-auto max-h-[200px] scrollbar-hide">
                  {renderCardContent(currentCard)}
                </div>
              </div>
            </div>

            {/* Bottom indicator */}
            <div className="pb-6 text-center">
              <span className="text-xs text-muted/50 uppercase tracking-widest">
                {currentCard?.type === 'quiz' ? 'Quiz Time' : currentCard?.type}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {currentIndex > 0 && (
          <button
            onClick={goPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/80 backdrop-blur border border-border flex items-center justify-center text-secondary hover:text-primary hover:bg-elevated transition-all z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}
        {currentIndex < cards.length - 1 && (
          <button
            onClick={goNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/80 backdrop-blur border border-border flex items-center justify-center text-secondary hover:text-primary hover:bg-elevated transition-all z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Swipe Hint */}
      <p className="text-center text-xs text-muted mt-4">
        Swipe or use arrows to navigate
      </p>

      {/* Complete Button (only on last card) */}
      {isLastCard && !isComplete && (
        <div className="mt-4">
          <Button
            fullWidth
            variant="success"
            onClick={onComplete}
            disabled={!canComplete}
          >
            {isQuizCard && !showQuizResult
              ? 'Complete the quiz first'
              : `Complete Lesson (+${lesson.xpReward} XP)`}
          </Button>
        </div>
      )}

      {isLastCard && isComplete && (
        <div className="mt-4 text-center py-4">
          <Badge variant="success" className="text-base px-4 py-2">
            Lesson Completed!
          </Badge>
        </div>
      )}
    </div>
  );
}

export default SwipeableLesson;
