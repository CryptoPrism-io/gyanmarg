import { useState } from 'react';
import { motion } from 'framer-motion';

// Getting to Yes - BATNA determines your power
export function BATNAPower() {
  const [yourBatna, setYourBatna] = useState(50);
  const [theirBatna, setTheirBatna] = useState(50);

  const getAdvantage = () => {
    const diff = yourBatna - theirBatna;
    if (diff > 20) return { text: 'Strong position - you can push harder', color: 'green' };
    if (diff < -20) return { text: 'Weak position - consider improving alternatives', color: 'red' };
    return { text: 'Balanced - focus on creating value', color: 'amber' };
  };

  const advantage = getAdvantage();

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Header */}
      <div className="text-center">
        <p className="text-sm font-medium text-gray-300">BATNA Power Analysis</p>
        <p className="text-[10px] text-gray-500">
          Best Alternative To Negotiated Agreement
        </p>
      </div>

      {/* Visual comparison */}
      <div className="w-full max-w-xs flex items-end justify-center gap-8 h-32">
        {/* Your BATNA */}
        <div className="flex flex-col items-center">
          <motion.div
            className="w-16 bg-blue-500/30 border border-blue-500/50 rounded-t-lg"
            animate={{ height: `${yourBatna}%` }}
          />
          <p className="text-[10px] text-blue-400 mt-2">Your BATNA</p>
          <p className="text-xs text-gray-500">{yourBatna}%</p>
        </div>

        {/* Their BATNA */}
        <div className="flex flex-col items-center">
          <motion.div
            className="w-16 bg-purple-500/30 border border-purple-500/50 rounded-t-lg"
            animate={{ height: `${theirBatna}%` }}
          />
          <p className="text-[10px] text-purple-400 mt-2">Their BATNA</p>
          <p className="text-xs text-gray-500">{theirBatna}%</p>
        </div>
      </div>

      {/* Sliders */}
      <div className="w-full max-w-xs space-y-3">
        <div>
          <p className="text-[10px] text-gray-500 mb-1">
            Your alternatives (if this deal fails)
          </p>
          <input
            type="range"
            min="10"
            max="90"
            value={yourBatna}
            onChange={(e) => setYourBatna(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
        </div>
        <div>
          <p className="text-[10px] text-gray-500 mb-1">
            Their alternatives (estimate)
          </p>
          <input
            type="range"
            min="10"
            max="90"
            value={theirBatna}
            onChange={(e) => setTheirBatna(Number(e.target.value))}
            className="w-full accent-purple-500"
          />
        </div>
      </div>

      {/* Analysis */}
      <motion.div
        key={advantage.color}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`w-full max-w-xs p-3 rounded-lg border text-center ${
          advantage.color === 'green'
            ? 'bg-green-500/10 border-green-500/30'
            : advantage.color === 'red'
            ? 'bg-red-500/10 border-red-500/30'
            : 'bg-amber-500/10 border-amber-500/30'
        }`}
      >
        <p className={`text-xs ${
          advantage.color === 'green'
            ? 'text-green-400'
            : advantage.color === 'red'
            ? 'text-red-400'
            : 'text-amber-400'
        }`}>
          {advantage.text}
        </p>
      </motion.div>

      {/* Key insight */}
      <div className="w-full max-w-xs bg-[#111113] border border-gray-800 rounded-lg p-3">
        <p className="text-[10px] text-gray-400 text-center">
          <span className="text-amber-400">Key:</span> Never negotiate without knowing your BATNA.
          The better your alternative, the more power you have to walk away.
        </p>
      </div>

      <p className="text-[10px] text-gray-500 text-center">
        From "Getting to Yes" by Fisher & Ury
      </p>
    </div>
  );
}

export default BATNAPower;
