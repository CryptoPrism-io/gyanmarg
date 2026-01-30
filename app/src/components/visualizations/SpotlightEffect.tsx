import { useState } from 'react';
import { motion } from 'framer-motion';

interface Scenario {
  situation: string;
  yourFear: string;
  reality: string;
  percentage: number;
}

const scenarios: Scenario[] = [
  {
    situation: 'You trip in public',
    yourFear: 'Everyone saw and will remember forever',
    reality: 'Most people didn\'t notice or forgot in 5 seconds',
    percentage: 23,
  },
  {
    situation: 'Bad hair day at work',
    yourFear: 'Everyone is judging your appearance',
    reality: 'Colleagues are focused on their own concerns',
    percentage: 18,
  },
  {
    situation: 'You mispronounce a word',
    yourFear: 'Everyone thinks you\'re uneducated',
    reality: 'Most didn\'t catch it, the rest don\'t care',
    percentage: 15,
  },
  {
    situation: 'Wearing the same outfit twice',
    yourFear: 'People will notice and talk about it',
    reality: 'Almost no one tracks what you wear',
    percentage: 12,
  },
  {
    situation: 'Your voice cracks in a meeting',
    yourFear: 'You\'ve lost all credibility',
    reality: 'Everyone has embarrassing moments',
    percentage: 20,
  },
];

export function SpotlightEffect() {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [spotlightSize, setSpotlightSize] = useState(80);

  const scenario = scenarios[currentScenario];

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Title */}
      <div className="text-center">
        <h3 className="text-sm font-bold text-amber-400">The Spotlight Effect</h3>
        <p className="text-[10px] text-gray-500">You're not the center of everyone's attention</p>
      </div>

      {/* Interactive spotlight */}
      <div className="relative w-56 h-56 bg-[#0A0A0B] rounded-full overflow-hidden border border-gray-800">
        {/* Grid of "people" */}
        <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 gap-2 p-4">
          {Array.from({ length: 25 }).map((_, i) => {
            const isCenter = i === 12;
            return (
              <motion.div
                key={i}
                className={`rounded-full ${isCenter ? 'bg-amber-400' : 'bg-gray-600'}`}
                animate={{
                  opacity: isCenter ? 1 : 0.3 + Math.random() * 0.3,
                }}
                transition={{ duration: 0.5 }}
              />
            );
          })}
        </div>

        {/* Spotlight effect - what you think */}
        <motion.div
          className="absolute rounded-full bg-gradient-radial from-amber-400/30 to-transparent pointer-events-none"
          style={{
            width: `${spotlightSize}%`,
            height: `${spotlightSize}%`,
            left: `${(100 - spotlightSize) / 2}%`,
            top: `${(100 - spotlightSize) / 2}%`,
          }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Center label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-[#0A0A0B]/80 px-3 py-1 rounded-full">
            <p className="text-xs text-amber-400 font-bold">YOU</p>
          </div>
        </div>
      </div>

      {/* Spotlight size control */}
      <div className="w-full max-w-xs">
        <div className="flex justify-between text-[10px] text-gray-500 mb-1">
          <span>Perceived attention on you</span>
          <span className="text-amber-400">{spotlightSize}%</span>
        </div>
        <input
          type="range"
          min="20"
          max="100"
          value={spotlightSize}
          onChange={(e) => setSpotlightSize(Number(e.target.value))}
          className="w-full"
          style={{ accentColor: '#F59E0B' }}
        />
        <div className="flex justify-between text-[8px] text-gray-600 mt-1">
          <span>Reality (~20%)</span>
          <span>What you feel (80%+)</span>
        </div>
      </div>

      {/* Scenario selector */}
      <div className="flex gap-1">
        {scenarios.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentScenario(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentScenario === i ? 'bg-amber-400' : 'bg-gray-700 hover:bg-gray-600'
            }`}
          />
        ))}
      </div>

      {/* Scenario display */}
      <motion.div
        key={currentScenario}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xs space-y-2"
      >
        <div className="p-3 bg-[#111113] border border-gray-800 rounded-xl">
          <p className="text-xs text-gray-300 font-medium mb-1">📍 Situation:</p>
          <p className="text-xs text-gray-400">{scenario.situation}</p>
        </div>

        <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl">
          <p className="text-xs text-red-400 font-medium mb-1">😰 Your Fear:</p>
          <p className="text-xs text-gray-400">{scenario.yourFear}</p>
        </div>

        <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-xl">
          <p className="text-xs text-green-400 font-medium mb-1">✅ Reality:</p>
          <p className="text-xs text-gray-400">{scenario.reality}</p>
        </div>

        {/* Actual attention bar */}
        <div className="p-3 bg-[#111113] border border-gray-800 rounded-xl">
          <div className="flex justify-between text-[10px] mb-2">
            <span className="text-gray-500">Actual attention on you:</span>
            <span className="text-amber-400 font-bold">{scenario.percentage}%</span>
          </div>
          <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-amber-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${scenario.percentage}%` }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>
      </motion.div>

      {/* The insight */}
      <div className="w-full max-w-xs grid grid-cols-2 gap-2">
        <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-center">
          <p className="text-xl font-bold text-amber-400">2x</p>
          <p className="text-[9px] text-gray-500">We overestimate by 2x how much others notice us</p>
        </div>
        <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-xl text-center">
          <p className="text-xl font-bold text-blue-400">50%</p>
          <p className="text-[9px] text-gray-500">People forget your "embarrassments" within hours</p>
        </div>
      </div>

      {/* Key insight */}
      <div className="bg-[#111113] border border-gray-800 rounded-xl p-4 max-w-xs">
        <p className="text-xs text-gray-400 leading-relaxed">
          <span className="text-amber-400 font-medium">Thomas Gilovich:</span> "We tend to believe
          that others are paying more attention to us than they actually are. In reality, everyone
          is the protagonist of their own story—not a supporting actor in yours."
        </p>
      </div>

      <p className="text-[10px] text-gray-600">From Thinking, Fast and Slow</p>
    </div>
  );
}

export default SpotlightEffect;
