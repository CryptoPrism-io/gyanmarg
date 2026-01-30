import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Habit {
  id: string;
  name: string;
  icon: string;
  friction: number;
  reducedFriction: number;
  tips: string[];
  benefit: string;
}

const habits: Habit[] = [
  {
    id: 'gym',
    name: 'Going to the gym',
    icon: '🏋️',
    friction: 85,
    reducedFriction: 25,
    tips: [
      'Sleep in workout clothes',
      'Pack gym bag the night before',
      'Keep bag by the door',
      'Schedule as first thing in morning',
    ],
    benefit: '4x more likely to exercise consistently',
  },
  {
    id: 'reading',
    name: 'Reading daily',
    icon: '📚',
    friction: 60,
    reducedFriction: 15,
    tips: [
      'Keep book on pillow, not bookshelf',
      'Delete social apps from phone',
      'Set a specific reading time',
      'Start with just 2 pages',
    ],
    benefit: '10x more reading time per week',
  },
  {
    id: 'meditation',
    name: 'Daily meditation',
    icon: '🧘',
    friction: 50,
    reducedFriction: 10,
    tips: [
      'Meditation cushion already placed',
      'Timer app on home screen',
      'Right after waking, before phone',
      'Same spot every day',
    ],
    benefit: '90% consistency after 30 days',
  },
  {
    id: 'healthy-eating',
    name: 'Eating healthy',
    icon: '🥗',
    friction: 70,
    reducedFriction: 20,
    tips: [
      'Meal prep on Sundays',
      'Keep healthy snacks at eye level',
      'Hide/remove junk food',
      'Use smaller plates',
    ],
    benefit: '3x better nutrition adherence',
  },
];

