import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Phase = 'idle' | 'breathing' | 'focusing' | 'wandering' | 'returning';

const brainRegions = [
  { name: 'Prefrontal Cortex', benefit: 'Better focus & decision making', color: '#3B82F6' },
  { name: 'Amygdala', benefit: 'Reduced anxiety & fear response', color: '#EF4444' },
  { name: 'Hippocampus', benefit: 'Improved memory formation', color: '#22C55E' },
  { name: 'Default Mode Network', benefit: 'Less mind wandering', color: '#8B5CF6' },
];

export function MindfulnessMeditation() {
  const [phase, setPhase] = useState<Phase>('idle');
  const [timer, setTimer] = useState(0);
  const [breathCycle, setBreathCycle] = useState(0);
  const [totalMinutes, setTotalMinutes] = useState(5);
  const [showBenefits, setShowBenefits] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (phase !== 'idle') {
      intervalRef.current = window.setInterval(() => {
        setTimer((prev) => {
          if (prev >= totalMinutes * 60) {
            setPhase('idle');
            return 0;
          }
          return prev + 1;
        });

        // Simulate breath cycles
        setBreathCycle((prev) => (prev + 1) % 8);

        // Occasionally simulate mind wandering
        if (Math.random() < 0.03 && phase === 'focusing') {
          setPhase('wandering');
          setTimeout(() => setPhase('returning'), 2000);
          setTimeout(() => setPhase('focusing'), 4000);
        }
      }, 1000);

      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [phase, totalMinutes]);

  const startMeditation = () => {
    setPhase('breathing');
    setTimer(0);
    setTimeout(() => setPhase('focusing'), 10000);
  };

  const stopMeditation = () => {
    setPhase('idle');
    setTimer(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Breathing animation based on cycle
  const breathScale = 1 + Math.sin((breathCycle / 8) * Math.PI * 2) * 0.15;

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.03] via-transparent to-blue-500/[0.02]" />
      <div className="absolute inset-0 border border-white/[0.1] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-5">
          {/* Title */}
          <div className="text-center">
            <h3 className="text-sm font-bold text-purple-400">Mindfulness Meditation</h3>
            <p className="text-[10px] text-gray-500">Train your attention, change your brain</p>
          </div>

          {/* Duration selector (only when idle) */}
          {phase === 'idle' && (
            <div className="flex gap-2">
              {[3, 5, 10, 15].map((mins) => (
                <button
                  key={mins}
                  onClick={() => setTotalMinutes(mins)}
                  className={`w-12 h-12 rounded-lg text-xs font-bold backdrop-blur-sm transition-all ${
                    totalMinutes === mins
                      ? 'bg-purple-500/80 text-white border border-purple-400/50'
                      : 'bg-white/[0.05] border border-white/[0.1] text-gray-400 hover:bg-white/[0.08]'
                  }`}
                >
                  {mins}m
                </button>
              ))}
            </div>
          )}

          {/* Main visualization */}
          <div className="relative w-52 h-52">
            {/* Breathing circle */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-purple-500/30 backdrop-blur-sm"
              animate={{
                scale: phase !== 'idle' ? breathScale : 1,
                borderColor: phase === 'wandering' ? '#EF4444' : phase === 'returning' ? '#F59E0B' : '#8B5CF6',
              }}
              transition={{ duration: 0.5 }}
            />

            {/* Inner focus point */}
            <motion.div
              className="absolute inset-8 rounded-full bg-purple-500/[0.08] backdrop-blur-sm flex items-center justify-center"
              animate={{
                scale: phase !== 'idle' ? breathScale * 0.9 : 1,
              }}
            >
              <AnimatePresence mode="wait">
                {phase === 'idle' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center"
                  >
                    <p className="text-3xl">Meditate</p>
                    <p className="text-xs text-gray-400 mt-2">Ready to begin</p>
                  </motion.div>
                )}

                {phase === 'breathing' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center"
                  >
                    <p className="text-2xl">Breathe</p>
                    <p className="text-xs text-purple-400 mt-2">
                      {breathCycle < 4 ? 'Breathe in...' : 'Breathe out...'}
                    </p>
                  </motion.div>
                )}

                {phase === 'focusing' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center"
                  >
                    <motion.div
                      className="w-4 h-4 bg-purple-400 rounded-full mx-auto"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <p className="text-xs text-purple-400 mt-3">Focus on breath</p>
                  </motion.div>
                )}

                {phase === 'wandering' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center"
                  >
                    <p className="text-2xl">Wandering</p>
                    <p className="text-xs text-red-400 mt-2">Mind wandered...</p>
                  </motion.div>
                )}

                {phase === 'returning' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center"
                  >
                    <p className="text-2xl">Return</p>
                    <p className="text-xs text-amber-400 mt-2">Gently return</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Timer */}
            {phase !== 'idle' && (
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/[0.1]">
                <p className="text-sm font-mono text-purple-400">{formatTime(timer)}</p>
              </div>
            )}
          </div>

          {/* Progress bar */}
          {phase !== 'idle' && (
            <div className="w-full max-w-xs">
              <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-purple-500 rounded-full"
                  animate={{ width: `${(timer / (totalMinutes * 60)) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                <span>0:00</span>
                <span>{totalMinutes}:00</span>
              </div>
            </div>
          )}

          {/* Controls */}
          <div className="flex gap-2">
            {phase === 'idle' ? (
              <motion.button
                onClick={startMeditation}
                className="relative overflow-hidden px-5 py-3 rounded-xl text-xs font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-purple-500/[0.1] backdrop-blur-sm" />
                <div className="absolute inset-0 border border-purple-500/30 rounded-xl" />
                <span className="relative text-purple-400">Begin Meditation</span>
              </motion.button>
            ) : (
              <button
                onClick={stopMeditation}
                className="relative overflow-hidden px-5 py-3 rounded-xl text-xs font-semibold"
              >
                <div className="absolute inset-0 bg-red-500/[0.1] backdrop-blur-sm" />
                <div className="absolute inset-0 border border-red-500/30 rounded-xl" />
                <span className="relative text-red-400">End Session</span>
              </button>
            )}
          </div>

          {/* The process */}
          <div className="relative w-full max-w-xs overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm" />
            <div className="absolute inset-0 border border-white/[0.08] rounded-xl" />
            <div className="relative p-3">
              <p className="text-[10px] text-gray-500 mb-2">The meditation loop:</p>
              <div className="flex items-center justify-between text-[10px]">
                <div className="text-center">
                  <span className="text-purple-400">Focus</span>
                  <p className="text-gray-600">-</p>
                </div>
                <div className="text-center">
                  <span className="text-red-400">Wander</span>
                  <p className="text-gray-600">-</p>
                </div>
                <div className="text-center">
                  <span className="text-amber-400">Notice</span>
                  <p className="text-gray-600">-</p>
                </div>
                <div className="text-center">
                  <span className="text-green-400">Return</span>
                  <p className="text-gray-600">-</p>
                </div>
                <div className="text-center">
                  <span className="text-purple-400">Focus</span>
                </div>
              </div>
            </div>
          </div>

          {/* Brain benefits toggle */}
          <button
            onClick={() => setShowBenefits(!showBenefits)}
            className="text-xs text-gray-500 hover:text-gray-300"
          >
            {showBenefits ? 'Hide' : 'Show'} brain changes
          </button>

          <AnimatePresence>
            {showBenefits && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="w-full max-w-xs grid grid-cols-2 gap-2"
              >
                {brainRegions.map((region, i) => (
                  <motion.div
                    key={region.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative overflow-hidden rounded-lg"
                  >
                    <div
                      className="absolute inset-0 backdrop-blur-sm"
                      style={{ backgroundColor: region.color + '10' }}
                    />
                    <div
                      className="absolute inset-0 border rounded-lg"
                      style={{ borderColor: region.color + '30' }}
                    />
                    <div className="relative p-2">
                      <p className="text-[10px] font-medium" style={{ color: region.color }}>
                        {region.name}
                      </p>
                      <p className="text-[9px] text-gray-400">{region.benefit}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Key insight */}
          <div className="relative max-w-xs overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm" />
            <div className="absolute inset-0 border border-white/[0.08] rounded-xl" />
            <div className="relative p-4">
              <p className="text-xs text-gray-400 leading-relaxed">
                <span className="text-purple-400 font-medium">Jon Kabat-Zinn:</span> "Mindfulness means
                paying attention in a particular way: on purpose, in the present moment, and
                non-judgmentally. Each return to the breath is a bicep curl for your attention."
              </p>
            </div>
          </div>

          <p className="text-[10px] text-gray-600">From 10% Happier & Wherever You Go, There You Are</p>
        </div>
      </div>
    </div>
  );
}

export default MindfulnessMeditation;
