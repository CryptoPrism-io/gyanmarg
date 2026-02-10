import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import type { Badge } from '@/data/badges';
import { ProgressBar } from '@/components/atoms';

interface BadgeCardProps {
  badge: Badge;
  unlocked: boolean;
  progress?: number; // 0-100 percentage for locked badges
  size?: 'sm' | 'md' | 'lg';
  showProgress?: boolean;
}

const tierColors = {
  bronze: {
    bg: 'from-amber-700/20 to-orange-800/20',
    border: 'border-amber-700/30',
    text: 'text-amber-600',
    glow: 'shadow-amber-500/10',
  },
  silver: {
    bg: 'from-slate-400/20 to-slate-500/20',
    border: 'border-slate-400/30',
    text: 'text-slate-300',
    glow: 'shadow-slate-400/10',
  },
  gold: {
    bg: 'from-yellow-500/20 to-yellow-600/20',
    border: 'border-yellow-500/30',
    text: 'text-yellow-400',
    glow: 'shadow-yellow-500/10',
  },
  platinum: {
    bg: 'from-cyan-400/20 to-cyan-500/20',
    border: 'border-cyan-400/30',
    text: 'text-cyan-300',
    glow: 'shadow-cyan-400/10',
  },
  diamond: {
    bg: 'from-purple-500/20 to-purple-600/20',
    border: 'border-purple-500/30',
    text: 'text-purple-400',
    glow: 'shadow-purple-500/10',
  },
};

const sizeClasses = {
  sm: {
    card: 'p-3',
    icon: 'text-3xl',
    title: 'text-sm',
    desc: 'text-xs',
    badge: 'text-[10px]',
  },
  md: {
    card: 'p-4',
    icon: 'text-4xl',
    title: 'text-base',
    desc: 'text-sm',
    badge: 'text-xs',
  },
  lg: {
    card: 'p-6',
    icon: 'text-5xl',
    title: 'text-lg',
    desc: 'text-base',
    badge: 'text-sm',
  },
};

export default function BadgeCard({
  badge,
  unlocked,
  progress = 0,
  size = 'md',
  showProgress = true,
}: BadgeCardProps) {
  const tierStyle = tierColors[badge.tier];
  const sizeStyle = sizeClasses[size];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 200 }}
      className={`
        relative overflow-hidden rounded-xl
        ${sizeStyle.card}
        ${unlocked
          ? `bg-gradient-to-br ${tierStyle.bg} border ${tierStyle.border} ${tierStyle.glow} shadow-lg`
          : 'bg-surface/50 border border-white/5'
        }
        transition-all duration-300
        ${unlocked ? 'hover:scale-105' : ''}
      `}
    >
      {/* Badge Icon */}
      <div className="relative mb-3">
        <div
          className={`
            ${sizeStyle.icon}
            ${unlocked ? '' : 'grayscale opacity-30'}
            transition-all duration-300
          `}
        >
          {badge.icon}
        </div>

        {/* Lock overlay for locked badges */}
        {!unlocked && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/60 rounded-full p-2">
              <Lock className="w-4 h-4 text-white/60" />
            </div>
          </div>
        )}

        {/* Tier Badge */}
        <div className="absolute top-0 right-0">
          <div
            className={`
              ${sizeStyle.badge}
              px-2 py-0.5 rounded-full
              ${unlocked
                ? `${tierStyle.text} bg-black/30 border ${tierStyle.border}`
                : 'text-white/40 bg-black/20 border border-white/10'
              }
              font-semibold uppercase tracking-wide
            `}
          >
            {badge.tier}
          </div>
        </div>
      </div>

      {/* Badge Info */}
      <div className={unlocked ? 'text-white' : 'text-white/40'}>
        <h3 className={`${sizeStyle.title} font-semibold mb-1`}>
          {badge.name}
        </h3>
        <p className={`${sizeStyle.desc} text-white/60 leading-tight`}>
          {badge.description}
        </p>
      </div>

      {/* Progress Bar for locked badges */}
      {!unlocked && showProgress && progress > 0 && (
        <div className="mt-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-white/40">Progress</span>
            <span className="text-xs text-white/60 font-semibold">
              {Math.round(progress)}%
            </span>
          </div>
          <ProgressBar
            value={progress}
            variant="xp"
            size="xs"
            glow={progress > 75}
          />
        </div>
      )}

      {/* Unlocked Date */}
      {unlocked && badge.unlockedAt && size !== 'sm' && (
        <div className="mt-3 pt-3 border-t border-white/10">
          <p className="text-xs text-white/40">
            Unlocked {new Date(badge.unlockedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
        </div>
      )}

      {/* Decorative gradient */}
      {unlocked && (
        <div
          className={`
            absolute -bottom-6 -right-6 w-20 h-20 rounded-full blur-2xl opacity-20
            bg-gradient-to-br ${tierStyle.bg}
          `}
        />
      )}
    </motion.div>
  );
}
