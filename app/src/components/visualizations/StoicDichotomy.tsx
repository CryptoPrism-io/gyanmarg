import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Item {
  text: string;
  category: 'control' | 'no-control';
  explanation: string;
}

const items: Item[] = [
  { text: 'Your thoughts', category: 'control', explanation: 'You choose what to focus on and how to interpret events' },
  { text: 'Your reactions', category: 'control', explanation: 'You decide how to respond to any situation' },
  { text: 'Your effort', category: 'control', explanation: 'You control how hard you work' },
  { text: 'Your values', category: 'control', explanation: 'You choose what matters to you' },
  { text: 'Other people\'s opinions', category: 'no-control', explanation: 'You cannot control what others think of you' },
  { text: 'The weather', category: 'no-control', explanation: 'Nature follows its own course' },
  { text: 'The past', category: 'no-control', explanation: 'What happened has already happened' },
  { text: 'The economy', category: 'no-control', explanation: 'Market forces are beyond individual control' },
  { text: 'Traffic', category: 'no-control', explanation: 'Other drivers make their own choices' },
  { text: 'Your goals', category: 'control', explanation: 'You set your own objectives' },
];

export function StoicDichotomy() {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [controlItems, setControlItems] = useState<string[]>([]);
  const [noControlItems, setNoControlItems] = useState<string[]>([]);
  const [unsortedItems, setUnsortedItems] = useState(items.map((i) => i.text));
  const [showAnswer, setShowAnswer] = useState(false);

  const handleDrop = (item: string, zone: 'control' | 'no-control') => {
    const itemData = items.find((i) => i.text === item);
    if (!itemData) return;

    setUnsortedItems((prev) => prev.filter((i) => i !== item));

    if (zone === 'control') {
      setControlItems((prev) => [...prev, item]);
    } else {
      setNoControlItems((prev) => [...prev, item]);
    }
  };

  const checkScore = () => {
    const correctControl = controlItems.filter(
      (item) => items.find((i) => i.text === item)?.category === 'control'
    ).length;
    const correctNoControl = noControlItems.filter(
      (item) => items.find((i) => i.text === item)?.category === 'no-control'
    ).length;
    return correctControl + correctNoControl;
  };

  const reset = () => {
    setControlItems([]);
    setNoControlItems([]);
    setUnsortedItems(items.map((i) => i.text));
    setShowAnswer(false);
    setSelectedItem(null);
  };

  const isCorrect = (item: string, zone: 'control' | 'no-control') => {
    const itemData = items.find((i) => i.text === item);
    return itemData?.category === zone;
  };

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Title */}
      <div className="text-center">
        <h3 className="text-sm font-bold text-blue-400">The Dichotomy of Control</h3>
        <p className="text-[10px] text-gray-500">The foundation of Stoic wisdom</p>
      </div>

      {/* Quote */}
      <div className="w-full max-w-xs p-3 bg-blue-500/10 border border-blue-500/30 rounded-xl">
        <p className="text-xs text-blue-400 italic text-center">
          "Make the best use of what is in your power, and take the rest as it happens."
        </p>
        <p className="text-[10px] text-gray-500 text-center mt-1">— Epictetus</p>
      </div>

      {/* Two zones */}
      <div className="w-full max-w-xs grid grid-cols-2 gap-3">
        {/* In Your Control */}
        <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-xl min-h-[140px]">
          <p className="text-[10px] text-green-400 font-bold text-center mb-2">✅ IN YOUR CONTROL</p>
          <div className="space-y-1">
            {controlItems.map((item) => (
              <motion.div
                key={item}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`p-1.5 rounded text-[9px] text-center ${
                  showAnswer
                    ? isCorrect(item, 'control')
                      ? 'bg-green-500/30 text-green-300'
                      : 'bg-red-500/30 text-red-300'
                    : 'bg-green-500/20 text-green-300'
                }`}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Not in Your Control */}
        <div className="p-3 bg-gray-500/10 border border-gray-500/30 rounded-xl min-h-[140px]">
          <p className="text-[10px] text-gray-400 font-bold text-center mb-2">❌ NOT IN YOUR CONTROL</p>
          <div className="space-y-1">
            {noControlItems.map((item) => (
              <motion.div
                key={item}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`p-1.5 rounded text-[9px] text-center ${
                  showAnswer
                    ? isCorrect(item, 'no-control')
                      ? 'bg-green-500/30 text-green-300'
                      : 'bg-red-500/30 text-red-300'
                    : 'bg-gray-500/20 text-gray-300'
                }`}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Unsorted items */}
      {unsortedItems.length > 0 && (
        <div className="w-full max-w-xs">
          <p className="text-[10px] text-gray-500 mb-2 text-center">Click an item, then choose a category:</p>
          <div className="flex flex-wrap gap-1.5 justify-center">
            {unsortedItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => setSelectedItem(items.find((i) => i.text === item) || null)}
                className={`px-2 py-1 rounded text-[10px] border transition-all ${
                  selectedItem?.text === item
                    ? 'bg-amber-500/20 border-amber-500 text-amber-400'
                    : 'bg-[#111113] border-gray-700 text-gray-400 hover:border-gray-600'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* Sorting buttons */}
      {selectedItem && (
        <div className="flex gap-2">
          <button
            onClick={() => {
              handleDrop(selectedItem.text, 'control');
              setSelectedItem(null);
            }}
            className="px-4 py-2 rounded-lg text-xs bg-green-500/20 border border-green-500/50 text-green-400"
          >
            ✅ In Control
          </button>
          <button
            onClick={() => {
              handleDrop(selectedItem.text, 'no-control');
              setSelectedItem(null);
            }}
            className="px-4 py-2 rounded-lg text-xs bg-gray-500/20 border border-gray-500/50 text-gray-400"
          >
            ❌ Not in Control
          </button>
        </div>
      )}

      {/* Check/Reset buttons */}
      {unsortedItems.length === 0 && (
        <div className="flex gap-2">
          {!showAnswer ? (
            <button
              onClick={() => setShowAnswer(true)}
              className="px-4 py-2 rounded-lg text-xs bg-blue-500/20 border border-blue-500/50 text-blue-400"
            >
              Check Answers
            </button>
          ) : (
            <div className="text-center">
              <p className="text-lg font-bold text-blue-400 mb-2">
                Score: {checkScore()}/{items.length}
              </p>
              <button
                onClick={reset}
                className="px-4 py-2 rounded-lg text-xs bg-gray-800 border border-gray-700 text-gray-300"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      )}

      {/* The lesson */}
      <AnimatePresence>
        {showAnswer && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-xs space-y-2"
          >
            <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-xl">
              <p className="text-[10px] text-green-400 font-medium">Focus on what you control:</p>
              <p className="text-[10px] text-gray-400">
                Your thoughts, values, goals, reactions, and effort
              </p>
            </div>
            <div className="p-3 bg-gray-500/10 border border-gray-500/30 rounded-xl">
              <p className="text-[10px] text-gray-400 font-medium">Accept what you cannot:</p>
              <p className="text-[10px] text-gray-500">
                Others' opinions, external events, the past, circumstances
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Key insight */}
      <div className="bg-[#111113] border border-gray-800 rounded-xl p-4 max-w-xs">
        <p className="text-xs text-gray-400 leading-relaxed">
          <span className="text-blue-400 font-medium">Marcus Aurelius:</span> "You have power over
          your mind—not outside events. Realize this, and you will find strength. Waste no more
          time arguing about what a good man should be. Be one."
        </p>
      </div>

      <p className="text-[10px] text-gray-600">From Meditations & The Daily Stoic</p>
    </div>
  );
}

export default StoicDichotomy;
