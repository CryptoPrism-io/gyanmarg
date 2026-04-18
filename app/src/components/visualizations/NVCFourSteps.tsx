import { useState } from 'react';
import { motion } from 'framer-motion';

// Nonviolent Communication - Four Components
const steps = [
  {
    num: 1,
    name: 'Observation',
    bad: 'You\'re always late',
    good: 'The meeting was at 2:00 and you arrived at 2:15',
    tip: 'State facts without evaluation or judgment',
    color: 'blue',
  },
  {
    num: 2,
    name: 'Feeling',
    bad: 'I feel that you don\'t respect me',
    good: 'I feel frustrated and disappointed',
    tip: '"I feel that..." is a thought, not a feeling',
    color: 'rose',
  },
  {
    num: 3,
    name: 'Need',
    bad: 'You need to be more considerate',
    good: 'I need reliability and respect for my time',
    tip: 'Connect feelings to universal human needs',
    color: 'amber',
  },
  {
    num: 4,
    name: 'Request',
    bad: 'Don\'t be late anymore!',
    good: 'Would you be willing to text if you\'ll be more than 5 minutes late?',
    tip: 'Make specific, actionable requests (not demands)',
    color: 'green',
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400' },
  rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/30', text: 'text-rose-400' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400' },
  green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400' },
};

export function NVCFourSteps() {
  const [activeStep, setActiveStep] = useState(0);
  const [showGood, setShowGood] = useState(false);

  const step = steps[activeStep];
  const colors = colorMap[step.color];

  const nextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
      setShowGood(false);
    }
  };

  const reset = () => {
    setActiveStep(0);
    setShowGood(false);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/[0.03] via-transparent to-green-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-4">
          {/* Progress */}
          <div className="flex gap-2">
            {steps.map((s, idx) => {
              const c = colorMap[s.color];
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveStep(idx);
                    setShowGood(false);
                  }}
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all backdrop-blur-sm ${
                    idx <= activeStep
                      ? `${c.bg} ${c.border} ${c.text}`
                      : 'border-[var(--viz-border-light)] text-gray-600 bg-[var(--viz-tile)]'
                  }`}
                >
                  <span className="text-sm font-bold">{s.num}</span>
                </button>
              );
            })}
          </div>

          {/* Current step */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full max-w-xs"
          >
            <div className={`relative overflow-hidden ${colors.bg} border ${colors.border} rounded-lg p-4 mb-3`}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
              <div className="relative z-10">
                <p className={`text-sm font-medium ${colors.text} mb-1`}>
                  Step {step.num}: {step.name}
                </p>
                <p className="text-[10px] text-[var(--viz-muted)]">{step.tip}</p>
              </div>
            </div>

            {/* Bad example */}
            <div className="relative overflow-hidden bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-2">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent" />
              <div className="relative z-10">
                <p className="text-[10px] text-red-400 uppercase tracking-wide mb-1">❌ Avoid</p>
                <p className="text-xs text-[var(--viz-secondary)] italic">"{step.bad}"</p>
              </div>
            </div>

            {/* Good example */}
            {!showGood ? (
              <button
                onClick={() => setShowGood(true)}
                className="w-full py-3 bg-[var(--viz-tile)] border border-[var(--viz-border)] rounded-lg text-xs text-[var(--viz-muted)] hover:border-green-500/30 hover:bg-[var(--viz-tile)] backdrop-blur-sm transition-all"
              >
                Reveal the NVC way →
              </button>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative overflow-hidden bg-green-500/10 border border-green-500/30 rounded-lg p-3"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent" />
                <div className="relative z-10">
                  <p className="text-[10px] text-green-400 uppercase tracking-wide mb-1">✓ Better</p>
                  <p className="text-xs text-[var(--viz-secondary)] italic">"{step.good}"</p>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Navigation */}
          {showGood && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {activeStep < steps.length - 1 ? (
                <button
                  onClick={nextStep}
                  className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-lg text-xs text-blue-400 backdrop-blur-sm hover:bg-blue-500/30 transition-all"
                >
                  Next Step →
                </button>
              ) : (
                <div className="text-center">
                  <p className="text-xs text-green-400 mb-2">
                    ✓ Complete NVC message built!
                  </p>
                  <button
                    onClick={reset}
                    className="px-4 py-2 bg-[var(--viz-tile)] border border-[var(--viz-border-light)] rounded-lg text-xs text-[var(--viz-muted)] backdrop-blur-sm hover:bg-[var(--viz-tile)] transition-all"
                  >
                    Start Over
                  </button>
                </div>
              )}
            </motion.div>
          )}

          <p className="text-[10px] text-[var(--viz-muted)] text-center">
            From "Nonviolent Communication" by Marshall Rosenberg
          </p>
        </div>
      </div>
    </div>
  );
}

export default NVCFourSteps;
