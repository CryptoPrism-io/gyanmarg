import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid } from 'lucide-react';

interface Quadrant {
  id: string;
  label: string;
  action: string;
  description: string;
  examples: string[];
  color: string;
  position: { x: number; y: number };
}

const quadrants: Quadrant[] = [
  {
    id: 'do',
    label: 'DO',
    action: 'Do First',
    description: 'Urgent AND Important. Crisis mode. Handle these immediately.',
    examples: ['Deadlines', 'Emergencies', 'Critical bugs', 'Health issues'],
    color: '#EF4444',
    position: { x: 0, y: 0 },
  },
  {
    id: 'schedule',
    label: 'SCHEDULE',
    action: 'Schedule It',
    description: 'Important but NOT Urgent. Your growth zone. Plan time for these.',
    examples: ['Learning', 'Exercise', 'Relationships', 'Strategic planning'],
    color: '#22C55E',
    position: { x: 1, y: 0 },
  },
  {
    id: 'delegate',
    label: 'DELEGATE',
    action: 'Delegate It',
    description: 'Urgent but NOT Important. Distractions disguised as priorities.',
    examples: ['Some emails', 'Some meetings', 'Others\' priorities', 'Interruptions'],
    color: '#F59E0B',
    position: { x: 0, y: 1 },
  },
  {
    id: 'eliminate',
    label: 'ELIMINATE',
    action: 'Eliminate It',
    description: 'Neither Urgent nor Important. Time wasters. Cut these ruthlessly.',
    examples: ['Mindless scrolling', 'Gossip', 'Busy work', 'Time killers'],
    color: '#6B7280',
    position: { x: 1, y: 1 },
  },
];

export function EisenhowerMatrix() {
  const [activeQuadrant, setActiveQuadrant] = useState<string>('schedule');

  const activeData = quadrants.find((q) => q.id === activeQuadrant);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Dark Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.03] via-transparent to-red-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center border border-emerald-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
            <LayoutGrid className="w-4 h-4 text-emerald-400" />
          </div>
          <span className="text-sm font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Eisenhower Matrix
          </span>
        </div>

        <div className="flex flex-col items-center gap-4">
          {/* Axis labels */}
          <div className="text-[10px] text-[var(--viz-secondary)] font-medium">&larr; URGENT &rarr;</div>

          <div className="flex items-center gap-2">
            {/* Y-axis label */}
            <div className="text-[10px] text-[var(--viz-secondary)] font-medium -rotate-90 whitespace-nowrap">
              &larr; IMPORTANT &rarr;
            </div>

            {/* Matrix Grid */}
            <div className="grid grid-cols-2 gap-1 w-64 h-64">
              {quadrants.map((quadrant) => {
                const isActive = activeQuadrant === quadrant.id;
                return (
                  <motion.button
                    key={quadrant.id}
                    onClick={() => setActiveQuadrant(quadrant.id)}
                    className="relative overflow-hidden rounded-xl border-2 transition-all duration-300 flex flex-col items-center justify-center p-2"
                    style={{
                      background: isActive
                        ? `linear-gradient(135deg, ${quadrant.color}30 0%, ${quadrant.color}10 100%)`
                        : 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                      borderColor: isActive ? quadrant.color : `${quadrant.color}40`,
                      boxShadow: isActive ? `0 0 20px ${quadrant.color}30` : 'none',
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isActive && (
                      <div
                        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent to-transparent"
                        style={{ background: `linear-gradient(to right, transparent, ${quadrant.color}60, transparent)` }}
                      />
                    )}
                    <div
                      className="text-lg font-bold mb-1"
                      style={{ color: quadrant.color }}
                    >
                      {quadrant.label}
                    </div>
                    <div className="text-[10px] text-[var(--viz-secondary)]">{quadrant.action}</div>

                    {/* Corner indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute top-1 right-1 w-2 h-2 rounded-full"
                        style={{ backgroundColor: quadrant.color }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Quadrant labels on sides */}
          <div className="flex justify-center gap-8 text-[9px] text-[var(--viz-muted)]">
            <span>Important + Urgent</span>
            <span>Important + Not Urgent</span>
          </div>

          {/* Info Panel */}
          <AnimatePresence mode="wait">
            {activeData && (
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="relative overflow-hidden rounded-xl p-4 max-w-xs text-center border border-[var(--viz-border)]"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="text-sm font-bold mb-1" style={{ color: activeData.color }}>
                  {activeData.action}
                </div>
                <p className="text-xs text-[var(--viz-secondary)] mb-3">{activeData.description}</p>
                <div className="flex flex-wrap justify-center gap-1">
                  {activeData.examples.map((example, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: `${activeData.color}20`,
                        color: activeData.color,
                      }}
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="text-[10px] text-[var(--viz-muted)] text-center max-w-xs">
            <span className="text-green-400 font-medium">Pro tip:</span> Spend most time in Quadrant 2 (Schedule) to prevent Quadrant 1 crises.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EisenhowerMatrix;
