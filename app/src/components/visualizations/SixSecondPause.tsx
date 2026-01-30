import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Emotional Intelligence 2.0 - The 6-second pause
export function SixSecondPause() {
  const [isTriggered, setIsTriggered] = useState(false);
  const [isPausing, setIsPausing] = useState(false);
  const [countdown, setCountdown] = useState(6);
  const [response, setResponse] = useState<'reactive' | 'thoughtful' | null>(null);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPausing && countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsPausing(false);
      setResponse('thoughtful');
    }
    return () => clearInterval(interval);
  }, [isPausing, countdown]);

  const triggerEvent = () => {
    setIsTriggered(true);
    setResponse(null);
    setCountdown(6);
  };

  const reactImmediately = () => {
    setResponse('reactive');
    setIsTriggered(false);
  };

  const startPause = () => {
    setIsPausing(true);
  };

  const reset = () => {
    setIsTriggered(false);
    setIsPausing(false);
    setCountdown(6);
    setResponse(null);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Brain visualization */}
      <div className="relative w-32 h-32">
        <motion.div
          className={`absolute inset-0 rounded-full border-4 ${
            isTriggered && !isPausing
              ? 'border-red-500 bg-red-500/20'
              : isPausing
              ? 'border-amber-500 bg-amber-500/20'
              : response === 'thoughtful'
              ? 'border-green-500 bg-green-500/20'
              : 'border-gray-700 bg-gray-800'
          }`}
          animate={{
            scale: isTriggered && !isPausing ? [1, 1.05, 1] : 1,
          }}
          transition={{ repeat: isTriggered && !isPausing ? Infinity : 0, duration: 0.5 }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {!isTriggered && !response && <span className="text-3xl">🧠</span>}
          {isTriggered && !isPausing && <span className="text-3xl">😤</span>}
          {isPausing && (
            <motion.span
              className="text-4xl font-bold text-amber-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {countdown}
            </motion.span>
          )}
          {response === 'reactive' && <span className="text-3xl">😬</span>}
          {response === 'thoughtful' && <span className="text-3xl">😌</span>}
        </div>
      </div>

      {/* Status text */}
      <div className="text-center h-12">
        {!isTriggered && !response && (
          <p className="text-xs text-gray-400">Click below to simulate an emotional trigger</p>
        )}
        {isTriggered && !isPausing && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-red-400"
          >
            ⚡ Emotional trigger! Amygdala hijack in progress...
          </motion.p>
        )}
        {isPausing && (
          <p className="text-xs text-amber-400">
            Pausing... letting the rational brain catch up
          </p>
        )}
        {response === 'reactive' && (
          <p className="text-xs text-red-400">
            😬 Reacted without thinking. Likely to regret this.
          </p>
        )}
        {response === 'thoughtful' && (
          <p className="text-xs text-green-400">
            ✓ Rational brain engaged. Thoughtful response ready.
          </p>
        )}
      </div>

      {/* Controls */}
      <div className="w-full max-w-xs space-y-2">
        {!isTriggered && !response && (
          <button
            onClick={triggerEvent}
            className="w-full py-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm hover:bg-red-500/30"
          >
            🎯 Trigger Emotional Event
          </button>
        )}

        {isTriggered && !isPausing && (
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={reactImmediately}
              className="py-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-xs hover:bg-red-500/30"
            >
              React Now! 😤
            </button>
            <button
              onClick={startPause}
              className="py-3 bg-amber-500/20 border border-amber-500/50 rounded-lg text-amber-400 text-xs hover:bg-amber-500/30"
            >
              Pause 6 sec ⏸️
            </button>
          </div>
        )}

        {response && (
          <button
            onClick={reset}
            className="w-full py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-400 text-xs"
          >
            Try Again
          </button>
        )}
      </div>

      {/* Explanation */}
      <div className="w-full max-w-xs bg-[#111113] border border-gray-800 rounded-lg p-3">
        <p className="text-[10px] text-gray-400 text-center">
          <span className="text-amber-400">Why 6 seconds?</span> It takes about 6 seconds for
          chemicals from an emotional reaction to be processed. Pausing lets your rational
          prefrontal cortex catch up.
        </p>
      </div>

      <p className="text-[10px] text-gray-500 text-center">
        From "Emotional Intelligence 2.0" by Travis Bradberry
      </p>
    </div>
  );
}

export default SixSecondPause;
