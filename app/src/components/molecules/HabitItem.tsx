import { motion } from 'framer-motion';
import { Check, Flame, Trash2, Sun, Briefcase, Moon, Clock } from 'lucide-react';
import type { Habit } from '@/types';

interface HabitItemProps {
  habit: Habit;
  onToggle: () => void;
  onDelete?: () => void;
  showDetails?: boolean;
}

const categoryStyles = {
  morning: {
    bg: 'bg-sunrise/10',
    border: 'border-sunrise/20',
    text: 'text-sunrise',
    icon: Sun
  },
  work: {
    bg: 'bg-lavender/10',
    border: 'border-lavender/20',
    text: 'text-lavender',
    icon: Briefcase
  },
  evening: {
    bg: 'bg-coral/10',
    border: 'border-coral/20',
    text: 'text-coral',
    icon: Moon
  },
  anytime: {
    bg: 'bg-sage/10',
    border: 'border-sage/20',
    text: 'text-sage',
    icon: Clock
  },
};

export function HabitItem({
  habit,
  onToggle,
  onDelete,
  showDetails = false,
}: HabitItemProps) {
  const category = (habit.category || 'anytime') as keyof typeof categoryStyles;
  const catStyle = categoryStyles[category] || categoryStyles.anytime;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className={`
        glass-light rounded-xl p-4 border transition-all
        ${habit.completedToday
          ? 'border-sage/30 bg-sage/5'
          : 'border-white/10 hover:border-white/20'
        }
      `}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Checkbox */}
          <motion.button
            onClick={onToggle}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              w-11 h-11 rounded-xl border-2 flex items-center justify-center
              transition-all duration-200 shrink-0
              ${habit.completedToday
                ? 'bg-gradient-to-br from-sage to-sage/80 border-sage text-base shadow-sage'
                : `border-white/20 hover:${catStyle.border} ${catStyle.bg}`
              }
            `}
          >
            {habit.completedToday && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Check className="w-5 h-5" />
              </motion.div>
            )}
          </motion.button>

          {/* Content */}
          <div className="min-w-0">
            <p
              className={`font-medium truncate ${
                habit.completedToday ? 'text-sage' : 'text-text-primary'
              }`}
            >
              {habit.name}
            </p>
            {showDetails && habit.cue && (
              <p className="text-xs text-text-muted mt-0.5 truncate">Cue: {habit.cue}</p>
            )}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Streak */}
          <div className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg ${
            habit.streak > 0 ? 'bg-coral/10 border border-coral/20' : 'bg-surface border border-white/[0.06]'
          }`}>
            <Flame className={`w-4 h-4 ${habit.streak > 0 ? 'text-coral' : 'text-text-muted'}`} />
            <span className={`text-sm font-display font-semibold ${
              habit.streak > 0 ? 'text-coral' : 'text-text-muted'
            }`}>
              {habit.streak}
            </span>
          </div>

          {/* Delete button */}
          {onDelete && (
            <motion.button
              onClick={onDelete}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg text-text-muted hover:text-coral hover:bg-coral/10 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </motion.button>
          )}
        </div>
      </div>

      {/* Habit Loop Details */}
      {showDetails && (
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
          {habit.craving && (
            <div className="bg-lavender/10 text-lavender p-3 rounded-xl border border-lavender/20">
              <span className="font-semibold">Craving:</span> {habit.craving}
            </div>
          )}
          {habit.response && (
            <div className="bg-sage/10 text-sage p-3 rounded-xl border border-sage/20">
              <span className="font-semibold">Response:</span> {habit.response}
            </div>
          )}
          {habit.reward && (
            <div className="bg-golden/10 text-golden p-3 rounded-xl border border-golden/20 col-span-2">
              <span className="font-semibold">Reward:</span> {habit.reward}
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}

// Category label for habit groups
export function HabitCategoryLabel({ category }: { category: string }) {
  const catKey = category as keyof typeof categoryStyles;
  const catStyle = categoryStyles[catKey] || categoryStyles.anytime;
  const CategoryIcon = catStyle.icon;

  const labels: Record<string, string> = {
    morning: 'Morning',
    work: 'Work',
    evening: 'Evening',
    anytime: 'Anytime',
  };

  return (
    <div className="flex items-center gap-2 mb-3">
      <div className={`w-6 h-6 rounded-lg ${catStyle.bg} border ${catStyle.border} flex items-center justify-center`}>
        <CategoryIcon className={`w-3.5 h-3.5 ${catStyle.text}`} />
      </div>
      <h3 className={`text-sm font-display font-semibold ${catStyle.text}`}>
        {labels[category] || category}
      </h3>
    </div>
  );
}

export default HabitItem;
