import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

export function UltradianRhythms() {
  const [minutes, setMinutes] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [cycles, setCycles] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const BREAK_END = 110;

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(() => {
        setMinutes(prev => {
          const next = prev + 1;
          if (next >= BREAK_END) {
            setCycles(c => c + 1);
            return 0;
          }
          return next;
        });
      }, 50); // Speed up for demo (50ms = 1 min)

      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [isRunning]);

  const getPhase = () => {
    if (minutes < 20) return { name: 'Warm-up', color: '#F59E0B', desc: 'Getting into flow' };
    if (minutes < 70) return { name: 'Peak Focus', color: '#22C55E', desc: 'Deep work zone' };
    if (minutes < 90) return { name: 'Wind-down', color: '#3B82F6', desc: 'Consolidating' };
    return { name: 'Recovery', color: '#8B5CF6', desc: 'Rest & recharge' };
  };

  const phase = getPhase();
  const progress = (minutes / BREAK_END) * 100;

  const reset = () => {
    setIsRunning(false);
    setMinutes(0);
    setCycles(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Dark Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] via-transparent to-purple-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center border border-amber-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
            <Clock className="w-4 h-4 text-amber-400" />
          </div>
          <span className="text-sm font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Ultradian Rhythms
          </span>
        </div>

        <div className="flex flex-col items-center gap-4">
          {/* Cycle visualization */}
          <div className="relative w-48 h-48">
            {/* Background circle */}
            <svg className="w-full h-full -rotate-90">
              <circle
                cx="96"
                cy="96"
                r="88"
                fill="none"
                stroke="var(--viz-grid)"
                strokeWidth="12"
              />
              {/* Progress arc */}
              <motion.circle
                cx="96"
                cy="96"
                r="88"
                fill="none"
                stroke={phase.color}
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={553}
                animate={{ strokeDashoffset: 553 - (progress / 100) * 553 }}
                filter={`drop-shadow(0 0 8px ${phase.color}40)`}
              />
            </svg>

            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-3xl font-bold" style={{ color: phase.color }}>
                {minutes}
              </p>
              <p className="text-[10px] text-[var(--viz-muted)]">minutes</p>
              <p className="text-xs font-medium mt-2" style={{ color: phase.color }}>
                {phase.name}
              </p>
            </div>

            {/* Phase markers */}
            <div className="absolute inset-0">
              {[20, 70, 90].map((marker) => (
                <div
                  key={marker}
                  className="absolute w-2 h-2 rounded-full bg-white/30"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `rotate(${(marker / BREAK_END) * 360 - 90}deg) translateY(-88px) translateX(-50%)`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Phase legend */}
          <div className="grid grid-cols-2 gap-2 w-full max-w-xs">
            {[
              { name: 'Warm-up', time: '0-20 min', color: '#F59E0B' },
              { name: 'Peak Focus', time: '20-70 min', color: '#22C55E' },
              { name: 'Wind-down', time: '70-90 min', color: '#3B82F6' },
              { name: 'Recovery', time: '90-110 min', color: '#8B5CF6' },
            ].map((p) => (
              <div
                key={p.name}
                className={`relative overflow-hidden p-2 rounded-lg text-center border ${
                  phase.name === p.name ? 'border-white/20' : 'border-[var(--viz-border)]'
                }`}
                style={{
                  background: phase.name === p.name
                    ? `linear-gradient(135deg, ${p.color}15 0%, ${p.color}05 100%)`
                    : 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                }}
              >
                {phase.name === p.name && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />
                )}
                <div className="w-2 h-2 rounded-full mx-auto mb-1" style={{ backgroundColor: p.color }} />
                <p className="text-[10px] font-medium" style={{ color: p.color }}>{p.name}</p>
                <p className="text-[8px] text-[var(--viz-muted)]">{p.time}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex gap-4 text-center">
            <div className="relative overflow-hidden px-4 py-2 rounded-xl border border-[var(--viz-border)]"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <p className="text-xl font-bold text-green-400">{cycles}</p>
              <p className="text-[10px] text-[var(--viz-muted)]">Cycles completed</p>
            </div>
            <div className="relative overflow-hidden px-4 py-2 rounded-xl border border-[var(--viz-border)]"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <p className="text-xl font-bold text-blue-400">{cycles * 50}</p>
              <p className="text-[10px] text-[var(--viz-muted)]">Peak focus minutes</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex gap-2">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all border backdrop-blur-sm ${
                isRunning
                  ? 'bg-red-500/15 border-red-500/30 text-red-400 shadow-[0_0_12px_rgba(239,68,68,0.15)]'
                  : 'bg-green-500/15 border-green-500/30 text-green-400 shadow-[0_0_12px_rgba(34,197,94,0.15)]'
              }`}
            >
              {isRunning ? 'Pause' : 'Start cycle'}
            </button>
            <button
              onClick={reset}
              className="px-4 py-2 border border-[var(--viz-border)] text-[var(--viz-secondary)]
                       rounded-lg text-xs hover:border-white/20 hover:text-[var(--viz-secondary)] transition-all"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
            >
              Reset
            </button>
          </div>

          {/* Key insight */}
          <div className="relative overflow-hidden rounded-xl p-3 max-w-xs text-center border border-[var(--viz-border)]"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="text-xs text-[var(--viz-secondary)]">
              <span className="text-green-400 font-medium">Science:</span> Your brain naturally
              cycles through 90-minute ultradian rhythms. Work with them: focus hard for 90 min,
              then rest for 20.
            </p>
          </div>

          <p className="text-[10px] text-[var(--viz-muted)]">
            Based on sleep & performance research
          </p>
        </div>
      </div>
    </div>
  );
}

export default UltradianRhythms;
