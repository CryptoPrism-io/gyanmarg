import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User } from 'lucide-react';

interface Layer {
  id: string;
  name: string;
  description: string;
  example: { outcome: string; identity: string };
  color: string;
}

const layers: Layer[] = [
  {
    id: 'outcomes',
    name: 'Outcomes',
    description: 'What you get (results)',
    example: { outcome: 'Lose 20 pounds', identity: 'Become a healthy person' },
    color: '#EF4444',
  },
  {
    id: 'processes',
    name: 'Processes',
    description: 'What you do (habits)',
    example: { outcome: 'Go to gym 3x/week', identity: 'Exercise because I am an athlete' },
    color: '#F59E0B',
  },
  {
    id: 'identity',
    name: 'Identity',
    description: 'What you believe (self-image)',
    example: { outcome: 'I want to quit smoking', identity: 'I am not a smoker' },
    color: '#22C55E',
  },
];

export function IdentityHabits() {
  const [selectedLayer, setSelectedLayer] = useState<string | null>(null);
  const [showTransformation, setShowTransformation] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Glassmorphism layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/[0.03] via-transparent to-amber-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 rounded-xl bg-green-500/20 border border-green-500/30">
            <User className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[var(--viz-secondary)]">Identity-Based Habits</h3>
            <p className="text-[10px] text-[var(--viz-muted)]">Change who you are, not what you do</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5">
          {/* Concentric circles visualization */}
          <div className="relative w-64 h-64">
            {/* Outcomes (outer) */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 cursor-pointer flex items-center justify-center"
              style={{
                backgroundColor: selectedLayer === 'outcomes' ? '#EF444420' : '#EF444410',
                borderColor: selectedLayer === 'outcomes' ? '#EF4444' : '#EF444440',
              }}
              onClick={() => setSelectedLayer(selectedLayer === 'outcomes' ? null : 'outcomes')}
              whileHover={{ scale: 1.02 }}
            >
              <span className="absolute top-4 text-[10px] text-red-400 font-medium">OUTCOMES</span>
            </motion.div>

            {/* Processes (middle) */}
            <motion.div
              className="absolute inset-12 rounded-full border-2 cursor-pointer"
              style={{
                backgroundColor: selectedLayer === 'processes' ? '#F59E0B20' : '#F59E0B10',
                borderColor: selectedLayer === 'processes' ? '#F59E0B' : '#F59E0B40',
              }}
              onClick={() => setSelectedLayer(selectedLayer === 'processes' ? null : 'processes')}
              whileHover={{ scale: 1.02 }}
            >
              <span className="absolute top-3 left-1/2 -translate-x-1/2 text-[10px] text-amber-400 font-medium">PROCESSES</span>
            </motion.div>

            {/* Identity (center) */}
            <motion.div
              className="absolute inset-24 rounded-full border-2 cursor-pointer flex items-center justify-center"
              style={{
                backgroundColor: selectedLayer === 'identity' ? '#22C55E30' : '#22C55E15',
                borderColor: selectedLayer === 'identity' ? '#22C55E' : '#22C55E40',
              }}
              onClick={() => setSelectedLayer(selectedLayer === 'identity' ? null : 'identity')}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-[10px] text-green-400 font-bold text-center px-2">IDENTITY</span>
            </motion.div>

            {/* Direction arrows */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
              <motion.div
                className="text-red-400 text-xs"
                animate={{ x: showTransformation ? 0 : [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                ←
              </motion.div>
              <span className="text-[8px] text-[var(--viz-muted)] rotate-90 whitespace-nowrap">
                {showTransformation ? 'Identity-Based' : 'Outcome-Based'}
              </span>
            </div>
          </div>

          {/* Toggle between approaches */}
          <div className="flex gap-2">
            <button
              onClick={() => setShowTransformation(false)}
              className={`px-3 py-1.5 rounded-lg text-xs transition-all border ${
                !showTransformation
                  ? 'bg-red-500/20 text-red-400 border-red-500/50'
                  : 'text-[var(--viz-muted)] border-[var(--viz-border)]'
              }`}
            >
              Outcome-Based
            </button>
            <button
              onClick={() => setShowTransformation(true)}
              className={`px-3 py-1.5 rounded-lg text-xs transition-all border ${
                showTransformation
                  ? 'bg-green-500/20 text-green-400 border-green-500/50'
                  : 'text-[var(--viz-muted)] border-[var(--viz-border)]'
              }`}
            >
              Identity-Based
            </button>
          </div>

          {/* Layer info */}
          <AnimatePresence mode="wait">
            {selectedLayer && (
              <motion.div
                key={selectedLayer}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="w-full max-w-xs p-3 rounded-xl border relative overflow-hidden"
                style={{
                  backgroundColor: layers.find(l => l.id === selectedLayer)?.color + '15',
                  borderColor: layers.find(l => l.id === selectedLayer)?.color + '40',
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <p className="text-sm font-medium mb-1" style={{ color: layers.find(l => l.id === selectedLayer)?.color }}>
                  {layers.find(l => l.id === selectedLayer)?.name}
                </p>
                <p className="text-xs text-[var(--viz-secondary)] mb-2">
                  {layers.find(l => l.id === selectedLayer)?.description}
                </p>
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div className="p-2 bg-red-500/10 rounded-lg">
                    <p className="text-red-400 mb-1">Outcome focus:</p>
                    <p className="text-[var(--viz-secondary)]">{layers.find(l => l.id === selectedLayer)?.example.outcome}</p>
                  </div>
                  <div className="p-2 bg-green-500/10 rounded-lg">
                    <p className="text-green-400 mb-1">Identity focus:</p>
                    <p className="text-[var(--viz-secondary)]">{layers.find(l => l.id === selectedLayer)?.example.identity}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Comparison */}
          <div className="w-full max-w-xs border border-[var(--viz-border)] rounded-xl p-3 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <AnimatePresence mode="wait">
              {!showTransformation ? (
                <motion.div
                  key="outcome"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="text-xs text-red-400 font-medium mb-2">Outcome-Based (Outside → In)</p>
                  <p className="text-[10px] text-[var(--viz-secondary)]">
                    "I want to lose weight" → Focus on the goal, motivation fades when it gets hard,
                    identity stays the same.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="identity"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="text-xs text-green-400 font-medium mb-2">Identity-Based (Inside → Out)</p>
                  <p className="text-[10px] text-[var(--viz-secondary)]">
                    "I am a healthy person" → Each action is a vote for your identity, habits become
                    part of who you are.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Key insight */}
          <div className="relative overflow-hidden border border-[var(--viz-border)] rounded-xl p-4 max-w-xs" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="text-xs text-[var(--viz-secondary)] leading-relaxed">
              <span className="text-green-400 font-medium">James Clear:</span> "The ultimate form of
              intrinsic motivation is when a habit becomes part of your identity. True behavior change
              is identity change."
            </p>
          </div>

          <p className="text-[10px] text-[var(--viz-muted)]">
            From Atomic Habits by James Clear
          </p>
        </div>
      </div>
    </div>
  );
}

export default IdentityHabits;
