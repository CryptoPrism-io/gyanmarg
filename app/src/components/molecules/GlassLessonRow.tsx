import { motion } from 'framer-motion';
import { Play, Lock, Check, BookOpen, Dumbbell, HelpCircle, Sparkles, Target, Brain } from 'lucide-react';
import type { LessonType } from '@/types';

interface GlassLessonRowProps {
  title: string;
  type: LessonType;
  duration: number;
  xpReward: number;
  lessonNumber: number;
  isLocked?: boolean;
  isCompleted?: boolean;
  isInProgress?: boolean;
  progressPercent?: number;
  onClick: () => void;
}

const typeConfig: Record<LessonType, {
  icon: typeof BookOpen;
  color: string;
  bgClass: string;
  textClass: string;
  label: string;
}> = {
  intro: {
    icon: Sparkles,
    color: 'sky',
    bgClass: 'bg-sky/15',
    textClass: 'text-sky',
    label: 'Intro',
  },
  concept: {
    icon: BookOpen,
    color: 'lavender',
    bgClass: 'bg-lavender/15',
    textClass: 'text-lavender',
    label: 'Concept',
  },
  exercise: {
    icon: Dumbbell,
    color: 'sage',
    bgClass: 'bg-sage/15',
    textClass: 'text-sage',
    label: 'Exercise',
  },
  quiz: {
    icon: HelpCircle,
    color: 'golden',
    bgClass: 'bg-golden/15',
    textClass: 'text-golden',
    label: 'Quiz',
  },
  reflection: {
    icon: Brain,
    color: 'blush',
    bgClass: 'bg-blush/15',
    textClass: 'text-blush',
    label: 'Reflect',
  },
  challenge: {
    icon: Target,
    color: 'coral',
    bgClass: 'bg-coral/15',
    textClass: 'text-coral',
    label: 'Challenge',
  },
};

export function GlassLessonRow({
  title,
  type,
  duration,
  xpReward,
  lessonNumber,
  isLocked = false,
  isCompleted = false,
  isInProgress = false,
  progressPercent = 0,
  onClick,
}: GlassLessonRowProps) {
  const config = typeConfig[type];
  const TypeIcon = config.icon;

  return (
    <motion.div
      whileHover={isLocked ? {} : { y: -2 }}
      whileTap={isLocked ? {} : { scale: 0.99 }}
      onClick={isLocked ? undefined : onClick}
      className={`
        relative flex items-center gap-3 md:gap-4 p-3 md:p-3.5 rounded-xl
        border transition-all duration-300
        bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-black/20
        backdrop-blur-xl
        shadow-[inset_0_1px_1px_rgba(255,255,255,0.04),inset_0_-1px_4px_rgba(0,0,0,0.2),0_4px_12px_rgba(0,0,0,0.15)]
        ${isLocked
          ? 'opacity-50 cursor-not-allowed border-white/[0.05]'
          : 'cursor-pointer border-white/[0.08] hover:border-golden/30 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),inset_0_-1px_4px_rgba(0,0,0,0.2),0_8px_24px_rgba(0,0,0,0.25),0_0_20px_rgba(245,158,11,0.1)]'
        }
      `}
    >
      {/* Top highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-t-xl" />

      {/* Episode number */}
      <div
        className={`
          w-8 h-8 flex items-center justify-center text-[13px] font-bold rounded-lg flex-shrink-0
          ${isCompleted
            ? 'bg-gradient-to-br from-sage to-sage-dark text-white'
            : isInProgress
              ? 'bg-gradient-to-br from-blue-500 to-blue-400 text-white'
              : 'bg-surface text-text-muted'
          }
        `}
      >
        {isCompleted ? <Check className="w-4 h-4" /> : lessonNumber}
      </div>

      {/* Type icon */}
      <div className={`w-9 h-9 flex items-center justify-center rounded-lg flex-shrink-0 ${config.bgClass}`}>
        <TypeIcon className={`w-4 h-4 ${config.textClass}`} />
      </div>

      {/* Lesson content */}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold mb-1 text-text-primary truncate">
          {title}
        </h4>
        <div className="flex items-center gap-3 text-xs text-text-muted">
          <span>{duration} min</span>
          <span className="text-golden">{xpReward} XP</span>
          <span className={`px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-semibold ${config.bgClass} ${config.textClass}`}>
            {config.label}
          </span>
        </div>

        {/* Progress bar for in-progress */}
        {isInProgress && progressPercent > 0 && (
          <div className="w-16 h-1 bg-surface rounded-full mt-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        )}
      </div>

      {/* Status / Action */}
      <div className="flex items-center gap-2 flex-shrink-0">
        {isLocked ? (
          <Lock className="w-4 h-4 text-text-muted" />
        ) : (
          <div className="w-9 h-9 flex items-center justify-center bg-golden/15 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <Play className="w-3.5 h-3.5 text-golden ml-0.5" fill="currentColor" />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default GlassLessonRow;
