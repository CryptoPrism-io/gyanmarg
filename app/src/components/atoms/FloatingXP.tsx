import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface FloatingXPProps {
  amount: number;
  show: boolean;
  onComplete?: () => void;
}

export function FloatingXP({ amount, show, onComplete }: FloatingXPProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ scale: 0, y: 0, opacity: 1 }}
          animate={{
            scale: [0, 1.3, 1, 1],
            y: [0, -20, -60, -80],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 1.2,
            ease: 'easeOut',
            times: [0, 0.2, 0.7, 1],
          }}
          onAnimationComplete={onComplete}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50"
        >
          <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-golden/20 backdrop-blur-sm border border-golden/30 shadow-lg shadow-golden/20">
            <Sparkles className="w-5 h-5 text-golden" />
            <span className="text-2xl font-bold text-golden font-display">
              +{amount} XP
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default FloatingXP;
