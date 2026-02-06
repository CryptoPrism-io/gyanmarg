// Game types for the Polymind Play system

export type GameType = 'apply-it' | 'match-pairs' | 'hangman' | 'crossword';

export interface GameInfo {
  type: GameType;
  label: string;
  icon: string; // emoji
  description: string;
}

export const GAME_INFO: Record<GameType, GameInfo> = {
  'apply-it': { type: 'apply-it', label: 'Apply It', icon: '💡', description: 'Apply wisdom to real-life scenarios' },
  'match-pairs': { type: 'match-pairs', label: 'Match Pairs', icon: '🔗', description: 'Match concepts to definitions' },
  'hangman': { type: 'hangman', label: 'Hangman', icon: '🎯', description: 'Guess the term letter by letter' },
  'crossword': { type: 'crossword', label: 'Crossword', icon: '🧩', description: 'Solve the crossword puzzle' },
};

// Hint system constants
export const HINT_COST = 10;
export const MAX_HINTS_PER_SESSION = 3;

// Content extracted from lessons for each game type
export interface ScenarioItem {
  scenario: string;       // The real-life situation description
  options: string[];      // Exactly 3 options
  correctIndex: number;   // 0-indexed correct answer
  explanation: string;    // Positive explanation shown after answering
}

export interface MatchPairItem {
  term: string;
  definition: string;
}

export interface HangmanWord {
  word: string;
  hint: string;
}

export interface CrosswordWord {
  word: string;
  clue: string;
  row: number;
  col: number;
  direction: 'across' | 'down';
}

export interface GameContent {
  scenarios?: ScenarioItem[];
  matchPairs?: MatchPairItem[];
  hangman?: HangmanWord[];
  crossword?: CrosswordWord[];
}

export interface AvailableGame {
  type: GameType;
  itemCount: number; // how many items available for this game
}

// Score tracking
export interface GameScore {
  lessonId: string;
  gameType: GameType;
  score: number;        // percentage 0-100
  correct: number;
  total: number;
  xpEarned: number;
  playedAt: string;     // ISO date
  isQuickPlay: boolean;
}

// Game session state
export interface GameSession {
  lessonId: string;
  gameType: GameType;
  isQuickPlay: boolean;
  startedAt: string;
}

// Props shared by all game components
export interface GameComponentProps {
  content: GameContent;
  quickPlay: boolean;        // true = fewer items, false = full set
  onComplete: (score: number, correct: number, total: number) => void;
  lessonTitle: string;
  onUseHint?: () => boolean; // returns false if no hints left or not enough XP
  hintsRemaining?: number;
}
