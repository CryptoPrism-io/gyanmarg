import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Nonviolent Communication - Requests vs Demands
const scenarios = [
  {
    situation: 'You want help with dishes',
    demand: 'You need to help with the dishes!',
    request: 'Would you be willing to help with the dishes after dinner?',
  },
  {
    situation: 'You want more attention',
    demand: 'You never spend time with me!',
    request: 'I\'d love to spend an evening together this week. Would you be open to that?',
  },
  {
    situation: 'You want quiet to focus',
    demand: 'Stop making so much noise!',
    request: 'I\'m trying to focus. Would you mind keeping it down for the next hour?',
  },
];

export function RequestVsDemand() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [choice, setChoice] = useState<'demand' | 'request' | null>(null);
  const [theyAnswer, setTheyAnswer] = useState<'yes' | 'no' | null>(null);
  const [showResult, setShowResult] = useState(false);

  const scenario = scenarios[activeScenario];

  const handleChoice = (type: 'demand' | 'request') => {
    setChoice(type);
    setTheyAnswer(null);
    setShowResult(false);
  };

  const handleTheirResponse = (answer: 'yes' | 'no') => {
    setTheyAnswer(answer);
    setShowResult(true);
  };

  const nextScenario = () => {
    setActiveScenario((prev) => (prev + 1) % scenarios.length);
    setChoice(null);
    setTheyAnswer(null);
    setShowResult(false);
  };

  const getResult = () => {
    if (choice === 'demand' && theyAnswer === 'no') {
      return { text: 'Conflict escalates. They feel controlled.', color: 'red' };
    }
    if (choice === 'demand' && theyAnswer === 'yes') {
      return { text: 'They comply but feel resentful.', color: 'amber' };
    }
    if (choice === 'request' && theyAnswer === 'no') {
      return { text: 'You respect their "no" and explore alternatives together.', color: 'green' };
    }
    if (choice === 'request' && theyAnswer === 'yes') {
      return { text: 'They help willingly, feeling respected.', color: 'green' };
    }
    return { text: '', color: 'gray' };
  };

  const result = getResult();

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/[0.03] via-transparent to-red-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-4">
          {/* Scenario */}
          <div className="relative overflow-hidden w-full max-w-xs rounded-lg p-4 text-center">
            <div className="absolute inset-0 bg-[var(--viz-tile)] backdrop-blur-sm" />
            <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg" />
            <div className="relative z-10">
              <p className="text-[10px] text-[var(--viz-muted)] uppercase tracking-wide mb-1">
                Scenario {activeScenario + 1}/{scenarios.length}
              </p>
              <p className="text-sm text-[var(--viz-secondary)]">{scenario.situation}</p>
            </div>
          </div>

          {/* Choose approach */}
          {!choice && (
            <div className="w-full max-w-xs space-y-2">
              <p className="text-[10px] text-[var(--viz-muted)] text-center">How do you communicate?</p>
              <button
                onClick={() => handleChoice('demand')}
                className="relative overflow-hidden w-full p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-left hover:bg-red-500/20 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
                <div className="relative z-10">
                  <p className="text-[10px] text-red-400 uppercase mb-1">Demand</p>
                  <p className="text-xs text-[var(--viz-muted)] italic">"{scenario.demand}"</p>
                </div>
              </button>
              <button
                onClick={() => handleChoice('request')}
                className="relative overflow-hidden w-full p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-left hover:bg-green-500/20 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
                <div className="relative z-10">
                  <p className="text-[10px] text-green-400 uppercase mb-1">Request</p>
                  <p className="text-xs text-[var(--viz-muted)] italic">"{scenario.request}"</p>
                </div>
              </button>
            </div>
          )}

          {/* They respond */}
          {choice && !showResult && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-xs"
            >
              <p className="text-[10px] text-[var(--viz-muted)] text-center mb-2">
                You used a <span className={choice === 'demand' ? 'text-red-400' : 'text-green-400'}>{choice}</span>.
                How do they respond?
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleTheirResponse('yes')}
                  className="py-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-xs hover:bg-green-500/30 backdrop-blur-sm transition-all"
                >
                  "Yes, okay"
                </button>
                <button
                  onClick={() => handleTheirResponse('no')}
                  className="py-3 bg-amber-500/20 border border-amber-500/50 rounded-lg text-amber-400 text-xs hover:bg-amber-500/30 backdrop-blur-sm transition-all"
                >
                  "No, not now"
                </button>
              </div>
            </motion.div>
          )}

          {/* Result */}
          <AnimatePresence>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`relative overflow-hidden w-full max-w-xs p-4 rounded-lg border ${
                  result.color === 'green'
                    ? 'bg-green-500/10 border-green-500/30'
                    : result.color === 'amber'
                    ? 'bg-amber-500/10 border-amber-500/30'
                    : 'bg-red-500/10 border-red-500/30'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
                <p className={`relative z-10 text-xs text-center ${
                  result.color === 'green'
                    ? 'text-green-400'
                    : result.color === 'amber'
                    ? 'text-amber-400'
                    : 'text-red-400'
                }`}>
                  {result.text}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {showResult && (
            <button
              onClick={nextScenario}
              className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-lg text-xs text-blue-400 backdrop-blur-sm hover:bg-blue-500/30 transition-all"
            >
              Next Scenario →
            </button>
          )}

          {/* Key insight */}
          <div className="relative overflow-hidden w-full max-w-xs rounded-lg p-3">
            <div className="absolute inset-0 bg-[var(--viz-tile)] backdrop-blur-sm" />
            <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg" />
            <p className="relative z-10 text-[10px] text-[var(--viz-muted)] text-center">
              <span className="text-green-400">The difference:</span> If "no" brings punishment or guilt,
              it was a demand disguised as a request.
            </p>
          </div>

          <p className="text-[10px] text-[var(--viz-muted)] text-center">
            From "Nonviolent Communication" by Marshall Rosenberg
          </p>
        </div>
      </div>
    </div>
  );
}

export default RequestVsDemand;
