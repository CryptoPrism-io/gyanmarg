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

        {/* Labels on circles */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[9px] text-gray-500 whitespace-nowrap pointer-events-none">
          Unknown Unknowns
        </div>
        <div className="absolute top-[18%] left-1/2 -translate-x-1/2 text-[9px] text-gray-400 whitespace-nowrap pointer-events-none">
          Known Unknowns
        </div>
        <div className="absolute top-[32%] left-1/2 -translate-x-1/2 text-[10px] text-green-400 font-medium whitespace-nowrap pointer-events-none">
          Circle of Competence
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
                ? 'bg-white/10 text-white border-current'
                : 'text-gray-500 hover:text-gray-300 border-transparent hover:border-gray-600'
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
            className="bg-[#111113] border border-gray-800 rounded-lg p-4 max-w-xs text-center"
          >
            <div
              className="text-sm font-bold mb-1"
              style={{ color: activeData.color }}
            >
              {activeData.label}
            </div>
            <p className="text-xs text-gray-400 mb-2">{activeData.description}</p>
            <p className="text-xs text-gray-500 italic">e.g., {activeData.example}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Buffett Quote */}
      <button
        onClick={() => setShowExpand(!showExpand)}
        className="text-[10px] text-gray-500 hover:text-gray-300 transition-colors"
      >
        {showExpand ? '▼ Hide insight' : '▶ Buffett\'s advice'}
      </button>

      <AnimatePresence>
        {showExpand && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="text-xs text-gray-400 italic text-center max-w-xs overflow-hidden"
          >
            "Know your circle of competence, and stick within it. The size of that circle is not very important; knowing its boundaries, however, is vital."
            <span className="block text-amber-500 mt-1 not-italic">— Warren Buffett</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CircleOfCompetence;
