import { useState } from 'react';
import { motion } from 'framer-motion';

// Impro - Status Transactions (Keith Johnstone)
const scenarios = [
  {
    situation: 'Meeting a new colleague',
    highStatus: ['Firm handshake, steady eye contact', 'Speaks slowly, takes space', '"I\'m John. And you are?"'],
    lowStatus: ['Limp handshake, breaks eye contact', 'Speaks quickly, makes self small', '"Hi! I\'m John? Nice to meet you!"'],
  },
  {
    situation: 'Receiving criticism',
    highStatus: ['Pauses before responding', 'Acknowledges without defensiveness', '"That\'s a fair point. Let me think about that."'],
    lowStatus: ['Immediately apologizes profusely', 'Makes excuses, gets flustered', '"Oh no, I\'m so sorry! I didn\'t mean to..."'],
  },
  {
    situation: 'Entering a room',
    highStatus: ['Walks in calmly, surveys room', 'Doesn\'t rush to fill silence', 'Waits for others to approach'],
    lowStatus: ['Rushes in apologetically', 'Immediately explains presence', 'Looks for validation'],
  },
];

export function StatusTransactions() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [selectedStatus, setSelectedStatus] = useState<'high' | 'low' | null>(null);

  const scenario = scenarios[activeScenario];

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Header */}
      <div className="text-center">
        <p className="text-xs text-gray-400">
          Every interaction involves status transactions.
        </p>
        <p className="text-[10px] text-amber-400">Learn to play any status consciously.</p>
      </div>

      {/* Scenario selector */}
      <div className="flex gap-1">
        {scenarios.map((_, idx) => (
          <button
            key={idx}
            onClick={() => { setActiveScenario(idx); setSelectedStatus(null); }}
            className={`w-8 h-8 rounded-lg border text-xs ${
              idx === activeScenario
                ? 'bg-amber-500/20 border-amber-500/50 text-amber-400'
                : 'bg-[#111113] border-gray-800 text-gray-500'
            }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      {/* Scenario */}
      <div className="w-full max-w-xs bg-[#111113] border border-gray-800 rounded-lg p-3 text-center">
        <p className="text-sm text-gray-300">{scenario.situation}</p>
      </div>

      {/* Status choice */}
      <div className="w-full max-w-xs grid grid-cols-2 gap-3">
        <motion.button
          onClick={() => setSelectedStatus('high')}
          className={`p-3 rounded-lg border transition-all ${
            selectedStatus === 'high'
              ? 'bg-blue-500/10 border-blue-500/50'
              : 'bg-[#111113] border-gray-800 hover:border-gray-700'
          }`}
          whileTap={{ scale: 0.98 }}
        >
          <p className={`text-sm font-medium ${selectedStatus === 'high' ? 'text-blue-400' : 'text-gray-400'}`}>
            High Status
          </p>
          <p className="text-[10px] text-gray-500">Confident, grounded</p>
        </motion.button>

        <motion.button
          onClick={() => setSelectedStatus('low')}
          className={`p-3 rounded-lg border transition-all ${
            selectedStatus === 'low'
              ? 'bg-rose-500/10 border-rose-500/50'
              : 'bg-[#111113] border-gray-800 hover:border-gray-700'
          }`}
          whileTap={{ scale: 0.98 }}
        >
          <p className={`text-sm font-medium ${selectedStatus === 'low' ? 'text-rose-400' : 'text-gray-400'}`}>
            Low Status
          </p>
          <p className="text-[10px] text-gray-500">Deferential, small</p>
        </motion.button>
      </div>

      {/* Behaviors */}
      {selectedStatus && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`w-full max-w-xs rounded-lg border p-4 ${
            selectedStatus === 'high'
              ? 'bg-blue-500/10 border-blue-500/30'
              : 'bg-rose-500/10 border-rose-500/30'
          }`}
        >
          <p className={`text-sm font-medium mb-3 ${selectedStatus === 'high' ? 'text-blue-400' : 'text-rose-400'}`}>
            {selectedStatus === 'high' ? 'High Status' : 'Low Status'} Behaviors:
          </p>
          <div className="space-y-2">
            {(selectedStatus === 'high' ? scenario.highStatus : scenario.lowStatus).map((behavior, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className={selectedStatus === 'high' ? 'text-blue-400' : 'text-rose-400'}>•</span>
                <span className="text-xs text-gray-400">{behavior}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Key insight */}
      <div className="w-full max-w-xs bg-[#111113] border border-gray-800 rounded-lg p-3">
        <p className="text-[10px] text-gray-400 text-center">
          <span className="text-green-400">The secret:</span> Master players can play any status.
          They choose the status that serves the interaction, not the one that's habitual.
        </p>
      </div>

      <p className="text-[10px] text-gray-500 text-center">
        From "Impro" by Keith Johnstone
      </p>
    </div>
  );
}

export default StatusTransactions;
