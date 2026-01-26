import React, { useState } from 'react';
import { Zap, Trophy, Clock, CheckCircle, Circle, Star, Flame, Gift, Target, Brain, Heart, Sparkles } from 'lucide-react';

interface Challenge {
  id: string;
  title: string;
  description: string;
  book: string;
  bookIcon: string;
  type: 'action' | 'reflection' | 'experiment';
  xp: number;
  difficulty: 'easy' | 'medium' | 'hard';
  timeEstimate: string;
  completed: boolean;
}

interface DailyQuest {
  date: string;
  challenges: Challenge[];
  bonusXP: number;
  allCompleted: boolean;
}

const challengePool: Omit<Challenge, 'id' | 'completed'>[] = [
  // Atomic Habits Challenges
  {
    title: "2-Minute Habit Start",
    description: "Start a habit you've been putting off, but do it for only 2 minutes. The goal is just to begin.",
    book: "Atomic Habits",
    bookIcon: "🔄",
    type: "action",
    xp: 30,
    difficulty: "easy",
    timeEstimate: "2 min"
  },
  {
    title: "Environment Redesign",
    description: "Make ONE change to your environment that makes a good habit more obvious or a bad habit more invisible.",
    book: "Atomic Habits",
    bookIcon: "🔄",
    type: "action",
    xp: 50,
    difficulty: "medium",
    timeEstimate: "10 min"
  },
  {
    title: "Habit Stack Design",
    description: "Create 3 habit stacks using the formula: 'After I [CURRENT], I will [NEW].' Write them down.",
    book: "Atomic Habits",
    bookIcon: "🔄",
    type: "reflection",
    xp: 40,
    difficulty: "easy",
    timeEstimate: "5 min"
  },
  {
    title: "Identity Statement",
    description: "Complete 5 sentences starting with: 'I am the type of person who...' Focus on who you want to become.",
    book: "Atomic Habits",
    bookIcon: "🔄",
    type: "reflection",
    xp: 35,
    difficulty: "easy",
    timeEstimate: "5 min"
  },
  {
    title: "Temptation Bundling",
    description: "Pair something you NEED to do with something you WANT to do. Do them together today.",
    book: "Atomic Habits",
    bookIcon: "🔄",
    type: "experiment",
    xp: 45,
    difficulty: "medium",
    timeEstimate: "varies"
  },

  // Deep Work Challenges
  {
    title: "25-Minute Focus Block",
    description: "Do 25 minutes of deep work: phone away, single task, no interruptions. Track what you accomplish.",
    book: "Deep Work",
    bookIcon: "🎯",
    type: "action",
    xp: 50,
    difficulty: "medium",
    timeEstimate: "25 min"
  },
  {
    title: "Attention Audit",
    description: "For 1 hour, note every time you feel the urge to check your phone or switch tasks. Count the urges.",
    book: "Deep Work",
    bookIcon: "🎯",
    type: "experiment",
    xp: 40,
    difficulty: "medium",
    timeEstimate: "1 hour"
  },
  {
    title: "Shutdown Ritual Creation",
    description: "Design a 5-step end-of-work ritual. Write it down and practice it today.",
    book: "Deep Work",
    bookIcon: "🎯",
    type: "action",
    xp: 35,
    difficulty: "easy",
    timeEstimate: "15 min"
  },
  {
    title: "Productive Meditation",
    description: "During a walk or commute, focus on ONE professional problem. Each time your mind wanders, bring it back.",
    book: "Deep Work",
    bookIcon: "🎯",
    type: "experiment",
    xp: 45,
    difficulty: "medium",
    timeEstimate: "20 min"
  },
  {
    title: "Deep Work Scoreboard",
    description: "Create a simple scoreboard to track your daily deep work hours. Mark today's target.",
    book: "Deep Work",
    bookIcon: "🎯",
    type: "action",
    xp: 30,
    difficulty: "easy",
    timeEstimate: "10 min"
  },

  // Be Your Future Self Now Challenges
  {
    title: "Letter from Future Self",
    description: "Write a 1-page letter FROM your Future Self (10 years ahead) to your current self. What advice do they give?",
    book: "Be Your Future Self Now",
    bookIcon: "🚀",
    type: "reflection",
    xp: 60,
    difficulty: "hard",
    timeEstimate: "20 min"
  },
  {
    title: "The Gain Exercise",
    description: "List 10 ways you've grown or improved in the last year. Measure backward, not forward.",
    book: "Be Your Future Self Now",
    bookIcon: "🚀",
    type: "reflection",
    xp: 40,
    difficulty: "easy",
    timeEstimate: "10 min"
  },
  {
    title: "10X Question",
    description: "Ask yourself: 'If I had to 10X my results, what would I STOP doing?' Write 5 things to eliminate.",
    book: "Be Your Future Self Now",
    bookIcon: "🚀",
    type: "reflection",
    xp: 50,
    difficulty: "medium",
    timeEstimate: "15 min"
  },
  {
    title: "Future Self Visualization",
    description: "Spend 10 minutes vividly imagining your ideal day 5 years from now. Where are you? What are you doing?",
    book: "Be Your Future Self Now",
    bookIcon: "🚀",
    type: "reflection",
    xp: 35,
    difficulty: "easy",
    timeEstimate: "10 min"
  },
  {
    title: "Identity Release",
    description: "Identify ONE aspect of your current identity that's holding you back. Write why you're ready to let it go.",
    book: "Be Your Future Self Now",
    bookIcon: "🚀",
    type: "reflection",
    xp: 55,
    difficulty: "hard",
    timeEstimate: "15 min"
  },

  // Man's Search for Meaning Challenges
  {
    title: "Stimulus-Response Gap",
    description: "In 3 situations today, pause between stimulus and response. Notice the space. Choose your response consciously.",
    book: "Man's Search for Meaning",
    bookIcon: "💫",
    type: "experiment",
    xp: 50,
    difficulty: "medium",
    timeEstimate: "all day"
  },
  {
    title: "Meaning in Work",
    description: "Find meaning in one mundane task today. How does it contribute to something larger? Write your reflection.",
    book: "Man's Search for Meaning",
    bookIcon: "💫",
    type: "reflection",
    xp: 40,
    difficulty: "medium",
    timeEstimate: "15 min"
  },
  {
    title: "Gratitude for Difficulty",
    description: "Think of a current challenge. Write 3 ways this difficulty might be preparing you for something meaningful.",
    book: "Man's Search for Meaning",
    bookIcon: "💫",
    type: "reflection",
    xp: 45,
    difficulty: "medium",
    timeEstimate: "10 min"
  },
  {
    title: "Your 'Why' Statement",
    description: "Write your personal 'why' in one clear sentence. What gives your life meaning?",
    book: "Man's Search for Meaning",
    bookIcon: "💫",
    type: "reflection",
    xp: 55,
    difficulty: "hard",
    timeEstimate: "20 min"
  },
  {
    title: "Tragic Optimism Practice",
    description: "Take one painful experience from your past. Write how it contributed to who you are today.",
    book: "Man's Search for Meaning",
    bookIcon: "💫",
    type: "reflection",
    xp: 60,
    difficulty: "hard",
    timeEstimate: "20 min"
  },

  // The Subtle Art Challenges
  {
    title: "F*ck Budget Audit",
    description: "List 10 things you currently give f*cks about. Mark which ones are truly worth it. Plan to drop 3.",
    book: "The Subtle Art",
    bookIcon: "🎸",
    type: "reflection",
    xp: 45,
    difficulty: "medium",
    timeEstimate: "15 min"
  },
  {
    title: "Responsibility Reclaim",
    description: "Think of something you're blaming on others. Write how you could take responsibility for your response to it.",
    book: "The Subtle Art",
    bookIcon: "🎸",
    type: "reflection",
    xp: 50,
    difficulty: "medium",
    timeEstimate: "10 min"
  },
  {
    title: "Anti-Entitlement Check",
    description: "List 3 things you feel entitled to. Challenge each: Why do you deserve this? What if you don't?",
    book: "The Subtle Art",
    bookIcon: "🎸",
    type: "reflection",
    xp: 40,
    difficulty: "medium",
    timeEstimate: "10 min"
  },
  {
    title: "Embrace a Negative",
    description: "Instead of avoiding a negative feeling today, sit with it for 5 minutes. Don't judge it. Just feel it.",
    book: "The Subtle Art",
    bookIcon: "🎸",
    type: "experiment",
    xp: 45,
    difficulty: "medium",
    timeEstimate: "5 min"
  },
  {
    title: "Value Hierarchy",
    description: "List your top 5 values. Now rank them. What would you sacrifice #5 for #1? This reveals your true priorities.",
    book: "The Subtle Art",
    bookIcon: "🎸",
    type: "reflection",
    xp: 55,
    difficulty: "hard",
    timeEstimate: "20 min"
  }
];

