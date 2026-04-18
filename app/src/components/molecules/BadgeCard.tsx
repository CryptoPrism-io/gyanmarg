import { motion } from 'framer-motion';
import {
  Flame,
  BookOpen,
  Zap,
  BookMarked,
  RotateCw,
  Award,
  type LucideIcon,
} from 'lucide-react';
import type { Badge, BadgeCategory } from '@/data/badges';

interface BadgeCardProps {
  badge: Badge;
  unlocked: boolean;
  progress?: number; // 0-100 percentage for locked badges
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showProgress?: boolean;
}

// ── Category → Icon mapping ──────────────────────────────────────────────────
const categoryIconMap: Record<BadgeCategory, LucideIcon> = {
  streak:  Flame,
  module:  BookOpen,
  xp:      Zap,
  lesson:  BookMarked,
  review:  RotateCw,
  special: Award,
};

// ── Tier colour tokens ────────────────────────────────────────────────────────
const tierColors = {
  bronze: {
    stripe: 'bg-amber-500',
    text:   'text-amber-500',
    icon:   'text-amber-500',
    bar:    'bg-amber-500',
    pill:   'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400',
    ring:   'ring-amber-500/20',
  },
  silver: {
    stripe: 'bg-slate-400',
    text:   'text-slate-400',
    icon:   'text-slate-400',
    bar:    'bg-slate-400',
    pill:   'bg-slate-100 text-slate-600 dark:bg-slate-400/10 dark:text-slate-300',
    ring:   'ring-slate-400/20',
  },
  gold: {
    stripe: 'bg-yellow-500',
    text:   'text-yellow-500',
    icon:   'text-yellow-500',
    bar:    'bg-yellow-500',
    pill:   'bg-yellow-50 text-yellow-600 dark:bg-yellow-500/10 dark:text-yellow-400',
    ring:   'ring-yellow-500/20',
  },
  platinum: {
    stripe: 'bg-cyan-500',
    text:   'text-cyan-500',
    icon:   'text-cyan-500',
    bar:    'bg-cyan-500',
    pill:   'bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400',
    ring:   'ring-cyan-500/20',
  },
  diamond: {
    stripe: 'bg-purple-500',
    text:   'text-purple-500',
    icon:   'text-purple-500',
    bar:    'bg-purple-500',
    pill:   'bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400',
    ring:   'ring-purple-500/20',
  },
};

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return 'Today';
  if (days === 1) return 'Yesterday';
  if (days < 7)  return `${days}d ago`;
  if (days < 30) return `${Math.floor(days / 7)}w ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

export default function BadgeCard({
  badge,
  unlocked,
  progress = 0,
  size = 'md',
  showProgress = true,
}: BadgeCardProps) {
  const tier = tierColors[badge.tier];
  const Icon = categoryIconMap[badge.category];
  const isHero = size === 'hero';

  // ── HERO variant (Hall of Fame) ───────────────────────────────────────────
  if (isHero) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 220, damping: 26 }}
        className="relative overflow-hidden rounded-xl bg-surface border border-black/[0.06] dark:border-white/[0.07] shadow-sm flex"
      >
        {/* Left tier stripe */}
        <div className={`w-[3px] shrink-0 ${tier.stripe}`} />

        <div className="flex items-center gap-3.5 p-4 flex-1 min-w-0">
          {/* Icon box */}
          <div className={`w-11 h-11 rounded-xl bg-black/[0.04] dark:bg-white/[0.05] ring-1 ${tier.ring} flex items-center justify-center shrink-0`}>
            <Icon className={`w-5 h-5 ${tier.icon}`} />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <h3 className="text-sm font-semibold text-text-primary truncate">{badge.name}</h3>
              <span className={`shrink-0 text-[9px] font-bold uppercase tracking-wider px-1.5 py-px rounded-full ${tier.pill}`}>
                {badge.tier}
              </span>
            </div>
            <p className="text-[11px] text-text-secondary leading-relaxed truncate">{badge.description}</p>
            {badge.unlockedAt && (
              <p className="text-[10px] text-text-muted mt-0.5">Earned {timeAgo(badge.unlockedAt)}</p>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  // ── STANDARD variants (sm, md, lg) ───────────────────────────────────────
  const compact = size === 'sm';
  const large   = size === 'lg';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      className={`
        relative overflow-hidden rounded-xl flex
        bg-surface border border-black/[0.06] dark:border-white/[0.07] shadow-sm
        ${unlocked ? '' : 'opacity-50'}
        transition-opacity duration-300
      `}
    >
      {/* Left tier stripe — only for unlocked */}
      {unlocked && <div className={`w-[2px] shrink-0 ${tier.stripe}`} />}
      {!unlocked && <div className="w-[2px] shrink-0 bg-black/[0.06] dark:bg-white/[0.06]" />}

      <div className={`flex items-center gap-3 flex-1 min-w-0 ${compact ? 'p-2.5' : large ? 'p-4' : 'p-3'}`}>
        {/* Icon box */}
        <div className={`
          ${compact ? 'w-8 h-8' : large ? 'w-12 h-12' : 'w-9 h-9'}
          shrink-0 rounded-lg flex items-center justify-center
          ${unlocked
            ? `bg-black/[0.04] dark:bg-white/[0.05] ring-1 ${tier.ring}`
            : 'bg-black/[0.03] dark:bg-white/[0.03]'
          }
        `}>
          <Icon className={`${compact ? 'w-3.5 h-3.5' : large ? 'w-5 h-5' : 'w-4 h-4'} ${unlocked ? tier.icon : 'text-text-muted'}`} />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className={`${compact ? 'text-xs' : 'text-sm'} font-semibold truncate text-text-primary`}>
              {badge.name}
            </h3>
            {unlocked && (
              <span className={`shrink-0 text-[9px] font-bold uppercase tracking-wider px-1.5 py-px rounded-full ${tier.pill}`}>
                {badge.tier}
              </span>
            )}
          </div>

          {/* Unlocked: earned date */}
          {unlocked && badge.unlockedAt && (
            <p className="text-[10px] text-text-muted mt-0.5">{timeAgo(badge.unlockedAt)}</p>
          )}

          {/* Locked: progress bar */}
          {!unlocked && showProgress && (
            <div className="mt-1.5">
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1 rounded-full bg-black/[0.06] dark:bg-white/[0.06] overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${progress > 0 ? tier.bar : 'bg-text-muted/30'}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.2 }}
                  />
                </div>
                <span className="text-[10px] font-medium shrink-0 text-text-muted tabular-nums">
                  {Math.round(progress)}%
                </span>
              </div>
            </div>
          )}

          {/* Locked with no progress: description */}
          {!unlocked && (!showProgress || progress === 0) && (
            <p className="text-[10px] text-text-muted mt-0.5 truncate">{badge.description}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
