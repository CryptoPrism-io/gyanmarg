import { useState } from 'react';
import { motion } from 'framer-motion';

// Body Language (Pease) - Power vs Submissive Poses
const poses = [
  {
    type: 'power',
    name: 'Steepling Fingers',
    description: 'Fingertips touching, forming a steeple',
    signals: 'Confidence and authority',
    when: 'When you want to project expertise',
  },
  {
    type: 'power',
    name: 'Hands on Hips',
    description: 'Arms akimbo, taking up space',
    signals: 'Dominance and readiness',
    when: 'Before important conversations',
  },
  {
    type: 'submissive',
    name: 'Arms Crossed Low',
    description: 'Arms wrapped around body',
    signals: 'Insecurity, self-protection',
    when: 'When feeling threatened',
  },
  {
    type: 'submissive',
    name: 'Hunched Shoulders',
    description: 'Making yourself smaller',
    signals: 'Low confidence, submission',
    when: 'Automatic stress response',
  },
];

export function PowerPoses() {
  const [activePose, setActivePose] = useState(0);
  const pose = poses[activePose];

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/[0.03] via-transparent to-red-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-4">
          {/* Header */}
          <div className="flex gap-4 justify-center">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center mb-1 backdrop-blur-sm">
                <span className="text-xl">💪</span>
              </div>
              <p className="text-[10px] text-green-400">Power</p>
            </div>
            <div className="flex items-center text-gray-600">vs</div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center mb-1 backdrop-blur-sm">
                <span className="text-xl">😔</span>
              </div>
              <p className="text-[10px] text-red-400">Submissive</p>
            </div>
          </div>

          {/* Pose visualization */}
          <motion.div
            key={activePose}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`relative w-full max-w-xs overflow-hidden rounded-xl ${
              pose.type === 'power'
                ? 'border border-green-500/30'
                : 'border border-red-500/30'
            }`}
          >
            {/* Inner glass effect */}
            <div className={`absolute inset-0 ${
              pose.type === 'power'
                ? 'bg-gradient-to-br from-green-500/10 via-green-500/5 to-transparent'
                : 'bg-gradient-to-br from-red-500/10 via-red-500/5 to-transparent'
            } backdrop-blur-sm`} />
            <div className="absolute inset-0 border border-white/[0.05] rounded-xl" />

            <div className="relative z-10 p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className={`text-sm font-medium ${pose.type === 'power' ? 'text-green-400' : 'text-red-400'}`}>
                    {pose.name}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{pose.description}</p>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full backdrop-blur-sm ${
                  pose.type === 'power'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}>
                  {pose.type}
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-gray-500">Signals: </span>
                  <span className="text-gray-300">{pose.signals}</span>
                </div>
                <div>
                  <span className="text-gray-500">Best used: </span>
                  <span className="text-gray-300">{pose.when}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pose selector */}
          <div className="grid grid-cols-2 gap-2">
            {poses.map((p, idx) => (
              <button
                key={idx}
                onClick={() => setActivePose(idx)}
                className={`px-3 py-2 rounded-lg text-[10px] border transition-all backdrop-blur-sm ${
                  idx === activePose
                    ? p.type === 'power'
                      ? 'bg-green-500/20 border-green-500/50 text-green-400'
                      : 'bg-red-500/20 border-red-500/50 text-red-400'
                    : 'border-[var(--viz-border-light)] bg-[var(--viz-tile)] text-gray-500 hover:border-[var(--viz-border-light)] hover:bg-[var(--viz-tile)]'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* Key insight */}
          <div className="relative w-full max-w-xs overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm" />
            <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg" />
            <div className="relative z-10 p-3">
              <p className="text-[10px] text-gray-400 text-center">
                <span className="text-amber-400">Research shows:</span> Holding a power pose for 2 minutes
                increases testosterone and decreases cortisol
              </p>
            </div>
          </div>

          <p className="text-[10px] text-gray-500 text-center">
            From "The Definitive Book of Body Language" by Allan Pease
          </p>
        </div>
      </div>
    </div>
  );
}

export default PowerPoses;
