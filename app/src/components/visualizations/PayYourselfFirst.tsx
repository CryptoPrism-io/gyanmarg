import { useState } from 'react';
import { motion } from 'framer-motion';

// Richest Man in Babylon - Pay Yourself First
export function PayYourselfFirst() {
  const [income, setIncome] = useState(5000);
  const [savingsRate, setSavingsRate] = useState(10);
  const [years, setYears] = useState(10);

  const monthlySavings = (income * savingsRate) / 100;
  const totalSaved = monthlySavings * 12 * years;
  const withInterest = monthlySavings * 12 * ((Math.pow(1.07, years) - 1) / 0.07) * 1.07; // 7% return

  return (
    <div className="flex flex-col items-center gap-4">
      {/* The principle */}
      <div className="w-full max-w-xs bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/30 rounded-lg p-4 text-center">
        <p className="text-[10px] text-amber-400 uppercase tracking-wide">The First Law of Gold</p>
        <p className="text-sm text-gray-300 mt-2 font-medium">
          "A part of all you earn is yours to keep"
        </p>
        <p className="text-[10px] text-gray-500 mt-1">
          Save at least 10% before paying anyone else
        </p>
      </div>

      {/* Flow visualization */}
      <div className="w-full max-w-xs">
        <div className="flex items-center justify-between mb-4">
          <div className="text-center">
            <div className="w-16 h-16 rounded-lg bg-green-500/20 border border-green-500/50 flex flex-col items-center justify-center">
              <span className="text-xs text-green-400">Income</span>
              <span className="text-sm font-bold text-green-400">${income}</span>
            </div>
          </div>

          <motion.div
            className="flex-1 h-1 mx-2 bg-gradient-to-r from-green-500/50 to-amber-500/50"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />

          <div className="text-center">
            <div className="w-16 h-16 rounded-lg bg-amber-500/20 border border-amber-500/50 flex flex-col items-center justify-center">
              <span className="text-xs text-amber-400">You First</span>
              <span className="text-sm font-bold text-amber-400">${monthlySavings.toFixed(0)}</span>
            </div>
          </div>
        </div>

        {/* Sliders */}
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-[10px] text-gray-500 mb-1">
              <span>Monthly Income</span>
              <span>${income}</span>
            </div>
            <input
              type="range"
              min="1000"
              max="20000"
              step="500"
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              className="w-full accent-green-500"
            />
          </div>

          <div>
            <div className="flex justify-between text-[10px] text-gray-500 mb-1">
              <span>Savings Rate</span>
              <span>{savingsRate}%</span>
            </div>
            <input
              type="range"
              min="5"
              max="50"
              value={savingsRate}
              onChange={(e) => setSavingsRate(Number(e.target.value))}
              className="w-full accent-amber-500"
            />
          </div>

          <div>
            <div className="flex justify-between text-[10px] text-gray-500 mb-1">
              <span>Time Horizon</span>
              <span>{years} years</span>
            </div>
            <input
              type="range"
              min="1"
              max="40"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full accent-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="w-full max-w-xs grid grid-cols-2 gap-3">
        <div className="bg-[#111113] border border-gray-800 rounded-lg p-3 text-center">
          <p className="text-[10px] text-gray-500">Total Saved</p>
          <p className="text-lg font-bold text-gray-300">
            ${totalSaved.toLocaleString()}
          </p>
        </div>
        <div className="bg-[#111113] border border-amber-500/30 rounded-lg p-3 text-center">
          <p className="text-[10px] text-amber-400">With 7% Growth</p>
          <motion.p
            key={withInterest}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            className="text-lg font-bold text-amber-400"
          >
            ${withInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </motion.p>
        </div>
      </div>

      <p className="text-[10px] text-gray-500 text-center">
        From "The Richest Man in Babylon" by George Clason
      </p>
    </div>
  );
}

export default PayYourselfFirst;
