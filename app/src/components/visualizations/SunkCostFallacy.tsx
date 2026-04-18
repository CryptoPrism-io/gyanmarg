import { useState } from 'react';
import { motion } from 'framer-motion';
import { Anchor } from 'lucide-react';

interface Scenario {
  id: string;
  title: string;
  invested: string;
  sunkCost: string;
  wrongChoice: string;
  rightChoice: string;
}

const scenarios: Scenario[] = [
  {
    id: 'movie',
    title: 'Bad Movie',
    invested: 'Paid $15 for ticket',
    sunkCost: 'Movie is terrible 30 min in',
    wrongChoice: 'Stay because you paid (waste 2 more hours)',
    rightChoice: 'Leave and do something valuable',
  },
  {
    id: 'relationship',
    title: 'Wrong Relationship',
    invested: '3 years together',
    sunkCost: 'Realize you\'re incompatible',
    wrongChoice: 'Stay because of time invested',
    rightChoice: 'End it, don\'t waste more years',
  },
  {
    id: 'project',
    title: 'Failing Project',
    invested: '$50k and 6 months',
    sunkCost: 'Market changed, no demand',
    wrongChoice: 'Keep investing to "not waste" money',
    rightChoice: 'Pivot or stop, redirect resources',
  },
  {
    id: 'career',
    title: 'Wrong Career',
    invested: '4-year degree',
    sunkCost: 'Hate the field',
    wrongChoice: 'Stay because of degree',
    rightChoice: 'Switch to something fulfilling',
  },
];

export function SunkCostFallacy() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const scenario = scenarios[activeScenario];

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Dark Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] via-transparent to-red-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center border border-amber-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
            <Anchor className="w-4 h-4 text-amber-400" />
          </div>
          <span className="text-sm font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Sunk Cost Fallacy
          </span>
        </div>

        <div className="flex flex-col items-center gap-4">
          {/* Scenario selector */}
          <div className="flex flex-wrap justify-center gap-2">
            {scenarios.map((s, index) => (
              <button
                key={s.id}
                onClick={() => {
                  setActiveScenario(index);
                  setShowAnswer(false);
                }}
                className={`text-[10px] px-3 py-1.5 rounded-full transition-all border backdrop-blur-sm ${
                  activeScenario === index
                    ? 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                    : 'text-[var(--viz-muted)] hover:text-[var(--viz-secondary)] border-transparent'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>

          {/* Sunk cost visualization */}
          <div className="w-full max-w-xs space-y-3">
            {/* Investment */}
            <div
              className="relative overflow-hidden rounded-xl p-3 border border-[var(--viz-border)]"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <p className="text-[10px] text-[var(--viz-muted)] uppercase tracking-wide mb-1">Already Invested</p>
              <p className="text-sm text-[var(--viz-secondary)]">{scenario.invested}</p>
            </div>

            {/* Arrow down */}
            <div className="text-center text-[var(--viz-muted)]">|</div>

            {/* Reality */}
            <div
              className="relative overflow-hidden rounded-xl p-3 border border-red-500/30"
              style={{
                background: 'linear-gradient(135deg, rgba(239,68,68,0.1) 0%, rgba(239,68,68,0.03) 100%)',
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400/30 to-transparent" />
              <p className="text-[10px] text-red-400 uppercase tracking-wide mb-1">Reality Check</p>
              <p className="text-sm text-red-300">{scenario.sunkCost}</p>
            </div>

            {/* Question */}
            <div className="text-center py-2">
              <p className="text-sm text-[var(--viz-secondary)]">What should you do?</p>
            </div>

            {/* Choices */}
            <div className="space-y-2">
              <motion.button
                onClick={() => setShowAnswer(true)}
                className={`relative overflow-hidden w-full p-3 rounded-xl text-left text-xs transition-all border ${
                  showAnswer
                    ? 'border-red-500/50 text-red-400'
                    : 'border-[var(--viz-border)] text-[var(--viz-secondary)] hover:border-white/20'
                }`}
                style={{
                  background: showAnswer
                    ? 'linear-gradient(135deg, rgba(239,68,68,0.1) 0%, rgba(239,68,68,0.03) 100%)'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                <span className="font-medium">x Fallacy:</span> {scenario.wrongChoice}
              </motion.button>

              <motion.button
                onClick={() => setShowAnswer(true)}
                className={`relative overflow-hidden w-full p-3 rounded-xl text-left text-xs transition-all border ${
                  showAnswer
                    ? 'border-green-500/50 text-green-400'
                    : 'border-[var(--viz-border)] text-[var(--viz-secondary)] hover:border-white/20'
                }`}
                style={{
                  background: showAnswer
                    ? 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(34,197,94,0.03) 100%)'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                <span className="font-medium">+ Rational:</span> {scenario.rightChoice}
              </motion.button>
            </div>
          </div>

          {/* Explanation */}
          {showAnswer && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative overflow-hidden rounded-xl p-4 max-w-xs text-center border border-[var(--viz-border)]"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <p className="text-xs text-[var(--viz-secondary)]">
                <span className="text-amber-400 font-medium">Key insight:</span> Past costs are gone forever.
                Only future costs and benefits should influence decisions.
              </p>
            </motion.div>
          )}

          <p className="text-[10px] text-[var(--viz-muted)] text-center max-w-xs">
            The money/time is already spent. Don't let it trap you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SunkCostFallacy;
