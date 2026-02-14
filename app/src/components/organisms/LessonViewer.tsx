import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { TinderCardStack } from '@/components/organisms/TinderCardStack';
import type { PathwayLesson } from '@/types';

interface NextLessonInfo {
  lesson: PathwayLesson;
  levelTitle: string;
}

interface LessonViewerProps {
  lesson: PathwayLesson;
  onComplete: () => void;
  onClose: () => void;
  isComplete: boolean;
  moduleColor?: string;
  moduleId?: string;
  lessonNumber?: number;
  totalLessons?: number;
  currentStreak?: number;
  showSectionTabs?: boolean;
  initialSection?: 'overview' | 'content' | 'quiz' | 'takeaways';
  moduleName?: string;
  levelName?: string;
  nextLesson?: NextLessonInfo | null;
  onNextLesson?: (lesson: PathwayLesson) => void;
  backgroundImage?: string;
  flashcardCount?: number;
}

export function LessonViewer({
  lesson,
  onComplete,
  onClose,
  isComplete,
  moduleColor = 'orange',
  moduleId,
  moduleName,
  levelName,
  nextLesson,
  onNextLesson,
  flashcardCount,
  backgroundImage,
}: LessonViewerProps) {

  const content = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-base z-[9999] flex flex-col"
    >
      {/* Header — close + breadcrumb + title only */}
      <div className="relative z-10 flex-shrink-0 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-4">
          <button
            onClick={onClose}
            className="w-12 h-12 rounded-xl bg-surface/50 hover:bg-surface flex items-center justify-center transition-colors shrink-0"
            aria-label="Close lesson viewer"
          >
            <X className="w-6 h-6 text-text-muted" />
          </button>
          <div className="min-w-0">
            {moduleName && levelName && (
              <p className="text-xs text-text-muted mb-0.5 truncate">
                {moduleName} → {levelName}
              </p>
            )}
            <h1 className="text-lg font-display font-bold text-text-primary line-clamp-1">
              {lesson.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Area - Tinder Card Stack */}
      <div className="relative z-10 flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4">
          <TinderCardStack
            key={lesson.id}
            lesson={lesson}
            onComplete={onComplete}
            isComplete={isComplete}
            moduleColor={moduleColor}
            moduleId={moduleId}
            nextLesson={nextLesson}
            onNextLesson={onNextLesson}
            flashcardCount={flashcardCount}
            heroImage={backgroundImage}
          />
        </div>
      </div>
    </motion.div>
  );

  return createPortal(content, document.body);
}

export default LessonViewer;
