import { useState } from 'react';
import { motion } from 'framer-motion';

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
    <div className="flex flex-col items-center gap-4">
      {/* Challenge scenario */}
      <div className="w-full max-w-xs">
        <div className="bg-[#111113] border border-gray-800 rounded-lg p-4 text-center mb-4">
          <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-2">
            Scenario {activeChallenge + 1}/{challenges.length}
          </p>
          <p className="text-sm text-gray-300">{challenge.situation}</p>
          <p className="text-xs text-gray-500 mt-2">How do you respond?</p>
        </div>

        {/* Mindset choices */}
        <div className="grid grid-cols-2 gap-3">
          {/* Fixed mindset */}
          <motion.button
            onClick={() => handleChoice('fixed')}
            className={`p-3 rounded-lg border text-left transition-all ${
              selectedMindset === 'fixed'
                ? 'bg-red-500/10 border-red-500/50'
                : selectedMindset === 'growth'
                ? 'opacity-50 border-gray-800'
                : 'bg-[#111113] border-gray-800 hover:border-red-500/30'
            }`}
            whileTap={{ scale: 0.98 }}
          >
            <p className="text-[10px] text-red-400 uppercase tracking-wide mb-1">
              Fixed Mindset
            </p>
            <p className="text-xs text-gray-400">{challenge.fixedResponse}</p>
          </motion.button>

          {/* Growth mindset */}
          <motion.button
            onClick={() => handleChoice('growth')}
            className={`p-3 rounded-lg border text-left transition-all ${
              selectedMindset === 'growth'
                ? 'bg-green-500/10 border-green-500/50'
                : selectedMindset === 'fixed'
                ? 'opacity-50 border-gray-800'
                : 'bg-[#111113] border-gray-800 hover:border-green-500/30'
            }`}
            whileTap={{ scale: 0.98 }}
          >
            <p className="text-[10px] text-green-400 uppercase tracking-wide mb-1">
              Growth Mindset
            </p>
            <p className="text-xs text-gray-400">{challenge.growthResponse}</p>
          </motion.button>
        </div>

        {/* Feedback */}
        {selectedMindset && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 p-3 rounded-lg border text-center ${
              selectedMindset === 'growth'
                ? 'bg-green-500/10 border-green-500/30'
                : 'bg-amber-500/10 border-amber-500/30'
            }`}
          >
            <p className="text-xs text-gray-300">
              {selectedMindset === 'growth' ? (
                <><span className="text-green-400">✓</span> Growth mindset leads to more learning and resilience</>
              ) : (
                <><span className="text-amber-400">↻</span> Notice the thought, then reframe it with growth mindset</>
              )}
            </p>
            <button
              onClick={nextChallenge}
              className="mt-2 text-[10px] text-gray-500 hover:text-gray-300"
            >
              Next scenario →
            </button>
          </motion.div>
        )}
      </div>

      {/* Comparison chart */}
      <div className="w-full max-w-xs">
        <div className="bg-[#111113] border border-gray-800 rounded-lg overflow-hidden">
          <div className="grid grid-cols-3 text-[10px] border-b border-gray-800">
            <div className="p-2 text-gray-500"></div>
            <div className="p-2 text-red-400 text-center border-l border-gray-800">Fixed</div>
            <div className="p-2 text-green-400 text-center border-l border-gray-800">Growth</div>
          </div>
          {comparisons.map((comp, idx) => (
            <div key={idx} className="grid grid-cols-3 text-[10px] border-b border-gray-800 last:border-0">
              <div className="p-2 text-gray-400">{comp.aspect}</div>
              <div className="p-2 text-gray-500 text-center border-l border-gray-800">{comp.fixed}</div>
              <div className="p-2 text-gray-300 text-center border-l border-gray-800">{comp.growth}</div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-[10px] text-gray-500 text-center">
        From "Mindset" by Carol Dweck
      </p>
    </div>
  );
}

export default GrowthMindset;
