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
      <div className="flex flex-col items-center gap-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-xs space-y-4"
        >
          <div className="bg-[#111113] border border-gray-800 rounded-lg p-4 text-center">
            <p className="text-lg font-bold text-amber-400">Calibration Results</p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center">
              <p className="text-xl font-bold text-green-400">{accuracy.toFixed(0)}%</p>
              <p className="text-[10px] text-gray-500">Actual Accuracy</p>
              <p className="text-[8px] text-gray-600">{correctCount}/{responses.length} correct</p>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 text-center">
              <p className="text-xl font-bold text-blue-400">{avgConfidence.toFixed(0)}%</p>
              <p className="text-[10px] text-gray-500">Avg Confidence</p>
            </div>
          </div>

          <div className={`p-4 rounded-lg border ${
            calibration < 15
              ? 'bg-green-500/10 border-green-500/30'
              : calibration < 30
              ? 'bg-amber-500/10 border-amber-500/30'
              : 'bg-red-500/10 border-red-500/30'
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
            <p className="text-xs text-gray-400 text-center mt-1">
              Gap: {calibration.toFixed(0)} percentage points
            </p>
          </div>

          <div className="bg-[#111113] border border-gray-800 rounded-lg p-3">
            <p className="text-[10px] text-gray-400">
              <span className="text-purple-400">Perfect calibration</span> means your confidence
              matches your accuracy. If you're 70% confident, you should be right 70% of the time.
            </p>
          </div>

          {/* Individual results */}
          <div className="space-y-1">
            <p className="text-[10px] text-gray-500">Your answers:</p>
            {questions.map((q, idx) => {
              const r = responses[idx];
              const isCorrect = r.guess === q.answer;
              return (
                <div key={idx} className={`p-2 rounded text-[10px] flex justify-between ${
                  isCorrect ? 'bg-green-500/10' : 'bg-red-500/10'
                }`}>
                  <span className="text-gray-400 truncate flex-1">{q.question.slice(0, 30)}...</span>
                  <span className={isCorrect ? 'text-green-400' : 'text-red-400'}>
                    {r.confidence}% conf
                  </span>
                </div>
              );
            })}
          </div>

          <button
            onClick={reset}
            className="w-full py-2 bg-gray-800 border border-gray-700 rounded-lg text-xs text-gray-400"
          >
            Try Again
          </button>
        </motion.div>

        <p className="text-[10px] text-gray-500 text-center">
          From "Thinking in Bets" by Annie Duke
        </p>
      </div>
    );
  }

  const q = questions[currentQ];

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-center">
        <p className="text-xs text-gray-400">
          Rate your confidence: How likely is this statement to be true?
        </p>
      </div>

      <div className="w-full max-w-xs bg-[#111113] border border-gray-800 rounded-lg p-4">
        <p className="text-[10px] text-gray-500 mb-2">
          Question {currentQ + 1}/{questions.length}
        </p>
        <p className="text-sm text-gray-300">{q.question}</p>
      </div>

      {/* True/False selection */}
      <div className="w-full max-w-xs grid grid-cols-2 gap-2">
        <motion.button
          onClick={() => setGuess(true)}
          className={`py-3 rounded-lg border text-sm transition-all ${
            guess === true
              ? 'bg-green-500/20 border-green-500/50 text-green-400'
              : 'bg-[#111113] border-gray-800 text-gray-500 hover:border-gray-700'
          }`}
          whileTap={{ scale: 0.98 }}
        >
          True
        </motion.button>
        <motion.button
          onClick={() => setGuess(false)}
          className={`py-3 rounded-lg border text-sm transition-all ${
            guess === false
              ? 'bg-red-500/20 border-red-500/50 text-red-400'
              : 'bg-[#111113] border-gray-800 text-gray-500 hover:border-gray-700'
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
            <span className="text-gray-500">Confidence:</span>
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
            className="w-full py-2 bg-amber-500/20 border border-amber-500/50 rounded-lg text-xs text-amber-400 mt-2"
          >
            Submit Answer
          </button>
        </motion.div>
      )}

      <p className="text-[10px] text-gray-500 text-center">
        From "Thinking in Bets" by Annie Duke
      </p>
    </div>
  );
}

export default ConfidenceCalibration;
