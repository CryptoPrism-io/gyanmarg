// Type definitions for Gyanmarg

// User & Profile Types
export interface UserProfile {
  name: string;
  primaryGoal: string;
  learningStyle: string;
  dailyTime: number;
  focusAreas: string[];
  createdAt: string;
}

export interface UserProgress {
  xp: number;
  level: number;
  habitsCompleted: number;
  deepWorkMinutes: number;
  lessonsCompleted: string[];
  achievements: string[];
  currentStreak: number;
  lastActivityDate: string;
}

export interface PathwayProgress {
  completedLessons: string[];
  currentLesson: string | null;
  totalXP: number;
  streakDays: number;
  lastActivity: string;
}

// Habit Types
export interface Habit {
  id: string;
  name: string;
  cue: string;
  craving: string;
  response: string;
  reward: string;
  streak: number;
  completedToday: boolean;
  category: HabitCategory;
  createdAt: string;
}

export type HabitCategory = 'morning' | 'work' | 'evening' | 'anytime';

export interface HabitCompletion {
  habitId: string;
  date: string;
  completed: boolean;
}

// Lesson & Pathway Types - Define base types first
export type LessonType = 'intro' | 'concept' | 'exercise' | 'quiz' | 'reflection' | 'challenge';

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface LessonContent {
  overview: string;
  mainContent: string;
  keyTakeaway: string;
  actionItem?: string;
  quiz?: QuizQuestion;
}

// Now define PathwayLesson after its dependencies
export interface PathwayLesson {
  id: string;
  title: string;
  type: LessonType;
  duration: number;
  xpReward: number;
  content: LessonContent;
}

// Extended Lesson type for module-specific lessons
export interface LessonQuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  type: LessonType;
  duration: number;
  xpReward: number;
  content: LessonContent;
  quiz?: LessonQuizQuestion[];
}

export interface PathwayLevel {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  lessons: PathwayLesson[];
  unlockRequirement: number;
}

// Book & Content Types
export interface BookContent {
  title: string;
  author: string;
  color: string;
  icon: string;
  coreConcepts: CoreConcept[];
}

export interface CoreConcept {
  id: string;
  title: string;
  summary: string;
  insight: string;
  exercise: string;
  quiz: QuizQuestion;
}

// Achievement Types
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  xpReward: number;
  unlockedAt?: string;
}

// F*ck Budget Types
export interface FuckBudgetItem {
  id: string;
  item: string;
  fucks: number;
  worthy: boolean;
}

// Challenge Types
export interface DailyChallenge {
  id: string;
  title: string;
  description: string;
  category: string;
  xpReward: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

// Flashcard Types
export interface Flashcard {
  id: string;
  front: string;
  back: string;
  category: string;
  source: string;
  nextReview: string;
  easeFactor: number;
  interval: number;
  repetitions: number;
}

// Knowledge Map Types
export interface KnowledgeNode {
  id: string;
  concept: string;
  book: string;
  connections: string[];
}

export interface KnowledgeConnection {
  from: string;
  to: string;
  relationship: string;
}

// Timer Types
export interface DeepWorkSession {
  id: string;
  startTime: string;
  duration: number;
  completed: boolean;
  goal?: string;
}

// Settings Types
export interface UserSettings {
  theme: 'light' | 'dark' | 'system';
  notifications: boolean;
  soundEnabled: boolean;
  dailyReminder: string | null;
}

// Onboarding Types
export interface OnboardingData {
  name: string;
  primaryGoal: string;
  learningStyle: string;
  dailyTime: number;
  selectedDomains: string[];
  completed: boolean;
  completedAt: string | null;
}

export interface OnboardingProgress {
  currentStep: number;
  data: Partial<OnboardingData>;
  startedAt: string;
}

// Enhanced Spaced Repetition Types
export interface SpacedRepetitionCard {
  id: string;
  front: string;
  back: string;
  category: string;
  source: string;
  pathwayId?: string;
  lessonId?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
}

export interface FlashcardWithScheduling extends SpacedRepetitionCard {
  easeFactor: number;      // Default 2.5, min 1.3
  interval: number;        // Days until next review
  repetitions: number;     // Times reviewed correctly
  nextReviewDate: string;  // ISO date string
  lastReviewDate?: string;
  lapses: number;          // Times reset to beginning
}

export type ReviewRating = 0 | 1 | 2 | 3 | 4 | 5;
// 0 = Complete blackout
// 1 = Incorrect, remembered upon seeing answer
// 2 = Incorrect, answer seemed easy to recall (Hard)
// 3 = Correct, with serious difficulty
// 4 = Correct, after hesitation (Good)
// 5 = Perfect recall (Easy)

// Enhanced Challenge Types
export interface EnhancedDailyChallenge extends DailyChallenge {
  moduleId: string;
  dayOfWeek?: number[];    // Optional: specific days (0=Sun, 6=Sat)
  seasonal?: boolean;      // Rotates based on time of year
  prerequisiteLesson?: string;
  minStreak?: number;      // Minimum streak to unlock
}

// Challenge Completion with user action response
export interface ChallengeCompletion {
  challengeId: string;
  response: string;        // User's action taken (min 10 words)
  completedAt: string;     // ISO date string
  xpEarned: number;
}

export interface WeeklyChallenge {
  id: string;
  title: string;
  description: string;
  target: number;
  current: number;
  metric: 'lessons' | 'xp' | 'deepWork' | 'habits' | 'reviews';
  xpReward: number;
  startDate: string;
  endDate: string;
  completed: boolean;
  claimed: boolean;
}

// Lesson Progress Types
export interface LessonBookmark {
  lessonId: string;
  pathwayId: string;
  moduleId: string;
  scrollPosition: number;
  timestamp: string;
  completed: boolean;
}

// Enhanced Streak Types
export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastActivityDate: string;
  streakFreezes: number;       // Available freezes (max 1)
  lastFreezeUsed: string | null;
  freezeRefreshDate: string;   // Weekly refresh (Sunday)
}

// Leaderboard Types
export interface LeaderboardEntry {
  id: string;
  name: string;
  xp: number;
  level: number;
  streak: number;
  isCurrentUser: boolean;
}

// Review History
export interface ReviewHistoryEntry {
  cardId: string;
  rating: ReviewRating;
  timestamp: string;
  previousInterval: number;
  newInterval: number;
}
