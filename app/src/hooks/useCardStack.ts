import { useState, useCallback, useMemo } from 'react';
import type { PathwayLesson, QuizQuestion } from '@/types';
import { getVizForLevel } from '@/data/vizLevelMap';

export type CardType = 'overview' | 'content' | 'quiz' | 'takeaway' | 'action' | 'visualization';

export interface CardContent {
  id: string;
  type: CardType;
  title: string;
  content: string;
  xpReward: number;
  icon?: string;
  quiz?: QuizQuestion;
  vizId?: string;
}

interface UseCardStackProps {
  lesson: PathwayLesson;
  onXPEarned?: (amount: number) => void;
}

interface UseCardStackReturn {
  cards: CardContent[];
  currentIndex: number;
  totalXP: number;
  swipeCard: (direction: 'left' | 'right', quizCorrect?: boolean) => number;
  undoSwipe: () => void;
  isComplete: boolean;
  progress: number;
}

// Max characters per card — keeps content bite-sized
const MAX_CARD_CHARS = 480;

// Further split a long body into paragraph-sized chunks
function splitLongBody(header: string | undefined, body: string): { header?: string; body: string }[] {
  if (body.length <= MAX_CARD_CHARS) return [{ header, body }];

  const paragraphs = body.split(/\n\n+/).filter(p => p.trim());
  const chunks: { header?: string; body: string }[] = [];
  let current = '';
  let isFirst = true;

  for (const para of paragraphs) {
    // If adding this paragraph would exceed the limit, flush current
    if (current && (current.length + para.length + 2) > MAX_CARD_CHARS) {
      chunks.push({ header: isFirst ? header : undefined, body: current.trim() });
      current = '';
      isFirst = false;
    }
    // If a single paragraph is still too long, split by sentences
    if (para.length > MAX_CARD_CHARS && !current) {
      const sentences = para.match(/[^.!?]+[.!?]+/g) || [para];
      let sentBuf = '';
      for (const s of sentences) {
        if (sentBuf && (sentBuf.length + s.length) > MAX_CARD_CHARS) {
          chunks.push({ header: isFirst ? header : undefined, body: sentBuf.trim() });
          sentBuf = '';
          isFirst = false;
        }
        sentBuf += s;
      }
      if (sentBuf.trim()) current = sentBuf;
    } else {
      current += (current ? '\n\n' : '') + para;
    }
  }

  if (current.trim()) {
    chunks.push({ header: isFirst ? header : undefined, body: current.trim() });
  }

  return chunks;
}

