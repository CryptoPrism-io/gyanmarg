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
    <div className="flex flex-col items-center gap-4">
      {/* Header */}
      <div className="text-center">
        <p className="text-xs text-gray-400">
          Why buy a business instead of starting one?
        </p>
      </div>

      {/* Visual comparison */}
      <div className="w-full max-w-xs grid grid-cols-2 gap-3">
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 text-center">
          <p className="text-lg mb-1">🏗️</p>
          <p className="text-xs text-amber-400 font-medium">Build</p>
          <p className="text-[10px] text-gray-500">Start from zero</p>
        </div>
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center">
          <p className="text-lg mb-1">🏢</p>
          <p className="text-xs text-green-400 font-medium">Buy</p>
          <p className="text-[10px] text-gray-500">Acquire existing</p>
        </div>
      </div>

      {/* Comparison table */}
      <div className="w-full max-w-xs space-y-2">
        {comparisons.map((comp, idx) => (
          <motion.button
            key={idx}
            onClick={() => setActiveRow(activeRow === idx ? null : idx)}
            className={`w-full p-3 rounded-lg border text-left transition-all ${
              activeRow === idx
                ? 'bg-[#111113] border-gray-700'
                : 'bg-[#111113] border-gray-800 hover:border-gray-700'
            }`}
            whileTap={{ scale: 0.98 }}
          >
            <p className="text-xs text-gray-300 font-medium mb-2">{comp.factor}</p>
            <div className="grid grid-cols-2 gap-2">
              <div className={`p-2 rounded text-center ${
                comp.winner === 'build' ? 'bg-amber-500/20' : 'bg-gray-800/50'
              }`}>
                <p className={`text-[10px] ${comp.winner === 'build' ? 'text-amber-400' : 'text-gray-500'}`}>
                  {comp.build}
                </p>
              </div>
              <div className={`p-2 rounded text-center ${
                comp.winner === 'buy' ? 'bg-green-500/20' : 'bg-gray-800/50'
              }`}>
                <p className={`text-[10px] ${comp.winner === 'buy' ? 'text-green-400' : 'text-gray-500'}`}>
                  {comp.buy}
                </p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Score */}
      <div className="w-full max-w-xs bg-[#111113] border border-gray-800 rounded-lg p-3">
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

      {/* Key insight */}
      <div className="w-full max-w-xs bg-green-500/10 border border-green-500/30 rounded-lg p-3">
        <p className="text-[10px] text-green-400 text-center">
          <span className="font-medium">The thesis:</span> Buying an existing business
          lets you skip the hardest, riskiest years and start with cash flow from day one.
        </p>
      </div>

      <p className="text-[10px] text-gray-500 text-center">
        From "Buy Then Build" by Walker Deibel
      </p>
    </div>
  );
}

export default BuyVsBuild;