export default function DailyChallenges() {
  const [todaysChallenges, setTodaysChallenges] = useState<Challenge[]>(() => {
    // Generate 5 random challenges for today
    const shuffled = [...challengePool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5).map((c, i) => ({
      ...c,
      id: `challenge-${i}`,
      completed: false
    }));
  });

  const [totalXP, setTotalXP] = useState(0);
  const [streak, setStreak] = useState(3); // Demo streak
  const [showCelebration, setShowCelebration] = useState(false);

  const completedCount = todaysChallenges.filter(c => c.completed).length;
  const allCompleted = completedCount === todaysChallenges.length;
  const bonusXP = allCompleted ? 100 : 0;
  const earnedXP = todaysChallenges.filter(c => c.completed).reduce((sum, c) => sum + c.xp, 0) + bonusXP;

  const toggleChallenge = (id: string) => {
    setTodaysChallenges(challenges =>
      challenges.map(c => {
        if (c.id === id) {
          const newCompleted = !c.completed;
          if (newCompleted) {
            setTotalXP(xp => xp + c.xp);
          } else {
            setTotalXP(xp => xp - c.xp);
          }
          return { ...c, completed: newCompleted };
        }
        return c;
      })
    );
  };

  const refreshChallenges = () => {
    const shuffled = [...challengePool].sort(() => Math.random() - 0.5);
    setTodaysChallenges(shuffled.slice(0, 5).map((c, i) => ({
      ...c,
      id: `challenge-${i}-${Date.now()}`,
      completed: false
    })));
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-400 bg-green-500/20';
      case 'medium': return 'text-yellow-400 bg-yellow-500/20';
      case 'hard': return 'text-red-400 bg-red-500/20';
      default: return 'text-slate-400 bg-slate-500/20';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'action': return <Target className="w-4 h-4" />;
      case 'reflection': return <Brain className="w-4 h-4" />;
      case 'experiment': return <Sparkles className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white p-4">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-bold flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              Daily Challenges
            </h1>
            <p className="text-sm text-slate-400">Complete challenges to earn XP</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1">
              <Flame className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 font-bold">{streak} day streak</span>
            </div>
          </div>
        </div>

        {/* Progress Card */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-4 mb-6 border border-purple-500/30">
          <div className="flex items-center justify-between mb-3">
            <span className="text-slate-300">Today's Progress</span>
            <span className="text-purple-400 font-bold">{completedCount}/{todaysChallenges.length}</span>
          </div>

          <div className="bg-slate-800 rounded-full h-3 mb-3">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
              style={{ width: `${(completedCount / todaysChallenges.length) * 100}%` }}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span className="font-bold text-yellow-400">{earnedXP} XP</span>
              {allCompleted && (
                <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full">
                  +{bonusXP} bonus!
                </span>
              )}
            </div>
            {allCompleted && (
              <span className="text-green-400 font-semibold flex items-center gap-1">
                <CheckCircle className="w-4 h-4" /> All Done!
              </span>
            )}
          </div>
        </div>

        {/* Challenges List */}
        <div className="space-y-3 mb-6">
          {todaysChallenges.map((challenge) => (
            <div
              key={challenge.id}
              className={`bg-slate-800/50 rounded-xl p-4 border transition-all ${
                challenge.completed
                  ? 'border-green-500/50 bg-green-500/10'
                  : 'border-slate-700 hover:border-slate-600'
              }`}
            >
              <div className="flex items-start gap-3">
                <button
                  onClick={() => toggleChallenge(challenge.id)}
                  className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    challenge.completed
                      ? 'bg-green-500 border-green-500'
                      : 'border-slate-500 hover:border-green-500'
                  }`}
                >
                  {challenge.completed && <CheckCircle className="w-4 h-4 text-white" />}
                </button>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{challenge.bookIcon}</span>
                    <h3 className={`font-semibold ${challenge.completed ? 'text-green-400 line-through' : 'text-white'}`}>
                      {challenge.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-400 mb-2">{challenge.description}</p>

                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${getDifficultyColor(challenge.difficulty)}`}>
                      {challenge.difficulty}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {challenge.timeEstimate}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      {getTypeIcon(challenge.type)} {challenge.type}
                    </span>
                    <span className="text-xs text-yellow-400 font-semibold ml-auto">
                      +{challenge.xp} XP
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Refresh Button */}
        <button
          onClick={refreshChallenges}
          className="w-full py-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-300 transition-colors mb-6"
        >
          🔄 Get New Challenges
        </button>

        {/* Tips */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
          <h3 className="font-semibold text-blue-400 mb-2">💡 Challenge Types</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-orange-400" />
              <span className="text-slate-300"><strong>Action:</strong> Do something in the real world</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-purple-400" />
              <span className="text-slate-300"><strong>Reflection:</strong> Think deeply and write</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-pink-400" />
              <span className="text-slate-300"><strong>Experiment:</strong> Try something new</span>
            </div>
          </div>
        </div>

        {/* Completion Bonus Info */}
        {!allCompleted && (
          <div className="mt-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 text-center">
            <Gift className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
            <p className="text-yellow-300 text-sm">
              Complete all 5 challenges for a <strong>+100 XP bonus!</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
