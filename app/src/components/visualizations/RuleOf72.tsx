import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

export function RuleOf72() {
  const [rate, setRate] = useState(8);
  const [principal, setPrincipal] = useState(10000);

  const yearsToDouble = useMemo(() => 72 / rate, [rate]);

  const doublings = useMemo(() => {
    const result: { year: number; value: number }[] = [];
    let value = principal;
    let year = 0;

    while (value < principal * 32 && year <= 50) {
      result.push({ year, value });
      value *= 2;
      year += yearsToDouble;
    }
    result.push({ year, value });

    return result;
  }, [principal, rate, yearsToDouble]);

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Title */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 text-center max-w-xs">
        <p className="text-lg font-bold text-amber-400">72 ÷ Rate = Years to Double</p>
        <p className="text-[10px] text-gray-500 mt-1">The magic formula for compound growth</p>
      </div>

      {/* Rate slider */}
      <div className="w-full max-w-xs">
        <div className="flex justify-between text-[10px] text-gray-500 mb-1">
          <span>Annual return rate</span>
          <span className="text-amber-400 font-bold">{rate}%</span>
        </div>
        <input
          type="range"
          min="1"
          max="20"
          step="1"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          className="w-full"
          style={{ accentColor: '#F59E0B' }}
        />
      </div>

      {/* Visual calculation */}
      <div className="flex items-center gap-3 text-center">
        <div className="p-3 bg-amber-500/20 border border-amber-500/40 rounded-xl">
          <p className="text-2xl font-bold text-amber-400">72</p>
          <p className="text-[9px] text-gray-500">Magic Number</p>
        </div>
        <span className="text-xl text-gray-500">÷</span>
        <div className="p-3 bg-blue-500/20 border border-blue-500/40 rounded-xl">
          <p className="text-2xl font-bold text-blue-400">{rate}%</p>
          <p className="text-[9px] text-gray-500">Rate</p>
        </div>
        <span className="text-xl text-gray-500">=</span>
        <div className="p-3 bg-green-500/20 border border-green-500/40 rounded-xl">
          <p className="text-2xl font-bold text-green-400">{yearsToDouble.toFixed(1)}</p>
          <p className="text-[9px] text-gray-500">Years</p>
        </div>
      </div>

      {/* Doubling timeline */}
      <div className="w-full max-w-xs">
        <p className="text-[10px] text-gray-500 mb-2 text-center">Your money doubling over time:</p>
        <div className="relative h-32">
          <svg viewBox="0 0 280 100" className="w-full h-full">
            {/* Grid lines */}
            {[0, 25, 50, 75].map(y => (
              <line key={y} x1="30" y1={y + 10} x2="270" y2={y + 10} stroke="#1F2937" strokeWidth="0.5" />
            ))}

            {/* Bars */}
            {doublings.slice(0, 6).map((d, i) => {
              const barHeight = Math.min(80, (d.value / (principal * 32)) * 80);
              const x = 40 + i * 42;

              return (
                <g key={i}>
                  <motion.rect
                    x={x}
                    y={90 - barHeight}
                    width="32"
                    height={barHeight}
                    rx="4"
                    fill={`hsl(${142 + i * 10}, 70%, ${50 - i * 5}%)`}
                    initial={{ height: 0, y: 90 }}
                    animate={{ height: barHeight, y: 90 - barHeight }}
                    transition={{ delay: i * 0.1 }}
                  />
                  <text x={x + 16} y={90 - barHeight - 5} textAnchor="middle" fontSize="7" fill="#22C55E">
                    ${(d.value / 1000).toFixed(0)}K
                  </text>
                  <text x={x + 16} y="98" textAnchor="middle" fontSize="6" fill="#666">
                    Yr {Math.round(d.year)}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Starting amount */}
      <div className="w-full max-w-xs">
        <div className="flex justify-between text-[10px] text-gray-500 mb-1">
          <span>Starting amount</span>
          <span className="text-green-400">${principal.toLocaleString()}</span>
        </div>
        <input
          type="range"
          min="1000"
          max="100000"
          step="1000"
          value={principal}
          onChange={(e) => setPrincipal(Number(e.target.value))}
          className="w-full"
          style={{ accentColor: '#22C55E' }}
        />
      </div>

      {/* Summary card */}
      <div className="w-full max-w-xs grid grid-cols-2 gap-2">
        <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-xl text-center">
          <p className="text-lg font-bold text-green-400">
            ${((principal * Math.pow(2, 4)) / 1000).toFixed(0)}K
          </p>
          <p className="text-[9px] text-gray-500">After 4 doublings</p>
          <p className="text-[10px] text-gray-400">{(yearsToDouble * 4).toFixed(0)} years</p>
        </div>
        <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-center">
          <p className="text-lg font-bold text-amber-400">16x</p>
          <p className="text-[9px] text-gray-500">Growth multiple</p>
          <p className="text-[10px] text-gray-400">From 4 doublings</p>
        </div>
      </div>

      {/* Common rates reference */}
      <div className="w-full max-w-xs p-3 bg-[#111113] border border-gray-800 rounded-xl">
        <p className="text-[10px] text-gray-500 mb-2">Quick reference:</p>
        <div className="grid grid-cols-3 gap-2 text-center">
          {[
            { rate: 6, years: 12, label: 'Bonds' },
            { rate: 8, years: 9, label: 'Index' },
            { rate: 12, years: 6, label: 'Growth' },
          ].map((r) => (
            <div key={r.rate} className="p-2 bg-gray-800/50 rounded-lg">
              <p className="text-xs text-gray-300">{r.rate}%</p>
              <p className="text-[10px] text-amber-400">{r.years} yrs</p>
              <p className="text-[8px] text-gray-500">{r.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key insight */}
      <div className="bg-[#111113] border border-gray-800 rounded-xl p-4 max-w-xs">
        <p className="text-xs text-gray-400 leading-relaxed">
          <span className="text-amber-400 font-medium">The Rule of 72:</span> A quick mental math
          trick to estimate how long it takes to double your money. At 8% returns, money doubles
          every 9 years. Starting early makes all the difference.
        </p>
      </div>

      <p className="text-[10px] text-gray-600">From The Intelligent Investor</p>
    </div>
  );
}

export default RuleOf72;
