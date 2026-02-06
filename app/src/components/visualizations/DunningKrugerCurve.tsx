import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

interface Stage {
  id: string;
  label: string;
  description: string;
  x: number;
  y: number;
  color: string;
}

const stages: Stage[] = [
  {
    id: 'unknown',
    label: 'Unconscious Incompetence',
    description: 'You don\'t know what you don\'t know. Blissful ignorance.',
    x: 5,
    y: 20,
    color: '#6B7280',
  },
  {
    id: 'peak',
    label: 'Mt. Stupid',
    description: 'Peak confidence with minimal knowledge. "I\'ve read one article, I\'m basically an expert!"',
    x: 15,
    y: 90,
    color: '#EF4444',
  },
  {
    id: 'valley',
    label: 'Valley of Despair',
    description: 'You realize how much you don\'t know. Impostor syndrome kicks in.',
    x: 35,
    y: 15,
    color: '#8B5CF6',
  },
  {
    id: 'slope',
    label: 'Slope of Enlightenment',
    description: 'Steady growth through deliberate practice. Confidence rebuilds with competence.',
    x: 60,
    y: 50,
    color: '#3B82F6',
  },
  {
    id: 'plateau',
    label: 'Plateau of Sustainability',
    description: 'True expertise. Confidence matches ability. You know what you know AND what you don\'t.',
    x: 90,
    y: 70,
    color: '#22C55E',
  },
];

// SVG path for the Dunning-Kruger curve
const curvePath = "M 5 80 Q 10 10, 15 10 Q 20 10, 25 40 Q 30 70, 35 85 Q 45 85, 55 60 Q 70 40, 85 35 Q 95 32, 95 30";

export function DunningKrugerCurve() {
  const [activeStage, setActiveStage] = useState<string | null>('peak');
  const [animationProgress, setAnimationProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setAnimationProgress((prev) => {
        const next = prev + 2;
        if (next >= 100) {
          setIsPlaying(false);
          return 100;
        }
        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const startAnimation = () => {
    setAnimationProgress(0);
    setIsPlaying(true);
  };

  // Get active stage based on animation progress
  useEffect(() => {
    if (!isPlaying) return;

    if (animationProgress < 15) setActiveStage('unknown');
    else if (animationProgress < 25) setActiveStage('peak');
    else if (animationProgress < 45) setActiveStage('valley');
    else if (animationProgress < 75) setActiveStage('slope');
    else setActiveStage('plateau');
  }, [animationProgress, isPlaying]);

  const activeData = stages.find((s) => s.id === activeStage);

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Dark Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.03] via-transparent to-emerald-500/[0.02]" />
      <div className="absolute inset-0 border border-white/[0.1] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/10 flex items-center justify-center border border-red-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
            <TrendingUp className="w-4 h-4 text-red-400" />
          </div>
          <span className="text-sm font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Dunning-Kruger Effect
          </span>
        </div>

        <div className="flex flex-col items-center gap-4">
          {/* Main Chart */}
          <div
            className="relative w-72 h-48 rounded-xl border border-white/[0.08] overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Grid */}
              <defs>
                <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6B7280" />
                  <stop offset="15%" stopColor="#EF4444" />
                  <stop offset="35%" stopColor="#8B5CF6" />
                  <stop offset="60%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#22C55E" />
                </linearGradient>
              </defs>

              {/* Axis */}
              <line x1="5" y1="95" x2="95" y2="95" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
              <line x1="5" y1="95" x2="5" y2="5" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />

              {/* The curve (background) */}
              <path
                d={curvePath}
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />

              {/* Animated curve overlay */}
              <motion.path
                d={curvePath}
                fill="none"
                stroke="url(#curveGradient)"
                strokeWidth="2"
                strokeDasharray="200"
                initial={{ strokeDashoffset: 200 }}
                animate={{ strokeDashoffset: 200 - (animationProgress * 2) }}
                filter="drop-shadow(0 0 4px rgba(255,255,255,0.3))"
              />

              {/* Stage markers */}
              {stages.map((stage) => {
                const isActive = activeStage === stage.id;
                return (
                  <g key={stage.id}>
                    <motion.circle
                      cx={stage.x}
                      cy={100 - stage.y}
                      r={isActive ? 4 : 2.5}
                      fill={isActive ? stage.color : `${stage.color}60`}
                      stroke={stage.color}
                      strokeWidth={isActive ? 1.5 : 0.5}
                      style={{ cursor: 'pointer' }}
                      onClick={() => setActiveStage(stage.id)}
                      whileHover={{ r: 5 }}
                      animate={{
                        filter: isActive ? `drop-shadow(0 0 6px ${stage.color})` : 'none',
                      }}
                    />
                  </g>
                );
              })}

              {/* Moving dot during animation */}
              {isPlaying && (
                <motion.circle
                  r="3"
                  fill="#F59E0B"
                  filter="drop-shadow(0 0 8px #F59E0B)"
                >
                  <animateMotion
                    dur="5s"
                    repeatCount="1"
                    path={curvePath}
                    begin="0s"
                  />
                </motion.circle>
              )}
            </svg>

            {/* Axis labels */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[8px] text-white/50">
              KNOWLEDGE / EXPERIENCE &rarr;
            </div>
            <div className="absolute left-1 top-1/2 -translate-y-1/2 -rotate-90 text-[8px] text-white/50 whitespace-nowrap">
              CONFIDENCE &rarr;
            </div>

            {/* Peak label */}
            <div className="absolute top-3 left-[15%] text-[8px] text-red-400 whitespace-nowrap font-medium">
              Mt. Stupid
            </div>

            {/* Valley label */}
            <div className="absolute bottom-8 left-[30%] text-[8px] text-purple-400 whitespace-nowrap font-medium">
              Valley of Despair
            </div>
          </div>

          {/* Stage pills */}
          <div className="flex flex-wrap justify-center gap-1.5">
            {stages.map((stage) => (
              <button
                key={stage.id}
                onClick={() => {
                  setActiveStage(stage.id);
                  setIsPlaying(false);
                }}
                className={`text-[9px] px-2 py-1 rounded-full transition-all border ${
                  activeStage === stage.id
                    ? 'bg-white/10'
                    : 'border-transparent hover:bg-white/5'
                }`}
                style={{
                  borderColor: activeStage === stage.id ? stage.color : 'transparent',
                  color: activeStage === stage.id ? stage.color : 'rgba(255,255,255,0.5)',
                }}
              >
                {stage.label.split(' ').slice(-1)[0]}
              </button>
            ))}
          </div>

          {/* Info panel */}
          <AnimatePresence mode="wait">
            {activeData && (
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="relative overflow-hidden rounded-xl p-4 max-w-xs text-center border border-white/[0.08]"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="text-sm font-bold mb-1" style={{ color: activeData.color }}>
                  {activeData.label}
                </div>
                <p className="text-xs text-white/60">{activeData.description}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Play button */}
          <button
            onClick={startAnimation}
            disabled={isPlaying}
            className={`text-xs px-4 py-2 rounded-lg transition-all ${
              isPlaying
                ? 'bg-white/[0.04] text-white/50 cursor-not-allowed border border-white/[0.06]'
                : 'bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 border border-amber-500/30'
            }`}
          >
            {isPlaying ? 'Animating...' : 'Watch the journey'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DunningKrugerCurve;
