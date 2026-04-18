import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Crush It - Patience + Hustle (Macro Patience, Micro Speed)
export function PatienceHustle() {
  const [timeframe, setTimeframe] = useState<'micro' | 'macro'>('micro');
  const [dayCount, setDayCount] = useState(1);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning && dayCount < 365) {
      const timer = setTimeout(() => {
        setDayCount((d) => d + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
    if (dayCount >= 365) {
      setIsRunning(false);
    }
  }, [isRunning, dayCount]);

  const microActions = [
    'Reply to every comment - TODAY',
    'Post 3 pieces of content - TODAY',
    'DM 10 potential partners - TODAY',
    'Learn one new skill - TODAY',
    'Ship that feature - TODAY',
  ];

  const macroMindset = [
    'Success takes 3-5+ years',
    'Compounding is invisible at first',
    'Most quit before results show',
    'Your 1000th post matters more than your 1st',
    'The journey IS the destination',
  ];

  const getCompoundValue = (days: number) => {
    // 1% daily improvement compounded
    return Math.pow(1.01, days).toFixed(1);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-red-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-4">
          {/* Header */}
          <div className="text-center">
            <p className="text-xs text-[var(--viz-muted)]">
              The winning formula:
            </p>
            <p className="text-sm font-medium">
              <span className="text-blue-400">Macro Patience</span>
              {' + '}
              <span className="text-red-400">Micro Speed</span>
            </p>
          </div>

          {/* Toggle */}
          <div className="relative overflow-hidden rounded-lg p-1">
            <div className="absolute inset-0 bg-[var(--viz-tile)] backdrop-blur-sm" />
            <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg" />
            <div className="relative z-10 flex">
              <button
                onClick={() => setTimeframe('micro')}
                className={`px-4 py-2 rounded-lg text-xs transition-all ${
                  timeframe === 'micro' ? 'bg-red-500/20 text-red-400' : 'text-[var(--viz-muted)]'
                }`}
              >
                Micro (Today)
              </button>
              <button
                onClick={() => setTimeframe('macro')}
                className={`px-4 py-2 rounded-lg text-xs transition-all ${
                  timeframe === 'macro' ? 'bg-blue-500/20 text-blue-400' : 'text-[var(--viz-muted)]'
                }`}
              >
                Macro (Years)
              </button>
            </div>
          </div>

          {timeframe === 'micro' ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full max-w-xs space-y-3"
            >
              <div className="relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-red-500/10 backdrop-blur-sm" />
                <div className="absolute inset-0 border border-red-500/30 rounded-lg" />
                <div className="relative z-10 p-3">
                  <p className="text-xs text-red-400 font-medium mb-2">MICRO SPEED</p>
                  <p className="text-[10px] text-[var(--viz-muted)]">
                    Execute with urgency. Every day counts. Move fast.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                {microActions.map((action, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden rounded-lg"
                  >
                    <div className="absolute inset-0 bg-[var(--viz-tile)] backdrop-blur-sm" />
                    <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg" />
                    <div className="relative z-10 flex items-center gap-2 p-2">
                      <span className="text-red-400">⚡</span>
                      <span className="text-xs text-[var(--viz-secondary)]">{action}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full max-w-xs space-y-3"
            >
              <div className="relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-sm" />
                <div className="absolute inset-0 border border-blue-500/30 rounded-lg" />
                <div className="relative z-10 p-3">
                  <p className="text-xs text-blue-400 font-medium mb-2">MACRO PATIENCE</p>
                  <p className="text-[10px] text-[var(--viz-muted)]">
                    Think in decades. Results compound over time. Stay the course.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                {macroMindset.map((mindset, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden rounded-lg"
                  >
                    <div className="absolute inset-0 bg-[var(--viz-tile)] backdrop-blur-sm" />
                    <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg" />
                    <div className="relative z-10 flex items-center gap-2 p-2">
                      <span className="text-blue-400">∞</span>
                      <span className="text-xs text-[var(--viz-secondary)]">{mindset}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Compound simulation */}
          <div className="w-full max-w-xs relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-[var(--viz-tile)] backdrop-blur-sm" />
            <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <div className="relative z-10 p-4">
              <p className="text-xs text-[var(--viz-muted)] mb-2 text-center">
                1% better every day for one year:
              </p>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] text-[var(--viz-muted)]">Day {dayCount}</span>
                <span className="text-lg font-bold text-green-400">{getCompoundValue(dayCount)}x</span>
              </div>
              <div className="h-2 bg-[var(--viz-inner)] rounded-full overflow-hidden mb-2">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-500 to-blue-500"
                  style={{ width: `${(dayCount / 365) * 100}%` }}
                />
              </div>
              <div className="flex justify-center gap-2">
                <button
                  onClick={() => { setDayCount(1); setIsRunning(true); }}
                  className="px-3 py-1 bg-green-500/20 border border-green-500/50 rounded text-[10px] text-green-400 backdrop-blur-sm hover:bg-green-500/25 transition-all"
                >
                  {isRunning ? 'Running...' : 'Simulate Year'}
                </button>
                <button
                  onClick={() => { setIsRunning(false); setDayCount(1); }}
                  className="px-3 py-1 bg-[var(--viz-tile)] border border-[var(--viz-border-light)] rounded text-[10px] text-[var(--viz-muted)] backdrop-blur-sm hover:bg-[var(--viz-tile-md)] transition-all"
                >
                  Reset
                </button>
              </div>
              <p className="text-[10px] text-[var(--viz-muted)] text-center mt-2">
                1% daily = 37x improvement in one year
              </p>
            </div>
          </div>

          <p className="text-[10px] text-[var(--viz-muted)] text-center">
            From "Crushing It!" by Gary Vaynerchuk
          </p>
        </div>
      </div>
    </div>
  );
}

export default PatienceHustle;
