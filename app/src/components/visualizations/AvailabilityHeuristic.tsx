import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <div className="flex flex-col items-center gap-4">
      {/* Question */}
      <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3 w-full max-w-xs text-center">
        <p className="text-[10px] text-purple-400 uppercase tracking-wide mb-1">
          Question {activeComparison + 1}/{comparisons.length}
        </p>
        <p className="text-sm text-gray-300">
          Which causes more deaths annually (US)?
        </p>
      </div>

      {/* Options */}
      {!showAnswer && (
        <div className="w-full max-w-xs space-y-2">
          <motion.button
            onClick={() => handleGuess('scary')}
            className="w-full p-3 bg-[#111113] border border-gray-800 rounded-lg
                     text-left hover:border-purple-500/30 transition-all"
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-sm text-gray-300">{comparison.scary.name}</span>
          </motion.button>

          <motion.button
            onClick={() => handleGuess('mundane')}
            className="w-full p-3 bg-[#111113] border border-gray-800 rounded-lg
                     text-left hover:border-purple-500/30 transition-all"
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-sm text-gray-300">{comparison.mundane.name}</span>
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
                  ? '✓ Correct! You avoided the availability bias.'
                  : '⚠️ The scarier option feels more dangerous because it\'s more memorable.'}
              </p>
            </div>

            {/* Comparison bars */}
            <div className="space-y-3">
              {/* Scary option */}
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-red-400">{comparison.scary.name}</span>
                  <span className="text-gray-500">{comparison.scary.deaths.toLocaleString()}/year</span>
                </div>
                <div className="h-4 bg-[#111113] rounded-full border border-gray-800 overflow-hidden">
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
                  <span className="text-gray-500">{comparison.mundane.deaths.toLocaleString()}/year</span>
                </div>
                <div className="h-4 bg-[#111113] rounded-full border border-gray-800 overflow-hidden">
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
            <div className="text-center p-2 bg-[#111113] border border-gray-800 rounded-lg">
              <p className="text-xs text-gray-400">
                <span className="text-green-400 font-bold">
                  {Math.round(comparison.mundane.deaths / comparison.scary.deaths)}x
                </span> more deadly, but feels less scary
              </p>
            </div>

            <button
              onClick={nextComparison}
              className="w-full py-2 text-xs text-gray-500 hover:text-gray-300"
            >
              Next comparison →
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Key insight */}
      <div className="bg-[#111113] border border-gray-800 rounded-lg p-3 max-w-xs text-center">
        <p className="text-xs text-gray-400">
          <span className="text-purple-400 font-medium">The bias:</span> We judge probability
          by how easily examples come to mind. Vivid, emotional events (sharks, planes) feel
          more common than mundane killers.
        </p>
      </div>

      <p className="text-[10px] text-gray-500">
        From Thinking, Fast and Slow by Kahneman
      </p>
    </div>
  );
}

export default AvailabilityHeuristic;
