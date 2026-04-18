import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles } from 'lucide-react';

interface Challenge {
  id: string;
  situation: string;
  fixedResponse: string;
  growthResponse: string;
}

const challenges: Challenge[] = [
  {
    id: 'fail',
    situation: 'You failed a test',
    fixedResponse: 'I\'m just not smart enough',
    growthResponse: 'I need to study differently next time',
  },
  {
    id: 'critique',
    situation: 'Someone criticizes your work',
    fixedResponse: 'They\'re just jealous or wrong',
    growthResponse: 'What can I learn from this feedback?',
  },
  {
    id: 'success',
    situation: 'A peer succeeds at something you want',
    fixedResponse: 'They got lucky / it\'s unfair',
    growthResponse: 'What strategies can I learn from them?',
  },
  {
    id: 'hard',
    situation: 'A task is really difficult',
    fixedResponse: 'This isn\'t for me, I should quit',
    growthResponse: 'This is where real growth happens',
  },
];

interface MindsetComparison {
  aspect: string;
  fixed: string;
  growth: string;
}

const comparisons: MindsetComparison[] = [
  { aspect: 'Challenges', fixed: 'Avoid', growth: 'Embrace' },
  { aspect: 'Obstacles', fixed: 'Give up', growth: 'Persist' },
  { aspect: 'Effort', fixed: 'Fruitless', growth: 'Path to mastery' },
  { aspect: 'Criticism', fixed: 'Ignore', growth: 'Learn from' },
  { aspect: 'Others\' success', fixed: 'Threat', growth: 'Inspiration' },
];

