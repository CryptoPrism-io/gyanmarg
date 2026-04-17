import { useRef, useEffect } from 'react';
import type { ModuleCategory } from '@/types';

interface CategoryTabBarProps {
  categories: ModuleCategory[];
  activeCategory: string | null;
  onCategorySelect: (categoryId: string | null) => void;
}

export function CategoryTabBar({
  categories,
  activeCategory,
  onCategorySelect,
}: CategoryTabBarProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeRef.current && scrollRef.current) {
      activeRef.current.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [activeCategory]);

  const handleCategoryClick = (categoryId: string | null) => {
    onCategorySelect(categoryId);
    if (categoryId) {
      const element = document.getElementById(`category-${categoryId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="sticky top-0 z-20 -mx-4 px-4 py-3 bg-[rgb(var(--bg-base-rgb)/0.9)] backdrop-blur-sm border-b border-[var(--color-border)]">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide -mx-2 px-2"
      >
        {/* All Tab */}
        <button
          ref={activeCategory === null ? activeRef : null}
          onClick={() => handleCategoryClick(null)}
          className="relative flex-shrink-0 pb-2"
        >
          <span className={`text-[10px] uppercase tracking-[0.2em] font-semibold transition-colors ${
            activeCategory === null ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]'
          }`}>
            All
          </span>
          {activeCategory === null && (
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-accent)]" />
          )}
        </button>

        {/* Category Tabs */}
        {categories.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              ref={isActive ? activeRef : null}
              onClick={() => handleCategoryClick(category.id)}
              className="relative flex-shrink-0 pb-2 whitespace-nowrap"
            >
              <span className={`text-[10px] uppercase tracking-[0.2em] font-semibold transition-colors ${
                isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]'
              }`}>
                {category.name}
              </span>
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-accent)]" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryTabBar;
