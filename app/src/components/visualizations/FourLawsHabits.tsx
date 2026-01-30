import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Law {
  id: string;
  number: number;
  name: string;
  question: string;
  good: { action: string; tactics: string[] };
  bad: { action: string; tactics: string[] };
  color: string;
  icon: string;
}

const laws: Law[] = [
  {
    id: 'cue',
    number: 1,
    name: 'Cue',
    question: 'How can I make it obvious?',
    good: {
      action: 'Make it obvious',
      tactics: ['Implementation intention', 'Habit stacking', 'Design your environment'],
    },
    bad: {
      action: 'Make it invisible',
      tactics: ['Remove cues', 'Out of sight, out of mind', 'Reduce exposure'],
    },
    color: '#3B82F6',
    icon: '👁️',
  },
  {
    id: 'craving',
    number: 2,
    name: 'Craving',
    question: 'How can I make it attractive?',
    good: {
      action: 'Make it attractive',
      tactics: ['Temptation bundling', 'Join a culture', 'Create motivation ritual'],
    },
    bad: {
      action: 'Make it unattractive',
      tactics: ['Reframe your mindset', 'Highlight the benefits of avoiding'],
    },
    color: '#8B5CF6',
    icon: '💫',
  },
  {
    id: 'response',
    number: 3,
    name: 'Response',
    question: 'How can I make it easy?',
    good: {
      action: 'Make it easy',
      tactics: ['Reduce friction', 'Prime the environment', 'Master decisive moments', 'Two-minute rule'],
    },
    bad: {
      action: 'Make it difficult',
      tactics: ['Increase friction', 'Use commitment devices'],
    },
    color: '#22C55E',
    icon: '⚡',
  },
  {
    id: 'reward',
    number: 4,
    name: 'Reward',
    question: 'How can I make it satisfying?',
    good: {
      action: 'Make it satisfying',
      tactics: ['Use reinforcement', 'Track habits', 'Never miss twice'],
    },
    bad: {
      action: 'Make it unsatisfying',
      tactics: ['Get an accountability partner', 'Create a habit contract'],
    },
    color: '#F59E0B',
    icon: '🎁',
  },
];

export function FourLawsHabits() {
  const [activeLaw, setActiveLaw] = useState(0);
  const [mode, setMode] = useState<'good' | 'bad'>('good');

  const law = laws[activeLaw];

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Law selector */}
      <div className="flex gap-2">
        {laws.map((l, index) => (
          <motion.button
            key={l.id}
            onClick={() => setActiveLaw(index)}
            className={`w-12 h-12 rounded-xl border-2 flex flex-col items-center justify-center transition-all ${
              activeLaw === index ? '' : 'opacity-50'
            }`}
            style={{
              backgroundColor: activeLaw === index ? l.color + '20' : 'transparent',
              borderColor: l.color,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg">{l.icon}</span>
            <span className="text-[8px]" style={{ color: l.color }}>{l.number}</span>
          </motion.button>
        ))}
      </div>

      {/* Habit loop visualization */}
      <div className="relative w-48 h-48">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Circle segments */}
          {laws.map((l, index) => {
            const isActive = activeLaw === index;
            const startAngle = index * 90 - 45;
            const endAngle = startAngle + 90;
            const startRad = (startAngle * Math.PI) / 180;
            const endRad = (endAngle * Math.PI) / 180;
            const x1 = 100 + 70 * Math.cos(startRad);
            const y1 = 100 + 70 * Math.sin(startRad);
            const x2 = 100 + 70 * Math.cos(endRad);
            const y2 = 100 + 70 * Math.sin(endRad);

            return (
              <g key={l.id}>
                <path
                  d={`M 100 100 L ${x1} ${y1} A 70 70 0 0 1 ${x2} ${y2} Z`}
                  fill={isActive ? l.color + '40' : l.color + '15'}
                  stroke={l.color}
                  strokeWidth={isActive ? 3 : 1}
                  className="cursor-pointer transition-all"
                  onClick={() => setActiveLaw(index)}
                />
                <text
                  x={100 + 45 * Math.cos((startRad + endRad) / 2)}
                  y={100 + 45 * Math.sin((startRad + endRad) / 2)}
                  fill={l.color}
                  fontSize="10"
                  fontWeight="bold"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {l.number}
                </text>
              </g>
            );
          })}

          {/* Center */}
          <circle cx="100" cy="100" r="25" fill="#111113" stroke="#374151" strokeWidth="2" />
          <text x="100" y="98" fill="#fff" fontSize="8" textAnchor="middle" fontWeight="bold">
            HABIT
          </text>
          <text x="100" y="108" fill="#666" fontSize="7" textAnchor="middle">
            LOOP
          </text>

          {/* Arrows */}
          <defs>
            <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill="#666" />
            </marker>
          </defs>
        </svg>
      </div>

      {/* Mode toggle */}
      <div className="flex gap-2">
        <button
          onClick={() => setMode('good')}
          className={`px-4 py-2 rounded-lg text-xs font-medium border transition-all ${
            mode === 'good'
              ? 'bg-green-500/20 text-green-400 border-green-500/50'
              : 'text-gray-500 border-gray-800'
          }`}
        >
          ✓ Build Good Habit
        </button>
        <button
          onClick={() => setMode('bad')}
          className={`px-4 py-2 rounded-lg text-xs font-medium border transition-all ${
            mode === 'bad'
              ? 'bg-red-500/20 text-red-400 border-red-500/50'
              : 'text-gray-500 border-gray-800'
          }`}
        >
          ✗ Break Bad Habit
        </button>
      </div>

      {/* Law details */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${law.id}-${mode}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="w-full max-w-xs"
        >
          <div
            className="p-4 rounded-xl border"
            style={{
              backgroundColor: law.color + '10',
              borderColor: law.color + '40',
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{law.icon}</span>
              <div>
                <p className="text-sm font-bold" style={{ color: law.color }}>
                  Law {law.number}: {law.name}
                </p>
                <p className="text-[10px] text-gray-500">{law.question}</p>
              </div>
            </div>

            <div
              className={`p-3 rounded-lg mt-3 ${
                mode === 'good' ? 'bg-green-500/10' : 'bg-red-500/10'
              }`}
            >
              <p className={`text-xs font-medium mb-2 ${mode === 'good' ? 'text-green-400' : 'text-red-400'}`}>
                {mode === 'good' ? law.good.action : law.bad.action}
              </p>
              <div className="space-y-1">
                {(mode === 'good' ? law.good.tactics : law.bad.tactics).map((tactic, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[10px] text-gray-400">
                    <span className={mode === 'good' ? 'text-green-400' : 'text-red-400'}>→</span>
                    {tactic}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Summary */}
      <div className="bg-[#111113] border border-gray-800 rounded-xl p-4 max-w-xs">
        <p className="text-xs text-gray-400 leading-relaxed">
          <span className="text-amber-400 font-medium">The Formula:</span> Every habit is a
          feedback loop—Cue triggers Craving, which motivates Response, which provides Reward,
          which reinforces the Cue. Master all four to master your habits.
        </p>
      </div>

      <p className="text-[10px] text-gray-600">From Atomic Habits by James Clear</p>
    </div>
  );
}

export default FourLawsHabits;
