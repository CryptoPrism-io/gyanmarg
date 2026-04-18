import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Crucial Conversations - Restoring Safety
const signals = [
  { behavior: 'Going silent', type: 'silence', description: 'Withdrawing, masking, avoiding' },
  { behavior: 'Getting defensive', type: 'violence', description: 'Controlling, labeling, attacking' },
  { behavior: 'Sarcasm or jabs', type: 'violence', description: 'Indirect aggression' },
  { behavior: 'Stonewalling', type: 'silence', description: 'Refusing to engage' },
];

const restorationTools = [
  { name: 'Apologize', description: 'When appropriate, acknowledge your role', example: 'I\'m sorry I came across harshly' },
  { name: 'Contrast', description: 'Clarify what you don\'t mean vs do mean', example: 'I don\'t want to criticize, I do want to solve this together' },
  { name: 'Create Mutual Purpose', description: 'Find a shared goal', example: 'We both want this project to succeed, right?' },
];

export function SafetyRestoration() {
  const [phase, setPhase] = useState<'detect' | 'restore'>('detect');
  const [detectedSignal, setDetectedSignal] = useState<number | null>(null);
  const [selectedTool, setSelectedTool] = useState<number | null>(null);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] via-transparent to-green-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-4">
          {/* Phase toggle */}
          <div className="relative overflow-hidden flex rounded-lg p-1">
            <div className="absolute inset-0 bg-[var(--viz-tile)] backdrop-blur-sm" />
            <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg" />
            <button
              onClick={() => { setPhase('detect'); setDetectedSignal(null); }}
              className={`relative z-10 px-4 py-2 rounded-lg text-xs transition-all ${
                phase === 'detect' ? 'bg-amber-500/20 text-amber-400' : 'text-gray-500'
              }`}
            >
              1. Detect Danger
            </button>
            <button
              onClick={() => setPhase('restore')}
              className={`relative z-10 px-4 py-2 rounded-lg text-xs transition-all ${
                phase === 'restore' ? 'bg-green-500/20 text-green-400' : 'text-gray-500'
              }`}
            >
              2. Restore Safety
            </button>
          </div>

          <AnimatePresence mode="wait">
            {phase === 'detect' ? (
              <motion.div
                key="detect"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="w-full max-w-xs space-y-3"
              >
                <div className="text-center mb-2">
                  <p className="text-xs text-gray-400">When safety is at risk, people go to:</p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="relative overflow-hidden bg-blue-500/10 border border-blue-500/30 rounded-lg p-2 text-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
                    <div className="relative z-10">
                      <p className="text-[10px] text-blue-400 uppercase">Silence</p>
                      <p className="text-[8px] text-gray-500">Withdrawing from dialogue</p>
                    </div>
                  </div>
                  <div className="relative overflow-hidden bg-red-500/10 border border-red-500/30 rounded-lg p-2 text-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
                    <div className="relative z-10">
                      <p className="text-[10px] text-red-400 uppercase">Violence</p>
                      <p className="text-[8px] text-gray-500">Trying to force meaning</p>
                    </div>
                  </div>
                </div>

                <p className="text-[10px] text-gray-500 text-center">Click to detect the signal:</p>
                {signals.map((signal, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setDetectedSignal(idx)}
                    className={`relative overflow-hidden w-full p-3 rounded-lg border text-left transition-all ${
                      detectedSignal === idx
                        ? signal.type === 'silence'
                          ? 'bg-blue-500/20 border-blue-500/50'
                          : 'bg-red-500/20 border-red-500/50'
                        : 'bg-[var(--viz-tile)] border-[var(--viz-border)] hover:border-[var(--viz-border-light)]'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent" />
                    <div className="relative z-10">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-300">{signal.behavior}</span>
                        {detectedSignal === idx && (
                          <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                            signal.type === 'silence'
                              ? 'bg-blue-500/30 text-blue-400'
                              : 'bg-red-500/30 text-red-400'
                          }`}>
                            {signal.type}
                          </span>
                        )}
                      </div>
                      {detectedSignal === idx && (
                        <p className="text-[10px] text-gray-500 mt-1">{signal.description}</p>
                      )}
                    </div>
                  </motion.button>
                ))}

                {detectedSignal !== null && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
                    <p className="text-[10px] text-amber-400 mb-2">
                      ⚠️ Safety threatened! Time to restore it.
                    </p>
                    <button
                      onClick={() => setPhase('restore')}
                      className="px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-lg text-xs text-green-400 backdrop-blur-sm hover:bg-green-500/30 transition-all"
                    >
                      Learn Restoration →
                    </button>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="restore"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-full max-w-xs space-y-3"
              >
                <p className="text-[10px] text-gray-500 text-center">Safety restoration tools:</p>

                {restorationTools.map((tool, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setSelectedTool(selectedTool === idx ? null : idx)}
                    className={`relative overflow-hidden w-full p-3 rounded-lg border text-left transition-all ${
                      selectedTool === idx
                        ? 'bg-green-500/10 border-green-500/50'
                        : 'bg-[var(--viz-tile)] border-[var(--viz-border)] hover:border-[var(--viz-border-light)]'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent" />
                    <div className="relative z-10">
                      <p className={`text-xs font-medium ${selectedTool === idx ? 'text-green-400' : 'text-gray-300'}`}>
                        {tool.name}
                      </p>
                      <p className="text-[10px] text-gray-500 mt-1">{tool.description}</p>
                      {selectedTool === idx && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-2 p-2 bg-[var(--viz-inner)] rounded text-[10px] text-gray-400 italic backdrop-blur-sm"
                        >
                          "{tool.example}"
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <p className="text-[10px] text-gray-500 text-center">
            From "Crucial Conversations" by Kerry Patterson
          </p>
        </div>
      </div>
    </div>
  );
}

export default SafetyRestoration;
