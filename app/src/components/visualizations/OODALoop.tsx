import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

interface Stage {
  id: string;
  name: string;
  short: string;
  description: string;
  examples: string[];
  color: string;
}

const stages: Stage[] = [
  {
    id: 'observe',
    name: 'Observe',
    short: 'O',
    description: 'Gather information from the environment',
    examples: ['See competitor move', 'Notice market shift', 'Read customer feedback'],
    color: '#3B82F6',
  },
  {
    id: 'orient',
    name: 'Orient',
    short: 'O',
    description: 'Analyze and synthesize observations',
    examples: ['Process through experience', 'Apply mental models', 'Consider implications'],
    color: '#8B5CF6',
  },
  {
    id: 'decide',
    name: 'Decide',
    short: 'D',
    description: 'Determine a course of action',
    examples: ['Choose best option', 'Commit to strategy', 'Plan execution'],
    color: '#F59E0B',
  },
  {
    id: 'act',
    name: 'Act',
    short: 'A',
    description: 'Execute the decision',
    examples: ['Implement plan', 'Take action', 'Start the cycle again'],
    color: '#22C55E',
  },
];

export function OODALoop() {
  const [activeStage, setActiveStage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveStage(prev => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const stage = stages[activeStage];

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Glassmorphism layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.03] via-transparent to-green-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
            <RefreshCw className="w-4 h-4 text-purple-400" />
          </div>
          <h3 className="text-sm font-medium text-[var(--viz-secondary)]">OODA Loop</h3>
        </div>

        <div className="flex flex-col items-center gap-4">
          {/* Horizontal loop visualization */}
          <div className="flex items-center gap-2">
            {stages.map((s, index) => {
              const isActive = activeStage === index;

              return (
                <div key={s.id} className="flex items-center">
                  <motion.button
                    onClick={() => {
                      setActiveStage(index);
                      setIsAutoPlaying(false);
                    }}
                    className="w-12 h-12 rounded-full flex items-center justify-center
                             border-2 transition-all cursor-pointer"
                    style={{
                      backgroundColor: isActive ? `${s.color}20` : 'rgba(255,255,255,0.03)',
                      borderColor: isActive ? s.color : 'rgba(255,255,255,0.1)',
                    }}
                    animate={isActive ? { scale: 1.15 } : { scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span
                      className="text-sm font-bold"
                      style={{ color: isActive ? s.color : 'rgba(255,255,255,0.6)' }}
                    >
                      {s.short}
                    </span>
                  </motion.button>

                  {/* Arrow to next */}
                  {index < 3 && (
                    <motion.div
                      className="mx-1 text-lg"
                      animate={{
                        color: isActive ? s.color : 'rgba(255,255,255,0.2)',
                        x: isActive ? [0, 4, 0] : 0,
                      }}
                      transition={{ x: { repeat: Infinity, duration: 0.8 } }}
                    >
                      →
                    </motion.div>
                  )}
                </div>
              );
            })}

            {/* Loop back arrow */}
            <motion.div
              className="ml-1 text-lg"
              animate={{
                color: activeStage === 3 ? stages[3].color : 'rgba(255,255,255,0.2)',
                x: activeStage === 3 ? [0, 4, 0] : 0,
              }}
              transition={{ x: { repeat: Infinity, duration: 0.8 } }}
            >
              ↻
            </motion.div>
          </div>

          {/* Stage labels */}
          <div className="flex items-center gap-6 text-[10px]">
            {stages.map((s, index) => (
              <span
                key={s.id}
                className="transition-colors"
                style={{ color: activeStage === index ? s.color : 'rgba(255,255,255,0.4)' }}
              >
                {s.name}
              </span>
            ))}
          </div>

          {/* Active stage details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="w-full max-w-xs"
            >
              <div
                className="p-4 rounded-lg border text-center"
                style={{
                  backgroundColor: `${stage.color}10`,
                  borderColor: `${stage.color}30`,
                }}
              >
                <h3 className="text-lg font-bold mb-2" style={{ color: stage.color }}>
                  {stage.name}
                </h3>
                <p className="text-xs text-[var(--viz-secondary)] mb-3">{stage.description}</p>

                <div className="space-y-1">
                  {stage.examples.map((example, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="text-[10px] text-[var(--viz-muted)] bg-[var(--viz-inner)] px-2 py-1 rounded"
                    >
                      {example}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
              isAutoPlaying
                ? 'bg-green-500/10 border-green-500/30 text-green-400'
                : 'border-[var(--viz-border)] text-[var(--viz-muted)] hover:text-[var(--viz-secondary)]'
            }`}
          >
            {isAutoPlaying ? '⏸ Auto-playing' : '▶ Auto-play'}
          </button>

          {/* Key insight */}
          <div className="relative overflow-hidden rounded-lg max-w-xs">
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
            />
            <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="relative p-3 text-center">
              <p className="text-xs text-[var(--viz-secondary)]">
                <span className="text-blue-400 font-medium">Key insight:</span> The side that
                cycles through OODA faster gains the advantage. Speed of adaptation beats raw power.
              </p>
            </div>
          </div>

          <p className="text-[10px] text-[var(--viz-muted)] text-center max-w-xs">
            Click stages to explore • John Boyd (Fighter Pilot Strategist)
          </p>
        </div>
      </div>
    </div>
  );
}

export default OODALoop;
