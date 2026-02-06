import { useMemo } from 'react';
import type { PathwayLesson } from '@/types';
import type {
  GameContent,
  AvailableGame,
  MatchPairItem,
  HangmanWord,
  CrosswordWord,
  ScenarioItem,
  GameType,
} from '@/types/game';

/**
 * Extract bold terms from markdown content.
 */
function extractBoldTerms(text: string): string[] {
  const matches = text.match(/\*\*([^*]+)\*\*/g);
  if (!matches) return [];
  const terms = matches.map((m) => m.replace(/\*\*/g, '').trim());
  return [...new Set(terms)].filter((t) => t.length >= 3 && t.length <= 60);
}

/**
 * For a given bold term, find its surrounding sentence to create a definition context.
 */
function findDefinitionContext(text: string, term: string): string | null {
  const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  const dashPattern = new RegExp(`\\*\\*${escapedTerm}\\*\\*\\s*[-–—]+\\s*([^\\n]+)`, 'i');
  const dashMatch = text.match(dashPattern);
  if (dashMatch) return dashMatch[1].replace(/\*\*/g, '').trim();

  const colonPattern = new RegExp(`\\*\\*${escapedTerm}\\*\\*:\\s*([^\\n]+)`, 'i');
  const colonMatch = text.match(colonPattern);
  if (colonMatch) return colonMatch[1].replace(/\*\*/g, '').trim();

  const sentences = text.replace(/\n/g, ' ').split(/(?<=[.!?])\s+/);
  for (const sentence of sentences) {
    if (sentence.includes(`**${term}**`)) {
      const cleaned = sentence.replace(/\*\*/g, '').replace(/\*([^*]+)\*/g, '$1').trim();
      if (cleaned.length > term.length + 10 && cleaned.length < 200) {
        return cleaned;
      }
    }
  }

  return null;
}

/**
 * Create match pairs from bold terms across all lessons in a level.
 */
function generateMatchPairs(lessons: PathwayLesson[]): MatchPairItem[] {
  const items: MatchPairItem[] = [];

  for (const lesson of lessons) {
    const text = lesson.content.mainContent;
    const boldTerms = extractBoldTerms(text);

    for (const term of boldTerms) {
      const definition = findDefinitionContext(text, term);
      if (definition && definition.length > 10) {
        const truncated = definition.length > 100 ? definition.slice(0, 97) + '...' : definition;
        items.push({ term, definition: truncated });
      }
    }

    if (lesson.content.quiz) {
      const q = lesson.content.quiz;
      items.push({
        term: q.question.slice(0, 60),
        definition: q.options[q.correct],
      });
    }
  }

  return items;
}

/**
 * Create hangman words from bold terms across all lessons.
 */
