import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Nonviolent Communication - Requests vs Demands
const scenarios = [
  {
    situation: 'You want help with dishes',
    demand: 'You need to help with the dishes!',
    request: 'Would you be willing to help with the dishes after dinner?',
  },
  {
    situation: 'You want more attention',
    demand: 'You never spend time with me!',
    request: 'I\'d love to spend an evening together this week. Would you be open to that?',
  },
  {
    situation: 'You want quiet to focus',
    demand: 'Stop making so much noise!',
    request: 'I\'m trying to focus. Would you mind keeping it down for the next hour?',
  },
];

export function RequestVsDemand() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [choice, setChoice] = useState<'demand' | 'request' | null>(null);
  const [theyAnswer, setTheyAnswer] = useState<'yes' | 'no' | null>(null);
  const [showResult, setShowResult] = useState(false);

  const scenario = scenarios[activeScenario];

  const handleChoice = (type: 'demand' | 'request') => {
    setChoice(type);
    setTheyAnswer(null);
    setShowResult(false);
  };

  const handleTheirResponse = (answer: 'yes' | 'no') => {
    setTheyAnswer(answer);
    setShowResult(true);
  };

  const nextScenario = () => {
    setActiveScenario((prev) => (prev + 1) % scenarios.length);
    setChoice(null);
    setTheyAnswer(null);
    setShowResult(false);
  };

  const getResult = () => {
    if (choice === 'demand' && theyAnswer === 'no') {
      return { text: 'Conflict escalates. They feel controlled.', color: 'red' };
    }
    if (choice === 'demand' && theyAnswer === 'yes') {
      return { text: 'They comply but feel resentful.', color: 'amber' };
    }
    if (choice === 'request' && theyAnswer === 'no') {
      return { text: 'You respect their "no" and explore alternatives together.', color: 'green' };
    }
    if (choice === 'request' && theyAnswer === 'yes') {
      return { text: 'They help willingly, feeling respected.', color: 'green' };
    }
    return { text: '', color: 'gray' };
  };

  const result = getResult();

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Scenario */}
      <div className="w-full max-w-xs bg-[#111113] border border-gray-800 rounded-lg p-4 text-center">
        <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-1">
          Scenario {activeScenario + 1}/{scenarios.length}
        </p>
        <p className="text-sm text-gray-300">{scenario.situation}</p>
      </div>

      {/* Choose approach */}
      {!choice && (
        <div className="w-full max-w-xs space-y-2">
          <p className="text-[10px] text-gray-500 text-center">How do you communicate?</p>
          <button
            onClick={() => handleChoice('demand')}
            className="w-full p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-left hover:bg-red-500/20"
          >
            <p className="text-[10px] text-red-400 uppercase mb-1">Demand</p>
            <p className="text-xs text-gray-400 italic">"{scenario.demand}"</p>
          </button>
          <button
            onClick={() => handleChoice('request')}
            className="w-full p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-left hover:bg-green-500/20"
          >
            <p className="text-[10px] text-green-400 uppercase mb-1">Request</p>
            <p className="text-xs text-gray-400 italic">"{scenario.request}"</p>
          </button>
        </div>
      )}

      {/* They respond */}
      {choice && !showResult && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-xs"
        >
          <p className="text-[10px] text-gray-500 text-center mb-2">
            You used a <span className={choice === 'demand' ? 'text-red-400' : 'text-green-400'}>{choice}</span>.
            How do they respond?
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleTheirResponse('yes')}
              className="py-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-xs hover:bg-green-500/30"
            >
              "Yes, okay"
            </button>
            <button
              onClick={() => handleTheirResponse('no')}
              className="py-3 bg-amber-500/20 border border-amber-500/50 rounded-lg text-amber-400 text-xs hover:bg-amber-500/30"
            >
              "No, not now"
            </button>
          </div>
        </motion.div>
      )}

      {/* Result */}
      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`w-full max-w-xs p-4 rounded-lg border ${
              result.color === 'green'
                ? 'bg-green-500/10 border-green-500/30'
                : result.color === 'amber'
                ? 'bg-amber-500/10 border-amber-500/30'
                : 'bg-red-500/10 border-red-500/30'
            }`}
          >
            <p className={`text-xs text-center ${
              result.color === 'green'
                ? 'text-green-400'
                : result.color === 'amber'
                ? 'text-amber-400'
                : 'text-red-400'
            }`}>
              {result.text}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {showResult && (
        <button
          onClick={nextScenario}
          className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-lg text-xs text-blue-400"
        >
          Next Scenario →
        </button>
      )}

      {/* Key insight */}
      <div className="w-full max-w-xs bg-[#111113] border border-gray-800 rounded-lg p-3">
        <p className="text-[10px] text-gray-400 text-center">
          <span className="text-green-400">The difference:</span> If "no" brings punishment or guilt,
          it was a demand disguised as a request.
        </p>
      </div>

      <p className="text-[10px] text-gray-500 text-center">
        From "Nonviolent Communication" by Marshall Rosenberg
      </p>
    </div>
  );
}

export default RequestVsDemand;
