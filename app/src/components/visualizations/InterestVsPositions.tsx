import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Getting to Yes - Focus on Interests, Not Positions
const examples = [
  {
    conflict: 'Two siblings fight over an orange',
    positionA: '"I want the whole orange!"',
    positionB: '"No, I want it!"',
    interestA: 'Needs the peel for baking a cake',
    interestB: 'Wants the juice to drink',
    solution: 'One gets the peel, one gets the juice. Both win 100%.',
  },
  {
    conflict: 'Employee asks for a raise',
    positionA: '"I need $15,000 more"',
    positionB: '"Budget is frozen"',
    interestA: 'Wants recognition, security, growth',
    interestB: 'Needs to control costs, retain talent',
    solution: 'Title promotion + equity + flexible schedule + bonus structure',
  },
  {
    conflict: 'Roommates argue about thermostat',
    positionA: '"Set it to 72°!"',
    positionB: '"No, 65° saves money!"',
    interestA: 'Wants to feel comfortable at night',
    interestB: 'Worried about utility bills',
    solution: 'Programmable thermostat: 68° at night, 65° during work hours',
  },
];

export function InterestVsPositions() {
  const [exampleIdx, setExampleIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const example = examples[exampleIdx];

  const nextExample = () => {
    setExampleIdx((prev) => (prev + 1) % examples.length);
    setRevealed(false);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.03] via-transparent to-green-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-4 w-full max-w-sm">
          {/* Header */}
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-1">
              Positions are <span className="text-red-400">what you say you want</span>.
              Interests are <span className="text-green-400">why you want it</span>.
            </p>
          </div>

          {/* Scenario */}
          <div className="relative w-full overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm" />
            <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg" />
            <div className="relative z-10 p-3 text-center">
              <p className="text-[10px] text-gray-500 uppercase mb-1">
                Scenario {exampleIdx + 1}/{examples.length}
              </p>
              <p className="text-sm text-gray-300">{example.conflict}</p>
            </div>
          </div>

          {/* The Iceberg */}
          <div className="w-full relative">
            {/* Water surface indicator */}
            <div className="absolute left-0 right-0 top-[88px] flex items-center gap-2 z-10">
              <div className="flex-1 h-px bg-blue-500/50" />
              <span className="text-[8px] text-blue-400 px-2 bg-[var(--viz-bg)]/80 backdrop-blur-sm rounded">SURFACE</span>
              <div className="flex-1 h-px bg-blue-500/50" />
            </div>

            {/* Positions (Above water) - RED = CONFLICT */}
            <div className="mb-4">
              <p className="text-[10px] text-red-400 text-center mb-2 uppercase tracking-wider">
                Positions (Visible)
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-red-500/5 to-transparent backdrop-blur-sm" />
                  <div className="absolute inset-0 border border-red-500/30 rounded-lg" />
                  <div className="relative z-10 p-3">
                    <p className="text-[10px] text-red-400 mb-1">Person A</p>
                    <p className="text-xs text-gray-300 italic">{example.positionA}</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-red-500/5 to-transparent backdrop-blur-sm" />
                  <div className="absolute inset-0 border border-red-500/30 rounded-lg" />
                  <div className="relative z-10 p-3">
                    <p className="text-[10px] text-red-400 mb-1">Person B</p>
                    <p className="text-xs text-gray-300 italic">{example.positionB}</p>
                  </div>
                </div>
              </div>
              <div className="text-center mt-2">
                <span className="text-[10px] text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/30 backdrop-blur-sm">
                  Deadlock
                </span>
              </div>
            </div>

            {/* Interests (Below water) - GREEN = OPPORTUNITY */}
            <AnimatePresence>
              {revealed ? (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4"
                >
                  <p className="text-[10px] text-green-400 text-center mb-2 uppercase tracking-wider">
                    Interests (Hidden)
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative overflow-hidden rounded-lg">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-green-500/5 to-transparent backdrop-blur-sm" />
                      <div className="absolute inset-0 border border-green-500/30 rounded-lg" />
                      <div className="relative z-10 p-3">
                        <p className="text-[10px] text-green-400 mb-1">A's Real Need</p>
                        <p className="text-xs text-gray-300">{example.interestA}</p>
                      </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-green-500/5 to-transparent backdrop-blur-sm" />
                      <div className="absolute inset-0 border border-green-500/30 rounded-lg" />
                      <div className="relative z-10 p-3">
                        <p className="text-[10px] text-green-400 mb-1">B's Real Need</p>
                        <p className="text-xs text-gray-300">{example.interestB}</p>
                      </div>
                    </div>
                  </div>

                  {/* Solution */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="relative mt-4 overflow-hidden rounded-lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/5 to-green-500/10 backdrop-blur-sm" />
                    <div className="absolute inset-0 border border-green-500/30 rounded-lg" />
                    <div className="relative z-10 p-4">
                      <p className="text-[10px] text-green-400 uppercase tracking-wider mb-1">
                        Win-Win Solution
                      </p>
                      <p className="text-sm text-gray-200">{example.solution}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="relative mt-4 overflow-hidden rounded-lg"
                >
                  <div className="absolute inset-0 bg-[var(--viz-tile)] backdrop-blur-sm" />
                  <div className="absolute inset-0 border border-[var(--viz-border-light)] border-dashed rounded-lg" />
                  <div className="relative z-10 p-6 text-center">
                    <p className="text-2xl mb-2">🧊</p>
                    <p className="text-xs text-gray-500">
                      Hidden beneath the surface...
                    </p>
                    <p className="text-[10px] text-gray-600 mt-1">
                      Click below to dig deeper
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2">
            {!revealed ? (
              <motion.button
                onClick={() => setRevealed(true)}
                className="px-5 py-2.5 bg-green-500/20 border border-green-500/50 rounded-lg text-sm text-green-400 hover:bg-green-500/30 transition-all backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Dig Into Interests
              </motion.button>
            ) : (
              <motion.button
                onClick={nextExample}
                className="px-5 py-2.5 bg-blue-500/20 border border-blue-500/50 rounded-lg text-sm text-blue-400 hover:bg-blue-500/30 transition-all backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Next Example
              </motion.button>
            )}
          </div>

          {/* Key insight */}
          <div className="relative w-full overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent backdrop-blur-sm" />
            <div className="absolute inset-0 border border-amber-500/30 rounded-lg" />
            <div className="relative z-10 p-3">
              <p className="text-[10px] text-amber-400 text-center">
                <span className="font-medium">The power question:</span> "Why do you want that?"
                Ask it 3-5 times to find the real interest.
              </p>
            </div>
          </div>

          <p className="text-[10px] text-gray-500 text-center">
            From "Getting to Yes" by Roger Fisher & William Ury
          </p>
        </div>
      </div>
    </div>
  );
}

export default InterestVsPositions;
