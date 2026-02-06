import { useState } from 'react';
import { motion } from 'framer-motion';

// Tax-Free Wealth - Three Tax Buckets
const buckets = [
  {
    name: 'Taxed Now',
    examples: ['W-2 wages', 'Interest income', 'Short-term gains'],
    rate: '10-37%',
    description: 'Income taxed at ordinary rates in the year earned',
    color: 'red',
    icon: '💸',
    strategy: 'Minimize this bucket. Convert to other types where possible.',
  },
  {
    name: 'Taxed Later',
    examples: ['401(k)', 'Traditional IRA', 'Deferred compensation'],
    rate: '10-37% (at withdrawal)',
    description: 'Tax deferred until you withdraw. Grows tax-free.',
    color: 'amber',
    icon: '⏳',
    strategy: 'Good for high earners expecting lower rates in retirement.',
  },
  {
    name: 'Never Taxed',
    examples: ['Roth IRA/401k', 'Municipal bonds', 'Life insurance loans', 'Real estate depreciation'],
    rate: '0%',
    description: 'Legally never taxed if structured correctly',
    color: 'green',
    icon: '✨',
    strategy: 'Maximize this bucket. The wealthy focus here.',
  },
];

export function TaxBuckets() {
  const [activeBucket, setActiveBucket] = useState<number | null>(null);
  const [income] = useState(100000);

  const colorMap: Record<string, { bg: string; border: string; text: string }> = {
    red: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400' },
    amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400' },
    green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400' },
  };

  // Tax calculations available for display
  const _taxedNowAfter = income * 0.70; // ~30% tax
  const _taxedLaterAfter = income * 0.75; // ~25% effective
  const _neverTaxedAfter = income; // 0% tax
  void _taxedNowAfter; void _taxedLaterAfter; void _neverTaxedAfter;

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] via-transparent to-green-500/[0.02]" />
      <div className="absolute inset-0 border border-white/[0.1] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-4">
          {/* Header */}
          <div className="text-center">
            <p className="text-xs text-gray-400">
              The wealthy don't earn more—they earn in the <span className="text-green-400">right buckets</span>.
            </p>
          </div>

          {/* Three buckets */}
          <div className="w-full max-w-xs space-y-2">
            {buckets.map((bucket, idx) => {
              const colors = colorMap[bucket.color];
              const isActive = activeBucket === idx;

              return (
                <motion.button
                  key={idx}
                  onClick={() => setActiveBucket(isActive ? null : idx)}
                  className={`w-full relative overflow-hidden rounded-lg text-left transition-all ${
                    isActive ? `${colors.bg} ${colors.border}` : 'bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15]'
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="relative z-10 p-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{bucket.icon}</span>
                        <span className={`text-sm font-medium ${isActive ? colors.text : 'text-gray-400'}`}>
                          {bucket.name}
                        </span>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${colors.bg} ${colors.text}`}>
                        {bucket.rate}
                      </span>
                    </div>

                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-3 space-y-2"
                      >
                        <p className="text-[10px] text-gray-400">{bucket.description}</p>

                        <div className="bg-black/30 backdrop-blur-sm rounded p-2">
                          <p className="text-[10px] text-gray-500">Examples:</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {bucket.examples.map((ex, i) => (
                              <span key={i} className="text-[10px] px-2 py-0.5 bg-white/[0.05] border border-white/[0.08] rounded text-gray-400">
                                {ex}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className={`${colors.bg} rounded p-2`}>
                          <p className={`text-[10px] ${colors.text}`}>
                            {bucket.strategy}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Visual comparison */}
          <div className="w-full max-w-xs relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm" />
            <div className="absolute inset-0 border border-white/[0.08] rounded-lg" />
            <div className="relative z-10 p-4">
              <p className="text-xs text-gray-400 mb-3 text-center">
                $100,000 in each bucket keeps:
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-red-400">Taxed Now:</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-white/[0.05] rounded-full overflow-hidden">
                      <div className="w-[70%] h-full bg-red-500" />
                    </div>
                    <span className="text-xs text-gray-300">~$70,000</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-amber-400">Taxed Later:</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-white/[0.05] rounded-full overflow-hidden">
                      <div className="w-[75%] h-full bg-amber-500" />
                    </div>
                    <span className="text-xs text-gray-300">~$75,000</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-green-400">Never Taxed:</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-white/[0.05] rounded-full overflow-hidden">
                      <div className="w-full h-full bg-green-500" />
                    </div>
                    <span className="text-xs text-gray-300">$100,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-[10px] text-gray-500 text-center">
            From "Tax-Free Wealth" by Tom Wheelwright
          </p>
        </div>
      </div>
    </div>
  );
}

export default TaxBuckets;
