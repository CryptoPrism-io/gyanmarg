import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Percent } from 'lucide-react';

interface CompoundGrowthChartProps {
  animated?: boolean;
  interactive?: boolean;
}

export function CompoundGrowthChart({
  animated = true,
  interactive = true,
}: CompoundGrowthChartProps) {
  const [days, setDays] = useState(365);
  const [percentage, setPercentage] = useState(1);
  const [showDecline, setShowDecline] = useState(true);

  // Calculate compound growth
  const calculateGrowth = (rate: number, numDays: number): number => {
    return Math.pow(1 + rate / 100, numDays);
  };

  const growth = calculateGrowth(percentage, days);
  const decline = calculateGrowth(-percentage, days);

  // SVG dimensions
  const width = 320;
  const height = 180;
  const padding = { top: 20, right: 20, bottom: 30, left: 50 };
  const graphWidth = width - padding.left - padding.right;
  const graphHeight = height - padding.top - padding.bottom;

  // Generate curve points
  const generateCurve = (rate: number, maxDays: number): string => {
    const points: string[] = [];
    const maxValue = calculateGrowth(Math.abs(rate), maxDays);
    const minValue = calculateGrowth(-Math.abs(rate), maxDays);
    const range = maxValue - minValue;

    for (let day = 0; day <= maxDays; day += Math.max(1, Math.floor(maxDays / 50))) {
      const value = calculateGrowth(rate, day);
      const x = padding.left + (day / maxDays) * graphWidth;
      const normalizedY = (value - minValue) / range;
      const y = padding.top + (1 - normalizedY) * graphHeight;
      points.push(`${x},${y}`);
    }
    return points.join(' ');
  };

  // Generate baseline
  const generateBaseline = (): string => {
    const maxValue = calculateGrowth(Math.abs(percentage), days);
    const minValue = calculateGrowth(-Math.abs(percentage), days);
    const range = maxValue - minValue;
    const normalizedY = (1 - minValue) / range;
    const y = padding.top + (1 - normalizedY) * graphHeight;

    return `${padding.left},${y} ${width - padding.right},${y}`;
  };

  return (
    <div className="bg-[#0A0A0B] rounded-xl p-4 border border-gray-800">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Percent className="w-5 h-5 text-amber-400" />
          <span className="text-sm font-medium text-white">The Power of 1%</span>
        </div>
        {interactive && (
          <button
            onClick={() => setShowDecline(!showDecline)}
            className={`text-xs px-2 py-1 rounded transition-colors ${
              showDecline ? 'bg-red-500/20 text-red-400' : 'bg-gray-800 text-gray-500'
            }`}
          >
            Show Decline
          </button>
        )}
      </div>

      {/* Interactive Controls */}
      {interactive && (
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-xs text-gray-500 block mb-1">
              Daily Change: {percentage}%
            </label>
            <input
              type="range"
              min="0.5"
              max="3"
              step="0.5"
              value={percentage}
              onChange={(e) => setPercentage(parseFloat(e.target.value))}
              className="w-full accent-amber-500"
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-1">
              Days: {days}
            </label>
            <input
              type="range"
              min="30"
              max="365"
              step="30"
              value={days}
              onChange={(e) => setDays(parseInt(e.target.value))}
              className="w-full accent-amber-500"
            />
          </div>
        </div>
      )}

      {/* Graph */}
      <svg width={width} height={height} className="overflow-visible">
        {/* Grid */}
        {[0, 0.5, 1].map((ratio) => (
          <line
            key={`grid-${ratio}`}
            x1={padding.left}
            y1={padding.top + ratio * graphHeight}
            x2={width - padding.right}
            y2={padding.top + ratio * graphHeight}
            stroke="#1a1a1a"
            strokeDasharray="2 4"
          />
        ))}

        {/* Baseline (1x) */}
        <motion.polyline
          points={generateBaseline()}
          fill="none"
          stroke="#666"
          strokeWidth={1}
          strokeDasharray="4 4"
        />

        {/* Decline curve */}
        {showDecline && (
          <motion.polyline
            points={generateCurve(-percentage, days)}
            fill="none"
            stroke="#EF4444"
            strokeWidth={2.5}
            strokeLinecap="round"
            initial={animated ? { pathLength: 0 } : undefined}
            animate={animated ? { pathLength: 1 } : undefined}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        )}

        {/* Growth curve */}
        <motion.polyline
          points={generateCurve(percentage, days)}
          fill="none"
          stroke="#22C55E"
          strokeWidth={2.5}
          strokeLinecap="round"
          initial={animated ? { pathLength: 0 } : undefined}
          animate={animated ? { pathLength: 1 } : undefined}
          transition={{ duration: 1.5, ease: 'easeOut', delay: showDecline ? 0.3 : 0 }}
        />

        {/* Fill gradient under growth curve */}
        <defs>
          <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22C55E" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#22C55E" stopOpacity={0} />
          </linearGradient>
        </defs>

        {/* X-axis */}
        <line
          x1={padding.left}
          y1={height - padding.bottom}
          x2={width - padding.right}
          y2={height - padding.bottom}
          stroke="#333"
          strokeWidth={1}
        />

        {/* X-axis labels */}
        <text
          x={padding.left}
          y={height - 10}
          fontSize="9"
          fill="#666"
          textAnchor="start"
        >
          Day 1
        </text>
        <text
          x={width - padding.right}
          y={height - 10}
          fontSize="9"
          fill="#666"
          textAnchor="end"
        >
          Day {days}
        </text>

        {/* Y-axis */}
        <line
          x1={padding.left}
          y1={padding.top}
          x2={padding.left}
          y2={height - padding.bottom}
          stroke="#333"
          strokeWidth={1}
        />
      </svg>

      {/* Results */}
      <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-800">
        <motion.div
          className="bg-green-500/10 rounded-lg p-3 text-center"
          key={`growth-${growth.toFixed(2)}`}
          initial={animated ? { scale: 0.9, opacity: 0 } : undefined}
          animate={{ scale: 1, opacity: 1 }}
        >
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-xl font-bold text-green-400">{growth.toFixed(2)}x</span>
          </div>
          <p className="text-xs text-gray-500">+{percentage}% daily for {days} days</p>
        </motion.div>

        {showDecline && (
          <motion.div
            className="bg-red-500/10 rounded-lg p-3 text-center"
            key={`decline-${decline.toFixed(2)}`}
            initial={animated ? { scale: 0.9, opacity: 0 } : undefined}
            animate={{ scale: 1, opacity: 1 }}
          >
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <TrendingDown className="w-4 h-4 text-red-400" />
              <span className="text-xl font-bold text-red-400">{decline.toFixed(2)}x</span>
            </div>
            <p className="text-xs text-gray-500">-{percentage}% daily for {days} days</p>
          </motion.div>
        )}
      </div>

      {/* Quote */}
      <motion.p
        className="text-xs text-gray-500 text-center mt-4 italic"
        initial={animated ? { opacity: 0 } : undefined}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        "Habits are the compound interest of self-improvement" — James Clear
      </motion.p>
    </div>
  );
}

export default CompoundGrowthChart;
