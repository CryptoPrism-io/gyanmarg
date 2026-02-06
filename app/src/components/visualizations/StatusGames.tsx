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
    <div className="relative overflow-hidden rounded-2xl">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.03] via-transparent to-green-500/[0.02]" />
      <div className="absolute inset-0 border border-white/[0.1] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 p-5">
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
              className={`p-4 rounded-lg border transition-all backdrop-blur-sm ${
                selected === 'dominance'
                  ? 'bg-red-500/[0.12] border-red-500/50'
                  : 'bg-white/[0.03] border-white/[0.08] hover:border-white/[0.15]'
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
              className={`p-4 rounded-lg border transition-all backdrop-blur-sm ${
                selected === 'prestige'
                  ? 'bg-green-500/[0.12] border-green-500/50'
                  : 'bg-white/[0.03] border-white/[0.08] hover:border-white/[0.15]'
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
              className="w-full max-w-xs relative overflow-hidden rounded-lg"
            >
              <div className={`absolute inset-0 backdrop-blur-sm ${
                selected === 'dominance'
                  ? 'bg-gradient-to-br from-red-500/[0.12] to-red-500/[0.05]'
                  : 'bg-gradient-to-br from-green-500/[0.12] to-green-500/[0.05]'
              }`} />
              <div className={`absolute inset-0 border rounded-lg ${
                selected === 'dominance' ? 'border-red-500/30' : 'border-green-500/30'
              }`} />
              <div className="relative z-10 p-4">
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

                <div className="bg-black/20 rounded-lg p-3 space-y-2 backdrop-blur-sm">
                  <div className="flex justify-between">
                    <span className="text-[10px] text-gray-500">Short-term:</span>
                    <span className="text-[10px] text-gray-300">{outcomes[selected].shortTerm}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[10px] text-gray-500">Long-term:</span>
                    <span className="text-[10px] text-gray-300">{outcomes[selected].longTerm}</span>
                  </div>
                  <div className="pt-2 border-t border-white/[0.1]">
                    <p className="text-[10px] text-gray-400">{outcomes[selected].sustainability}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Key insight */}
          <div className="w-full max-w-xs relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-sm" />
            <div className="absolute inset-0 border border-white/[0.08] rounded-lg" />
            <div className="relative z-10 p-3">
              <p className="text-[10px] text-gray-400 text-center">
                <span className="text-amber-400">Key insight:</span> Dominance works in zero-sum games.
                Prestige wins in collaborative environments where reputation matters.
              </p>
            </div>
          </div>

          <p className="text-[10px] text-gray-500 text-center">
            From "The Status Game" by Will Storr
          </p>
        </div>
      </div>
    </div>
  );
}

export default StatusGames;