// Split content by headers or into chunks of 2-3 paragraphs
function splitByHeaders(content: string): { header?: string; body: string }[] {
  const rawSections: { header?: string; body: string }[] = [];
  const lines = content.split('\n');
  let currentSection: { header?: string; body: string[] } = { body: [] };

  for (const line of lines) {
    const trimmed = line.trim();

    // Check for headers (## or **Header**)
    const headerMatch = trimmed.match(/^#{1,4}\s+(.+)$/);
    const boldHeaderMatch = trimmed.match(/^\*\*([^*]+)\*\*$/);

    if (headerMatch || boldHeaderMatch) {
      // Save previous section if it has content
      if (currentSection.body.length > 0) {
        rawSections.push({
          header: currentSection.header,
          body: currentSection.body.join('\n').trim(),
        });
      }
      // Start new section
      currentSection = {
        header: headerMatch ? headerMatch[1] : boldHeaderMatch![1],
        body: [],
      };
    } else if (trimmed) {
      currentSection.body.push(line);
    }
  }

  // Add last section
  if (currentSection.body.length > 0) {
    rawSections.push({
      header: currentSection.header,
      body: currentSection.body.join('\n').trim(),
    });
  }

  // If no sections were created (no headers found), split by paragraph groups
  if (rawSections.length === 0 && content.trim()) {
    const paragraphs = content.split(/\n\n+/).filter(p => p.trim());
    const chunkSize = 2;

    for (let i = 0; i < paragraphs.length; i += chunkSize) {
      const chunk = paragraphs.slice(i, i + chunkSize);
      rawSections.push({
        body: chunk.join('\n\n'),
      });
    }
  }

  // Break any oversized sections into bite-sized cards
  const sections: { header?: string; body: string }[] = [];
  for (const s of rawSections) {
    sections.push(...splitLongBody(s.header, s.body));
  }

  return sections;
}

// Parse lesson content into digestible cards
function parseContentToCards(lesson: PathwayLesson): CardContent[] {
  const cards: CardContent[] = [];
  let cardIndex = 0;

  // 1. Overview card (always first)
  cards.push({
    id: `${lesson.id}-overview-${cardIndex++}`,
    type: 'overview',
    title: lesson.title,
    content: lesson.content.overview,
    xpReward: 2,
    icon: 'BookOpen',
  });

  // 2. Split main content by headers or 2-3 paragraphs
  const sections = splitByHeaders(lesson.content.mainContent);
  const fallbackTitles = ['The Basics', 'Going Deeper', 'Key Details', 'The Big Picture', 'Putting It Together', 'What Matters', 'In Practice', 'The Takeaway'];
  sections.forEach((section, i) => {
    // Skip very short sections
    if (section.body.length < 20) return;

    cards.push({
      id: `${lesson.id}-content-${cardIndex++}`,
      type: 'content',
      title: section.header || fallbackTitles[i % fallbackTitles.length],
      content: section.body,
      xpReward: 2,
    });
  });

  // 3. Quiz card (if present)
  if (lesson.content.quiz) {
    cards.push({
      id: `${lesson.id}-quiz-${cardIndex++}`,
      type: 'quiz',
      title: 'Quick Check',
      content: lesson.content.quiz.question,
      quiz: lesson.content.quiz,
      xpReward: 5, // Correct answer
      icon: 'Brain',
    });
  }

  // 4. Key takeaway
  cards.push({
    id: `${lesson.id}-takeaway-${cardIndex++}`,
    type: 'takeaway',
    title: 'Key Takeaway',
    content: lesson.content.keyTakeaway,
    xpReward: 3,
    icon: 'Target',
  });

  // 5. Action item (if present)
  if (lesson.content.actionItem) {
    cards.push({
      id: `${lesson.id}-action-${cardIndex++}`,
      type: 'action',
      title: 'Try This',
      content: lesson.content.actionItem,
      xpReward: 2,
      icon: 'Zap',
    });
  }

  // 6. Visualization card — if this is a viz-reward lesson (ID contains '-viz-')
  if (lesson.id.includes('-viz-')) {
    // Extract level ID: e.g. 'stoic-viz-level2' → 'stoic-level2'
    const levelId = lesson.id.replace('-viz-', '-');
    const vizInfo = getVizForLevel(levelId);
    if (vizInfo) {
      cards.push({
        id: `${lesson.id}-viz-${cardIndex++}`,
        type: 'visualization',
        title: 'Interactive Visualization',
        content: 'Explore this concept with an interactive visualization',
        xpReward: 10,
        vizId: vizInfo.vizId,
      });
    }
  }

  return cards;
}

export function useCardStack({ lesson, onXPEarned }: UseCardStackProps): UseCardStackReturn {
  const cards = useMemo(() => parseContentToCards(lesson), [lesson]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalXP, setTotalXP] = useState(0);
  const [history, setHistory] = useState<number[]>([]);

  const swipeCard = useCallback(
    (direction: 'left' | 'right', quizCorrect?: boolean): number => {
      if (currentIndex >= cards.length) return 0;

      let xpEarned = 0;
      const card = cards[currentIndex];

      if (direction === 'right') {
        // Award XP based on card type
        if (card.type === 'quiz') {
          xpEarned = quizCorrect ? 5 : 1;
        } else {
          xpEarned = card.xpReward;
        }

        setTotalXP(prev => prev + xpEarned);
        onXPEarned?.(xpEarned);
      }

      // Save to history for undo
      setHistory(prev => [...prev, currentIndex]);

      // Advance to next card
      setCurrentIndex(prev => prev + 1);

      return xpEarned;
    },
    [cards, currentIndex, onXPEarned]
  );

  const undoSwipe = useCallback(() => {
    if (history.length === 0) return;

    const lastIndex = history[history.length - 1];
    setHistory(prev => prev.slice(0, -1));
    setCurrentIndex(lastIndex);

    // Note: We don't subtract XP on undo to prevent gaming
  }, [history]);

  const isComplete = currentIndex >= cards.length;
  const progress = cards.length > 0 ? (currentIndex / cards.length) * 100 : 0;

  return {
    cards,
    currentIndex,
    totalXP,
    swipeCard,
    undoSwipe,
    isComplete,
    progress,
  };
}

export default useCardStack;
