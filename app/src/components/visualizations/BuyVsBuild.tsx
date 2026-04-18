import { useState } from 'react';
import { motion } from 'framer-motion';

// Buy Then Build - Buy vs Build Comparison
const comparisons = [
  {
    factor: 'Time to Revenue',
    build: '2-5 years',
    buy: 'Day 1',
    winner: 'buy',
  },
  {
    factor: 'Risk Level',
    build: 'Very high (90% fail)',
    buy: 'Lower (proven model)',
    winner: 'buy',
  },
  {
    factor: 'Capital Required',
    build: 'Lower upfront, higher total',
    buy: 'Higher upfront, lower total',
    winner: 'neutral',
  },
  {
    factor: 'Learning Curve',
    build: 'Learn by failing',
    buy: 'Learn from existing team',
    winner: 'buy',
  },
  {
    factor: 'Financing Options',
    build: 'Limited (risky)',
    buy: 'SBA loans, seller financing',
    winner: 'buy',
  },
  {
    factor: 'Exit Potential',
    build: 'Uncertain',
    buy: 'Proven, with track record',
    winner: 'buy',
  },
];

export function BuyVsBuild() {
  const [activeRow, setActiveRow] = useState<number | null>(null);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] via-transparent to-green-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-4">
          {/* Header */}
          <div className="text-center">
            <p className="text-xs text-gray-400">
              Why buy a business instead of starting one?
            </p>
          </div>

          {/* Visual comparison */}
          <div className="w-full max-w-xs grid grid-cols-2 gap-3">
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.08] to-amber-500/[0.03] backdrop-blur-sm" />
              <div className="absolute inset-0 border border-amber-500/20 rounded-lg" />
              <div className="relative z-10 p-3 text-center">
                <p className="text-lg mb-1">🏗️</p>
                <p className="text-xs text-amber-400 font-medium">Build</p>
                <p className="text-[10px] text-gray-500">Start from zero</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/[0.08] to-green-500/[0.03] backdrop-blur-sm" />
              <div className="absolute inset-0 border border-green-500/20 rounded-lg" />
              <div className="relative z-10 p-3 text-center">
                <p className="text-lg mb-1">🏢</p>
                <p className="text-xs text-green-400 font-medium">Buy</p>
                <p className="text-[10px] text-gray-500">Acquire existing</p>
              </div>
            </div>
          </div>

          {/* Comparison table */}
          <div className="w-full max-w-xs space-y-2">
            {comparisons.map((comp, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveRow(activeRow === idx ? null : idx)}
                className={`w-full relative overflow-hidden rounded-lg text-left transition-all ${
                  activeRow === idx
                    ? 'bg-[var(--viz-tile)] border border-[var(--viz-border-light)]'
                    : 'bg-[var(--viz-tile)] border border-[var(--viz-border)] hover:border-[var(--viz-border-light)]'
                }`}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative z-10 p-3">
                  <p className="text-xs text-gray-300 font-medium mb-2">{comp.factor}</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className={`p-2 rounded text-center ${
                      comp.winner === 'build' ? 'bg-amber-500/20' : 'bg-[var(--viz-tile)]'
                    }`}>
                      <p className={`text-[10px] ${comp.winner === 'build' ? 'text-amber-400' : 'text-gray-500'}`}>
                        {comp.build}
                      </p>
                    </div>
                    <div className={`p-2 rounded text-center ${
                      comp.winner === 'buy' ? 'bg-green-500/20' : 'bg-[var(--viz-tile)]'
                    }`}>
                      <p className={`text-[10px] ${comp.winner === 'buy' ? 'text-green-400' : 'text-gray-500'}`}>
                        {comp.buy}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Score */}
          <div className="w-full max-w-xs relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm" />
            <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg" />
            <div className="relative z-10 p-3">
              <div className="flex justify-between items-center">
                <div className="text-center">
                  <p className="text-lg font-bold text-amber-400">1</p>
                  <p className="text-[10px] text-gray-500">Build Wins</p>
                </div>
                <div className="text-[10px] text-gray-500">vs</div>
                <div className="text-center">
                  <p className="text-lg font-bold text-green-400">5</p>
                  <p className="text-[10px] text-gray-500">Buy Wins</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key insight */}
          <div className="w-full max-w-xs relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/[0.08] to-green-500/[0.03] backdrop-blur-sm" />
            <div className="absolute inset-0 border border-green-500/20 rounded-lg" />
            <div className="relative z-10 p-3">
              <p className="text-[10px] text-green-400 text-center">
                <span className="font-medium">The thesis:</span> Buying an existing business
                lets you skip the hardest, riskiest years and start with cash flow from day one.
              </p>
            </div>
          </div>

          <p className="text-[10px] text-gray-500 text-center">
            From "Buy Then Build" by Walker Deibel
          </p>
        </div>
      </div>
    </div>
  );
}

export default BuyVsBuild;
