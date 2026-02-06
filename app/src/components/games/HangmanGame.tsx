import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { HINT_COST } from '@/types/game';
import type { GameComponentProps } from '@/types/game';
import { calculateGameScore } from '@/lib/gameScoring';

const MAX_WRONG = 8;

const KEYBOARD_ROWS = [
  'QWERTYUIOP'.split(''),
  'ASDFGHJKL'.split(''),
  'ZXCVBNM'.split(''),
];

function HangmanFigure({ wrongCount }: { wrongCount: number }) {
  const parts = [
    <motion.circle key="head" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
      cx="75" cy="32" r="10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />,
    <motion.line key="body" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
      x1="75" y1="42" x2="75" y2="72" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />,
    <motion.line key="larm" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
      x1="75" y1="52" x2="58" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />,
    <motion.line key="rarm" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
      x1="75" y1="52" x2="92" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />,
    <motion.line key="lleg" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
      x1="75" y1="72" x2="58" y2="88" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />,
    <motion.line key="rleg" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
      x1="75" y1="72" x2="92" y2="88" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />,
    // Extra body parts for MAX_WRONG=8
    <motion.line key="lhand" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
      x1="58" y1="62" x2="52" y2="56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />,
    <motion.line key="rhand" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
      x1="92" y1="62" x2="98" y2="56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />,
  ];

  return (
    <div className="relative w-36 h-28 mx-auto">
      <svg viewBox="0 0 120 100" className="w-full h-full">
        <line x1="15" y1="95" x2="45" y2="95" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeLinecap="round" />
        <line x1="30" y1="95" x2="30" y2="12" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeLinecap="round" />
        <line x1="30" y1="12" x2="75" y2="12" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeLinecap="round" />
        <line x1="75" y1="12" x2="75" y2="22" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeLinecap="round" />

        <g className={wrongCount >= 6 ? 'text-amber-400' : 'text-amber-400/70'}>
          {parts.slice(0, wrongCount)}
        </g>
      </svg>

      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2">
        <div className="flex gap-1">
          {Array.from({ length: MAX_WRONG }, (_, i) => (
            <motion.div
              key={i}
              animate={{
                backgroundColor: i < wrongCount ? 'rgba(251,191,36,0.6)' : 'rgba(255,255,255,0.06)',
                scale: i === wrongCount - 1 && wrongCount > 0 ? [1, 1.3, 1] : 1,
              }}
              className="w-2 h-2 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function HangmanGame({ content, quickPlay, onComplete, onUseHint, hintsRemaining }: GameComponentProps) {
  const allWords = content.hangman ?? [];
  const words = useMemo(() => {
    const count = quickPlay ? 2 : Math.min(5, allWords.length);
    return allWords.slice(0, count);
  }, [allWords, quickPlay]);

  // Pre-reveal 55% of unique letters on mount
  const preRevealed = useMemo(() => {
    if (!words[0]) return new Set<string>();
    const uniqueLetters = [...new Set(words[0].word.replace(/[^A-Z]/g, '').split(''))];
    const revealCount = Math.ceil(uniqueLetters.length * 0.55);
    // Shuffle and pick
    const shuffled = [...uniqueLetters].sort(() => Math.random() - 0.5);
    return new Set(shuffled.slice(0, revealCount));
  }, [words]);

  const [wordIndex, setWordIndex] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(preRevealed);
  const [correctWords, setCorrectWords] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentWord = words[wordIndex];
  const wordLetters = currentWord?.word.replace(/[^A-Z]/g, '') ?? '';

  const wrongCount = useMemo(() => {
    let count = 0;
    guessedLetters.forEach((letter) => {
      if (!wordLetters.includes(letter) && !preRevealed.has(letter)) count++;
    });
    return count;
  }, [guessedLetters, wordLetters, preRevealed]);

  const isWordSolved = useMemo(() => {
    if (!currentWord) return false;
    return [...new Set(wordLetters.split(''))].every((l) => guessedLetters.has(l));
  }, [currentWord, wordLetters, guessedLetters]);

  const isFailed = wrongCount >= MAX_WRONG;

  const handleGuess = useCallback((letter: string) => {
    if (guessedLetters.has(letter) || showResult) return;
    const newGuessed = new Set(guessedLetters);
    newGuessed.add(letter);
    setGuessedLetters(newGuessed);
  }, [guessedLetters, showResult]);

  const handleHint = useCallback(() => {
    if (!onUseHint) return;
    const success = onUseHint();
    if (!success) return;

    // Reveal one un-guessed correct letter
    const unguessed = [...new Set(wordLetters.split(''))].filter((l) => !guessedLetters.has(l));
    if (unguessed.length > 0) {
      const letter = unguessed[Math.floor(Math.random() * unguessed.length)];
      const newGuessed = new Set(guessedLetters);
      newGuessed.add(letter);
      setGuessedLetters(newGuessed);
    }
  }, [onUseHint, wordLetters, guessedLetters]);

  const handleWordEnd = useCallback((won: boolean) => {
    if (showResult) return;
    setShowResult(true);
    const newCorrect = won ? correctWords + 1 : correctWords;
    if (won) setCorrectWords(newCorrect);

    setTimeout(() => {
      const nextIndex = wordIndex + 1;
      if (nextIndex >= words.length) {
        const score = calculateGameScore(newCorrect, words.length);
        onComplete(score, newCorrect, words.length);
      } else {
        setWordIndex(nextIndex);
        // Pre-reveal for next word
        const nextWord = words[nextIndex];
        if (nextWord) {
          const uniqueLetters = [...new Set(nextWord.word.replace(/[^A-Z]/g, '').split(''))];
          const revealCount = Math.ceil(uniqueLetters.length * 0.55);
          const shuffled = [...uniqueLetters].sort(() => Math.random() - 0.5);
          setGuessedLetters(new Set(shuffled.slice(0, revealCount)));
        } else {
          setGuessedLetters(new Set());
        }
        setShowResult(false);
      }
    }, 1500);
  }, [wordIndex, words, correctWords, onComplete, showResult]);

  if ((isWordSolved || isFailed) && !showResult) {
    handleWordEnd(isWordSolved);
  }

  if (!currentWord) return null;

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="px-3 py-1 rounded-full bg-elevated/60 border border-white/[0.06]">
          <span className="text-xs text-text-muted">Word <span className="text-text-primary font-semibold">{wordIndex + 1}</span>/{words.length}</span>
        </div>
        <div className="flex items-center gap-2">
          {onUseHint && (hintsRemaining ?? 0) > 0 && !showResult && !isWordSolved && !isFailed && (
            <motion.button
              onClick={handleHint}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-lavender/10 border border-lavender/20 text-xs text-lavender hover:bg-lavender/15 transition-colors"
            >
              <HelpCircle className="w-3 h-3" />
              Hint ({HINT_COST} XP)
            </motion.button>
          )}
          <div className="px-3 py-1 rounded-full bg-golden/10 border border-golden/20">
            <span className="text-xs font-medium text-golden">{currentWord.hint}</span>
          </div>
        </div>
      </div>

      {/* Figure */}
      <HangmanFigure wrongCount={wrongCount} />

      {/* Word display */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 my-5 flex-wrap px-2">
        {currentWord.word.split('').map((char, i) => {
          const isSpace = char === ' ';
          const isSpecial = char === '-' || char === "'";
          const isLetter = /[A-Z]/.test(char);
          const revealed = !isLetter || guessedLetters.has(char) || isFailed;
          const isPreRevealed = isLetter && preRevealed.has(char);
          return (
            <motion.div
              key={i}
              animate={revealed && isLetter && !isFailed ? { y: [0, -4, 0], transition: { duration: 0.3 } } : {}}
              className={`flex items-center justify-center ${
                isSpace ? 'w-3' : isSpecial ? 'w-4' : 'w-7 h-9 sm:w-8 sm:h-10'
              } ${isLetter ? 'rounded-lg' : ''} ${
                isLetter
                  ? revealed
                    ? isFailed && !guessedLetters.has(char)
                      ? 'bg-amber-500/10 border border-amber-500/20'
                      : isPreRevealed
                      ? 'bg-lavender/10 border border-lavender/20'
                      : 'bg-sage/10 border border-sage/20'
                    : 'bg-elevated/80 border border-white/[0.08]'
                  : ''
              }`}
            >
              {isSpace ? null : isSpecial ? (
                <span className="text-text-muted">{char}</span>
              ) : (
                <span className={`text-base sm:text-lg font-display font-bold ${
                  isFailed && !guessedLetters.has(char) ? 'text-amber-400/80' : revealed ? 'text-text-primary' : ''
                }`}>
                  {revealed ? char : ''}
                </span>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Keyboard */}
      <div className="mt-auto space-y-1.5">
        {KEYBOARD_ROWS.map((row, ri) => (
          <div key={ri} className="flex justify-center gap-1">
            {row.map((letter) => {
              const guessed = guessedLetters.has(letter);
              const inWord = wordLetters.includes(letter);
              return (
                <motion.button
                  key={letter}
                  onClick={() => handleGuess(letter)}
                  disabled={guessed || showResult}
                  whileTap={!guessed ? { scale: 0.9 } : undefined}
                  animate={guessed && inWord ? { scale: [1, 1.15, 1] } : {}}
                  className={`w-[8.5%] max-w-[36px] aspect-square rounded-lg text-xs sm:text-sm font-bold transition-all duration-150 ${
                    guessed
                      ? inWord
                        ? 'bg-sage/15 text-sage border border-sage/25'
                        : 'bg-white/[0.02] text-white/15 border border-white/[0.03]'
                      : 'bg-elevated/80 text-text-primary border border-white/[0.08] hover:border-golden/30 hover:bg-golden/5 active:bg-golden/10'
                  }`}
                >
                  {letter}
                </motion.button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Result flash — amber "Almost!" instead of coral "Wrong" */}
      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className={`px-6 py-3 rounded-2xl backdrop-blur-xl border shadow-lg ${
              isWordSolved
                ? 'bg-sage/20 border-sage/30 shadow-sage/20'
                : 'bg-amber-500/15 border-amber-500/25 shadow-amber-500/15'
            }`}>
              <span className={`text-lg font-display font-bold ${isWordSolved ? 'text-sage' : 'text-amber-400'}`}>
                {isWordSolved ? 'Got it!' : `Almost! It was: ${currentWord.word}`}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default HangmanGame;
