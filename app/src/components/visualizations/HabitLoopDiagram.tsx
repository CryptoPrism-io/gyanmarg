import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stages = [
  {
    id: 'cue',
    label: 'CUE',
    description: 'The trigger that initiates the behavior',
    example: 'You see your running shoes by the door',
    color: '#F59E0B', // amber
    angle: -90, // top (12 o'clock)
  },
  {
    id: 'craving',
    label: 'CRAVING',
    description: 'The motivational force behind every habit',
    example: 'You want the feeling of energy after a run',
    color: '#8B5CF6', // purple
    angle: 0, // right (3 o'clock)
  },
  {
    id: 'response',
    label: 'RESPONSE',
    description: 'The actual habit you perform',
    example: 'You go for a morning run',
    color: '#22C55E', // green
    angle: 90, // bottom (6 o'clock)
  },
  {
    id: 'reward',
    label: 'REWARD',
    description: 'The end goal of every habit',
    example: 'You feel accomplished and energized',
    color: '#3B82F6', // blue
    angle: 180, // left (9 o'clock)
  },
];

interface HabitLoopDiagramProps {
  autoPlay?: boolean;
  showLabels?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function HabitLoopDiagram({
  autoPlay = false,
  showLabels = true,
  size = 'md',
}: HabitLoopDiagramProps) {
  const [activeStage, setActiveStage] = useState<string | null>(autoPlay ? 'cue' : null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const sizeConfig = {
    sm: { container: 200, circle: 60, node: 40 },
    md: { container: 300, circle: 80, node: 52 },
    lg: { container: 380, circle: 100, node: 60 },
  };

  const config = sizeConfig[size];

  // Auto-cycle through stages
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveStage((prev) => {
        const currentIndex = stages.findIndex((s) => s.id === prev);
        const nextIndex = (currentIndex + 1) % stages.length;
        return stages[nextIndex].id;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNodeClick = (stageId: string) => {
    setActiveStage(activeStage === stageId ? null : stageId);
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
      setActiveStage(null);
    } else {
      setIsPlaying(true);
      setActiveStage('cue');
    }
  };

  const activeStageData = stages.find((s) => s.id === activeStage);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Main Diagram */}
      <div
        className="relative"
        style={{ width: config.container, height: config.container }}
      >
        {/* Center circle with rotating gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Outer glow ring */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: config.circle + 20,
              height: config.circle + 20,
              background: activeStage
                ? `radial-gradient(circle, ${stages.find(s => s.id === activeStage)?.color}30 0%, transparent 70%)`
                : 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            }}
            animate={{
              scale: isPlaying ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: isPlaying ? Infinity : 0,
              ease: 'easeInOut',
            }}
          />

          {/* Main center circle */}
          <motion.div
            className="relative rounded-full border-2 border-white/10"
            style={{
              width: config.circle,
              height: config.circle,
              background: `conic-gradient(from ${activeStage ? stages.findIndex(s => s.id === activeStage) * 90 - 90 : 0}deg,
                ${stages[0].color}50,
                ${stages[1].color}50,
                ${stages[2].color}50,
                ${stages[3].color}50,
                ${stages[0].color}50)`,
            }}
            animate={{
              rotate: isPlaying ? 360 : 0,
            }}
            transition={{
              duration: 8,
              repeat: isPlaying ? Infinity : 0,
              ease: 'linear',
            }}
          />
        </div>

        {/* Center text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <motion.div
            className="text-sm font-bold text-white"
            animate={{
              scale: isPlaying ? [1, 1.05, 1] : 1,
              opacity: isPlaying ? [0.8, 1, 0.8] : 1,
            }}
            transition={{ duration: 2, repeat: isPlaying ? Infinity : 0 }}
          >
            HABIT
          </motion.div>
          <div className="text-[10px] text-gray-400 font-medium">LOOP</div>
        </div>

        {/* Connecting arrows */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox={`0 0 ${config.container} ${config.container}`}
        >
          <defs>
            {stages.map((stage) => (
              <marker
                key={`arrowhead-${stage.id}`}
                id={`arrowhead-${stage.id}`}
                markerWidth="6"
                markerHeight="6"
                refX="3"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 6 3, 0 6" fill={stage.color} />
              </marker>
            ))}
          </defs>
          {stages.map((stage, index) => {
            const nextIndex = (index + 1) % stages.length;
            const startAngle = (stage.angle * Math.PI) / 180;
            const endAngle = (stages[nextIndex].angle * Math.PI) / 180;
            const radius = config.container / 2 - config.node / 2 - 8;
            const cx = config.container / 2;
            const cy = config.container / 2;

            // Calculate positions slightly offset from node centers for cleaner arrows
            const offsetAngle = 0.3; // radians offset
            const adjustedStartAngle = startAngle + offsetAngle;
            const adjustedEndAngle = endAngle - offsetAngle;

            const startX = cx + Math.cos(adjustedStartAngle) * radius;
            const startY = cy + Math.sin(adjustedStartAngle) * radius;
            const endX = cx + Math.cos(adjustedEndAngle) * radius;
            const endY = cy + Math.sin(adjustedEndAngle) * radius;

            const isActive = activeStage === stage.id;
            const isNextActive = activeStage === stages[nextIndex].id;
            const shouldHighlight = isActive || isNextActive;

            return (
              <motion.path
                key={`arrow-${index}`}
                d={`M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY}`}
                fill="none"
                stroke={stage.color}
                strokeWidth={shouldHighlight ? 3 : 2}
                strokeLinecap="round"
                markerEnd={`url(#arrowhead-${stage.id})`}
                initial={{ pathLength: 0, opacity: 0.4 }}
                animate={{
                  pathLength: 1,
                  opacity: shouldHighlight ? 1 : 0.5,
                  strokeDashoffset: isPlaying ? [0, -30] : 0,
                }}
                style={{
                  strokeDasharray: isPlaying ? '8 4' : 'none',
                }}
                transition={{
                  pathLength: { duration: 0.5, ease: 'easeOut' },
                  opacity: { duration: 0.3 },
                  strokeDashoffset: {
                    duration: 0.8,
                    repeat: isPlaying ? Infinity : 0,
                    ease: 'linear',
                  },
                }}
              />
            );
          })}
        </svg>

        {/* Stage nodes */}
        {stages.map((stage, index) => {
          const angle = (stage.angle * Math.PI) / 180;
          const radius = config.container / 2 - config.node / 2 - 4;
          const x = config.container / 2 + Math.cos(angle) * radius - config.node / 2;
          const y = config.container / 2 + Math.sin(angle) * radius - config.node / 2;
          const isActive = activeStage === stage.id;

          return (
            <motion.button
              key={stage.id}
              onClick={() => handleNodeClick(stage.id)}
              className="absolute rounded-full flex flex-col items-center justify-center cursor-pointer border-2 transition-colors z-20"
              style={{
                width: config.node,
                height: config.node,
                left: x,
                top: y,
                backgroundColor: isActive ? stage.color : '#111113',
                borderColor: isActive ? stage.color : `${stage.color}80`,
              }}
              whileHover={{ scale: 1.15, borderColor: stage.color }}
              whileTap={{ scale: 0.95 }}
              animate={{
                scale: isActive ? 1.1 : 1,
                boxShadow: isActive
                  ? `0 0 24px ${stage.color}80, 0 0 48px ${stage.color}40`
                  : `0 0 8px ${stage.color}30`,
              }}
              transition={{
                scale: { type: 'spring', stiffness: 400, damping: 20 },
                boxShadow: { duration: 0.3 },
              }}
            >
              <span
                className={`text-xs font-bold ${isActive ? 'text-white' : ''}`}
                style={{ color: isActive ? 'white' : stage.color }}
              >
                {stage.label.slice(0, 1)}
              </span>
              {isActive && (
                <motion.span
                  initial={{ opacity: 0, y: -2 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[8px] text-white/80 font-medium"
                >
                  {index + 1}
                </motion.span>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Labels */}
      {showLabels && (
        <div className="flex gap-3 flex-wrap justify-center">
          {stages.map((stage) => (
            <button
              key={stage.id}
              onClick={() => handleNodeClick(stage.id)}
              className={`text-xs px-2 py-1 rounded-full transition-all ${
                activeStage === stage.id
                  ? 'bg-white/10 text-white'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
              style={{
                borderColor: activeStage === stage.id ? stage.color : 'transparent',
                borderWidth: 1,
              }}
            >
              {stage.label}
            </button>
          ))}
        </div>
      )}

      {/* Info panel */}
      <AnimatePresence mode="wait">
        {activeStageData && (
          <motion.div
            key={activeStageData.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-[#111113] border border-gray-800 rounded-lg p-4 max-w-xs text-center"
          >
            <div
              className="text-sm font-bold mb-1"
              style={{ color: activeStageData.color }}
            >
              {activeStageData.label}
            </div>
            <p className="text-xs text-gray-400 mb-2">{activeStageData.description}</p>
            <p className="text-xs text-gray-500 italic">"{activeStageData.example}"</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Play/Pause button */}
      <motion.button
        onClick={handlePlayPause}
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
          isPlaying
            ? 'bg-white/10 text-white border border-white/20'
            : 'bg-amber-500/20 text-amber-400 border border-amber-500/30 hover:bg-amber-500/30'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isPlaying ? (
          <>
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ⏸
            </motion.span>
            Pause
          </>
        ) : (
          <>
            <span>▶</span>
            Watch the Loop
          </>
        )}
      </motion.button>
    </div>
  );
}

export default HabitLoopDiagram;
