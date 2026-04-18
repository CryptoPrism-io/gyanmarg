import { useState } from 'react';
import { motion } from 'framer-motion';

// Extreme Ownership - Take complete responsibility
const scenarios = [
  {
    situation: 'The project failed',
    victim: 'The client kept changing requirements',
    owner: 'I should have clarified requirements upfront and set change management expectations',
  },
  {
    situation: 'Team missed the deadline',
    victim: 'My team didn\'t work hard enough',
    owner: 'I failed to set clear priorities, remove obstacles, and check progress earlier',
  },
  {
    situation: 'Communication breakdown',
    victim: 'They didn\'t tell me what I needed to know',
    owner: 'I should have asked better questions and established communication protocols',
  },
  {
    situation: 'Budget overrun',
    victim: 'Finance didn\'t allocate enough resources',
    owner: 'I should have built a more accurate budget and tracked spending more closely',
  },
];

export function ExtremeOwnershipPrinciple() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [showOwnership, setShowOwnership] = useState(false);

  const scenario = scenarios[activeScenario];

  const nextScenario = () => {
    setActiveScenario((prev) => (prev + 1) % scenarios.length);
    setShowOwnership(false);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-500/[0.03] via-transparent to-green-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-4">
          {/* Header */}
          <div className="w-full max-w-xs bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 text-center">
            <p className="text-xs text-slate-400 uppercase tracking-wide">Extreme Ownership</p>
            <p className="text-sm text-[var(--viz-secondary)] font-medium mt-2">
              "There are no bad teams, only bad leaders"
            </p>
          </div>

          {/* Scenario */}
          <div className="w-full max-w-xs">
            <div className="bg-[var(--viz-tile)] backdrop-blur-sm border border-[var(--viz-border)] rounded-lg p-4 mb-3">
              <p className="text-[10px] text-[var(--viz-muted)] uppercase tracking-wide mb-2">
                Scenario {activeScenario + 1}/{scenarios.length}
              </p>
              <p className="text-sm text-[var(--viz-secondary)]">{scenario.situation}</p>
            </div>

            {/* Two response options */}
            <div className="grid grid-cols-2 gap-3">
              {/* Victim response */}
              <motion.div
                className={`p-3 rounded-lg border backdrop-blur-sm transition-all ${
                  showOwnership
                    ? 'bg-red-500/5 border-red-500/20 opacity-50'
                    : 'bg-red-500/10 border-red-500/30'
                }`}
              >
                <p className="text-[10px] text-red-400 uppercase tracking-wide mb-2">
                  Victim Mindset
                </p>
                <p className="text-[10px] text-[var(--viz-muted)]">{scenario.victim}</p>
              </motion.div>

              {/* Owner response */}
              <motion.button
                onClick={() => setShowOwnership(true)}
                className={`p-3 rounded-lg border backdrop-blur-sm text-left transition-all ${
                  showOwnership
                    ? 'bg-green-500/20 border-green-500/50'
                    : 'bg-[var(--viz-tile)] border-[var(--viz-border)] hover:border-green-500/30'
                }`}
              >
                <p className="text-[10px] text-green-400 uppercase tracking-wide mb-2">
                  Extreme Ownership
                </p>
                {showOwnership ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[10px] text-[var(--viz-secondary)]"
                  >
                    {scenario.owner}
                  </motion.p>
                ) : (
                  <p className="text-[10px] text-gray-600">Click to reveal</p>
                )}
              </motion.button>
            </div>
          </div>

          {/* Navigation */}
          {showOwnership && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={nextScenario}
              className="px-4 py-2 bg-[var(--viz-tile)] backdrop-blur-sm border border-[var(--viz-border-light)] rounded-lg text-xs text-[var(--viz-muted)] hover:text-[var(--viz-secondary)]"
            >
              Next scenario
            </motion.button>
          )}

          {/* Key principle */}
          <div className="w-full max-w-xs bg-slate-500/10 backdrop-blur-sm border border-slate-500/30 rounded-lg p-3">
            <p className="text-[10px] text-slate-400 text-center">
              When you own everything in your world, you can change everything in your world.
            </p>
          </div>

          <p className="text-[10px] text-[var(--viz-muted)] text-center">
            From "Extreme Ownership" by Jocko Willink
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExtremeOwnershipPrinciple;
