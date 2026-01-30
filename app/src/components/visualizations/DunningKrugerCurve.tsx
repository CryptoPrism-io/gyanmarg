import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <div className="flex flex-col items-center gap-4">
      {/* Main Chart */}
      <div className="relative w-72 h-48 bg-[#0A0A0B] rounded-xl border border-gray-800 overflow-hidden">
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
          <line x1="5" y1="95" x2="95" y2="95" stroke="#374151" strokeWidth="0.5" />
          <line x1="5" y1="95" x2="5" y2="5" stroke="#374151" strokeWidth="0.5" />

          {/* The curve (background) */}
          <path
            d={curvePath}
            fill="none"
            stroke="#374151"
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
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[8px] text-gray-500">
          KNOWLEDGE / EXPERIENCE →
        </div>
        <div className="absolute left-1 top-1/2 -translate-y-1/2 -rotate-90 text-[8px] text-gray-500 whitespace-nowrap">
          CONFIDENCE →
        </div>

        {/* Peak label */}
        <div className="absolute top-3 left-[15%] text-[8px] text-red-400 whitespace-nowrap">
          Mt. Stupid
        </div>

        {/* Valley label */}
        <div className="absolute bottom-8 left-[30%] text-[8px] text-purple-400 whitespace-nowrap">
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
              color: activeStage === stage.id ? stage.color : '#6B7280',
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
            className="bg-[#111113] border border-gray-800 rounded-lg p-4 max-w-xs text-center"
          >
            <div className="text-sm font-bold mb-1" style={{ color: activeData.color }}>
              {activeData.label}
            </div>
            <p className="text-xs text-gray-400">{activeData.description}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Play button */}
      <button
        onClick={startAnimation}
        disabled={isPlaying}
        className={`text-xs px-4 py-2 rounded-lg transition-all ${
          isPlaying
            ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
            : 'bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 border border-amber-500/30'
        }`}
      >
        {isPlaying ? '↻ Animating...' : '▶ Watch the journey'}
      </button>
    </div>
  );
}

export default DunningKrugerCurve;
