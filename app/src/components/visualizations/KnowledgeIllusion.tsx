import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Challenge {
  topic: string;
  icon: string;
  question: string;
  prompt: string;
  reveal: string[];
  explanation: string;
}

const challenges: Challenge[] = [
  {
    topic: 'Bicycle',
    icon: '🚲',
    question: 'How well do you know how a bicycle works?',
    prompt: 'Try to describe where the chain connects, how pedaling moves the wheel, and how the brakes work.',
    reveal: [
      'Chain wraps around front sprocket (pedals) and rear sprocket (wheel)',
      'Pedaling rotates front sprocket → chain → rear sprocket → wheel',
      'Gears change by moving chain between different sized sprockets',
      'Brake pads squeeze the wheel rim or disc to create friction',
    ],
    explanation: 'Studies show 90% of people cannot draw a working bicycle from memory. Most miss crucial details like chain routing.',
  },
  {
    topic: 'Toilet',
    icon: '🚽',
    question: 'Can you explain how a toilet actually flushes?',
    prompt: 'Describe what happens when you push the handle, how water enters, and how waste exits.',
    reveal: [
      'Handle lifts flapper valve, releasing water from tank',
      'Water rushes into bowl, creating pressure',
      'S-shaped trap creates siphon effect when water level rises',
      'Siphon pulls all contents through, then trap refills with clean water',
    ],
    explanation: 'The siphon mechanism is elegant but rarely understood. Most people just say "water flushes it down."',
  },
  {
    topic: 'Zipper',
    icon: '🔗',
    question: 'How does a zipper actually work?',
    prompt: 'Explain the mechanism that makes teeth lock together and apart.',
    reveal: [
      'Each side has interlocking teeth angled in opposite directions',
      'Slider has Y-shaped channel that forces teeth together at precise angle',
      'Going up: teeth merge into single track',
      'Going down: wedge separates the merged teeth',
    ],
    explanation: 'Despite using zippers daily, most people never notice the Y-channel mechanism that makes it all work.',
  },
  {
    topic: 'Cloud',
    icon: '☁️',
    question: 'Why do clouds float? Why don\'t they fall?',
    prompt: 'Explain what clouds are made of and why they stay in the sky.',
    reveal: [
      'Clouds are tiny water droplets or ice crystals',
      'Droplets are so small (10-20 microns) that air resistance keeps them up',
      'Rising warm air (updrafts) pushes droplets higher',
      'When droplets combine and get heavy enough, they fall as rain',
    ],
    explanation: 'Most people know clouds are water but can\'t explain why water floats in air.',
  },
];

type Phase = 'rate' | 'think' | 'reveal' | 'compare';

