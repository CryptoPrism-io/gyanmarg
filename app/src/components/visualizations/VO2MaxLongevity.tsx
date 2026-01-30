import { useState } from 'react';
import { motion } from 'framer-motion';

interface FitnessLevel {
  id: string;
  label: string;
  vo2max: number;
  mortalityRisk: number;
  description: string;
}

const levels: FitnessLevel[] = [
  { id: 'low', label: 'Low Fitness', vo2max: 25, mortalityRisk: 100, description: 'Bottom 25% - highest risk' },
  { id: 'below', label: 'Below Average', vo2max: 35, mortalityRisk: 60, description: '25-50th percentile' },
  { id: 'above', label: 'Above Average', vo2max: 45, mortalityRisk: 40, description: '50-75th percentile' },
  { id: 'high', label: 'High Fitness', vo2max: 55, mortalityRisk: 25, description: '75-97.6th percentile' },
  { id: 'elite', label: 'Elite', vo2max: 65, mortalityRisk: 15, description: 'Top 2.4% - lowest risk' },
];

const trainingZones = [
  { name: 'Zone 2', hr: '60-70%', benefit: 'Builds aerobic base, burns fat', weekly: '150-180 min' },
  { name: 'Zone 4-5', hr: '85-100%', benefit: 'Increases VO2 max', weekly: '20-30 min HIIT' },
];

export function VO2MaxLongevity() {
  const [selectedLevel, setSelectedLevel] = useState(2);
  const [showZones, setShowZones] = useState(false);

  const level = levels[selectedLevel];

  return (
    <div className="flex flex-col items-center gap-4">
      {/* VO2 Max visualization */}
      <div className="w-full max-w-xs">
        <div className="relative h-40 bg-[#111113] border border-gray-800 rounded-lg overflow-hidden">
          {/* Risk zones */}
          <div className="absolute inset-0 flex">
            <div className="flex-1 bg-red-500/10" />
            <div className="flex-1 bg-amber-500/10" />
            <div className="flex-1 bg-yellow-500/10" />
            <div className="flex-1 bg-green-500/10" />
            <div className="flex-1 bg-emerald-500/10" />
          </div>

          {/* Current position */}
          <motion.div
            className="absolute bottom-0 w-full"
            animate={{ left: `${selectedLevel * 20}%` }}
          >
            <motion.div
              className="w-1/5 mx-auto"
              animate={{ height: `${100 - level.mortalityRisk}%` }}
            >
              <div
                className="w-full h-full rounded-t-lg"
                style={{
                  backgroundColor: level.mortalityRisk > 70 ? '#EF4444' :
                                  level.mortalityRisk > 50 ? '#F59E0B' :
                                  level.mortalityRisk > 30 ? '#22C55E' : '#10B981'
                }}
              />
            </motion.div>
          </motion.div>

          {/* Y-axis label */}
          <div className="absolute left-2 top-2 text-[10px] text-gray-500">
            ↑ Life expectancy
          </div>
        </div>

        {/* Level selector */}
        <div className="flex mt-2">
          {levels.map((l, index) => (
            <button
              key={l.id}
              onClick={() => setSelectedLevel(index)}
              className={`flex-1 py-1 text-[10px] transition-all ${
                selectedLevel === index
                  ? 'text-white'
                  : 'text-gray-600 hover:text-gray-400'
              }`}
            >
              {l.vo2max}
            </button>
          ))}
        </div>
        <p className="text-center text-[10px] text-gray-500">VO2 Max (ml/kg/min)</p>
      </div>

      {/* Current stats */}
      <div className="w-full max-w-xs grid grid-cols-2 gap-3">
        <div className="bg-[#111113] border border-gray-800 rounded-lg p-3 text-center">
          <p className="text-2xl font-bold" style={{
            color: level.mortalityRisk > 70 ? '#EF4444' :
                   level.mortalityRisk > 50 ? '#F59E0B' :
                   level.mortalityRisk > 30 ? '#22C55E' : '#10B981'
          }}>
            {level.vo2max}
          </p>
          <p className="text-[10px] text-gray-500">VO2 Max</p>
        </div>
        <div className="bg-[#111113] border border-gray-800 rounded-lg p-3 text-center">
          <p className="text-2xl font-bold text-red-400">
            {level.mortalityRisk > 50 ? '+' : '-'}{Math.abs(100 - level.mortalityRisk)}%
          </p>
          <p className="text-[10px] text-gray-500">
            {level.mortalityRisk > 50 ? 'Mortality risk' : 'Risk reduction'}
          </p>
        </div>
      </div>

      {/* Level description */}
      <div className={`w-full max-w-xs p-3 rounded-lg border ${
        level.mortalityRisk > 70 ? 'bg-red-500/10 border-red-500/30' :
        level.mortalityRisk > 50 ? 'bg-amber-500/10 border-amber-500/30' :
        'bg-green-500/10 border-green-500/30'
      }`}>
        <p className="text-sm font-medium" style={{
          color: level.mortalityRisk > 70 ? '#EF4444' :
                 level.mortalityRisk > 50 ? '#F59E0B' : '#22C55E'
        }}>
          {level.label}
        </p>
        <p className="text-xs text-gray-400">{level.description}</p>
      </div>

      {/* Training zones toggle */}
      <button
        onClick={() => setShowZones(!showZones)}
        className="text-xs text-blue-400 hover:text-blue-300"
      >
        {showZones ? '▼ Hide' : '▶ Show'} how to improve VO2 Max
      </button>

      {showZones && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-xs space-y-2"
        >
          {trainingZones.map((zone) => (
            <div
              key={zone.name}
              className="p-2 bg-[#111113] border border-gray-800 rounded-lg"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-medium text-blue-400">{zone.name}</span>
                <span className="text-[10px] text-gray-500">{zone.hr} max HR</span>
              </div>
              <p className="text-[10px] text-gray-400">{zone.benefit}</p>
              <p className="text-[10px] text-green-400 mt-1">Goal: {zone.weekly}/week</p>
            </div>
          ))}
        </motion.div>
      )}

      {/* Key insight */}
      <div className="bg-[#111113] border border-gray-800 rounded-lg p-3 max-w-xs text-center">
        <p className="text-xs text-gray-400">
          <span className="text-green-400 font-medium">Peter Attia:</span> VO2 Max is the
          single strongest predictor of longevity. Moving from low to above average fitness
          reduces mortality risk by 60%.
        </p>
      </div>

      <p className="text-[10px] text-gray-500">
        From Outlive by Peter Attia
      </p>
    </div>
  );
}

export default VO2MaxLongevity;