export function ActivationEnergy() {
  const [activeHabit, setActiveHabit] = useState(0);
  const [frictionReduced, setFrictionReduced] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showAllTips, setShowAllTips] = useState(false);
  const [ballPosition, setBallPosition] = useState({ x: 30, y: 140 });
  const animationRef = useRef<number | null>(null);

  const habit = habits[activeHabit];
  const currentFriction = frictionReduced ? habit.reducedFriction : habit.friction;
  const hillHeight = 150 - currentFriction * 1.2;

  // Animate ball rolling over hill
  useEffect(() => {
    if (frictionReduced && !isAnimating) {
      setIsAnimating(true);
      let progress = 0;

      const animate = () => {
        progress += 0.02;
        if (progress <= 1) {
          // Parabolic path over the hill
          const x = 30 + progress * 240;
          const hillX = progress * 2 - 1; // -1 to 1
          const hillY = Math.max(0, 1 - hillX * hillX) * (150 - hillHeight - 20);
          const y = 140 - hillY;

          setBallPosition({ x, y });
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setBallPosition({ x: 270, y: 140 });
          setIsAnimating(false);
        }
      };

      animationRef.current = requestAnimationFrame(animate);

      return () => {
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
      };
    }
  }, [frictionReduced, hillHeight, isAnimating]);

  const handleHabitChange = (index: number) => {
    setActiveHabit(index);
    setFrictionReduced(false);
    setBallPosition({ x: 30, y: 140 });
    setIsAnimating(false);
  };

  const handleReduceFriction = () => {
    if (!frictionReduced) {
      setFrictionReduced(true);
      setBallPosition({ x: 30, y: 140 });
    } else {
      setFrictionReduced(false);
      setBallPosition({ x: 30, y: 140 });
      setIsAnimating(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Habit selector */}
      <div className="flex flex-wrap justify-center gap-2">
        {habits.map((h, index) => (
          <motion.button
            key={h.id}
            onClick={() => handleHabitChange(index)}
            className={`px-3 py-2 rounded-xl transition-all border ${
              activeHabit === index
                ? 'bg-amber-500/20 text-amber-400 border-amber-500/50'
                : 'text-gray-500 hover:text-gray-300 border-gray-800 hover:border-gray-700'
            }`}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg mr-1">{h.icon}</span>
            <span className="text-[10px]">{h.name.split(' ')[0]}</span>
          </motion.button>
        ))}
      </div>

      {/* Energy hill visualization */}
      <div className="w-full max-w-xs">
        <div className="relative bg-gradient-to-b from-[#0A0A0B] to-[#111113] border border-gray-800 rounded-2xl overflow-hidden">
          <svg viewBox="0 0 300 160" className="w-full">
            {/* Grid lines */}
            {[40, 80, 120].map(y => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="300"
                y2={y}
                stroke="#1F2937"
                strokeWidth="0.5"
              />
            ))}

            {/* Ground line */}
            <line x1="0" y1="150" x2="300" y2="150" stroke="#374151" strokeWidth="2" />

            {/* Energy hill */}
            <motion.path
              d={`M 0 150 Q 150 ${hillHeight} 300 150`}
              fill="none"
              stroke={frictionReduced ? '#22C55E' : '#F59E0B'}
              strokeWidth="3"
              initial={false}
              animate={{ d: `M 0 150 Q 150 ${hillHeight} 300 150` }}
              transition={{ type: 'spring', stiffness: 100 }}
            />

            {/* Hill fill gradient */}
            <motion.path
              d={`M 0 150 Q 150 ${hillHeight} 300 150 L 300 160 L 0 160 Z`}
              fill={frictionReduced ? 'url(#greenGradient)' : 'url(#orangeGradient)'}
              opacity="0.3"
              initial={false}
              animate={{ d: `M 0 150 Q 150 ${hillHeight} 300 150 L 300 160 L 0 160 Z` }}
            />

            <defs>
              <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#22C55E" />
                <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Friction label at peak */}
            <text
              x="150"
              y={hillHeight - 15}
              fill={frictionReduced ? '#22C55E' : '#F59E0B'}
              fontSize="12"
              fontWeight="bold"
              textAnchor="middle"
            >
              {currentFriction}% friction
            </text>

            {/* Start zone */}
            <rect x="10" y="135" width="50" height="15" fill="#3B82F6" opacity="0.2" rx="2" />
            <text x="35" y="148" fill="#3B82F6" fontSize="8" textAnchor="middle">START</text>

            {/* Goal zone */}
            <rect x="240" y="135" width="50" height="15" fill="#22C55E" opacity="0.2" rx="2" />
            <text x="265" y="148" fill="#22C55E" fontSize="8" textAnchor="middle">HABIT</text>

            {/* The rolling ball */}
            <motion.circle
              cx={ballPosition.x}
              cy={ballPosition.y}
              r="12"
              fill={frictionReduced ? '#22C55E' : '#F59E0B'}
              animate={{
                cx: ballPosition.x,
                cy: ballPosition.y,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />

            {/* Ball glow */}
            <motion.circle
              cx={ballPosition.x}
              cy={ballPosition.y}
              r="18"
              fill={frictionReduced ? '#22C55E' : '#F59E0B'}
              opacity="0.3"
              animate={{
                cx: ballPosition.x,
                cy: ballPosition.y,
                scale: isAnimating ? [1, 1.3, 1] : 1,
              }}
              transition={{ duration: 0.5, repeat: isAnimating ? Infinity : 0 }}
            />

            {/* Habit icon on ball */}
            <text
              x={ballPosition.x}
              y={ballPosition.y + 4}
              fontSize="10"
              textAnchor="middle"
            >
              {habit.icon}
            </text>
          </svg>
        </div>
      </div>

      {/* Friction meter comparison */}
      <div className="w-full max-w-xs space-y-2">
        <div className="flex justify-between text-[10px] text-gray-500">
          <span>Activation Energy Required</span>
          <span className={frictionReduced ? 'text-green-400' : 'text-amber-400'}>
            {currentFriction}%
          </span>
        </div>

        {/* Before/After comparison */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-gray-500 w-12">Before:</span>
            <div className="flex-1 h-3 bg-[#111113] rounded-full border border-gray-800 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-amber-500"
                initial={{ width: 0 }}
                animate={{ width: `${habit.friction}%` }}
              />
            </div>
            <span className="text-[9px] text-amber-400 w-8">{habit.friction}%</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-gray-500 w-12">After:</span>
            <div className="flex-1 h-3 bg-[#111113] rounded-full border border-gray-800 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-green-500"
                initial={{ width: 0 }}
                animate={{ width: `${habit.reducedFriction}%` }}
              />
            </div>
            <span className="text-[9px] text-green-400 w-8">{habit.reducedFriction}%</span>
          </div>
        </div>

        <p className="text-[10px] text-center text-gray-500">
          Reduction: <span className={frictionReduced ? 'text-green-400' : 'text-gray-400'}>
            {Math.round(((habit.friction - habit.reducedFriction) / habit.friction) * 100)}% less effort
          </span>
        </p>
      </div>

      {/* Action button */}
      <motion.button
        onClick={handleReduceFriction}
        disabled={isAnimating}
        className={`px-6 py-3 rounded-xl text-xs font-semibold transition-all border ${
          frictionReduced
            ? 'bg-green-500/10 border-green-500/50 text-green-400'
            : 'bg-amber-500/10 border-amber-500/50 text-amber-400 hover:bg-amber-500/20'
        } disabled:opacity-50`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {frictionReduced ? '✓ Friction reduced! (Click to reset)' : '⚡ Reduce friction →'}
      </motion.button>

      {/* Tips */}
      <AnimatePresence>
        {frictionReduced && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full max-w-xs bg-green-500/10 border border-green-500/30 rounded-xl p-4"
          >
            <p className="text-[10px] text-green-400 uppercase tracking-wide mb-2">
              How to reduce friction for "{habit.name}":
            </p>
            <div className="space-y-1.5">
              {habit.tips.slice(0, showAllTips ? undefined : 2).map((tip, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-green-400 text-[10px]">✓</span>
                  <span className="text-xs text-gray-300">{tip}</span>
                </motion.div>
              ))}
            </div>

            {habit.tips.length > 2 && (
              <button
                onClick={() => setShowAllTips(!showAllTips)}
                className="text-[10px] text-green-400 mt-2 hover:underline"
              >
                {showAllTips ? 'Show less' : `+${habit.tips.length - 2} more tips`}
              </button>
            )}

            <div className="mt-3 pt-3 border-t border-green-500/20">
              <p className="text-[10px] text-green-400 font-medium">
                Expected result: {habit.benefit}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Atomic Habits principle */}
      <div className="w-full max-w-xs bg-[#111113] border border-gray-800 rounded-xl p-3">
        <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-2">The 3rd Law of Behavior Change</p>
        <div className="grid grid-cols-2 gap-2 text-center">
          <div className="p-2 bg-green-500/10 border border-green-500/20 rounded-lg">
            <p className="text-green-400 text-xs font-medium">Good habits</p>
            <p className="text-[10px] text-gray-400">Make it easy</p>
            <p className="text-[9px] text-gray-500">↓ Friction</p>
          </div>
          <div className="p-2 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="text-red-400 text-xs font-medium">Bad habits</p>
            <p className="text-[10px] text-gray-400">Make it hard</p>
            <p className="text-[9px] text-gray-500">↑ Friction</p>
          </div>
        </div>
      </div>

      {/* Key insight */}
      <div className="bg-[#111113] border border-gray-800 rounded-xl p-4 max-w-xs">
        <p className="text-xs text-gray-400 leading-relaxed">
          <span className="text-amber-400 font-medium">James Clear:</span> "The most effective form
          of motivation is progress. Small environmental changes that reduce friction make the
          right behaviors effortless and the wrong behaviors impossible."
        </p>
      </div>

      <p className="text-[10px] text-gray-600">
        From Atomic Habits by James Clear
      </p>
    </div>
  );
}

export default ActivationEnergy;
