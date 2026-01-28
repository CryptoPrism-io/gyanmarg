import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, RefreshCw, TrendingUp } from 'lucide-react';

interface ForgettingCurveDiagramProps {
  showComparison?: boolean;
  animated?: boolean;
}

export function ForgettingCurveDiagram({
  showComparison = true,
  animated = true,
}: ForgettingCurveDiagramProps) {
  const [showWithSR, setShowWithSR] = useState(showComparison);

  // SVG dimensions
  const width = 320;
  const height = 200;
  const padding = { top: 20, right: 20, bottom: 40, left: 50 };
  const graphWidth = width - padding.left - padding.right;
  const graphHeight = height - padding.top - padding.bottom;

  // Generate forgetting curve points (exponential decay)
  const generateForgettingCurve = (): string => {
    const points: string[] = [];
    for (let x = 0; x <= 100; x += 2) {
      // Ebbinghaus forgetting curve: R = e^(-t/S)
      const retention = Math.exp(-x / 20) * 100;
      const px = padding.left + (x / 100) * graphWidth;
      const py = padding.top + ((100 - retention) / 100) * graphHeight;
      points.push(`${px},${py}`);
    }
    return points.join(' ');
  };

  // Generate spaced repetition curve (with boosts)
  const generateSRCurve = (): string => {
    const points: string[] = [];
    let retention = 100;
    const reviews = [20, 45, 75]; // Review points

    for (let x = 0; x <= 100; x += 2) {
      // Check if we hit a review point
      if (reviews.includes(x)) {
        retention = Math.min(100, retention + 30); // Boost from review
      }

      // Decay (slower with SR)
      retention = Math.max(60, retention * 0.985);

      const px = padding.left + (x / 100) * graphWidth;
      const py = padding.top + ((100 - retention) / 100) * graphHeight;
      points.push(`${px},${py}`);
    }
    return points.join(' ');
  };

  // Review markers positions
  const reviewPoints = [20, 45, 75].map((x) => ({
    x: padding.left + (x / 100) * graphWidth,
    y: padding.top + 10,
  }));

  return (
    <div className="bg-[#0A0A0B] rounded-xl p-4 border border-gray-800">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-purple-400" />
          <span className="text-sm font-medium text-white">Memory Retention</span>
        </div>
        <button
          onClick={() => setShowWithSR(!showWithSR)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            showWithSR
              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
              : 'bg-gray-800 text-gray-400 border border-gray-700'
          }`}
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Spaced Repetition
        </button>
      </div>

      {/* Graph */}
      <svg width={width} height={height} className="overflow-visible">
        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map((y) => (
          <g key={`grid-${y}`}>
            <line
              x1={padding.left}
              y1={padding.top + ((100 - y) / 100) * graphHeight}
              x2={width - padding.right}
              y2={padding.top + ((100 - y) / 100) * graphHeight}
              stroke="#1a1a1a"
              strokeDasharray="2 4"
            />
            <text
              x={padding.left - 8}
              y={padding.top + ((100 - y) / 100) * graphHeight + 4}
              fontSize="10"
              fill="#666"
              textAnchor="end"
            >
              {y}%
            </text>
          </g>
        ))}

        {/* X-axis labels */}
        {['Day 1', 'Week 1', 'Month 1'].map((label, i) => (
          <text
            key={label}
            x={padding.left + (i * graphWidth) / 2}
            y={height - 10}
            fontSize="10"
            fill="#666"
            textAnchor="middle"
          >
            {label}
          </text>
        ))}

        {/* Axes */}
        <line
          x1={padding.left}
          y1={padding.top}
          x2={padding.left}
          y2={height - padding.bottom}
          stroke="#333"
          strokeWidth={2}
        />
        <line
          x1={padding.left}
          y1={height - padding.bottom}
          x2={width - padding.right}
          y2={height - padding.bottom}
          stroke="#333"
          strokeWidth={2}
        />

        {/* Y-axis label */}
        <text
          x={15}
          y={height / 2}
          fontSize="10"
          fill="#888"
          textAnchor="middle"
          transform={`rotate(-90, 15, ${height / 2})`}
        >
          Retention
        </text>

        {/* Forgetting curve (without SR) */}
        <motion.polyline
          points={generateForgettingCurve()}
          fill="none"
          stroke="#EF4444"
          strokeWidth={2.5}
          strokeLinecap="round"
          initial={animated ? { pathLength: 0 } : undefined}
          animate={animated ? { pathLength: 1 } : undefined}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />

        {/* Spaced repetition curve */}
        {showWithSR && (
          <>
            <motion.polyline
              points={generateSRCurve()}
              fill="none"
              stroke="#22C55E"
              strokeWidth={2.5}
              strokeLinecap="round"
              initial={animated ? { pathLength: 0, opacity: 0 } : undefined}
              animate={animated ? { pathLength: 1, opacity: 1 } : undefined}
              transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
            />

            {/* Review markers */}
            {reviewPoints.map((point, i) => (
              <motion.g
                key={`review-${i}`}
                initial={animated ? { opacity: 0, scale: 0 } : undefined}
                animate={animated ? { opacity: 1, scale: 1 } : undefined}
                transition={{ delay: 0.8 + i * 0.2 }}
              >
                <circle cx={point.x} cy={point.y} r={8} fill="#22C55E20" stroke="#22C55E" strokeWidth={1.5} />
                <text
                  x={point.x}
                  y={point.y + 4}
                  fontSize="8"
                  fill="#22C55E"
                  textAnchor="middle"
                  fontWeight="bold"
                >
                  R{i + 1}
                </text>
              </motion.g>
            ))}
          </>
        )}

        {/* Danger zone */}
        <rect
          x={padding.left}
          y={padding.top + 0.8 * graphHeight}
          width={graphWidth}
          height={0.2 * graphHeight}
          fill="url(#dangerGradient)"
          opacity={0.3}
        />

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="dangerGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EF4444" stopOpacity={0} />
            <stop offset="100%" stopColor="#EF4444" stopOpacity={0.5} />
          </linearGradient>
        </defs>
      </svg>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <span className="text-xs text-gray-400">Without review</span>
        </div>
        {showWithSR && (
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-xs text-gray-400">With spaced repetition</span>
          </motion.div>
        )}
      </div>

      {/* Stats */}
      {showWithSR && (
        <motion.div
          className="mt-4 pt-4 border-t border-gray-800 grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-red-400">
              <TrendingUp className="w-4 h-4 rotate-180" />
              <span className="text-lg font-bold">~20%</span>
            </div>
            <p className="text-xs text-gray-500">Without review</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-green-400">
              <TrendingUp className="w-4 h-4" />
              <span className="text-lg font-bold">~90%</span>
            </div>
            <p className="text-xs text-gray-500">With spaced repetition</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default ForgettingCurveDiagram;
