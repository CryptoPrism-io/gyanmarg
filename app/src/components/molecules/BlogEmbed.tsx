import { motion } from 'framer-motion';
import { DemoFlashCard } from './DemoFlashCard';
import { DemoTinderStack } from './DemoTinderStack';
import { ProgressBar } from '@/components/atoms';
import { Brain, Zap, Target, Flame, Trophy } from 'lucide-react';

export type EmbedType =
  | 'FlashCard'
  | 'TinderStack'
  | 'ProgressBar'
  | 'Challenge'
  | 'ForgettingCurve'
  | 'XPDisplay'
  | 'StreakDisplay'
  | 'AchievementBadge';

interface BlogEmbedProps {
  type: EmbedType;
  props?: Record<string, unknown>;
  className?: string;
}

/**
 * Renders embedded interactive components within blog articles.
 * Maps embed types to their respective demo components.
 */
export function BlogEmbed({ type, props = {}, className = '' }: BlogEmbedProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`my-8 ${className}`}
    >
      <div className="glass rounded-2xl border border-white/10 p-6 overflow-hidden">
        {renderEmbed(type, props)}
      </div>
    </motion.div>
  );
}

function renderEmbed(type: EmbedType, props: Record<string, unknown>) {
  switch (type) {
    case 'FlashCard':
      return (
        <DemoFlashCard
          front={props.front as string || "What is spaced repetition?"}
          back={props.back as string || "A learning technique that spaces out review sessions over increasing intervals to optimize memory retention."}
          category={props.category as string || "Learning Science"}
          showRatingButtons={props.showRatingButtons as boolean ?? true}
        />
      );

    case 'TinderStack':
      return (
        <DemoTinderStack />
      );

    case 'ProgressBar':
      return (
        <DemoProgressDisplay
          xp={props.xp as number || 1250}
          level={props.level as number || 3}
          nextLevelXp={props.nextLevelXp as number || 500}
        />
      );

    case 'ForgettingCurve':
      return <ForgettingCurveDemo />;

    case 'Challenge':
      return (
        <DemoChallengeCard
          title={props.title as string || "Read 3 Lessons"}
          description={props.description as string || "Complete any 3 lessons to earn bonus XP"}
          xpReward={props.xpReward as number || 50}
          progress={props.progress as number || 1}
          total={props.total as number || 3}
        />
      );

    case 'XPDisplay':
      return (
        <DemoXPDisplay
          xp={props.xp as number || 2450}
          level={props.level as number || 5}
        />
      );

    case 'StreakDisplay':
      return (
        <DemoStreakDisplay
          streak={props.streak as number || 7}
        />
      );

    case 'AchievementBadge':
      return (
        <DemoAchievementBadge
          name={props.name as string || "First Steps"}
          description={props.description as string || "Complete your first lesson"}
          xpReward={props.xpReward as number || 50}
        />
      );

    default:
      return (
        <div className="text-center py-8 text-text-muted">
          Unknown embed type: {type}
        </div>
      );
  }
}

// Demo Progress Display
function DemoProgressDisplay({ xp, level, nextLevelXp }: { xp: number; level: number; nextLevelXp: number }) {
  const progressPercent = ((xp % 500) / 500) * 100;

  return (
    <div className="max-w-sm mx-auto">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-lg bg-golden/20 flex items-center justify-center">
          <Zap className="w-4 h-4 text-golden" />
        </div>
        <span className="text-sm text-text-muted">XP & Level Progress</span>
      </div>

      <div className="glass rounded-xl p-4 border border-golden/20">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-display font-bold text-golden">{xp.toLocaleString()}</span>
            <span className="text-text-muted text-sm">XP</span>
          </div>
          <div className="px-3 py-1 bg-golden/10 rounded-full border border-golden/20">
            <span className="text-sm font-semibold text-golden">Level {level}</span>
          </div>
        </div>
        <ProgressBar value={progressPercent} max={100} variant="xp" size="md" />
        <p className="text-xs text-text-muted mt-2 text-center">
          {nextLevelXp - (xp % 500)} XP to Level {level + 1}
        </p>
      </div>
    </div>
  );
}

