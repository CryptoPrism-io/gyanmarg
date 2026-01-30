import { useState } from 'react';
import { motion } from 'framer-motion';

// Crucial Conversations - STATE Your Path
const stateSteps = [
  {
    letter: 'S',
    name: 'Share your facts',
    description: 'Start with the least controversial, most persuasive elements',
    example: 'I noticed you\'ve been late to three meetings this week.',
    tip: 'Facts are hard to argue with. Lead with observable data.',
    color: 'blue',
  },
  {
    letter: 'T',
    name: 'Tell your story',
    description: 'Explain your conclusions and interpretations',
    example: 'I\'m starting to wonder if the project is still a priority for you.',
    tip: 'Stories are your interpretation. Own them as such.',
    color: 'purple',
  },
  {
    letter: 'A',
    name: 'Ask for others\' paths',
    description: 'Invite others to share their facts and stories',
    example: 'What\'s your perspective? Am I missing something?',
    tip: 'Genuine curiosity is essential. You might be wrong.',
    color: 'amber',
  },
  {
    letter: 'T',
    name: 'Talk tentatively',
    description: 'State your story as story, not as fact',
    example: 'Maybe I\'m wrong, but it seems like...',
    tip: 'Softening language invites dialogue instead of defense.',
    color: 'rose',
  },
  {
    letter: 'E',
    name: 'Encourage testing',
    description: 'Make it safe for others to express differing views',
    example: 'I\'d really like to hear a different view if you see it differently.',
    tip: 'Create safety for disagreement.',
    color: 'green',
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400' },
  rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/30', text: 'text-rose-400' },
  green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400' },
};

export function STATEPath() {
  const [activeStep, setActiveStep] = useState(0);

  const step = stateSteps[activeStep];
  const colors = colorMap[step.color];

  return (
    <div className="flex flex-col items-center gap-4">
      {/* STATE letters */}
      <div className="flex gap-1">
        {stateSteps.map((s, idx) => {
          const c = colorMap[s.color];
          const isActive = idx === activeStep;
          return (
            <motion.button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`w-10 h-12 rounded-lg border-2 flex items-center justify-center transition-all ${
                isActive ? `${c.bg} ${c.border}` : 'border-gray-700 bg-[#111113]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={`text-xl font-bold ${isActive ? c.text : 'text-gray-500'}`}>
                {s.letter}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Step detail */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`w-full max-w-xs ${colors.bg} border ${colors.border} rounded-lg p-4`}
      >
        <p className={`text-sm font-medium ${colors.text}`}>
          {step.letter} - {step.name}
        </p>
        <p className="text-xs text-gray-400 mt-1 mb-3">{step.description}</p>

        <div className="bg-black/20 rounded-lg p-3 mb-3">
          <p className="text-[10px] text-gray-500 uppercase mb-1">Example</p>
          <p className="text-xs text-gray-300 italic">"{step.example}"</p>
        </div>

        <div className={`text-[10px] ${colors.text}`}>
          💡 {step.tip}
        </div>
      </motion.div>

      {/* Navigation */}
      <div className="flex gap-2">
        <button
          onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
          disabled={activeStep === 0}
          className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-xs text-gray-400 disabled:opacity-50"
        >
          ← Previous
        </button>
        <button
          onClick={() => setActiveStep((prev) => Math.min(stateSteps.length - 1, prev + 1))}
          disabled={activeStep === stateSteps.length - 1}
          className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-xs text-gray-400 disabled:opacity-50"
        >
          Next →
        </button>
      </div>

      <p className="text-[10px] text-gray-500 text-center">
        From "Crucial Conversations" by Kerry Patterson
      </p>
    </div>
  );
}

export default STATEPath;
