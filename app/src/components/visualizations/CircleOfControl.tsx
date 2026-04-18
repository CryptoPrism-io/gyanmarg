import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target } from 'lucide-react';

interface Item {
  id: string;
  text: string;
  zone: 'control' | 'influence' | 'concern';
  explanation: string;
}

const items: Item[] = [
  { id: '1', text: 'My attitude', zone: 'control', explanation: 'You choose how to perceive and respond to events.' },
  { id: '2', text: 'My effort level', zone: 'control', explanation: 'Only you decide how hard you work.' },
  { id: '3', text: 'How I respond to criticism', zone: 'control', explanation: 'Your reaction is always your choice.' },
  { id: '4', text: 'What I say and do', zone: 'control', explanation: 'Your words and actions are entirely within your power.' },
  { id: '5', text: 'My team\'s morale', zone: 'influence', explanation: 'You can affect it through your behavior, but not control it.' },
  { id: '6', text: 'My reputation', zone: 'influence', explanation: 'Built through actions over time, but others form their own opinions.' },
  { id: '7', text: 'My relationships', zone: 'influence', explanation: 'You control your half; the other person controls theirs.' },
  { id: '8', text: 'The economy', zone: 'concern', explanation: 'Macro forces beyond any individual\'s control.' },
  { id: '9', text: 'Other people\'s opinions', zone: 'concern', explanation: 'Others will think what they think regardless of your wishes.' },
  { id: '10', text: 'The weather', zone: 'concern', explanation: 'Natural forces operate independently of human will.' },
  { id: '11', text: 'Traffic', zone: 'concern', explanation: 'Collective behavior of thousands; you can only choose your route.' },
  { id: '12', text: 'Past mistakes', zone: 'concern', explanation: 'Cannot be undone; only your response to them is controllable now.' },
];

const zones = {
  control: { name: 'Circle of Control', color: '#22C55E', icon: '🎯', description: 'Things you directly control' },
  influence: { name: 'Circle of Influence', color: '#F59E0B', icon: '🤝', description: 'Things you can affect' },
  concern: { name: 'Circle of Concern', color: '#6B7280', icon: '🌍', description: 'Things you care about but can\'t control' },
};

