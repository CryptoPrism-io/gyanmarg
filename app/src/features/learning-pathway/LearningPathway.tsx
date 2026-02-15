import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  BookOpen,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Zap,
  Heart,
  Play,
  Brain,
  CheckCircle2,
  RotateCcw,
} from 'lucide-react';
import { useProgressStore } from '@/store/progressStore';
import { useUserStore } from '@/store/userStore';
import { useAuthGate } from '@/hooks/useAuthGate';
import { ModuleLayout } from '@/components/templates';
import { getVizForLevel } from '@/data/vizLevelMap';
import { GlassCard, NetflixLevelCard, GlassLessonRow, NetflixModuleCard, CategoryTabBar, CategorySection, ComingSoonModuleDetails } from '@/components/molecules';
import { ProgressBar } from '@/components/atoms';
import { LessonViewer } from '@/components/organisms/LessonViewer';
import { QuickReviseOverlay } from '@/components/organisms/QuickReviseOverlay';
import { SignInGate } from '@/components/organisms';
import type { PathwayLevel, PathwayLesson } from '@/types';
import { modules } from '@/data/modules';
import { moduleCategories, getCategoriesWithModules, getCategoryForModule } from '@/data/categories';
import { getModuleImage, getLevelImage } from '@/lib/moduleImages';
import { allFlashcards } from '@/data/flashcards-index';
import { getFlashcardCountForLesson, hasFlashcardsForLessons } from '@/data/lesson-flashcard-map';

