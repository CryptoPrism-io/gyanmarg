import { useState } from 'react';
import { motion } from 'framer-motion';

// What Every BODY is Saying - Feet as honest indicators
const scenarios = [
  {
    id: 'interest',
    title: 'Interested in conversation',
    feet: 'pointed-toward',
    description: 'Feet point toward you, body open',
    meaning: 'Genuine engagement and interest',
  },
  {
    id: 'exit',
    title: 'Wants to leave',
    feet: 'pointed-away',
    description: 'One or both feet point toward exit',
    meaning: 'Subconsciously preparing to leave',
  },
  {
    id: 'happy',
    title: 'Genuinely happy',
    feet: 'bouncing',
    description: 'Feet bouncing or wiggling',
    meaning: 'Excitement that can\'t be contained',
  },
  {
    id: 'nervous',
    title: 'Feeling insecure',
    feet: 'wrapped',
    description: 'Feet wrapped around chair legs',
    meaning: 'Seeking stability and security',
  },
];

export function FeetDontLie() {
  const [activeScenario, setActiveScenario] = useState(0);
  const scenario = scenarios[activeScenario];

  const renderFeet = () => {
    switch (scenario.feet) {
      case 'pointed-toward':
        return (
          <motion.div className="flex gap-4 justify-center">
            <motion.div
              className="w-6 h-10 bg-blue-500/30 rounded-t-full border border-blue-500/50"
              animate={{ rotate: -10 }}
            />
            <motion.div
              className="w-6 h-10 bg-blue-500/30 rounded-t-full border border-blue-500/50"
              animate={{ rotate: 10 }}
            />
          </motion.div>
        );
      case 'pointed-away':
        return (
          <motion.div className="flex gap-4 justify-center">
            <motion.div
              className="w-6 h-10 bg-red-500/30 rounded-t-full border border-red-500/50"
              animate={{ rotate: -45 }}
            />
            <motion.div
              className="w-6 h-10 bg-amber-500/30 rounded-t-full border border-amber-500/50"
              animate={{ rotate: 10 }}
            />
          </motion.div>
        );
      case 'bouncing':
        return (
          <motion.div className="flex gap-4 justify-center">
            <motion.div
              className="w-6 h-10 bg-green-500/30 rounded-t-full border border-green-500/50"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 0.4 }}
            />
            <motion.div
              className="w-6 h-10 bg-green-500/30 rounded-t-full border border-green-500/50"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 0.4, delay: 0.2 }}
            />
          </motion.div>
        );
      case 'wrapped':
        return (
          <motion.div className="flex flex-col items-center">
            <div className="w-3 h-16 bg-gray-700 rounded" /> {/* Chair leg */}
            <motion.div
              className="absolute w-6 h-10 bg-purple-500/30 rounded-t-full border border-purple-500/50 rotate-90"
              style={{ top: '30%', left: '35%' }}
            />
            <motion.div
              className="absolute w-6 h-10 bg-purple-500/30 rounded-t-full border border-purple-500/50 -rotate-90"
              style={{ top: '30%', right: '35%' }}
            />
          </motion.div>
        );
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Header */}
      <div className="text-center">
        <p className="text-lg font-medium text-gray-300">👟 Feet Don't Lie</p>
        <p className="text-[10px] text-gray-500">
          The most honest part of the body—farthest from the brain
        </p>
      </div>

      {/* Feet visualization */}
      <div className="relative w-32 h-24 bg-[#111113] border border-gray-800 rounded-lg flex items-center justify-center">
        {renderFeet()}
      </div>

      {/* Scenario tabs */}
      <div className="flex gap-2 flex-wrap justify-center">
        {scenarios.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setActiveScenario(idx)}
            className={`px-3 py-1.5 rounded-lg text-[10px] border transition-all ${
              idx === activeScenario
                ? 'bg-blue-500/20 border-blue-500/50 text-blue-400'
                : 'border-gray-700 text-gray-500 hover:border-gray-600'
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* Scenario detail */}
      <motion.div
        key={activeScenario}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-xs bg-[#111113] border border-gray-800 rounded-lg p-4"
      >
        <p className="text-xs text-gray-300 mb-2">{scenario.description}</p>
        <p className="text-[10px] text-blue-400">→ {scenario.meaning}</p>
      </motion.div>

      {/* Tip */}
      <div className="w-full max-w-xs bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
        <p className="text-[10px] text-blue-400 text-center">
          💡 In your next meeting, notice where feet are pointing—it reveals true interest
        </p>
      </div>

      <p className="text-[10px] text-gray-500 text-center">
        From "What Every BODY is Saying" by Joe Navarro
      </p>
    </div>
  );
}

export default FeetDontLie;
