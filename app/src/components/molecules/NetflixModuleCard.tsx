import { motion } from 'framer-motion';
import { Play, Users, Sparkles, Heart } from 'lucide-react';

interface NetflixModuleCardProps {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  progress: number;
  lessonsCount: number;
  xpTotal: number;
  isActive?: boolean;
  isFavorite?: boolean;
  onToggleFavorite?: (e: React.MouseEvent) => void;
  onClick: () => void;
}

export function NetflixModuleCard({
  title,
  subtitle,
  image,
  progress,
  lessonsCount,
  xpTotal,
  isActive = false,
  isFavorite = false,
  onToggleFavorite,
  onClick,
}: NetflixModuleCardProps) {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        group relative overflow-hidden rounded-2xl border cursor-pointer
        transition-all duration-300 flex-shrink-0
        ${isActive
          ? 'border-golden shadow-[0_0_16px_rgba(245,158,11,0.4)]'
          : 'border-white/[0.08] hover:border-amber-500/30 hover:shadow-[0_0_12px_rgba(245,158,11,0.25)]'
        }
        w-[140px] md:w-[220px]
      `}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[4/3] md:aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

        {/* Play icon - top right */}
        <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-5 h-5 md:w-6 md:h-6 bg-golden/90 rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(245,158,11,0.4)]">
            <Play className="w-2.5 h-2.5 md:w-3 md:h-3 text-background ml-0.5" fill="currentColor" />
          </div>
        </div>

        {/* Favorite heart - top left */}
        {onToggleFavorite && (
          <motion.button
            onClick={(e) => { e.stopPropagation(); onToggleFavorite(e); }}
            whileTap={{ scale: 0.8 }}
            className={`absolute top-1.5 left-1.5 z-10 w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center transition-all ${
              isFavorite
                ? 'bg-coral/30 backdrop-blur-sm'
                : 'bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100'
            }`}
          >
            <Heart
              className={`w-3 h-3 md:w-3.5 md:h-3.5 transition-colors ${
                isFavorite ? 'text-coral fill-coral' : 'text-white/70'
              }`}
            />
          </motion.button>
        )}
      </div>

      {/* Info section - Premium Glassmorphism */}
      <div
        className="
          relative p-2 md:p-3.5
          bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-black/30
          backdrop-blur-xl border-t border-white/10
          shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),inset_0_-2px_8px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(0,0,0,0.2)]
        "
      >
        {/* Top highlight */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        <h3 className="text-[11px] md:text-sm font-semibold mb-1 truncate bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent">
          {title}
        </h3>

        <div className="hidden md:block text-[10px] text-text-muted mb-2 truncate">
          {subtitle}
        </div>

        <div className="flex items-center gap-1.5 md:gap-2.5 text-[8px] md:text-[10px] text-white/50 flex-wrap">
          <span className="flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5 md:w-3 md:h-3 opacity-70" />
            <span className="bg-gradient-to-r from-golden to-golden-light bg-clip-text text-transparent font-semibold">
              {xpTotal} XP
            </span>
          </span>
          <span className="flex items-center gap-1 text-lavender/80">
            <Users className="w-2.5 h-2.5 md:w-3 md:h-3 stroke-lavender" />
            {lessonsCount} lessons
          </span>
        </div>

        {/* Progress bar */}
        {progress > 0 && (
          <div className="h-0.5 bg-white/[0.08] rounded-full mt-2 overflow-hidden shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-sage to-sage-light rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default NetflixModuleCard;
