import { useState } from 'react';
import { motion } from 'framer-motion';

// Thinking in Bets - Confidence Calibration
const questions = [
  { question: 'The Great Wall of China is visible from space', answer: false },
  { question: 'Humans only use 10% of their brains', answer: false },
  { question: 'Lightning never strikes the same place twice', answer: false },
  { question: 'Goldfish have a 3-second memory', answer: false },
  { question: 'The Sahara is the world\'s largest desert', answer: false }, // Antarctica is
  { question: 'Mount Everest is the tallest mountain on Earth', answer: true }, // Measured from sea level
];

interface Response {
  guess: boolean;
  confidence: number;
}

export function ConfidenceCalibration() {
  const [currentQ, setCurrentQ] = useState(0);
  const [responses, setResponses] = useState<Response[]>([]);
  const [guess, setGuess] = useState<boolean | null>(null);
  const [confidence, setConfidence] = useState(50);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = () => {
    if (guess === null) return;

    setResponses([...responses, { guess, confidence }]);

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setGuess(null);
      setConfidence(50);
    } else {
      setShowResults(true);
    }
  };

  const getCalibrationScore = () => {
    let correctCount = 0;
    let totalConfidence = 0;

    responses.forEach((r, idx) => {
      if (r.guess === questions[idx].answer) {
        correctCount++;
      }
      totalConfidence += r.confidence;
    });

    const accuracy = (correctCount / responses.length) * 100;
    const avgConfidence = totalConfidence / responses.length;
    const calibration = Math.abs(accuracy - avgConfidence);

    return { accuracy, avgConfidence, calibration, correctCount };
  };

  const reset = () => {
    setCurrentQ(0);
    setResponses([]);
    setGuess(null);
    setConfidence(50);
    setShowResults(false);
  };

  if (showResults) {
    const { accuracy, avgConfidence, calibration, correctCount } = getCalibrationScore();

    return (
      <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
        {/* Dark Glassmorphism background - 88% transparent */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] via-transparent to-purple-500/[0.02]" />
        <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

        <div className="relative z-10 p-5">
          <div className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-xs space-y-4"
            >
              <div className="relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-[var(--viz-tile)] backdrop-blur-sm" />
                <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg" />
                <div className="relative z-10 p-4 text-center">
                  <p className="text-lg font-bold text-amber-400">Calibration Results</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/[0.12] to-green-500/[0.05] backdrop-blur-sm" />
                  <div className="absolute inset-0 border border-green-500/30 rounded-lg" />
                  <div className="relative z-10 p-3 text-center">
                    <p className="text-xl font-bold text-green-400">{accuracy.toFixed(0)}%</p>
                    <p className="text-[10px] text-[var(--viz-muted)]">Actual Accuracy</p>
                    <p className="text-[8px] text-gray-600">{correctCount}/{responses.length} correct</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.12] to-blue-500/[0.05] backdrop-blur-sm" />
                  <div className="absolute inset-0 border border-blue-500/30 rounded-lg" />
                  <div className="relative z-10 p-3 text-center">
                    <p className="text-xl font-bold text-blue-400">{avgConfidence.toFixed(0)}%</p>
                    <p className="text-[10px] text-[var(--viz-muted)]">Avg Confidence</p>
                  </div>
                </div>
              </div>

              <div className={`p-4 rounded-lg border backdrop-blur-sm ${
                calibration < 15
                  ? 'bg-green-500/[0.08] border-green-500/30'
                  : calibration < 30
                  ? 'bg-amber-500/[0.08] border-amber-500/30'
                  : 'bg-red-500/[0.08] border-red-500/30'
              }`}>
                <p className={`text-sm font-medium text-center ${
                  calibration < 15
                    ? 'text-green-400'
                    : calibration < 30
                    ? 'text-amber-400'
                    : 'text-red-400'
                }`}>
                  {calibration < 15
                    ? 'Well Calibrated!'
                    : calibration < 30
                    ? 'Slightly Miscalibrated'
                    : avgConfidence > accuracy
                    ? 'Overconfident'
                    : 'Underconfident'}
                </p>
                <p className="text-xs text-[var(--viz-muted)] text-center mt-1">
                  Gap: {calibration.toFixed(0)} percentage points
                </p>
              </div>

              <div className="relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-[var(--viz-tile)] backdrop-blur-sm" />
                <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg" />
                <div className="relative z-10 p-3">
                  <p className="text-[10px] text-[var(--viz-muted)]">
                    <span className="text-purple-400">Perfect calibration</span> means your confidence
                    matches your accuracy. If you're 70% confident, you should be right 70% of the time.
                  </p>
                </div>
              </div>

              {/* Individual results */}
              <div className="space-y-1">
                <p className="text-[10px] text-[var(--viz-muted)]">Your answers:</p>
                {questions.map((q, idx) => {
                  const r = responses[idx];
                  const isCorrect = r.guess === q.answer;
                  return (
                    <div key={idx} className={`p-2 rounded text-[10px] flex justify-between backdrop-blur-sm ${
                      isCorrect ? 'bg-green-500/[0.08]' : 'bg-red-500/[0.08]'
                    }`}>
                      <span className="text-[var(--viz-muted)] truncate flex-1">{q.question.slice(0, 30)}...</span>
                      <span className={isCorrect ? 'text-green-400' : 'text-red-400'}>
                        {r.confidence}% conf
                      </span>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={reset}
                className="w-full py-2 bg-[var(--viz-tile)] border border-[var(--viz-border-light)] rounded-lg text-xs text-[var(--viz-muted)] backdrop-blur-sm hover:bg-[var(--viz-tile-md)]"
              >
                Try Again
              </button>
            </motion.div>

            <p className="text-[10px] text-[var(--viz-muted)] text-center">
              From "Thinking in Bets" by Annie Duke
            </p>
          </div>
        </div>
      </div>
    );
  }

  const q = questions[currentQ];

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] via-transparent to-purple-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-4">
          <div className="text-center">
            <p className="text-xs text-[var(--viz-muted)]">
              Rate your confidence: How likely is this statement to be true?
            </p>
          </div>

          <div className="w-full max-w-xs relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-[var(--viz-tile)] backdrop-blur-sm" />
            <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg" />
            <div className="relative z-10 p-4">
              <p className="text-[10px] text-[var(--viz-muted)] mb-2">
                Question {currentQ + 1}/{questions.length}
              </p>
              <p className="text-sm text-[var(--viz-secondary)]">{q.question}</p>
            </div>
          </div>

          {/* True/False selection */}
          <div className="w-full max-w-xs grid grid-cols-2 gap-2">
            <motion.button
              onClick={() => setGuess(true)}
              className={`py-3 rounded-lg border text-sm transition-all backdrop-blur-sm ${
                guess === true
                  ? 'bg-green-500/20 border-green-500/50 text-green-400'
                  : 'bg-[var(--viz-tile)] border-[var(--viz-border)] text-[var(--viz-muted)] hover:border-[var(--viz-border-light)]'
              }`}
              whileTap={{ scale: 0.98 }}
            >
              True
            </motion.button>
            <motion.button
              onClick={() => setGuess(false)}
              className={`py-3 rounded-lg border text-sm transition-all backdrop-blur-sm ${
                guess === false
                  ? 'bg-red-500/20 border-red-500/50 text-red-400'
                  : 'bg-[var(--viz-tile)] border-[var(--viz-border)] text-[var(--viz-muted)] hover:border-[var(--viz-border-light)]'
              }`}
              whileTap={{ scale: 0.98 }}
            >
              False
            </motion.button>
          </div>

          {/* Confidence slider */}
          {guess !== null && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-xs space-y-2"
            >
              <div className="flex justify-between text-[10px]">
                <span className="text-[var(--viz-muted)]">Confidence:</span>
                <span className="text-amber-400 font-medium">{confidence}%</span>
              </div>
              <input
                type="range"
                min="50"
                max="100"
                value={confidence}
                onChange={(e) => setConfidence(Number(e.target.value))}
                className="w-full accent-amber-500"
              />
              <div className="flex justify-between text-[8px] text-gray-600">
                <span>50% (Just guessing)</span>
                <span>100% (Certain)</span>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full py-2 bg-amber-500/20 border border-amber-500/50 rounded-lg text-xs text-amber-400 mt-2 backdrop-blur-sm"
              >
                Submit Answer
              </button>
            </motion.div>
          )}

          <p className="text-[10px] text-[var(--viz-muted)] text-center">
            From "Thinking in Bets" by Annie Duke
          </p>
        </div>
      </div>
    </div>
  );
}

export default ConfidenceCalibration;
