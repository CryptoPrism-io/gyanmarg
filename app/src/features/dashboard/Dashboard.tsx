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
  Sparkles,
} from 'lucide-react';
import { useUserStore } from '@/store/userStore';
import { useProgressStore } from '@/store/progressStore';
import { useHabitStore } from '@/store/habitStore';
import { ModuleLayout, Section } from '@/components/templates';
import { Card, GlassCard, CardHeader } from '@/components/molecules';
import { TodaysFocus, LocalLeaderboard } from '@/components/organisms';
import { ProgressBar, Badge, XPBadge } from '@/components/atoms';
import { bookContent } from '@/data/books';

// Stagger animation for cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
};

export function Dashboard() {
  const profile = useUserStore((state) => state.profile);
  const userProgress = useProgressStore((state) => state.userProgress);
  const getLevelProgress = useProgressStore((state) => state.getLevelProgress);
  const generateWeeklyChallenge = useProgressStore((state) => state.generateWeeklyChallenge);
  const updateStreak = useProgressStore((state) => state.updateStreak);
  const refreshStreakFreeze = useProgressStore((state) => state.refreshStreakFreeze);
  const habits = useHabitStore((state) => state.habits);

  const habitsCompletedToday = useMemo(
    () => habits.filter((h) => h.completedToday).length,
    [habits]
  );

  useEffect(() => {
    generateWeeklyChallenge();
    updateStreak();
    refreshStreakFreeze();
  }, [generateWeeklyChallenge, updateStreak, refreshStreakFreeze]);

  const statCards = [
    {
      icon: <Trophy className="w-3.5 h-3.5 sm:w-5 sm:h-5" />,
      label: 'Total XP',
      value: (userProgress?.xp ?? 0).toLocaleString(),
      color: 'golden' as const,
      gradient: 'from-golden/20 to-golden/5',
    },
    {
      icon: <Star className="w-3.5 h-3.5 sm:w-5 sm:h-5" />,
      label: 'Level',
      value: userProgress?.level ?? 1,
      color: 'sunrise' as const,
      gradient: 'from-sunrise/20 to-sunrise/5',
    },
    {
      icon: <Flame className="w-3.5 h-3.5 sm:w-5 sm:h-5" />,
      label: 'Day Streak',
      value: userProgress?.currentStreak ?? 0,
      color: 'coral' as const,
      gradient: 'from-coral/20 to-coral/5',
    },
    {
      icon: <Target className="w-3.5 h-3.5 sm:w-5 sm:h-5" />,
      label: 'Focus Time',
      value: `${Math.floor((userProgress?.deepWorkMinutes ?? 0) / 60)}h`,
      color: 'sage' as const,
      gradient: 'from-sage/20 to-sage/5',
    },
  ];

  const quickActions = [
    {
      to: '/modules',
      icon: <Grid3X3 className="w-4 h-4 sm:w-6 sm:h-6" />,
      label: 'Explore Modules',
      desc: '16 learning domains',
      color: 'lavender' as const,
    },
    {
      to: '/pathway',
      icon: <BookOpen className="w-4 h-4 sm:w-6 sm:h-6" />,
      label: 'Continue Learning',
      desc: 'Pick up where you left off',
      color: 'sunrise' as const,
    },
    {
      to: '/review',
      icon: <Brain className="w-4 h-4 sm:w-6 sm:h-6" />,
      label: 'Review Cards',
      desc: 'Strengthen your memory',
      color: 'lavender' as const,
    },
    {
      to: '/habits',
      icon: <Calendar className="w-4 h-4 sm:w-6 sm:h-6" />,
      label: 'Track Habits',
      desc: `${habitsCompletedToday}/${habits.length} done today`,
      color: 'sage' as const,
    },
    {
      to: '/challenges',
      icon: <Zap className="w-4 h-4 sm:w-6 sm:h-6" />,
      label: 'Daily Challenge',
      desc: 'Earn bonus XP',
      color: 'golden' as const,
    },
    {
      to: '/lab',
      icon: <Sparkles className="w-4 h-4 sm:w-6 sm:h-6" />,
      label: 'Visual Lab',
      desc: 'Interactive diagrams',
      color: 'lavender' as const,
    },
  ];

  const colorStyles = {
    golden: {
      bg: 'bg-golden/10',
      text: 'text-golden',
      border: 'border-golden/20',
    },
    sunrise: {
      bg: 'bg-sunrise/10',
      text: 'text-sunrise',
      border: 'border-sunrise/20',
    },
    coral: {
      bg: 'bg-coral/10',
      text: 'text-coral',
      border: 'border-coral/20',
    },
    sage: {
      bg: 'bg-sage/10',
      text: 'text-sage',
      border: 'border-sage/20',
    },
    lavender: {
      bg: 'bg-lavender/10',
      text: 'text-lavender',
      border: 'border-lavender/20',
    },
  };

  return (
    <ModuleLayout
      title={`Welcome back${profile?.name ? `, ${profile.name}` : ''}`}
      subtitle="Your personal development journey"
      icon={<Sparkles className="w-5 h-5" />}
      headerGradient="sunrise"
    >
      {/* Today's Focus - Priority Card */}
      <TodaysFocus className="mb-3 sm:mb-6" />

      {/* Level Progress Card */}
      <GlassCard className="mb-3 sm:mb-6 !p-3 sm:!p-4">
        <div className="flex items-center justify-between mb-2 sm:mb-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-sunrise to-golden flex items-center justify-center">
              <Star className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-base" />
            </div>
            <div>
              <p className="font-display font-semibold text-text-primary text-xs sm:text-base">
                Level {userProgress?.level ?? 1}
              </p>
              <p className="text-[10px] sm:text-sm text-text-secondary">
                {Math.round(getLevelProgress())}% to next level
              </p>
            </div>
          </div>
          <XPBadge xp={userProgress?.xp ?? 0} />
        </div>
        <ProgressBar
          value={getLevelProgress()}
          variant="xp"
          size="sm"
          glow={getLevelProgress() > 50}
          animated
        />
      </GlassCard>

      {/* Stats Grid */}
      <Section title="Your Progress">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-3"
        >
          {statCards.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <Card
                variant="glass"
                className={`
                  relative overflow-hidden !p-2 sm:!p-4
                  bg-gradient-to-br ${stat.gradient}
                  border ${colorStyles[stat.color].border}
                `}
              >
                <div className={`${colorStyles[stat.color].text} mb-1.5 sm:mb-3`}>
                  {stat.icon}
                </div>
                <p className="text-base sm:text-2xl font-display font-bold text-text-primary">
                  {stat.value}
                </p>
                <p className="text-[9px] sm:text-xs text-text-muted mt-0.5 sm:mt-1">{stat.label}</p>

                {/* Decorative gradient */}
                <div
                  className={`
                    absolute -bottom-4 -right-4 w-12 sm:w-20 h-12 sm:h-20 rounded-full blur-2xl opacity-30
                    ${colorStyles[stat.color].bg}
                  `}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Quick Actions */}
      <Section title="Quick Actions" subtitle="Jump right in">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 gap-1.5 sm:gap-3"
        >
          {quickActions.map((action) => (
            <motion.div key={action.label} variants={itemVariants}>
              <Link to={action.to}>
                <Card
                  variant="glass"
                  hover
                  className="group !p-2 sm:!p-4"
                >
                  <div className="flex items-center gap-2 sm:gap-4">
                    <div
                      className={`
                        w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl border shrink-0
                        flex items-center justify-center
                        transition-all duration-300
                        group-hover:scale-110
                        ${colorStyles[action.color].bg}
                        ${colorStyles[action.color].text}
                        ${colorStyles[action.color].border}
                      `}
                    >
                      {action.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-text-primary text-xs sm:text-base">{action.label}</p>
                      <p className="text-[10px] sm:text-sm text-text-muted truncate">{action.desc}</p>
                    </div>
                    <ChevronRight
                      className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-text-muted group-hover:text-sunrise group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Book Library */}
      <Section title="Book Library" subtitle="Explore your collection">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {Object.entries(bookContent).slice(0, 6).map(([key, book]) => (
            <motion.div key={key} variants={itemVariants}>
              <Card variant="glass" hover className="h-full group">
                <CardHeader
                  title={book.title}
                  subtitle={book.author}
                  icon={<BookOpen className="w-5 h-5" />}
                  iconColor="sunrise"
                />
                <div className="mt-4 flex items-center justify-between">
                  <Badge variant="primary" size="sm">
                    {book.coreConcepts.length} concepts
                  </Badge>
                  <ChevronRight
                    className="w-4 h-4 text-text-muted group-hover:text-sunrise group-hover:translate-x-1 transition-all"
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <Link
          to="/modules"
          className="mt-4 inline-flex items-center gap-2 text-sm text-sunrise hover:text-sunrise-light transition-colors"
        >
          View all books
          <ChevronRight className="w-4 h-4" />
        </Link>
      </Section>

      {/* Leaderboard */}
      <Section title="Compete & Learn">
        <LocalLeaderboard maxEntries={5} />
      </Section>

      {/* Daily Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative overflow-hidden rounded-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-sunrise/10 via-lavender/5 to-golden/10" />
        <div className="absolute inset-0 border border-sunrise/20 rounded-2xl" />

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-sunrise/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-lavender/10 rounded-full blur-2xl" />

        <div className="relative p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-sunrise/10 border border-sunrise/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-sunrise" />
            </div>
            <div>
              <p className="text-lg md:text-xl text-text-primary font-medium italic leading-relaxed">
                "Habits are the compound interest of self-improvement."
              </p>
              <p className="text-sm text-sunrise mt-3 font-medium">
                - James Clear, Atomic Habits
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </ModuleLayout>
  );
}

export default Dashboard;
