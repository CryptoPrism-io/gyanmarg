import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Example {
  id: string;
  title: string;
  vital: string;
  trivial: string;
  color: string;
}

const examples: Example[] = [
  {
    id: 'business',
    title: 'Business',
    vital: '20% of customers generate 80% of revenue',
    trivial: '80% of customers contribute only 20%',
    color: '#22C55E',
  },
  {
    id: 'productivity',
    title: 'Productivity',
    vital: '20% of tasks produce 80% of results',
    trivial: '80% of tasks are busy work',
    color: '#3B82F6',
  },
  {
    id: 'learning',
    title: 'Learning',
    vital: '20% of concepts cover 80% of use cases',
    trivial: '80% of content is edge cases',
    color: '#8B5CF6',
  },
  {
    id: 'bugs',
    title: 'Software',
    vital: '20% of bugs cause 80% of crashes',
    trivial: '80% of bugs are minor issues',
    color: '#F59E0B',
  },
];

export function ParetoPrinciple() {
  const [activeExample, setActiveExample] = useState(0);
  const [showAnimation, setShowAnimation] = useState(true);

  const example = examples[activeExample];

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Main Visualization */}
      <div className="relative w-72 h-48">
        {/* Background grid */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Grid lines */}
          {[20, 40, 60, 80].map((pos) => (
            <g key={pos}>
              <line x1={pos} y1="0" x2={pos} y2="100" stroke="#1F2937" strokeWidth="0.5" />
              <line x1="0" y1={pos} x2="100" y2={pos} stroke="#1F2937" strokeWidth="0.5" />
            </g>
          ))}
        </svg>

        {/* Bars comparison */}
        <div className="absolute inset-0 flex items-end justify-center gap-8 p-4">
          {/* Input (Effort/Causes) */}
          <div className="flex flex-col items-center gap-2">
            <div className="text-[10px] text-gray-400">Input</div>
            <div className="relative w-20 h-32 bg-gray-800 rounded-lg overflow-hidden">
              <motion.div
                className="absolute bottom-0 w-full"
                style={{ backgroundColor: `${example.color}40` }}
                initial={{ height: 0 }}
                animate={{ height: showAnimation ? '80%' : '80%' }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="absolute top-2 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-400">
                  80%
                </div>
              </motion.div>
              <motion.div
                className="absolute bottom-0 w-full"
                style={{ backgroundColor: example.color }}
                initial={{ height: 0 }}
                animate={{ height: showAnimation ? '20%' : '20%' }}
                transition={{ duration: 1 }}
              >
                <div className="absolute top-1 left-1/2 -translate-x-1/2 text-[10px] font-bold text-white">
                  20%
                </div>
              </motion.div>
            </div>
            <div className="text-[9px] text-gray-500">Effort</div>
          </div>

          {/* Arrow */}
          <motion.div
            className="flex items-center text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <span className="text-2xl">→</span>
          </motion.div>

          {/* Output (Results) */}
          <div className="flex flex-col items-center gap-2">
            <div className="text-[10px] text-gray-400">Output</div>
            <div className="relative w-20 h-32 bg-gray-800 rounded-lg overflow-hidden">
              <motion.div
                className="absolute bottom-0 w-full"
                style={{ backgroundColor: `${example.color}40` }}
                initial={{ height: 0 }}
                animate={{ height: showAnimation ? '20%' : '20%' }}
                transition={{ duration: 1, delay: 1 }}
              >
                <div className="absolute top-1 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gray-400">
                  20%
                </div>
              </motion.div>
              <motion.div
                className="absolute bottom-0 w-full"
                style={{ backgroundColor: example.color }}
                initial={{ height: 0 }}
                animate={{ height: showAnimation ? '80%' : '80%' }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="absolute top-2 left-1/2 -translate-x-1/2 text-xs font-bold text-white">
                  80%
                </div>
              </motion.div>
            </div>
            <div className="text-[9px] text-gray-500">Results</div>
          </div>
        </div>

        {/* The Insight */}
        <motion.div
          className="absolute top-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold"
          style={{ backgroundColor: `${example.color}20`, color: example.color, border: `1px solid ${example.color}40` }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          80/20 Rule
        </motion.div>
      </div>

      {/* Example selector */}
      <div className="flex gap-2 flex-wrap justify-center">
        {examples.map((ex, index) => (
          <motion.button
            key={ex.id}
            onClick={() => {
              setActiveExample(index);
              setShowAnimation(false);
              setTimeout(() => setShowAnimation(true), 50);
            }}
            className={`text-[10px] px-3 py-1.5 rounded-full transition-all border ${
              activeExample === index
                ? 'bg-white/10 text-white'
                : 'text-gray-500 hover:text-gray-300 border-transparent'
            }`}
            style={{
              borderColor: activeExample === index ? ex.color : 'transparent',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {ex.title}
          </motion.button>
        ))}
      </div>

      {/* Info panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={example.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="bg-[#111113] border border-gray-800 rounded-lg p-4 max-w-xs"
        >
          <div className="text-sm font-bold mb-2 text-center" style={{ color: example.color }}>
            {example.title}
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <div
                className="w-2 h-2 rounded-full mt-1 shrink-0"
                style={{ backgroundColor: example.color }}
              />
              <p className="text-xs text-gray-300">{example.vital}</p>
            </div>
            <div className="flex items-start gap-2">
              <div
                className="w-2 h-2 rounded-full mt-1 shrink-0"
                style={{ backgroundColor: `${example.color}40` }}
              />
              <p className="text-xs text-gray-500">{example.trivial}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Action insight */}
      <div className="text-xs text-gray-500 text-center max-w-xs">
        <span className="text-amber-400 font-medium">Key insight:</span> Focus your energy on the vital few, not the trivial many.
      </div>
    </div>
  );
}

export default ParetoPrinciple;
