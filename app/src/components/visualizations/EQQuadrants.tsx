import { useState } from 'react';
import { motion } from 'framer-motion';

// Emotional Intelligence 2.0 - Four EQ Skills
const quadrants = [
  {
    id: 'self-awareness',
    title: 'Self-Awareness',
    description: 'Recognizing your emotions as they happen',
    questions: [
      'What am I feeling right now?',
      'What triggered this emotion?',
      'How is this affecting my thinking?',
    ],
    tips: ['Set emotion check-in alarms', 'Keep a feeling journal', 'Notice body sensations'],
    color: 'blue',
    position: 'top-left',
  },
  {
    id: 'self-management',
    title: 'Self-Management',
    description: 'Choosing your response, not reacting',
    questions: [
      'What response would serve me best?',
      'Can I pause before reacting?',
      'What would my best self do?',
    ],
    tips: ['Count to 6 before responding', 'Breathe deeply', 'Visualize outcomes'],
    color: 'green',
    position: 'top-right',
  },
  {
    id: 'social-awareness',
    title: 'Social Awareness',
    description: 'Reading others\' emotional states',
    questions: [
      'What might they be feeling?',
      'What\'s not being said?',
      'What do they need right now?',
    ],
    tips: ['Listen more than talk', 'Watch body language', 'Ask about feelings'],
    color: 'amber',
    position: 'bottom-left',
  },
  {
    id: 'relationship-management',
    title: 'Relationship Mgmt',
    description: 'Using awareness to navigate interactions',
    questions: [
      'How can I be helpful here?',
      'What would build trust?',
      'How can we both win?',
    ],
    tips: ['Be curious, not judgmental', 'Acknowledge emotions', 'Find common ground'],
    color: 'rose',
    position: 'bottom-right',
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400' },
  green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400' },
  rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/30', text: 'text-rose-400' },
};

export function EQQuadrants() {
  const [activeQuadrant, setActiveQuadrant] = useState<string | null>(null);

  const active = quadrants.find((q) => q.id === activeQuadrant);

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-amber-500/[0.02]" />
      <div className="absolute inset-0 border border-white/[0.1] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-4">
          {/* Quadrant grid */}
          <div className="relative w-56 h-56">
            {/* Axis labels */}
            <p className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] text-gray-500">SELF</p>
            <p className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[8px] text-gray-500">OTHERS</p>
            <p className="absolute top-1/2 -left-8 -translate-y-1/2 text-[8px] text-gray-500 -rotate-90">AWARENESS</p>
            <p className="absolute top-1/2 -right-8 -translate-y-1/2 text-[8px] text-gray-500 rotate-90">ACTION</p>

            {/* Grid */}
            <div className="grid grid-cols-2 gap-1 h-full">
              {quadrants.map((q) => {
                const colors = colorMap[q.color];
                const isActive = activeQuadrant === q.id;
                return (
                  <motion.button
                    key={q.id}
                    onClick={() => setActiveQuadrant(isActive ? null : q.id)}
                    className={`relative overflow-hidden rounded-lg border p-3 transition-all ${
                      isActive ? `${colors.bg} ${colors.border}` : 'bg-white/[0.03] border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.05]'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <p className={`text-[10px] font-medium ${isActive ? colors.text : 'text-gray-400'}`}>
                      {q.title}
                    </p>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Detail panel */}
          {active && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`relative overflow-hidden w-full max-w-xs p-4 rounded-lg border ${colorMap[active.color].bg} ${colorMap[active.color].border}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
              <div className="relative z-10">
                <p className={`text-sm font-medium ${colorMap[active.color].text} mb-1`}>
                  {active.title}
                </p>
                <p className="text-xs text-gray-400 mb-3">{active.description}</p>

                <p className="text-[10px] text-gray-500 uppercase mb-1">Ask yourself:</p>
                <ul className="space-y-1 mb-3">
                  {active.questions.map((q, idx) => (
                    <li key={idx} className="text-[10px] text-gray-300">• {q}</li>
                  ))}
                </ul>

                <p className="text-[10px] text-gray-500 uppercase mb-1">Practice tips:</p>
                <ul className="space-y-1">
                  {active.tips.map((tip, idx) => (
                    <li key={idx} className={`text-[10px] ${colorMap[active.color].text}`}>✓ {tip}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          <p className="text-[10px] text-gray-500 text-center">
            From "Emotional Intelligence 2.0" by Travis Bradberry
          </p>
        </div>
      </div>
    </div>
  );
}

export default EQQuadrants;
