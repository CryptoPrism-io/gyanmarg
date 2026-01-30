import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Phase = 'inhale' | 'hold1' | 'exhale' | 'hold2';

interface PhaseInfo {
  name: string;
  instruction: string;
  color: string;
  icon: string;
}

const phases: Record<Phase, PhaseInfo> = {
  inhale: { name: 'Inhale', instruction: 'Breathe in slowly', color: '#3B82F6', icon: '↑' },
  hold1: { name: 'Hold', instruction: 'Hold your breath', color: '#8B5CF6', icon: '⊙' },
  exhale: { name: 'Exhale', instruction: 'Breathe out slowly', color: '#22C55E', icon: '↓' },
  hold2: { name: 'Hold', instruction: 'Keep lungs empty', color: '#F59E0B', icon: '⊙' },
};

const phaseOrder: Phase[] = ['inhale', 'hold1', 'exhale', 'hold2'];

export function BoxBreathing() {
  const [isActive, setIsActive] = useState(false);
  const [currentPhase, setCurrentPhase] = useState<Phase>('inhale');
  const [progress, setProgress] = useState(0);
  const [breathCount, setBreathCount] = useState(0);
  const [duration, setDuration] = useState(4);
  const intervalRef = useRef<number | null>(null);

  const phase = phases[currentPhase];

  useEffect(() => {
    if (isActive) {
      const tickDuration = (duration * 1000) / 100;
      intervalRef.current = window.setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            // Move to next phase
            const currentIndex = phaseOrder.indexOf(currentPhase);
            const nextIndex = (currentIndex + 1) % phaseOrder.length;
            setCurrentPhase(phaseOrder[nextIndex]);

            // Count completed breath cycles
            if (nextIndex === 0) {
              setBreathCount((c) => c + 1);
            }

            return 0;
          }
          return prev + 1;
        });
      }, tickDuration);

      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [isActive, currentPhase, duration]);

  const reset = () => {
    setIsActive(false);
    setCurrentPhase('inhale');
    setProgress(0);
    setBreathCount(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  // Calculate box position based on phase and progress
  const getBoxPosition = () => {
    const phaseIndex = phaseOrder.indexOf(currentPhase);
    const normalizedProgress = progress / 100;

    switch (phaseIndex) {
      case 0: // inhale - left side going up
        return { x: 0, y: 100 - normalizedProgress * 100 };
      case 1: // hold1 - top going right
        return { x: normalizedProgress * 100, y: 0 };
      case 2: // exhale - right side going down
        return { x: 100, y: normalizedProgress * 100 };
      case 3: // hold2 - bottom going left
        return { x: 100 - normalizedProgress * 100, y: 100 };
      default:
        return { x: 0, y: 100 };
    }
  };

  const position = getBoxPosition();

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Title */}
      <div className="text-center">
        <h3 className="text-sm font-bold text-blue-400">Box Breathing</h3>
        <p className="text-[10px] text-gray-500">Navy SEAL stress control technique</p>
      </div>

      {/* Duration selector */}
      <div className="flex gap-2">
        {[3, 4, 5, 6].map((d) => (
          <button
            key={d}
            onClick={() => !isActive && setDuration(d)}
            className={`w-10 h-10 rounded-lg text-xs font-bold transition-all ${
              duration === d
                ? 'bg-blue-500 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            } ${isActive ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {d}s
          </button>
        ))}
      </div>

      {/* Box visualization */}
      <div className="relative w-56 h-56">
        {/* Outer box */}
        <div className="absolute inset-4 border-2 border-gray-700 rounded-lg">
          {/* Phase labels on corners */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] text-gray-500">
            Hold ({duration}s)
          </div>
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-gray-500">
            Hold ({duration}s)
          </div>
          <div className="absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] text-gray-500">
            Inhale ({duration}s)
          </div>
          <div className="absolute -right-12 top-1/2 -translate-y-1/2 rotate-90 text-[10px] text-gray-500">
            Exhale ({duration}s)
          </div>
        </div>

        {/* SVG for the path and ball */}
        <svg className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)]" viewBox="0 0 100 100">
          {/* Progress path */}
          <rect
            x="0"
            y="0"
            width="100"
            height="100"
            fill="none"
            stroke={phase.color + '30'}
            strokeWidth="3"
            rx="8"
          />

          {/* Active side highlight */}
          {isActive && (
            <motion.line
              x1={currentPhase === 'inhale' ? 0 : currentPhase === 'hold1' ? 0 : currentPhase === 'exhale' ? 100 : 100}
              y1={currentPhase === 'inhale' ? 100 : currentPhase === 'hold1' ? 0 : currentPhase === 'exhale' ? 0 : 100}
              x2={currentPhase === 'inhale' ? 0 : currentPhase === 'hold1' ? progress : currentPhase === 'exhale' ? 100 : 100 - progress}
              y2={currentPhase === 'inhale' ? 100 - progress : currentPhase === 'hold1' ? 0 : currentPhase === 'exhale' ? progress : 100}
              stroke={phase.color}
              strokeWidth="4"
              strokeLinecap="round"
            />
          )}

          {/* Moving ball */}
          <motion.circle
            cx={position.x}
            cy={position.y}
            r="8"
            fill={phase.color}
            animate={{
              cx: position.x,
              cy: position.y,
            }}
            transition={{ duration: 0.1 }}
          />

          {/* Glow effect */}
          <motion.circle
            cx={position.x}
            cy={position.y}
            r="15"
            fill={phase.color}
            opacity="0.3"
            animate={{
              cx: position.x,
              cy: position.y,
              scale: isActive ? [1, 1.3, 1] : 1,
            }}
            transition={{ duration: 1, repeat: isActive ? Infinity : 0 }}
          />
        </svg>

        {/* Center instruction */}
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPhase}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-center"
            >
              <p className="text-3xl mb-1" style={{ color: phase.color }}>
                {phase.icon}
              </p>
              <p className="text-sm font-bold" style={{ color: phase.color }}>
                {phase.name}
              </p>
              <p className="text-[10px] text-gray-500">{phase.instruction}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Breath counter */}
      {breathCount > 0 && (
        <div className="text-center">
          <p className="text-2xl font-bold text-white">{breathCount}</p>
          <p className="text-[10px] text-gray-500">breath cycles completed</p>
        </div>
      )}

      {/* Controls */}
      <div className="flex gap-2">
        <motion.button
          onClick={() => setIsActive(!isActive)}
          className={`px-5 py-3 rounded-xl text-xs font-semibold transition-all border ${
            isActive
              ? 'bg-red-500/10 border-red-500/30 text-red-400'
              : 'bg-blue-500/10 border-blue-500/30 text-blue-400'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isActive ? '⏸ Pause' : '▶ Start Breathing'}
        </motion.button>
        {(breathCount > 0 || progress > 0) && (
          <button
            onClick={reset}
            className="px-4 py-3 border border-gray-700 text-gray-400
                     rounded-xl text-xs hover:border-gray-600 transition-all"
          >
            ↻ Reset
          </button>
        )}
      </div>

      {/* Benefits */}
      <div className="w-full max-w-xs grid grid-cols-2 gap-2">
        <div className="p-2 bg-blue-500/10 border border-blue-500/30 rounded-lg">
          <p className="text-[10px] text-blue-400 font-medium">🧘 Calm Mind</p>
          <p className="text-[9px] text-gray-400">Activates parasympathetic</p>
        </div>
        <div className="p-2 bg-green-500/10 border border-green-500/30 rounded-lg">
          <p className="text-[10px] text-green-400 font-medium">❤️ Lower HR</p>
          <p className="text-[9px] text-gray-400">Reduces heart rate</p>
        </div>
        <div className="p-2 bg-purple-500/10 border border-purple-500/30 rounded-lg">
          <p className="text-[10px] text-purple-400 font-medium">🎯 Focus</p>
          <p className="text-[9px] text-gray-400">Improves concentration</p>
        </div>
        <div className="p-2 bg-amber-500/10 border border-amber-500/30 rounded-lg">
          <p className="text-[10px] text-amber-400 font-medium">⚡ Energy</p>
          <p className="text-[9px] text-gray-400">Increases oxygen</p>
        </div>
      </div>

      {/* Key insight */}
      <div className="bg-[#111113] border border-gray-800 rounded-xl p-4 max-w-xs">
        <p className="text-xs text-gray-400 leading-relaxed">
          <span className="text-blue-400 font-medium">Navy SEAL Protocol:</span> Box breathing is
          used by Special Forces to stay calm under extreme stress. 4 cycles before high-stakes
          situations can dramatically improve performance.
        </p>
      </div>

      <p className="text-[10px] text-gray-600">From Wim Hof & Navy SEAL Training</p>
    </div>
  );
}

export default BoxBreathing;
