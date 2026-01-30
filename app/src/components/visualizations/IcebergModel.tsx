import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Layer {
  id: string;
  label: string;
  description: string;
  items: string[];
  color: string;
  visible: boolean;
}

const layers: Layer[] = [
  {
    id: 'success',
    label: 'What People See',
    description: 'The visible tip: achievements, results, and recognition.',
    items: ['Awards', 'Wealth', 'Fame', 'Results', 'Success'],
    color: '#22C55E',
    visible: true,
  },
  {
    id: 'work',
    label: 'Hard Work',
    description: 'The consistent effort put in day after day.',
    items: ['Late nights', 'Practice', 'Repetition', 'Persistence'],
    color: '#3B82F6',
    visible: false,
  },
  {
    id: 'failure',
    label: 'Failure & Rejection',
    description: 'The setbacks that teach and strengthen.',
    items: ['Failed attempts', 'Nos', 'Mistakes', 'Criticism'],
    color: '#8B5CF6',
    visible: false,
  },
  {
    id: 'sacrifice',
    label: 'Sacrifice',
    description: 'What was given up to make room for growth.',
    items: ['Social life', 'Comfort', 'Sleep', 'Short-term pleasure'],
    color: '#F59E0B',
    visible: false,
  },
  {
    id: 'discipline',
    label: 'Discipline & Habits',
    description: 'The daily systems that compound over time.',
    items: ['Routines', 'Self-control', 'Focus', 'Consistency'],
    color: '#EF4444',
    visible: false,
  },
];

export function IcebergModel() {
  const [activeLayer, setActiveLayer] = useState<string>('success');
  const [showAll, setShowAll] = useState(false);

  const activeData = layers.find((l) => l.id === activeLayer);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Iceberg visualization */}
      <div className="relative w-64 h-72">
        {/* Water line */}
        <div className="absolute top-16 left-0 right-0 h-px bg-sky-400/50 z-10">
          <div className="absolute -top-3 left-2 text-[9px] text-sky-400">
            Water Line
          </div>
        </div>

        {/* Sky/Water background */}
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-sky-900/20 to-sky-800/30" />
          <div className="absolute top-16 left-0 right-0 bottom-0 bg-gradient-to-b from-blue-900/40 to-blue-950/60" />
        </div>

        {/* Iceberg layers */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 120">
          {/* Tip (visible) */}
          <motion.path
            d="M 30 28 L 50 8 L 70 28 Z"
            fill={activeLayer === 'success' ? '#22C55E' : '#22C55E80'}
            stroke="#22C55E"
            strokeWidth="0.5"
            style={{ cursor: 'pointer' }}
            onClick={() => setActiveLayer('success')}
            whileHover={{ fill: '#22C55E' }}
          />

          {/* Underwater layers */}
          {(showAll || activeLayer !== 'success') && (
            <>
              <motion.path
                d="M 25 32 L 30 28 L 70 28 L 75 32 L 80 50 L 20 50 Z"
                fill={activeLayer === 'work' ? '#3B82F6' : '#3B82F640'}
                stroke="#3B82F6"
                strokeWidth="0.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ cursor: 'pointer' }}
                onClick={() => setActiveLayer('work')}
                whileHover={{ fill: '#3B82F6' }}
              />
              <motion.path
                d="M 20 50 L 80 50 L 85 70 L 15 70 Z"
                fill={activeLayer === 'failure' ? '#8B5CF6' : '#8B5CF640'}
                stroke="#8B5CF6"
                strokeWidth="0.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                style={{ cursor: 'pointer' }}
                onClick={() => setActiveLayer('failure')}
                whileHover={{ fill: '#8B5CF6' }}
              />
              <motion.path
                d="M 15 70 L 85 70 L 80 90 L 20 90 Z"
                fill={activeLayer === 'sacrifice' ? '#F59E0B' : '#F59E0B40'}
                stroke="#F59E0B"
                strokeWidth="0.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{ cursor: 'pointer' }}
                onClick={() => setActiveLayer('sacrifice')}
                whileHover={{ fill: '#F59E0B' }}
              />
              <motion.path
                d="M 20 90 L 80 90 L 65 110 L 35 110 Z"
                fill={activeLayer === 'discipline' ? '#EF4444' : '#EF444440'}
                stroke="#EF4444"
                strokeWidth="0.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                style={{ cursor: 'pointer' }}
                onClick={() => setActiveLayer('discipline')}
                whileHover={{ fill: '#EF4444' }}
              />
            </>
          )}
        </svg>

        {/* Labels on iceberg */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[8px] text-green-400 font-medium whitespace-nowrap">
          Success
        </div>
        {(showAll || activeLayer !== 'success') && (
          <>
            <div className="absolute top-[35%] left-1/2 -translate-x-1/2 text-[7px] text-blue-400/80 whitespace-nowrap">
              Hard Work
            </div>
            <div className="absolute top-[50%] left-1/2 -translate-x-1/2 text-[7px] text-purple-400/80 whitespace-nowrap">
              Failure
            </div>
            <div className="absolute top-[65%] left-1/2 -translate-x-1/2 text-[7px] text-amber-400/80 whitespace-nowrap">
              Sacrifice
            </div>
            <div className="absolute top-[80%] left-1/2 -translate-x-1/2 text-[7px] text-red-400/80 whitespace-nowrap">
              Discipline
            </div>
          </>
        )}
      </div>

      {/* Toggle underwater view */}
      <button
        onClick={() => setShowAll(!showAll)}
        className={`text-xs px-4 py-2 rounded-lg transition-all ${
          showAll
            ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30'
            : 'bg-gray-800 text-gray-400 hover:text-white'
        }`}
      >
        {showAll ? '🌊 Hide underwater' : '👁️ See below the surface'}
      </button>

      {/* Info panel */}
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
              {activeData.label}
            </div>
            <p className="text-xs text-gray-400 mb-3">{activeData.description}</p>
            <div className="flex flex-wrap justify-center gap-1">
              {activeData.items.map((item, idx) => (
                <span
                  key={idx}
                  className="text-[10px] px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: `${activeData.color}20`,
                    color: activeData.color,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-[10px] text-gray-500 text-center max-w-xs">
        Click on each layer to explore what's hidden beneath success.
      </p>
    </div>
  );
}

export default IcebergModel;