export function CircleOfControl() {
  const [userAnswers, setUserAnswers] = useState<Record<string, 'control' | 'influence' | 'concern'>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedZone, setSelectedZone] = useState<'control' | 'influence' | 'concern' | null>(null);
  const [showWisdom, setShowWisdom] = useState(false);

  const currentItem = items[currentIndex];

  const handleAnswer = (zone: 'control' | 'influence' | 'concern') => {
    setUserAnswers(prev => ({ ...prev, [currentItem.id]: zone }));

    if (currentIndex < items.length - 1) {
      setTimeout(() => setCurrentIndex(prev => prev + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const reset = () => {
    setUserAnswers({});
    setCurrentIndex(0);
    setShowResults(false);
    setSelectedZone(null);
  };

  const getScore = () => {
    let correct = 0;
    items.forEach(item => {
      if (userAnswers[item.id] === item.zone) correct++;
    });
    return correct;
  };

  const getZoneItems = (zone: 'control' | 'influence' | 'concern') =>
    items.filter(item => item.zone === zone);

  // Calculate energy distribution
  const energyFocus = {
    control: items.filter(i => userAnswers[i.id] === 'control').length,
    influence: items.filter(i => userAnswers[i.id] === 'influence').length,
    concern: items.filter(i => userAnswers[i.id] === 'concern').length,
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Glassmorphism layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/[0.03] via-transparent to-amber-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 rounded-xl bg-green-500/20 border border-green-500/30">
            <Target className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[var(--viz-secondary)]">Circle of Control</h3>
            <p className="text-[10px] text-[var(--viz-muted)]">Stoic focus exercise</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5">
          {/* Circle visualization */}
          <div className="relative w-52 h-52">
            {/* Concern (outer) */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 cursor-pointer transition-all"
              style={{
                backgroundColor: selectedZone === 'concern' ? '#6B728030' : '#6B728010',
                borderColor: selectedZone === 'concern' ? '#6B7280' : '#6B728040',
              }}
              onClick={() => setSelectedZone(selectedZone === 'concern' ? null : 'concern')}
              whileHover={{ scale: 1.02 }}
            />

            {/* Influence (middle) */}
            <motion.div
              className="absolute inset-8 rounded-full border-2 cursor-pointer transition-all"
              style={{
                backgroundColor: selectedZone === 'influence' ? '#F59E0B30' : '#F59E0B15',
                borderColor: selectedZone === 'influence' ? '#F59E0B' : '#F59E0B40',
              }}
              onClick={() => setSelectedZone(selectedZone === 'influence' ? null : 'influence')}
              whileHover={{ scale: 1.02 }}
            />

            {/* Control (inner) */}
            <motion.div
              className="absolute inset-16 rounded-full border-2 cursor-pointer transition-all
                        flex items-center justify-center"
              style={{
                backgroundColor: selectedZone === 'control' ? '#22C55E30' : '#22C55E15',
                borderColor: selectedZone === 'control' ? '#22C55E' : '#22C55E40',
              }}
              onClick={() => setSelectedZone(selectedZone === 'control' ? null : 'control')}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-[10px] text-green-400 font-semibold">CONTROL</span>
            </motion.div>

            {/* Labels */}
            <span className="absolute top-3 left-1/2 -translate-x-1/2 text-[10px] text-[var(--viz-muted)] font-medium">
              CONCERN
            </span>
            <span className="absolute top-11 left-1/2 -translate-x-1/2 text-[10px] text-amber-400 font-medium">
              INFLUENCE
            </span>

            {/* Energy indicators (when showing results) */}
            {showResults && (
              <>
                <motion.div
                  className="absolute -right-2 top-1/4 px-2 py-1 rounded-full text-[9px] font-medium"
                  style={{ backgroundColor: '#22C55E', color: '#fff' }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  {getZoneItems('control').length}
                </motion.div>
                <motion.div
                  className="absolute -right-2 top-1/2 px-2 py-1 rounded-full text-[9px] font-medium"
                  style={{ backgroundColor: '#F59E0B', color: '#fff' }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, transition: { delay: 0.1 } }}
                >
                  {getZoneItems('influence').length}
                </motion.div>
                <motion.div
                  className="absolute -right-2 top-3/4 px-2 py-1 rounded-full text-[9px] font-medium"
                  style={{ backgroundColor: '#6B7280', color: '#fff' }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, transition: { delay: 0.2 } }}
                >
                  {getZoneItems('concern').length}
                </motion.div>
              </>
            )}
          </div>

          {/* Zone info when selected */}
          <AnimatePresence>
            {selectedZone && !showResults && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="w-full max-w-xs p-3 rounded-xl border relative overflow-hidden"
                style={{
                  backgroundColor: zones[selectedZone].color + '15',
                  borderColor: zones[selectedZone].color + '40',
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{zones[selectedZone].icon}</span>
                  <span className="text-sm font-medium" style={{ color: zones[selectedZone].color }}>
                    {zones[selectedZone].name}
                  </span>
                </div>
                <p className="text-[10px] text-[var(--viz-secondary)]">{zones[selectedZone].description}</p>
                <div className="mt-2 pt-2 border-t border-[var(--viz-border)]">
                  <p className="text-[9px] text-[var(--viz-muted)]">Examples:</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {getZoneItems(selectedZone).slice(0, 3).map(item => (
                      <span
                        key={item.id}
                        className="text-[9px] px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: zones[selectedZone].color + '20', color: zones[selectedZone].color }}
                      >
                        {item.text}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quiz mode */}
          {!showResults && (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-full max-w-xs"
              >
                {/* Progress bar */}
                <div className="h-1 rounded-full mb-3 overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}>
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-500 via-amber-500 to-gray-500"
                    animate={{ width: `${((currentIndex + 1) / items.length) * 100}%` }}
                  />
                </div>

                <div className="relative overflow-hidden border border-[var(--viz-border)] rounded-xl p-4 text-center mb-3" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}>
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <p className="text-[10px] text-[var(--viz-muted)] uppercase tracking-wide mb-2">
                    Item {currentIndex + 1} of {items.length}
                  </p>
                  <p className="text-sm text-[var(--viz-secondary)] font-medium">"{currentItem.text}"</p>
                </div>

                <p className="text-xs text-[var(--viz-muted)] text-center mb-3">
                  Where does this belong?
                </p>

                <div className="space-y-2">
                  {(['control', 'influence', 'concern'] as const).map((zone) => (
                    <motion.button
                      key={zone}
                      onClick={() => handleAnswer(zone)}
                      className="w-full p-3 rounded-xl border text-xs font-medium transition-all
                               hover:scale-[1.02]"
                      style={{
                        backgroundColor: zones[zone].color + '10',
                        borderColor: zones[zone].color + '30',
                        color: zones[zone].color,
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="mr-2">{zones[zone].icon}</span>
                      {zones[zone].name}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          )}

          {/* Results */}
          {showResults && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full max-w-xs space-y-4"
            >
              {/* Score */}
              <div className="relative overflow-hidden text-center p-4 border border-[var(--viz-border)] rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <motion.p
                  className="text-4xl font-bold text-green-400"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  {getScore()}/{items.length}
                </motion.p>
                <p className="text-xs text-[var(--viz-muted)]">correctly placed</p>
              </div>

              {/* Energy focus analysis */}
              <div className="relative overflow-hidden p-3 border border-[var(--viz-border)] rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <p className="text-[10px] text-[var(--viz-muted)] uppercase tracking-wide mb-2">
                  Where you focused energy:
                </p>
                <div className="space-y-2">
                  {(['control', 'influence', 'concern'] as const).map((zone) => (
                    <div key={zone} className="flex items-center gap-2">
                      <span className="text-sm">{zones[zone].icon}</span>
                      <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}>
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: zones[zone].color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${(energyFocus[zone] / items.length) * 100}%` }}
                        />
                      </div>
                      <span className="text-[10px]" style={{ color: zones[zone].color }}>
                        {energyFocus[zone]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results breakdown */}
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {items.map(item => {
                  const userAnswer = userAnswers[item.id];
                  const isCorrect = userAnswer === item.zone;

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`p-2 rounded-xl border text-xs ${
                        isCorrect ? 'border-green-500/30 bg-green-500/5' : 'border-red-500/30 bg-red-500/5'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[var(--viz-secondary)] flex-1">{item.text}</span>
                        <span
                          className="text-[10px] px-2 py-0.5 rounded-full ml-2"
                          style={{
                            backgroundColor: zones[item.zone].color + '20',
                            color: zones[item.zone].color,
                          }}
                        >
                          {item.zone}
                        </span>
                      </div>
                      {!isCorrect && (
                        <p className="text-[9px] text-red-400 mt-1">
                          You said: {userAnswer}
                        </p>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              <button
                onClick={reset}
                className="w-full py-2 text-xs text-[var(--viz-muted)] hover:text-[var(--viz-secondary)] transition-colors"
              >
                ↻ Try again
              </button>
            </motion.div>
          )}

          {/* Wisdom toggle */}
          <button
            onClick={() => setShowWisdom(!showWisdom)}
            className="text-xs text-[var(--viz-muted)] hover:text-[var(--viz-secondary)] transition-colors"
          >
            {showWisdom ? '▼ Hide' : '▶ Show'} Stoic wisdom
          </button>

          <AnimatePresence>
            {showWisdom && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="w-full max-w-xs space-y-2"
              >
                <div className="relative overflow-hidden p-3 bg-green-500/10 border border-green-500/30 rounded-xl">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <p className="text-[10px] text-green-400 font-medium mb-1">🎯 Focus on Control</p>
                  <p className="text-[10px] text-[var(--viz-secondary)]">
                    Proactive people expand their Circle of Control by taking responsibility
                    for their choices.
                  </p>
                </div>
                <div className="relative overflow-hidden p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <p className="text-[10px] text-amber-400 font-medium mb-1">🤝 Influence Wisely</p>
                  <p className="text-[10px] text-[var(--viz-secondary)]">
                    Work through your Circle of Control to expand your Circle of Influence
                    over time.
                  </p>
                </div>
                <div className="relative overflow-hidden p-3 bg-gray-500/10 border border-gray-500/30 rounded-xl">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <p className="text-[10px] text-[var(--viz-secondary)] font-medium mb-1">🌍 Release Concern</p>
                  <p className="text-[10px] text-[var(--viz-secondary)]">
                    Worrying about what you can't control wastes energy and shrinks your
                    effectiveness.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Key insight */}
          <div className="relative overflow-hidden border border-[var(--viz-border)] rounded-xl p-4 max-w-xs" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="text-xs text-[var(--viz-secondary)] leading-relaxed">
              <span className="text-green-400 font-medium">Epictetus:</span> "Make the best use of
              what is in your power, and take the rest as it happens. Some things are up to us
              and some things are not."
            </p>
          </div>

          <p className="text-[10px] text-[var(--viz-muted)]">
            From Stephen Covey & Stoic Philosophy
          </p>
        </div>
      </div>
    </div>
  );
}

export default CircleOfControl;
