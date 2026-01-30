import { useState } from 'react';
import { motion } from 'framer-motion';

// Talk Like TED - The Rule of Three
const examples = [
  { context: 'Steve Jobs', points: ['Simple', 'Beautiful', 'Powerful'] },
  { context: 'Julius Caesar', points: ['Veni', 'Vidi', 'Vici'] },
  { context: 'Life, Liberty', points: ['Life', 'Liberty', 'Pursuit of Happiness'] },
];

export function RuleOfThree() {
  const [activeExample, setActiveExample] = useState(0);
  const [userPoints, setUserPoints] = useState(['', '', '']);

  const example = examples[activeExample];

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Working memory diagram */}
      <div className="relative w-full max-w-xs">
        <div className="flex justify-center gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <motion.div
              key={num}
              className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold border ${
                num <= 3
                  ? 'bg-green-500/20 border-green-500/50 text-green-400'
                  : 'bg-red-500/10 border-red-500/30 text-red-400/50'
              }`}
              animate={{ opacity: num <= 3 ? 1 : 0.4 }}
            >
              {num}
            </motion.div>
          ))}
        </div>
        <p className="text-[10px] text-center text-gray-500 mb-4">
          Working memory holds 3-4 items easily. More overwhelms.
        </p>
      </div>

      {/* Famous examples */}
      <div className="w-full max-w-xs">
        <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-2 text-center">
          Famous Examples
        </p>
        <div className="flex gap-2 justify-center mb-3">
          {examples.map((ex, idx) => (
            <button
              key={idx}
              onClick={() => setActiveExample(idx)}
              className={`px-3 py-1 rounded-full text-[10px] border transition-all ${
                idx === activeExample
                  ? 'bg-amber-500/20 border-amber-500/50 text-amber-400'
                  : 'border-gray-700 text-gray-500 hover:border-gray-600'
              }`}
            >
              {ex.context}
            </button>
          ))}
        </div>

        <motion.div
          key={activeExample}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#111113] border border-gray-800 rounded-lg p-4"
        >
          <div className="flex justify-center gap-3">
            {example.points.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: idx * 0.15 }}
                className="w-20 h-20 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-500/30 flex items-center justify-center"
              >
                <span className="text-xs text-amber-400 font-medium text-center px-1">
                  {point}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Practice section */}
      <div className="w-full max-w-xs">
        <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-2 text-center">
          Try It: Your 3 Key Points
        </p>
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((idx) => (
            <input
              key={idx}
              type="text"
              placeholder={`Point ${idx + 1}`}
              value={userPoints[idx]}
              onChange={(e) => {
                const newPoints = [...userPoints];
                newPoints[idx] = e.target.value;
                setUserPoints(newPoints);
              }}
              className="bg-[#111113] border border-gray-800 rounded-lg p-2 text-xs text-gray-300 placeholder-gray-600 text-center focus:border-amber-500/50 focus:outline-none"
            />
          ))}
        </div>
      </div>

      <p className="text-[10px] text-gray-500 text-center">
        From "Talk Like TED" by Carmine Gallo
      </p>
    </div>
  );
}

export default RuleOfThree;