export function GrowthMindset() {
  const [activeChallenge, setActiveChallenge] = useState(0);
  const [selectedMindset, setSelectedMindset] = useState<'fixed' | 'growth' | null>(null);

  const challenge = challenges[activeChallenge];

  const handleChoice = (mindset: 'fixed' | 'growth') => {
    setSelectedMindset(mindset);
  };

  const nextChallenge = () => {
    setActiveChallenge(prev => (prev + 1) % challenges.length);
    setSelectedMindset(null);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.03] via-transparent to-purple-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center border border-emerald-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
            <Brain className="w-4 h-4 text-emerald-400" />
          </div>
          <span className="text-sm font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Growth vs Fixed Mindset
          </span>
        </div>

        {/* Description */}
        <p className="text-[11px] text-[var(--viz-muted)] mb-5 leading-relaxed">
          Those with growth mindset see abilities as developable through effort. Fixed mindset sees them as innate and unchangeable.
        </p>

        {/* Challenge scenario */}
        <div className="w-full max-w-xs mx-auto">
          <div className="relative overflow-hidden rounded-xl p-4 text-center mb-4 border border-[var(--viz-border)]"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="text-[10px] text-amber-400/80 uppercase tracking-wider mb-2 font-medium">
              Scenario {activeChallenge + 1}/{challenges.length}
            </p>
            <p className="text-sm text-[var(--viz-secondary)] font-medium">{challenge.situation}</p>
            <p className="text-[10px] text-[var(--viz-muted)] mt-2">How do you respond?</p>
          </div>

          {/* Mindset choices */}
          <div className="grid grid-cols-2 gap-3">
            {/* Fixed mindset */}
            <motion.button
              onClick={() => handleChoice('fixed')}
              className={`relative overflow-hidden p-3 rounded-xl text-left transition-all duration-300 ${
                selectedMindset === 'fixed'
                  ? 'border-red-500/50'
                  : selectedMindset === 'growth'
                  ? 'opacity-40 border-white/[0.05]'
                  : 'border-[var(--viz-border)] hover:border-red-500/30'
              }`}
              style={{
                background: selectedMindset === 'fixed'
                  ? 'linear-gradient(135deg, rgba(239,68,68,0.15) 0%, rgba(239,68,68,0.05) 100%)'
                  : 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                borderWidth: '1px',
                borderStyle: 'solid',
              }}
              whileTap={{ scale: 0.98 }}
            >
              {selectedMindset === 'fixed' && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400/40 to-transparent" />
              )}
              <p className="text-[10px] text-red-400 uppercase tracking-wide mb-1.5 font-semibold">
                Fixed Mindset
              </p>
              <p className="text-[11px] text-[var(--viz-secondary)] leading-relaxed">{challenge.fixedResponse}</p>
            </motion.button>

            {/* Growth mindset */}
            <motion.button
              onClick={() => handleChoice('growth')}
              className={`relative overflow-hidden p-3 rounded-xl text-left transition-all duration-300 ${
                selectedMindset === 'growth'
                  ? 'border-emerald-500/50'
                  : selectedMindset === 'fixed'
                  ? 'opacity-40 border-white/[0.05]'
                  : 'border-[var(--viz-border)] hover:border-emerald-500/30'
              }`}
              style={{
                background: selectedMindset === 'growth'
                  ? 'linear-gradient(135deg, rgba(34,197,94,0.15) 0%, rgba(34,197,94,0.05) 100%)'
                  : 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                borderWidth: '1px',
                borderStyle: 'solid',
              }}
              whileTap={{ scale: 0.98 }}
            >
              {selectedMindset === 'growth' && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
              )}
              <p className="text-[10px] text-emerald-400 uppercase tracking-wide mb-1.5 font-semibold">
                Growth Mindset
              </p>
              <p className="text-[11px] text-[var(--viz-secondary)] leading-relaxed">{challenge.growthResponse}</p>
            </motion.button>
          </div>

          {/* Feedback */}
          {selectedMindset && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`relative overflow-hidden mt-4 p-3 rounded-xl text-center border ${
                selectedMindset === 'growth'
                  ? 'border-emerald-500/30'
                  : 'border-amber-500/30'
              }`}
              style={{
                background: selectedMindset === 'growth'
                  ? 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(34,197,94,0.03) 100%)'
                  : 'linear-gradient(135deg, rgba(245,158,11,0.1) 0%, rgba(245,158,11,0.03) 100%)',
              }}
            >
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${
                selectedMindset === 'growth' ? 'via-emerald-400/30' : 'via-amber-400/30'
              } to-transparent`} />
              <p className="text-[11px] text-[var(--viz-secondary)]">
                {selectedMindset === 'growth' ? (
                  <><span className="text-emerald-400">✓</span> Growth mindset leads to more learning and resilience</>
                ) : (
                  <><span className="text-amber-400">↻</span> Notice the thought, then reframe it with growth mindset</>
                )}
              </p>
              <button
                onClick={nextChallenge}
                className="mt-2 text-[10px] text-[var(--viz-muted)] hover:text-[var(--viz-secondary)] transition-colors font-medium"
              >
                Next scenario →
              </button>
            </motion.div>
          )}
        </div>

        {/* Comparison chart */}
        <div className="w-full max-w-xs mx-auto mt-5">
          <div className="relative overflow-hidden rounded-xl border border-[var(--viz-border)]"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.1) 100%)',
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Header row */}
            <div className="grid grid-cols-3 text-[10px] border-b border-[var(--viz-border)]">
              <div className="p-2.5 text-[var(--viz-muted)] font-medium"></div>
              <div className="p-2.5 text-red-400/80 text-center border-l border-[var(--viz-border)] font-semibold">Fixed</div>
              <div className="p-2.5 text-emerald-400/80 text-center border-l border-[var(--viz-border)] font-semibold">Growth</div>
            </div>

            {/* Data rows */}
            {comparisons.map((comp, idx) => (
              <div key={idx} className="grid grid-cols-3 text-[10px] border-b border-white/[0.04] last:border-0">
                <div className="p-2.5 text-[var(--viz-secondary)] font-medium">{comp.aspect}</div>
                <div className="p-2.5 text-[var(--viz-muted)] text-center border-l border-white/[0.04]">{comp.fixed}</div>
                <div className="p-2.5 text-[var(--viz-secondary)] text-center border-l border-white/[0.04]">{comp.growth}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Source */}
        <div className="mt-4 pt-4 border-t border-[var(--viz-border)]">
          <div className="flex items-center justify-center gap-1.5">
            <Sparkles className="w-3 h-3 text-amber-500/50" />
            <p className="text-[10px] text-amber-500/60 font-medium">
              From "Mindset" by Carol Dweck
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GrowthMindset;
