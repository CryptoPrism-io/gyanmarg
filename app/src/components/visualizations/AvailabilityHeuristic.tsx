import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

interface RiskComparison {
  id: string;
  scary: { name: string; deaths: number; coverage: string };
  mundane: { name: string; deaths: number; coverage: string };
}

const comparisons: RiskComparison[] = [
  {
    id: '1',
    scary: { name: 'Shark attacks', deaths: 5, coverage: 'Massive media coverage' },
    mundane: { name: 'Falling coconuts', deaths: 150, coverage: 'Never reported' },
  },
  {
    id: '2',
    scary: { name: 'Plane crashes', deaths: 500, coverage: '24/7 news coverage' },
    mundane: { name: 'Car accidents', deaths: 38000, coverage: 'Rarely reported' },
  },
  {
    id: '3',
    scary: { name: 'Terrorism', deaths: 100, coverage: 'Constant coverage' },
    mundane: { name: 'Heart disease', deaths: 700000, coverage: 'Almost never' },
  },
  {
    id: '4',
    scary: { name: 'Murder', deaths: 20000, coverage: 'Daily crime news' },
    mundane: { name: 'Medical errors', deaths: 250000, coverage: 'Rarely discussed' },
  },
];

export function AvailabilityHeuristic() {
  const [activeComparison, setActiveComparison] = useState(0);
  const [userGuess, setUserGuess] = useState<'scary' | 'mundane' | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const comparison = comparisons[activeComparison];

  const handleGuess = (guess: 'scary' | 'mundane') => {
    setUserGuess(guess);
    setShowAnswer(true);
  };

  const nextComparison = () => {
    setActiveComparison(prev => (prev + 1) % comparisons.length);
    setUserGuess(null);
    setShowAnswer(false);
  };

  const maxDeaths = Math.max(comparison.scary.deaths, comparison.mundane.deaths);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Glass layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.03] via-transparent to-red-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(168, 85, 247, 0.1) 100%)' }}
          >
            <AlertTriangle className="w-4 h-4 text-purple-400" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-[var(--viz-secondary)]">Availability Heuristic</h3>
            <p className="text-[10px] text-[var(--viz-muted)]">From Thinking, Fast and Slow</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          {/* Question */}
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3 w-full max-w-xs text-center">
            <p className="text-[10px] text-purple-400 uppercase tracking-wide mb-1">
              Question {activeComparison + 1}/{comparisons.length}
            </p>
            <p className="text-sm text-[var(--viz-secondary)]">
              Which causes more deaths annually (US)?
            </p>
          </div>

          {/* Options */}
          {!showAnswer && (
            <div className="w-full max-w-xs space-y-2">
              <motion.button
                onClick={() => handleGuess('scary')}
                className="relative w-full p-3 border border-[var(--viz-border)] rounded-lg
                         text-left hover:border-purple-500/30 transition-all overflow-hidden"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <span className="text-sm text-[var(--viz-secondary)]">{comparison.scary.name}</span>
              </motion.button>

              <motion.button
                onClick={() => handleGuess('mundane')}
                className="relative w-full p-3 border border-[var(--viz-border)] rounded-lg
                         text-left hover:border-purple-500/30 transition-all overflow-hidden"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <span className="text-sm text-[var(--viz-secondary)]">{comparison.mundane.name}</span>
              </motion.button>
            </div>
          )}

          {/* Answer reveal */}
          <AnimatePresence>
            {showAnswer && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-xs space-y-3"
              >
                {/* Feedback */}
                <div className={`p-2 rounded-lg border text-center ${
                  userGuess === 'mundane'
                    ? 'bg-green-500/10 border-green-500/30 text-green-400'
                    : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                }`}>
                  <p className="text-xs">
                    {userGuess === 'mundane'
                      ? 'Correct! You avoided the availability bias.'
                      : 'The scarier option feels more dangerous because it\'s more memorable.'}
                  </p>
                </div>

                {/* Comparison bars */}
                <div className="space-y-3">
                  {/* Scary option */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-red-400">{comparison.scary.name}</span>
                      <span className="text-[var(--viz-muted)]">{comparison.scary.deaths.toLocaleString()}/year</span>
                    </div>
                    <div
                      className="h-4 rounded-full border border-[var(--viz-border)] overflow-hidden"
                      style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
                    >
                      <motion.div
                        className="h-full bg-red-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${(comparison.scary.deaths / maxDeaths) * 100}%` }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      />
                    </div>
                    <p className="text-[10px] text-red-400/60 mt-1">{comparison.scary.coverage}</p>
                  </div>

                  {/* Mundane option */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-green-400">{comparison.mundane.name}</span>
                      <span className="text-[var(--viz-muted)]">{comparison.mundane.deaths.toLocaleString()}/year</span>
                    </div>
                    <div
                      className="h-4 rounded-full border border-[var(--viz-border)] overflow-hidden"
                      style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
                    >
                      <motion.div
                        className="h-full bg-green-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${(comparison.mundane.deaths / maxDeaths) * 100}%` }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      />
                    </div>
                    <p className="text-[10px] text-green-400/60 mt-1">{comparison.mundane.coverage}</p>
                  </div>
                </div>

                {/* Ratio */}
                <div
                  className="relative text-center p-2 border border-[var(--viz-border)] rounded-lg overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <p className="text-xs text-[var(--viz-secondary)]">
                    <span className="text-green-400 font-bold">
                      {Math.round(comparison.mundane.deaths / comparison.scary.deaths)}x
                    </span> more deadly, but feels less scary
                  </p>
                </div>

                <button
                  onClick={nextComparison}
                  className="w-full py-2 text-xs text-[var(--viz-muted)] hover:text-[var(--viz-secondary)]"
                >
                  Next comparison
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Key insight */}
          <div
            className="relative border border-[var(--viz-border)] rounded-lg p-3 max-w-xs text-center overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="text-xs text-[var(--viz-secondary)]">
              <span className="text-purple-400 font-medium">The bias:</span> We judge probability
              by how easily examples come to mind. Vivid, emotional events (sharks, planes) feel
              more common than mundane killers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvailabilityHeuristic;
