import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { Icon } from '@/components/atoms/Icon';
import { ReelsCardStack } from '@/components/organisms/ReelsCardStack';
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
  isLastLessonInLevel?: boolean;
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
  isLastLessonInLevel,
}: LessonViewerProps) {

  const content = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[rgb(var(--bg-base-rgb))] z-[9999] flex flex-col"
    >
      {/* Editorial Header — minimal */}
      <div className="relative z-10 flex-shrink-0 border-b border-[var(--color-border)]">
        <div className="max-w-3xl mx-auto px-6 py-3 flex items-center gap-4">
          <button
            onClick={onClose}
            className="shrink-0 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
            aria-label="Close"
          >
            <Icon name="close" size={20} weight={300} />
          </button>
          <div className="flex-1 min-w-0">
            {moduleName && levelName && (
              <p className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-[0.15em] truncate">
                {moduleName} &rarr; {levelName}
              </p>
            )}
          </div>
          <span className="text-[10px] font-serif italic text-[var(--color-text-muted)] shrink-0">
            {lesson.title}
          </span>
        </div>
      </div>

      {/* Main Content — Reels Vertical Scroll */}
      <div className="relative z-10 flex-1 overflow-hidden">
        <div className="h-full max-w-3xl mx-auto">
          <ReelsCardStack
            key={lesson.id}
            lesson={lesson}
            onComplete={onComplete}
            isComplete={isComplete}
            moduleColor={moduleColor}
            moduleId={moduleId}
            nextLesson={nextLesson}
            onNextLesson={onNextLesson}
            flashcardCount={flashcardCount}
            isLastLessonInLevel={isLastLessonInLevel}
          />
        </div>
      </div>
    </motion.div>
  );

  return createPortal(content, document.body);
}

export default LessonViewer;
