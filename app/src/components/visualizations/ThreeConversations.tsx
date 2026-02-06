import { useState } from 'react';
import { motion } from 'framer-motion';

// Difficult Conversations - Three Conversations in One
const layers = [
  {
    name: 'What Happened',
    surface: 'The surface issue',
    questions: ['What actually occurred?', 'Who did what?', 'Who\'s right?'],
    trap: 'Arguing about facts while missing the real issue',
    color: 'blue',
  },
  {
    name: 'Feelings',
    surface: 'Emotions beneath the issue',
    questions: ['How does this make me feel?', 'How do they feel?', 'Are feelings being dismissed?'],
    trap: 'Pretending feelings don\'t matter when they drive everything',
    color: 'rose',
  },
  {
    name: 'Identity',
    surface: 'What this says about me',
    questions: ['Am I competent?', 'Am I a good person?', 'Am I worthy of love?'],
    trap: 'The real reason conversations feel threatening',
    color: 'amber',
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400' },
  rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/30', text: 'text-rose-400' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400' },
};

export function ThreeConversations() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-amber-500/[0.02]" />
      <div className="absolute inset-0 border border-white/[0.1] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-4">
          {/* Iceberg visualization */}
          <div className="relative w-full max-w-xs h-48">
            {/* Water line */}
            <div className="absolute top-12 left-0 right-0 h-px bg-blue-500/30" />
            <p className="absolute top-10 right-2 text-[8px] text-blue-400">Surface</p>
            <p className="absolute top-14 right-2 text-[8px] text-blue-400">Hidden</p>

            {/* Layers */}
            {layers.map((layer, idx) => {
              const colors = colorMap[layer.color];
              const isActive = activeLayer === idx;
              const yPositions = ['top-2', 'top-20', 'top-36'];
              const widths = ['w-3/4', 'w-2/3', 'w-1/2'];
              const opacities = [0.9, 0.7, 0.5];

              return (
                <motion.button
                  key={idx}
                  onClick={() => setActiveLayer(isActive ? null : idx)}
                  className={`absolute left-1/2 -translate-x-1/2 ${yPositions[idx]} ${widths[idx]}
                    py-3 rounded-lg border transition-all backdrop-blur-sm ${
                    isActive ? `${colors.bg} ${colors.border}` : 'bg-white/[0.05] border-white/[0.1]'
                  }`}
                  style={{ opacity: isActive ? 1 : opacities[idx] }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <p className={`text-xs font-medium text-center ${isActive ? colors.text : 'text-gray-400'}`}>
                    {layer.name}
                  </p>
                </motion.button>
              );
            })}
          </div>

          {/* Active layer detail */}
          {activeLayer !== null && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`relative overflow-hidden w-full max-w-xs p-4 rounded-lg border ${colorMap[layers[activeLayer].color].bg} ${colorMap[layers[activeLayer].color].border}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
              <div className="relative z-10">
                <p className={`text-sm font-medium ${colorMap[layers[activeLayer].color].text} mb-2`}>
                  The {layers[activeLayer].name} Conversation
                </p>
                <p className="text-xs text-gray-400 mb-3">{layers[activeLayer].surface}</p>

                <p className="text-[10px] text-gray-500 uppercase mb-1">Key questions:</p>
                <ul className="space-y-1 mb-3">
                  {layers[activeLayer].questions.map((q, idx) => (
                    <li key={idx} className="text-[10px] text-gray-300">• {q}</li>
                  ))}
                </ul>

                <div className="relative overflow-hidden bg-red-500/10 border border-red-500/30 rounded p-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent" />
                  <p className="relative z-10 text-[10px] text-red-400">
                    ⚠️ Trap: {layers[activeLayer].trap}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Key insight */}
          <div className="relative overflow-hidden w-full max-w-xs rounded-lg p-3">
            <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-sm" />
            <div className="absolute inset-0 border border-white/[0.08] rounded-lg" />
            <p className="relative z-10 text-[10px] text-gray-400 text-center">
              💡 We often argue about "what happened" when the real issue is feelings or identity.
              Address all three layers.
            </p>
          </div>

          <p className="text-[10px] text-gray-500 text-center">
            From "Difficult Conversations" by Douglas Stone
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThreeConversations;
