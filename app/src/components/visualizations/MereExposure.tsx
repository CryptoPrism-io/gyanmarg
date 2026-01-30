import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Shape {
  id: string;
  symbol: string;
  exposures: number;
}

const initialShapes: Shape[] = [
  { id: 'a', symbol: '◆', exposures: 0 },
  { id: 'b', symbol: '▲', exposures: 0 },
  { id: 'c', symbol: '●', exposures: 0 },
  { id: 'd', symbol: '■', exposures: 0 },
];

export function MereExposure() {
  const [shapes, setShapes] = useState<Shape[]>(initialShapes);
  const [phase, setPhase] = useState<'exposure' | 'rating'>('exposure');
  const [currentExposure, setCurrentExposure] = useState<string | null>(null);
  const [exposureQueue, setExposureQueue] = useState<string[]>([]);
  const [ratings, setRatings] = useState<Record<string, number>>({});

  // Generate exposure sequence (some shapes shown more than others)
  const startExposure = () => {
    // Shape A: shown 12 times, B: 8 times, C: 4 times, D: 1 time
    const queue = [
      ...Array(12).fill('a'),
      ...Array(8).fill('b'),
      ...Array(4).fill('c'),
      ...Array(1).fill('d'),
    ].sort(() => Math.random() - 0.5);

    setExposureQueue(queue);
    setPhase('exposure');
    setRatings({});
    setShapes(initialShapes);
  };

  // Run exposure sequence
  useEffect(() => {
    if (exposureQueue.length === 0) {
      if (currentExposure !== null) {
        setCurrentExposure(null);
        setPhase('rating');
      }
      return;
    }

    const timer = setTimeout(() => {
      const nextId = exposureQueue[0];
      setCurrentExposure(nextId);
      setShapes(prev =>
        prev.map(s => (s.id === nextId ? { ...s, exposures: s.exposures + 1 } : s))
      );
      setExposureQueue(prev => prev.slice(1));
    }, 300);

    return () => clearTimeout(timer);
  }, [exposureQueue, currentExposure]);

  const rateShape = (id: string, rating: number) => {
    setRatings(prev => ({ ...prev, [id]: rating }));
  };

  const allRated = Object.keys(ratings).length === 4;

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Phase indicator */}
      <div className="flex gap-4">
        <div className={`text-xs ${phase === 'exposure' ? 'text-blue-400' : 'text-gray-600'}`}>
          1. Exposure Phase
        </div>
        <div className={`text-xs ${phase === 'rating' ? 'text-amber-400' : 'text-gray-600'}`}>
          2. Rating Phase
        </div>
      </div>

      {/* Exposure phase */}
      {phase === 'exposure' && exposureQueue.length > 0 && (
        <div className="h-32 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {currentExposure && (
              <motion.div
                key={currentExposure + shapes.find(s => s.id === currentExposure)?.exposures}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="text-6xl text-blue-400"
              >
                {shapes.find(s => s.id === currentExposure)?.symbol}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Start button */}
      {phase === 'exposure' && exposureQueue.length === 0 && currentExposure === null && (
        <div className="text-center">
          <button
            onClick={startExposure}
            className="px-4 py-2 bg-blue-500/10 border border-blue-500/30
                     text-blue-400 rounded-lg hover:bg-blue-500/20 transition-all text-sm"
          >
            Start experiment →
          </button>
          <p className="text-[10px] text-gray-500 mt-2">
            Watch the shapes flash by (takes ~10 seconds)
          </p>
        </div>
      )}

      {/* Rating phase */}
      {phase === 'rating' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-w-xs"
        >
          <p className="text-xs text-center text-gray-400 mb-4">
            Rate how much you <span className="text-amber-400">like</span> each shape (1-5)
          </p>

          <div className="space-y-3">
            {shapes.map(shape => (
              <div
                key={shape.id}
                className="flex items-center justify-between bg-[#111113] border border-gray-800 rounded-lg p-3"
              >
                <span className="text-2xl text-gray-300">{shape.symbol}</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(n => (
                    <button
                      key={n}
                      onClick={() => rateShape(shape.id, n)}
                      className={`w-8 h-8 rounded text-xs transition-all ${
                        ratings[shape.id] === n
                          ? 'bg-amber-500/20 border-amber-500/50 text-amber-400'
                          : 'bg-[#0A0A0B] border border-gray-700 text-gray-500 hover:border-gray-600'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Results */}
      {allRated && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-xs space-y-3"
        >
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3">
            <p className="text-[10px] text-amber-400 uppercase tracking-wide mb-2">Results</p>
            <div className="grid grid-cols-4 gap-2 text-center">
              {shapes.map(shape => (
                <div key={shape.id}>
                  <span className="text-lg">{shape.symbol}</span>
                  <p className="text-[10px] text-gray-500">Seen {shape.exposures}x</p>
                  <p className="text-xs text-amber-400">Rated {ratings[shape.id]}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#111113] border border-gray-800 rounded-lg p-3 text-center">
            <p className="text-xs text-gray-400">
              <span className="text-green-400 font-medium">Did you notice?</span> You likely
              rated shapes you saw <span className="text-amber-400">more frequently</span> higher!
              This happens unconsciously.
            </p>
          </div>

          <button
            onClick={startExposure}
            className="w-full text-xs text-gray-500 hover:text-gray-300 py-2"
          >
            ↻ Try again
          </button>
        </motion.div>
      )}

      {/* Explanation */}
      <div className="bg-[#111113] border border-gray-800 rounded-lg p-3 max-w-xs text-center">
        <p className="text-xs text-gray-400">
          <span className="text-blue-400 font-medium">The Mere Exposure Effect:</span>{' '}
          We prefer things simply because we've been exposed to them more often.
          Familiarity breeds liking.
        </p>
      </div>

      <p className="text-[10px] text-gray-500 text-center">
        Robert Zajonc (1968) • Explains advertising, music taste, attraction
      </p>
    </div>
  );
}

export default MereExposure;
