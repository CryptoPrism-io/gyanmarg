import { useState } from 'react';
import { motion } from 'framer-motion';

// What Every BODY is Saying - Pacifying Behaviors
const behaviors = [
  {
    action: 'Touching neck',
    location: 'neck',
    meaning: 'Stress, discomfort, or insecurity',
    why: 'Neck is vulnerable; touching it is self-soothing',
  },
  {
    action: 'Rubbing hands together',
    location: 'hands',
    meaning: 'Anxiety or nervousness',
    why: 'Creates friction warmth that calms the limbic system',
  },
  {
    action: 'Playing with hair',
    location: 'hair',
    meaning: 'Stress or need for comfort',
    why: 'Stimulates nerves in scalp, releasing calming chemicals',
  },
  {
    action: 'Crossing arms tightly',
    location: 'arms',
    meaning: 'Creating a barrier, feeling threatened',
    why: 'Protects vital organs and creates psychological shield',
  },
  {
    action: 'Exhaling puff of air',
    location: 'mouth',
    meaning: 'Stress relief',
    why: 'Releases pressure and activates parasympathetic system',
  },
];

export function PacifyingBehaviors() {
  const [activeBehavior, setActiveBehavior] = useState(0);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] via-transparent to-yellow-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-4">
          {/* Human figure with hotspots */}
          <div className="relative w-32 h-44">
            {/* Simple human silhouette */}
            <svg viewBox="0 0 100 140" className="w-full h-full">
              {/* Head */}
              <circle cx="50" cy="20" r="15" fill="#1f2937" stroke="#374151" strokeWidth="1" />
              {/* Body */}
              <ellipse cx="50" cy="65" rx="25" ry="30" fill="#1f2937" stroke="#374151" strokeWidth="1" />
              {/* Arms */}
              <ellipse cx="20" cy="60" rx="8" ry="20" fill="#1f2937" stroke="#374151" strokeWidth="1" />
              <ellipse cx="80" cy="60" rx="8" ry="20" fill="#1f2937" stroke="#374151" strokeWidth="1" />
              {/* Legs */}
              <ellipse cx="40" cy="115" rx="10" ry="25" fill="#1f2937" stroke="#374151" strokeWidth="1" />
              <ellipse cx="60" cy="115" rx="10" ry="25" fill="#1f2937" stroke="#374151" strokeWidth="1" />
            </svg>

            {/* Hotspots */}
            {behaviors.map((b, idx) => {
              const positions: Record<string, { top: string; left: string }> = {
                neck: { top: '22%', left: '50%' },
                hands: { top: '55%', left: '15%' },
                hair: { top: '5%', left: '50%' },
                arms: { top: '45%', left: '50%' },
                mouth: { top: '15%', left: '50%' },
              };
              const pos = positions[b.location];
              return (
                <motion.button
                  key={idx}
                  onClick={() => setActiveBehavior(idx)}
                  className={`absolute w-5 h-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all ${
                    idx === activeBehavior
                      ? 'bg-amber-500/50 border-amber-400 scale-125'
                      : 'bg-amber-500/20 border-amber-500/50 hover:scale-110'
                  }`}
                  style={{ top: pos.top, left: pos.left }}
                  animate={idx === activeBehavior ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              );
            })}
          </div>

          {/* Behavior selector */}
          <div className="flex gap-1 flex-wrap justify-center">
            {behaviors.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveBehavior(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === activeBehavior ? 'bg-amber-500' : 'bg-gray-700'
                }`}
              />
            ))}
          </div>

          {/* Active behavior detail */}
          <motion.div
            key={activeBehavior}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden w-full max-w-xs rounded-lg p-4"
          >
            <div className="absolute inset-0 bg-[var(--viz-tile)] backdrop-blur-sm" />
            <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg" />
            <div className="relative z-10">
              <p className="text-sm text-amber-400 font-medium mb-2">
                {behaviors[activeBehavior].action}
              </p>
              <div className="space-y-2">
                <div>
                  <p className="text-[10px] text-[var(--viz-muted)] uppercase">Indicates</p>
                  <p className="text-xs text-[var(--viz-secondary)]">{behaviors[activeBehavior].meaning}</p>
                </div>
                <div>
                  <p className="text-[10px] text-[var(--viz-muted)] uppercase">Why it works</p>
                  <p className="text-xs text-[var(--viz-muted)]">{behaviors[activeBehavior].why}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative overflow-hidden w-full max-w-xs rounded-lg p-3 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.08] via-amber-500/[0.04] to-transparent" />
            <div className="absolute inset-0 border border-amber-500/20 rounded-lg" />
            <p className="relative z-10 text-[10px] text-amber-400">
              💡 Notice: These indicate stress, NOT deception
            </p>
          </div>

          <p className="text-[10px] text-[var(--viz-muted)] text-center">
            From "What Every BODY is Saying" by Joe Navarro
          </p>
        </div>
      </div>
    </div>
  );
}

export default PacifyingBehaviors;
