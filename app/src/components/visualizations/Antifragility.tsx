import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
      if (health < 30) return { text: 'Shattered 💔', animate: true };
      if (health < 60) return { text: 'Cracking...', animate: false };
      return { text: 'Intact', animate: false };
    }
    if (entity.type === 'robust') {
      return { text: 'Unchanged', animate: false };
    }
    // Antifragile
    if (stressLevel > 70) return { text: 'Thriving! 🚀', animate: true };
    if (stressLevel > 40) return { text: 'Strengthening', animate: false };
    return { text: 'Dormant', animate: false };
  };

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Stress meter visualization */}
      <div className="w-full max-w-xs">
        <div className="flex justify-between items-center text-[10px] text-gray-500 mb-2">
          <span>Environmental Stress</span>
          <span className={
            stressLevel > 70 ? 'text-red-400 font-bold' :
            stressLevel > 40 ? 'text-amber-400' : 'text-green-400'
          }>
            {Math.round(stressLevel)}% volatility
          </span>
        </div>

        {/* Stress history graph */}
        <div className="h-16 bg-[#0A0A0B] border border-gray-800 rounded-xl overflow-hidden relative mb-3">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            {/* Grid lines */}
            {[25, 50, 75].map(y => (
              <line
                key={y}
                x1="0"
                y1={`${100 - y}%`}
                x2="100%"
                y2={`${100 - y}%`}
                stroke="#1F2937"
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
                className="absolute top-1 left-1/2 -translate-x-1/2 px-2 py-1 bg-red-500/80 rounded text-[10px] text-white font-medium"
              >
                ⚡ {activeEvent}!
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
        <div className="flex justify-between text-[8px] text-gray-600 mt-1">
          <span>🌤️ Calm</span>
          <span>⛈️ Turbulent</span>
          <span>🌪️ Chaos</span>
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
              className="relative p-3 rounded-xl border text-center overflow-hidden"
              style={{
                borderColor: entity.color + '50',
                backgroundColor: entity.color + '08',
              }}
              animate={status.animate ? {
                scale: entity.type === 'fragile' ? [1, 0.95, 1] : [1, 1.05, 1],
              } : {}}
              transition={{ repeat: status.animate ? Infinity : 0, duration: 0.5 }}
            >
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
                <p className="text-[9px] text-gray-500 capitalize">{entity.type}</p>

                {/* Health indicator */}
                <div className="mt-2 h-2 bg-gray-900 rounded-full overflow-hidden">
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
      <div className="w-full max-w-xs bg-[#111113] border border-gray-800 rounded-xl p-3">
        <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-2 text-center">
          Response to stress
        </p>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <p className="text-red-400 text-xs font-medium">Fragile</p>
            <p className="text-[9px] text-gray-500">Breaks down</p>
            <p className="text-red-400 text-[10px]">↓ Health</p>
          </div>
          <div>
            <p className="text-blue-400 text-xs font-medium">Robust</p>
            <p className="text-[9px] text-gray-500">Stays same</p>
            <p className="text-blue-400 text-[10px]">→ Constant</p>
          </div>
          <div>
            <p className="text-green-400 text-xs font-medium">Antifragile</p>
            <p className="text-[9px] text-gray-500">Gets stronger</p>
            <p className="text-green-400 text-[10px]">↑ Health</p>
          </div>
        </div>
      </div>

      {/* Stress event buttons */}
      <div className="w-full max-w-xs">
        <p className="text-[10px] text-gray-500 mb-2 text-center">Trigger stress event:</p>
        <div className="flex flex-wrap justify-center gap-1">
          {stressEvents.map((event) => (
            <motion.button
              key={event.name}
              onClick={() => triggerStressEvent(event)}
              disabled={isSimulating}
              className="px-2 py-1 text-[10px] bg-[#111113] border border-gray-700 rounded-lg
                       hover:border-red-500/50 hover:bg-red-500/10 transition-all disabled:opacity-50"
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
          className={`px-5 py-3 rounded-xl text-xs font-semibold transition-all border ${
            isSimulating
              ? 'bg-red-500/10 border-red-500/30 text-red-400'
              : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSimulating ? '⏸ Stop simulation' : '▶ Simulate volatility'}
        </motion.button>
        <button
          onClick={reset}
          className="px-4 py-3 border border-gray-700 text-gray-400
                   rounded-xl text-xs hover:border-gray-600 transition-all"
        >
          ↻ Reset
        </button>
      </div>

      {/* Real world examples toggle */}
      <button
        onClick={() => setShowExamples(!showExamples)}
        className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
      >
        {showExamples ? '▼ Hide' : '▶ Show'} real-world examples
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
                    className="text-[9px] p-1.5 rounded-lg bg-[#0A0A0B] border border-gray-800"
                    style={{ color: entity.color }}
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
      <div className="bg-[#111113] border border-gray-800 rounded-xl p-4 max-w-xs">
        <p className="text-xs text-gray-400 leading-relaxed">
          <span className="text-green-400 font-medium">Nassim Taleb:</span> "Some things benefit
          from shocks; they thrive and grow when exposed to volatility, randomness, disorder.
          Antifragility is beyond resilience—it loves chaos."
        </p>
      </div>

      <p className="text-[10px] text-gray-600">
        From Antifragile by Nassim Nicholas Taleb
      </p>
    </div>
  );
}

export default Antifragility;
