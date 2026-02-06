import { Clock, Sparkles } from 'lucide-react';

interface ComingSoonModuleCardProps {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  color: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function ComingSoonModuleCard({
  title,
  subtitle,
  image,
  isActive,
  onClick,
}: ComingSoonModuleCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        group relative overflow-hidden rounded-2xl border cursor-pointer
        transition-all duration-300 flex-shrink-0
        w-[140px] md:w-[220px]
        ${isActive
          ? 'opacity-100 border-amber-500/50 shadow-[0_0_16px_rgba(245,158,11,0.4)] grayscale-0'
          : 'opacity-60 border-white/[0.06] hover:border-amber-500/20 hover:shadow-[0_0_12px_rgba(245,158,11,0.2)] grayscale hover:grayscale-[50%]'}
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

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

        {/* Coming Soon Badge */}
        <div className="absolute top-2 right-2 z-10">
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
            <Clock className="w-2.5 h-2.5 text-amber-400" />
            <span className="text-[9px] font-semibold text-amber-400 uppercase tracking-wide">
              Coming Soon
            </span>
          </div>
        </div>
      </div>

      {/* Info section */}
      <div
        className="
          relative p-2 md:p-3.5
          bg-gradient-to-br from-white/[0.04] via-white/[0.01] to-black/30
          backdrop-blur-xl border-t border-white/5
        "
      >
        <h3 className="text-[11px] md:text-sm font-semibold mb-1 truncate text-white/60">
          {title}
        </h3>

        <div className="hidden md:block text-[10px] text-white/40 mb-2 truncate">
          {subtitle}
        </div>

        <div className="flex items-center gap-1.5 text-[8px] md:text-[10px] text-white/30">
          <span className="flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5 md:w-3 md:h-3 opacity-50" />
            <span>In Development</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ComingSoonModuleCard;
