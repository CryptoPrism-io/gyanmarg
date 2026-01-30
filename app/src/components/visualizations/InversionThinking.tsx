import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Example {
  id: string;
  goal: string;
  forward: string[];
  inverted: string[];
  insight: string;
  color: string;
}

const examples: Example[] = [
  {
    id: 'success',
    goal: 'How to succeed',
    forward: ['Work hard', 'Set goals', 'Network', 'Learn skills'],
    inverted: ['Avoid laziness', 'Don\'t quit early', 'Don\'t burn bridges', 'Don\'t stop learning'],
    insight: 'Sometimes avoiding failure is easier than chasing success',
    color: '#22C55E',
  },
  {
    id: 'happy',
    goal: 'How to be happy',
    forward: ['Find passion', 'Make money', 'Find love', 'Travel'],
    inverted: ['Avoid envy', 'Don\'t compare', 'Avoid toxic people', 'Don\'t neglect health'],
    insight: 'Happiness often comes from removing negatives, not adding positives',
    color: '#F59E0B',
  },
  {
    id: 'invest',
    goal: 'How to invest well',
    forward: ['Find winners', 'Time the market', 'Pick hot stocks'],
    inverted: ['Avoid big losses', 'Don\'t panic sell', 'Don\'t chase trends', 'Avoid fees'],
    insight: 'Buffett: Rule 1 - Don\'t lose money. Rule 2 - See Rule 1',
    color: '#3B82F6',
  },
];

export function InversionThinking() {
  const [activeExample, setActiveExample] = useState(0);
  const [showInverted, setShowInverted] = useState(false);

  const example = examples[activeExample];

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Example selector */}
      <div className="flex gap-2">
        {examples.map((ex, index) => (
          <button
            key={ex.id}
            onClick={() => {
              setActiveExample(index);
              setShowInverted(false);
            }}
            className={`text-[10px] px-3 py-1.5 rounded-full transition-all border ${
              activeExample === index
                ? 'bg-white/10 text-white'
                : 'text-gray-500 hover:text-gray-300 border-transparent'
            }`}
            style={{
              borderColor: activeExample === index ? ex.color : 'transparent',
              color: activeExample === index ? ex.color : undefined,
            }}
          >
            {ex.goal}
          </button>
        ))}
      </div>

      {/* Main visualization */}
      <div className="w-full max-w-xs">
        {/* Question */}
        <div
          className="text-center p-3 rounded-xl border mb-4"
          style={{
            backgroundColor: `${example.color}15`,
            borderColor: `${example.color}40`,
          }}
        >
          <p className="text-sm font-medium" style={{ color: example.color }}>
            {example.goal}?
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-4">
          <div className="flex bg-[#111113] rounded-lg p-1 border border-gray-800">
            <button
              onClick={() => setShowInverted(false)}
              className={`text-xs px-3 py-1.5 rounded-md transition-all ${
                !showInverted ? 'bg-white/10 text-white' : 'text-gray-500'
              }`}
            >
              Forward →
            </button>
            <button
              onClick={() => setShowInverted(true)}
              className={`text-xs px-3 py-1.5 rounded-md transition-all ${
                showInverted ? 'bg-white/10 text-white' : 'text-gray-500'
              }`}
            >
              ← Invert
            </button>
          </div>
        </div>

        {/* Answers */}
        <AnimatePresence mode="wait">
          <motion.div
            key={showInverted ? 'inverted' : 'forward'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-2"
          >
            {(showInverted ? example.inverted : example.forward).map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: showInverted ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`p-2 rounded-lg text-xs ${
                  showInverted
                    ? 'bg-red-500/10 border border-red-500/30 text-red-400'
                    : 'bg-[#111113] border border-gray-800 text-gray-300'
                }`}
              >
                {showInverted ? '✗ ' : '✓ '}{item}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Insight */}
      <div className="bg-[#111113] border border-gray-800 rounded-lg p-3 max-w-xs text-center">
        <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-1">Insight</p>
        <p className="text-xs text-gray-300">{example.insight}</p>
      </div>

      <p className="text-[10px] text-gray-500 text-center max-w-xs">
        <span className="text-amber-400">Charlie Munger:</span> "Invert, always invert."
      </p>
    </div>
  );
}

export default InversionThinking;
