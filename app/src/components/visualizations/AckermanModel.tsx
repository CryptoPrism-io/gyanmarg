import { useState } from 'react';
import { motion } from 'framer-motion';

interface Step {
  percentage: number;
  label: string;
  tip: string;
}

const steps: Step[] = [
  { percentage: 65, label: 'Start at 65%', tip: 'Anchor low to set expectations' },
  { percentage: 85, label: 'Move to 85%', tip: 'Show willingness to negotiate' },
  { percentage: 95, label: 'Move to 95%', tip: 'Slow down, show strain' },
  { percentage: 100, label: 'Final: 100%', tip: 'Use precise number + non-monetary item' },
];

export function AckermanModel() {
  const [targetPrice, setTargetPrice] = useState(50000);
  const [currentStep, setCurrentStep] = useState(0);

  const offers = steps.map(s => Math.round(targetPrice * (s.percentage / 100)));

  // Make final offer a precise number
  const finalOffer = Math.round(targetPrice * 0.9973); // Looks like $49,865 for 50k

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Title */}
      <div className="text-center">
        <h3 className="text-sm font-bold text-amber-400">The Ackerman Model</h3>
        <p className="text-[10px] text-gray-500">A systematic approach to price negotiation</p>
      </div>

      {/* Target price input */}
      <div className="w-full max-w-xs">
        <div className="flex justify-between text-[10px] text-gray-500 mb-1">
          <span>Your target price</span>
          <span className="text-green-400 font-bold">${targetPrice.toLocaleString()}</span>
        </div>
        <input
          type="range"
          min="10000"
          max="200000"
          step="5000"
          value={targetPrice}
          onChange={(e) => setTargetPrice(Number(e.target.value))}
          className="w-full"
          style={{ accentColor: '#22C55E' }}
        />
      </div>

      {/* Visual ladder */}
      <div className="relative w-full max-w-xs h-56">
        <svg viewBox="0 0 280 200" className="w-full h-full">
          {/* Ladder rungs */}
          {steps.map((step, index) => {
            const y = 170 - index * 45;
            const isActive = currentStep >= index;
            const isCurrent = currentStep === index;

            return (
              <g key={index}>
                {/* Rung */}
                <motion.rect
                  x="40"
                  y={y}
                  width="200"
                  height="35"
                  rx="8"
                  fill={isActive ? '#22C55E20' : '#111113'}
                  stroke={isCurrent ? '#22C55E' : isActive ? '#22C55E50' : '#374151'}
                  strokeWidth={isCurrent ? 2 : 1}
                  animate={{ scale: isCurrent ? 1.02 : 1 }}
                  className="cursor-pointer"
                  onClick={() => setCurrentStep(index)}
                />

                {/* Percentage */}
                <text
                  x="60"
                  y={y + 22}
                  fontSize="12"
                  fill={isActive ? '#22C55E' : '#666'}
                  fontWeight="bold"
                >
                  {step.percentage}%
                </text>

                {/* Offer amount */}
                <text
                  x="220"
                  y={y + 22}
                  fontSize="11"
                  fill={isActive ? '#fff' : '#666'}
                  textAnchor="end"
                >
                  ${index === 3 ? finalOffer.toLocaleString() : offers[index].toLocaleString()}
                </text>
              </g>
            );
          })}

          {/* Connecting arrows */}
          {[0, 1, 2].map((i) => (
            <path
              key={`arrow-${i}`}
              d={`M 140 ${165 - i * 45} L 140 ${145 - i * 45}`}
              fill="none"
              stroke={currentStep > i ? '#22C55E50' : '#374151'}
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />
          ))}

          <defs>
            <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M 0 0 L 6 3 L 0 6 Z" fill="#374151" />
            </marker>
          </defs>
        </svg>
      </div>

      {/* Step selector */}
      <div className="flex gap-2">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index)}
            className={`w-8 h-8 rounded-full text-xs font-bold transition-all ${
              currentStep === index
                ? 'bg-green-500 text-black'
                : currentStep > index
                ? 'bg-green-500/30 text-green-400'
                : 'bg-gray-800 text-gray-500'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Current step details */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xs p-4 bg-green-500/10 border border-green-500/30 rounded-xl"
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg font-bold text-green-400">Step {currentStep + 1}:</span>
          <span className="text-sm text-gray-300">{steps[currentStep].label}</span>
        </div>
        <p className="text-xs text-gray-400 mb-2">{steps[currentStep].tip}</p>
        <div className="p-2 bg-gray-800/50 rounded-lg">
          <p className="text-[10px] text-gray-500">Your offer:</p>
          <p className="text-lg font-bold text-green-400">
            ${currentStep === 3 ? finalOffer.toLocaleString() : offers[currentStep].toLocaleString()}
          </p>
        </div>
      </motion.div>

      {/* Key rules */}
      <div className="w-full max-w-xs space-y-2">
        <div className="p-2 bg-amber-500/10 border border-amber-500/30 rounded-lg">
          <p className="text-[10px] text-amber-400">
            💡 Use decreasing increments (20% → 10% → 5%) to signal you're reaching your limit
          </p>
        </div>
        <div className="p-2 bg-blue-500/10 border border-blue-500/30 rounded-lg">
          <p className="text-[10px] text-blue-400">
            🎯 Final offer should be a precise number (not round) + include a non-monetary item
          </p>
        </div>
      </div>

      {/* Key insight */}
      <div className="bg-[#111113] border border-gray-800 rounded-xl p-4 max-w-xs">
        <p className="text-xs text-gray-400 leading-relaxed">
          <span className="text-green-400 font-medium">Chris Voss:</span> "By using this system,
          you create the illusion of reasoned concession while secretly using psychology to
          anchor expectations and extract maximum value."
        </p>
      </div>

      <p className="text-[10px] text-gray-600">From Never Split the Difference</p>
    </div>
  );
}

export default AckermanModel;
