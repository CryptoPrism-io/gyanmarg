import { useState } from 'react';
import { motion } from 'framer-motion';

// Never Eat Alone - Network compounds exponentially
export function NetworkEffect() {
  const [connections, setConnections] = useState(5);
  const [showValue] = useState(false);

  // Metcalfe's law: network value = n(n-1)/2
  const networkValue = (connections * (connections - 1)) / 2;

  const nodes = Array.from({ length: Math.min(connections, 12) }, (_, i) => ({
    id: i,
    angle: (i * 360) / Math.min(connections, 12),
  }));

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] via-transparent to-green-500/[0.02]" />
      <div className="absolute inset-0 border border-white/[0.1] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-4">
          {/* Network visualization */}
          <div className="relative w-48 h-48">
            {/* Center node (you) */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-amber-500/30 border-2 border-amber-500 flex items-center justify-center z-10 backdrop-blur-sm"
            >
              <span className="text-xs text-amber-400">You</span>
            </motion.div>

            {/* Connection nodes */}
            {nodes.map((node, idx) => {
              const radians = (node.angle * Math.PI) / 180;
              const x = 50 + 35 * Math.cos(radians);
              const y = 50 + 35 * Math.sin(radians);

              return (
                <motion.div key={node.id}>
                  {/* Connection line */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <motion.line
                      x1="50%"
                      y1="50%"
                      x2={`${x}%`}
                      y2={`${y}%`}
                      stroke="rgba(34, 197, 94, 0.3)"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: idx * 0.05 }}
                    />
                  </svg>

                  {/* Node */}
                  <motion.div
                    className="absolute w-4 h-4 rounded-full bg-green-500/30 border border-green-500/50 backdrop-blur-sm"
                    style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Connection slider */}
          <div className="w-full max-w-xs">
            <div className="flex justify-between text-[10px] text-gray-500 mb-1">
              <span>Connections</span>
              <span>{connections}</span>
            </div>
            <input
              type="range"
              min="2"
              max="20"
              value={connections}
              onChange={(e) => setConnections(Number(e.target.value))}
              className="w-full accent-green-500"
            />
          </div>

          {/* Network value */}
          <motion.div
            className="relative w-full max-w-xs overflow-hidden rounded-lg"
            animate={{ scale: showValue ? [1, 1.02, 1] : 1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm" />
            <div className="absolute inset-0 border border-white/[0.08] rounded-lg" />
            <div className="relative z-10 p-4 text-center">
              <p className="text-[10px] text-gray-500 uppercase tracking-wide">Potential Connections</p>
              <motion.p
                key={networkValue}
                initial={{ scale: 1.2, color: '#22c55e' }}
                animate={{ scale: 1, color: '#d1d5db' }}
                className="text-3xl font-bold text-gray-300"
              >
                {networkValue}
              </motion.p>
              <p className="text-[10px] text-gray-500 mt-1">
                n(n-1)/2 = {connections}x{connections - 1}/2
              </p>
            </div>
          </motion.div>

          {/* Key principles */}
          <div className="w-full max-w-xs grid grid-cols-2 gap-2">
            {[
              { emoji: '🎁', text: 'Give first' },
              { emoji: '🔄', text: 'Follow up' },
              { emoji: '🔗', text: 'Connect others' },
              { emoji: '⭐', text: 'Find super-connectors' },
            ].map((principle, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm" />
                <div className="absolute inset-0 border border-white/[0.08] rounded-lg" />
                <div className="relative z-10 p-2 text-center">
                  <span className="text-lg">{principle.emoji}</span>
                  <p className="text-[10px] text-gray-400 mt-1">{principle.text}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[10px] text-gray-500 text-center">
            From "Never Eat Alone" by Keith Ferrazzi
          </p>
        </div>
      </div>
    </div>
  );
}

export default NetworkEffect;
