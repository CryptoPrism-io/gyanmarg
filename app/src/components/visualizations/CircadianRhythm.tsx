import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface TimeBlock {
  hour: number;
  label: string;
  activity: string;
  energy: number;
  color: string;
  icon: string;
}

const timeBlocks: TimeBlock[] = [
  { hour: 6, label: '6 AM', activity: 'Cortisol spike - natural wake', energy: 70, color: '#F59E0B', icon: '🌅' },
  { hour: 8, label: '8 AM', activity: 'Peak alertness begins', energy: 85, color: '#22C55E', icon: '⚡' },
  { hour: 10, label: '10 AM', activity: 'Best focus & concentration', energy: 100, color: '#22C55E', icon: '🧠' },
  { hour: 12, label: '12 PM', activity: 'Coordination peaks', energy: 90, color: '#3B82F6', icon: '🎯' },
  { hour: 14, label: '2 PM', activity: 'Post-lunch dip', energy: 60, color: '#F59E0B', icon: '😴' },
  { hour: 16, label: '4 PM', activity: 'Second wind - strength peaks', energy: 85, color: '#22C55E', icon: '💪' },
  { hour: 18, label: '6 PM', activity: 'Best cardiovascular efficiency', energy: 80, color: '#3B82F6', icon: '❤️' },
  { hour: 20, label: '8 PM', activity: 'Melatonin starts rising', energy: 50, color: '#8B5CF6', icon: '🌙' },
  { hour: 22, label: '10 PM', activity: 'Body temp drops, sleep window', energy: 30, color: '#8B5CF6', icon: '😴' },
  { hour: 0, label: '12 AM', activity: 'Deep sleep - HGH release', energy: 20, color: '#6B7280', icon: '💤' },
  { hour: 3, label: '3 AM', activity: 'Core body temp lowest', energy: 10, color: '#6B7280', icon: '❄️' },
];

