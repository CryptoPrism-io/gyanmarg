import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  RotateCcw,
  Check,
  Star,
  Calendar,
  TrendingUp,
  Sparkles,
  Lock,
  BookOpen,
  ChevronRight,
  ArrowLeft,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useProgressStore } from '@/store/progressStore';
import { useSpacedRepetitionStore } from '@/store/spacedRepetitionStore';
import { useSoundEffects } from '@/hooks';
import { ModuleLayout } from '@/components/templates';
import { GlassCard } from '@/components/molecules';
import { FlashCard, RatingButtons } from '@/components/molecules/FlashCard';
import { Button, Badge, ProgressBar } from '@/components/atoms';
import { getCategoryById } from '@/data/review-categories';
import type { ReviewRating } from '@/types';

const ratingToSM2: Record<'hard' | 'good' | 'easy', ReviewRating> = {
  hard: 2,
  good: 4,
  easy: 5,
};

// Color mapping for categories
const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
  lavender: { bg: 'bg-lavender/10', border: 'border-lavender/30', text: 'text-lavender' },
  coral: { bg: 'bg-coral/10', border: 'border-coral/30', text: 'text-coral' },
  golden: { bg: 'bg-golden/10', border: 'border-golden/30', text: 'text-golden' },
  sage: { bg: 'bg-sage/10', border: 'border-sage/30', text: 'text-sage' },
  electric: { bg: 'bg-electric/10', border: 'border-electric/30', text: 'text-electric' },
  sunrise: { bg: 'bg-sunrise/10', border: 'border-sunrise/30', text: 'text-sunrise' },
};

