import { useState } from 'react';
import { motion } from 'framer-motion';

// The Status Game - Three Status Games
const games = [
  {
    name: 'Dominance',
    emoji: '👊',
    definition: 'Status through force, intimidation, coercion',
    arena: 'Prison hierarchies, authoritarian regimes',
    currency: 'Fear, physical power, control',
    weakness: 'Requires constant enforcement, breeds resentment',
    color: 'red',
  },
  {
    name: 'Virtue',
    emoji: '🙏',
    definition: 'Status through moral superiority and beliefs',
    arena: 'Religious groups, activist movements',
    currency: 'Righteousness, purity, sacrifice',
    weakness: 'Can become judgmental, creates in-groups',
    color: 'purple',
  },
  {
    name: 'Success',
    emoji: '🏆',
    definition: 'Status through achievement and competence',
    arena: 'Business, sports, academia',
    currency: 'Skills, results, wealth',
    weakness: 'Never enough, hedonic treadmill',
    color: 'amber',
  },
];

export function VirtueSuccessStatus() {
  const [activeGame, setActiveGame] = useState<number | null>(null);
  const [selfAssessment, setSelfAssessment] = useState<Record<number, number>>({
    0: 20,
    1: 40,
    2: 40,
  });

  const colorMap: Record<string, { bg: string; border: string; text: string }> = {
    red: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400' },
    purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400' },
    amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400' },
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Header */}
      <div className="text-center">
        <p className="text-xs text-gray-400">
          We all play status games. Which one dominates your life?
        </p>
      </div>

      {/* Three games */}
      <div className="w-full max-w-xs space-y-2">
        {games.map((game, idx) => {
          const colors = colorMap[game.color];
          const isActive = activeGame === idx;

          return (
            <motion.div key={idx} className="space-y-2">
              <button
                onClick={() => setActiveGame(isActive ? null : idx)}
                className={`w-full p-3 rounded-lg border transition-all text-left ${
                  isActive ? `${colors.bg} ${colors.border}` : 'bg-[#111113] border-gray-800 hover:border-gray-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{game.emoji}</span>
                  <span className={`text-sm font-medium ${isActive ? colors.text : 'text-gray-400'}`}>
                    {game.name} Game
                  </span>
                </div>
              </button>

              {isActive && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className={`${colors.bg} border ${colors.border} rounded-lg p-3 ml-4`}
                >
                  <p className="text-xs text-gray-300 mb-2">{game.definition}</p>
                  <div className="space-y-1 text-[10px]">
                    <p><span className="text-gray-500">Arena:</span> <span className="text-gray-400">{game.arena}</span></p>
                    <p><span className="text-gray-500">Currency:</span> <span className="text-gray-400">{game.currency}</span></p>
                    <p><span className="text-gray-500">Trap:</span> <span className={colors.text}>{game.weakness}</span></p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Self-assessment sliders */}
      <div className="w-full max-w-xs bg-[#111113] border border-gray-800 rounded-lg p-4">
        <p className="text-xs text-gray-400 mb-3 text-center">
          How much does each game drive you?
        </p>
        {games.map((game, idx) => {
          const colors = colorMap[game.color];
          return (
            <div key={idx} className="mb-3">
              <div className="flex justify-between text-[10px] mb-1">
                <span className={colors.text}>{game.name}</span>
                <span className="text-gray-500">{selfAssessment[idx]}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={selfAssessment[idx]}
                onChange={(e) => setSelfAssessment({...selfAssessment, [idx]: Number(e.target.value)})}
                className="w-full accent-gray-500 h-1"
              />
            </div>
          );
        })}
      </div>

      {/* Key insight */}
      <div className="w-full max-w-xs bg-purple-500/10 border border-purple-500/30 rounded-lg p-3">
        <p className="text-[10px] text-purple-400 text-center">
          <span className="font-medium">Awareness is freedom:</span> Once you see which game
          you're playing, you can choose whether to keep playing or opt out.
        </p>
      </div>

      <p className="text-[10px] text-gray-500 text-center">
        From "The Status Game" by Will Storr
      </p>
    </div>
  );
}

export default VirtueSuccessStatus;
