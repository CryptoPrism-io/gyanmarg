import { useState } from 'react';
import { motion } from 'framer-motion';

// Richest Man in Babylon - Seven Cures for a Lean Purse
const cures = [
  {
    number: 1,
    title: 'Start thy purse to fattening',
    modern: 'Save 10% of everything you earn',
    icon: '💰',
    color: 'amber',
  },
  {
    number: 2,
    title: 'Control thy expenditures',
    modern: 'Budget and live below your means',
    icon: '📊',
    color: 'blue',
  },
  {
    number: 3,
    title: 'Make thy gold multiply',
    modern: 'Invest your savings wisely',
    icon: '📈',
    color: 'green',
  },
  {
    number: 4,
    title: 'Guard thy treasures from loss',
    modern: 'Protect principal, avoid risky schemes',
    icon: '🛡️',
    color: 'purple',
  },
  {
    number: 5,
    title: 'Make of thy dwelling a profitable investment',
    modern: 'Own your home, build equity',
    icon: '🏠',
    color: 'rose',
  },
  {
    number: 6,
    title: 'Ensure a future income',
    modern: 'Plan for retirement and passive income',
    icon: '🎯',
    color: 'cyan',
  },
  {
    number: 7,
    title: 'Increase thy ability to earn',
    modern: 'Invest in skills and education',
    icon: '📚',
    color: 'orange',
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; glassBg: string }> = {
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400', glassBg: 'from-amber-500/10 via-amber-500/5 to-transparent' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', glassBg: 'from-blue-500/10 via-blue-500/5 to-transparent' },
  green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400', glassBg: 'from-green-500/10 via-green-500/5 to-transparent' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400', glassBg: 'from-purple-500/10 via-purple-500/5 to-transparent' },
  rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/30', text: 'text-rose-400', glassBg: 'from-rose-500/10 via-rose-500/5 to-transparent' },
  cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', glassBg: 'from-cyan-500/10 via-cyan-500/5 to-transparent' },
  orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400', glassBg: 'from-orange-500/10 via-orange-500/5 to-transparent' },
};

export function SevenCures() {
  const [activeCure, setActiveCure] = useState(0);
  const [completed, setCompleted] = useState<number[]>([]);

  const cure = cures[activeCure];
  const colors = colorMap[cure.color];

  const toggleComplete = (num: number) => {
    setCompleted((prev) =>
      prev.includes(num) ? prev.filter((n) => n !== num) : [...prev, num]
    );
  };

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] via-transparent to-purple-500/[0.02]" />
      <div className="absolute inset-0 border border-white/[0.1] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-4">
          {/* Header */}
          <div className="text-center">
            <p className="text-sm font-medium text-gray-300">Seven Cures for a Lean Purse</p>
            <p className="text-[10px] text-gray-500">
              Ancient wisdom for building wealth
            </p>
          </div>

          {/* Progress */}
          <div className="flex gap-1">
            {cures.map((c, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCure(idx)}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm border transition-all backdrop-blur-sm ${
                  activeCure === idx
                    ? `${colorMap[c.color].bg} ${colorMap[c.color].border} ${colorMap[c.color].text}`
                    : completed.includes(c.number)
                    ? 'bg-green-500/20 border-green-500/50 text-green-400'
                    : 'bg-white/[0.03] border-white/[0.1] text-gray-500 hover:bg-white/[0.05]'
                }`}
              >
                {completed.includes(c.number) ? '✓' : c.number}
              </button>
            ))}
          </div>

          {/* Active cure */}
          <motion.div
            key={activeCure}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative w-full max-w-xs overflow-hidden rounded-lg"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${colors.glassBg} backdrop-blur-sm`} />
            <div className={`absolute inset-0 border ${colors.border} rounded-lg`} />
            <div className="relative z-10 p-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{cure.icon}</span>
                <div>
                  <p className="text-[10px] text-gray-500">Cure #{cure.number}</p>
                  <p className={`text-sm font-medium ${colors.text}`}>{cure.title}</p>
                </div>
              </div>
              <p className="text-xs text-gray-300 mb-3">{cure.modern}</p>

              <button
                onClick={() => toggleComplete(cure.number)}
                className={`w-full py-2 rounded-lg text-xs border transition-all backdrop-blur-sm ${
                  completed.includes(cure.number)
                    ? 'bg-green-500/20 border-green-500/50 text-green-400'
                    : 'bg-white/[0.03] border-white/[0.1] text-gray-400 hover:bg-white/[0.05] hover:border-white/[0.15]'
                }`}
              >
                {completed.includes(cure.number) ? '✓ Practicing this' : 'Mark as practicing'}
              </button>
            </div>
          </motion.div>

          {/* Completion status */}
          <div className="text-center">
            <p className="text-xs text-gray-400">
              {completed.length}/7 cures adopted
            </p>
            {completed.length === 7 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs text-amber-400 mt-1"
              >
                🏆 Master of the Seven Cures!
              </motion.p>
            )}
          </div>

          <p className="text-[10px] text-gray-500 text-center">
            From "The Richest Man in Babylon" by George Clason
          </p>
        </div>
      </div>
    </div>
  );
}

export default SevenCures;
