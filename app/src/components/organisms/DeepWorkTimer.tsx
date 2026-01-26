import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw, Check, X } from 'lucide-react';
import { useProgressStore } from '@/store/progressStore';

interface DeepWorkTimerProps {
  onComplete?: (duration: number) => void;
}

const DURATIONS = [25, 45, 60, 90];

export function DeepWorkTimer({ onComplete }: DeepWorkTimerProps) {
  const [selectedDuration, setSelectedDuration] = useState(25);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const { addXP, addDeepWorkMinutes, unlockAchievement, hasAchievement, userProgress } =
    useProgressStore();

  const resetTimer = useCallback(() => {
    setMinutes(selectedDuration);
    setSeconds(0);
    setIsRunning(false);
    setIsComplete(false);
  }, [selectedDuration]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isRunning && !isComplete) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((s) => s - 1);
        } else if (minutes > 0) {
          setMinutes((m) => m - 1);
          setSeconds(59);
        } else {
          // Timer complete
          setIsRunning(false);
          setIsComplete(true);
          const xpEarned = selectedDuration * 2;
          addXP(xpEarned);
          addDeepWorkMinutes(selectedDuration);
          onComplete?.(selectedDuration);

          // Check achievements
          if (!hasAchievement('deep_work_30') && selectedDuration >= 30) {
            unlockAchievement('deep_work_30', 100);
          }
          if (!hasAchievement('deep_work_master') && userProgress.deepWorkMinutes + selectedDuration >= 180) {
            unlockAchievement('deep_work_master', 500);
          }
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds, isComplete, selectedDuration, addXP, addDeepWorkMinutes, onComplete, hasAchievement, unlockAchievement, userProgress.deepWorkMinutes]);

  const toggleTimer = () => {
    if (isComplete) {
      resetTimer();
    } else {
      setIsRunning(!isRunning);
    }
  };

  const handleDurationChange = (duration: number) => {
    if (!isRunning) {
      setSelectedDuration(duration);
      setMinutes(duration);
      setSeconds(0);
    }
  };

  const progress = isComplete
    ? 100
    : 100 - ((minutes * 60 + seconds) / (selectedDuration * 60)) * 100;

  return (
    <div className="space-y-8">
      {/* Timer Display */}
      <div className="relative flex items-center justify-center">
        {/* Progress Ring */}
        <svg className="w-64 h-64 -rotate-90">
          <circle
            cx="128"
            cy="128"
            r="120"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-border"
          />
          <motion.circle
            cx="128"
            cy="128"
            r="120"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            className={isComplete ? 'text-success' : 'text-accent'}
            strokeDasharray={754}
            initial={{ strokeDashoffset: 754 }}
            animate={{ strokeDashoffset: 754 - (754 * progress) / 100 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </svg>

        {/* Time Display */}
        <div className="absolute flex flex-col items-center">
          <span className="text-6xl font-light text-primary font-mono tracking-tight">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </span>
          {isComplete && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-success font-medium mt-2"
            >
              Session Complete!
            </motion.span>
          )}
        </div>
      </div>

      {/* Duration Selection */}
      {!isRunning && !isComplete && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center gap-3"
        >
          {DURATIONS.map((duration) => (
            <button
              key={duration}
              onClick={() => handleDurationChange(duration)}
              className={`
                px-5 py-2.5 rounded-xl text-sm font-medium transition-all
                ${selectedDuration === duration
                  ? 'bg-accent text-white'
                  : 'bg-secondary text-secondary hover:bg-elevated'
                }
              `}
            >
              {duration}m
            </button>
          ))}
        </motion.div>
      )}

      {/* Controls */}
      <div className="flex justify-center gap-4">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={toggleTimer}
          className={`
            px-8 py-4 rounded-2xl font-medium flex items-center gap-3 transition-all
            ${isComplete
              ? 'bg-success text-white hover:bg-success/90'
              : isRunning
              ? 'bg-warning text-white hover:bg-warning/90'
              : 'bg-accent text-white hover:bg-accent/90'
            }
          `}
        >
          {isComplete ? (
            <>
              <Check className="w-5 h-5" />
              Done
            </>
          ) : isRunning ? (
            <>
              <Pause className="w-5 h-5" />
              Pause
            </>
          ) : (
            <>
              <Play className="w-5 h-5" />
              Start Focus
            </>
          )}
        </motion.button>
        <button
          onClick={resetTimer}
          className="p-4 bg-secondary text-secondary rounded-2xl hover:bg-elevated transition-colors"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      {/* Stats */}
      <div className="pt-6 border-t border-border">
        <p className="text-muted text-sm text-center mb-1">Total Deep Work</p>
        <p className="text-3xl font-semibold text-accent text-center">
          {Math.floor(userProgress.deepWorkMinutes / 60)}h{' '}
          {userProgress.deepWorkMinutes % 60}m
        </p>
      </div>

      {/* Focus Rules */}
      <div className="bg-secondary rounded-xl p-5 border border-border">
        <h3 className="font-medium text-primary mb-4">Focus Rules</h3>
        <div className="space-y-3 text-sm">
          {[
            { text: 'Close all unnecessary tabs', good: true },
            { text: 'Put phone in another room', good: true },
            { text: 'Set a clear goal for this session', good: true },
            { text: 'No task switching - single focus only', good: true },
            { text: 'No "quick checks" of email or messages', good: false },
          ].map((rule, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className={rule.good ? 'text-success' : 'text-error'}>
                {rule.good ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
              </span>
              <span className="text-secondary">{rule.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DeepWorkTimer;
