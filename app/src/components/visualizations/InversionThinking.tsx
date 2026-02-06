import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw } from 'lucide-react';

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
    <div className="relative overflow-hidden rounded-2xl">
      {/* Dark Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.03] via-transparent to-blue-500/[0.02]" />
      <div className="absolute inset-0 border border-white/[0.1] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex items-center justify-center border border-purple-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
            <RotateCcw className="w-4 h-4 text-purple-400" />
          </div>
          <span className="text-sm font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Inversion Thinking
          </span>
        </div>

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
                className={`text-[10px] px-3 py-1.5 rounded-full transition-all border backdrop-blur-sm ${
                  activeExample === index
                    ? 'bg-white/10 text-white'
                    : 'text-white/50 hover:text-white/70 border-transparent'
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
              className="relative overflow-hidden text-center p-3 rounded-xl border mb-4"
              style={{
                background: `linear-gradient(135deg, ${example.color}15 0%, ${example.color}05 100%)`,
                borderColor: `${example.color}40`,
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent to-transparent"
                style={{ background: `linear-gradient(to right, transparent, ${example.color}30, transparent)` }}
              />
              <p className="text-sm font-medium" style={{ color: example.color }}>
                {example.goal}?
              </p>
            </div>

            {/* Toggle */}
            <div className="flex justify-center mb-4">
              <div
                className="flex rounded-lg p-1 border border-white/[0.08]"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                }}
              >
                <button
                  onClick={() => setShowInverted(false)}
                  className={`text-xs px-3 py-1.5 rounded-md transition-all ${
                    !showInverted ? 'bg-white/10 text-white' : 'text-white/50'
                  }`}
                >
                  Forward
                </button>
                <button
                  onClick={() => setShowInverted(true)}
                  className={`text-xs px-3 py-1.5 rounded-md transition-all ${
                    showInverted ? 'bg-white/10 text-white' : 'text-white/50'
                  }`}
                >
                  Invert
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
                    className={`relative overflow-hidden p-2 rounded-lg text-xs border ${
                      showInverted
                        ? 'border-red-500/30 text-red-400'
                        : 'border-white/[0.08] text-white/80'
                    }`}
                    style={{
                      background: showInverted
                        ? 'linear-gradient(135deg, rgba(239,68,68,0.1) 0%, rgba(239,68,68,0.03) 100%)'
                        : 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                    }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                    {showInverted ? 'x ' : '+ '}{item}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Insight */}
          <div
            className="relative overflow-hidden rounded-xl p-3 max-w-xs text-center border border-white/[0.08]"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="text-[10px] text-white/50 uppercase tracking-wide mb-1">Insight</p>
            <p className="text-xs text-white/80">{example.insight}</p>
          </div>

          <p className="text-[10px] text-white/50 text-center max-w-xs">
            <span className="text-amber-400">Charlie Munger:</span> "Invert, always invert."
          </p>
        </div>
      </div>
    </div>
  );
}

export default InversionThinking;
