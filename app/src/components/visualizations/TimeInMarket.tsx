import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function TimeInMarket() {
  const [years, setYears] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
    const [holdValue, setHoldValue] = useState(10000);
  const [timeValue, setTimeValue] = useState(10000);
  const [missedDays, setMissedDays] = useState(0);
  const intervalRef = useRef<number | null>(null);

  // Average market return ~10%, best days ~0.5% each
  const ANNUAL_RETURN = 0.10;
  const BEST_DAY_IMPACT = 0.005;

  useEffect(() => {
    if (isRunning && years < 30) {
      intervalRef.current = window.setInterval(() => {
        setYears(prev => {
          const newYears = prev + 1;

          // Holder gets full compound growth
          setHoldValue(v => v * (1 + ANNUAL_RETURN));

          // Market timer misses ~2 best days per year trying to time
          // Missing best days dramatically reduces returns
          const missedReturn = ANNUAL_RETURN - (2 * BEST_DAY_IMPACT * 10);
          setTimeValue(v => v * (1 + Math.max(0.02, missedReturn)));
          setMissedDays(d => d + 2);

          if (newYears >= 30) {
            setIsRunning(false);
          }
          return newYears;
        });
      }, 200);

      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [isRunning, years]);

  const start = () => {
    setYears(0);
    setHoldValue(10000);
    setTimeValue(10000);
    setMissedDays(0);
    setIsRunning(true);
  };

  const reset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsRunning(false);
    setYears(0);
    setHoldValue(10000);
    setTimeValue(10000);
    setMissedDays(0);
  };

  const formatMoney = (value: number) => {
    if (value >= 1000000) return `$${(value / 1000000).toFixed(2)}M`;
    if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`;
    return `$${value.toFixed(0)}`;
  };

  const difference = holdValue - timeValue;
  const percentLost = ((difference / holdValue) * 100).toFixed(0);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Growth visualization */}
      <div className="w-full max-w-xs">
        <div className="relative h-40 bg-[#111113] border border-gray-800 rounded-lg overflow-hidden p-4">
          {/* Grid lines */}
          {[25, 50, 75].map(pct => (
            <div
              key={pct}
              className="absolute left-0 right-0 border-t border-gray-800"
              style={{ top: `${100 - pct}%` }}
            />
          ))}

          {/* Hold strategy bar */}
          <motion.div
            className="absolute bottom-0 left-[20%] w-[25%] bg-green-500 rounded-t"
            animate={{ height: `${Math.min(95, (holdValue / 200000) * 100)}%` }}
          />

          {/* Time strategy bar */}
          <motion.div
            className="absolute bottom-0 left-[55%] w-[25%] bg-amber-500 rounded-t"
            animate={{ height: `${Math.min(95, (timeValue / 200000) * 100)}%` }}
          />

          {/* Labels */}
          <div className="absolute bottom-2 left-[20%] w-[25%] text-center">
            <span className="text-[10px] text-green-400">Hold</span>
          </div>
          <div className="absolute bottom-2 left-[55%] w-[25%] text-center">
            <span className="text-[10px] text-amber-400">Timer</span>
          </div>

          {/* Year indicator */}
          <div className="absolute top-2 right-2 text-xs text-gray-500">
            Year {years}/30
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="w-full max-w-xs grid grid-cols-2 gap-3">
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center">
          <p className="text-[10px] text-green-400 uppercase tracking-wide">Buy & Hold</p>
          <p className="text-lg font-bold text-green-400">{formatMoney(holdValue)}</p>
          <p className="text-[10px] text-gray-500">Stayed invested</p>
        </div>
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 text-center">
          <p className="text-[10px] text-amber-400 uppercase tracking-wide">Market Timer</p>
          <p className="text-lg font-bold text-amber-400">{formatMoney(timeValue)}</p>
          <p className="text-[10px] text-gray-500">Missed {missedDays} best days</p>
        </div>
      </div>

      {/* Difference */}
      {years > 0 && (
        <div className="w-full max-w-xs bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-center">
          <p className="text-xs text-red-400">
            Market timing cost: <span className="font-bold">{formatMoney(difference)}</span> ({percentLost}% less)
          </p>
        </div>
      )}

      {/* Controls */}
      <div className="flex gap-2">
        {!isRunning && years === 0 && (
          <button
            onClick={start}
            className="px-4 py-2 bg-green-500/10 border border-green-500/30
                     text-green-400 rounded-lg text-xs hover:bg-green-500/20 transition-all"
          >
            ▶ Start 30-year simulation
          </button>
        )}
        {(isRunning || years > 0) && (
          <button
            onClick={reset}
            className="px-4 py-2 border border-gray-700 text-gray-400
                     rounded-lg text-xs hover:border-gray-600 transition-all"
          >
            ↻ Reset
          </button>
        )}
      </div>

      {/* Key stat */}
      <div className="bg-[#111113] border border-gray-800 rounded-lg p-3 w-full max-w-xs">
        <p className="text-[10px] text-gray-500 mb-2">Missing the best days:</p>
        <div className="space-y-1 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-400">Miss 10 best days</span>
            <span className="text-amber-400">-50% returns</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Miss 20 best days</span>
            <span className="text-red-400">-70% returns</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Miss 30 best days</span>
            <span className="text-red-400">-83% returns</span>
          </div>
        </div>
      </div>

      {/* Key insight */}
      <div className="bg-[#111113] border border-gray-800 rounded-lg p-3 max-w-xs text-center">
        <p className="text-xs text-gray-400">
          <span className="text-green-400 font-medium">Lesson:</span> The best days often
          follow the worst. If you're out of the market trying to time it, you'll miss
          the recovery.
        </p>
      </div>

      <p className="text-[10px] text-gray-500">
        "Time in the market beats timing the market" — J.P. Morgan Research
      </p>
    </div>
  );
}

export default TimeInMarket;
