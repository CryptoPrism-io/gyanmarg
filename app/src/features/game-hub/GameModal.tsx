import { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy, Sparkles, Zap, RotateCcw } from 'lucide-react';
import { useGameStore } from '@/store/gameStore';
import { useProgressStore } from '@/store/progressStore';
import { GAME_INFO, MAX_HINTS_PER_SESSION } from '@/types/game';
import type { GameType, GameContent } from '@/types/game';
import { getScoreMessage } from '@/lib/gameScoring';
import { ApplyItGame } from '@/components/games/ApplyItGame';
import { MatchPairsGame } from '@/components/games/MatchPairsGame';
import { HangmanGame } from '@/components/games/HangmanGame';
import { CrosswordGame } from '@/components/games/CrosswordGame';
import { springStiff } from '@/lib/animations';

const FULL_PLAY_XP = 100;
const HIGH_SCORE_BONUS = 25;
const PERFECT_BONUS = 50;

interface GameModalProps {
  isOpen: boolean;
  onClose: () => void;
  levelId: string;          // level or module ID for score tracking
  levelTitle: string;       // display title
  gameType: GameType;
  content: GameContent;
}

export function GameModal({ isOpen, onClose, levelId, levelTitle, gameType, content }: GameModalProps) {
  const addScore = useGameStore((s) => s.addScore);
  const getHighScore = useGameStore((s) => s.getHighScore);
  const useHint = useGameStore((s) => s.useHint);
  const canUseHint = useGameStore((s) => s.canUseHint);
  const resetSessionHints = useGameStore((s) => s.resetSessionHints);
  const hintsUsedThisSession = useGameStore((s) => s.hintsUsedThisSession);
  const addXP = useProgressStore((s) => s.addXP);
  const [result, setResult] = useState<{ score: number; correct: number; total: number; xp: number; isNewHigh: boolean } | null>(null);

  const handleComplete = useCallback((score: number, correct: number, total: number) => {
    const prevHigh = getHighScore(levelId, gameType);
    const isNewHigh = !prevHigh || score > prevHigh.score;

    let xpEarned = FULL_PLAY_XP;
    if (isNewHigh) xpEarned += HIGH_SCORE_BONUS;
    if (score === 100) xpEarned += PERFECT_BONUS;

    addScore({
      lessonId: levelId,
      gameType,
      score,
      correct,
      total,
      xpEarned,
      playedAt: new Date().toISOString(),
      isQuickPlay: false,
    });

    addXP(xpEarned);
    setResult({ score, correct, total, xp: xpEarned, isNewHigh });
  }, [levelId, gameType, addScore, addXP, getHighScore]);

  const handleClose = useCallback(() => {
    setResult(null);
    resetSessionHints();
    onClose();
  }, [onClose, resetSessionHints]);

  const handlePlayAgain = useCallback(() => {
    setResult(null);
    resetSessionHints();
  }, [resetSessionHints]);

  const handleUseHint = useCallback(() => {
    return useHint();
  }, [useHint]);

  const hintsRemaining = MAX_HINTS_PER_SESSION - hintsUsedThisSession;
  const hintAvailable = canUseHint();

  const info = GAME_INFO[gameType];

  const gameProps = {
    content,
    quickPlay: false,
    onComplete: handleComplete,
    lessonTitle: levelTitle,
    onUseHint: hintAvailable ? handleUseHint : undefined,
    hintsRemaining,
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-base/95 backdrop-blur-xl flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-elevated/80 border border-white/[0.08] flex items-center justify-center">
                <span className="text-base">{info.icon}</span>
              </div>
              <div>
                <span className="text-sm font-display font-bold text-text-primary">{info.label}</span>
                <p className="text-[11px] text-text-muted truncate max-w-[200px]">{levelTitle}</p>
              </div>
            </div>
            <motion.button
              onClick={handleClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-xl bg-elevated/60 border border-white/[0.06] flex items-center justify-center hover:border-white/[0.12] transition-colors"
            >
              <X className="w-4.5 h-4.5 text-text-muted" />
            </motion.button>
          </div>

          {/* Game area */}
          <div className="flex-1 overflow-y-auto p-4 max-w-lg mx-auto w-full">
            {!result ? (
              <>
                {gameType === 'apply-it' && <ApplyItGame {...gameProps} />}
                {gameType === 'match-pairs' && <MatchPairsGame {...gameProps} />}
                {gameType === 'hangman' && <HangmanGame {...gameProps} />}
                {gameType === 'crossword' && <CrosswordGame {...gameProps} />}
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={springStiff}
                className="relative flex flex-col items-center justify-center h-full text-center overflow-hidden"
              >
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-golden/6 rounded-full blur-3xl pointer-events-none" />

                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className="relative w-24 h-24 mb-6 rounded-2xl flex items-center justify-center shadow-xl"
                  style={{
                    background: result.score >= 90
                      ? 'linear-gradient(135deg, rgba(247,201,72,0.25), rgba(247,201,72,0.05))'
                      : 'linear-gradient(135deg, rgba(247,201,72,0.15), rgba(247,201,72,0.03))',
                    borderWidth: 1,
                    borderColor: result.score >= 90 ? 'rgba(247,201,72,0.3)' : 'rgba(247,201,72,0.15)',
                    boxShadow: result.score >= 90 ? '0 12px 32px rgba(247,201,72,0.2)' : '0 8px 20px rgba(247,201,72,0.1)',
                  }}
                >
                  {result.score >= 90 ? (
                    <Trophy className="w-12 h-12 text-golden" />
                  ) : (
                    <Sparkles className="w-12 h-12 text-golden" />
                  )}
                </motion.div>

                {(() => {
                  const msg = getScoreMessage(result.score);
                  return (
                    <h2 className="relative text-2xl font-display font-bold text-text-primary mb-1">
                      {msg.title}
                    </h2>
                  );
                })()}
                <p className="relative text-sm text-text-secondary mb-4">
                  {getScoreMessage(result.score).subtitle}
                </p>

                <div className="relative flex items-center gap-3 mb-3">
                  <div className="px-4 py-2 rounded-full bg-elevated/60 border border-white/[0.06]">
                    <span className="text-base text-text-secondary">
                      <span className="font-display font-bold text-text-primary">{result.correct}</span>
                      <span className="text-text-muted">/{result.total}</span>
                    </span>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-golden/10 border border-golden/20">
                    <span className="text-base font-display font-bold text-golden">{result.score}%</span>
                  </div>
                </div>

                {result.isNewHigh && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sunrise/10 border border-sunrise/20 mb-2"
                  >
                    <Trophy className="w-3.5 h-3.5 text-sunrise" />
                    <span className="text-xs font-display font-bold text-sunrise">New High Score!</span>
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-golden/10 border border-golden/15 mb-8"
                >
                  <Zap className="w-4 h-4 text-golden" />
                  <span className="text-lg font-display font-bold text-golden">+{result.xp} XP</span>
                </motion.div>

                <div className="relative flex gap-3">
                  <motion.button
                    onClick={handlePlayAgain}
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-display font-bold bg-elevated/80 text-text-primary border border-white/[0.08] hover:border-white/[0.15] transition-all shadow-sm"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Play Again
                  </motion.button>
                  <motion.button
                    onClick={handleClose}
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-display font-bold bg-gradient-to-r from-sunrise to-golden text-white shadow-lg shadow-sunrise/20 border border-sunrise/20"
                  >
                    Done
                  </motion.button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}

export default GameModal;
