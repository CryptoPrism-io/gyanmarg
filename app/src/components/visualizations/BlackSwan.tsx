import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SwanEvent {
  name: string;
  year: string;
  type: 'positive' | 'negative';
  impact: string;
  lesson: string;
}

const events: SwanEvent[] = [
  {
    name: 'COVID-19 Pandemic',
    year: '2020',
    type: 'negative',
    impact: 'Global economic disruption, remote work revolution',
    lesson: 'Build systems resilient to sudden shocks',
  },
  {
    name: 'Bitcoin Creation',
    year: '2009',
    type: 'positive',
    impact: 'New asset class, DeFi ecosystem born',
    lesson: 'Revolutionary ideas often seem crazy at first',
  },
  {
    name: '2008 Financial Crisis',
    year: '2008',
    type: 'negative',
    impact: 'Global recession, bank failures',
    lesson: '"Safe" investments can hide systemic risk',
  },
  {
    name: 'iPhone Launch',
    year: '2007',
    type: 'positive',
    impact: 'Killed Nokia, created app economy',
    lesson: 'Disruption comes from unexpected directions',
  },
  {
    name: 'Internet Goes Mainstream',
    year: '1995',
    type: 'positive',
    impact: 'Transformed every industry',
    lesson: 'Exponential technologies are underestimated',
  },
];

const characteristics = [
  { trait: 'Unpredictable', icon: '🎲', description: 'Cannot be forecasted using historical data' },
  { trait: 'Extreme Impact', icon: '💥', description: 'Massive consequences when it occurs' },
  { trait: 'Retrospective Clarity', icon: '🔍', description: 'Seems obvious in hindsight' },
];

