import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Sparkles, HelpCircle } from 'lucide-react';
import { calculateGameScore } from '@/lib/gameScoring';
import type { GameComponentProps } from '@/types/game';
import { HINT_COST } from '@/types/game';

export function ApplyItGame({ content, quickPlay, onComplete, lessonTitle, onUseHint, hintsRemaining }: GameComponentProps) {
  const allScenarios = content.scenarios ?? [];
  const scenarios = useMemo(() => {
    const count = quickPlay ? 2 : Math.min(4, allScenarios.length);
    return allScenarios.slice(0, count);
  }, [allScenarios, quickPlay]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [eliminatedOption, setEliminatedOption] = useState<number | null>(null);

  const current = scenarios[currentIndex];

  const handleSelect = useCallback((optionIndex: number) => {
    if (showFeedback || selectedOption !== null) return;
    setSelectedOption(optionIndex);
    setShowFeedback(true);

    const isCorrect = optionIndex === current.correctIndex;
    const newCorrect = isCorrect ? correctCount + 1 : correctCount;
    if (isCorrect) setCorrectCount(newCorrect);

    setTimeout(() => {
      const nextIndex = currentIndex + 1;
      if (nextIndex >= scenarios.length) {
        const score = calculateGameScore(newCorrect, scenarios.length);
        onComplete(score, newCorrect, scenarios.length);
      } else {
        setCurrentIndex(nextIndex);
        setSelectedOption(null);
        setShowFeedback(false);
        setEliminatedOption(null);
      }
    }, 2200);
  }, [showFeedback, selectedOption, current, currentIndex, scenarios, correctCount, onComplete]);

  const handleHint = useCallback(() => {
    if (!onUseHint || eliminatedOption !== null) return;
    const success = onUseHint();
    if (!success) return;

    // Eliminate one wrong option
    const wrongOptions = current.options
      .map((_, i) => i)
      .filter((i) => i !== current.correctIndex);
    if (wrongOptions.length > 0) {
      setEliminatedOption(wrongOptions[Math.floor(Math.random() * wrongOptions.length)]);
    }
  }, [onUseHint, current, eliminatedOption]);

  if (!current) return null;

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-golden/15 border border-golden/20 flex items-center justify-center">
            <Lightbulb className="w-4 h-4 text-golden" />
          </div>
          <div>
            <p className="text-xs text-text-muted leading-none">Apply It</p>
            <p className="text-[11px] text-text-muted/60 truncate max-w-[150px]">{lessonTitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="px-2.5 py-1 rounded-full bg-golden/10 border border-golden/20">
            <span className="text-xs font-semibold text-golden">{currentIndex + 1}/{scenarios.length}</span>
          </div>
          {onUseHint && (hintsRemaining ?? 0) > 0 && !showFeedback && eliminatedOption === null && (
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
        </div>
      </div>

      {/* Scenario */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          className="flex-1 flex flex-col"
        >
          <div className="p-4 rounded-xl bg-elevated/60 border border-white/[0.06] mb-4">
            <p className="text-sm text-text-primary leading-relaxed whitespace-pre-line">
              {current.scenario}
            </p>
          </div>

          {/* Options — 3 choices */}
          <div className="space-y-2.5 flex-1">
            {current.options.map((option, i) => {
              const isSelected = selectedOption === i;
              const isCorrect = i === current.correctIndex;
              const isEliminated = eliminatedOption === i;
              const showCorrectness = showFeedback;

              if (isEliminated && !showFeedback) {
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0.3, scale: 0.97 }}
                    className="p-3.5 rounded-xl text-left text-sm border bg-white/[0.01] border-white/[0.03] line-through"
                  >
                    <span className="text-text-muted/40">{option}</span>
                  </motion.div>
                );
              }

              return (
                <motion.button
                  key={i}
                  onClick={() => handleSelect(i)}
                  disabled={showFeedback || isEliminated}
                  whileTap={!showFeedback ? { scale: 0.98 } : undefined}
                  animate={
                    showCorrectness && isCorrect
                      ? { scale: [1, 1.02, 1] }
                      : {}
                  }
                  className={`w-full p-3.5 rounded-xl text-left text-sm border transition-all duration-200 ${
                    showCorrectness
                      ? isCorrect
                        ? 'bg-sage/12 border-sage/30 shadow-sage/10 shadow-md'
                        : isSelected
                        ? 'bg-amber-500/10 border-amber-500/25'
                        : 'bg-elevated/40 border-white/[0.04] opacity-50'
                      : 'bg-elevated/60 border-white/[0.06] hover:border-golden/25 hover:bg-golden/5 active:bg-golden/8'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border ${
                      showCorrectness
                        ? isCorrect
                          ? 'bg-sage/20 border-sage/30 text-sage'
                          : isSelected
                          ? 'bg-amber-500/15 border-amber-500/25 text-amber-400'
                          : 'bg-white/[0.03] border-white/[0.06] text-text-muted/40'
                        : 'bg-white/[0.04] border-white/[0.08] text-text-muted'
                    }`}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className={`leading-snug ${
                      showCorrectness
                        ? isCorrect
                          ? 'text-sage'
                          : isSelected
                          ? 'text-amber-400'
                          : 'text-text-muted/50'
                        : 'text-text-primary'
                    }`}>
                      {option}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Feedback */}
          <AnimatePresence>
            {showFeedback && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
                className={`mt-4 p-3.5 rounded-xl border ${
                  selectedOption === current.correctIndex
                    ? 'bg-sage/8 border-sage/20'
                    : 'bg-amber-500/8 border-amber-500/15'
                }`}
              >
                <div className="flex items-start gap-2">
                  <Sparkles className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                    selectedOption === current.correctIndex ? 'text-sage' : 'text-amber-400'
                  }`} />
                  <div>
                    <p className={`text-xs font-display font-bold mb-1 ${
                      selectedOption === current.correctIndex ? 'text-sage' : 'text-amber-400'
                    }`}>
                      {selectedOption === current.correctIndex ? 'Correct!' : 'Almost!'}
                    </p>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {current.explanation}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default ApplyItGame;
