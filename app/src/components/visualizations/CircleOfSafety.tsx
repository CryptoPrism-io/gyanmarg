import { useState } from 'react';
import { motion } from 'framer-motion';

// Leaders Eat Last - Circle of Safety
export function CircleOfSafety() {
  const [safetyLevel, setSafetyLevel] = useState(50);
  const [threatLevel, setThreatLevel] = useState(50);

  const getTeamBehavior = () => {
    if (safetyLevel > 70) return { text: 'Innovating & collaborating', color: 'green', emoji: '🚀' };
    if (safetyLevel > 40) return { text: 'Performing adequately', color: 'amber', emoji: '👍' };
    return { text: 'Self-protecting & politics', color: 'red', emoji: '😰' };
  };

  const behavior = getTeamBehavior();

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Circle visualization */}
      <div className="relative w-48 h-48">
        {/* External threats */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-dashed border-red-500/30"
          animate={{
            scale: [1, 1.05, 1],
            borderColor: threatLevel > 60
              ? ['rgba(239, 68, 68, 0.3)', 'rgba(239, 68, 68, 0.6)', 'rgba(239, 68, 68, 0.3)']
              : 'rgba(239, 68, 68, 0.3)',
          }}
          transition={{ repeat: Infinity, duration: 2 }}
        />

        {/* Threat arrows */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const radians = (angle * Math.PI) / 180;
          const startX = 50 + 55 * Math.cos(radians);
          const startY = 50 + 55 * Math.sin(radians);
          const endX = 50 + 40 * Math.cos(radians);
          const endY = 50 + 40 * Math.sin(radians);
          return (
            <motion.div
              key={angle}
              className="absolute w-2 h-2 bg-red-500/50 rounded-full"
              style={{ left: `${startX}%`, top: `${startY}%` }}
              animate={{
                left: [`${startX}%`, `${endX}%`, `${startX}%`],
                top: [`${startY}%`, `${endY}%`, `${startY}%`],
                opacity: threatLevel > 30 ? [0.3, 0.8, 0.3] : 0,
              }}
              transition={{ repeat: Infinity, duration: 3, delay: angle / 360 }}
            />
          );
        })}

        {/* Circle of safety */}
        <motion.div
          className="absolute rounded-full bg-green-500/10 border-4 border-green-500/50"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            width: `${30 + safetyLevel * 0.5}%`,
            height: `${30 + safetyLevel * 0.5}%`,
            borderColor: safetyLevel > 60
              ? 'rgba(34, 197, 94, 0.7)'
              : safetyLevel > 30
              ? 'rgba(245, 158, 11, 0.5)'
              : 'rgba(239, 68, 68, 0.5)',
          }}
        />

        {/* Team members */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2">
          {['👤', '👤', '👤'].map((emoji, idx) => (
            <motion.div
              key={idx}
              className="text-lg"
              animate={{
                y: safetyLevel > 50 ? [0, -2, 0] : 0,
                opacity: safetyLevel > 30 ? 1 : 0.5,
              }}
              transition={{ repeat: Infinity, duration: 2, delay: idx * 0.3 }}
            >
              {emoji}
            </motion.div>
          ))}
        </div>

        {/* Label */}
        <p className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10px] text-gray-500">
          Circle of Safety
        </p>
      </div>

      {/* Controls */}
      <div className="w-full max-w-xs space-y-3">
        <div>
          <div className="flex justify-between text-[10px] text-gray-500 mb-1">
            <span>Leader Safety (trust, support)</span>
            <span>{safetyLevel}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="100"
            value={safetyLevel}
            onChange={(e) => setSafetyLevel(Number(e.target.value))}
            className="w-full accent-green-500"
          />
        </div>
        <div>
          <div className="flex justify-between text-[10px] text-gray-500 mb-1">
            <span>External Threats</span>
            <span>{threatLevel}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="100"
            value={threatLevel}
            onChange={(e) => setThreatLevel(Number(e.target.value))}
            className="w-full accent-red-500"
          />
        </div>
      </div>

      {/* Team behavior */}
      <motion.div
        key={behavior.color}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`w-full max-w-xs p-3 rounded-lg border text-center ${
          behavior.color === 'green'
            ? 'bg-green-500/10 border-green-500/30'
            : behavior.color === 'amber'
            ? 'bg-amber-500/10 border-amber-500/30'
            : 'bg-red-500/10 border-red-500/30'
        }`}
      >
        <span className="text-xl">{behavior.emoji}</span>
        <p className={`text-xs mt-1 ${
          behavior.color === 'green'
            ? 'text-green-400'
            : behavior.color === 'amber'
            ? 'text-amber-400'
            : 'text-red-400'
        }`}>
          Team is: {behavior.text}
        </p>
      </motion.div>

      <p className="text-[10px] text-gray-500 text-center">
        From "Leaders Eat Last" by Simon Sinek
      </p>
    </div>
  );
}

export default CircleOfSafety;
