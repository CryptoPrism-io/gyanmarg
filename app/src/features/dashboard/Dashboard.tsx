import { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Trophy,
  Flame,
  Target,
  Star,
  BookOpen,
  Brain,
  Calendar,
  Zap,
  ChevronRight,
  Grid3X3,
} from 'lucide-react';
import { useUserStore } from '@/store/userStore';
import { useProgressStore } from '@/store/progressStore';
import { useHabitStore } from '@/store/habitStore';
import { ModuleLayout } from '@/components/templates';
import { Card, CardHeader } from '@/components/molecules';
import { TodaysFocus, LocalLeaderboard } from '@/components/organisms';
import { ProgressBar } from '@/components/atoms';
import { bookContent } from '@/data/books';

export function Dashboard() {
  const profile = useUserStore((state) => state.profile);
  const userProgress = useProgressStore((state) => state.userProgress);
  const getLevelProgress = useProgressStore((state) => state.getLevelProgress);
  const generateWeeklyChallenge = useProgressStore((state) => state.generateWeeklyChallenge);
  const updateStreak = useProgressStore((state) => state.updateStreak);
  const refreshStreakFreeze = useProgressStore((state) => state.refreshStreakFreeze);
  const habits = useHabitStore((state) => state.habits);

  const habitsCompletedToday = useMemo(() => habits.filter((h) => h.completedToday).length, [habits]);

  // Initialize weekly challenge and streak on dashboard load
  useEffect(() => {
    generateWeeklyChallenge();
    updateStreak();
    refreshStreakFreeze();
  }, [generateWeeklyChallenge, updateStreak, refreshStreakFreeze]);

  const statCards = [
    {
      icon: <Trophy className="w-5 h-5" />,
      label: 'Total XP',
      value: (userProgress?.xp ?? 0).toLocaleString(),
      color: 'amber',
    },
    {
      icon: <Star className="w-5 h-5" />,
      label: 'Level',
      value: userProgress?.level ?? 1,
      color: 'accent',
    },
    {
      icon: <Flame className="w-5 h-5" />,
      label: 'Day Streak',
      value: userProgress?.currentStreak ?? 0,
      color: 'warning',
    },
    {
      icon: <Target className="w-5 h-5" />,
      label: 'Focus Time',
      value: `${Math.floor((userProgress?.deepWorkMinutes ?? 0) / 60)}h`,
      color: 'success',
    },
  ];

  const quickActions = [
    {
      to: '/modules',
      icon: <Grid3X3 className="w-6 h-6" />,
      label: 'Explore Modules',
      desc: '10 learning domains',
      color: 'bg-indigo-500/10 text-indigo-500',
    },
    {
      to: '/pathway',
      icon: <BookOpen className="w-6 h-6" />,
      label: 'Continue Learning',
      desc: 'Pick up where you left off',
      color: 'bg-accent/10 text-accent',
    },
    {
      to: '/review',
      icon: <Brain className="w-6 h-6" />,
      label: 'Review Cards',
      desc: 'Strengthen your memory',
      color: 'bg-purple-500/10 text-purple-500',
    },
    {
      to: '/habits',
      icon: <Calendar className="w-6 h-6" />,
      label: 'Track Habits',
      desc: `${habitsCompletedToday}/${habits.length} done today`,
      color: 'bg-success/10 text-success',
    },
    {
      to: '/challenges',
      icon: <Zap className="w-6 h-6" />,
      label: 'Daily Challenge',
      desc: 'Earn bonus XP',
      color: 'bg-warning/10 text-warning',
    },
  ];

  return (
    <ModuleLayout
      title={`Welcome back${profile?.name ? `, ${profile.name}` : ''}`}
      subtitle="Your personal development journey"
    >
      {/* Today's Focus - Priority Card */}
      <TodaysFocus className="mb-6" />

      {/* Level Progress */}
      <Card className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-secondary">Level {userProgress?.level ?? 1}</span>
          <span className="text-sm text-muted">
            {Math.round(getLevelProgress())}% to Level {(userProgress?.level ?? 1) + 1}
          </span>
        </div>
        <ProgressBar value={getLevelProgress()} variant="gradient" size="md" />
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {statCards.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`
              bg-${stat.color === 'accent' ? 'accent' : stat.color}-500/10
              rounded-xl p-4 border border-border/30
            `}
          >
            <div className={`text-${stat.color === 'accent' ? 'accent' : stat.color}-500 mb-2`}>
              {stat.icon}
            </div>
            <p className="text-2xl font-semibold text-primary">{stat.value}</p>
            <p className="text-xs text-muted">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <h2 className="text-lg font-semibold text-primary mb-4">Quick Actions</h2>
      <div className="grid sm:grid-cols-2 gap-3 mb-8">
        {quickActions.map((action, i) => (
          <motion.div
            key={action.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Link
              to={action.to}
              className="flex items-center gap-4 p-4 bg-secondary rounded-xl border border-border hover:border-muted hover:bg-elevated transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl ${action.color} flex items-center justify-center`}>
                {action.icon}
              </div>
              <div className="flex-1">
                <p className="font-medium text-primary">{action.label}</p>
                <p className="text-sm text-muted">{action.desc}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted group-hover:text-secondary transition-colors" />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Book Library */}
      <h2 className="text-lg font-semibold text-primary mb-4">Book Library</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(bookContent).map(([key, book], i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card hover onClick={() => {}} className="h-full">
              <CardHeader
                title={book.title}
                subtitle={book.author}
                icon={<BookOpen className="w-5 h-5" />}
              />
              <p className="text-sm text-muted mt-4">
                {book.coreConcepts.length} core concepts
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Leaderboard */}
      <h2 className="text-lg font-semibold text-primary mb-4">Compete & Learn</h2>
      <LocalLeaderboard className="mb-8" maxEntries={5} />

      {/* Daily Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="p-6 bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-2xl border border-accent/20"
      >
        <p className="text-lg text-primary italic mb-3">
          "Habits are the compound interest of self-improvement."
        </p>
        <p className="text-sm text-accent">- James Clear, Atomic Habits</p>
      </motion.div>
    </ModuleLayout>
  );
}

export default Dashboard;
