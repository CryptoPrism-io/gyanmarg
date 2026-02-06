import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity } from 'lucide-react';

interface ActivityType {
  id: string;
  name: string;
  icon: string;
  spike: number;
  crash: number;
  baselineEffect: number;
  type: 'unhealthy' | 'healthy';
  description: string;
}

const activities: ActivityType[] = [
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
  activity?: ActivityType;
}

export function DopamineBaseline() {
  const [baseline, setBaseline] = useState(50);
  const [history, setHistory] = useState<DataPoint[]>([{ time: 0, value: 50 }]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [lastActivity, setLastActivity] = useState<ActivityType | null>(null);
  const [totalActivities, setTotalActivities] = useState({ healthy: 0, unhealthy: 0 });
  const timeRef = useRef(0);

  const triggerActivity = useCallback((activity: ActivityType) => {
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
            <Activity className="w-4 h-4 text-purple-400" />
          </div>
          <span className="text-sm font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Dopamine Baseline
          </span>
        </div>

        <div className="flex flex-col items-center gap-5">
          {/* Graph visualization */}
          <div className="w-full max-w-xs">
            <div className="relative h-32 rounded-xl p-3 overflow-hidden border border-white/[0.08]"
              style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)' }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

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
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="1"
                  />
                ))}

                {/* History line */}
                <motion.path
                  d={generatePath()}
                  fill="none"
                  stroke="url(#dopamineGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Gradient definition */}
                <defs>
                  <linearGradient id="dopamineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
              <div className="absolute left-0 top-3 bottom-3 flex flex-col justify-between text-[8px] text-white/40">
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
            <div className="relative overflow-hidden text-center px-4 py-2 rounded-xl border border-white/[0.08]"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <motion.p
                className="text-xl font-bold"
                style={{ color: baselineColor }}
                animate={{ scale: isAnimating ? [1, 1.1, 1] : 1 }}
              >
                {baseline}%
              </motion.p>
              <p className="text-[10px] text-white/50">Baseline</p>
            </div>
            <div className="relative overflow-hidden text-center px-4 py-2 rounded-xl border border-white/[0.08]"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <p className="text-xl font-bold" style={{
                color: currentValue > baseline + 10 ? '#22C55E' :
                       currentValue < baseline - 10 ? '#EF4444' : '#F59E0B'
              }}>
                {Math.round(currentValue)}%
              </p>
              <p className="text-[10px] text-white/50">Current</p>
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
                className={`relative overflow-hidden w-full max-w-xs p-3 rounded-xl border ${
                  lastActivity.type === 'healthy'
                    ? 'border-green-500/30'
                    : 'border-red-500/30'
                }`}
                style={{
                  background: lastActivity.type === 'healthy'
                    ? 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(34,197,94,0.02) 100%)'
                    : 'linear-gradient(135deg, rgba(239,68,68,0.1) 0%, rgba(239,68,68,0.02) 100%)',
                }}
              >
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${
                  lastActivity.type === 'healthy' ? 'via-green-400/30' : 'via-red-400/30'
                } to-transparent`} />
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{lastActivity.icon}</span>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${
                      lastActivity.type === 'healthy' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {lastActivity.name}
                    </p>
                    <p className="text-[10px] text-white/50">{lastActivity.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-white/60">
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
                {'High spike → Crash → Lower baseline'}
              </p>
              <div className="grid grid-cols-3 gap-2">
                {activities.filter(a => a.type === 'unhealthy').map(activity => (
                  <motion.button
                    key={activity.id}
                    onClick={() => triggerActivity(activity)}
                    disabled={isAnimating}
                    className="relative overflow-hidden p-3 rounded-xl border border-red-500/20
                             hover:border-red-500/50
                             disabled:opacity-50 transition-all"
                    style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                    <span className="text-xl block mb-1">{activity.icon}</span>
                    <span className="text-[10px] text-white/60">{activity.name.split(' ')[0]}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] text-green-400 uppercase tracking-wide mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                {'Moderate spike → Sustained → Higher baseline'}
              </p>
              <div className="grid grid-cols-3 gap-2">
                {activities.filter(a => a.type === 'healthy').map(activity => (
                  <motion.button
                    key={activity.id}
                    onClick={() => triggerActivity(activity)}
                    disabled={isAnimating}
                    className="relative overflow-hidden p-3 rounded-xl border border-green-500/20
                             hover:border-green-500/50
                             disabled:opacity-50 transition-all"
                    style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                    <span className="text-xl block mb-1">{activity.icon}</span>
                    <span className="text-[10px] text-white/60">{activity.name.split(' ')[0]}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Session stats */}
          {(totalActivities.healthy > 0 || totalActivities.unhealthy > 0) && (
            <div className="relative overflow-hidden w-full max-w-xs flex justify-between items-center px-3 py-2 rounded-lg border border-white/[0.08]"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="flex items-center gap-4 text-xs">
                <span className="text-green-400">{totalActivities.healthy} healthy</span>
                <span className="text-red-400">{totalActivities.unhealthy} unhealthy</span>
              </div>
              <button
                onClick={reset}
                className="text-[10px] text-white/50 hover:text-white/80"
              >
                Reset
              </button>
            </div>
          )}

          {/* Key insight */}
          <div className="relative overflow-hidden rounded-xl p-4 max-w-xs border border-white/[0.08]"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="text-xs text-white/60 leading-relaxed">
              <span className="text-purple-400 font-medium">Dr. Andrew Huberman:</span> "Your baseline
              level of dopamine determines your overall sense of motivation and wellbeing. Frequent
              high-spike activities <span className="text-red-400">lower your baseline</span>, making
              you need more stimulation to feel normal. Healthy practices{' '}
              <span className="text-green-400">raise your baseline</span> over time."
            </p>
          </div>

          <p className="text-[10px] text-white/40">
            Based on Huberman Lab Podcast research
          </p>
        </div>
      </div>
    </div>
  );
}

export default DopamineBaseline;
