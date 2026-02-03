import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  BookOpen,
  Sparkles,
  ChevronLeft,
  ArrowRight,
} from 'lucide-react';
import { useProgressStore } from '@/store/progressStore';
import { useAuthGate } from '@/hooks/useAuthGate';
import { ModuleLayout } from '@/components/templates';
import { GlassCard, NetflixModuleCard, NetflixLevelCard, GlassLessonRow } from '@/components/molecules';
import { ProgressBar } from '@/components/atoms';
import { LessonViewer } from '@/components/organisms/LessonViewer';
import { SignInGate } from '@/components/organisms';
import type { PathwayLevel, PathwayLesson } from '@/types';
import { modules } from '@/data/modules';
import { getModuleImage, getLevelImage } from '@/lib/moduleImages';

export function LearningPathway() {
  const { completeLesson, isLessonCompleted, pathwayProgress } = useProgressStore();
  const { isAuthenticated } = useAuthGate();

  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
  const [selectedLevelId, setSelectedLevelId] = useState<string | null>(null);
  const [activeLesson, setActiveLesson] = useState<PathwayLesson | null>(null);
  const [activeLessonIndex, setActiveLessonIndex] = useState<number>(0);
  const [activeLevelIndex, setActiveLevelIndex] = useState<number>(0);
  const [showAuthAfterTeaser, setShowAuthAfterTeaser] = useState(false);

  // Show auth gate after 1 second teaser when lesson opens
  useEffect(() => {
    if (activeLesson && !isAuthenticated) {
      const timer = setTimeout(() => {
        setShowAuthAfterTeaser(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setShowAuthAfterTeaser(false);
    }
  }, [activeLesson, isAuthenticated]);

  const handleAuthGateClose = () => {
    setShowAuthAfterTeaser(false);
    setActiveLesson(null);
  };

  const handleAuthSuccess = () => {
    setShowAuthAfterTeaser(false);
  };

  // Get the selected module and its pathway
  const selectedModule = useMemo(
    () => selectedModuleId ? modules.find((m) => m.id === selectedModuleId) : null,
    [selectedModuleId]
  );
  const pathwayLevels: PathwayLevel[] = selectedModule?.pathway || [];

  // Get selected level
  const selectedLevel = useMemo(
    () => selectedLevelId ? pathwayLevels.find((l) => l.id === selectedLevelId) : null,
    [selectedLevelId, pathwayLevels]
  );

  const isLevelUnlocked = (_level: PathwayLevel, levelIndex: number): boolean => {
    if (levelIndex === 0) return true;
    const previousLevel = pathwayLevels[levelIndex - 1];
    return previousLevel.lessons.every((l) => isLessonCompleted(l.id));
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

  const isLevelCompleted = (level: PathwayLevel): boolean => {
    return level.lessons.every((l) => isLessonCompleted(l.id));
  };

  // Calculate module progress
  const getModuleProgress = (moduleId: string): number => {
    const mod = modules.find(m => m.id === moduleId);
    if (!mod?.pathway) return 0;
    const totalLessons = mod.pathway.reduce((acc, l) => acc + l.lessons.length, 0);
    const completedLessons = mod.pathway.flatMap(l => l.lessons)
      .filter(lesson => isLessonCompleted(lesson.id)).length;
    return totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;
  };

  const getModuleTotalXP = (moduleId: string): number => {
    const mod = modules.find(m => m.id === moduleId);
    if (!mod?.pathway) return 0;
    return mod.pathway.flatMap(l => l.lessons).reduce((acc, lesson) => acc + lesson.xpReward, 0);
  };

  const getModuleLessonsCount = (moduleId: string): number => {
    const mod = modules.find(m => m.id === moduleId);
    if (!mod?.pathway) return 0;
    return mod.pathway.reduce((acc, l) => acc + l.lessons.length, 0);
  };

  const getLevelTotalXP = (level: PathwayLevel): number => {
    return level.lessons.reduce((acc, lesson) => acc + lesson.xpReward, 0);
  };

  const handleCompleteLesson = () => {
    if (!activeLesson) return;
    completeLesson(activeLesson.id, activeLesson.xpReward);
  };

  // Calculate global lesson index
  const calculateGlobalIndex = (levelIndex: number, lessonIndex: number): number => {
    let index = 0;
    for (let i = 0; i < levelIndex; i++) {
      index += pathwayLevels[i].lessons.length;
    }
    return index + lessonIndex;
  };

  // Handle opening a lesson
  const handleOpenLesson = (lesson: PathwayLesson, globalIndex: number, levelIdx: number) => {
    setActiveLesson(lesson);
    setActiveLessonIndex(globalIndex);
    setActiveLevelIndex(levelIdx);
  };

  // Find the next lesson in the pathway
  const getNextLesson = useMemo(() => {
    if (!activeLesson) return null;
    let foundCurrent = false;
    for (let lvlIdx = 0; lvlIdx < pathwayLevels.length; lvlIdx++) {
      const level = pathwayLevels[lvlIdx];
      for (let lessonIdx = 0; lessonIdx < level.lessons.length; lessonIdx++) {
        if (foundCurrent) {
          return {
            lesson: level.lessons[lessonIdx],
            levelTitle: level.title,
            levelIndex: lvlIdx,
            lessonIndex: lessonIdx,
          };
        }
        if (level.lessons[lessonIdx].id === activeLesson.id) {
          foundCurrent = true;
        }
      }
    }
    return null;
  }, [activeLesson, pathwayLevels]);

  const handleNextLesson = (lesson: PathwayLesson) => {
    if (getNextLesson) {
      const globalIdx = calculateGlobalIndex(getNextLesson.levelIndex, getNextLesson.lessonIndex);
      setActiveLesson(lesson);
      setActiveLessonIndex(globalIdx);
      setActiveLevelIndex(getNextLesson.levelIndex);
    }
  };

  const currentLevelTitle = useMemo(() => {
    if (activeLevelIndex >= 0 && activeLevelIndex < pathwayLevels.length) {
      return pathwayLevels[activeLevelIndex].title;
    }
    return '';
  }, [activeLevelIndex, pathwayLevels]);

  const totalModuleLessons = pathwayLevels.reduce((acc, l) => acc + l.lessons.length, 0);

  // LessonViewer - Immersive lesson experience
  if (activeLesson && selectedModule) {
    // Get the level image for background
    const activeLevelForImage = pathwayLevels[activeLevelIndex];
    const lessonBackgroundImage = activeLevelForImage
      ? getLevelImage(activeLevelForImage.id, selectedModule.id)
      : getModuleImage(selectedModule.id);

    return (
      <>
        <LessonViewer
          lesson={activeLesson}
          onComplete={handleCompleteLesson}
          onClose={() => setActiveLesson(null)}
          isComplete={isLessonCompleted(activeLesson.id)}
          moduleColor={selectedModule.color}
          lessonNumber={activeLessonIndex + 1}
          totalLessons={totalModuleLessons}
          currentStreak={pathwayProgress.streakDays || 0}
          showSectionTabs={true}
          moduleName={selectedModule.title}
          levelName={currentLevelTitle}
          nextLesson={getNextLesson ? { lesson: getNextLesson.lesson, levelTitle: getNextLesson.levelTitle } : null}
          onNextLesson={handleNextLesson}
          backgroundImage={lessonBackgroundImage}
        />
      </>
    );
  }

  return (
    <>
      <ModuleLayout
        title="Learning Pathway"
        subtitle="Master knowledge through structured learning"
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
        {/* Module Shelf - Netflix Style Horizontal Scroll */}
        <div className="mb-6">
          <div className="flex items-center gap-2.5 mb-3 px-1">
            <span className="text-lg">📚</span>
            <h2 className="text-base font-semibold text-text-primary">All Modules</h2>
            <span className="text-xs text-text-muted ml-auto">{modules.length} modules</span>
          </div>

          <div className="flex gap-2.5 md:gap-4 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide snap-x snap-mandatory">
            {modules.map((mod) => (
              <NetflixModuleCard
                key={mod.id}
                id={mod.id}
                title={mod.title}
                subtitle={mod.subtitle}
                image={getModuleImage(mod.id)}
                progress={getModuleProgress(mod.id)}
                lessonsCount={getModuleLessonsCount(mod.id)}
                xpTotal={getModuleTotalXP(mod.id)}
                isActive={selectedModuleId === mod.id}
                onClick={() => {
                  setSelectedModuleId(mod.id);
                  setSelectedLevelId(null);
                }}
              />
            ))}
          </div>
        </div>

        {/* Selected Module - Levels View */}
        <AnimatePresence mode="wait">
          {selectedModule && !selectedLevel && (
            <motion.div
              key={`module-${selectedModule.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl border border-lavender/20 overflow-hidden mb-6"
            >
              {/* Module Image Background */}
              <div
                className="absolute inset-0 z-0 opacity-20 blur-sm"
                style={{
                  backgroundImage: `url(${getModuleImage(selectedModule.id)})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                }}
              />
              <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/60 via-background/85 to-background" />

              {/* Content */}
              <div className="relative z-10 p-4 md:p-6">
                {/* Module Header */}
                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
                  <img
                    src={getModuleImage(selectedModule.id)}
                    alt={selectedModule.title}
                    className="w-16 h-16 md:w-24 md:h-24 rounded-2xl object-cover border-2 border-lavender/30 flex-shrink-0 shadow-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-1">
                      {selectedModule.title}
                    </h2>
                    <p className="text-sm text-text-muted mb-3 line-clamp-2">
                      {selectedModule.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-text-muted">
                      <span>{pathwayLevels.length} levels</span>
                      <span className="text-lavender">{getModuleLessonsCount(selectedModule.id)} lessons</span>
                      <span className="text-golden">{getModuleTotalXP(selectedModule.id)} XP</span>
                    </div>
                  </div>
                  <div className="text-right md:ml-4">
                    <div className="text-2xl md:text-3xl font-bold text-lavender">
                      {Math.round(getModuleProgress(selectedModule.id))}%
                    </div>
                    <div className="text-xs text-text-muted">Complete</div>
                  </div>
                </div>

                {/* Levels Grid */}
                <div>
                  <h3 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <span>🎯</span> Levels
                  </h3>
                  <div className="flex gap-2.5 md:gap-3.5 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide snap-x snap-mandatory">
                    {pathwayLevels.map((level, levelIndex) => {
                      const unlocked = isLevelUnlocked(level, levelIndex);
                      const completed = isLevelCompleted(level);
                      const progress = getLevelProgress(level);

                      return (
                        <NetflixLevelCard
                          key={level.id}
                          title={level.title}
                          image={getLevelImage(level.id, selectedModule.id)}
                          levelNumber={levelIndex + 1}
                          lessonsCount={level.lessons.length}
                          xpTotal={getLevelTotalXP(level)}
                          progress={progress}
                          isLocked={!unlocked}
                          isCompleted={completed}
                          onClick={() => setSelectedLevelId(level.id)}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Selected Level - Lessons View */}
        <AnimatePresence mode="wait">
          {selectedModule && selectedLevel && (
            <motion.div
              key={`level-${selectedLevel.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl border border-golden/20 overflow-hidden"
            >
              {/* Level Image Background */}
              <div
                className="absolute inset-0 z-0 opacity-20"
                style={{
                  backgroundImage: `url(${getLevelImage(selectedLevel.id, selectedModule.id)})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                }}
              />
              <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-background/95 to-background" />

              {/* Content */}
              <div className="relative z-10 p-4 md:p-6">
                {/* Back button */}
                <button
                  onClick={() => setSelectedLevelId(null)}
                  className="flex items-center gap-2 text-sm text-text-muted hover:text-golden transition-colors mb-4"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back to {selectedModule.title}
                </button>

                {/* Level Header */}
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <img
                    src={getLevelImage(selectedLevel.id, selectedModule.id)}
                    alt={selectedLevel.title}
                    className="w-full md:w-48 aspect-video md:h-28 rounded-2xl object-cover border-2 border-golden/30 flex-shrink-0 shadow-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="inline-block text-[10px] font-bold tracking-wider text-golden bg-golden/15 px-2.5 py-1 rounded mb-2">
                      LEVEL {pathwayLevels.findIndex(l => l.id === selectedLevel.id) + 1}
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-2">
                      {selectedLevel.title}
                    </h2>
                    <p className="text-sm text-text-muted mb-3">
                      {selectedLevel.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-text-muted">
                      <span>{selectedLevel.lessons.length} lessons</span>
                      <span className="text-golden">{getLevelTotalXP(selectedLevel)} XP</span>
                    </div>
                  </div>
                  <div className="text-right md:ml-4">
                    <div className="text-2xl md:text-3xl font-bold text-golden">
                      {Math.round(getLevelProgress(selectedLevel))}%
                    </div>
                    <div className="text-xs text-text-muted">Complete</div>
                  </div>
                </div>

                {/* Lessons List */}
                <div>
                  <h3 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <span>📖</span> Lessons
                  </h3>
                  <div className="flex flex-col gap-2">
                  {selectedLevel.lessons.map((lesson, lessonIndex) => {
                    const levelIndex = pathwayLevels.findIndex(l => l.id === selectedLevel.id);
                    const unlocked = isLessonUnlocked(lesson, lessonIndex, selectedLevel, levelIndex);
                    const completed = isLessonCompleted(lesson.id);
                    const globalIndex = calculateGlobalIndex(levelIndex, lessonIndex);

                    return (
                      <GlassLessonRow
                        key={lesson.id}
                        title={lesson.title}
                        type={lesson.type}
                        duration={lesson.duration}
                        xpReward={lesson.xpReward}
                        lessonNumber={lessonIndex + 1}
                        isLocked={!unlocked}
                        isCompleted={completed}
                        onClick={() => unlocked && handleOpenLesson(lesson, globalIndex, levelIndex)}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Continue Learning CTA */}
              {!isLevelCompleted(selectedLevel) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 pt-4 border-t border-white/10"
                >
                  <button
                    onClick={() => {
                      const levelIndex = pathwayLevels.findIndex(l => l.id === selectedLevel.id);
                      // Find first incomplete lesson
                      const incompleteIndex = selectedLevel.lessons.findIndex(
                        (l, i) => !isLessonCompleted(l.id) && isLessonUnlocked(l, i, selectedLevel, levelIndex)
                      );
                      if (incompleteIndex !== -1) {
                        const lesson = selectedLevel.lessons[incompleteIndex];
                        const globalIndex = calculateGlobalIndex(levelIndex, incompleteIndex);
                        handleOpenLesson(lesson, globalIndex, levelIndex);
                      }
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-golden to-golden-light text-background font-semibold hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-shadow"
                  >
                    Continue Learning
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State - No Module Selected */}
        {!selectedModule && (
          <GlassCard className="text-center py-12">
            <Sparkles className="w-12 h-12 mx-auto text-lavender mb-4" />
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Select a Module to Begin
            </h3>
            <p className="text-sm text-text-muted max-w-md mx-auto">
              Choose from 16 curated learning modules above. Each module contains
              structured levels with concept lessons, exercises, and quizzes.
            </p>
          </GlassCard>
        )}

        {/* Overall Stats */}
        <GlassCard className="mt-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-lavender/10 border border-lavender/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-lavender" />
              </div>
              <div>
                <p className="font-medium text-text-primary">Overall Progress</p>
                <p className="text-sm text-text-muted">
                  {pathwayProgress.completedLessons.length} lessons completed
                </p>
              </div>
            </div>
            <span className="text-2xl font-display font-bold text-golden">
              {pathwayProgress.totalXP} XP
            </span>
          </div>
          <ProgressBar
            value={Math.min((pathwayProgress.completedLessons.length / 100) * 100, 100)}
            variant="gradient"
            size="md"
            animated
          />
        </GlassCard>
      </ModuleLayout>

      {/* Auth gate modal */}
      {showAuthAfterTeaser && (
        <SignInGate
          isOpen={true}
          onClose={handleAuthGateClose}
          onSignIn={handleAuthSuccess}
        />
      )}
    </>
  );
}

export default LearningPathway;
