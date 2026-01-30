import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

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
            stroke="#1F2937"
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
          />
        </svg>

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-3xl font-bold" style={{ color: phase.color }}>
            {minutes}
          </p>
          <p className="text-[10px] text-gray-500">minutes</p>
          <p className="text-xs font-medium mt-2" style={{ color: phase.color }}>
            {phase.name}
          </p>
        </div>

        {/* Phase markers */}
        <div className="absolute inset-0">
          {[20, 70, 90].map((marker) => (
            <div
              key={marker}
              className="absolute w-2 h-2 rounded-full bg-gray-600"
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
            className={`p-2 rounded-lg border text-center ${
              phase.name === p.name ? 'border-white/20' : 'border-gray-800'
            }`}
            style={{
              backgroundColor: phase.name === p.name ? p.color + '15' : '#111113',
            }}
          >
            <div className="w-2 h-2 rounded-full mx-auto mb-1" style={{ backgroundColor: p.color }} />
            <p className="text-[10px] font-medium" style={{ color: p.color }}>{p.name}</p>
            <p className="text-[8px] text-gray-500">{p.time}</p>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="flex gap-4 text-center">
        <div>
          <p className="text-xl font-bold text-green-400">{cycles}</p>
          <p className="text-[10px] text-gray-500">Cycles completed</p>
        </div>
        <div>
          <p className="text-xl font-bold text-blue-400">{cycles * 50}</p>
          <p className="text-[10px] text-gray-500">Peak focus minutes</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-2">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`px-4 py-2 rounded-lg text-xs font-medium transition-all border ${
            isRunning
              ? 'bg-red-500/10 border-red-500/30 text-red-400'
              : 'bg-green-500/10 border-green-500/30 text-green-400'
          }`}
        >
          {isRunning ? '⏸ Pause' : '▶ Start cycle'}
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 border border-gray-700 text-gray-400
                   rounded-lg text-xs hover:border-gray-600 transition-all"
        >
          ↻ Reset
        </button>
      </div>

      {/* Key insight */}
      <div className="bg-[#111113] border border-gray-800 rounded-lg p-3 max-w-xs text-center">
        <p className="text-xs text-gray-400">
          <span className="text-green-400 font-medium">Science:</span> Your brain naturally
          cycles through 90-minute ultradian rhythms. Work with them: focus hard for 90 min,
          then rest for 20.
        </p>
      </div>

      <p className="text-[10px] text-gray-500">
        Based on sleep & performance research
      </p>
    </div>
  );
}

export default UltradianRhythms;