function generateHangman(lessons: PathwayLesson[]): HangmanWord[] {
  const words: HangmanWord[] = [];

  for (const lesson of lessons) {
    const text = lesson.content.mainContent;
    const boldTerms = extractBoldTerms(text);

    const lessonWords = boldTerms
      .filter((t) => {
        const wordCount = t.split(/\s+/).length;
        return wordCount <= 3 && /^[a-zA-Z\s'-]+$/.test(t);
      })
      .map((word) => ({
        word: word.toUpperCase(),
        hint: lesson.title,
      }));

    words.push(...lessonWords);
  }

  return words;
}

function getClueForTerm(lesson: PathwayLesson, term: string): string {
  const lowerTerm = term.toLowerCase();
  const def = findDefinitionContext(lesson.content.mainContent, lowerTerm);
  if (def) return def.length > 80 ? def.slice(0, 77) + '...' : def;

  if (lesson.content.quiz) {
    const q = lesson.content.quiz;
    for (const opt of q.options) {
      if (opt.toLowerCase().includes(lowerTerm)) {
        return q.question;
      }
    }
  }

  return `Term from: ${lesson.title}`;
}

/**
 * Simple crossword layout from terms across all lessons.
 */
function generateCrossword(lessons: PathwayLesson[]): CrosswordWord[] {
  const allTerms: { term: string; lesson: PathwayLesson }[] = [];

  for (const lesson of lessons) {
    const text = lesson.content.mainContent;
    const boldTerms = extractBoldTerms(text)
      .filter((t) => /^[a-zA-Z\s]+$/.test(t) && t.split(/\s+/).length === 1)
      .map((t) => t.toUpperCase());

    for (const term of boldTerms) {
      allTerms.push({ term, lesson });
    }
  }

  // Deduplicate and take up to 8
  const seen = new Set<string>();
  const uniqueTerms: typeof allTerms = [];
  for (const item of allTerms) {
    if (!seen.has(item.term)) {
      seen.add(item.term);
      uniqueTerms.push(item);
    }
  }
  const selected = uniqueTerms.slice(0, 8);
  if (selected.length < 4) return [];

  const words: CrosswordWord[] = [];
  const placed = new Set<string>();

  const first = selected[0];
  words.push({
    word: first.term,
    clue: getClueForTerm(first.lesson, first.term),
    row: 5,
    col: 1,
    direction: 'across',
  });
  placed.add(first.term);

  for (let i = 1; i < selected.length && words.length < 8; i++) {
    const { term: word, lesson } = selected[i];
    if (placed.has(word)) continue;

    let didPlace = false;

    for (const existing of words) {
      if (didPlace) break;
      for (let ei = 0; ei < existing.word.length; ei++) {
        if (didPlace) break;
        for (let wi = 0; wi < word.length; wi++) {
          if (existing.word[ei] === word[wi]) {
            const newDir = existing.direction === 'across' ? 'down' : 'across';
            let row: number, col: number;
            if (newDir === 'down') {
              row = existing.row - wi;
              col = existing.col + ei;
            } else {
              row = existing.row + ei;
              col = existing.col - wi;
            }
            if (row >= 0 && col >= 0 && row < 20 && col < 20) {
              words.push({
                word,
                clue: getClueForTerm(lesson, word),
                row,
                col,
                direction: newDir,
              });
              placed.add(word);
              didPlace = true;
            }
          }
        }
      }
    }

    if (!didPlace) {
      const newRow = 1 + words.length * 3;
      words.push({
        word,
        clue: getClueForTerm(lesson, word),
        row: newRow,
        col: 1,
        direction: words.length % 2 === 0 ? 'across' : 'down',
      });
      placed.add(word);
    }
  }

  return words;
}

/**
 * Generate "Apply It" scenarios from lesson content.
 * 3 strategies in priority order: quiz-based, term-based, keyTakeaway-based.
 */
function generateScenarios(lessons: PathwayLesson[]): ScenarioItem[] {
  const items: ScenarioItem[] = [];

  for (const lesson of lessons) {
    // Strategy 1: Quiz-based — transform quiz into scenario
    if (lesson.content.quiz) {
      const q = lesson.content.quiz;
      if (q.options.length >= 3) {
        const scenarioOptions = q.options.slice(0, 3);
        const correctIdx = q.correct < 3 ? q.correct : 0;
        items.push({
          scenario: `Imagine you're explaining "${lesson.title}" to a friend. They ask: ${q.question}`,
          options: scenarioOptions,
          correctIndex: correctIdx,
          explanation: q.explanation || `Great thinking! "${scenarioOptions[correctIdx]}" is the key insight from this lesson.`,
        });
      }
    }

    // Strategy 2: Term-based — "Which concept does this describe?"
    const text = lesson.content.mainContent;
    const boldTerms = extractBoldTerms(text);
    const termsWithDefs = boldTerms
      .map((t) => ({ term: t, def: findDefinitionContext(text, t) }))
      .filter((t) => t.def && t.def.length > 15);

    if (termsWithDefs.length >= 3) {
      const picked = termsWithDefs.slice(0, 3);
      const correctTerm = picked[0];
      items.push({
        scenario: `Which concept from "${lesson.title}" does this describe?\n\n"${correctTerm.def}"`,
        options: picked.map((p) => p.term),
        correctIndex: 0,
        explanation: `Yes! "${correctTerm.term}" perfectly captures this idea. Keep building your wisdom!`,
      });
    }

    // Strategy 3: KeyTakeaway-based — apply insight to situation
    if (lesson.content.keyTakeaway && lesson.content.keyTakeaway.length > 20) {
      const takeaway = lesson.content.keyTakeaway.replace(/\*\*/g, '').trim();
      const shortTakeaway = takeaway.length > 120 ? takeaway.slice(0, 117) + '...' : takeaway;
      items.push({
        scenario: `You're reflecting on what you learned in "${lesson.title}". Which statement best captures the key insight?`,
        options: [
          shortTakeaway,
          `The opposite approach would work just as well in most situations.`,
          `This concept only applies in very specific circumstances.`,
        ],
        correctIndex: 0,
        explanation: `Exactly right! This key takeaway is something you can apply every day. Well done!`,
      });
    }
  }

  return items;
}

/**
 * Pick the best-fit game type based on content richness.
 */
function pickBestGameType(content: GameContent): GameType | null {
  const scores: { type: GameType; count: number }[] = [];

  if (content.matchPairs) scores.push({ type: 'match-pairs', count: content.matchPairs.length });
  if (content.hangman) scores.push({ type: 'hangman', count: content.hangman.length });
  if (content.crossword) scores.push({ type: 'crossword', count: content.crossword.length });

  if (scores.length === 0) return null;
  scores.sort((a, b) => b.count - a.count);
  return scores[0].type;
}

/**
 * Hook that extracts game content from all lessons in a level.
 * Returns available games and their content, plus the best-fit game type.
 */
export function useLevelGameData(lessons: PathwayLesson[]) {
  return useMemo(() => {
    if (!lessons || lessons.length === 0) {
      return { availableGames: [], content: {} as GameContent, bestGameType: null };
    }

    const matchPairs = generateMatchPairs(lessons);
    const hangman = generateHangman(lessons);
    const crossword = generateCrossword(lessons);

    const content: GameContent = {
      matchPairs: matchPairs.length >= 4 ? matchPairs : undefined,
      hangman: hangman.length >= 2 ? hangman : undefined,
      crossword: crossword.length >= 4 ? crossword : undefined,
    };

    const availableGames: AvailableGame[] = [];

    if (content.matchPairs) {
      availableGames.push({ type: 'match-pairs', itemCount: matchPairs.length });
    }
    if (content.hangman) {
      availableGames.push({ type: 'hangman', itemCount: hangman.length });
    }
    if (content.crossword) {
      availableGames.push({ type: 'crossword', itemCount: crossword.length });
    }

    const bestGameType = pickBestGameType(content);

    return { availableGames, content, bestGameType };
  }, [lessons]);
}

/**
 * Hook that generates "Apply It" scenarios for the whole module.
 */
export function useModuleGameData(allLessons: PathwayLesson[]) {
  return useMemo(() => {
    if (!allLessons || allLessons.length === 0) {
      return { scenarios: [], content: {} as GameContent, available: false };
    }

    const scenarios = generateScenarios(allLessons);
    const content: GameContent = {
      scenarios: scenarios.length >= 2 ? scenarios : undefined,
    };

    return {
      scenarios,
      content,
      available: scenarios.length >= 2,
    };
  }, [allLessons]);
}

/**
 * Hook for post-lesson quick game. Lower thresholds + includes scenarios.
 * Maximizes chances of finding a playable game from a single lesson.
 */
export function useLessonQuickGameData(lesson: PathwayLesson | null) {
  return useMemo(() => {
    if (!lesson) {
      return { bestGameType: null as GameType | null, content: {} as GameContent };
    }

    const lessons = [lesson];
    const matchPairs = generateMatchPairs(lessons);
    const hangman = generateHangman(lessons);
    const crossword = generateCrossword(lessons);
    const scenarios = generateScenarios(lessons);

    // Lower thresholds for quick play from a single lesson
    const content: GameContent = {
      scenarios: scenarios.length >= 1 ? scenarios : undefined,
      matchPairs: matchPairs.length >= 3 ? matchPairs : undefined,
      hangman: hangman.length >= 1 ? hangman : undefined,
      crossword: crossword.length >= 3 ? crossword : undefined,
    };

    const scores: { type: GameType; count: number }[] = [];
    if (content.scenarios) scores.push({ type: 'apply-it', count: scenarios.length });
    if (content.matchPairs) scores.push({ type: 'match-pairs', count: matchPairs.length });
    if (content.hangman) scores.push({ type: 'hangman', count: hangman.length });
    if (content.crossword) scores.push({ type: 'crossword', count: crossword.length });

    if (scores.length === 0) {
      return { bestGameType: null as GameType | null, content: {} as GameContent };
    }

    scores.sort((a, b) => b.count - a.count);
    return { bestGameType: scores[0].type as GameType, content };
  }, [lesson]);
}

// Keep backward compat — single-lesson hook for any remaining usage
export function useGameData(lesson: PathwayLesson | null) {
  return useLevelGameData(lesson ? [lesson] : []);
}

export default useGameData;