export function KnowledgeIllusion() {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [phase, setPhase] = useState<Phase>('rate');
  const [initialConfidence, setInitialConfidence] = useState(70);
  const [finalConfidence, setFinalConfidence] = useState(70);
  const [thinkingTime, setThinkingTime] = useState(0);
  const [revealedHints, setRevealedHints] = useState<number[]>([]);
  const [isThinking, setIsThinking] = useState(false);

  const challenge = challenges[currentChallenge];

  // Timer for thinking phase
  useEffect(() => {
    let timer: number;
    if (isThinking) {
      timer = window.setInterval(() => {
        setThinkingTime((t) => t + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isThinking]);

  const startThinking = () => {
    setPhase('think');
    setIsThinking(true);
    setThinkingTime(0);
  };

  const finishThinking = () => {
    setIsThinking(false);
    setPhase('reveal');
    setRevealedHints([]);
  };

  const revealHint = (index: number) => {
    if (!revealedHints.includes(index)) {
      setRevealedHints([...revealedHints, index]);
      // Each reveal decreases confidence by 10-15%
      setFinalConfidence((prev) => Math.max(10, prev - 10 - Math.random() * 5));
    }
  };

  const goToCompare = () => {
    setPhase('compare');
  };

  const nextChallenge = () => {
    setCurrentChallenge((prev) => (prev + 1) % challenges.length);
    setPhase('rate');
    setInitialConfidence(70);
    setFinalConfidence(70);
    setRevealedHints([]);
    setThinkingTime(0);
  };

  const reset = () => {
    setPhase('rate');
    setInitialConfidence(70);
    setFinalConfidence(70);
    setRevealedHints([]);
    setThinkingTime(0);
  };

  const confidenceDrop = initialConfidence - finalConfidence;

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Title */}
      <div className="text-center">
        <h3 className="text-sm font-bold text-purple-400">The Knowledge Illusion</h3>
        <p className="text-[10px] text-gray-500">You know less than you think you know</p>
      </div>

      {/* Challenge selector */}
      <div className="flex gap-2">
        {challenges.map((c, i) => (
          <button
            key={i}
            onClick={() => {
              if (phase === 'rate') {
                setCurrentChallenge(i);
                reset();
              }
            }}
            disabled={phase !== 'rate'}
            className={`w-11 h-11 rounded-xl text-xl transition-all ${
              currentChallenge === i
                ? 'bg-purple-500/20 border-2 border-purple-500 shadow-lg shadow-purple-500/20'
                : phase === 'rate'
                ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700'
                : 'bg-gray-800/50 border border-gray-800 opacity-50 cursor-not-allowed'
            }`}
          >
            {c.icon}
          </button>
        ))}
      </div>

      {/* Main visualization area */}
      <AnimatePresence mode="wait">
        {/* Phase 1: Rate initial confidence */}
        {phase === 'rate' && (
          <motion.div
            key="rate"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-sm space-y-4"
          >
            <div className="text-center p-4 bg-purple-500/10 border border-purple-500/30 rounded-2xl">
              <span className="text-4xl">{challenge.icon}</span>
              <p className="text-sm text-gray-300 mt-2">{challenge.question}</p>
            </div>

            <div className="p-4 bg-[#111113] border border-gray-800 rounded-xl">
              <p className="text-[10px] text-gray-500 mb-2 text-center">
                Rate your understanding before trying to explain:
              </p>

              <div className="relative mb-4">
                <div className="flex justify-between text-[10px] text-gray-600 mb-2">
                  <span>No clue</span>
                  <span className="text-purple-400 font-bold text-lg">{initialConfidence}%</span>
                  <span>Expert</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={initialConfidence}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setInitialConfidence(val);
                    setFinalConfidence(val);
                  }}
                  className="w-full h-2 appearance-none bg-gray-800 rounded-full cursor-pointer"
                  style={{ accentColor: '#8B5CF6' }}
                />
              </div>

              {/* Confidence meter visual */}
              <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"
                  animate={{ width: `${initialConfidence}%` }}
                  transition={{ type: 'spring', stiffness: 200 }}
                />
              </div>
            </div>

            <motion.button
              onClick={startThinking}
              className="w-full py-4 rounded-xl text-sm font-semibold bg-purple-500 text-white"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              🧠 Now Try to Explain It
            </motion.button>
          </motion.div>
        )}

        {/* Phase 2: Thinking/explaining */}
        {phase === 'think' && (
          <motion.div
            key="think"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-sm space-y-4"
          >
            <div className="text-center p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl">
              <motion.span
                className="text-4xl inline-block"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🤔
              </motion.span>
              <p className="text-sm text-amber-400 mt-2 font-medium">Think out loud...</p>
              <p className="text-xs text-gray-400 mt-1">{challenge.prompt}</p>
            </div>

            {/* Timer */}
            <div className="text-center">
              <motion.p
                className="text-3xl font-mono text-purple-400"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {Math.floor(thinkingTime / 60)}:{(thinkingTime % 60).toString().padStart(2, '0')}
              </motion.p>
              <p className="text-[10px] text-gray-500">Time spent thinking</p>
            </div>

            {/* Animated brain */}
            <div className="relative h-32 flex items-center justify-center">
              <motion.div
                className="w-24 h-24 rounded-full border-4 border-purple-500/30 flex items-center justify-center"
                animate={{
                  borderColor: ['#8B5CF630', '#8B5CF650', '#8B5CF630'],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-4xl">🧠</span>
              </motion.div>

              {/* Floating question marks */}
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute text-purple-400 text-lg"
                  initial={{ opacity: 0, y: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    y: [-20, -60],
                    x: (i - 2) * 30,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                >
                  ?
                </motion.span>
              ))}
            </div>

            <motion.button
              onClick={finishThinking}
              className="w-full py-4 rounded-xl text-sm font-semibold bg-amber-500 text-black"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Done Explaining →
            </motion.button>
          </motion.div>
        )}

        {/* Phase 3: Reveal the truth */}
        {phase === 'reveal' && (
          <motion.div
            key="reveal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-sm space-y-3"
          >
            <div className="text-center">
              <p className="text-xs text-gray-400">Did you mention all of these?</p>
              <p className="text-[10px] text-gray-600">Click each to reveal</p>
            </div>

            {/* Reveal cards */}
            <div className="space-y-2">
              {challenge.reveal.map((hint, i) => (
                <motion.button
                  key={i}
                  onClick={() => revealHint(i)}
                  className={`w-full p-3 rounded-xl text-left transition-all ${
                    revealedHints.includes(i)
                      ? 'bg-red-500/10 border border-red-500/30'
                      : 'bg-gray-800 border border-gray-700 hover:border-gray-600'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex items-start gap-2">
                    <span className="text-lg">
                      {revealedHints.includes(i) ? '❌' : '❓'}
                    </span>
                    <p className={`text-xs ${
                      revealedHints.includes(i) ? 'text-gray-300' : 'text-gray-500'
                    }`}>
                      {revealedHints.includes(i) ? hint : 'Tap to reveal...'}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Updated confidence */}
            <div className="p-3 bg-[#111113] border border-gray-800 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] text-gray-500">Your updated confidence:</span>
                <span className="text-lg font-bold text-red-400">{Math.round(finalConfidence)}%</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden relative">
                <div
                  className="absolute h-full bg-purple-500/30 rounded-full"
                  style={{ width: `${initialConfidence}%` }}
                />
                <motion.div
                  className="absolute h-full bg-green-500 rounded-full"
                  animate={{ width: `${finalConfidence}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="flex justify-between text-[9px] mt-1">
                <span className="text-gray-500">Before: {initialConfidence}%</span>
                <span className="text-red-400">-{Math.round(confidenceDrop)}% drop</span>
              </div>
            </div>

            <motion.button
              onClick={goToCompare}
              className="w-full py-3 rounded-xl text-sm font-semibold bg-purple-500 text-white"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              See the Lesson →
            </motion.button>
          </motion.div>
        )}

        {/* Phase 4: Compare and learn */}
        {phase === 'compare' && (
          <motion.div
            key="compare"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-sm space-y-4"
          >
            {/* Visual comparison */}
            <div className="relative h-40 flex items-center justify-center">
              <div className="relative">
                {/* What you thought you knew (large, fading) */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ scale: 1 }}
                  animate={{ scale: 0.5, opacity: 0.3 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  <div
                    className="rounded-full border-2 border-purple-500/30 border-dashed"
                    style={{
                      width: `${initialConfidence * 1.2}px`,
                      height: `${initialConfidence * 1.2}px`,
                    }}
                  />
                </motion.div>

                {/* What you actually know (small, solid) */}
                <motion.div
                  className="rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: 'spring' }}
                  style={{
                    width: `${Math.max(40, finalConfidence * 0.8)}px`,
                    height: `${Math.max(40, finalConfidence * 0.8)}px`,
                  }}
                >
                  <span className="text-2xl">{challenge.icon}</span>
                </motion.div>
              </div>

              {/* Labels */}
              <motion.div
                className="absolute top-2 left-2 text-[10px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-purple-400">Thought: {initialConfidence}%</span>
              </motion.div>
              <motion.div
                className="absolute bottom-2 right-2 text-[10px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <span className="text-green-400">Actual: {Math.round(finalConfidence)}%</span>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-2 text-center">
                <p className="text-lg font-bold text-purple-400">{initialConfidence}%</p>
                <p className="text-[9px] text-gray-500">Before</p>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-2 text-center">
                <p className="text-lg font-bold text-red-400">-{Math.round(confidenceDrop)}%</p>
                <p className="text-[9px] text-gray-500">Drop</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-2 text-center">
                <p className="text-lg font-bold text-green-400">{Math.round(finalConfidence)}%</p>
                <p className="text-[9px] text-gray-500">After</p>
              </div>
            </div>

            {/* Explanation */}
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl">
              <p className="text-[10px] text-amber-400 font-medium">💡 Research shows:</p>
              <p className="text-[10px] text-gray-400 mt-1">{challenge.explanation}</p>
            </div>

            <button
              onClick={nextChallenge}
              className="w-full py-3 rounded-xl text-sm font-semibold bg-gray-800 border border-gray-700 text-gray-300"
            >
              Try Another Topic →
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Key insight */}
      <div className="bg-[#111113] border border-gray-800 rounded-xl p-4 max-w-sm">
        <p className="text-xs text-gray-400 leading-relaxed text-center">
          <span className="text-purple-400 font-medium">Steven Sloman:</span> "We think we know more
          than we do because we draw on knowledge in the world and in others' heads.
          The illusion breaks when we're asked to explain."
        </p>
      </div>

      <p className="text-[10px] text-gray-600">From The Knowledge Illusion</p>
    </div>
  );
}

export default KnowledgeIllusion;
