import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface Neuron {
  id: string;
  x: number;
  y: number;
  label: string;
}

interface Connection {
  from: string;
  to: string;
  strength: number;
}

const neurons: Neuron[] = [
  { id: 'a', x: 15, y: 25, label: 'Cue' },
  { id: 'b', x: 40, y: 15, label: '' },
  { id: 'c', x: 65, y: 20, label: '' },
  { id: 'd', x: 85, y: 30, label: 'Action' },
  { id: 'e', x: 25, y: 50, label: '' },
  { id: 'f', x: 50, y: 45, label: '' },
  { id: 'g', x: 75, y: 55, label: '' },
  { id: 'h', x: 20, y: 75, label: '' },
  { id: 'i', x: 45, y: 80, label: '' },
  { id: 'j', x: 70, y: 75, label: '' },
  { id: 'k', x: 90, y: 70, label: 'Result' },
];

const initialConnections: Connection[] = [
  { from: 'a', to: 'b', strength: 1 },
  { from: 'b', to: 'c', strength: 1 },
  { from: 'c', to: 'd', strength: 1 },
];

const potentialConnections: Connection[] = [
  { from: 'a', to: 'e', strength: 1 },
  { from: 'e', to: 'f', strength: 1 },
  { from: 'f', to: 'g', strength: 1 },
  { from: 'g', to: 'd', strength: 1 },
  { from: 'e', to: 'h', strength: 1 },
  { from: 'h', to: 'i', strength: 1 },
  { from: 'i', to: 'j', strength: 1 },
  { from: 'j', to: 'k', strength: 1 },
  { from: 'f', to: 'i', strength: 1 },
  { from: 'b', to: 'f', strength: 1 },
  { from: 'c', to: 'g', strength: 1 },
  { from: 'g', to: 'k', strength: 1 },
];

