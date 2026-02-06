import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

export function ParkinsonsLaw() {
  const [deadline, setDeadline] = useState<'week' | 'day' | 'hour'>('week');
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(100);
  const [workDone, setWorkDone] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const deadlineConfig = {
    week: { label: '1 Week', speed: 1, procrastination: 70 },
    day: { label: '1 Day', speed: 3, procrastination: 40 },
    hour: { label: '1 Hour', speed: 8, procrastination: 10 },
  };

  const config = deadlineConfig[deadline];

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = window.setInterval(() => {
        setTimeLeft(prev => {
          const newTime = prev - config.speed;

          // Work only starts when time pressure kicks in
          const urgency = 100 - prev;
          const procrastinationThreshold = config.procrastination;

          if (urgency > procrastinationThreshold) {
            const workRate = ((urgency - procrastinationThreshold) / (100 - procrastinationThreshold)) * config.speed * 2;
            setWorkDone(w => Math.min(100, w + workRate));
          }

          if (newTime <= 0) {
            setIsRunning(false);
            return 0;
          }
          return newTime;
        });
      }, 100);

      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [isRunning, timeLeft, config]);

  const startSimulation = () => {
    setTimeLeft(100);
    setWorkDone(0);
    setIsRunning(true);
  };

  const reset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsRunning(false);
    setTimeLeft(100);
    setWorkDone(0);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Glassmorphism layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-amber-500/[0.02]" />
      <div className="absolute inset-0 border border-white/[0.1] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
            <Clock className="w-4 h-4 text-blue-400" />
          </div>
          <h3 className="text-sm font-medium text-white/90">Parkinson's Law</h3>
        </div>

        <div className="flex flex-col items-center gap-4">
          {/* Deadline selector */}
          <div className="flex gap-2">
            {(['week', 'day', 'hour'] as const).map((d) => (
              <button
                key={d}
                onClick={() => {
                  setDeadline(d);
                  reset();
                }}
                disabled={isRunning}
                className={`text-xs px-3 py-1.5 rounded-full transition-all border ${
                  deadline === d
                    ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                    : 'text-white/50 hover:text-white/80 border-transparent disabled:opacity-50'
                }`}
              >
                {deadlineConfig[d].label}
              </button>
            ))}
          </div>

          {/* Visualization */}
          <div className="w-full max-w-xs space-y-4">
            {/* Time remaining */}
            <div>
              <div className="flex justify-between text-[10px] text-white/50 mb-1">
                <span>Time Remaining</span>
                <span>{Math.round(timeLeft)}%</span>
              </div>
              <div className="relative h-4 rounded-full overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
                />
                <div className="absolute inset-0 border border-white/[0.08] rounded-full" />
                <motion.div
                  className="absolute top-0 left-0 bottom-0 rounded-full bg-blue-500"
                  style={{ width: `${timeLeft}%` }}
                />
              </div>
            </div>

            {/* Work completed */}
            <div>
              <div className="flex justify-between text-[10px] text-white/50 mb-1">
                <span>Work Completed</span>
                <span>{Math.round(workDone)}%</span>
              </div>
              <div className="relative h-4 rounded-full overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
                />
                <div className="absolute inset-0 border border-white/[0.08] rounded-full" />
                <motion.div
                  className="absolute top-0 left-0 bottom-0 rounded-full"
                  style={{
                    width: `${workDone}%`,
                    backgroundColor: workDone >= 100 ? '#22C55E' : '#F59E0B'
                  }}
                />
              </div>
            </div>

            {/* Procrastination zone indicator */}
            <div className="relative h-8">
              <div className="absolute inset-x-0 h-2 rounded-full overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
                />
                <div className="absolute inset-0 border border-white/[0.08] rounded-full" />
                <div
                  className="absolute top-0 bottom-0 bg-red-500/20 rounded-l-full"
                  style={{ width: `${config.procrastination}%` }}
                />
                <div
                  className="absolute top-0 bottom-0 bg-green-500/20 rounded-r-full"
                  style={{ left: `${config.procrastination}%`, right: 0 }}
                />
              </div>
              <div
                className="absolute top-3 text-[8px] text-red-400"
                style={{ left: `${config.procrastination / 2}%`, transform: 'translateX(-50%)' }}
              >
                😴 Procrastinating
              </div>
              <div
                className="absolute top-3 text-[8px] text-green-400"
                style={{ left: `${config.procrastination + (100 - config.procrastination) / 2}%`, transform: 'translateX(-50%)' }}
              >
                🔥 Working
              </div>
            </div>
          </div>

          {/* Status */}
          <div className={`px-3 py-1.5 rounded-full text-xs border ${
            !isRunning && workDone >= 100
              ? 'bg-green-500/10 border-green-500/30 text-green-400'
              : !isRunning && timeLeft === 0
              ? 'bg-red-500/10 border-red-500/30 text-red-400'
              : isRunning && timeLeft < config.procrastination
              ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
              : 'bg-white/[0.03] border-white/[0.08] text-white/60'
          }`}>
            {!isRunning && workDone >= 100 ? '✓ Completed!' :
             !isRunning && timeLeft === 0 ? '✗ Deadline missed!' :
             isRunning && timeLeft < (100 - config.procrastination) ? '🔥 Panic mode activated!' :
             isRunning ? '😴 Still plenty of time...' :
             'Ready to simulate'}
          </div>

          {/* Controls */}
          <div className="flex gap-2">
            {!isRunning ? (
              <button
                onClick={startSimulation}
                className="px-4 py-2 bg-amber-500/10 border border-amber-500/30
                         text-amber-400 rounded-lg text-xs hover:bg-amber-500/20 transition-all"
              >
                Start simulation →
              </button>
            ) : (
              <button
                onClick={reset}
                className="px-4 py-2 border border-white/[0.08] text-white/60
                         rounded-lg text-xs hover:border-white/20 transition-all"
              >
                Reset
              </button>
            )}
          </div>

          {/* Key insight */}
          <div className="relative overflow-hidden rounded-lg max-w-xs">
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
            />
            <div className="absolute inset-0 border border-white/[0.08] rounded-lg" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="relative p-3 text-center">
              <p className="text-xs text-white/60">
                <span className="text-amber-400 font-medium">Notice:</span> With shorter deadlines,
                work starts earlier. Tighter constraints = less procrastination.
              </p>
            </div>
          </div>

          <p className="text-[10px] text-white/50 text-center">
            "Work expands to fill the time available" — Cyril Parkinson
          </p>
        </div>
      </div>
    </div>
  );
}

export default ParkinsonsLaw;
