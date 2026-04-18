import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Can't Hurt Me - The 40% Rule
export function FortyPercentRule() {
  const [perceivedLimit, setPerceivedLimit] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [phase, setPhase] = useState<'start' | 'quit' | 'push' | 'reserve'>('start');

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isRunning && perceivedLimit < 100) {
      interval = setInterval(() => {
        setPerceivedLimit((prev) => {
          const newVal = prev + 2;
          if (newVal >= 40 && phase === 'start') {
            setPhase('quit');
          }
          return newVal;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRunning, phase, perceivedLimit]);

  const handlePush = () => {
    setPhase('push');
    setIsRunning(true);
  };

  const reset = () => {
    setPerceivedLimit(0);
    setPhase('start');
    setIsRunning(false);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] via-transparent to-red-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-4">
          {/* The rule */}
          <div className="w-full max-w-xs relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm" />
            <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-lg" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
            <div className="relative z-10 p-4 text-center">
              <p className="text-xs text-gray-500 uppercase tracking-wide">The 40% Rule</p>
              <p className="text-lg text-gray-200 font-bold mt-2">
                When your mind says you're done...
              </p>
              <p className="text-2xl text-amber-400 font-bold">
                You're only at 40%
              </p>
            </div>
          </div>

          {/* Fuel gauge visualization */}
          <div className="relative w-full max-w-xs h-32">
            <svg viewBox="0 0 200 100" className="w-full h-full">
              {/* Background arc */}
              <path
                d="M 20 90 A 80 80 0 0 1 180 90"
                fill="none"
                stroke="var(--viz-grid-faint)"
                strokeWidth="12"
                strokeLinecap="round"
              />

              {/* 40% line */}
              <path
                d="M 20 90 A 80 80 0 0 1 92 22"
                fill="none"
                stroke="#ef4444"
                strokeWidth="12"
                strokeLinecap="round"
                opacity="0.5"
              />

              {/* Progress arc */}
              <motion.path
                d="M 20 90 A 80 80 0 0 1 180 90"
                fill="none"
                stroke={perceivedLimit < 40 ? '#22c55e' : perceivedLimit < 70 ? '#f59e0b' : '#ef4444'}
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray="251"
                animate={{ strokeDashoffset: 251 - (perceivedLimit / 100) * 251 }}
              />

              {/* 40% marker */}
              <text x="92" y="35" fill="#ef4444" fontSize="8" textAnchor="middle">
                40%
              </text>
              <text x="92" y="45" fill="#ef4444" fontSize="6" textAnchor="middle">
                QUIT SIGNAL
              </text>

              {/* Percentage */}
              <text x="100" y="80" fill="white" fontSize="20" fontWeight="bold" textAnchor="middle">
                {perceivedLimit}%
              </text>
            </svg>
          </div>

          {/* Status and controls */}
          <div className="w-full max-w-xs">
            {phase === 'start' && (
              <button
                onClick={() => setIsRunning(true)}
                className="w-full py-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm hover:bg-green-500/30 transition-colors"
              >
                Start the challenge
              </button>
            )}

            {phase === 'quit' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-3"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.15] to-red-500/[0.05] backdrop-blur-sm" />
                  <div className="absolute inset-0 border border-red-500/30 rounded-lg" />
                  <div className="relative z-10 p-3 text-center">
                    <p className="text-red-400 text-sm font-medium">Your mind says QUIT!</p>
                    <p className="text-[10px] text-gray-400 mt-1">
                      But you have 60% left in the tank...
                    </p>
                  </div>
                </div>
                <button
                  onClick={handlePush}
                  className="w-full py-3 bg-amber-500/20 border border-amber-500/30 rounded-lg text-amber-400 text-sm hover:bg-amber-500/30 transition-colors"
                >
                  PUSH THROUGH
                </button>
              </motion.div>
            )}

            {phase === 'push' && perceivedLimit < 100 && (
              <div className="relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.15] to-amber-500/[0.05] backdrop-blur-sm" />
                <div className="absolute inset-0 border border-amber-500/30 rounded-lg" />
                <div className="relative z-10 p-3 text-center">
                  <p className="text-amber-400 text-sm">Accessing reserves...</p>
                  <p className="text-[10px] text-gray-400">
                    This is where growth happens
                  </p>
                </div>
              </div>
            )}

            {perceivedLimit >= 100 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-3"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/[0.15] to-green-500/[0.05] backdrop-blur-sm" />
                  <div className="absolute inset-0 border border-green-500/30 rounded-lg" />
                  <div className="relative z-10 p-3 text-center">
                    <p className="text-green-400 text-sm font-medium">TRUE LIMIT REACHED</p>
                    <p className="text-[10px] text-gray-400 mt-1">
                      You went 60% beyond the quit signal!
                    </p>
                  </div>
                </div>
                <button
                  onClick={reset}
                  className="w-full py-2 bg-[var(--viz-tile)] border border-[var(--viz-border)] rounded-lg text-gray-400 text-xs hover:border-[var(--viz-border-light)] transition-colors"
                >
                  Reset
                </button>
              </motion.div>
            )}
          </div>

          <p className="text-[10px] text-gray-500 text-center">
            From "Can't Hurt Me" by David Goggins
          </p>
        </div>
      </div>
    </div>
  );
}

export default FortyPercentRule;
