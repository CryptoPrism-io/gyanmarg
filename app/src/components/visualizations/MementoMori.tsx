import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Daily Stoic - Memento Mori (Remember Death)
export function MementoMori() {
  const [birthYear, setBirthYear] = useState(1990);
  const [showVisualization, setShowVisualization] = useState(false);

  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  const lifeExpectancy = 80;
  const weeksLived = age * 52;
  const totalWeeks = lifeExpectancy * 52;
  const weeksRemaining = Math.max(0, totalWeeks - weeksLived);

  // Generate weeks grid (simplified - show years as rows)
  const years = Array.from({ length: lifeExpectancy }, (_, i) => i + 1);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Quote */}
      <div className="text-center">
        <p className="text-xs text-gray-400 mb-1">
          "You could leave life right now. Let that determine what you do and say and think."
        </p>
        <p className="text-[10px] text-amber-400">— Marcus Aurelius</p>
      </div>

      {!showVisualization ? (
        <div className="w-full max-w-xs space-y-4">
          <div className="space-y-2">
            <label className="text-xs text-gray-400">Your birth year:</label>
            <input
              type="number"
              value={birthYear}
              onChange={(e) => setBirthYear(Number(e.target.value))}
              min={1940}
              max={2010}
              className="w-full p-3 bg-[#111113] border border-gray-800 rounded-lg text-gray-300 text-center focus:border-amber-500/50 focus:outline-none"
            />
          </div>

          <motion.button
            onClick={() => setShowVisualization(true)}
            className="w-full py-3 bg-amber-500/20 border border-amber-500/50 rounded-lg text-sm text-amber-400"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            See Your Life in Weeks
          </motion.button>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-w-xs space-y-4"
        >
          {/* Stats */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-gray-500/10 border border-gray-700 rounded-lg p-2 text-center">
              <p className="text-lg font-bold text-gray-400">{age}</p>
              <p className="text-[8px] text-gray-500">Years Lived</p>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-2 text-center">
              <p className="text-lg font-bold text-amber-400">{weeksRemaining.toLocaleString()}</p>
              <p className="text-[8px] text-amber-500">Weeks Left</p>
            </div>
            <div className="bg-[#111113] border border-gray-800 rounded-lg p-2 text-center">
              <p className="text-lg font-bold text-gray-300">{lifeExpectancy}</p>
              <p className="text-[8px] text-gray-500">Expectancy</p>
            </div>
          </div>

          {/* Life visualization - years as bars */}
          <div className="bg-[#111113] border border-gray-800 rounded-lg p-3">
            <p className="text-[10px] text-gray-500 mb-2 text-center">Your life in years:</p>
            <div className="flex flex-wrap gap-[2px]">
              {years.map((year) => {
                const isLived = year <= age;
                return (
                  <motion.div
                    key={year}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: year * 0.01 }}
                    className={`w-3 h-3 rounded-sm ${
                      isLived
                        ? 'bg-gray-600'
                        : 'bg-amber-500/30 border border-amber-500/50'
                    }`}
                    title={`Year ${year}`}
                  />
                );
              })}
            </div>
            <div className="flex justify-between mt-2 text-[8px] text-gray-500">
              <span>Gray = Lived</span>
              <span>Amber = Remaining</span>
            </div>
          </div>

          {/* Reflection */}
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3">
            <p className="text-xs text-amber-400 text-center mb-2">
              The Stoic Question:
            </p>
            <p className="text-[10px] text-gray-400 text-center italic">
              "If this were your last week, would you spend it the way you're spending this one?"
            </p>
          </div>

          {/* Insight */}
          <div className="bg-[#111113] border border-gray-800 rounded-lg p-3 space-y-2">
            <p className="text-[10px] text-gray-400">
              <span className="text-green-400">Memento Mori</span> isn't morbid—it's motivating.
            </p>
            <ul className="text-[10px] text-gray-500 space-y-1">
              <li>• Death awareness reduces anxiety about trivial things</li>
              <li>• It clarifies what truly matters</li>
              <li>• Each day becomes more precious</li>
            </ul>
          </div>

          <button
            onClick={() => setShowVisualization(false)}
            className="w-full py-2 bg-gray-800 border border-gray-700 rounded-lg text-xs text-gray-400"
          >
            Reset
          </button>
        </motion.div>
      )}

      <p className="text-[10px] text-gray-500 text-center">
        From "The Daily Stoic" by Ryan Holiday
      </p>
    </div>
  );
}

export default MementoMori;
