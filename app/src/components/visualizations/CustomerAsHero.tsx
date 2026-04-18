import { useState } from 'react';
import { motion } from 'framer-motion';

// Building a StoryBrand - Customer is the Hero, You are the Guide
const comparisons = [
  {
    aspect: 'Website headline',
    wrong: '"We are the leading provider of innovative solutions"',
    right: '"Get back 10 hours every week with our automation"',
    principle: 'Talk about THEIR transformation, not YOUR credentials',
  },
  {
    aspect: 'About page',
    wrong: '"Founded in 2010, we have 500 employees and 3 offices..."',
    right: '"We exist because we believe you shouldn\'t waste time on busywork"',
    principle: 'Make it about WHY you help them, not WHO you are',
  },
  {
    aspect: 'Product description',
    wrong: '"Award-winning, AI-powered, cloud-based platform"',
    right: '"Finally finish your work by 5pm. Every day."',
    principle: 'Benefits they feel, not features you\'re proud of',
  },
  {
    aspect: 'Testimonial focus',
    wrong: '"Great company, very professional team"',
    right: '"I used to work until midnight. Now I\'m home for dinner."',
    principle: 'Show the customer\'s transformation, not your praise',
  },
];

export function CustomerAsHero() {
  const [activeComparison, setActiveComparison] = useState(0);
  const [showCorrect, setShowCorrect] = useState(false);

  const comparison = comparisons[activeComparison];

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-amber-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-4">
          {/* Header */}
          <div className="text-center">
            <p className="text-xs text-[var(--viz-muted)]">
              In every story, there's a <span className="text-blue-400">hero</span> and a{' '}
              <span className="text-amber-400">guide</span>.
            </p>
            <p className="text-[10px] text-[var(--viz-muted)]">Your customer is the hero. You are Yoda, not Luke.</p>
          </div>

          {/* Visual metaphor */}
          <div className="w-full max-w-xs grid grid-cols-2 gap-3">
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-sm" />
              <div className="absolute inset-0 border border-blue-500/30 rounded-lg" />
              <div className="relative z-10 p-3 text-center">
                <p className="text-2xl mb-1">🦸</p>
                <p className="text-xs text-blue-400 font-medium">The Hero</p>
                <p className="text-[10px] text-[var(--viz-muted)]">Your Customer</p>
                <p className="text-[8px] text-gray-600 mt-1">Has a problem, needs transformation</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-amber-500/10 backdrop-blur-sm" />
              <div className="absolute inset-0 border border-amber-500/30 rounded-lg" />
              <div className="relative z-10 p-3 text-center">
                <p className="text-2xl mb-1">🧙</p>
                <p className="text-xs text-amber-400 font-medium">The Guide</p>
                <p className="text-[10px] text-[var(--viz-muted)]">Your Brand</p>
                <p className="text-[8px] text-gray-600 mt-1">Has empathy, provides the plan</p>
              </div>
            </div>
          </div>

          {/* Comparison selector */}
          <div className="flex gap-1">
            {comparisons.map((_, idx) => (
              <button
                key={idx}
                onClick={() => { setActiveComparison(idx); setShowCorrect(false); }}
                className={`w-8 h-8 rounded-lg text-xs transition-all ${
                  idx === activeComparison
                    ? 'bg-amber-500/20 border border-amber-500/50 text-amber-400 backdrop-blur-sm'
                    : 'bg-[var(--viz-tile)] border border-[var(--viz-border)] text-[var(--viz-muted)] hover:border-[var(--viz-border-light)]'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          {/* Comparison detail */}
          <div className="w-full max-w-xs space-y-3">
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-[var(--viz-tile)] backdrop-blur-sm" />
              <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg" />
              <div className="relative z-10 p-3 text-center">
                <p className="text-xs text-[var(--viz-muted)]">{comparison.aspect}</p>
              </div>
            </div>

            {/* Wrong way */}
            <motion.div
              className={`relative overflow-hidden rounded-lg transition-all ${
                showCorrect ? 'opacity-60' : 'opacity-100'
              }`}
            >
              <div className={`absolute inset-0 backdrop-blur-sm ${showCorrect ? 'bg-red-500/5' : 'bg-red-500/10'}`} />
              <div className={`absolute inset-0 border rounded-lg ${showCorrect ? 'border-red-500/20' : 'border-red-500/30'}`} />
              <div className="relative z-10 p-3">
                <p className="text-[10px] text-red-400 uppercase mb-1">Brand as Hero:</p>
                <p className="text-xs text-[var(--viz-muted)] italic">{comparison.wrong}</p>
              </div>
            </motion.div>

            {/* Reveal button or correct way */}
            {!showCorrect ? (
              <motion.button
                onClick={() => setShowCorrect(true)}
                className="w-full py-2 bg-green-500/20 border border-green-500/50 rounded-lg text-xs text-green-400 backdrop-blur-sm hover:bg-green-500/25 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Show Better Version
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-3"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-green-500/10 backdrop-blur-sm" />
                  <div className="absolute inset-0 border border-green-500/30 rounded-lg" />
                  <div className="relative z-10 p-3">
                    <p className="text-[10px] text-green-400 uppercase mb-1">Customer as Hero:</p>
                    <p className="text-xs text-[var(--viz-secondary)] italic">{comparison.right}</p>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-purple-500/10 backdrop-blur-sm" />
                  <div className="absolute inset-0 border border-purple-500/30 rounded-lg" />
                  <div className="relative z-10 p-2">
                    <p className="text-[10px] text-purple-400">
                      {comparison.principle}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          <p className="text-[10px] text-[var(--viz-muted)] text-center">
            From "Building a StoryBrand" by Donald Miller
          </p>
        </div>
      </div>
    </div>
  );
}

export default CustomerAsHero;
