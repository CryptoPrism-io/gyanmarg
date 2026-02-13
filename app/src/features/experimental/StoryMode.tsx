import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Volume2, VolumeX } from 'lucide-react';
import { modules } from '@/data/modules';
import { useProgressStore } from '@/store/progressStore';

/**
 * Immersive Story Mode - Cinematic Lesson Experience
 *
 * Features:
 * - Typewriter-style paragraph reveals
 * - Floating concept annotations
 * - Dynamic gradient backgrounds
 * - Inline quiz integration
 * - Parallax scrolling headers
 * - Ambient sound toggle
 */

export default function StoryMode() {
  const { moduleId, lessonId } = useParams<{ moduleId: string; lessonId: string }>();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [showKeyTakeaway, setShowKeyTakeaway] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const completeLesson = useProgressStore((s) => s.completeLesson);
  const isLessonCompleted = useProgressStore((s) => s.isLessonCompleted);

  // Find module and lesson
  const module = modules.find(m => m.id === moduleId);
  const pathway = module?.pathway;
  const lesson = pathway?.flatMap(level => level.lessons).find(l => l.id === lessonId);

  // Scroll progress for gradient transitions
  const { scrollYProgress } = useScroll({ container: containerRef });
  const gradientProgress = useTransform(scrollYProgress, [0, 0.5, 1], [0, 50, 100]);

  useEffect(() => {
    if (!lesson) return;

    // Auto-reveal paragraphs with typewriter timing
    const paragraphs = lesson.content.mainContent.split('\n\n');
    if (currentParagraph < paragraphs.length) {
      const timer = setTimeout(() => {
        setCurrentParagraph(prev => prev + 1);
      }, 2000); // Reveal next paragraph every 2s

      return () => clearTimeout(timer);
    } else {
      // Show key takeaway after all content revealed
      const timer = setTimeout(() => setShowKeyTakeaway(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [currentParagraph, lesson]);

  const handleComplete = () => {
    if (!lesson || isLessonCompleted(lesson.id)) return;
    completeLesson(lesson.id, lesson.xpReward);
    navigate(`/pathway`);
  };

  const handleQuizAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
  };

  if (!lesson || !module) {
    return (
      <div className="min-h-screen bg-base flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-2">Lesson not found</h2>
          <button
            onClick={() => navigate('/pathway')}
            className="text-golden hover:underline"
          >
            Return to Pathway
          </button>
        </div>
      </div>
    );
  }

  const paragraphs = lesson.content.mainContent.split('\n\n');
  const readingTime = Math.ceil(lesson.duration);
  const progress = Math.round((currentParagraph / paragraphs.length) * 100);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-base text-text-primary overflow-y-auto"
      style={{
        background: `linear-gradient(135deg,
          hsl(${gradientProgress.get() * 0.5}, 10%, 4%) 0%,
          hsl(${gradientProgress.get() * 0.3}, 15%, 6%) 100%)`,
      }}
    >
      {/* Top Bar */}
      <div className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/pathway')}
            className="flex items-center gap-2 text-text-muted hover:text-golden transition"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back to Pathway</span>
          </button>

          <div className="flex items-center gap-4">
            <div className="text-sm text-text-muted">
              {readingTime} min read • {progress}%
            </div>
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 hover:bg-surface-hover rounded-lg transition"
            >
              {soundEnabled ? (
                <Volume2 className="w-5 h-5 text-golden" />
              ) : (
                <VolumeX className="w-5 h-5 text-text-muted" />
              )}
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <motion.div
          className="h-1 bg-golden"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Story Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Parallax Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 0.3], [0, -50]) }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-golden via-amber-300 to-golden bg-clip-text text-transparent">
              {lesson.title}
            </h1>
            <p className="text-xl text-text-muted font-light italic">
              {lesson.content.overview}
            </p>
          </motion.div>
        </motion.div>

        {/* Story Paragraphs with Typewriter Reveal */}
        <div className="space-y-8 mb-16">
          {paragraphs.slice(0, currentParagraph).map((paragraph, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
            >
              <p className="text-lg leading-relaxed text-text-secondary">
                {paragraph}
              </p>

              {/* Floating Annotations for Key Concepts */}
              {index % 3 === 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -right-24 top-0 hidden xl:block"
                >
                  <div className="w-20 h-20 rounded-full bg-golden/10 border-2 border-golden/30 flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}

          {/* Loading indicator for next paragraph */}
          {currentParagraph < paragraphs.length && (
            <motion.div
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex items-center gap-2 text-text-muted"
            >
              <div className="w-2 h-2 rounded-full bg-golden" />
              <div className="w-2 h-2 rounded-full bg-golden" />
              <div className="w-2 h-2 rounded-full bg-golden" />
            </motion.div>
          )}
        </div>

        {/* Inline Quiz */}
        {lesson.content.quiz && showKeyTakeaway && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 p-8 bg-surface/50 backdrop-blur-sm border border-border rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-golden">
              Test Your Understanding
            </h3>
            <p className="text-lg mb-6">{lesson.content.quiz.question}</p>

            <div className="space-y-3">
              {lesson.content.quiz.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleQuizAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full p-4 rounded-xl text-left transition border-2 ${
                    selectedAnswer === null
                      ? 'bg-surface hover:bg-surface-hover border-border hover:border-golden/50'
                      : selectedAnswer === index
                      ? index === lesson.content.quiz!.correct
                        ? 'bg-sage/20 border-sage'
                        : 'bg-red-500/20 border-red-500'
                      : index === lesson.content.quiz!.correct
                      ? 'bg-sage/20 border-sage'
                      : 'bg-surface border-border'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <AnimatePresence>
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 p-4 bg-golden/10 rounded-lg border border-golden/30"
                >
                  <p className="text-text-secondary">{lesson.content.quiz.explanation}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Key Takeaway */}
        <AnimatePresence>
          {showKeyTakeaway && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-16 p-10 bg-gradient-to-br from-golden/10 to-amber-500/5 border-2 border-golden/30 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-4 text-golden">Key Takeaway</h3>
              <p className="text-xl leading-relaxed text-text-primary">
                {lesson.content.keyTakeaway}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Item */}
        {lesson.content.actionItem && showKeyTakeaway && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 p-8 bg-surface border-l-4 border-golden rounded-r-2xl"
          >
            <h3 className="text-xl font-bold mb-3 text-golden">Take Action</h3>
            <p className="text-text-secondary">{lesson.content.actionItem}</p>
          </motion.div>
        )}

        {/* Complete Button */}
        {showKeyTakeaway && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <button
              onClick={handleComplete}
              className="px-12 py-4 bg-golden hover:bg-amber-500 text-base font-bold rounded-xl transition transform hover:scale-105 shadow-lg"
            >
              {isLessonCompleted(lesson.id) ? 'Return to Pathway' : `Complete Lesson (+${lesson.xpReward} XP)`}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
