import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingDown } from 'lucide-react';

interface Scenario {
  id: string;
  title: string;
  description: string;
  verdict: 'push' | 'quit';
  reason: string;
}

const scenarios: Scenario[] = [
  {
    id: 'startup',
    title: 'Your startup is struggling',
    description: '18 months in, revenue is flat, but you have unique tech and growing user love',
    verdict: 'push',
    reason: 'This is The Dip - push through. You have differentiation and traction signals.',
  },
  {
    id: 'job',
    title: 'Hating your job',
    description: 'Third year in a role with no growth, same tasks, no learning',
    verdict: 'quit',
    reason: 'This is a Cul-de-Sac - quit. No amount of effort will change the dead end.',
  },
  {
    id: 'skill',
    title: 'Learning guitar is hard',
    description: 'Fingers hurt, progress slow after 2 months, but you love music',
    verdict: 'push',
    reason: 'This is The Dip - push through. The pain is temporary, the skill is permanent.',
  },
  {
    id: 'market',
    title: 'Selling to wrong market',
    description: 'Product is good but target customers can\'t afford it',
    verdict: 'quit',
    reason: 'This is a Cliff - quit before you fall. Pivot to a different market.',
  },
];

export function TheDip() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [userGuess, setUserGuess] = useState<'push' | 'quit' | null>(null);

  const scenario = scenarios[activeScenario];

  const handleGuess = (guess: 'push' | 'quit') => {
    setUserGuess(guess);
    setRevealed(true);
  };

  const nextScenario = () => {
    setActiveScenario(prev => (prev + 1) % scenarios.length);
    setRevealed(false);
    setUserGuess(null);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Glassmorphism layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] via-transparent to-red-500/[0.02]" />
      <div className="absolute inset-0 border border-white/[0.1] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
            <TrendingDown className="w-4 h-4 text-amber-400" />
          </div>
          <h3 className="text-sm font-medium text-white/90">The Dip</h3>
        </div>

        <div className="flex flex-col items-center gap-4">
          {/* The Dip curve visualization */}
          <div className="w-full max-w-xs">
            <svg viewBox="0 0 300 100" className="w-full">
              {/* The Dip curve */}
              <path
                d="M 0 80 Q 30 20, 60 30 Q 100 60, 150 70 Q 200 80, 250 40 Q 280 20, 300 10"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="3"
              />

              {/* Labels */}
              <text x="30" y="15" fill="#22C55E" fontSize="8">Beginner excitement</text>
              <text x="120" y="90" fill="#EF4444" fontSize="8">THE DIP</text>
              <text x="250" y="25" fill="#22C55E" fontSize="8">Mastery</text>

              {/* Quit/Push zones */}
              <text x="100" y="75" fill="rgba(255,255,255,0.4)" fontSize="7">Most quit here</text>
              <circle cx="150" cy="70" r="4" fill="#EF4444" />
            </svg>
          </div>

          {/* Scenario card */}
          <div className="w-full max-w-xs">
            <div className="relative overflow-hidden rounded-lg">
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
              />
              <div className="absolute inset-0 border border-white/[0.08] rounded-lg" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="relative p-4">
                <p className="text-[10px] text-white/50 uppercase tracking-wide mb-2">
                  Scenario {activeScenario + 1}/{scenarios.length}
                </p>
                <h3 className="text-sm font-medium text-white/90 mb-2">{scenario.title}</h3>
                <p className="text-xs text-white/60">{scenario.description}</p>
              </div>
            </div>
          </div>

          {/* Decision buttons */}
          {!revealed && (
            <div className="flex gap-3">
              <motion.button
                onClick={() => handleGuess('push')}
                className="px-4 py-2 bg-green-500/10 border border-green-500/30
                         text-green-400 rounded-lg text-xs hover:bg-green-500/20 transition-all"
                whileTap={{ scale: 0.95 }}
              >
                💪 Push through
              </motion.button>
              <motion.button
                onClick={() => handleGuess('quit')}
                className="px-4 py-2 bg-red-500/10 border border-red-500/30
                         text-red-400 rounded-lg text-xs hover:bg-red-500/20 transition-all"
                whileTap={{ scale: 0.95 }}
              >
                🚪 Quit strategically
              </motion.button>
            </div>
          )}

          {/* Result */}
          {revealed && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-xs space-y-3"
            >
              {/* Feedback */}
              <div className={`p-3 rounded-lg border text-center ${
                userGuess === scenario.verdict
                  ? 'bg-green-500/10 border-green-500/30'
                  : 'bg-amber-500/10 border-amber-500/30'
              }`}>
                <p className="text-xs" style={{
                  color: userGuess === scenario.verdict ? '#22C55E' : '#F59E0B'
                }}>
                  {userGuess === scenario.verdict ? '✓ Correct!' : '→ Consider this:'}
                </p>
              </div>

              {/* Answer */}
              <div className={`p-3 rounded-lg border ${
                scenario.verdict === 'push'
                  ? 'bg-green-500/10 border-green-500/30'
                  : 'bg-red-500/10 border-red-500/30'
              }`}>
                <p className="text-xs font-medium mb-1" style={{
                  color: scenario.verdict === 'push' ? '#22C55E' : '#EF4444'
                }}>
                  {scenario.verdict === 'push' ? '💪 Push through' : '🚪 Quit strategically'}
                </p>
                <p className="text-xs text-white/60">{scenario.reason}</p>
              </div>

              <button
                onClick={nextScenario}
                className="w-full py-2 text-xs text-white/50 hover:text-white/80 transition-colors"
              >
                Next scenario →
              </button>
            </motion.div>
          )}

          {/* Key insight */}
          <div className="relative overflow-hidden rounded-lg max-w-xs">
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
            />
            <div className="absolute inset-0 border border-white/[0.08] rounded-lg" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="relative p-3 text-center">
              <p className="text-xs text-white/60">
                <span className="text-amber-400 font-medium">Key insight:</span> Winners quit the
                right things at the right time. The Dip is a test—only push through if you can
                become the best.
              </p>
            </div>
          </div>

          <p className="text-[10px] text-white/50">
            From The Dip by Seth Godin
          </p>
        </div>
      </div>
    </div>
  );
}

export default TheDip;
