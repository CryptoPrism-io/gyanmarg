import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Gamble {
  id: string;
  description: string;
  gain: number;
  loss: number;
  probability: number;
  expectedValue: number;
  mostPeopleChoice: 'take' | 'pass';
  insight: string;
}

const gambles: Gamble[] = [
  {
    id: '1',
    description: '50% chance to win $100, 50% chance to lose $100',
    gain: 100,
    loss: 100,
    probability: 50,
    expectedValue: 0,
    mostPeopleChoice: 'pass',
    insight: 'Even with fair odds, most people avoid the bet because the pain of losing $100 feels worse than the joy of winning $100.',
  },
  {
    id: '2',
    description: '50% chance to win $150, 50% chance to lose $100',
    gain: 150,
    loss: 100,
    probability: 50,
    expectedValue: 25,
    mostPeopleChoice: 'pass',
    insight: 'Despite positive expected value (+$25), many still pass. The 2:1 ratio isn\'t enough to overcome loss aversion.',
  },
  {
    id: '3',
    description: '50% chance to win $200, 50% chance to lose $100',
    gain: 200,
    loss: 100,
    probability: 50,
    expectedValue: 50,
    mostPeopleChoice: 'take',
    insight: 'At 2:1 gain-to-loss ratio, most people finally accept. This is the "breakeven" point for loss aversion.',
  },
  {
    id: '4',
    description: '80% chance to win $50, 20% chance to lose $200',
    gain: 50,
    loss: 200,
    probability: 80,
    expectedValue: 0,
    mostPeopleChoice: 'pass',
    insight: 'High probability of gain doesn\'t matter—the possibility of a large loss dominates decision making.',
  },
];

