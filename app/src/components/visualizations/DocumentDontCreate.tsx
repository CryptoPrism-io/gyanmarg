import { useState } from 'react';
import { motion } from 'framer-motion';

// Crush It - Document, Don't Create
const contentTypes = [
  {
    type: 'Behind the scenes',
    examples: ['Your morning routine', 'How you make decisions', 'Failures and lessons'],
    icon: '🎬',
  },
  {
    type: 'Work in progress',
    examples: ['Building something live', 'Before/after of projects', 'Messy middle moments'],
    icon: '🔧',
  },
  {
    type: 'Learning journey',
    examples: ['Books you\'re reading', 'Skills you\'re developing', 'Mistakes you made'],
    icon: '📚',
  },
  {
    type: 'Daily insights',
    examples: ['Observations from meetings', 'Industry trends you notice', 'Random thoughts'],
    icon: '💡',
  },
];

const myths = [
  { myth: 'I need a perfect setup', truth: 'Phone camera is enough to start' },
  { myth: 'I need to be an expert', truth: 'Document your learning journey' },
  { myth: 'I need viral content', truth: 'Consistency beats virality' },
  { myth: 'I need more time', truth: 'Document what you\'re already doing' },
];

export function DocumentDontCreate() {
  const [activeType, setActiveType] = useState<number | null>(null);
  const [showMyths, setShowMyths] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Header */}
      <div className="text-center">
        <p className="text-xs text-gray-400">
          Stop trying to <span className="text-red-400">create</span> content.
        </p>
        <p className="text-sm text-green-400 font-medium">Start documenting your journey.</p>
      </div>

      {/* The shift */}
      <div className="w-full max-w-xs grid grid-cols-2 gap-3">
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-center">
          <p className="text-lg mb-1">😰</p>
          <p className="text-xs text-red-400 font-medium">Creating</p>
          <p className="text-[10px] text-gray-500">Pressure, perfectionism, burnout</p>
        </div>
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center">
          <p className="text-lg mb-1">📱</p>
          <p className="text-xs text-green-400 font-medium">Documenting</p>
          <p className="text-[10px] text-gray-500">Authentic, sustainable, easy</p>
        </div>
      </div>

      {/* Content types */}
      <div className="w-full max-w-xs space-y-2">
        <p className="text-[10px] text-gray-500 text-center">What can you document?</p>
        {contentTypes.map((content, idx) => (
          <motion.button
            key={idx}
            onClick={() => setActiveType(activeType === idx ? null : idx)}
            className={`w-full p-3 rounded-lg border text-left transition-all ${
              activeType === idx
                ? 'bg-amber-500/10 border-amber-500/50'
                : 'bg-[#111113] border-gray-800 hover:border-gray-700'
            }`}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{content.icon}</span>
              <span className={`text-xs ${activeType === idx ? 'text-amber-400' : 'text-gray-400'}`}>
                {content.type}
              </span>
            </div>
            {activeType === idx && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-2 pl-7 space-y-1"
              >
                {content.examples.map((ex, i) => (
                  <p key={i} className="text-[10px] text-gray-500">• {ex}</p>
                ))}
              </motion.div>
            )}
          </motion.button>
        ))}
      </div>

      {/* Myths toggle */}
      <button
        onClick={() => setShowMyths(!showMyths)}
        className="text-xs text-purple-400 underline"
      >
        {showMyths ? 'Hide myths' : 'Common myths debunked'}
      </button>

      {showMyths && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-xs space-y-2"
        >
          {myths.map((item, idx) => (
            <div key={idx} className="bg-[#111113] border border-gray-800 rounded-lg p-2">
              <p className="text-[10px] text-red-400 line-through">{item.myth}</p>
              <p className="text-[10px] text-green-400 mt-1">→ {item.truth}</p>
            </div>
          ))}
        </motion.div>
      )}

      {/* Key insight */}
      <div className="w-full max-w-xs bg-amber-500/10 border border-amber-500/30 rounded-lg p-3">
        <p className="text-[10px] text-amber-400 text-center">
          <span className="font-medium">Gary's formula:</span> Your life IS the content.
          Just hit record and share the journey.
        </p>
      </div>

      <p className="text-[10px] text-gray-500 text-center">
        From "Crushing It!" by Gary Vaynerchuk
      </p>
    </div>
  );
}

export default DocumentDontCreate;
