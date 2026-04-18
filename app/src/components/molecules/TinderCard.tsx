import { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import type { PanInfo } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
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
  Star,
  Compass,
  Gem,
  Microscope,
  Lightbulb,
  Rocket,
  FlaskConical,
} from 'lucide-react';
import { useProgressStore } from '@/store/progressStore';
import type { CardContent } from '@/hooks/useCardStack';
import type { QuizQuestion } from '@/types';
import { RichMarkdown } from '@/components/molecules/RichMarkdown';
import { VizCardRenderer } from '@/components/molecules/VizCardRenderer';

interface TinderCardProps {
  card: CardContent;
  isTop: boolean;
  stackIndex: number;
  onSwipe: (direction: 'left' | 'right', quizCorrect?: boolean) => void;
  gradient: string;
  totalCards: number;
  currentCardNumber: number;
  lessonId?: string;
  moduleId?: string;
  heroImage?: string;
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

// Rotating visual themes for content cards so each feels different
const contentThemes = [
  { accent: 'bg-sky/15 border-sky/25', accentText: 'text-sky', icon: Compass, label: 'Explore' },
  { accent: 'bg-lavender/15 border-lavender/25', accentText: 'text-lavender', icon: Gem, label: 'Deep Dive' },
  { accent: 'bg-sage/15 border-sage/25', accentText: 'text-sage', icon: Microscope, label: 'Discover' },
  { accent: 'bg-golden/15 border-golden/25', accentText: 'text-golden', icon: Lightbulb, label: 'Insight' },
  { accent: 'bg-blush/15 border-blush/25', accentText: 'text-blush', icon: Lightbulb, label: 'Unpack' },
  { accent: 'bg-coral/15 border-coral/25', accentText: 'text-coral', icon: Rocket, label: 'Focus' },
];

// Solid opaque backgrounds per card type — inline styles to bypass light-mode CSS override
const cardBackgrounds: Record<CardContent['type'], string> = {
  overview: '#1A1610',
  content: '',        // uses bg-elevated class (adaptive)
  quiz: '#18161E',
  takeaway: '#151A15',
  action: '#1A1610',
  visualization: '#161020',
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
  };

  const isCorrect = selectedAnswer === quiz.correct;

