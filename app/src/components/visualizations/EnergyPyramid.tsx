import { useState } from 'react';
import { motion } from 'framer-motion';

// Power of Full Engagement - Energy Pyramid
const energyLevels = [
  {
    name: 'Spiritual',
    description: 'Purpose and meaning',
    questions: ['Why does this matter?', 'What am I here to do?'],
    practices: ['Define your purpose', 'Connect work to values', 'Create rituals'],
    color: 'purple',
    position: 'top',
  },
  {
    name: 'Mental',
    description: 'Focus and concentration',
    questions: ['Can I focus for 90 minutes?', 'Am I mentally sharp?'],
    practices: ['Focused sprints', 'Creative breaks', 'Mental rehearsal'],
    color: 'blue',
    position: 'mid-top',
  },
  {
    name: 'Emotional',
    description: 'Quality of energy',
    questions: ['Am I optimistic?', 'Do I feel confident?'],
    practices: ['Positive self-talk', 'Deep breathing', 'Gratitude'],
    color: 'rose',
    position: 'mid-bottom',
  },
  {
    name: 'Physical',
    description: 'Quantity of energy',
    questions: ['Did I sleep well?', 'Am I eating right?'],
    practices: ['Sleep 7-8 hours', 'Exercise regularly', 'Eat small meals'],
    color: 'green',
    position: 'bottom',
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400' },
  rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/30', text: 'text-rose-400' },
  green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400' },
};

export function EnergyPyramid() {
  const [activeLevel, setActiveLevel] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Header */}
      <div className="text-center">
        <p className="text-xs text-gray-400">
          Energy, not time, is the fundamental currency of high performance.
        </p>
      </div>

      {/* Pyramid */}
      <div className="relative w-full max-w-xs h-56 flex flex-col items-center justify-center gap-1">
        {energyLevels.map((level, idx) => {
          const colors = colorMap[level.color];
          const isActive = activeLevel === idx;
          const widths = ['w-1/3', 'w-1/2', 'w-2/3', 'w-full'];

          return (
            <motion.button
              key={idx}
              onClick={() => setActiveLevel(isActive ? null : idx)}
              className={`${widths[idx]} py-3 rounded-lg border transition-all ${
                isActive ? `${colors.bg} ${colors.border}` : 'bg-[#111113] border-gray-800'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <p className={`text-xs font-medium text-center ${isActive ? colors.text : 'text-gray-400'}`}>
                {level.name}
              </p>
              <p className="text-[8px] text-gray-500 text-center">{level.description}</p>
            </motion.button>
          );
        })}

        {/* Foundation label */}
        <p className="text-[8px] text-gray-600 mt-1">Foundation → Peak</p>
      </div>

      {/* Active level detail */}
      {activeLevel !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`w-full max-w-xs ${colorMap[energyLevels[activeLevel].color].bg} border ${colorMap[energyLevels[activeLevel].color].border} rounded-lg p-4`}
        >
          <p className={`text-sm font-medium ${colorMap[energyLevels[activeLevel].color].text} mb-2`}>
            {energyLevels[activeLevel].name} Energy
          </p>

          <p className="text-[10px] text-gray-500 uppercase mb-1">Self-check:</p>
          <ul className="space-y-1 mb-3">
            {energyLevels[activeLevel].questions.map((q, idx) => (
              <li key={idx} className="text-[10px] text-gray-400">• {q}</li>
            ))}
          </ul>

          <p className="text-[10px] text-gray-500 uppercase mb-1">Build this energy:</p>
          <ul className="space-y-1">
            {energyLevels[activeLevel].practices.map((p, idx) => (
              <li key={idx} className="text-[10px] text-gray-300">✓ {p}</li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Key insight */}
      <div className="w-full max-w-xs bg-[#111113] border border-gray-800 rounded-lg p-3">
        <p className="text-[10px] text-gray-400 text-center">
          <span className="text-amber-400">Key insight:</span> Physical energy is the foundation.
          Without it, the other levels collapse. Start from the bottom up.
        </p>
      </div>

      <p className="text-[10px] text-gray-500 text-center">
        From "The Power of Full Engagement" by Jim Loehr
      </p>
    </div>
  );
}

export default EnergyPyramid;
