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
    <div className="relative overflow-hidden rounded-2xl">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-purple-500/[0.02]" />
      <div className="absolute inset-0 border border-white/[0.1] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 p-5">
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
                className="w-16 bg-blue-500/30 border border-blue-500/50 rounded-t-lg backdrop-blur-sm"
                animate={{ height: `${yourBatna}%` }}
              />
              <p className="text-[10px] text-blue-400 mt-2">Your BATNA</p>
              <p className="text-xs text-gray-500">{yourBatna}%</p>
            </div>

            {/* Their BATNA */}
            <div className="flex flex-col items-center">
              <motion.div
                className="w-16 bg-purple-500/30 border border-purple-500/50 rounded-t-lg backdrop-blur-sm"
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
            className={`relative w-full max-w-xs overflow-hidden rounded-lg`}
          >
            <div className={`absolute inset-0 backdrop-blur-sm ${
              advantage.color === 'green'
                ? 'bg-gradient-to-br from-green-500/10 via-green-500/5 to-transparent'
                : advantage.color === 'red'
                ? 'bg-gradient-to-br from-red-500/10 via-red-500/5 to-transparent'
                : 'bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent'
            }`} />
            <div className={`absolute inset-0 border rounded-lg ${
              advantage.color === 'green'
                ? 'border-green-500/30'
                : advantage.color === 'red'
                ? 'border-red-500/30'
                : 'border-amber-500/30'
            }`} />
            <div className="relative z-10 p-3 text-center">
              <p className={`text-xs ${
                advantage.color === 'green'
                  ? 'text-green-400'
                  : advantage.color === 'red'
                  ? 'text-red-400'
                  : 'text-amber-400'
              }`}>
                {advantage.text}
              </p>
            </div>
          </motion.div>

          {/* Key insight */}
          <div className="relative w-full max-w-xs overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm" />
            <div className="absolute inset-0 border border-white/[0.08] rounded-lg" />
            <div className="relative z-10 p-3">
              <p className="text-[10px] text-gray-400 text-center">
                <span className="text-amber-400">Key:</span> Never negotiate without knowing your BATNA.
                The better your alternative, the more power you have to walk away.
              </p>
            </div>
          </div>

          <p className="text-[10px] text-gray-500 text-center">
            From "Getting to Yes" by Fisher & Ury
          </p>
        </div>
      </div>
    </div>
  );
}

export default BATNAPower;
