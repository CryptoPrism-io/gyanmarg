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
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 flex items-center justify-center border border-amber-500/20">
              <Percent className="w-4 h-4 text-amber-400" />
            </div>
            <span className="text-sm font-semibold text-[var(--viz-text)]">
              The Power of 1%
            </span>
          </div>
          {interactive && (
            <button
              onClick={() => setShowDecline(!showDecline)}
              className={`text-[10px] font-medium px-3 py-1.5 rounded-lg transition-all duration-300 border ${
                showDecline
                  ? 'bg-red-500/15 border-red-500/30 text-red-400'
                  : 'bg-[var(--viz-tile-md)] border-[var(--viz-border-light)] text-[var(--viz-muted)] hover:bg-[var(--viz-tile-md)] hover:text-[var(--viz-secondary)]'
              }`}
            >
              Show Decline
            </button>
          )}
        </div>

        {/* Interactive Controls */}
        {interactive && (
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div className="p-3 rounded-xl bg-[var(--viz-tile)] border border-[var(--viz-border)]">
              <label className="text-[10px] text-[var(--viz-muted)] block mb-2 font-medium">
                Daily Change: <span className="text-amber-400">{percentage}%</span>
              </label>
              <input
                type="range"
                min="0.5"
                max="3"
                step="0.5"
                value={percentage}
                onChange={(e) => setPercentage(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-amber-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-amber-500"
              />
            </div>
            <div className="p-3 rounded-xl bg-[var(--viz-tile)] border border-[var(--viz-border)]">
              <label className="text-[10px] text-[var(--viz-muted)] block mb-2 font-medium">
                Days: <span className="text-amber-400">{days}</span>
              </label>
              <input
                type="range"
                min="30"
                max="365"
                step="30"
                value={days}
                onChange={(e) => setDays(parseInt(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-amber-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-amber-500"
              />
            </div>
          </div>
        )}

        {/* Graph Container */}
        <div className="rounded-xl bg-[var(--viz-inner)] border border-[var(--viz-border)] p-3 mb-4">
          <svg width={width} height={height} className="overflow-visible mx-auto block">
            {/* Grid */}
            {[0, 0.5, 1].map((ratio) => (
              <line
                key={`grid-${ratio}`}
                x1={padding.left}
                y1={padding.top + ratio * graphHeight}
                x2={width - padding.right}
                y2={padding.top + ratio * graphHeight}
                stroke="var(--viz-grid)"
                strokeDasharray="2 4"
              />
            ))}

            {/* Baseline (1x) */}
            <motion.polyline
              points={generateBaseline()}
              fill="none"
              stroke="var(--viz-line)"
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
                filter="drop-shadow(0 0 6px rgba(239, 68, 68, 0.4))"
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
              filter="drop-shadow(0 0 6px rgba(34, 197, 94, 0.4))"
            />

            {/* X-axis */}
            <line
              x1={padding.left}
              y1={height - padding.bottom}
              x2={width - padding.right}
              y2={height - padding.bottom}
              stroke="var(--viz-line-light)"
              strokeWidth={1}
            />

            {/* X-axis labels */}
            <text
              x={padding.left}
              y={height - 10}
              fontSize="9"
              fill="var(--viz-muted)"
              textAnchor="start"
            >
              Day 1
            </text>
            <text
              x={width - padding.right}
              y={height - 10}
              fontSize="9"
              fill="var(--viz-muted)"
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
              stroke="var(--viz-line-light)"
              strokeWidth={1}
            />
          </svg>
        </div>

        {/* Results */}
        <div className="grid grid-cols-2 gap-3">
          <motion.div
            className="relative overflow-hidden rounded-xl p-3 text-center border border-emerald-500/25 bg-emerald-500/10"
            key={`growth-${growth.toFixed(2)}`}
            initial={animated ? { scale: 0.9, opacity: 0 } : undefined}
            animate={{ scale: 1, opacity: 1 }}
          >
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span className="text-xl font-bold text-emerald-400">
                {growth.toFixed(2)}x
              </span>
            </div>
            <p className="text-[10px] text-[var(--viz-muted)]">+{percentage}% daily for {days} days</p>
          </motion.div>

          {showDecline && (
            <motion.div
              className="relative overflow-hidden rounded-xl p-3 text-center border border-red-500/25 bg-red-500/10"
              key={`decline-${decline.toFixed(2)}`}
              initial={animated ? { scale: 0.9, opacity: 0 } : undefined}
              animate={{ scale: 1, opacity: 1 }}
            >
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <TrendingDown className="w-4 h-4 text-red-400" />
                <span className="text-xl font-bold text-red-400">
                  {decline.toFixed(2)}x
                </span>
              </div>
              <p className="text-[10px] text-[var(--viz-muted)]">-{percentage}% daily for {days} days</p>
            </motion.div>
          )}
        </div>

        {/* Quote */}
        <motion.div
          className="mt-4 pt-4 border-t border-[var(--viz-border)]"
          initial={animated ? { opacity: 0 } : undefined}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <p className="text-[11px] text-[var(--viz-muted)] text-center italic">
            "Habits are the compound interest of self-improvement"
          </p>
          <p className="text-[10px] text-amber-500/70 text-center mt-1 font-medium">
            — James Clear, Atomic Habits
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default CompoundGrowthChart;
