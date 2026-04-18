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
          : 'cursor-pointer border-white/[0.08] hover:border-white/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]'
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
            level-cover-img w-full h-full object-cover transition-transform duration-400
            ${isLocked ? 'brightness-[0.7]' : 'hover:scale-108'}
          `}
        />

        {/* Level badge */}
        <div className="absolute bottom-1.5 left-1.5 flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-black/30 backdrop-blur-sm border border-white/10">
          <span className="text-[8px] font-bold tracking-wider text-white/90">LVL {levelNumber}</span>
        </div>

        {/* Lock icon */}
        {isLocked && (
          <div className="absolute top-2 right-2 w-6 h-6 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Lock className="w-3 h-3 text-white" />
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

      {/* Info section */}
      <div className="relative p-2 md:p-2.5 bg-surface border-t border-white/[0.08]">
        <h4 className="text-[11px] md:text-xs font-semibold mb-1 truncate text-text-primary">
          {displayTitle}
        </h4>

        <div className="flex items-center gap-2 text-[9px] md:text-[10px] text-text-muted">
          <span>{lessonsCount} lessons</span>
          <span className="bg-gradient-to-r from-golden to-golden-light bg-clip-text text-transparent font-semibold">
            {xpTotal} XP
          </span>
        </div>

        {/* Progress bar */}
        {progress > 0 && !isLocked && (
          <div className="h-[2px] bg-white/[0.08] rounded-full mt-1.5 overflow-hidden">
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
