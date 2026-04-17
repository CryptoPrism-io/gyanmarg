import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, BookMarked, ChevronRight } from 'lucide-react';
import { getModuleMetaById } from '@/data/modules-meta';
import type { LessonBookmark } from '@/types';

interface ResumeCardProps {
  bookmark: LessonBookmark | null;
}

/**
 * Resume Card — Shows where user left off
 * Reduces friction by providing one-click return to in-progress lesson
 */
export function ResumeCard({ bookmark }: ResumeCardProps) {
  const navigate = useNavigate();

  // Calculate time since last view
  const timeSinceLastView = useMemo(() => {
    if (!bookmark) return '';
    const lastTime = new Date(bookmark.timestamp);
    const now = new Date();
    const diffMs = now.getTime() - lastTime.getTime();
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins < 1) return 'just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}d ago`;
  }, [bookmark]);

  // Get module info from lightweight meta (no pathway data needed)
  const moduleData = useMemo(() => {
    if (!bookmark) return null;
    const meta = getModuleMetaById(bookmark.moduleId);
    if (!meta) return null;

    return {
      moduleTitle: meta.title,
      levelTitle: '',
      lessonTitle: meta.subtitle,
      scrollPercent: bookmark.scrollPosition,
    };
  }, [bookmark]);

  if (!bookmark || !moduleData) return null;

  const handleResume = () => {
    navigate(`/pathway/${bookmark.moduleId}`, {
      state: { resumeLesson: bookmark.lessonId, scrollTo: bookmark.scrollPosition },
    });
  };

  return (
    <motion.button
      onClick={handleResume}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="w-full group"
    >
      {/* Gradient Background */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-lavender/15 via-purple-500/10 to-indigo-500/10 border border-lavender/20 hover:border-lavender/40 transition-all duration-300 p-4 sm:p-5 shadow-lg hover:shadow-xl hover:shadow-lavender/10">
        {/* Animated background glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-lavender/20 to-transparent blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="relative">
          {/* Header Row */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-start gap-3 flex-1">
              <div className="w-10 h-10 rounded-lg bg-lavender/20 border border-lavender/30 flex items-center justify-center shrink-0 mt-0.5">
                <BookMarked className="w-5 h-5 text-lavender" />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-lavender/70 uppercase tracking-wider">
                  Continue Learning
                </p>
                <h3 className="text-sm sm:text-base font-bold text-text-primary mt-0.5 line-clamp-1">
                  {moduleData.lessonTitle}
                </h3>
                <p className="text-[11px] text-text-muted mt-1">
                  {moduleData.moduleTitle} · {moduleData.levelTitle}
                </p>
              </div>
            </div>

            {/* Time Badge */}
            <div className="flex items-center gap-1 text-[10px] text-text-muted bg-white/5 px-2.5 py-1 rounded-full shrink-0 ml-2">
              <Clock className="w-3 h-3" />
              <span>{timeSinceLastView}</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-3">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] text-text-muted font-medium">
                Progress
              </span>
              <span className="text-[11px] text-lavender font-semibold">
                {Math.round(moduleData.scrollPercent)}%
              </span>
            </div>
            <div className="w-full h-2 bg-white/[0.06] rounded-full overflow-hidden border border-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-lavender to-purple-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${moduleData.scrollPercent}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between">
            <p className="text-[11px] text-text-muted">
              Pick up where you left off
            </p>
            <div className="flex items-center gap-1.5 text-lavender font-semibold text-xs bg-lavender/10 px-3 py-1.5 rounded-lg group-hover:bg-lavender/20 transition-all">
              <span>Resume</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </motion.button>
  );
}
