import { useState } from 'react';
import { motion } from 'framer-motion';

// Buy Then Build - Acquisition Criteria Checklist
const criteria = [
  {
    category: 'Financial Health',
    items: [
      { name: 'Positive cash flow', description: 'Business generates profit, not just revenue', critical: true },
      { name: 'Clean financials', description: 'Accurate books, separable from owner', critical: true },
      { name: 'Reasonable price', description: '2-4x SDE for small businesses', critical: true },
    ],
  },
  {
    category: 'Operations',
    items: [
      { name: 'Not owner-dependent', description: 'Can run without current owner', critical: true },
      { name: 'Documented processes', description: 'SOPs exist for key functions', critical: false },
      { name: 'Stable team', description: 'Key employees will stay post-acquisition', critical: true },
    ],
  },
  {
    category: 'Market Position',
    items: [
      { name: 'Recurring revenue', description: 'Subscriptions, contracts, repeat customers', critical: false },
      { name: 'Diverse customer base', description: 'No customer > 20% of revenue', critical: true },
      { name: 'Growth potential', description: 'Opportunities you can unlock', critical: false },
    ],
  },
  {
    category: 'Deal Structure',
    items: [
      { name: 'Seller financing available', description: 'Seller carries 10-30% of price', critical: false },
      { name: 'Transition support', description: 'Seller stays 3-12 months', critical: true },
      { name: 'Clean legal structure', description: 'No lawsuits, clear ownership', critical: true },
    ],
  },
];

export function AcquisitionCriteria() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState(0);

  const toggleItem = (itemName: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(itemName)) {
      newChecked.delete(itemName);
    } else {
      newChecked.add(itemName);
    }
    setCheckedItems(newChecked);
  };

  const totalItems = criteria.flatMap(c => c.items).length;
  const checkedCount = checkedItems.size;
  const criticalItems = criteria.flatMap(c => c.items).filter(i => i.critical);
  const criticalChecked = criticalItems.filter(i => checkedItems.has(i.name)).length;

  const getScore = () => {
    if (criticalChecked < criticalItems.length) {
      return { text: 'Missing critical criteria', color: 'red' };
    }
    if (checkedCount >= totalItems * 0.8) {
      return { text: 'Strong acquisition candidate', color: 'green' };
    }
    return { text: 'Proceed with caution', color: 'amber' };
  };

  const score = getScore();

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-green-500/[0.02]" />
      <div className="absolute inset-0 border border-white/[0.1] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-4">
          {/* Header */}
          <div className="text-center">
            <p className="text-xs text-gray-400">
              Use this checklist to evaluate acquisition targets.
            </p>
          </div>

          {/* Category tabs */}
          <div className="flex gap-1 flex-wrap justify-center">
            {criteria.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`px-3 py-1.5 rounded-lg text-[10px] transition-all ${
                  idx === activeCategory
                    ? 'bg-blue-500/20 border border-blue-500/50 text-blue-400'
                    : 'bg-white/[0.03] border border-white/[0.08] text-gray-500 hover:border-white/[0.15]'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Checklist */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full max-w-xs space-y-2"
          >
            {criteria[activeCategory].items.map((item, idx) => {
              const isChecked = checkedItems.has(item.name);
              return (
                <button
                  key={idx}
                  onClick={() => toggleItem(item.name)}
                  className={`w-full relative overflow-hidden rounded-lg text-left transition-all ${
                    isChecked
                      ? 'bg-green-500/10 border border-green-500/30'
                      : 'bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15]'
                  }`}
                >
                  <div className="relative z-10 p-3">
                    <div className="flex items-start gap-2">
                      <div className={`w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center ${
                        isChecked ? 'bg-green-500 border-green-500' : 'border-gray-600'
                      }`}>
                        {isChecked && <span className="text-white text-[10px]">✓</span>}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className={`text-xs ${isChecked ? 'text-green-400' : 'text-gray-300'}`}>
                            {item.name}
                          </p>
                          {item.critical && (
                            <span className="text-[8px] px-1.5 py-0.5 bg-red-500/20 text-red-400 rounded">
                              Critical
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-gray-500 mt-0.5">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* Score */}
          <div className="w-full max-w-xs relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm" />
            <div className="absolute inset-0 border border-white/[0.08] rounded-lg" />
            <div className="relative z-10 p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-400">Progress:</span>
                <span className="text-xs text-gray-300">{checkedCount}/{totalItems}</span>
              </div>
              <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden mb-2">
                <motion.div
                  className="h-full bg-blue-500"
                  style={{ width: `${(checkedCount / totalItems) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px]">
                <span className="text-gray-500">Critical items: {criticalChecked}/{criticalItems.length}</span>
              </div>
            </div>
          </div>

          {checkedCount > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full max-w-xs relative overflow-hidden rounded-lg"
            >
              <div className={`absolute inset-0 ${
                score.color === 'green'
                  ? 'bg-gradient-to-br from-green-500/[0.08] to-green-500/[0.03]'
                  : score.color === 'amber'
                  ? 'bg-gradient-to-br from-amber-500/[0.08] to-amber-500/[0.03]'
                  : 'bg-gradient-to-br from-red-500/[0.08] to-red-500/[0.03]'
              } backdrop-blur-sm`} />
              <div className={`absolute inset-0 border ${
                score.color === 'green'
                  ? 'border-green-500/20'
                  : score.color === 'amber'
                  ? 'border-amber-500/20'
                  : 'border-red-500/20'
              } rounded-lg`} />
              <div className="relative z-10 p-3">
                <p className={`text-xs text-center ${
                  score.color === 'green'
                    ? 'text-green-400'
                    : score.color === 'amber'
                    ? 'text-amber-400'
                    : 'text-red-400'
                }`}>
                  {score.text}
                </p>
              </div>
            </motion.div>
          )}

          <p className="text-[10px] text-gray-500 text-center">
            From "Buy Then Build" by Walker Deibel
          </p>
        </div>
      </div>
    </div>
  );
}

export default AcquisitionCriteria;
