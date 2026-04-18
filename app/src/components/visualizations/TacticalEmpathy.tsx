import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Phase = 'intro' | 'scenario' | 'practice' | 'result';
type Technique = 'mirroring' | 'labeling' | 'accusation' | 'calibrated' | 'thatsright';

interface Message {
  sender: 'them' | 'you' | 'narrator';
  text: string;
  technique?: Technique;
  isGood?: boolean;
}

interface ScenarioChoice {
  text: string;
  technique: Technique;
  isCorrect: boolean;
  explanation: string;
}

interface Scenario {
  id: string;
  title: string;
  context: string;
  icon: string;
  messages: Message[];
  theirResponse: string;
  choices: ScenarioChoice[];
  goodOutcome: string;
  badOutcome: string;
}

const techniques: Record<Technique, { name: string; icon: string; color: string; tip: string }> = {
  mirroring: {
    name: 'Mirroring',
    icon: '🪞',
    color: '#3B82F6',
    tip: 'Repeat last 1-3 words as a question',
  },
  labeling: {
    name: 'Labeling',
    icon: '🏷️',
    color: '#8B5CF6',
    tip: '"It seems like..." to name their emotion',
  },
  accusation: {
    name: 'Accusation Audit',
    icon: '📋',
    color: '#F59E0B',
    tip: 'Voice their concerns before they do',
  },
  calibrated: {
    name: 'Calibrated Question',
    icon: '❓',
    color: '#22C55E',
    tip: 'Ask "How" or "What" questions',
  },
  thatsright: {
    name: '"That\'s Right"',
    icon: '✓',
    color: '#EF4444',
    tip: 'Summarize until they say "That\'s right"',
  },
};

