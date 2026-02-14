import { motion } from 'framer-motion';
import { Lock, Check, Sparkles } from 'lucide-react';

interface NetflixLevelCardProps {
  title: string;
  image: string;
  levelNumber: number;
  lessonsCount: number;
  xpTotal: number;
  progress: number;
  isLocked?: boolean;
  isCompleted?: boolean;
  hasVizReward?: boolean;
  onClick: () => void;
}

export function NetflixLevelCard({
  title,
  image,
  levelNumber,
  lessonsCount,
  xpTotal,
  progress,
  isLocked = false,
  isCompleted = false,
  hasVizReward = false,
  onClick,
}: NetflixLevelCardProps) {
  // Strip "Level X:" prefix from title if present
  const displayTitle = title.replace(/^Level\s*\d+:\s*/i, '');

  return (
    <motion.div
      whileHover={isLocked ? {} : { y: -4, scale: 1.02 }}
      whileTap={isLocked ? {} : { scale: 0.98 }}
      onClick={isLocked ? undefined : onClick}
      className={`
        relative overflow-hidden rounded-xl border flex-shrink-0
        transition-all duration-300
        ${isLocked
          ? 'cursor-not-allowed border-white/[0.08]'
          : 'cursor-pointer border-white/[0.08] hover:border-white/20 hover:shadow-[0_16px_32px_rgba(0,0,0,0.4)]'
        }
        w-[130px] md:w-[160px]
      `}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[4/3] md:aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className={`
            w-full h-full object-cover transition-transform duration-400
            ${isLocked ? 'brightness-[0.7]' : 'hover:scale-108'}
          `}
        />

        {/* Level badge */}
        <div className="absolute bottom-2 left-2 text-[9px] font-bold tracking-wider text-white/80 bg-black/30 px-2 py-1 rounded backdrop-blur-sm border border-white/10">
          LEVEL {levelNumber}
        </div>

        {/* Lock icon */}
        {isLocked && (
          <div className="absolute top-2 right-2 w-7 h-7 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
            <Lock className="w-3.5 h-3.5 text-white/80" />
          </div>
        )}

        {/* Completed badge */}
        {isCompleted && !isLocked && (
          <div className="absolute top-2 right-2 w-5 h-5 bg-gradient-to-br from-sage to-sage-dark rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(34,197,94,0.4)]">
            <Check className="w-3 h-3 text-background" />
          </div>
        )}

        {/* Viz reward indicator */}
        {hasVizReward && !isLocked && !isCompleted && (
          <div className="absolute top-2 left-2 flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-lavender/20 backdrop-blur-sm border border-lavender/30">
            <Sparkles className="w-2.5 h-2.5 text-lavender" />
            <span className="text-[8px] font-semibold text-lavender">Viz</span>
          </div>
        )}
      </div>

      {/* Info section - Premium Glassmorphism */}
      <div
        className="
          relative p-2 md:p-2.5
          bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-black/30
          backdrop-blur-xl border-t border-white/10
          shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),inset_0_-2px_8px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(0,0,0,0.2)]
        "
      >
        {/* Top highlight */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        <h4 className="text-[11px] md:text-xs font-semibold mb-1.5 truncate bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent">
          {displayTitle}
        </h4>

        <div className="flex items-center gap-2 text-[9px] md:text-[10px] text-white/50">
          <span>{lessonsCount} lessons</span>
          <span className="bg-gradient-to-r from-golden to-golden-light bg-clip-text text-transparent font-semibold">
            {xpTotal} XP
          </span>
        </div>

        {/* Progress bar */}
        {progress > 0 && !isLocked && (
          <div className="h-[3px] bg-surface rounded-full mt-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-sage to-blue-500 rounded-full"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default NetflixLevelCard;
