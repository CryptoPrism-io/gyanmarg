import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stages = [
  {
    id: 'cue',
    label: 'CUE',
    description: 'The trigger that initiates the behavior',
    example: 'You see your running shoes by the door',
    color: '#F59E0B', // amber
    angle: -45,
  },
  {
    id: 'craving',
    label: 'CRAVING',
    description: 'The motivational force behind every habit',
    example: 'You want the feeling of energy after a run',
    color: '#8B5CF6', // purple
    angle: 45,
  },
  {
    id: 'response',
    label: 'RESPONSE',
    description: 'The actual habit you perform',
    example: 'You go for a morning run',
    color: '#22C55E', // green
    angle: 135,
  },
  {
    id: 'reward',
    label: 'REWARD',
    description: 'The end goal of every habit',
    example: 'You feel accomplished and energized',
    color: '#3B82F6', // blue
    angle: 225,
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
    sm: { container: 200, circle: 80, node: 36 },
    md: { container: 280, circle: 110, node: 48 },
    lg: { container: 360, circle: 140, node: 56 },
  };

  const config = sizeConfig[size];

  // Auto-cycle through stages
  useState(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setActiveStage((prev) => {
        const currentIndex = stages.findIndex((s) => s.id === prev);
        const nextIndex = (currentIndex + 1) % stages.length;
        return stages[nextIndex].id;
      });
    }, 2000);

    return () => clearInterval(interval);
  });

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
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: config.circle,
            height: config.circle,
            background: `conic-gradient(from ${activeStage ? stages.findIndex(s => s.id === activeStage) * 90 : 0}deg,
              ${stages[0].color}40,
              ${stages[1].color}40,
              ${stages[2].color}40,
              ${stages[3].color}40,
              ${stages[0].color}40)`,
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

        {/* Center text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <motion.div
            className="text-xs font-bold text-white/80"
            animate={{ scale: isPlaying ? [1, 1.1, 1] : 1 }}
            transition={{ duration: 2, repeat: isPlaying ? Infinity : 0 }}
          >
            HABIT
          </motion.div>
          <div className="text-[10px] text-gray-500">LOOP</div>
        </div>

        {/* Connecting arrows */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox={`0 0 ${config.container} ${config.container}`}
        >
          {stages.map((stage, index) => {
            const nextIndex = (index + 1) % stages.length;
            const startAngle = (stage.angle * Math.PI) / 180;
            const endAngle = (stages[nextIndex].angle * Math.PI) / 180;
            const radius = config.container / 2 - config.node / 2 - 4;
            const cx = config.container / 2;
            const cy = config.container / 2;

            const startX = cx + Math.cos(startAngle) * radius;
            const startY = cy + Math.sin(startAngle) * radius;
            const endX = cx + Math.cos(endAngle) * radius;
            const endY = cy + Math.sin(endAngle) * radius;

            const isActive = activeStage === stage.id;

            return (
              <motion.path
                key={`arrow-${index}`}
                d={`M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY}`}
                fill="none"
                stroke={stage.color}
                strokeWidth={isActive ? 3 : 1.5}
                strokeDasharray="4 4"
                opacity={isActive ? 1 : 0.3}
                animate={{
                  strokeDashoffset: isPlaying ? [0, -20] : 0,
                }}
                transition={{
                  duration: 1,
                  repeat: isPlaying ? Infinity : 0,
                  ease: 'linear',
                }}
              />
            );
          })}
        </svg>

        {/* Stage nodes */}
        {stages.map((stage) => {
          const angle = (stage.angle * Math.PI) / 180;
          const radius = config.container / 2 - config.node / 2;
          const x = config.container / 2 + Math.cos(angle) * radius - config.node / 2;
          const y = config.container / 2 + Math.sin(angle) * radius - config.node / 2;
          const isActive = activeStage === stage.id;

          return (
            <motion.button
              key={stage.id}
              onClick={() => handleNodeClick(stage.id)}
              className="absolute rounded-full flex items-center justify-center cursor-pointer border-2 transition-all"
              style={{
                width: config.node,
                height: config.node,
                left: x,
                top: y,
                backgroundColor: isActive ? stage.color : `${stage.color}20`,
                borderColor: stage.color,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: isActive
                  ? `0 0 20px ${stage.color}60`
                  : `0 0 0px ${stage.color}00`,
              }}
            >
              <span
                className={`text-[10px] font-bold ${isActive ? 'text-white' : 'text-gray-300'}`}
              >
                {stage.label.slice(0, 1)}
              </span>
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
      <button
        onClick={handlePlayPause}
        className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
      >
        {isPlaying ? '⏸ Pause' : '▶ Auto-play'}
      </button>
    </div>
  );
}

export default HabitLoopDiagram;
