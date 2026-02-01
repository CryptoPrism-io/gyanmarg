import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, Sparkles, Brain } from 'lucide-react';

interface DemoFlashCardProps {
  front: string;
  back: string;
  category?: string;
  className?: string;
  showRatingButtons?: boolean;
  onRate?: (rating: 'hard' | 'good' | 'easy') => void;
}

/**
 * Standalone demo FlashCard component for blog embeds and How-To page.
 * No store dependencies - works in isolation.
 */
export function DemoFlashCard({
  front,
  back,
  category,
  className = '',
  showRatingButtons = true,
  onRate,
}: DemoFlashCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasRated, setHasRated] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleRate = (rating: 'hard' | 'good' | 'easy') => {
    setHasRated(true);
    onRate?.(rating);
    // Reset after a brief delay for demo purposes
    setTimeout(() => {
      setIsFlipped(false);
      setHasRated(false);
    }, 1500);
  };

  return (
    <div className={`max-w-sm mx-auto ${className}`}>
      {/* Card Label */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-lg bg-lavender/20 flex items-center justify-center">
          <Brain className="w-4 h-4 text-lavender" />
        </div>
        <span className="text-sm text-text-muted">Interactive Flashcard Demo</span>
      </div>

      {/* Flip Card */}
      <div
        className="perspective-1000 cursor-pointer"
        onClick={handleFlip}
      >
        <motion.div
          className="relative w-full min-h-[240px] preserve-3d"
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
              <div className="flex-1 flex items-center justify-center py-4">
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
              <div className="flex-1 flex items-center justify-center py-2">
                <p className="text-sm md:text-base text-text-secondary text-center leading-relaxed px-2">
                  {back}
                </p>
              </div>
              <div className="flex items-center justify-center gap-2 text-text-muted text-sm pt-3 border-t border-lavender/10 shrink-0">
                <RotateCcw className="w-4 h-4" />
                <span>Tap to flip back</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Rating Buttons */}
      {showRatingButtons && (
        <AnimatePresence>
          {isFlipped && !hasRated && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex gap-3 mt-4"
            >
              <motion.button
                onClick={(e) => { e.stopPropagation(); handleRate('hard'); }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-3 px-4 bg-coral/10 text-coral rounded-xl font-display font-semibold border border-coral/20 hover:bg-coral/20 hover:border-coral/30 transition-colors"
              >
                Hard
              </motion.button>
              <motion.button
                onClick={(e) => { e.stopPropagation(); handleRate('good'); }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-3 px-4 bg-golden/10 text-golden rounded-xl font-display font-semibold border border-golden/20 hover:bg-golden/20 hover:border-golden/30 transition-colors"
              >
                Good
              </motion.button>
              <motion.button
                onClick={(e) => { e.stopPropagation(); handleRate('easy'); }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-3 px-4 bg-sage/10 text-sage rounded-xl font-display font-semibold border border-sage/20 hover:bg-sage/20 hover:border-sage/30 transition-colors"
              >
                Easy
              </motion.button>
            </motion.div>
          )}
          {hasRated && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4 py-3 px-4 bg-sage/10 border border-sage/20 rounded-xl text-center"
            >
              <span className="text-sage font-semibold">Card scheduled for review!</span>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

export default DemoFlashCard;
