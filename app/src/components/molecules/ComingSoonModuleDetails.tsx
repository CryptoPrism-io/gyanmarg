import { motion } from 'framer-motion';
import { Clock, BookOpen, Zap, Sparkles, Bell } from 'lucide-react';
import type { ModuleConfig } from '@/data/modules';
import { getModuleImage } from '@/lib/moduleImages';

interface ComingSoonModuleDetailsProps {
  module: ModuleConfig;
}

export function ComingSoonModuleDetails({ module }: ComingSoonModuleDetailsProps) {
  // Generate placeholder levels for Coming Soon modules
  const placeholderLevels = [
    { id: 1, title: 'Foundations', lessons: 15, xp: 1500 },
    { id: 2, title: 'Core Concepts', lessons: 20, xp: 2000 },
    { id: 3, title: 'Advanced Topics', lessons: 15, xp: 1500 },
    { id: 4, title: 'Mastery & Integration', lessons: 10, xp: 1000 },
  ];

  const totalLessons = placeholderLevels.reduce((sum, l) => sum + l.lessons, 0);
  const totalXP = placeholderLevels.reduce((sum, l) => sum + l.xp, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="relative z-10 p-4 md:p-6 scroll-mt-24"
    >
      {/* Module Header */}
      <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
        <div className="relative">
          <img
            src={getModuleImage(module.id)}
            alt={module.title}
            className="w-16 h-16 md:w-24 md:h-24 rounded-2xl object-cover border-2 border-amber-500/30 flex-shrink-0 shadow-lg grayscale-[30%]"
          />
          {/* Coming Soon Badge */}
          <div className="absolute -top-2 -right-2 flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-500/30">
            <Clock className="w-3 h-3 text-amber-400" />
            <span className="text-[9px] font-semibold text-amber-400 uppercase tracking-wide">
              Coming Soon
            </span>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-1">
            {module.title}
          </h2>
          <p className="text-sm text-text-muted mb-3 line-clamp-2">
            {module.description}
          </p>
          <div className="flex items-center gap-4 text-xs text-text-muted">
            <span>{placeholderLevels.length} levels</span>
            <span className="text-amber-400">{totalLessons} lessons</span>
            <span className="text-golden">{totalXP} XP</span>
          </div>
        </div>

        <div className="text-right md:ml-4">
          <div className="text-2xl md:text-3xl font-bold text-amber-400">
            <Sparkles className="w-8 h-8" />
          </div>
          <div className="text-xs text-text-muted">In Development</div>
        </div>
      </div>

      {/* Preview Content */}
      <div className="space-y-6">
        {/* Levels Preview */}
        <div>
          <h3 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
            <span>🎯</span> Preview Levels
          </h3>
          <div className="flex gap-2.5 md:gap-3.5 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide snap-x snap-mandatory">
            {placeholderLevels.map((level) => (
              <div
                key={level.id}
                className="
                  relative overflow-hidden rounded-xl border flex-shrink-0
                  transition-all duration-300 cursor-not-allowed
                  border-white/[0.08] w-[130px] md:w-[160px]
                  opacity-60
                "
              >
                <div className="relative aspect-[4/3] md:aspect-video overflow-hidden bg-gradient-to-br from-amber-900/30 to-black/50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Clock className="w-8 h-8 text-amber-400/50" />
                  </div>
                  <div className="absolute bottom-2 left-2 text-[9px] font-bold tracking-wider text-white/80 bg-black/30 px-2 py-1 rounded backdrop-blur-sm border border-white/10">
                    LEVEL {level.id}
                  </div>
                </div>

                <div className="
                  relative p-2 md:p-2.5
                  bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-black/30
                  backdrop-blur-xl border-t border-white/10
                ">
                  <h4 className="text-[11px] md:text-xs font-semibold mb-1.5 truncate text-white/70">
                    {level.title}
                  </h4>
                  <div className="flex items-center gap-2 text-[9px] md:text-[10px] text-white/50">
                    <span>{level.lessons} lessons</span>
                    <span className="text-amber-400/70 font-semibold">{level.xp} XP</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & Books Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Skills */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <h4 className="text-xs font-semibold text-text-primary mb-3 flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              Skills You'll Learn
            </h4>
            <div className="flex flex-wrap gap-2">
              {module.skills.slice(0, 4).map((skill) => (
                <span
                  key={skill}
                  className="text-[10px] px-2 py-1 rounded-full bg-amber-500/10 text-amber-400/80 border border-amber-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Books */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <h4 className="text-xs font-semibold text-text-primary mb-3 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              Source Books
            </h4>
            <div className="space-y-1">
              {module.books.slice(0, 3).map((book) => (
                <p key={book} className="text-[11px] text-text-muted truncate">
                  • {book}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Notify Me Section */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
              <Bell className="w-5 h-5 text-amber-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-text-primary mb-0.5">
                Get Notified When Available
              </h4>
              <p className="text-xs text-text-muted">
                This module is currently in development. Check back soon!
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ComingSoonModuleDetails;
