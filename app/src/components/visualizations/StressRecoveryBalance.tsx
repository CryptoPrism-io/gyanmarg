import { useState } from 'react';
import { motion } from 'framer-motion';

// Peak Performance - Stress + Recovery = Growth
const zones = [
  {
    name: 'Comfort Zone',
    stress: 20,
    recovery: 80,
    result: 'Stagnation',
    description: 'Not enough challenge to grow',
    color: 'gray',
  },
  {
    name: 'Growth Zone',
    stress: 50,
    recovery: 50,
    result: 'Optimal Growth',
    description: 'Balanced stress and recovery',
    color: 'green',
  },
  {
    name: 'Burnout Zone',
    stress: 80,
    recovery: 20,
    result: 'Breakdown',
    description: 'Too much stress, not enough recovery',
    color: 'red',
  },
];

export function StressRecoveryBalance() {
  const [stress, setStress] = useState(50);
  const recovery = 100 - stress;

  const getZone = () => {
    if (stress < 35) return zones[0];
    if (stress > 65) return zones[2];
    return zones[1];
  };

  const zone = getZone();

  const colorMap: Record<string, { bg: string; border: string; text: string }> = {
    gray: { bg: 'bg-gray-500/10', border: 'border-gray-500/30', text: 'text-gray-400' },
    green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400' },
    red: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400' },
  };

  const colors = colorMap[zone.color];

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Header */}
      <div className="text-center">
        <p className="text-xs text-gray-400">
          Growth = <span className="text-blue-400">Stress</span> +{' '}
          <span className="text-green-400">Recovery</span>
        </p>
      </div>

      {/* Balance visualization */}
      <div className="w-full max-w-xs h-32 relative">
        {/* Fulcrum */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[20px] border-l-transparent border-r-transparent border-b-gray-700" />

        {/* Balance beam */}
        <motion.div
          className="absolute bottom-5 left-0 right-0 h-3 bg-gray-700 rounded-full origin-center"
          style={{ transform: `rotate(${(stress - 50) * 0.3}deg)` }}
        >
          {/* Stress weight */}
          <div
            className="absolute left-2 -top-8 w-12 h-12 bg-blue-500/20 border border-blue-500/50 rounded-lg flex items-center justify-center"
          >
            <div className="text-center">
              <p className="text-lg font-bold text-blue-400">{stress}</p>
              <p className="text-[8px] text-blue-400">Stress</p>
            </div>
          </div>

          {/* Recovery weight */}
          <div
            className="absolute right-2 -top-8 w-12 h-12 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center justify-center"
          >
            <div className="text-center">
              <p className="text-lg font-bold text-green-400">{recovery}</p>
              <p className="text-[8px] text-green-400">Rest</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slider */}
      <div className="w-full max-w-xs space-y-2">
        <div className="flex justify-between text-[10px]">
          <span className="text-green-400">More Recovery</span>
          <span className="text-blue-400">More Stress</span>
        </div>
        <input
          type="range"
          min="10"
          max="90"
          value={stress}
          onChange={(e) => setStress(Number(e.target.value))}
          className="w-full accent-amber-500"
        />
      </div>

      {/* Zone indicator */}
      <motion.div
        key={zone.name}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`w-full max-w-xs ${colors.bg} border ${colors.border} rounded-lg p-4`}
      >
        <div className="flex justify-between items-center mb-2">
          <p className={`text-sm font-medium ${colors.text}`}>{zone.name}</p>
          <span className={`text-xs px-2 py-0.5 rounded-full ${colors.bg} ${colors.text}`}>
            {zone.result}
          </span>
        </div>
        <p className="text-xs text-gray-400">{zone.description}</p>
      </motion.div>

      {/* Zone legend */}
      <div className="w-full max-w-xs grid grid-cols-3 gap-2">
        {zones.map((z, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-lg border text-center ${
              z.name === zone.name
                ? `${colorMap[z.color].bg} ${colorMap[z.color].border}`
                : 'bg-[#111113] border-gray-800'
            }`}
          >
            <p className={`text-[10px] ${z.name === zone.name ? colorMap[z.color].text : 'text-gray-500'}`}>
              {z.name}
            </p>
          </div>
        ))}
      </div>

      {/* Key insight */}
      <div className="w-full max-w-xs bg-[#111113] border border-gray-800 rounded-lg p-3">
        <p className="text-[10px] text-gray-400 text-center">
          <span className="text-purple-400">Elite secret:</span> Growth doesn't happen during stress—
          it happens during recovery. But you need the stress first to trigger adaptation.
        </p>
      </div>

      <p className="text-[10px] text-gray-500 text-center">
        From "Peak Performance" by Brad Stulberg
      </p>
    </div>
  );
}

export default StressRecoveryBalance;