export function CircadianRhythm() {
  const [selectedHour, setSelectedHour] = useState(10);

  const currentBlock = useMemo(() => {
    return timeBlocks.find(b => b.hour === selectedHour) || timeBlocks[2];
  }, [selectedHour]);

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Title */}
      <div className="text-center">
        <h3 className="text-sm font-bold text-purple-400">Your 24-Hour Body Clock</h3>
        <p className="text-[10px] text-gray-500">Circadian rhythm optimization</p>
      </div>

      {/* Clock visualization */}
      <div className="relative w-64 h-64">
        <svg viewBox="0 0 260 260" className="w-full h-full">
          {/* Clock face gradient */}
          <defs>
            <radialGradient id="clockBg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1a1a1d" />
              <stop offset="100%" stopColor="#0a0a0b" />
            </radialGradient>
          </defs>

          <circle cx="130" cy="130" r="120" fill="url(#clockBg)" stroke="#374151" strokeWidth="2" />

          {/* Hour markers and energy arcs */}
          {timeBlocks.map((block, i) => {
            const angle = ((block.hour / 24) * 360 - 90) * (Math.PI / 180);
            const innerR = 85;
            const outerR = 105;
            const x1 = 130 + innerR * Math.cos(angle);
            const y1 = 130 + innerR * Math.sin(angle);
            const x2 = 130 + outerR * Math.cos(angle);
            const y2 = 130 + outerR * Math.sin(angle);
            const isSelected = selectedHour === block.hour;

            return (
              <g key={i} className="cursor-pointer" onClick={() => setSelectedHour(block.hour)}>
                {/* Tick mark */}
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={isSelected ? block.color : '#374151'}
                  strokeWidth={isSelected ? 3 : 1}
                />

                {/* Energy dot */}
                <motion.circle
                  cx={130 + (40 + block.energy * 0.4) * Math.cos(angle)}
                  cy={130 + (40 + block.energy * 0.4) * Math.sin(angle)}
                  r={isSelected ? 8 : 5}
                  fill={block.color}
                  opacity={isSelected ? 1 : 0.5}
                  animate={isSelected ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </g>
            );
          })}

          {/* Energy curve */}
          <path
            d={timeBlocks.map((block, i) => {
              const angle = ((block.hour / 24) * 360 - 90) * (Math.PI / 180);
              const r = 40 + block.energy * 0.4;
              const x = 130 + r * Math.cos(angle);
              const y = 130 + r * Math.sin(angle);
              return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
            }).join(' ') + ' Z'}
            fill={currentBlock.color + '20'}
            stroke={currentBlock.color}
            strokeWidth="1"
          />

          {/* Center info */}
          <circle cx="130" cy="130" r="35" fill="#111113" stroke="#374151" />
          <text x="130" y="120" textAnchor="middle" fontSize="20">
            {currentBlock.icon}
          </text>
          <text x="130" y="140" textAnchor="middle" fontSize="10" fill={currentBlock.color} fontWeight="bold">
            {currentBlock.label}
          </text>
          <text x="130" y="152" textAnchor="middle" fontSize="7" fill="#666">
            Energy: {currentBlock.energy}%
          </text>
        </svg>
      </div>

      {/* Time slider */}
      <div className="w-full max-w-xs">
        <input
          type="range"
          min="0"
          max="22"
          step="2"
          value={selectedHour}
          onChange={(e) => {
            const val = Number(e.target.value);
            const closest = timeBlocks.reduce((prev, curr) =>
              Math.abs(curr.hour - val) < Math.abs(prev.hour - val) ? curr : prev
            );
            setSelectedHour(closest.hour);
          }}
          className="w-full"
          style={{ accentColor: currentBlock.color }}
        />
      </div>

      {/* Current activity */}
      <motion.div
        key={selectedHour}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xs p-4 rounded-xl border"
        style={{
          backgroundColor: currentBlock.color + '10',
          borderColor: currentBlock.color + '40',
        }}
      >
        <div className="flex items-center gap-3">
          <span className="text-3xl">{currentBlock.icon}</span>
          <div>
            <p className="text-sm font-bold" style={{ color: currentBlock.color }}>
              {currentBlock.label}
            </p>
            <p className="text-xs text-gray-400">{currentBlock.activity}</p>
          </div>
        </div>

        {/* Energy bar */}
        <div className="mt-3">
          <div className="flex justify-between text-[10px] text-gray-500 mb-1">
            <span>Energy Level</span>
            <span style={{ color: currentBlock.color }}>{currentBlock.energy}%</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: currentBlock.color }}
              initial={{ width: 0 }}
              animate={{ width: `${currentBlock.energy}%` }}
            />
          </div>
        </div>
      </motion.div>

      {/* Optimization tips */}
      <div className="w-full max-w-xs grid grid-cols-2 gap-2">
        <div className="p-2 bg-amber-500/10 border border-amber-500/30 rounded-lg">
          <p className="text-[10px] text-amber-400 font-medium">☀️ Morning Light</p>
          <p className="text-[9px] text-gray-400">Get sunlight in first 30 mins</p>
        </div>
        <div className="p-2 bg-purple-500/10 border border-purple-500/30 rounded-lg">
          <p className="text-[10px] text-purple-400 font-medium">🌙 Dim Lights</p>
          <p className="text-[9px] text-gray-400">Reduce blue light after 8 PM</p>
        </div>
      </div>

      {/* Key insight */}
      <div className="bg-[#111113] border border-gray-800 rounded-xl p-4 max-w-xs">
        <p className="text-xs text-gray-400 leading-relaxed">
          <span className="text-purple-400 font-medium">Andrew Huberman:</span> "Your circadian
          rhythm is the master controller of nearly every biological process. Align your activities
          with it, don't fight against it."
        </p>
      </div>

      <p className="text-[10px] text-gray-600">From Huberman Lab Podcast</p>
    </div>
  );
}

export default CircadianRhythm;
