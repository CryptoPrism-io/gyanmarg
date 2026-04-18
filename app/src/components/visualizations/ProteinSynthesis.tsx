import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface MealTiming {
  time: string;
  label: string;
  protein: number;
}

export function ProteinSynthesis() {
  const [bodyWeight, setBodyWeight] = useState(70);
  const [meals, setMeals] = useState(4);
  const [goal, setGoal] = useState<'maintain' | 'build'>('build');

  const dailyProtein = useMemo(() => {
    const multiplier = goal === 'build' ? 2.0 : 1.6;
    return Math.round(bodyWeight * multiplier);
  }, [bodyWeight, goal]);

  const proteinPerMeal = useMemo(() => {
    return Math.round(dailyProtein / meals);
  }, [dailyProtein, meals]);

  const mealTimings: MealTiming[] = useMemo(() => {
    const spacing = 16 / meals; // Spread over 16 waking hours
    return Array.from({ length: meals }, (_, i) => ({
      time: `${7 + Math.round(i * spacing)}:00`,
      label: ['Breakfast', 'Lunch', 'Snack', 'Dinner', 'Evening'][i] || `Meal ${i + 1}`,
      protein: proteinPerMeal,
    }));
  }, [meals, proteinPerMeal]);

  // Simulate MPS (Muscle Protein Synthesis) curve
  const mpsData = useMemo(() => {
    const points: { hour: number; mps: number }[] = [];
    for (let h = 0; h <= 24; h++) {
      let mps = 0;
      mealTimings.forEach((meal) => {
        const mealHour = parseInt(meal.time);
        const hoursAfter = h - mealHour;
        if (hoursAfter >= 0 && hoursAfter <= 5) {
          // MPS peaks 1-2 hours after eating, then declines
          mps += Math.max(0, 100 * Math.exp(-Math.pow(hoursAfter - 1.5, 2) / 2));
        }
      });
      points.push({ hour: h, mps: Math.min(100, mps) });
    }
    return points;
  }, [mealTimings]);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/[0.03] via-transparent to-amber-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-5">
          {/* Title */}
          <div className="text-center">
            <h3 className="text-sm font-bold text-green-400">Muscle Protein Synthesis</h3>
            <p className="text-[10px] text-gray-500">Optimize protein timing for muscle growth</p>
          </div>

          {/* Goal selector */}
          <div className="flex gap-2">
            <button
              onClick={() => setGoal('maintain')}
              className={`px-4 py-2 rounded-lg text-xs backdrop-blur-sm transition-all ${
                goal === 'maintain'
                  ? 'bg-blue-500/20 border border-blue-500/50 text-blue-400'
                  : 'bg-[var(--viz-tile)] border border-[var(--viz-border-light)] text-gray-400 hover:bg-[var(--viz-tile-md)]'
              }`}
            >
              Maintain (1.6g/kg)
            </button>
            <button
              onClick={() => setGoal('build')}
              className={`px-4 py-2 rounded-lg text-xs backdrop-blur-sm transition-all ${
                goal === 'build'
                  ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                  : 'bg-[var(--viz-tile)] border border-[var(--viz-border-light)] text-gray-400 hover:bg-[var(--viz-tile-md)]'
              }`}
            >
              Build (2.0g/kg)
            </button>
          </div>

          {/* Body weight slider */}
          <div className="w-full max-w-xs">
            <div className="flex justify-between text-[10px] text-gray-500 mb-1">
              <span>Body weight</span>
              <span className="text-green-400 font-bold">{bodyWeight} kg</span>
            </div>
            <input
              type="range"
              min="45"
              max="120"
              value={bodyWeight}
              onChange={(e) => setBodyWeight(Number(e.target.value))}
              className="w-full"
              style={{ accentColor: '#22C55E' }}
            />
          </div>

          {/* Daily target */}
          <motion.div
            className="relative w-full max-w-xs overflow-hidden rounded-xl text-center"
            key={dailyProtein}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
          >
            <div className="absolute inset-0 bg-green-500/[0.1] backdrop-blur-sm" />
            <div className="absolute inset-0 border border-green-500/30 rounded-xl" />
            <div className="relative p-4">
              <p className="text-3xl font-bold text-green-400">{dailyProtein}g</p>
              <p className="text-[10px] text-gray-500">Daily protein target</p>
            </div>
          </motion.div>

          {/* Meals slider */}
          <div className="w-full max-w-xs">
            <div className="flex justify-between text-[10px] text-gray-500 mb-1">
              <span>Meals per day</span>
              <span className="text-amber-400 font-bold">{meals} meals</span>
            </div>
            <input
              type="range"
              min="3"
              max="5"
              value={meals}
              onChange={(e) => setMeals(Number(e.target.value))}
              className="w-full"
              style={{ accentColor: '#F59E0B' }}
            />
          </div>

          {/* MPS curve visualization */}
          <div className="w-full max-w-xs">
            <p className="text-[10px] text-gray-500 mb-2 text-center">Protein Synthesis Throughout Day</p>
            <div className="relative h-24 overflow-hidden rounded-xl p-2">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm" />
              <div className="absolute inset-0 border border-[var(--viz-border)] rounded-xl" />
              <svg viewBox="0 0 280 80" className="relative w-full h-full">
                {/* MPS curve */}
                <path
                  d={`M 0 80 ${mpsData.map((d) => {
                    const x = (d.hour / 24) * 280;
                    const y = 80 - (d.mps / 100) * 70;
                    return `L ${x} ${y}`;
                  }).join(' ')} L 280 80 Z`}
                  fill="url(#mpsGradient)"
                />
                <path
                  d={`M ${mpsData.map((d, idx) => {
                    const x = (d.hour / 24) * 280;
                    const y = 80 - (d.mps / 100) * 70;
                    return idx === 0 ? `${x} ${y}` : `L ${x} ${y}`;
                  }).join(' ')}`}
                  fill="none"
                  stroke="#22C55E"
                  strokeWidth="2"
                />

                {/* Meal markers */}
                {mealTimings.map((meal, i) => {
                  const x = (parseInt(meal.time) / 24) * 280;
                  return (
                    <g key={i}>
                      <line x1={x} y1="0" x2={x} y2="80" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2,2" />
                      <text x={x} y="75" textAnchor="middle" fontSize="6" fill="#F59E0B">
                        {meal.time.split(':')[0]}h
                      </text>
                    </g>
                  );
                })}

                <defs>
                  <linearGradient id="mpsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22C55E" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#22C55E" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Meal breakdown */}
          <div className="w-full max-w-xs">
            <p className="text-[10px] text-gray-500 mb-2">Protein per meal:</p>
            <div className="flex gap-2 justify-center">
              {mealTimings.map((meal, i) => (
                <motion.div
                  key={i}
                  className="relative flex-1 overflow-hidden rounded-lg text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm" />
                  <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg" />
                  <div className="relative p-2">
                    <p className="text-sm font-bold text-green-400">{meal.protein}g</p>
                    <p className="text-[8px] text-gray-500">{meal.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Optimal timing tips */}
          <div className="w-full max-w-xs grid grid-cols-2 gap-2">
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-green-500/[0.08] backdrop-blur-sm" />
              <div className="absolute inset-0 border border-green-500/20 rounded-lg" />
              <div className="relative p-2">
                <p className="text-[10px] text-green-400 font-medium">Per Meal</p>
                <p className="text-[9px] text-gray-400">25-40g optimal for MPS</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-blue-500/[0.08] backdrop-blur-sm" />
              <div className="absolute inset-0 border border-blue-500/20 rounded-lg" />
              <div className="relative p-2">
                <p className="text-[10px] text-blue-400 font-medium">Timing</p>
                <p className="text-[9px] text-gray-400">Every 3-4 hours ideal</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-purple-500/[0.08] backdrop-blur-sm" />
              <div className="absolute inset-0 border border-purple-500/20 rounded-lg" />
              <div className="relative p-2">
                <p className="text-[10px] text-purple-400 font-medium">Post-Workout</p>
                <p className="text-[9px] text-gray-400">40g within 2 hours</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-amber-500/[0.08] backdrop-blur-sm" />
              <div className="absolute inset-0 border border-amber-500/20 rounded-lg" />
              <div className="relative p-2">
                <p className="text-[10px] text-amber-400 font-medium">Before Bed</p>
                <p className="text-[9px] text-gray-400">Casein protein helps</p>
              </div>
            </div>
          </div>

          {/* Key insight */}
          <div className="relative max-w-xs overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm" />
            <div className="absolute inset-0 border border-[var(--viz-border)] rounded-xl" />
            <div className="relative p-4">
              <p className="text-xs text-gray-400 leading-relaxed">
                <span className="text-green-400 font-medium">Dr. Peter Attia:</span> "The anabolic
                response to protein is not just about total daily intake. Distribution matters—spreading
                protein across meals maximizes muscle protein synthesis throughout the day."
              </p>
            </div>
          </div>

          <p className="text-[10px] text-gray-600">From Outlive by Peter Attia</p>
        </div>
      </div>
    </div>
  );
}

export default ProteinSynthesis;
