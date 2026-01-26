import React, { useState, useEffect } from 'react';
import {
  Target, Flame, Brain, Clock, Star, Trophy, Zap, Heart,
  ChevronRight, ChevronDown, Check, X, Plus, Minus,
  BookOpen, Lightbulb, Quote, Calendar, TrendingUp,
  Play, Pause, RotateCcw, Volume2, Sun, Moon, Coffee,
  Award, Lock, Unlock, ArrowRight, Sparkles, Timer
} from 'lucide-react';

// ============================================
// TYPE DEFINITIONS
// ============================================

interface Habit {
  id: string;
  name: string;
  cue: string;
  craving: string;
  response: string;
  reward: string;
  streak: number;
  completedToday: boolean;
  category: 'morning' | 'work' | 'evening' | 'anytime';
}

interface DeepWorkSession {
  duration: number;
  completed: boolean;
  date: string;
}

interface FuckBudgetItem {
  id: string;
  item: string;
  fucks: number;
  worthy: boolean;
}

interface UserProgress {
  xp: number;
  level: number;
  habitsCompleted: number;
  deepWorkMinutes: number;
  lessonsCompleted: string[];
  achievements: string[];
  currentStreak: number;
}

// ============================================
// BOOK CONTENT & LESSONS
// ============================================

const bookContent = {
  atomicHabits: {
    title: "Atomic Habits",
    author: "James Clear",
    color: "orange",
    icon: "🔄",
    coreConcepts: [
      {
        id: "ah1",
        title: "The 1% Rule",
        summary: "Small improvements compound. 1% better every day = 37x better in a year.",
        insight: "Habits are the compound interest of self-improvement. The same way money multiplies through compound interest, the effects of your habits multiply as you repeat them.",
        exercise: "Identify ONE thing you can improve by just 1% today. Not a complete overhaul - just 1%.",
        quiz: {
          question: "If you get 1% better every day for one year, how much better will you be?",
          options: ["3.65x better", "12x better", "37x better", "100x better"],
          correct: 2,
          explanation: "1.01^365 = 37.78. Small gains compound into remarkable results!"
        }
      },
      {
        id: "ah2",
        title: "The 4 Laws of Behavior Change",
        summary: "Make it Obvious, Attractive, Easy, and Satisfying.",
        insight: "Every habit follows: Cue → Craving → Response → Reward. To build good habits, optimize each step. To break bad ones, invert the laws.",
        exercise: "Pick a habit you want to build. Design it using all 4 laws.",
        quiz: {
          question: "To BREAK a bad habit, you should make it:",
          options: ["Obvious, Attractive, Easy, Satisfying", "Invisible, Unattractive, Difficult, Unsatisfying", "Just use willpower", "Replace it immediately"],
          correct: 1,
          explanation: "Invert the 4 laws: Make it invisible, unattractive, difficult, and unsatisfying."
        }
      },
      {
        id: "ah3",
        title: "Identity-Based Habits",
        summary: "Focus on WHO you want to become, not WHAT you want to achieve.",
        insight: "The goal is not to read a book, it's to BECOME a reader. Every action is a vote for the type of person you want to become.",
        exercise: "Complete: 'I am the type of person who ___________'",
        quiz: {
          question: "What's more effective for lasting change?",
          options: ["Setting outcome goals", "Focusing on identity", "Using rewards", "Tracking progress"],
          correct: 1,
          explanation: "Identity change is the North Star of habit change. Behavior that is incongruent with the self will not last."
        }
      },
      {
        id: "ah4",
        title: "Habit Stacking",
        summary: "Link new habits to existing ones using: 'After I [CURRENT HABIT], I will [NEW HABIT].'",
        insight: "You don't need motivation if you have a system. Habit stacking uses the momentum of existing routines.",
        exercise: "Create 3 habit stacks for your morning routine.",
        quiz: {
          question: "The habit stacking formula is:",
          options: ["When I feel motivated, I will...", "After I [CURRENT], I will [NEW]", "Every day at [TIME], I will...", "If [TRIGGER], then [HABIT]"],
          correct: 1,
          explanation: "Habit stacking ties new behaviors to established ones, using existing neural pathways."
        }
      },
      {
        id: "ah5",
        title: "Environment Design",
        summary: "Make good habits obvious and bad habits invisible by designing your environment.",
        insight: "Motivation is overrated. Environment often matters more. Be the architect of your world, not just a consumer.",
        exercise: "Redesign ONE space to make a good habit easier and a bad habit harder.",
        quiz: {
          question: "According to James Clear, what matters more than motivation?",
          options: ["Willpower", "Discipline", "Environment", "Goals"],
          correct: 2,
          explanation: "Environment is the invisible hand that shapes human behavior. Design for laziness."
        }
      }
    ]
  },
  deepWork: {
    title: "Deep Work",
    author: "Cal Newport",
    color: "blue",
    icon: "🎯",
    coreConcepts: [
      {
        id: "dw1",
        title: "Deep Work Definition",
        summary: "Professional activities performed in distraction-free concentration that push cognitive capabilities.",
        insight: "Deep work is becoming increasingly RARE at exactly the same time it is becoming increasingly VALUABLE. If you cultivate this skill, you'll thrive.",
        exercise: "Calculate: How many hours of TRUE deep work did you do last week?",
        quiz: {
          question: "Deep work is valuable because:",
          options: ["It feels productive", "It's rare AND valuable in the economy", "Bosses like it", "It's easy once you start"],
          correct: 1,
          explanation: "The Deep Work Hypothesis: The ability to perform deep work is becoming increasingly rare AND increasingly valuable. Those who cultivate it will thrive."
        }
      },
      {
        id: "dw2",
        title: "The 4 Disciplines of Execution",
        summary: "Focus on the Wildly Important, Act on Lead Measures, Keep a Scoreboard, Create Cadence of Accountability.",
        insight: "Execution is more difficult than strategizing. These disciplines create a framework for consistent deep work.",
        exercise: "Define your ONE wildly important goal for this month.",
        quiz: {
          question: "A 'lead measure' in deep work is:",
          options: ["Hours of deep work scheduled", "Goals achieved", "Tasks completed", "Emails answered"],
          correct: 0,
          explanation: "Lead measures track behaviors that LEAD to success (like hours of deep work), not lag measures (outcomes)."
        }
      },
      {
        id: "dw3",
        title: "Attention Residue",
        summary: "When you switch tasks, your attention doesn't immediately follow—a residue remains stuck on the previous task.",
        insight: "Every time you glance at your inbox or phone, you leave attention residue that reduces your cognitive capacity for the main task.",
        exercise: "Try: Work on ONE thing for 90 minutes with zero task switching. Notice the difference.",
        quiz: {
          question: "Attention residue means:",
          options: ["You're tired from focusing", "Part of your mind stays on the previous task", "You can't multitask", "Deep work is exhausting"],
          correct: 1,
          explanation: "Sophie Leroy's research shows that when you switch tasks, part of your attention remains 'stuck' on the previous task, reducing performance."
        }
      },
      {
        id: "dw4",
        title: "Productive Meditation",
        summary: "Use physically occupied time (walking, showering) to focus on a single professional problem.",
        insight: "This practice strengthens your ability to sustain focus and provides unexpected creative breakthroughs.",
        exercise: "During your next walk, focus on ONE problem. Every time your mind wanders, bring it back.",
        quiz: {
          question: "Productive meditation should be done:",
          options: ["While sitting quietly", "During physical but not mental activities", "Only in the morning", "With background music"],
          correct: 1,
          explanation: "Use time when you're physically occupied (walking, driving, showering) but mentally free to focus deeply on one problem."
        }
      },
      {
        id: "dw5",
        title: "Shutdown Ritual",
        summary: "A strict routine that marks the end of work and allows complete mental rest.",
        insight: "Idleness is not laziness. Downtime aids insights, recharges deep work energy, and the work you skip is usually not that important.",
        exercise: "Create a 5-step shutdown ritual for the end of your workday.",
        quiz: {
          question: "Why is a shutdown ritual important?",
          options: ["It saves time", "It allows complete mental rest which aids performance", "It impresses colleagues", "It's not really important"],
          correct: 1,
          explanation: "Downtime aids insights (unconscious mind), helps recharge energy needed for deep work, and enforces work-life boundaries."
        }
      }
    ]
  },
  futureSelfe: {
    title: "Be Your Future Self Now",
    author: "Benjamin Hardy",
    color: "purple",
    icon: "🚀",
    coreConcepts: [
      {
        id: "fs1",
        title: "Future Self Disconnection",
        summary: "Most people view their Future Self as a stranger, leading to poor decisions.",
        insight: "Research shows we treat our Future Self like a different person. We discount their wellbeing. The more connected you are, the better decisions you make.",
        exercise: "Write a letter FROM your Future Self (10 years from now) to current you.",
        quiz: {
          question: "Why do people make poor long-term decisions?",
          options: ["Lack of information", "They view Future Self as a stranger", "Not enough planning", "Too many options"],
          correct: 1,
          explanation: "Brain scans show we think of our Future Self using the same regions we use for strangers. Connection to Future Self predicts better decisions."
        }
      },
      {
        id: "fs2",
        title: "Prospection",
        summary: "Your brain is primarily a prospection (future-simulating) machine, not a memory machine.",
        insight: "The quality of your life depends on the quality of your vision of the future. Without a compelling Future Self, you'll be driven by your past.",
        exercise: "Describe your ideal day 5 years from now in vivid detail.",
        quiz: {
          question: "According to Hardy, your brain is primarily:",
          options: ["A memory storage device", "A future-simulating machine", "A problem-solving tool", "A reaction system"],
          correct: 1,
          explanation: "Research shows humans spend most of their time thinking about the future. We're built for prospection, not just retrospection."
        }
      },
      {
        id: "fs3",
        title: "The Gap vs The Gain",
        summary: "Measure progress backward from where you started, not forward to an ideal.",
        insight: "The Gap (comparing to ideal) creates unhappiness. The Gain (comparing to past self) creates confidence and momentum.",
        exercise: "List 10 ways you've grown in the last 3 years. Feel the gain.",
        quiz: {
          question: "To feel motivated and confident, measure yourself against:",
          options: ["Your ideal future", "Other people", "Your past self", "External standards"],
          correct: 2,
          explanation: "Being in 'The Gain' (measuring backward) creates happiness and confidence. 'The Gap' (measuring to an ideal) creates misery."
        }
      },
      {
        id: "fs4",
        title: "Identity Drives Behavior",
        summary: "Your current identity is based on your past. Your Future Self requires a NEW identity.",
        insight: "You can't become your Future Self while clinging to your current identity. Transformation requires identity death and rebirth.",
        exercise: "What identity must you release to become your Future Self?",
        quiz: {
          question: "To become your Future Self, you must:",
          options: ["Just work harder", "Let go of your current identity", "Find better mentors", "Create better goals"],
          correct: 1,
          explanation: "Your current self is the product of your former self. Becoming your Future Self requires letting go of who you are now."
        }
      },
      {
        id: "fs5",
        title: "10X Easier Than 2X",
        summary: "Going 10x bigger forces qualitative changes. 2x just means doing more of the same.",
        insight: "10x goals eliminate 80% of your current activities. They force you to focus on what REALLY matters and find entirely new approaches.",
        exercise: "If you had to 10x your income/impact, what would you STOP doing?",
        quiz: {
          question: "Why is 10X easier than 2X?",
          options: ["It's not, it's just motivational talk", "10X forces qualitative change, 2X is just more effort", "10X takes less time", "10X is more realistic"],
          correct: 1,
          explanation: "2X keeps you playing the same game harder. 10X forces you to change the game entirely—eliminating the non-essential."
        }
      }
    ]
  },
  mansSearch: {
    title: "Man's Search for Meaning",
    author: "Viktor Frankl",
    color: "emerald",
    icon: "💫",
    coreConcepts: [
      {
        id: "ms1",
        title: "The Last Human Freedom",
        summary: "Between stimulus and response, there is a space. In that space lies our freedom to choose.",
        insight: "Everything can be taken from a person but one thing: the last of human freedoms—to choose one's attitude in any circumstance.",
        exercise: "Recall a recent frustration. What was the space between stimulus and response? What could you have chosen?",
        quiz: {
          question: "What is the 'last human freedom' according to Frankl?",
          options: ["Freedom of speech", "Freedom of movement", "Freedom to choose your attitude", "Freedom from suffering"],
          correct: 2,
          explanation: "Even in concentration camps, Frankl observed that humans retain the freedom to choose their inner response to any situation."
        }
      },
      {
        id: "ms2",
        title: "The Will to Meaning",
        summary: "The primary human drive is not pleasure (Freud) or power (Adler), but MEANING.",
        insight: "Those who have a 'why' to live can bear almost any 'how.' Meaning is found through work, love, or suffering.",
        exercise: "What is your 'why'? Write it in one sentence.",
        quiz: {
          question: "Frankl's logotherapy is based on the idea that humans primarily seek:",
          options: ["Pleasure", "Power", "Meaning", "Security"],
          correct: 2,
          explanation: "Logotherapy (logos = meaning) posits that the search for meaning is the primary motivational force in humans."
        }
      },
      {
        id: "ms3",
        title: "Three Sources of Meaning",
        summary: "Meaning comes from: (1) Creating work/deeds, (2) Experiencing love/beauty, (3) Attitude toward unavoidable suffering.",
        insight: "Even when we can't change a situation, we can change ourselves. Suffering ceases to be suffering when it finds meaning.",
        exercise: "Which of the three sources of meaning is most active in your life right now?",
        quiz: {
          question: "According to Frankl, suffering becomes meaningful when:",
          options: ["It ends", "We understand its cause", "We find meaning in it", "We avoid it"],
          correct: 2,
          explanation: "Suffering without meaning is despair. But suffering with meaning becomes sacrifice, growth, or witness. We can't always change our fate, but we can change our attitude."
        }
      },
      {
        id: "ms4",
        title: "The Existential Vacuum",
        summary: "Modern people suffer from a sense of meaninglessness—an 'existential vacuum.'",
        insight: "Unlike animals, humans aren't told by instincts what to do. Unlike past generations, we aren't told by traditions. We must find our own meaning.",
        exercise: "When do you feel most empty or bored? What is the 'vacuum' seeking?",
        quiz: {
          question: "The 'existential vacuum' describes:",
          options: ["Physical emptiness", "A sense of meaninglessness", "Lack of social connection", "Financial poverty"],
          correct: 1,
          explanation: "The existential vacuum is a widespread feeling of meaninglessness and emptiness, especially in modern society where traditions no longer prescribe meaning."
        }
      },
      {
        id: "ms5",
        title: "Tragic Optimism",
        summary: "Saying yes to life in spite of pain, guilt, and death. Finding meaning despite tragedy.",
        insight: "Optimism is not naive happiness. It's the capacity to turn suffering into achievement, guilt into change, mortality into meaningful action.",
        exercise: "What pain or difficulty in your life might contain hidden meaning or growth?",
        quiz: {
          question: "'Tragic optimism' means:",
          options: ["Being happy despite problems", "Ignoring difficulties", "Finding meaning through suffering", "Expecting things to get worse"],
          correct: 2,
          explanation: "Tragic optimism isn't denial—it's the ability to say 'yes' to life despite its tragic aspects, transforming suffering into achievement and growth."
        }
      }
    ]
  },
  subtleArt: {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    color: "red",
    icon: "🎸",
    coreConcepts: [
      {
        id: "sa1",
        title: "The Feedback Loop from Hell",
        summary: "Feeling bad about feeling bad. Anxious about being anxious. This meta-negativity is the real problem.",
        insight: "The desire for more positive experience is itself a negative experience. Accepting negative experience is itself a positive experience.",
        exercise: "Notice: When do you beat yourself up for feeling bad? Can you just feel the original feeling?",
        quiz: {
          question: "The 'feedback loop from hell' is:",
          options: ["External criticism", "Feeling bad about feeling bad", "Social media comparison", "Work stress"],
          correct: 1,
          explanation: "We feel guilty for feeling guilty. Anxious about being anxious. This meta-layer of suffering is often worse than the original problem."
        }
      },
      {
        id: "sa2",
        title: "The Backwards Law",
        summary: "The more you pursue feeling better, the less satisfied you become. Wanting positive experience is negative experience.",
        insight: "Everything worthwhile is achieved through negative experience. The avoidance of suffering IS suffering.",
        exercise: "What are you chasing that's actually making you more anxious/unhappy?",
        quiz: {
          question: "According to the 'Backwards Law':",
          options: ["Hard work leads to success", "Pursuing happiness makes you unhappy", "You should set goals", "Positive thinking works"],
          correct: 1,
          explanation: "Alan Watts' insight: The more you try to feel better, the less satisfied you become. Accept negativity and you'll feel better."
        }
      },
      {
        id: "sa3",
        title: "You're Always Choosing",
        summary: "You're not special. You're always choosing what to give a f*ck about. Choose wisely.",
        insight: "Not giving a f*ck doesn't mean being indifferent. It means being comfortable with being different. Choose your struggles.",
        exercise: "List 5 things you currently give too many f*cks about. Which will you drop?",
        quiz: {
          question: "Not giving a f*ck means:",
          options: ["Being indifferent to everything", "Choosing what matters and ignoring the rest", "Not caring about anyone", "Being selfish"],
          correct: 1,
          explanation: "You have limited f*cks to give. Don't give them to petty things. Reserve them for what truly aligns with your values."
        }
      },
      {
        id: "sa4",
        title: "The Responsibility/Fault Fallacy",
        summary: "Fault is past tense. Responsibility is present tense. You're always responsible for your response.",
        insight: "Something might not be your fault, but it's always your responsibility to deal with it. Playing victim is comfortable but powerless.",
        exercise: "What are you blaming on others that you could take responsibility for?",
        quiz: {
          question: "The difference between fault and responsibility is:",
          options: ["There is no difference", "Fault is past, responsibility is present", "Fault is worse", "Responsibility means you caused it"],
          correct: 1,
          explanation: "Something may not be your fault, but it's your responsibility to deal with it. Fault = past. Responsibility = present choice."
        }
      },
      {
        id: "sa5",
        title: "The Entitlement Myth",
        summary: "You are not special. And that's okay. The rare, extraordinary life is earned, not owed.",
        insight: "Entitlement comes in two flavors: 'I'm awesome and the world should recognize it' or 'I'm uniquely broken and deserve sympathy.' Both are delusions.",
        exercise: "Where do you feel entitled? What would change if you accepted you're ordinary?",
        quiz: {
          question: "Manson argues that believing you're special:",
          options: ["Is healthy self-esteem", "Leads to entitlement and frustration", "Helps achieve goals", "Is necessary for success"],
          correct: 1,
          explanation: "The belief that you're special (either amazingly great or uniquely broken) leads to entitlement and inability to accept reality."
        }
      }
    ]
  }
};

