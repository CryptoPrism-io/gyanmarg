import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Zap, Check, Star, ChevronRight, RefreshCw } from 'lucide-react';
import { useProgressStore } from '@/store/progressStore';
import { useSoundEffects } from '@/hooks';
import { ModuleLayout } from '@/components/templates';
import { Card } from '@/components/molecules';
import { Button, Badge } from '@/components/atoms';
import { Modal } from '@/components/organisms';
import { getTodaysChallenges } from '@/data/challengePool';
import type { EnhancedDailyChallenge } from '@/types';

const difficultyColors = {
  easy: 'bg-success/10 text-success',
  medium: 'bg-warning/10 text-warning',
  hard: 'bg-error/10 text-error',
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

  return (
    <ModuleLayout
      title="Daily Challenges"
      subtitle="Apply what you've learned"
      icon={<Zap className="w-5 h-5" />}
      rightContent={
        <Badge variant="success">
          {completedChallenges.length}/{dailyChallenges.length} Done
        </Badge>
      }
    >
      {/* Stats Card */}
      <Card className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-primary">Today's Progress</h3>
            <p className="text-sm text-muted">
              Complete challenges to earn bonus XP
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500" />
              <span className="text-2xl font-semibold text-amber-500">
                {completedChallenges.reduce((sum, id) => {
                  const c = dailyChallenges.find((ch) => ch.id === id);
                  return sum + (c?.xpReward || 0);
                }, 0)}
              </span>
            </div>
            <p className="text-xs text-muted">XP Earned</p>
          </div>
        </div>
      </Card>

      {/* Available Challenges */}
      {todaysChallenges.length > 0 && (
        <>
          <h2 className="text-lg font-semibold text-primary mb-4">
            Available Challenges
          </h2>
          <div className="space-y-3 mb-8">
            {todaysChallenges.map((challenge, i) => (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <button
                  onClick={() => setActiveChallenge(challenge)}
                  className="w-full bg-secondary rounded-xl p-4 border border-border hover:border-muted hover:bg-elevated transition-all text-left group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-warning/10 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-warning" />
                      </div>
                      <div>
                        <h3 className="font-medium text-primary">
                          {challenge.title}
                        </h3>
                        <p className="text-xs text-muted">{challenge.category}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted group-hover:text-secondary transition-colors" />
                  </div>
                  <p className="text-sm text-secondary ml-13 mb-3">
                    {challenge.description}
                  </p>
                  <div className="flex items-center gap-3 ml-13">
                    <Badge className={difficultyColors[challenge.difficulty]}>
                      {challenge.difficulty}
                    </Badge>
                    <span className="text-sm text-amber-500">
                      +{challenge.xpReward} XP
                    </span>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </>
      )}

      {/* Completed Challenges */}
      {completedToday.length > 0 && (
        <>
          <h2 className="text-lg font-semibold text-primary mb-4">
            Completed Today
          </h2>
          <div className="space-y-2">
            {completedToday.map((challenge) => (
              <div
                key={challenge.id}
                className="bg-success/5 rounded-xl p-4 border border-success/30 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-success flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium text-success">
                    {challenge.title}
                  </span>
                </div>
                <span className="text-sm text-success">
                  +{challenge.xpReward} XP
                </span>
              </div>
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
          <div className="w-16 h-16 mx-auto mb-4 bg-success/10 rounded-full flex items-center justify-center">
            <Check className="w-8 h-8 text-success" />
          </div>
          <h3 className="text-lg font-semibold text-primary mb-2">
            All Challenges Complete!
          </h3>
          <p className="text-secondary mb-4">
            Amazing work! Come back tomorrow for new challenges.
          </p>
          <p className="text-xs text-muted flex items-center justify-center gap-2">
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
          <div className="space-y-4">
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
              <p className="text-sm text-accent font-medium mb-1">
                {activeChallenge.category}
              </p>
              <p className="text-secondary">{activeChallenge.description}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary mb-2">
                Your response:
              </label>
              <textarea
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                placeholder="Write your response..."
                rows={6}
                className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-primary placeholder-muted focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-500" />
                <span className="text-amber-500 font-medium">
                  +{activeChallenge.xpReward} XP
                </span>
              </div>
              <Button
                onClick={handleComplete}
                disabled={!response.trim()}
                icon={<Check className="w-4 h-4" />}
              >
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
