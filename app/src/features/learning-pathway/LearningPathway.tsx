import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Lock,
  ChevronRight,
  ChevronDown,
  Star,
  Trophy,
  ArrowLeft,
  BookOpen,
} from 'lucide-react';
import { useProgressStore } from '@/store/progressStore';
import { ModuleLayout } from '@/components/templates';
import { Card, SwipeableLesson } from '@/components/molecules';
import { LessonCard } from '@/components/molecules/LessonCard';
import { ProgressBar, Badge } from '@/components/atoms';
import type { PathwayLevel, PathwayLesson } from '@/types';

// Import all modules with their pathways
import { modules } from '@/data/modules';

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

  // Auto-expand first level when module changes
  const firstLevelId = pathwayLevels[0]?.id || null;

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
      <div className="min-h-screen bg-primary">
        {/* Header */}
        <div className="glass border-b border-border px-4 py-4">
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <button
              onClick={() => {
                setActiveLesson(null);
                setQuizAnswer(null);
                setShowQuizResult(false);
              }}
              className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
            <div className="text-center flex-1">
              <Badge variant="primary" className="mb-1">
                {activeLesson.type}
              </Badge>
              <h1 className="text-lg font-semibold text-primary truncate px-4">
                {activeLesson.title}
              </h1>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="flex items-center gap-1 text-amber-500">
                <Star className="w-4 h-4" />
                +{activeLesson.xpReward}
              </span>
            </div>
          </div>
        </div>

        {/* Swipeable Content */}
        <div className="max-w-2xl mx-auto px-4 py-6 h-[calc(100vh-120px)]">
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
      rightContent={
        <div className="text-right">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-500" />
            <span className="text-amber-500 font-semibold">
              {pathwayProgress.totalXP} XP
            </span>
          </div>
          <p className="text-xs text-muted">{completedLessons} lessons done</p>
        </div>
      }
    >
      {/* Module Selector */}
      <div className="mb-6">
        <p className="text-xs text-muted mb-2">Select Module</p>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {modules.map((mod) => (
            <button
              key={mod.id}
              onClick={() => {
                setSelectedModuleId(mod.id);
                setExpandedLevel(null);
                setActiveLesson(null);
              }}
              className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                selectedModuleId === mod.id
                  ? 'bg-accent text-white'
                  : 'bg-secondary text-secondary hover:bg-elevated'
              }`}
            >
              {mod.number}. {mod.title.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Overall Progress */}
      <Card className="mb-6" padding="sm">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-secondary">Overall Progress</span>
          <span className="text-muted">
            {totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0}%
          </span>
        </div>
        <ProgressBar
          value={totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0}
          variant="gradient"
          size="md"
        />
      </Card>

      {/* Levels */}
      <div className="space-y-4" key={selectedModuleId}>
        {pathwayLevels.map((level, levelIndex) => {
          const unlocked = isLevelUnlocked(level, levelIndex);
          const levelProgress = getLevelProgress(level);
          const isExpanded = expandedLevel === level.id;

          return (
            <motion.div
              key={`${selectedModuleId}-${level.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: levelIndex * 0.1 }}
              className={`rounded-xl overflow-hidden border ${
                unlocked ? 'bg-secondary border-border' : 'bg-secondary/50 border-border/50'
              }`}
            >
              {/* Level Header */}
              <button
                onClick={() => unlocked && setExpandedLevel(isExpanded ? null : level.id)}
                disabled={!unlocked}
                className={`w-full p-4 flex items-center justify-between ${
                  unlocked ? 'hover:bg-elevated' : 'cursor-not-allowed'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{level.icon}</span>
                  <div className="text-left">
                    <h2 className={`font-semibold ${unlocked ? 'text-primary' : 'text-muted'}`}>
                      {level.title}
                    </h2>
                    <p className={`text-sm ${unlocked ? 'text-secondary' : 'text-muted'}`}>
                      {level.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {!unlocked && (
                    <div className="flex items-center gap-1 text-muted">
                      <Lock className="w-4 h-4" />
                      <span className="text-xs">
                        Complete {level.unlockRequirement} lessons
                      </span>
                    </div>
                  )}
                  {unlocked && (
                    <>
                      <div className="text-right">
                        <div className="w-16 bg-border rounded-full h-1.5">
                          <div
                            className="h-full rounded-full bg-success"
                            style={{ width: `${levelProgress}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted">
                          {Math.round(levelProgress)}%
                        </span>
                      </div>
                      {isExpanded ? (
                        <ChevronDown className="w-5 h-5 text-muted" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-muted" />
                      )}
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
                    className="border-t border-border"
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
      </div>
    </ModuleLayout>
  );
}

export default LearningPathway;
