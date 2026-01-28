import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Check,
  Star,
  ChevronRight,
  Trophy,
  Sparkles,
  Lock,
  BookOpen,
  Brain,
  AlertCircle,
  Eye,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useProgressStore } from '@/store/progressStore';
import { useSoundEffects, useReviewGate } from '@/hooks';
import { ModuleLayout } from '@/components/templates';
import { GlassCard } from '@/components/molecules';
import { Button, Badge, ProgressBar } from '@/components/atoms';
import { Modal } from '@/components/organisms';
import { challengePool } from '@/data/challengePool';
import type { EnhancedDailyChallenge } from '@/types';

// Configuration
const LESSONS_TO_UNLOCK_CHALLENGES = 3; // Complete 3 lessons to unlock challenges
const VISIBLE_CHALLENGES = 3; // Only 3 challenges visible at a time
const MIN_WORDS = 10; // Minimum words required in response

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

// Count words in text
function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(word => word.length > 0).length;
}

export function DailyChallenges() {
  const {
    userProgress,
    completeChallenge,
    getChallengeCompletions,
    getChallengeResponse,
    unlockAchievement,
    hasAchievement,
  } = useProgressStore();
  const { playSuccess, playXpGain } = useSoundEffects();
  const { dueCount } = useReviewGate();
  const navigate = useNavigate();

  const [activeChallenge, setActiveChallenge] = useState<EnhancedDailyChallenge | null>(null);
  const [response, setResponse] = useState('');
  const [viewingResponse, setViewingResponse] = useState<{ challenge: EnhancedDailyChallenge; response: string } | null>(null);

  // Get all completed challenges
  const completedChallengeIds = useMemo(() => {
    return new Set(getChallengeCompletions().map(c => c.challengeId));
  }, [getChallengeCompletions]);

  // Check if challenges are unlocked (need X lessons completed)
  const lessonsCompleted = userProgress.lessonsCompleted.length;
  const challengesUnlocked = lessonsCompleted >= LESSONS_TO_UNLOCK_CHALLENGES;
  const lessonsUntilUnlock = Math.max(0, LESSONS_TO_UNLOCK_CHALLENGES - lessonsCompleted);

  // Get visible challenges (progressive unlock - only show next 3 uncompleted)
  const visibleChallenges = useMemo(() => {
    if (!challengesUnlocked) return [];

    // Sort challenges by ID to maintain consistent order
    const sortedChallenges = [...challengePool].sort((a, b) => a.id.localeCompare(b.id));

    // Find the first uncompleted challenge index
    let firstUncompletedIndex = sortedChallenges.findIndex(c => !completedChallengeIds.has(c.id));
    if (firstUncompletedIndex === -1) {
      // All challenges completed
      return [];
    }

    // Return next VISIBLE_CHALLENGES uncompleted challenges
    const visible: EnhancedDailyChallenge[] = [];
    for (let i = firstUncompletedIndex; i < sortedChallenges.length && visible.length < VISIBLE_CHALLENGES; i++) {
      if (!completedChallengeIds.has(sortedChallenges[i].id)) {
        visible.push(sortedChallenges[i]);
      }
    }

    return visible;
  }, [challengesUnlocked, completedChallengeIds]);

  // Get recently completed challenges (last 5)
  const recentCompletions = useMemo(() => {
    const completions = getChallengeCompletions();
    return completions
      .slice(-5)
      .reverse()
      .map(completion => {
        const challenge = challengePool.find(c => c.id === completion.challengeId);
        return challenge ? { challenge, completion } : null;
      })
      .filter(Boolean) as { challenge: EnhancedDailyChallenge; completion: { response: string; xpEarned: number } }[];
  }, [getChallengeCompletions]);

  // Calculate total XP earned from challenges
  const totalChallengeXP = useMemo(() => {
    return getChallengeCompletions().reduce((sum, c) => sum + c.xpEarned, 0);
  }, [getChallengeCompletions]);

  // Word count for validation
  const wordCount = countWords(response);
  const isValidResponse = wordCount >= MIN_WORDS;

  const handleComplete = () => {
    if (!activeChallenge || !isValidResponse) return;

    completeChallenge(activeChallenge.id, response, activeChallenge.xpReward);
    playXpGain();
    playSuccess();

    // Achievement check
    if (!hasAchievement('first_challenge')) {
      unlockAchievement('first_challenge', 50);
    }

    // Check for challenge master achievement (10 challenges)
    const newCompletedCount = completedChallengeIds.size + 1;
    if (newCompletedCount >= 10 && !hasAchievement('challenge_master')) {
      unlockAchievement('challenge_master', 200);
    }

    setActiveChallenge(null);
    setResponse('');
  };

  const handleViewResponse = (challenge: EnhancedDailyChallenge) => {
    const savedResponse = getChallengeResponse(challenge.id);
    if (savedResponse) {
      setViewingResponse({ challenge, response: savedResponse });
    }
  };

  // Engagement gate: must have activity today OR zero due reviews
  const today = new Date().toISOString().split('T')[0];
  const isEngaged = userProgress.lastActivityDate === today || dueCount === 0;

  return (
    <ModuleLayout
      title="Challenges"
      subtitle="Apply what you've learned"
      icon={<Zap className="w-5 h-5" />}
      headerGradient="sunset"
      rightContent={
        <Badge variant="success" size="md">
          {completedChallengeIds.size}/{challengePool.length} Done
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
              <h3 className="font-display font-semibold text-text-primary">Challenge Progress</h3>
              <p className="text-sm text-text-muted">
                Complete challenges to apply your learning
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-golden" />
              <span className="text-2xl font-display font-bold text-golden">
                {totalChallengeXP}
              </span>
            </div>
            <p className="text-xs text-text-muted">Total XP Earned</p>
          </div>
        </div>
      </GlassCard>

      {/* Unlock Gate - Need to complete lessons first */}
      {!challengesUnlocked && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-xl bg-lavender/10 border border-lavender/30 mb-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-lavender/20 border border-lavender/30 flex items-center justify-center shrink-0">
              <Lock className="w-6 h-6 text-lavender" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lavender text-lg">Unlock Challenges</h3>
              <p className="text-text-secondary mt-1">
                Complete <span className="text-lavender font-medium">{lessonsUntilUnlock} more lesson{lessonsUntilUnlock !== 1 ? 's' : ''}</span> to unlock challenges.
                Challenges are rewards for your learning progress!
              </p>

              <div className="mt-4">
                <div className="flex items-center justify-between text-xs text-text-muted mb-2">
                  <span>Progress</span>
                  <span>{lessonsCompleted} / {LESSONS_TO_UNLOCK_CHALLENGES} lessons</span>
                </div>
                <ProgressBar
                  value={(lessonsCompleted / LESSONS_TO_UNLOCK_CHALLENGES) * 100}
                  variant="gradient"
                  size="md"
                />
              </div>

              <Button
                variant="primary"
                size="sm"
                className="mt-4"
                onClick={() => navigate('/pathway')}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Continue Learning
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Engagement Gate */}
      {challengesUnlocked && !isEngaged && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl bg-lavender/10 border border-lavender/30 mb-6"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-lavender/20 border border-lavender/30 flex items-center justify-center shrink-0">
              <Brain className="w-5 h-5 text-lavender" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lavender">Get Started First</h3>
              <p className="text-text-secondary text-sm mt-1">
                Complete a lesson or clear your {dueCount > 0 ? `${dueCount} pending reviews` : 'reviews'} to access today's challenges.
              </p>
              <div className="flex gap-2 mt-3">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => navigate('/pathway')}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Lessons
                </Button>
                {dueCount > 0 && (
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => navigate('/review')}
                  >
                    <Brain className="w-4 h-4 mr-2" />
                    Review ({dueCount})
                  </Button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Available Challenges */}
      {challengesUnlocked && isEngaged && visibleChallenges.length > 0 && (
        <>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-display font-semibold text-text-primary">
              Available Challenges
            </h2>
            <span className="text-sm text-text-muted">
              {VISIBLE_CHALLENGES} at a time
            </span>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-3 mb-8"
          >
            {visibleChallenges.map((challenge, index) => {
              const diffColors = difficultyColors[challenge.difficulty];
              const isFirst = index === 0;

              return (
                <motion.div key={challenge.id} variants={itemVariants}>
                  <button
                    onClick={() => isFirst ? setActiveChallenge(challenge) : null}
                    disabled={!isFirst}
                    className={`w-full glass rounded-xl p-4 border transition-all text-left group ${
                      isFirst
                        ? 'border-white/10 hover:border-white/20 cursor-pointer'
                        : 'border-white/5 opacity-60 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                          isFirst
                            ? 'bg-coral/10 border border-coral/20'
                            : 'bg-surface/50 border border-white/5'
                        }`}>
                          {isFirst ? (
                            <Zap className="w-5 h-5 text-coral" />
                          ) : (
                            <Lock className="w-5 h-5 text-text-muted" />
                          )}
                        </div>
                        <div>
                          <h3 className={`font-medium ${isFirst ? 'text-text-primary' : 'text-text-muted'}`}>
                            {challenge.title}
                          </h3>
                          <p className="text-xs text-text-muted">{challenge.category}</p>
                        </div>
                      </div>
                      {isFirst ? (
                        <ChevronRight className="w-5 h-5 text-text-muted group-hover:text-text-secondary group-hover:translate-x-1 transition-all" />
                      ) : (
                        <span className="text-xs text-text-muted px-2 py-1 rounded bg-surface/50">
                          Complete previous
                        </span>
                      )}
                    </div>
                    <p className={`text-sm mb-3 pl-14 ${isFirst ? 'text-text-secondary' : 'text-text-muted'}`}>
                      {challenge.description}
                    </p>
                    <div className="flex items-center gap-3 pl-14">
                      <Badge className={`${diffColors.bg} ${diffColors.text} border ${diffColors.border}`}>
                        {challenge.difficulty}
                      </Badge>
                      <span className={`text-sm font-medium ${isFirst ? 'text-golden' : 'text-text-muted'}`}>
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

      {/* All Challenges Complete */}
      {challengesUnlocked && isEngaged && visibleChallenges.length === 0 && (
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
            Amazing work! You've completed all {challengePool.length} challenges.
          </p>
          <div className="flex items-center justify-center gap-2 text-golden">
            <Star className="w-5 h-5" />
            <span className="font-semibold">{totalChallengeXP} XP Earned</span>
          </div>
        </motion.div>
      )}

      {/* Recently Completed */}
      {recentCompletions.length > 0 && (
        <>
          <h2 className="text-lg font-display font-semibold text-text-primary mb-4">
            Recently Completed
          </h2>
          <div className="space-y-2">
            {recentCompletions.map(({ challenge, completion }) => (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-sage/5 rounded-xl p-4 border border-sage/30"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-sage flex items-center justify-center">
                      <Check className="w-5 h-5 text-base" />
                    </div>
                    <div>
                      <span className="font-medium text-sage">
                        {challenge.title}
                      </span>
                      <p className="text-xs text-text-muted">
                        +{completion.xpEarned} XP
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleViewResponse(challenge)}
                    className="text-text-muted hover:text-text-primary"
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    View
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </>
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
                What action did you take? <span className="text-text-muted">(min {MIN_WORDS} words)</span>
              </label>
              <textarea
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                placeholder="Describe what you did, learned, or realized from this challenge..."
                rows={6}
                className="w-full glass border border-white/10 rounded-xl px-4 py-3 text-text-primary placeholder-text-muted focus:border-sunrise/50 focus:ring-2 focus:ring-sunrise/20 transition-all resize-none bg-transparent"
              />
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  {wordCount < MIN_WORDS ? (
                    <AlertCircle className="w-4 h-4 text-coral" />
                  ) : (
                    <Check className="w-4 h-4 text-sage" />
                  )}
                  <span className={`text-sm ${wordCount >= MIN_WORDS ? 'text-sage' : 'text-coral'}`}>
                    {wordCount} / {MIN_WORDS} words
                  </span>
                </div>
                {wordCount < MIN_WORDS && (
                  <span className="text-xs text-text-muted">
                    {MIN_WORDS - wordCount} more needed
                  </span>
                )}
              </div>
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
                disabled={!isValidResponse}
                glow={isValidResponse}
              >
                <Check className="w-4 h-4 mr-2" />
                Complete Challenge
              </Button>
            </div>
          </div>
        )}
      </Modal>

      {/* View Response Modal */}
      <Modal
        isOpen={!!viewingResponse}
        onClose={() => setViewingResponse(null)}
        title={viewingResponse?.challenge.title}
        size="md"
      >
        {viewingResponse && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-surface/50 border border-white/10">
              <p className="text-sm text-text-muted mb-2">Challenge:</p>
              <p className="text-text-secondary">{viewingResponse.challenge.description}</p>
            </div>
            <div className="p-4 rounded-xl bg-sage/5 border border-sage/20">
              <p className="text-sm text-sage mb-2">Your Response:</p>
              <p className="text-text-primary whitespace-pre-wrap">{viewingResponse.response}</p>
            </div>
          </div>
        )}
      </Modal>
    </ModuleLayout>
  );
}

export default DailyChallenges;
