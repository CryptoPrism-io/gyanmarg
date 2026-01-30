import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PracticeType {
  id: string;
  name: string;
  icon: string;
  characteristics: string[];
  improvement: number;
  color: string;
  description: string;
  examples: string[];
}

const practiceTypes: PracticeType[] = [
  {
    id: 'naive',
    name: 'Naive Practice',
    icon: '😴',
    characteristics: ['Mindless repetition', 'No feedback loop', 'Staying in comfort zone', 'Just putting in hours'],
    improvement: 5,
    color: '#EF4444',
    description: 'Going through the motions without focus or intention',
    examples: ['Playing guitar while watching TV', 'Running the same route at same pace', 'Typing without trying to improve'],
  },
  {
    id: 'purposeful',
    name: 'Purposeful Practice',
    icon: '🎯',
    characteristics: ['Specific goals', 'Focused attention', 'Immediate feedback', 'Outside comfort zone'],
    improvement: 40,
    color: '#F59E0B',
    description: 'Intentional practice with clear objectives',
    examples: ['Practicing a specific song section', 'Running intervals with target times', 'Learning new keyboard shortcuts'],
  },
  {
    id: 'deliberate',
    name: 'Deliberate Practice',
    icon: '🏆',
    characteristics: ['Expert-designed exercises', 'Mental representations', 'Targets specific weaknesses', 'Maximum focused effort'],
    improvement: 100,
    color: '#22C55E',
    description: 'Structured practice designed by experts to maximize improvement',
    examples: ['Chess players studying grandmaster games', 'Musicians with world-class teachers', 'Athletes with specialized coaches'],
  },
];

