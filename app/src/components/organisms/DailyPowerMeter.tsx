import { useMemo, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { springBouncy, springSmooth } from '@/lib/animations';
import { Zap, Star, Check, Trophy, BookOpen } from 'lucide-react';
import { useProgressStore } from '@/store/progressStore';
import { useSpacedRepetitionStore } from '@/store/spacedRepetitionStore';

/**
 * Daily Learning Power — Meta-gamification hook
 * Visualizes daily progress across all learning activities
 * Creates a "fill the meter" reward loop + daily completion goal
 * Psychological hooks:
 * - Progress visualization (visual motivation)
 * - Daily goal framing (goal-setting)
 * - Multiple completion paths (autonomy)
 * - Power meter aesthetic (engagement)
 * - Celebration at 100% (status signaling)
 */
export function DailyPowerMeter() {
  const userProgress = useProgressStore((s) => s.userProgress);
  const lastViewedLesson = useProgressStore((s) => s.lastViewedLesson);
  const weeklyChallenge = useProgressStore((s) => s.weeklyChallenge);
  const getDueCards = useSpacedRepetitionStore((s) => s.getDueCards);
  const dueCards = useMemo(() => getDueCards(), [getDueCards]);
  const [showCelebration, setShowCelebration] = useState(false);

  // Calculate daily power based on completed activities today
  const dailyPower = useMemo(() => {
    const today = new Date().toDateString();
    let power = 0;

    // Check if lesson was completed today (crude check based on lastActivity)
    const lastActivity = new Date(userProgress.lastActivityDate || new Date()).toDateString();
    if (lastActivity === today && lastViewedLesson?.completed) {
      power += 25;
    }

    // Check if flashcards were reviewed today (check if recent card has today's date in nextReviewDate)
    if (dueCards.length > 0 && dueCards.length < 50) {
      // If there are due cards, user hasn't done daily review yet
      power += 0;
    } else if (dueCards.length === 0) {
      // All cards reviewed = they did it today
      power += 25;
    }

    // Weekly challenge progress (0-25 based on completion %)
    if (weeklyChallenge && !weeklyChallenge.completed) {
      const progress = Math.min(25, Math.round((weeklyChallenge.current / weeklyChallenge.target) * 25));
      power += progress;
    } else if (weeklyChallenge?.completed && weeklyChallenge.claimed) {
      power += 25;
    }

    // Daily streak bonus (0-25)
    const streakBonus = Math.min(25, Math.round((userProgress.currentStreak / 30) * 25));
    power += streakBonus;

    return Math.min(100, power);
  }, [userProgress, lastViewedLesson, weeklyChallenge, dueCards]);

  // Celebrate when reaching 100%
  useEffect(() => {
    if (dailyPower === 100 && !showCelebration) {
      setShowCelebration(true);
      const timer = setTimeout(() => setShowCelebration(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [dailyPower, showCelebration]);

  // Determine power meter color based on percentage
  const getPowerColor = () => {
    if (dailyPower >= 80) return 'from-emerald-500 to-sage';
    if (dailyPower >= 60) return 'from-cyan-500 to-lavender';
    if (dailyPower >= 40) return 'from-amber-500 to-golden';
    return 'from-coral to-rose-500';
  };

  const activities = [
    {
      name: 'Lesson',
      icon: BookOpen,
      completed: lastViewedLesson?.completed || false,
      weight: 25,
    },
    {
      name: 'Review',
      icon: Trophy,
      completed: dueCards.length === 0,
      weight: 25,
    },
    {
      name: 'Challenge',
      icon: Star,
      completed: weeklyChallenge?.completed || false,
      weight: 25,
    },
    {
      name: 'Streak',
      icon: Zap,
      completed: userProgress.currentStreak > 0,
      weight: 25,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={springBouncy}
      className="relative"
    >
      {/* Celebration burst when 100% */}
      {showCelebration && (
        <>
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-sage/20 blur-xl"
            initial={{ scale: 0.8, opacity: 1 }}
            animate={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            className="absolute top-2 right-2 text-2xl"
            initial={{ scale: 0, y: 0 }}
            animate={{ scale: 1, y: -20, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            ⚡
          </motion.div>
        </>
      )}

      <div className="relative rounded-2xl bg-gradient-to-br from-surface to-white/[0.02] border border-white/[0.08] p-4 sm:p-5 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">
              Daily Power
            </p>
            <h3 className="text-lg sm:text-xl font-display font-bold text-text-primary mt-1">
              {dailyPower}%
            </h3>
          </div>
          <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${getPowerColor()} flex items-center justify-center shadow-lg`}>
            <motion.span
              className="text-white font-display font-bold text-xl"
              animate={{ scale: dailyPower === 100 ? [1, 1.2, 1] : 1 }}
              transition={{ repeat: dailyPower === 100 ? Infinity : 0, duration: 0.6 }}
            >
              ⚡
            </motion.span>
          </div>
        </div>

        {/* Power Bar */}
        <div className="space-y-2">
          <div className="relative w-full h-3 bg-white/[0.06] rounded-full overflow-hidden border border-white/10">
            <motion.div
              className={`h-full bg-gradient-to-r ${getPowerColor()} rounded-full shadow-lg`}
              initial={{ width: 0 }}
              animate={{ width: `${dailyPower}%` }}
              transition={{ type: 'spring', stiffness: 100, damping: 25 }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-text-muted">
            <span>Start your day</span>
            <span>Master unlock</span>
          </div>
        </div>

        {/* Activity Checklist */}
        <div className="grid grid-cols-4 gap-2">
          {activities.map(({ name, icon: Icon, completed, weight }) => (
            <motion.div
              key={name}
              className={`flex flex-col items-center gap-1.5 p-2.5 rounded-lg border transition-all ${
                completed
                  ? 'bg-sage/10 border-sage/30'
                  : 'bg-white/[0.02] border-white/[0.08]'
              }`}
              animate={
                completed
                  ? { scale: 1, borderColor: 'rgb(34, 197, 94)' }
                  : { scale: 1 }
              }
            >
              <div className="relative">
                <Icon className={`w-4 h-4 ${completed ? 'text-sage' : 'text-text-muted'}`} />
                {completed && (
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-sage rounded-full flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                     transition={springSmooth}
                  >
                    <Check className="w-1.5 h-1.5 text-white" />
                  </motion.div>
                )}
              </div>
              <p className="text-[9px] font-semibold text-center text-text-secondary line-clamp-1">
                {name}
              </p>
              <p className="text-[8px] text-text-muted">+{weight}%</p>
            </motion.div>
          ))}
        </div>

        {/* Motivational Message */}
        <div className="text-[11px] text-text-muted text-center italic bg-white/[0.02] border border-white/[0.08] rounded-lg p-2.5">
          {dailyPower === 100 ? (
            <span className="text-sage font-semibold">🎉 Master power unlocked! You're unstoppable today!</span>
          ) : dailyPower >= 75 ? (
            <span>Almost there! One activity away from master status</span>
          ) : dailyPower >= 50 ? (
            <span>Great momentum! Keep building your power</span>
          ) : dailyPower >= 25 ? (
            <span>You're getting started! Keep going</span>
          ) : (
            <span>Start with a lesson to power up your day</span>
          )}
        </div>

        {/* Daily XP Preview */}
        <div className="flex items-center justify-between text-[10px] bg-white/[0.02] border border-white/[0.08] rounded-lg px-3 py-2">
          <span className="text-text-muted">Daily XP potential:</span>
          <span className="font-bold text-golden">~200-300 XP</span>
        </div>
      </div>
    </motion.div>
  );
}
