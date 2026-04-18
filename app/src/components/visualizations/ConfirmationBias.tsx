import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye } from 'lucide-react';

interface Evidence {
  id: string;
  text: string;
  supports: 'belief' | 'counter';
}

interface Scenario {
  id: string;
  belief: string;
  evidence: Evidence[];
}

const scenarios: Scenario[] = [
  {
    id: 'stock',
    belief: 'This stock will go up',
    evidence: [
      { id: '1', text: 'CEO gave optimistic interview', supports: 'belief' },
      { id: '2', text: 'Revenue declined 15% last quarter', supports: 'counter' },
      { id: '3', text: 'New product launching soon', supports: 'belief' },
      { id: '4', text: 'Competitor gaining market share', supports: 'counter' },
      { id: '5', text: 'Analyst upgraded the stock', supports: 'belief' },
      { id: '6', text: 'Insider selling increased', supports: 'counter' },
    ],
  },
  {
    id: 'hire',
    belief: 'This candidate is great',
    evidence: [
      { id: '1', text: 'Great first impression', supports: 'belief' },
      { id: '2', text: 'Left last job after 6 months', supports: 'counter' },
      { id: '3', text: 'Impressive portfolio', supports: 'belief' },
      { id: '4', text: 'Weak technical test score', supports: 'counter' },
      { id: '5', text: 'Went to top university', supports: 'belief' },
      { id: '6', text: 'Poor references from past manager', supports: 'counter' },
    ],
  },
];

