import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon } from 'lucide-react';

interface SleepStage {
  name: string;
  shortName: string;
  color: string;
  depth: number;
  duration: string;
  benefits: string[];
  icon: string;
}

const stages: SleepStage[] = [
  {
    name: 'Awake',
    shortName: 'W',
    color: '#EF4444',
    depth: 10,
    duration: '~5%',
    benefits: ['Brief awakenings', 'Position changes', 'Normal part of sleep'],
    icon: '👀',
  },
  {
    name: 'Light Sleep (N1-N2)',
    shortName: 'N1/N2',
    color: '#3B82F6',
    depth: 35,
    duration: '~50%',
    benefits: ['Memory consolidation begins', 'Body temperature drops', 'Heart rate slows', 'Sleep spindles (learning)'],
    icon: '😴',
  },
  {
    name: 'Deep Sleep (N3)',
    shortName: 'N3',
    color: '#8B5CF6',
    depth: 85,
    duration: '~20%',
    benefits: ['Physical recovery', 'Growth hormone release', 'Immune system boost', 'Tissue repair', 'Most restorative'],
    icon: '💤',
  },
  {
    name: 'REM Sleep',
    shortName: 'REM',
    color: '#22C55E',
    depth: 50,
    duration: '~25%',
    benefits: ['Vivid dreams', 'Emotional processing', 'Creativity boost', 'Memory integration', 'Learning consolidation'],
    icon: '🌙',
  },
];

// Realistic sleep architecture - 5 cycles across 8 hours
// Pattern: Light -> Deep -> Light -> REM, with increasing REM toward morning
const cyclePattern = [
  // Cycle 1 (0-90min): More deep sleep
  0, 1, 1, 2, 2, 2, 2, 1, 3, 3,
  // Cycle 2 (90-180min): Still significant deep sleep
  1, 1, 2, 2, 2, 1, 1, 3, 3, 3,
  // Cycle 3 (180-270min): Less deep, more REM
  0, 1, 1, 2, 2, 1, 1, 3, 3, 3,
  // Cycle 4 (270-360min): Minimal deep, longer REM
  1, 1, 1, 2, 1, 1, 3, 3, 3, 3,
  // Cycle 5 (360-480min): Almost no deep, lots of REM
  0, 1, 1, 1, 1, 1, 3, 3, 3, 3,
];

