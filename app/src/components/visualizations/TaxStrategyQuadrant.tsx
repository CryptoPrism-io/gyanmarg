import { useState } from 'react';
import { motion } from 'framer-motion';

// Tax-Free Wealth - Tax Strategy Quadrant (based on business entity types)
const quadrants = [
  {
    name: 'Employee',
    label: 'E',
    taxRate: 'Highest',
    description: 'Earn → Tax → Spend',
    deductions: 'Almost none',
    control: 'Minimal',
    strategies: ['Max 401(k)', 'HSA if available', 'Limited options'],
    color: 'red',
  },
  {
    name: 'Self-Employed',
    label: 'S',
    taxRate: 'High + SE Tax',
    description: 'Earn → Tax → Spend (+ 15.3% SE)',
    deductions: 'Some business deductions',
    control: 'Moderate',
    strategies: ['SEP IRA', 'Home office', 'Vehicle deductions'],
    color: 'amber',
  },
  {
    name: 'Business Owner',
    label: 'B',
    taxRate: 'Lower (control)',
    description: 'Earn → Spend → Tax',
    deductions: 'Extensive',
    control: 'High',
    strategies: ['Entity selection', 'Retirement plans', 'Hire family', 'Real estate'],
    color: 'blue',
  },
  {
    name: 'Investor',
    label: 'I',
    taxRate: 'Lowest',
    description: 'Capital gains, tax-free options',
    deductions: 'Depreciation, losses',
    control: 'Maximum',
    strategies: ['Long-term gains (20%)', '1031 exchanges', 'Opportunity zones', 'Qualified dividends'],
    color: 'green',
  },
];

export function TaxStrategyQuadrant() {
  const [activeQuadrant, setActiveQuadrant] = useState<number | null>(null);

  const colorMap: Record<string, { bg: string; border: string; text: string }> = {
    red: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400' },
    amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400' },
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400' },
    green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400' },
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Header */}
      <div className="text-center">
        <p className="text-xs text-gray-400">
          Where you earn determines how much you keep.
        </p>
      </div>

      {/* Quadrant grid */}
      <div className="w-full max-w-xs grid grid-cols-2 gap-2">
        {quadrants.map((q, idx) => {
          const colors = colorMap[q.color];
          const isActive = activeQuadrant === idx;

          return (
            <motion.button
              key={idx}
              onClick={() => setActiveQuadrant(isActive ? null : idx)}
              className={`p-4 rounded-lg border transition-all ${
                isActive ? `${colors.bg} ${colors.border}` : 'bg-[#111113] border-gray-800 hover:border-gray-700'
              }`}
              whileTap={{ scale: 0.98 }}
            >
              <p className={`text-2xl font-bold ${colors.text} mb-1`}>{q.label}</p>
              <p className={`text-xs ${isActive ? colors.text : 'text-gray-400'}`}>{q.name}</p>
              <p className="text-[10px] text-gray-500">{q.taxRate}</p>
            </motion.button>
          );
        })}
      </div>

      {/* Arrow showing direction */}
      <div className="flex items-center gap-2 text-[10px] text-gray-500">
        <span className="text-red-400">E</span>
        <span>→</span>
        <span className="text-amber-400">S</span>
        <span>→</span>
        <span className="text-blue-400">B</span>
        <span>→</span>
        <span className="text-green-400">I</span>
        <span className="ml-2">= Tax efficiency increases</span>
      </div>

      {/* Active quadrant detail */}
      {activeQuadrant !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`w-full max-w-xs ${colorMap[quadrants[activeQuadrant].color].bg} border ${colorMap[quadrants[activeQuadrant].color].border} rounded-lg p-4`}
        >
          <p className={`text-sm font-medium ${colorMap[quadrants[activeQuadrant].color].text} mb-2`}>
            {quadrants[activeQuadrant].name}
          </p>

          <div className="space-y-2 text-[10px]">
            <div className="flex justify-between">
              <span className="text-gray-500">Tax flow:</span>
              <span className="text-gray-300">{quadrants[activeQuadrant].description}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Deductions:</span>
              <span className="text-gray-300">{quadrants[activeQuadrant].deductions}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Control:</span>
              <span className="text-gray-300">{quadrants[activeQuadrant].control}</span>
            </div>
          </div>

          <div className="mt-3 bg-black/20 rounded p-2">
            <p className="text-[10px] text-gray-500 mb-1">Strategies:</p>
            <div className="space-y-1">
              {quadrants[activeQuadrant].strategies.map((s, i) => (
                <p key={i} className="text-[10px] text-gray-400">• {s}</p>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Key insight */}
      <div className="w-full max-w-xs bg-purple-500/10 border border-purple-500/30 rounded-lg p-3">
        <p className="text-[10px] text-purple-400 text-center">
          <span className="font-medium">The secret:</span> The wealthy don't work harder—
          they structure their income in B and I quadrants where tax law favors them.
        </p>
      </div>

      <p className="text-[10px] text-gray-500 text-center">
        From "Tax-Free Wealth" by Tom Wheelwright
      </p>
    </div>
  );
}

export default TaxStrategyQuadrant;
