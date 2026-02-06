import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye } from 'lucide-react';

interface Shape {
  id: string;
  symbol: string;
  exposures: number;
}

const initialShapes: Shape[] = [
  { id: 'a', symbol: '*', exposures: 0 },
  { id: 'b', symbol: '^', exposures: 0 },
  { id: 'c', symbol: 'o', exposures: 0 },
  { id: 'd', symbol: '#', exposures: 0 },
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
    <div className="relative overflow-hidden rounded-2xl">
      {/* Dark Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-purple-500/[0.02]" />
      <div className="absolute inset-0 border border-white/[0.1] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center border border-blue-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
            <Eye className="w-4 h-4 text-blue-400" />
          </div>
          <span className="text-sm font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Mere Exposure Effect
          </span>
        </div>

        <div className="flex flex-col items-center gap-4">
          {/* Phase indicator */}
          <div className="flex gap-4">
            <div className={`text-xs ${phase === 'exposure' ? 'text-blue-400' : 'text-white/40'}`}>
              1. Exposure Phase
            </div>
            <div className={`text-xs ${phase === 'rating' ? 'text-amber-400' : 'text-white/40'}`}>
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
                         text-blue-400 rounded-lg hover:bg-blue-500/20 transition-all text-sm backdrop-blur-sm"
              >
                Start experiment
              </button>
              <p className="text-[10px] text-white/50 mt-2">
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
              <p className="text-xs text-center text-white/60 mb-4">
                Rate how much you <span className="text-amber-400">like</span> each shape (1-5)
              </p>

              <div className="space-y-3">
                {shapes.map(shape => (
                  <div
                    key={shape.id}
                    className="relative overflow-hidden flex items-center justify-between rounded-xl p-3 border border-white/[0.08]"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                    }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                    <span className="text-2xl text-white/80">{shape.symbol}</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(n => (
                        <button
                          key={n}
                          onClick={() => rateShape(shape.id, n)}
                          className={`w-8 h-8 rounded text-xs transition-all border ${
                            ratings[shape.id] === n
                              ? 'bg-amber-500/20 border-amber-500/50 text-amber-400'
                              : 'border-white/10 text-white/50 hover:border-white/20'
                          }`}
                          style={{
                            background: ratings[shape.id] !== n
                              ? 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.1) 100%)'
                              : undefined,
                          }}
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
              <div
                className="relative overflow-hidden rounded-xl p-3 border border-amber-500/30"
                style={{
                  background: 'linear-gradient(135deg, rgba(245,158,11,0.1) 0%, rgba(245,158,11,0.03) 100%)',
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
                <p className="text-[10px] text-amber-400 uppercase tracking-wide mb-2">Results</p>
                <div className="grid grid-cols-4 gap-2 text-center">
                  {shapes.map(shape => (
                    <div key={shape.id}>
                      <span className="text-lg">{shape.symbol}</span>
                      <p className="text-[10px] text-white/50">Seen {shape.exposures}x</p>
                      <p className="text-xs text-amber-400">Rated {ratings[shape.id]}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="relative overflow-hidden rounded-xl p-3 text-center border border-white/[0.08]"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <p className="text-xs text-white/60">
                  <span className="text-green-400 font-medium">Did you notice?</span> You likely
                  rated shapes you saw <span className="text-amber-400">more frequently</span> higher!
                  This happens unconsciously.
                </p>
              </div>

              <button
                onClick={startExposure}
                className="w-full text-xs text-white/50 hover:text-white/70 py-2 transition-colors"
              >
                ~ Try again
              </button>
            </motion.div>
          )}

          {/* Explanation */}
          <div
            className="relative overflow-hidden rounded-xl p-3 max-w-xs text-center border border-white/[0.08]"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="text-xs text-white/60">
              <span className="text-blue-400 font-medium">The Mere Exposure Effect:</span>{' '}
              We prefer things simply because we've been exposed to them more often.
              Familiarity breeds liking.
            </p>
          </div>

          <p className="text-[10px] text-white/50 text-center">
            Robert Zajonc (1968) - Explains advertising, music taste, attraction
          </p>
        </div>
      </div>
    </div>
  );
}

export default MereExposure;
