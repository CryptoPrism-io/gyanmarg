import { useState } from 'react';
import { motion } from 'framer-motion';

interface Experience {
  id: string;
  name: string;
  timeline: number[];
  peakMoment: number;
  endMoment: number;
  actualAvg: number;
  rememberedAs: number;
}

const experiences: Experience[] = [
  {
    id: 'vacation',
    name: 'Vacation',
    timeline: [6, 7, 5, 9, 6, 5, 4, 8],
    peakMoment: 9,
    endMoment: 8,
    actualAvg: 6.25,
    rememberedAs: 8.5,
  },
  {
    id: 'movie',
    name: 'Movie',
    timeline: [5, 6, 7, 8, 9, 6, 5, 3],
    peakMoment: 9,
    endMoment: 3,
    actualAvg: 6.1,
    rememberedAs: 6,
  },
  {
    id: 'meal',
    name: 'Restaurant',
    timeline: [7, 6, 8, 7, 6, 5, 9, 9],
    peakMoment: 9,
    endMoment: 9,
    actualAvg: 7.1,
    rememberedAs: 9,
  },
];

export function PeakEndRule() {
  const [activeExperience, setActiveExperience] = useState(0);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const exp = experiences[activeExperience];
  const maxValue = 10;

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Experience selector */}
      <div className="flex gap-2">
        {experiences.map((e, index) => (
          <button
            key={e.id}
            onClick={() => {
              setActiveExperience(index);
              setShowAnalysis(false);
            }}
            className={`text-[10px] px-3 py-1.5 rounded-full transition-all border ${
              activeExperience === index
                ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                : 'text-gray-500 hover:text-gray-300 border-transparent'
            }`}
          >
            {e.name}
          </button>
        ))}
      </div>

      {/* Experience timeline chart */}
      <div className="w-full max-w-xs">
        <p className="text-[10px] text-gray-500 text-center mb-2">Experience over time (1-10)</p>
        <div className="h-32 flex items-end gap-1 bg-[#111113] border border-gray-800 rounded-lg p-3">
          {exp.timeline.map((value, index) => {
            const isPeak = value === exp.peakMoment;
            const isEnd = index === exp.timeline.length - 1;

            return (
              <motion.div
                key={index}
                className="flex-1 rounded-t relative"
                initial={{ height: 0 }}
                animate={{ height: `${(value / maxValue) * 100}%` }}
                transition={{ delay: index * 0.1, type: 'spring' }}
                style={{
                  backgroundColor: isPeak
                    ? '#22C55E'
                    : isEnd
                    ? '#F59E0B'
                    : '#3B82F6',
                }}
              >
                {isPeak && (
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[8px] text-green-400">
                    PEAK
                  </span>
                )}
                {isEnd && (
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[8px] text-amber-400">
                    END
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-4 mt-2">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-[10px] text-gray-500">Peak</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-[10px] text-gray-500">End</span>
          </div>
        </div>
      </div>

      {/* Analysis button */}
      <button
        onClick={() => setShowAnalysis(true)}
        className="text-xs px-4 py-2 bg-blue-500/10 border border-blue-500/30
                 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-all"
      >
        Analyze memory vs reality →
      </button>

      {/* Analysis */}
      {showAnalysis && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-xs space-y-3"
        >
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#111113] border border-gray-800 rounded-lg p-3 text-center">
              <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-1">
                Actual Average
              </p>
              <p className="text-xl font-bold text-gray-400">{exp.actualAvg.toFixed(1)}</p>
              <p className="text-[10px] text-gray-600">objective experience</p>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 text-center">
              <p className="text-[10px] text-amber-400 uppercase tracking-wide mb-1">
                Remembered As
              </p>
              <p className="text-xl font-bold text-amber-400">{exp.rememberedAs.toFixed(1)}</p>
              <p className="text-[10px] text-amber-400/60">(peak + end) / 2</p>
            </div>
          </div>

          <div className="bg-[#111113] border border-gray-800 rounded-lg p-3 text-center">
            <p className="text-xs text-gray-400">
              <span className="text-amber-400 font-medium">Peak:</span> {exp.peakMoment}/10 +{' '}
              <span className="text-amber-400 font-medium">End:</span> {exp.endMoment}/10 ={' '}
              <span className="text-white font-medium">Memory: {exp.rememberedAs}/10</span>
            </p>
          </div>
        </motion.div>
      )}

      {/* Practical application */}
      <div className="bg-[#111113] border border-gray-800 rounded-lg p-3 max-w-xs">
        <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-2">Apply this:</p>
        <ul className="text-xs text-gray-400 space-y-1">
          <li>• End presentations on a high note</li>
          <li>• Create peak moments in experiences</li>
          <li>• A great dessert saves an okay meal</li>
        </ul>
      </div>

      <p className="text-[10px] text-gray-500 text-center">
        Daniel Kahneman - Thinking, Fast and Slow
      </p>
    </div>
  );
}

export default PeakEndRule;
