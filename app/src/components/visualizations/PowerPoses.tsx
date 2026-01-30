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
    <div className="flex flex-col items-center gap-4">
      {/* Header */}
      <div className="flex gap-4 justify-center">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center mb-1">
            <span className="text-xl">💪</span>
          </div>
          <p className="text-[10px] text-green-400">Power</p>
        </div>
        <div className="flex items-center text-gray-600">vs</div>
        <div className="text-center">
          <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center mb-1">
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
        className={`w-full max-w-xs p-4 rounded-lg border ${
          pose.type === 'power'
            ? 'bg-green-500/10 border-green-500/30'
            : 'bg-red-500/10 border-red-500/30'
        }`}
      >
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className={`text-sm font-medium ${pose.type === 'power' ? 'text-green-400' : 'text-red-400'}`}>
              {pose.name}
            </p>
            <p className="text-xs text-gray-400 mt-1">{pose.description}</p>
          </div>
          <span className={`text-[10px] px-2 py-0.5 rounded-full ${
            pose.type === 'power'
              ? 'bg-green-500/20 text-green-400'
              : 'bg-red-500/20 text-red-400'
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
      </motion.div>

      {/* Pose selector */}
      <div className="grid grid-cols-2 gap-2">
        {poses.map((p, idx) => (
          <button
            key={idx}
            onClick={() => setActivePose(idx)}
            className={`px-3 py-2 rounded-lg text-[10px] border transition-all ${
              idx === activePose
                ? p.type === 'power'
                  ? 'bg-green-500/20 border-green-500/50 text-green-400'
                  : 'bg-red-500/20 border-red-500/50 text-red-400'
                : 'border-gray-700 text-gray-500 hover:border-gray-600'
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Key insight */}
      <div className="w-full max-w-xs bg-[#111113] border border-gray-800 rounded-lg p-3">
        <p className="text-[10px] text-gray-400 text-center">
          <span className="text-amber-400">Research shows:</span> Holding a power pose for 2 minutes
          increases testosterone and decreases cortisol
        </p>
      </div>

      <p className="text-[10px] text-gray-500 text-center">
        From "The Definitive Book of Body Language" by Allan Pease
      </p>
    </div>
  );
}

export default PowerPoses;
