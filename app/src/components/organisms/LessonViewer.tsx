import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  X,
  Clock,
  Sparkles,
  Flame,
} from 'lucide-react';
import { Badge } from '@/components/atoms';
import { TinderCardStack } from '@/components/organisms/TinderCardStack';
import { useProgressStore } from '@/store/progressStore';
import type { PathwayLesson } from '@/types';

interface LessonViewerProps {
  lesson: PathwayLesson;
  onComplete: () => void;
  onClose: () => void;
  isComplete: boolean;
  moduleColor?: string;
  lessonNumber?: number;
  totalLessons?: number;
  currentStreak?: number;
  showSectionTabs?: boolean;
  initialSection?: 'overview' | 'content' | 'quiz' | 'takeaways';
}

const colorGradients: Record<string, string> = {
  blue: 'from-sky to-lavender',
  emerald: 'from-sage to-sage-light',
  purple: 'from-lavender to-lavender-light',
  amber: 'from-golden to-sunrise',
  cyan: 'from-sky to-sage',
  rose: 'from-coral to-blush',
  yellow: 'from-golden to-sunrise',
  green: 'from-sage to-golden',
  orange: 'from-sunrise to-golden',
  teal: 'from-sky to-sage',
  indigo: 'from-lavender to-sky',
  violet: 'from-lavender to-blush',
};

export function LessonViewer({
  lesson,
  onComplete,
  onClose,
  isComplete,
  moduleColor = 'orange',
  lessonNumber = 1,
  totalLessons = 10,
  currentStreak = 0,
}: LessonViewerProps) {
  const [sessionXP, setSessionXP] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const addMicroXP = useProgressStore((s) => s.addMicroXP);

  const gradient = colorGradients[moduleColor] || colorGradients.orange;

  // Track reading time
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format time spent
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
  };

  // Handle XP earned from card swipes
  const handleXPEarned = (amount: number) => {
    setSessionXP(prev => prev + amount);
    addMicroXP(amount);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-base/95 backdrop-blur-xl z-50 flex flex-col"
    >
      {/* Header */}
      <div className="flex-shrink-0 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-xl bg-surface/50 hover:bg-surface flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-text-muted" />
            </button>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <Badge variant="outline" size="sm" className="text-text-muted border-white/20">
                  {lessonNumber} of {totalLessons}
                </Badge>
                <Badge variant="outline" size="sm" className={`border-transparent bg-gradient-to-r ${gradient} text-base`}>
                  {lesson.type}
                </Badge>
              </div>
              <h1 className="text-lg font-display font-bold text-text-primary line-clamp-1">
                {lesson.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Reading Stats */}
            <div className="hidden md:flex items-center gap-4 text-sm text-text-muted">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{formatTime(timeSpent)}</span>
              </div>
              {currentStreak > 0 && (
                <div className="flex items-center gap-1.5 text-sunrise">
                  <Flame className="w-4 h-4" />
                  <span className="font-medium">{currentStreak}</span>
                </div>
              )}
            </div>

            {/* Session XP Display */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-golden/10 border border-golden/30">
              <Sparkles className="w-4 h-4 text-golden" />
              <motion.span
                key={sessionXP}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                className="text-sm font-semibold text-golden"
              >
                +{sessionXP} XP
              </motion.span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area - Tinder Card Stack */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4">
          <TinderCardStack
            lesson={lesson}
            onComplete={onComplete}
            isComplete={isComplete}
            moduleColor={moduleColor}
            onXPEarned={handleXPEarned}
          />
        </div>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden flex-shrink-0 border-t border-white/10 p-3 bg-base/80 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm text-text-muted">
            <span>{formatTime(timeSpent)}</span>
            {currentStreak > 0 && (
              <>
                <span>•</span>
                <span className="text-sunrise flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5" />
                  {currentStreak}
                </span>
              </>
            )}
          </div>
          <div className="flex items-center gap-1.5 text-golden">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-sm font-semibold">+{sessionXP} XP</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default LessonViewer;
