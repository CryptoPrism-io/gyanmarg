import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface Event {
  id: string;
  label: string;
  impact: number;
}

const events: Event[] = [
  { id: 'raise', label: 'Got a raise! 💰', impact: 30 },
  { id: 'new-car', label: 'New car! 🚗', impact: 25 },
  { id: 'promotion', label: 'Big promotion! 📈', impact: 35 },
  { id: 'vacation', label: 'Dream vacation! ✈️', impact: 20 },
];

const BASELINE = 50;

export function HedonicTreadmill() {
  const [happiness, setHappiness] = useState(BASELINE);
  const [lastEvent, setLastEvent] = useState<string | null>(null);
  const [isAdapting, setIsAdapting] = useState(false);
  const timerRef = useRef<number | null>(null);

  const startAdaptation = useCallback((startValue: number) => {
    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    setIsAdapting(true);
    let currentValue = startValue;

    timerRef.current = window.setInterval(() => {
      const diff = BASELINE - currentValue;

      if (Math.abs(diff) < 1) {
        // Reached baseline
        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
        setHappiness(BASELINE);
        setIsAdapting(false);
        setLastEvent(null);
      } else {
        // Move toward baseline
        currentValue = currentValue + diff * 0.08;
        setHappiness(currentValue);
      }
    }, 150);
  }, []);

  const triggerEvent = (event: Event) => {
    // Clear any existing adaptation
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    const newHappiness = Math.min(100, happiness + event.impact);
    setHappiness(newHappiness);
    setLastEvent(event.label);
    setIsAdapting(false);

    // Start adaptation after a brief pause to show the spike
    setTimeout(() => {
      startAdaptation(newHappiness);
    }, 500);
  };

  const resetDemo = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setHappiness(BASELINE);
    setLastEvent(null);
    setIsAdapting(false);
  };

  const getHappinessColor = () => {
    if (happiness > 70) return '#22C55E';
    if (happiness > 40) return '#F59E0B';
    return '#EF4444';
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Happiness meter */}
      <div className="w-full max-w-xs">
        <div className="flex justify-between text-[10px] text-gray-500 mb-2">
          <span>😢 Unhappy</span>
          <span>😊 Happy</span>
        </div>

        <div className="relative">
          {/* Progress bar */}
          <div className="h-6 bg-[#111113] rounded-full border border-gray-800 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: getHappinessColor() }}
              animate={{ width: `${happiness}%` }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            />
          </div>

          {/* Baseline marker */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white/30"
            style={{ left: `${BASELINE}%` }}
          />

          {/* Percentage label */}
          <div className="absolute -bottom-6 left-0 right-0 flex justify-center">
            <span
              className="text-sm font-bold transition-colors"
              style={{ color: getHappinessColor() }}
            >
              {Math.round(happiness)}%
            </span>
          </div>
        </div>

        {/* Baseline label */}
        <div className="text-center mt-8 mb-2">
          <span className="text-[10px] text-gray-500">↑ Baseline (50%)</span>
        </div>
      </div>

      {/* Current event display */}
      <div className="h-12 flex items-center justify-center">
        {lastEvent ? (
          <motion.div
            key={lastEvent}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-sm text-amber-400">{lastEvent}</span>
            {isAdapting && (
              <motion.p
                className="text-[10px] text-gray-500 mt-1"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                Adapting back to baseline...
              </motion.p>
            )}
          </motion.div>
        ) : (
          <p className="text-xs text-gray-600">Click an event to see the effect</p>
        )}
      </div>

      {/* Event buttons */}
      <div className="grid grid-cols-2 gap-2 w-full max-w-xs">
        {events.map((event) => (
          <motion.button
            key={event.id}
            onClick={() => triggerEvent(event)}
            className="p-3 bg-[#111113] border border-gray-800 rounded-lg text-xs
                     hover:border-green-500/30 hover:bg-green-500/5 transition-all"
            whileTap={{ scale: 0.95 }}
          >
            {event.label}
          </motion.button>
        ))}
      </div>

      {/* Reset button */}
      {happiness !== BASELINE && (
        <button
          onClick={resetDemo}
          className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
        >
          ↻ Reset
        </button>
      )}

      {/* Explanation */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 max-w-xs">
        <p className="text-xs text-gray-300 text-center">
          <span className="text-amber-400 font-medium">Watch:</span> No matter what
          good things happen, happiness returns to baseline. This is why more money,
          stuff, or success rarely leads to lasting happiness.
        </p>
      </div>

      {/* Key insight */}
      <div className="bg-[#111113] border border-gray-800 rounded-lg p-3 max-w-xs text-center">
        <p className="text-xs text-gray-400">
          <span className="text-green-400 font-medium">Solution:</span> Focus on
          experiences, relationships, and purpose—things that raise your
          <span className="text-amber-400"> baseline</span>, not temporary spikes.
        </p>
      </div>

      <p className="text-[10px] text-gray-500 text-center">
        Research by Brickman & Campbell
      </p>
    </div>
  );
}

export default HedonicTreadmill;
