import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Brain, AlertTriangle, CheckCircle } from 'lucide-react';

interface ThinkingExample {
  question: string;
  system1Answer: string;
  system2Answer: string;
  correctSystem: 1 | 2;
  explanation: string;
}

const examples: ThinkingExample[] = [
  {
    question: 'A bat and ball cost $1.10. The bat costs $1 more than the ball. How much does the ball cost?',
    system1Answer: '10 cents',
    system2Answer: '5 cents',
    correctSystem: 2,
    explanation: 'System 1 jumps to 10¢, but if ball = 10¢ and bat = $1.10, bat is only 90¢ more. Correct: ball = 5¢, bat = $1.05.',
  },
  {
    question: 'Is this person angry or happy? 😠',
    system1Answer: 'Angry (instant)',
    system2Answer: 'Angry (after analysis)',
    correctSystem: 1,
    explanation: 'Facial expressions are processed automatically by System 1 - no deliberation needed.',
  },
  {
    question: 'What is 17 × 24?',
    system1Answer: 'Around 400?',
    system2Answer: '408',
    correctSystem: 2,
    explanation: 'Mental multiplication requires focused attention and step-by-step computation.',
  },
];

interface System1vs2DiagramProps {
  interactive?: boolean;
}

export function System1vs2Diagram({ interactive = true }: System1vs2DiagramProps) {
  const [activeExample, setActiveExample] = useState<number | null>(null);
  const [userGuess, setUserGuess] = useState<1 | 2 | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleGuess = (system: 1 | 2) => {
    setUserGuess(system);
    setShowAnswer(true);
  };

  const resetExample = () => {
    setUserGuess(null);
    setShowAnswer(false);
  };

  const currentExample = activeExample !== null ? examples[activeExample] : null;

  return (
    <div className="bg-[#0A0A0B] rounded-xl p-4 border border-gray-800">
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-sm font-medium text-white mb-1">Two Systems of Thinking</h3>
        <p className="text-xs text-gray-500">From "Thinking, Fast and Slow" by Daniel Kahneman</p>
      </div>

      {/* System comparison */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* System 1 */}
        <motion.div
          className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-5 h-5 text-amber-400" />
            <span className="font-bold text-amber-400">System 1</span>
          </div>
          <ul className="text-xs text-gray-400 space-y-1">
            <li>• Fast & automatic</li>
            <li>• Intuitive</li>
            <li>• Effortless</li>
            <li>• Emotional</li>
            <li>• Prone to biases</li>
          </ul>
        </motion.div>

        {/* System 2 */}
        <motion.div
          className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Brain className="w-5 h-5 text-blue-400" />
            <span className="font-bold text-blue-400">System 2</span>
          </div>
          <ul className="text-xs text-gray-400 space-y-1">
            <li>• Slow & deliberate</li>
            <li>• Analytical</li>
            <li>• Effortful</li>
            <li>• Logical</li>
            <li>• More accurate</li>
          </ul>
        </motion.div>
      </div>

      {/* Flow diagram */}
      <div className="relative h-24 mb-6">
        <svg className="w-full h-full" viewBox="0 0 300 80">
          {/* Input */}
          <rect x="10" y="25" width="60" height="30" rx="4" fill="#333" />
          <text x="40" y="45" fontSize="10" fill="#fff" textAnchor="middle">
            Stimulus
          </text>

          {/* Arrow to split */}
          <path d="M 70 40 L 100 40" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />

          {/* Split point */}
          <circle cx="110" cy="40" r="8" fill="#666" />

          {/* Arrow to System 1 */}
          <motion.path
            d="M 118 35 L 150 15"
            stroke="#F59E0B"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <rect x="150" y="5" width="60" height="25" rx="4" fill="#F59E0B20" stroke="#F59E0B" />
          <text x="180" y="22" fontSize="10" fill="#F59E0B" textAnchor="middle">
            System 1
          </text>

          {/* Arrow to System 2 */}
          <motion.path
            d="M 118 45 L 150 65"
            stroke="#3B82F6"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <rect x="150" y="50" width="60" height="25" rx="4" fill="#3B82F620" stroke="#3B82F6" />
          <text x="180" y="67" fontSize="10" fill="#3B82F6" textAnchor="middle">
            System 2
          </text>

          {/* Arrows from systems to response */}
          <motion.path
            d="M 210 17 L 240 35"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeDasharray="4 2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
          <motion.path
            d="M 210 63 L 240 45"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeDasharray="4 2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />

          {/* Response */}
          <rect x="240" y="25" width="50" height="30" rx="4" fill="#22C55E20" stroke="#22C55E" />
          <text x="265" y="45" fontSize="10" fill="#22C55E" textAnchor="middle">
            Action
          </text>

          {/* Arrow marker */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#666" />
            </marker>
          </defs>
        </svg>
      </div>

      {/* Interactive Examples */}
      {interactive && (
        <div className="border-t border-gray-800 pt-4">
          <p className="text-xs text-gray-500 mb-3 text-center">
            Test yourself: Which system gives the correct answer?
          </p>

          {/* Example selector */}
          {activeExample === null ? (
            <div className="space-y-2">
              {examples.map((example, i) => (
                <motion.button
                  key={i}
                  onClick={() => {
                    setActiveExample(i);
                    resetExample();
                  }}
                  className="w-full text-left bg-[#111113] hover:bg-[#1a1a1a] border border-gray-800
                           rounded-lg p-3 text-xs text-gray-300 transition-colors"
                  whileHover={{ x: 4 }}
                >
                  {example.question}
                </motion.button>
              ))}
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExample}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                {/* Question */}
                <div className="bg-[#111113] border border-gray-800 rounded-lg p-4">
                  <p className="text-sm text-white">{currentExample?.question}</p>
                </div>

                {/* Answer options */}
                {!showAnswer ? (
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => handleGuess(1)}
                      className="bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30
                               rounded-lg p-3 transition-colors"
                    >
                      <Zap className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                      <p className="text-xs text-amber-400 font-medium">System 1</p>
                      <p className="text-xs text-gray-500 mt-1">{currentExample?.system1Answer}</p>
                    </button>
                    <button
                      onClick={() => handleGuess(2)}
                      className="bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30
                               rounded-lg p-3 transition-colors"
                    >
                      <Brain className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                      <p className="text-xs text-blue-400 font-medium">System 2</p>
                      <p className="text-xs text-gray-500 mt-1">{currentExample?.system2Answer}</p>
                    </button>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-3"
                  >
                    {/* Result */}
                    <div
                      className={`flex items-center gap-2 p-3 rounded-lg ${
                        userGuess === currentExample?.correctSystem
                          ? 'bg-green-500/10 border border-green-500/30'
                          : 'bg-red-500/10 border border-red-500/30'
                      }`}
                    >
                      {userGuess === currentExample?.correctSystem ? (
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-red-400" />
                      )}
                      <span
                        className={`text-xs font-medium ${
                          userGuess === currentExample?.correctSystem ? 'text-green-400' : 'text-red-400'
                        }`}
                      >
                        {userGuess === currentExample?.correctSystem ? 'Correct!' : 'Not quite!'}
                        {' '}System {currentExample?.correctSystem} is more reliable here.
                      </span>
                    </div>

                    {/* Explanation */}
                    <p className="text-xs text-gray-400">{currentExample?.explanation}</p>

                    {/* Navigation */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setActiveExample(null);
                          resetExample();
                        }}
                        className="flex-1 py-2 bg-gray-800 hover:bg-gray-700 text-white text-xs
                                 rounded-lg transition-colors"
                      >
                        Back to Examples
                      </button>
                      {activeExample < examples.length - 1 && (
                        <button
                          onClick={() => {
                            setActiveExample(activeExample + 1);
                            resetExample();
                          }}
                          className="flex-1 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs
                                   rounded-lg transition-colors"
                        >
                          Next Example →
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      )}
    </div>
  );
}

export default System1vs2Diagram;
