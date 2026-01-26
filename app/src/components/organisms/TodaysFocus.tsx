import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, BookOpen, Zap, CheckCircle, ChevronRight, Target, Flame } from 'lucide-react';
import { Card } from '@/components/molecules';
import { useSpacedRepetitionStore } from '@/store/spacedRepetitionStore';
import { useProgressStore } from '@/store/progressStore';
import { useHabitStore } from '@/store/habitStore';
import { getTodaysChallenges } from '@/data/challengePool';

interface FocusItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  action: () => void;
  color: 'purple' | 'accent' | 'warning' | 'success' | 'error';
  badge?: string | number;
}

const colorClasses = {
  purple: 'bg-purple-500/10 text-purple-400',
  accent: 'bg-accent/10 text-accent',
  warning: 'bg-warning/10 text-warning',
  success: 'bg-success/10 text-success',
  error: 'bg-error/10 text-error',
};

function FocusItem({ icon, title, subtitle, action, color, badge }: FocusItemProps) {
  return (
    <motion.button
      onClick={action}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="w-full flex items-center gap-4 p-4 bg-secondary rounded-xl border border-border hover:border-muted transition-all group"
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClasses[color]}`}>
        {icon}
      </div>
      <div className="flex-1 text-left">
        <div className="flex items-center gap-2">
          <span className="font-medium text-primary">{title}</span>
          {badge !== undefined && (
            <span className={`text-xs px-2 py-0.5 rounded-full ${colorClasses[color]}`}>
              {badge}
            </span>
          )}
        </div>
        {subtitle && <p className="text-sm text-muted">{subtitle}</p>}
      </div>
      <ChevronRight className="w-5 h-5 text-muted group-hover:text-secondary transition-colors" />
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
    <Card className={className}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
            <Target className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-primary">Today&apos;s Focus</h3>
            <p className="text-xs text-muted">Your personalized learning plan</p>
          </div>
        </div>
        {currentStreak > 0 && (
          <div className="flex items-center gap-1 text-amber-500">
            <Flame className="w-5 h-5" />
            <span className="font-semibold">{currentStreak}</span>
          </div>
        )}
      </div>

      {/* Focus Items */}
      <div className="space-y-3">
        {/* Priority 1: Due flashcards */}
        {dueCards.length > 0 && (
          <FocusItem
            icon={<Brain className="w-5 h-5" />}
            title="Review flashcards"
            subtitle={`${dueCards.length} cards ready for review`}
            action={() => navigate('/review')}
            color="purple"
            badge={dueCards.length}
          />
        )}

        {/* Priority 2: Resume lesson */}
        {lastViewedLesson && !lastViewedLesson.completed && (
          <FocusItem
            icon={<BookOpen className="w-5 h-5" />}
            title="Continue learning"
            subtitle="Resume where you left off"
            action={() => navigate('/pathway')}
            color="accent"
          />
        )}

        {/* Priority 3: Daily challenges */}
        {challengeCount > 0 && (
          <FocusItem
            icon={<Zap className="w-5 h-5" />}
            title="Daily challenges"
            subtitle="Apply what you've learned"
            action={() => navigate('/challenges')}
            color="warning"
            badge={challengeCount}
          />
        )}

        {/* Priority 4: Incomplete habits */}
        {habits.length > 0 && (
          <FocusItem
            icon={<CheckCircle className="w-5 h-5" />}
            title="Track habits"
            subtitle={`${habits.length} habits remaining today`}
            action={() => navigate('/habits')}
            color="success"
            badge={habits.length}
          />
        )}

        {/* If nothing to focus on */}
        {!hasFocusItems && (
          <div className="text-center py-6">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-success/10 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-success" />
            </div>
            <p className="font-medium text-primary mb-1">All caught up!</p>
            <p className="text-sm text-muted">
              You&apos;ve completed today&apos;s tasks. Great work!
            </p>
          </div>
        )}
      </div>

      {/* Weekly Challenge Progress (if active) */}
      {weeklyChallenge && !weeklyChallenge.completed && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-secondary">{weeklyChallenge.title}</span>
            <span className="text-sm font-medium text-accent">
              {weeklyChallenge.current}/{weeklyChallenge.target}
            </span>
          </div>
          <div className="h-2 bg-elevated rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-accent to-indigo-500 rounded-full"
              initial={{ width: 0 }}
              animate={{
                width: `${Math.min((weeklyChallenge.current / weeklyChallenge.target) * 100, 100)}%`,
              }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="text-xs text-muted mt-1">
            Complete to earn +{weeklyChallenge.xpReward} XP
          </p>
        </div>
      )}
    </Card>
  );
}

export default TodaysFocus;
