import { useState } from 'react';
import { motion } from 'framer-motion';

interface Investment {
  id: string;
  name: string;
  intrinsicValue: number;
  marketPrice: number;
}

const investments: Investment[] = [
  { id: 'a', name: 'Stock A', intrinsicValue: 100, marketPrice: 70 },
  { id: 'b', name: 'Stock B', intrinsicValue: 100, marketPrice: 95 },
  { id: 'c', name: 'Stock C', intrinsicValue: 100, marketPrice: 120 },
  { id: 'd', name: 'Stock D', intrinsicValue: 100, marketPrice: 50 },
];

export function MarginOfSafety() {
  const [activeInvestment, setActiveInvestment] = useState(0);

  const investment = investments[activeInvestment];
  const margin = ((investment.intrinsicValue - investment.marketPrice) / investment.intrinsicValue) * 100;
  const isSafe = margin >= 25;
  const isOverpriced = margin < 0;

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Investment selector */}
      <div className="flex gap-2">
        {investments.map((inv, index) => (
          <button
            key={inv.id}
            onClick={() => setActiveInvestment(index)}
            className={`text-xs px-3 py-1.5 rounded-full transition-all border ${
              activeInvestment === index
                ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                : 'text-gray-500 hover:text-gray-300 border-transparent'
            }`}
          >
            {inv.name}
          </button>
        ))}
      </div>

      {/* Value visualization */}
      <div className="w-full max-w-xs">
        <div className="relative h-48 bg-[#111113] border border-gray-800 rounded-lg p-4">
          {/* Intrinsic value line */}
          <div className="absolute left-4 right-4 border-t-2 border-dashed border-green-500/50"
               style={{ top: '30%' }} />
          <div className="absolute right-6 text-[10px] text-green-400" style={{ top: '25%' }}>
            Intrinsic Value: ${investment.intrinsicValue}
          </div>

          {/* Market price bar */}
          <motion.div
            className="absolute left-8 right-8 rounded-lg flex items-center justify-center"
            style={{
              top: `${30 + (investment.marketPrice / investment.intrinsicValue - 1) * -50 + 25}%`,
              height: '40px',
              backgroundColor: isOverpriced ? '#EF444430' : isSafe ? '#22C55E30' : '#F59E0B30',
              borderColor: isOverpriced ? '#EF4444' : isSafe ? '#22C55E' : '#F59E0B',
              borderWidth: 2,
            }}
            animate={{
              top: `${30 + (investment.marketPrice / investment.intrinsicValue - 1) * -50 + 25}%`,
            }}
            transition={{ type: 'spring' }}
          >
            <span className="text-xs font-medium" style={{
              color: isOverpriced ? '#EF4444' : isSafe ? '#22C55E' : '#F59E0B'
            }}>
              Market Price: ${investment.marketPrice}
            </span>
          </motion.div>

          {/* Margin of safety zone */}
          {!isOverpriced && (
            <motion.div
              className="absolute left-8 right-8 bg-green-500/10 border-l-2 border-green-500"
              style={{ top: '30%' }}
              animate={{ height: `${Math.max(0, margin) * 0.5}%` }}
            >
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] text-green-400">
                {margin.toFixed(0)}% margin
              </span>
            </motion.div>
          )}
        </div>
      </div>

      {/* Verdict */}
      <div className={`px-4 py-2 rounded-lg border ${
        isOverpriced
          ? 'bg-red-500/10 border-red-500/30 text-red-400'
          : isSafe
          ? 'bg-green-500/10 border-green-500/30 text-green-400'
          : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
      }`}>
        <p className="text-xs font-medium">
          {isOverpriced
            ? '❌ Overpriced - No margin of safety'
            : isSafe
            ? '✓ Good margin of safety (25%+)'
            : '⚠️ Low margin - higher risk'}
        </p>
      </div>

      {/* Rule explanation */}
      <div className="w-full max-w-xs space-y-2">
        <div className="flex items-center gap-2 text-[10px]">
          <div className="w-3 h-3 rounded bg-green-500/30 border border-green-500" />
          <span className="text-gray-400">25%+ margin = Good buy</span>
        </div>
        <div className="flex items-center gap-2 text-[10px]">
          <div className="w-3 h-3 rounded bg-amber-500/30 border border-amber-500" />
          <span className="text-gray-400">0-25% margin = Risky</span>
        </div>
        <div className="flex items-center gap-2 text-[10px]">
          <div className="w-3 h-3 rounded bg-red-500/30 border border-red-500" />
          <span className="text-gray-400">Negative margin = Avoid</span>
        </div>
      </div>

      {/* Key insight */}
      <div className="bg-[#111113] border border-gray-800 rounded-lg p-3 max-w-xs text-center">
        <p className="text-xs text-gray-400">
          <span className="text-green-400 font-medium">Ben Graham:</span> Buy when price is
          significantly below intrinsic value. The margin protects against errors and bad luck.
        </p>
      </div>

      <p className="text-[10px] text-gray-500">
        From The Intelligent Investor
      </p>
    </div>
  );
}

export default MarginOfSafety;
