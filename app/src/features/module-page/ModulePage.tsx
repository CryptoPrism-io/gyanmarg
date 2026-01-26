import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronDown, ChevronUp, Lock, CheckCircle, Play, BookOpen, HelpCircle, Lightbulb, Star, Sparkles } from 'lucide-react';
import { getModuleById } from '@/data/modules';
import { useProgressStore } from '@/store/progressStore';
import { GlassCard } from '@/components/molecules';
import { Button, Badge, ProgressBar } from '@/components/atoms';
import type { PathwayLesson, PathwayLevel } from '@/types';

const lessonTypeIcons = {
  intro: BookOpen,
  concept: Lightbulb,
  reflection: HelpCircle,
  quiz: HelpCircle,
};

const colorMap: Record<string, { gradient: string; bg: string; border: string; text: string }> = {
  blue: { gradient: 'from-sky to-lavender', bg: 'bg-sky/10', border: 'border-sky/30', text: 'text-sky' },
  emerald: { gradient: 'from-sage to-sage-light', bg: 'bg-sage/10', border: 'border-sage/30', text: 'text-sage' },
  purple: { gradient: 'from-lavender to-lavender-light', bg: 'bg-lavender/10', border: 'border-lavender/30', text: 'text-lavender' },
  amber: { gradient: 'from-golden to-sunrise', bg: 'bg-golden/10', border: 'border-golden/30', text: 'text-golden' },
  cyan: { gradient: 'from-sky to-sage', bg: 'bg-sky/10', border: 'border-sky/30', text: 'text-sky' },
  rose: { gradient: 'from-coral to-blush', bg: 'bg-coral/10', border: 'border-coral/30', text: 'text-coral' },
  yellow: { gradient: 'from-golden to-sunrise', bg: 'bg-golden/10', border: 'border-golden/30', text: 'text-golden' },
  green: { gradient: 'from-sage to-golden', bg: 'bg-sage/10', border: 'border-sage/30', text: 'text-sage' },
  teal: { gradient: 'from-sage to-sky', bg: 'bg-sage/10', border: 'border-sage/30', text: 'text-sage' },
  indigo: { gradient: 'from-lavender to-sky', bg: 'bg-lavender/10', border: 'border-lavender/30', text: 'text-lavender' },
  violet: { gradient: 'from-lavender to-lavender-light', bg: 'bg-lavender/10', border: 'border-lavender/30', text: 'text-lavender' },
  gold: { gradient: 'from-golden to-sunrise', bg: 'bg-golden/10', border: 'border-golden/30', text: 'text-golden' },
  orange: { gradient: 'from-sunrise to-golden', bg: 'bg-sunrise/10', border: 'border-sunrise/30', text: 'text-sunrise' },
  pink: { gradient: 'from-coral to-blush', bg: 'bg-coral/10', border: 'border-coral/30', text: 'text-coral' },
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
      <div className="min-h-screen bg-base flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-4 bg-coral/10 border border-coral/20 rounded-2xl flex items-center justify-center">
            <HelpCircle className="w-10 h-10 text-coral" />
          </div>
          <h2 className="text-xl font-display font-semibold text-text-primary mb-2">Module not found</h2>
          <Button variant="primary" onClick={() => navigate('/modules')}>
            Return to modules
          </Button>
        </div>
      </div>
    );
  }

  const pathway = module.pathway;
  const colors = colorMap[module.color] || colorMap.orange;

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

  return (
    <div className="min-h-screen bg-base pb-24">
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-glow-top opacity-50" />
      </div>

      {/* Header */}
      <div className={`relative bg-gradient-to-r ${colors.gradient}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:24px_24px]" />
        <div className="relative max-w-4xl mx-auto px-4 py-8">
          <button
            onClick={() => navigate('/modules')}
            className="flex items-center gap-2 text-base/80 hover:text-base mb-4 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>All Modules</span>
          </button>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-base/20 backdrop-blur-sm flex items-center justify-center text-3xl">
              {pathway[0]?.icon || '📚'}
            </div>
            <div>
              <p className="text-base/80 text-sm font-medium">Module {module.number}</p>
              <h1 className="text-2xl font-display font-bold text-base">{module.title}</h1>
              <p className="text-base/80">{module.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 py-8">
        {/* Pathway Levels */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {pathway.map((level, index) => {
            const isUnlocked = isLevelUnlocked(level);
            const progress = getLevelProgress(level);
            const isExpanded = expandedLevel === level.id;
            const levelColors = colorMap[level.color] || colors;

            return (
              <motion.div
                key={level.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`glass rounded-2xl overflow-hidden border ${
                  isUnlocked ? 'border-white/10' : 'border-white/5 opacity-60'
                }`}
              >
                {/* Level Header */}
                <button
                  onClick={() => isUnlocked && setExpandedLevel(isExpanded ? null : level.id)}
                  disabled={!isUnlocked}
                  className={`w-full p-4 flex items-center justify-between transition-colors ${
                    isUnlocked ? 'hover:bg-white/[0.02]' : 'cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                      isUnlocked
                        ? `bg-gradient-to-br ${levelColors.gradient}`
                        : 'bg-surface/50'
                    }`}>
                      {isUnlocked ? level.icon : <Lock size={20} className="text-text-muted" />}
                    </div>
                    <div className="text-left">
                      <h3 className={`font-display font-semibold ${isUnlocked ? 'text-text-primary' : 'text-text-muted'}`}>
                        {level.title}
                      </h3>
                      <p className={`text-sm ${isUnlocked ? 'text-text-secondary' : 'text-text-muted'}`}>
                        {level.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {isUnlocked && (
                      <>
                        <div className="text-right">
                          <p className="text-sm font-display font-semibold text-text-primary">{progress}%</p>
                          <p className="text-xs text-text-muted">Complete</p>
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {isExpanded ? <ChevronUp size={20} className="text-text-muted" /> : <ChevronDown size={20} className="text-text-muted" />}
                        </motion.div>
                      </>
                    )}
                  </div>
                </button>

                {/* Progress Bar */}
                {isUnlocked && (
                  <div className="px-4 pb-2">
                    <div className="h-1.5 bg-surface rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        className={`h-full bg-gradient-to-r ${levelColors.gradient}`}
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
                      className="border-t border-white/[0.06]"
                    >
                      <div className="p-4 space-y-2">
                        {level.lessons.map((lesson, idx) => {
                          const LessonIcon = lessonTypeIcons[lesson.type] || BookOpen;
                          const completed = isLessonCompleted(lesson.id);

                          return (
                            <motion.button
                              key={lesson.id}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              onClick={() => setActiveLesson(lesson)}
                              className={`w-full p-3 rounded-xl flex items-center justify-between transition-all ${
                                completed
                                  ? 'bg-sage/10 border border-sage/30'
                                  : 'glass-light border border-white/10 hover:border-white/20'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                                  completed ? 'bg-sage text-base' : 'bg-surface/50 text-text-muted'
                                }`}>
                                  {completed ? <CheckCircle size={18} /> : <LessonIcon size={18} />}
                                </div>
                                <div className="text-left">
                                  <p className={`font-medium text-sm ${completed ? 'text-sage' : 'text-text-primary'}`}>
                                    {lesson.title}
                                  </p>
                                  <p className="text-xs text-text-muted">
                                    {lesson.duration} min • {lesson.xpReward} XP
                                  </p>
                                </div>
                              </div>
                              <Play size={16} className="text-text-muted" />
                            </motion.button>
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
      </div>

      {/* Lesson Modal */}
      <AnimatePresence>
        {activeLesson && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-base/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            onClick={() => setActiveLesson(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-2xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Lesson Header */}
              <div className={`p-6 bg-gradient-to-r ${colors.gradient} rounded-t-2xl`}>
                <Badge variant="outline" size="sm" className="text-base/80 border-base/30 mb-2">
                  {activeLesson.type.toUpperCase()}
                </Badge>
                <h2 className="text-xl font-display font-bold text-base">{activeLesson.title}</h2>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-base/80 text-sm">{activeLesson.duration} min read</span>
                  <span className="flex items-center gap-1 text-base/80 text-sm">
                    <Star className="w-4 h-4" />
                    {activeLesson.xpReward} XP
                  </span>
                </div>
              </div>

              {/* Lesson Content */}
              <div className="p-6 space-y-6">
                {/* Overview */}
                <GlassCard className="border-sunrise/20">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sunrise/10 border border-sunrise/20 flex items-center justify-center shrink-0">
                      <Sparkles className="w-5 h-5 text-sunrise" />
                    </div>
                    <p className="text-sunrise font-medium">{activeLesson.content.overview}</p>
                  </div>
                </GlassCard>

                {/* Main Content */}
                <div className="prose prose-sm max-w-none prose-invert">
                  {activeLesson.content.mainContent.split('\n\n').map((paragraph, idx) => {
                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      return (
                        <h3 key={idx} className="text-lg font-display font-semibold text-text-primary mt-6 mb-3">
                          {paragraph.replace(/\*\*/g, '')}
                        </h3>
                      );
                    }
                    if (paragraph.startsWith('```')) {
                      const code = paragraph.replace(/```\w*\n?/g, '');
                      return (
                        <pre key={idx} className="glass rounded-xl p-4 overflow-x-auto text-sm border border-white/10">
                          <code className="text-text-primary">{code}</code>
                        </pre>
                      );
                    }
                    return (
                      <p key={idx} className="text-text-secondary leading-relaxed whitespace-pre-wrap">
                        {paragraph.split('**').map((part, i) =>
                          i % 2 === 1 ? <strong key={i} className="text-text-primary">{part}</strong> : part
                        )}
                      </p>
                    );
                  })}
                </div>

                {/* Key Takeaway */}
                <GlassCard className="border-sage/20">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sage/10 border border-sage/20 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5 text-sage" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-sage mb-1">Key Takeaway</p>
                      <p className="text-text-secondary">{activeLesson.content.keyTakeaway}</p>
                    </div>
                  </div>
                </GlassCard>

                {/* Action Item */}
                {activeLesson.content.actionItem && (
                  <GlassCard className="border-golden/20">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-golden/10 border border-golden/20 flex items-center justify-center shrink-0">
                        <Lightbulb className="w-5 h-5 text-golden" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-golden mb-1">Action Item</p>
                        <p className="text-text-secondary">{activeLesson.content.actionItem}</p>
                      </div>
                    </div>
                  </GlassCard>
                )}

                {/* Quiz */}
                {activeLesson.content.quiz && (
                  <div className="glass rounded-xl p-5 border border-white/10">
                    <p className="font-display font-semibold text-text-primary mb-4">{activeLesson.content.quiz.question}</p>
                    <div className="space-y-2">
                      {activeLesson.content.quiz.options.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => !showQuizResult && setQuizAnswer(idx)}
                          disabled={showQuizResult}
                          className={`w-full p-3 rounded-xl text-left transition-all border ${
                            showQuizResult
                              ? idx === activeLesson.content.quiz!.correct
                                ? 'bg-sage/20 border-sage/50 text-sage'
                                : idx === quizAnswer
                                  ? 'bg-coral/20 border-coral/50 text-coral'
                                  : 'glass-light border-white/10 text-text-secondary'
                              : quizAnswer === idx
                                ? 'bg-sunrise/20 border-sunrise/50 text-sunrise'
                                : 'glass-light border-white/10 text-text-secondary hover:border-white/20'
                          }`}
                        >
                          <span className="font-medium mr-2">{String.fromCharCode(65 + idx)}.</span>
                          {option}
                        </button>
                      ))}
                    </div>

                    {!showQuizResult && quizAnswer !== null && (
                      <Button variant="primary" fullWidth className="mt-4" onClick={handleQuizSubmit}>
                        Check Answer
                      </Button>
                    )}

                    {showQuizResult && (
                      <div className={`mt-4 p-4 rounded-xl ${
                        quizAnswer === activeLesson.content.quiz.correct
                          ? 'bg-sage/10 border border-sage/30'
                          : 'bg-coral/10 border border-coral/30'
                      }`}>
                        <p className={`font-medium mb-1 ${
                          quizAnswer === activeLesson.content.quiz.correct ? 'text-sage' : 'text-coral'
                        }`}>
                          {quizAnswer === activeLesson.content.quiz.correct ? '✓ Correct!' : '✗ Not quite'}
                        </p>
                        <p className="text-sm text-text-secondary">
                          {activeLesson.content.quiz.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Complete Button */}
                <div className="flex gap-3 pt-4">
                  <Button
                    variant="glass"
                    fullWidth
                    onClick={() => setActiveLesson(null)}
                  >
                    Close
                  </Button>
                  {!isLessonCompleted(activeLesson.id) && (
                    <Button
                      variant="primary"
                      fullWidth
                      onClick={handleCompleteLesson}
                      disabled={activeLesson.content.quiz && !showQuizResult}
                      glow={!activeLesson.content.quiz || showQuizResult}
                    >
                      Complete (+{activeLesson.xpReward} XP)
                    </Button>
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
