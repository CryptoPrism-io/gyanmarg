import React, { useState, useEffect } from 'react';
import { Brain, RotateCcw, Check, X, Clock, Zap, Trophy, ChevronLeft, ChevronRight, Flame } from 'lucide-react';

// Spaced Repetition Flashcard System
// Based on SM-2 Algorithm (SuperMemo)

interface Flashcard {
  id: string;
  book: string;
  bookIcon: string;
  front: string;
  back: string;
  interval: number; // days until next review
  easeFactor: number; // difficulty multiplier (2.5 default)
  repetitions: number;
  nextReview: Date;
  lastReview: Date | null;
}

const initialFlashcards: Flashcard[] = [
  // Atomic Habits
  {
    id: 'ah1',
    book: 'Atomic Habits',
    bookIcon: '🔄',
    front: 'What is the 1% Rule?',
    back: 'Small improvements compound. 1% better every day = 37x better in a year (1.01^365 = 37.78). Habits are the compound interest of self-improvement.',
    interval: 1,
    easeFactor: 2.5,
    repetitions: 0,
    nextReview: new Date(),
    lastReview: null
  },
  {
    id: 'ah2',
    book: 'Atomic Habits',
    bookIcon: '🔄',
    front: 'What are the 4 Laws of Behavior Change?',
    back: '1. Make it OBVIOUS (Cue)\n2. Make it ATTRACTIVE (Craving)\n3. Make it EASY (Response)\n4. Make it SATISFYING (Reward)\n\nTo break bad habits, invert: Invisible, Unattractive, Difficult, Unsatisfying',
    interval: 1,
    easeFactor: 2.5,
    repetitions: 0,
    nextReview: new Date(),
    lastReview: null
  },
  {
    id: 'ah3',
    book: 'Atomic Habits',
    bookIcon: '🔄',
    front: 'What is Identity-Based Habit Change?',
    back: 'Focus on WHO you want to become, not WHAT you want to achieve.\n\n"The goal is not to read a book, it\'s to BECOME a reader."\n\nEvery action is a vote for the type of person you want to become.',
    interval: 1,
    easeFactor: 2.5,
    repetitions: 0,
    nextReview: new Date(),
    lastReview: null
  },
  {
    id: 'ah4',
    book: 'Atomic Habits',
    bookIcon: '🔄',
    front: 'What is Habit Stacking?',
    back: 'Formula: "After I [CURRENT HABIT], I will [NEW HABIT]."\n\nExample: "After I pour my morning coffee, I will meditate for 2 minutes."\n\nUses existing neural pathways to build new behaviors.',
    interval: 1,
    easeFactor: 2.5,
    repetitions: 0,
    nextReview: new Date(),
    lastReview: null
  },
  {
    id: 'ah5',
    book: 'Atomic Habits',
    bookIcon: '🔄',
    front: 'Why does Environment matter more than Motivation?',
    back: 'Environment is the invisible hand that shapes behavior.\n\n• Make good habits OBVIOUS in your space\n• Make bad habits INVISIBLE\n• Design for laziness - reduce friction for good, add friction for bad\n\n"Be the architect of your world, not just a consumer."',
    interval: 1,
    easeFactor: 2.5,
    repetitions: 0,
    nextReview: new Date(),
    lastReview: null
  },
  // Deep Work
  {
    id: 'dw1',
    book: 'Deep Work',
    bookIcon: '🎯',
    front: 'What is Deep Work?',
    back: 'Professional activities performed in distraction-free concentration that push cognitive capabilities to their limit.\n\nDeep Work is RARE + VALUABLE = Career superpower',
    interval: 1,
    easeFactor: 2.5,
    repetitions: 0,
    nextReview: new Date(),
    lastReview: null
  },
  {
    id: 'dw2',
    book: 'Deep Work',
    bookIcon: '🎯',
    front: 'What is Attention Residue?',
    back: 'When you switch tasks, part of your attention stays "stuck" on the previous task.\n\nEvery quick check of email/phone leaves residue that reduces cognitive capacity for up to 25 minutes!\n\nSolution: Single-task in uninterrupted blocks.',
    interval: 1,
    easeFactor: 2.5,
    repetitions: 0,
    nextReview: new Date(),
    lastReview: null
  },
  {
    id: 'dw3',
    book: 'Deep Work',
    bookIcon: '🎯',
    front: 'What are the 4 Disciplines of Execution (4DX)?',
    back: '1. Focus on the WILDLY IMPORTANT\n2. Act on LEAD MEASURES (hours of deep work, not outcomes)\n3. Keep a COMPELLING SCOREBOARD\n4. Create CADENCE OF ACCOUNTABILITY\n\nExecution > Strategy',
    interval: 1,
    easeFactor: 2.5,
    repetitions: 0,
    nextReview: new Date(),
    lastReview: null
  },
  {
    id: 'dw4',
    book: 'Deep Work',
    bookIcon: '🎯',
    front: 'What is a Shutdown Ritual?',
    back: 'A strict routine marking the END of work that allows complete mental rest.\n\nWhy needed:\n• Downtime aids insights\n• Recharges deep work energy\n• Work you skip is usually not important\n\n"Shutdown complete" - verbal cue to end.',
    interval: 1,
    easeFactor: 2.5,
    repetitions: 0,
    nextReview: new Date(),
    lastReview: null
  },
  // Be Your Future Self Now
  {
    id: 'fs1',
    book: 'Be Your Future Self Now',
    bookIcon: '🚀',
    front: 'What is Future Self Disconnection?',
    back: 'Brain scans show we think of our Future Self using the SAME regions we use for STRANGERS.\n\nWe discount their wellbeing, make poor decisions.\n\nSolution: Increase connection through visualization, letters, vivid imagining.',
    interval: 1,
    easeFactor: 2.5,
    repetitions: 0,
    nextReview: new Date(),
    lastReview: null
  },
  {
    id: 'fs2',
    book: 'Be Your Future Self Now',
    bookIcon: '🚀',
    front: 'What is The Gap vs The Gain?',
    back: 'THE GAP: Measuring forward to an ideal = misery, never enough\n\nTHE GAIN: Measuring backward from where you started = happiness, confidence\n\nAlways measure progress against your PAST SELF, not your ideal.',
    interval: 1,
    easeFactor: 2.5,
    repetitions: 0,
    nextReview: new Date(),
    lastReview: null
  },
  {
    id: 'fs3',
    book: 'Be Your Future Self Now',
    bookIcon: '🚀',
    front: 'Why is 10X easier than 2X?',
    back: '2X = do more of the same (quantitative)\n10X = completely change approach (qualitative)\n\n10X forces you to:\n• Eliminate 80% of current activities\n• Focus only on what REALLY matters\n• Find entirely new approaches\n\n"What would I STOP doing?"',
    interval: 1,
    easeFactor: 2.5,
    repetitions: 0,
    nextReview: new Date(),
    lastReview: null
  },
  // Man's Search for Meaning
  {
    id: 'ms1',
    book: "Man's Search for Meaning",
    bookIcon: '💫',
    front: 'What is "The Last Human Freedom"?',
    back: '"Between stimulus and response, there is a space. In that space lies our freedom to choose our response."\n\nEverything can be taken except: the freedom to choose your ATTITUDE in any circumstance.',
    interval: 1,
    easeFactor: 2.5,
    repetitions: 0,
    nextReview: new Date(),
    lastReview: null
  },
  {
    id: 'ms2',
    book: "Man's Search for Meaning",
    bookIcon: '💫',
    front: 'What are the Three Sources of Meaning?',
    back: '1. WORK/DEEDS - Creating something, accomplishing tasks\n\n2. LOVE/EXPERIENCE - Relationships, beauty, nature, art\n\n3. ATTITUDE TOWARD SUFFERING - Finding meaning in unavoidable pain\n\n"Suffering ceases to be suffering when it finds meaning."',
    interval: 1,
    easeFactor: 2.5,
    repetitions: 0,
    nextReview: new Date(),
    lastReview: null
  },
  {
    id: 'ms3',
    book: "Man's Search for Meaning",
    bookIcon: '💫',
    front: 'What is Tragic Optimism?',
    back: 'Saying YES to life IN SPITE OF pain, guilt, and death.\n\nNot naive happiness - the capacity to:\n• Turn suffering into achievement\n• Turn guilt into change\n• Turn mortality into meaningful action\n\nFind meaning THROUGH tragedy, not despite it.',
    interval: 1,
    easeFactor: 2.5,
    repetitions: 0,
    nextReview: new Date(),
    lastReview: null
  },
  // The Subtle Art
  {
    id: 'sa1',
    book: 'The Subtle Art',
    bookIcon: '🎸',
    front: 'What is The Feedback Loop from Hell?',
    back: 'Feeling bad ABOUT feeling bad.\nAnxious ABOUT being anxious.\n\nThis meta-negativity is worse than the original problem!\n\nSolution: Accept the negative feeling without judging yourself for having it.',
    interval: 1,
    easeFactor: 2.5,
    repetitions: 0,
    nextReview: new Date(),
    lastReview: null
  },
  {
    id: 'sa2',
    book: 'The Subtle Art',
    bookIcon: '🎸',
    front: 'What is The Backwards Law?',
    back: '"The desire for more positive experience is itself a negative experience. Accepting negative experience is itself a positive experience."\n\nThe more you pursue feeling better → the less satisfied you become.\n\nAccept the negative → paradoxically feel better.',
    interval: 1,
    easeFactor: 2.5,
    repetitions: 0,
    nextReview: new Date(),
    lastReview: null
  },
  {
    id: 'sa3',
    book: 'The Subtle Art',
    bookIcon: '🎸',
    front: 'What is the Fault vs Responsibility distinction?',
    back: 'FAULT = Past tense (who caused it)\nRESPONSIBILITY = Present tense (who must deal with it)\n\nSomething may NOT be your fault, but it\'s ALWAYS your responsibility to deal with it.\n\nPlaying victim = comfortable but powerless.',
    interval: 1,
    easeFactor: 2.5,
    repetitions: 0,
    nextReview: new Date(),
    lastReview: null
  },
  {
    id: 'sa4',
    book: 'The Subtle Art',
    bookIcon: '🎸',
    front: 'What does "Not giving a f*ck" actually mean?',
    back: 'NOT indifference or apathy.\n\nIt means:\n• Choosing WHAT to give f*cks about wisely\n• Being comfortable with being different\n• Reserving f*cks for what truly aligns with your values\n\nYou have LIMITED f*cks. Don\'t waste them on petty things.',
    interval: 1,
    easeFactor: 2.5,
    repetitions: 0,
    nextReview: new Date(),
    lastReview: null
  }
];

