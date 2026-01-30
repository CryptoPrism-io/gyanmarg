import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Scenario = 'rock' | 'container' | 'heat' | 'cold';
type WaterPhase = 'approaching' | 'encountering' | 'adapting' | 'completed';

interface ScenarioData {
  id: Scenario;
  name: string;
  icon: string;
  description: string;
  adaptation: string;
  principle: string;
  waterColor: string;
  waterGlow: string;
}

const scenarios: ScenarioData[] = [
  {
    id: 'rock',
    name: 'The Rock',
    icon: '🪨',
    description: 'An immovable obstacle blocks your path',
    adaptation: 'Water flows around, never fighting. It finds the easiest path forward.',
    principle: 'Flow around obstacles—never force through.',
    waterColor: '#3B82F6',
    waterGlow: '#60A5FA',
  },
  {
    id: 'container',
    name: 'The Vessel',
    icon: '🫙',
    description: 'You\'re placed in a new environment',
    adaptation: 'Water takes the exact shape of its container. Perfect adaptation.',
    principle: 'Become one with your circumstances.',
    waterColor: '#3B82F6',
    waterGlow: '#60A5FA',
  },
  {
    id: 'heat',
    name: 'The Fire',
    icon: '🔥',
    description: 'Intense pressure and heat bear down',
    adaptation: 'Water transforms to steam—rising, expanding, becoming more powerful.',
    principle: 'Transform pressure into elevation.',
    waterColor: '#94A3B8',
    waterGlow: '#CBD5E1',
  },
  {
    id: 'cold',
    name: 'The Freeze',
    icon: '❄️',
    description: 'Everything slows and hardens',
    adaptation: 'Water becomes ice—patient, powerful, able to crack stone over time.',
    principle: 'Patience and persistence overcome all.',
    waterColor: '#93C5FD',
    waterGlow: '#BFDBFE',
  },
];

