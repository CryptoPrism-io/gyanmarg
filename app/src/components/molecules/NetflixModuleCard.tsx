import { motion } from 'framer-motion';
import { Icon } from '@/components/atoms/Icon';

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
        group relative overflow-hidden cursor-pointer
        transition-all duration-300 flex-shrink-0
        w-[140px] md:w-[220px]
        ${isActive ? 'ring-1 ring-[var(--color-accent)]' : ''}
      `}
    >
      {/* Thumbnail — square-ish, minimal radius */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

        {/* Favorite bookmark — top right */}
        {onToggleFavorite && (
          <button
            onClick={(e) => { e.stopPropagation(); onToggleFavorite(e); }}
            className={`absolute top-2 right-2 z-10 transition-opacity ${
              isFavorite ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'
            }`}
          >
            <Icon
              name="bookmark"
              size={18}
              filled={isFavorite}
              weight={isFavorite ? 400 : 200}
              className={isFavorite ? 'text-[var(--color-accent)]' : 'text-white/80'}
            />
          </button>
        )}
      </div>

      {/* Info — editorial typography, no card bg */}
      <div className="pt-2.5 pb-1">
        <h3 className="text-[12px] md:text-sm font-serif tracking-tight truncate text-[var(--color-text-primary)]">
          {title}
        </h3>

        <div className="flex items-center gap-2 mt-1 text-[9px] md:text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider">
          <span className="text-[var(--color-accent)] font-semibold">{xpTotal} XP</span>
          <span className="opacity-40">|</span>
          <span>{lessonsCount} lessons</span>
        </div>

        {/* Progress bar */}
        {progress > 0 && (
          <div className="h-[1px] bg-[var(--color-border)] mt-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-[var(--color-accent)]"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default NetflixModuleCard;
