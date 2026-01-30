import { useState } from 'react';
import { motion } from 'framer-motion';

// The Status Game - Dominance vs Prestige
const traits = {
  dominance: [
    'Uses intimidation',
    'Takes credit for others\' work',
    'Interrupts frequently',
    'Makes people feel small',
    'Punishes disagreement',
  ],
  prestige: [
    'Shares knowledge freely',
    'Gives credit generously',
    'Listens actively',
    'Elevates others',
    'Welcomes diverse opinions',
  ],
};

const outcomes = {
  dominance: {
    shortTerm: 'Quick compliance',
    longTerm: 'Resentment, turnover, undermining',
    sustainability: 'Requires constant enforcement',
  },
  prestige: {
    shortTerm: 'Voluntary following',
    longTerm: 'Loyalty, trust, collaboration',
    sustainability: 'Self-reinforcing through reciprocity',
  },
};

export function StatusGames() {
  const [selected, setSelected] = useState<'dominance' | 'prestige' | null>(null);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Header */}
      <div className="text-center">
        <p className="text-xs text-gray-400">
          There are two paths to high status. Choose wisely.
        </p>
      </div>

      {/* Two paths */}
      <div className="w-full max-w-xs grid grid-cols-2 gap-3">
        <motion.button
          onClick={() => setSelected(selected === 'dominance' ? null : 'dominance')}
          className={`p-4 rounded-lg border transition-all ${
            selected === 'dominance'
              ? 'bg-red-500/10 border-red-500/50'
              : 'bg-[#111113] border-gray-800 hover:border-gray-700'
          }`}
          whileTap={{ scale: 0.98 }}
        >
          <p className={`text-sm font-medium mb-1 ${selected === 'dominance' ? 'text-red-400' : 'text-gray-400'}`}>
            Dominance
          </p>
          <p className="text-[10px] text-gray-500">Status through fear</p>
        </motion.button>

        <motion.button
          onClick={() => setSelected(selected === 'prestige' ? null : 'prestige')}
          className={`p-4 rounded-lg border transition-all ${
            selected === 'prestige'
              ? 'bg-green-500/10 border-green-500/50'
              : 'bg-[#111113] border-gray-800 hover:border-gray-700'
          }`}
          whileTap={{ scale: 0.98 }}
        >
          <p className={`text-sm font-medium mb-1 ${selected === 'prestige' ? 'text-green-400' : 'text-gray-400'}`}>
            Prestige
          </p>
          <p className="text-[10px] text-gray-500">Status through respect</p>
        </motion.button>
      </div>

      {/* Details */}
      {selected && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`w-full max-w-xs rounded-lg border p-4 ${
            selected === 'dominance'
              ? 'bg-red-500/10 border-red-500/30'
              : 'bg-green-500/10 border-green-500/30'
          }`}
        >
          <p className={`text-sm font-medium mb-3 ${selected === 'dominance' ? 'text-red-400' : 'text-green-400'}`}>
            {selected === 'dominance' ? 'Dominance Tactics' : 'Prestige Behaviors'}
          </p>

          <div className="space-y-1 mb-4">
            {traits[selected].map((trait, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className={selected === 'dominance' ? 'text-red-400' : 'text-green-400'}>
                  {selected === 'dominance' ? '✗' : '✓'}
                </span>
                <span className="text-xs text-gray-400">{trait}</span>
              </div>
            ))}
          </div>

          <div className="bg-black/20 rounded-lg p-3 space-y-2">
            <div className="flex justify-between">
              <span className="text-[10px] text-gray-500">Short-term:</span>
              <span className="text-[10px] text-gray-300">{outcomes[selected].shortTerm}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[10px] text-gray-500">Long-term:</span>
              <span className="text-[10px] text-gray-300">{outcomes[selected].longTerm}</span>
            </div>
            <div className="pt-2 border-t border-gray-700">
              <p className="text-[10px] text-gray-400">{outcomes[selected].sustainability}</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Key insight */}
      <div className="w-full max-w-xs bg-[#111113] border border-gray-800 rounded-lg p-3">
        <p className="text-[10px] text-gray-400 text-center">
          <span className="text-amber-400">Key insight:</span> Dominance works in zero-sum games.
          Prestige wins in collaborative environments where reputation matters.
        </p>
      </div>

      <p className="text-[10px] text-gray-500 text-center">
        From "The Status Game" by Will Storr
      </p>
    </div>
  );
}

export default StatusGames;
