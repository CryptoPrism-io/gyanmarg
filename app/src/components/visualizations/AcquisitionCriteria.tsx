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
                : 'bg-[#111113] border border-gray-800 text-gray-500'
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
              className={`w-full p-3 rounded-lg border text-left transition-all ${
                isChecked
                  ? 'bg-green-500/10 border-green-500/50'
                  : 'bg-[#111113] border-gray-800 hover:border-gray-700'
              }`}
            >
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
            </button>
          );
        })}
      </motion.div>

      {/* Score */}
      <div className="w-full max-w-xs bg-[#111113] border border-gray-800 rounded-lg p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-gray-400">Progress:</span>
          <span className="text-xs text-gray-300">{checkedCount}/{totalItems}</span>
        </div>
        <div className="h-2 bg-gray-800 rounded-full overflow-hidden mb-2">
          <motion.div
            className="h-full bg-blue-500"
            style={{ width: `${(checkedCount / totalItems) * 100}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px]">
          <span className="text-gray-500">Critical items: {criticalChecked}/{criticalItems.length}</span>
        </div>
      </div>

      {checkedCount > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`w-full max-w-xs p-3 rounded-lg border ${
            score.color === 'green'
              ? 'bg-green-500/10 border-green-500/30'
              : score.color === 'amber'
              ? 'bg-amber-500/10 border-amber-500/30'
              : 'bg-red-500/10 border-red-500/30'
          }`}
        >
          <p className={`text-xs text-center ${
            score.color === 'green'
              ? 'text-green-400'
              : score.color === 'amber'
              ? 'text-amber-400'
              : 'text-red-400'
          }`}>
            {score.text}
          </p>
        </motion.div>
      )}

      <p className="text-[10px] text-gray-500 text-center">
        From "Buy Then Build" by Walker Deibel
      </p>
    </div>
  );
}

export default AcquisitionCriteria;
