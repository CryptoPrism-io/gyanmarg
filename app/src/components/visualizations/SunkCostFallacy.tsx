import { useState } from 'react';
import { motion } from 'framer-motion';

interface Scenario {
  id: string;
  title: string;
  invested: string;
  sunkCost: string;
  wrongChoice: string;
  rightChoice: string;
}

const scenarios: Scenario[] = [
  {
    id: 'movie',
    title: 'Bad Movie',
    invested: 'Paid $15 for ticket',
    sunkCost: 'Movie is terrible 30 min in',
    wrongChoice: 'Stay because you paid (waste 2 more hours)',
    rightChoice: 'Leave and do something valuable',
  },
  {
    id: 'relationship',
    title: 'Wrong Relationship',
    invested: '3 years together',
    sunkCost: 'Realize you\'re incompatible',
    wrongChoice: 'Stay because of time invested',
    rightChoice: 'End it, don\'t waste more years',
  },
  {
    id: 'project',
    title: 'Failing Project',
    invested: '$50k and 6 months',
    sunkCost: 'Market changed, no demand',
    wrongChoice: 'Keep investing to "not waste" money',
    rightChoice: 'Pivot or stop, redirect resources',
  },
  {
    id: 'career',
    title: 'Wrong Career',
    invested: '4-year degree',
    sunkCost: 'Hate the field',
    wrongChoice: 'Stay because of degree',
    rightChoice: 'Switch to something fulfilling',
  },
];

export function SunkCostFallacy() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const scenario = scenarios[activeScenario];

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Scenario selector */}
      <div className="flex flex-wrap justify-center gap-2">
        {scenarios.map((s, index) => (
          <button
            key={s.id}
            onClick={() => {
              setActiveScenario(index);
              setShowAnswer(false);
            }}
            className={`text-[10px] px-3 py-1.5 rounded-full transition-all border ${
              activeScenario === index
                ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                : 'text-gray-500 hover:text-gray-300 border-transparent'
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* Sunk cost visualization */}
      <div className="w-full max-w-xs space-y-3">
        {/* Investment */}
        <div className="bg-[#111113] border border-gray-800 rounded-lg p-3">
          <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-1">Already Invested</p>
          <p className="text-sm text-gray-300">{scenario.invested}</p>
        </div>

        {/* Arrow down */}
        <div className="text-center text-gray-600">↓</div>

        {/* Reality */}
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
          <p className="text-[10px] text-red-400 uppercase tracking-wide mb-1">Reality Check</p>
          <p className="text-sm text-red-300">{scenario.sunkCost}</p>
        </div>

        {/* Question */}
        <div className="text-center py-2">
          <p className="text-sm text-gray-400">What should you do?</p>
        </div>

        {/* Choices */}
        <div className="space-y-2">
          <motion.button
            onClick={() => setShowAnswer(true)}
            className={`w-full p-3 rounded-lg text-left text-xs transition-all border ${
              showAnswer
                ? 'bg-red-500/10 border-red-500/50 text-red-400'
                : 'bg-[#111113] border-gray-800 text-gray-400 hover:border-gray-700'
            }`}
            whileTap={{ scale: 0.98 }}
          >
            <span className="font-medium">❌ Fallacy:</span> {scenario.wrongChoice}
          </motion.button>

          <motion.button
            onClick={() => setShowAnswer(true)}
            className={`w-full p-3 rounded-lg text-left text-xs transition-all border ${
              showAnswer
                ? 'bg-green-500/10 border-green-500/50 text-green-400'
                : 'bg-[#111113] border-gray-800 text-gray-400 hover:border-gray-700'
            }`}
            whileTap={{ scale: 0.98 }}
          >
            <span className="font-medium">✓ Rational:</span> {scenario.rightChoice}
          </motion.button>
        </div>
      </div>

      {/* Explanation */}
      {showAnswer && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#111113] border border-gray-800 rounded-lg p-4 max-w-xs text-center"
        >
          <p className="text-xs text-gray-400">
            <span className="text-amber-400 font-medium">Key insight:</span> Past costs are gone forever.
            Only future costs and benefits should influence decisions.
          </p>
        </motion.div>
      )}

      <p className="text-[10px] text-gray-500 text-center max-w-xs">
        The money/time is already spent. Don't let it trap you.
      </p>
    </div>
  );
}

export default SunkCostFallacy;
