import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Talk Like TED - Creating Memorable Moments
const famousMoments = [
  {
    speaker: 'Bill Gates',
    moment: 'Released mosquitoes into the audience',
    topic: 'Malaria awareness',
    impact: 'Made abstract threat viscerally real',
  },
  {
    speaker: 'Steve Jobs',
    moment: 'Pulled MacBook Air from a manila envelope',
    topic: 'Product launch',
    impact: 'Demonstrated thinness better than any spec',
  },
  {
    speaker: 'Jill Bolte Taylor',
    moment: 'Held a real human brain on stage',
    topic: 'Brain science',
    impact: 'Made neuroscience tangible and memorable',
  },
];

export function JawDroppingMoment() {
  const [activeMoment, setActiveMoment] = useState(0);
  const [showImpact, setShowImpact] = useState(false);

  const moment = famousMoments[activeMoment];

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/[0.03] via-transparent to-orange-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-4">
          {/* The concept */}
          <div className="w-full max-w-xs">
            <div className="relative overflow-hidden rounded-lg p-4 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/[0.08] via-orange-500/[0.04] to-transparent" />
              <div className="absolute inset-0 border border-rose-500/20 rounded-lg" />
              <div className="relative z-10">
                <p className="text-2xl mb-2">💥</p>
                <p className="text-xs text-[var(--viz-secondary)] font-medium">Jaw-Dropping Moments</p>
                <p className="text-[10px] text-[var(--viz-muted)] mt-1">
                  Emotionally charged events that audiences remember forever
                </p>
              </div>
            </div>
          </div>

          {/* Famous examples */}
          <div className="w-full max-w-xs">
            <div className="flex gap-2 justify-center mb-3">
              {famousMoments.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveMoment(idx);
                    setShowImpact(false);
                  }}
                  className={`w-3 h-3 rounded-full border transition-all ${
                    idx === activeMoment
                      ? 'bg-rose-500 border-rose-500'
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                />
              ))}
            </div>

            <motion.div
              key={activeMoment}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-[var(--viz-tile)] backdrop-blur-sm" />
              <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg" />

              <div className="relative z-10">
                <div className="p-4 border-b border-[var(--viz-border)]">
                  <p className="text-[10px] text-rose-400 uppercase tracking-wide">
                    {moment.speaker}
                  </p>
                  <p className="text-sm text-[var(--viz-secondary)] mt-1 font-medium">
                    {moment.moment}
                  </p>
                  <p className="text-[10px] text-[var(--viz-muted)] mt-1">
                    Topic: {moment.topic}
                  </p>
                </div>

                <AnimatePresence>
                  {showImpact ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/[0.08] via-rose-500/[0.04] to-transparent" />
                      <div className="relative z-10 p-3">
                        <p className="text-[10px] text-rose-400 uppercase tracking-wide mb-1">
                          Why It Worked
                        </p>
                        <p className="text-xs text-[var(--viz-secondary)]">{moment.impact}</p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.button
                      onClick={() => setShowImpact(true)}
                      className="w-full p-3 text-[10px] text-[var(--viz-muted)] hover:text-rose-400 transition-colors"
                    >
                      Reveal the impact →
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Formula */}
          <div className="w-full max-w-xs">
            <div className="relative overflow-hidden rounded-lg p-3">
              <div className="absolute inset-0 bg-[var(--viz-tile)] backdrop-blur-sm" />
              <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg" />
              <div className="relative z-10">
                <p className="text-[10px] text-[var(--viz-muted)] uppercase tracking-wide mb-2 text-center">
                  The Formula
                </p>
                <div className="flex items-center justify-center gap-2 text-xs">
                  <span className="relative overflow-hidden px-2 py-1 rounded text-blue-400">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.15] via-blue-500/[0.08] to-transparent" />
                    <span className="relative z-10">Unexpected</span>
                  </span>
                  <span className="text-gray-600">+</span>
                  <span className="relative overflow-hidden px-2 py-1 rounded text-purple-400">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.15] via-purple-500/[0.08] to-transparent" />
                    <span className="relative z-10">Emotional</span>
                  </span>
                  <span className="text-gray-600">=</span>
                  <span className="relative overflow-hidden px-2 py-1 rounded text-rose-400">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-500/[0.15] via-rose-500/[0.08] to-transparent" />
                    <span className="relative z-10">Memorable</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-[10px] text-[var(--viz-muted)] text-center">
            From "Talk Like TED" by Carmine Gallo
          </p>
        </div>
      </div>
    </div>
  );
}

export default JawDroppingMoment;
