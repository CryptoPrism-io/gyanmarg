import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Trait {
  id: string;
  name: string;
  icon: string;
  core: string;
  signs: string[];
  defense: string;
  color: string;
}

const traits: Trait[] = [
  {
    id: 'narcissism',
    name: 'Narcissism',
    icon: '👑',
    core: 'Grandiosity, need for admiration, lack of empathy',
    signs: [
      'Constant need for validation',
      'Exaggerates achievements',
      'Entitled behavior',
      'Exploits others without guilt',
    ],
    defense: 'Don\'t feed the ego. Set firm boundaries. Don\'t expect empathy.',
    color: '#F59E0B',
  },
  {
    id: 'machiavellianism',
    name: 'Machiavellianism',
    icon: '🎭',
    core: 'Manipulation, cynicism, prioritizing self-interest',
    signs: [
      'Strategic manipulation',
      'Long-term scheming',
      'Emotionally detached',
      'Focus on personal gain',
    ],
    defense: 'Verify everything. Watch for ulterior motives. Keep your plans private.',
    color: '#8B5CF6',
  },
  {
    id: 'psychopathy',
    name: 'Psychopathy',
    icon: '🖤',
    core: 'Antisocial behavior, impulsivity, remorselessness',
    signs: [
      'Superficial charm',
      'Risk-taking behavior',
      'No remorse or guilt',
      'Cold under pressure',
    ],
    defense: 'Trust actions, not words. Don\'t expect loyalty. Protect yourself first.',
    color: '#EF4444',
  },
];

export function DarkTriad() {
  const [activeTrait, setActiveTrait] = useState<number | null>(null);
  const [showDefense, setShowDefense] = useState(false);

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Triangle visualization */}
      <div className="relative w-56 h-52">
        <svg viewBox="0 0 200 180" className="w-full h-full">
          {/* Triangle outline */}
          <path
            d="M 100 10 L 180 160 L 20 160 Z"
            fill="none"
            stroke="#374151"
            strokeWidth="2"
          />

          {/* Fill based on selection */}
          <path
            d="M 100 10 L 180 160 L 20 160 Z"
            fill={activeTrait !== null ? traits[activeTrait].color + '15' : '#111113'}
            className="transition-all duration-300"
          />

          {/* Narcissism - top */}
          <g
            className="cursor-pointer"
            onClick={() => setActiveTrait(activeTrait === 0 ? null : 0)}
          >
            <motion.circle
              cx="100"
              cy="30"
              r={activeTrait === 0 ? 24 : 20}
              fill={activeTrait === 0 ? '#F59E0B30' : '#F59E0B15'}
              stroke="#F59E0B"
              strokeWidth={activeTrait === 0 ? 3 : 2}
              whileHover={{ scale: 1.1 }}
            />
            <text x="100" y="30" textAnchor="middle" dominantBaseline="middle" fontSize="16">
              👑
            </text>
          </g>

          {/* Machiavellianism - bottom left */}
          <g
            className="cursor-pointer"
            onClick={() => setActiveTrait(activeTrait === 1 ? null : 1)}
          >
            <motion.circle
              cx="35"
              cy="145"
              r={activeTrait === 1 ? 24 : 20}
              fill={activeTrait === 1 ? '#8B5CF630' : '#8B5CF615'}
              stroke="#8B5CF6"
              strokeWidth={activeTrait === 1 ? 3 : 2}
              whileHover={{ scale: 1.1 }}
            />
            <text x="35" y="145" textAnchor="middle" dominantBaseline="middle" fontSize="16">
              🎭
            </text>
          </g>

          {/* Psychopathy - bottom right */}
          <g
            className="cursor-pointer"
            onClick={() => setActiveTrait(activeTrait === 2 ? null : 2)}
          >
            <motion.circle
              cx="165"
              cy="145"
              r={activeTrait === 2 ? 24 : 20}
              fill={activeTrait === 2 ? '#EF444430' : '#EF444415'}
              stroke="#EF4444"
              strokeWidth={activeTrait === 2 ? 3 : 2}
              whileHover={{ scale: 1.1 }}
            />
            <text x="165" y="145" textAnchor="middle" dominantBaseline="middle" fontSize="16">
              🖤
            </text>
          </g>

          {/* Center label */}
          <text x="100" y="95" textAnchor="middle" fill="#666" fontSize="10" fontWeight="bold">
            DARK
          </text>
          <text x="100" y="108" textAnchor="middle" fill="#666" fontSize="10" fontWeight="bold">
            TRIAD
          </text>
        </svg>
      </div>

      {/* Trait labels */}
      <div className="flex gap-2">
        {traits.map((t, index) => (
          <button
            key={t.id}
            onClick={() => setActiveTrait(activeTrait === index ? null : index)}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-medium border transition-all ${
              activeTrait === index ? '' : 'opacity-60'
            }`}
            style={{
              backgroundColor: activeTrait === index ? t.color + '20' : 'transparent',
              borderColor: t.color,
              color: t.color,
            }}
          >
            {t.icon} {t.name}
          </button>
        ))}
      </div>

      {/* Trait details */}
      <AnimatePresence>
        {activeTrait !== null && (
          <motion.div
            key={traits[activeTrait].id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full max-w-xs"
          >
            <div
              className="p-4 rounded-xl border"
              style={{
                backgroundColor: traits[activeTrait].color + '10',
                borderColor: traits[activeTrait].color + '40',
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{traits[activeTrait].icon}</span>
                <div>
                  <h3 className="text-sm font-bold" style={{ color: traits[activeTrait].color }}>
                    {traits[activeTrait].name}
                  </h3>
                  <p className="text-[10px] text-gray-500">{traits[activeTrait].core}</p>
                </div>
              </div>

              <div className="space-y-1.5 mb-3">
                <p className="text-[10px] text-gray-500 uppercase tracking-wide">Warning Signs:</p>
                {traits[activeTrait].signs.map((sign, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                    <span style={{ color: traits[activeTrait].color }}>•</span>
                    {sign}
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowDefense(!showDefense)}
                className="text-[10px] text-gray-500 hover:text-gray-300"
              >
                {showDefense ? '▼ Hide' : '🛡️ Show'} defense strategy
              </button>

              <AnimatePresence>
                {showDefense && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 p-2 bg-green-500/10 border border-green-500/30 rounded-lg"
                  >
                    <p className="text-[10px] text-green-400">{traits[activeTrait].defense}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* General info when none selected */}
      {activeTrait === null && (
        <div className="w-full max-w-xs p-3 bg-[#111113] border border-gray-800 rounded-xl">
          <p className="text-xs text-gray-400 text-center">
            Click a trait to learn its characteristics and defense strategies.
            These traits exist on a spectrum—everyone has some degree of each.
          </p>
        </div>
      )}

      {/* Key insight */}
      <div className="bg-[#111113] border border-gray-800 rounded-xl p-4 max-w-xs">
        <p className="text-xs text-gray-400 leading-relaxed">
          <span className="text-red-400 font-medium">Why learn this?</span> These personality
          types are overrepresented in positions of power. Recognizing them early protects you
          from manipulation and exploitation.
        </p>
      </div>

      <p className="text-[10px] text-gray-600">From Dark Psychology Research</p>
    </div>
  );
}

export default DarkTriad;