export default function SpacedRepetitionReview() {
  const [cards, setCards] = useState<Flashcard[]>(initialFlashcards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [sessionStats, setSessionStats] = useState({ reviewed: 0, easy: 0, good: 0, hard: 0, again: 0 });
  const [streak, setStreak] = useState(0);
  const [xpEarned, setXpEarned] = useState(0);

  // Get cards due for review today
  const getDueCards = () => {
    const now = new Date();
    return cards.filter(card => new Date(card.nextReview) <= now);
  };

  const dueCards = getDueCards();
  const currentCard = dueCards[currentIndex];

  // SM-2 Algorithm implementation
  const calculateNextReview = (card: Flashcard, quality: number): Flashcard => {
    // Quality: 0 = Again, 1 = Hard, 2 = Good, 3 = Easy
    let { interval, easeFactor, repetitions } = card;

    if (quality < 1) {
      // Failed - reset
      repetitions = 0;
      interval = 1;
    } else {
      if (repetitions === 0) {
        interval = 1;
      } else if (repetitions === 1) {
        interval = 3;
      } else {
        interval = Math.round(interval * easeFactor);
      }
      repetitions += 1;
    }

    // Adjust ease factor
    easeFactor = Math.max(1.3, easeFactor + (0.1 - (3 - quality) * (0.08 + (3 - quality) * 0.02)));

    // Bonus for easy
    if (quality === 3) {
      interval = Math.round(interval * 1.3);
    }

    const nextReview = new Date();
    nextReview.setDate(nextReview.getDate() + interval);

    return {
      ...card,
      interval,
      easeFactor,
      repetitions,
      nextReview,
      lastReview: new Date()
    };
  };

  const handleResponse = (quality: number) => {
    if (!currentCard) return;

    const qualityNames = ['again', 'hard', 'good', 'easy'] as const;
    const xpValues = [5, 10, 15, 25];

    // Update card
    const updatedCard = calculateNextReview(currentCard, quality);
    setCards(cards.map(c => c.id === currentCard.id ? updatedCard : c));

    // Update stats
    setSessionStats(prev => ({
      ...prev,
      reviewed: prev.reviewed + 1,
      [qualityNames[quality]]: prev[qualityNames[quality]] + 1
    }));

    // Update streak and XP
    if (quality >= 2) {
      setStreak(s => s + 1);
      setXpEarned(xp => xp + xpValues[quality] + (streak >= 5 ? 10 : 0));
    } else {
      setStreak(0);
      setXpEarned(xp => xp + xpValues[quality]);
    }

    // Next card
    setShowAnswer(false);
    setIsFlipped(false);
    if (currentIndex < dueCards.length - 1) {
      setCurrentIndex(i => i + 1);
    }
  };

  const resetSession = () => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setIsFlipped(false);
    setSessionStats({ reviewed: 0, easy: 0, good: 0, hard: 0, again: 0 });
    setStreak(0);
    setXpEarned(0);
  };

  // Session complete
  if (dueCards.length === 0 || currentIndex >= dueCards.length) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white p-4">
        <div className="max-w-lg mx-auto">
          <div className="bg-slate-800/50 rounded-2xl p-6 text-center">
            <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">
              {sessionStats.reviewed > 0 ? 'Session Complete!' : 'All Caught Up!'}
            </h1>
            <p className="text-slate-400 mb-6">
              {sessionStats.reviewed > 0
                ? `You reviewed ${sessionStats.reviewed} cards`
                : 'No cards due for review. Check back later!'}
            </p>

            {sessionStats.reviewed > 0 && (
              <div className="grid grid-cols-4 gap-2 mb-6">
                <div className="bg-red-500/20 rounded-lg p-2">
                  <p className="text-2xl font-bold text-red-400">{sessionStats.again}</p>
                  <p className="text-xs text-slate-400">Again</p>
                </div>
                <div className="bg-orange-500/20 rounded-lg p-2">
                  <p className="text-2xl font-bold text-orange-400">{sessionStats.hard}</p>
                  <p className="text-xs text-slate-400">Hard</p>
                </div>
                <div className="bg-green-500/20 rounded-lg p-2">
                  <p className="text-2xl font-bold text-green-400">{sessionStats.good}</p>
                  <p className="text-xs text-slate-400">Good</p>
                </div>
                <div className="bg-blue-500/20 rounded-lg p-2">
                  <p className="text-2xl font-bold text-blue-400">{sessionStats.easy}</p>
                  <p className="text-xs text-slate-400">Easy</p>
                </div>
              </div>
            )}

            <div className="bg-yellow-500/20 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-xl font-bold text-yellow-400">+{xpEarned} XP</span>
              </div>
            </div>

            <button
              onClick={resetSession}
              className="px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600"
            >
              <RotateCcw className="w-4 h-4 inline mr-2" />
              Review Again
            </button>
          </div>

          {/* Upcoming Reviews */}
          <div className="mt-6 bg-slate-800/30 rounded-xl p-4">
            <h3 className="font-semibold mb-3">📅 Upcoming Reviews</h3>
            <div className="space-y-2 text-sm">
              {cards
                .filter(c => new Date(c.nextReview) > new Date())
                .sort((a, b) => new Date(a.nextReview).getTime() - new Date(b.nextReview).getTime())
                .slice(0, 5)
                .map(card => (
                  <div key={card.id} className="flex items-center justify-between text-slate-400">
                    <span>{card.bookIcon} {card.front.slice(0, 30)}...</span>
                    <span className="text-xs">
                      {Math.ceil((new Date(card.nextReview).getTime() - Date.now()) / (1000 * 60 * 60 * 24))}d
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white p-4">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-purple-400" />
            <span className="font-semibold">Spaced Repetition</span>
          </div>
          <div className="flex items-center gap-3">
            {streak >= 3 && (
              <div className="flex items-center gap-1 bg-orange-500/20 px-2 py-1 rounded-lg">
                <Flame className="w-4 h-4 text-orange-400" />
                <span className="text-sm text-orange-400">{streak}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-yellow-400">{xpEarned}</span>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-slate-400 mb-1">
            <span>Progress</span>
            <span>{currentIndex + 1} / {dueCards.length}</span>
          </div>
          <div className="bg-slate-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full transition-all"
              style={{ width: `${((currentIndex + 1) / dueCards.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Card */}
        <div
          className={`relative bg-slate-800/50 rounded-2xl p-6 min-h-[300px] cursor-pointer transition-all duration-300 ${
            isFlipped ? 'bg-slate-700/50' : ''
          }`}
          onClick={() => { setIsFlipped(!isFlipped); setShowAnswer(true); }}
        >
          {/* Book Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-slate-700/50 px-2 py-1 rounded-lg">
            <span>{currentCard.bookIcon}</span>
            <span className="text-xs text-slate-400">{currentCard.book}</span>
          </div>

          {/* Card Content */}
          <div className="pt-10">
            {!showAnswer ? (
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-4">{currentCard.front}</h2>
                <p className="text-slate-400 text-sm">Tap to reveal answer</p>
              </div>
            ) : (
              <div>
                <p className="text-slate-400 text-sm mb-2">Q: {currentCard.front}</p>
                <div className="border-t border-slate-600 pt-4 mt-2">
                  <p className="text-slate-200 whitespace-pre-line">{currentCard.back}</p>
                </div>
              </div>
            )}
          </div>

          {/* Card Stats */}
          <div className="absolute bottom-4 right-4 text-xs text-slate-500">
            Interval: {currentCard.interval}d • Reviews: {currentCard.repetitions}
          </div>
        </div>

        {/* Response Buttons */}
        {showAnswer && (
          <div className="mt-4 grid grid-cols-4 gap-2">
            <button
              onClick={() => handleResponse(0)}
              className="py-3 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-xl font-medium transition-colors"
            >
              <span className="block text-lg">😰</span>
              <span className="text-xs">Again</span>
              <span className="block text-xs text-slate-500">1d</span>
            </button>
            <button
              onClick={() => handleResponse(1)}
              className="py-3 bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 rounded-xl font-medium transition-colors"
            >
              <span className="block text-lg">😕</span>
              <span className="text-xs">Hard</span>
              <span className="block text-xs text-slate-500">{Math.round(currentCard.interval * 1.2)}d</span>
            </button>
            <button
              onClick={() => handleResponse(2)}
              className="py-3 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-xl font-medium transition-colors"
            >
              <span className="block text-lg">😊</span>
              <span className="text-xs">Good</span>
              <span className="block text-xs text-slate-500">{Math.round(currentCard.interval * currentCard.easeFactor)}d</span>
            </button>
            <button
              onClick={() => handleResponse(3)}
              className="py-3 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-xl font-medium transition-colors"
            >
              <span className="block text-lg">😎</span>
              <span className="text-xs">Easy</span>
              <span className="block text-xs text-slate-500">{Math.round(currentCard.interval * currentCard.easeFactor * 1.3)}d</span>
            </button>
          </div>
        )}

        {/* Tips */}
        <div className="mt-6 bg-purple-500/10 border border-purple-500/30 rounded-lg p-3">
          <p className="text-purple-300 text-sm">
            🧠 <strong>How it works:</strong> Cards you know well appear less often. Cards you struggle with appear more frequently. This optimizes your learning time!
          </p>
        </div>
      </div>
    </div>
  );
}
