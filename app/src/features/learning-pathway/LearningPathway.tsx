import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Lock,
  ChevronRight,
  ChevronDown,
  Trophy,
  BookOpen,
  Sparkles,
  Brain,
  Cpu,
  TrendingUp,
  MessageSquare,
  Zap,
  Link,
  Lightbulb,
  Code,
  Home,
  Network,
  HeartPulse,
  Sun,
  Landmark,
  GraduationCap,
} from 'lucide-react';
import { useProgressStore } from '@/store/progressStore';
import { ModuleLayout, AnimatedBackground } from '@/components/templates';
import { GlassCard } from '@/components/molecules';
import { LessonCard } from '@/components/molecules/LessonCard';
import { ProgressBar } from '@/components/atoms';
import { LessonViewer } from '@/components/organisms/LessonViewer';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Progress } from '@/components/ui/progress';
import type { PathwayLevel, PathwayLesson } from '@/types';
import { modules } from '@/data/modules';
import type { LucideIcon } from 'lucide-react';

// Module icon mapping
const moduleIcons: Record<string, LucideIcon> = {
  brain: Brain,
  cpu: Cpu,
  'trending-up': TrendingUp,
  'message-square': MessageSquare,
  zap: Zap,
  link: Link,
  lightbulb: Lightbulb,
  code: Code,
  home: Home,
  network: Network,
  'heart-pulse': HeartPulse,
  sun: Sun,
  sparkles: Sparkles,
  landmark: Landmark,
  'graduation-cap': GraduationCap,
};

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

// Module tab content component
function ModuleTabContent({
  module,
  progress,
  isActive
}: {
  module: typeof modules[0];
  progress: number;
  isActive: boolean;
}) {
  const IconComponent = moduleIcons[module.icon] || Brain;

  return (
    <div className="flex flex-col items-center gap-1.5 px-2 py-1.5 min-w-[70px]">
      <span className="text-[10px] font-medium whitespace-nowrap">
        {module.number}. {module.title.split(' ')[0]}
      </span>
      <IconComponent className={`w-4 h-4 ${isActive ? 'text-base' : 'text-text-muted'}`} />
      <Progress value={progress} className="h-1 w-10" />
    </div>
  );
}

export function LearningPathway() {
  const { completeLesson, isLessonCompleted, pathwayProgress } = useProgressStore();

  const [selectedModuleId, setSelectedModuleId] = useState<string>('personal-development');
  const [expandedLevel, setExpandedLevel] = useState<string | null>(null);
  const [activeLesson, setActiveLesson] = useState<PathwayLesson | null>(null);
  const [activeLessonIndex, setActiveLessonIndex] = useState<number>(0);

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

  // Calculate module progress for tabs
  const getModuleProgress = (moduleId: string): number => {
    const mod = modules.find(m => m.id === moduleId);
    if (!mod?.pathway) return 0;
    const totalLessons = mod.pathway.reduce((acc, l) => acc + l.lessons.length, 0);
    const completedLessons = mod.pathway.flatMap(l => l.lessons)
      .filter(lesson => isLessonCompleted(lesson.id)).length;
    return totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;
  };

  const handleCompleteLesson = () => {
    if (!activeLesson) return;
    completeLesson(activeLesson.id, activeLesson.xpReward);
    setActiveLesson(null);
  };

  // Calculate lessons for the selected module only
  const totalLessons = pathwayLevels.reduce((acc, l) => acc + l.lessons.length, 0);
  const totalModuleLessons = totalLessons;
  const moduleCompletedLessons = useMemo(() => {
    const moduleLessonIds = pathwayLevels.flatMap((l) => l.lessons.map((lesson) => lesson.id));
    return pathwayProgress.completedLessons.filter((id) => moduleLessonIds.includes(id)).length;
  }, [pathwayLevels, pathwayProgress.completedLessons]);
  const completedLessons = moduleCompletedLessons;

  // Handle opening a lesson with index tracking
  const handleOpenLesson = (lesson: PathwayLesson, globalIndex: number) => {
    setActiveLesson(lesson);
    setActiveLessonIndex(globalIndex);
  };

  // Calculate global lesson index
  const calculateGlobalIndex = (levelIndex: number, lessonIndex: number): number => {
    let index = 0;
    for (let i = 0; i < levelIndex; i++) {
      index += pathwayLevels[i].lessons.length;
    }
    return index + lessonIndex;
  };

  // LessonViewer - Immersive lesson experience
  if (activeLesson) {
    return (
      <div className="h-screen bg-base flex flex-col overflow-hidden">
        <AnimatedBackground />
        <div className="relative z-10 flex-1 overflow-hidden">
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
          />
        </div>
      </div>
    );
  }

  // Pathway Overview with Module Tabs
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
      {/* Module Tabs with ScrollArea */}
      <div className="mb-6">
        <p className="text-xs text-text-muted mb-3 font-medium">Select Module</p>
        <ScrollArea className="w-full whitespace-nowrap rounded-lg">
          <Tabs
            value={selectedModuleId}
            onValueChange={(value: string) => {
              setSelectedModuleId(value);
              setExpandedLevel(null);
              setActiveLesson(null);
            }}
          >
            <TabsList className="inline-flex h-auto gap-1 p-1.5 bg-surface/30 border border-white/10 rounded-xl">
              {modules.map((mod) => {
                const progress = getModuleProgress(mod.id);
                const isActive = selectedModuleId === mod.id;

                return (
                  <TabsTrigger
                    key={mod.id}
                    value={mod.id}
                    className={`
                      rounded-lg p-0 transition-all border
                      ${isActive
                        ? 'bg-gradient-to-r from-sunrise to-golden border-transparent shadow-sunrise text-base'
                        : 'bg-transparent border-transparent hover:bg-white/5 text-text-secondary hover:text-text-primary'
                      }
                    `}
                  >
                    <ModuleTabContent module={mod} progress={progress} isActive={isActive} />
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {/* Overall Progress Card */}
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
                        const globalIndex = calculateGlobalIndex(levelIndex, lessonIndex);

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
                            onClick={() => lessonUnlocked && handleOpenLesson(lesson, globalIndex)}
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
