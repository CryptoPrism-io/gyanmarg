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
    <div className="relative overflow-hidden rounded-2xl">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/[0.03] via-transparent to-amber-500/[0.02]" />
      <div className="absolute inset-0 border border-white/[0.1] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 p-5">
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
            <div className="h-4 bg-white/[0.05] backdrop-blur-sm rounded-full overflow-hidden relative border border-white/[0.08]">
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
                className="relative w-full overflow-hidden rounded-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm hover:from-white/[0.06] hover:to-white/[0.02] transition-all" />
                <div className="absolute inset-0 border border-white/[0.08] rounded-lg hover:border-green-500/30 transition-all" />
                <div className="relative z-10 flex items-center justify-between p-3">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{action.icon}</span>
                    <span className="text-xs text-gray-300">{action.action}</span>
                  </div>
                  <span className="text-[10px] text-green-400">+{action.points}</span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Key insight */}
          <div className="relative w-full max-w-xs overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-green-500/5 to-transparent backdrop-blur-sm" />
            <div className="absolute inset-0 border border-green-500/30 rounded-lg" />
            <div className="relative z-10 p-3">
              <p className="text-[10px] text-green-400 text-center">
                💡 Give without keeping score. When you need help, the balance will be there.
              </p>
            </div>
          </div>

          <p className="text-[10px] text-gray-500 text-center">
            From "Never Eat Alone" by Keith Ferrazzi
          </p>
        </div>
      </div>
    </div>
  );
}

export default GenerosityLoop;