// ============================================
// ACHIEVEMENTS SYSTEM
// ============================================

const achievementsList = [
  { id: "first_lesson", name: "First Steps", desc: "Complete your first lesson", icon: "🎯", xp: 50 },
  { id: "habit_created", name: "Habit Architect", desc: "Create your first habit", icon: "🔨", xp: 75 },
  { id: "deep_work_30", name: "Focus Initiate", desc: "Complete 30 min deep work", icon: "⏱️", xp: 100 },
  { id: "quiz_perfect", name: "Sharp Mind", desc: "Get a quiz question right", icon: "🧠", xp: 50 },
  { id: "five_lessons", name: "Knowledge Seeker", desc: "Complete 5 lessons", icon: "📚", xp: 150 },
  { id: "all_books_intro", name: "Explorer", desc: "Read from all 5 books", icon: "🗺️", xp: 200 },
  { id: "week_streak", name: "Consistent", desc: "7-day habit streak", icon: "🔥", xp: 300 },
  { id: "deep_work_master", name: "Deep Worker", desc: "3 hours total deep work", icon: "🎯", xp: 500 },
];

// ============================================
// MAIN COMPONENT
// ============================================

export default function PersonalDevelopmentDashboard() {
  // Navigation State
  const [activeTab, setActiveTab] = useState<'home' | 'learn' | 'habits' | 'deepwork' | 'fuckbudget' | 'futureself'>('home');
  const [activeBook, setActiveBook] = useState<string | null>(null);
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  // User Data State
  const [userProgress, setUserProgress] = useState<UserProgress>({
    xp: 0,
    level: 1,
    habitsCompleted: 0,
    deepWorkMinutes: 0,
    lessonsCompleted: [],
    achievements: [],
    currentStreak: 0
  });

  // Habits State
  const [habits, setHabits] = useState<Habit[]>([]);
  const [newHabitForm, setNewHabitForm] = useState({
    name: '',
    cue: '',
    craving: '',
    response: '',
    reward: '',
    category: 'morning' as const
  });
  const [showHabitForm, setShowHabitForm] = useState(false);

  // Deep Work State
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerMinutes, setTimerMinutes] = useState(25);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [selectedDuration, setSelectedDuration] = useState(25);

  // F*ck Budget State
  const [fuckBudget, setFuckBudget] = useState<FuckBudgetItem[]>([
    { id: '1', item: "What strangers think of me", fucks: 3, worthy: false },
    { id: '2', item: "My family's wellbeing", fucks: 10, worthy: true },
    { id: '3', item: "Being liked by everyone", fucks: 2, worthy: false },
    { id: '4', item: "My meaningful work", fucks: 9, worthy: true },
  ]);
  const [newFuckItem, setNewFuckItem] = useState('');

  // Future Self State
  const [futureSelfLetter, setFutureSelfLetter] = useState('');
  const [futureIdentity, setFutureIdentity] = useState('');

  // Timer Effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        if (timerSeconds > 0) {
          setTimerSeconds(s => s - 1);
        } else if (timerMinutes > 0) {
          setTimerMinutes(m => m - 1);
          setTimerSeconds(59);
        } else {
          setIsTimerRunning(false);
          addXP(selectedDuration * 2);
          addDeepWorkMinutes(selectedDuration);
          checkAchievement('deep_work_30');
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerMinutes, timerSeconds]);

  // XP and Level Calculations
  const xpForLevel = (level: number) => level * 500;
  const currentLevelXP = userProgress.xp - (userProgress.level - 1) * 500;
  const progressPercent = (currentLevelXP / xpForLevel(userProgress.level)) * 100;

  // Helper Functions
  const addXP = (amount: number) => {
    setUserProgress(prev => {
      const newXP = prev.xp + amount;
      const newLevel = Math.floor(newXP / 500) + 1;
      return { ...prev, xp: newXP, level: newLevel };
    });
  };

  const addDeepWorkMinutes = (minutes: number) => {
    setUserProgress(prev => ({
      ...prev,
      deepWorkMinutes: prev.deepWorkMinutes + minutes
    }));
  };

  const completeLesson = (lessonId: string) => {
    if (!userProgress.lessonsCompleted.includes(lessonId)) {
      setUserProgress(prev => ({
        ...prev,
        lessonsCompleted: [...prev.lessonsCompleted, lessonId]
      }));
      addXP(100);
      if (userProgress.lessonsCompleted.length === 0) {
        checkAchievement('first_lesson');
      }
      if (userProgress.lessonsCompleted.length === 4) {
        checkAchievement('five_lessons');
      }
    }
  };

  const checkAchievement = (achievementId: string) => {
    if (!userProgress.achievements.includes(achievementId)) {
      const achievement = achievementsList.find(a => a.id === achievementId);
      if (achievement) {
        setUserProgress(prev => ({
          ...prev,
          achievements: [...prev.achievements, achievementId]
        }));
        addXP(achievement.xp);
      }
    }
  };

  const toggleHabitComplete = (habitId: string) => {
    setHabits(prev => prev.map(h => {
      if (h.id === habitId) {
        const newCompleted = !h.completedToday;
        if (newCompleted) {
          addXP(25);
        }
        return {
          ...h,
          completedToday: newCompleted,
          streak: newCompleted ? h.streak + 1 : Math.max(0, h.streak - 1)
        };
      }
      return h;
    }));
  };

  const addHabit = () => {
    if (newHabitForm.name) {
      const newHabit: Habit = {
        id: Date.now().toString(),
        ...newHabitForm,
        streak: 0,
        completedToday: false
      };
      setHabits(prev => [...prev, newHabit]);
      setNewHabitForm({ name: '', cue: '', craving: '', response: '', reward: '', category: 'morning' });
      setShowHabitForm(false);
      checkAchievement('habit_created');
    }
  };

  const resetTimer = () => {
    setTimerMinutes(selectedDuration);
    setTimerSeconds(0);
    setIsTimerRunning(false);
  };

  // Get book by key
  const getBook = (key: string) => bookContent[key as keyof typeof bookContent];

  // ============================================
  // RENDER FUNCTIONS
  // ============================================

  const renderHome = () => (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-2xl p-6 border border-orange-500/30">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-orange-400">Personal Development Dashboard</h1>
            <p className="text-slate-400">Module 1 • 5 Books • Interactive Learning</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-bold">Level {userProgress.level}</span>
            </div>
            <p className="text-sm text-slate-400">{userProgress.xp} XP</p>
          </div>
        </div>

        {/* XP Progress Bar */}
        <div className="bg-slate-800 rounded-full h-3 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-500"
            style={{ width: `${Math.min(progressPercent, 100)}%` }}
          />
        </div>
        <p className="text-xs text-slate-500 mt-1">{currentLevelXP} / {xpForLevel(userProgress.level)} XP to Level {userProgress.level + 1}</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-slate-800/50 rounded-xl p-4 text-center">
          <BookOpen className="w-6 h-6 text-blue-400 mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">{userProgress.lessonsCompleted.length}</p>
          <p className="text-xs text-slate-400">Lessons Done</p>
        </div>
        <div className="bg-slate-800/50 rounded-xl p-4 text-center">
          <Flame className="w-6 h-6 text-orange-400 mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">{habits.filter(h => h.completedToday).length}/{habits.length}</p>
          <p className="text-xs text-slate-400">Habits Today</p>
        </div>
        <div className="bg-slate-800/50 rounded-xl p-4 text-center">
          <Clock className="w-6 h-6 text-purple-400 mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">{userProgress.deepWorkMinutes}</p>
          <p className="text-xs text-slate-400">Deep Work Min</p>
        </div>
        <div className="bg-slate-800/50 rounded-xl p-4 text-center">
          <Award className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">{userProgress.achievements.length}</p>
          <p className="text-xs text-slate-400">Achievements</p>
        </div>
      </div>

      {/* Book Grid */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-3">📚 Your Library</h2>
        <div className="grid gap-3">
          {Object.entries(bookContent).map(([key, book]) => {
            const lessonsInBook = book.coreConcepts.filter(c =>
              userProgress.lessonsCompleted.includes(c.id)
            ).length;
            const totalLessons = book.coreConcepts.length;
            const progress = (lessonsInBook / totalLessons) * 100;

            return (
              <button
                key={key}
                onClick={() => { setActiveBook(key); setActiveTab('learn'); setActiveLessonIndex(0); }}
                className={`bg-slate-800/50 hover:bg-slate-700/50 rounded-xl p-4 text-left transition-all border border-transparent hover:border-${book.color}-500/30`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{book.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{book.title}</h3>
                    <p className="text-sm text-slate-400">{book.author}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex-1 bg-slate-700 rounded-full h-1.5">
                        <div
                          className={`h-full rounded-full bg-${book.color}-500`}
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-slate-400">{lessonsInBook}/{totalLessons}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-500" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-3">🏆 Achievements</h2>
        <div className="flex flex-wrap gap-2">
          {achievementsList.map(achievement => {
            const unlocked = userProgress.achievements.includes(achievement.id);
            return (
              <div
                key={achievement.id}
                className={`px-3 py-2 rounded-lg flex items-center gap-2 ${
                  unlocked
                    ? 'bg-yellow-500/20 border border-yellow-500/30'
                    : 'bg-slate-800/30 border border-slate-700'
                }`}
                title={achievement.desc}
              >
                <span className={unlocked ? '' : 'grayscale opacity-50'}>{achievement.icon}</span>
                <span className={`text-sm ${unlocked ? 'text-yellow-400' : 'text-slate-500'}`}>
                  {achievement.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderLearn = () => {
    if (!activeBook) {
      return (
        <div className="text-center py-12">
          <BookOpen className="w-12 h-12 text-slate-500 mx-auto mb-4" />
          <p className="text-slate-400">Select a book from the Home tab to start learning</p>
          <button
            onClick={() => setActiveTab('home')}
            className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
          >
            Go to Library
          </button>
        </div>
      );
    }

    const book = getBook(activeBook);
    const lesson = book.coreConcepts[activeLessonIndex];
    const isCompleted = userProgress.lessonsCompleted.includes(lesson.id);

    return (
      <div className="space-y-4">
        {/* Book Header */}
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => setActiveBook(null)}
            className="text-slate-400 hover:text-white"
          >
            ← Back
          </button>
          <span className="text-2xl">{book.icon}</span>
          <div>
            <h2 className="font-bold text-white">{book.title}</h2>
            <p className="text-sm text-slate-400">{book.author}</p>
          </div>
        </div>

        {/* Lesson Navigation */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {book.coreConcepts.map((concept, idx) => {
            const done = userProgress.lessonsCompleted.includes(concept.id);
            return (
              <button
                key={concept.id}
                onClick={() => { setActiveLessonIndex(idx); setShowQuiz(false); setSelectedAnswer(null); setShowExplanation(false); }}
                className={`px-3 py-1.5 rounded-lg text-sm whitespace-nowrap transition-all ${
                  activeLessonIndex === idx
                    ? `bg-${book.color}-500 text-white`
                    : done
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {done && <Check className="w-3 h-3 inline mr-1" />}
                {idx + 1}. {concept.title.slice(0, 15)}...
              </button>
            );
          })}
        </div>

        {/* Lesson Content */}
        <div className="bg-slate-800/50 rounded-xl p-5 space-y-4">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-bold text-white">{lesson.title}</h3>
            {isCompleted && (
              <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <Check className="w-3 h-3" /> Completed
              </span>
            )}
          </div>

          <div className="bg-slate-700/50 rounded-lg p-4">
            <p className="text-slate-200 font-medium">{lesson.summary}</p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <p className="text-slate-300 italic">💡 {lesson.insight}</p>
          </div>

          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
            <p className="text-purple-300 font-medium mb-1">🎯 Try This:</p>
            <p className="text-slate-300">{lesson.exercise}</p>
          </div>

          {/* Quiz Section */}
          {!showQuiz ? (
            <button
              onClick={() => setShowQuiz(true)}
              className="w-full py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              🧠 Test Your Understanding
            </button>
          ) : (
            <div className="bg-slate-700/50 rounded-lg p-4 space-y-3">
              <p className="font-semibold text-white">{lesson.quiz.question}</p>
              <div className="space-y-2">
                {lesson.quiz.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      if (!showExplanation) {
                        setSelectedAnswer(idx);
                      }
                    }}
                    disabled={showExplanation}
                    className={`w-full p-3 rounded-lg text-left transition-all ${
                      selectedAnswer === idx
                        ? showExplanation
                          ? idx === lesson.quiz.correct
                            ? 'bg-green-500/30 border-2 border-green-500'
                            : 'bg-red-500/30 border-2 border-red-500'
                          : 'bg-orange-500/30 border-2 border-orange-500'
                        : showExplanation && idx === lesson.quiz.correct
                        ? 'bg-green-500/20 border border-green-500/50'
                        : 'bg-slate-600 hover:bg-slate-500'
                    } ${showExplanation ? 'cursor-default' : 'cursor-pointer'}`}
                  >
                    <span className="text-slate-200">{option}</span>
                  </button>
                ))}
              </div>

              {selectedAnswer !== null && !showExplanation && (
                <button
                  onClick={() => {
                    setShowExplanation(true);
                    if (selectedAnswer === lesson.quiz.correct) {
                      addXP(50);
                      checkAchievement('quiz_perfect');
                    }
                    completeLesson(lesson.id);
                  }}
                  className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Check Answer
                </button>
              )}

              {showExplanation && (
                <div className={`p-3 rounded-lg ${
                  selectedAnswer === lesson.quiz.correct
                    ? 'bg-green-500/20 border border-green-500/30'
                    : 'bg-orange-500/20 border border-orange-500/30'
                }`}>
                  <p className="font-semibold mb-1">
                    {selectedAnswer === lesson.quiz.correct ? '✅ Correct!' : '❌ Not quite!'}
                  </p>
                  <p className="text-sm text-slate-300">{lesson.quiz.explanation}</p>
                </div>
              )}
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between pt-4">
            <button
              onClick={() => {
                if (activeLessonIndex > 0) {
                  setActiveLessonIndex(activeLessonIndex - 1);
                  setShowQuiz(false);
                  setSelectedAnswer(null);
                  setShowExplanation(false);
                }
              }}
              disabled={activeLessonIndex === 0}
              className="px-4 py-2 bg-slate-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-600"
            >
              ← Previous
            </button>
            <button
              onClick={() => {
                if (activeLessonIndex < book.coreConcepts.length - 1) {
                  setActiveLessonIndex(activeLessonIndex + 1);
                  setShowQuiz(false);
                  setSelectedAnswer(null);
                  setShowExplanation(false);
                }
              }}
              disabled={activeLessonIndex === book.coreConcepts.length - 1}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-600"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderHabits = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-orange-400">🔄 Habit Laboratory</h2>
        <button
          onClick={() => setShowHabitForm(!showHabitForm)}
          className="px-3 py-1.5 bg-orange-500 text-white rounded-lg text-sm hover:bg-orange-600 flex items-center gap-1"
        >
          <Plus className="w-4 h-4" /> New Habit
        </button>
      </div>

      <div className="bg-slate-800/30 rounded-lg p-4">
        <p className="text-slate-300 text-sm">
          <span className="text-orange-400 font-semibold">From Atomic Habits:</span> Every habit follows the loop:
          <span className="text-blue-400"> Cue</span> →
          <span className="text-purple-400"> Craving</span> →
          <span className="text-green-400"> Response</span> →
          <span className="text-yellow-400"> Reward</span>
        </p>
      </div>

      {/* New Habit Form */}
      {showHabitForm && (
        <div className="bg-slate-800/50 rounded-xl p-4 space-y-3 border border-orange-500/30">
          <h3 className="font-semibold text-white">Design Your Habit (4 Laws)</h3>

          <div>
            <label className="block text-sm text-slate-400 mb-1">Habit Name</label>
            <input
              type="text"
              value={newHabitForm.name}
              onChange={e => setNewHabitForm({...newHabitForm, name: e.target.value})}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white"
              placeholder="e.g., Morning meditation"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm text-blue-400 mb-1">1. Cue (Make it Obvious)</label>
              <input
                type="text"
                value={newHabitForm.cue}
                onChange={e => setNewHabitForm({...newHabitForm, cue: e.target.value})}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm"
                placeholder="After I wake up..."
              />
            </div>
            <div>
              <label className="block text-sm text-purple-400 mb-1">2. Craving (Make it Attractive)</label>
              <input
                type="text"
                value={newHabitForm.craving}
                onChange={e => setNewHabitForm({...newHabitForm, craving: e.target.value})}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm"
                placeholder="I will feel calm and focused..."
              />
            </div>
            <div>
              <label className="block text-sm text-green-400 mb-1">3. Response (Make it Easy)</label>
              <input
                type="text"
                value={newHabitForm.response}
                onChange={e => setNewHabitForm({...newHabitForm, response: e.target.value})}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm"
                placeholder="I will meditate for 2 minutes"
              />
            </div>
            <div>
              <label className="block text-sm text-yellow-400 mb-1">4. Reward (Make it Satisfying)</label>
              <input
                type="text"
                value={newHabitForm.reward}
                onChange={e => setNewHabitForm({...newHabitForm, reward: e.target.value})}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm"
                placeholder="I'll enjoy my morning coffee"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-1">Category</label>
            <select
              value={newHabitForm.category}
              onChange={e => setNewHabitForm({...newHabitForm, category: e.target.value as any})}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white"
            >
              <option value="morning">🌅 Morning</option>
              <option value="work">💼 Work</option>
              <option value="evening">🌙 Evening</option>
              <option value="anytime">⏰ Anytime</option>
            </select>
          </div>

          <div className="flex gap-2">
            <button
              onClick={addHabit}
              className="flex-1 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Create Habit
            </button>
            <button
              onClick={() => setShowHabitForm(false)}
              className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-500"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Habits List */}
      {habits.length === 0 ? (
        <div className="text-center py-8 text-slate-400">
          <Target className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>No habits yet. Create your first habit above!</p>
          <p className="text-sm mt-2">Remember: Start small. A 2-minute habit beats a 2-hour intention.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {['morning', 'work', 'evening', 'anytime'].map(category => {
            const categoryHabits = habits.filter(h => h.category === category);
            if (categoryHabits.length === 0) return null;

            const categoryEmoji = { morning: '🌅', work: '💼', evening: '🌙', anytime: '⏰' }[category];

            return (
              <div key={category}>
                <h3 className="text-sm font-medium text-slate-400 mb-2">
                  {categoryEmoji} {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
                {categoryHabits.map(habit => (
                  <div
                    key={habit.id}
                    className={`bg-slate-800/50 rounded-lg p-4 mb-2 border transition-all ${
                      habit.completedToday
                        ? 'border-green-500/50 bg-green-500/10'
                        : 'border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => toggleHabitComplete(habit.id)}
                          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                            habit.completedToday
                              ? 'bg-green-500 border-green-500 text-white'
                              : 'border-slate-500 hover:border-green-500'
                          }`}
                        >
                          {habit.completedToday && <Check className="w-5 h-5" />}
                        </button>
                        <div>
                          <p className={`font-medium ${habit.completedToday ? 'text-green-400' : 'text-white'}`}>
                            {habit.name}
                          </p>
                          <p className="text-xs text-slate-400">
                            {habit.cue && `Cue: ${habit.cue}`}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Flame className={`w-4 h-4 ${habit.streak > 0 ? 'text-orange-400' : 'text-slate-600'}`} />
                        <span className={`text-sm ${habit.streak > 0 ? 'text-orange-400' : 'text-slate-500'}`}>
                          {habit.streak}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      )}

      {/* Habit Stacking Tip */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-blue-300 font-medium text-sm">💡 Habit Stacking Formula:</p>
        <p className="text-slate-300 text-sm mt-1">
          "After I [CURRENT HABIT], I will [NEW HABIT]."
        </p>
        <p className="text-slate-400 text-xs mt-2">
          Example: "After I pour my morning coffee, I will meditate for 2 minutes."
        </p>
      </div>
    </div>
  );

  const renderDeepWork = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-blue-400">🎯 Deep Work Chamber</h2>

      <div className="bg-slate-800/30 rounded-lg p-4">
        <p className="text-slate-300 text-sm">
          <span className="text-blue-400 font-semibold">From Deep Work:</span> "Professional activities performed in distraction-free concentration that push your cognitive capabilities to their limit."
        </p>
      </div>

      {/* Timer */}
      <div className="bg-slate-800/50 rounded-xl p-6 text-center">
        <div className="text-6xl font-mono font-bold text-white mb-4">
          {String(timerMinutes).padStart(2, '0')}:{String(timerSeconds).padStart(2, '0')}
        </div>

        {/* Duration Selection */}
        {!isTimerRunning && timerMinutes === selectedDuration && timerSeconds === 0 && (
          <div className="flex justify-center gap-2 mb-4">
            {[25, 45, 60, 90].map(duration => (
              <button
                key={duration}
                onClick={() => { setSelectedDuration(duration); setTimerMinutes(duration); }}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedDuration === duration
                    ? 'bg-blue-500 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {duration}m
              </button>
            ))}
          </div>
        )}

        {/* Controls */}
        <div className="flex justify-center gap-3">
          <button
            onClick={() => setIsTimerRunning(!isTimerRunning)}
            className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2 ${
              isTimerRunning
                ? 'bg-yellow-500 text-black hover:bg-yellow-600'
                : 'bg-green-500 text-white hover:bg-green-600'
            }`}
          >
            {isTimerRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            {isTimerRunning ? 'Pause' : 'Start Focus'}
          </button>
          <button
            onClick={resetTimer}
            className="px-4 py-3 bg-slate-700 text-white rounded-xl hover:bg-slate-600"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>

        {/* Stats */}
        <div className="mt-6 pt-4 border-t border-slate-700">
          <p className="text-slate-400 text-sm">Total Deep Work Time</p>
          <p className="text-2xl font-bold text-blue-400">
            {Math.floor(userProgress.deepWorkMinutes / 60)}h {userProgress.deepWorkMinutes % 60}m
          </p>
        </div>
      </div>

      {/* Deep Work Rules */}
      <div className="bg-slate-800/50 rounded-xl p-4">
        <h3 className="font-semibold text-white mb-3">📋 Deep Work Rules</h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span className="text-slate-300">Close all tabs except what you need</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span className="text-slate-300">Put phone in another room or on airplane mode</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span className="text-slate-300">Set a clear goal for this session</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span className="text-slate-300">No task switching - single focus only</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-red-400">✗</span>
            <span className="text-slate-300">No "quick checks" of email or messages</span>
          </div>
        </div>
      </div>

      {/* Attention Residue Warning */}
      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
        <p className="text-red-300 font-medium text-sm">⚠️ Attention Residue Alert</p>
        <p className="text-slate-300 text-sm mt-1">
          Every time you check your phone or switch tasks, part of your attention stays stuck on that distraction.
          This reduces your cognitive capacity for up to 25 minutes!
        </p>
      </div>
    </div>
  );

  const renderFuckBudget = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-red-400">🎸 F*ck Budget Allocator</h2>

      <div className="bg-slate-800/30 rounded-lg p-4">
        <p className="text-slate-300 text-sm">
          <span className="text-red-400 font-semibold">From The Subtle Art:</span> "You have a limited number of f*cks to give. Choose wisely."
        </p>
      </div>

      {/* Add New Item */}
      <div className="flex gap-2">
        <input
          type="text"
          value={newFuckItem}
          onChange={e => setNewFuckItem(e.target.value)}
          placeholder="What are you giving f*cks about?"
          className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white"
        />
        <button
          onClick={() => {
            if (newFuckItem) {
              setFuckBudget([...fuckBudget, {
                id: Date.now().toString(),
                item: newFuckItem,
                fucks: 5,
                worthy: false
              }]);
              setNewFuckItem('');
            }
          }}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Add
        </button>
      </div>

      {/* Budget Items */}
      <div className="space-y-3">
        {fuckBudget.map(item => (
          <div
            key={item.id}
            className={`bg-slate-800/50 rounded-lg p-4 border ${
              item.worthy ? 'border-green-500/30' : 'border-red-500/30'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <p className={`font-medium ${item.worthy ? 'text-green-400' : 'text-slate-300'}`}>
                {item.item}
              </p>
              <button
                onClick={() => {
                  setFuckBudget(fuckBudget.filter(i => i.id !== item.id));
                }}
                className="text-slate-500 hover:text-red-400"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">F*cks given:</span>
              <div className="flex-1 flex items-center gap-1">
                <button
                  onClick={() => {
                    setFuckBudget(fuckBudget.map(i =>
                      i.id === item.id ? {...i, fucks: Math.max(0, i.fucks - 1)} : i
                    ));
                  }}
                  className="p-1 bg-slate-700 rounded hover:bg-slate-600"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <div className="flex gap-0.5">
                  {[...Array(10)].map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-4 h-4 rounded ${
                        idx < item.fucks
                          ? item.worthy
                            ? 'bg-green-500'
                            : 'bg-red-500'
                          : 'bg-slate-700'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => {
                    setFuckBudget(fuckBudget.map(i =>
                      i.id === item.id ? {...i, fucks: Math.min(10, i.fucks + 1)} : i
                    ));
                  }}
                  className="p-1 bg-slate-700 rounded hover:bg-slate-600"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
              <span className="text-sm font-bold text-white">{item.fucks}/10</span>
            </div>

            <button
              onClick={() => {
                setFuckBudget(fuckBudget.map(i =>
                  i.id === item.id ? {...i, worthy: !i.worthy} : i
                ));
              }}
              className={`mt-2 text-xs px-2 py-1 rounded ${
                item.worthy
                  ? 'bg-green-500/20 text-green-400'
                  : 'bg-red-500/20 text-red-400'
              }`}
            >
              {item.worthy ? '✓ Worth it' : '✗ Not worth it'}
            </button>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-slate-800/50 rounded-xl p-4">
        <h3 className="font-semibold text-white mb-3">📊 Your F*ck Economy</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-red-400">
              {fuckBudget.filter(i => !i.worthy).reduce((a, b) => a + b.fucks, 0)}
            </p>
            <p className="text-xs text-slate-400">Wasted on unworthy things</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-green-400">
              {fuckBudget.filter(i => i.worthy).reduce((a, b) => a + b.fucks, 0)}
            </p>
            <p className="text-xs text-slate-400">Invested in worthy things</p>
          </div>
        </div>
      </div>

      {/* Wisdom */}
      <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
        <p className="text-purple-300 font-medium text-sm">💡 The Backwards Law</p>
        <p className="text-slate-300 text-sm mt-1">
          "The desire for more positive experience is itself a negative experience.
          Accepting negative experience is itself a positive experience."
        </p>
      </div>
    </div>
  );

  const renderFutureSelf = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-purple-400">🚀 Future Self Laboratory</h2>

      <div className="bg-slate-800/30 rounded-lg p-4">
        <p className="text-slate-300 text-sm">
          <span className="text-purple-400 font-semibold">From Be Your Future Self Now:</span> "Your current self is the product of your former self. Your Future Self will be the product of who you choose to be now."
        </p>
      </div>

      {/* Identity Statement */}
      <div className="bg-slate-800/50 rounded-xl p-4">
        <h3 className="font-semibold text-white mb-3">🪞 Future Identity Statement</h3>
        <p className="text-slate-400 text-sm mb-2">
          Complete: "In 3 years, I am the type of person who..."
        </p>
        <textarea
          value={futureIdentity}
          onChange={e => setFutureIdentity(e.target.value)}
          className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white h-24 resize-none"
          placeholder="...wakes up excited about my work, has built a successful business, maintains strong relationships, and has complete control over my time..."
        />
        <p className="text-xs text-slate-500 mt-2">
          💡 From Atomic Habits: "Every action is a vote for the type of person you want to become."
        </p>
      </div>

      {/* Letter from Future Self */}
      <div className="bg-slate-800/50 rounded-xl p-4">
        <h3 className="font-semibold text-white mb-3">✉️ Letter FROM Your Future Self</h3>
        <p className="text-slate-400 text-sm mb-2">
          Write as if you ARE your Future Self (10 years from now), writing back to present you:
        </p>
        <textarea
          value={futureSelfLetter}
          onChange={e => setFutureSelfLetter(e.target.value)}
          className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white h-48 resize-none"
          placeholder="Dear Present Me,

I'm writing to you from 2035. I want you to know that everything you're worried about right now works out, but not in the way you expect...

The decision you're most afraid to make? Make it. The habit you keep putting off? Start it tomorrow. The person you're afraid to become? That's exactly who you need to be.

Here's what I wish you knew..."
        />
      </div>

      {/* The Gap vs The Gain */}
      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
        <h3 className="font-semibold text-green-400 mb-2">📏 The Gain (Not The Gap)</h3>
        <p className="text-slate-300 text-sm mb-3">
          List 5 ways you've grown in the last year (measure backwards, not forward):
        </p>
        <div className="space-y-2">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-green-400 font-bold">{i}.</span>
              <input
                type="text"
                className="flex-1 bg-slate-700/50 border border-slate-600 rounded px-2 py-1 text-white text-sm"
                placeholder={`Growth #${i}...`}
              />
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 mt-3">
          💡 Being in "The Gain" creates happiness. Being in "The Gap" (comparing to ideal) creates misery.
        </p>
      </div>

      {/* 10X Question */}
      <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
        <h3 className="font-semibold text-orange-400 mb-2">🎯 The 10X Question</h3>
        <p className="text-slate-300 text-sm mb-2">
          "If you had to 10x your results, what would you STOP doing?"
        </p>
        <p className="text-slate-400 text-xs">
          (10X is easier than 2X because it forces qualitative change, not just more effort)
        </p>
      </div>
    </div>
  );

  // ============================================
  // MAIN RENDER
  // ============================================

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100 pb-20">
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700 px-4 py-3 sticky top-0 z-50 backdrop-blur-sm">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-orange-400" />
            <span className="font-bold text-white">Module 1</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">{userProgress.xp} XP</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-4">
        {activeTab === 'home' && renderHome()}
        {activeTab === 'learn' && renderLearn()}
        {activeTab === 'habits' && renderHabits()}
        {activeTab === 'deepwork' && renderDeepWork()}
        {activeTab === 'fuckbudget' && renderFuckBudget()}
        {activeTab === 'futureself' && renderFutureSelf()}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-800 border-t border-slate-700 px-2 py-2">
        <div className="flex justify-around max-w-2xl mx-auto">
          {[
            { id: 'home', icon: Star, label: 'Home' },
            { id: 'learn', icon: BookOpen, label: 'Learn' },
            { id: 'habits', icon: Target, label: 'Habits' },
            { id: 'deepwork', icon: Brain, label: 'Focus' },
            { id: 'fuckbudget', icon: Flame, label: 'F*cks' },
            { id: 'futureself', icon: Sparkles, label: 'Future' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex flex-col items-center py-1 px-2 rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'text-orange-400 bg-orange-500/10'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="text-xs mt-0.5">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
