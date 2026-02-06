import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Sparkles, Link2, HelpCircle } from 'lucide-react';
import { HINT_COST } from '@/types/game';
import type { GameComponentProps } from '@/types/game';
import { calculateGameScore } from '@/lib/gameScoring';

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function MatchPairsGame({ content, quickPlay, onComplete, lessonTitle, onUseHint, hintsRemaining }: GameComponentProps) {
  const allPairs = content.matchPairs ?? [];
  const pairs = useMemo(() => {
    const count = quickPlay ? 4 : Math.min(6, allPairs.length);
    return allPairs.slice(0, count);
  }, [allPairs, quickPlay]);

  // Pre-match 45% of pairs on mount
  const preMatched = useMemo(() => {
    const preMatchCount = Math.floor(pairs.length * 0.45);
    const indices = pairs.map((_, i) => i);
    const shuffled = [...indices].sort(() => Math.random() - 0.5);
    return new Set(shuffled.slice(0, preMatchCount));
  }, [pairs]);

  const shuffledTerms = useMemo(() => shuffleArray(pairs.map((p, i) => ({ text: p.term, index: i }))), [pairs]);
  const shuffledDefs = useMemo(() => shuffleArray(pairs.map((p, i) => ({ text: p.definition, index: i }))), [pairs]);

  const [selectedTerm, setSelectedTerm] = useState<number | null>(null);
  const [selectedDef, setSelectedDef] = useState<number | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Set<number>>(preMatched);
  const [wrongPair, setWrongPair] = useState<{ term: number; def: number } | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [correctCount, setCorrectCount] = useState(preMatched.size);

  const checkMatch = useCallback((termIdx: number, defIdx: number) => {
    setAttempts((a) => a + 1);
    if (termIdx === defIdx) {
      const newMatched = new Set(matchedPairs);
      newMatched.add(termIdx);
      setMatchedPairs(newMatched);
      const newCorrect = correctCount + 1;
      setCorrectCount(newCorrect);
      setSelectedTerm(null);
      setSelectedDef(null);
      if (newMatched.size === pairs.length) {
        const userMatched = newMatched.size - preMatched.size;
        const userAttempts = attempts + 1;
        const score = calculateGameScore(userMatched, Math.max(userAttempts, userMatched));
        setTimeout(() => onComplete(score, userMatched, pairs.length - preMatched.size), 600);
      }
    } else {
      setWrongPair({ term: termIdx, def: defIdx });
      setTimeout(() => {
        setSelectedTerm(null);
        setSelectedDef(null);
        setWrongPair(null);
      }, 700);
    }
  }, [matchedPairs, pairs.length, attempts, correctCount, onComplete, preMatched]);

  const handleTermClick = useCallback((index: number) => {
    if (matchedPairs.has(index) || wrongPair) return;
    setSelectedTerm(index);
    if (selectedDef !== null) checkMatch(index, selectedDef);
  }, [selectedDef, matchedPairs, wrongPair, checkMatch]);

  const handleDefClick = useCallback((index: number) => {
    if (matchedPairs.has(index) || wrongPair) return;
    setSelectedDef(index);
    if (selectedTerm !== null) checkMatch(selectedTerm, index);
  }, [selectedTerm, matchedPairs, wrongPair, checkMatch]);

  const handleHint = useCallback(() => {
    if (!onUseHint) return;
    const success = onUseHint();
    if (!success) return;

    // Auto-match one unmatched pair
    const unmatched = pairs.map((_, i) => i).filter((i) => !matchedPairs.has(i));
    if (unmatched.length > 0) {
      const idx = unmatched[Math.floor(Math.random() * unmatched.length)];
      const newMatched = new Set(matchedPairs);
      newMatched.add(idx);
      setMatchedPairs(newMatched);
      setCorrectCount((c) => c + 1);
      setSelectedTerm(null);
      setSelectedDef(null);

      if (newMatched.size === pairs.length) {
        const userMatched = newMatched.size - preMatched.size;
        const score = calculateGameScore(userMatched, Math.max(attempts, userMatched));
        setTimeout(() => onComplete(score, userMatched, pairs.length - preMatched.size), 600);
      }
    }
  }, [onUseHint, pairs, matchedPairs, preMatched, attempts, onComplete]);

  return (
    <div className="flex flex-col h-full">
      {/* Header bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-lavender/15 border border-lavender/20 flex items-center justify-center">
            <Link2 className="w-4 h-4 text-lavender" />
          </div>
          <div>
            <p className="text-xs text-text-muted leading-none">Match Pairs</p>
            <p className="text-[11px] text-text-muted/60 truncate max-w-[150px]">{lessonTitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {onUseHint && (hintsRemaining ?? 0) > 0 && matchedPairs.size < pairs.length && (
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
          <div className="px-2.5 py-1 rounded-full bg-sage/10 border border-sage/20">
            <span className="text-xs font-semibold text-sage">{matchedPairs.size}/{pairs.length}</span>
          </div>
        </div>
      </div>

      {/* Instruction */}
      <p className="text-xs text-text-muted text-center mb-3 opacity-60">
        Tap a term, then tap its matching definition
      </p>

      {/* Two columns */}
      <div className="flex-1 grid grid-cols-2 gap-2.5 overflow-y-auto pb-2">
        {/* Terms */}
        <div className="flex flex-col gap-2">
          <p className="text-[10px] uppercase tracking-wider text-golden/60 font-semibold mb-0.5 px-1">Concepts</p>
          {shuffledTerms.map((item) => {
            const isMatched = matchedPairs.has(item.index);
            const isSelected = selectedTerm === item.index;
            const isWrong = wrongPair?.term === item.index;
            const isPreMatch = preMatched.has(item.index);
            return (
              <motion.button
                key={`t-${item.index}`}
                onClick={() => handleTermClick(item.index)}
                whileTap={!isMatched ? { scale: 0.97 } : undefined}
                animate={isMatched && !isPreMatch ? { scale: [1, 1.03, 1], transition: { duration: 0.3 } } : {}}
                className={`p-3 rounded-xl text-left text-sm border transition-all duration-200 min-h-[48px] ${
                  isMatched
                    ? 'bg-sage/10 border-sage/25 shadow-sage/5 shadow-md'
                    : isWrong
                    ? 'bg-amber-500/10 border-amber-500/25'
                    : isSelected
                    ? 'bg-golden/10 border-golden/35 shadow-golden/10 shadow-md ring-1 ring-golden/20'
                    : 'bg-elevated/60 border-white/[0.06] hover:border-white/[0.12] hover:bg-elevated/80'
                }`}
              >
                <div className="flex items-start gap-2">
                  {isMatched && <CheckCircle2 className="w-3.5 h-3.5 text-sage mt-0.5 flex-shrink-0" />}
                  <span className={`line-clamp-3 leading-snug ${
                    isMatched ? 'text-sage/80' : isWrong ? 'text-amber-400' : isSelected ? 'text-golden' : 'text-text-primary'
                  }`}>{item.text}</span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Definitions */}
        <div className="flex flex-col gap-2">
          <p className="text-[10px] uppercase tracking-wider text-sky/60 font-semibold mb-0.5 px-1">Definitions</p>
          {shuffledDefs.map((item) => {
            const isMatched = matchedPairs.has(item.index);
            const isSelected = selectedDef === item.index;
            const isWrong = wrongPair?.def === item.index;
            return (
              <motion.button
                key={`d-${item.index}`}
                onClick={() => handleDefClick(item.index)}
                whileTap={!isMatched ? { scale: 0.97 } : undefined}
                animate={isMatched ? { scale: [1, 1.03, 1], transition: { duration: 0.3 } } : {}}
                className={`p-3 rounded-xl text-left text-xs border transition-all duration-200 min-h-[48px] ${
                  isMatched
                    ? 'bg-sage/10 border-sage/25 shadow-sage/5 shadow-md'
                    : isWrong
                    ? 'bg-amber-500/10 border-amber-500/25'
                    : isSelected
                    ? 'bg-sky/10 border-sky/35 shadow-sky/10 shadow-md ring-1 ring-sky/20'
                    : 'bg-elevated/60 border-white/[0.06] hover:border-white/[0.12] hover:bg-elevated/80'
                }`}
              >
                <div className="flex items-start gap-2">
                  {isMatched && <CheckCircle2 className="w-3.5 h-3.5 text-sage mt-0.5 flex-shrink-0" />}
                  <span className={`line-clamp-4 leading-snug ${
                    isMatched ? 'text-sage/80' : isWrong ? 'text-amber-400' : isSelected ? 'text-sky' : 'text-text-secondary'
                  }`}>{item.text}</span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Completion animation */}
      <AnimatePresence>
        {matchedPairs.size === pairs.length && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 text-center"
          >
            <div className="flex items-center justify-center gap-2 text-sage font-display font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>All matched!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MatchPairsGame;