export function ConfirmationBias() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [revealedEvidence, setRevealedEvidence] = useState<string[]>([]);
  const [selectedEvidence, setSelectedEvidence] = useState<string[]>([]);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const scenario = scenarios[activeScenario];

  const revealNext = () => {
    const unrevealed = scenario.evidence.filter(e => !revealedEvidence.includes(e.id));
    if (unrevealed.length > 0) {
      setRevealedEvidence(prev => [...prev, unrevealed[0].id]);
    }
  };

  const toggleSelect = (id: string) => {
    setSelectedEvidence(prev =>
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
  };

  const analyze = () => {
    setShowAnalysis(true);
  };

  const reset = () => {
    setRevealedEvidence([]);
    setSelectedEvidence([]);
    setShowAnalysis(false);
  };

  const selectedSupporting = selectedEvidence.filter(id =>
    scenario.evidence.find(e => e.id === id)?.supports === 'belief'
  ).length;
  const selectedCounter = selectedEvidence.length - selectedSupporting;
  const bias = selectedEvidence.length > 0
    ? ((selectedSupporting - selectedCounter) / selectedEvidence.length) * 100
    : 0;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Glass layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.03] via-transparent to-pink-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(168, 85, 247, 0.1) 100%)' }}
          >
            <Eye className="w-4 h-4 text-purple-400" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-[var(--viz-secondary)]">Confirmation Bias</h3>
            <p className="text-[10px] text-[var(--viz-muted)]">From Thinking, Fast and Slow</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          {/* Scenario selector */}
          <div className="flex gap-2">
            {scenarios.map((s, index) => (
              <button
                key={s.id}
                onClick={() => {
                  setActiveScenario(index);
                  reset();
                }}
                className={`text-[10px] px-3 py-1.5 rounded-full transition-all border ${
                  activeScenario === index
                    ? 'bg-purple-500/20 text-purple-400 border-purple-500/30'
                    : 'text-[var(--viz-muted)] hover:text-[var(--viz-secondary)] border-transparent'
                }`}
              >
                {s.belief.split(' ').slice(0, 3).join(' ')}...
              </button>
            ))}
          </div>

          {/* Your belief */}
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3 w-full max-w-xs text-center">
            <p className="text-[10px] text-purple-400 uppercase tracking-wide mb-1">Your belief</p>
            <p className="text-sm font-medium text-purple-400">"{scenario.belief}"</p>
          </div>

          {/* Evidence cards */}
          <div className="w-full max-w-xs space-y-2">
            <p className="text-[10px] text-[var(--viz-muted)] uppercase tracking-wide">
              Evidence ({revealedEvidence.length}/{scenario.evidence.length}) - Select what you'd focus on:
            </p>

            <AnimatePresence>
              {scenario.evidence
                .filter(e => revealedEvidence.includes(e.id))
                .map((evidence) => (
                  <motion.button
                    key={evidence.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => toggleSelect(evidence.id)}
                    disabled={showAnalysis}
                    className={`relative w-full p-2 rounded-lg border text-left text-xs transition-all overflow-hidden ${
                      selectedEvidence.includes(evidence.id)
                        ? 'bg-white/10 border-white/30'
                        : 'border-[var(--viz-border)] hover:border-[var(--viz-border-light)]'
                    } ${showAnalysis ? 'cursor-default' : 'cursor-pointer'}`}
                    style={!selectedEvidence.includes(evidence.id) ? { background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' } : undefined}
                  >
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <div className="flex items-center justify-between">
                      <span className={selectedEvidence.includes(evidence.id) ? 'text-[var(--viz-text)]' : 'text-[var(--viz-secondary)]'}>
                        {evidence.text}
                      </span>
                      {showAnalysis && (
                        <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                          evidence.supports === 'belief'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-red-500/20 text-red-400'
                        }`}>
                          {evidence.supports === 'belief' ? 'Confirms' : 'Counters'}
                        </span>
                      )}
                    </div>
                  </motion.button>
                ))}
            </AnimatePresence>

            {revealedEvidence.length < scenario.evidence.length && !showAnalysis && (
              <button
                onClick={revealNext}
                className="w-full py-2 border border-dashed border-[var(--viz-border-light)] rounded-lg
                         text-xs text-[var(--viz-muted)] hover:text-[var(--viz-secondary)] hover:border-white/[0.25]"
              >
                Reveal next evidence
              </button>
            )}
          </div>

          {/* Analyze button */}
          {revealedEvidence.length === scenario.evidence.length && !showAnalysis && (
            <button
              onClick={analyze}
              className="px-4 py-2 bg-purple-500/10 border border-purple-500/30
                       text-purple-400 rounded-lg text-xs hover:bg-purple-500/20"
            >
              Analyze my selections
            </button>
          )}

          {/* Analysis */}
          {showAnalysis && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-xs space-y-3"
            >
              {/* Bias meter */}
              <div
                className="relative border border-[var(--viz-border)] rounded-lg p-3 overflow-hidden"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <p className="text-[10px] text-[var(--viz-muted)] mb-2 text-center">Your selection bias</p>
                <div
                  className="h-4 rounded-full overflow-hidden flex"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
                >
                  <div
                    className="bg-green-500 h-full"
                    style={{ width: `${selectedSupporting / selectedEvidence.length * 100 || 50}%` }}
                  />
                  <div
                    className="bg-red-500 h-full"
                    style={{ width: `${selectedCounter / selectedEvidence.length * 100 || 50}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] mt-1">
                  <span className="text-green-400">{selectedSupporting} confirming</span>
                  <span className="text-red-400">{selectedCounter} countering</span>
                </div>
              </div>

              {/* Verdict */}
              <div className={`p-3 rounded-lg border text-center ${
                bias > 30
                  ? 'bg-amber-500/10 border-amber-500/30'
                  : 'bg-green-500/10 border-green-500/30'
              }`}>
                <p className="text-xs" style={{ color: bias > 30 ? '#F59E0B' : '#22C55E' }}>
                  {bias > 30
                    ? 'You showed confirmation bias! You favored evidence supporting your belief.'
                    : 'Good job seeking disconfirming evidence!'}
                </p>
              </div>

              <button
                onClick={reset}
                className="w-full py-2 text-xs text-[var(--viz-muted)] hover:text-[var(--viz-secondary)]"
              >
                Try again
              </button>
            </motion.div>
          )}

          {/* Key insight */}
          <div
            className="relative border border-[var(--viz-border)] rounded-lg p-3 max-w-xs text-center overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="text-xs text-[var(--viz-secondary)]">
              <span className="text-purple-400 font-medium">Defense:</span> Actively seek
              disconfirming evidence. Ask "What would prove me wrong?"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationBias;
