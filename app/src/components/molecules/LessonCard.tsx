import { motion } from 'framer-motion';
import { Check, Lock, Clock, Star, Play, BookOpen, Target, Brain, Award, ChevronRight } from 'lucide-react';
import type { LessonType } from '@/types';

interface LessonCardProps {
  title: string;
  type: LessonType;
  duration: number;
  xpReward: number;
  completed: boolean;
  locked: boolean;
  index: number;
  onClick: () => void;
}

const typeIcons: Record<LessonType, typeof Play> = {
  intro: Play,
  concept: BookOpen,
  exercise: Target,
  reflection: Brain,
  quiz: Award,
  challenge: Star,
};

const typeStyles: Record<LessonType, { bg: string; border: string; text: string }> = {
  intro: { bg: 'bg-sky/10', border: 'border-sky/20', text: 'text-sky' },
  concept: { bg: 'bg-lavender/10', border: 'border-lavender/20', text: 'text-lavender' },
  exercise: { bg: 'bg-sage/10', border: 'border-sage/20', text: 'text-sage' },
  reflection: { bg: 'bg-golden/10', border: 'border-golden/20', text: 'text-golden' },
  quiz: { bg: 'bg-sunrise/10', border: 'border-sunrise/20', text: 'text-sunrise' },
  challenge: { bg: 'bg-coral/10', border: 'border-coral/20', text: 'text-coral' },
};

export function LessonCard({
  title,
  type,
  duration,
  xpReward,
  completed,
  locked,
  index,
  onClick,
}: LessonCardProps) {
  const Icon = typeIcons[type];
  const typeStyle = typeStyles[type];

  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      onClick={onClick}
      disabled={locked}
      whileHover={{ scale: locked ? 1 : 1.01 }}
      whileTap={{ scale: locked ? 1 : 0.99 }}
      className={`
        w-full p-2 sm:p-4 rounded-lg sm:rounded-xl flex items-center gap-2 sm:gap-4
        transition-all duration-200 border group overflow-hidden
        ${completed
          ? 'glass border-sage/30 bg-sage/5'
          : locked
          ? 'bg-surface/50 border-white/[0.04] opacity-60 cursor-not-allowed'
          : 'glass-light border-white/10 hover:border-white/20 cursor-pointer'
        }
      `}
    >
      {/* Index/Status indicator */}
      <div
        className={`
          w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0
          ${completed
            ? 'bg-gradient-to-br from-sage to-sage/80 text-base shadow-sage'
            : locked
            ? 'bg-surface border border-white/[0.06] text-text-muted'
            : `${typeStyle.bg} border ${typeStyle.border} ${typeStyle.text}`
          }
        `}
      >
        {completed ? (
          <Check className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
        ) : locked ? (
          <Lock className="w-3 h-3 sm:w-4 sm:h-4" />
        ) : (
          <span className="font-display font-bold text-xs sm:text-base">{index + 1}</span>
        )}
      </div>

      {/* Content */}
      <div className="text-left min-w-0 flex-1">
        <p className={`font-medium truncate text-xs sm:text-base ${locked ? 'text-text-muted' : completed ? 'text-sage' : 'text-text-primary'}`}>
          {title}
        </p>
        <div className="flex items-center gap-1.5 sm:gap-3 text-[9px] sm:text-xs text-text-muted mt-0.5 sm:mt-1.5 flex-wrap">
          <span className={`px-1 sm:px-2 py-0.5 rounded sm:rounded-md ${typeStyle.bg} ${typeStyle.text} border ${typeStyle.border} capitalize`}>
            {type}
          </span>
          <span className="flex items-center gap-0.5 sm:gap-1">
            <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            {duration} min
          </span>
          <span className="flex items-center gap-0.5 sm:gap-1">
            <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-golden" />
            +{xpReward} XP
          </span>
        </div>
      </div>

      {/* Action indicator */}
      {!locked && !completed && (
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <Icon className={`w-3.5 h-3.5 sm:w-5 sm:h-5 ${typeStyle.text} opacity-70 hidden sm:block`} />
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-text-muted group-hover:text-text-secondary group-hover:translate-x-1 transition-all" />
        </div>
      )}

      {completed && (
        <span className="text-[9px] sm:text-xs font-medium text-sage px-1.5 sm:px-2 py-0.5 sm:py-1 bg-sage/10 rounded sm:rounded-lg border border-sage/20 shrink-0 whitespace-nowrap">
          Done
        </span>
      )}
    </motion.button>
  );
}

export default LessonCard;