export function LearningPathway() {
  const { completeLesson, isLessonCompleted, pathwayProgress } = useProgressStore();
  const { isAuthenticated } = useAuthGate();
  const favoriteModules = useUserStore((s) => s.favoriteModules);
  const toggleFavoriteModule = useUserStore((s) => s.toggleFavoriteModule);
  const isFavoriteModule = useUserStore((s) => s.isFavoriteModule);

  // URL params for deep linking: /pathway/:moduleId/:levelId/:lessonId
  const { moduleId: urlModuleId, levelId: urlLevelId, lessonId: urlLessonId } = useParams();
  const navigate = useNavigate();

  const [selectedModuleId, _setSelectedModuleId] = useState<string | null>(urlModuleId || null);
  const [selectedComingSoonModuleId, setSelectedComingSoonModuleId] = useState<string | null>(null);
  const [selectedLevelId, _setSelectedLevelId] = useState<string | null>(urlLevelId || null);
  const [activeLesson, _setActiveLesson] = useState<PathwayLesson | null>(null);
  const [activeLessonIndex, setActiveLessonIndex] = useState<number>(0);
  const [activeLevelIndex, setActiveLevelIndex] = useState<number>(0);
  const [showAuthAfterTeaser, setShowAuthAfterTeaser] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [reviseOverlay, setReviseOverlay] = useState<{
    lessonIds: string[];
    label: string;
    color?: string;
  } | null>(null);

  // URL-synced setters — update state AND push URL
  const setSelectedModuleId = useCallback((id: string | null) => {
    _setSelectedModuleId(id);
    _setSelectedLevelId(null);
    _setActiveLesson(null);
    if (id) {
      navigate(`/pathway/${id}`, { replace: true });
    } else {
      navigate('/pathway', { replace: true });
    }
  }, [navigate]);

  const setSelectedLevelId = useCallback((id: string | null) => {
    _setSelectedLevelId(id);
    _setActiveLesson(null);
    if (id && selectedModuleId) {
      navigate(`/pathway/${selectedModuleId}/${id}`, { replace: true });
    } else if (selectedModuleId) {
      navigate(`/pathway/${selectedModuleId}`, { replace: true });
    }
  }, [navigate, selectedModuleId]);

  const setActiveLesson = useCallback((lesson: PathwayLesson | null) => {
    _setActiveLesson(lesson);
    if (lesson && selectedModuleId && selectedLevelId) {
      navigate(`/pathway/${selectedModuleId}/${selectedLevelId}/${lesson.id}`, { replace: true });
    } else if (selectedModuleId && selectedLevelId) {
      navigate(`/pathway/${selectedModuleId}/${selectedLevelId}`, { replace: true });
    }
  }, [navigate, selectedModuleId, selectedLevelId]);

  // Hydrate state from URL on mount
  useEffect(() => {
    if (urlModuleId && !selectedModuleId) {
      _setSelectedModuleId(urlModuleId);
    }
    if (urlLevelId && !selectedLevelId) {
      _setSelectedLevelId(urlLevelId);
    }
    // Lesson hydration happens after pathwayLevels are available (see below)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Refs for category rows to scroll into view (scroll to category, not details)
  const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const levelDetailRef = useRef<HTMLDivElement | null>(null);
  const pendingScrollToLevel = useRef(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  // Favorite modules (ordered by when favorited — newest first)
  const favoriteModuleConfigs = useMemo(
    () => favoriteModules
      .map((id) => modules.find((m) => m.id === id))
      .filter((m): m is typeof modules[number] => m !== undefined && m.isAvailable),
    [favoriteModules]
  );

  // In-progress modules — started but not fully completed
  const inProgressModules = useMemo(() => {
    const results: {
      module: typeof modules[number];
      level: PathwayLevel;
      lesson: PathwayLesson;
      levelIndex: number;
      lessonIndex: number;
      globalIndex: number;
      progress: number;
      completedLessons: number;
      totalLessons: number;
    }[] = [];
    const availableModules = modules.filter((m) => m.isAvailable && m.pathway);
    for (const mod of availableModules) {
      if (!mod.pathway) continue;
      const totalLessons = mod.pathway.reduce((acc, l) => acc + l.lessons.length, 0);
      const completedCount = mod.pathway.flatMap((l) => l.lessons).filter((l) => isLessonCompleted(l.id)).length;
      if (completedCount === 0 || completedCount === totalLessons) continue;

      // Find first incomplete lesson
      for (let lvlIdx = 0; lvlIdx < mod.pathway.length; lvlIdx++) {
        const level = mod.pathway[lvlIdx];
        for (let lessonIdx = 0; lessonIdx < level.lessons.length; lessonIdx++) {
          const lesson = level.lessons[lessonIdx];
          if (!isLessonCompleted(lesson.id)) {
            let globalIdx = 0;
            for (let i = 0; i < lvlIdx; i++) globalIdx += mod.pathway[i].lessons.length;
            globalIdx += lessonIdx;
            results.push({
              module: mod,
              level,
              lesson,
              levelIndex: lvlIdx,
              lessonIndex: lessonIdx,
              globalIndex: globalIdx,
              progress: Math.round((completedCount / totalLessons) * 100),
              completedLessons: completedCount,
              totalLessons,
            });
            break; // found the next lesson for this module
          }
        }
        if (results.length > 0 && results[results.length - 1].module.id === mod.id) break;
      }
    }
    // Sort by progress descending (most progressed first)
    return results.sort((a, b) => b.progress - a.progress);
  }, [isLessonCompleted]);

  // Fully completed modules
  const completedModulesData = useMemo(() => {
    const results: {
      module: typeof modules[number];
      totalLessons: number;
    }[] = [];
    const availableModules = modules.filter((m) => m.isAvailable && m.pathway);
    for (const mod of availableModules) {
      if (!mod.pathway) continue;
      const totalLessons = mod.pathway.reduce((acc, l) => acc + l.lessons.length, 0);
      const allDone = mod.pathway.every((level) =>
        level.lessons.every((lesson) => isLessonCompleted(lesson.id))
      );
      if (allDone && totalLessons > 0) {
        results.push({ module: mod, totalLessons });
      }
    }
    return results;
  }, [isLessonCompleted]);

  // Categorized modules for Netflix-style display
  const categorizedModules = useMemo(() => getCategoriesWithModules(modules), []);

  // Filtered categories based on active category selection
  const displayedCategories = useMemo(() => {
    if (!activeCategory) return categorizedModules;
    return categorizedModules.filter(({ category }) => category.id === activeCategory);
  }, [categorizedModules, activeCategory]);

  // Scroll to category row when a module is selected (not the details panel)
  useEffect(() => {
    if (selectedCategoryId && categoryRefs.current[selectedCategoryId]) {
      // Small delay to allow the component to render
      setTimeout(() => {
        categoryRefs.current[selectedCategoryId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [selectedCategoryId, selectedModuleId, selectedComingSoonModuleId]);

  // Handle favorite card click — navigate to parent category and select module there
  const handleFavoriteModuleClick = useCallback((moduleId: string) => {
    const category = getCategoryForModule(moduleId);
    if (category) {
      // Clear any active category filter so the parent category is visible
      setActiveCategory(null);
      setSelectedModuleId(moduleId);
      setSelectedComingSoonModuleId(null);
      setSelectedLevelId(null);
      setSelectedCategoryId(category.id);
      // Scroll to that category
      setTimeout(() => {
        categoryRefs.current[category.id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  }, []);

  // Get selected Coming Soon module
  const selectedComingSoonModule = useMemo(
    () => selectedComingSoonModuleId ? modules.find((m) => m.id === selectedComingSoonModuleId) : null,
    [selectedComingSoonModuleId]
  );

  // DEV: Auth gate disabled for content QA
  useEffect(() => {
    setShowAuthAfterTeaser(false);
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

  // Hydrate lesson from URL on initial load
  const urlLessonHydrated = useRef(false);
  useEffect(() => {
    if (urlLessonId && pathwayLevels.length > 0 && !urlLessonHydrated.current) {
      urlLessonHydrated.current = true;
      for (let lvlIdx = 0; lvlIdx < pathwayLevels.length; lvlIdx++) {
        const level = pathwayLevels[lvlIdx];
        const lessonIdx = level.lessons.findIndex(l => l.id === urlLessonId);
        if (lessonIdx !== -1) {
          _setSelectedLevelId(level.id);
          _setActiveLesson(level.lessons[lessonIdx]);
          setActiveLevelIndex(lvlIdx);
          // Calculate global index
          let gi = 0;
          for (let i = 0; i < lvlIdx; i++) gi += pathwayLevels[i].lessons.length;
          setActiveLessonIndex(gi + lessonIdx);
          break;
        }
      }
    }
  }, [urlLessonId, pathwayLevels]);

  // Get selected level
  const selectedLevel = useMemo(
    () => selectedLevelId ? pathwayLevels.find((l) => l.id === selectedLevelId) : null,
    [selectedLevelId, pathwayLevels]
  );

  // Scroll to level detail when returning from lesson viewer
  useEffect(() => {
    if (pendingScrollToLevel.current && !activeLesson && selectedLevel) {
      pendingScrollToLevel.current = false;
      setTimeout(() => {
        levelDetailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  }, [activeLesson, selectedLevel]);

  // Precompute flashcard counts for the selected level's completed lessons
  const lessonFlashcardCounts = useMemo(() => {
    if (!selectedLevel) return new Map<string, number>();
    const counts = new Map<string, number>();
    for (const lesson of selectedLevel.lessons) {
      if (isLessonCompleted(lesson.id)) {
        const count = getFlashcardCountForLesson(allFlashcards, lesson.id);
        if (count > 0) counts.set(lesson.id, count);
      }
    }
    return counts;
  }, [selectedLevel, isLessonCompleted]);

  // Total flashcard count for the selected level
  const levelFlashcardCount = useMemo(() => {
    let total = 0;
    for (const count of lessonFlashcardCounts.values()) {
      total += count;
    }
    return total;
  }, [lessonFlashcardCounts]);

  // Flashcard count for the active lesson (for "Revision Unlocked!" banner)
  const activeLessonFlashcardCount = useMemo(() => {
    if (!activeLesson) return 0;
    return getFlashcardCountForLesson(allFlashcards, activeLesson.id);
  }, [activeLesson]);

  // Check if module has any completed lessons with flashcards (for module-level revise)
  const moduleHasFlashcards = useMemo(() => {
    if (!selectedModule?.pathway) return false;
    const completedLessonIds = selectedModule.pathway
      .flatMap((l) => l.lessons)
      .filter((l) => isLessonCompleted(l.id))
      .map((l) => l.id);
    return hasFlashcardsForLessons(allFlashcards, completedLessonIds);
  }, [selectedModule, isLessonCompleted]);

  // All levels are visible so users can browse before committing
  const isLevelUnlocked = (_level: PathwayLevel, _levelIndex: number): boolean => {
    return true;
  };

  // Sequential lesson unlock: first lesson of each level is free,
  // subsequent lessons require the previous lesson to be completed
  const isLessonUnlocked = (
    _lesson: PathwayLesson,
    lessonIndex: number,
    level: PathwayLevel,
    _levelIndex: number
  ): boolean => {
    // First lesson of every level is always unlocked
    if (lessonIndex === 0) return true;
    // Subsequent lessons require the previous lesson to be completed
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
    const level = pathwayLevels[levelIdx];
    _setSelectedLevelId(level?.id || null);
    setActiveLessonIndex(globalIndex);
    setActiveLevelIndex(levelIdx);
    // Navigate with full path
    if (selectedModuleId && level) {
      navigate(`/pathway/${selectedModuleId}/${level.id}/${lesson.id}`, { replace: true });
    }
    _setActiveLesson(lesson);
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
      const nextLevel = pathwayLevels[getNextLesson.levelIndex];
      const globalIdx = calculateGlobalIndex(getNextLesson.levelIndex, getNextLesson.lessonIndex);
      _setSelectedLevelId(nextLevel?.id || null);
      setActiveLessonIndex(globalIdx);
      setActiveLevelIndex(getNextLesson.levelIndex);
      if (selectedModuleId && nextLevel) {
        navigate(`/pathway/${selectedModuleId}/${nextLevel.id}/${lesson.id}`, { replace: true });
      }
      _setActiveLesson(lesson);
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
          onClose={() => { pendingScrollToLevel.current = true; setActiveLesson(null); }}
          isComplete={isLessonCompleted(activeLesson.id)}
          moduleColor={selectedModule.color}
          moduleId={selectedModule.id}
          lessonNumber={activeLessonIndex + 1}
          totalLessons={totalModuleLessons}
          currentStreak={pathwayProgress.streakDays || 0}
          showSectionTabs={true}
          moduleName={selectedModule.title}
          levelName={currentLevelTitle}
          nextLesson={getNextLesson ? { lesson: getNextLesson.lesson, levelTitle: getNextLesson.levelTitle } : null}
          onNextLesson={handleNextLesson}
          backgroundImage={lessonBackgroundImage}
          flashcardCount={activeLessonFlashcardCount}
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
        {/* Category Tab Bar - Sticky Navigation */}
        <CategoryTabBar
          categories={moduleCategories}
          activeCategory={activeCategory}
          onCategorySelect={setActiveCategory}
        />

        {/* Continue Reading Section — all in-progress modules */}
        {inProgressModules.length > 0 && !activeCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 mb-6 scroll-mt-20"
          >
            <div className="flex items-center gap-3 mb-3 px-1">
              <Play className="w-5 h-5 text-lavender fill-lavender" />
              <h2 className="text-base font-semibold text-lavender">Continue Reading</h2>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-lavender/15 text-lavender">
                {inProgressModules.length} in progress
              </span>
            </div>
            <div className="flex gap-2.5 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide snap-x snap-mandatory">
              {inProgressModules.map((item) => (
                <button
                  key={item.module.id}
                  onClick={() => {
                    setSelectedModuleId(item.module.id);
                    setSelectedComingSoonModuleId(null);
                    setSelectedLevelId(null);
                    handleOpenLesson(item.lesson, item.globalIndex, item.levelIndex);
                  }}
                  className="flex-shrink-0 w-52 snap-start text-left rounded-2xl border border-lavender/15 bg-lavender/[0.03] hover:bg-lavender/[0.07] transition-all overflow-hidden group"
                >
                  <div className="flex items-center gap-3 p-3">
                    <img
                      src={getModuleImage(item.module.id)}
                      alt={item.module.title}
                      className="w-10 h-10 rounded-lg object-cover border border-lavender/20 flex-shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold text-text-primary group-hover:text-lavender transition-colors truncate">
                        {item.module.title}
                      </p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <div className="flex-1 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-lavender to-sky"
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                        <span className="text-[10px] text-lavender font-medium">
                          {item.progress}%
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Favorites Section — shown at top when user has favorites */}
        {favoriteModuleConfigs.length > 0 && !activeCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 mb-8 scroll-mt-20 overflow-x-hidden"
          >
            <div className="flex items-center gap-3 mb-3 px-1">
              <Heart className="w-5 h-5 text-coral fill-coral" />
              <h2 className="text-base font-semibold text-coral">Your Favorites</h2>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-coral/20 text-coral">
                {favoriteModuleConfigs.length} saved
              </span>
            </div>
            <div className="flex gap-2.5 md:gap-4 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide snap-x snap-mandatory">
              {favoriteModuleConfigs.map((mod) => (
                <NetflixModuleCard
                  key={`fav-${mod.id}`}
                  id={mod.id}
                  title={mod.title}
                  subtitle={mod.subtitle}
                  image={getModuleImage(mod.id)}
                  progress={getModuleProgress(mod.id)}
                  lessonsCount={getModuleLessonsCount(mod.id)}
                  xpTotal={getModuleTotalXP(mod.id)}
                  isActive={selectedModuleId === mod.id}
                  isFavorite={true}
                  onToggleFavorite={() => toggleFavoriteModule(mod.id)}
                  onClick={() => handleFavoriteModuleClick(mod.id)}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Category Sections - Netflix Style with Inline Module Details */}
        <div className={`${!activeCategory ? '' : 'mt-4'} overflow-x-hidden`}>
          {displayedCategories.map(({ category, modules: categoryModules }) => {
            // Check if the selected module belongs to this category
            const selectedModuleInCategory = selectedModuleId && categoryModules.some(m => m.id === selectedModuleId);
            const selectedComingSoonInCategory = selectedComingSoonModuleId && categoryModules.some(m => m.id === selectedComingSoonModuleId);
            const showDetailsHere = selectedModuleInCategory || selectedComingSoonInCategory;

            return (
              <div
                key={category.id}
                ref={(el) => { categoryRefs.current[category.id] = el; }}
                className="scroll-mt-20 overflow-x-hidden"
              >
                <CategorySection
                  category={category}
                  modules={categoryModules}
                  selectedModuleId={selectedModuleId || selectedComingSoonModuleId}
                  onModuleSelect={(moduleId) => {
                    // Toggle: close if same module clicked, otherwise select it
                    if (selectedModuleId === moduleId) {
                      setSelectedModuleId(null);
                      setSelectedCategoryId(null);
                    } else {
                      setSelectedModuleId(moduleId);
                      setSelectedComingSoonModuleId(null);
                      setSelectedLevelId(null);
                      setSelectedCategoryId(category.id);
                    }
                  }}
                  onComingSoonModuleSelect={(moduleId) => {
                    // Toggle: close if same module clicked, otherwise select it
                    if (selectedComingSoonModuleId === moduleId) {
                      setSelectedComingSoonModuleId(null);
                      setSelectedCategoryId(null);
                    } else {
                      setSelectedComingSoonModuleId(moduleId);
                      setSelectedModuleId(null);
                      setSelectedLevelId(null);
                      setSelectedCategoryId(category.id);
                    }
                  }}
                  getModuleProgress={getModuleProgress}
                  getModuleLessonsCount={getModuleLessonsCount}
                  getModuleTotalXP={getModuleTotalXP}
                  isFavoriteModule={isFavoriteModule}
                  onToggleFavorite={toggleFavoriteModule}
                />

                {/* Inline Module Details - Appears right below the category */}
                <AnimatePresence mode="wait">
                  {/* Coming Soon Module Details */}
                  {showDetailsHere && selectedComingSoonModule && (
                    <motion.div
                      key={`coming-soon-${selectedComingSoonModule.id}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative rounded-3xl border border-amber-500/20 overflow-hidden mb-6"
                    >
                      {/* Module Image Background */}
                      <div
                        className="absolute inset-0 z-0 opacity-10 blur-sm grayscale"
                        style={{
                          backgroundImage: `url(${getModuleImage(selectedComingSoonModule.id)})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center top',
                        }}
                      />
                      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/60 via-background/85 to-background" />

                      <ComingSoonModuleDetails module={selectedComingSoonModule} />
                    </motion.div>
                  )}

                  {/* Available Module - Levels View (no level selected yet) */}
                  {showDetailsHere && selectedModule && !selectedLevel && (
                    <motion.div
                      key={`module-${selectedModule.id}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
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
                        {/* Module Header with Completion % on top right */}
                        <div className="flex flex-col md:flex-row md:items-start gap-4 mb-5">
                          <img
                            src={getModuleImage(selectedModule.id)}
                            alt={selectedModule.title}
                            className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover border-2 border-lavender/30 flex-shrink-0 shadow-lg"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <h2 className="text-lg md:text-xl font-bold text-text-primary mb-1">
                                  {selectedModule.title}
                                </h2>
                                <p className="text-xs text-text-muted mb-2 line-clamp-2">
                                  {selectedModule.description}
                                </p>
                                <div className="flex items-center gap-3 text-xs text-text-muted">
                                  <span>{pathwayLevels.length} levels</span>
                                  <span className="text-lavender">{getModuleLessonsCount(selectedModule.id)} lessons</span>
                                  <span className="text-golden">{getModuleTotalXP(selectedModule.id)} XP</span>
                                </div>
                              </div>
                              <div className="text-right flex-shrink-0">
                                <div className="text-2xl font-bold text-lavender">
                                  {Math.round(getModuleProgress(selectedModule.id))}%
                                </div>
                                <div className="text-[10px] text-text-muted">Complete</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Skills You'll Learn */}
                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-4">
                          <h4 className="text-xs font-semibold text-text-primary mb-2 flex items-center gap-2">
                            <Zap className="w-3.5 h-3.5 text-lavender" />
                            Skills You'll Learn
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {selectedModule.skills.slice(0, 8).map((skill) => (
                              <span
                                key={skill}
                                className="text-[10px] px-2 py-0.5 rounded-full bg-lavender/10 text-lavender/80 border border-lavender/20"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Levels Grid */}
                        <div className="mb-4">
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
                                  hasVizReward={!!getVizForLevel(level.id)}
                                  onClick={() => setSelectedLevelId(level.id)}
                                />
                              );
                            })}
                          </div>
                        </div>

                        {/* Source Books (at bottom) */}
                        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                          <h4 className="text-xs font-semibold text-text-primary mb-2 flex items-center gap-2">
                            <BookOpen className="w-3.5 h-3.5 text-lavender" />
                            Source Books
                          </h4>
                          <div className="flex flex-wrap gap-x-4 gap-y-1">
                            {selectedModule.books.slice(0, 6).map((book) => (
                              <p key={book} className="text-[10px] text-text-muted">
                                • {book}
                              </p>
                            ))}
                          </div>
                        </div>

                        {/* Revise this Module */}
                        {moduleHasFlashcards && (
                          <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            onClick={() => {
                              const completedIds = selectedModule.pathway!
                                .flatMap((l) => l.lessons)
                                .filter((l) => isLessonCompleted(l.id))
                                .map((l) => l.id);
                              setReviseOverlay({
                                lessonIds: completedIds,
                                label: selectedModule.title,
                                color: selectedModule.color,
                              });
                            }}
                            className="w-full flex items-center gap-3 p-4 rounded-xl border border-lavender/30 bg-lavender/10 hover:bg-lavender/20 transition-all group mt-4"
                          >
                            <Brain className="w-5 h-5 text-lavender" />
                            <div className="text-left flex-1">
                              <p className="text-sm font-semibold text-lavender">Revise this Module</p>
                              <p className="text-xs text-text-muted">Review flashcards & earn bonus XP</p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-lavender/60 group-hover:text-lavender" />
                          </motion.button>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Selected Level - Lessons View (when level is selected) */}
                  {showDetailsHere && selectedModule && selectedLevel && (
                    <motion.div
                      ref={levelDetailRef}
                      key={`level-${selectedLevel.id}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative rounded-3xl border border-golden/20 overflow-hidden mb-6 scroll-mt-20"
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

                              const flashcardCount = lessonFlashcardCounts.get(lesson.id) || 0;

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
                                  hasFlashcards={completed && flashcardCount > 0}
                                  onRevise={completed && flashcardCount > 0 ? () => {
                                    setReviseOverlay({
                                      lessonIds: [lesson.id],
                                      label: lesson.title,
                                      color: selectedModule?.color,
                                    });
                                  } : undefined}
                                />
                              );
                            })}
                          </div>
                        </div>

                        {/* Revise this Level */}
                        {levelFlashcardCount > 0 && (
                          <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            onClick={() => {
                              const completedLessonIds = selectedLevel.lessons
                                .filter((l) => isLessonCompleted(l.id))
                                .map((l) => l.id);
                              const levelIndex = pathwayLevels.findIndex((l) => l.id === selectedLevel.id);
                              setReviseOverlay({
                                lessonIds: completedLessonIds,
                                label: `Level ${levelIndex + 1}: ${selectedLevel.title}`,
                                color: selectedModule?.color,
                              });
                            }}
                            className="w-full flex items-center gap-3 p-4 rounded-xl border border-lavender/30 bg-lavender/10 hover:bg-lavender/20 transition-all group mt-4"
                          >
                            <Brain className="w-5 h-5 text-lavender" />
                            <div className="text-left flex-1">
                              <p className="text-sm font-semibold text-lavender">Revise this Level</p>
                              <p className="text-xs text-text-muted">{levelFlashcardCount} flashcards — earn bonus XP</p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-lavender/60 group-hover:text-lavender" />
                          </motion.button>
                        )}

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
              </div>
            );
          })}
        </div>

        {/* Empty State - No Module Selected */}
        {!selectedModule && !selectedComingSoonModule && (
          <GlassCard className="text-center py-8">
            <Sparkles className="w-10 h-10 mx-auto text-lavender mb-3" />
            <h3 className="text-base font-semibold text-text-primary mb-1">
              Click any module to explore
            </h3>
            <p className="text-xs text-text-muted max-w-sm mx-auto">
              {modules.filter(m => m.isAvailable).length} available modules • {modules.filter(m => !m.isAvailable).length} coming soon
            </p>
          </GlassCard>
        )}

        {/* Completed Modules Section */}
        {completedModulesData.length > 0 && !activeCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 mb-6"
          >
            <div className="flex items-center gap-3 mb-3 px-1">
              <CheckCircle2 className="w-5 h-5 text-sage" />
              <h2 className="text-base font-semibold text-sage">Completed</h2>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-sage/15 text-sage">
                {completedModulesData.length} {completedModulesData.length === 1 ? 'module' : 'modules'}
              </span>
            </div>
            <div className="flex gap-2.5 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide snap-x snap-mandatory">
              {completedModulesData.map(({ module: mod, totalLessons }) => (
                <div
                  key={mod.id}
                  className="flex-shrink-0 w-48 snap-start text-left rounded-2xl border border-sage/15 bg-sage/[0.03] overflow-hidden"
                >
                  <button
                    onClick={() => {
                      setSelectedModuleId(mod.id);
                      setSelectedComingSoonModuleId(null);
                      setSelectedLevelId(null);
                    }}
                    className="w-full text-left hover:bg-sage/[0.07] transition-all group"
                  >
                    <div className="flex items-center gap-3 p-3 pb-2">
                      <img
                        src={getModuleImage(mod.id)}
                        alt={mod.title}
                        className="w-10 h-10 rounded-lg object-cover border border-sage/20 flex-shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold text-text-primary group-hover:text-sage transition-colors truncate">
                          {mod.title}
                        </p>
                        <div className="flex items-center gap-1.5 mt-1">
                          <CheckCircle2 className="w-3 h-3 text-sage flex-shrink-0" />
                          <span className="text-[10px] text-sage">{totalLessons} lessons</span>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate('/review');
                    }}
                    className="w-full flex items-center justify-center gap-1.5 px-3 py-1.5 text-[10px] font-medium text-amber bg-amber/10 hover:bg-amber/20 transition-colors border-t border-sage/10"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Review Flashcards
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
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

      {/* Quick Revise Overlay */}
      {reviseOverlay && (
        <QuickReviseOverlay
          lessonIds={reviseOverlay.lessonIds}
          reviseLabel={reviseOverlay.label}
          moduleColor={reviseOverlay.color}
          onClose={() => setReviseOverlay(null)}
        />
      )}
    </>
  );
}

export default LearningPathway;
