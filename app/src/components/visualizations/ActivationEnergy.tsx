import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';

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
    <div className="relative overflow-hidden rounded-2xl">
      {/* Dark Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] via-transparent to-green-500/[0.02]" />
      <div className="absolute inset-0 border border-white/[0.1] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center border border-amber-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
            <Zap className="w-4 h-4 text-amber-400" />
          </div>
          <span className="text-sm font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Activation Energy
          </span>
        </div>

        <div className="flex flex-col items-center gap-5">
          {/* Habit selector */}
          <div className="flex flex-wrap justify-center gap-2">
            {habits.map((h, index) => (
              <motion.button
                key={h.id}
                onClick={() => handleHabitChange(index)}
                className={`relative overflow-hidden px-3 py-2 rounded-xl transition-all border ${
                  activeHabit === index
                    ? 'bg-amber-500/20 text-amber-400 border-amber-500/50'
                    : 'text-white/50 hover:text-white/80 border-white/[0.08] hover:border-white/20'
                }`}
                style={{
                  background: activeHabit === index
                    ? 'linear-gradient(135deg, rgba(245,158,11,0.2) 0%, rgba(245,158,11,0.05) 100%)'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                {activeHabit === index && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
                )}
                <span className="text-lg mr-1">{h.icon}</span>
                <span className="text-[10px]">{h.name.split(' ')[0]}</span>
              </motion.button>
            ))}
          </div>

          {/* Energy hill visualization */}
          <div className="w-full max-w-xs">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08]"
              style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)' }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <svg viewBox="0 0 300 160" className="w-full">
                {/* Grid lines */}
                {[40, 80, 120].map(y => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2="300"
                    y2={y}
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="0.5"
                  />
                ))}

                {/* Ground line */}
                <line x1="0" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />

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
            <div className="flex justify-between text-[10px] text-white/50">
              <span>Activation Energy Required</span>
              <span className={frictionReduced ? 'text-green-400' : 'text-amber-400'}>
                {currentFriction}%
              </span>
            </div>

            {/* Before/After comparison */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[9px] text-white/50 w-12">Before:</span>
                <div className="flex-1 h-3 rounded-full border border-white/[0.08] overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
                >
                  <motion.div
                    className="h-full rounded-full bg-amber-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${habit.friction}%` }}
                  />
                </div>
                <span className="text-[9px] text-amber-400 w-8">{habit.friction}%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] text-white/50 w-12">After:</span>
                <div className="flex-1 h-3 rounded-full border border-white/[0.08] overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
                >
                  <motion.div
                    className="h-full rounded-full bg-green-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${habit.reducedFriction}%` }}
                  />
                </div>
                <span className="text-[9px] text-green-400 w-8">{habit.reducedFriction}%</span>
              </div>
            </div>

            <p className="text-[10px] text-center text-white/50">
              Reduction: <span className={frictionReduced ? 'text-green-400' : 'text-white/60'}>
                {Math.round(((habit.friction - habit.reducedFriction) / habit.friction) * 100)}% less effort
              </span>
            </p>
          </div>

          {/* Action button */}
          <motion.button
            onClick={handleReduceFriction}
            disabled={isAnimating}
            className={`px-6 py-3 rounded-xl text-xs font-semibold transition-all border backdrop-blur-sm ${
              frictionReduced
                ? 'bg-green-500/15 border-green-500/50 text-green-400 shadow-[0_0_12px_rgba(34,197,94,0.15)]'
                : 'bg-amber-500/15 border-amber-500/50 text-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.15)] hover:bg-amber-500/20'
            } disabled:opacity-50`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {frictionReduced ? 'Friction reduced! (Click to reset)' : 'Reduce friction'}
          </motion.button>

          {/* Tips */}
          <AnimatePresence>
            {frictionReduced && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="relative overflow-hidden w-full max-w-xs p-4 rounded-xl border border-green-500/30"
                style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(34,197,94,0.02) 100%)' }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent" />
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
                      <span className="text-green-400 text-[10px]">+</span>
                      <span className="text-xs text-white/80">{tip}</span>
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
          <div className="relative overflow-hidden w-full max-w-xs rounded-xl p-3 border border-white/[0.08]"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="text-[10px] text-white/50 uppercase tracking-wide mb-2">The 3rd Law of Behavior Change</p>
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="relative overflow-hidden p-2 rounded-lg border border-green-500/20"
                style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(34,197,94,0.02) 100%)' }}
              >
                <p className="text-green-400 text-xs font-medium">Good habits</p>
                <p className="text-[10px] text-white/60">Make it easy</p>
                <p className="text-[9px] text-white/50">Friction decreases</p>
              </div>
              <div className="relative overflow-hidden p-2 rounded-lg border border-red-500/20"
                style={{ background: 'linear-gradient(135deg, rgba(239,68,68,0.1) 0%, rgba(239,68,68,0.02) 100%)' }}
              >
                <p className="text-red-400 text-xs font-medium">Bad habits</p>
                <p className="text-[10px] text-white/60">Make it hard</p>
                <p className="text-[9px] text-white/50">Friction increases</p>
              </div>
            </div>
          </div>

          {/* Key insight */}
          <div className="relative overflow-hidden rounded-xl p-4 max-w-xs border border-white/[0.08]"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="text-xs text-white/60 leading-relaxed">
              <span className="text-amber-400 font-medium">James Clear:</span> "The most effective form
              of motivation is progress. Small environmental changes that reduce friction make the
              right behaviors effortless and the wrong behaviors impossible."
            </p>
          </div>

          <p className="text-[10px] text-white/40">
            From Atomic Habits by James Clear
          </p>
        </div>
      </div>
    </div>
  );
}

export default ActivationEnergy;
