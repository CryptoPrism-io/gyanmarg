import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock } from 'lucide-react';

interface Decision {
  id: string;
  scenario: string;
  safeChoice: string;
  boldChoice: string;
  age80Perspective: string;
}

const decisions: Decision[] = [
  {
    id: 'startup',
    scenario: 'Leave stable job to start a company?',
    safeChoice: 'Stay at job - guaranteed income',
    boldChoice: 'Start the company - pursue vision',
    age80Perspective: 'At 80, will you regret not trying? The failure won\'t haunt you, but the "what if" might.',
  },
  {
    id: 'travel',
    scenario: 'Take a gap year to travel the world?',
    safeChoice: 'Keep working - build career',
    boldChoice: 'Travel now - see the world',
    age80Perspective: 'At 80, will you wish you\'d seen more of the world when you had the health and freedom?',
  },
  {
    id: 'relationship',
    scenario: 'Move across the world for love?',
    safeChoice: 'Stay in your city - maintain stability',
    boldChoice: 'Take the leap - follow your heart',
    age80Perspective: 'At 80, will you regret playing it safe with your heart?',
  },
  {
    id: 'passion',
    scenario: 'Pursue passion project vs. safe career?',
    safeChoice: 'Keep the day job - financial security',
    boldChoice: 'Go all-in on passion - risk it',
    age80Perspective: 'At 80, will you wonder what could have been if you\'d truly tried?',
  },
];

export function RegretMinimization() {
  const [activeDecision, setActiveDecision] = useState(0);
  const [showPerspective, setShowPerspective] = useState(false);

  const decision = decisions[activeDecision];

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Dark Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-amber-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center border border-blue-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
            <Clock className="w-4 h-4 text-blue-400" />
          </div>
          <span className="text-sm font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Regret Minimization
          </span>
        </div>

        <div className="flex flex-col items-center gap-4">
          {/* Scenario selector */}
          <div className="flex flex-wrap justify-center gap-2">
            {decisions.map((d, index) => (
              <button
                key={d.id}
                onClick={() => {
                  setActiveDecision(index);
                  setShowPerspective(false);
                }}
                className={`text-[10px] px-3 py-1.5 rounded-full transition-all border backdrop-blur-sm ${
                  activeDecision === index
                    ? 'bg-blue-500/15 text-blue-400 border-blue-500/30'
                    : 'text-[var(--viz-muted)] hover:text-[var(--viz-secondary)] border-transparent'
                }`}
              >
                {d.scenario.split(' ').slice(0, 2).join(' ')}...
              </button>
            ))}
          </div>

          {/* Decision visualization */}
          <div className="w-full max-w-xs space-y-4">
            {/* Current scenario */}
            <div
              className="relative overflow-hidden rounded-xl p-4 text-center border border-[var(--viz-border)]"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <p className="text-sm text-[var(--viz-secondary)] font-medium">{decision.scenario}</p>
            </div>

            {/* Timeline visualization */}
            <div className="relative">
              <div className="flex items-center justify-between px-4">
                <div className="text-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center mb-1">
                    <span className="text-xs text-blue-400">Now</span>
                  </div>
                  <p className="text-[10px] text-[var(--viz-muted)]">Today</p>
                </div>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-500/30 via-white/10 to-amber-500/30 mx-2" />
                <div className="text-center">
                  <div className="w-8 h-8 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mb-1">
                    <span className="text-xs text-amber-400">80</span>
                  </div>
                  <p className="text-[10px] text-[var(--viz-muted)]">Future</p>
                </div>
              </div>
            </div>

            {/* Choices */}
            <div className="space-y-2">
              <motion.div
                className="relative overflow-hidden p-3 rounded-xl border border-[var(--viz-border)]"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                }}
                whileHover={{ borderColor: 'rgba(255,255,255,0.15)' }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                <div className="flex items-start gap-2">
                  <span className="text-[var(--viz-muted)]">~</span>
                  <div>
                    <p className="text-[10px] text-[var(--viz-muted)] uppercase tracking-wide">Safe Choice</p>
                    <p className="text-xs text-[var(--viz-secondary)]">{decision.safeChoice}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative overflow-hidden p-3 rounded-xl border border-[var(--viz-border)]"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                }}
                whileHover={{ borderColor: 'rgba(255,255,255,0.15)' }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                <div className="flex items-start gap-2">
                  <span className="text-amber-400">*</span>
                  <div>
                    <p className="text-[10px] text-amber-400 uppercase tracking-wide">Bold Choice</p>
                    <p className="text-xs text-[var(--viz-secondary)]">{decision.boldChoice}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Reveal button */}
            <button
              onClick={() => setShowPerspective(true)}
              className="w-full py-2 text-xs bg-amber-500/10 border border-amber-500/30
                       text-amber-400 rounded-lg hover:bg-amber-500/20 transition-all backdrop-blur-sm"
            >
              Ask your 80-year-old self
            </button>

            {/* Age 80 perspective */}
            <AnimatePresence>
              {showPerspective && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="relative overflow-hidden rounded-xl p-4 border border-amber-500/30"
                  style={{
                    background: 'linear-gradient(135deg, rgba(245,158,11,0.1) 0%, rgba(245,158,11,0.03) 100%)',
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">*</span>
                    <div>
                      <p className="text-[10px] text-amber-400 uppercase tracking-wide mb-1">
                        Your 80-year-old self says:
                      </p>
                      <p className="text-xs text-[var(--viz-secondary)] italic">
                        "{decision.age80Perspective}"
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Framework explanation */}
          <div
            className="relative overflow-hidden rounded-xl p-3 max-w-xs text-center border border-[var(--viz-border)]"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="text-xs text-[var(--viz-secondary)]">
              <span className="text-blue-400 font-medium">Key insight:</span> Minimize
              regrets of <span className="text-amber-400">inaction</span>, not action.
              We rarely regret trying, but often regret not trying.
            </p>
          </div>

          <p className="text-[10px] text-[var(--viz-muted)] text-center">
            Jeff Bezos used this to decide to start Amazon
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegretMinimization;
