import { useState } from 'react';
import { motion } from 'framer-motion';

// Never Eat Alone - Give before you need
const actions = [
  { action: 'Make introduction', points: 10, icon: '🤝' },
  { action: 'Share opportunity', points: 15, icon: '💡' },
  { action: 'Give advice freely', points: 5, icon: '💬' },
  { action: 'Send helpful article', points: 3, icon: '📄' },
  { action: 'Celebrate their win', points: 5, icon: '🎉' },
];

export function GenerosityLoop() {
  const [balance, setBalance] = useState(50);
  const [recentAction, setRecentAction] = useState<string | null>(null);

  const handleAction = (action: typeof actions[0]) => {
    setBalance((prev) => Math.min(100, prev + action.points));
    setRecentAction(action.action);
    setTimeout(() => setRecentAction(null), 1500);
  };

  const getBalanceStatus = () => {
    if (balance >= 80) return { text: 'Relationship thriving', color: 'green' };
    if (balance >= 50) return { text: 'Good standing', color: 'amber' };
    return { text: 'Need to give more', color: 'red' };
  };

  const status = getBalanceStatus();

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Balance meter */}
      <div className="w-full max-w-xs">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[10px] text-gray-500">Relationship Bank</span>
          <span className={`text-xs ${
            status.color === 'green'
              ? 'text-green-400'
              : status.color === 'amber'
              ? 'text-amber-400'
              : 'text-red-400'
          }`}>
            {status.text}
          </span>
        </div>
        <div className="h-4 bg-gray-800 rounded-full overflow-hidden relative">
          <motion.div
            className={`h-full ${
              balance >= 80
                ? 'bg-gradient-to-r from-green-600 to-green-400'
                : balance >= 50
                ? 'bg-gradient-to-r from-amber-600 to-amber-400'
                : 'bg-gradient-to-r from-red-600 to-red-400'
            }`}
            animate={{ width: `${balance}%` }}
          />
          <span className="absolute inset-0 flex items-center justify-center text-[10px] text-white font-bold">
            {balance}%
          </span>
        </div>
      </div>

      {/* Recent action feedback */}
      <div className="h-6">
        {recentAction && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-xs text-green-400"
          >
            ✓ {recentAction}
          </motion.p>
        )}
      </div>

      {/* Actions */}
      <div className="w-full max-w-xs space-y-2">
        <p className="text-[10px] text-gray-500 text-center uppercase tracking-wide">
          Deposit into the relationship:
        </p>
        {actions.map((action, idx) => (
          <motion.button
            key={idx}
            onClick={() => handleAction(action)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-between p-3 bg-[#111113] border border-gray-800 rounded-lg hover:border-green-500/30 transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">{action.icon}</span>
              <span className="text-xs text-gray-300">{action.action}</span>
            </div>
            <span className="text-[10px] text-green-400">+{action.points}</span>
          </motion.button>
        ))}
      </div>

      {/* Key insight */}
      <div className="w-full max-w-xs bg-green-500/10 border border-green-500/30 rounded-lg p-3">
        <p className="text-[10px] text-green-400 text-center">
          💡 Give without keeping score. When you need help, the balance will be there.
        </p>
      </div>

      <p className="text-[10px] text-gray-500 text-center">
        From "Never Eat Alone" by Keith Ferrazzi
      </p>
    </div>
  );
}

export default GenerosityLoop;
