import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass } from 'lucide-react';

interface MeaningSource {
  id: string;
  name: string;
  icon: string;
  description: string;
  examples: string[];
  frankl: string;
  color: string;
}

const meaningSources: MeaningSource[] = [
  {
    id: 'creating',
    name: 'Creating',
    icon: '🎨',
    description: 'Finding meaning through what we give to the world',
    examples: ['Work and achievements', 'Art and creativity', 'Building something', 'Solving problems'],
    frankl: 'Doing a deed, creating a work',
    color: '#22C55E',
  },
  {
    id: 'experiencing',
    name: 'Experiencing',
    icon: '✨',
    description: 'Finding meaning through what we take from the world',
    examples: ['Love and relationships', 'Beauty in nature', 'Art and music', 'Deep conversations'],
    frankl: 'Experiencing something or encountering someone',
    color: '#3B82F6',
  },
  {
    id: 'attitude',
    name: 'Attitude',
    icon: '🔥',
    description: 'Finding meaning through our response to unavoidable suffering',
    examples: ['Turning tragedy into triumph', 'Growth through adversity', 'Choosing hope', 'Being an example'],
    frankl: 'The attitude we take toward unavoidable suffering',
    color: '#F59E0B',
  },
];

export function Logotherapy() {
  const [activeSource, setActiveSource] = useState(0);
  const [showVoid, setShowVoid] = useState(false);

  const source = meaningSources[activeSource];

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Glassmorphism layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] via-transparent to-blue-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 rounded-xl bg-amber-500/20 border border-amber-500/30">
            <Compass className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[var(--viz-secondary)]">Logotherapy</h3>
            <p className="text-[10px] text-[var(--viz-muted)]">Finding meaning in life</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5">
          {/* Core principle */}
          <div className="relative overflow-hidden bg-purple-500/10 border border-purple-500/30 rounded-xl p-3 max-w-xs text-center">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="text-xs text-purple-400 font-medium">
              "He who has a WHY to live can bear almost any HOW"
            </p>
            <p className="text-[10px] text-[var(--viz-muted)] mt-1">— Nietzsche (quoted by Frankl)</p>
          </div>

          {/* Three sources visualization */}
          <div className="relative w-64 h-44">
            <svg viewBox="0 0 280 150" className="w-full h-full">
              {/* Base arc */}
              <path
                d="M 40 130 Q 140 20 240 130"
                fill="none"
                stroke="var(--viz-grid)"
                strokeWidth="2"
              />

              {/* Three pillars */}
              {meaningSources.map((s, index) => {
                const x = 40 + index * 100;
                const isActive = activeSource === index;

                return (
                  <g key={s.id} className="cursor-pointer" onClick={() => setActiveSource(index)}>
                    {/* Pillar */}
                    <motion.rect
                      x={x - 25}
                      y={isActive ? 40 : 50}
                      width="50"
                      height={isActive ? 90 : 80}
                      rx="8"
                      fill={isActive ? s.color + '30' : s.color + '15'}
                      stroke={s.color}
                      strokeWidth={isActive ? 2 : 1}
                      animate={{ y: isActive ? 40 : 50, height: isActive ? 90 : 80 }}
                    />
                    {/* Icon */}
                    <text x={x} y="75" textAnchor="middle" fontSize="20">
                      {s.icon}
                    </text>
                    {/* Label */}
                    <text
                      x={x}
                      y="100"
                      textAnchor="middle"
                      fontSize="9"
                      fill={s.color}
                      fontWeight="bold"
                    >
                      {s.name.toUpperCase()}
                    </text>
                  </g>
                );
              })}

              {/* MEANING label at top */}
              <text x="140" y="20" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">
                MEANING
              </text>
            </svg>
          </div>

          {/* Source selector buttons */}
          <div className="flex gap-2">
            {meaningSources.map((s, index) => (
              <motion.button
                key={s.id}
                onClick={() => setActiveSource(index)}
                className={`px-3 py-1.5 rounded-lg text-xs border transition-all ${
                  activeSource === index ? '' : 'opacity-60'
                }`}
                style={{
                  backgroundColor: activeSource === index ? s.color + '20' : 'transparent',
                  borderColor: s.color,
                  color: s.color,
                }}
                whileTap={{ scale: 0.95 }}
              >
                {s.icon} {s.name}
              </motion.button>
            ))}
          </div>

          {/* Source details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={source.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-xs"
            >
              <div
                className="p-4 rounded-xl border relative overflow-hidden"
                style={{
                  backgroundColor: source.color + '10',
                  borderColor: source.color + '40',
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{source.icon}</span>
                  <div>
                    <h3 className="text-sm font-bold" style={{ color: source.color }}>
                      {source.name}
                    </h3>
                    <p className="text-[10px] text-[var(--viz-muted)]">{source.description}</p>
                  </div>
                </div>

                <div className="space-y-1.5 mb-3">
                  <p className="text-[10px] text-[var(--viz-muted)] uppercase tracking-wide">Examples:</p>
                  {source.examples.map((ex, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[var(--viz-secondary)]">
                      <span style={{ color: source.color }}>•</span>
                      {ex}
                    </div>
                  ))}
                </div>

                <div className="p-2 rounded-lg" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}>
                  <p className="text-[10px] text-[var(--viz-muted)]">Frankl's words:</p>
                  <p className="text-xs text-[var(--viz-secondary)] italic">"{source.frankl}"</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* The Existential Vacuum toggle */}
          <button
            onClick={() => setShowVoid(!showVoid)}
            className="text-xs text-[var(--viz-muted)] hover:text-[var(--viz-secondary)] transition-colors"
          >
            {showVoid ? '▼ Hide' : '▶ Show'} the existential vacuum
          </button>

          <AnimatePresence>
            {showVoid && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="w-full max-w-xs space-y-2"
              >
                <div className="relative overflow-hidden p-3 bg-red-500/10 border border-red-500/30 rounded-xl">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <p className="text-[10px] text-red-400 font-medium mb-1">The Existential Vacuum</p>
                  <p className="text-[10px] text-[var(--viz-secondary)]">
                    When meaning is absent, we fill the void with pleasure, power, or distraction.
                    This leads to depression, aggression, and addiction—the "mass neurotic triad."
                  </p>
                </div>
                <div className="relative overflow-hidden p-3 bg-green-500/10 border border-green-500/30 rounded-xl">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <p className="text-[10px] text-green-400 font-medium mb-1">The Cure</p>
                  <p className="text-[10px] text-[var(--viz-secondary)]">
                    Meaning cannot be invented—it must be discovered. Look for it in creating,
                    experiencing, or your attitude toward suffering.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Key insight */}
          <div className="relative overflow-hidden border border-[var(--viz-border)] rounded-xl p-4 max-w-xs" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="text-xs text-[var(--viz-secondary)] leading-relaxed">
              <span className="text-amber-400 font-medium">Viktor Frankl:</span> "Everything can be
              taken from a man but one thing: the last of the human freedoms—to choose one's attitude
              in any given set of circumstances."
            </p>
          </div>

          <p className="text-[10px] text-[var(--viz-muted)]">From Man's Search for Meaning</p>
        </div>
      </div>
    </div>
  );
}

export default Logotherapy;