const scenarios: Scenario[] = [
  {
    id: 'salary',
    title: 'Salary Negotiation',
    context: 'You\'ve been offered $75k but want $90k',
    icon: '💼',
    messages: [
      { sender: 'narrator', text: 'Your boss calls you into their office...' },
      { sender: 'them', text: 'Look, I\'ve talked to HR and $75,000 is the best we can do right now.' },
    ],
    theirResponse: 'We really can\'t go higher.',
    choices: [
      {
        text: '"The best you can do right now?"',
        technique: 'mirroring',
        isCorrect: true,
        explanation: 'Mirroring prompts them to elaborate and often reveal more flexibility.',
      },
      {
        text: '"I need $90,000 or I\'ll have to look elsewhere."',
        technique: 'calibrated',
        isCorrect: false,
        explanation: 'Ultimatums create adversarial dynamics and close doors.',
      },
      {
        text: '"That\'s disappointing. Can\'t you do better?"',
        technique: 'labeling',
        isCorrect: false,
        explanation: 'Vague requests don\'t create productive dialogue.',
      },
    ],
    goodOutcome: '"Well... there might be a signing bonus we could explore, and a 6-month review..."',
    badOutcome: '"I understand. Let us know what you decide."',
  },
  {
    id: 'deadline',
    title: 'Impossible Deadline',
    context: 'Client demands project in 2 weeks (needs 6)',
    icon: '⏰',
    messages: [
      { sender: 'narrator', text: 'An important client calls with urgent demands...' },
      { sender: 'them', text: 'We need this delivered in two weeks. No exceptions. Our CEO is presenting it to the board.' },
    ],
    theirResponse: 'Two weeks is final.',
    choices: [
      {
        text: '"How am I supposed to do that?"',
        technique: 'calibrated',
        isCorrect: true,
        explanation: 'Calibrated questions make them solve your problem without saying "no".',
      },
      {
        text: '"That\'s impossible. We need at least 6 weeks."',
        technique: 'mirroring',
        isCorrect: false,
        explanation: 'Direct rejection creates conflict and ends negotiation.',
      },
      {
        text: '"Let me check with my team and get back to you."',
        technique: 'labeling',
        isCorrect: false,
        explanation: 'Avoiding the issue delays conflict but doesn\'t resolve it.',
      },
    ],
    goodOutcome: '"Well... what would you need to make it work? Maybe we can provide extra resources."',
    badOutcome: '"Then we may need to find another vendor who can deliver."',
  },
  {
    id: 'angry',
    title: 'Angry Customer',
    context: 'Customer is furious about a delayed shipment',
    icon: '😤',
    messages: [
      { sender: 'narrator', text: 'A customer storms in, visibly upset...' },
      { sender: 'them', text: 'This is RIDICULOUS! I paid for express shipping and it\'s been TWO WEEKS! I want a full refund!' },
    ],
    theirResponse: 'I\'m done with your company!',
    choices: [
      {
        text: '"It sounds like you\'re really frustrated, and you feel like we\'ve let you down."',
        technique: 'labeling',
        isCorrect: true,
        explanation: 'Labeling their emotion validates their feelings and defuses anger.',
      },
      {
        text: '"I understand, but shipping delays happen due to carrier issues."',
        technique: 'accusation',
        isCorrect: false,
        explanation: 'Excuses dismiss their feelings and escalate frustration.',
      },
      {
        text: '"What would make this right for you?"',
        technique: 'calibrated',
        isCorrect: false,
        explanation: 'Good technique, but first you need to acknowledge their emotion.',
      },
    ],
    goodOutcome: '"...Yes. Exactly. I just feel like nobody cares." (Calming down)',
    badOutcome: '"Don\'t give me excuses! I want to speak to your manager!"',
  },
  {
    id: 'raise',
    title: 'Asking for Raise',
    context: 'You haven\'t had a raise in 3 years',
    icon: '📈',
    messages: [
      { sender: 'narrator', text: 'You\'ve scheduled a meeting with your boss...' },
      { sender: 'you', text: 'I wanted to discuss my compensation...' },
      { sender: 'them', text: 'Ah. Okay. I was wondering when this would come up.' },
    ],
    theirResponse: 'Times are tough right now.',
    choices: [
      {
        text: '"You\'re probably thinking I\'m being greedy coming to you during a tough quarter..."',
        technique: 'accusation',
        isCorrect: true,
        explanation: 'Accusation Audit defuses their objections before they voice them.',
      },
      {
        text: '"I\'ve been here 3 years without a raise. I deserve more."',
        technique: 'calibrated',
        isCorrect: false,
        explanation: 'Demands create defensive reactions.',
      },
      {
        text: '"When this would come up?"',
        technique: 'mirroring',
        isCorrect: false,
        explanation: 'Good technique, but at this stage you want to preempt their objections.',
      },
    ],
    goodOutcome: '"No, actually I think you\'ve been really patient. Let\'s see what we can figure out."',
    badOutcome: '"Well, you\'re right that it\'s not great timing. Let\'s revisit in Q4."',
  },
];