  return (
    <div className="flex flex-col h-full">
      <p className="text-text-primary font-medium text-base leading-[1.5] mb-4">
        {quiz.question}
      </p>

      <div className="space-y-2 flex-1">
        {quiz.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(idx)}
            disabled={showResult}
            className={`w-full py-2.5 px-3 rounded-lg text-left transition-all border flex items-center gap-2.5 ${
              showResult
                ? idx === quiz.correct
                  ? 'bg-sage/15 border-sage/40'
                  : idx === selectedAnswer
                    ? 'bg-coral/15 border-coral/40'
                    : 'bg-surface/30 border-white/[0.06]'
                : selectedAnswer === idx
                  ? 'bg-lavender/15 border-lavender/40'
                  : 'bg-surface/30 border-white/[0.06] hover:border-white/20'
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
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
                <CheckCircle2 className="w-3.5 h-3.5" />
              ) : showResult && idx === selectedAnswer && idx !== quiz.correct ? (
                <X className="w-3.5 h-3.5" />
              ) : (
                String.fromCharCode(65 + idx)
              )}
            </div>
            <span className="text-sm leading-[1.5] text-text-primary flex-1">{option}</span>
          </button>
        ))}
      </div>

      {selectedAnswer !== null && !showResult && (
        <motion.button
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={handleSubmit}
          className="mt-3 mx-auto px-8 py-2 rounded-full bg-lavender/90 text-sm font-semibold text-white transition-all hover:bg-lavender shadow-lg shadow-lavender/20"
        >
          Check Answer
        </motion.button>
      )}

      {showResult && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-3 p-3 rounded-xl ${
            isCorrect
              ? 'bg-sage/8 border border-sage/25'
              : 'bg-coral/8 border border-coral/25'
          }`}
        >
          <p className={`font-semibold text-sm mb-0.5 ${isCorrect ? 'text-sage' : 'text-coral'}`}>
            {isCorrect ? 'Correct!' : 'Not quite!'}
          </p>
          <p className="text-text-secondary text-xs leading-[1.5]">{quiz.explanation}</p>
          <p className="text-text-muted text-[10px] uppercase tracking-[0.05em] mt-2">
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
  lessonId,
  moduleId,
  heroImage,
}: TinderCardProps) {
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizCorrect, setQuizCorrect] = useState(false);
  const constraintsRef = useRef(null);
  const navigate = useNavigate();

  // Starred cards
  const isCardStarred = useProgressStore((s) => s.isCardStarred);
  const starCard = useProgressStore((s) => s.starCard);
  const unstarCard = useProgressStore((s) => s.unstarCard);
  const isStarred = isCardStarred(card.id);

  const handleToggleStar = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isStarred) {
      unstarCard(card.id);
    } else if (lessonId && moduleId) {
      starCard({
        cardId: card.id,
        lessonId,
        moduleId,
        cardType: card.type,
        title: card.title,
        content: card.content,
      });
    }
  };

  // Motion values for drag
  const dragX = useMotionValue(0);
  const rotate = useTransform(dragX, [-200, 0, 200], [-15, 0, 15]);
  const rightIndicatorOpacity = useTransform(dragX, [0, 100], [0, 1]);
  const leftIndicatorOpacity = useTransform(dragX, [-100, 0], [1, 0]);

  // Get stack style
  const style = stackStyles[Math.min(stackIndex, 2)] || stackStyles[2];

  // For content cards, rotate through visual themes
  const contentTheme = card.type === 'content'
    ? contentThemes[currentCardNumber % contentThemes.length]
    : null;

  // Get icon component
  const IconComponent = contentTheme?.icon
    ?? (card.icon ? iconMap[card.icon as keyof typeof iconMap] : FileText);

  // Card type display label
  const typeLabel = contentTheme?.label
    ?? (card.type === 'overview' ? 'Overview'
      : card.type === 'takeaway' ? 'Key Takeaway'
      : card.type === 'action' ? 'Try This'
      : card.type === 'quiz' ? 'Quick Check'
      : card.type === 'visualization' ? 'Reward'
      : card.type);

  // Solid opaque background — hex value for inline style, empty string falls back to bg-elevated class
  const cardBgHex = cardBackgrounds[card.type];

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
        style={isTop ? { x: dragX, rotate, ...(cardBgHex ? { backgroundColor: cardBgHex } : {}) } : (cardBgHex ? { backgroundColor: cardBgHex } : {})}
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
          relative w-full max-w-md mx-4 ${card.type === 'visualization' ? 'h-full' : 'h-[500px]'} rounded-2xl border border-white/10
          ${card.type === 'content' ? 'bg-elevated' : ''}
          shadow-xl cursor-grab active:cursor-grabbing
          touch-none select-none flex flex-col
        `}
      >
        {/* Card Header — hidden for visualization cards */}
        <div className={`flex items-center justify-between p-4 border-b border-white/10 ${card.type === 'visualization' ? 'hidden' : ''}`}>
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
              contentTheme
                ? contentTheme.accent
                : card.type === 'overview' ? 'bg-golden/15 border-golden/25'
                : card.type === 'takeaway' ? 'bg-sage/15 border-sage/25'
                : card.type === 'action' ? 'bg-sunrise/15 border-sunrise/25'
                : card.type === 'quiz' ? 'bg-lavender/15 border-lavender/25'
                : card.type === 'visualization' ? 'bg-lavender/15 border-lavender/25'
                : 'bg-white/10 border-white/10'
            }`}>
              <IconComponent className={`w-5 h-5 ${
                contentTheme
                  ? contentTheme.accentText
                  : card.type === 'overview' ? 'text-golden'
                  : card.type === 'takeaway' ? 'text-sage'
                  : card.type === 'action' ? 'text-sunrise'
                  : card.type === 'quiz' ? 'text-lavender'
                  : card.type === 'visualization' ? 'text-lavender'
                  : 'text-text-primary'
              }`} />
            </div>
            <div>
              <p className={`text-[12px] font-mono font-semibold uppercase tracking-[0.05em] ${
                contentTheme
                  ? contentTheme.accentText
                  : card.type === 'overview' ? 'text-golden'
                  : card.type === 'takeaway' ? 'text-sage'
                  : card.type === 'action' ? 'text-sunrise'
                  : card.type === 'quiz' ? 'text-lavender'
                  : card.type === 'visualization' ? 'text-lavender'
                  : 'text-text-muted'
              }`}>
                {typeLabel}
              </p>
              <h3 className="font-display font-semibold text-text-primary text-[15px] leading-snug">
                {card.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className={`flex-1 overflow-y-auto ${card.type === 'visualization' ? 'p-0' : 'px-6 py-5'}`}>
          {card.type === 'quiz' && card.quiz ? (
            <QuizCardContent quiz={card.quiz} onAnswer={handleQuizAnswer} />
          ) : card.type === 'overview' ? (
            <div className="flex flex-col h-full -mx-6 -mt-5">
              {/* Hero image with gradient fade */}
              {heroImage ? (
                <div className="relative w-full flex-shrink-0" style={{ height: '45%' }}>
                  <img
                    src={heroImage}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1610] via-[#1A1610]/30 to-transparent" />
                </div>
              ) : (
                <div className="relative w-full flex-shrink-0 flex items-center justify-center bg-gradient-to-b from-golden/10 to-transparent" style={{ height: '35%' }}>
                  <div className="w-16 h-16 rounded-2xl bg-golden/15 border border-golden/25 flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-golden" />
                  </div>
                </div>
              )}
              {/* Content below image */}
              <div className="flex-1 flex flex-col justify-center px-6 pb-2">
                <h2 className="font-display font-bold text-xl text-text-primary leading-snug mb-3">
                  {card.title}
                </h2>
                <p className="text-text-secondary leading-[1.6] text-sm">
                  {card.content}
                </p>
                <p className="text-golden text-[11px] uppercase tracking-[0.08em] font-semibold mt-4">
                  Swipe right to begin
                </p>
              </div>
            </div>
          ) : card.type === 'takeaway' ? (
            <div className="flex flex-col h-full justify-center">
              <div className="p-4 rounded-xl bg-sage/8 border border-sage/20">
                <div className="flex items-center gap-2 mb-3">
                  <Gem className="w-4 h-4 text-sage" />
                  <span className="text-[12px] font-semibold text-sage uppercase tracking-[0.05em]">Remember This</span>
                </div>
                <p className="text-text-primary leading-[1.5] text-base font-medium">
                  {card.content}
                </p>
              </div>
            </div>
          ) : card.type === 'action' ? (
            <div className="flex flex-col h-full justify-center">
              <div className="p-4 rounded-xl bg-sunrise/8 border border-sunrise/20">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-4 h-4 text-sunrise" />
                  <span className="text-[12px] font-semibold text-sunrise uppercase tracking-[0.05em]">Your Move</span>
                </div>
                <p className="text-text-primary leading-[1.5] text-base">
                  {card.content}
                </p>
              </div>
            </div>
          ) : card.type === 'visualization' && card.vizId ? (
            <div className="w-full h-full flex flex-col">
              <div className="flex-1 overflow-hidden">
                <VizCardRenderer vizId={card.vizId} />
              </div>
              {/* Action buttons */}
              <div className="flex gap-3 px-4 py-4 border-t border-white/10">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSwipe('right');
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-golden/15 border border-golden/25 text-golden text-sm font-medium hover:bg-golden/25 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                  Continue
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/visualizations?viz=${card.vizId}`);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-lavender/15 border border-lavender/25 text-lavender text-sm font-medium hover:bg-lavender/25 transition-colors"
                >
                  <FlaskConical className="w-4 h-4" />
                  Visual Lab
                </motion.button>
              </div>
            </div>
          ) : (
            <div className="prose prose-invert prose-sm prose-p:leading-[1.5]">
              <RichMarkdown content={card.content} />
            </div>
          )}
        </div>

        {/* Footer — progress bar, counter, star — hidden for visualization cards */}
        <div className={`flex items-center gap-3 px-4 py-3 border-t border-white/[0.06] ${card.type === 'visualization' ? 'hidden' : ''}`}>
          <div className="flex-1 h-1 rounded-full bg-white/[0.06] overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-golden/80 to-golden"
              initial={{ width: 0 }}
              animate={{ width: `${(currentCardNumber / totalCards) * 100}%` }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            />
          </div>
          <span className="text-[10px] font-mono text-text-muted/60 tracking-wide flex-shrink-0">
            {Math.round((currentCardNumber / totalCards) * 100)}%
          </span>
          {lessonId && moduleId ? (
            <motion.button
              onClick={handleToggleStar}
              whileTap={{ scale: 0.85 }}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${
                isStarred
                  ? 'bg-golden/20 border border-golden/30'
                  : 'bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08]'
              }`}
            >
              <Star
                className={`w-4 h-4 transition-colors ${
                  isStarred ? 'text-golden fill-golden' : 'text-text-muted/50'
                }`}
              />
            </motion.button>
          ) : <div className="w-8 flex-shrink-0" />}
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
      </motion.div>
    </motion.div>
  );
}

export default TinderCard;
