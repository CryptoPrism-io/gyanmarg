import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
                : 'text-gray-500 hover:text-gray-300 border-transparent'
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
        <p className="text-[10px] text-gray-500 uppercase tracking-wide">
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
                className={`w-full p-2 rounded-lg border text-left text-xs transition-all ${
                  selectedEvidence.includes(evidence.id)
                    ? 'bg-white/10 border-white/30'
                    : 'bg-[#111113] border-gray-800 hover:border-gray-700'
                } ${showAnalysis ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <div className="flex items-center justify-between">
                  <span className={selectedEvidence.includes(evidence.id) ? 'text-white' : 'text-gray-400'}>
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
            className="w-full py-2 border border-dashed border-gray-700 rounded-lg
                     text-xs text-gray-500 hover:text-gray-300 hover:border-gray-600"
          >
            Reveal next evidence →
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
          Analyze my selections →
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
          <div className="bg-[#111113] border border-gray-800 rounded-lg p-3">
            <p className="text-[10px] text-gray-500 mb-2 text-center">Your selection bias</p>
            <div className="h-4 bg-gray-900 rounded-full overflow-hidden flex">
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
                ? '⚠️ You showed confirmation bias! You favored evidence supporting your belief.'
                : '✓ Good job seeking disconfirming evidence!'}
            </p>
          </div>

          <button
            onClick={reset}
            className="w-full py-2 text-xs text-gray-500 hover:text-gray-300"
          >
            ↻ Try again
          </button>
        </motion.div>
      )}

      {/* Key insight */}
      <div className="bg-[#111113] border border-gray-800 rounded-lg p-3 max-w-xs text-center">
        <p className="text-xs text-gray-400">
          <span className="text-purple-400 font-medium">Defense:</span> Actively seek
          disconfirming evidence. Ask "What would prove me wrong?"
        </p>
      </div>

      <p className="text-[10px] text-gray-500">
        From Thinking, Fast and Slow
      </p>
    </div>
  );
}

export default ConfirmationBias;
