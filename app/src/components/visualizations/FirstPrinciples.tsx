import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Example {
  id: string;
  title: string;
  convention: string;
  firstPrinciples: string[];
  result: string;
  color: string;
}

const examples: Example[] = [
  {
    id: 'tesla',
    title: 'Tesla Batteries',
    convention: 'Batteries cost $600/kWh - too expensive for EVs',
    firstPrinciples: [
      'What are batteries made of?',
      'Cobalt, nickel, aluminum, carbon, steel...',
      'What do these cost on commodity markets?',
      'Only ~$80/kWh in raw materials!',
    ],
    result: 'Tesla built their own battery production, dramatically cutting costs',
    color: '#EF4444',
  },
  {
    id: 'spacex',
    title: 'SpaceX Rockets',
    convention: 'Rockets cost $65M per launch - space is expensive',
    firstPrinciples: [
      'What is a rocket made of?',
      'Aluminum, titanium, copper, carbon fiber...',
      'What\'s the raw material cost?',
      'Only ~2% of typical rocket price!',
    ],
    result: 'SpaceX builds in-house + reusable rockets = 10x cheaper launches',
    color: '#3B82F6',
  },
  {
    id: 'airbnb',
    title: 'Airbnb',
    convention: 'Travelers need hotels, hotels need buildings',
    firstPrinciples: [
      'What do travelers actually need?',
      'A bed, bathroom, safe location',
      'Who has extra beds?',
      'Regular people with spare rooms!',
    ],
    result: 'Created a $100B company by connecting spare beds with travelers',
    color: '#22C55E',
  },
];

export function FirstPrinciples() {
  const [activeExample, setActiveExample] = useState(0);
  const [revealStep, setRevealStep] = useState(0);

  const example = examples[activeExample];

  const nextStep = () => {
    if (revealStep < example.firstPrinciples.length + 1) {
      setRevealStep(prev => prev + 1);
    }
  };

  const resetExample = () => {
    setRevealStep(0);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Example selector */}
      <div className="flex gap-2">
        {examples.map((ex, index) => (
          <button
            key={ex.id}
            onClick={() => {
              setActiveExample(index);
              setRevealStep(0);
            }}
            className={`text-[10px] px-3 py-1.5 rounded-full transition-all border ${
              activeExample === index
                ? 'text-white'
                : 'text-gray-500 hover:text-gray-300 border-transparent'
            }`}
            style={{
              backgroundColor: activeExample === index ? `${ex.color}20` : undefined,
              borderColor: activeExample === index ? `${ex.color}50` : 'transparent',
              color: activeExample === index ? ex.color : undefined,
            }}
          >
            {ex.title}
          </button>
        ))}
      </div>

      {/* Visualization */}
      <div className="w-full max-w-xs space-y-3">
        {/* Conventional thinking */}
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
          <p className="text-[10px] text-red-400 uppercase tracking-wide mb-1">
            ❌ Conventional Thinking
          </p>
          <p className="text-xs text-red-300">{example.convention}</p>
        </div>

        {/* Arrow down */}
        <div className="text-center">
          <button
            onClick={nextStep}
            disabled={revealStep > example.firstPrinciples.length}
            className="text-gray-500 hover:text-white transition-colors disabled:opacity-50"
          >
            ↓ Break it down ↓
          </button>
        </div>

        {/* First principles breakdown */}
        <div className="space-y-2">
          <AnimatePresence>
            {example.firstPrinciples.slice(0, revealStep).map((principle, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-[#111113] border border-gray-800 rounded-lg p-2 text-xs text-gray-300 flex items-start gap-2"
              >
                <span className="text-amber-400 font-mono text-[10px]">{idx + 1}.</span>
                {principle}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Result */}
        <AnimatePresence>
          {revealStep > example.firstPrinciples.length && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-lg p-3 border"
              style={{
                backgroundColor: `${example.color}15`,
                borderColor: `${example.color}40`,
              }}
            >
              <p className="text-[10px] uppercase tracking-wide mb-1" style={{ color: example.color }}>
                ✓ First Principles Result
              </p>
              <p className="text-xs text-gray-300">{example.result}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Controls */}
        <div className="flex justify-center gap-2">
          {revealStep <= example.firstPrinciples.length ? (
            <button
              onClick={nextStep}
              className="text-xs px-4 py-2 bg-amber-500/10 border border-amber-500/30
                       text-amber-400 rounded-lg hover:bg-amber-500/20 transition-all"
            >
              {revealStep === 0 ? 'Start breakdown' : 'Next insight'} →
            </button>
          ) : (
            <button
              onClick={resetExample}
              className="text-xs px-4 py-2 border border-gray-700
                       text-gray-400 rounded-lg hover:border-gray-600 transition-all"
            >
              ↻ Try again
            </button>
          )}
        </div>
      </div>

      {/* Framework */}
      <div className="bg-[#111113] border border-gray-800 rounded-lg p-3 max-w-xs text-center">
        <p className="text-xs text-gray-400">
          <span className="text-amber-400 font-medium">The method:</span> Question every
          assumption until you reach fundamental truths, then reason up from there.
        </p>
      </div>

      <p className="text-[10px] text-gray-500 text-center">
        "Boil things down to fundamental truths" — Elon Musk
      </p>
    </div>
  );
}

export default FirstPrinciples;
