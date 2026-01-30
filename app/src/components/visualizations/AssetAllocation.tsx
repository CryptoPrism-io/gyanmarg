import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface AssetClass {
  name: string;
  color: string;
  risk: string;
  expectedReturn: string;
  description: string;
}

const assetClasses: AssetClass[] = [
  { name: 'Stocks', color: '#22C55E', risk: 'High', expectedReturn: '8-10%', description: 'Growth engine - volatile but highest long-term returns' },
  { name: 'Bonds', color: '#3B82F6', risk: 'Low-Medium', expectedReturn: '3-5%', description: 'Stability anchor - protects during stock crashes' },
  { name: 'Real Estate', color: '#F59E0B', risk: 'Medium', expectedReturn: '5-8%', description: 'Inflation hedge - tangible assets with income' },
  { name: 'Cash', color: '#6B7280', risk: 'Very Low', expectedReturn: '1-3%', description: 'Emergency buffer - immediate access, low return' },
];

interface Profile {
  name: string;
  age: string;
  allocation: number[];
  description: string;
}

const profiles: Profile[] = [
  { name: 'Aggressive', age: '20s-30s', allocation: [80, 10, 10, 0], description: 'Maximum growth focus' },
  { name: 'Growth', age: '30s-40s', allocation: [70, 15, 10, 5], description: 'Balanced growth with some stability' },
  { name: 'Balanced', age: '40s-50s', allocation: [50, 30, 15, 5], description: 'Equal parts growth and preservation' },
  { name: 'Conservative', age: '50s-60s', allocation: [30, 50, 10, 10], description: 'Focus on capital preservation' },
  { name: 'Preservation', age: '60s+', allocation: [20, 60, 10, 10], description: 'Minimize risk, protect assets' },
];

