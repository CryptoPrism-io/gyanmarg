import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronDown, ChevronUp, Lock, CheckCircle, Play, BookOpen, HelpCircle, Lightbulb } from 'lucide-react';
import { getModuleById } from '@/data/modules';
import { useProgressStore } from '@/store/progressStore';
import type { PathwayLesson, PathwayLevel } from '@/types';

const lessonTypeIcons = {
  intro: BookOpen,
  concept: Lightbulb,
  reflection: HelpCircle,
  quiz: HelpCircle,
};

export default function ModulePage() {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  const { pathwayProgress, completeLesson } = useProgressStore();
  const completedLessons = pathwayProgress?.completedLessons ?? [];

  const module = getModuleById(moduleId || '');
  const [expandedLevel, setExpandedLevel] = useState<string | null>(null);
  const [activeLesson, setActiveLesson] = useState<PathwayLesson | null>(null);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [showQuizResult, setShowQuizResult] = useState(false);

  if (!module || !module.pathway) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Module not found</h2>
          <button
            onClick={() => navigate('/modules')}
            className="text-accent hover:underline"
          >
            Return to modules
          </button>
        </div>
      </div>
    );
  }

  const pathway = module.pathway;

  const isLevelUnlocked = (level: PathwayLevel): boolean => {
    const completedCount = completedLessons.filter(id =>
      pathway.some(l => l.lessons.some(lesson => lesson.id === id))
    ).length;
    return completedCount >= level.unlockRequirement;
  };

  const isLessonCompleted = (lessonId: string): boolean => {
    return completedLessons.includes(lessonId);
  };

  const getLevelProgress = (level: PathwayLevel): number => {
    const completed = level.lessons.filter(l => isLessonCompleted(l.id)).length;
    return Math.round((completed / level.lessons.length) * 100);
  };

  const handleCompleteLesson = () => {
    if (activeLesson) {
      completeLesson(activeLesson.id, activeLesson.xpReward);
      setActiveLesson(null);
      setQuizAnswer(null);
      setShowQuizResult(false);
    }
  };

  const handleQuizSubmit = () => {
    setShowQuizResult(true);
  };

  // Color mapping
  const colorMap: Record<string, string> = {
    blue: 'from-blue-500 to-blue-600',
    emerald: 'from-emerald-500 to-emerald-600',
    purple: 'from-purple-500 to-purple-600',
    amber: 'from-amber-500 to-amber-600',
    cyan: 'from-cyan-500 to-cyan-600',
    rose: 'from-rose-500 to-rose-600',
    yellow: 'from-yellow-500 to-yellow-600',
    green: 'from-green-500 to-green-600',
    teal: 'from-teal-500 to-teal-600',
    indigo: 'from-indigo-500 to-indigo-600',
    violet: 'from-violet-500 to-violet-600',
    gold: 'from-yellow-500 to-orange-500',
    orange: 'from-orange-500 to-orange-600',
    pink: 'from-pink-500 to-pink-600',
  };

  return (
    <div className="min-h-screen bg-bg-secondary pb-24">
      {/* Header */}
      <div className={`bg-gradient-to-r ${colorMap[module.color] || 'from-blue-500 to-blue-600'} text-white`}>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <button
            onClick={() => navigate('/modules')}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>All Modules</span>
          </button>

          <div className="flex items-center gap-4">
            <div className="text-4xl">{pathway[0]?.icon || '📚'}</div>
            <div>
              <p className="text-white/80 text-sm">Module {module.number}</p>
              <h1 className="text-2xl font-bold">{module.title}</h1>
              <p className="text-white/80">{module.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Pathway Levels */}
        <div className="space-y-4">
          {pathway.map((level) => {
            const isUnlocked = isLevelUnlocked(level);
            const progress = getLevelProgress(level);
            const isExpanded = expandedLevel === level.id;

            return (
              <motion.div
                key={level.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card overflow-hidden"
              >
                {/* Level Header */}
                <button
                  onClick={() => isUnlocked && setExpandedLevel(isExpanded ? null : level.id)}
                  disabled={!isUnlocked}
                  className={`w-full p-4 flex items-center justify-between transition-colors ${
                    isUnlocked ? 'hover:bg-bg-secondary cursor-pointer' : 'opacity-60 cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl
                      ${isUnlocked
                        ? `bg-gradient-to-br ${colorMap[level.color] || 'from-gray-500 to-gray-600'}`
                        : 'bg-gray-300 dark:bg-gray-700'}`}
                    >
                      {isUnlocked ? level.icon : <Lock size={20} className="text-gray-500" />}
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold">{level.title}</h3>
                      <p className="text-sm text-muted">{level.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {isUnlocked && (
                      <>
                        <div className="text-right">
                          <p className="text-sm font-medium">{progress}%</p>
                          <p className="text-xs text-muted">Complete</p>
                        </div>
                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </>
                    )}
                  </div>
                </button>

                {/* Progress Bar */}
                {isUnlocked && (
                  <div className="px-4 pb-2">
                    <div className="h-1 bg-bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        className={`h-full bg-gradient-to-r ${colorMap[level.color] || 'from-gray-500 to-gray-600'}`}
                      />
                    </div>
                  </div>
                )}

                {/* Lessons List */}
                <AnimatePresence>
                  {isExpanded && isUnlocked && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-border"
                    >
                      <div className="p-4 space-y-2">
                        {level.lessons.map((lesson, idx) => {
                          const LessonIcon = lessonTypeIcons[lesson.type] || BookOpen;
                          const completed = isLessonCompleted(lesson.id);

                          return (
                            <button
                              key={lesson.id}
                              onClick={() => setActiveLesson(lesson)}
                              className={`w-full p-3 rounded-lg flex items-center justify-between transition-colors
                                ${completed
                                  ? 'bg-success/10 border border-success/20'
                                  : 'bg-bg-secondary hover:bg-bg-elevated'}`}
                            >
                              <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center
                                  ${completed ? 'bg-success text-white' : 'bg-bg-elevated'}`}
                                >
                                  {completed ? <CheckCircle size={16} /> : <LessonIcon size={16} />}
                                </div>
                                <div className="text-left">
                                  <p className="font-medium text-sm">{lesson.title}</p>
                                  <p className="text-xs text-muted">
                                    {lesson.duration} min • {lesson.xpReward} XP
                                  </p>
                                </div>
                              </div>
                              <Play size={16} className="text-muted" />
                            </button>
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
      </div>

      {/* Lesson Modal */}
      <AnimatePresence>
        {activeLesson && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveLesson(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-bg-primary rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Lesson Header */}
              <div className={`p-6 bg-gradient-to-r ${colorMap[module.color] || 'from-blue-500 to-blue-600'} text-white rounded-t-2xl`}>
                <p className="text-white/80 text-sm mb-1">{activeLesson.type.toUpperCase()}</p>
                <h2 className="text-xl font-bold">{activeLesson.title}</h2>
                <p className="text-white/80 text-sm mt-2">
                  {activeLesson.duration} min read • {activeLesson.xpReward} XP
                </p>
              </div>

              {/* Lesson Content */}
              <div className="p-6 space-y-6">
                {/* Overview */}
                <div className="bg-accent/10 rounded-xl p-4">
                  <p className="text-accent font-medium">{activeLesson.content.overview}</p>
                </div>

                {/* Main Content */}
                <div className="prose prose-sm max-w-none dark:prose-invert">
                  {activeLesson.content.mainContent.split('\n\n').map((paragraph, idx) => {
                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      return (
                        <h3 key={idx} className="text-lg font-semibold mt-6 mb-3">
                          {paragraph.replace(/\*\*/g, '')}
                        </h3>
                      );
                    }
                    if (paragraph.startsWith('```')) {
                      const code = paragraph.replace(/```\w*\n?/g, '');
                      return (
                        <pre key={idx} className="bg-bg-secondary rounded-lg p-4 overflow-x-auto text-sm">
                          <code>{code}</code>
                        </pre>
                      );
                    }
                    return (
                      <p key={idx} className="text-secondary leading-relaxed whitespace-pre-wrap">
                        {paragraph.split('**').map((part, i) =>
                          i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                        )}
                      </p>
                    );
                  })}
                </div>

                {/* Key Takeaway */}
                <div className="bg-success/10 border border-success/20 rounded-xl p-4">
                  <p className="text-sm font-semibold text-success mb-1">Key Takeaway</p>
                  <p className="text-secondary">{activeLesson.content.keyTakeaway}</p>
                </div>

                {/* Action Item */}
                {activeLesson.content.actionItem && (
                  <div className="bg-warning/10 border border-warning/20 rounded-xl p-4">
                    <p className="text-sm font-semibold text-warning mb-1">Action Item</p>
                    <p className="text-secondary">{activeLesson.content.actionItem}</p>
                  </div>
                )}

                {/* Quiz */}
                {activeLesson.content.quiz && (
                  <div className="bg-bg-secondary rounded-xl p-4">
                    <p className="font-semibold mb-4">{activeLesson.content.quiz.question}</p>
                    <div className="space-y-2">
                      {activeLesson.content.quiz.options.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => !showQuizResult && setQuizAnswer(idx)}
                          disabled={showQuizResult}
                          className={`w-full p-3 rounded-lg text-left transition-all ${
                            showQuizResult
                              ? idx === activeLesson.content.quiz!.correct
                                ? 'bg-success/20 border-2 border-success'
                                : idx === quizAnswer
                                  ? 'bg-error/20 border-2 border-error'
                                  : 'bg-bg-elevated'
                              : quizAnswer === idx
                                ? 'bg-accent/20 border-2 border-accent'
                                : 'bg-bg-elevated hover:bg-bg-primary'
                          }`}
                        >
                          <span className="font-medium mr-2">{String.fromCharCode(65 + idx)}.</span>
                          {option}
                        </button>
                      ))}
                    </div>

                    {!showQuizResult && quizAnswer !== null && (
                      <button
                        onClick={handleQuizSubmit}
                        className="btn-primary w-full mt-4"
                      >
                        Check Answer
                      </button>
                    )}

                    {showQuizResult && (
                      <div className={`mt-4 p-3 rounded-lg ${
                        quizAnswer === activeLesson.content.quiz.correct
                          ? 'bg-success/20'
                          : 'bg-error/20'
                      }`}>
                        <p className="font-medium mb-1">
                          {quizAnswer === activeLesson.content.quiz.correct ? '✓ Correct!' : '✗ Not quite'}
                        </p>
                        <p className="text-sm text-secondary">
                          {activeLesson.content.quiz.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Complete Button */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setActiveLesson(null)}
                    className="btn-secondary flex-1"
                  >
                    Close
                  </button>
                  {!isLessonCompleted(activeLesson.id) && (
                    <button
                      onClick={handleCompleteLesson}
                      disabled={activeLesson.content.quiz && !showQuizResult}
                      className="btn-primary flex-1 disabled:opacity-50"
                    >
                      Complete (+{activeLesson.xpReward} XP)
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
