import { useState } from 'react';
import { motion } from 'framer-motion';

// Talk Like TED - The Rule of Three
const examples = [
  { context: 'Steve Jobs', points: ['Simple', 'Beautiful', 'Powerful'] },
  { context: 'Julius Caesar', points: ['Veni', 'Vidi', 'Vici'] },
  { context: 'Life, Liberty', points: ['Life', 'Liberty', 'Pursuit of Happiness'] },
];

export function RuleOfThree() {
  const [activeExample, setActiveExample] = useState(0);
  const [userPoints, setUserPoints] = useState(['', '', '']);

  const example = examples[activeExample];

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] via-transparent to-orange-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-4">
          {/* Working memory diagram */}
          <div className="relative w-full max-w-xs">
            <div className="flex justify-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <motion.div
                  key={num}
                  className={`relative overflow-hidden w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${
                    num <= 3 ? 'text-green-400' : 'text-red-400/50'
                  }`}
                  animate={{ opacity: num <= 3 ? 1 : 0.4 }}
                >
                  {num <= 3 ? (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/[0.15] via-green-500/[0.08] to-transparent" />
                      <div className="absolute inset-0 border border-green-500/30 rounded-lg" />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-red-500/[0.05]" />
                      <div className="absolute inset-0 border border-red-500/20 rounded-lg" />
                    </>
                  )}
                  <span className="relative z-10">{num}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-[10px] text-center text-[var(--viz-muted)] mb-4">
              Working memory holds 3-4 items easily. More overwhelms.
            </p>
          </div>

          {/* Famous examples */}
          <div className="w-full max-w-xs">
            <p className="text-[10px] text-[var(--viz-muted)] uppercase tracking-wide mb-2 text-center">
              Famous Examples
            </p>
            <div className="flex gap-2 justify-center mb-3">
              {examples.map((ex, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveExample(idx)}
                  className={`relative overflow-hidden px-3 py-1 rounded-full text-[10px] transition-all ${
                    idx === activeExample
                      ? 'text-amber-400'
                      : 'text-[var(--viz-muted)] hover:text-[var(--viz-muted)]'
                  }`}
                >
                  {idx === activeExample ? (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.15] via-amber-500/[0.08] to-transparent" />
                      <div className="absolute inset-0 border border-amber-500/30 rounded-full" />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-[var(--viz-tile)]" />
                      <div className="absolute inset-0 border border-[var(--viz-border)] rounded-full hover:border-[var(--viz-border-light)]" />
                    </>
                  )}
                  <span className="relative z-10">{ex.context}</span>
                </button>
              ))}
            </div>

            <motion.div
              key={activeExample}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative overflow-hidden rounded-lg p-4"
            >
              <div className="absolute inset-0 bg-[var(--viz-tile)] backdrop-blur-sm" />
              <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg" />
              <div className="relative z-10 flex justify-center gap-3">
                {example.points.map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: idx * 0.15 }}
                    className="relative overflow-hidden w-20 h-20 rounded-xl flex items-center justify-center"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.15] via-orange-500/[0.08] to-transparent" />
                    <div className="absolute inset-0 border border-amber-500/30 rounded-xl" />
                    <span className="relative z-10 text-xs text-amber-400 font-medium text-center px-1">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Practice section */}
          <div className="w-full max-w-xs">
            <p className="text-[10px] text-[var(--viz-muted)] uppercase tracking-wide mb-2 text-center">
              Try It: Your 3 Key Points
            </p>
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((idx) => (
                <input
                  key={idx}
                  type="text"
                  placeholder={`Point ${idx + 1}`}
                  value={userPoints[idx]}
                  onChange={(e) => {
                    const newPoints = [...userPoints];
                    newPoints[idx] = e.target.value;
                    setUserPoints(newPoints);
                  }}
                  className="bg-[var(--viz-tile)] border border-[var(--viz-border)] rounded-lg p-2 text-xs text-[var(--viz-secondary)] placeholder-gray-600 text-center focus:border-amber-500/50 focus:outline-none backdrop-blur-sm"
                />
              ))}
            </div>
          </div>

          <p className="text-[10px] text-[var(--viz-muted)] text-center">
            From "Talk Like TED" by Carmine Gallo
          </p>
        </div>
      </div>
    </div>
  );
}

export default RuleOfThree;
