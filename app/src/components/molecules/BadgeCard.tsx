import { motion } from 'framer-motion';
import type { Badge } from '@/data/badges';

interface BadgeCardProps {
  badge: Badge;
  unlocked: boolean;
  progress?: number; // 0-100 percentage for locked badges
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showProgress?: boolean;
}

const tierColors = {
  bronze: {
    bg: 'from-amber-800/30 to-amber-900/10',
    border: 'border-amber-700/25',
    text: 'text-amber-500',
    bar: 'bg-amber-500',
    glow: 'shadow-amber-500/15',
    ring: 'ring-amber-500/20',
    shimmer: false,
  },
  silver: {
    bg: 'from-slate-400/20 to-slate-600/10',
    border: 'border-slate-400/25',
    text: 'text-slate-300',
    bar: 'bg-slate-400',
    glow: 'shadow-slate-400/15',
    ring: 'ring-slate-400/20',
    shimmer: false,
  },
  gold: {
    bg: 'from-yellow-500/25 to-amber-600/10',
    border: 'border-yellow-500/30',
    text: 'text-yellow-400',
    bar: 'bg-yellow-400',
    glow: 'shadow-yellow-500/20',
    ring: 'ring-yellow-400/25',
    shimmer: false,
  },
  platinum: {
    bg: 'from-cyan-400/20 to-teal-500/10',
    border: 'border-cyan-400/30',
    text: 'text-cyan-300',
    bar: 'bg-cyan-400',
    glow: 'shadow-cyan-400/20',
    ring: 'ring-cyan-300/25',
    shimmer: true,
  },
  diamond: {
    bg: 'from-purple-500/25 to-violet-600/10',
    border: 'border-purple-400/30',
    text: 'text-purple-300',
    bar: 'bg-purple-400',
    glow: 'shadow-purple-500/25',
    ring: 'ring-purple-400/30',
    shimmer: true,
  },
};

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return 'Today';
  if (days === 1) return 'Yesterday';
  if (days < 7) return `${days}d ago`;
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
  const isHero = size === 'hero';

  // --- HERO variant (for Hall of Fame featured badges) ---
  if (isHero) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 24 }}
        className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${tier.bg} border ${tier.border} ${tier.glow} shadow-xl p-5`}
      >
        {/* Shimmer overlay for platinum/diamond */}
        {tier.shimmer && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -inset-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent skew-x-12"
              animate={{ x: ['-200%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: 'linear' }}
            />
          </div>
        )}

        {/* Decorative glows */}
        <div className={`absolute -top-8 -right-8 w-28 h-28 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${tier.bg}`} />
        <div className={`absolute -bottom-8 -left-8 w-20 h-20 rounded-full blur-2xl opacity-15 bg-gradient-to-br ${tier.bg}`} />

        <div className="relative flex items-center gap-4">
          {/* Large icon */}
          <div className="text-5xl shrink-0 drop-shadow-lg">
            {badge.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-display font-bold text-text-primary truncate">{badge.name}</h3>
              <span className={`shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${tier.text} bg-black/25 border ${tier.border}`}>
                {badge.tier}
              </span>
            </div>
            <p className="text-xs text-white/50 leading-relaxed">{badge.description}</p>
            {badge.unlockedAt && (
              <p className="text-[10px] text-white/30 mt-1.5">Earned {timeAgo(badge.unlockedAt)}</p>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  // --- STANDARD variants (sm, md, lg) ---
  const compact = size === 'sm';
  const large = size === 'lg';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 250, damping: 22 }}
      className={`
        relative overflow-hidden rounded-xl
        ${compact ? 'p-3' : large ? 'p-4' : 'p-3.5'}
        ${unlocked
          ? `bg-gradient-to-br ${tier.bg} border ${tier.border} ${tier.glow} shadow-lg hover:shadow-xl`
          : 'bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1]'
        }
        transition-all duration-300 group
      `}
    >
      {/* Shimmer for unlocked platinum/diamond */}
      {unlocked && tier.shimmer && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -inset-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent skew-x-12"
            animate={{ x: ['-200%', '200%'] }}
            transition={{ duration: 4, repeat: Infinity, repeatDelay: 3, ease: 'linear' }}
          />
        </div>
      )}

      <div className="relative flex items-center gap-3">
        {/* Icon */}
        <div className={`
          ${compact ? 'text-2xl w-10 h-10' : large ? 'text-3xl w-14 h-14' : 'text-2xl w-11 h-11'}
          shrink-0 rounded-xl flex items-center justify-center
          ${unlocked
            ? `bg-white/[0.06] ring-1 ${tier.ring}`
            : 'bg-white/[0.03] ring-1 ring-white/[0.05]'
          }
          transition-all duration-300
        `}>
          <span className={unlocked ? '' : 'grayscale opacity-25'}>
            {badge.icon}
          </span>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className={`${compact ? 'text-xs' : 'text-sm'} font-semibold truncate ${unlocked ? 'text-text-primary' : 'text-white/35'}`}>
              {badge.name}
            </h3>
            <span className={`
              shrink-0 text-[9px] font-bold uppercase tracking-wider px-1.5 py-px rounded-full
              ${unlocked
                ? `${tier.text} bg-black/20`
                : 'text-white/20 bg-white/[0.03]'
              }
            `}>
              {badge.tier}
            </span>
          </div>

          {/* Unlocked: show relative time */}
          {unlocked && badge.unlockedAt && (
            <p className="text-[10px] text-white/30 mt-0.5">{timeAgo(badge.unlockedAt)}</p>
          )}

          {/* Locked: show progress bar */}
          {!unlocked && showProgress && (
            <div className="mt-1.5">
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${progress > 0 ? tier.bar : ''} ${progress >= 75 ? 'opacity-100' : 'opacity-70'}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.2 }}
                  />
                </div>
                <span className={`text-[10px] font-medium shrink-0 ${progress >= 75 ? tier.text : 'text-white/30'}`}>
                  {Math.round(progress)}%
                </span>
              </div>
            </div>
          )}

          {/* Locked with 0 progress: show description */}
          {!unlocked && (!showProgress || progress === 0) && (
            <p className="text-[10px] text-white/20 mt-0.5 truncate">{badge.description}</p>
          )}
        </div>
      </div>

      {/* Decorative glow - unlocked only */}
      {unlocked && (
        <div className={`absolute -bottom-4 -right-4 w-16 h-16 rounded-full blur-2xl opacity-15 bg-gradient-to-br ${tier.bg}`} />
      )}
    </motion.div>
  );
}