export function SpacedRepetition() {
  const navigate = useNavigate();
  const { addXP, unlockAchievement, hasAchievement, incrementReviewCount, userProgress } = useProgressStore();
  const syncUnlockedCards = useSpacedRepetitionStore((s) => s.syncUnlockedCards);
  const getDueCards = useSpacedRepetitionStore((s) => s.getDueCards);
  const reviewCard = useSpacedRepetitionStore((s) => s.reviewCard);
  const getCardStats = useSpacedRepetitionStore((s) => s.getCardStats);
  const getCategoryStats = useSpacedRepetitionStore((s) => s.getCategoryStats);
  const unlockedCards = useSpacedRepetitionStore((s) => s.unlockedCards);
  const { playCardFlip, playCorrect, playXpGain } = useSoundEffects();

  // View state: 'hub' or category ID
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [reviewed, setReviewed] = useState<string[]>([]);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [sessionXP, setSessionXP] = useState(0);

  // Sync unlocked cards
  useEffect(() => {
    syncUnlockedCards(userProgress.lessonsCompleted);
  }, [syncUnlockedCards, userProgress.lessonsCompleted]);

  const cardStats = useMemo(() => getCardStats(), [getCardStats, unlockedCards]);
  const categoryStats = useMemo(
    () => getCategoryStats(userProgress.lessonsCompleted),
    [getCategoryStats, userProgress.lessonsCompleted, unlockedCards]
  );

  // Get due cards for selected category
  const dueCards = useMemo(
    () => getDueCards(selectedCategory || undefined),
    [getDueCards, unlockedCards, reviewed, selectedCategory]
  );
  const sessionCards = useMemo(() => dueCards.slice(0, 10), [dueCards]);
  const currentCard = sessionCards[currentIndex];

  // Get current category config
  const currentCategoryConfig = selectedCategory ? getCategoryById(selectedCategory) : null;
  const xpPerCard = currentCategoryConfig?.xpPerCard || 20;

  const progress = sessionCards.length > 0 ? (reviewed.length / sessionCards.length) * 100 : 0;

  const handleFlip = (flipped: boolean) => {
    setIsFlipped(flipped);
    if (flipped) {
      setShowRating(true);
      playCardFlip();
    }
  };

  const handleRate = (rating: 'hard' | 'good' | 'easy') => {
    if (!currentCard) return;

    const sm2Rating = ratingToSM2[rating];
    reviewCard(currentCard.id, sm2Rating);
    incrementReviewCount();

    // XP based on category and rating
    const ratingMultiplier = { hard: 0.5, good: 1, easy: 1.5 };
    const earnedXP = Math.round(xpPerCard * ratingMultiplier[rating]);
    addXP(earnedXP);
    setSessionXP(prev => prev + earnedXP);
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
  };

  const backToHub = () => {
    setSelectedCategory(null);
    resetSession();
  };

  // ========================================
  // REVIEW HUB - Category Selection
  // ========================================
  if (!selectedCategory) {
    const totalDue = categoryStats.reduce((sum, s) => sum + s.due, 0);
    const unlockedCategories = categoryStats.filter(s => s.isUnlocked && s.total > 0);
    const lockedCategories = categoryStats.filter(s => !s.isUnlocked);

    return (
      <ModuleLayout
        title="Review Hub"
        subtitle="Strengthen your knowledge"
        icon={<Brain className="w-5 h-5" />}
        headerGradient="aurora"
        rightContent={
          <Badge variant={totalDue > 0 ? 'warning' : 'success'} size="md">
            {totalDue} due
          </Badge>
        }
      >
        {/* Overall Stats */}
        <GlassCard className="mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lavender to-electric flex items-center justify-center">
                <Brain className="w-6 h-6 text-base" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-text-primary">Total Progress</h3>
                <p className="text-sm text-text-muted">
                  {cardStats.total} cards unlocked
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-sage" />
                <span className="text-2xl font-display font-bold text-sage">
                  {cardStats.mastered}
                </span>
              </div>
              <p className="text-xs text-text-muted">Mastered</p>
            </div>
          </div>
        </GlassCard>

        {/* No categories unlocked */}
        {unlockedCategories.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-lavender/10 border border-lavender/20 rounded-2xl flex items-center justify-center">
              <Lock className="w-10 h-10 text-lavender" />
            </div>
            <h2 className="text-xl font-display font-bold text-text-primary mb-2">
              Start Learning to Unlock Reviews
            </h2>
            <p className="text-text-secondary mb-6 max-w-md mx-auto">
              Complete lessons to unlock flashcard reviews for each topic.
              Each module has its own set of cards.
            </p>
            <Button variant="primary" onClick={() => navigate('/pathway')} glow>
              <BookOpen className="w-4 h-4 mr-2" />
              Go to Lessons
            </Button>
          </motion.div>
        )}

        {/* Unlocked Categories */}
        {unlockedCategories.length > 0 && (
          <>
            <h2 className="text-lg font-display font-semibold text-text-primary mb-4">
              Your Review Topics
            </h2>
            <div className="space-y-3 mb-8">
              {unlockedCategories.map((stat) => {
                const category = getCategoryById(stat.categoryId);
                if (!category) return null;
                const colors = colorClasses[category.color] || colorClasses.lavender;
                const masteryPercent = stat.total > 0 ? Math.round((stat.mastered / stat.total) * 100) : 0;

                return (
                  <motion.button
                    key={category.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full glass rounded-xl p-4 border ${colors.border} hover:border-white/30 transition-all text-left group`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center text-2xl`}>
                          {category.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-text-primary group-hover:text-white transition-colors">
                            {category.name}
                          </h3>
                          <p className="text-xs text-text-muted">{category.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {stat.due > 0 && (
                          <Badge variant="warning" size="sm">
                            {stat.due} due
                          </Badge>
                        )}
                        <div className={`px-2 py-1 rounded-lg ${colors.bg} ${colors.text} text-sm font-medium`}>
                          +{category.xpPerCard} XP
                        </div>
                        <ChevronRight className="w-5 h-5 text-text-muted group-hover:text-white group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <ProgressBar value={masteryPercent} variant="default" size="sm" />
                      </div>
                      <span className="text-xs text-text-muted w-20 text-right">
                        {stat.mastered}/{stat.total} mastered
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </>
        )}

        {/* Locked Categories */}
        {lockedCategories.length > 0 && (
          <>
            <h2 className="text-lg font-display font-semibold text-text-muted mb-4">
              Locked Topics
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {lockedCategories.slice(0, 6).map((stat) => {
                const category = getCategoryById(stat.categoryId);
                if (!category) return null;

                return (
                  <div
                    key={category.id}
                    className="glass rounded-xl p-4 border border-white/5 opacity-50"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-surface/50 flex items-center justify-center text-xl grayscale">
                        {category.icon}
                      </div>
                      <Lock className="w-4 h-4 text-text-muted" />
                    </div>
                    <h3 className="font-medium text-text-muted text-sm">{category.name}</h3>
                    <p className="text-xs text-text-muted mt-1">Complete {category.name} lessons</p>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </ModuleLayout>
    );
  }

  // ========================================
  // CATEGORY REVIEW SESSION
  // ========================================
  const categoryConfig = getCategoryById(selectedCategory);
  const categoryColor = categoryConfig ? colorClasses[categoryConfig.color] || colorClasses.lavender : colorClasses.lavender;

  // No cards due in this category
  if (dueCards.length === 0 && !sessionComplete) {
    const categoryStat = categoryStats.find(s => s.categoryId === selectedCategory);

    return (
      <ModuleLayout
        title={categoryConfig?.name || 'Review'}
        subtitle={categoryConfig?.description}
        icon={<span className="text-xl">{categoryConfig?.icon}</span>}
        headerGradient="aurora"
      >
        <Button variant="ghost" onClick={backToHub} className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Hub
        </Button>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-sage/10 border border-sage/20 rounded-2xl flex items-center justify-center">
            <Check className="w-10 h-10 text-sage" />
          </div>
          <h2 className="text-2xl font-display font-bold text-text-primary mb-2">
            All caught up!
          </h2>
          <p className="text-text-secondary mb-6">
            No {categoryConfig?.name} cards due for review.
          </p>

          <GlassCard className="max-w-sm mx-auto mb-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-display font-bold text-text-primary">{categoryStat?.total || 0}</p>
                <p className="text-xs text-text-muted">Total</p>
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-sage">{categoryStat?.mastered || 0}</p>
                <p className="text-xs text-text-muted">Mastered</p>
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-lavender">{categoryStat?.learning || 0}</p>
                <p className="text-xs text-text-muted">Learning</p>
              </div>
            </div>
          </GlassCard>

          <p className="text-sm text-text-muted flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4" />
            Come back tomorrow
          </p>
        </motion.div>
      </ModuleLayout>
    );
  }

  // Session complete
  if (sessionComplete) {
    const remainingDue = getDueCards(selectedCategory).length;

    return (
      <ModuleLayout
        title="Session Complete!"
        icon={<span className="text-xl">{categoryConfig?.icon}</span>}
        headerGradient="aurora"
      >
        <Button variant="ghost" onClick={backToHub} className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Hub
        </Button>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-sage/10 border border-sage/20 rounded-2xl flex items-center justify-center">
            <Sparkles className="w-10 h-10 text-sage" />
          </div>
          <h2 className="text-2xl font-display font-bold text-text-primary mb-2">
            {categoryConfig?.name} Review Done!
          </h2>
          <p className="text-text-secondary mb-6">
            You reviewed {reviewed.length} cards.
          </p>

          <GlassCard className="max-w-sm mx-auto mb-6">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className={`w-12 h-12 rounded-xl ${categoryColor.bg} border ${categoryColor.border} flex items-center justify-center`}>
                <Star className="w-6 h-6 text-golden" />
              </div>
              <span className="text-3xl font-display font-bold text-golden">
                +{sessionXP}
              </span>
            </div>
            <p className="text-sm text-text-muted">XP Earned ({categoryConfig?.xpPerCard} per card)</p>
          </GlassCard>

          <div className="flex gap-3 justify-center">
            {remainingDue > 0 ? (
              <Button variant="primary" onClick={resetSession} glow>
                <RotateCcw className="w-4 h-4 mr-2" />
                Review {remainingDue} More
              </Button>
            ) : (
              <Button variant="secondary" onClick={backToHub}>
                Back to Hub
              </Button>
            )}
          </div>
        </motion.div>
      </ModuleLayout>
    );
  }

  // Active review
  return (
    <ModuleLayout
      title={categoryConfig?.name || 'Review'}
      subtitle={`+${xpPerCard} XP per card`}
      icon={<span className="text-xl">{categoryConfig?.icon}</span>}
      headerGradient="aurora"
      rightContent={
        <Badge variant="primary" size="md">
          {reviewed.length + 1} / {sessionCards.length}
        </Badge>
      }
    >
      <Button variant="ghost" onClick={backToHub} className="mb-4">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </Button>

      {/* Progress */}
      <GlassCard className="mb-6">
        <div className="flex items-center justify-between text-sm mb-3">
          <span className="text-text-secondary font-medium">Session Progress</span>
          <span className={categoryColor.text + ' font-semibold'}>{Math.round(progress)}%</span>
        </div>
        <ProgressBar value={progress} variant="gradient" size="md" animated />
      </GlassCard>

      {/* Current Card */}
      {currentCard && (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="max-w-md mx-auto"
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
              <p className="text-center text-sm text-text-muted mt-4">
                Tap the card to reveal the answer
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      )}

      {/* XP Info */}
      <div className={`mt-6 p-4 rounded-xl ${categoryColor.bg} border ${categoryColor.border}`}>
        <div className="flex items-center justify-between">
          <span className="text-sm text-text-secondary">XP this session</span>
          <span className={`font-bold ${categoryColor.text}`}>+{sessionXP} XP</span>
        </div>
      </div>
    </ModuleLayout>
  );
}

export default SpacedRepetition;
