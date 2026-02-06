import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Impro - "Yes, And" Principle
const improScenes = [
  {
    offer: 'Look, there\'s a dragon flying overhead!',
    yesAnd: 'Yes! And it\'s heading straight for the village! Quick, grab your sword!',
    noBlock: 'That\'s not a dragon, it\'s just a bird. Anyway, let\'s go to the store.',
  },
  {
    offer: 'I think we should start a bakery together.',
    yesAnd: 'Yes! And our secret ingredient will be grandma\'s honey. We\'ll call it "Sweet Memories"!',
    noBlock: 'No, I don\'t like baking. It\'s too hard. Let\'s do something else.',
  },
  {
    offer: 'You\'re my long-lost brother!',
    yesAnd: 'Yes! And I\'ve spent twenty years searching for you! Where have you been?',
    noBlock: 'No I\'m not. I\'ve never seen you before. You must be confused.',
  },
];

export function YesAndPrinciple() {
  const [currentScene, setCurrentScene] = useState(0);
  const [response, setResponse] = useState<'yesAnd' | 'block' | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [mode, setMode] = useState<'learn' | 'practice'>('learn');

  const scene = improScenes[currentScene];

  const handleResponse = (type: 'yesAnd' | 'block') => {
    setResponse(type);
    setShowResult(true);
  };

  const nextScene = () => {
    setCurrentScene((prev) => (prev + 1) % improScenes.length);
    setResponse(null);
    setShowResult(false);
    setUserInput('');
  };

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/[0.03] via-transparent to-blue-500/[0.02]" />
      <div className="absolute inset-0 border border-white/[0.1] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-4">
          {/* Header */}
          <div className="text-center">
            <p className="text-xs text-gray-400">
              The foundation of improv: Accept and build.
            </p>
          </div>

          {/* Mode toggle */}
          <div className="flex bg-white/[0.03] rounded-lg p-1 border border-white/[0.08] backdrop-blur-sm">
            <button
              onClick={() => setMode('learn')}
              className={`px-4 py-2 rounded-lg text-xs transition-all ${
                mode === 'learn' ? 'bg-amber-500/20 text-amber-400' : 'text-gray-500'
              }`}
            >
              Learn
            </button>
            <button
              onClick={() => setMode('practice')}
              className={`px-4 py-2 rounded-lg text-xs transition-all ${
                mode === 'practice' ? 'bg-green-500/20 text-green-400' : 'text-gray-500'
              }`}
            >
              Practice
            </button>
          </div>

          {/* The offer */}
          <div className="w-full max-w-xs relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.12] to-blue-500/[0.05] backdrop-blur-sm" />
            <div className="absolute inset-0 border border-blue-500/30 rounded-lg" />
            <div className="relative z-10 p-4">
              <p className="text-[10px] text-blue-400 uppercase mb-1">Partner says:</p>
              <p className="text-sm text-gray-300 italic">"{scene.offer}"</p>
            </div>
          </div>

          {mode === 'learn' ? (
            <>
              {/* Response options */}
              {!showResult && (
                <div className="w-full max-w-xs space-y-2">
                  <p className="text-[10px] text-gray-500 text-center">How do you respond?</p>
                  <motion.button
                    onClick={() => handleResponse('yesAnd')}
                    className="w-full p-3 bg-green-500/[0.08] border border-green-500/30 rounded-lg text-left hover:bg-green-500/[0.15] backdrop-blur-sm"
                    whileTap={{ scale: 0.98 }}
                  >
                    <p className="text-[10px] text-green-400 uppercase mb-1">"Yes, And..."</p>
                    <p className="text-xs text-gray-400 italic">"{scene.yesAnd}"</p>
                  </motion.button>
                  <motion.button
                    onClick={() => handleResponse('block')}
                    className="w-full p-3 bg-red-500/[0.08] border border-red-500/30 rounded-lg text-left hover:bg-red-500/[0.15] backdrop-blur-sm"
                    whileTap={{ scale: 0.98 }}
                  >
                    <p className="text-[10px] text-red-400 uppercase mb-1">Block</p>
                    <p className="text-xs text-gray-400 italic">"{scene.noBlock}"</p>
                  </motion.button>
                </div>
              )}

              {/* Result */}
              <AnimatePresence>
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`w-full max-w-xs p-4 rounded-lg border backdrop-blur-sm ${
                      response === 'yesAnd'
                        ? 'bg-green-500/[0.08] border-green-500/30'
                        : 'bg-red-500/[0.08] border-red-500/30'
                    }`}
                  >
                    <p className={`text-sm font-medium ${response === 'yesAnd' ? 'text-green-400' : 'text-red-400'}`}>
                      {response === 'yesAnd' ? 'Scene moves forward!' : 'Scene dies.'}
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      {response === 'yesAnd'
                        ? '"Yes, And" accepts the reality and adds to it. Energy builds.'
                        : 'Blocking rejects the offer. Your partner has nowhere to go.'}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {showResult && (
                <button
                  onClick={nextScene}
                  className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-lg text-xs text-blue-400 backdrop-blur-sm"
                >
                  Next Scene
                </button>
              )}
            </>
          ) : (
            /* Practice mode */
            <div className="w-full max-w-xs space-y-3">
              <div className="space-y-2">
                <p className="text-[10px] text-gray-500">Write your "Yes, And..." response:</p>
                <textarea
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Yes! And..."
                  className="w-full p-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-xs text-gray-300 placeholder-gray-600 focus:border-green-500/50 focus:outline-none resize-none h-20 backdrop-blur-sm"
                />
              </div>

              {userInput.toLowerCase().startsWith('yes') && userInput.length > 15 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-green-500/[0.08] border border-green-500/30 rounded-lg p-3 backdrop-blur-sm"
                >
                  <p className="text-xs text-green-400">Great "Yes, And"!</p>
                  <p className="text-[10px] text-gray-400 mt-1">
                    You accepted the offer and added something new. The scene can continue.
                  </p>
                </motion.div>
              )}

              <button
                onClick={nextScene}
                className="w-full py-2 bg-white/[0.05] border border-white/[0.1] rounded-lg text-xs text-gray-400 backdrop-blur-sm hover:bg-white/[0.08]"
              >
                New Prompt
              </button>
            </div>
          )}

          {/* Key insight */}
          <div className="w-full max-w-xs relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-sm" />
            <div className="absolute inset-0 border border-white/[0.08] rounded-lg" />
            <div className="relative z-10 p-3">
              <p className="text-[10px] text-gray-400 text-center">
                <span className="text-purple-400">Beyond improv:</span> "Yes, And" works in brainstorms,
                negotiations, and relationships. Accept first, then build.
              </p>
            </div>
          </div>

          <p className="text-[10px] text-gray-500 text-center">
            From "Impro" by Keith Johnstone
          </p>
        </div>
      </div>
    </div>
  );
}

export default YesAndPrinciple;
