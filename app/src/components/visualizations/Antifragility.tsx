import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield } from 'lucide-react';

interface Entity {
  id: string;
  name: string;
  type: 'fragile' | 'robust' | 'antifragile';
  icon: string;
  color: string;
  description: string;
  examples: string[];
  stressResponse: (stress: number) => number; // Returns health 0-100
}

const entities: Entity[] = [
  {
    id: 'glass',
    name: 'Glass Vase',
    type: 'fragile',
    icon: '🏺',
    color: '#EF4444',
    description: 'Harmed by volatility',
    examples: ['Over-leveraged businesses', 'Rigid plans', 'Centralized systems', 'Single points of failure'],
    stressResponse: (stress) => Math.max(0, 100 - stress * 1.5),
  },
  {
    id: 'rock',
    name: 'Rock',
    type: 'robust',
    icon: '🪨',
    color: '#3B82F6',
    description: 'Resists volatility',
    examples: ['Gold reserves', 'Simple tools', 'Cockroaches', 'Cash savings'],
    stressResponse: () => 80, // Stays constant
  },
  {
    id: 'hydra',
    name: 'Hydra',
    type: 'antifragile',
    icon: '🐉',
    color: '#22C55E',
    description: 'Gains from volatility',
    examples: ['Evolution', 'Immune system', 'Startups ecosystem', 'Your career with optionality'],
    stressResponse: (stress) => Math.min(100, 60 + stress * 0.5),
  },
];

const stressEvents = [
  { name: 'Market crash', icon: '📉', intensity: 80 },
  { name: 'New competitor', icon: '⚔️', intensity: 60 },
  { name: 'Pandemic', icon: '🦠', intensity: 90 },
  { name: 'Tech disruption', icon: '💥', intensity: 70 },
  { name: 'Recession', icon: '📊', intensity: 75 },
];

