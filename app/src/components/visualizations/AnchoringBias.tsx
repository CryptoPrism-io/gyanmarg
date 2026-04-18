import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Anchor } from 'lucide-react';

interface Scenario {
  id: string;
  context: string;
  anchor: string;
  anchorValue: number;
  actualValue: number;
  explanation: string;
}

const scenarios: Scenario[] = [
  {
    id: 'salary',
    context: 'Salary Negotiation',
    anchor: 'Recruiter opens: "$80,000"',
    anchorValue: 80000,
    actualValue: 95000,
    explanation: 'First number anchors the negotiation. Counter-anchor high!',
  },
  {
    id: 'car',
    context: 'Buying a Car',
    anchor: 'Sticker price: "$45,000"',
    anchorValue: 45000,
    actualValue: 38000,
    explanation: 'Dealers set high anchors. Research true market value first.',
  },
  {
    id: 'house',
    context: 'Real Estate',
    anchor: 'Listed at: "$500,000"',
    anchorValue: 500000,
    actualValue: 450000,
    explanation: 'Listing price anchors buyers. Comparable sales reveal true value.',
  },
];

export function AnchoringBias() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [showAnchor, setShowAnchor] = useState(false);
  const [userEstimate, setUserEstimate] = useState<number | null>(null);
  const [sliderValue, setSliderValue] = useState(50);

  const scenario = scenarios[activeScenario];

  const getEstimateFromSlider = () => {
    const range = scenario.anchorValue * 0.4;
    return Math.round(scenario.anchorValue - range + (sliderValue / 100) * range * 2);
  };

  const submitEstimate = () => {
    setUserEstimate(getEstimateFromSlider());
  };

  const resetScenario = () => {
    setShowAnchor(false);
    setUserEstimate(null);
    setSliderValue(50);
  };

  const nextScenario = () => {
    setActiveScenario(prev => (prev + 1) % scenarios.length);
    resetScenario();
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Glassmorphism layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.03] via-transparent to-amber-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
            <Anchor className="w-4 h-4 text-purple-400" />
          </div>
          <h3 className="text-sm font-medium text-[var(--viz-secondary)]">Anchoring Bias</h3>
        </div>

        <div className="flex flex-col items-center gap-4">
          {/* Scenario selector */}
          <div className="flex gap-2">
            {scenarios.map((s, index) => (
              <button
                key={s.id}
                onClick={() => {
                  setActiveScenario(index);
                  resetScenario();
                }}
                className={`text-[10px] px-3 py-1.5 rounded-full transition-all border ${
                  activeScenario === index
                    ? 'bg-purple-500/20 text-purple-400 border-purple-500/30'
                    : 'text-[var(--viz-muted)] hover:text-[var(--viz-secondary)] border-transparent'
                }`}
              >
                {s.context}
              </button>
            ))}
          </div>

          {/* Context card */}
          <div className="relative overflow-hidden rounded-lg w-full max-w-xs">
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
            />
            <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="relative p-4 text-center">
              <p className="text-sm text-[var(--viz-secondary)]">{scenario.context}</p>
            </div>
          </div>

          {/* Phase 1: Show anchor */}
          {!showAnchor && (
            <motion.button
              onClick={() => setShowAnchor(true)}
              className="px-4 py-2 bg-purple-500/10 border border-purple-500/30
                       text-purple-400 rounded-lg text-xs hover:bg-purple-500/20 transition-all"
              whileTap={{ scale: 0.95 }}
            >
              Reveal the anchor →
            </motion.button>
          )}

          {/* Anchor reveal */}
          <AnimatePresence>
            {showAnchor && !userEstimate && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-xs space-y-4"
              >
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 text-center">
                  <p className="text-[10px] text-amber-400 uppercase tracking-wide mb-1">The Anchor</p>
                  <p className="text-lg font-bold text-amber-400">{scenario.anchor}</p>
                </div>

                <div className="space-y-2">
                  <p className="text-xs text-[var(--viz-secondary)] text-center">
                    What do you think is fair value?
                  </p>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValue}
                    onChange={(e) => setSliderValue(Number(e.target.value))}
                    className="w-full accent-purple-500"
                  />
                  <p className="text-center text-lg font-bold text-purple-400">
                    ${getEstimateFromSlider().toLocaleString()}
                  </p>
                </div>

                <button
                  onClick={submitEstimate}
                  className="w-full py-2 bg-purple-500/10 border border-purple-500/30
                           text-purple-400 rounded-lg text-xs hover:bg-purple-500/20 transition-all"
                >
                  Lock in estimate
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results */}
          <AnimatePresence>
            {userEstimate && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-xs space-y-3"
              >
                {/* Comparison */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-2">
                    <p className="text-[10px] text-amber-400">Anchor</p>
                    <p className="text-sm font-bold text-amber-400">
                      ${scenario.anchorValue.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-2">
                    <p className="text-[10px] text-purple-400">Your estimate</p>
                    <p className="text-sm font-bold text-purple-400">
                      ${userEstimate.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-2">
                    <p className="text-[10px] text-green-400">True value</p>
                    <p className="text-sm font-bold text-green-400">
                      ${scenario.actualValue.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Analysis */}
                <div className={`p-3 rounded-lg border ${
                  Math.abs(userEstimate - scenario.anchorValue) < Math.abs(scenario.actualValue - scenario.anchorValue)
                    ? 'bg-amber-500/10 border-amber-500/30'
                    : 'bg-green-500/10 border-green-500/30'
                }`}>
                  <p className="text-xs text-[var(--viz-secondary)]">
                    {Math.abs(userEstimate - scenario.anchorValue) < Math.abs(scenario.actualValue - scenario.anchorValue)
                      ? '⚠️ You were anchored! Your estimate stayed close to the initial number.'
                      : '✓ Good awareness! You adjusted away from the anchor.'}
                  </p>
                </div>

                {/* Explanation */}
                <div className="relative overflow-hidden rounded-lg">
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
                  />
                  <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg" />
                  <div className="relative p-3">
                    <p className="text-xs text-[var(--viz-secondary)]">{scenario.explanation}</p>
                  </div>
                </div>

                <button
                  onClick={nextScenario}
                  className="w-full py-2 text-xs text-[var(--viz-muted)] hover:text-[var(--viz-secondary)]"
                >
                  Try another scenario →
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Key insight */}
          <div className="relative overflow-hidden rounded-lg max-w-xs">
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
            />
            <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="relative p-3 text-center">
              <p className="text-xs text-[var(--viz-secondary)]">
                <span className="text-purple-400 font-medium">Defense:</span> Always research
                independently BEFORE seeing any numbers. Set your own anchor first.
              </p>
            </div>
          </div>

          <p className="text-[10px] text-[var(--viz-muted)]">
            From Never Split the Difference & Thinking Fast and Slow
          </p>
        </div>
      </div>
    </div>
  );
}

export default AnchoringBias;
