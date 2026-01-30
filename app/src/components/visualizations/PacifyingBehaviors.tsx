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
        className="w-full max-w-xs bg-[#111113] border border-gray-800 rounded-lg p-4"
      >
        <p className="text-sm text-amber-400 font-medium mb-2">
          {behaviors[activeBehavior].action}
        </p>
        <div className="space-y-2">
          <div>
            <p className="text-[10px] text-gray-500 uppercase">Indicates</p>
            <p className="text-xs text-gray-300">{behaviors[activeBehavior].meaning}</p>
          </div>
          <div>
            <p className="text-[10px] text-gray-500 uppercase">Why it works</p>
            <p className="text-xs text-gray-400">{behaviors[activeBehavior].why}</p>
          </div>
        </div>
      </motion.div>

      <div className="w-full max-w-xs bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 text-center">
        <p className="text-[10px] text-amber-400">
          💡 Notice: These indicate stress, NOT deception
        </p>
      </div>

      <p className="text-[10px] text-gray-500 text-center">
        From "What Every BODY is Saying" by Joe Navarro
      </p>
    </div>
  );
}

export default PacifyingBehaviors;
