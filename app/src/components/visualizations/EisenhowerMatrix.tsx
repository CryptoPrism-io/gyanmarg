import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <div className="flex flex-col items-center gap-4">
      {/* Axis labels */}
      <div className="text-[10px] text-gray-400 font-medium">← URGENT →</div>

      <div className="flex items-center gap-2">
        {/* Y-axis label */}
        <div className="text-[10px] text-gray-400 font-medium -rotate-90 whitespace-nowrap">
          ← IMPORTANT →
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-2 gap-1 w-64 h-64">
          {quadrants.map((quadrant) => {
            const isActive = activeQuadrant === quadrant.id;
            return (
              <motion.button
                key={quadrant.id}
                onClick={() => setActiveQuadrant(quadrant.id)}
                className="relative rounded-xl border-2 transition-all duration-300 flex flex-col items-center justify-center p-2"
                style={{
                  backgroundColor: isActive ? `${quadrant.color}30` : `${quadrant.color}10`,
                  borderColor: isActive ? quadrant.color : `${quadrant.color}40`,
                  boxShadow: isActive ? `0 0 20px ${quadrant.color}30` : 'none',
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className="text-lg font-bold mb-1"
                  style={{ color: quadrant.color }}
                >
                  {quadrant.label}
                </div>
                <div className="text-[10px] text-gray-400">{quadrant.action}</div>

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
      <div className="flex justify-center gap-8 text-[9px] text-gray-500">
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
            className="bg-[#111113] border border-gray-800 rounded-lg p-4 max-w-xs text-center"
          >
            <div className="text-sm font-bold mb-1" style={{ color: activeData.color }}>
              {activeData.action}
            </div>
            <p className="text-xs text-gray-400 mb-3">{activeData.description}</p>
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

      <p className="text-[10px] text-gray-500 text-center max-w-xs">
        <span className="text-green-400 font-medium">Pro tip:</span> Spend most time in Quadrant 2 (Schedule) to prevent Quadrant 1 crises.
      </p>
    </div>
  );
}

export default EisenhowerMatrix;