export function Neuroplasticity() {
  const [connections, setConnections] = useState<Connection[]>(initialConnections);
  const [practiceCount, setPracticeCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeSignal, setActiveSignal] = useState<string[]>([]);
  const [showScience, setShowScience] = useState(false);

  const practice = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setPracticeCount(prev => prev + 1);

    // Animate signal through existing connections
    const path = ['a'];
    let current = 'a';
    const visited = new Set(['a']);

    // Follow connections to build path
    for (let i = 0; i < 10; i++) {
      const nextConn = connections.find(c => c.from === current && !visited.has(c.to));
      if (nextConn) {
        path.push(nextConn.to);
        visited.add(nextConn.to);
        current = nextConn.to;
      }
    }

    // Animate signal along path
    let step = 0;
    const signalInterval = setInterval(() => {
      if (step < path.length) {
        setActiveSignal(path.slice(0, step + 1));
        step++;
      } else {
        clearInterval(signalInterval);

        // Strengthen existing connections
        setConnections(prev =>
          prev.map(c => ({
            ...c,
            strength: Math.min(5, c.strength + 0.4),
          }))
        );

        // Maybe add new connection
        if (practiceCount > 0 && practiceCount % 2 === 0) {
          const existingPairs = new Set(connections.map(c => `${c.from}-${c.to}`));
          const newConn = potentialConnections.find(
            c => !existingPairs.has(`${c.from}-${c.to}`) &&
                 connections.some(ec => ec.to === c.from || ec.from === c.from)
          );
          if (newConn) {
            setConnections(prev => [...prev, { ...newConn }]);
          }
        }

        setTimeout(() => {
          setActiveSignal([]);
          setIsAnimating(false);
        }, 500);
      }
    }, 200);
  }, [connections, isAnimating, practiceCount]);

  const reset = () => {
    setConnections(initialConnections);
    setPracticeCount(0);
    setActiveSignal([]);
    setIsAnimating(false);
  };

  const avgStrength = connections.length > 0
    ? connections.reduce((sum, c) => sum + c.strength, 0) / connections.length
    : 0;

  const getStrengthColor = (strength: number) => {
    if (strength >= 4) return '#22C55E';
    if (strength >= 2.5) return '#F59E0B';
    return '#6B7280';
  };

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Neural network visualization */}
      <div className="relative w-72 h-56 bg-gradient-to-br from-[#0A0A0B] to-[#111113] border border-gray-800 rounded-2xl overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 to-transparent" />

        <svg className="absolute inset-0 w-full h-full">
          {/* Connections */}
          {connections.map((conn) => {
            const fromNeuron = neurons.find(n => n.id === conn.from)!;
            const toNeuron = neurons.find(n => n.id === conn.to)!;
            const isActive = activeSignal.includes(conn.from) && activeSignal.includes(conn.to);

            return (
              <motion.line
                key={`${conn.from}-${conn.to}`}
                x1={`${fromNeuron.x}%`}
                y1={`${fromNeuron.y}%`}
                x2={`${toNeuron.x}%`}
                y2={`${toNeuron.y}%`}
                stroke={isActive ? '#A855F7' : getStrengthColor(conn.strength)}
                strokeWidth={conn.strength * 1.2}
                strokeLinecap="round"
                opacity={isActive ? 1 : 0.6}
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: 1,
                  strokeWidth: isActive ? conn.strength * 2 : conn.strength * 1.2,
                }}
                transition={{ duration: 0.5 }}
              />
            );
          })}
        </svg>

        {/* Neurons */}
        {neurons.map((neuron) => {
          const hasConnection = connections.some(
            c => c.from === neuron.id || c.to === neuron.id
          );
          const isActive = activeSignal.includes(neuron.id);
          const isEndpoint = neuron.label !== '';

          return (
            <motion.div
              key={neuron.id}
              className="absolute flex items-center justify-center"
              style={{
                left: `${neuron.x}%`,
                top: `${neuron.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {/* Glow effect when active */}
              {isActive && (
                <motion.div
                  className="absolute w-8 h-8 rounded-full bg-purple-500 blur-md"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 0.5, scale: 1.5 }}
                  exit={{ opacity: 0 }}
                />
              )}

              {/* Neuron body */}
              <motion.div
                className={`rounded-full border-2 flex items-center justify-center ${
                  isEndpoint ? 'w-8 h-8' : 'w-5 h-5'
                }`}
                style={{
                  backgroundColor: isActive ? '#A855F7' :
                                   hasConnection ? '#8B5CF620' : '#1F2937',
                  borderColor: isActive ? '#A855F7' :
                               hasConnection ? '#8B5CF6' : '#374151',
                }}
                animate={isActive ? {
                  scale: [1, 1.3, 1],
                  boxShadow: ['0 0 0 0 rgba(168, 85, 247, 0)', '0 0 0 10px rgba(168, 85, 247, 0.3)', '0 0 0 0 rgba(168, 85, 247, 0)'],
                } : {}}
                transition={{ duration: 0.3 }}
              >
                {isEndpoint && (
                  <span className="text-[8px] text-white font-medium">
                    {neuron.label.charAt(0)}
                  </span>
                )}
              </motion.div>

              {/* Label */}
              {isEndpoint && (
                <span className="absolute -bottom-4 text-[8px] text-gray-500 whitespace-nowrap">
                  {neuron.label}
                </span>
              )}
            </motion.div>
          );
        })}

        {/* Legend */}
        <div className="absolute bottom-2 left-2 text-[8px] text-gray-600">
          Signal: Cue → Action → Result
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-3">
        <div className="text-center px-4 py-2 bg-[#111113] border border-gray-800 rounded-xl">
          <p className="text-xl font-bold text-purple-400">{practiceCount}</p>
          <p className="text-[10px] text-gray-500">Practice sessions</p>
        </div>
        <div className="text-center px-4 py-2 bg-[#111113] border border-gray-800 rounded-xl">
          <p className="text-xl font-bold text-amber-400">{connections.length}</p>
          <p className="text-[10px] text-gray-500">Connections</p>
        </div>
        <div className="text-center px-4 py-2 bg-[#111113] border border-gray-800 rounded-xl">
          <p className="text-xl font-bold" style={{ color: getStrengthColor(avgStrength) }}>
            {avgStrength.toFixed(1)}x
          </p>
          <p className="text-[10px] text-gray-500">Avg strength</p>
        </div>
      </div>

      {/* Connection strength legend */}
      <div className="flex gap-4 text-[10px]">
        <div className="flex items-center gap-1">
          <div className="w-6 h-1 rounded bg-gray-500" />
          <span className="text-gray-500">Weak</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-6 h-1.5 rounded bg-amber-500" />
          <span className="text-gray-500">Medium</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-6 h-2 rounded bg-green-500" />
          <span className="text-gray-500">Strong</span>
        </div>
      </div>

      {/* Practice button */}
      <motion.button
        onClick={practice}
        disabled={isAnimating}
        className="px-8 py-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20
                 border border-purple-500/50 rounded-2xl text-sm font-semibold
                 text-purple-400 hover:border-purple-400 disabled:opacity-50 transition-all"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isAnimating ? '🧠 Firing...' : '⚡ Practice (Fire the pathway)'}
      </motion.button>

      {/* Progress insight */}
      {practiceCount > 0 && (
        <div className="w-full max-w-xs p-3 rounded-xl border bg-purple-500/5 border-purple-500/20">
          <p className="text-xs text-gray-400">
            {practiceCount < 5 && '🌱 New pathways forming...'}
            {practiceCount >= 5 && practiceCount < 15 && '🔗 Connections strengthening with repetition'}
            {practiceCount >= 15 && practiceCount < 30 && '⚡ Pathways becoming more efficient'}
            {practiceCount >= 30 && '🧠 Neural highways established! Skill becoming automatic.'}
          </p>
        </div>
      )}

      {/* Science toggle */}
      <button
        onClick={() => setShowScience(!showScience)}
        className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
      >
        {showScience ? '▼ Hide' : '▶ Show'} the science
      </button>

      {showScience && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="w-full max-w-xs space-y-2"
        >
          <div className="p-3 bg-[#111113] border border-gray-800 rounded-lg">
            <p className="text-[10px] text-purple-400 font-medium mb-1">Hebbian Learning</p>
            <p className="text-[10px] text-gray-500">"Neurons that fire together, wire together"</p>
          </div>
          <div className="p-3 bg-[#111113] border border-gray-800 rounded-lg">
            <p className="text-[10px] text-purple-400 font-medium mb-1">Long-Term Potentiation</p>
            <p className="text-[10px] text-gray-500">Repeated activation strengthens synaptic connections</p>
          </div>
          <div className="p-3 bg-[#111113] border border-gray-800 rounded-lg">
            <p className="text-[10px] text-purple-400 font-medium mb-1">Myelination</p>
            <p className="text-[10px] text-gray-500">Practice wraps pathways in myelin, making signals 100x faster</p>
          </div>
        </motion.div>
      )}

      {practiceCount > 0 && (
        <button
          onClick={reset}
          className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
        >
          ↻ Reset network
        </button>
      )}

      {/* Key insight */}
      <div className="bg-[#111113] border border-gray-800 rounded-xl p-4 max-w-xs">
        <p className="text-xs text-gray-400 leading-relaxed">
          <span className="text-purple-400 font-medium">The truth about talent:</span> What looks
          like natural ability is usually thousands of hours of practice that built neural highways.
          Your brain physically changes with deliberate repetition.
        </p>
      </div>

      <p className="text-[10px] text-gray-600">
        Based on neuroscience research on skill acquisition
      </p>
    </div>
  );
}

export default Neuroplasticity;
