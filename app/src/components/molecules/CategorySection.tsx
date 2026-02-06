import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { ModuleCategory } from '@/types';
import type { ModuleConfig } from '@/data/modules';
import { NetflixModuleCard } from './NetflixModuleCard';
import { ComingSoonModuleCard } from './ComingSoonModuleCard';
import { getModuleImage } from '@/lib/moduleImages';

interface CategorySectionProps {
  category: ModuleCategory;
  modules: ModuleConfig[];
  selectedModuleId: string | null;
  onModuleSelect: (moduleId: string) => void;
  onComingSoonModuleSelect: (moduleId: string) => void;
  getModuleProgress: (moduleId: string) => number;
  getModuleLessonsCount: (moduleId: string) => number;
  getModuleTotalXP: (moduleId: string) => number;
  isFavoriteModule?: (moduleId: string) => boolean;
  onToggleFavorite?: (moduleId: string) => void;
}

// Direct hex color mapping for category headers (avoids Tailwind purging issues)
const colorMap: Record<string, { hex: string; badge: string }> = {
  purple: { hex: '#c084fc', badge: 'bg-purple-500/20' },
  blue: { hex: '#60a5fa', badge: 'bg-blue-500/20' },
  emerald: { hex: '#34d399', badge: 'bg-emerald-500/20' },
  green: { hex: '#4ade80', badge: 'bg-green-500/20' },
  amber: { hex: '#fbbf24', badge: 'bg-amber-500/20' },
  indigo: { hex: '#818cf8', badge: 'bg-indigo-500/20' },
  cyan: { hex: '#22d3ee', badge: 'bg-cyan-500/20' },
  rose: { hex: '#fb7185', badge: 'bg-rose-500/20' },
  slate: { hex: '#94a3b8', badge: 'bg-slate-500/20' },
  orange: { hex: '#fb923c', badge: 'bg-orange-500/20' },
  teal: { hex: '#2dd4bf', badge: 'bg-teal-500/20' },
  pink: { hex: '#f472b6', badge: 'bg-pink-500/20' },
  yellow: { hex: '#facc15', badge: 'bg-yellow-500/20' },
  red: { hex: '#f87171', badge: 'bg-red-500/20' },
  violet: { hex: '#a78bfa', badge: 'bg-violet-500/20' },
};

export function CategorySection({
  category,
  modules,
  selectedModuleId,
  onModuleSelect,
  onComingSoonModuleSelect,
  getModuleProgress,
  getModuleLessonsCount,
  getModuleTotalXP,
  isFavoriteModule,
  onToggleFavorite,
}: CategorySectionProps) {
  const colors = colorMap[category.color] || colorMap.purple;
  const availableCount = modules.filter(m => m.isAvailable).length;
  const comingSoonCount = modules.filter(m => !m.isAvailable).length;

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScrollPosition);
      window.addEventListener('resize', checkScrollPosition);
      return () => {
        el.removeEventListener('scroll', checkScrollPosition);
        window.removeEventListener('resize', checkScrollPosition);
      };
    }
  }, [modules]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = 160; // approximate card width + gap
      const scrollAmount = direction === 'left' ? -cardWidth * 2 : cardWidth * 2;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      id={`category-${category.id}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-8 scroll-mt-20 overflow-x-hidden"
    >
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-3 px-1">
        <span className="text-xl">{category.icon}</span>
        <h2 className="text-base font-semibold" style={{ color: colors.hex }}>
          {category.name}
        </h2>
        <span className={`text-[10px] px-2 py-0.5 rounded-full ${colors.badge}`} style={{ color: colors.hex }}>
          {availableCount} available
        </span>
        {comingSoonCount > 0 && (
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-text-muted">
            +{comingSoonCount} coming
          </span>
        )}
      </div>

      {/* Module Shelf with Gradient Overlays */}
      <div className="relative group/shelf">
        {/* Left Gradient Fade - Bright Amber */}
        <div
          className={`absolute left-0 top-0 bottom-2 w-8 md:w-12 z-10 pointer-events-none transition-opacity duration-300 ${canScrollLeft ? 'opacity-30 group-hover/shelf:opacity-60' : 'opacity-0'}`}
          style={{ background: 'linear-gradient(to right, rgba(245,158,11,0.22) 0%, rgba(245,158,11,0.18) 21%, rgba(245,158,11,0.14) 33%, rgba(245,158,11,0.09) 51%, rgba(245,158,11,0.05) 67%, rgba(245,158,11,0.02) 88%, rgba(245,158,11,0.005) 94%, transparent 100%)' }}
        />

        {/* Right Gradient Fade - Bright Amber */}
        <div
          className={`absolute right-0 top-0 bottom-2 w-8 md:w-12 z-10 pointer-events-none transition-opacity duration-300 ${canScrollRight ? 'opacity-30 group-hover/shelf:opacity-60' : 'opacity-0'}`}
          style={{ background: 'linear-gradient(to left, rgba(245,158,11,0.22) 0%, rgba(245,158,11,0.18) 21%, rgba(245,158,11,0.14) 33%, rgba(245,158,11,0.09) 51%, rgba(245,158,11,0.05) 67%, rgba(245,158,11,0.02) 88%, rgba(245,158,11,0.005) 94%, transparent 100%)' }}
        />

        {/* Left Arrow - Desktop only */}
        <button
          onClick={() => scroll('left')}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-8 h-16 bg-amber-500/30 hover:bg-amber-500/50 rounded-r-lg transition-all duration-300 ${canScrollLeft ? 'opacity-0 group-hover/shelf:opacity-100' : 'opacity-0 pointer-events-none'}`}
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 text-amber-400" />
        </button>

        {/* Right Arrow - Desktop only */}
        <button
          onClick={() => scroll('right')}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-8 h-16 bg-amber-500/30 hover:bg-amber-500/50 rounded-l-lg transition-all duration-300 ${canScrollRight ? 'opacity-0 group-hover/shelf:opacity-100' : 'opacity-0 pointer-events-none'}`}
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 text-amber-400" />
        </button>

        {/* Scrollable Module Cards */}
        <div
          ref={scrollRef}
          className="flex gap-2.5 md:gap-4 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide snap-x snap-mandatory"
        >
          {modules.map((mod) =>
            mod.isAvailable ? (
              <NetflixModuleCard
                key={mod.id}
                id={mod.id}
                title={mod.title}
                subtitle={mod.subtitle}
                image={getModuleImage(mod.id)}
                progress={getModuleProgress(mod.id)}
                lessonsCount={getModuleLessonsCount(mod.id)}
                xpTotal={getModuleTotalXP(mod.id)}
                isActive={selectedModuleId === mod.id}
                isFavorite={isFavoriteModule?.(mod.id)}
                onToggleFavorite={onToggleFavorite ? () => onToggleFavorite(mod.id) : undefined}
                onClick={() => onModuleSelect(mod.id)}
              />
            ) : (
              <ComingSoonModuleCard
                key={mod.id}
                id={mod.id}
                title={mod.title}
                subtitle={mod.subtitle}
                image={getModuleImage(mod.id)}
                color={mod.color}
                isActive={selectedModuleId === mod.id}
                onClick={() => onComingSoonModuleSelect(mod.id)}
              />
            )
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default CategorySection;
