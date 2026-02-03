import { motion } from 'framer-motion';
import { Play, Users, Sparkles } from 'lucide-react';

interface NetflixModuleCardProps {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  progress: number;
  lessonsCount: number;
  xpTotal: number;
  isActive?: boolean;
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
  onClick,
}: NetflixModuleCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-2xl border cursor-pointer
        transition-all duration-300 flex-shrink-0
        ${isActive
          ? 'border-golden shadow-[0_0_0_2px_rgba(245,158,11,0.3)]'
          : 'border-white/[0.08] hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]'
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
          className="w-full h-full object-cover transition-transform duration-400 hover:scale-108"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

        {/* Play overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity z-10">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-golden/95 rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(245,158,11,0.5)] transform scale-90 hover:scale-100 transition-transform">
            <Play className="w-4 h-4 md:w-5 md:h-5 text-background ml-0.5" fill="currentColor" />
          </div>
        </div>
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
