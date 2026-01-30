import { useState } from 'react';
import { motion } from 'framer-motion';

// Peak Performance - Purpose (Self-Transcending)
const purposeLevels = [
  {
    level: 'Self-Transcending',
    description: 'Contributing to something larger than yourself',
    example: 'Making science accessible to everyone',
    power: 'Most sustainable and powerful motivation',
    color: 'purple',
  },
  {
    level: 'Self-Actualizing',
    description: 'Reaching your full potential',
    example: 'Becoming the best researcher I can be',
    power: 'Strong but can plateau when "achieved"',
    color: 'blue',
  },
  {
    level: 'Self-Serving',
    description: 'Personal gain, status, wealth',
    example: 'Getting famous and making money',
    power: 'Weakest long-term motivation',
    color: 'amber',
  },
];

export function PurposePyramid() {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [userPurpose, setUserPurpose] = useState('');
  const [showAnalysis, setShowAnalysis] = useState(false);

  const colorMap: Record<string, { bg: string; border: string; text: string }> = {
    purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400' },
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400' },
    amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400' },
  };

  const analyzeLevel = () => {
    const lower = userPurpose.toLowerCase();
    if (lower.includes('help') || lower.includes('serve') || lower.includes('contribute') ||
        lower.includes('impact') || lower.includes('change') || lower.includes('others')) {
      return 0; // Self-transcending
    }
    if (lower.includes('best') || lower.includes('master') || lower.includes('potential') ||
        lower.includes('grow') || lower.includes('learn')) {
      return 1; // Self-actualizing
    }
    return 2; // Self-serving
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Header */}
      <div className="text-center">
        <p className="text-xs text-gray-400">
          Purpose powers sustained performance. But not all purposes are equal.
        </p>
      </div>

      {/* Purpose pyramid */}
      <div className="w-full max-w-xs space-y-2">
        {purposeLevels.map((level, idx) => {
          const colors = colorMap[level.color];
          const isSelected = selectedLevel === idx;
          const widths = ['w-2/3', 'w-5/6', 'w-full'];

          return (
            <motion.button
              key={idx}
              onClick={() => setSelectedLevel(isSelected ? null : idx)}
              className={`${widths[idx]} mx-auto py-3 px-4 rounded-lg border transition-all ${
                isSelected ? `${colors.bg} ${colors.border}` : 'bg-[#111113] border-gray-800 hover:border-gray-700'
              }`}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <p className={`text-xs font-medium ${isSelected ? colors.text : 'text-gray-400'}`}>
                {level.level}
              </p>
            </motion.button>
          );
        })}
      </div>

      {/* Selected level detail */}
      {selectedLevel !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`w-full max-w-xs ${colorMap[purposeLevels[selectedLevel].color].bg} border ${colorMap[purposeLevels[selectedLevel].color].border} rounded-lg p-4`}
        >
          <p className={`text-sm font-medium ${colorMap[purposeLevels[selectedLevel].color].text} mb-2`}>
            {purposeLevels[selectedLevel].level}
          </p>
          <p className="text-xs text-gray-400 mb-2">
            {purposeLevels[selectedLevel].description}
          </p>
          <div className="bg-black/20 rounded p-2 mb-2">
            <p className="text-[10px] text-gray-500">Example:</p>
            <p className="text-xs text-gray-300 italic">"{purposeLevels[selectedLevel].example}"</p>
          </div>
          <p className="text-[10px] text-gray-500">
            Power: {purposeLevels[selectedLevel].power}
          </p>
        </motion.div>
      )}

      {/* Self-assessment */}
      <div className="w-full max-w-xs space-y-2">
        <p className="text-[10px] text-gray-500">Analyze your purpose:</p>
        <textarea
          value={userPurpose}
          onChange={(e) => { setUserPurpose(e.target.value); setShowAnalysis(false); }}
          placeholder="Write your purpose or 'why' here..."
          className="w-full p-3 bg-[#111113] border border-gray-800 rounded-lg text-xs text-gray-300 placeholder-gray-600 focus:border-purple-500/50 focus:outline-none resize-none h-16"
        />
        {userPurpose.length > 10 && !showAnalysis && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setShowAnalysis(true)}
            className="w-full py-2 bg-purple-500/20 border border-purple-500/50 rounded-lg text-xs text-purple-400"
          >
            Analyze My Purpose
          </motion.button>
        )}
      </div>

      {showAnalysis && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-xs bg-purple-500/10 border border-purple-500/30 rounded-lg p-4"
        >
          <p className="text-xs text-purple-400 mb-2">
            Your purpose sounds {purposeLevels[analyzeLevel()].level.toLowerCase()}:
          </p>
          <p className="text-[10px] text-gray-400 mb-2">
            {purposeLevels[analyzeLevel()].power}
          </p>
          {analyzeLevel() > 0 && (
            <p className="text-[10px] text-gray-500">
              To elevate: Try reframing around how your work helps others or contributes to something larger.
            </p>
          )}
        </motion.div>
      )}

      <p className="text-[10px] text-gray-500 text-center">
        From "Peak Performance" by Brad Stulberg
      </p>
    </div>
  );
}

export default PurposePyramid;