export function DeliberatePractice() {
  const [selectedType, setSelectedType] = useState(0);
  const [hours, setHours] = useState(1000);
  const [isSimulating, setIsSimulating] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [showExamples, setShowExamples] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const type = practiceTypes[selectedType];
  const skillLevel = Math.min(100, Math.round(hours * (type.improvement / 100) / 100));

  // Simulate practice over time
  useEffect(() => {
    if (isSimulating) {
      intervalRef.current = window.setInterval(() => {
        setHours(prev => {
          if (prev >= 10000) {
            setIsSimulating(false);
            return 10000;
          }
          return prev + 200;
        });
      }, 100);

      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [isSimulating]);

  const getSkillLabel = (level: number) => {
    if (level >= 90) return 'World-class';
    if (level >= 70) return 'Expert';
    if (level >= 50) return 'Advanced';
    if (level >= 30) return 'Intermediate';
    if (level >= 10) return 'Beginner+';
    return 'Beginner';
  };

  const reset = () => {
    setHours(1000);
    setIsSimulating(false);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Practice type selector */}
      <div className="flex gap-2">
        {practiceTypes.map((p, index) => (
          <motion.button
            key={p.id}
            onClick={() => setSelectedType(index)}
            className={`px-3 py-2 rounded-xl transition-all border ${
              selectedType === index ? '' : 'text-gray-500 hover:text-gray-300 border-gray-800'
            }`}
            style={{
              backgroundColor: selectedType === index ? p.color + '20' : undefined,
              borderColor: selectedType === index ? p.color + '50' : undefined,
              color: selectedType === index ? p.color : undefined,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg mr-1">{p.icon}</span>
            <span className="text-[10px]">{p.name.split(' ')[0]}</span>
          </motion.button>
        ))}
      </div>

      {/* Skill growth visualization */}
      <div className="w-full max-w-xs">
        <div className="relative h-44 bg-gradient-to-b from-[#0A0A0B] to-[#111113] border border-gray-800 rounded-2xl overflow-hidden p-4">
          {/* Y-axis labels */}
          <div className="absolute left-2 top-6 bottom-6 flex flex-col justify-between text-[8px] text-gray-500">
            <span>World-class</span>
            <span>Expert</span>
            <span>Advanced</span>
            <span>Intermediate</span>
            <span>Beginner</span>
          </div>

          {/* Growth curves SVG */}
          <svg className="absolute left-12 right-4 top-6 bottom-6" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Grid lines */}
            {[20, 40, 60, 80].map(y => (
              <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#1F2937" strokeWidth="0.5" />
            ))}

            {/* All practice type curves */}
            {practiceTypes.map((p, idx) => (
              <motion.path
                key={p.id}
                d={`M 0 100 Q 30 ${100 - p.improvement * 0.3} 50 ${100 - p.improvement * 0.6} T 100 ${100 - p.improvement}`}
                fill="none"
                stroke={p.color}
                strokeWidth={selectedType === idx ? 3 : 1.5}
                opacity={selectedType === idx ? 1 : 0.25}
                strokeLinecap="round"
              />
            ))}

            {/* Current position marker */}
            <motion.g
              animate={{
                transform: `translate(${Math.min(95, hours / 100)}, ${100 - skillLevel})`,
              }}
            >
              <circle r="5" fill={type.color} />
              <circle r="10" fill={type.color} opacity="0.3">
                <animate attributeName="r" values="8;14;8" dur="1.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.1;0.3" dur="1.5s" repeatCount="indefinite" />
              </circle>
            </motion.g>
          </svg>

          {/* X-axis label */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[9px] text-gray-500">
            Hours of practice →
          </div>

          {/* Legend */}
          <div className="absolute top-2 right-2 space-y-0.5">
            {practiceTypes.map((p) => (
              <div key={p.id} className="flex items-center gap-1">
                <div className="w-3 h-0.5 rounded" style={{ backgroundColor: p.color }} />
                <span className="text-[7px]" style={{ color: p.color }}>{p.name.split(' ')[0]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hours control */}
      <div className="w-full max-w-xs">
        <div className="flex justify-between items-center text-[10px] text-gray-500 mb-1">
          <span>Hours practiced</span>
          <span className="font-mono">{hours.toLocaleString()} hrs</span>
        </div>
        <input
          type="range"
          min="100"
          max="10000"
          step="100"
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
          disabled={isSimulating}
          className="w-full disabled:opacity-50"
          style={{ accentColor: type.color }}
        />
        <div className="flex justify-between text-[8px] text-gray-600 mt-1">
          <span>100</span>
          <span>5,000</span>
          <span>10,000</span>
        </div>
      </div>

      {/* Simulate button */}
      <motion.button
        onClick={() => isSimulating ? setIsSimulating(false) : setIsSimulating(true)}
        className={`px-4 py-2 rounded-xl text-xs font-medium border ${
          isSimulating
            ? 'bg-red-500/10 border-red-500/30 text-red-400'
            : 'bg-purple-500/10 border-purple-500/30 text-purple-400'
        }`}
        whileTap={{ scale: 0.98 }}
      >
        {isSimulating ? '⏸ Pause' : '▶ Simulate 10,000 hours'}
      </motion.button>

      {/* Current result */}
      <AnimatePresence mode="wait">
        <motion.div
          key={type.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-xs p-4 rounded-xl border"
          style={{ backgroundColor: type.color + '10', borderColor: type.color + '30' }}
        >
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{type.icon}</span>
              <div>
                <p className="text-sm font-semibold" style={{ color: type.color }}>
                  {type.name}
                </p>
                <p className="text-[10px] text-gray-500">{type.description}</p>
              </div>
            </div>
          </div>

          {/* Skill meter */}
          <div className="mb-3">
            <div className="flex justify-between text-[10px] mb-1">
              <span className="text-gray-500">Skill level</span>
              <span style={{ color: type.color }}>{getSkillLabel(skillLevel)}</span>
            </div>
            <div className="h-3 bg-gray-900 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: type.color }}
                animate={{ width: `${skillLevel}%` }}
              />
            </div>
            <div className="flex justify-between text-[9px] text-gray-600 mt-0.5">
              <span>0</span>
              <span>{skillLevel}/100</span>
            </div>
          </div>

          {/* Characteristics */}
          <div className="space-y-1">
            {type.characteristics.map((char, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-2 text-[10px]"
              >
                <span style={{ color: type.color }}>✓</span>
                <span className="text-gray-400">{char}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Show examples toggle */}
      <button
        onClick={() => setShowExamples(!showExamples)}
        className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
      >
        {showExamples ? '▼ Hide' : '▶ Show'} examples
      </button>

      <AnimatePresence>
        {showExamples && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full max-w-xs space-y-2"
          >
            {type.examples.map((ex, idx) => (
              <div
                key={idx}
                className="p-2 rounded-lg text-[10px]"
                style={{ backgroundColor: type.color + '10', color: type.color }}
              >
                {ex}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Comparison toggle */}
      <button
        onClick={() => setShowComparison(!showComparison)}
        className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
      >
        {showComparison ? '▼ Hide' : '▶ Show'} 10K hours comparison
      </button>

      <AnimatePresence>
        {showComparison && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full max-w-xs bg-[#111113] border border-gray-800 rounded-xl p-3"
          >
            <p className="text-[10px] text-gray-500 mb-3 text-center">After 10,000 hours of practice:</p>
            <div className="space-y-2">
              {practiceTypes.map(p => (
                <div key={p.id} className="flex items-center gap-2">
                  <span className="text-lg">{p.icon}</span>
                  <div className="flex-1">
                    <div className="flex justify-between text-[10px] mb-0.5">
                      <span style={{ color: p.color }}>{p.name}</span>
                      <span className="text-gray-500">{p.improvement}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: p.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${p.improvement}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {hours > 1000 && (
        <button
          onClick={reset}
          className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
        >
          ↻ Reset
        </button>
      )}

      {/* Key insight */}
      <div className="bg-[#111113] border border-gray-800 rounded-xl p-4 max-w-xs">
        <p className="text-xs text-gray-400 leading-relaxed">
          <span className="text-green-400 font-medium">Anders Ericsson:</span> "It's not 10,000
          hours of practice that creates expertise—it's 10,000 hours of <em>deliberate</em> practice.
          The quality of practice matters more than quantity."
        </p>
      </div>

      <p className="text-[10px] text-gray-600">
        From Peak by Anders Ericsson
      </p>
    </div>
  );
}

export default DeliberatePractice;
