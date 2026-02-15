import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  RotateCcw,
  Check,
  Sparkles,
  Lock,
  BookOpen,
  ChevronRight,
  ChevronLeft,
  Flame,
  Zap,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useProgressStore } from '@/store/progressStore';
import { useSpacedRepetitionStore } from '@/store/spacedRepetitionStore';
import { useSoundEffects } from '@/hooks';
import { useAuthGate } from '@/hooks/useAuthGate';
import { ModuleLayout } from '@/components/templates';
import { SignInGate } from '@/components/organisms';
import { FlashCard, RatingButtons } from '@/components/molecules/FlashCard';
import { Button } from '@/components/atoms';
import { getCategoryById } from '@/data/review-categories';
import type { ReviewRating } from '@/types';

const ratingToSM2: Record<'hard' | 'good' | 'easy', ReviewRating> = {
  hard: 2,
  good: 4,
  easy: 5,
};

const colorClasses: Record<string, { bg: string; border: string; text: string; ring: string }> = {
  lavender: { bg: 'bg-lavender/10', border: 'border-lavender/20', text: 'text-lavender', ring: 'ring-lavender/20' },
  coral: { bg: 'bg-coral/10', border: 'border-coral/20', text: 'text-coral', ring: 'ring-coral/20' },
  golden: { bg: 'bg-golden/10', border: 'border-golden/20', text: 'text-golden', ring: 'ring-golden/20' },
  sage: { bg: 'bg-sage/10', border: 'border-sage/20', text: 'text-sage', ring: 'ring-sage/20' },
  electric: { bg: 'bg-electric/10', border: 'border-electric/20', text: 'text-electric', ring: 'ring-electric/20' },
  sunrise: { bg: 'bg-sunrise/10', border: 'border-sunrise/20', text: 'text-sunrise', ring: 'ring-sunrise/20' },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 350, damping: 28 } },
};

