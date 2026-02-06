import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers } from 'lucide-react';

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
    <div className="relative overflow-hidden rounded-2xl">
      {/* Dark Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/[0.03] via-transparent to-blue-500/[0.02]" />
      <div className="absolute inset-0 border border-white/[0.1] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-sky-500/20 to-sky-600/10 flex items-center justify-center border border-sky-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
            <Layers className="w-4 h-4 text-sky-400" />
          </div>
          <span className="text-sm font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            The Iceberg Model
          </span>
        </div>

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
            className={`text-xs px-4 py-2 rounded-lg transition-all border backdrop-blur-sm ${
              showAll
                ? 'bg-sky-500/15 text-sky-400 border-sky-500/30 shadow-[0_0_12px_rgba(56,189,248,0.15)]'
                : 'bg-white/[0.04] border-white/10 text-white/50 hover:bg-white/[0.08] hover:text-white/70'
            }`}
          >
            {showAll ? 'Hide underwater' : 'See below the surface'}
          </button>

          {/* Info panel */}
          <AnimatePresence mode="wait">
            {activeData && (
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="relative overflow-hidden rounded-xl p-4 max-w-xs text-center border border-white/[0.08]"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="text-sm font-bold mb-1" style={{ color: activeData.color }}>
                  {activeData.label}
                </div>
                <p className="text-xs text-white/60 mb-3">{activeData.description}</p>
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

          <p className="text-[10px] text-white/50 text-center max-w-xs">
            Click on each layer to explore what's hidden beneath success.
          </p>
        </div>
      </div>
    </div>
  );
}

export default IcebergModel;
