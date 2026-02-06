import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch } from 'lucide-react';

interface Scenario {
  id: string;
  title: string;
  decision: string;
  firstOrder: { label: string; result: string; emotion: string };
  secondOrder: { label: string; result: string; emotion: string };
  thirdOrder: { label: string; result: string; emotion: string };
  color: string;
}

const scenarios: Scenario[] = [
  {
    id: 'junk-food',
    title: 'Eating Junk Food',
    decision: 'Eat fast food for dinner',
    firstOrder: { label: '1st Order', result: 'Tastes great, feels satisfying', emotion: '' },
    secondOrder: { label: '2nd Order', result: 'Feel sluggish, low energy tomorrow', emotion: '' },
    thirdOrder: { label: '3rd Order', result: 'Health issues, weight gain over time', emotion: '' },
    color: '#EF4444',
  },
  {
    id: 'exercise',
    title: 'Skipping Exercise',
    decision: 'Skip the gym today',
    firstOrder: { label: '1st Order', result: 'More free time, less effort', emotion: '' },
    secondOrder: { label: '2nd Order', result: 'Habit weakens, harder to restart', emotion: '' },
    thirdOrder: { label: '3rd Order', result: 'Fitness declines, confidence drops', emotion: '' },
    color: '#F59E0B',
  },
  {
    id: 'learning',
    title: 'Daily Learning',
    decision: 'Study for 30 min daily',
    firstOrder: { label: '1st Order', result: 'Takes time and effort', emotion: '' },
    secondOrder: { label: '2nd Order', result: 'Knowledge compounds, skills grow', emotion: '' },
    thirdOrder: { label: '3rd Order', result: 'New opportunities, career growth', emotion: '' },
    color: '#22C55E',
  },
  {
    id: 'savings',
    title: 'Saving Money',
    decision: 'Save 20% of income',
    firstOrder: { label: '1st Order', result: 'Less spending money now', emotion: '' },
    secondOrder: { label: '2nd Order', result: 'Emergency fund grows, less stress', emotion: '' },
    thirdOrder: { label: '3rd Order', result: 'Financial freedom, early retirement', emotion: '' },
    color: '#3B82F6',
  },
];

export function SecondOrderThinking() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [visibleOrder, setVisibleOrder] = useState(1);

  const scenario = scenarios[activeScenario];

  const revealNext = () => {
    if (visibleOrder < 3) {
      setVisibleOrder(visibleOrder + 1);
    }
  };

  const reset = () => {
    setVisibleOrder(1);
  };

  const selectScenario = (index: number) => {
    setActiveScenario(index);
    setVisibleOrder(1);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Dark Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] via-transparent to-purple-500/[0.02]" />
      <div className="absolute inset-0 border border-white/[0.1] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center border border-amber-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
            <GitBranch className="w-4 h-4 text-amber-400" />
          </div>
          <span className="text-sm font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Second-Order Thinking
          </span>
        </div>

        <div className="flex flex-col items-center gap-4">
          {/* Scenario selector */}
          <div className="flex flex-wrap justify-center gap-2">
            {scenarios.map((s, index) => (
              <button
                key={s.id}
                onClick={() => selectScenario(index)}
                className={`text-[10px] px-3 py-1.5 rounded-full transition-all border backdrop-blur-sm ${
                  activeScenario === index
                    ? 'bg-white/10 text-white border-white/20'
                    : 'text-white/50 hover:text-white/70 border-transparent hover:border-white/10'
                }`}
                style={{
                  borderColor: activeScenario === index ? s.color : undefined,
                  color: activeScenario === index ? s.color : undefined,
                }}
              >
                {s.title}
              </button>
            ))}
          </div>

          {/* Decision box */}
          <div
            className="px-4 py-2 rounded-lg border text-sm font-medium text-center"
            style={{
              backgroundColor: `${scenario.color}20`,
              borderColor: `${scenario.color}40`,
              color: scenario.color,
            }}
          >
            Decision: {scenario.decision}
          </div>

          {/* Consequence chain */}
          <div className="flex flex-col items-center gap-3 w-full max-w-xs">
            {/* First Order */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative overflow-hidden w-full p-3 rounded-xl border border-white/[0.08]"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-white/50 uppercase tracking-wide">
                  {scenario.firstOrder.label}
                </span>
                <span className="text-lg">{scenario.firstOrder.emotion}</span>
              </div>
              <p className="text-xs text-white/80">{scenario.firstOrder.result}</p>
            </motion.div>

            {/* Arrow */}
            <motion.div
              animate={{ opacity: visibleOrder >= 2 ? 1 : 0.3 }}
              className="text-white/50"
            >
              Then what?
            </motion.div>

            {/* Second Order */}
            <AnimatePresence>
              {visibleOrder >= 2 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative overflow-hidden w-full p-3 rounded-xl border border-white/[0.08]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-white/50 uppercase tracking-wide">
                      {scenario.secondOrder.label}
                    </span>
                    <span className="text-lg">{scenario.secondOrder.emotion}</span>
                  </div>
                  <p className="text-xs text-white/80">{scenario.secondOrder.result}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Arrow */}
            {visibleOrder >= 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: visibleOrder >= 3 ? 1 : 0.3 }}
                className="text-white/50"
              >
                And then?
              </motion.div>
            )}

            {/* Third Order */}
            <AnimatePresence>
              {visibleOrder >= 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative overflow-hidden w-full p-3 rounded-xl border"
                  style={{
                    background: `linear-gradient(135deg, ${scenario.color}15 0%, ${scenario.color}05 100%)`,
                    borderColor: `${scenario.color}40`,
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent to-transparent"
                    style={{ background: `linear-gradient(to right, transparent, ${scenario.color}40, transparent)` }}
                  />
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className="text-[10px] uppercase tracking-wide font-medium"
                      style={{ color: scenario.color }}
                    >
                      {scenario.thirdOrder.label}
                    </span>
                    <span className="text-lg">{scenario.thirdOrder.emotion}</span>
                  </div>
                  <p className="text-xs" style={{ color: scenario.color }}>
                    {scenario.thirdOrder.result}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Control buttons */}
          <div className="flex gap-2">
            {visibleOrder < 3 ? (
              <button
                onClick={revealNext}
                className="text-xs px-4 py-2 bg-amber-500/15 text-amber-400 hover:bg-amber-500/25 border border-amber-500/30 rounded-lg transition-all backdrop-blur-sm"
              >
                Ask "Then what?"
              </button>
            ) : (
              <button
                onClick={reset}
                className="text-xs px-4 py-2 bg-white/[0.04] border-white/10 text-white/50 hover:text-white/70 rounded-lg transition-all backdrop-blur-sm border"
              >
                Reset
              </button>
            )}
          </div>

          <p className="text-[10px] text-white/50 text-center max-w-xs">
            <span className="text-amber-400 font-medium">Second-order thinking:</span> Always ask "And then what?" to see beyond immediate consequences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SecondOrderThinking;