export function SpacedRepetition() {
  const navigate = useNavigate();
  const { addXP, unlockAchievement, hasAchievement, incrementReviewCount, userProgress } = useProgressStore();
  const syncUnlockedCards = useSpacedRepetitionStore((s) => s.syncUnlockedCards);
  const resyncCards = useSpacedRepetitionStore((s) => s.resyncCards);
  const getDueCards = useSpacedRepetitionStore((s) => s.getDueCards);
  const reviewCard = useSpacedRepetitionStore((s) => s.reviewCard);
  const getCardStats = useSpacedRepetitionStore((s) => s.getCardStats);
  const getCategoryStats = useSpacedRepetitionStore((s) => s.getCategoryStats);
  const unlockedCards = useSpacedRepetitionStore((s) => s.unlockedCards);
  const totalReviews = useSpacedRepetitionStore((s) => s.totalReviews);
  const { playCardFlip, playCorrect, playXpGain } = useSoundEffects();
  const { isAuthenticated } = useAuthGate();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAuthGate, setShowAuthGate] = useState(!isAuthenticated);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [reviewed, setReviewed] = useState<string[]>([]);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [sessionXP, setSessionXP] = useState(0);
  const [sessionRatings, setSessionRatings] = useState<Record<'hard' | 'good' | 'easy', number>>({ hard: 0, good: 0, easy: 0 });

  useEffect(() => {
    if (!isAuthenticated) setShowAuthGate(true);
  }, [isAuthenticated]);

  const handleAuthGateClose = () => {
    setShowAuthGate(false);
    navigate('/pathway');
  };

  const handleAuthSuccess = () => setShowAuthGate(false);

  useEffect(() => {
    // First, clean up any incorrectly unlocked cards from previous broad matching
    resyncCards(userProgress.lessonsCompleted);
    // Then sync new cards based on completed lessons
    syncUnlockedCards(userProgress.lessonsCompleted);
  }, [resyncCards, syncUnlockedCards, userProgress.lessonsCompleted]);

  const cardStats = useMemo(() => getCardStats(), [getCardStats, unlockedCards]);
  const categoryStats = useMemo(
    () => getCategoryStats(userProgress.lessonsCompleted),
    [getCategoryStats, userProgress.lessonsCompleted, unlockedCards]
  );

  const dueCards = useMemo(
    () => getDueCards(selectedCategory || undefined),
    [getDueCards, unlockedCards, reviewed, selectedCategory]
  );
  const sessionCards = useMemo(() => dueCards.slice(0, 10), [dueCards]);
  const currentCard = sessionCards[currentIndex];

  const currentCategoryConfig = selectedCategory ? getCategoryById(selectedCategory) : null;
  const xpPerCard = currentCategoryConfig?.xpPerCard || 20;
  const handleFlip = (flipped: boolean) => {
    setIsFlipped(flipped);
    if (flipped) {
      setShowRating(true);
      playCardFlip();
    }
  };

  const handleRate = (rating: 'hard' | 'good' | 'easy') => {
    if (!currentCard) return;

    reviewCard(currentCard.id, ratingToSM2[rating]);
    incrementReviewCount();

    const ratingMultiplier = { hard: 0.5, good: 1, easy: 1.5 };
    const earnedXP = Math.round(xpPerCard * ratingMultiplier[rating]);
    addXP(earnedXP);
    setSessionXP(prev => prev + earnedXP);
    setSessionRatings(prev => ({ ...prev, [rating]: prev[rating] + 1 }));
    playXpGain();

    setReviewed((prev) => [...prev, currentCard.id]);

    if (reviewed.length === 0 && !hasAchievement('first_review')) {
      unlockAchievement('first_review', 50);
    }

    playCorrect();

    if (currentIndex < sessionCards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsFlipped(false);
      setShowRating(false);
    } else {
      setSessionComplete(true);
    }
  };

  const resetSession = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setShowRating(false);
    setReviewed([]);
    setSessionComplete(false);
    setSessionXP(0);
    setSessionRatings({ hard: 0, good: 0, easy: 0 });
  };

  const backToHub = () => {
    setSelectedCategory(null);
    resetSession();
  };

  // ========================================
  // REVIEW HUB
  // ========================================
  if (!selectedCategory) {
    const totalDue = categoryStats.reduce((sum, s) => sum + s.due, 0);
    const unlockedCategories = categoryStats.filter(s => s.isUnlocked && s.total > 0);
    const lockedCategories = categoryStats.filter(s => !s.isUnlocked);
    const masteryPercent = cardStats.total > 0 ? Math.round((cardStats.mastered / cardStats.total) * 100) : 0;

    // Sort: due cards first, then by mastery ascending
    const sortedUnlocked = [...unlockedCategories].sort((a, b) => {
      if (a.due > 0 && b.due === 0) return -1;
      if (a.due === 0 && b.due > 0) return 1;
      return (a.total > 0 ? a.mastered / a.total : 0) - (b.total > 0 ? b.mastered / b.total : 0);
    });

    return (
      <ModuleLayout
        title="Review"
        subtitle="Strengthen your knowledge"
        icon={<Brain className="w-5 h-5" />}
        headerGradient="aurora"
        rightContent={
          totalDue > 0 ? (
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-coral/15 border border-coral/20">
              <Flame className="w-3.5 h-3.5 text-coral" />
              <span className="text-xs font-bold text-coral">{totalDue} due</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sage/15 border border-sage/20">
              <Check className="w-3.5 h-3.5 text-sage" />
              <span className="text-xs font-bold text-sage">Caught up</span>
            </div>
          )
        }
      >
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-5">

          {/* === COMMAND CENTER HERO === */}
          <motion.div variants={itemVariants}>
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-lavender/[0.06] via-surface to-electric/[0.04]">
              {/* Decorative glows */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-lavender/[0.08] rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-electric/[0.06] rounded-full blur-3xl" />
              {totalDue > 0 && <div className="absolute top-0 right-0 w-24 h-24 bg-coral/[0.08] rounded-full blur-2xl animate-pulse" />}

              <div className="relative p-5">
                {/* Hero number + mastery ring */}
                <div className="flex items-center gap-5 mb-5">
                  {/* SVG Mastery Ring */}
                  <div className="relative w-20 h-20 shrink-0">
                    <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
                      <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="6" />
                      <motion.circle
                        cx="40" cy="40" r="34" fill="none"
                        stroke="url(#mastery-gradient)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 34}`}
                        initial={{ strokeDashoffset: 2 * Math.PI * 34 }}
                        animate={{ strokeDashoffset: 2 * Math.PI * 34 * (1 - masteryPercent / 100) }}
                        transition={{ type: 'spring', stiffness: 40, damping: 15, delay: 0.3 }}
                      />
                      <defs>
                        <linearGradient id="mastery-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#F59E0B" />
                          <stop offset="50%" stopColor="#EF4444" />
                          <stop offset="100%" stopColor="#22C55E" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-lg font-display font-bold text-text-primary">{masteryPercent}%</span>
                      <span className="text-[8px] text-text-muted uppercase tracking-wider">Mastery</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { value: cardStats.total, label: 'Unlocked', color: 'text-lavender' },
                        { value: cardStats.mastered, label: 'Mastered', color: 'text-golden' },
                        { value: totalReviews, label: 'Reviews', color: 'text-sage' },
                      ].map((stat) => (
                        <div key={stat.label} className="text-center">
                          <p className={`text-lg font-display font-bold ${stat.color}`}>{stat.value.toLocaleString()}</p>
                          <p className="text-[9px] text-text-muted">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* "Review All Urgent" CTA */}
                {totalDue > 0 && (
                  <motion.button
                    onClick={() => {
                      // Select the category with most due cards
                      const urgentCat = sortedUnlocked.reduce((best, s) => s.due > best.due ? s : best, sortedUnlocked[0]);
                      if (urgentCat) setSelectedCategory(urgentCat.categoryId);
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl bg-gradient-to-r from-coral/20 via-sunrise/15 to-golden/20 border border-coral/20 hover:border-coral/30 transition-all group"
                  >
                    <div className="relative">
                      <Flame className="w-5 h-5 text-coral" />
                      <div className="absolute -inset-1 bg-coral/20 rounded-full blur-sm animate-pulse" />
                    </div>
                    <span className="font-display font-bold text-sm text-text-primary">
                      Review {totalDue} Due Cards
                    </span>
                    <ChevronRight className="w-4 h-4 text-coral group-hover:translate-x-0.5 transition-transform" />
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>

          {/* === NO CARDS STATE === */}
          {unlockedCategories.length === 0 && (
            <motion.div variants={itemVariants} className="text-center py-10">
              <div className="w-16 h-16 mx-auto mb-4 bg-lavender/[0.08] border border-lavender/15 rounded-2xl flex items-center justify-center">
                <Lock className="w-8 h-8 text-lavender/50" />
              </div>
              <h2 className="text-lg font-display font-bold text-text-primary mb-1.5">
                No cards unlocked yet
              </h2>
              <p className="text-sm text-text-muted mb-5 max-w-xs mx-auto">
                Complete lessons to unlock flashcard reviews. Each lesson adds new cards to your deck.
              </p>
              <Button variant="primary" onClick={() => navigate('/pathway')} glow>
                <BookOpen className="w-4 h-4 mr-2" />
                Start Learning
              </Button>
            </motion.div>
          )}

          {/* === DUE NOW — HEAT CARDS === */}
          {totalDue > 0 && (
            <motion.div variants={itemVariants} className="space-y-2.5">
              <h3 className="text-sm font-display font-semibold text-text-primary flex items-center gap-2 px-1">
                <Flame className="w-4 h-4 text-coral" />
                Due Now
              </h3>
              <div className="space-y-2">
                {sortedUnlocked.filter(s => s.due > 0).map((stat) => {
                  const category = getCategoryById(stat.categoryId);
                  if (!category) return null;
                  const colors = colorClasses[category.color] || colorClasses.lavender;
                  const mastery = stat.total > 0 ? Math.round((stat.mastered / stat.total) * 100) : 0;
                  const heatLevel = stat.due > 20 ? 'high' : stat.due > 5 ? 'medium' : 'low';

                  return (
                    <motion.button
                      key={category.id}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`relative w-full overflow-hidden rounded-2xl border ${colors.border} bg-gradient-to-br from-white/[0.03] to-transparent hover:from-white/[0.05] transition-all group`}
                    >
                      {/* Heat glow — scales with urgency */}
                      {heatLevel === 'high' && (
                        <div className="absolute -top-4 -right-4 w-28 h-28 bg-coral/[0.12] rounded-full blur-2xl animate-pulse" />
                      )}
                      {heatLevel === 'medium' && (
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-sunrise/[0.08] rounded-full blur-2xl" />
                      )}

                      <div className="relative flex items-center gap-3.5 p-4">
                        {/* Mini mastery ring */}
                        <div className="relative w-12 h-12 shrink-0">
                          <svg viewBox="0 0 48 48" className="w-full h-full -rotate-90">
                            <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="3" />
                            <circle
                              cx="24" cy="24" r="20" fill="none"
                              className={colors.text.replace('text-', 'stroke-')}
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeDasharray={`${2 * Math.PI * 20}`}
                              strokeDashoffset={`${2 * Math.PI * 20 * (1 - mastery / 100)}`}
                              opacity="0.7"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center text-lg">
                            {category.icon}
                          </div>
                        </div>

                        <div className="flex-1 min-w-0 text-left">
                          <h4 className="text-sm font-semibold text-text-primary truncate group-hover:text-white transition-colors">
                            {category.name}
                          </h4>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-[10px] text-text-muted">
                              {stat.mastered}/{stat.total} mastered
                            </span>
                            <span className="text-[10px] text-text-muted">
                              +{category.xpPerCard} XP/card
                            </span>
                          </div>
                        </div>

                        {/* Due count badge with heat styling */}
                        <div className={`shrink-0 flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl ${
                          heatLevel === 'high' ? 'bg-coral/15 border border-coral/25' :
                          heatLevel === 'medium' ? 'bg-sunrise/12 border border-sunrise/20' :
                          'bg-golden/10 border border-golden/20'
                        }`}>
                          <span className={`text-base font-display font-bold ${
                            heatLevel === 'high' ? 'text-coral' : heatLevel === 'medium' ? 'text-sunrise' : 'text-golden'
                          }`}>
                            {stat.due}
                          </span>
                          <span className="text-[8px] text-text-muted uppercase tracking-wider">due</span>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* === ALL TOPICS — CAUGHT UP === */}
          {sortedUnlocked.filter(s => s.due === 0).length > 0 && (
            <motion.div variants={itemVariants} className="space-y-2.5">
              <h3 className="text-sm font-display font-semibold text-text-primary flex items-center gap-2 px-1">
                <Check className="w-4 h-4 text-sage" />
                Caught Up
              </h3>
              <div className="space-y-1.5">
                {sortedUnlocked.filter(s => s.due === 0).map((stat) => {
                  const category = getCategoryById(stat.categoryId);
                  if (!category) return null;
                  const mastery = stat.total > 0 ? Math.round((stat.mastered / stat.total) * 100) : 0;

                  return (
                    <motion.button
                      key={category.id}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => setSelectedCategory(category.id)}
                      className="w-full flex items-center gap-3 p-3 rounded-xl border border-white/[0.06] bg-white/[0.015] hover:bg-white/[0.03] transition-all"
                    >
                      {/* Mini mastery ring */}
                      <div className="relative w-10 h-10 shrink-0">
                        <svg viewBox="0 0 40 40" className="w-full h-full -rotate-90">
                          <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="2.5" />
                          <circle
                            cx="20" cy="20" r="16" fill="none"
                            stroke="#22C55E"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeDasharray={`${2 * Math.PI * 16}`}
                            strokeDashoffset={`${2 * Math.PI * 16 * (1 - mastery / 100)}`}
                            opacity="0.5"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-sm">
                          {category.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0 text-left">
                        <h4 className="text-sm font-medium text-text-primary truncate">{category.name}</h4>
                        <span className="text-[10px] text-text-muted">
                          {stat.mastered}/{stat.total} mastered
                        </span>
                      </div>
                      <span className={`text-[10px] font-bold ${mastery === 100 ? 'text-sage' : 'text-text-muted'}`}>
                        {mastery}%
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* === LOCKED TOPICS === */}
          {lockedCategories.length > 0 && (
            <motion.div variants={itemVariants} className="space-y-2">
              <h3 className="text-xs font-medium text-text-muted px-1">
                Locked ({lockedCategories.length} topics)
              </h3>
              <div className="flex flex-wrap gap-2">
                {lockedCategories.map((stat) => {
                  const category = getCategoryById(stat.categoryId);
                  if (!category) return null;

                  return (
                    <button
                      key={category.id}
                      onClick={() => navigate(`/modules/${category.id}`)}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.03] transition-colors group"
                    >
                      <span className="text-sm grayscale opacity-40 group-hover:opacity-60 transition-opacity">{category.icon}</span>
                      <span className="text-xs text-white/25 group-hover:text-white/40 transition-colors">{category.name}</span>
                      <Lock className="w-3 h-3 text-white/15" />
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          <div className="h-4" />
        </motion.div>
      </ModuleLayout>
    );
  }

  // ========================================
  // CATEGORY REVIEW SESSION
  // ========================================
  const categoryConfig = getCategoryById(selectedCategory);
  const categoryColor = categoryConfig ? colorClasses[categoryConfig.color] || colorClasses.lavender : colorClasses.lavender;

  // No cards due
  if (dueCards.length === 0 && !sessionComplete) {
    const categoryStat = categoryStats.find(s => s.categoryId === selectedCategory);
    const mastery = (categoryStat?.total || 0) > 0 ? Math.round(((categoryStat?.mastered || 0) / (categoryStat?.total || 1)) * 100) : 0;

    return (
      <ModuleLayout
        title={categoryConfig?.name || 'Review'}
        subtitle="All caught up"
        icon={<span className="text-xl">{categoryConfig?.icon}</span>}
        headerGradient="aurora"
        rightContent={
          <button onClick={backToHub} className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.1] transition-colors">
            <ChevronLeft className="w-4 h-4 text-text-muted" />
          </button>
        }
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-10"
        >
          <div className="w-16 h-16 mx-auto mb-4 bg-sage/[0.08] border border-sage/15 rounded-2xl flex items-center justify-center">
            <Check className="w-8 h-8 text-sage" />
          </div>
          <h2 className="text-xl font-display font-bold text-text-primary mb-1.5">
            All caught up!
          </h2>
          <p className="text-sm text-text-muted mb-6">
            No cards due. Come back tomorrow.
          </p>

          <div className="max-w-xs mx-auto rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 space-y-3">
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-lg font-display font-bold text-text-primary">{categoryStat?.total || 0}</p>
                <p className="text-[10px] text-text-muted">Total</p>
              </div>
              <div>
                <p className="text-lg font-display font-bold text-sage">{categoryStat?.mastered || 0}</p>
                <p className="text-[10px] text-text-muted">Mastered</p>
              </div>
              <div>
                <p className="text-lg font-display font-bold text-lavender">{categoryStat?.learning || 0}</p>
                <p className="text-[10px] text-text-muted">Learning</p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-text-muted">Mastery</span>
                <span className={`text-[10px] font-bold ${categoryColor.text}`}>{mastery}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${categoryColor.text.replace('text-', 'bg-')}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${mastery}%` }}
                  transition={{ delay: 0.3 }}
                />
              </div>
            </div>
          </div>

          <button
            onClick={backToHub}
            className="mt-6 text-sm text-text-muted hover:text-text-primary transition-colors"
          >
            Back to all topics
          </button>
        </motion.div>
      </ModuleLayout>
    );
  }

  // Session complete
  if (sessionComplete) {
    const remainingDue = getDueCards(selectedCategory).length;
    const totalRated = sessionRatings.hard + sessionRatings.good + sessionRatings.easy;

    return (
      <ModuleLayout
        title="Session Complete"
        icon={<Sparkles className="w-5 h-5" />}
        headerGradient="aurora"
        rightContent={
          <button onClick={backToHub} className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.1] transition-colors">
            <ChevronLeft className="w-4 h-4 text-text-muted" />
          </button>
        }
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-6 space-y-5"
        >
          {/* XP earned hero */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-golden/10 border border-golden/20 mb-3">
              <Zap className="w-5 h-5 text-golden" />
              <span className="text-2xl font-display font-bold text-golden">+{sessionXP} XP</span>
            </div>
            <p className="text-sm text-text-muted">
              {reviewed.length} cards reviewed
            </p>
          </motion.div>

          {/* Rating breakdown */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4"
          >
            <h4 className="text-xs font-medium text-text-muted mb-3">Session Breakdown</h4>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Again', count: sessionRatings.hard, color: 'text-coral', bg: 'bg-coral/10' },
                { label: 'Good', count: sessionRatings.good, color: 'text-golden', bg: 'bg-golden/10' },
                { label: 'Easy', count: sessionRatings.easy, color: 'text-sage', bg: 'bg-sage/10' },
              ].map((r) => (
                <div key={r.label} className="text-center">
                  <div className={`text-lg font-display font-bold ${r.color} mb-0.5`}>{r.count}</div>
                  <div className="text-[10px] text-text-muted">{r.label}</div>
                  {totalRated > 0 && (
                    <div className="mt-1.5 h-1 rounded-full bg-white/[0.06] overflow-hidden">
                      <div
                        className={`h-full rounded-full ${r.bg.replace('/10', '')} opacity-70`}
                        style={{ width: `${(r.count / totalRated) * 100}%` }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-2"
          >
            {remainingDue > 0 && (
              <Button variant="primary" onClick={resetSession} glow className="w-full gap-2">
                <RotateCcw className="w-4 h-4" />
                Review {remainingDue} More Cards
              </Button>
            )}
            <button
              onClick={backToHub}
              className="w-full py-3 text-sm text-text-muted hover:text-text-primary transition-colors"
            >
              Back to all topics
            </button>
          </motion.div>
        </motion.div>
      </ModuleLayout>
    );
  }

  // ========================================
  // ACTIVE REVIEW
  // ========================================
  return (
    <>
      <ModuleLayout
        title={categoryConfig?.name || 'Review'}
        icon={<span className="text-xl">{categoryConfig?.icon}</span>}
        headerGradient="aurora"
        rightContent={
          <button onClick={backToHub} className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.1] transition-colors">
            <ChevronLeft className="w-4 h-4 text-text-muted" />
          </button>
        }
      >
        {/* Progress strip */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-display font-bold text-text-primary">
                {reviewed.length + 1} / {sessionCards.length}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-golden" />
              <span className="text-xs font-bold text-golden">+{sessionXP}</span>
            </div>
          </div>
          {/* Step dots */}
          <div className="flex gap-1">
            {sessionCards.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full flex-1 transition-all duration-300 ${
                  i < reviewed.length
                    ? 'bg-sage'
                    : i === reviewed.length
                    ? `${categoryColor.text.replace('text-', 'bg-')} opacity-70`
                    : 'bg-white/[0.06]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Card */}
        {currentCard && (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCard.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.25 }}
              className="max-w-lg mx-auto"
            >
              <FlashCard
                front={currentCard.front}
                back={currentCard.back}
                category={currentCard.category}
                onFlip={handleFlip}
              />

              {showRating && (
                <RatingButtons onRate={handleRate} />
              )}

              {!isFlipped && (
                <p className="text-center text-xs text-text-muted/40 mt-3">
                  Tap card to reveal answer
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </ModuleLayout>

      {showAuthGate && (
        <SignInGate
          isOpen={true}
          onClose={handleAuthGateClose}
          onSignIn={handleAuthSuccess}
        />
      )}
    </>
  );
}

export default SpacedRepetition;
