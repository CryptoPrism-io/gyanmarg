import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Activity {
  id: string;
  name: string;
  icon: string;
  spike: number;
  crash: number;
  baselineEffect: number;
  type: 'unhealthy' | 'healthy';
  description: string;
}

const activities: Activity[] = [
  {
    id: 'social',
    name: 'Social Media',
    icon: '📱',
    spike: 40,
    crash: -25,
    baselineEffect: -3,
    type: 'unhealthy',
    description: 'Quick dopamine hit, leaves you wanting more',
  },
  {
    id: 'junk',
    name: 'Junk Food',
    icon: '🍔',
    spike: 35,
    crash: -20,
    baselineEffect: -2,
    type: 'unhealthy',
    description: 'Sugar rush followed by crash and cravings',
  },
  {
    id: 'porn',
    name: 'Adult Content',
    icon: '🔞',
    spike: 80,
    crash: -50,
    baselineEffect: -8,
    type: 'unhealthy',
    description: 'Massive spike, severe crash, tolerance builds fast',
  },
  {
    id: 'exercise',
    name: 'Hard Workout',
    icon: '🏃',
    spike: 25,
    crash: 10,
    baselineEffect: 3,
    type: 'healthy',
    description: 'Moderate spike, elevated mood for hours after',
  },
  {
    id: 'cold',
    name: 'Cold Shower',
    icon: '🥶',
    spike: 20,
    crash: 15,
    baselineEffect: 4,
    type: 'healthy',
    description: '250% dopamine increase, stays elevated for hours',
  },
  {
    id: 'meditation',
    name: 'Meditation',
    icon: '🧘',
    spike: 10,
    crash: 8,
    baselineEffect: 2,
    type: 'healthy',
    description: 'Subtle but sustained elevation, builds over time',
  },
];

interface DataPoint {
  time: number;
  value: number;
  activity?: Activity;
}

