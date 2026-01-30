import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DataPoint {
  year: number;
  compound: number;
  contributions: number;
  interestThisYear: number;
}

interface Milestone {
  year: number;
  label: string;
  value: number;
}

export function CompoundInterest() {
  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(30);
  const [monthlyAdd, setMonthlyAdd] = useState(500);
  const [showScenarios, setShowScenarios] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(0);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const data = useMemo(() => {
    const points: DataPoint[] = [];
    let compoundTotal = principal;
    let totalContributions = principal;
    let prevTotal = principal;

    for (let year = 0; year <= years; year++) {
      points.push({
        year,
        compound: Math.round(compoundTotal),
        contributions: Math.round(totalContributions),
        interestThisYear: Math.round(compoundTotal - prevTotal - (year > 0 ? monthlyAdd * 12 : 0)),
      });

      prevTotal = compoundTotal;
      compoundTotal = compoundTotal * (1 + rate / 100) + monthlyAdd * 12;
      totalContributions += monthlyAdd * 12;
    }

    return points;
  }, [principal, rate, years, monthlyAdd]);

  const finalData = data[data.length - 1];
  const maxValue = finalData?.compound || 0;
  const totalContributions = finalData?.contributions || 0;
  const interestEarned = maxValue - totalContributions;
  const multiplier = totalContributions > 0 ? maxValue / totalContributions : 0;

  // Find milestones
  const milestones = useMemo((): Milestone[] => {
    const targets = [100000, 250000, 500000, 1000000, 2000000, 5000000];
    const result: Milestone[] = [];

    targets.forEach(target => {
      const point = data.find(d => d.compound >= target);
      if (point && !result.find(m => m.year === point.year)) {
        result.push({
          year: point.year,
          label: target >= 1000000 ? `$${target / 1000000}M` : `$${target / 1000}K`,
          value: target,
        });
      }
    });

    return result.slice(0, 3);
  }, [data]);

  // Animate the final value
  useEffect(() => {
    const duration = 1000;
    const steps = 30;
    const increment = maxValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= maxValue) {
        setAnimatedValue(maxValue);
        clearInterval(timer);
      } else {
        setAnimatedValue(Math.round(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [maxValue]);

  // Calculate comparison scenarios
  const scenarios = useMemo(() => {
    // What if started 10 years earlier?
    const earlyData: DataPoint[] = [];
    let earlyTotal = principal;
    let earlyContributions = principal;

    for (let year = 0; year <= years + 10; year++) {
      earlyData.push({
        year,
        compound: Math.round(earlyTotal),
        contributions: Math.round(earlyContributions),
        interestThisYear: 0,
      });
      earlyTotal = earlyTotal * (1 + rate / 100) + monthlyAdd * 12;
      earlyContributions += monthlyAdd * 12;
    }

    // What if waited 10 years?
    const lateData: DataPoint[] = [];
    let lateTotal = principal;
    let lateContributions = principal;
    const lateYears = Math.max(0, years - 10);

    for (let year = 0; year <= lateYears; year++) {
      lateData.push({
        year,
        compound: Math.round(lateTotal),
        contributions: Math.round(lateContributions),
        interestThisYear: 0,
      });
      lateTotal = lateTotal * (1 + rate / 100) + monthlyAdd * 12;
      lateContributions += monthlyAdd * 12;
    }

    return {
      early: earlyData[earlyData.length - 1]?.compound || 0,
      current: maxValue,
      late: lateData[lateData.length - 1]?.compound || 0,
      earlyExtra: (earlyData[earlyData.length - 1]?.compound || 0) - maxValue,
      lateLoss: maxValue - (lateData[lateData.length - 1]?.compound || 0),
    };
  }, [principal, rate, years, monthlyAdd, maxValue]);

  const formatCurrency = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(2)}M`;
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(0)}K`;
    }
    return `$${value.toLocaleString()}`;
  };

  const selectedData = selectedYear !== null ? data[selectedYear] : null;

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Hero number with animation */}
      <motion.div
        className="relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div className="text-center">
          <motion.p
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent"
            key={maxValue}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            {formatCurrency(animatedValue)}
          </motion.p>
          <p className="text-xs text-gray-500 mt-1">
            in {years} years at {rate}% annual return
          </p>
        </div>

        {/* Floating multiplier badge */}
        <motion.div
          className="absolute -top-2 -right-8 bg-green-500 text-black text-xs font-bold px-2 py-0.5 rounded-full"
          animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {multiplier.toFixed(1)}x
        </motion.div>
      </motion.div>

      {/* Interactive Growth Chart */}
      <div className="w-full max-w-sm">
        <div className="relative h-48 bg-gradient-to-b from-[#0A0A0B] to-[#111113] border border-gray-800 rounded-2xl overflow-hidden">
          <svg viewBox="0 0 320 160" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              {/* Gradient for the area fill */}
              <linearGradient id="compoundGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22C55E" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#22C55E" stopOpacity="0.02" />
              </linearGradient>

              {/* Glow filter */}
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Animated grid lines */}
            {[0, 1, 2, 3].map((i) => (
              <motion.line
                key={i}
                x1="40"
                y1={25 + i * 35}
                x2="300"
                y2={25 + i * 35}
                stroke="#1F2937"
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              />
            ))}

            {/* Contributions area (gray) */}
            <motion.path
              d={`M 40 140 ${data.map((d, i) => {
                const x = 40 + (i / years) * 260;
                const y = 140 - (d.contributions / maxValue) * 110;
                return `L ${x} ${y}`;
              }).join(' ')} L 300 140 Z`}
              fill="#374151"
              fillOpacity="0.2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* Interest earned area (green gradient) */}
            <motion.path
              d={`${data.map((d, i) => {
                const x = 40 + (i / years) * 260;
                const y = 140 - (d.contributions / maxValue) * 110;
                return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
              }).join(' ')} ${data.slice().reverse().map((d, i) => {
                const x = 40 + ((years - i) / years) * 260;
                const y = 140 - (d.compound / maxValue) * 110;
                return `L ${x} ${y}`;
              }).join(' ')} Z`}
              fill="url(#compoundGradient)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            {/* Compound growth line */}
            <motion.path
              d={`M ${data.map((d, i) => {
                const x = 40 + (i / years) * 260;
                const y = 140 - (d.compound / maxValue) * 110;
                return `${x} ${y}`;
              }).join(' L ')}`}
              fill="none"
              stroke="#22C55E"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />

            {/* Contributions line */}
            <motion.path
              d={`M ${data.map((d, i) => {
                const x = 40 + (i / years) * 260;
                const y = 140 - (d.contributions / maxValue) * 110;
                return `${x} ${y}`;
              }).join(' L ')}`}
              fill="none"
              stroke="#6B7280"
              strokeWidth="2"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2 }}
            />

            {/* Milestone markers */}
            {milestones.map((m, i) => {
              const x = 40 + (m.year / years) * 260;
              const point = data[m.year];
              const y = point ? 140 - (point.compound / maxValue) * 110 : 140;

              return (
                <motion.g
                  key={m.value}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.2 }}
                >
                  <line x1={x} y1={y} x2={x} y2="145" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2,2" />
                  <circle cx={x} cy={y} r="4" fill="#F59E0B" />
                  <text x={x} y="155" textAnchor="middle" fontSize="8" fill="#F59E0B">
                    {m.label}
                  </text>
                </motion.g>
              );
            })}

            {/* Interactive hover points */}
            {data.filter((_, i) => i % 5 === 0 || i === years).map((d, idx) => {
              const i = idx * 5 > years ? years : idx * 5;
              const point = data[i];
              if (!point) return null;

              const x = 40 + (i / years) * 260;
              const y = 140 - (point.compound / maxValue) * 110;

              return (
                <g
                  key={i}
                  className="cursor-pointer"
                  onMouseEnter={() => setSelectedYear(i)}
                  onMouseLeave={() => setSelectedYear(null)}
                >
                  <circle cx={x} cy={y} r="12" fill="transparent" />
                  {selectedYear === i && (
                    <motion.circle
                      cx={x}
                      cy={y}
                      r="6"
                      fill="#22C55E"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    />
                  )}
                </g>
              );
            })}

            {/* Y-axis labels */}
            <text x="38" y="30" fontSize="8" fill="#666" textAnchor="end">
              {formatCurrency(maxValue)}
            </text>
            <text x="38" y="90" fontSize="8" fill="#666" textAnchor="end">
              {formatCurrency(maxValue / 2)}
            </text>
            <text x="38" y="140" fontSize="8" fill="#666" textAnchor="end">
              $0
            </text>

            {/* X-axis labels */}
            <text x="40" y="152" fontSize="8" fill="#666">Year 0</text>
            <text x="170" y="152" fontSize="8" fill="#666" textAnchor="middle">Year {Math.floor(years/2)}</text>
            <text x="300" y="152" fontSize="8" fill="#666" textAnchor="end">Year {years}</text>
          </svg>

          {/* Hover tooltip */}
          <AnimatePresence>
            {selectedData && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-2 left-2 bg-black/90 border border-green-500/30 rounded-lg p-2"
              >
                <p className="text-[10px] text-gray-400">Year {selectedData.year}</p>
                <p className="text-sm font-bold text-green-400">{formatCurrency(selectedData.compound)}</p>
                <p className="text-[10px] text-gray-500">
                  Interest this year: {formatCurrency(selectedData.interestThisYear)}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Legend */}
          <div className="absolute bottom-2 right-2 flex gap-3">
            <div className="flex items-center gap-1">
              <div className="w-3 h-0.5 bg-green-500 rounded" />
              <span className="text-[9px] text-green-400">Total</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-0.5 bg-gray-500 rounded" style={{ background: 'repeating-linear-gradient(90deg, #6B7280, #6B7280 2px, transparent 2px, transparent 4px)' }} />
              <span className="text-[9px] text-gray-500">Contributions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Controls with better styling */}
      <div className="w-full max-w-sm space-y-3 px-2">
        {/* Principal and Monthly in grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#111113] border border-gray-800 rounded-xl p-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] text-gray-500">💰 Starting</span>
              <span className="text-sm font-bold text-green-400">${principal.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="1000"
              max="100000"
              step="1000"
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              className="w-full h-1.5 appearance-none bg-gray-800 rounded-full cursor-pointer"
              style={{ accentColor: '#22C55E' }}
            />
          </div>

          <div className="bg-[#111113] border border-gray-800 rounded-xl p-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] text-gray-500">📅 Monthly</span>
              <span className="text-sm font-bold text-green-400">${monthlyAdd.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="0"
              max="3000"
              step="50"
              value={monthlyAdd}
              onChange={(e) => setMonthlyAdd(Number(e.target.value))}
              className="w-full h-1.5 appearance-none bg-gray-800 rounded-full cursor-pointer"
              style={{ accentColor: '#22C55E' }}
            />
          </div>
        </div>

        {/* Rate and Years in grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#111113] border border-gray-800 rounded-xl p-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] text-gray-500">📈 Return</span>
              <span className="text-sm font-bold text-amber-400">{rate}%</span>
            </div>
            <input
              type="range"
              min="1"
              max="15"
              step="0.5"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full h-1.5 appearance-none bg-gray-800 rounded-full cursor-pointer"
              style={{ accentColor: '#F59E0B' }}
            />
          </div>

          <div className="bg-[#111113] border border-gray-800 rounded-xl p-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] text-gray-500">⏱️ Years</span>
              <span className="text-sm font-bold text-blue-400">{years}</span>
            </div>
            <input
              type="range"
              min="5"
              max="50"
              step="1"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full h-1.5 appearance-none bg-gray-800 rounded-full cursor-pointer"
              style={{ accentColor: '#3B82F6' }}
            />
          </div>
        </div>
      </div>

      {/* Visual breakdown - pie chart style */}
      <div className="w-full max-w-sm">
        <div className="bg-[#111113] border border-gray-800 rounded-xl p-4">
          <div className="flex items-center justify-center gap-4">
            {/* Simple bar breakdown */}
            <div className="flex-1">
              <div className="h-8 rounded-lg overflow-hidden flex">
                <motion.div
                  className="bg-gray-600 flex items-center justify-center"
                  style={{ width: `${(totalContributions / maxValue) * 100}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${(totalContributions / maxValue) * 100}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <span className="text-[9px] text-white font-medium px-1 truncate">
                    {formatCurrency(totalContributions)}
                  </span>
                </motion.div>
                <motion.div
                  className="bg-gradient-to-r from-green-600 to-green-500 flex items-center justify-center"
                  style={{ width: `${(interestEarned / maxValue) * 100}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${(interestEarned / maxValue) * 100}%` }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <span className="text-[9px] text-white font-medium px-1 truncate">
                    {formatCurrency(interestEarned)}
                  </span>
                </motion.div>
              </div>
              <div className="flex justify-between mt-2">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-gray-600 rounded-sm" />
                  <span className="text-[10px] text-gray-400">You invest ({Math.round((totalContributions / maxValue) * 100)}%)</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-sm" />
                  <span className="text-[10px] text-green-400">Interest earned ({Math.round((interestEarned / maxValue) * 100)}%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scenarios comparison */}
      <button
        onClick={() => setShowScenarios(!showScenarios)}
        className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
      >
        {showScenarios ? '▼ Hide' : '⏰ Show'} timing comparison
      </button>

      <AnimatePresence>
        {showScenarios && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full max-w-sm space-y-2"
          >
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-3 text-center">
                <p className="text-[9px] text-green-400/70 mb-1">Started 10 yrs earlier</p>
                <p className="text-lg font-bold text-green-400">{formatCurrency(scenarios.early)}</p>
                <p className="text-[10px] text-green-400">+{formatCurrency(scenarios.earlyExtra)}</p>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-3 text-center">
                <p className="text-[9px] text-blue-400/70 mb-1">Your plan</p>
                <p className="text-lg font-bold text-blue-400">{formatCurrency(scenarios.current)}</p>
                <p className="text-[10px] text-gray-500">Current</p>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 text-center">
                <p className="text-[9px] text-red-400/70 mb-1">Wait 10 yrs</p>
                <p className="text-lg font-bold text-red-400">{formatCurrency(scenarios.late)}</p>
                <p className="text-[10px] text-red-400">-{formatCurrency(scenarios.lateLoss)}</p>
              </div>
            </div>

            <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl">
              <p className="text-[10px] text-amber-400 text-center">
                💡 Every year you delay costs you <span className="font-bold">{formatCurrency(scenarios.lateLoss / 10)}/year</span> in final value
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Key insight */}
      <div className="bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 border border-green-500/30 rounded-xl p-4 max-w-sm">
        <p className="text-xs text-gray-400 leading-relaxed text-center">
          <span className="text-green-400 font-medium">Einstein:</span> "Compound interest is the
          eighth wonder of the world. He who understands it, earns it; he who doesn't, pays it."
        </p>
      </div>

      <p className="text-[10px] text-gray-600">From The Intelligent Investor</p>
    </div>
  );
}

export default CompoundInterest;
