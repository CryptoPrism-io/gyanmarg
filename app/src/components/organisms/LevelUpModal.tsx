import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Star, ArrowUp, X } from 'lucide-react';
import { Modal } from './Modal';
import { Button } from '@/components/atoms';
import { useUserStore } from '@/store/userStore';

interface LevelUpModalProps {
  newLevel: number;
  isOpen: boolean;
  onClose: () => void;
}

// Fire extended celebration confetti
async function fireLevelUpConfetti() {
  try {
    const confetti = (await import('canvas-confetti')).default;

    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#f59e0b', '#10b981', '#6366f1', '#ec4899'],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#f59e0b', '#10b981', '#6366f1', '#ec4899'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  } catch {
    console.log('Confetti not available');
  }
}

// Play level up sound
function playLevelUpSound(soundEnabled: boolean) {
  if (!soundEnabled) return;
  try {
    const audio = new Audio('/sounds/level-up.mp3');
    audio.volume = 0.6;
    audio.play().catch(() => {});
  } catch {
    // Sound file not available
  }
}

export function LevelUpModal({ newLevel, isOpen, onClose }: LevelUpModalProps) {
  const settings = useUserStore((state) => state.settings);

  useEffect(() => {
    if (isOpen) {
      fireLevelUpConfetti();
      playLevelUpSound(settings.soundEnabled);
    }
  }, [isOpen, settings.soundEnabled]);

  return (
    <AnimatePresence>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={onClose} size="md">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="text-center py-8 relative overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-0 right-0 p-2 text-muted hover:text-text-secondary transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-accent/20 via-transparent to-transparent" />

            {/* Floating sparkles */}
            <motion.div
              className="absolute top-4 left-1/4"
              animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-6 h-6 text-amber-400" />
            </motion.div>
            <motion.div
              className="absolute top-8 right-1/4"
              animate={{ y: [0, -8, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            </motion.div>

            {/* Main celebration emoji */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
              className="text-7xl mb-4 relative z-10"
            >
              🎉
            </motion.div>

            {/* Level Up text */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative z-10"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <ArrowUp className="w-6 h-6 text-success" />
                <h2 className="text-3xl font-bold text-text-primary">Level Up!</h2>
                <ArrowUp className="w-6 h-6 text-success" />
              </div>
            </motion.div>

            {/* New Level Number */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 300 }}
              className="relative z-10 my-6"
            >
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent via-indigo-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-accent/30">
                <span className="text-6xl font-bold text-white">{newLevel}</span>
              </div>
            </motion.div>

            {/* Motivational message */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-text-secondary mb-2 relative z-10"
            >
              You&apos;ve reached a new milestone!
            </motion.p>

            {/* XP info */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-muted text-sm mb-6 relative z-10"
            >
              Only <span className="text-accent font-semibold">500 XP</span> until Level {newLevel + 1}
            </motion.p>

            {/* Continue button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="relative z-10"
            >
              <Button onClick={onClose} variant="primary" size="lg">
                Keep Going!
              </Button>
            </motion.div>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
}

export default LevelUpModal;
