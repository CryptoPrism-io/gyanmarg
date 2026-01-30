import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Step {
  id: string;
  number: number;
  title: string;
  description: string;
  action: string;
  icon: string;
  color: string;
}

const steps: Step[] = [
  {
    id: 'choose',
    number: 1,
    title: 'Choose a Concept',
    description: 'Pick something you want to understand deeply. Write the topic at the top of a blank page.',
    action: 'Select your target',
    icon: '🎯',
    color: '#3B82F6',
  },
  {
    id: 'teach',
    number: 2,
    title: 'Teach It Simply',
    description: 'Explain the concept as if teaching a 12-year-old. Use simple words, no jargon.',
    action: 'Explain like I\'m 12',
    icon: '👶',
    color: '#22C55E',
  },
  {
    id: 'identify',
    number: 3,
    title: 'Identify Gaps',
    description: 'Notice where you struggle or use complex terms. These are your knowledge gaps.',
    action: 'Find the holes',
    icon: '🔍',
    color: '#F59E0B',
  },
  {
    id: 'simplify',
    number: 4,
    title: 'Review & Simplify',
    description: 'Go back to source material, fill gaps, then simplify your explanation even more.',
    action: 'Refine & repeat',
    icon: '✨',
    color: '#8B5CF6',
  },
];

export function FeynmanTechnique() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const playSequence = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveStep(0);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step >= steps.length) {
        clearInterval(interval);
        setIsAnimating(false);
      } else {
        setActiveStep(step);
      }
    }, 1500);
  };

  const currentStep = steps[activeStep];

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Steps visualization */}
      <div className="flex items-center gap-2">
        {steps.map((step, index) => {
          const isActive = activeStep === index;
          const isPast = activeStep > index;

          return (
            <div key={step.id} className="flex items-center">
              <motion.button
                onClick={() => !isAnimating && setActiveStep(index)}
                className="relative flex flex-col items-center"
                whileHover={{ scale: isAnimating ? 1 : 1.05 }}
                whileTap={{ scale: isAnimating ? 1 : 0.95 }}
              >
                {/* Circle */}
                <motion.div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl border-2 transition-all duration-300"
                  style={{
                    backgroundColor: isActive ? `${step.color}30` : isPast ? `${step.color}20` : '#1F2937',
                    borderColor: isActive ? step.color : isPast ? `${step.color}60` : '#374151',
                    boxShadow: isActive ? `0 0 20px ${step.color}40` : 'none',
                  }}
                  animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {step.icon}
                </motion.div>

                {/* Step number */}
                <div
                  className="absolute -bottom-1 text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                  style={{
                    backgroundColor: isActive || isPast ? step.color : '#374151',
                    color: isActive || isPast ? 'white' : '#9CA3AF',
                  }}
                >
                  {step.number}
                </div>
              </motion.button>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="w-4 h-0.5 mx-1">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      backgroundColor: isPast ? steps[index + 1].color : '#374151',
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isPast ? 1 : 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Step titles */}
      <div className="flex justify-between w-full max-w-xs px-2">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`text-[8px] text-center w-14 ${
              activeStep === index ? 'text-white font-medium' : 'text-gray-500'
            }`}
          >
            {step.title.split(' ')[0]}
          </div>
        ))}
      </div>

      {/* Active step info */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="bg-[#111113] border border-gray-800 rounded-lg p-4 max-w-xs text-center"
        >
          <div className="text-sm font-bold mb-1" style={{ color: currentStep.color }}>
            Step {currentStep.number}: {currentStep.title}
          </div>
          <p className="text-xs text-gray-400 mb-2">{currentStep.description}</p>
          <div
            className="inline-block text-[10px] px-2 py-1 rounded-full"
            style={{
              backgroundColor: `${currentStep.color}20`,
              color: currentStep.color,
            }}
          >
            {currentStep.action}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Play button */}
      <button
        onClick={playSequence}
        disabled={isAnimating}
        className={`text-xs px-4 py-2 rounded-lg transition-all ${
          isAnimating
            ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
            : 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border border-blue-500/30'
        }`}
      >
        {isAnimating ? '↻ Playing...' : '▶ Watch the process'}
      </button>

      <p className="text-[10px] text-gray-500 text-center max-w-xs italic">
        "If you can't explain it simply, you don't understand it well enough." — Richard Feynman
      </p>
    </div>
  );
}

export default FeynmanTechnique;
