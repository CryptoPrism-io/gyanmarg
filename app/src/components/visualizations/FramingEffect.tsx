import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Scenario {
  id: string;
  question: string;
  optionA: { label: string; framing: 'gain' | 'loss'; percentage: number };
  optionB: { label: string; framing: 'gain' | 'loss'; percentage: number };
  insight: string;
}

const scenarios: Scenario[] = [
  {
    id: 'medical',
    question: 'A disease will kill 600 people. Which treatment do you prefer?',
    optionA: { label: '200 people will be saved', framing: 'gain', percentage: 72 },
    optionB: { label: '400 people will die', framing: 'loss', percentage: 28 },
    insight: 'Both options are identical! But 72% choose A (gain frame) vs 28% for B (loss frame).',
  },
  {
    id: 'surgery',
    question: 'You need surgery. Which description makes you more likely to proceed?',
    optionA: { label: '90% survival rate', framing: 'gain', percentage: 80 },
    optionB: { label: '10% mortality rate', framing: 'loss', percentage: 20 },
    insight: 'Same numbers, different feelings. Gain framing increases acceptance significantly.',
  },
  {
    id: 'beef',
    question: 'Which ground beef would you buy?',
    optionA: { label: '75% lean', framing: 'gain', percentage: 68 },
    optionB: { label: '25% fat', framing: 'loss', percentage: 32 },
    insight: 'We avoid "fat" language even when the product is identical.',
  },
];

export function FramingEffect() {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [userChoice, setUserChoice] = useState<'A' | 'B' | null>(null);
  const [showResult, setShowResult] = useState(false);

  const scenario = scenarios[currentScenario];

  const handleChoice = (choice: 'A' | 'B') => {
    setUserChoice(choice);
    setTimeout(() => setShowResult(true), 500);
  };

  const nextScenario = () => {
    setCurrentScenario((prev) => (prev + 1) % scenarios.length);
    setUserChoice(null);
    setShowResult(false);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Title */}
      <div className="text-center">
        <h3 className="text-sm font-bold text-amber-400">The Framing Effect</h3>
        <p className="text-[10px] text-gray-500">How words change our decisions</p>
      </div>

      {/* Scenario indicator */}
      <div className="flex gap-2">
        {scenarios.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentScenario ? 'bg-amber-400 scale-125' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>

      {/* Question */}
      <div className="w-full max-w-xs p-4 bg-[#111113] border border-gray-800 rounded-xl">
        <p className="text-xs text-gray-300 text-center">{scenario.question}</p>
      </div>

      {/* Options */}
      <div className="w-full max-w-xs space-y-3">
        <motion.button
          onClick={() => !userChoice && handleChoice('A')}
          className={`w-full p-4 rounded-xl border text-left transition-all ${
            userChoice === 'A'
              ? 'bg-green-500/20 border-green-500/50'
              : userChoice
              ? 'opacity-50'
              : 'bg-green-500/10 border-green-500/30 hover:bg-green-500/20'
          }`}
          whileHover={!userChoice ? { scale: 1.02 } : {}}
          whileTap={!userChoice ? { scale: 0.98 } : {}}
        >
          <div className="flex items-center gap-3">
            <span className="text-green-400 text-lg">A</span>
            <div>
              <p className="text-sm text-gray-200">{scenario.optionA.label}</p>
              <p className="text-[10px] text-green-400/70">Gain framing</p>
            </div>
          </div>
        </motion.button>

        <motion.button
          onClick={() => !userChoice && handleChoice('B')}
          className={`w-full p-4 rounded-xl border text-left transition-all ${
            userChoice === 'B'
              ? 'bg-red-500/20 border-red-500/50'
              : userChoice
              ? 'opacity-50'
              : 'bg-red-500/10 border-red-500/30 hover:bg-red-500/20'
          }`}
          whileHover={!userChoice ? { scale: 1.02 } : {}}
          whileTap={!userChoice ? { scale: 0.98 } : {}}
        >
          <div className="flex items-center gap-3">
            <span className="text-red-400 text-lg">B</span>
            <div>
              <p className="text-sm text-gray-200">{scenario.optionB.label}</p>
              <p className="text-[10px] text-red-400/70">Loss framing</p>
            </div>
          </div>
        </motion.button>
      </div>

      {/* Result */}
      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-xs space-y-3"
          >
            {/* Percentage bars */}
            <div className="p-4 bg-[#111113] border border-gray-800 rounded-xl">
              <p className="text-[10px] text-gray-500 mb-3">How people typically respond:</p>

              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                    <span>Option A (Gain)</span>
                    <span className="text-green-400">{scenario.optionA.percentage}%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-green-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${scenario.optionA.percentage}%` }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                    <span>Option B (Loss)</span>
                    <span className="text-red-400">{scenario.optionB.percentage}%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-red-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${scenario.optionB.percentage}%` }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Insight */}
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl">
              <p className="text-[10px] text-amber-400">💡 {scenario.insight}</p>
            </div>

            {/* Next button */}
            <button
              onClick={nextScenario}
              className="w-full py-2 bg-gray-800 text-gray-300 text-xs rounded-lg hover:bg-gray-700 transition-colors"
            >
              Try Next Scenario →
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Defense strategy */}
      <div className="w-full max-w-xs p-3 bg-purple-500/10 border border-purple-500/30 rounded-xl">
        <p className="text-[10px] text-purple-400 font-medium">🛡️ Defense:</p>
        <p className="text-[10px] text-gray-400">
          Always reframe options in both gain and loss terms before deciding. Ask: "What am I
          actually choosing between?"
        </p>
      </div>

      {/* Key insight */}
      <div className="bg-[#111113] border border-gray-800 rounded-xl p-4 max-w-xs">
        <p className="text-xs text-gray-400 leading-relaxed">
          <span className="text-amber-400 font-medium">Kahneman & Tversky:</span> "The framing of a
          decision problem can have a dramatic effect on the choices people make, even when the
          underlying options are logically equivalent."
        </p>
      </div>

      <p className="text-[10px] text-gray-600">From Thinking, Fast and Slow</p>
    </div>
  );
}

export default FramingEffect;