export function TacticalEmpathy() {
  const [phase, setPhase] = useState<Phase>('intro');
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [rapport, setRapport] = useState(50);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [showOutcome, setShowOutcome] = useState(false);
  const [completedScenarios, setCompletedScenarios] = useState<number[]>([]);
  const [techniqueUsed, setTechniqueUsed] = useState<Technique[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const scenario = scenarios[scenarioIndex];

  const handleChoiceSelect = (choiceIndex: number) => {
    if (selectedChoice !== null) return;

    setSelectedChoice(choiceIndex);
    const choice = scenario.choices[choiceIndex];

    // Add technique to used list
    if (!techniqueUsed.includes(choice.technique)) {
      setTechniqueUsed([...techniqueUsed, choice.technique]);
    }

    // Animate typing response
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);

      // Update rapport
      if (choice.isCorrect) {
        setRapport(Math.min(100, rapport + 15));
      } else {
        setRapport(Math.max(0, rapport - 10));
      }

      // Show outcome after delay
      setTimeout(() => {
        setShowOutcome(true);
      }, 500);
    }, 1500);
  };

  const nextScenario = () => {
    setCompletedScenarios([...completedScenarios, scenarioIndex]);

    if (scenarioIndex < scenarios.length - 1) {
      setScenarioIndex(scenarioIndex + 1);
      setSelectedChoice(null);
      setShowOutcome(false);
    } else {
      setPhase('result');
    }
  };

  const resetPractice = () => {
    setPhase('intro');
    setScenarioIndex(0);
    setRapport(50);
    setSelectedChoice(null);
    setShowOutcome(false);
    setCompletedScenarios([]);
    setTechniqueUsed([]);
  };

  // Intro phase - technique overview
  if (phase === 'intro') {
    return (
      <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
        {/* Dark Glassmorphism background - 88% transparent */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-purple-500/[0.02]" />
        <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

        <div className="relative z-10 p-5">
          <div className="flex flex-col items-center gap-4">
            <div className="text-center mb-2">
              <h3 className="text-sm font-bold text-blue-400">Tactical Empathy Training</h3>
              <p className="text-[10px] text-[var(--viz-muted)]">Master the 5 techniques from Never Split the Difference</p>
            </div>

            {/* Technique cards */}
            <div className="w-full max-w-sm space-y-2">
              {Object.entries(techniques).map(([key, tech], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-xl"
                >
                  <div
                    className="absolute inset-0 backdrop-blur-sm"
                    style={{ backgroundColor: tech.color + '10' }}
                  />
                  <div
                    className="absolute inset-0 border rounded-xl"
                    style={{ borderColor: tech.color + '30' }}
                  />
                  <div className="relative z-10 flex items-center gap-3 p-3">
                    <span className="text-2xl">{tech.icon}</span>
                    <div className="flex-1">
                      <p className="text-xs font-medium" style={{ color: tech.color }}>
                        {tech.name}
                      </p>
                      <p className="text-[10px] text-[var(--viz-muted)]">{tech.tip}</p>
                    </div>
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: tech.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Start button */}
            <motion.button
              onClick={() => setPhase('scenario')}
              className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-[var(--viz-text)] text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Practice Scenarios
            </motion.button>

            <p className="text-[10px] text-gray-600 text-center max-w-xs">
              Practice real negotiation scenarios and learn when to use each technique
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Result phase - final score
  if (phase === 'result') {
    const score = Math.round((rapport / 100) * 100);
    const techniquesLearned = techniqueUsed.length;

    return (
      <div className="relative overflow-hidden rounded-2xl">
        {/* Dark Glassmorphism background - 88% transparent */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-purple-500/[0.02]" />
        <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

        <div className="relative z-10 p-5">
          <div className="flex flex-col items-center gap-5">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-center"
            >
              <div className="text-6xl mb-4">
                {score >= 80 ? '🏆' : score >= 60 ? '🎯' : '💪'}
              </div>
              <h3 className="text-lg font-bold text-[var(--viz-text)] mb-1">Training Complete!</h3>
              <p className="text-xs text-[var(--viz-muted)]">
                {score >= 80 ? 'FBI Negotiator Level!' : score >= 60 ? 'Solid Foundation!' : 'Keep Practicing!'}
              </p>
            </motion.div>

            {/* Stats */}
            <div className="w-full max-w-xs grid grid-cols-2 gap-3">
              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-[var(--viz-tile)] backdrop-blur-sm" />
                <div className="absolute inset-0 border border-[var(--viz-border)] rounded-xl" />
                <div className="relative z-10 p-3 text-center">
                  <p className="text-2xl font-bold text-blue-400">{score}%</p>
                  <p className="text-[10px] text-[var(--viz-muted)]">Rapport Score</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-[var(--viz-tile)] backdrop-blur-sm" />
                <div className="absolute inset-0 border border-[var(--viz-border)] rounded-xl" />
                <div className="relative z-10 p-3 text-center">
                  <p className="text-2xl font-bold text-purple-400">{techniquesLearned}/5</p>
                  <p className="text-[10px] text-[var(--viz-muted)]">Techniques Used</p>
                </div>
              </div>
            </div>

            {/* Techniques mastered */}
            <div className="w-full max-w-xs">
              <p className="text-xs text-[var(--viz-muted)] mb-2">Techniques practiced:</p>
              <div className="flex flex-wrap gap-2">
                {techniqueUsed.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 rounded-lg text-[10px] backdrop-blur-sm"
                    style={{
                      backgroundColor: techniques[t].color + '20',
                      color: techniques[t].color,
                    }}
                  >
                    {techniques[t].icon} {techniques[t].name}
                  </span>
                ))}
              </div>
            </div>

            {/* Key insight */}
            <div className="relative overflow-hidden rounded-xl max-w-xs">
              <div className="absolute inset-0 bg-[var(--viz-tile)] backdrop-blur-sm" />
              <div className="absolute inset-0 border border-[var(--viz-border)] rounded-xl" />
              <div className="relative z-10 p-4">
                <p className="text-xs text-[var(--viz-muted)] leading-relaxed">
                  <span className="text-blue-400 font-medium">Chris Voss:</span> "Tactical empathy
                  is understanding the feelings and mindset of another in the moment—and hearing what's
                  behind those feelings. It's emotional intelligence on steroids."
                </p>
              </div>
            </div>

            <motion.button
              onClick={resetPractice}
              className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-xl text-blue-400 text-xs backdrop-blur-sm hover:bg-blue-500/25 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Practice Again
            </motion.button>
          </div>
        </div>
      </div>
    );
  }

  // Scenario/Practice phase
  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-purple-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-4 w-full max-w-sm mx-auto">
          {/* Header with rapport meter */}
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">{scenario.icon}</span>
              <div>
                <p className="text-xs font-medium text-[var(--viz-text)]">{scenario.title}</p>
                <p className="text-[9px] text-[var(--viz-muted)]">{scenario.context}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[9px] text-[var(--viz-muted)]">Rapport</p>
              <div className="w-16 h-2 bg-[var(--viz-inner)] rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    backgroundColor: rapport > 60 ? '#22C55E' : rapport > 30 ? '#F59E0B' : '#EF4444',
                  }}
                  animate={{ width: `${rapport}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>

          {/* Progress dots */}
          <div className="flex gap-1">
            {scenarios.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  completedScenarios.includes(i)
                    ? 'bg-green-500'
                    : i === scenarioIndex
                    ? 'bg-blue-500'
                    : 'bg-white/10'
                }`}
              />
            ))}
          </div>

          {/* Chat conversation */}
          <div className="w-full relative overflow-hidden rounded-xl min-h-[160px]">
            <div className="absolute inset-0 bg-[var(--viz-tile)] backdrop-blur-sm" />
            <div className="absolute inset-0 border border-[var(--viz-border)] rounded-xl" />
            <div className="relative z-10 p-3">
              <div className="space-y-2">
                {scenario.messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className={`flex ${
                      msg.sender === 'you'
                        ? 'justify-end'
                        : msg.sender === 'narrator'
                        ? 'justify-center'
                        : 'justify-start'
                    }`}
                  >
                    {msg.sender === 'narrator' ? (
                      <p className="text-[10px] text-[var(--viz-muted)] italic">{msg.text}</p>
                    ) : (
                      <div
                        className={`max-w-[80%] px-3 py-2 rounded-xl text-xs ${
                          msg.sender === 'you'
                            ? 'bg-blue-500/20 border border-blue-500/30 text-blue-100'
                            : 'bg-[var(--viz-inner)] text-[var(--viz-secondary)]'
                        }`}
                      >
                        {msg.text}
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* Selected response */}
                {selectedChoice !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-end"
                  >
                    <div className="max-w-[80%] px-3 py-2 rounded-xl text-xs bg-blue-500/20 border border-blue-500/30 text-blue-100">
                      {scenario.choices[selectedChoice].text}
                    </div>
                  </motion.div>
                )}

                {/* Typing indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="px-3 py-2 bg-[var(--viz-inner)] rounded-xl">
                      <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-1.5 h-1.5 bg-gray-500 rounded-full"
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.15 }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Their response to your choice */}
                {showOutcome && selectedChoice !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="max-w-[80%] px-3 py-2 rounded-xl text-xs bg-[var(--viz-inner)] text-[var(--viz-secondary)]">
                      {scenario.choices[selectedChoice].isCorrect
                        ? scenario.goodOutcome
                        : scenario.badOutcome}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Response choices or feedback */}
          <AnimatePresence mode="wait">
            {selectedChoice === null ? (
              <motion.div
                key="choices"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full space-y-2"
              >
                <p className="text-[10px] text-[var(--viz-muted)] text-center">Choose your response:</p>
                {scenario.choices.map((choice, i) => (
                  <motion.button
                    key={i}
                    onClick={() => handleChoiceSelect(i)}
                    className="relative w-full overflow-hidden rounded-xl text-left transition-all"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="absolute inset-0 bg-[var(--viz-tile)] backdrop-blur-sm hover:bg-[var(--viz-tile)] transition-all" />
                    <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-xl hover:border-white/[0.2] transition-all" />
                    <div className="relative z-10 p-3">
                      <p className="text-xs text-[var(--viz-secondary)]">{choice.text}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-sm">{techniques[choice.technique].icon}</span>
                        <span
                          className="text-[9px]"
                          style={{ color: techniques[choice.technique].color }}
                        >
                          {techniques[choice.technique].name}
                        </span>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            ) : showOutcome ? (
              <motion.div
                key="feedback"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full space-y-3"
              >
                {/* Feedback card */}
                <div className="relative overflow-hidden rounded-xl">
                  <div
                    className={`absolute inset-0 backdrop-blur-sm ${
                      scenario.choices[selectedChoice].isCorrect
                        ? 'bg-green-500/10'
                        : 'bg-amber-500/10'
                    }`}
                  />
                  <div
                    className={`absolute inset-0 border rounded-xl ${
                      scenario.choices[selectedChoice].isCorrect
                        ? 'border-green-500/30'
                        : 'border-amber-500/30'
                    }`}
                  />
                  <div className="relative z-10 p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">
                        {scenario.choices[selectedChoice].isCorrect ? '✅' : '💡'}
                      </span>
                      <span
                        className={`text-xs font-medium ${
                          scenario.choices[selectedChoice].isCorrect
                            ? 'text-green-400'
                            : 'text-amber-400'
                        }`}
                      >
                        {scenario.choices[selectedChoice].isCorrect
                          ? 'Great choice!'
                          : 'Learning moment'}
                      </span>
                    </div>
                    <p className="text-[11px] text-[var(--viz-secondary)]">
                      {scenario.choices[selectedChoice].explanation}
                    </p>
                  </div>
                </div>

                {/* Technique highlight */}
                <div className="relative overflow-hidden rounded-lg">
                  <div
                    className="absolute inset-0 backdrop-blur-sm"
                    style={{
                      backgroundColor: techniques[scenario.choices[selectedChoice].technique].color + '15',
                    }}
                  />
                  <div className="relative z-10 p-2 flex items-center gap-2">
                    <span className="text-xl">
                      {techniques[scenario.choices[selectedChoice].technique].icon}
                    </span>
                    <div>
                      <p
                        className="text-[10px] font-medium"
                        style={{ color: techniques[scenario.choices[selectedChoice].technique].color }}
                      >
                        {techniques[scenario.choices[selectedChoice].technique].name}
                      </p>
                      <p className="text-[9px] text-[var(--viz-muted)]">
                        {techniques[scenario.choices[selectedChoice].technique].tip}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Next button */}
                <motion.button
                  onClick={nextScenario}
                  className="w-full py-2 bg-blue-500/20 border border-blue-500/50 rounded-xl text-blue-400 text-xs font-medium backdrop-blur-sm hover:bg-blue-500/25 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {scenarioIndex < scenarios.length - 1 ? 'Next Scenario' : 'See Results'}
                </motion.button>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <p className="text-[10px] text-gray-600">From Never Split the Difference</p>
        </div>
      </div>
    </div>
  );
}

export default TacticalEmpathy;
