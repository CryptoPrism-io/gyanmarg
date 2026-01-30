import { useState } from 'react';
import { motion } from 'framer-motion';

interface Portfolio {
  id: string;
  name: string;
  safe: number;
  medium: number;
  aggressive: number;
  description: string;
}

const portfolios: Portfolio[] = [
  {
    id: 'traditional',
    name: 'Traditional 60/40',
    safe: 40,
    medium: 60,
    aggressive: 0,
    description: 'Classic allocation - all in the vulnerable middle',
  },
  {
    id: 'barbell',
    name: 'Barbell Strategy',
    safe: 85,
    medium: 0,
    aggressive: 15,
    description: 'Taleb\'s approach - extremes only, no middle',
  },
  {
    id: 'yolo',
    name: 'All Aggressive',
    safe: 0,
    medium: 0,
    aggressive: 100,
    description: 'Maximum risk - fragile to black swans',
  },
];

export function BarbellStrategy() {
  const [activePortfolio, setActivePortfolio] = useState(1);
  const [showScenario, setShowScenario] = useState(false);

  const portfolio = portfolios[activePortfolio];

  // Simulate a black swan event
  const simulateCrash = () => {
    setShowScenario(true);
  };

  const getOutcome = (p: Portfolio) => {
    // Black swan: medium risk loses 50%, aggressive loses 80%, safe loses 5%
    const safeLoss = p.safe * 0.05;
    const mediumLoss = p.medium * 0.50;
    const aggressiveLoss = p.aggressive * 0.80;
    const totalLoss = safeLoss + mediumLoss + aggressiveLoss;
    return 100 - totalLoss;
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Portfolio selector */}
      <div className="flex gap-2">
        {portfolios.map((p, index) => (
          <button
            key={p.id}
            onClick={() => {
              setActivePortfolio(index);
              setShowScenario(false);
            }}
            className={`text-[10px] px-3 py-1.5 rounded-full transition-all border ${
              activePortfolio === index
                ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                : 'text-gray-500 hover:text-gray-300 border-transparent'
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Barbell visualization */}
      <div className="w-full max-w-xs">
        <div className="relative h-20 flex items-center">
          {/* Bar */}
          <div className="absolute left-8 right-8 h-2 bg-gray-700 rounded-full" />

          {/* Safe weight (left) */}
          <motion.div
            className="absolute left-0 flex flex-col items-center"
            animate={{ scale: portfolio.safe > 0 ? 1 : 0.5 }}
          >
            <div
              className="rounded-full bg-green-500 flex items-center justify-center text-xs font-bold text-white"
              style={{
                width: `${Math.max(32, portfolio.safe * 0.6)}px`,
                height: `${Math.max(32, portfolio.safe * 0.6)}px`,
              }}
            >
              {portfolio.safe}%
            </div>
            <span className="text-[10px] text-green-400 mt-1">Safe</span>
          </motion.div>

          {/* Medium weight (middle) */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
            animate={{ scale: portfolio.medium > 0 ? 1 : 0.5, opacity: portfolio.medium > 0 ? 1 : 0.3 }}
          >
            <div
              className="rounded-full bg-amber-500 flex items-center justify-center text-xs font-bold text-white"
              style={{
                width: `${Math.max(24, portfolio.medium * 0.5)}px`,
                height: `${Math.max(24, portfolio.medium * 0.5)}px`,
              }}
            >
              {portfolio.medium}%
            </div>
            <span className="text-[10px] text-amber-400 mt-1">Medium</span>
          </motion.div>

          {/* Aggressive weight (right) */}
          <motion.div
            className="absolute right-0 flex flex-col items-center"
            animate={{ scale: portfolio.aggressive > 0 ? 1 : 0.5 }}
          >
            <div
              className="rounded-full bg-red-500 flex items-center justify-center text-xs font-bold text-white"
              style={{
                width: `${Math.max(32, portfolio.aggressive * 0.6)}px`,
                height: `${Math.max(32, portfolio.aggressive * 0.6)}px`,
              }}
            >
              {portfolio.aggressive}%
            </div>
            <span className="text-[10px] text-red-400 mt-1">Aggressive</span>
          </motion.div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-[#111113] border border-gray-800 rounded-lg p-3 w-full max-w-xs text-center">
        <p className="text-xs text-gray-400">{portfolio.description}</p>
      </div>

      {/* Black swan simulation */}
      {!showScenario ? (
        <button
          onClick={simulateCrash}
          className="px-4 py-2 bg-red-500/10 border border-red-500/30
                   text-red-400 rounded-lg text-xs hover:bg-red-500/20 transition-all"
        >
          🦢 Simulate Black Swan Event
        </button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-xs space-y-3"
        >
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-center">
            <p className="text-xs text-red-400 mb-1">💥 Black Swan: Market crash!</p>
            <p className="text-[10px] text-gray-500">Safe: -5% | Medium: -50% | Aggressive: -80%</p>
          </div>

          {/* Results comparison */}
          <div className="space-y-2">
            {portfolios.map((p) => {
              const remaining = getOutcome(p);
              const isActive = p.id === portfolio.id;

              return (
                <div
                  key={p.id}
                  className={`p-2 rounded-lg border ${
                    isActive ? 'border-amber-500/30' : 'border-gray-800'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className={`text-xs ${isActive ? 'text-amber-400' : 'text-gray-400'}`}>
                      {p.name}
                    </span>
                    <span className={`text-xs font-bold ${
                      remaining >= 80 ? 'text-green-400' :
                      remaining >= 50 ? 'text-amber-400' : 'text-red-400'
                    }`}>
                      {remaining.toFixed(0)}% remaining
                    </span>
                  </div>
                  <div className="h-2 bg-gray-900 rounded-full mt-1 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        backgroundColor: remaining >= 80 ? '#22C55E' :
                                        remaining >= 50 ? '#F59E0B' : '#EF4444'
                      }}
                      initial={{ width: '100%' }}
                      animate={{ width: `${remaining}%` }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => setShowScenario(false)}
            className="w-full py-2 text-xs text-gray-500 hover:text-gray-300"
          >
            ↻ Reset
          </button>
        </motion.div>
      )}

      {/* Key insight */}
      <div className="bg-[#111113] border border-gray-800 rounded-lg p-3 max-w-xs text-center">
        <p className="text-xs text-gray-400">
          <span className="text-amber-400 font-medium">Taleb:</span> The barbell survives
          black swans. You can't lose more than the aggressive portion, but you capture
          unlimited upside.
        </p>
      </div>

      <p className="text-[10px] text-gray-500">
        From Antifragile by Nassim Taleb
      </p>
    </div>
  );
}

export default BarbellStrategy;
