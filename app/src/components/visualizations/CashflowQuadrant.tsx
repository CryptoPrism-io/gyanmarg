import { useState } from 'react';
import { motion } from 'framer-motion';

// Rich Dad Poor Dad - ESBI Quadrant
const quadrants = [
  {
    id: 'E',
    title: 'Employee',
    description: 'You have a job',
    taxes: 'Highest taxes',
    time: 'Trade time for money',
    security: 'Job security (illusion)',
    color: 'red',
  },
  {
    id: 'S',
    title: 'Self-Employed',
    description: 'You own a job',
    taxes: 'High taxes',
    time: 'Still trade time for money',
    security: 'If you stop, income stops',
    color: 'orange',
  },
  {
    id: 'B',
    title: 'Business Owner',
    description: 'You own a system',
    taxes: 'Lower taxes (write-offs)',
    time: 'Systems work for you',
    security: 'Business runs without you',
    color: 'green',
  },
  {
    id: 'I',
    title: 'Investor',
    description: 'Money works for you',
    taxes: 'Lowest taxes (capital gains)',
    time: 'Money makes money',
    security: 'True financial freedom',
    color: 'blue',
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  red: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400' },
  orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400' },
  green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400' },
};

export function CashflowQuadrant() {
  const [activeQuadrant, setActiveQuadrant] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Quadrant grid */}
      <div className="grid grid-cols-2 gap-1 w-48">
        {quadrants.map((q) => {
          const colors = colorMap[q.color];
          const isActive = activeQuadrant === q.id;

          return (
            <motion.button
              key={q.id}
              onClick={() => setActiveQuadrant(isActive ? null : q.id)}
              className={`p-4 rounded-lg border transition-all ${
                isActive ? colors.bg : 'bg-[#111113]'
              } ${isActive ? colors.border : 'border-gray-800'}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className={`text-2xl font-bold ${isActive ? colors.text : 'text-gray-500'}`}>
                {q.id}
              </span>
              <p className={`text-[10px] mt-1 ${isActive ? colors.text : 'text-gray-600'}`}>
                {q.title}
              </p>
            </motion.button>
          );
        })}
      </div>

      {/* Labels */}
      <div className="flex gap-8 text-[10px] text-gray-500">
        <div>
          <p className="text-center">← Left Side</p>
          <p className="text-center">Trade time for $</p>
        </div>
        <div>
          <p className="text-center">Right Side →</p>
          <p className="text-center">Systems/$ work for you</p>
        </div>
      </div>

      {/* Detail panel */}
      {activeQuadrant && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`w-full max-w-xs p-4 rounded-lg border ${
            colorMap[quadrants.find((q) => q.id === activeQuadrant)!.color].bg
          } ${colorMap[quadrants.find((q) => q.id === activeQuadrant)!.color].border}`}
        >
          {(() => {
            const q = quadrants.find((q) => q.id === activeQuadrant)!;
            const colors = colorMap[q.color];
            return (
              <>
                <p className={`text-sm font-medium ${colors.text} mb-2`}>
                  {q.id} - {q.title}
                </p>
                <p className="text-xs text-gray-300 mb-3">{q.description}</p>
                <div className="space-y-1 text-[10px]">
                  <p><span className="text-gray-500">Taxes:</span> <span className="text-gray-300">{q.taxes}</span></p>
                  <p><span className="text-gray-500">Time:</span> <span className="text-gray-300">{q.time}</span></p>
                  <p><span className="text-gray-500">Security:</span> <span className="text-gray-300">{q.security}</span></p>
                </div>
              </>
            );
          })()}
        </motion.div>
      )}

      {/* Goal */}
      <div className="w-full max-w-xs bg-green-500/10 border border-green-500/30 rounded-lg p-3">
        <p className="text-[10px] text-green-400 text-center">
          🎯 Goal: Move from left side (E/S) to right side (B/I) where money works for you
        </p>
      </div>

      <p className="text-[10px] text-gray-500 text-center">
        From "Rich Dad Poor Dad" by Robert Kiyosaki
      </p>
    </div>
  );
}

export default CashflowQuadrant;