export function Antifragility() {
  const [stressLevel, setStressLevel] = useState(30);
  const [isSimulating, setIsSimulating] = useState(false);
  const [stressHistory, setStressHistory] = useState<number[]>([30]);
  const [showExamples, setShowExamples] = useState(false);
  const [activeEvent, setActiveEvent] = useState<string | null>(null);
  const intervalRef = useRef<number | null>(null);

  // Simulate stress fluctuations
  useEffect(() => {
    if (isSimulating) {
      intervalRef.current = window.setInterval(() => {
        setStressLevel(prev => {
          const change = (Math.random() - 0.4) * 20;
          const newStress = Math.max(10, Math.min(95, prev + change));
          setStressHistory(h => [...h.slice(-20), newStress]);
          return newStress;
        });
      }, 500);

      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [isSimulating]);

  const triggerStressEvent = (event: typeof stressEvents[0]) => {
    setActiveEvent(event.name);
    setStressLevel(event.intensity);
    setStressHistory(h => [...h.slice(-20), event.intensity]);
    setTimeout(() => setActiveEvent(null), 2000);
  };

  const reset = () => {
    setIsSimulating(false);
    setStressLevel(30);
    setStressHistory([30]);
    setActiveEvent(null);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const getStatusText = (entity: Entity, health: number) => {
    if (entity.type === 'fragile') {
      if (health < 30) return { text: 'Shattered', animate: true };
      if (health < 60) return { text: 'Cracking...', animate: false };
      return { text: 'Intact', animate: false };
    }
    if (entity.type === 'robust') {
      return { text: 'Unchanged', animate: false };
    }
    // Antifragile
    if (stressLevel > 70) return { text: 'Thriving!', animate: true };
    if (stressLevel > 40) return { text: 'Strengthening', animate: false };
    return { text: 'Dormant', animate: false };
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Dark Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.03] via-transparent to-red-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center border border-emerald-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
            <Shield className="w-4 h-4 text-emerald-400" />
          </div>
          <span className="text-sm font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Antifragility
          </span>
        </div>

        <div className="flex flex-col items-center gap-5">
          {/* Stress meter visualization */}
          <div className="w-full max-w-xs">
            <div className="flex justify-between items-center text-[10px] text-[var(--viz-muted)] mb-2">
              <span>Environmental Stress</span>
              <span className={
                stressLevel > 70 ? 'text-red-400 font-bold' :
                stressLevel > 40 ? 'text-amber-400' : 'text-green-400'
              }>
                {Math.round(stressLevel)}% volatility
              </span>
            </div>

            {/* Stress history graph */}
            <div className="relative h-16 rounded-xl overflow-hidden mb-3 border border-[var(--viz-border)]"
              style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)' }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                {/* Grid lines */}
                {[25, 50, 75].map(y => (
                  <line
                    key={y}
                    x1="0"
                    y1={`${100 - y}%`}
                    x2="100%"
                    y2={`${100 - y}%`}
                    stroke="var(--viz-grid)"
                    strokeWidth="1"
                  />
                ))}

                {/* Stress history line */}
                <polyline
                  points={stressHistory.map((s, i) =>
                    `${(i / Math.max(stressHistory.length - 1, 1)) * 100}%,${100 - s}%`
                  ).join(' ')}
                  fill="none"
                  stroke={stressLevel > 70 ? '#EF4444' : stressLevel > 40 ? '#F59E0B' : '#22C55E'}
                  strokeWidth="2"
                />
              </svg>

              {/* Current stress indicator */}
              <motion.div
                className="absolute right-2 w-3 h-3 rounded-full"
                style={{
                  backgroundColor: stressLevel > 70 ? '#EF4444' : stressLevel > 40 ? '#F59E0B' : '#22C55E',
                  top: `${100 - stressLevel}%`,
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  boxShadow: isSimulating ? [
                    '0 0 0 0 rgba(255,255,255,0)',
                    '0 0 10px 5px rgba(255,255,255,0.2)',
                    '0 0 0 0 rgba(255,255,255,0)',
                  ] : 'none',
                }}
                transition={{ duration: 1, repeat: isSimulating ? Infinity : 0 }}
              />

              {/* Active event notification */}
              <AnimatePresence>
                {activeEvent && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-1 left-1/2 -translate-x-1/2 px-2 py-1 bg-red-500/80 rounded text-[10px] text-[var(--viz-text)] font-medium"
                  >
                    {activeEvent}!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Stress slider */}
            <input
              type="range"
              min="10"
              max="95"
              value={stressLevel}
              onChange={(e) => {
                setStressLevel(Number(e.target.value));
                setStressHistory(h => [...h.slice(-20), Number(e.target.value)]);
              }}
              disabled={isSimulating}
              className="w-full accent-amber-500 disabled:opacity-50"
            />
            <div className="flex justify-between text-[8px] text-[var(--viz-muted)] mt-1">
              <span>Calm</span>
              <span>Turbulent</span>
              <span>Chaos</span>
            </div>
          </div>

          {/* Entity comparison cards */}
          <div className="w-full max-w-xs grid grid-cols-3 gap-2">
            {entities.map((entity) => {
              const health = entity.stressResponse(stressLevel);
              const status = getStatusText(entity, health);

              return (
                <motion.div
                  key={entity.id}
                  className="relative overflow-hidden p-3 rounded-xl text-center border"
                  style={{
                    borderColor: entity.color + '50',
                    background: `linear-gradient(135deg, ${entity.color}08 0%, ${entity.color}02 100%)`,
                  }}
                  animate={status.animate ? {
                    scale: entity.type === 'fragile' ? [1, 0.95, 1] : [1, 1.05, 1],
                  } : {}}
                  transition={{ repeat: status.animate ? Infinity : 0, duration: 0.5 }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  {/* Health bar background */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 opacity-20"
                    style={{ backgroundColor: entity.color }}
                    animate={{ height: `${health}%` }}
                  />

                  <div className="relative">
                    <motion.span
                      className="text-3xl block"
                      animate={entity.type === 'fragile' && health < 30 ? {
                        rotate: [0, -10, 10, 0],
                        opacity: [1, 0.5, 1],
                      } : entity.type === 'antifragile' && stressLevel > 60 ? {
                        scale: [1, 1.1, 1],
                      } : {}}
                      transition={{ duration: 0.3, repeat: Infinity }}
                    >
                      {entity.icon}
                    </motion.span>

                    <p className="text-xs font-semibold mt-2" style={{ color: entity.color }}>
                      {entity.name}
                    </p>
                    <p className="text-[9px] text-[var(--viz-muted)] capitalize">{entity.type}</p>

                    {/* Health indicator */}
                    <div className="mt-2 h-2 rounded-full overflow-hidden border border-[var(--viz-border)]"
                      style={{ background: 'rgba(0,0,0,0.3)' }}
                    >
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: entity.color }}
                        animate={{ width: `${health}%` }}
                      />
                    </div>

                    <p className="text-[10px] mt-1.5 font-medium" style={{ color: entity.color }}>
                      {status.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Stress response explanation */}
          <div className="relative overflow-hidden w-full max-w-xs rounded-xl p-3 border border-[var(--viz-border)]"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="text-[10px] text-[var(--viz-muted)] uppercase tracking-wide mb-2 text-center">
              Response to stress
            </p>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-red-400 text-xs font-medium">Fragile</p>
                <p className="text-[9px] text-[var(--viz-muted)]">Breaks down</p>
                <p className="text-red-400 text-[10px]">Health decreases</p>
              </div>
              <div>
                <p className="text-blue-400 text-xs font-medium">Robust</p>
                <p className="text-[9px] text-[var(--viz-muted)]">Stays same</p>
                <p className="text-blue-400 text-[10px]">Constant</p>
              </div>
              <div>
                <p className="text-green-400 text-xs font-medium">Antifragile</p>
                <p className="text-[9px] text-[var(--viz-muted)]">Gets stronger</p>
                <p className="text-green-400 text-[10px]">Health increases</p>
              </div>
            </div>
          </div>

          {/* Stress event buttons */}
          <div className="w-full max-w-xs">
            <p className="text-[10px] text-[var(--viz-muted)] mb-2 text-center">Trigger stress event:</p>
            <div className="flex flex-wrap justify-center gap-1">
              {stressEvents.map((event) => (
                <motion.button
                  key={event.name}
                  onClick={() => triggerStressEvent(event)}
                  disabled={isSimulating}
                  className="relative overflow-hidden px-2 py-1 text-[10px] rounded-lg
                           border border-[var(--viz-border)]
                           hover:border-red-500/50 transition-all disabled:opacity-50"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {event.icon} {event.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex gap-2">
            <motion.button
              onClick={() => setIsSimulating(!isSimulating)}
              className={`px-5 py-3 rounded-xl text-xs font-semibold transition-all border backdrop-blur-sm ${
                isSimulating
                  ? 'bg-red-500/15 border-red-500/30 text-red-400 shadow-[0_0_12px_rgba(239,68,68,0.15)]'
                  : 'bg-amber-500/15 border-amber-500/30 text-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.15)]'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSimulating ? 'Stop simulation' : 'Simulate volatility'}
            </motion.button>
            <button
              onClick={reset}
              className="px-4 py-3 border border-[var(--viz-border)] text-[var(--viz-secondary)]
                       rounded-xl text-xs hover:border-white/20 hover:text-[var(--viz-secondary)] transition-all"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
            >
              Reset
            </button>
          </div>

          {/* Real world examples toggle */}
          <button
            onClick={() => setShowExamples(!showExamples)}
            className="text-xs text-[var(--viz-muted)] hover:text-[var(--viz-secondary)] transition-colors"
          >
            {showExamples ? 'Hide' : 'Show'} real-world examples
          </button>

          <AnimatePresence>
            {showExamples && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="w-full max-w-xs grid grid-cols-3 gap-2"
              >
                {entities.map((entity) => (
                  <div key={entity.id} className="space-y-1">
                    <p className="text-[10px] font-medium text-center" style={{ color: entity.color }}>
                      {entity.type}
                    </p>
                    {entity.examples.map((ex, idx) => (
                      <div
                        key={idx}
                        className="relative overflow-hidden text-[9px] p-1.5 rounded-lg border border-[var(--viz-border)]"
                        style={{
                          color: entity.color,
                          background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)',
                        }}
                      >
                        {ex}
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Key insight */}
          <div className="relative overflow-hidden rounded-xl p-4 max-w-xs border border-[var(--viz-border)]"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="text-xs text-[var(--viz-secondary)] leading-relaxed">
              <span className="text-green-400 font-medium">Nassim Taleb:</span> "Some things benefit
              from shocks; they thrive and grow when exposed to volatility, randomness, disorder.
              Antifragility is beyond resilience—it loves chaos."
            </p>
          </div>

          <p className="text-[10px] text-[var(--viz-muted)]">
            From Antifragile by Nassim Nicholas Taleb
          </p>
        </div>
      </div>
    </div>
  );
}

export default Antifragility;
