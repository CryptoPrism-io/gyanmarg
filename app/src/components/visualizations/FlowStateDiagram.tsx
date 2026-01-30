import { useState } from 'react';
import { motion } from 'framer-motion';

interface Zone {
  id: string;
  label: string;
  description: string;
  color: string;
  x: number;
  y: number;
}

const zones: Zone[] = [
  {
    id: 'anxiety',
    label: 'Anxiety',
    description: 'Challenge too high for current skill level. You feel overwhelmed and stressed.',
    color: '#EF4444',
    x: 25,
    y: 75,
  },
  {
    id: 'flow',
    label: 'FLOW',
    description: 'Perfect balance! Challenge matches skill. Time flies, you feel engaged and fulfilled.',
    color: '#22C55E',
    x: 50,
    y: 50,
  },
  {
    id: 'boredom',
    label: 'Boredom',
    description: 'Skill exceeds challenge. You feel understimulated and disengaged.',
    color: '#6B7280',
    x: 75,
    y: 25,
  },
  {
    id: 'arousal',
    label: 'Arousal',
    description: 'Slightly challenged. Alert and focused, pushing your limits.',
    color: '#F59E0B',
    x: 40,
    y: 65,
  },
  {
    id: 'control',
    label: 'Control',
    description: 'Comfortable mastery. You feel confident but not fully engaged.',
    color: '#3B82F6',
    x: 65,
    y: 40,
  },
];

export function FlowStateDiagram() {
  const [skillLevel, setSkillLevel] = useState(50);
  const [challengeLevel, setChallengeLevel] = useState(50);

  const getCurrentZone = () => {
    const diff = challengeLevel - skillLevel;
    if (Math.abs(diff) < 15) return 'flow';
    if (diff > 30) return 'anxiety';
    if (diff > 0) return 'arousal';
    if (diff < -30) return 'boredom';
    return 'control';
  };

  const currentZone = zones.find((z) => z.id === getCurrentZone());

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Main Diagram */}
      <div className="relative w-64 h-64 bg-gradient-to-tr from-gray-900 to-gray-800 rounded-xl border border-gray-700 overflow-hidden">
        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
          {/* Diagonal flow channel */}
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22C55E" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#22C55E" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#22C55E" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Flow channel */}
          <path
            d="M 0 100 L 30 100 L 100 30 L 100 0 L 70 0 L 0 70 Z"
            fill="url(#flowGradient)"
          />

          {/* Axis lines */}
          <line x1="0" y1="100" x2="100" y2="100" stroke="#374151" strokeWidth="0.5" />
          <line x1="0" y1="100" x2="0" y2="0" stroke="#374151" strokeWidth="0.5" />

          {/* Grid */}
          {[25, 50, 75].map((pos) => (
            <g key={pos}>
              <line x1={pos} y1="0" x2={pos} y2="100" stroke="#1F2937" strokeWidth="0.5" strokeDasharray="2" />
              <line x1="0" y1={pos} x2="100" y2={pos} stroke="#1F2937" strokeWidth="0.5" strokeDasharray="2" />
            </g>
          ))}
        </svg>

        {/* Zone labels - static, no hover effects */}
        {zones.map((zone) => {
          const isCurrentZone = currentZone?.id === zone.id;
          return (
            <div
              key={zone.id}
              className="absolute text-[10px] font-bold px-2 py-1 rounded-full pointer-events-none select-none"
              style={{
                left: `${zone.x}%`,
                top: `${100 - zone.y}%`,
                transform: 'translate(-50%, -50%)',
                backgroundColor: isCurrentZone ? zone.color : `${zone.color}30`,
                color: isCurrentZone ? 'white' : zone.color,
                border: `1px solid ${zone.color}`,
                boxShadow: isCurrentZone ? `0 0 12px ${zone.color}60` : 'none',
              }}
            >
              {zone.label}
            </div>
          );
        })}

        {/* Interactive point */}
        <motion.div
          className="absolute w-4 h-4 rounded-full border-2 border-white shadow-lg pointer-events-none"
          style={{
            left: `${skillLevel}%`,
            top: `${100 - challengeLevel}%`,
            transform: 'translate(-50%, -50%)',
            backgroundColor: currentZone?.color || '#22C55E',
            boxShadow: `0 0 15px ${currentZone?.color || '#22C55E'}80`,
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        {/* Axis labels */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[9px] text-gray-500 pointer-events-none">
          SKILL LEVEL →
        </div>
        <div className="absolute left-1 top-1/2 -translate-y-1/2 -rotate-90 text-[9px] text-gray-500 whitespace-nowrap pointer-events-none">
          CHALLENGE →
        </div>
      </div>

      {/* Sliders */}
      <div className="w-full max-w-xs space-y-3">
        <div>
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>Skill Level</span>
            <span>{skillLevel}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="90"
            value={skillLevel}
            onChange={(e) => setSkillLevel(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
        <div>
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>Challenge Level</span>
            <span>{challengeLevel}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="90"
            value={challengeLevel}
            onChange={(e) => setChallengeLevel(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />
        </div>
      </div>

      {/* Current state indicator */}
      {currentZone && (
        <motion.div
          key={currentZone.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center p-3 bg-[#111113] border border-gray-800 rounded-lg max-w-xs"
        >
          <div className="text-sm font-bold mb-1" style={{ color: currentZone.color }}>
            Current State: {currentZone.label}
          </div>
          <p className="text-xs text-gray-400">{currentZone.description}</p>
        </motion.div>
      )}

      <p className="text-[10px] text-gray-500 text-center">
        Adjust the sliders to explore different mental states
      </p>
    </div>
  );
}

export default FlowStateDiagram;
