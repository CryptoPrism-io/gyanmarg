import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen } from 'lucide-react';

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
    icon: 'target',
    color: '#3B82F6',
  },
  {
    id: 'teach',
    number: 2,
    title: 'Teach It Simply',
    description: 'Explain the concept as if teaching a 12-year-old. Use simple words, no jargon.',
    action: 'Explain like I\'m 12',
    icon: 'child',
    color: '#22C55E',
  },
  {
    id: 'identify',
    number: 3,
    title: 'Identify Gaps',
    description: 'Notice where you struggle or use complex terms. These are your knowledge gaps.',
    action: 'Find the holes',
    icon: 'search',
    color: '#F59E0B',
  },
  {
    id: 'simplify',
    number: 4,
    title: 'Review & Simplify',
    description: 'Go back to source material, fill gaps, then simplify your explanation even more.',
    action: 'Refine & repeat',
    icon: 'sparkles',
    color: '#8B5CF6',
  },
];

const stepEmojis = ['target', 'child', 'search', 'sparkles'];

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
    <div className="relative overflow-hidden rounded-2xl">
      {/* Dark Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-purple-500/[0.02]" />
      <div className="absolute inset-0 border border-white/[0.1] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center border border-blue-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
            <BookOpen className="w-4 h-4 text-blue-400" />
          </div>
          <span className="text-sm font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Feynman Technique
          </span>
        </div>

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
                        background: isActive
                          ? `linear-gradient(135deg, ${step.color}30 0%, ${step.color}10 100%)`
                          : isPast
                          ? `linear-gradient(135deg, ${step.color}20 0%, ${step.color}08 100%)`
                          : 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                        borderColor: isActive ? step.color : isPast ? `${step.color}60` : 'rgba(255,255,255,0.1)',
                        boxShadow: isActive ? `0 0 20px ${step.color}40` : 'none',
                      }}
                      animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {stepEmojis[index] === 'target' && <span>&#127919;</span>}
                      {stepEmojis[index] === 'child' && <span>&#128118;</span>}
                      {stepEmojis[index] === 'search' && <span>&#128269;</span>}
                      {stepEmojis[index] === 'sparkles' && <span>&#10024;</span>}
                    </motion.div>

                    {/* Step number */}
                    <div
                      className="absolute -bottom-1 text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                      style={{
                        backgroundColor: isActive || isPast ? step.color : 'rgba(255,255,255,0.1)',
                        color: isActive || isPast ? 'white' : 'rgba(255,255,255,0.6)',
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
                          backgroundColor: isPast ? steps[index + 1].color : 'rgba(255,255,255,0.1)',
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
                  activeStep === index ? 'text-white font-medium' : 'text-white/50'
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
              className="relative overflow-hidden rounded-xl p-4 max-w-xs text-center border border-white/[0.08]"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="text-sm font-bold mb-1" style={{ color: currentStep.color }}>
                Step {currentStep.number}: {currentStep.title}
              </div>
              <p className="text-xs text-white/60 mb-2">{currentStep.description}</p>
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
                ? 'bg-white/[0.04] text-white/50 cursor-not-allowed border border-white/[0.06]'
                : 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border border-blue-500/30'
            }`}
          >
            {isAnimating ? 'Playing...' : 'Watch the process'}
          </button>

          <p className="text-[10px] text-white/50 text-center max-w-xs italic">
            "If you can't explain it simply, you don't understand it well enough." - Richard Feynman
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeynmanTechnique;
