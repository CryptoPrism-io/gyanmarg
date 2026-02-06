import { useState } from 'react';
import { motion } from 'framer-motion';
import { Footprints } from 'lucide-react';

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
            <div className="w-3 h-16 bg-white/[0.08] rounded" /> {/* Chair leg */}
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
    <div className="relative overflow-hidden rounded-2xl">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-purple-500/[0.02]" />
      <div className="absolute inset-0 border border-white/[0.1] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-4">
          {/* Header */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-1">
              <div className="p-1.5 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 shadow-inner">
                <Footprints className="w-4 h-4 text-blue-400" />
              </div>
              <p className="text-lg font-medium text-white/90">Feet Don't Lie</p>
            </div>
            <p className="text-[10px] text-white/50">
              The most honest part of the body — farthest from the brain
            </p>
          </div>

          {/* Feet visualization */}
          <div className="relative w-32 h-24 rounded-lg flex items-center justify-center border border-white/[0.08] backdrop-blur-sm"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
          >
            {renderFeet()}
          </div>

          {/* Scenario tabs */}
          <div className="flex gap-2 flex-wrap justify-center">
            {scenarios.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveScenario(idx)}
                className={`px-3 py-1.5 rounded-lg text-[10px] border transition-all backdrop-blur-sm ${
                  idx === activeScenario
                    ? 'bg-blue-500/20 border-blue-500/50 text-blue-400'
                    : 'border-white/[0.08] text-white/50 hover:border-white/[0.15] hover:bg-white/[0.03]'
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
            className="relative w-full max-w-xs rounded-lg p-4 border border-white/[0.08] overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="text-xs text-white/80 mb-2">{scenario.description}</p>
            <p className="text-[10px] text-blue-400">→ {scenario.meaning}</p>
          </motion.div>

          {/* Tip */}
          <div className="relative w-full max-w-xs bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
            <p className="text-[10px] text-blue-400 text-center">
              In your next meeting, notice where feet are pointing — it reveals true interest
            </p>
          </div>

          <p className="text-[10px] text-white/40 text-center">
            From "What Every BODY is Saying" by Joe Navarro
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeetDontLie;
