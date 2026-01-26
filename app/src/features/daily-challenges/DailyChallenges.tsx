import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Zap, Check, Star, ChevronRight, RefreshCw, Trophy, Sparkles } from 'lucide-react';
import { useProgressStore } from '@/store/progressStore';
import { useSoundEffects } from '@/hooks';
import { ModuleLayout } from '@/components/templates';
import { GlassCard } from '@/components/molecules';
import { Button, Badge } from '@/components/atoms';
import { Modal } from '@/components/organisms';
import { getTodaysChallenges } from '@/data/challengePool';
import type { EnhancedDailyChallenge } from '@/types';

const difficultyColors = {
  easy: { bg: 'bg-sage/10', border: 'border-sage/30', text: 'text-sage' },
  medium: { bg: 'bg-golden/10', border: 'border-golden/30', text: 'text-golden' },
  hard: { bg: 'bg-coral/10', border: 'border-coral/30', text: 'text-coral' },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function DailyChallenges() {
  const { addXP, unlockAchievement, hasAchievement } = useProgressStore();
  const { playSuccess, playXpGain } = useSoundEffects();
  const [completedChallenges, setCompletedChallenges] = useState<string[]>([]);
  const [activeChallenge, setActiveChallenge] = useState<EnhancedDailyChallenge | null>(null);
  const [response, setResponse] = useState('');

  // Get today's challenges using date-seeded rotation (5 challenges per day)
  const dailyChallenges = useMemo(() => getTodaysChallenges(5), []);

  const handleComplete = () => {
    if (!activeChallenge || !response.trim()) return;

    setCompletedChallenges((prev) => [...prev, activeChallenge.id]);
    addXP(activeChallenge.xpReward);
    playXpGain();
    playSuccess();

    // Achievement check
    if (!hasAchievement('first_challenge')) {
      unlockAchievement('first_challenge', 50);
    }

    setActiveChallenge(null);
    setResponse('');
  };

  const todaysChallenges = dailyChallenges.filter(
    (c) => !completedChallenges.includes(c.id)
  );
  const completedToday = dailyChallenges.filter((c) =>
    completedChallenges.includes(c.id)
  );

  const totalXpEarned = completedChallenges.reduce((sum, id) => {
    const c = dailyChallenges.find((ch) => ch.id === id);
    return sum + (c?.xpReward || 0);
  }, 0);

  return (
    <ModuleLayout
      title="Daily Challenges"
      subtitle="Apply what you've learned"
      icon={<Zap className="w-5 h-5" />}
      headerGradient="sunset"
      rightContent={
        <Badge variant="success" size="md">
          {completedChallenges.length}/{dailyChallenges.length} Done
        </Badge>
      }
    >
      {/* Stats Card */}
      <GlassCard className="mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-golden to-sunrise flex items-center justify-center shadow-golden">
              <Trophy className="w-6 h-6 text-base" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-text-primary">Today's Progress</h3>
              <p className="text-sm text-text-muted">
                Complete challenges to earn bonus XP
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-golden" />
              <span className="text-2xl font-display font-bold text-golden">
                {totalXpEarned}
              </span>
            </div>
            <p className="text-xs text-text-muted">XP Earned</p>
          </div>
        </div>
      </GlassCard>

      {/* Available Challenges */}
      {todaysChallenges.length > 0 && (
        <>
          <h2 className="text-lg font-display font-semibold text-text-primary mb-4">
            Available Challenges
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-3 mb-8"
          >
            {todaysChallenges.map((challenge) => {
              const diffColors = difficultyColors[challenge.difficulty];

              return (
                <motion.div key={challenge.id} variants={itemVariants}>
                  <button
                    onClick={() => setActiveChallenge(challenge)}
                    className="w-full glass rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all text-left group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-coral/10 border border-coral/20 flex items-center justify-center">
                          <Zap className="w-5 h-5 text-coral" />
                        </div>
                        <div>
                          <h3 className="font-medium text-text-primary">
                            {challenge.title}
                          </h3>
                          <p className="text-xs text-text-muted">{challenge.category}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-text-muted group-hover:text-text-secondary group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-sm text-text-secondary mb-3 pl-14">
                      {challenge.description}
                    </p>
                    <div className="flex items-center gap-3 pl-14">
                      <Badge className={`${diffColors.bg} ${diffColors.text} border ${diffColors.border}`}>
                        {challenge.difficulty}
                      </Badge>
                      <span className="text-sm text-golden font-medium">
                        +{challenge.xpReward} XP
                      </span>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </>
      )}

      {/* Completed Challenges */}
      {completedToday.length > 0 && (
        <>
          <h2 className="text-lg font-display font-semibold text-text-primary mb-4">
            Completed Today
          </h2>
          <div className="space-y-2">
            {completedToday.map((challenge) => (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-sage/5 rounded-xl p-4 border border-sage/30 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sage flex items-center justify-center">
                    <Check className="w-5 h-5 text-base" />
                  </div>
                  <span className="font-medium text-sage">
                    {challenge.title}
                  </span>
                </div>
                <span className="text-sm text-sage font-medium">
                  +{challenge.xpReward} XP
                </span>
              </motion.div>
            ))}
          </div>
        </>
      )}

      {/* All Complete */}
      {todaysChallenges.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-20 h-20 mx-auto mb-4 bg-sage/10 border border-sage/20 rounded-2xl flex items-center justify-center">
            <Sparkles className="w-10 h-10 text-sage" />
          </div>
          <h3 className="text-xl font-display font-semibold text-text-primary mb-2">
            All Challenges Complete!
          </h3>
          <p className="text-text-secondary mb-4">
            Amazing work! Come back tomorrow for new challenges.
          </p>
          <p className="text-xs text-text-muted flex items-center justify-center gap-2">
            <RefreshCw className="w-3 h-3" />
            New challenges rotate daily from a pool of 40+
          </p>
        </motion.div>
      )}

      {/* Challenge Modal */}
      <Modal
        isOpen={!!activeChallenge}
        onClose={() => {
          setActiveChallenge(null);
          setResponse('');
        }}
        title={activeChallenge?.title}
        size="lg"
      >
        {activeChallenge && (
          <div className="space-y-5">
            <GlassCard className="border-sunrise/20">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-sunrise/10 border border-sunrise/20 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-sunrise" />
                </div>
                <div>
                  <p className="text-sm text-sunrise font-medium mb-1">
                    {activeChallenge.category}
                  </p>
                  <p className="text-text-secondary">{activeChallenge.description}</p>
                </div>
              </div>
            </GlassCard>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Your response:
              </label>
              <textarea
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                placeholder="Write your response..."
                rows={6}
                className="w-full glass border border-white/10 rounded-xl px-4 py-3 text-text-primary placeholder-text-muted focus:border-sunrise/50 focus:ring-2 focus:ring-sunrise/20 transition-all resize-none bg-transparent"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-golden/10 border border-golden/20">
                <Star className="w-4 h-4 text-golden" />
                <span className="text-golden font-medium">
                  +{activeChallenge.xpReward} XP
                </span>
              </div>
              <Button
                variant="primary"
                onClick={handleComplete}
                disabled={!response.trim()}
                glow={!!response.trim()}
              >
                <Check className="w-4 h-4 mr-2" />
                Complete Challenge
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </ModuleLayout>
  );
}

export default DailyChallenges;
