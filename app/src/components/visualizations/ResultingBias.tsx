import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Thinking in Bets - Resulting (Outcome Bias)
const scenarios = [
  {
    decision: 'You fold pocket aces because a player goes all-in',
    outcome: 'good',
    resultText: 'They reveal they had 7-2 offsuit (worst hand)',
    wasGoodDecision: false,
    explanation: 'Bad decision, got lucky. Folding aces is almost never correct.',
  },
  {
    decision: 'You invest your emergency fund in a single stock',
    outcome: 'good',
    resultText: 'The stock triples in 6 months',
    wasGoodDecision: false,
    explanation: 'Bad decision, lucky outcome. Risk of ruin was too high.',
  },
  {
    decision: 'You diversify across index funds for retirement',
    outcome: 'bad',
    resultText: 'Market crashes 30% the next year',
    wasGoodDecision: true,
    explanation: 'Good decision, unlucky outcome. Process was sound.',
  },
  {
    decision: 'You run a red light because you\'re late',
    outcome: 'good',
    resultText: 'You arrive on time, no accident',
    wasGoodDecision: false,
    explanation: 'Bad decision, lucky outcome. Risk didn\'t pay off... this time.',
  },
];

export function ResultingBias() {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [userGuess, setUserGuess] = useState<'good' | 'bad' | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const scenario = scenarios[currentScenario];

  const handleGuess = (guess: 'good' | 'bad') => {
    setUserGuess(guess);
    setShowExplanation(true);
  };

  const nextScenario = () => {
    setCurrentScenario((prev) => (prev + 1) % scenarios.length);
    setUserGuess(null);
    setShowExplanation(false);
  };

  const isCorrect = userGuess === (scenario.wasGoodDecision ? 'good' : 'bad');

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.03] via-transparent to-blue-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-4">
          {/* Header */}
          <div className="text-center">
            <p className="text-xs text-[var(--viz-muted)]">
              <span className="text-red-400">Resulting:</span> Judging decision quality by outcome alone
            </p>
          </div>

          {/* Scenario */}
          <div className="w-full max-w-xs relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-[var(--viz-tile)] backdrop-blur-sm" />
            <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg" />
            <div className="relative z-10 p-4">
              <p className="text-[10px] text-[var(--viz-muted)] uppercase mb-2">
                Scenario {currentScenario + 1}/{scenarios.length}
              </p>
              <p className="text-sm text-[var(--viz-secondary)] mb-3">{scenario.decision}</p>

              <div className={`p-2 rounded-lg backdrop-blur-sm ${
                scenario.outcome === 'good'
                  ? 'bg-green-500/[0.08] border border-green-500/30'
                  : 'bg-red-500/[0.08] border border-red-500/30'
              }`}>
                <p className={`text-xs ${
                  scenario.outcome === 'good' ? 'text-green-400' : 'text-red-400'
                }`}>
                  Outcome: {scenario.resultText}
                </p>
              </div>
            </div>
          </div>

          {/* Question */}
          {!showExplanation ? (
            <div className="w-full max-w-xs space-y-3">
              <p className="text-xs text-[var(--viz-muted)] text-center">
                Was this a <span className="text-amber-400">good decision</span>?
              </p>
              <div className="grid grid-cols-2 gap-2">
                <motion.button
                  onClick={() => handleGuess('good')}
                  className="py-3 bg-green-500/[0.08] border border-green-500/30 rounded-lg text-green-400 text-sm hover:bg-green-500/[0.15] backdrop-blur-sm"
                  whileTap={{ scale: 0.98 }}
                >
                  Good Decision
                </motion.button>
                <motion.button
                  onClick={() => handleGuess('bad')}
                  className="py-3 bg-red-500/[0.08] border border-red-500/30 rounded-lg text-red-400 text-sm hover:bg-red-500/[0.15] backdrop-blur-sm"
                  whileTap={{ scale: 0.98 }}
                >
                  Bad Decision
                </motion.button>
              </div>
            </div>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-xs space-y-3"
              >
                {/* Result */}
                <div className={`p-3 rounded-lg border backdrop-blur-sm ${
                  isCorrect
                    ? 'bg-green-500/[0.08] border-green-500/30'
                    : 'bg-amber-500/[0.08] border-amber-500/30'
                }`}>
                  <p className={`text-sm font-medium ${isCorrect ? 'text-green-400' : 'text-amber-400'}`}>
                    {isCorrect ? 'Correct!' : 'Not quite!'}
                  </p>
                  <p className="text-xs text-[var(--viz-muted)] mt-1">
                    This was a <span className={scenario.wasGoodDecision ? 'text-green-400' : 'text-red-400'}>
                      {scenario.wasGoodDecision ? 'good' : 'bad'} decision
                    </span> with a{' '}
                    <span className={scenario.outcome === 'good' ? 'text-green-400' : 'text-red-400'}>
                      {scenario.outcome} outcome
                    </span>.
                  </p>
                </div>

                {/* Explanation */}
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-[var(--viz-tile)] backdrop-blur-sm" />
                  <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg" />
                  <div className="relative z-10 p-3">
                    <p className="text-xs text-[var(--viz-secondary)]">{scenario.explanation}</p>
                  </div>
                </div>

                {/* The lesson */}
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.12] to-purple-500/[0.05] backdrop-blur-sm" />
                  <div className="absolute inset-0 border border-purple-500/30 rounded-lg" />
                  <div className="relative z-10 p-3">
                    <p className="text-[10px] text-purple-400">
                      Key insight: Good decisions can have bad outcomes. Bad decisions can have good outcomes.
                      Judge the <span className="font-medium">process</span>, not the result.
                    </p>
                  </div>
                </div>

                <button
                  onClick={nextScenario}
                  className="w-full py-2 bg-blue-500/20 border border-blue-500/50 rounded-lg text-xs text-blue-400 backdrop-blur-sm"
                >
                  Next Scenario
                </button>
              </motion.div>
            </AnimatePresence>
          )}

          <p className="text-[10px] text-[var(--viz-muted)] text-center">
            From "Thinking in Bets" by Annie Duke
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResultingBias;
