import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Flame, Trophy, Shield, Star } from 'lucide-react';
import { getDailyReward, getStreakMilestone } from '@/data/rewards';
import { useUserStore } from '@/store/userStore';
import { useProgressStore } from '@/store/progressStore';

interface DailyRewardModalProps {
  isOpen: boolean;
  onClose: () => void;
  streak: number;
  reward: number;
}

export default function DailyRewardModal({
  isOpen,
  onClose,
  streak,
  reward,
}: DailyRewardModalProps) {
  const [showReward, setShowReward] = useState(false);
  const claimDailyReward = useUserStore((state) => state.claimDailyReward);
  const addXP = useProgressStore((state) => state.addXP);

  const dailyReward = getDailyReward(streak);
  const milestone = getStreakMilestone(streak);
  const hasBonus = !!dailyReward.bonus;

  useEffect(() => {
    if (isOpen) {
      // Animate reward display after modal opens
      const timer = setTimeout(() => setShowReward(true), 300);
      return () => clearTimeout(timer);
    } else {
      setShowReward(false);
    }
  }, [isOpen]);

  const handleClaim = () => {
    // Add XP to progress store
    addXP(reward);

    // Mark reward as claimed in user store
    claimDailyReward();

    // If day 3, grant streak freeze
    if (streak === 3) {
      const currentFreezes = useProgressStore.getState().streakFreezes;
      useProgressStore.setState({ streakFreezes: currentFreezes + 1 });
    }

    // Close modal
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[10000]"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-md bg-surface border border-white/10 rounded-2xl p-6 shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-white/60" />
              </button>

              {/* Header */}
              <div className="text-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full mb-4"
                >
                  <Flame className="w-8 h-8 text-white" />
                </motion.div>

                <h2 className="text-2xl font-bold text-white mb-2">
                  Daily Login Reward
                </h2>

                <p className="text-white/60">
                  Day {streak} of your learning streak!
                </p>
              </div>

              {/* Reward Display */}
              <AnimatePresence>
                {showReward && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 150 }}
                    className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-6 mb-6"
                  >
                    {/* XP Reward */}
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <Star className="w-8 h-8 text-amber-400" />
                      <div className="text-center">
                        <div className="text-4xl font-bold text-amber-400">
                          +{reward}
                        </div>
                        <div className="text-sm text-white/60">XP</div>
                      </div>
                    </div>

                    {/* Bonus */}
                    {hasBonus && dailyReward.bonus && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10"
                      >
                        {dailyReward.bonus.type === 'freeze' && (
                          <Shield className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                        )}
                        {dailyReward.bonus.type === 'badge' && (
                          <Trophy className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                        )}

                        <div className="flex-1">
                          <div className="font-semibold text-white mb-1">
                            {dailyReward.bonus.name}
                          </div>
                          <div className="text-sm text-white/60">
                            {dailyReward.bonus.description}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Milestone */}
                    {milestone && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-4 text-center text-sm font-medium text-amber-400"
                      >
                        {milestone}
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Claim Button */}
              <button
                onClick={handleClaim}
                className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-200 shadow-lg shadow-amber-500/20"
              >
                Claim Reward
              </button>

              {/* Streak Progress */}
              <div className="mt-4 text-center text-sm text-white/40">
                Keep your streak alive by logging in daily
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
