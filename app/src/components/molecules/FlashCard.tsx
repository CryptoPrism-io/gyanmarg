import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw } from 'lucide-react';

interface FlashCardProps {
  front: string;
  back: string;
  category?: string;
  onFlip?: (isFlipped: boolean) => void;
  className?: string;
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

  return (
    <div
      className={`perspective-1000 cursor-pointer ${className}`}
      onClick={handleFlip}
    >
      <motion.div
        className="relative w-full h-64 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden">
          <div className="h-full bg-card rounded-2xl border border-border p-6 flex flex-col">
            {category && (
              <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full self-start mb-4">
                {category}
              </span>
            )}
            <div className="flex-1 flex items-center justify-center">
              <p className="text-lg text-primary text-center font-medium">{front}</p>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted text-sm">
              <RotateCcw className="w-4 h-4" />
              <span>Tap to flip</span>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="h-full bg-accent/5 rounded-2xl border border-accent/20 p-6 flex flex-col">
            <span className="text-xs font-medium text-accent self-start mb-4">Answer</span>
            <div className="flex-1 flex items-center justify-center">
              <p className="text-base text-secondary text-center leading-relaxed">{back}</p>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted text-sm">
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
        <button
          onClick={() => onRate('hard')}
          disabled={disabled}
          className="flex-1 py-3 px-4 bg-error/10 text-error rounded-xl font-medium hover:bg-error/20 transition-colors disabled:opacity-50"
        >
          Hard
        </button>
        <button
          onClick={() => onRate('good')}
          disabled={disabled}
          className="flex-1 py-3 px-4 bg-warning/10 text-warning rounded-xl font-medium hover:bg-warning/20 transition-colors disabled:opacity-50"
        >
          Good
        </button>
        <button
          onClick={() => onRate('easy')}
          disabled={disabled}
          className="flex-1 py-3 px-4 bg-success/10 text-success rounded-xl font-medium hover:bg-success/20 transition-colors disabled:opacity-50"
        >
          Easy
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

export default FlashCard;
