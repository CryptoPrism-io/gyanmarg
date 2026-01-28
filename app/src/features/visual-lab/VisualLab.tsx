import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronLeft, ChevronRight, Lightbulb } from 'lucide-react';
import {
  HabitLoopDiagram,
  ForgettingCurveDiagram,
  CompoundGrowthChart,
  System1vs2Diagram,
} from '@/components/visualizations';

interface VisualizationCard {
  id: string;
  title: string;
  description: string;
  source: string;
  component: React.ComponentType;
  color: string;
}

const visualizations: VisualizationCard[] = [
  {
    id: 'habit-loop',
    title: 'The Habit Loop',
    description: 'Every habit follows a 4-step pattern: Cue → Craving → Response → Reward. Understanding this loop is the key to building good habits and breaking bad ones.',
    source: 'Atomic Habits by James Clear',
    component: HabitLoopDiagram,
    color: '#F59E0B',
  },
  {
    id: 'forgetting-curve',
    title: 'The Forgetting Curve',
    description: 'We forget 70% of what we learn within 24 hours. Spaced repetition combats this by reviewing at optimal intervals, boosting retention to 90%+.',
    source: 'Ebbinghaus Memory Research',
    component: ForgettingCurveDiagram,
    color: '#8B5CF6',
  },
  {
    id: 'compound-growth',
    title: 'The Power of 1%',
    description: 'Getting 1% better every day leads to being 37x better after one year. The same math works in reverse: 1% worse daily makes you nearly zero.',
    source: 'Atomic Habits by James Clear',
    component: CompoundGrowthChart,
    color: '#22C55E',
  },
  {
    id: 'system-thinking',
    title: 'System 1 vs System 2',
    description: 'Your brain has two modes: fast intuition (System 1) and slow analysis (System 2). Knowing when each kicks in helps you think more clearly.',
    source: 'Thinking, Fast and Slow by Daniel Kahneman',
    component: System1vs2Diagram,
    color: '#3B82F6',
  },
];

export function VisualLab() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? visualizations.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === visualizations.length - 1 ? 0 : prev + 1));
  };

  const activeViz = visualizations[activeIndex];
  const ActiveComponent = activeViz.component;

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Sparkles className="w-6 h-6 text-amber-400" />
          <h1 className="text-2xl font-bold text-white">Visual Learning Lab</h1>
        </div>
        <p className="text-gray-400 text-sm max-w-md mx-auto">
          Interactive diagrams that bring key concepts to life. Explore, interact, and deeply understand.
        </p>
      </div>

      {/* Navigation dots */}
      <div className="flex items-center justify-center gap-2">
        {visualizations.map((viz, index) => (
          <button
            key={viz.id}
            onClick={() => setActiveIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === activeIndex
                ? 'w-8 bg-amber-500'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
            style={{
              backgroundColor: index === activeIndex ? viz.color : undefined,
            }}
          />
        ))}
      </div>

      {/* Main content area */}
      <div className="relative">
        {/* Navigation arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10
                   w-10 h-10 rounded-full bg-gray-800/80 hover:bg-gray-700
                   flex items-center justify-center text-gray-400 hover:text-white
                   transition-colors md:flex hidden"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10
                   w-10 h-10 rounded-full bg-gray-800/80 hover:bg-gray-700
                   flex items-center justify-center text-gray-400 hover:text-white
                   transition-colors md:flex hidden"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Visualization card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeViz.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-md mx-auto"
          >
            {/* Title and description */}
            <div className="mb-4">
              <h2
                className="text-lg font-bold mb-1"
                style={{ color: activeViz.color }}
              >
                {activeViz.title}
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                {activeViz.description}
              </p>
            </div>

            {/* Interactive component */}
            <ActiveComponent />

            {/* Source */}
            <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Source: {activeViz.source}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile swipe hint */}
      <div className="flex items-center justify-center gap-4 md:hidden">
        <button
          onClick={goToPrev}
          className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm text-gray-300"
        >
          ← Previous
        </button>
        <button
          onClick={goToNext}
          className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm text-gray-300"
        >
          Next →
        </button>
      </div>

      {/* Quick links grid */}
      <div className="border-t border-gray-800 pt-6 mt-6">
        <h3 className="text-sm font-medium text-gray-400 mb-3 text-center">Jump to concept:</h3>
        <div className="grid grid-cols-2 gap-3">
          {visualizations.map((viz, index) => (
            <motion.button
              key={viz.id}
              onClick={() => setActiveIndex(index)}
              className={`p-3 rounded-lg border text-left transition-all ${
                index === activeIndex
                  ? 'bg-white/5 border-white/20'
                  : 'bg-[#111113] border-gray-800 hover:border-gray-700'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div
                className="text-sm font-medium mb-1"
                style={{ color: viz.color }}
              >
                {viz.title}
              </div>
              <p className="text-xs text-gray-500 line-clamp-2">{viz.source}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VisualLab;
