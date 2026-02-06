import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Phase = 'breathing' | 'retention' | 'recovery' | 'complete';

interface Round {
  breaths: number;
  retention: number;
}

export function WimHofMethod() {
  const [phase, setPhase] = useState<Phase>('breathing');
  const [isActive, setIsActive] = useState(false);
  const [breathCount, setBreathCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [round, setRound] = useState(1);
  const [rounds, setRounds] = useState<Round[]>([]);
  const [showGuide, setShowGuide] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const targetBreaths = 30;
  const maxRounds = 3;

  useEffect(() => {
    if (!isActive) return;

    if (phase === 'breathing') {
      // Breathing rhythm: ~2 seconds per breath
      intervalRef.current = window.setInterval(() => {
        setBreathCount((prev) => {
          if (prev >= targetBreaths) {
            setPhase('retention');
            setTimer(0);
            return prev;
          }
          return prev + 1;
        });
      }, 2000);
    } else if (phase === 'retention') {
      // Count up for retention
      intervalRef.current = window.setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else if (phase === 'recovery') {
      // 15 second recovery breath
      setTimer(15);
      intervalRef.current = window.setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            finishRound();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isActive, phase]);

  const startRetentionRelease = () => {
    if (phase === 'retention') {
      setRounds((prev) => [...prev, { breaths: breathCount, retention: timer }]);
      setPhase('recovery');
    }
  };

  const finishRound = () => {
    if (round >= maxRounds) {
      setPhase('complete');
      setIsActive(false);
    } else {
      setRound((r) => r + 1);
      setBreathCount(0);
      setTimer(0);
      setPhase('breathing');
    }
  };

  const reset = () => {
    setIsActive(false);
    setPhase('breathing');
    setBreathCount(0);
    setTimer(0);
    setRound(1);
    setRounds([]);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] via-transparent to-purple-500/[0.02]" />
      <div className="absolute inset-0 border border-white/[0.1] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-5">
          {/* Title */}
          <div className="text-center">
            <h3 className="text-sm font-bold text-cyan-400">Wim Hof Method</h3>
            <p className="text-[10px] text-gray-500">Supercharge your body with breath</p>
          </div>

          {/* Round indicator */}
          <div className="flex gap-3">
            {[1, 2, 3].map((r) => (
              <div
                key={r}
                className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all backdrop-blur-sm ${
                  round === r && phase !== 'complete'
                    ? 'border-cyan-400 bg-cyan-400/20'
                    : r < round || phase === 'complete'
                    ? 'border-green-500 bg-green-500/20'
                    : 'border-white/[0.1] bg-white/[0.03]'
                }`}
              >
                {r < round || phase === 'complete' ? (
                  <span className="text-green-400">ok</span>
                ) : (
                  <span className={round === r ? 'text-cyan-400' : 'text-gray-500'}>{r}</span>
                )}
              </div>
            ))}
          </div>

          {/* Main visualization */}
          <div className="relative w-52 h-52">
            <AnimatePresence mode="wait">
              {phase === 'breathing' && (
                <motion.div
                  key="breathing"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <motion.div
                    className="w-40 h-40 rounded-full border-4 border-cyan-400 flex items-center justify-center backdrop-blur-sm bg-cyan-500/[0.05]"
                    animate={isActive ? {
                      scale: [1, 1.2, 1],
                      borderColor: ['#22D3EE', '#06B6D4', '#22D3EE'],
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="text-center">
                      <p className="text-4xl font-bold text-cyan-400">{breathCount}</p>
                      <p className="text-[10px] text-gray-500">/{targetBreaths} breaths</p>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {phase === 'retention' && (
                <motion.div
                  key="retention"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <motion.div
                    className="w-40 h-40 rounded-full border-4 border-purple-500 flex items-center justify-center backdrop-blur-sm bg-purple-500/10"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(168, 85, 247, 0.3)',
                        '0 0 40px rgba(168, 85, 247, 0.5)',
                        '0 0 20px rgba(168, 85, 247, 0.3)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="text-center">
                      <p className="text-4xl font-bold text-purple-400">{formatTime(timer)}</p>
                      <p className="text-[10px] text-gray-500">HOLD</p>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {phase === 'recovery' && (
                <motion.div
                  key="recovery"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <motion.div
                    className="w-40 h-40 rounded-full border-4 border-green-500 flex items-center justify-center backdrop-blur-sm bg-green-500/10"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <div className="text-center">
                      <p className="text-4xl font-bold text-green-400">{timer}</p>
                      <p className="text-[10px] text-gray-500">RECOVERY BREATH</p>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {phase === 'complete' && (
                <motion.div
                  key="complete"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-40 h-40 rounded-full border-4 border-green-500 flex items-center justify-center backdrop-blur-sm bg-green-500/20">
                    <div className="text-center">
                      <p className="text-4xl">Complete</p>
                      <p className="text-sm font-bold text-green-400">Well done!</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Phase instructions */}
          <div className="text-center">
            <p className="text-sm font-medium text-gray-300">
              {phase === 'breathing' && 'Breathe deeply - inhale through nose, exhale through mouth'}
              {phase === 'retention' && 'Hold after exhale - let go of air and hold'}
              {phase === 'recovery' && 'Deep breath in - hold for 15 seconds'}
              {phase === 'complete' && 'Well done! You completed 3 rounds'}
            </p>
          </div>

          {/* Controls */}
          <div className="flex gap-2">
            {!isActive && phase === 'breathing' && (
              <motion.button
                onClick={() => setIsActive(true)}
                className="relative overflow-hidden px-5 py-3 rounded-xl text-xs font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-cyan-500/[0.1] backdrop-blur-sm" />
                <div className="absolute inset-0 border border-cyan-500/30 rounded-xl" />
                <span className="relative text-cyan-400">Start Round {round}</span>
              </motion.button>
            )}

            {phase === 'retention' && (
              <motion.button
                onClick={startRetentionRelease}
                className="relative overflow-hidden px-5 py-3 rounded-xl text-xs font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-green-500/[0.1] backdrop-blur-sm" />
                <div className="absolute inset-0 border border-green-500/30 rounded-xl" />
                <span className="relative text-green-400">Release Breath</span>
              </motion.button>
            )}

            {(rounds.length > 0 || breathCount > 0) && phase !== 'complete' && (
              <button
                onClick={reset}
                className="px-4 py-3 bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] text-gray-400 rounded-xl text-xs hover:bg-white/[0.08]"
              >
                Reset
              </button>
            )}

            {phase === 'complete' && (
              <button
                onClick={reset}
                className="relative overflow-hidden px-5 py-3 rounded-xl text-xs font-semibold"
              >
                <div className="absolute inset-0 bg-cyan-500/[0.1] backdrop-blur-sm" />
                <div className="absolute inset-0 border border-cyan-500/30 rounded-xl" />
                <span className="relative text-cyan-400">Start New Session</span>
              </button>
            )}
          </div>

          {/* Results */}
          {rounds.length > 0 && (
            <div className="w-full max-w-xs">
              <p className="text-[10px] text-gray-500 mb-2">Your retention times:</p>
              <div className="flex gap-2">
                {rounds.map((r, i) => (
                  <div
                    key={i}
                    className="relative flex-1 overflow-hidden rounded-lg"
                  >
                    <div className="absolute inset-0 bg-purple-500/[0.08] backdrop-blur-sm" />
                    <div className="absolute inset-0 border border-purple-500/20 rounded-lg" />
                    <div className="relative p-2 text-center">
                      <p className="text-lg font-bold text-purple-400">{formatTime(r.retention)}</p>
                      <p className="text-[9px] text-gray-500">Round {i + 1}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Guide toggle */}
          <button
            onClick={() => setShowGuide(!showGuide)}
            className="text-xs text-gray-500 hover:text-gray-300"
          >
            {showGuide ? 'Hide' : 'Show'} method guide
          </button>

          <AnimatePresence>
            {showGuide && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="w-full max-w-xs space-y-2"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-cyan-500/[0.08] backdrop-blur-sm" />
                  <div className="absolute inset-0 border border-cyan-500/20 rounded-lg" />
                  <div className="relative p-2">
                    <p className="text-[10px] text-cyan-400 font-medium">Step 1: Power Breathing</p>
                    <p className="text-[9px] text-gray-400">30 deep breaths - fully in, let go</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-purple-500/[0.08] backdrop-blur-sm" />
                  <div className="absolute inset-0 border border-purple-500/20 rounded-lg" />
                  <div className="relative p-2">
                    <p className="text-[10px] text-purple-400 font-medium">Step 2: Retention</p>
                    <p className="text-[9px] text-gray-400">Hold after exhale as long as comfortable</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-green-500/[0.08] backdrop-blur-sm" />
                  <div className="absolute inset-0 border border-green-500/20 rounded-lg" />
                  <div className="relative p-2">
                    <p className="text-[10px] text-green-400 font-medium">Step 3: Recovery</p>
                    <p className="text-[9px] text-gray-400">Deep breath in, hold 15 seconds</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Key insight */}
          <div className="relative max-w-xs overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm" />
            <div className="absolute inset-0 border border-white/[0.08] rounded-xl" />
            <div className="relative p-4">
              <p className="text-xs text-gray-400 leading-relaxed">
                <span className="text-cyan-400 font-medium">Wim Hof:</span> "The cold is my teacher.
                The breath is my tool. Together they unlock the body's hidden potential - reducing
                inflammation, boosting immunity, and conquering stress."
              </p>
            </div>
          </div>

          <p className="text-[10px] text-gray-600">From The Wim Hof Method</p>
        </div>
      </div>
    </div>
  );
}

export default WimHofMethod;