export function LossAversion() {
  const [activeGamble, setActiveGamble] = useState(0);
  const [userChoice, setUserChoice] = useState<'take' | 'pass' | null>(null);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [simulatedResults, setSimulatedResults] = useState<{ wins: number; losses: number }>({ wins: 0, losses: 0 });
  const [isSimulating, setIsSimulating] = useState(false);
  const [showScience, setShowScience] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const gamble = gambles[activeGamble];
  const lossAversionRatio = (gamble.gain / gamble.loss).toFixed(1);
  const psychologicalLoss = gamble.loss * 2; // Losses feel 2x worse

  // Simulate multiple plays
  useEffect(() => {
    if (isSimulating) {
      setSimulatedResults({ wins: 0, losses: 0 });
      let count = 0;

      intervalRef.current = window.setInterval(() => {
        const won = Math.random() * 100 < gamble.probability;
        setSimulatedResults(prev => ({
          wins: prev.wins + (won ? 1 : 0),
          losses: prev.losses + (won ? 0 : 1),
        }));
        count++;
        if (count >= 20) {
          setIsSimulating(false);
        }
      }, 150);

      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [isSimulating, gamble.probability]);

  const handleChoice = (choice: 'take' | 'pass') => {
    setUserChoice(choice);
    setShowAnalysis(true);
  };

  const nextGamble = () => {
    setActiveGamble(prev => (prev + 1) % gambles.length);
    setUserChoice(null);
    setShowAnalysis(false);
    setSimulatedResults({ wins: 0, losses: 0 });
    setIsSimulating(false);
  };

  const simulateResults = () => {
    setIsSimulating(true);
  };

  const netResult = simulatedResults.wins * gamble.gain - simulatedResults.losses * gamble.loss;

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Gamble selector */}
      <div className="flex justify-center gap-1">
        {gambles.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setActiveGamble(index);
              setUserChoice(null);
              setShowAnalysis(false);
              setSimulatedResults({ wins: 0, losses: 0 });
            }}
            className={`w-8 h-8 rounded-lg text-xs font-medium transition-all border ${
              activeGamble === index
                ? 'bg-amber-500/20 text-amber-400 border-amber-500/50'
                : 'text-gray-500 border-gray-800 hover:border-gray-700'
            }`}
            whileTap={{ scale: 0.95 }}
          >
            {index + 1}
          </motion.button>
        ))}
      </div>

      {/* Loss aversion visualization */}
      <div className="w-full max-w-xs">
        <div className="relative h-36 bg-gradient-to-b from-[#0A0A0B] to-[#111113] border border-gray-800 rounded-2xl overflow-hidden">
          {/* Center line (neutral) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-700" />
          <span className="absolute left-1/2 top-2 -translate-x-1/2 text-[8px] text-gray-500">Neutral</span>

          {/* Loss side - actual value */}
          <motion.div
            className="absolute left-0 top-[30%] bottom-[30%] bg-gradient-to-r from-red-500/30 to-red-500/10
                      flex items-center justify-end pr-3"
            animate={{ width: `${(gamble.loss / 300) * 50}%` }}
          >
            <div className="text-right">
              <p className="text-lg font-bold text-red-400">-${gamble.loss}</p>
              <p className="text-[8px] text-red-400/60">Actual</p>
            </div>
          </motion.div>

          {/* Loss side - psychological impact (2x) */}
          <motion.div
            className="absolute left-0 top-[15%] bottom-[15%] border-r-2 border-red-500/50"
            style={{ borderStyle: 'dashed' }}
            animate={{ width: `${Math.min((psychologicalLoss / 300) * 50, 50)}%` }}
          />
          <motion.span
            className="absolute text-[8px] text-red-400"
            style={{ top: '15%' }}
            animate={{ left: `${Math.min((psychologicalLoss / 300) * 50, 48)}%` }}
          >
            ≈-${psychologicalLoss}
          </motion.span>
          <motion.span
            className="absolute text-[8px] text-red-400/60"
            style={{ top: '22%' }}
            animate={{ left: `${Math.min((psychologicalLoss / 300) * 50 - 2, 46)}%` }}
          >
            (feels like)
          </motion.span>

          {/* Gain side */}
          <motion.div
            className="absolute right-0 top-[30%] bottom-[30%] bg-gradient-to-l from-green-500/30 to-green-500/10
                      flex items-center justify-start pl-3"
            animate={{ width: `${(gamble.gain / 300) * 50}%` }}
          >
            <div className="text-left">
              <p className="text-lg font-bold text-green-400">+${gamble.gain}</p>
              <p className="text-[8px] text-green-400/60">Actual = Felt</p>
            </div>
          </motion.div>

          {/* Labels */}
          <div className="absolute bottom-2 left-3 text-[10px] text-red-400 font-medium">LOSSES</div>
          <div className="absolute bottom-2 right-3 text-[10px] text-green-400 font-medium">GAINS</div>
        </div>

        <p className="text-center text-[10px] text-gray-500 mt-2">
          Dashed line shows psychological weight of loss (2x actual)
        </p>
      </div>

      {/* Gamble choice */}
      <AnimatePresence mode="wait">
        <motion.div
          key={gamble.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-xs"
        >
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-center mb-3">
            <p className="text-[10px] text-amber-400 uppercase tracking-wide mb-2">
              Scenario {activeGamble + 1} of {gambles.length}
            </p>
            <p className="text-sm text-gray-200 mb-2">{gamble.description}</p>
            <div className="flex justify-center gap-4 text-[10px]">
              <span className="text-gray-500">
                EV: <span className={gamble.expectedValue >= 0 ? 'text-green-400' : 'text-red-400'}>
                  ${gamble.expectedValue >= 0 ? '+' : ''}{gamble.expectedValue}
                </span>
              </span>
              <span className="text-gray-500">
                Ratio: <span className="text-amber-400">{lossAversionRatio}:1</span>
              </span>
            </div>
          </div>

          {!showAnalysis && (
            <div className="flex gap-2">
              <motion.button
                onClick={() => handleChoice('take')}
                className="flex-1 py-3 bg-green-500/10 border border-green-500/30
                         text-green-400 rounded-xl text-xs font-medium hover:bg-green-500/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                🎲 Take the bet
              </motion.button>
              <motion.button
                onClick={() => handleChoice('pass')}
                className="flex-1 py-3 bg-red-500/10 border border-red-500/30
                         text-red-400 rounded-xl text-xs font-medium hover:bg-red-500/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                🚫 Pass
              </motion.button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Analysis */}
      <AnimatePresence>
        {showAnalysis && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-xs space-y-3"
          >
            <div className="grid grid-cols-2 gap-2">
              <div className={`p-3 rounded-xl border text-center ${
                userChoice === 'take'
                  ? 'bg-green-500/10 border-green-500/30'
                  : 'bg-red-500/10 border-red-500/30'
              }`}>
                <p className="text-[10px] text-gray-500 mb-1">Your choice</p>
                <p className="text-sm font-medium" style={{
                  color: userChoice === 'take' ? '#22C55E' : '#EF4444'
                }}>
                  {userChoice === 'take' ? '🎲 Take' : '🚫 Pass'}
                </p>
              </div>
              <div className={`p-3 rounded-xl border text-center ${
                gamble.mostPeopleChoice === 'take'
                  ? 'bg-green-500/10 border-green-500/30'
                  : 'bg-red-500/10 border-red-500/30'
              }`}>
                <p className="text-[10px] text-gray-500 mb-1">Most people</p>
                <p className="text-sm font-medium" style={{
                  color: gamble.mostPeopleChoice === 'take' ? '#22C55E' : '#EF4444'
                }}>
                  {gamble.mostPeopleChoice === 'take' ? '🎲 Take' : '🚫 Pass'}
                </p>
              </div>
            </div>

            {/* Insight */}
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3">
              <p className="text-xs text-gray-300 leading-relaxed">
                {gamble.insight}
              </p>
            </div>

            {/* Simulation */}
            {userChoice === 'take' && (
              <div className="bg-[#111113] border border-gray-800 rounded-xl p-3">
                <p className="text-[10px] text-gray-500 mb-2 text-center">
                  What if you played 20 times?
                </p>

                {simulatedResults.wins + simulatedResults.losses > 0 && (
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-center">
                      <p className="text-green-400 font-bold">{simulatedResults.wins}</p>
                      <p className="text-[9px] text-gray-500">Wins</p>
                    </div>
                    <div className="text-center">
                      <p className={`font-bold ${netResult >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        ${netResult >= 0 ? '+' : ''}{netResult}
                      </p>
                      <p className="text-[9px] text-gray-500">Net</p>
                    </div>
                    <div className="text-center">
                      <p className="text-red-400 font-bold">{simulatedResults.losses}</p>
                      <p className="text-[9px] text-gray-500">Losses</p>
                    </div>
                  </div>
                )}

                <motion.button
                  onClick={simulateResults}
                  disabled={isSimulating}
                  className="w-full py-2 bg-purple-500/10 border border-purple-500/30 text-purple-400
                           rounded-lg text-xs disabled:opacity-50"
                  whileTap={{ scale: 0.98 }}
                >
                  {isSimulating ? '🎰 Simulating...' : '🎰 Simulate 20 plays'}
                </motion.button>
              </div>
            )}

            <button
              onClick={nextGamble}
              className="w-full py-2 text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Next scenario →
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Science toggle */}
      <button
        onClick={() => setShowScience(!showScience)}
        className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
      >
        {showScience ? '▼ Hide' : '▶ Show'} the science
      </button>

      <AnimatePresence>
        {showScience && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full max-w-xs space-y-2"
          >
            <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl">
              <p className="text-[10px] text-red-400 font-medium mb-1">🧠 Brain's Loss Response</p>
              <p className="text-[10px] text-gray-400">
                The amygdala (fear center) activates more strongly for losses than the reward
                centers do for equivalent gains.
              </p>
            </div>
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl">
              <p className="text-[10px] text-amber-400 font-medium mb-1">📊 The 2:1 Ratio</p>
              <p className="text-[10px] text-gray-400">
                Research shows people need potential gains to be about 2x the potential loss
                before they'll accept an even-odds bet.
              </p>
            </div>
            <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-xl">
              <p className="text-[10px] text-blue-400 font-medium mb-1">💼 Real-World Impact</p>
              <p className="text-[10px] text-gray-400">
                Loss aversion explains why people hold losing stocks too long and sell winners
                too early—the "disposition effect."
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Key insight */}
      <div className="bg-[#111113] border border-gray-800 rounded-xl p-4 max-w-xs">
        <p className="text-xs text-gray-400 leading-relaxed">
          <span className="text-red-400 font-medium">Kahneman & Tversky:</span> "Losses loom
          larger than gains." The pain of losing $100 is psychologically about twice as intense
          as the pleasure of gaining $100.
        </p>
      </div>

      <p className="text-[10px] text-gray-600">
        From Thinking, Fast and Slow by Daniel Kahneman
      </p>
    </div>
  );
}

export default LossAversion;
