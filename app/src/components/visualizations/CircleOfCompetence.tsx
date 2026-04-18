import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Circle {
  id: string;
  label: string;
  description: string;
  example: string;
  color: string;
  radius: number;
}

const circles: Circle[] = [
  {
    id: 'unknown',
    label: 'Unknown Unknowns',
    description: 'Things you don\'t even know you don\'t know. The vast ocean of knowledge beyond your awareness.',
    example: 'Fields you\'ve never encountered',
    color: '#374151',
    radius: 100,
  },
  {
    id: 'known-unknown',
    label: 'Known Unknowns',
    description: 'Areas you know exist but haven\'t mastered. Your growth opportunities.',
    example: 'Skills on your learning list',
    color: '#6B7280',
    radius: 75,
  },
  {
    id: 'circle',
    label: 'Circle of Competence',
    description: 'Your true expertise zone. Where you have deep, earned knowledge through experience.',
    example: 'Your core professional skills',
    color: '#22C55E',
    radius: 45,
  },
  {
    id: 'core',
    label: 'Core Mastery',
    description: 'Your absolute strengths. Areas where you can teach others and make decisions confidently.',
    example: 'Skills you\'ve practiced 10,000+ hours',
    color: '#F59E0B',
    radius: 20,
  },
];

export function CircleOfCompetence() {
  const [activeCircle, setActiveCircle] = useState<string>('circle');
  const [showExpand, setShowExpand] = useState(false);

  const activeData = circles.find((c) => c.id === activeCircle);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.03] via-transparent to-amber-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-4">
          {/* Main Diagram */}
          <div className="relative w-64 h-64">
        {/* Concentric circles - rendered as divs, not buttons */}
        {circles.map((circle, index) => {
          const isActive = activeCircle === circle.id;
          const size = (circle.radius / 100) * 256;

          return (
            <div
              key={circle.id}
              className="absolute rounded-full border-2 transition-all duration-300"
              style={{
                width: size,
                height: size,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: isActive ? `${circle.color}40` : `${circle.color}15`,
                borderColor: isActive ? circle.color : `${circle.color}40`,
                zIndex: circles.length - index,
                boxShadow: isActive
                  ? `0 0 25px ${circle.color}30, inset 0 0 20px ${circle.color}15`
                  : 'none',
              }}
            />
          );
        })}

        {/* Center icon */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10
                     w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center pointer-events-none"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <span className="text-lg">🎯</span>
        </motion.div>

        {/* Labels on circles - positioned at each ring's top edge */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 text-[8px] text-[var(--viz-muted)] whitespace-nowrap pointer-events-none opacity-70">
          Unknown Unknowns
        </div>
        <div className="absolute top-[13%] left-1/2 -translate-x-1/2 text-[8px] text-[var(--viz-muted)] whitespace-nowrap pointer-events-none">
          Known Unknowns
        </div>
        <div className="absolute top-[28%] left-1/2 -translate-x-1/2 text-[9px] text-green-400 font-medium whitespace-nowrap pointer-events-none">
          Circle of Competence
        </div>
        <div className="absolute top-[41%] left-1/2 -translate-x-1/2 text-[8px] text-amber-400 font-medium whitespace-nowrap pointer-events-none">
          Core Mastery
        </div>
      </div>

      {/* Legend - primary interaction */}
      <div className="flex flex-wrap justify-center gap-2">
        {circles.slice().reverse().map((circle) => (
          <button
            key={circle.id}
            onClick={() => setActiveCircle(circle.id)}
            className={`text-[10px] px-3 py-1.5 rounded-full transition-all duration-200 border ${
              activeCircle === circle.id
                ? 'bg-white/10 text-[var(--viz-text)] border-current'
                : 'text-[var(--viz-muted)] hover:text-[var(--viz-secondary)] border-transparent hover:border-gray-600'
            }`}
            style={{
              color: activeCircle === circle.id ? circle.color : undefined,
              borderColor: activeCircle === circle.id ? circle.color : undefined,
            }}
          >
            {circle.label.split(' ').slice(0, 2).join(' ')}
          </button>
        ))}
      </div>

      {/* Info Panel */}
      <AnimatePresence mode="wait">
        {activeData && (
          <motion.div
            key={activeData.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-[var(--viz-tile)] border border-[var(--viz-border)] rounded-lg p-4 max-w-xs text-center backdrop-blur-sm"
          >
            <div
              className="text-sm font-bold mb-1"
              style={{ color: activeData.color }}
            >
              {activeData.label}
            </div>
            <p className="text-xs text-[var(--viz-muted)] mb-2">{activeData.description}</p>
            <p className="text-xs text-[var(--viz-muted)] italic">e.g., {activeData.example}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Buffett Quote */}
      <button
        onClick={() => setShowExpand(!showExpand)}
        className="text-[10px] text-[var(--viz-muted)] hover:text-[var(--viz-secondary)] transition-colors"
      >
        {showExpand ? '▼ Hide insight' : '▶ Buffett\'s advice'}
      </button>

      <AnimatePresence>
        {showExpand && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="text-xs text-[var(--viz-muted)] italic text-center max-w-xs overflow-hidden"
          >
            "Know your circle of competence, and stick within it. The size of that circle is not very important; knowing its boundaries, however, is vital."
            <span className="block text-amber-500 mt-1 not-italic">— Warren Buffett</span>
          </motion.div>
        )}
      </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default CircleOfCompetence;