export function BeWater() {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [phase, setPhase] = useState<WaterPhase>('approaching');
  const [autoPlay, setAutoPlay] = useState(false);

  const scenario = scenarios[currentScenario];

  // Animation sequence
  useEffect(() => {
    setPhase('approaching');
    const timers = [
      setTimeout(() => setPhase('encountering'), 500),
      setTimeout(() => setPhase('adapting'), 1500),
      setTimeout(() => setPhase('completed'), 2500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [currentScenario]);

  // Auto-play
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentScenario(prev => (prev + 1) % scenarios.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const selectScenario = (index: number) => {
    setAutoPlay(false);
    setCurrentScenario(index);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="text-center">
        <h3 className="text-sm font-bold text-blue-400">Be Water, My Friend</h3>
        <p className="text-[10px] text-gray-500">Adapt like water to any circumstance</p>
      </div>

      {/* Scenario selector */}
      <div className="flex gap-2">
        {scenarios.map((s, i) => (
          <motion.button
            key={s.id}
            onClick={() => selectScenario(i)}
            className={`p-2 rounded-xl border transition-all ${
              currentScenario === i
                ? 'bg-blue-500/20 border-blue-500/50'
                : 'border-gray-700 hover:border-gray-600'
            }`}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl">{s.icon}</span>
          </motion.button>
        ))}
      </div>

      {/* Main visualization - SVG based */}
      <div className="relative w-72 h-52 bg-gradient-to-b from-[#0A0A0B] to-[#111113] border border-gray-800 rounded-2xl overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 288 208">
          <defs>
            {/* Water gradient */}
            <linearGradient id="waterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={scenario.waterGlow} />
              <stop offset="100%" stopColor={scenario.waterColor} />
            </linearGradient>
            {/* Glow filter */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Steam filter */}
            <filter id="steam">
              <feGaussianBlur stdDeviation="2" />
            </filter>
          </defs>

          {/* Background effects */}
          {scenario.id === 'heat' && (
            <motion.rect
              x="0" y="158" width="288" height="50"
              fill="url(#heatGradient)"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          )}

          {/* Obstacle visualizations */}
          <AnimatePresence mode="wait">
            {scenario.id === 'rock' && (
              <motion.g
                key="rock"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <rect x="150" y="70" width="50" height="70" rx="5" fill="#374151" />
                <rect x="155" y="75" width="40" height="60" rx="3" fill="#4B5563" />
              </motion.g>
            )}

            {scenario.id === 'container' && (
              <motion.g
                key="container"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <rect
                  x="100" y="60" width="90" height="90" rx="10"
                  fill="none" stroke="#6B7280" strokeWidth="3" strokeDasharray="8 4"
                />
              </motion.g>
            )}

            {scenario.id === 'heat' && (
              <motion.g
                key="heat"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {/* Flame shapes */}
                {[0, 1, 2].map((i) => (
                  <motion.ellipse
                    key={i}
                    cx={144 + (i - 1) * 30}
                    cy="170"
                    rx="15"
                    ry="25"
                    fill={i === 1 ? '#F59E0B' : '#EF4444'}
                    animate={{
                      ry: [25, 35, 25],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                  />
                ))}
              </motion.g>
            )}

            {scenario.id === 'cold' && (
              <motion.g
                key="cold"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0 }}
              >
                {/* Snowflake pattern */}
                <motion.text
                  x="144" y="80" textAnchor="middle" fontSize="40" fill="#93C5FD"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: '144px 80px' }}
                >
                  ❄️
                </motion.text>
                {/* Cold rays */}
                {[0, 60, 120, 180, 240, 300].map((angle) => (
                  <motion.line
                    key={angle}
                    x1="144" y1="80"
                    x2={144 + Math.cos((angle * Math.PI) / 180) * 60}
                    y2={80 + Math.sin((angle * Math.PI) / 180) * 60}
                    stroke="#93C5FD"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                    animate={{ strokeOpacity: [0.1, 0.4, 0.1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: angle / 360 }}
                  />
                ))}
              </motion.g>
            )}
          </AnimatePresence>

          {/* The Water - different animations per scenario */}
          <AnimatePresence mode="wait">
            {scenario.id === 'rock' && (
              <motion.g key="water-rock" filter="url(#glow)">
                {/* Main water body */}
                <motion.ellipse
                  cx={phase === 'completed' ? 80 : 50}
                  cy="104"
                  fill="url(#waterGradient)"
                  initial={{ rx: 30, ry: 30 }}
                  animate={{
                    rx: phase === 'completed' ? 25 : 30,
                    ry: phase === 'completed' ? 35 : 30,
                    cx: phase === 'completed' ? 80 : 50,
                  }}
                  transition={{ duration: 0.8 }}
                />
                {/* Flow around top */}
                {(phase === 'adapting' || phase === 'completed') && (
                  <motion.path
                    d="M 80 80 Q 120 50 180 70 Q 230 80 250 104"
                    fill="none"
                    stroke="url(#waterGradient)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.8 }}
                    transition={{ duration: 1 }}
                  />
                )}
                {/* Flow around bottom */}
                {(phase === 'adapting' || phase === 'completed') && (
                  <motion.path
                    d="M 80 125 Q 120 160 180 145 Q 230 130 250 104"
                    fill="none"
                    stroke="url(#waterGradient)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.8 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                )}
                {/* Reunited water */}
                {phase === 'completed' && (
                  <motion.ellipse
                    cx="260"
                    cy="104"
                    rx="20"
                    ry="25"
                    fill="url(#waterGradient)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  />
                )}
              </motion.g>
            )}

            {scenario.id === 'container' && (
              <motion.g key="water-container" filter="url(#glow)">
                <motion.ellipse
                  cx="50"
                  cy="104"
                  fill="url(#waterGradient)"
                  initial={{ rx: 30, ry: 30 }}
                  animate={{
                    rx: phase === 'completed' ? 0 : 30,
                    opacity: phase === 'completed' ? 0 : 1,
                    cx: phase === 'adapting' || phase === 'completed' ? 100 : 50,
                  }}
                  transition={{ duration: 0.6 }}
                />
                {/* Water filling container */}
                {(phase === 'adapting' || phase === 'completed') && (
                  <motion.rect
                    x="105"
                    y="145"
                    width="80"
                    rx="5"
                    fill="url(#waterGradient)"
                    initial={{ height: 0, y: 145 }}
                    animate={{ height: 75, y: 70 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                  />
                )}
              </motion.g>
            )}

            {scenario.id === 'heat' && (
              <motion.g key="water-heat" filter="url(#glow)">
                {/* Water starting position */}
                <motion.ellipse
                  cx="144"
                  cy={phase === 'completed' ? 140 : 120}
                  fill="url(#waterGradient)"
                  initial={{ rx: 35, ry: 35, opacity: 1 }}
                  animate={{
                    rx: phase === 'completed' ? 15 : 35,
                    ry: phase === 'completed' ? 10 : 35,
                    cy: phase === 'completed' ? 145 : 120,
                    opacity: phase === 'completed' ? 0.4 : 1,
                  }}
                  transition={{ duration: 1 }}
                />
                {/* Rising steam particles */}
                {(phase === 'adapting' || phase === 'completed') &&
                  [...Array(8)].map((_, i) => (
                    <motion.circle
                      key={i}
                      cx={120 + (i % 4) * 18}
                      cy={120}
                      r={4 + Math.random() * 4}
                      fill="#94A3B8"
                      filter="url(#steam)"
                      initial={{ y: 0, opacity: 0, scale: 0.5 }}
                      animate={{
                        y: -80 - Math.random() * 40,
                        opacity: [0, 0.8, 0],
                        scale: [0.5, 1.5, 2],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.25,
                        ease: 'easeOut',
                      }}
                    />
                  ))}
                {/* Steam cloud at top */}
                {phase === 'completed' && (
                  <motion.ellipse
                    cx="144"
                    cy="40"
                    rx="50"
                    ry="25"
                    fill="#94A3B8"
                    filter="url(#steam)"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: [0.3, 0.6, 0.3], scale: 1 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.g>
            )}

            {scenario.id === 'cold' && (
              <motion.g key="water-cold" filter="url(#glow)">
                {/* Water transforming to ice */}
                <motion.rect
                  x={phase === 'completed' ? 109 : 114}
                  y={phase === 'completed' ? 89 : 94}
                  rx={phase === 'completed' ? 5 : 30}
                  fill="url(#waterGradient)"
                  initial={{ width: 60, height: 60 }}
                  animate={{
                    width: phase === 'completed' ? 70 : 60,
                    height: phase === 'completed' ? 70 : 60,
                    rx: phase === 'completed' ? 5 : 30,
                  }}
                  transition={{ duration: 1, type: 'spring' }}
                />
                {/* Ice crystal lines */}
                {phase === 'completed' && (
                  <>
                    <motion.line
                      x1="109" y1="124" x2="179" y2="124"
                      stroke="#BFDBFE" strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.line
                      x1="144" y1="89" x2="144" y2="159"
                      stroke="#BFDBFE" strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                  </>
                )}
                {/* Frost sparkles */}
                {phase === 'completed' &&
                  [
                    [115, 100],
                    [170, 100],
                    [115, 150],
                    [170, 150],
                  ].map(([x, y], i) => (
                    <motion.circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="3"
                      fill="#FFFFFF"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
              </motion.g>
            )}
          </AnimatePresence>

          {/* Phase indicator */}
          <text x="10" y="200" fontSize="9" fill="#6B7280">
            {phase === 'approaching' && '💧 Approaching...'}
            {phase === 'encountering' && '⚡ Encountering...'}
            {phase === 'adapting' && '🔄 Adapting...'}
            {phase === 'completed' && '✨ Adapted!'}
          </text>
        </svg>
      </div>

      {/* Scenario info */}
      <div className="w-full max-w-xs space-y-2">
        <motion.div
          key={`challenge-${scenario.id}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-800/50 border border-gray-700 rounded-xl p-3"
        >
          <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-1">
            {scenario.icon} Challenge: {scenario.name}
          </p>
          <p className="text-xs text-gray-300">{scenario.description}</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {phase === 'completed' && (
            <motion.div
              key={`response-${scenario.id}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-3"
            >
              <p className="text-[10px] text-blue-400 uppercase tracking-wide mb-1">
                💧 Water's Response
              </p>
              <p className="text-xs text-gray-300">{scenario.adaptation}</p>
              <p className="text-[10px] text-blue-400 font-medium mt-2 italic">
                "{scenario.principle}"
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex gap-3">
        <motion.button
          onClick={() => setAutoPlay(!autoPlay)}
          className={`px-4 py-2 rounded-xl text-xs font-medium border transition-all ${
            autoPlay
              ? 'bg-blue-500/20 border-blue-500/50 text-blue-400'
              : 'border-gray-700 text-gray-400 hover:border-gray-600'
          }`}
          whileTap={{ scale: 0.95 }}
        >
          {autoPlay ? '⏸ Pause' : '▶ Auto-play'}
        </motion.button>
        <motion.button
          onClick={() => setCurrentScenario((currentScenario + 1) % scenarios.length)}
          className="px-4 py-2 rounded-xl text-xs font-medium border border-gray-700 text-gray-400 hover:border-gray-600"
          whileTap={{ scale: 0.95 }}
        >
          Next →
        </motion.button>
      </div>

      {/* Bruce Lee quote */}
      <div className="bg-[#111113] border border-gray-800 rounded-xl p-4 max-w-xs">
        <p className="text-xs text-gray-300 italic text-center leading-relaxed">
          "Empty your mind. Be formless, shapeless—like water. Water can flow, or it can crash.
          Be water, my friend."
        </p>
        <p className="text-[10px] text-amber-400 text-right mt-2 font-medium">— Bruce Lee</p>
      </div>

      {/* Four principles */}
      <div className="w-full max-w-xs grid grid-cols-2 gap-2">
        {[
          { icon: '🌊', title: 'Flow', text: 'Move around obstacles' },
          { icon: '🫙', title: 'Adapt', text: 'Take any shape needed' },
          { icon: '💨', title: 'Transform', text: 'Change state under pressure' },
          { icon: '🧊', title: 'Persist', text: 'Patience cracks stone' },
        ].map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-2 bg-[#111113] border border-gray-800 rounded-xl text-center"
          >
            <span className="text-lg">{p.icon}</span>
            <p className="text-[10px] text-blue-400 font-medium">{p.title}</p>
            <p className="text-[9px] text-gray-500">{p.text}</p>
          </motion.div>
        ))}
      </div>

      <p className="text-[10px] text-gray-600">From Bruce Lee's Jeet Kune Do Philosophy</p>
    </div>
  );
}

export default BeWater;
