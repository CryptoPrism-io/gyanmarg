import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { ModuleCategory } from '@/types';

interface CategoryTabBarProps {
  categories: ModuleCategory[];
  activeCategory: string | null;
  onCategorySelect: (categoryId: string | null) => void;
}

// Tailwind color mapping for category colors
const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  purple: { bg: 'bg-purple-500/20', border: 'border-purple-500/50', text: 'text-purple-400' },
  blue: { bg: 'bg-blue-500/20', border: 'border-blue-500/50', text: 'text-blue-400' },
  emerald: { bg: 'bg-emerald-500/20', border: 'border-emerald-500/50', text: 'text-emerald-400' },
  green: { bg: 'bg-green-500/20', border: 'border-green-500/50', text: 'text-green-400' },
  amber: { bg: 'bg-amber-500/20', border: 'border-amber-500/50', text: 'text-amber-400' },
  indigo: { bg: 'bg-indigo-500/20', border: 'border-indigo-500/50', text: 'text-indigo-400' },
  cyan: { bg: 'bg-cyan-500/20', border: 'border-cyan-500/50', text: 'text-cyan-400' },
  rose: { bg: 'bg-rose-500/20', border: 'border-rose-500/50', text: 'text-rose-400' },
  slate: { bg: 'bg-slate-500/20', border: 'border-slate-500/50', text: 'text-slate-400' },
  orange: { bg: 'bg-orange-500/20', border: 'border-orange-500/50', text: 'text-orange-400' },
  teal: { bg: 'bg-teal-500/20', border: 'border-teal-500/50', text: 'text-teal-400' },
  pink: { bg: 'bg-pink-500/20', border: 'border-pink-500/50', text: 'text-pink-400' },
  yellow: { bg: 'bg-yellow-500/20', border: 'border-yellow-500/50', text: 'text-yellow-400' },
  red: { bg: 'bg-red-500/20', border: 'border-red-500/50', text: 'text-red-400' },
  violet: { bg: 'bg-violet-500/20', border: 'border-violet-500/50', text: 'text-violet-400' },
};

export function CategoryTabBar({
  categories,
  activeCategory,
  onCategorySelect,
}: CategoryTabBarProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLButtonElement>(null);

  // Scroll active tab into view
  useEffect(() => {
    if (activeRef.current && scrollRef.current) {
      const container = scrollRef.current;
      const activeTab = activeRef.current;
      const containerRect = container.getBoundingClientRect();
      const activeRect = activeTab.getBoundingClientRect();

      if (activeRect.left < containerRect.left || activeRect.right > containerRect.right) {
        activeTab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [activeCategory]);

  const handleCategoryClick = (categoryId: string | null) => {
    onCategorySelect(categoryId);

    // Scroll to category section if selecting a specific category
    if (categoryId) {
      const element = document.getElementById(`category-${categoryId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="sticky top-0 z-20 -mx-4 px-4 py-3 bg-background/80 backdrop-blur-xl border-b border-white/5">
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide -mx-2 px-2"
      >
        {/* All Tab */}
        <motion.button
          ref={activeCategory === null ? activeRef : null}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleCategoryClick(null)}
          className={`
            flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium
            whitespace-nowrap transition-all flex-shrink-0
            ${activeCategory === null
              ? 'bg-golden/20 border border-golden/50 text-golden'
              : 'bg-white/5 border border-white/10 text-text-muted hover:bg-white/10 hover:text-text-primary'
            }
          `}
        >
          <span>📚</span>
          <span>All</span>
        </motion.button>

        {/* Category Tabs */}
        {categories.map((category) => {
          const isActive = activeCategory === category.id;
          const colors = colorMap[category.color] || colorMap.purple;

          return (
            <motion.button
              key={category.id}
              ref={isActive ? activeRef : null}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryClick(category.id)}
              className={`
                flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium
                whitespace-nowrap transition-all flex-shrink-0
                ${isActive
                  ? `${colors.bg} border ${colors.border} ${colors.text}`
                  : 'bg-white/5 border border-white/10 text-text-muted hover:bg-white/10 hover:text-text-primary'
                }
              `}
            >
              <span>{category.icon}</span>
              <span className="hidden sm:inline">{category.name}</span>
              <span className="sm:hidden">{category.name.split(' ')[0]}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryTabBar;
