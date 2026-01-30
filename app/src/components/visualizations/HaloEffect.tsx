import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Bias {
  trait: string;
  assumption: string;
  reality: string;
}

const examples: { label: string; icon: string; biases: Bias[] }[] = [
  {
    label: 'Attractive Person',
    icon: '✨',
    biases: [
      { trait: 'Attractive appearance', assumption: 'Must be intelligent', reality: 'No correlation' },
      { trait: 'Attractive appearance', assumption: 'Must be trustworthy', reality: 'No correlation' },
      { trait: 'Attractive appearance', assumption: 'Must be successful', reality: 'Weak correlation' },
      { trait: 'Attractive appearance', assumption: 'Must be kind', reality: 'No correlation' },
    ],
  },
  {
    label: 'Prestigious University',
    icon: '🎓',
    biases: [
      { trait: 'Ivy League degree', assumption: 'Must be brilliant', reality: 'Selection vs. education' },
      { trait: 'Ivy League degree', assumption: 'Will be a great employee', reality: 'Performance varies' },
      { trait: 'Ivy League degree', assumption: 'Good at everything', reality: 'Narrow expertise often' },
      { trait: 'Ivy League degree', assumption: 'Good judgment', reality: 'Domain-specific' },
    ],
  },
  {
    label: 'Famous Brand',
    icon: '🏷️',
    biases: [
      { trait: 'Apple product', assumption: 'Best quality', reality: 'Comparable alternatives exist' },
      { trait: 'Famous brand', assumption: 'Worth the premium', reality: 'Often not cost-justified' },
      { trait: 'Popular product', assumption: 'Must be the best', reality: 'Marketing matters' },
      { trait: 'Expensive price', assumption: 'Higher quality', reality: 'Price-quality gap varies' },
    ],
  },
];

export function HaloEffect() {
  const [selectedExample, setSelectedExample] = useState(0);
  const [revealedBiases, setRevealedBiases] = useState<number[]>([]);

  const example = examples[selectedExample];

  const toggleBias = (index: number) => {
    setRevealedBiases((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const changeExample = (index: number) => {
    setSelectedExample(index);
    setRevealedBiases([]);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Title */}
      <div className="text-center">
        <h3 className="text-sm font-bold text-amber-400">The Halo Effect</h3>
        <p className="text-[10px] text-gray-500">When one trait colors our entire perception</p>
      </div>

      {/* Visual representation */}
      <div className="relative w-48 h-48">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Halo glow */}
          <motion.circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="3"
            opacity="0.3"
            animate={{
              r: [70, 80, 70],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="100"
            cy="100"
            r="60"
            fill="#F59E0B10"
            stroke="#F59E0B"
            strokeWidth="2"
            animate={{
              r: [60, 65, 60],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />

          {/* Center trait */}
          <circle cx="100" cy="100" r="35" fill="#111113" stroke="#F59E0B" strokeWidth="2" />
          <text x="100" y="95" textAnchor="middle" fontSize="24">
            {example.icon}
          </text>
          <text x="100" y="115" textAnchor="middle" fontSize="8" fill="#F59E0B">
            One Trait
          </text>

          {/* Radiating assumptions */}
          {example.biases.map((_, i) => {
            const angle = (i * 90 - 45) * (Math.PI / 180);
            const x = 100 + 55 * Math.cos(angle);
            const y = 100 + 55 * Math.sin(angle);
            const isRevealed = revealedBiases.includes(i);

            return (
              <motion.g
                key={i}
                className="cursor-pointer"
                onClick={() => toggleBias(i)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <circle
                  cx={x}
                  cy={y}
                  r="15"
                  fill={isRevealed ? '#EF444420' : '#F59E0B20'}
                  stroke={isRevealed ? '#EF4444' : '#F59E0B'}
                  strokeWidth="1"
                />
                <text x={x} y={y + 4} textAnchor="middle" fontSize="8" fill={isRevealed ? '#EF4444' : '#F59E0B'}>
                  {isRevealed ? '❌' : '?'}
                </text>
              </motion.g>
            );
          })}
        </svg>
      </div>

      {/* Example selector */}
      <div className="flex gap-2">
        {examples.map((ex, i) => (
          <button
            key={i}
            onClick={() => changeExample(i)}
            className={`px-3 py-2 rounded-lg text-xs border transition-all ${
              selectedExample === i
                ? 'bg-amber-500/20 border-amber-500 text-amber-400'
                : 'border-gray-700 text-gray-400 hover:border-gray-600'
            }`}
          >
            {ex.icon} {ex.label.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Instruction */}
      <p className="text-[10px] text-gray-500">Click the circles to reveal the false assumptions</p>

      {/* Bias list */}
      <div className="w-full max-w-xs space-y-2">
        {example.biases.map((bias, i) => (
          <motion.div
            key={i}
            onClick={() => toggleBias(i)}
            className={`p-3 rounded-xl border cursor-pointer transition-all ${
              revealedBiases.includes(i)
                ? 'bg-red-500/10 border-red-500/30'
                : 'bg-[#111113] border-gray-800 hover:border-gray-700'
            }`}
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-300">
                  <span className="text-amber-400">{bias.trait}</span> →{' '}
                  <span className={revealedBiases.includes(i) ? 'line-through text-gray-500' : ''}>
                    {bias.assumption}
                  </span>
                </p>
                <AnimatePresence>
                  {revealedBiases.includes(i) && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-[10px] text-red-400 mt-1"
                    >
                      Reality: {bias.reality}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
              <span className="text-lg">{revealedBiases.includes(i) ? '❌' : '❓'}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Defense */}
      <div className="w-full max-w-xs p-3 bg-green-500/10 border border-green-500/30 rounded-xl">
        <p className="text-[10px] text-green-400 font-medium">🛡️ Defense Strategy:</p>
        <p className="text-[10px] text-gray-400">
          Evaluate each trait independently. Ask: "What evidence do I have for THIS specific claim?"
          Don't let one positive trait create a halo of assumed virtues.
        </p>
      </div>

      {/* Counter-effect */}
      <div className="w-full max-w-xs p-3 bg-red-500/10 border border-red-500/30 rounded-xl">
        <p className="text-[10px] text-red-400 font-medium">😈 The Horn Effect (Reverse):</p>
        <p className="text-[10px] text-gray-400">
          One negative trait can create a "devil's horns" effect—we assume other negative qualities
          based on a single flaw.
        </p>
      </div>

      {/* Key insight */}
      <div className="bg-[#111113] border border-gray-800 rounded-xl p-4 max-w-xs">
        <p className="text-xs text-gray-400 leading-relaxed">
          <span className="text-amber-400 font-medium">Daniel Kahneman:</span> "The halo effect
          helps keep our view of the world coherent and simple. But coherence is not accuracy—it
          leads us to form first impressions that are often wrong."
        </p>
      </div>

      <p className="text-[10px] text-gray-600">From Thinking, Fast and Slow</p>
    </div>
  );
}

export default HaloEffect;