export function AssetAllocation() {
  const [selectedProfile, setSelectedProfile] = useState(1);
  const [customMode, setCustomMode] = useState(false);
  const [customAllocation, setCustomAllocation] = useState([60, 25, 10, 5]);

  const allocation = customMode ? customAllocation : profiles[selectedProfile].allocation;

  const totalRisk = useMemo(() => {
    return Math.round(allocation[0] * 1 + allocation[1] * 0.3 + allocation[2] * 0.6 + allocation[3] * 0);
  }, [allocation]);

  const expectedReturn = useMemo(() => {
    return (allocation[0] * 0.09 + allocation[1] * 0.04 + allocation[2] * 0.065 + allocation[3] * 0.02).toFixed(1);
  }, [allocation]);

  const updateCustomAllocation = (index: number, value: number) => {
    const newAllocation = [...customAllocation];
    const diff = value - newAllocation[index];
    newAllocation[index] = value;

    // Redistribute the difference
    const others = [0, 1, 2, 3].filter((i) => i !== index);
    const totalOther = others.reduce((sum, i) => sum + newAllocation[i], 0);

    if (totalOther > 0) {
      others.forEach((i) => {
        const share = newAllocation[i] / totalOther;
        newAllocation[i] = Math.max(0, Math.round(newAllocation[i] - diff * share));
      });
    }

    // Normalize to 100
    const total = newAllocation.reduce((a, b) => a + b, 0);
    if (total !== 100) {
      const largest = newAllocation.indexOf(Math.max(...newAllocation));
      newAllocation[largest] += 100 - total;
    }

    setCustomAllocation(newAllocation);
  };

  // Calculate pie chart segments
  const getSegments = () => {
    let startAngle = -90;
    return allocation.map((value, index) => {
      const angle = (value / 100) * 360;
      const endAngle = startAngle + angle;
      const largeArc = angle > 180 ? 1 : 0;

      const startRad = (startAngle * Math.PI) / 180;
      const endRad = (endAngle * Math.PI) / 180;

      const x1 = 100 + 80 * Math.cos(startRad);
      const y1 = 100 + 80 * Math.sin(startRad);
      const x2 = 100 + 80 * Math.cos(endRad);
      const y2 = 100 + 80 * Math.sin(endRad);

      const path = value > 0
        ? `M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArc} 1 ${x2} ${y2} Z`
        : '';

      startAngle = endAngle;
      return { path, color: assetClasses[index].color };
    });
  };

  const segments = getSegments();

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Title */}
      <div className="text-center">
        <h3 className="text-sm font-bold text-amber-400">Asset Allocation</h3>
        <p className="text-[10px] text-gray-500">The most important investment decision</p>
      </div>

      {/* Profile selector */}
      <div className="flex flex-wrap justify-center gap-1.5">
        {profiles.map((profile, index) => (
          <button
            key={profile.name}
            onClick={() => {
              setSelectedProfile(index);
              setCustomMode(false);
            }}
            className={`px-3 py-1.5 rounded-lg text-[10px] border transition-all ${
              !customMode && selectedProfile === index
                ? 'bg-amber-500/20 border-amber-500 text-amber-400'
                : 'border-gray-700 text-gray-400 hover:border-gray-600'
            }`}
          >
            {profile.name}
          </button>
        ))}
        <button
          onClick={() => setCustomMode(true)}
          className={`px-3 py-1.5 rounded-lg text-[10px] border transition-all ${
            customMode
              ? 'bg-purple-500/20 border-purple-500 text-purple-400'
              : 'border-gray-700 text-gray-400 hover:border-gray-600'
          }`}
        >
          Custom
        </button>
      </div>

      {/* Pie chart */}
      <div className="relative w-52 h-52">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {segments.map((segment, index) => (
            <motion.path
              key={index}
              d={segment.path}
              fill={segment.color}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            />
          ))}
          <circle cx="100" cy="100" r="40" fill="#0A0A0B" />
          <text x="100" y="95" textAnchor="middle" fontSize="14" fill="#fff" fontWeight="bold">
            {expectedReturn}%
          </text>
          <text x="100" y="112" textAnchor="middle" fontSize="9" fill="#666">
            Expected Return
          </text>
        </svg>
      </div>

      {/* Legend / Controls */}
      <div className="w-full max-w-xs space-y-2">
        {assetClasses.map((asset, index) => (
          <div key={asset.name} className="flex items-center gap-3">
            <div
              className="w-4 h-4 rounded-sm flex-shrink-0"
              style={{ backgroundColor: asset.color }}
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-300">{asset.name}</span>
                <span className="text-xs font-bold" style={{ color: asset.color }}>
                  {allocation[index]}%
                </span>
              </div>
              {customMode && (
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={allocation[index]}
                  onChange={(e) => updateCustomAllocation(index, Number(e.target.value))}
                  className="w-full h-1"
                  style={{ accentColor: asset.color }}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Profile description */}
      {!customMode && (
        <div className="w-full max-w-xs p-3 bg-[#111113] border border-gray-800 rounded-xl">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-amber-400">{profiles[selectedProfile].name}</span>
            <span className="text-[10px] text-gray-500">Age: {profiles[selectedProfile].age}</span>
          </div>
          <p className="text-[10px] text-gray-400">{profiles[selectedProfile].description}</p>
        </div>
      )}

      {/* Risk meter */}
      <div className="w-full max-w-xs">
        <div className="flex justify-between text-[10px] text-gray-500 mb-1">
          <span>Risk Level</span>
          <span className={totalRisk > 70 ? 'text-red-400' : totalRisk > 40 ? 'text-amber-400' : 'text-green-400'}>
            {totalRisk > 70 ? 'High' : totalRisk > 40 ? 'Moderate' : 'Low'}
          </span>
        </div>
        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(to right, #22C55E, #F59E0B, #EF4444)`,
            }}
            animate={{ width: `${totalRisk}%` }}
          />
        </div>
      </div>

      {/* Key rules */}
      <div className="w-full max-w-xs grid grid-cols-2 gap-2">
        <div className="p-2 bg-green-500/10 border border-green-500/30 rounded-lg">
          <p className="text-[10px] text-green-400 font-medium">📊 Age Rule</p>
          <p className="text-[9px] text-gray-400">100 - age = stock %</p>
        </div>
        <div className="p-2 bg-blue-500/10 border border-blue-500/30 rounded-lg">
          <p className="text-[10px] text-blue-400 font-medium">🔄 Rebalance</p>
          <p className="text-[9px] text-gray-400">Quarterly or annually</p>
        </div>
      </div>

      {/* Key insight */}
      <div className="bg-[#111113] border border-gray-800 rounded-xl p-4 max-w-xs">
        <p className="text-xs text-gray-400 leading-relaxed">
          <span className="text-amber-400 font-medium">Benjamin Graham:</span> "The essence of
          investment management is the management of risks, not the management of returns." Your
          allocation decision determines 90% of your investment outcome.
        </p>
      </div>

      <p className="text-[10px] text-gray-600">From The Intelligent Investor</p>
    </div>
  );
}

export default AssetAllocation;
