import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity } from 'lucide-react';

interface Stressor {
  id: string;
  name: string;
  icon: string;
  examples: { level: string; effect: string; icon: string }[];
  optimalRange: string;
  science: string;
}

const stressors: Stressor[] = [
  {
    id: 'exercise',
    name: 'Exercise',
    icon: '🏋️',
    examples: [
      { level: 'Sedentary', effect: 'Muscle atrophy, metabolic decline, weak bones', icon: '🛋️' },
      { level: 'Moderate training', effect: 'Strength gains, cardio health, longevity', icon: '💪' },
      { level: 'Overtraining', effect: 'Injury, chronic fatigue, immune suppression', icon: '🤕' },
    ],
    optimalRange: '150-300 min/week moderate, or 75-150 min/week vigorous',
    science: 'Exercise triggers mitochondrial biogenesis and growth hormone release',
  },
  {
    id: 'fasting',
    name: 'Fasting',
    icon: '🍽️',
    examples: [
      { level: 'Never fasting', effect: 'No autophagy activation, constant insulin', icon: '🍔' },
      { level: '16-24 hour fasts', effect: 'Cellular cleanup, insulin sensitivity, mental clarity', icon: '✨' },
      { level: 'Extended starvation', effect: 'Muscle wasting, nutrient deficiency, metabolic damage', icon: '⚠️' },
    ],
    optimalRange: '14-18 hours daily, or 24-36 hours weekly',
    science: 'Fasting activates autophagy—your body\'s cellular recycling system',
  },
  {
    id: 'cold',
    name: 'Cold Exposure',
    icon: '🥶',
    examples: [
      { level: 'Always warm', effect: 'No brown fat activation, poor thermoregulation', icon: '🔥' },
      { level: '2-5 min cold exposure', effect: '250% dopamine increase, brown fat, resilience', icon: '🧊' },
      { level: 'Hypothermia', effect: 'Tissue damage, cardiac stress, death risk', icon: '☠️' },
    ],
    optimalRange: '11 min/week total, water 50-59°F (10-15°C)',
    science: 'Cold triggers norepinephrine release and brown adipose tissue activation',
  },
  {
    id: 'heat',
    name: 'Heat Exposure',
    icon: '🧖',
    examples: [
      { level: 'No heat stress', effect: 'No heat shock proteins, limited detox', icon: '❄️' },
      { level: 'Sauna 15-20 min', effect: 'Cardiovascular benefits, heat shock proteins, relaxation', icon: '😌' },
      { level: 'Heat stroke', effect: 'Organ damage, brain injury, death', icon: '🤯' },
    ],
    optimalRange: '4-7 sessions/week, 15-20 min at 176°F (80°C)',
    science: 'Heat shock proteins help repair damaged proteins and protect cells',
  },
  {
    id: 'challenge',
    name: 'Mental Challenge',
    icon: '🧠',
    examples: [
      { level: 'Understimulation', effect: 'Cognitive decline, boredom, depression', icon: '😴' },
      { level: 'Optimal challenge', effect: 'Flow state, neuroplasticity, skill growth', icon: '🎯' },
      { level: 'Overwhelming stress', effect: 'Anxiety, burnout, learned helplessness', icon: '😰' },
    ],
    optimalRange: 'Tasks ~4% above current ability (flow channel)',
    science: 'Challenge triggers BDNF release—"fertilizer for the brain"',
  },
];

