import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Lock,
  ChevronRight,
  ChevronDown,
  Trophy,
  ArrowLeft,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import { useProgressStore } from '@/store/progressStore';
import { ModuleLayout, AnimatedBackground } from '@/components/templates';
import { GlassCard, SwipeableLesson } from '@/components/molecules';
import { LessonCard } from '@/components/molecules/LessonCard';
import { ProgressBar, XPBadge } from '@/components/atoms';
import type { PathwayLevel, PathwayLesson } from '@/types';

// Import all modules with their pathways
import { modules } from '@/data/modules';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
};

export function LearningPathway() {
  const { completeLesson, isLessonCompleted, pathwayProgress } = useProgressStore();

  const [selectedModuleId, setSelectedModuleId] = useState<string>('personal-development');
  const [expandedLevel, setExpandedLevel] = useState<string | null>(null);
  const [activeLesson, setActiveLesson] = useState<PathwayLesson | null>(null);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [showQuizResult, setShowQuizResult] = useState(false);

  // Get the selected module and its pathway
  const selectedModule = useMemo(
    () => modules.find((m) => m.id === selectedModuleId) || modules[0],
    [selectedModuleId]
  );
  const pathwayLevels: PathwayLevel[] = selectedModule?.pathway || [];

  const isLevelUnlocked = (level: PathwayLevel, levelIndex: number): boolean => {
    if (levelIndex === 0) return true;
    const previousLevel = pathwayLevels[levelIndex - 1];
    const completedInPrevious = previousLevel.lessons.filter((l) =>
      isLessonCompleted(l.id)
    ).length;
    return completedInPrevious >= level.unlockRequirement;
  };

  const isLessonUnlocked = (
    _lesson: PathwayLesson,
    lessonIndex: number,
    level: PathwayLevel,
    levelIndex: number
  ): boolean => {
    if (!isLevelUnlocked(level, levelIndex)) return false;
    if (lessonIndex === 0) return true;
    const previousLesson = level.lessons[lessonIndex - 1];
    return isLessonCompleted(previousLesson.id);
  };

  const getLevelProgress = (level: PathwayLevel): number => {
    const completed = level.lessons.filter((l) => isLessonCompleted(l.id)).length;
    return (completed / level.lessons.length) * 100;
  };

  const handleCompleteLesson = () => {
    if (!activeLesson) return;
    if (activeLesson.content.quiz && !showQuizResult) return;
    completeLesson(activeLesson.id, activeLesson.xpReward);
  };

  // Calculate lessons for the selected module only
  const totalLessons = pathwayLevels.reduce((acc, l) => acc + l.lessons.length, 0);
  const moduleCompletedLessons = useMemo(() => {
    const moduleLessonIds = pathwayLevels.flatMap((l) => l.lessons.map((lesson) => lesson.id));
    return pathwayProgress.completedLessons.filter((id) => moduleLessonIds.includes(id)).length;
  }, [pathwayLevels, pathwayProgress.completedLessons]);
  const completedLessons = moduleCompletedLessons;

  // Lesson View - Swipeable Cards
  if (activeLesson) {
    const isComplete = isLessonCompleted(activeLesson.id);

    return (
      <div className="h-screen bg-base flex flex-col overflow-hidden">
        {/* Animated gradient background */}
        <AnimatedBackground />

        {/* Header - Compact on mobile */}
        <div className="relative z-10 glass-nav border-b border-white/[0.06] px-2 py-1.5 md:px-4 md:py-2 flex-shrink-0">
          <div className="max-w-5xl mx-auto flex items-center justify-between gap-2">
            <button
              onClick={() => {
                setActiveLesson(null);
                setQuizAnswer(null);
                setShowQuizResult(false);
              }}
              className="flex items-center gap-1 text-text-secondary hover:text-text-primary transition-colors text-sm flex-shrink-0"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">Back</span>
            </button>
            <div className="text-center flex-1 min-w-0">
              <h1 className="text-xs md:text-base font-display font-semibold text-text-primary truncate px-1 md:px-4">
                {activeLesson.title}
              </h1>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0">
              <XPBadge xp={activeLesson.xpReward} size="sm" />
            </div>
          </div>
        </div>

        {/* Swipeable Content - Fill remaining height */}
        <div className="relative z-10 flex-1 max-w-5xl mx-auto w-full px-2 py-2 md:px-4 md:py-3 overflow-hidden">
          <SwipeableLesson
            lesson={activeLesson}
            onComplete={handleCompleteLesson}
            isComplete={isComplete}
            quizAnswer={quizAnswer}
            setQuizAnswer={setQuizAnswer}
            showQuizResult={showQuizResult}
            setShowQuizResult={setShowQuizResult}
          />
        </div>
      </div>
    );
  }

  // Pathway Overview
  return (
    <ModuleLayout
      title="Learning Pathway"
      subtitle={`Module ${selectedModule.number}: ${selectedModule.title}`}
      icon={<BookOpen className="w-5 h-5" />}
      headerGradient="aurora"
      rightContent={
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-golden/10 border border-golden/20">
            <Trophy className="w-4 h-4 text-golden" />
            <span className="text-golden font-semibold text-sm">
              {pathwayProgress.totalXP} XP
            </span>
          </div>
        </div>
      }
    >
      {/* Module Selector */}
      <div className="mb-6">
        <p className="text-xs text-text-muted mb-3 font-medium">Select Module</p>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {modules.map((mod) => (
            <motion.button
              key={mod.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setSelectedModuleId(mod.id);
                setExpandedLevel(null);
                setActiveLesson(null);
              }}
              className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-sm font-medium transition-all border ${
                selectedModuleId === mod.id
                  ? 'bg-gradient-to-r from-sunrise to-golden text-base border-transparent shadow-sunrise'
                  : 'glass-light border-white/10 text-text-secondary hover:text-text-primary hover:border-white/20'
              }`}
            >
              {mod.number}. {mod.title.split(' ')[0]}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Overall Progress */}
      <GlassCard className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-lavender/10 border border-lavender/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-lavender" />
            </div>
            <div>
              <p className="font-medium text-text-primary">Overall Progress</p>
              <p className="text-sm text-text-muted">{completedLessons} of {totalLessons} lessons</p>
            </div>
          </div>
          <span className="text-2xl font-display font-bold text-lavender">
            {totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0}%
          </span>
        </div>
        <ProgressBar
          value={totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0}
          variant="gradient"
          size="md"
          animated
        />
      </GlassCard>

      {/* Levels */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
        key={selectedModuleId}
      >
        {pathwayLevels.map((level, levelIndex) => {
          const unlocked = isLevelUnlocked(level, levelIndex);
          const levelProgress = getLevelProgress(level);
          const isExpanded = expandedLevel === level.id;

          return (
            <motion.div
              key={`${selectedModuleId}-${level.id}`}
              variants={itemVariants}
              className={`rounded-2xl overflow-hidden border transition-all ${
                unlocked
                  ? 'glass border-white/10'
                  : 'bg-surface/30 border-white/5 opacity-60'
              }`}
            >
              {/* Level Header */}
              <button
                onClick={() => unlocked && setExpandedLevel(isExpanded ? null : level.id)}
                disabled={!unlocked}
                className={`w-full p-4 flex items-center justify-between transition-colors ${
                  unlocked ? 'hover:bg-white/[0.02]' : 'cursor-not-allowed'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                    unlocked ? 'bg-surface/50' : 'bg-surface/30'
                  }`}>
                    {level.icon}
                  </div>
                  <div className="text-left">
                    <h2 className={`font-display font-semibold ${unlocked ? 'text-text-primary' : 'text-text-muted'}`}>
                      {level.title}
                    </h2>
                    <p className={`text-sm ${unlocked ? 'text-text-secondary' : 'text-text-muted'}`}>
                      {level.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {!unlocked && (
                    <div className="flex items-center gap-2 text-text-muted">
                      <Lock className="w-4 h-4" />
                      <span className="text-xs">
                        Complete {level.unlockRequirement} lessons
                      </span>
                    </div>
                  )}
                  {unlocked && (
                    <>
                      <div className="text-right">
                        <div className="w-20 h-2 bg-surface rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${levelProgress}%` }}
                            className="h-full rounded-full bg-gradient-to-r from-sage to-sage-light"
                          />
                        </div>
                        <span className="text-xs text-text-muted mt-1">
                          {Math.round(levelProgress)}%
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {isExpanded ? (
                          <ChevronDown className="w-5 h-5 text-text-muted" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-text-muted" />
                        )}
                      </motion.div>
                    </>
                  )}
                </div>
              </button>

              {/* Lessons */}
              <AnimatePresence>
                {unlocked && isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-white/[0.06]"
                  >
                    <div className="p-4 space-y-2">
                      {level.lessons.map((lesson, lessonIndex) => {
                        const lessonUnlocked = isLessonUnlocked(
                          lesson,
                          lessonIndex,
                          level,
                          levelIndex
                        );
                        const lessonCompleted = isLessonCompleted(lesson.id);

                        return (
                          <LessonCard
                            key={lesson.id}
                            title={lesson.title}
                            type={lesson.type}
                            duration={lesson.duration}
                            xpReward={lesson.xpReward}
                            completed={lessonCompleted}
                            locked={!lessonUnlocked}
                            index={lessonIndex}
                            onClick={() => lessonUnlocked && setActiveLesson(lesson)}
                          />
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </ModuleLayout>
  );
}

export default LearningPathway;
