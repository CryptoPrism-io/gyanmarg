import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Power of Full Engagement - Work/Rest Oscillation
export function WorkRestCycle() {
  const [phase, setPhase] = useState<'idle' | 'work' | 'rest'>('idle');
  const [workTime, setWorkTime] = useState(0);
  const [restTime, setRestTime] = useState(0);
  const [cycles, setCycles] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const WORK_DURATION = 90; // 90 seconds for demo (represents 90 minutes)
  const REST_DURATION = 20; // 20 seconds for demo (represents 20 minutes)

  useEffect(() => {
    if (phase === 'work') {
      intervalRef.current = window.setInterval(() => {
        setWorkTime((t) => {
          if (t >= WORK_DURATION) {
            setPhase('rest');
            return 0;
          }
          return t + 1;
        });
      }, 1000);
    } else if (phase === 'rest') {
      intervalRef.current = window.setInterval(() => {
        setRestTime((t) => {
          if (t >= REST_DURATION) {
            setCycles((c) => c + 1);
            setPhase('idle');
            return 0;
          }
          return t + 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [phase]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const workProgress = (workTime / WORK_DURATION) * 100;
  const restProgress = (restTime / REST_DURATION) * 100;

  const startCycle = () => {
    setWorkTime(0);
    setRestTime(0);
    setPhase('work');
  };

  const reset = () => {
    setPhase('idle');
    setWorkTime(0);
    setRestTime(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Header */}
      <div className="text-center">
        <p className="text-xs text-gray-400">
          Peak performers oscillate between <span className="text-blue-400">stress</span> and{' '}
          <span className="text-green-400">recovery</span>.
        </p>
      </div>

      {/* Wave visualization */}
      <div className="w-full max-w-xs h-24 bg-[#111113] border border-gray-800 rounded-lg p-3 relative overflow-hidden">
        <svg viewBox="0 0 200 60" className="w-full h-full">
          {/* Baseline */}
          <line x1="0" y1="30" x2="200" y2="30" stroke="#374151" strokeWidth="1" />

          {/* Wave pattern */}
          <motion.path
            d="M0,30 Q25,10 50,30 T100,30 T150,30 T200,30"
            fill="none"
            stroke={phase === 'work' ? '#3B82F6' : phase === 'rest' ? '#22C55E' : '#6B7280'}
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Labels */}
          <text x="50" y="12" fontSize="8" fill="#3B82F6" textAnchor="middle">WORK</text>
          <text x="50" y="55" fontSize="8" fill="#22C55E" textAnchor="middle">REST</text>
        </svg>

        {/* Current phase indicator */}
        <div className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] ${
          phase === 'work'
            ? 'bg-blue-500/20 text-blue-400'
            : phase === 'rest'
            ? 'bg-green-500/20 text-green-400'
            : 'bg-gray-500/20 text-gray-400'
        }`}>
          {phase === 'idle' ? 'Ready' : phase === 'work' ? 'Working' : 'Resting'}
        </div>
      </div>

      {/* Timer display */}
      {phase !== 'idle' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-w-xs space-y-3"
        >
          {phase === 'work' ? (
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-blue-400">Deep Work Sprint</span>
                <span className="text-gray-400">{formatTime(workTime)} / {formatTime(WORK_DURATION)}</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-blue-500"
                  style={{ width: `${workProgress}%` }}
                />
              </div>
              <p className="text-[10px] text-gray-500 text-center">
                Stay fully engaged. No distractions.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-green-400">Recovery Break</span>
                <span className="text-gray-400">{formatTime(restTime)} / {formatTime(REST_DURATION)}</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-green-500"
                  style={{ width: `${restProgress}%` }}
                />
              </div>
              <p className="text-[10px] text-gray-500 text-center">
                Fully disengage. Move, breathe, reset.
              </p>
            </div>
          )}
        </motion.div>
      )}

      {/* Controls */}
      <div className="flex gap-2">
        {phase === 'idle' ? (
          <motion.button
            onClick={startCycle}
            className="px-6 py-2 bg-blue-500/20 border border-blue-500/50 rounded-lg text-sm text-blue-400"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Work Sprint
          </motion.button>
        ) : (
          <button
            onClick={reset}
            className="px-6 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-400"
          >
            Reset
          </button>
        )}
      </div>

      {/* Cycles completed */}
      {cycles > 0 && (
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg px-4 py-2">
          <p className="text-xs text-amber-400">
            Cycles completed: {cycles}
          </p>
        </div>
      )}

      {/* Key principle */}
      <div className="w-full max-w-xs bg-[#111113] border border-gray-800 rounded-lg p-3">
        <p className="text-[10px] text-gray-400 text-center">
          <span className="text-purple-400">The principle:</span> 90 minutes work, 20 minutes rest.
          Energy is not linear—it must be rhythmically renewed.
        </p>
      </div>

      <p className="text-[10px] text-gray-500 text-center">
        From "The Power of Full Engagement" by Jim Loehr
      </p>
    </div>
  );
}

export default WorkRestCycle;
