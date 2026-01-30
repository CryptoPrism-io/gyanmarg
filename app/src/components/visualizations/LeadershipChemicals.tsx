import { useState } from 'react';
import { motion } from 'framer-motion';

// Leaders Eat Last - The biology of leadership
const chemicals = [
  {
    name: 'Endorphins',
    type: 'selfish',
    description: 'Masks pain, runner\'s high',
    trigger: 'Physical exertion',
    color: 'blue',
    icon: '🏃',
  },
  {
    name: 'Dopamine',
    type: 'selfish',
    description: 'Goal achievement, addictive',
    trigger: 'Completing tasks, progress',
    color: 'purple',
    icon: '🎯',
  },
  {
    name: 'Serotonin',
    type: 'social',
    description: 'Pride, status, respect',
    trigger: 'Being recognized by others',
    color: 'amber',
    icon: '👑',
  },
  {
    name: 'Oxytocin',
    type: 'social',
    description: 'Trust, love, safety',
    trigger: 'Acts of generosity, physical touch',
    color: 'rose',
    icon: '💕',
  },
  {
    name: 'Cortisol',
    type: 'danger',
    description: 'Stress, anxiety, paranoia',
    trigger: 'Threats, lack of safety',
    color: 'red',
    icon: '😰',
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400' },
  rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/30', text: 'text-rose-400' },
  red: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400' },
};

export function LeadershipChemicals() {
  const [activeChemical, setActiveChemical] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Header */}
      <div className="text-center">
        <p className="text-sm font-medium text-gray-300">The Chemistry of Leadership</p>
        <p className="text-[10px] text-gray-500">
          How leaders trigger helpful vs harmful chemicals
        </p>
      </div>

      {/* Chemical buttons */}
      <div className="flex flex-wrap gap-2 justify-center">
        {chemicals.map((chem, idx) => {
          const colors = colorMap[chem.color];
          const isActive = activeChemical === idx;
          return (
            <motion.button
              key={idx}
              onClick={() => setActiveChemical(isActive ? null : idx)}
              className={`px-3 py-2 rounded-lg border transition-all ${
                isActive ? `${colors.bg} ${colors.border}` : 'bg-[#111113] border-gray-800'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-lg">{chem.icon}</span>
              <p className={`text-[10px] mt-1 ${isActive ? colors.text : 'text-gray-500'}`}>
                {chem.name}
              </p>
            </motion.button>
          );
        })}
      </div>

      {/* Detail panel */}
      {activeChemical !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`w-full max-w-xs p-4 rounded-lg border ${
            colorMap[chemicals[activeChemical].color].bg
          } ${colorMap[chemicals[activeChemical].color].border}`}
        >
          {(() => {
            const chem = chemicals[activeChemical];
            const colors = colorMap[chem.color];
            return (
              <>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className={`text-sm font-medium ${colors.text}`}>{chem.name}</p>
                    <span className={`text-[8px] px-2 py-0.5 rounded-full ${
                      chem.type === 'selfish'
                        ? 'bg-blue-500/20 text-blue-400'
                        : chem.type === 'social'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {chem.type === 'selfish' ? 'Individual' : chem.type === 'social' ? 'Social Bonding' : 'Danger'}
                    </span>
                  </div>
                  <span className="text-2xl">{chem.icon}</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-gray-500">Effect: </span>
                    <span className="text-gray-300">{chem.description}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Triggered by: </span>
                    <span className="text-gray-300">{chem.trigger}</span>
                  </div>
                </div>
              </>
            );
          })()}
        </motion.div>
      )}

      {/* Leadership insight */}
      <div className="w-full max-w-xs bg-green-500/10 border border-green-500/30 rounded-lg p-3">
        <p className="text-[10px] text-green-400 text-center">
          💡 Great leaders create environments that boost serotonin & oxytocin,
          minimizing cortisol in their teams.
        </p>
      </div>

      <p className="text-[10px] text-gray-500 text-center">
        From "Leaders Eat Last" by Simon Sinek
      </p>
    </div>
  );
}

export default LeadershipChemicals;
