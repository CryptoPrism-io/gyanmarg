import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Talk Like TED - Creating Memorable Moments
const famousMoments = [
  {
    speaker: 'Bill Gates',
    moment: 'Released mosquitoes into the audience',
    topic: 'Malaria awareness',
    impact: 'Made abstract threat viscerally real',
  },
  {
    speaker: 'Steve Jobs',
    moment: 'Pulled MacBook Air from a manila envelope',
    topic: 'Product launch',
    impact: 'Demonstrated thinness better than any spec',
  },
  {
    speaker: 'Jill Bolte Taylor',
    moment: 'Held a real human brain on stage',
    topic: 'Brain science',
    impact: 'Made neuroscience tangible and memorable',
  },
];

export function JawDroppingMoment() {
  const [activeMoment, setActiveMoment] = useState(0);
  const [showImpact, setShowImpact] = useState(false);

  const moment = famousMoments[activeMoment];

  return (
    <div className="flex flex-col items-center gap-4">
      {/* The concept */}
      <div className="w-full max-w-xs">
        <div className="bg-gradient-to-br from-rose-500/10 to-orange-500/10 border border-rose-500/30 rounded-lg p-4 text-center">
          <p className="text-2xl mb-2">💥</p>
          <p className="text-xs text-gray-300 font-medium">Jaw-Dropping Moments</p>
          <p className="text-[10px] text-gray-500 mt-1">
            Emotionally charged events that audiences remember forever
          </p>
        </div>
      </div>

      {/* Famous examples */}
      <div className="w-full max-w-xs">
        <div className="flex gap-2 justify-center mb-3">
          {famousMoments.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveMoment(idx);
                setShowImpact(false);
              }}
              className={`w-3 h-3 rounded-full border transition-all ${
                idx === activeMoment
                  ? 'bg-rose-500 border-rose-500'
                  : 'border-gray-600 hover:border-gray-500'
              }`}
            />
          ))}
        </div>

        <motion.div
          key={activeMoment}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#111113] border border-gray-800 rounded-lg overflow-hidden"
        >
          <div className="p-4 border-b border-gray-800">
            <p className="text-[10px] text-rose-400 uppercase tracking-wide">
              {moment.speaker}
            </p>
            <p className="text-sm text-gray-300 mt-1 font-medium">
              {moment.moment}
            </p>
            <p className="text-[10px] text-gray-500 mt-1">
              Topic: {moment.topic}
            </p>
          </div>

          <AnimatePresence>
            {showImpact ? (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="bg-rose-500/10 p-3"
              >
                <p className="text-[10px] text-rose-400 uppercase tracking-wide mb-1">
                  Why It Worked
                </p>
                <p className="text-xs text-gray-300">{moment.impact}</p>
              </motion.div>
            ) : (
              <motion.button
                onClick={() => setShowImpact(true)}
                className="w-full p-3 text-[10px] text-gray-500 hover:text-rose-400 transition-colors"
              >
                Reveal the impact →
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Formula */}
      <div className="w-full max-w-xs">
        <div className="bg-[#111113] border border-gray-800 rounded-lg p-3">
          <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-2 text-center">
            The Formula
          </p>
          <div className="flex items-center justify-center gap-2 text-xs">
            <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded">Unexpected</span>
            <span className="text-gray-600">+</span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded">Emotional</span>
            <span className="text-gray-600">=</span>
            <span className="px-2 py-1 bg-rose-500/20 text-rose-400 rounded">Memorable</span>
          </div>
        </div>
      </div>

      <p className="text-[10px] text-gray-500 text-center">
        From "Talk Like TED" by Carmine Gallo
      </p>
    </div>
  );
}

export default JawDroppingMoment;
