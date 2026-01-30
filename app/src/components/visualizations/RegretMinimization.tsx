import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
            className={`text-[10px] px-3 py-1.5 rounded-full transition-all border ${
              activeDecision === index
                ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                : 'text-gray-500 hover:text-gray-300 border-transparent'
            }`}
          >
            {d.scenario.split(' ').slice(0, 2).join(' ')}...
          </button>
        ))}
      </div>

      {/* Decision visualization */}
      <div className="w-full max-w-xs space-y-4">
        {/* Current scenario */}
        <div className="bg-[#111113] border border-gray-800 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-300 font-medium">{decision.scenario}</p>
        </div>

        {/* Timeline visualization */}
        <div className="relative">
          <div className="flex items-center justify-between px-4">
            <div className="text-center">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-1">
                <span className="text-xs text-blue-400">Now</span>
              </div>
              <p className="text-[10px] text-gray-500">Today</p>
            </div>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-500/30 via-gray-700 to-amber-500/30 mx-2" />
            <div className="text-center">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center mb-1">
                <span className="text-xs text-amber-400">80</span>
              </div>
              <p className="text-[10px] text-gray-500">Future</p>
            </div>
          </div>
        </div>

        {/* Choices */}
        <div className="space-y-2">
          <motion.div
            className="p-3 bg-[#111113] border border-gray-800 rounded-lg"
            whileHover={{ borderColor: '#6B7280' }}
          >
            <div className="flex items-start gap-2">
              <span className="text-gray-500">🔒</span>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-wide">Safe Choice</p>
                <p className="text-xs text-gray-400">{decision.safeChoice}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="p-3 bg-[#111113] border border-gray-800 rounded-lg"
            whileHover={{ borderColor: '#6B7280' }}
          >
            <div className="flex items-start gap-2">
              <span className="text-amber-400">🚀</span>
              <div>
                <p className="text-[10px] text-amber-400 uppercase tracking-wide">Bold Choice</p>
                <p className="text-xs text-gray-300">{decision.boldChoice}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Reveal button */}
        <button
          onClick={() => setShowPerspective(true)}
          className="w-full py-2 text-xs bg-amber-500/10 border border-amber-500/30
                   text-amber-400 rounded-lg hover:bg-amber-500/20 transition-all"
        >
          Ask your 80-year-old self →
        </button>

        {/* Age 80 perspective */}
        <AnimatePresence>
          {showPerspective && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">👴</span>
                <div>
                  <p className="text-[10px] text-amber-400 uppercase tracking-wide mb-1">
                    Your 80-year-old self says:
                  </p>
                  <p className="text-xs text-gray-300 italic">
                    "{decision.age80Perspective}"
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Framework explanation */}
      <div className="bg-[#111113] border border-gray-800 rounded-lg p-3 max-w-xs text-center">
        <p className="text-xs text-gray-400">
          <span className="text-blue-400 font-medium">Key insight:</span> Minimize
          regrets of <span className="text-amber-400">inaction</span>, not action.
          We rarely regret trying, but often regret not trying.
        </p>
      </div>

      <p className="text-[10px] text-gray-500 text-center">
        Jeff Bezos used this to decide to start Amazon
      </p>
    </div>
  );
}

export default RegretMinimization;
