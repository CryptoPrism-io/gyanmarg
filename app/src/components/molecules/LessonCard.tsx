import { motion } from 'framer-motion';
import { Check, Lock, Clock, Star, Play, BookOpen, Target, Brain, Award } from 'lucide-react';
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

const typeColors: Record<LessonType, string> = {
  intro: 'bg-blue-500/10 text-blue-500',
  concept: 'bg-purple-500/10 text-purple-500',
  exercise: 'bg-success/10 text-success',
  reflection: 'bg-warning/10 text-warning',
  quiz: 'bg-amber-500/10 text-amber-500',
  challenge: 'bg-error/10 text-error',
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

  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      onClick={onClick}
      disabled={locked}
      className={`
        w-full p-4 rounded-xl flex items-center justify-between
        transition-all duration-200 border
        ${completed
          ? 'bg-success/5 border-success/30'
          : locked
          ? 'bg-secondary/50 border-border/50 cursor-not-allowed'
          : 'bg-secondary border-border hover:border-muted hover:bg-elevated cursor-pointer'
        }
      `}
    >
      <div className="flex items-center gap-4">
        <div
          className={`
            w-10 h-10 rounded-xl flex items-center justify-center
            ${completed
              ? 'bg-success text-white'
              : locked
              ? 'bg-border text-muted'
              : 'bg-secondary text-secondary'
            }
          `}
        >
          {completed ? (
            <Check className="w-5 h-5" />
          ) : locked ? (
            <Lock className="w-4 h-4" />
          ) : (
            <span className="font-semibold">{index + 1}</span>
          )}
        </div>
        <div className="text-left">
          <p className={`font-medium ${locked ? 'text-muted' : 'text-primary'}`}>
            {title}
          </p>
          <div className="flex items-center gap-3 text-xs text-muted mt-1">
            <span className={`px-2 py-0.5 rounded ${typeColors[type]}`}>
              {type}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {duration} min
            </span>
            <span className="flex items-center gap-1">
              <Star className="w-3 h-3 text-amber-500" />
              +{xpReward} XP
            </span>
          </div>
        </div>
      </div>
      {!locked && !completed && (
        <Icon className="w-5 h-5 text-muted" />
      )}
    </motion.button>
  );
}

export default LessonCard;
