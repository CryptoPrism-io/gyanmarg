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
        group cursor-pointer flex-shrink-0 snap-start
        w-[140px] md:w-[200px]
        rounded-xl overflow-hidden
        bg-surface
        border border-black/[0.06] dark:border-white/[0.07]
        shadow-sm
        transition-shadow duration-200 hover:shadow-md
        ${isActive ? 'ring-1 ring-[var(--color-accent)]' : ''}
      `}
    >
      {/* Thumbnail — top, no radius (card clips it) */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Progress pill — bottom left, only when started */}
        {progress > 0 && (
          <div className="absolute bottom-2 left-2 flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-black/50 backdrop-blur-sm">
            <div className="w-12 h-[2px] rounded-full bg-white/20 overflow-hidden">
              <div className="h-full bg-[var(--color-accent)] rounded-full" style={{ width: `${progress}%` }} />
            </div>
            <span className="text-[8px] text-white/70 font-medium tabular-nums">{Math.round(progress)}%</span>
          </div>
        )}

        {/* Favorite bookmark — top right */}
        {onToggleFavorite && (
          <button
            onClick={(e) => { e.stopPropagation(); onToggleFavorite(e); }}
            className={`absolute top-2 right-2 z-10 transition-opacity ${
              isFavorite ? 'opacity-100' : 'opacity-0 group-hover:opacity-80'
            }`}
          >
            <Icon
              name="bookmark"
              size={16}
              filled={isFavorite}
              weight={isFavorite ? 400 : 200}
              className={isFavorite ? 'text-[var(--color-accent)]' : 'text-white/80'}
            />
          </button>
        )}
      </div>

      {/* Info — inside card, clean padding */}
      <div className="px-3 pt-2.5 pb-3">
        <h3 className="text-[12px] md:text-[13px] font-serif tracking-tight truncate text-[var(--color-text-primary)] leading-snug">
          {title}
        </h3>
        <div className="flex items-center gap-1.5 mt-1 text-[9px] text-[var(--color-text-muted)] uppercase tracking-wider">
          <span className="text-[var(--color-accent)] font-semibold">{xpTotal.toLocaleString()} XP</span>
          <span className="opacity-30">·</span>
          <span>{lessonsCount} lessons</span>
        </div>
      </div>
    </motion.div>
  );
}

export default NetflixModuleCard;
