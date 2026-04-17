import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@/components/atoms/Icon';
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
  const availableCount = modules.filter(m => m.isAvailable).length;
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
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      id={`category-${category.id}`}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-12 scroll-mt-20 overflow-x-hidden"
    >
      {/* Editorial Category Header */}
      <div className="flex items-baseline gap-3 mb-4 px-1">
        <h2 className="text-lg font-serif tracking-tight">{category.name}</h2>
        <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-[var(--color-text-muted)]">
          {availableCount} available
        </span>
      </div>

      {/* Module Shelf */}
      <div className="relative group/shelf">
        {/* Scroll arrows — desktop only */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-8 h-16 bg-[rgb(var(--bg-base-rgb)/0.8)] hover:bg-[rgb(var(--bg-base-rgb)/0.95)] transition-all opacity-0 group-hover/shelf:opacity-100"
          >
            <Icon name="chevron_left" size={20} />
          </button>
        )}
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-8 h-16 bg-[rgb(var(--bg-base-rgb)/0.8)] hover:bg-[rgb(var(--bg-base-rgb)/0.95)] transition-all opacity-0 group-hover/shelf:opacity-100"
          >
            <Icon name="chevron_right" size={20} />
          </button>
        )}

        {/* Scrollable Module Cards */}
        <div
          ref={scrollRef}
          className="flex gap-3 md:gap-4 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide snap-x snap-mandatory"
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
                isFavorite={isFavoriteModule?.(mod.id) ?? false}
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
