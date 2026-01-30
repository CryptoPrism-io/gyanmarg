import { useState } from 'react';
import { motion } from 'framer-motion';

interface NegotiationScenario {
  id: string;
  situation: string;
  yourPosition: string;
  theirOffer: number;
  batnas: { option: string; value: number }[];
  bestBatna: number;
}

const scenarios: NegotiationScenario[] = [
  {
    id: 'job',
    situation: 'Job Offer Negotiation',
    yourPosition: 'You want $120k',
    theirOffer: 100000,
    batnas: [
      { option: 'Keep current job', value: 85000 },
      { option: 'Other offer from Company B', value: 105000 },
      { option: 'Freelance consulting', value: 90000 },
    ],
    bestBatna: 105000,
  },
  {
    id: 'house',
    situation: 'House Purchase',
    yourPosition: 'You want to pay $400k',
    theirOffer: 450000,
    batnas: [
      { option: 'Similar house nearby', value: 420000 },
      { option: 'Keep renting', value: 380000 },
      { option: 'Different neighborhood', value: 390000 },
    ],
    bestBatna: 420000,
  },
  {
    id: 'contract',
    situation: 'Client Contract',
    yourPosition: 'You want $50k for project',
    theirOffer: 35000,
    batnas: [
      { option: 'Other client interested', value: 45000 },
      { option: 'Smaller scope project', value: 25000 },
      { option: 'Focus on own product', value: 40000 },
    ],
    bestBatna: 45000,
  },
];

export function BATNA() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [showBatnas, setShowBatnas] = useState(false);
  const [decision, setDecision] = useState<'accept' | 'walk' | null>(null);

  const scenario = scenarios[activeScenario];
  const shouldAccept = scenario.theirOffer >= scenario.bestBatna;

  const reset = () => {
    setShowBatnas(false);
    setDecision(null);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Scenario selector */}
      <div className="flex gap-2">
        {scenarios.map((s, index) => (
          <button
            key={s.id}
            onClick={() => {
              setActiveScenario(index);
              reset();
            }}
            className={`text-[10px] px-3 py-1.5 rounded-full transition-all border ${
              activeScenario === index
                ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                : 'text-gray-500 hover:text-gray-300 border-transparent'
            }`}
          >
            {s.situation.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Negotiation situation */}
      <div className="w-full max-w-xs space-y-3">
        <div className="bg-[#111113] border border-gray-800 rounded-lg p-4 text-center">
          <p className="text-sm font-medium text-gray-300 mb-2">{scenario.situation}</p>
          <p className="text-xs text-gray-500">{scenario.yourPosition}</p>
        </div>

        {/* Their offer */}
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 text-center">
          <p className="text-[10px] text-amber-400 uppercase tracking-wide mb-1">Their Offer</p>
          <p className="text-xl font-bold text-amber-400">
            ${scenario.theirOffer.toLocaleString()}
          </p>
        </div>

        {/* BATNA reveal button */}
        {!showBatnas && (
          <button
            onClick={() => setShowBatnas(true)}
            className="w-full py-2 bg-blue-500/10 border border-blue-500/30
                     text-blue-400 rounded-lg text-xs hover:bg-blue-500/20 transition-all"
          >
            Analyze your BATNAs →
          </button>
        )}

        {/* BATNAs list */}
        {showBatnas && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-2"
          >
            <p className="text-[10px] text-gray-500 uppercase tracking-wide">
              Your alternatives (BATNAs):
            </p>
            {scenario.batnas.map((batna, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`p-2 rounded-lg border flex justify-between items-center ${
                  batna.value === scenario.bestBatna
                    ? 'bg-green-500/10 border-green-500/30'
                    : 'bg-[#111113] border-gray-800'
                }`}
              >
                <span className="text-xs text-gray-300">{batna.option}</span>
                <span className={`text-xs font-medium ${
                  batna.value === scenario.bestBatna ? 'text-green-400' : 'text-gray-500'
                }`}>
                  ${batna.value.toLocaleString()}
                  {batna.value === scenario.bestBatna && ' ✓ Best'}
                </span>
              </motion.div>
            ))}

            {/* Best BATNA highlight */}
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center">
              <p className="text-[10px] text-green-400 uppercase tracking-wide mb-1">
                Your Best BATNA
              </p>
              <p className="text-lg font-bold text-green-400">
                ${scenario.bestBatna.toLocaleString()}
              </p>
              <p className="text-[10px] text-gray-500 mt-1">
                Walk away if offer is below this
              </p>
            </div>

            {/* Decision buttons */}
            {!decision && (
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setDecision('accept')}
                  className="flex-1 py-2 bg-green-500/10 border border-green-500/30
                           text-green-400 rounded-lg text-xs hover:bg-green-500/20"
                >
                  Accept offer
                </button>
                <button
                  onClick={() => setDecision('walk')}
                  className="flex-1 py-2 bg-red-500/10 border border-red-500/30
                           text-red-400 rounded-lg text-xs hover:bg-red-500/20"
                >
                  Walk away
                </button>
              </div>
            )}

            {/* Feedback */}
            {decision && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`p-3 rounded-lg border ${
                  (decision === 'accept' && shouldAccept) || (decision === 'walk' && !shouldAccept)
                    ? 'bg-green-500/10 border-green-500/30'
                    : 'bg-amber-500/10 border-amber-500/30'
                }`}
              >
                <p className="text-xs text-gray-300">
                  {shouldAccept
                    ? `✓ Offer ($${scenario.theirOffer.toLocaleString()}) beats your best BATNA ($${scenario.bestBatna.toLocaleString()}). Accept makes sense.`
                    : `✗ Offer ($${scenario.theirOffer.toLocaleString()}) is worse than your best BATNA ($${scenario.bestBatna.toLocaleString()}). Walking away is stronger.`}
                </p>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>

      {/* Key insight */}
      <div className="bg-[#111113] border border-gray-800 rounded-lg p-3 max-w-xs text-center">
        <p className="text-xs text-gray-400">
          <span className="text-blue-400 font-medium">Power tip:</span> Your negotiation power
          = strength of your BATNA. Always improve alternatives before negotiating.
        </p>
      </div>

      <p className="text-[10px] text-gray-500">
        Best Alternative To Negotiated Agreement • Harvard Negotiation Project
      </p>
    </div>
  );
}

export default BATNA;
