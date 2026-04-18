import { useState } from 'react';
import { motion } from 'framer-motion';

// Building a StoryBrand - The 7-Part Framework
const sbSteps = [
  {
    number: 1,
    name: 'A Character',
    role: 'The Hero (Your Customer)',
    question: 'Who is the hero of your story?',
    mistake: 'Making your brand the hero instead of the customer',
    example: 'A busy mom who wants healthy meals for her family',
    color: 'blue',
  },
  {
    number: 2,
    name: 'Has a Problem',
    role: 'External, Internal, Philosophical',
    question: 'What problem do they face?',
    mistake: 'Only addressing external problems, missing internal frustrations',
    example: 'External: No time. Internal: Feels like a bad mom. Philosophical: Families deserve better.',
    color: 'red',
  },
  {
    number: 3,
    name: 'Meets a Guide',
    role: 'That\'s You (The Brand)',
    question: 'How do you show empathy & authority?',
    mistake: 'Positioning yourself as another hero instead of the guide',
    example: '"We know how hard it is. We\'ve helped 10,000 families eat better."',
    color: 'amber',
  },
  {
    number: 4,
    name: 'Who Gives Them a Plan',
    role: 'Simple Steps',
    question: 'What are the 3 simple steps?',
    mistake: 'Making the process seem complicated',
    example: '1. Choose your meals. 2. We deliver ingredients. 3. Cook in 20 minutes.',
    color: 'green',
  },
  {
    number: 5,
    name: 'And Calls Them to Action',
    role: 'Direct CTA',
    question: 'What should they do RIGHT NOW?',
    mistake: 'Weak or passive calls to action',
    example: '"Start Your Free Week" (not "Learn More")',
    color: 'purple',
  },
  {
    number: 6,
    name: 'That Helps Them Avoid Failure',
    role: 'Stakes',
    question: 'What happens if they DON\'T act?',
    mistake: 'Not making the stakes clear',
    example: 'Continued stress, unhealthy family, missing precious moments',
    color: 'rose',
  },
  {
    number: 7,
    name: 'And Ends in Success',
    role: 'Transformation',
    question: 'What does their life look like after?',
    mistake: 'Not painting a vivid picture of success',
    example: 'Peaceful dinners, healthy kids, feeling like an amazing parent',
    color: 'emerald',
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400' },
  red: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400' },
  green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400' },
  rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/30', text: 'text-rose-400' },
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400' },
};

export function StoryBrandFramework() {
  const [activeStep, setActiveStep] = useState(0);

  const step = sbSteps[activeStep];
  const colors = colorMap[step.color];

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-emerald-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-4">
          {/* Header */}
          <div className="text-center">
            <p className="text-xs text-[var(--viz-muted)]">
              Every great story follows this pattern. So should your marketing.
            </p>
          </div>

          {/* Step selector */}
          <div className="flex gap-1 flex-wrap justify-center">
            {sbSteps.map((s, idx) => {
              const c = colorMap[s.color];
              const isActive = idx === activeStep;
              return (
                <motion.button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-8 h-8 rounded-lg border text-xs font-medium transition-all backdrop-blur-sm ${
                    isActive ? `${c.bg} ${c.border} ${c.text}` : 'bg-[var(--viz-tile)] border-[var(--viz-border)] text-[var(--viz-muted)] hover:border-[var(--viz-border-light)]'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {s.number}
                </motion.button>
              );
            })}
          </div>

          {/* Active step detail */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-xs relative overflow-hidden rounded-lg"
          >
            <div className={`absolute inset-0 backdrop-blur-sm ${colors.bg}`} />
            <div className={`absolute inset-0 border rounded-lg ${colors.border}`} />
            <div className="relative z-10 p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-lg font-bold ${colors.text}`}>{step.number}</span>
                <span className={`text-sm font-medium ${colors.text}`}>{step.name}</span>
              </div>
              <p className="text-xs text-[var(--viz-muted)] mb-3">{step.role}</p>

              <div className="space-y-3">
                <div>
                  <p className="text-[10px] text-[var(--viz-muted)] uppercase">Ask yourself:</p>
                  <p className="text-xs text-[var(--viz-secondary)]">{step.question}</p>
                </div>

                <div className="bg-[var(--viz-inner)] rounded-lg p-2 backdrop-blur-sm">
                  <p className="text-[10px] text-[var(--viz-muted)] uppercase">Example:</p>
                  <p className="text-[10px] text-[var(--viz-muted)] italic">{step.example}</p>
                </div>

                <div className="bg-red-500/[0.08] border border-red-500/20 rounded p-2 backdrop-blur-sm">
                  <p className="text-[10px] text-red-400">
                    Common mistake: {step.mistake}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className="px-3 py-1.5 bg-[var(--viz-tile)] border border-[var(--viz-border-light)] rounded-lg text-xs text-[var(--viz-muted)] disabled:opacity-50 backdrop-blur-sm hover:bg-[var(--viz-tile-md)]"
            >
              Previous
            </button>
            <button
              onClick={() => setActiveStep((prev) => Math.min(sbSteps.length - 1, prev + 1))}
              disabled={activeStep === sbSteps.length - 1}
              className="px-3 py-1.5 bg-[var(--viz-tile)] border border-[var(--viz-border-light)] rounded-lg text-xs text-[var(--viz-muted)] disabled:opacity-50 backdrop-blur-sm hover:bg-[var(--viz-tile-md)]"
            >
              Next
            </button>
          </div>

          <p className="text-[10px] text-[var(--viz-muted)] text-center">
            From "Building a StoryBrand" by Donald Miller
          </p>
        </div>
      </div>
    </div>
  );
}

export default StoryBrandFramework;
