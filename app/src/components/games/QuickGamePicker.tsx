import { useCallback, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap } from 'lucide-react';
import { useLessonQuickGameData } from '@/hooks/useGameData';
import { useProgressStore } from '@/store/progressStore';
import { useGameStore } from '@/store/gameStore';
import { GAME_INFO } from '@/types/game';
import type { PathwayLesson } from '@/types';
import { ApplyItGame } from './ApplyItGame';
import { MatchPairsGame } from './MatchPairsGame';
import { HangmanGame } from './HangmanGame';
import { CrosswordGame } from './CrosswordGame';

const QUICK_GAME_XP = 50;

interface QuickGamePickerProps {
  lesson: PathwayLesson;
  onFinish: (gameXP: number) => void;
}

export function QuickGamePicker({ lesson, onFinish }: QuickGamePickerProps) {
  const { bestGameType, content } = useLessonQuickGameData(lesson);
  const addXP = useProgressStore((s) => s.addXP);
  const addScore = useGameStore((s) => s.addScore);
  const [result, setResult] = useState<{ score: number; xp: number } | null>(null);

  // No game content available → skip immediately
  useEffect(() => {
    if (!bestGameType) {
      onFinish(0);
    }
  }, [bestGameType, onFinish]);

  const handleComplete = useCallback((score: number, correct: number, total: number) => {
    const xp = QUICK_GAME_XP;
    addXP(xp);
    addScore({
      lessonId: lesson.id,
      gameType: bestGameType!,
      score,
      correct,
      total,
      xpEarned: xp,
      playedAt: new Date().toISOString(),
      isQuickPlay: true,
    });
    setResult({ score, xp });
    setTimeout(() => onFinish(xp), 1800);
  }, [lesson.id, bestGameType, addXP, addScore, onFinish]);

  if (!bestGameType) return null;

  const info = GAME_INFO[bestGameType];

  // Brief celebration after game finishes
  if (result) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          className="w-16 h-16 rounded-full bg-golden/20 border border-golden/30 flex items-center justify-center mb-4"
        >
          <Sparkles className="w-8 h-8 text-golden" />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-lg font-display font-bold text-golden mb-1"
        >
          Nice work!
        </motion.h3>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-1.5 text-golden"
        >
          <Zap className="w-4 h-4" />
          <span className="font-display font-bold">+{result.xp} Bonus XP</span>
        </motion.div>
      </motion.div>
    );
  }

  const gameProps = {
    content,
    quickPlay: true,
    onComplete: handleComplete,
    lessonTitle: lesson.title,
  };

  return (
    <div className="py-4">
      <div className="text-center mb-5">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="text-3xl mb-2"
        >
          {info.icon}
        </motion.div>
        <h3 className="text-base font-display font-bold text-text-primary">Quick {info.label}</h3>
        <p className="text-xs text-text-muted mt-1">Reinforce what you just learned</p>
      </div>
      {bestGameType === 'apply-it' && <ApplyItGame {...gameProps} />}
      {bestGameType === 'match-pairs' && <MatchPairsGame {...gameProps} />}
      {bestGameType === 'hangman' && <HangmanGame {...gameProps} />}
      {bestGameType === 'crossword' && <CrosswordGame {...gameProps} />}
    </div>
  );
}

export default QuickGamePicker;