export function DopamineBaseline() {
  const [baseline, setBaseline] = useState(50);
  const [history, setHistory] = useState<DataPoint[]>([{ time: 0, value: 50 }]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [lastActivity, setLastActivity] = useState<Activity | null>(null);
  const [totalActivities, setTotalActivities] = useState({ healthy: 0, unhealthy: 0 });
  const timeRef = useRef(0);

  const triggerActivity = useCallback((activity: Activity) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setLastActivity(activity);
    setTotalActivities(prev => ({
      ...prev,
      [activity.type]: prev[activity.type] + 1,
    }));

    const startTime = timeRef.current;
    const startValue = history[history.length - 1]?.value || baseline;

    // Add spike
    const spikeTime = startTime + 1;
    const spikeValue = Math.min(100, startValue + activity.spike);

    // Add crash/sustain
    const crashTime = spikeTime + 2;
    const crashValue = Math.max(20, Math.min(100, baseline + activity.crash));

    // New baseline
    const newBaseline = Math.max(25, Math.min(75, baseline + activity.baselineEffect));

    // Return to new baseline
    const returnTime = crashTime + 2;

    setHistory(prev => [
      ...prev,
      { time: spikeTime, value: spikeValue, activity },
      { time: crashTime, value: crashValue },
      { time: returnTime, value: newBaseline },
    ]);

    timeRef.current = returnTime;

    setTimeout(() => {
      setBaseline(newBaseline);
      setIsAnimating(false);
    }, 1500);
  }, [baseline, history, isAnimating]);

  const reset = () => {
    setBaseline(50);
    setHistory([{ time: 0, value: 50 }]);
    setLastActivity(null);
    setTotalActivities({ healthy: 0, unhealthy: 0 });
    timeRef.current = 0;
    setIsAnimating(false);
  };

  // Generate SVG path from history
  const generatePath = () => {
    if (history.length < 2) return '';

    const width = 280;
    const height = 100;
    const maxTime = Math.max(timeRef.current, 5);

    return history.map((point, i) => {
      const x = (point.time / maxTime) * width;
      const y = height - (point.value / 100) * height;
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
  };

  const currentValue = history[history.length - 1]?.value || 50;
  const baselineColor = baseline >= 50 ? '#22C55E' : baseline >= 40 ? '#F59E0B' : '#EF4444';

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Graph visualization */}
      <div className="w-full max-w-xs">
        <div className="relative h-32 bg-[#0A0A0B] border border-gray-800 rounded-xl p-3 overflow-hidden">
          {/* Baseline indicator */}
          <motion.div
            className="absolute left-3 right-3 border-t-2 border-dashed"
            style={{ borderColor: baselineColor + '60' }}
            animate={{ top: `${100 - baseline}%` }}
          />

          {/* Graph */}
          <svg className="absolute inset-3" viewBox="0 0 280 100" preserveAspectRatio="none">
            {/* Grid lines */}
            {[25, 50, 75].map(y => (
              <line
                key={y}
                x1="0"
                y1={100 - y}
                x2="280"
                y2={100 - y}
                stroke="#1F2937"
                strokeWidth="1"
              />
            ))}

            {/* History line */}
            <motion.path
              d={generatePath()}
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Gradient definition */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor={baselineColor} />
              </linearGradient>
            </defs>

            {/* Current value dot */}
            <motion.circle
              cx={280}
              cy={100 - currentValue}
              r="6"
              fill={currentValue > baseline ? '#22C55E' : currentValue < baseline ? '#EF4444' : '#F59E0B'}
              animate={{ cy: 100 - currentValue }}
            />
          </svg>

          {/* Y-axis labels */}
          <div className="absolute left-0 top-3 bottom-3 flex flex-col justify-between text-[8px] text-gray-600">
            <span>High</span>
            <span>Low</span>
          </div>

          {/* Baseline label */}
          <motion.div
            className="absolute right-1 text-[8px] font-medium"
            style={{ color: baselineColor }}
            animate={{ top: `${100 - baseline - 2}%` }}
          >
            baseline
          </motion.div>
        </div>
      </div>

      {/* Current stats */}
      <div className="flex gap-3">
        <div className="text-center px-4 py-2 bg-[#111113] border border-gray-800 rounded-xl">
          <motion.p
            className="text-xl font-bold"
            style={{ color: baselineColor }}
            animate={{ scale: isAnimating ? [1, 1.1, 1] : 1 }}
          >
            {baseline}%
          </motion.p>
          <p className="text-[10px] text-gray-500">Baseline</p>
        </div>
        <div className="text-center px-4 py-2 bg-[#111113] border border-gray-800 rounded-xl">
          <p className="text-xl font-bold" style={{
            color: currentValue > baseline + 10 ? '#22C55E' :
                   currentValue < baseline - 10 ? '#EF4444' : '#F59E0B'
          }}>
            {Math.round(currentValue)}%
          </p>
          <p className="text-[10px] text-gray-500">Current</p>
        </div>
      </div>

      {/* Activity feedback */}
      <AnimatePresence mode="wait">
        {lastActivity && (
          <motion.div
            key={lastActivity.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`w-full max-w-xs p-3 rounded-xl border ${
              lastActivity.type === 'healthy'
                ? 'bg-green-500/10 border-green-500/30'
                : 'bg-red-500/10 border-red-500/30'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{lastActivity.icon}</span>
              <div className="flex-1">
                <p className={`text-sm font-medium ${
                  lastActivity.type === 'healthy' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {lastActivity.name}
                </p>
                <p className="text-[10px] text-gray-500">{lastActivity.description}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400">
                  Baseline: <span style={{ color: lastActivity.baselineEffect > 0 ? '#22C55E' : '#EF4444' }}>
                    {lastActivity.baselineEffect > 0 ? '+' : ''}{lastActivity.baselineEffect}
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Activity buttons */}
      <div className="w-full max-w-xs space-y-3">
        <div>
          <p className="text-[10px] text-red-400 uppercase tracking-wide mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            High spike → Crash → Lower baseline
          </p>
          <div className="grid grid-cols-3 gap-2">
            {activities.filter(a => a.type === 'unhealthy').map(activity => (
              <motion.button
                key={activity.id}
                onClick={() => triggerActivity(activity)}
                disabled={isAnimating}
                className="p-3 bg-[#111113] border border-red-500/20 rounded-xl
                         hover:border-red-500/50 hover:bg-red-500/5
                         disabled:opacity-50 transition-all"
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl block mb-1">{activity.icon}</span>
                <span className="text-[10px] text-gray-400">{activity.name.split(' ')[0]}</span>
              </motion.button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[10px] text-green-400 uppercase tracking-wide mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            Moderate spike → Sustained → Higher baseline
          </p>
          <div className="grid grid-cols-3 gap-2">
            {activities.filter(a => a.type === 'healthy').map(activity => (
              <motion.button
                key={activity.id}
                onClick={() => triggerActivity(activity)}
                disabled={isAnimating}
                className="p-3 bg-[#111113] border border-green-500/20 rounded-xl
                         hover:border-green-500/50 hover:bg-green-500/5
                         disabled:opacity-50 transition-all"
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl block mb-1">{activity.icon}</span>
                <span className="text-[10px] text-gray-400">{activity.name.split(' ')[0]}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Session stats */}
      {(totalActivities.healthy > 0 || totalActivities.unhealthy > 0) && (
        <div className="w-full max-w-xs flex justify-between items-center px-3 py-2 bg-[#111113] border border-gray-800 rounded-lg">
          <div className="flex items-center gap-4 text-xs">
            <span className="text-green-400">✓ {totalActivities.healthy} healthy</span>
            <span className="text-red-400">✗ {totalActivities.unhealthy} unhealthy</span>
          </div>
          <button
            onClick={reset}
            className="text-[10px] text-gray-500 hover:text-gray-300"
          >
            ↻ Reset
          </button>
        </div>
      )}

      {/* Key insight */}
      <div className="bg-[#111113] border border-gray-800 rounded-xl p-4 max-w-xs">
        <p className="text-xs text-gray-400 leading-relaxed">
          <span className="text-purple-400 font-medium">Dr. Andrew Huberman:</span> "Your baseline
          level of dopamine determines your overall sense of motivation and wellbeing. Frequent
          high-spike activities <span className="text-red-400">lower your baseline</span>, making
          you need more stimulation to feel normal. Healthy practices{' '}
          <span className="text-green-400">raise your baseline</span> over time."
        </p>
      </div>

      <p className="text-[10px] text-gray-600">
        Based on Huberman Lab Podcast research
      </p>
    </div>
  );
}

export default DopamineBaseline;
