import { useState } from 'react';
import { motion } from 'framer-motion';

// Rich Dad Poor Dad - Assets vs Liabilities
const items = [
  { name: 'Your house (mortgage)', isAsset: false, why: 'Takes money OUT for mortgage, taxes, maintenance' },
  { name: 'Rental property (positive cash flow)', isAsset: true, why: 'Puts money IN from rent after expenses' },
  { name: 'Your car', isAsset: false, why: 'Takes money OUT for payments, insurance, gas, repairs' },
  { name: 'Dividend stocks', isAsset: true, why: 'Puts money IN through regular dividends' },
  { name: 'Designer clothes', isAsset: false, why: 'Takes money OUT, depreciates immediately' },
  { name: 'Business you own', isAsset: true, why: 'Puts money IN through profits' },
  { name: 'Boat', isAsset: false, why: 'Takes money OUT for storage, maintenance, fuel' },
  { name: 'Royalties from book', isAsset: true, why: 'Puts money IN while you sleep' },
];

export function AssetLiability() {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const handleGuess = (item: typeof items[0], guess: boolean) => {
    if (revealed[item.name]) return;

    setRevealed((prev) => ({ ...prev, [item.name]: true }));
    if (guess === item.isAsset) {
      setScore((prev) => ({ correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setScore((prev) => ({ ...prev, total: prev.total + 1 }));
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/[0.03] via-transparent to-red-500/[0.02]" />
      <div className="absolute inset-0 border border-white/[0.1] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-4">
          {/* Definition */}
          <div className="w-full max-w-xs grid grid-cols-2 gap-3">
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/[0.08] to-green-500/[0.03] backdrop-blur-sm" />
              <div className="absolute inset-0 border border-green-500/20 rounded-lg" />
              <div className="relative z-10 p-3 text-center">
                <p className="text-xs text-green-400 font-medium">ASSET</p>
                <p className="text-[10px] text-gray-400 mt-1">
                  Puts money IN your pocket
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.08] to-red-500/[0.03] backdrop-blur-sm" />
              <div className="absolute inset-0 border border-red-500/20 rounded-lg" />
              <div className="relative z-10 p-3 text-center">
                <p className="text-xs text-red-400 font-medium">LIABILITY</p>
                <p className="text-[10px] text-gray-400 mt-1">
                  Takes money OUT of your pocket
                </p>
              </div>
            </div>
          </div>

          {/* Score */}
          <div className="text-center">
            <p className="text-[10px] text-gray-500">
              Score: {score.correct}/{score.total}
            </p>
          </div>

          {/* Quiz items */}
          <div className="w-full max-w-xs space-y-2">
            {items.map((item) => (
              <motion.div
                key={item.name}
                className="relative overflow-hidden rounded-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm" />
                <div className="absolute inset-0 border border-white/[0.08] rounded-lg" />
                <div className="relative z-10 p-3">
                  <p className="text-xs text-gray-300 mb-2">{item.name}</p>

                  {!revealed[item.name] ? (
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleGuess(item, true)}
                        className="flex-1 py-1.5 rounded bg-green-500/20 border border-green-500/30 text-[10px] text-green-400 hover:bg-green-500/30 transition-colors"
                      >
                        Asset
                      </button>
                      <button
                        onClick={() => handleGuess(item, false)}
                        className="flex-1 py-1.5 rounded bg-red-500/20 border border-red-500/30 text-[10px] text-red-400 hover:bg-red-500/30 transition-colors"
                      >
                        Liability
                      </button>
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className={`p-2 rounded ${
                        item.isAsset
                          ? 'bg-green-500/10 border border-green-500/30'
                          : 'bg-red-500/10 border border-red-500/30'
                      }`}
                    >
                      <p className={`text-[10px] font-medium ${
                        item.isAsset ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {item.isAsset ? '✓ ASSET' : '✗ LIABILITY'}
                      </p>
                      <p className="text-[10px] text-gray-400 mt-1">{item.why}</p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key insight */}
          <div className="w-full max-w-xs relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.08] to-amber-500/[0.03] backdrop-blur-sm" />
            <div className="absolute inset-0 border border-amber-500/20 rounded-lg" />
            <div className="relative z-10 p-3">
              <p className="text-[10px] text-amber-400 text-center">
                The rich buy assets. The poor and middle class buy liabilities they think are assets.
              </p>
            </div>
          </div>

          <p className="text-[10px] text-gray-500 text-center">
            From "Rich Dad Poor Dad" by Robert Kiyosaki
          </p>
        </div>
      </div>
    </div>
  );
}

export default AssetLiability;
