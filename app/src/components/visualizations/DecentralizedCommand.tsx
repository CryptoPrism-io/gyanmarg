import { useState } from 'react';
import { motion } from 'framer-motion';

// Extreme Ownership - Decentralized Command
export function DecentralizedCommand() {
  const [commandType, setCommandType] = useState<'centralized' | 'decentralized'>('centralized');
  const [decisions, setDecisions] = useState<string[]>([]);

  const teamMembers = ['Alpha', 'Bravo', 'Charlie', 'Delta'];

  const handleDecision = (member: string) => {
    if (commandType === 'decentralized') {
      setDecisions((prev) => [...prev, `${member} decided autonomously`]);
    }
  };

  const simulateScenario = () => {
    setDecisions([]);
    if (commandType === 'centralized') {
      // Slow sequential decisions
      setTimeout(() => setDecisions(['Waiting for leader approval...']), 500);
      setTimeout(() => setDecisions(['Leader analyzing...', 'Still waiting...']), 1500);
      setTimeout(() => setDecisions(['Leader approved!', 'Executing now (delayed)...']), 3000);
    } else {
      // Fast autonomous decisions
      setTimeout(() => setDecisions(['Alpha: Handled threat immediately']), 300);
      setTimeout(() => setDecisions((prev) => [...prev, 'Bravo: Secured perimeter']), 600);
      setTimeout(() => setDecisions((prev) => [...prev, 'Charlie: Completed objective']), 900);
      setTimeout(() => setDecisions((prev) => [...prev, 'Delta: Ready for next phase']), 1200);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Toggle */}
      <div className="flex bg-[#111113] rounded-lg p-1 border border-gray-800">
        <button
          onClick={() => setCommandType('centralized')}
          className={`px-4 py-2 rounded-lg text-xs transition-all ${
            commandType === 'centralized'
              ? 'bg-red-500/20 text-red-400'
              : 'text-gray-500 hover:text-gray-400'
          }`}
        >
          Centralized
        </button>
        <button
          onClick={() => setCommandType('decentralized')}
          className={`px-4 py-2 rounded-lg text-xs transition-all ${
            commandType === 'decentralized'
              ? 'bg-green-500/20 text-green-400'
              : 'text-gray-500 hover:text-gray-400'
          }`}
        >
          Decentralized
        </button>
      </div>

      {/* Visualization */}
      <div className="relative w-full max-w-xs h-40">
        {commandType === 'centralized' ? (
          // Centralized: all lines go through center
          <div className="relative w-full h-full">
            {/* Leader in center */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-red-500/20 border-2 border-red-500/50 flex items-center justify-center"
            >
              <span className="text-xs text-red-400">Leader</span>
            </motion.div>

            {/* Team members around */}
            {teamMembers.map((member, idx) => {
              const angle = (idx * 90) * (Math.PI / 180);
              const x = 50 + 35 * Math.cos(angle);
              const y = 50 + 35 * Math.sin(angle);
              return (
                <div key={member}>
                  <svg className="absolute inset-0 w-full h-full">
                    <line
                      x1="50%"
                      y1="50%"
                      x2={`${x}%`}
                      y2={`${y}%`}
                      stroke="rgba(239, 68, 68, 0.3)"
                      strokeWidth="2"
                      strokeDasharray="4"
                    />
                  </svg>
                  <motion.div
                    className="absolute w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center"
                    style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                  >
                    <span className="text-[8px] text-gray-400">{member[0]}</span>
                  </motion.div>
                </div>
              );
            })}
          </div>
        ) : (
          // Decentralized: mesh network
          <div className="relative w-full h-full">
            {teamMembers.map((member, idx) => {
              const angle = (idx * 90 + 45) * (Math.PI / 180);
              const x = 50 + 30 * Math.cos(angle);
              const y = 50 + 30 * Math.sin(angle);
              return (
                <motion.button
                  key={member}
                  onClick={() => handleDecision(member)}
                  className="absolute w-10 h-10 rounded-full bg-green-500/20 border-2 border-green-500/50 flex items-center justify-center cursor-pointer hover:bg-green-500/30"
                  style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-[10px] text-green-400">{member}</span>
                </motion.button>
              );
            })}
            {/* Mesh connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {teamMembers.map((_, i) =>
                teamMembers.map((_, j) => {
                  if (i >= j) return null;
                  const angle1 = (i * 90 + 45) * (Math.PI / 180);
                  const angle2 = (j * 90 + 45) * (Math.PI / 180);
                  return (
                    <line
                      key={`${i}-${j}`}
                      x1={`${50 + 30 * Math.cos(angle1)}%`}
                      y1={`${50 + 30 * Math.sin(angle1)}%`}
                      x2={`${50 + 30 * Math.cos(angle2)}%`}
                      y2={`${50 + 30 * Math.sin(angle2)}%`}
                      stroke="rgba(34, 197, 94, 0.2)"
                      strokeWidth="1"
                    />
                  );
                })
              )}
            </svg>
          </div>
        )}
      </div>

      {/* Simulate button */}
      <button
        onClick={simulateScenario}
        className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-lg text-xs text-blue-400 hover:bg-blue-500/30"
      >
        Simulate Crisis Response
      </button>

      {/* Decision log */}
      {decisions.length > 0 && (
        <div className="w-full max-w-xs bg-[#111113] border border-gray-800 rounded-lg p-3 max-h-32 overflow-y-auto">
          {decisions.map((decision, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-[10px] mb-1 ${
                commandType === 'centralized' ? 'text-red-400' : 'text-green-400'
              }`}
            >
              → {decision}
            </motion.p>
          ))}
        </div>
      )}

      <p className="text-[10px] text-gray-500 text-center">
        From "Extreme Ownership" by Jocko Willink
      </p>
    </div>
  );
}

export default DecentralizedCommand;
