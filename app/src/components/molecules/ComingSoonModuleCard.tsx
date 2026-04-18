import { Clock } from 'lucide-react';

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
  image,
  isActive,
  onClick,
}: ComingSoonModuleCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        group cursor-pointer flex-shrink-0 snap-start
        w-[140px] md:w-[200px]
        rounded-xl overflow-hidden
        bg-surface
        border border-black/[0.06] dark:border-white/[0.07]
        shadow-sm opacity-55
        transition-opacity duration-200 hover:opacity-75
        ${isActive ? 'opacity-70' : ''}
      `}
    >
      {/* Thumbnail — grayscale to signal unavailable */}
      <div className="relative aspect-[4/3] overflow-hidden grayscale">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Coming Soon badge */}
        <div className="absolute top-2 left-2 flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-black/50">
          <Clock className="w-2.5 h-2.5 text-white/50" />
          <span className="text-[8px] font-semibold text-white/50 uppercase tracking-wide">Soon</span>
        </div>
      </div>

      {/* Info — same card padding as NetflixModuleCard */}
      <div className="px-3 pt-2.5 pb-3">
        <h3 className="text-[12px] md:text-[13px] font-serif tracking-tight truncate text-[var(--color-text-primary)] leading-snug">
          {title}
        </h3>
        <p className="text-[9px] text-[var(--color-text-muted)] uppercase tracking-wider mt-1">
          Coming soon
        </p>
      </div>
    </div>
  );
}

export default ComingSoonModuleCard;
