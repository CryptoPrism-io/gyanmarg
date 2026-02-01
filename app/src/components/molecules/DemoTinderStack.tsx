import { useState, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import type { PanInfo } from 'framer-motion';
import {
  BookOpen,
  Brain,
  Target,
  ChevronRight,
  RotateCcw,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

interface DemoCard {
  id: string;
  type: 'overview' | 'content' | 'takeaway';
  title: string;
  content: string;
  icon: 'BookOpen' | 'Brain' | 'Target';
  xpReward: number;
}

interface DemoTinderStackProps {
  cards?: DemoCard[];
  className?: string;
  onComplete?: () => void;
}

const defaultCards: DemoCard[] = [
  {
    id: 'demo-1',
    type: 'overview',
    title: 'What You\'ll Learn',
    content: 'Swipe-based learning makes studying intuitive and engaging. Each card builds on the previous one, creating a natural flow of information.',
    icon: 'BookOpen',
    xpReward: 5,
  },
  {
    id: 'demo-2',
    type: 'content',
    title: 'Active Recall',
    content: 'By swiping through cards and engaging with quizzes, you\'re using active recall — the most effective learning technique backed by cognitive science.',
    icon: 'Brain',
    xpReward: 10,
  },
  {
    id: 'demo-3',
    type: 'takeaway',
    title: 'Key Insight',
    content: 'The effort of retrieving information strengthens memory far more than passive re-reading. This is why Polymind focuses on interaction over consumption.',
    icon: 'Target',
    xpReward: 15,
  },
];

const iconMap = {
  BookOpen,
  Brain,
  Target,
};

const cardGradients: Record<DemoCard['type'], string> = {
  overview: 'from-sunrise/20 to-golden/10',
  content: 'from-elevated/80 to-surface/60',
  takeaway: 'from-sage/20 to-sage/5',
};

const SWIPE_THRESHOLD = 80;

/**
 * Standalone demo TinderCard stack for blog embeds and How-To page.
 * No store dependencies - works in isolation with sample data.
 */
export function DemoTinderStack({
  cards = defaultCards,
  className = '',
  onComplete,
}: DemoTinderStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalXP, setTotalXP] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const visibleCards = cards.slice(currentIndex, currentIndex + 3);
  const progress = cards.length > 0 ? ((currentIndex) / cards.length) * 100 : 0;

  const handleSwipe = useCallback((direction: 'left' | 'right') => {
    if (direction === 'right' && currentIndex < cards.length) {
      setTotalXP(prev => prev + cards[currentIndex].xpReward);
    }

    if (currentIndex + 1 >= cards.length) {
      setIsComplete(true);
      onComplete?.();
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, cards, onComplete]);

  const handleReset = () => {
    setCurrentIndex(0);
    setTotalXP(0);
    setIsComplete(false);
  };

  return (
    <div className={`max-w-md mx-auto ${className}`}>
      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-text-muted">
            {currentIndex} of {cards.length} cards
          </span>
          <span className="text-sm font-semibold text-golden">
            +{totalXP} XP
          </span>
        </div>
        <div className="h-2 bg-surface rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-sunrise to-golden"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Card Stack Area */}
      <div className="relative h-[380px]">
        <AnimatePresence mode="popLayout">
          {!isComplete && visibleCards.map((card, index) => (
            <DemoCard
              key={card.id}
              card={card}
              isTop={index === 0}
              stackIndex={index}
              onSwipe={handleSwipe}
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
            <div className="text-center p-6 glass rounded-2xl border border-golden/30">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-golden/20 flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-golden" />
              </div>
              <h3 className="text-lg font-display font-bold text-golden mb-2">
                Demo Complete!
              </h3>
              <p className="text-sm text-text-secondary mb-3">
                You earned <span className="text-golden font-semibold">+{totalXP} XP</span>
              </p>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-surface hover:bg-elevated rounded-lg text-text-primary text-sm font-medium transition-colors flex items-center gap-2 mx-auto"
              >
                <RotateCcw className="w-4 h-4" />
                Try Again
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Controls */}
      {!isComplete && (
        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            onClick={() => handleSwipe('left')}
            className="w-10 h-10 rounded-full bg-surface/50 hover:bg-surface flex items-center justify-center text-text-muted hover:text-text-primary transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleSwipe('right')}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-sage/20 to-sage/30 border border-sage/50 flex items-center justify-center hover:scale-105 transition-transform"
          >
            <ChevronRight className="w-6 h-6 text-sage" />
          </button>
        </div>
      )}

      <p className="text-text-muted text-xs mt-3 text-center">
        Swipe cards or use buttons to navigate
      </p>
    </div>
  );
}

// Individual demo card component
interface DemoCardProps {
  card: DemoCard;
  isTop: boolean;
  stackIndex: number;
  onSwipe: (direction: 'left' | 'right') => void;
  totalCards: number;
  currentCardNumber: number;
}

const stackStyles = [
  { scale: 1, x: 0, zIndex: 3, opacity: 1 },
  { scale: 0.97, x: -12, zIndex: 2, opacity: 0.8 },
  { scale: 0.94, x: -24, zIndex: 1, opacity: 0.6 },
];

function DemoCard({
  card,
  isTop,
  stackIndex,
  onSwipe,
  totalCards,
  currentCardNumber,
}: DemoCardProps) {
  const dragX = useMotionValue(0);
  const rotate = useTransform(dragX, [-200, 0, 200], [-12, 0, 12]);
  const rightIndicatorOpacity = useTransform(dragX, [0, 80], [0, 1]);
  const leftIndicatorOpacity = useTransform(dragX, [-80, 0], [1, 0]);

  const style = stackStyles[Math.min(stackIndex, 2)];
  const cardGradient = cardGradients[card.type];
  const IconComponent = iconMap[card.icon];

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const { offset } = info;
    if (Math.abs(offset.x) > SWIPE_THRESHOLD) {
      onSwipe(offset.x > 0 ? 'right' : 'left');
    }
  };

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{ zIndex: style.zIndex }}
    >
      <motion.div
        drag={isTop ? 'x' : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.9}
        onDragEnd={handleDragEnd}
        style={isTop ? { x: dragX, rotate } : {}}
        initial={{
          scale: style.scale,
          x: style.x,
          opacity: style.opacity,
        }}
        animate={{
          scale: style.scale,
          x: isTop ? 0 : style.x,
          opacity: style.opacity,
        }}
        exit={{
          x: 400,
          rotate: 20,
          opacity: 0,
          transition: { duration: 0.25 },
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
        className={`
          relative w-full h-[340px] rounded-2xl border border-white/10
          bg-gradient-to-br ${cardGradient}
          backdrop-blur-sm shadow-xl cursor-grab active:cursor-grabbing
          touch-none select-none flex flex-col
        `}
      >
        {/* Card Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
              <IconComponent className="w-4 h-4 text-text-primary" />
            </div>
            <div>
              <p className="text-xs text-text-muted uppercase tracking-wide">
                {card.type}
              </p>
              <h3 className="font-display font-semibold text-text-primary text-sm">
                {card.title}
              </h3>
            </div>
          </div>
          <div className="text-xs text-text-muted px-2 py-1 rounded-full bg-white/5">
            {currentCardNumber}/{totalCards}
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5 flex-1 flex items-center">
          <p className="text-text-secondary leading-relaxed text-sm">
            {card.content}
          </p>
        </div>

        {/* XP Badge */}
        <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-golden/20 border border-golden/30">
          <span className="text-xs font-semibold text-golden">
            +{card.xpReward} XP
          </span>
        </div>

        {/* Swipe Indicators */}
        {isTop && (
          <>
            <motion.div
              style={{ opacity: leftIndicatorOpacity }}
              className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
            >
              <div className="w-10 h-10 rounded-full bg-coral/20 border border-coral/50 flex items-center justify-center">
                <RotateCcw className="w-5 h-5 text-coral" />
              </div>
            </motion.div>
            <motion.div
              style={{ opacity: rightIndicatorOpacity }}
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
            >
              <div className="w-10 h-10 rounded-full bg-sage/20 border border-sage/50 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-sage" />
              </div>
            </motion.div>
          </>
        )}

        {/* Swipe hint */}
        {isTop && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-text-muted text-xs flex items-center gap-2">
            <span>← back</span>
            <span className="w-6 h-0.5 bg-white/20 rounded" />
            <span>next →</span>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default DemoTinderStack;
