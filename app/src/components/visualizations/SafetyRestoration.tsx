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
    <div className="flex flex-col items-center gap-4">
      {/* Phase toggle */}
      <div className="flex bg-[#111113] rounded-lg p-1 border border-gray-800">
        <button
          onClick={() => { setPhase('detect'); setDetectedSignal(null); }}
          className={`px-4 py-2 rounded-lg text-xs transition-all ${
            phase === 'detect' ? 'bg-amber-500/20 text-amber-400' : 'text-gray-500'
          }`}
        >
          1. Detect Danger
        </button>
        <button
          onClick={() => setPhase('restore')}
          className={`px-4 py-2 rounded-lg text-xs transition-all ${
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
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-2 text-center">
                <p className="text-[10px] text-blue-400 uppercase">Silence</p>
                <p className="text-[8px] text-gray-500">Withdrawing from dialogue</p>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-2 text-center">
                <p className="text-[10px] text-red-400 uppercase">Violence</p>
                <p className="text-[8px] text-gray-500">Trying to force meaning</p>
              </div>
            </div>

            <p className="text-[10px] text-gray-500 text-center">Click to detect the signal:</p>
            {signals.map((signal, idx) => (
              <motion.button
                key={idx}
                onClick={() => setDetectedSignal(idx)}
                className={`w-full p-3 rounded-lg border text-left transition-all ${
                  detectedSignal === idx
                    ? signal.type === 'silence'
                      ? 'bg-blue-500/20 border-blue-500/50'
                      : 'bg-red-500/20 border-red-500/50'
                    : 'bg-[#111113] border-gray-800 hover:border-gray-700'
                }`}
              >
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
              </motion.button>
            ))}

            {detectedSignal !== null && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
                <p className="text-[10px] text-amber-400 mb-2">
                  ⚠️ Safety threatened! Time to restore it.
                </p>
                <button
                  onClick={() => setPhase('restore')}
                  className="px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-lg text-xs text-green-400"
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
                className={`w-full p-3 rounded-lg border text-left transition-all ${
                  selectedTool === idx
                    ? 'bg-green-500/10 border-green-500/50'
                    : 'bg-[#111113] border-gray-800 hover:border-gray-700'
                }`}
              >
                <p className={`text-xs font-medium ${selectedTool === idx ? 'text-green-400' : 'text-gray-300'}`}>
                  {tool.name}
                </p>
                <p className="text-[10px] text-gray-500 mt-1">{tool.description}</p>
                {selectedTool === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-2 p-2 bg-black/30 rounded text-[10px] text-gray-400 italic"
                  >
                    "{tool.example}"
                  </motion.div>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-[10px] text-gray-500 text-center">
        From "Crucial Conversations" by Kerry Patterson
      </p>
    </div>
  );
}

export default SafetyRestoration;
