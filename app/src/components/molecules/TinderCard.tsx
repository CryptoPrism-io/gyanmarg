import { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import type { PanInfo } from 'framer-motion';
import {
  BookOpen,
  Brain,
  Target,
  Zap,
  FileText,
  ChevronRight,
  RotateCcw,
  CheckCircle2,
  X,
} from 'lucide-react';
import type { CardContent } from '@/hooks/useCardStack';
import type { QuizQuestion } from '@/types';
import { RichMarkdown } from '@/components/molecules/RichMarkdown';

interface TinderCardProps {
  card: CardContent;
  isTop: boolean;
  stackIndex: number;
  onSwipe: (direction: 'left' | 'right', quizCorrect?: boolean) => void;
  gradient: string;
  totalCards: number;
  currentCardNumber: number;
}

const SWIPE_THRESHOLD = 100;
const SWIPE_VELOCITY = 500;

const iconMap = {
  BookOpen,
  Brain,
  Target,
  Zap,
  FileText,
};

const cardGradients: Record<CardContent['type'], string> = {
  overview: 'from-sunrise/20 to-golden/10',
  content: 'from-elevated/80 to-surface/60',
  quiz: 'from-lavender/20 to-lavender/5',
  takeaway: 'from-sage/20 to-sage/5',
  action: 'from-golden/20 to-sunrise/5',
};

// Stack positioning for page-like effect (x-axis offset - left to right natural flow)
const stackStyles = [
  { scale: 1, x: 0, zIndex: 3, opacity: 1, blur: 0 },           // Top card - in focus
  { scale: 0.97, x: -16, zIndex: 2, opacity: 0.8, blur: 1 },    // Middle - slight blur, offset left
  { scale: 0.94, x: -32, zIndex: 1, opacity: 0.6, blur: 2 },    // Back - more blur, offset left
];

interface QuizCardContentProps {
  quiz: QuizQuestion;
  onAnswer: (correct: boolean) => void;
}

function QuizCardContent({ quiz, onAnswer: _onAnswer }: QuizCardContentProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    setShowResult(true);
    // Don't call onAnswer here - let user swipe to continue
  };

  const isCorrect = selectedAnswer === quiz.correct;

  return (
    <div className="space-y-4">
      <p className="text-text-primary font-medium text-lg leading-relaxed">
        {quiz.question}
      </p>

      <div className="space-y-2">
        {quiz.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(idx)}
            disabled={showResult}
            className={`w-full p-3 rounded-xl text-left transition-all border-2 flex items-center gap-3 ${
              showResult
                ? idx === quiz.correct
                  ? 'bg-sage/20 border-sage'
                  : idx === selectedAnswer
                    ? 'bg-coral/20 border-coral'
                    : 'bg-surface/30 border-white/10'
                : selectedAnswer === idx
                  ? 'bg-lavender/20 border-lavender'
                  : 'bg-surface/30 border-white/10 hover:border-white/30'
            }`}
          >
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${
                showResult
                  ? idx === quiz.correct
                    ? 'bg-sage text-base'
                    : idx === selectedAnswer
                      ? 'bg-coral text-base'
                      : 'bg-surface text-text-muted'
                  : selectedAnswer === idx
                    ? 'bg-lavender text-base'
                    : 'bg-surface text-text-muted'
              }`}
            >
              {showResult && idx === quiz.correct ? (
                <CheckCircle2 className="w-4 h-4" />
              ) : showResult && idx === selectedAnswer && idx !== quiz.correct ? (
                <X className="w-4 h-4" />
              ) : (
                String.fromCharCode(65 + idx)
              )}
            </div>
            <span className="text-sm text-text-primary flex-1">{option}</span>
          </button>
        ))}
      </div>

      {selectedAnswer !== null && !showResult && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={handleSubmit}
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-lavender to-lavender-light text-base font-semibold transition-all hover:opacity-90"
        >
          Check Answer
        </motion.button>
      )}

      {showResult && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-xl ${
            isCorrect
              ? 'bg-sage/10 border border-sage/30'
              : 'bg-coral/10 border border-coral/30'
          }`}
        >
          <p className={`font-semibold mb-1 ${isCorrect ? 'text-sage' : 'text-coral'}`}>
            {isCorrect ? 'Correct!' : 'Not quite!'}
          </p>
          <p className="text-text-secondary text-sm">{quiz.explanation}</p>
          <p className="text-text-muted text-xs mt-2">
            Swipe right to continue →
          </p>
        </motion.div>
      )}
    </div>
  );
}

