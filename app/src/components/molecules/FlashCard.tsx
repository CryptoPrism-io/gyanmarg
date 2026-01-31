import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, Sparkles } from 'lucide-react';

interface FlashCardProps {
  front: string;
  back: string;
  category?: string;
  onFlip?: (isFlipped: boolean) => void;
  className?: string;
}

// Helper to determine card height based on content length
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

  // Calculate dynamic height based on content
  const cardHeight = useMemo(() => getCardHeight(front, back), [front, back]);

  return (
    <div
      className={`perspective-1000 cursor-pointer ${className}`}
      onClick={handleFlip}
    >
      <motion.div
        className={`relative w-full ${cardHeight} preserve-3d`}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden">
          <div className="h-full glass rounded-2xl border border-white/10 p-5 flex flex-col shadow-glass">
            {category && (
              <span className="text-xs font-medium text-lavender bg-lavender/10 border border-lavender/20 px-3 py-1 rounded-full self-start mb-3 shrink-0">
                {category}
              </span>
            )}
            <div className="flex-1 flex items-center justify-center overflow-y-auto py-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              <p className="text-base md:text-lg text-text-primary text-center font-display font-semibold leading-relaxed px-2">
                {front}
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 text-text-muted text-sm pt-3 border-t border-white/5 shrink-0">
              <RotateCcw className="w-4 h-4" />
              <span>Tap to reveal</span>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="h-full rounded-2xl p-5 flex flex-col bg-gradient-to-br from-lavender/10 via-surface to-sunrise/5 border border-lavender/20 shadow-lavender">
            <div className="flex items-center gap-2 mb-3 shrink-0">
              <Sparkles className="w-4 h-4 text-lavender" />
              <span className="text-xs font-medium text-lavender">Answer</span>
            </div>
            <div className="flex-1 overflow-y-auto py-2 scrollbar-thin scrollbar-thumb-lavender/20 scrollbar-track-transparent">
              <p className="text-sm md:text-base text-text-secondary text-center leading-relaxed px-2">{back}</p>
            </div>
            <div className="flex items-center justify-center gap-2 text-text-muted text-sm pt-3 border-t border-lavender/10 shrink-0">
              <RotateCcw className="w-4 h-4" />
              <span>Tap to flip back</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Rating buttons for spaced repetition
interface RatingButtonsProps {
  onRate: (rating: 'hard' | 'good' | 'easy') => void;
  disabled?: boolean;
}

export function RatingButtons({ onRate, disabled = false }: RatingButtonsProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="flex gap-3 mt-4"
      >
        <motion.button
          onClick={() => onRate('hard')}
          disabled={disabled}
          whileHover={{ scale: disabled ? 1 : 1.02 }}
          whileTap={{ scale: disabled ? 1 : 0.98 }}
          className="flex-1 py-3 px-4 bg-coral/10 text-coral rounded-xl font-display font-semibold border border-coral/20 hover:bg-coral/20 hover:border-coral/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Hard
        </motion.button>
        <motion.button
          onClick={() => onRate('good')}
          disabled={disabled}
          whileHover={{ scale: disabled ? 1 : 1.02 }}
          whileTap={{ scale: disabled ? 1 : 0.98 }}
          className="flex-1 py-3 px-4 bg-golden/10 text-golden rounded-xl font-display font-semibold border border-golden/20 hover:bg-golden/20 hover:border-golden/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Good
        </motion.button>
        <motion.button
          onClick={() => onRate('easy')}
          disabled={disabled}
          whileHover={{ scale: disabled ? 1 : 1.02 }}
          whileTap={{ scale: disabled ? 1 : 0.98 }}
          className="flex-1 py-3 px-4 bg-sage/10 text-sage rounded-xl font-display font-semibold border border-sage/20 hover:bg-sage/20 hover:border-sage/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Easy
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}

export default FlashCard;
