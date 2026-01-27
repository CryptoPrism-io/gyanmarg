import { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  X,
  Clock,
  Sparkles,
  Target,
  Lightbulb,
  CheckCircle2,
  HelpCircle,
  BookOpen,
  Award,
  Flame,
  Brain,
  Zap,
  Eye,
  BookMarked,
  GraduationCap
} from 'lucide-react';
import { Button, Badge } from '@/components/atoms';
import { RichMarkdown } from '@/components/molecules/RichMarkdown';
import type { PathwayLesson } from '@/types';

interface LessonViewerProps {
  lesson: PathwayLesson;
  onComplete: () => void;
  onClose: () => void;
  isComplete: boolean;
  moduleColor?: string;
  lessonNumber?: number;
  totalLessons?: number;
  currentStreak?: number;
}

const colorGradients: Record<string, string> = {
  blue: 'from-sky to-lavender',
  emerald: 'from-sage to-sage-light',
  purple: 'from-lavender to-lavender-light',
  amber: 'from-golden to-sunrise',
  cyan: 'from-sky to-sage',
  rose: 'from-coral to-blush',
  yellow: 'from-golden to-sunrise',
  green: 'from-sage to-golden',
  orange: 'from-sunrise to-golden',
};

export function LessonViewer({
  lesson,
  onComplete,
  onClose,
  isComplete,
  moduleColor = 'orange',
  lessonNumber = 1,
  totalLessons = 10,
  currentStreak = 0,
}: LessonViewerProps) {
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const gradient = colorGradients[moduleColor] || colorGradients.orange;

  // Track reading time
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
        const progress = Math.min((scrollTop / (scrollHeight - clientHeight)) * 100, 100);
        setReadingProgress(progress);

        // Update active section based on scroll
        const sections = contentRef.current.querySelectorAll('[data-section]');
        sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight / 2) {
            setActiveSection(index);
          }
        });
      }
    };

    const ref = contentRef.current;
    if (ref) {
      ref.addEventListener('scroll', handleScroll);
      return () => ref.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Extract learning objectives from content
  const learningObjectives = useMemo(() => {
    const objectives: string[] = [];
    const content = lesson.content.mainContent;

    // Extract headers as objectives
    const headerMatches = content.match(/\*\*([^*]+)\*\*/g);
    if (headerMatches) {
      headerMatches.slice(0, 4).forEach(match => {
        objectives.push(match.replace(/\*\*/g, ''));
      });
    }

    return objectives;
  }, [lesson.content.mainContent]);

  // Format time spent
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
  };

  // Check if quiz is required and completed
  const canComplete = !lesson.content.quiz || showQuizResult;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-base/95 backdrop-blur-xl z-50 flex flex-col"
    >
      {/* Top Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-surface z-50">
        <motion.div
          className={`h-full bg-gradient-to-r ${gradient}`}
          initial={{ width: 0 }}
          animate={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Header */}
      <div className="flex-shrink-0 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-xl bg-surface/50 hover:bg-surface flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-text-muted" />
            </button>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <Badge variant="outline" size="sm" className="text-text-muted border-white/20">
                  {lessonNumber} of {totalLessons}
                </Badge>
                <Badge variant="outline" size="sm" className={`border-transparent bg-gradient-to-r ${gradient} text-base`}>
                  {lesson.type}
                </Badge>
              </div>
              <h1 className="text-lg font-display font-bold text-text-primary line-clamp-1">
                {lesson.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Reading Stats */}
            <div className="hidden md:flex items-center gap-4 text-sm text-text-muted">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{formatTime(timeSpent)}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Eye className="w-4 h-4" />
                <span>{Math.round(readingProgress)}%</span>
              </div>
            </div>

            {/* XP Reward Preview */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-golden/10 border border-golden/30">
              <Sparkles className="w-4 h-4 text-golden" />
              <span className="text-sm font-semibold text-golden">+{lesson.xpReward} XP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div ref={contentRef} className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4 py-6 md:py-8">

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
            data-section="intro"
          >
            {/* Overview Card */}
            <div className={`p-6 rounded-2xl bg-gradient-to-br ${gradient} relative overflow-hidden mb-6`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:16px_16px]" />
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-base/20 backdrop-blur-sm flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-base" />
                  </div>
                  <div className="flex-1">
                    <p className="text-base/80 text-sm font-medium mb-1">Overview</p>
                    <p className="text-base font-medium text-lg leading-relaxed">
                      {lesson.content.overview}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Objectives */}
            {learningObjectives.length > 0 && (
              <div className="glass rounded-xl p-5 border border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-lavender" />
                  <h3 className="font-display font-semibold text-text-primary">What You'll Learn</h3>
                </div>
                <div className="grid gap-2">
                  {learningObjectives.map((objective, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-surface/30 transition-colors"
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        idx <= activeSection ? 'bg-sage text-base' : 'bg-surface text-text-muted'
                      }`}>
                        {idx <= activeSection ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                      </div>
                      <span className={`text-sm ${idx <= activeSection ? 'text-text-primary' : 'text-text-secondary'}`}>
                        {objective}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Estimated Reading Time */}
          <div className="flex items-center justify-center gap-6 py-4 mb-6 border-y border-white/10">
            <div className="flex items-center gap-2 text-text-muted">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{lesson.duration} min read</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2 text-text-muted">
              <BookMarked className="w-4 h-4" />
              <span className="text-sm">
                {lesson.content.mainContent.split(/\s+/).length} words
              </span>
            </div>
            {currentStreak > 0 && (
              <>
                <div className="w-px h-4 bg-white/20" />
                <div className="flex items-center gap-2 text-sunrise">
                  <Flame className="w-4 h-4" />
                  <span className="text-sm font-medium">{currentStreak} day streak</span>
                </div>
              </>
            )}
          </div>

          {/* Main Content with Rich Markdown */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            data-section="content"
            className="mb-8"
          >
            <RichMarkdown content={lesson.content.mainContent} />
          </motion.div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <Sparkles className="w-5 h-5 text-golden" />
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          {/* Key Takeaway */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            data-section="takeaway"
            className="mb-6"
          >
            <div className="p-6 rounded-2xl bg-sage/10 border border-sage/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sage/20 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-sage" />
                </div>
                <div>
                  <h3 className="text-sage font-display font-semibold mb-2">Key Takeaway</h3>
                  <p className="text-text-primary leading-relaxed text-lg">
                    {lesson.content.keyTakeaway}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action Item */}
          {lesson.content.actionItem && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              data-section="action"
              className="mb-6"
            >
              <div className="p-6 rounded-2xl bg-golden/10 border border-golden/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-golden/20 flex items-center justify-center shrink-0">
                    <Lightbulb className="w-6 h-6 text-golden" />
                  </div>
                  <div>
                    <h3 className="text-golden font-display font-semibold mb-2">Try This Now</h3>
                    <p className="text-text-secondary leading-relaxed">
                      {lesson.content.actionItem}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Quiz Section */}
          {lesson.content.quiz && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              data-section="quiz"
              className="mb-8"
            >
              <div className="glass rounded-2xl border border-white/10 overflow-hidden">
                <div className="p-4 bg-lavender/10 border-b border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-lavender/20 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-lavender" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-text-primary">Knowledge Check</h3>
                    <p className="text-sm text-text-muted">Test your understanding</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-text-primary font-medium text-lg mb-6">
                    {lesson.content.quiz.question}
                  </p>

                  <div className="space-y-3">
                    {lesson.content.quiz.options.map((option, idx) => (
                      <motion.button
                        key={idx}
                        whileHover={{ scale: showQuizResult ? 1 : 1.01 }}
                        whileTap={{ scale: showQuizResult ? 1 : 0.99 }}
                        onClick={() => !showQuizResult && setQuizAnswer(idx)}
                        disabled={showQuizResult}
                        className={`w-full p-4 rounded-xl text-left transition-all border-2 flex items-center gap-4 ${
                          showQuizResult
                            ? idx === lesson.content.quiz!.correct
                              ? 'bg-sage/20 border-sage'
                              : idx === quizAnswer
                                ? 'bg-coral/20 border-coral'
                                : 'bg-surface/30 border-white/10'
                            : quizAnswer === idx
                              ? 'bg-lavender/20 border-lavender'
                              : 'bg-surface/30 border-white/10 hover:border-white/30'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${
                          showQuizResult
                            ? idx === lesson.content.quiz!.correct
                              ? 'bg-sage text-base'
                              : idx === quizAnswer
                                ? 'bg-coral text-base'
                                : 'bg-surface text-text-muted'
                            : quizAnswer === idx
                              ? 'bg-lavender text-base'
                              : 'bg-surface text-text-muted'
                        }`}>
                          {showQuizResult && idx === lesson.content.quiz!.correct ? (
                            <CheckCircle2 className="w-5 h-5" />
                          ) : showQuizResult && idx === quizAnswer && idx !== lesson.content.quiz!.correct ? (
                            <X className="w-5 h-5" />
                          ) : (
                            String.fromCharCode(65 + idx)
                          )}
                        </div>
                        <span className={`flex-1 ${
                          showQuizResult && idx === lesson.content.quiz!.correct
                            ? 'text-sage font-medium'
                            : 'text-text-primary'
                        }`}>
                          {option}
                        </span>
                      </motion.button>
                    ))}
                  </div>

                  {/* Submit button */}
                  {quizAnswer !== null && !showQuizResult && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6"
                    >
                      <Button
                        variant="primary"
                        fullWidth
                        onClick={() => setShowQuizResult(true)}
                        glow
                      >
                        Check Answer
                      </Button>
                    </motion.div>
                  )}

                  {/* Result */}
                  {showQuizResult && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mt-6 p-5 rounded-xl ${
                        quizAnswer === lesson.content.quiz!.correct
                          ? 'bg-sage/10 border border-sage/30'
                          : 'bg-coral/10 border border-coral/30'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {quizAnswer === lesson.content.quiz!.correct ? (
                          <Award className="w-6 h-6 text-sage shrink-0" />
                        ) : (
                          <HelpCircle className="w-6 h-6 text-coral shrink-0" />
                        )}
                        <div>
                          <p className={`font-semibold mb-1 ${
                            quizAnswer === lesson.content.quiz!.correct ? 'text-sage' : 'text-coral'
                          }`}>
                            {quizAnswer === lesson.content.quiz!.correct
                              ? 'Excellent! You got it right!'
                              : 'Not quite, but keep learning!'}
                          </p>
                          <p className="text-text-secondary text-sm leading-relaxed">
                            {lesson.content.quiz!.explanation}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* Completion Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            {isComplete ? (
              <div className="p-6 rounded-2xl bg-sage/10 border border-sage/30 text-center">
                <CheckCircle2 className="w-12 h-12 text-sage mx-auto mb-3" />
                <h3 className="text-xl font-display font-bold text-sage mb-2">Lesson Complete!</h3>
                <p className="text-text-secondary mb-4">You've earned {lesson.xpReward} XP</p>
                <Button variant="glass" onClick={onClose}>
                  Continue Learning
                </Button>
              </div>
            ) : (
              <div className="p-6 rounded-2xl glass border border-white/10 text-center">
                <Zap className="w-12 h-12 text-golden mx-auto mb-3" />
                <h3 className="text-xl font-display font-bold text-text-primary mb-2">
                  Ready to Complete?
                </h3>
                <p className="text-text-secondary mb-6">
                  {canComplete
                    ? `Mark this lesson as complete and earn ${lesson.xpReward} XP`
                    : 'Complete the quiz above to finish this lesson'}
                </p>
                <div className="flex gap-3 justify-center">
                  <Button variant="glass" onClick={onClose}>
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    onClick={onComplete}
                    disabled={!canComplete}
                    glow={canComplete}
                    className="gap-2"
                  >
                    Complete Lesson
                    <Sparkles className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}
          </motion.div>

        </div>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden flex-shrink-0 border-t border-white/10 p-3 bg-base/80 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm text-text-muted">
            <span>{formatTime(timeSpent)}</span>
            <span>•</span>
            <span>{Math.round(readingProgress)}% read</span>
          </div>
          {!isComplete && (
            <Button
              variant="primary"
              size="sm"
              onClick={onComplete}
              disabled={!canComplete}
              className="gap-1.5"
            >
              Complete <Sparkles className="w-3.5 h-3.5" />
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default LessonViewer;
