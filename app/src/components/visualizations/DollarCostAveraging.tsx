import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

export function DollarCostAveraging() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(500);
  const [showComparison, setShowComparison] = useState(false);

  // Simulated volatile market prices
  const prices = [100, 85, 70, 90, 75, 95, 80, 110, 95, 120, 105, 130];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const data = useMemo(() => {
    let totalShares = 0;
    let totalInvested = 0;
    const purchases: { month: string; price: number; shares: number; cumShares: number }[] = [];

    prices.forEach((price, i) => {
      const shares = monthlyInvestment / price;
      totalShares += shares;
      totalInvested += monthlyInvestment;
      purchases.push({
        month: months[i],
        price,
        shares,
        cumShares: totalShares,
      });
    });

    const avgCost = totalInvested / totalShares;
    const finalValue = totalShares * prices[prices.length - 1];
    const lumpSumShares = (monthlyInvestment * 12) / prices[0];
    const lumpSumValue = lumpSumShares * prices[prices.length - 1];

    return {
      purchases,
      totalShares,
      totalInvested,
      avgCost,
      finalValue,
      lumpSumShares,
      lumpSumValue,
      profit: finalValue - totalInvested,
      lumpSumProfit: lumpSumValue - (monthlyInvestment * 12),
    };
  }, [monthlyInvestment]);

  const maxPrice = Math.max(...prices);

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Title */}
      <div className="text-center">
        <h3 className="text-sm font-bold text-blue-400">Dollar Cost Averaging</h3>
        <p className="text-[10px] text-gray-500">Invest consistently, regardless of price</p>
      </div>

      {/* Investment slider */}
      <div className="w-full max-w-xs">
        <div className="flex justify-between text-[10px] text-gray-500 mb-1">
          <span>Monthly investment</span>
          <span className="text-blue-400 font-bold">${monthlyInvestment}</span>
        </div>
        <input
          type="range"
          min="100"
          max="2000"
          step="100"
          value={monthlyInvestment}
          onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
          className="w-full"
          style={{ accentColor: '#3B82F6' }}
        />
      </div>

      {/* Price chart with purchases */}
      <div className="w-full max-w-xs">
        <div className="relative h-40 bg-gradient-to-b from-[#0A0A0B] to-[#111113] border border-gray-800 rounded-2xl overflow-hidden p-3">
          <svg viewBox="0 0 300 110" className="w-full h-full">
            {/* Price line */}
            <path
              d={`M ${prices.map((p, i) => `${20 + i * 24},${90 - (p / maxPrice) * 70}`).join(' L ')}`}
              fill="none"
              stroke="#6B7280"
              strokeWidth="2"
            />

            {/* Purchase dots */}
            {prices.map((p, i) => (
              <motion.g key={i}>
                <motion.circle
                  cx={20 + i * 24}
                  cy={90 - (p / maxPrice) * 70}
                  r="4"
                  fill="#3B82F6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                />
                <text
                  x={20 + i * 24}
                  y={100}
                  textAnchor="middle"
                  fontSize="6"
                  fill="#666"
                >
                  {months[i].slice(0, 1)}
                </text>
              </motion.g>
            ))}

            {/* Average cost line */}
            <line
              x1="20"
              y1={90 - (data.avgCost / maxPrice) * 70}
              x2="284"
              y2={90 - (data.avgCost / maxPrice) * 70}
              stroke="#22C55E"
              strokeWidth="1"
              strokeDasharray="4,4"
            />
            <text
              x="288"
              y={90 - (data.avgCost / maxPrice) * 70 + 3}
              fontSize="7"
              fill="#22C55E"
            >
              Avg ${data.avgCost.toFixed(0)}
            </text>
          </svg>
        </div>
      </div>

      {/* Results grid */}
      <div className="w-full max-w-xs grid grid-cols-3 gap-2">
        <div className="bg-gray-500/10 border border-gray-500/30 rounded-xl p-2 text-center">
          <p className="text-sm font-bold text-gray-400">
            ${data.totalInvested.toLocaleString()}
          </p>
          <p className="text-[8px] text-gray-500">Invested</p>
        </div>
        <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-2 text-center">
          <p className="text-sm font-bold text-green-400">
            ${data.avgCost.toFixed(2)}
          </p>
          <p className="text-[8px] text-green-400/70">Avg Cost</p>
        </div>
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-2 text-center">
          <p className="text-sm font-bold text-blue-400">
            {data.totalShares.toFixed(1)}
          </p>
          <p className="text-[8px] text-blue-400/70">Shares</p>
        </div>
      </div>

      {/* Final value */}
      <motion.div
        className="w-full max-w-xs bg-green-500/20 border border-green-500/50 rounded-xl p-4 text-center"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-[10px] text-green-400/70">Final Portfolio Value</p>
        <p className="text-2xl font-bold text-green-400">
          ${data.finalValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
        </p>
        <p className="text-xs text-green-400/70">
          +${data.profit.toLocaleString(undefined, { maximumFractionDigits: 0 })} profit
          ({((data.profit / data.totalInvested) * 100).toFixed(1)}%)
        </p>
      </motion.div>

      {/* Comparison toggle */}
      <button
        onClick={() => setShowComparison(!showComparison)}
        className="text-xs text-gray-500 hover:text-gray-300"
      >
        {showComparison ? '▼ Hide' : '▶ Compare to'} lump sum
      </button>

      {showComparison && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="w-full max-w-xs grid grid-cols-2 gap-2"
        >
          <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-xl text-center">
            <p className="text-[10px] text-blue-400/70">DCA Final Value</p>
            <p className="text-lg font-bold text-blue-400">
              ${data.finalValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </p>
          </div>
          <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-center">
            <p className="text-[10px] text-amber-400/70">Lump Sum Value</p>
            <p className="text-lg font-bold text-amber-400">
              ${data.lumpSumValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </p>
          </div>
        </motion.div>
      )}

      {/* How it works */}
      <div className="w-full max-w-xs p-3 bg-[#111113] border border-gray-800 rounded-xl">
        <p className="text-[10px] text-gray-500 mb-2">How DCA works:</p>
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[10px] text-gray-400">
            <span className="text-green-400">↓</span> Low prices = Buy more shares
          </div>
          <div className="flex items-center gap-2 text-[10px] text-gray-400">
            <span className="text-red-400">↑</span> High prices = Buy fewer shares
          </div>
          <div className="flex items-center gap-2 text-[10px] text-gray-400">
            <span className="text-blue-400">→</span> Result = Lower average cost
          </div>
        </div>
      </div>

      {/* Key insight */}
      <div className="bg-[#111113] border border-gray-800 rounded-xl p-4 max-w-xs">
        <p className="text-xs text-gray-400 leading-relaxed">
          <span className="text-blue-400 font-medium">Benjamin Graham:</span> "The investor's chief
          problem—and even his worst enemy—is likely to be himself." DCA removes emotion from
          investing and builds wealth systematically.
        </p>
      </div>

      <p className="text-[10px] text-gray-600">From The Intelligent Investor</p>
    </div>
  );
}

export default DollarCostAveraging;