export function Hormesis() {
  const [activeStressor, setActiveStressor] = useState(0);
  const [doseLevel, setDoseLevel] = useState(50);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showScience, setShowScience] = useState(false);
  const animationRef = useRef<number | null>(null);

  const stressor = stressors[activeStressor];

  // Animate the dose slider
  useEffect(() => {
    if (isAnimating) {
      let direction = 1;
      animationRef.current = window.setInterval(() => {
        setDoseLevel(prev => {
          if (prev >= 95) direction = -1;
          if (prev <= 5) direction = 1;
          return prev + direction * 2;
        });
      }, 50);

      return () => {
        if (animationRef.current) clearInterval(animationRef.current);
      };
    }
  }, [isAnimating]);

  const getZone = () => {
    if (doseLevel < 20) return { name: 'Insufficient', color: '#6B7280', index: 0, benefit: -30 };
    if (doseLevel < 75) return { name: 'Hormetic Zone', color: '#22C55E', index: 1, benefit: 50 + (doseLevel - 20) * 0.5 };
    return { name: 'Toxic', color: '#EF4444', index: 2, benefit: Math.max(-50, 50 - (doseLevel - 75) * 3) };
  };

  const zone = getZone();

  // Calculate the curve point for current dose
  const getCurveY = (x: number) => {
    if (x < 20) return 90 - (x * 0.5);
    if (x < 75) return 90 - 10 - ((x - 20) * 1.2);
    return 90 - 10 - 66 + ((x - 75) * 2.5);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Glassmorphism layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/[0.03] via-transparent to-red-500/[0.02]" />
      <div className="absolute inset-0 border border-white/[0.1] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 rounded-xl bg-green-500/20 border border-green-500/30">
            <Activity className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white/90">Hormesis</h3>
            <p className="text-[10px] text-white/50">The dose makes the medicine</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5">
          {/* Stressor selector */}
          <div className="flex flex-wrap justify-center gap-2">
            {stressors.map((s, index) => (
              <motion.button
                key={s.id}
                onClick={() => {
                  setActiveStressor(index);
                  setDoseLevel(50);
                }}
                className={`px-3 py-2 rounded-xl transition-all border ${
                  activeStressor === index
                    ? 'bg-green-500/20 text-green-400 border-green-500/50'
                    : 'text-white/50 hover:text-white/80 border-white/[0.08] hover:border-white/20'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg mr-1">{s.icon}</span>
                <span className="text-[10px]">{s.name.split(' ')[0]}</span>
              </motion.button>
            ))}
          </div>

          {/* Hormesis curve visualization */}
          <div className="w-full max-w-xs">
            <div className="relative border border-white/[0.08] rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(180deg, rgba(10,10,11,0.8) 0%, rgba(17,17,19,0.9) 100%)' }}>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <svg viewBox="0 0 300 130" className="w-full">
                {/* Zone backgrounds */}
                <rect x="0" y="10" width="60" height="100" fill="#6B728015" />
                <rect x="60" y="10" width="165" height="100" fill="#22C55E10" />
                <rect x="225" y="10" width="75" height="100" fill="#EF444415" />

                {/* Baseline */}
                <line x1="0" y1="90" x2="300" y2="90" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4" />
                <text x="295" y="88" fill="rgba(255,255,255,0.3)" fontSize="8" textAnchor="end">baseline</text>

                {/* The hormesis curve */}
                <path
                  d="M 10 90 Q 30 85 60 80 Q 100 40 150 25 Q 200 35 225 60 Q 260 95 290 105"
                  fill="none"
                  stroke="url(#hormesisGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Gradient definition */}
                <defs>
                  <linearGradient id="hormesisGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6B7280" />
                    <stop offset="20%" stopColor="#22C55E" />
                    <stop offset="60%" stopColor="#22C55E" />
                    <stop offset="80%" stopColor="#EF4444" />
                    <stop offset="100%" stopColor="#EF4444" />
                  </linearGradient>
                </defs>

                {/* Zone labels */}
                <text x="30" y="120" fill="#6B7280" fontSize="9" textAnchor="middle">Insufficient</text>
                <text x="142" y="120" fill="#22C55E" fontSize="9" textAnchor="middle" fontWeight="bold">Hormetic Zone</text>
                <text x="262" y="120" fill="#EF4444" fontSize="9" textAnchor="middle">Toxic</text>

                {/* Optimal marker */}
                <line x1="150" y1="20" x2="150" y2="30" stroke="#22C55E" strokeWidth="2" />
                <text x="150" y="18" fill="#22C55E" fontSize="8" textAnchor="middle">optimal</text>

                {/* Current position marker */}
                <motion.g
                  animate={{
                    transform: `translate(${10 + (doseLevel / 100) * 280}, ${getCurveY(doseLevel)})`,
                  }}
                >
                  <circle r="6" fill={zone.color} />
                  <circle r="12" fill={zone.color} opacity="0.3">
                    <animate attributeName="r" values="10;16;10" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                </motion.g>

                {/* Benefit indicator */}
                <motion.text
                  x={10 + (doseLevel / 100) * 280}
                  y={getCurveY(doseLevel) - 15}
                  fill={zone.color}
                  fontSize="10"
                  fontWeight="bold"
                  textAnchor="middle"
                  animate={{
                    x: 10 + (doseLevel / 100) * 280,
                    y: getCurveY(doseLevel) - 15,
                  }}
                >
                  {zone.benefit > 0 ? '+' : ''}{Math.round(zone.benefit)}%
                </motion.text>
              </svg>
            </div>
          </div>

          {/* Dose slider */}
          <div className="w-full max-w-xs">
            <div className="flex justify-between items-center text-[10px] text-white/50 mb-1">
              <span>Dose / Intensity</span>
              <span style={{ color: zone.color }} className="font-medium">{zone.name}</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={doseLevel}
              onChange={(e) => setDoseLevel(Number(e.target.value))}
              disabled={isAnimating}
              className="w-full disabled:opacity-50"
              style={{ accentColor: zone.color }}
            />
            <div className="flex justify-between text-[8px] text-white/40 mt-1">
              <span>None 🛋️</span>
              <span>Optimal ✨</span>
              <span>Extreme ⚠️</span>
            </div>
          </div>

          {/* Animate button */}
          <motion.button
            onClick={() => setIsAnimating(!isAnimating)}
            className={`px-4 py-2 rounded-xl text-xs font-medium border ${
              isAnimating
                ? 'bg-red-500/10 border-red-500/30 text-red-400'
                : 'bg-purple-500/10 border-purple-500/30 text-purple-400'
            }`}
            whileTap={{ scale: 0.98 }}
          >
            {isAnimating ? '⏸ Stop' : '▶ Animate dose response'}
          </motion.button>

          {/* Current effect */}
          <AnimatePresence mode="wait">
            <motion.div
              key={zone.index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-xs p-4 rounded-xl border relative overflow-hidden"
              style={{
                backgroundColor: zone.color + '15',
                borderColor: zone.color + '40',
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{stressor.examples[zone.index].icon}</span>
                <div>
                  <p className="text-sm font-semibold" style={{ color: zone.color }}>
                    {stressor.examples[zone.index].level}
                  </p>
                  <p className="text-[10px] text-white/50">{stressor.name}</p>
                </div>
              </div>
              <p className="text-xs text-white/80 mb-3">
                {stressor.examples[zone.index].effect}
              </p>
              <div className="pt-3 border-t border-white/[0.08]">
                <p className="text-[10px] text-white/50">Optimal dose:</p>
                <p className="text-[10px]" style={{ color: zone.color }}>
                  {stressor.optimalRange}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Science toggle */}
          <button
            onClick={() => setShowScience(!showScience)}
            className="text-xs text-white/50 hover:text-white/80 transition-colors"
          >
            {showScience ? '▼ Hide' : '▶ Show'} the science
          </button>

          <AnimatePresence>
            {showScience && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="w-full max-w-xs space-y-2"
              >
                <div className="relative overflow-hidden p-3 bg-green-500/10 border border-green-500/30 rounded-xl">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <p className="text-[10px] text-green-400 font-medium mb-1">🔬 Mechanism</p>
                  <p className="text-[10px] text-white/60">{stressor.science}</p>
                </div>
                <div className="relative overflow-hidden p-3 bg-purple-500/10 border border-purple-500/30 rounded-xl">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <p className="text-[10px] text-purple-400 font-medium mb-1">📈 The Hormetic Response</p>
                  <p className="text-[10px] text-white/60">
                    Low doses stimulate beneficial adaptive responses. High doses overwhelm
                    repair mechanisms and cause damage.
                  </p>
                </div>
                <div className="relative overflow-hidden p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <p className="text-[10px] text-amber-400 font-medium mb-1">⚡ Adaptation</p>
                  <p className="text-[10px] text-white/60">
                    The body "overcompensates" for mild stress, becoming stronger than before.
                    This is the foundation of all training.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Key insight */}
          <div className="relative overflow-hidden border border-white/[0.08] rounded-xl p-4 max-w-xs" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="text-xs text-white/60 leading-relaxed">
              <span className="text-green-400 font-medium">The Hormesis Principle:</span> Small doses
              of stress make you stronger. The dose makes the poison—and the medicine. What doesn't
              kill you (in the right amount) truly makes you stronger.
            </p>
          </div>

          <p className="text-[10px] text-white/40">
            Nietzsche / Nassim Taleb / Exercise Science
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hormesis;
