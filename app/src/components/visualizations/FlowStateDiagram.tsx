import { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

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
    <div className="relative overflow-hidden rounded-2xl">
      {/* Dark Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.03] via-transparent to-amber-500/[0.02]" />
      <div className="absolute inset-0 border border-white/[0.1] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center border border-emerald-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
            <Activity className="w-4 h-4 text-emerald-400" />
          </div>
          <span className="text-sm font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Flow State Diagram
          </span>
        </div>

        <div className="flex flex-col items-center gap-4">
          {/* Main Diagram */}
          <div
            className="relative w-64 h-64 rounded-xl border border-white/[0.08] overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
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
              <line x1="0" y1="100" x2="100" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
              <line x1="0" y1="100" x2="0" y2="0" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />

              {/* Grid */}
              {[25, 50, 75].map((pos) => (
                <g key={pos}>
                  <line x1={pos} y1="0" x2={pos} y2="100" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" strokeDasharray="2" />
                  <line x1="0" y1={pos} x2="100" y2={pos} stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" strokeDasharray="2" />
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
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[9px] text-white/50 pointer-events-none">
              SKILL LEVEL &rarr;
            </div>
            <div className="absolute left-1 top-1/2 -translate-y-1/2 -rotate-90 text-[9px] text-white/50 whitespace-nowrap pointer-events-none">
              CHALLENGE &rarr;
            </div>
          </div>

          {/* Sliders */}
          <div className="w-full max-w-xs space-y-3">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="flex justify-between text-xs text-white/60 mb-1">
                <span>Skill Level</span>
                <span className="text-blue-400">{skillLevel}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="90"
                value={skillLevel}
                onChange={(e) => setSkillLevel(Number(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-blue-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:shadow-[0_0_8px_rgba(59,130,246,0.5)]"
              />
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="flex justify-between text-xs text-white/60 mb-1">
                <span>Challenge Level</span>
                <span className="text-amber-400">{challengeLevel}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="90"
                value={challengeLevel}
                onChange={(e) => setChallengeLevel(Number(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-amber-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-amber-500 [&::-webkit-slider-thumb]:shadow-[0_0_8px_rgba(245,158,11,0.5)]"
              />
            </div>
          </div>

          {/* Current state indicator */}
          {currentZone && (
            <motion.div
              key={currentZone.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative overflow-hidden text-center p-3 rounded-xl max-w-xs border border-white/[0.08]"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="text-sm font-bold mb-1" style={{ color: currentZone.color }}>
                Current State: {currentZone.label}
              </div>
              <p className="text-xs text-white/60">{currentZone.description}</p>
            </motion.div>
          )}

          <p className="text-[10px] text-white/50 text-center">
            Adjust the sliders to explore different mental states
          </p>
        </div>
      </div>
    </div>
  );
}

export default FlowStateDiagram;
