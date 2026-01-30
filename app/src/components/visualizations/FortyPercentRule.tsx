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
    <div className="flex flex-col items-center gap-4">
      {/* The rule */}
      <div className="w-full max-w-xs bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-4 text-center">
        <p className="text-xs text-gray-500 uppercase tracking-wide">The 40% Rule</p>
        <p className="text-lg text-gray-200 font-bold mt-2">
          When your mind says you're done...
        </p>
        <p className="text-2xl text-amber-400 font-bold">
          You're only at 40%
        </p>
      </div>

      {/* Fuel gauge visualization */}
      <div className="relative w-full max-w-xs h-32">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          {/* Background arc */}
          <path
            d="M 20 90 A 80 80 0 0 1 180 90"
            fill="none"
            stroke="#1f2937"
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
            className="w-full py-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm hover:bg-green-500/30"
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
            <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-center">
              <p className="text-red-400 text-sm font-medium">Your mind says QUIT!</p>
              <p className="text-[10px] text-gray-400 mt-1">
                But you have 60% left in the tank...
              </p>
            </div>
            <button
              onClick={handlePush}
              className="w-full py-3 bg-amber-500/20 border border-amber-500/50 rounded-lg text-amber-400 text-sm hover:bg-amber-500/30"
            >
              PUSH THROUGH 💪
            </button>
          </motion.div>
        )}

        {phase === 'push' && perceivedLimit < 100 && (
          <div className="bg-amber-500/20 border border-amber-500/50 rounded-lg p-3 text-center">
            <p className="text-amber-400 text-sm">Accessing reserves...</p>
            <p className="text-[10px] text-gray-400">
              This is where growth happens
            </p>
          </div>
        )}

        {perceivedLimit >= 100 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-3"
          >
            <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-3 text-center">
              <p className="text-green-400 text-sm font-medium">TRUE LIMIT REACHED</p>
              <p className="text-[10px] text-gray-400 mt-1">
                You went 60% beyond the quit signal!
              </p>
            </div>
            <button
              onClick={reset}
              className="w-full py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-400 text-xs"
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
  );
}

export default FortyPercentRule;
