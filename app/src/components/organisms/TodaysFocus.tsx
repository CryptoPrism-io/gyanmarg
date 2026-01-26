import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, BookOpen, Zap, CheckCircle, ChevronRight, Target, Flame, Sparkles } from 'lucide-react';
import { GlassCard } from '@/components/molecules';
import { ProgressBar } from '@/components/atoms';
import { useSpacedRepetitionStore } from '@/store/spacedRepetitionStore';
import { useProgressStore } from '@/store/progressStore';
import { useHabitStore } from '@/store/habitStore';
import { getTodaysChallenges } from '@/data/challengePool';

interface FocusItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  action: () => void;
  color: 'lavender' | 'sunrise' | 'golden' | 'sage' | 'coral';
  badge?: string | number;
}

const colorStyles = {
  lavender: { bg: 'bg-lavender/10', border: 'border-lavender/20', text: 'text-lavender' },
  sunrise: { bg: 'bg-sunrise/10', border: 'border-sunrise/20', text: 'text-sunrise' },
  golden: { bg: 'bg-golden/10', border: 'border-golden/20', text: 'text-golden' },
  sage: { bg: 'bg-sage/10', border: 'border-sage/20', text: 'text-sage' },
  coral: { bg: 'bg-coral/10', border: 'border-coral/20', text: 'text-coral' },
};

function FocusItem({ icon, title, subtitle, action, color, badge }: FocusItemProps) {
  const colors = colorStyles[color];

  return (
    <motion.button
      onClick={action}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="w-full flex items-center gap-2 sm:gap-4 p-2 sm:p-4 glass-light rounded-lg sm:rounded-xl border border-white/10 hover:border-white/20 transition-all group"
    >
      <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center ${colors.bg} border ${colors.border}`}>
        {icon}
      </div>
      <div className="flex-1 text-left">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="font-medium text-text-primary text-xs sm:text-base">{title}</span>
          {badge !== undefined && (
            <span className={`text-[9px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}>
              {badge}
            </span>
          )}
        </div>
        {subtitle && <p className="text-[10px] sm:text-sm text-text-muted">{subtitle}</p>}
      </div>
      <ChevronRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-text-muted group-hover:text-text-secondary group-hover:translate-x-1 transition-all" />
    </motion.button>
  );
}

interface TodaysFocusProps {
  className?: string;
}

export function TodaysFocus({ className }: TodaysFocusProps) {
  const navigate = useNavigate();

  // Get data from stores - use stable selectors
  const getDueCards = useSpacedRepetitionStore((s) => s.getDueCards);
  const lastViewedLesson = useProgressStore((s) => s.lastViewedLesson);
  const weeklyChallenge = useProgressStore((s) => s.weeklyChallenge);
  const currentStreak = useProgressStore((s) => s.userProgress.currentStreak);
  const allHabits = useHabitStore((s) => s.habits);

  // Memoize computed values to avoid infinite loops
  const dueCards = useMemo(() => getDueCards(), [getDueCards]);
  const habits = useMemo(() => allHabits.filter((h) => !h.completedToday), [allHabits]);

  // Get today's challenges
  const todaysChallenges = useMemo(() => getTodaysChallenges(3), []);
  const challengeCount = todaysChallenges.length;

  // Check if there's anything to focus on
  const hasFocusItems =
    dueCards.length > 0 ||
    (lastViewedLesson && !lastViewedLesson.completed) ||
    challengeCount > 0 ||
    habits.length > 0;

  return (
    <GlassCard className={`${className} !p-2.5 sm:!p-4`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-2 sm:mb-5">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-gradient-to-br from-sunrise to-golden flex items-center justify-center shadow-sunrise">
            <Target className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-base" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-text-primary text-xs sm:text-base">Today&apos;s Focus</h3>
            <p className="text-[9px] sm:text-xs text-text-muted">Your personalized learning plan</p>
          </div>
        </div>
        {currentStreak > 0 && (
          <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-coral/10 border border-coral/20">
            <Flame className="w-3 h-3 sm:w-4 sm:h-4 text-coral" />
            <span className="font-display font-semibold text-coral text-xs sm:text-base">{currentStreak}</span>
          </div>
        )}
      </div>

      {/* Focus Items */}
      <div className="space-y-1.5 sm:space-y-3">
        {/* Priority 1: Due flashcards */}
        {dueCards.length > 0 && (
          <FocusItem
            icon={<Brain className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-lavender" />}
            title="Review flashcards"
            subtitle={`${dueCards.length} cards ready for review`}
            action={() => navigate('/review')}
            color="lavender"
            badge={dueCards.length}
          />
        )}

        {/* Priority 2: Resume lesson */}
        {lastViewedLesson && !lastViewedLesson.completed && (
          <FocusItem
            icon={<BookOpen className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-sunrise" />}
            title="Continue learning"
            subtitle="Resume where you left off"
            action={() => navigate('/pathway')}
            color="sunrise"
          />
        )}

        {/* Priority 3: Daily challenges */}
        {challengeCount > 0 && (
          <FocusItem
            icon={<Zap className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-golden" />}
            title="Daily challenges"
            subtitle="Apply what you've learned"
            action={() => navigate('/challenges')}
            color="golden"
            badge={challengeCount}
          />
        )}

        {/* Priority 4: Incomplete habits */}
        {habits.length > 0 && (
          <FocusItem
            icon={<CheckCircle className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-sage" />}
            title="Track habits"
            subtitle={`${habits.length} habits remaining today`}
            action={() => navigate('/habits')}
            color="sage"
            badge={habits.length}
          />
        )}

        {/* If nothing to focus on */}
        {!hasFocusItems && (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-sage/10 border border-sage/20 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-sage" />
            </div>
            <p className="font-display font-semibold text-text-primary mb-1">All caught up!</p>
            <p className="text-sm text-text-muted">
              You&apos;ve completed today&apos;s tasks. Great work!
            </p>
          </div>
        )}
      </div>

      {/* Weekly Challenge Progress (if active) */}
      {weeklyChallenge && !weeklyChallenge.completed && (
        <div className="mt-5 pt-5 border-t border-white/[0.06]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-text-secondary">{weeklyChallenge.title}</span>
            <span className="text-sm font-semibold text-lavender">
              {weeklyChallenge.current}/{weeklyChallenge.target}
            </span>
          </div>
          <ProgressBar
            value={(weeklyChallenge.current / weeklyChallenge.target) * 100}
            variant="gradient"
            size="sm"
            animated
          />
          <p className="text-xs text-text-muted mt-2">
            Complete to earn +{weeklyChallenge.xpReward} XP
          </p>
        </div>
      )}
    </GlassCard>
  );
}

export default TodaysFocus;