export function TinderCard({
  card,
  isTop,
  stackIndex,
  onSwipe,
  totalCards,
  currentCardNumber,
}: TinderCardProps) {
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizCorrect, setQuizCorrect] = useState(false);
  const constraintsRef = useRef(null);

  // Motion values for drag
  const dragX = useMotionValue(0);
  const rotate = useTransform(dragX, [-200, 0, 200], [-15, 0, 15]);
  const rightIndicatorOpacity = useTransform(dragX, [0, 100], [0, 1]);
  const leftIndicatorOpacity = useTransform(dragX, [-100, 0], [1, 0]);

  // Get stack style
  const style = stackStyles[Math.min(stackIndex, 2)] || stackStyles[2];

  // Get card-specific gradient
  const cardGradient = cardGradients[card.type];

  // Get icon component
  const IconComponent = card.icon ? iconMap[card.icon as keyof typeof iconMap] : FileText;

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const { offset, velocity } = info;

    // Check if swipe threshold or velocity is met
    if (offset.x > SWIPE_THRESHOLD || velocity.x > SWIPE_VELOCITY) {
      // For quiz cards, pass whether the answer was correct
      if (card.type === 'quiz') {
        onSwipe('right', quizCorrect);
      } else {
        onSwipe('right');
      }
    } else if (offset.x < -SWIPE_THRESHOLD || velocity.x < -SWIPE_VELOCITY) {
      onSwipe('left');
    }
  };

  const handleQuizAnswer = (correct: boolean) => {
    setQuizAnswered(true);
    setQuizCorrect(correct);
  };

  // For quiz cards that haven't been answered, disable swipe
  const canSwipe = card.type !== 'quiz' || quizAnswered;

  return (
    <motion.div
      ref={constraintsRef}
      className="absolute inset-0 flex items-center justify-center"
      style={{ zIndex: style.zIndex }}
    >
      <motion.div
        drag={isTop && canSwipe ? 'x' : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.9}
        onDragEnd={handleDragEnd}
        style={isTop ? { x: dragX, rotate } : {}}
        initial={{
          scale: style.scale,
          x: style.x,
          opacity: style.opacity,
          filter: `blur(${style.blur}px)`,
        }}
        animate={{
          scale: style.scale,
          x: isTop ? 0 : style.x,
          opacity: style.opacity,
          filter: `blur(${style.blur}px)`,
        }}
        exit={{
          x: 500,
          rotate: 30,
          opacity: 0,
          transition: { duration: 0.3 },
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
          filter: { type: 'tween', duration: 0.3 }  // Tween for blur to avoid negative values
        }}
        className={`
          relative w-full max-w-md mx-4 h-[420px] rounded-2xl border border-white/10
          bg-gradient-to-br ${cardGradient}
          backdrop-blur-sm shadow-xl cursor-grab active:cursor-grabbing
          touch-none select-none flex flex-col
        `}
      >
        {/* Card Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <IconComponent className="w-5 h-5 text-text-primary" />
            </div>
            <div>
              <p className="text-xs text-text-muted uppercase tracking-wide">
                {card.type}
              </p>
              <h3 className="font-display font-semibold text-text-primary">
                {card.title}
              </h3>
            </div>
          </div>
          <div className="text-xs text-text-muted px-2 py-1 rounded-full bg-white/5">
            {currentCardNumber}/{totalCards}
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5 flex-1 overflow-y-auto">
          {card.type === 'quiz' && card.quiz ? (
            <QuizCardContent quiz={card.quiz} onAnswer={handleQuizAnswer} />
          ) : (
            <div className="prose prose-invert prose-sm">
              {card.type === 'content' ? (
                <RichMarkdown content={card.content} />
              ) : (
                <p className="text-text-secondary leading-relaxed text-base">
                  {card.content}
                </p>
              )}
            </div>
          )}
        </div>

        {/* XP Badge */}
        <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-golden/20 border border-golden/30">
          <span className="text-xs font-semibold text-golden">
            +{card.type === 'quiz' ? '1-5' : card.xpReward} XP
          </span>
        </div>

        {/* Swipe Indicators (only on top card) */}
        {isTop && canSwipe && (
          <>
            {/* Left indicator */}
            <motion.div
              style={{ opacity: leftIndicatorOpacity }}
              className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
            >
              <div className="w-12 h-12 rounded-full bg-coral/20 border border-coral/50 flex items-center justify-center">
                <RotateCcw className="w-6 h-6 text-coral" />
              </div>
            </motion.div>

            {/* Right indicator */}
            <motion.div
              style={{ opacity: rightIndicatorOpacity }}
              className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
            >
              <div className="w-12 h-12 rounded-full bg-sage/20 border border-sage/50 flex items-center justify-center">
                <ChevronRight className="w-6 h-6 text-sage" />
              </div>
            </motion.div>
          </>
        )}

        {/* Swipe hint */}
        {isTop && canSwipe && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-text-muted text-xs flex items-center gap-2">
            <span>← revisit</span>
            <span className="w-8 h-0.5 bg-white/20 rounded" />
            <span>continue →</span>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default TinderCard;