export function BlackSwan() {
  const [selectedEvent, setSelectedEvent] = useState(0);
  const [showCharacteristics, setShowCharacteristics] = useState(false);

  const event = events[selectedEvent];

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-500/[0.03] via-transparent to-red-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-5">
          {/* Title */}
          <div className="text-center">
            <h3 className="text-sm font-bold text-gray-200">Black Swan Events</h3>
            <p className="text-[10px] text-gray-500">The impact of the highly improbable</p>
          </div>

          {/* Swan visualization */}
          <div className="relative w-48 h-48">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* Normal distribution curve */}
              <path
                d="M 10 150 Q 100 40 190 150"
                fill="none"
                stroke="#374151"
                strokeWidth="2"
              />

              {/* Shaded area under curve */}
              <path
                d="M 10 150 Q 100 40 190 150 L 190 150 L 10 150 Z"
                fill="#374151"
                opacity="0.2"
              />

              {/* Fat tails - where black swans live */}
              <motion.circle
                cx="25"
                cy="145"
                r="12"
                fill={event.type === 'negative' ? '#EF4444' : '#22C55E'}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.circle
                cx="175"
                cy="145"
                r="12"
                fill={event.type === 'positive' ? '#22C55E' : '#EF4444'}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />

              {/* Labels */}
              <text x="100" y="170" textAnchor="middle" fontSize="8" fill="#666">
                Standard Distribution
              </text>
              <text x="25" y="175" textAnchor="middle" fontSize="6" fill="#EF4444">
                Negative
              </text>
              <text x="175" y="175" textAnchor="middle" fontSize="6" fill="#22C55E">
                Positive
              </text>
              <text x="25" y="125" textAnchor="middle" fontSize="7" fill="#fff">
                Swan
              </text>
              <text x="175" y="125" textAnchor="middle" fontSize="7" fill="#fff">
                Swan
              </text>

              {/* Center swan */}
              <text x="100" y="100" textAnchor="middle" fontSize="40">
                Black Swan
              </text>
            </svg>

            {/* Black Swan badge */}
            <motion.div
              className="absolute top-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-[var(--viz-inner-dark)] backdrop-blur-sm border border-[var(--viz-border-light)] rounded-full"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-[10px] text-gray-300 font-bold">THE TAILS MATTER</p>
            </motion.div>
          </div>

          {/* Event selector */}
          <div className="flex flex-wrap justify-center gap-1">
            {events.map((e, i) => (
              <button
                key={i}
                onClick={() => setSelectedEvent(i)}
                className={`px-2 py-1 rounded text-[9px] backdrop-blur-sm transition-all ${
                  selectedEvent === i
                    ? e.type === 'positive'
                      ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                      : 'bg-red-500/20 border border-red-500/50 text-red-400'
                    : 'bg-[var(--viz-tile)] border border-[var(--viz-border-light)] text-gray-500 hover:bg-[var(--viz-tile-md)]'
                }`}
              >
                {e.year}
              </button>
            ))}
          </div>

          {/* Event details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedEvent}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="w-full max-w-xs"
            >
              <div
                className={`relative overflow-hidden rounded-xl ${
                  event.type === 'positive'
                    ? ''
                    : ''
                }`}
              >
                <div className={`absolute inset-0 backdrop-blur-sm ${event.type === 'positive' ? 'bg-green-500/[0.08]' : 'bg-red-500/[0.08]'}`} />
                <div className={`absolute inset-0 border rounded-xl ${event.type === 'positive' ? 'border-green-500/20' : 'border-red-500/20'}`} />
                <div className="relative p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{event.type === 'positive' ? 'G' : 'B'}</span>
                    <div>
                      <h4
                        className={`text-sm font-bold ${
                          event.type === 'positive' ? 'text-green-400' : 'text-red-400'
                        }`}
                      >
                        {event.name}
                      </h4>
                      <p className="text-[10px] text-gray-500">{event.year}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="p-2 bg-[var(--viz-tile)] backdrop-blur-sm rounded-lg border border-[var(--viz-border)]">
                      <p className="text-[10px] text-gray-500">Impact:</p>
                      <p className="text-xs text-gray-300">{event.impact}</p>
                    </div>
                    <div
                      className={`p-2 rounded-lg backdrop-blur-sm ${
                        event.type === 'positive' ? 'bg-green-500/[0.15] border border-green-500/20' : 'bg-red-500/[0.15] border border-red-500/20'
                      }`}
                    >
                      <p
                        className={`text-[10px] ${
                          event.type === 'positive' ? 'text-green-400' : 'text-red-400'
                        }`}
                      >
                        Lesson:
                      </p>
                      <p className="text-xs text-gray-300">{event.lesson}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Characteristics toggle */}
          <button
            onClick={() => setShowCharacteristics(!showCharacteristics)}
            className="text-xs text-gray-500 hover:text-gray-300"
          >
            {showCharacteristics ? 'Hide' : 'Show'} Black Swan characteristics
          </button>

          <AnimatePresence>
            {showCharacteristics && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="w-full max-w-xs space-y-2"
              >
                {characteristics.map((c, i) => (
                  <motion.div
                    key={c.trait}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative overflow-hidden rounded-lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm" />
                    <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg" />
                    <div className="relative p-2 flex items-center gap-2">
                      <span className="text-xl">{c.icon}</span>
                      <div>
                        <p className="text-xs text-gray-300 font-medium">{c.trait}</p>
                        <p className="text-[10px] text-gray-500">{c.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Defense strategies */}
          <div className="w-full max-w-xs grid grid-cols-2 gap-2">
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-green-500/[0.08] backdrop-blur-sm" />
              <div className="absolute inset-0 border border-green-500/20 rounded-lg" />
              <div className="relative p-2">
                <p className="text-[10px] text-green-400 font-medium">Negative Swans</p>
                <p className="text-[9px] text-gray-400">Limit downside, buy insurance</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-blue-500/[0.08] backdrop-blur-sm" />
              <div className="absolute inset-0 border border-blue-500/20 rounded-lg" />
              <div className="relative p-2">
                <p className="text-[10px] text-blue-400 font-medium">Positive Swans</p>
                <p className="text-[9px] text-gray-400">Maximize exposure to upside</p>
              </div>
            </div>
          </div>

          {/* Key insight */}
          <div className="relative max-w-xs overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm" />
            <div className="absolute inset-0 border border-[var(--viz-border)] rounded-xl" />
            <div className="relative p-4">
              <p className="text-xs text-gray-400 leading-relaxed">
                <span className="text-gray-200 font-medium">Nassim Taleb:</span> "The strategy for life is
                to be convex: expose yourself to positive Black Swans while limiting exposure to negative
                ones. The payoff asymmetry is everything."
              </p>
            </div>
          </div>

          <p className="text-[10px] text-gray-600">From The Black Swan</p>
        </div>
      </div>
    </div>
  );
}

export default BlackSwan;
