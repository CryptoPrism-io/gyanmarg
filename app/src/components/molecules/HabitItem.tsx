import { motion } from 'framer-motion';
import { Check, Flame, Trash2 } from 'lucide-react';
import type { Habit } from '@/types';

interface HabitItemProps {
  habit: Habit;
  onToggle: () => void;
  onDelete?: () => void;
  showDetails?: boolean;
}

export function HabitItem({
  habit,
  onToggle,
  onDelete,
  showDetails = false,
}: HabitItemProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className={`
        bg-secondary rounded-xl p-4 border transition-all
        ${habit.completedToday
          ? 'border-success/30 bg-success/5'
          : 'border-border'
        }
      `}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onToggle}
            className={`
              w-10 h-10 rounded-xl border-2 flex items-center justify-center
              transition-all duration-200
              ${habit.completedToday
                ? 'bg-success border-success text-white'
                : 'border-border hover:border-success'
              }
            `}
          >
            {habit.completedToday && <Check className="w-5 h-5" />}
          </button>
          <div>
            <p
              className={`font-medium ${
                habit.completedToday ? 'text-success' : 'text-primary'
              }`}
            >
              {habit.name}
            </p>
            {showDetails && habit.cue && (
              <p className="text-xs text-muted mt-0.5">Cue: {habit.cue}</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Flame
              className={`w-4 h-4 ${
                habit.streak > 0 ? 'text-warning' : 'text-muted'
              }`}
            />
            <span
              className={`text-sm font-medium ${
                habit.streak > 0 ? 'text-warning' : 'text-muted'
              }`}
            >
              {habit.streak}
            </span>
          </div>
          {onDelete && (
            <button
              onClick={onDelete}
              className="p-2 text-muted hover:text-error transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {showDetails && (
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
          {habit.craving && (
            <div className="bg-purple-500/10 text-purple-500 p-2 rounded-lg">
              <span className="font-medium">Craving:</span> {habit.craving}
            </div>
          )}
          {habit.response && (
            <div className="bg-success/10 text-success p-2 rounded-lg">
              <span className="font-medium">Response:</span> {habit.response}
            </div>
          )}
          {habit.reward && (
            <div className="bg-amber-500/10 text-amber-500 p-2 rounded-lg col-span-2">
              <span className="font-medium">Reward:</span> {habit.reward}
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}

// Category label for habit groups
export function HabitCategoryLabel({ category }: { category: string }) {
  const labels: Record<string, string> = {
    morning: 'Morning',
    work: 'Work',
    evening: 'Evening',
    anytime: 'Anytime',
  };

  return (
    <h3 className="text-sm font-medium text-muted uppercase tracking-wider mb-3">
      {labels[category] || category}
    </h3>
  );
}

export default HabitItem;