// Demo Forgetting Curve Visualization
function ForgettingCurveDemo() {
  return (
    <div className="max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-lavender/20 flex items-center justify-center">
          <Brain className="w-4 h-4 text-lavender" />
        </div>
        <span className="text-sm text-text-muted">The Forgetting Curve</span>
      </div>

      <div className="relative h-48 bg-surface/50 rounded-xl p-4">
        {/* Y-axis labels */}
        <div className="absolute left-2 top-4 bottom-8 flex flex-col justify-between text-xs text-text-muted">
          <span>100%</span>
          <span>50%</span>
          <span>0%</span>
        </div>

        {/* Chart area */}
        <div className="ml-8 h-full relative">
          {/* Without review line (coral) */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <polyline
              fill="none"
              stroke="rgb(var(--color-coral))"
              strokeWidth="2"
              strokeDasharray="4 4"
              points="0,0 20,42 40,56 70,75 100,79"
              vectorEffect="non-scaling-stroke"
              style={{ transform: 'scaleY(-1) translateY(-100%)' }}
            />
          </svg>

          {/* With review line (sage) */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <polyline
              fill="none"
              stroke="rgb(var(--color-sage))"
              strokeWidth="3"
              points="0,0 20,5 40,8 70,12 100,15"
              vectorEffect="non-scaling-stroke"
              style={{ transform: 'scaleY(-1) translateY(-100%)' }}
            />
          </svg>
        </div>

        {/* X-axis labels */}
        <div className="absolute bottom-0 left-8 right-0 flex justify-between text-xs text-text-muted px-2">
          <span>Now</span>
          <span>1 day</span>
          <span>1 week</span>
          <span>1 month</span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-coral" style={{ borderStyle: 'dashed' }} />
          <span className="text-xs text-text-muted">Without review</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-sage" />
          <span className="text-xs text-text-muted">With spaced repetition</span>
        </div>
      </div>
    </div>
  );
}

// Demo Challenge Card
function DemoChallengeCard({
  title,
  description,
  xpReward,
  progress,
  total,
}: {
  title: string;
  description: string;
  xpReward: number;
  progress: number;
  total: number;
}) {
  const progressPercent = (progress / total) * 100;

  return (
    <div className="max-w-sm mx-auto">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-lg bg-sunrise/20 flex items-center justify-center">
          <Target className="w-4 h-4 text-sunrise" />
        </div>
        <span className="text-sm text-text-muted">Daily Challenge</span>
      </div>

      <div className="glass rounded-xl p-4 border border-sunrise/20">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h4 className="font-display font-semibold text-text-primary">{title}</h4>
            <p className="text-sm text-text-secondary mt-1">{description}</p>
          </div>
          <div className="px-2 py-1 bg-golden/10 rounded-full border border-golden/20 shrink-0 ml-3">
            <span className="text-xs font-semibold text-golden">+{xpReward} XP</span>
          </div>
        </div>
        <ProgressBar value={progressPercent} max={100} variant="streak" size="sm" />
        <p className="text-xs text-text-muted mt-2 text-right">
          {progress}/{total} completed
        </p>
      </div>
    </div>
  );
}

// Demo XP Display
function DemoXPDisplay({ xp, level }: { xp: number; level: number }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="flex items-center gap-2 px-4 py-2 bg-golden/10 border border-golden/20 rounded-xl"
      >
        <Zap className="w-5 h-5 text-golden" />
        <span className="text-lg font-semibold text-golden">{xp.toLocaleString()} XP</span>
      </motion.div>
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1 }}
        className="flex items-center gap-2 px-4 py-2 bg-lavender/10 border border-lavender/20 rounded-xl"
      >
        <Trophy className="w-5 h-5 text-lavender" />
        <span className="text-lg font-semibold text-lavender">Level {level}</span>
      </motion.div>
    </div>
  );
}

// Demo Streak Display
function DemoStreakDisplay({ streak }: { streak: number }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="flex items-center gap-2 px-5 py-3 bg-coral/10 border border-coral/20 rounded-xl"
      >
        <Flame className="w-6 h-6 text-coral" />
        <span className="text-2xl font-display font-bold text-coral">{streak}</span>
        <span className="text-sm text-coral/70">day streak</span>
      </motion.div>
      <p className="text-xs text-text-muted text-center max-w-xs">
        Consistency beats intensity. Your streak grows each day you complete at least one lesson or review.
      </p>
    </div>
  );
}

// Demo Achievement Badge
function DemoAchievementBadge({
  name,
  description,
  xpReward,
}: {
  name: string;
  description: string;
  xpReward: number;
}) {
  return (
    <div className="max-w-xs mx-auto">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass rounded-xl p-4 border border-golden/30 text-center"
      >
        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-golden/30 to-sunrise/30 flex items-center justify-center border-2 border-golden/50">
          <Trophy className="w-8 h-8 text-golden" />
        </div>
        <h4 className="font-display font-bold text-text-primary mb-1">{name}</h4>
        <p className="text-sm text-text-secondary mb-2">{description}</p>
        <div className="inline-flex items-center gap-1 px-3 py-1 bg-golden/10 rounded-full">
          <Zap className="w-3 h-3 text-golden" />
          <span className="text-xs font-semibold text-golden">+{xpReward} XP</span>
        </div>
      </motion.div>
    </div>
  );
}

export default BlogEmbed;
