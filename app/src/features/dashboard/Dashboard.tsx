import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Trophy,
  Flame,
  Star,
  Sparkles,
  History,
  ChevronDown,
  BookOpen,
  Brain,
  Target,
  ChevronRight,
  Zap,
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { useAuthContext } from '@/contexts/AuthContext';
import { useProgressStore } from '@/store/progressStore';
import { useSpacedRepetitionStore } from '@/store/spacedRepetitionStore';
import { useUserStore } from '@/store/userStore';
import { ModuleLayout, Section } from '@/components/templates';
import { GlassCard } from '@/components/molecules';
import { ProgressBar, XPBadge } from '@/components/atoms';
import { VisualOfTheDay, ResumeCard, QuickReviewCard, DailyPowerMeter, Leaderboard } from '@/components/organisms';
import { getDailyQuote, getPastQuotes, formatQuoteDate } from '@/data/quotes';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
};

// Compact daily quote — no backlog, just the quote
function DailyQuote() {
  const [showBacklog, setShowBacklog] = useState(false);
  const dailyQuote = getDailyQuote();
  const pastQuotes = getPastQuotes(7);

  return (
    <div className="space-y-2">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative overflow-hidden rounded-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-sunrise/8 via-lavender/4 to-golden/8" />
        <div className="absolute inset-0 border border-sunrise/15 rounded-xl" />
        <div className="relative p-4">
          <div className="flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-sunrise shrink-0 mt-1" />
            <div>
              <p className="text-sm text-text-primary font-medium italic leading-relaxed">
                &ldquo;{dailyQuote.text}&rdquo;
              </p>
              <p className="text-xs text-sunrise mt-2 font-medium">
                — {dailyQuote.author}{dailyQuote.source ? `, ${dailyQuote.source}` : ''}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <button
        onClick={() => setShowBacklog(!showBacklog)}
        className="flex items-center gap-1.5 text-[10px] text-text-muted hover:text-text-secondary transition-colors mx-auto"
      >
        <History className="w-3 h-3" />
        <span>Past week</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${showBacklog ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {showBacklog && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
            <div className="bg-surface border border-white/10 rounded-xl p-3 space-y-2">
              {pastQuotes.slice(1).map(({ date, quote }, i) => (
                <div key={i} className="flex gap-2 pb-2 border-b border-white/5 last:border-0 last:pb-0">
                  <span className="text-[9px] text-text-muted w-12 shrink-0">{formatQuoteDate(date)}</span>
                  <div className="flex-1">
                    <p className="text-[11px] text-text-secondary italic">&ldquo;{quote.text}&rdquo;</p>
                    <p className="text-[9px] text-sunrise mt-0.5">— {quote.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Dashboard() {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const userName = user?.displayName || null;
  const userProgress = useProgressStore((s) => s.userProgress);
  const getLevelProgress = useProgressStore((s) => s.getLevelProgress);
  const generateWeeklyChallenge = useProgressStore((s) => s.generateWeeklyChallenge);
  const updateStreak = useProgressStore((s) => s.updateStreak);
  const refreshStreakFreeze = useProgressStore((s) => s.refreshStreakFreeze);
  const weeklyChallenge = useProgressStore((s) => s.weeklyChallenge);
  const lastViewedLesson = useProgressStore((s) => s.lastViewedLesson);
  const consecutiveLogins = useUserStore((s) => s.consecutiveLogins);

  // Flashcard data
  const getDueCards = useSpacedRepetitionStore((s) => s.getDueCards);
  const dueCards = useMemo(() => getDueCards(), [getDueCards]);

  useEffect(() => {
    generateWeeklyChallenge();
    updateStreak();
    refreshStreakFreeze();
  }, [generateWeeklyChallenge, updateStreak, refreshStreakFreeze]);

  // Determine greeting based on time
  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  }, []);

  return (
    <ModuleLayout
      title={`${greeting}${userName ? `, ${userName}` : ''}`}
      subtitle="Your daily learning path"
      icon={<Sparkles className="w-5 h-5" />}
      headerGradient="sunrise"
    >
      {/* Daily Quote */}
      <div className="mb-4">
        <DailyQuote />
      </div>

      {/* Resume Card — Continue where you left off (friction removal) */}
      {lastViewedLesson && !lastViewedLesson.completed && (
        <div className="mb-6">
          <ResumeCard bookmark={lastViewedLesson} />
        </div>
      )}

      {/* Today's Path — the core daily loop */}
      <Section title="Today's Path" subtitle="Complete these to maintain your streak">
        <motion.div initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }} className="space-y-3">
          {/* Daily Power Meter — Meta-gamification */}
          <motion.div variants={itemVariants}>
            <DailyPowerMeter />
          </motion.div>

          {/* Step 1: Continue or start a lesson */}
          <motion.div variants={itemVariants}>
            <button
              onClick={() => navigate('/pathway')}
              className="w-full flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-sunrise/10 to-sunrise/5 border border-sunrise/20 hover:border-sunrise/30 transition-all group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-sunrise/15 border border-sunrise/20 flex items-center justify-center">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-sunrise" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm sm:text-base font-semibold text-text-primary">
                  {lastViewedLesson && !lastViewedLesson.completed ? 'Continue Lesson' : 'Start a Lesson'}
                </p>
                <p className="text-[11px] sm:text-xs text-text-muted">
                  {lastViewedLesson && !lastViewedLesson.completed
                    ? 'Resume where you left off'
                    : 'Pick up where you left off or explore something new'}
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-sunrise bg-sunrise/10 px-2 py-0.5 rounded-full">+50 XP</span>
                <ChevronRight className="w-4 h-4 text-text-muted group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </motion.div>

          {/* Step 2: Quick Review (teaser card + 5-card burst) */}
          {dueCards.length > 0 && (
            <motion.div variants={itemVariants}>
              <QuickReviewCard />
            </motion.div>
          )}

          {/* Step 3: Review flashcards (fallback button) */}
          {dueCards.length === 0 && (
            <motion.div variants={itemVariants}>
              <button
                onClick={() => navigate('/review')}
                className="w-full flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-lavender/10 to-lavender/5 border border-lavender/20 hover:border-lavender/30 transition-all group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-lavender/15 border border-lavender/20 flex items-center justify-center">
                  <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-lavender" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm sm:text-base font-semibold text-text-primary">Review Flashcards</p>
                  <p className="text-[11px] sm:text-xs text-text-muted">
                    All caught up! Check back later.
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-text-muted group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}

          {/* Step 4: Weekly quest progress */}
          {weeklyChallenge && !weeklyChallenge.completed && (
            <motion.div variants={itemVariants}>
              <GlassCard className="!p-3 sm:!p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-golden/15 border border-golden/20 flex items-center justify-center">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-golden" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm sm:text-base font-semibold text-text-primary">Weekly Quest</p>
                    <p className="text-[11px] sm:text-xs text-text-muted">{weeklyChallenge.title}</p>
                  </div>
                  <span className="text-xs font-semibold text-golden">
                    {weeklyChallenge.current}/{weeklyChallenge.target}
                  </span>
                </div>
                <ProgressBar
                  value={(weeklyChallenge.current / weeklyChallenge.target) * 100}
                  variant="gradient"
                  size="sm"
                  animated
                />
                <p className="text-[10px] text-text-muted mt-2">
                  +{weeklyChallenge.xpReward} XP on completion
                </p>
              </GlassCard>
            </motion.div>
          )}

          {weeklyChallenge?.completed && !weeklyChallenge.claimed && (
            <motion.div variants={itemVariants}>
              <GlassCard className="!p-3 sm:!p-4 border-sage/20 bg-sage/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sage/15 border border-sage/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-sage" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-sage">Weekly Quest Complete!</p>
                    <p className="text-[11px] text-text-muted">Claim your +{weeklyChallenge.xpReward} XP reward</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          )}
        </motion.div>
      </Section>

      {/* Daily Visual Concept */}
      <div className="mt-2 mb-2">
        <VisualOfTheDay />
      </div>

      {/* Leaderboard — Social Competition */}
      <Section title="Global Leaderboard" subtitle="See where you stand">
        <Leaderboard
          currentUserName={userName || undefined}
          currentUserXP={userProgress.xp}
          currentUserStreak={userProgress.currentStreak}
          currentUserLessons={userProgress.lessonsCompleted.length}
          maxEntries={10}
          variant="compact"
        />
      </Section>

      {/* Compact Stats Row */}
      <Section>
        <GlassCard className="!p-3 sm:!p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-sunrise" />
              <span className="text-xs sm:text-sm font-semibold text-text-primary">Level {userProgress?.level ?? 1}</span>
            </div>
            <XPBadge xp={userProgress?.xp ?? 0} />
          </div>
          <ProgressBar value={getLevelProgress()} variant="xp" size="sm" glow={getLevelProgress() > 50} animated />

          {/* Inline stats */}
          <div className="grid grid-cols-3 gap-3 mt-3 pt-3 border-t border-white/[0.06]">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-golden mb-0.5">
                <Trophy className="w-3.5 h-3.5" />
              </div>
              <p className="text-sm font-display font-bold text-text-primary">{(userProgress?.xp ?? 0).toLocaleString()}</p>
              <p className="text-[9px] text-text-muted">Total XP</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-coral mb-0.5">
                <Flame className="w-3.5 h-3.5" />
              </div>
              <p className="text-sm font-display font-bold text-text-primary">{consecutiveLogins ?? 0}</p>
              <p className="text-[9px] text-text-muted">Day Streak</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-sage mb-0.5">
                <BookOpen className="w-3.5 h-3.5" />
              </div>
              <p className="text-sm font-display font-bold text-text-primary">{userProgress?.lessonsCompleted?.length ?? 0}</p>
              <p className="text-[9px] text-text-muted">Lessons</p>
            </div>
          </div>
        </GlassCard>
      </Section>
    </ModuleLayout>
  );
}

export default Dashboard;
