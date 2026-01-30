import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Can't Hurt Me - The Cookie Jar
export function CookieJar() {
  const [cookies, setCookies] = useState<string[]>([]);
  const [newCookie, setNewCookie] = useState('');
  const [isStruggling, setIsStruggling] = useState(false);
  const [selectedCookie, setSelectedCookie] = useState<string | null>(null);

  const addCookie = () => {
    if (newCookie.trim()) {
      setCookies([...cookies, newCookie.trim()]);
      setNewCookie('');
    }
  };

  const sampleCookies = [
    'Finished my first marathon',
    'Overcame fear of public speaking',
    'Got through a difficult breakup',
    'Completed a hard project at work',
    'Stayed disciplined for 30 days',
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Header */}
      <div className="text-center">
        <p className="text-2xl mb-1">🍪</p>
        <p className="text-sm font-medium text-gray-300">The Cookie Jar</p>
        <p className="text-[10px] text-gray-500">
          Your bank of past victories to draw strength from
        </p>
      </div>

      {/* Cookie jar visualization */}
      <div className="relative w-32 h-40">
        {/* Jar */}
        <div className="absolute inset-x-4 bottom-0 h-32 bg-amber-500/10 border-2 border-amber-500/30 rounded-b-3xl rounded-t-lg" />
        {/* Jar lid */}
        <div className="absolute inset-x-2 top-6 h-4 bg-amber-500/20 border-2 border-amber-500/30 rounded-lg" />

        {/* Cookies inside */}
        <div className="absolute inset-x-6 bottom-4 h-24 overflow-hidden flex flex-wrap gap-1 justify-center items-end">
          {cookies.map((_, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              className="w-6 h-6 rounded-full bg-amber-700 border border-amber-600 flex items-center justify-center text-[8px]"
            >
              🍪
            </motion.div>
          ))}
        </div>
      </div>

      {/* Add cookie */}
      <div className="w-full max-w-xs">
        <p className="text-[10px] text-gray-500 mb-2">Add a past victory:</p>
        <div className="flex gap-2">
          <input
            type="text"
            value={newCookie}
            onChange={(e) => setNewCookie(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addCookie()}
            placeholder="I overcame..."
            className="flex-1 px-3 py-2 bg-[#111113] border border-gray-800 rounded-lg text-xs text-gray-300 placeholder-gray-600 focus:border-amber-500/50 focus:outline-none"
          />
          <button
            onClick={addCookie}
            className="px-4 py-2 bg-amber-500/20 border border-amber-500/50 rounded-lg text-amber-400 text-xs hover:bg-amber-500/30"
          >
            Add
          </button>
        </div>

        {/* Sample buttons */}
        <div className="flex flex-wrap gap-1 mt-2">
          {sampleCookies.slice(0, 3).map((sample, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCookies((prev) => [...prev, sample]);
              }}
              className="px-2 py-1 bg-gray-800 border border-gray-700 rounded text-[8px] text-gray-500 hover:text-gray-400"
            >
              + {sample.slice(0, 20)}...
            </button>
          ))}
        </div>
      </div>

      {/* Struggle mode */}
      <div className="w-full max-w-xs">
        <button
          onClick={() => setIsStruggling(!isStruggling)}
          className={`w-full py-2 rounded-lg text-xs border transition-all ${
            isStruggling
              ? 'bg-red-500/20 border-red-500/50 text-red-400'
              : 'bg-gray-800 border-gray-700 text-gray-400'
          }`}
        >
          {isStruggling ? "I'm struggling right now..." : 'Simulate: Feeling like quitting'}
        </button>
      </div>

      {/* Draw from jar */}
      <AnimatePresence>
        {isStruggling && cookies.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full max-w-xs"
          >
            <p className="text-[10px] text-red-400 mb-2 text-center">
              Reach into your cookie jar. Remember what you've overcome:
            </p>
            <div className="space-y-2">
              {cookies.map((cookie, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setSelectedCookie(cookie)}
                  className={`w-full p-3 rounded-lg border text-left transition-all ${
                    selectedCookie === cookie
                      ? 'bg-green-500/20 border-green-500/50'
                      : 'bg-[#111113] border-gray-800 hover:border-amber-500/30'
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-xs text-gray-300">🍪 {cookie}</span>
                </motion.button>
              ))}
            </div>

            {selectedCookie && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-3 p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-center"
              >
                <p className="text-xs text-green-400">
                  You did it before. You can do it again. 💪
                </p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {cookies.length === 0 && (
        <p className="text-[10px] text-gray-500 text-center">
          Start filling your jar with past victories
        </p>
      )}

      <p className="text-[10px] text-gray-500 text-center">
        From "Can't Hurt Me" by David Goggins
      </p>
    </div>
  );
}

export default CookieJar;
