import { useState } from 'react';
import { motion } from 'framer-motion';

// Daily Stoic - Dichotomy of Control
const items = [
  { text: 'What others think of you', controllable: false },
  { text: 'Your effort and attitude', controllable: true },
  { text: 'The weather', controllable: false },
  { text: 'How you respond to setbacks', controllable: true },
  { text: 'Your boss\'s mood', controllable: false },
  { text: 'Your morning routine', controllable: true },
  { text: 'Traffic delays', controllable: false },
  { text: 'How you spend your free time', controllable: true },
];

export function DichotomyOfControl() {
  const [sorted, setSorted] = useState<Record<number, 'control' | 'noControl' | null>>({});
  const [showResults, setShowResults] = useState(false);

  const handleSort = (idx: number, choice: 'control' | 'noControl') => {
    setSorted((prev) => ({ ...prev, [idx]: choice }));
  };

  const allSorted = Object.keys(sorted).length === items.length;

  const getScore = () => {
    let correct = 0;
    items.forEach((item, idx) => {
      const userChoice = sorted[idx];
      if (userChoice === 'control' && item.controllable) correct++;
      if (userChoice === 'noControl' && !item.controllable) correct++;
    });
    return correct;
  };

  const reset = () => {
    setSorted({});
    setShowResults(false);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Header */}
      <div className="text-center">
        <p className="text-xs text-gray-400 mb-1">
          "Make the best use of what is in your power, and take the rest as it happens."
        </p>
        <p className="text-[10px] text-amber-400">— Epictetus</p>
      </div>

      {/* Two columns header */}
      <div className="w-full max-w-xs grid grid-cols-2 gap-2">
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-2 text-center">
          <p className="text-[10px] text-green-400 uppercase">In Your Control</p>
        </div>
        <div className="bg-gray-500/10 border border-gray-600 rounded-lg p-2 text-center">
          <p className="text-[10px] text-gray-400 uppercase">Not In Your Control</p>
        </div>
      </div>

      {/* Items to sort */}
      {!showResults ? (
        <div className="w-full max-w-xs space-y-2">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <motion.button
                onClick={() => handleSort(idx, 'control')}
                className={`flex-1 py-2 px-3 rounded-lg border text-xs transition-all ${
                  sorted[idx] === 'control'
                    ? 'bg-green-500/20 border-green-500/50 text-green-400'
                    : 'bg-[#111113] border-gray-800 text-gray-500 hover:border-gray-700'
                }`}
                whileTap={{ scale: 0.98 }}
              >
                Control
              </motion.button>
              <div className={`flex-[2] py-2 px-3 bg-[#111113] border border-gray-800 rounded-lg ${
                sorted[idx] ? 'opacity-60' : ''
              }`}>
                <p className="text-xs text-gray-300 text-center">{item.text}</p>
              </div>
              <motion.button
                onClick={() => handleSort(idx, 'noControl')}
                className={`flex-1 py-2 px-3 rounded-lg border text-xs transition-all ${
                  sorted[idx] === 'noControl'
                    ? 'bg-gray-500/20 border-gray-500/50 text-gray-400'
                    : 'bg-[#111113] border-gray-800 text-gray-500 hover:border-gray-700'
                }`}
                whileTap={{ scale: 0.98 }}
              >
                No
              </motion.button>
            </div>
          ))}

          {allSorted && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setShowResults(true)}
              className="w-full py-2 bg-amber-500/20 border border-amber-500/50 rounded-lg text-xs text-amber-400"
            >
              Check Answers
            </motion.button>
          )}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-xs space-y-3"
        >
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-amber-400">{getScore()}/{items.length}</p>
            <p className="text-xs text-gray-400 mt-1">Correct answers</p>
          </div>

          <div className="space-y-2">
            {items.map((item, idx) => {
              const isCorrect = (sorted[idx] === 'control' && item.controllable) ||
                               (sorted[idx] === 'noControl' && !item.controllable);
              return (
                <div
                  key={idx}
                  className={`p-2 rounded-lg border flex items-center justify-between ${
                    isCorrect
                      ? 'bg-green-500/10 border-green-500/30'
                      : 'bg-red-500/10 border-red-500/30'
                  }`}
                >
                  <p className="text-xs text-gray-300">{item.text}</p>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    item.controllable
                      ? 'bg-green-500/30 text-green-400'
                      : 'bg-gray-500/30 text-gray-400'
                  }`}>
                    {item.controllable ? 'Control' : 'No Control'}
                  </span>
                </div>
              );
            })}
          </div>

          <button
            onClick={reset}
            className="w-full py-2 bg-gray-800 border border-gray-700 rounded-lg text-xs text-gray-400"
          >
            Try Again
          </button>
        </motion.div>
      )}

      <p className="text-[10px] text-gray-500 text-center">
        From "The Daily Stoic" by Ryan Holiday
      </p>
    </div>
  );
}

export default DichotomyOfControl;
