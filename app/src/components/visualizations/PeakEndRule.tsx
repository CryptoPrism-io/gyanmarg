import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

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
    <div className="relative overflow-hidden rounded-2xl">
      {/* Dark Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-green-500/[0.02]" />
      <div className="absolute inset-0 border border-white/[0.1] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center border border-blue-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
            <TrendingUp className="w-4 h-4 text-blue-400" />
          </div>
          <span className="text-sm font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Peak-End Rule
          </span>
        </div>

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
                className={`text-[10px] px-3 py-1.5 rounded-full transition-all border backdrop-blur-sm ${
                  activeExperience === index
                    ? 'bg-blue-500/15 text-blue-400 border-blue-500/30'
                    : 'text-white/50 hover:text-white/70 border-transparent'
                }`}
              >
                {e.name}
              </button>
            ))}
          </div>

          {/* Experience timeline chart */}
          <div className="w-full max-w-xs">
            <p className="text-[10px] text-white/50 text-center mb-2">Experience over time (1-10)</p>
            <div
              className="relative overflow-hidden h-32 flex items-end gap-1 rounded-xl p-3 border border-white/[0.08]"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
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
                <span className="text-[10px] text-white/50">Peak</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="text-[10px] text-white/50">End</span>
              </div>
            </div>
          </div>

          {/* Analysis button */}
          <button
            onClick={() => setShowAnalysis(true)}
            className="text-xs px-4 py-2 bg-blue-500/10 border border-blue-500/30
                     text-blue-400 rounded-lg hover:bg-blue-500/20 transition-all backdrop-blur-sm"
          >
            Analyze memory vs reality
          </button>

          {/* Analysis */}
          {showAnalysis && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-xs space-y-3"
            >
              <div className="grid grid-cols-2 gap-3">
                <div
                  className="relative overflow-hidden rounded-xl p-3 text-center border border-white/[0.08]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <p className="text-[10px] text-white/50 uppercase tracking-wide mb-1">
                    Actual Average
                  </p>
                  <p className="text-xl font-bold text-white/60">{exp.actualAvg.toFixed(1)}</p>
                  <p className="text-[10px] text-white/40">objective experience</p>
                </div>
                <div
                  className="relative overflow-hidden rounded-xl p-3 text-center border border-amber-500/30"
                  style={{
                    background: 'linear-gradient(135deg, rgba(245,158,11,0.1) 0%, rgba(245,158,11,0.03) 100%)',
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
                  <p className="text-[10px] text-amber-400 uppercase tracking-wide mb-1">
                    Remembered As
                  </p>
                  <p className="text-xl font-bold text-amber-400">{exp.rememberedAs.toFixed(1)}</p>
                  <p className="text-[10px] text-amber-400/60">(peak + end) / 2</p>
                </div>
              </div>

              <div
                className="relative overflow-hidden rounded-xl p-3 text-center border border-white/[0.08]"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <p className="text-xs text-white/60">
                  <span className="text-amber-400 font-medium">Peak:</span> {exp.peakMoment}/10 +{' '}
                  <span className="text-amber-400 font-medium">End:</span> {exp.endMoment}/10 ={' '}
                  <span className="text-white font-medium">Memory: {exp.rememberedAs}/10</span>
                </p>
              </div>
            </motion.div>
          )}

          {/* Practical application */}
          <div
            className="relative overflow-hidden rounded-xl p-3 max-w-xs border border-white/[0.08]"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="text-[10px] text-white/50 uppercase tracking-wide mb-2">Apply this:</p>
            <ul className="text-xs text-white/60 space-y-1">
              <li>* End presentations on a high note</li>
              <li>* Create peak moments in experiences</li>
              <li>* A great dessert saves an okay meal</li>
            </ul>
          </div>

          <p className="text-[10px] text-white/50 text-center">
            Daniel Kahneman - Thinking, Fast and Slow
          </p>
        </div>
      </div>
    </div>
  );
}

export default PeakEndRule;
