import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useTransform, type PanInfo } from 'framer-motion';
import { ArrowLeft, RotateCcw, Check, X } from 'lucide-react';
import { modules } from '@/data/modules';
import { useProgressStore } from '@/store/progressStore';

/**
 * Knowledge Cards - Tinder-style Swipeable Learning
 *
 * Features:
 * - Swipe right = "Got it", left = "Review later"
 * - 3D card stack with perspective
 * - Tap to flip for deeper explanation
 * - Quiz cards mixed in
 * - Review pile at the end
 * - Spring physics animations
 */

interface Card {
  id: string;
  type: 'concept' | 'quiz' | 'takeaway' | 'action';
  front: string;
  back: string;
  quizOptions?: string[];
  correctAnswer?: number;
  explanation?: string;
}

export default function KnowledgeCards() {
  const { moduleId, lessonId } = useParams<{ moduleId: string; lessonId: string }>();
  const navigate = useNavigate();

  const [cards, setCards] = useState<Card[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState<string[]>([]);
  const [reviewCards, setReviewCards] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState<number | null>(null);

  const completeLesson = useProgressStore((s) => s.completeLesson);
  const isLessonCompleted = useProgressStore((s) => s.isLessonCompleted);

  // Find module and lesson
  const module = modules.find(m => m.id === moduleId);
  const pathway = module?.pathway;
  const lesson = pathway?.flatMap(level => level.lessons).find(l => l.id === lessonId);

  // Initialize cards from lesson content
  useEffect(() => {
    if (!lesson) return;

    const generatedCards: Card[] = [];

    // Overview card
    generatedCards.push({
      id: 'overview',
      type: 'concept',
      front: lesson.title,
      back: lesson.content.overview,
    });

    // Split main content into concept cards (by paragraphs)
    const paragraphs = lesson.content.mainContent.split('\n\n').filter(p => p.trim());
    paragraphs.forEach((para, i) => {
      const sentences = para.split('. ');
      if (sentences.length > 1) {
        generatedCards.push({
          id: `concept-${i}`,
          type: 'concept',
          front: sentences[0] + '.',
          back: sentences.slice(1).join('. '),
        });
      }
    });

    // Quiz card
    if (lesson.content.quiz) {
      generatedCards.push({
        id: 'quiz',
        type: 'quiz',
        front: lesson.content.quiz.question,
        back: lesson.content.quiz.explanation,
        quizOptions: lesson.content.quiz.options,
        correctAnswer: lesson.content.quiz.correct,
      });
    }

    // Takeaway card
    generatedCards.push({
      id: 'takeaway',
      type: 'takeaway',
      front: 'Key Takeaway',
      back: lesson.content.keyTakeaway,
    });

    // Action card
    if (lesson.content.actionItem) {
      generatedCards.push({
        id: 'action',
        type: 'action',
        front: 'Take Action',
        back: lesson.content.actionItem,
      });
    }

    setCards(generatedCards);
  }, [lesson]);

  const handleSwipe = (direction: 'left' | 'right') => {
    const currentCard = cards[currentIndex];
    if (direction === 'right') {
      setMasteredCards(prev => [...prev, currentCard.id]);
    } else {
      setReviewCards(prev => [...prev, currentCard.id]);
    }

    setFlipped(false);
    setSelectedQuizAnswer(null);

    if (currentIndex === cards.length - 1) {
      // Show results screen
      setShowResults(true);
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleComplete = () => {
    if (!lesson || isLessonCompleted(lesson.id)) {
      navigate('/pathway');
      return;
    }
    completeLesson(lesson.id, lesson.xpReward);
    navigate('/pathway');
  };

  const handleReplay = () => {
    setCurrentIndex(0);
    setMasteredCards([]);
    setReviewCards([]);
    setShowResults(false);
    setFlipped(false);
    setSelectedQuizAnswer(null);
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

  // Results Screen
  if (showResults) {
    return (
      <div className="min-h-screen bg-base text-text-primary flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full"
        >
          <div className="bg-surface border border-border rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-golden">Lesson Complete!</h2>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-sage/10 border border-sage/30 rounded-xl p-6 text-center">
                <Check className="w-12 h-12 text-sage mx-auto mb-2" />
                <div className="text-4xl font-bold text-sage mb-1">{masteredCards.length}</div>
                <div className="text-text-muted">Cards Mastered</div>
              </div>

              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 text-center">
                <RotateCcw className="w-12 h-12 text-amber-500 mx-auto mb-2" />
                <div className="text-4xl font-bold text-amber-500 mb-1">{reviewCards.length}</div>
                <div className="text-text-muted">Cards to Review</div>
              </div>
            </div>

            <div className="mb-6 p-4 bg-golden/10 rounded-lg border border-golden/30">
              <p className="text-center text-golden font-medium">
                +{lesson.xpReward} XP Earned
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleReplay}
                className="flex-1 px-6 py-3 bg-surface-hover hover:bg-border text-text-primary rounded-xl transition border border-border"
              >
                <RotateCcw className="w-5 h-5 inline-block mr-2" />
                Replay Cards
              </button>
              <button
                onClick={handleComplete}
                className="flex-1 px-6 py-3 bg-golden hover:bg-amber-500 text-base font-bold rounded-xl transition"
              >
                Continue
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  const currentCard = cards[currentIndex];
  if (!currentCard) {
    return null;
  }

  return (
    <div className="min-h-screen bg-base text-text-primary flex flex-col">
      {/* Top Bar */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/pathway')}
            className="flex items-center gap-2 text-text-muted hover:text-golden transition"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back</span>
          </button>

          <div className="text-text-muted">
            {currentIndex + 1} / {cards.length}
          </div>
        </div>
      </div>

      {/* Card Stack */}
      <div className="flex-1 flex items-center justify-center p-6 relative">
        <div className="relative w-full max-w-lg" style={{ height: '600px' }}>
          {/* Next cards in stack (background) */}
          {[2, 1].map(offset => {
            const cardIndex = currentIndex + offset;
            if (cardIndex >= cards.length) return null;

            return (
              <div
                key={cardIndex}
                className="absolute inset-0 bg-surface border border-border rounded-3xl"
                style={{
                  transform: `translateY(${offset * 12}px) scale(${1 - offset * 0.05})`,
                  zIndex: 10 - offset,
                  opacity: 0.5,
                }}
              />
            );
          })}

          {/* Current Card */}
          <SwipeableCard
            card={currentCard}
            onSwipe={handleSwipe}
            flipped={flipped}
            onFlip={() => setFlipped(!flipped)}
            selectedQuizAnswer={selectedQuizAnswer}
            onQuizAnswer={setSelectedQuizAnswer}
          />
        </div>

        {/* Swipe Hints */}
        <div className="absolute bottom-24 left-0 right-0 flex justify-center gap-12 pointer-events-none">
          <div className="flex items-center gap-2 text-amber-500">
            <X className="w-6 h-6" />
            <span className="text-sm font-medium">Review Later</span>
          </div>
          <div className="flex items-center gap-2 text-sage">
            <Check className="w-6 h-6" />
            <span className="text-sm font-medium">Got It!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Swipeable Card Component
function SwipeableCard({
  card,
  onSwipe,
  flipped,
  onFlip,
  selectedQuizAnswer,
  onQuizAnswer,
}: {
  card: Card;
  onSwipe: (direction: 'left' | 'right') => void;
  flipped: boolean;
  onFlip: () => void;
  selectedQuizAnswer: number | null;
  onQuizAnswer: (index: number) => void;
}) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 100) {
      onSwipe(info.offset.x > 0 ? 'right' : 'left');
    }
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      style={{ x, rotate, opacity }}
      className="absolute inset-0 cursor-grab active:cursor-grabbing"
      whileTap={{ scale: 1.05 }}
    >
      <motion.div
        className="w-full h-full bg-surface border-2 border-border rounded-3xl shadow-2xl overflow-hidden"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Type Badge */}
          <div className={`mb-6 px-4 py-2 rounded-full text-sm font-bold ${
            card.type === 'quiz' ? 'bg-golden/20 text-golden' :
            card.type === 'takeaway' ? 'bg-sage/20 text-sage' :
            card.type === 'action' ? 'bg-amber-500/20 text-amber-500' :
            'bg-purple-500/20 text-purple-400'
          }`}>
            {card.type === 'quiz' ? '❓ Quiz' :
             card.type === 'takeaway' ? '💎 Key Takeaway' :
             card.type === 'action' ? '🎯 Action Item' :
             '💡 Concept'}
          </div>

          <h3 className="text-2xl font-bold text-text-primary mb-6">
            {card.front}
          </h3>

          {!flipped && card.type !== 'quiz' && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onFlip();
              }}
              className="mt-auto px-6 py-3 bg-golden/20 hover:bg-golden/30 text-golden rounded-xl transition"
            >
              Tap to Reveal
            </button>
          )}

          {/* Quiz Options */}
          {card.type === 'quiz' && !flipped && card.quizOptions && (
            <div className="w-full space-y-3 mt-6">
              {card.quizOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    onQuizAnswer(index);
                    setTimeout(() => onFlip(), 500);
                  }}
                  disabled={selectedQuizAnswer !== null}
                  className={`w-full p-4 rounded-xl text-left transition border-2 ${
                    selectedQuizAnswer === null
                      ? 'bg-surface-hover hover:bg-border border-border'
                      : selectedQuizAnswer === index
                      ? index === card.correctAnswer
                        ? 'bg-sage/20 border-sage'
                        : 'bg-red-500/20 border-red-500'
                      : 'bg-surface-hover border-border opacity-50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center bg-gradient-to-br from-golden/5 to-amber-500/5"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <p className="text-lg text-text-secondary leading-relaxed mb-6">
            {card.back}
          </p>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onFlip();
            }}
            className="mt-auto px-6 py-3 bg-surface-hover hover:bg-border text-text-muted rounded-xl transition"
          >
            Flip Back
          </button>
        </div>
      </motion.div>

      {/* Swipe Direction Indicators */}
      <motion.div
        className="absolute top-8 left-8 text-6xl font-black text-amber-500 opacity-0 pointer-events-none"
        style={{ opacity: useTransform(x, [-200, -50], [1, 0]) }}
      >
        ←
      </motion.div>
      <motion.div
        className="absolute top-8 right-8 text-6xl font-black text-sage opacity-0 pointer-events-none"
        style={{ opacity: useTransform(x, [50, 200], [0, 1]) }}
      >
        →
      </motion.div>
    </motion.div>
  );
}
