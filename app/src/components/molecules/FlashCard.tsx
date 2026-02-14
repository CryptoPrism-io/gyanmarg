import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, Sparkles, ArrowRight, Zap, AlertCircle } from 'lucide-react';

interface FlashCardProps {
  front: string;
  back: string;
  category?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  cardNumber?: number;
  totalCards?: number;
  onFlip?: (isFlipped: boolean) => void;
  className?: string;
}

function getCardHeight(front: string, back: string): string {
  const maxLength = Math.max(front.length, back.length);
  if (maxLength > 500) return 'min-h-[420px]';
  if (maxLength > 300) return 'min-h-[340px]';
  if (maxLength > 150) return 'min-h-[280px]';
  return 'min-h-[240px]';
}

export function FlashCard({
  front,
  back,
  category,
  onFlip,
  className = '',
}: FlashCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    const newFlipped = !isFlipped;
    setIsFlipped(newFlipped);
    onFlip?.(newFlipped);
  };

  const cardHeight = useMemo(() => getCardHeight(front, back), [front, back]);

  return (
    <div
      className={`perspective-1000 cursor-pointer ${className}`}
      onClick={handleFlip}
    >
      <motion.div
        className={`relative w-full ${cardHeight} preserve-3d`}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 120, damping: 18 }}
      >
        {/* Front — Question */}
        <div className="absolute inset-0 backface-hidden">
          <div className="h-full rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] via-surface to-white/[0.02] p-5 flex flex-col shadow-xl">
            {category && (
              <span className="text-[10px] font-bold uppercase tracking-wider text-lavender/70 bg-lavender/[0.06] border border-lavender/10 px-2.5 py-1 rounded-lg self-start mb-4 shrink-0">
                {category}
              </span>
            )}
            <div className="flex-1 flex items-center justify-center overflow-y-auto py-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              <p className="text-base md:text-lg text-text-primary text-center font-display font-semibold leading-relaxed px-2">
                {front}
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 text-text-muted/50 text-xs pt-3 border-t border-white/[0.04] shrink-0">
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Tap to reveal</span>
            </div>
          </div>
        </div>

        {/* Back — Answer */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="h-full rounded-2xl p-5 flex flex-col bg-gradient-to-br from-sage/[0.08] via-surface to-lavender/[0.05] border border-sage/15 shadow-xl">
            <div className="flex items-center gap-2 mb-3 shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-sage" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-sage/70">Answer</span>
            </div>
            <div className="flex-1 overflow-y-auto py-2 scrollbar-thin scrollbar-thumb-sage/20 scrollbar-track-transparent">
              <p className="text-sm md:text-base text-text-secondary text-center leading-relaxed px-2">{back}</p>
            </div>
            <div className="flex items-center justify-center gap-2 text-text-muted/50 text-xs pt-3 border-t border-white/[0.04] shrink-0">
              <ArrowRight className="w-3.5 h-3.5" />
              <span>Rate your recall below</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Rating buttons with clear labels and context
interface RatingButtonsProps {
  onRate: (rating: 'hard' | 'good' | 'easy') => void;
  disabled?: boolean;
}

export function RatingButtons({ onRate, disabled = false }: RatingButtonsProps) {
  const buttons = [
    {
      key: 'hard' as const,
      label: 'Again',
      sublabel: 'Review soon',
      icon: <AlertCircle className="w-4 h-4" />,
      colors: 'bg-coral/[0.08] text-coral border-coral/15 hover:bg-coral/15 hover:border-coral/25',
    },
    {
      key: 'good' as const,
      label: 'Good',
      sublabel: 'Got it',
      icon: <Zap className="w-4 h-4" />,
      colors: 'bg-golden/[0.08] text-golden border-golden/15 hover:bg-golden/15 hover:border-golden/25',
    },
    {
      key: 'easy' as const,
      label: 'Easy',
      sublabel: 'No effort',
      icon: <Sparkles className="w-4 h-4" />,
      colors: 'bg-sage/[0.08] text-sage border-sage/15 hover:bg-sage/15 hover:border-sage/25',
    },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="flex gap-2 mt-4"
      >
        {buttons.map((btn) => (
          <motion.button
            key={btn.key}
            onClick={() => onRate(btn.key)}
            disabled={disabled}
            whileHover={{ scale: disabled ? 1 : 1.03 }}
            whileTap={{ scale: disabled ? 1 : 0.97 }}
            className={`flex-1 py-3 px-3 rounded-xl border transition-all disabled:opacity-40 disabled:cursor-not-allowed ${btn.colors}`}
          >
            <div className="flex items-center justify-center gap-1.5 mb-0.5">
              {btn.icon}
              <span className="font-display font-bold text-sm">{btn.label}</span>
            </div>
            <span className="text-[10px] opacity-60">{btn.sublabel}</span>
          </motion.button>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

export default FlashCard;
