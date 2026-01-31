import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, X } from 'lucide-react';
import { Modal } from './Modal';
import { Button } from '@/components/atoms';
import { useUserStore } from '@/store/userStore';

interface AchievementUnlockProps {
  achievement: {
    id: string;
    name: string;
    description?: string;
    xpReward: number;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

// Fire confetti effect
async function fireConfetti() {
  try {
    const confetti = (await import('canvas-confetti')).default;
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#10b981', '#6366f1', '#ec4899'],
    });
  } catch {
    // canvas-confetti not installed, skip confetti
    console.log('Confetti not available');
  }
}

// Play achievement sound
function playAchievementSound(soundEnabled: boolean) {
  if (!soundEnabled) return;
  try {
    const audio = new Audio('/sounds/achievement.mp3');
    audio.volume = 0.5;
    audio.play().catch(() => {});
  } catch {
    // Sound file not available
  }
}

export function AchievementUnlock({ achievement, isOpen, onClose }: AchievementUnlockProps) {
  const settings = useUserStore((state) => state.settings);

  useEffect(() => {
    if (isOpen && achievement) {
      fireConfetti();
      playAchievementSound(settings.soundEnabled);
    }
  }, [isOpen, achievement, settings.soundEnabled]);

  if (!achievement) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center py-6 relative"
      >
        {/* Close button - larger touch target for mobile */}
        <button
          onClick={onClose}
          onTouchEnd={(e) => { e.preventDefault(); e.stopPropagation(); onClose(); }}
          className="absolute top-0 right-0 p-3 text-muted hover:text-text-secondary active:text-text-primary transition-colors touch-manipulation"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

            {/* Achievement badge animation */}
            <motion.div
              initial={{ rotateY: 0, scale: 0 }}
              animate={{ rotateY: 360, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
              className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30"
            >
              <Trophy className="w-12 h-12 text-white" />
            </motion.div>

            {/* Title with entrance animation */}
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold text-text-primary mb-2"
            >
              Achievement Unlocked!
            </motion.h2>

            {/* Achievement name */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-accent font-semibold mb-2"
            >
              {achievement.name}
            </motion.p>

            {/* Description if available */}
            {achievement.description && (
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-text-secondary mb-6 px-4"
              >
                {achievement.description}
              </motion.p>
            )}

            {/* XP Reward */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 300 }}
              className="flex items-center justify-center gap-2 text-amber-500 mb-6"
            >
              <Star className="w-6 h-6 fill-amber-500" />
              <span className="text-xl font-bold">+{achievement.xpReward} XP</span>
            </motion.div>

          {/* Continue button - wrapped for touch handling */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            onTouchEnd={(e) => { e.stopPropagation(); }}
          >
            <Button onClick={onClose} variant="primary" size="lg" className="touch-manipulation">
              Continue
            </Button>
          </motion.div>
        </motion.div>
    </Modal>
  );
}

export default AchievementUnlock;
