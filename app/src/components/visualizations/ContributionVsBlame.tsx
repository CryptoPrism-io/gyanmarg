import { useState } from 'react';
import { motion } from 'framer-motion';

// Difficult Conversations - Contribution vs Blame
export function ContributionVsBlame() {
  const [perspective, setPerspective] = useState<'blame' | 'contribution'>('blame');
  const [myContribution, setMyContribution] = useState('');
  const [showInsight, setShowInsight] = useState(false);

  const blameStatements = [
    'They didn\'t communicate clearly',
    'They were being unreasonable',
    'They didn\'t try hard enough',
    'It\'s their fault this happened',
  ];

  const contributionQuestions = [
    'What did I do (or not do) that contributed?',
    'What signals might I have missed?',
    'How did my actions affect their behavior?',
    'What would I do differently next time?',
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Toggle */}
      <div className="flex bg-[#111113] rounded-lg p-1 border border-gray-800">
        <button
          onClick={() => setPerspective('blame')}
          className={`px-4 py-2 rounded-lg text-xs transition-all ${
            perspective === 'blame'
              ? 'bg-red-500/20 text-red-400'
              : 'text-gray-500 hover:text-gray-400'
          }`}
        >
          Blame Mode
        </button>
        <button
          onClick={() => setPerspective('contribution')}
          className={`px-4 py-2 rounded-lg text-xs transition-all ${
            perspective === 'contribution'
              ? 'bg-green-500/20 text-green-400'
              : 'text-gray-500 hover:text-gray-400'
          }`}
        >
          Contribution Mode
        </button>
      </div>

      {/* Description */}
      <div className={`w-full max-w-xs p-3 rounded-lg border ${
        perspective === 'blame'
          ? 'bg-red-500/10 border-red-500/30'
          : 'bg-green-500/10 border-green-500/30'
      }`}>
        <p className={`text-xs ${perspective === 'blame' ? 'text-red-400' : 'text-green-400'}`}>
          {perspective === 'blame'
            ? 'Blame looks backward: "Whose fault is this?"'
            : 'Contribution looks forward: "How did we both contribute?"'}
        </p>
      </div>

      {/* Content based on mode */}
      {perspective === 'blame' ? (
        <div className="w-full max-w-xs space-y-2">
          <p className="text-[10px] text-gray-500 text-center">Common blame thoughts:</p>
          {blameStatements.map((statement, idx) => (
            <div
              key={idx}
              className="p-3 bg-[#111113] border border-gray-800 rounded-lg"
            >
              <p className="text-xs text-gray-400 italic">"{statement}"</p>
            </div>
          ))}
          <motion.div
            className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-center"
          >
            <p className="text-[10px] text-red-400">
              ❌ Blame keeps you stuck and creates defensiveness
            </p>
          </motion.div>
        </div>
      ) : (
        <div className="w-full max-w-xs space-y-3">
          <p className="text-[10px] text-gray-500 text-center">Ask yourself:</p>
          {contributionQuestions.map((question, idx) => (
            <div
              key={idx}
              className="p-3 bg-[#111113] border border-gray-800 rounded-lg"
            >
              <p className="text-xs text-green-400">{question}</p>
            </div>
          ))}

          <div className="space-y-2">
            <p className="text-[10px] text-gray-500">Your contribution (even 10%):</p>
            <textarea
              value={myContribution}
              onChange={(e) => setMyContribution(e.target.value)}
              placeholder="I contributed by..."
              className="w-full p-3 bg-[#111113] border border-gray-800 rounded-lg text-xs text-gray-300 placeholder-gray-600 focus:border-green-500/50 focus:outline-none resize-none h-20"
            />
          </div>

          {myContribution.length > 10 && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setShowInsight(true)}
              className="w-full py-2 bg-green-500/20 border border-green-500/50 rounded-lg text-xs text-green-400"
            >
              See the power of this shift
            </motion.button>
          )}

          {showInsight && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg"
            >
              <p className="text-[10px] text-green-400 text-center">
                ✓ By acknowledging your contribution, you:
              </p>
              <ul className="mt-2 space-y-1 text-[10px] text-gray-400">
                <li>• Open dialogue instead of triggering defense</li>
                <li>• Model accountability that others may follow</li>
                <li>• Identify what YOU can change next time</li>
              </ul>
            </motion.div>
          )}
        </div>
      )}

      <p className="text-[10px] text-gray-500 text-center">
        From "Difficult Conversations" by Douglas Stone
      </p>
    </div>
  );
}

export default ContributionVsBlame;
