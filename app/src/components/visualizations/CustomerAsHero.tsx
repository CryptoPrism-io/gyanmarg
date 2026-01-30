import { useState } from 'react';
import { motion } from 'framer-motion';

// Building a StoryBrand - Customer is the Hero, You are the Guide
const comparisons = [
  {
    aspect: 'Website headline',
    wrong: '"We are the leading provider of innovative solutions"',
    right: '"Get back 10 hours every week with our automation"',
    principle: 'Talk about THEIR transformation, not YOUR credentials',
  },
  {
    aspect: 'About page',
    wrong: '"Founded in 2010, we have 500 employees and 3 offices..."',
    right: '"We exist because we believe you shouldn\'t waste time on busywork"',
    principle: 'Make it about WHY you help them, not WHO you are',
  },
  {
    aspect: 'Product description',
    wrong: '"Award-winning, AI-powered, cloud-based platform"',
    right: '"Finally finish your work by 5pm. Every day."',
    principle: 'Benefits they feel, not features you\'re proud of',
  },
  {
    aspect: 'Testimonial focus',
    wrong: '"Great company, very professional team"',
    right: '"I used to work until midnight. Now I\'m home for dinner."',
    principle: 'Show the customer\'s transformation, not your praise',
  },
];

export function CustomerAsHero() {
  const [activeComparison, setActiveComparison] = useState(0);
  const [showCorrect, setShowCorrect] = useState(false);

  const comparison = comparisons[activeComparison];

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Header */}
      <div className="text-center">
        <p className="text-xs text-gray-400">
          In every story, there's a <span className="text-blue-400">hero</span> and a{' '}
          <span className="text-amber-400">guide</span>.
        </p>
        <p className="text-[10px] text-gray-500">Your customer is the hero. You are Yoda, not Luke.</p>
      </div>

      {/* Visual metaphor */}
      <div className="w-full max-w-xs grid grid-cols-2 gap-3">
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 text-center">
          <p className="text-2xl mb-1">🦸</p>
          <p className="text-xs text-blue-400 font-medium">The Hero</p>
          <p className="text-[10px] text-gray-500">Your Customer</p>
          <p className="text-[8px] text-gray-600 mt-1">Has a problem, needs transformation</p>
        </div>
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 text-center">
          <p className="text-2xl mb-1">🧙</p>
          <p className="text-xs text-amber-400 font-medium">The Guide</p>
          <p className="text-[10px] text-gray-500">Your Brand</p>
          <p className="text-[8px] text-gray-600 mt-1">Has empathy, provides the plan</p>
        </div>
      </div>

      {/* Comparison selector */}
      <div className="flex gap-1">
        {comparisons.map((_, idx) => (
          <button
            key={idx}
            onClick={() => { setActiveComparison(idx); setShowCorrect(false); }}
            className={`w-8 h-8 rounded-lg border text-xs ${
              idx === activeComparison
                ? 'bg-amber-500/20 border-amber-500/50 text-amber-400'
                : 'bg-[#111113] border-gray-800 text-gray-500'
            }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      {/* Comparison detail */}
      <div className="w-full max-w-xs space-y-3">
        <div className="bg-[#111113] border border-gray-800 rounded-lg p-3 text-center">
          <p className="text-xs text-gray-400">{comparison.aspect}</p>
        </div>

        {/* Wrong way */}
        <motion.div
          className={`p-3 rounded-lg border transition-all ${
            showCorrect ? 'bg-red-500/5 border-red-500/20' : 'bg-red-500/10 border-red-500/30'
          }`}
        >
          <p className="text-[10px] text-red-400 uppercase mb-1">❌ Brand as Hero:</p>
          <p className="text-xs text-gray-400 italic">{comparison.wrong}</p>
        </motion.div>

        {/* Reveal button or correct way */}
        {!showCorrect ? (
          <motion.button
            onClick={() => setShowCorrect(true)}
            className="w-full py-2 bg-green-500/20 border border-green-500/50 rounded-lg text-xs text-green-400"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Show Better Version
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3"
          >
            <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
              <p className="text-[10px] text-green-400 uppercase mb-1">✓ Customer as Hero:</p>
              <p className="text-xs text-gray-300 italic">{comparison.right}</p>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-2">
              <p className="text-[10px] text-purple-400">
                💡 {comparison.principle}
              </p>
            </div>
          </motion.div>
        )}
      </div>

      <p className="text-[10px] text-gray-500 text-center">
        From "Building a StoryBrand" by Donald Miller
      </p>
    </div>
  );
}

export default CustomerAsHero;
