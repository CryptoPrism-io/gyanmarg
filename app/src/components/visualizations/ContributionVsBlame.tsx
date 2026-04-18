import { useState } from 'react';
import { motion } from 'framer-motion';

// Difficult Conversations - Contribution vs Blame
export function ContributionVsBlame() {
  const [perspective, setPerspective] = useState<'blame' | 'contribution'>('blame');
  const [myContribution, setMyContribution] = useState('');
  const [showInsight, setShowInsight] = useState(false);

  const blameStatements = [
    'They didn\'t communicate clearly',
    'They were being unreasonable',
    'They didn\'t try hard enough',
    'It\'s their fault this happened',
  ];

  const contributionQuestions = [
    'What did I do (or not do) that contributed?',
    'What signals might I have missed?',
    'How did my actions affect their behavior?',
    'What would I do differently next time?',
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.03] via-transparent to-green-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-4">
          {/* Toggle */}
          <div className="relative overflow-hidden flex rounded-lg p-1">
            <div className="absolute inset-0 bg-[var(--viz-tile)] backdrop-blur-sm" />
            <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg" />
            <button
              onClick={() => setPerspective('blame')}
              className={`relative z-10 px-4 py-2 rounded-lg text-xs transition-all ${
                perspective === 'blame'
                  ? 'bg-red-500/20 text-red-400'
                  : 'text-[var(--viz-muted)] hover:text-[var(--viz-muted)]'
              }`}
            >
              Blame Mode
            </button>
            <button
              onClick={() => setPerspective('contribution')}
              className={`relative z-10 px-4 py-2 rounded-lg text-xs transition-all ${
                perspective === 'contribution'
                  ? 'bg-green-500/20 text-green-400'
                  : 'text-[var(--viz-muted)] hover:text-[var(--viz-muted)]'
              }`}
            >
              Contribution Mode
            </button>
          </div>

          {/* Description */}
          <div className={`relative overflow-hidden w-full max-w-xs p-3 rounded-lg border ${
            perspective === 'blame'
              ? 'bg-red-500/10 border-red-500/30'
              : 'bg-green-500/10 border-green-500/30'
          }`}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
            <p className={`relative z-10 text-xs ${perspective === 'blame' ? 'text-red-400' : 'text-green-400'}`}>
              {perspective === 'blame'
                ? 'Blame looks backward: "Whose fault is this?"'
                : 'Contribution looks forward: "How did we both contribute?"'}
            </p>
          </div>

          {/* Content based on mode */}
          {perspective === 'blame' ? (
            <div className="w-full max-w-xs space-y-2">
              <p className="text-[10px] text-[var(--viz-muted)] text-center">Common blame thoughts:</p>
              {blameStatements.map((statement, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden p-3 rounded-lg"
                >
                  <div className="absolute inset-0 bg-[var(--viz-tile)] backdrop-blur-sm" />
                  <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg" />
                  <p className="relative z-10 text-xs text-[var(--viz-muted)] italic">"{statement}"</p>
                </div>
              ))}
              <motion.div
                className="relative overflow-hidden p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent" />
                <p className="relative z-10 text-[10px] text-red-400">
                  ❌ Blame keeps you stuck and creates defensiveness
                </p>
              </motion.div>
            </div>
          ) : (
            <div className="w-full max-w-xs space-y-3">
              <p className="text-[10px] text-[var(--viz-muted)] text-center">Ask yourself:</p>
              {contributionQuestions.map((question, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden p-3 rounded-lg"
                >
                  <div className="absolute inset-0 bg-[var(--viz-tile)] backdrop-blur-sm" />
                  <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg" />
                  <p className="relative z-10 text-xs text-green-400">{question}</p>
                </div>
              ))}

              <div className="space-y-2">
                <p className="text-[10px] text-[var(--viz-muted)]">Your contribution (even 10%):</p>
                <textarea
                  value={myContribution}
                  onChange={(e) => setMyContribution(e.target.value)}
                  placeholder="I contributed by..."
                  className="w-full p-3 bg-[var(--viz-tile)] border border-[var(--viz-border)] rounded-lg text-xs text-[var(--viz-secondary)] placeholder-gray-600 focus:border-green-500/50 focus:outline-none resize-none h-20 backdrop-blur-sm"
                />
              </div>

              {myContribution.length > 10 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={() => setShowInsight(true)}
                  className="w-full py-2 bg-green-500/20 border border-green-500/50 rounded-lg text-xs text-green-400 backdrop-blur-sm hover:bg-green-500/30 transition-all"
                >
                  See the power of this shift
                </motion.button>
              )}

              {showInsight && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative overflow-hidden p-3 bg-green-500/10 border border-green-500/30 rounded-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
                  <div className="relative z-10">
                    <p className="text-[10px] text-green-400 text-center">
                      ✓ By acknowledging your contribution, you:
                    </p>
                    <ul className="mt-2 space-y-1 text-[10px] text-[var(--viz-muted)]">
                      <li>• Open dialogue instead of triggering defense</li>
                      <li>• Model accountability that others may follow</li>
                      <li>• Identify what YOU can change next time</li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </div>
          )}

          <p className="text-[10px] text-[var(--viz-muted)] text-center">
            From "Difficult Conversations" by Douglas Stone
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContributionVsBlame;
