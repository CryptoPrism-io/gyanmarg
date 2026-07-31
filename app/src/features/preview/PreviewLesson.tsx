import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Check, X } from 'lucide-react';
import { PolymindLogo } from '@/components/brand';
import { RichMarkdown } from '@/components/molecules';
import { modules } from '@/data/modules';
import { getModuleImage } from '@/lib/moduleImages';
import type { PathwayLesson } from '@/types';

// Find a lesson by moduleId + lessonId across all pathway levels
function findLesson(moduleId: string, lessonId: string): { lesson: PathwayLesson; levelTitle: string } | null {
  const mod = modules.find((m) => m.id === moduleId);
  if (!mod?.pathway) return null;
  for (const level of mod.pathway) {
    const lesson = level.lessons.find((l) => l.id === lessonId);
    if (lesson) return { lesson, levelTitle: level.title };
  }
  return null;
}

export function PreviewLesson() {
  const { moduleId, lessonId } = useParams<{ moduleId: string; lessonId: string }>();
  const navigate = useNavigate();
  const found = moduleId && lessonId ? findLesson(moduleId, lessonId) : null;
  const [selectedQuiz, setSelectedQuiz] = useState<number | null>(null);

  const mod = moduleId ? modules.find((m) => m.id === moduleId) : null;
  const moduleImage = moduleId ? getModuleImage(moduleId) : null;

  if (!found || !mod) {
    return (
      <div className="min-h-screen bg-base text-white flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p className="text-6xl mb-4">📖</p>
          <h1 className="text-2xl font-serif mb-2">This excerpt isn't in the archive</h1>
          <p className="text-gray-400 text-sm mb-8">The lesson you're looking for may have been moved or is coming soon.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-400 text-black text-sm font-semibold rounded-xl"
          >
            Return to Polymind
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  const { lesson, levelTitle } = found;
  const quiz = lesson.content.quiz;
  const quizAnswered = selectedQuiz !== null;

  return (
    <div className="min-h-screen bg-base text-white relative">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-nav border-b border-white/5">
        <div className="max-w-3xl mx-auto px-5 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <PolymindLogo size="xs" variant="simple" />
            <span className="polymind-brand-text font-display text-sm font-bold tracking-wider">POLYMIND</span>
          </Link>
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium">
            Sample Reading
          </span>
        </div>
      </header>

      {/* Hero */}
      <div className="relative">
        {moduleImage && (
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img src={moduleImage} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-base via-base/70 to-base" />
          </div>
        )}
        <div className="relative max-w-3xl mx-auto px-5 pt-14 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400 font-semibold">
              {mod.title} · {levelTitle}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-serif leading-[1.1] tracking-tight mb-6"
          >
            {lesson.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="flex items-center gap-4 text-sm text-gray-400"
          >
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-amber-500/70" />
              {lesson.duration} min read
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span className="capitalize">{lesson.type}</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span className="text-amber-500/90">+{lesson.xpReward} XP</span>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-5 pb-24">
        {/* Overview — pull quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-gray-200 font-serif italic leading-relaxed border-l-2 border-amber-500/60 pl-5 my-8"
        >
          {lesson.content.overview}
        </motion.blockquote>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <RichMarkdown content={lesson.content.mainContent} />
        </motion.div>

        {/* Key Takeaway */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10 rounded-2xl bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 p-6"
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-amber-400 font-bold mb-3">
            Key Takeaway
          </p>
          <p className="text-gray-200 leading-relaxed">{lesson.content.keyTakeaway}</p>
        </motion.div>

        {/* Action Item */}
        {lesson.content.actionItem && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-6 rounded-2xl border border-sage/20 bg-sage/[0.05] p-6"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-sage font-bold mb-3">
              Try It Today
            </p>
            <p className="text-gray-300 leading-relaxed">{lesson.content.actionItem}</p>
          </motion.div>
        )}

        {/* Quiz */}
        {quiz && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 rounded-2xl bg-elevated border border-white/10 p-6"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-lavender font-bold mb-4">
              Test Your Understanding
            </p>
            <p className="text-gray-200 font-medium mb-4">{quiz.question}</p>
            <div className="space-y-2">
              {quiz.options.map((option, i) => {
                const isCorrect = i === quiz.correct;
                const isSelected = selectedQuiz === i;
                let ring = 'border-white/10 hover:border-amber-500/40';
                let textColor = 'text-gray-200';
                if (quizAnswered) {
                  if (isCorrect) { ring = 'border-sage/60 bg-sage/10'; textColor = 'text-sage'; }
                  else if (isSelected) { ring = 'border-coral/60 bg-coral/10'; textColor = 'text-coral'; }
                  else { ring = 'border-white/5 opacity-50'; }
                }
                return (
                  <button
                    key={i}
                    disabled={quizAnswered}
                    onClick={() => setSelectedQuiz(i)}
                    className={`w-full text-left px-4 py-3 rounded-xl border transition-all flex items-center gap-3 ${ring} disabled:cursor-default`}
                  >
                    <span className="text-sm font-bold text-amber-500/70 w-5">{String.fromCharCode(65 + i)}</span>
                    <span className={`text-sm flex-1 ${textColor}`}>{option}</span>
                    {quizAnswered && isCorrect && <Check size={16} className="text-sage" />}
                    {quizAnswered && isSelected && !isCorrect && <X size={16} className="text-coral" />}
                  </button>
                );
              })}
            </div>
            {quizAnswered && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-sm text-gray-300 leading-relaxed"
              >
                {quiz.explanation}
              </motion.p>
            )}
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-14 rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-elevated to-elevated p-8 text-center"
        >
          <p className="text-2xl font-serif mb-2">This was just one page.</p>
          <p className="text-gray-400 text-sm mb-6">
            {mod.title} has dozens more lessons. And that's just one of 76 worlds in the library.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate('/dashboard')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-black font-semibold rounded-xl hover:opacity-90 transition"
            >
              Continue Reading — Free
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => navigate(`/pathway/${mod.id}`)}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 text-gray-200 font-semibold rounded-xl hover:border-amber-500/40 hover:text-amber-400 transition"
            >
              Browse {mod.title}
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-4">No credit card required · Works on any device</p>
        </motion.div>
      </main>
    </div>
  );
}

export default PreviewLesson;
