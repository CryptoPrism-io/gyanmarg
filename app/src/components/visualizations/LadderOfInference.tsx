import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers } from 'lucide-react';

interface LadderStep {
  id: string;
  level: number;
  name: string;
  description: string;
  example: string;
  color: string;
}

const ladderSteps: LadderStep[] = [
  {
    id: 'actions',
    level: 7,
    name: 'Actions',
    description: 'I take actions based on my beliefs',
    example: 'I avoid collaborating with John',
    color: '#EF4444',
  },
  {
    id: 'beliefs',
    level: 6,
    name: 'Beliefs',
    description: 'I adopt beliefs about the world',
    example: 'John doesn\'t respect me or my work',
    color: '#F97316',
  },
  {
    id: 'conclusions',
    level: 5,
    name: 'Conclusions',
    description: 'I draw conclusions',
    example: 'John thinks my ideas are worthless',
    color: '#F59E0B',
  },
  {
    id: 'assumptions',
    level: 4,
    name: 'Assumptions',
    description: 'I make assumptions based on meanings',
    example: 'He did that because he doesn\'t value my input',
    color: '#84CC16',
  },
  {
    id: 'meanings',
    level: 3,
    name: 'Meanings',
    description: 'I add meaning (cultural/personal)',
    example: 'Checking phone = not interested in conversation',
    color: '#22C55E',
  },
  {
    id: 'select',
    level: 2,
    name: 'Select Data',
    description: 'I select data from what I observe',
    example: 'I notice John looked at his phone during my presentation',
    color: '#06B6D4',
  },
  {
    id: 'observe',
    level: 1,
    name: 'Observable Data',
    description: 'Reality and facts everyone can agree on',
    example: 'John glanced at his phone for 3 seconds',
    color: '#3B82F6',
  },
];

export function LadderOfInference() {
  const [highlightedStep, setHighlightedStep] = useState<number | null>(null);
  const [showReflexive, setShowReflexive] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Glassmorphism layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-purple-500/[0.02]" />
      <div className="absolute inset-0 border border-white/[0.1] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
            <Layers className="w-4 h-4 text-blue-400" />
          </div>
          <h3 className="text-sm font-medium text-white/90">Ladder of Inference</h3>
        </div>

        <div className="flex flex-col items-center gap-4">
          {/* Ladder visualization */}
          <div className="w-full max-w-xs relative">
            {/* Reflexive loop arrow */}
            {showReflexive && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute -right-8 top-0 bottom-0 flex items-center"
              >
                <div className="text-amber-500 text-[10px] text-center">
                  <div className="h-full w-4 border-r-2 border-amber-500/50 rounded-r-full" />
                  <span className="absolute top-1/2 -translate-y-1/2 -right-12 rotate-90 whitespace-nowrap">
                    Beliefs affect data selection
                  </span>
                </div>
              </motion.div>
            )}

            {/* Ladder steps */}
            <div className="space-y-1">
              {ladderSteps.map((step) => (
                <motion.button
                  key={step.id}
                  onMouseEnter={() => setHighlightedStep(step.level)}
                  onMouseLeave={() => setHighlightedStep(null)}
                  onClick={() => setHighlightedStep(step.level === highlightedStep ? null : step.level)}
                  className="w-full text-left transition-all"
                  animate={{
                    marginLeft: `${(7 - step.level) * 4}px`,
                    scale: highlightedStep === step.level ? 1.02 : 1,
                  }}
                >
                  <div
                    className={`relative overflow-hidden p-2 rounded-lg transition-all ${
                      highlightedStep === step.level
                        ? 'border-white/30'
                        : ''
                    }`}
                    style={{
                      background: highlightedStep === step.level
                        ? `${step.color}20`
                        : 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                    }}
                  >
                    <div className={`absolute inset-0 border rounded-lg ${highlightedStep === step.level ? 'border-white/30' : 'border-white/[0.08]'}`} />
                    <div className="relative flex items-center gap-2">
                      <div
                        className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold"
                        style={{ backgroundColor: `${step.color}30`, color: step.color }}
                      >
                        {step.level}
                      </div>
                      <span
                        className="text-xs font-medium"
                        style={{ color: highlightedStep === step.level ? step.color : 'rgba(255,255,255,0.6)' }}
                      >
                        {step.name}
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Arrow indicator */}
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-4 -ml-6 text-white/40">
              <span className="text-[10px]">↑</span>
              <span className="text-[10px] [writing-mode:vertical-lr] rotate-180">Climb up</span>
              <span className="text-[10px]">↑</span>
            </div>
          </div>

          {/* Detail view */}
          <AnimatePresence mode="wait">
            {highlightedStep && (
              <motion.div
                key={highlightedStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="w-full max-w-xs relative overflow-hidden rounded-lg"
              >
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
                />
                <div className="absolute inset-0 border border-white/[0.08] rounded-lg" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="relative p-3">
                  {(() => {
                    const step = ladderSteps.find(s => s.level === highlightedStep)!;
                    return (
                      <>
                        <p className="text-xs text-white/60 mb-2">{step.description}</p>
                        <div
                          className="p-2 rounded text-xs border"
                          style={{
                            backgroundColor: `${step.color}10`,
                            borderColor: `${step.color}30`,
                            color: step.color,
                          }}
                        >
                          <span className="text-white/50">Example:</span> "{step.example}"
                        </div>
                      </>
                    );
                  })()}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Reflexive loop toggle */}
          <button
            onClick={() => setShowReflexive(!showReflexive)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
              showReflexive
                ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                : 'border-white/[0.08] text-white/50 hover:text-white/80'
            }`}
          >
            {showReflexive ? '✓ ' : ''}Show reflexive loop
          </button>

          {/* Key insight */}
          <div className="relative overflow-hidden rounded-lg max-w-xs">
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
            />
            <div className="absolute inset-0 border border-white/[0.08] rounded-lg" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="relative p-3">
              <p className="text-[10px] text-white/50 uppercase tracking-wide mb-2">How to use this:</p>
              <ul className="text-xs text-white/60 space-y-1">
                <li>• When in conflict, <span className="text-green-400">climb down</span> to observable facts</li>
                <li>• Ask: "What data led me to this conclusion?"</li>
                <li>• Check if your assumptions are valid</li>
              </ul>
            </div>
          </div>

          <p className="text-[10px] text-white/50 text-center">
            Chris Argyris • Hover/tap to explore each step
          </p>
        </div>
      </div>
    </div>
  );
}

export default LadderOfInference;
