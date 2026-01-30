import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Principle {
  id: string;
  name: string;
  icon: string;
  description: string;
  example: string;
  defense: string;
  color: string;
}

const principles: Principle[] = [
  {
    id: 'reciprocity',
    name: 'Reciprocity',
    icon: '🎁',
    description: 'We feel obligated to return favors, even uninvited ones',
    example: 'Free samples at the grocery store make you more likely to buy',
    defense: 'Ask: "Is this a genuine gift or a manipulation tactic?"',
    color: '#EF4444',
  },
  {
    id: 'commitment',
    name: 'Commitment & Consistency',
    icon: '✍️',
    description: 'Once we commit, we feel pressure to stay consistent',
    example: 'Foot-in-the-door technique: small yes leads to bigger yes',
    defense: 'Check if your initial commitment was freely made',
    color: '#F59E0B',
  },
  {
    id: 'social-proof',
    name: 'Social Proof',
    icon: '👥',
    description: 'We look to others to decide what\'s correct',
    example: '"5 million customers can\'t be wrong" or laugh tracks on TV',
    defense: 'Verify the proof is from people similar to you',
    color: '#22C55E',
  },
  {
    id: 'authority',
    name: 'Authority',
    icon: '👨‍⚕️',
    description: 'We defer to experts and authority figures',
    example: 'Doctors in ads, titles like "Expert" or credentials',
    defense: 'Ask: "Is this authority actually relevant here?"',
    color: '#3B82F6',
  },
  {
    id: 'liking',
    name: 'Liking',
    icon: '❤️',
    description: 'We say yes to people we like (attractive, similar, complimentary)',
    example: 'Tupperware parties leverage friendship for sales',
    defense: 'Separate the request from the requester',
    color: '#EC4899',
  },
  {
    id: 'scarcity',
    name: 'Scarcity',
    icon: '⏰',
    description: 'We want more of what there\'s less of',
    example: '"Only 3 left!" or "Limited time offer!"',
    defense: 'Ask: "Do I want this because it\'s rare or because it\'s useful?"',
    color: '#8B5CF6',
  },
];

export function CialdiniPrinciples() {
  const [activePrinciple, setActivePrinciple] = useState(0);
  const [showDefense, setShowDefense] = useState(false);

  const principle = principles[activePrinciple];

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Hexagonal selector */}
      <div className="relative w-56 h-56">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {principles.map((p, index) => {
            const angle = (index * 60 - 90) * (Math.PI / 180);
            const cx = 100 + 60 * Math.cos(angle);
            const cy = 100 + 60 * Math.sin(angle);
            const isActive = activePrinciple === index;

            return (
              <g key={p.id} className="cursor-pointer" onClick={() => setActivePrinciple(index)}>
                <motion.circle
                  cx={cx}
                  cy={cy}
                  r={isActive ? 28 : 24}
                  fill={isActive ? p.color + '30' : p.color + '15'}
                  stroke={p.color}
                  strokeWidth={isActive ? 3 : 1.5}
                  animate={{ scale: isActive ? 1 : 1 }}
                  whileHover={{ scale: 1.1 }}
                />
                <text
                  x={cx}
                  y={cy}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="18"
                >
                  {p.icon}
                </text>
              </g>
            );
          })}

          {/* Center */}
          <circle cx="100" cy="100" r="30" fill="#111113" stroke="#374151" strokeWidth="2" />
          <text x="100" y="95" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">
            6 WEAPONS
          </text>
          <text x="100" y="108" textAnchor="middle" fill="#666" fontSize="7">
            of Influence
          </text>

          {/* Connection lines */}
          {principles.map((_, index) => {
            const angle = (index * 60 - 90) * (Math.PI / 180);
            const x1 = 100 + 30 * Math.cos(angle);
            const y1 = 100 + 30 * Math.sin(angle);
            const x2 = 100 + 36 * Math.cos(angle);
            const y2 = 100 + 36 * Math.sin(angle);
            return (
              <line
                key={`line-${index}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#374151"
                strokeWidth="1"
              />
            );
          })}
        </svg>
      </div>

      {/* Principle name pills */}
      <div className="flex flex-wrap justify-center gap-1.5 max-w-xs">
        {principles.map((p, index) => (
          <button
            key={p.id}
            onClick={() => setActivePrinciple(index)}
            className={`text-[9px] px-2 py-0.5 rounded-full transition-all ${
              activePrinciple === index ? 'border' : 'opacity-50'
            }`}
            style={{
              backgroundColor: activePrinciple === index ? p.color + '20' : 'transparent',
              borderColor: p.color,
              color: p.color,
            }}
          >
            {p.name.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Principle details */}
      <AnimatePresence mode="wait">
        <motion.div
          key={principle.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-xs"
        >
          <div
            className="p-4 rounded-xl border"
            style={{
              backgroundColor: principle.color + '10',
              borderColor: principle.color + '40',
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{principle.icon}</span>
              <div>
                <h3 className="text-sm font-bold" style={{ color: principle.color }}>
                  {principle.name}
                </h3>
                <p className="text-[10px] text-gray-500">Principle #{activePrinciple + 1}</p>
              </div>
            </div>

            <p className="text-xs text-gray-300 mb-3">{principle.description}</p>

            <div className="p-2 bg-gray-800/50 rounded-lg mb-3">
              <p className="text-[10px] text-gray-500 mb-1">Example:</p>
              <p className="text-xs text-gray-400">{principle.example}</p>
            </div>

            <button
              onClick={() => setShowDefense(!showDefense)}
              className="text-[10px] text-gray-500 hover:text-gray-300"
            >
              {showDefense ? '▼ Hide' : '🛡️ Show'} defense
            </button>

            <AnimatePresence>
              {showDefense && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 p-2 bg-green-500/10 border border-green-500/30 rounded-lg"
                >
                  <p className="text-[10px] text-green-400">{principle.defense}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Key insight */}
      <div className="bg-[#111113] border border-gray-800 rounded-xl p-4 max-w-xs">
        <p className="text-xs text-gray-400 leading-relaxed">
          <span className="text-purple-400 font-medium">Robert Cialdini:</span> "The same
          principles that arm the compliance professionals can be used by us to defend ourselves."
          Know these weapons to use them ethically and defend against manipulation.
        </p>
      </div>

      <p className="text-[10px] text-gray-600">From Influence by Robert Cialdini</p>
    </div>
  );
}

export default CialdiniPrinciples;