export function SleepArchitecture() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedStage, setSelectedStage] = useState<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  const currentStageIndex = cyclePattern[Math.min(Math.floor(currentPosition), cyclePattern.length - 1)];
  const currentStage = stages[currentStageIndex];
  const hoursSlept = ((currentPosition / cyclePattern.length) * 8).toFixed(1);
  const currentCycle = Math.floor(currentPosition / 10) + 1;

  // Calculate time in each stage
  const stageTime = cyclePattern.slice(0, Math.floor(currentPosition) + 1).reduce((acc, stage) => {
    acc[stage] = (acc[stage] || 0) + (8 / cyclePattern.length) * 60;
    return acc;
  }, {} as Record<number, number>);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = window.setInterval(() => {
        setCurrentPosition(prev => {
          if (prev >= cyclePattern.length - 1) {
            setIsPlaying(false);
            return cyclePattern.length - 1;
          }
          return prev + 0.3;
        });
      }, 100);

      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [isPlaying]);

  const reset = () => {
    setIsPlaying(false);
    setCurrentPosition(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  // Generate SVG path for hypnogram
  const generatePath = () => {
    const points = cyclePattern.map((stage, idx) => {
      const x = (idx / (cyclePattern.length - 1)) * 280;
      const y = 10 + stages[stage].depth * 0.8;
      return { x, y };
    });

    // Create smooth curve through points
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      // Step-like transitions for sleep stages
      d += ` L ${prev.x + (curr.x - prev.x) * 0.5} ${prev.y}`;
      d += ` L ${prev.x + (curr.x - prev.x) * 0.5} ${curr.y}`;
      d += ` L ${curr.x} ${curr.y}`;
    }
    return d;
  };

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Dark Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.03] via-transparent to-blue-500/[0.02]" />
      <div className="absolute inset-0 border border-white/[0.1] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex items-center justify-center border border-purple-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
            <Moon className="w-4 h-4 text-purple-400" />
          </div>
          <span className="text-sm font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Sleep Architecture
          </span>
        </div>

        <div className="flex flex-col items-center gap-5">
          {/* Hypnogram visualization */}
          <div className="w-full max-w-xs">
            <div className="flex justify-between items-center text-[10px] text-white/50 mb-2">
              <span>10 PM</span>
              <span className="text-purple-400 font-medium">Sleep Hypnogram</span>
              <span>6 AM</span>
            </div>

            <div className="relative h-32 rounded-xl overflow-hidden border border-white/[0.08]"
              style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)' }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* Stage depth bands */}
              {stages.map((stage, idx) => (
                <div
                  key={stage.name}
                  className="absolute left-0 right-0 h-[25%] opacity-10"
                  style={{
                    top: `${idx * 25}%`,
                    backgroundColor: stage.color,
                  }}
                />
              ))}

              {/* Y-axis labels */}
              <div className="absolute left-1 top-0 bottom-0 flex flex-col justify-between py-2 text-[7px] text-white/40">
                <span>Awake</span>
                <span>Light</span>
                <span>REM</span>
                <span>Deep</span>
              </div>

              {/* Sleep pattern path */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 100" preserveAspectRatio="none">
                {/* Cycle dividers */}
                {[1, 2, 3, 4].map(cycle => (
                  <line
                    key={cycle}
                    x1={(cycle * 56)}
                    y1="0"
                    x2={(cycle * 56)}
                    y2="100"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="0.5"
                    strokeDasharray="2,2"
                  />
                ))}

                {/* The sleep pattern line */}
                <path
                  d={generatePath()}
                  fill="none"
                  stroke="url(#sleepGradient)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Gradient definition */}
                <defs>
                  <linearGradient id="sleepGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="50%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#22C55E" />
                  </linearGradient>
                </defs>

                {/* Current position marker */}
                <motion.circle
                  cx={(currentPosition / cyclePattern.length) * 280}
                  cy={10 + currentStage.depth * 0.8}
                  r="5"
                  fill={currentStage.color}
                  animate={{
                    cx: (currentPosition / cyclePattern.length) * 280,
                    cy: 10 + currentStage.depth * 0.8,
                  }}
                />

                {/* Glow effect */}
                <motion.circle
                  cx={(currentPosition / cyclePattern.length) * 280}
                  cy={10 + currentStage.depth * 0.8}
                  r="10"
                  fill={currentStage.color}
                  opacity="0.3"
                  animate={{
                    cx: (currentPosition / cyclePattern.length) * 280,
                    cy: 10 + currentStage.depth * 0.8,
                    scale: [1, 1.5, 1],
                  }}
                  transition={{ duration: 1, repeat: isPlaying ? Infinity : 0 }}
                />
              </svg>

              {/* Time progress bar */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-green-500"
                animate={{ width: `${(currentPosition / cyclePattern.length) * 100}%` }}
              />

              {/* Cycle indicators */}
              <div className="absolute top-1 right-2 text-[8px] text-white/50">
                Cycle {currentCycle}/5
              </div>
            </div>
          </div>

          {/* Current stage info */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="relative overflow-hidden w-full max-w-xs p-4 rounded-xl border"
              style={{
                background: `linear-gradient(135deg, ${currentStage.color}15 0%, ${currentStage.color}05 100%)`,
                borderColor: `${currentStage.color}40`,
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{currentStage.icon}</span>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: currentStage.color }}>
                      {currentStage.name}
                    </p>
                    <p className="text-[10px] text-white/50">{currentStage.duration} of night</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-white">{hoursSlept}h</p>
                  <p className="text-[10px] text-white/50">slept</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {currentStage.benefits.slice(0, 4).map((benefit, idx) => (
                  <div
                    key={idx}
                    className="text-[10px] text-white/60 flex items-center gap-1"
                  >
                    <span style={{ color: currentStage.color }}>•</span>
                    {benefit}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Stage time breakdown */}
          <div className="w-full max-w-xs">
            <p className="text-[10px] text-white/50 mb-2 text-center">Time in each stage</p>
            <div className="flex gap-1 h-8 rounded-lg overflow-hidden border border-white/[0.08]">
              {stages.map((stage, idx) => {
                const minutes = stageTime[idx] || 0;
                const percentage = currentPosition > 0 ? (minutes / (parseFloat(hoursSlept) * 60)) * 100 : 0;

                return (
                  <motion.div
                    key={stage.name}
                    className="relative cursor-pointer hover:opacity-80 transition-opacity"
                    style={{ backgroundColor: stage.color }}
                    animate={{ width: `${Math.max(percentage, 0)}%` }}
                    onClick={() => setSelectedStage(selectedStage === idx ? null : idx)}
                  >
                    {percentage > 15 && (
                      <span className="absolute inset-0 flex items-center justify-center text-[8px] text-white font-medium">
                        {Math.round(minutes)}m
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </div>
            <div className="flex justify-between mt-1">
              {stages.map((stage) => (
                <div key={stage.name} className="flex items-center gap-1">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: stage.color }}
                  />
                  <span className="text-[8px] text-white/50">{stage.shortName}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex gap-2">
            <motion.button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`px-5 py-3 rounded-xl text-xs font-semibold transition-all border backdrop-blur-sm ${
                isPlaying
                  ? 'bg-red-500/15 border-red-500/30 text-red-400 shadow-[0_0_12px_rgba(239,68,68,0.15)]'
                  : 'bg-purple-500/15 border-purple-500/30 text-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.15)]'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isPlaying ? 'Pause' : 'Watch a night of sleep'}
            </motion.button>
            {currentPosition > 0 && (
              <button
                onClick={reset}
                className="px-4 py-3 border border-white/[0.08] text-white/60
                         rounded-xl text-xs hover:border-white/20 hover:text-white/80 transition-all"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
              >
                Reset
              </button>
            )}
          </div>

          {/* Sleep science toggle */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-xs text-white/50 hover:text-white/80 transition-colors"
          >
            {showDetails ? 'Hide' : 'Show'} sleep science
          </button>

          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="w-full max-w-xs space-y-2"
              >
                <div className="relative overflow-hidden p-3 rounded-xl border border-purple-500/30"
                  style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.1) 0%, rgba(168,85,247,0.02) 100%)' }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
                  <p className="text-[10px] text-purple-400 font-medium mb-1">Deep Sleep Pattern</p>
                  <p className="text-[10px] text-white/60">
                    Deep sleep is concentrated in the first half of the night. Go to bed early to maximize it.
                  </p>
                </div>
                <div className="relative overflow-hidden p-3 rounded-xl border border-green-500/30"
                  style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(34,197,94,0.02) 100%)' }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent" />
                  <p className="text-[10px] text-green-400 font-medium mb-1">REM Pattern</p>
                  <p className="text-[10px] text-white/60">
                    REM increases toward morning. Cutting sleep short means losing crucial REM time for memory.
                  </p>
                </div>
                <div className="relative overflow-hidden p-3 rounded-xl border border-blue-500/30"
                  style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0.02) 100%)' }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
                  <p className="text-[10px] text-blue-400 font-medium mb-1">Sleep Cycles</p>
                  <p className="text-[10px] text-white/60">
                    Each cycle is ~90 minutes. Plan sleep in cycles: 6h (4 cycles), 7.5h (5 cycles), 9h (6 cycles).
                  </p>
                </div>
                <div className="relative overflow-hidden p-3 rounded-xl border border-amber-500/30"
                  style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.1) 0%, rgba(245,158,11,0.02) 100%)' }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
                  <p className="text-[10px] text-amber-400 font-medium mb-1">Sleep Debt</p>
                  <p className="text-[10px] text-white/60">
                    You can't "catch up" on sleep. Missing deep sleep or REM causes irreversible cognitive loss.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Key insight */}
          <div className="relative overflow-hidden rounded-xl p-4 max-w-xs border border-white/[0.08]"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="text-xs text-white/60 leading-relaxed">
              <span className="text-purple-400 font-medium">Matthew Walker:</span> "Sleep is the single
              most effective thing we can do to reset our brain and body health each day. It's not
              optional—it's your life-support system."
            </p>
          </div>

          <p className="text-[10px] text-white/40">
            From Why We Sleep by Matthew Walker
          </p>
        </div>
      </div>
    </div>
  );
}

export default SleepArchitecture;
