import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw, Check, X, Focus, Clock, Sparkles } from 'lucide-react';
import { useProgressStore } from '@/store/progressStore';
import { GlassCard } from '@/components/molecules';

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
        {/* Glow effect */}
        <div className={`absolute inset-0 rounded-full blur-3xl opacity-20 transition-colors duration-500 ${
          isComplete ? 'bg-sage' : isRunning ? 'bg-lavender' : 'bg-sunrise'
        }`} style={{ width: 280, height: 280, left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />

        {/* Progress Ring */}
        <svg className="w-64 h-64 -rotate-90 relative z-10">
          {/* Background circle */}
          <circle
            cx="128"
            cy="128"
            r="120"
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            className="text-white/[0.06]"
          />
          {/* Progress circle */}
          <motion.circle
            cx="128"
            cy="128"
            r="120"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={754}
            initial={{ strokeDashoffset: 754 }}
            animate={{ strokeDashoffset: 754 - (754 * progress) / 100 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isComplete ? '#7CB69D' : isRunning ? '#9B8FE8' : '#FF9B71'} />
              <stop offset="100%" stopColor={isComplete ? '#A8D4BB' : isRunning ? '#6EC6FF' : '#F7C948'} />
            </linearGradient>
          </defs>
        </svg>

        {/* Time Display */}
        <div className="absolute flex flex-col items-center z-20">
          <span className="text-6xl font-display font-semibold text-text-primary tracking-tight">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </span>
          {isComplete ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mt-3"
            >
              <Sparkles className="w-4 h-4 text-sage" />
              <span className="text-sage font-display font-semibold">Session Complete!</span>
            </motion.div>
          ) : isRunning ? (
            <span className="text-sm text-lavender mt-2">Stay focused...</span>
          ) : (
            <span className="text-sm text-text-muted mt-2">Ready to focus</span>
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
            <motion.button
              key={duration}
              onClick={() => handleDurationChange(duration)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`
                px-5 py-2.5 rounded-xl text-sm font-display font-semibold transition-all border
                ${selectedDuration === duration
                  ? 'bg-gradient-to-r from-sunrise to-golden text-base border-sunrise/30 shadow-sunrise'
                  : 'glass-light border-white/10 text-text-secondary hover:border-white/20 hover:text-text-primary'
                }
              `}
            >
              {duration}m
            </motion.button>
          ))}
        </motion.div>
      )}

      {/* Controls */}
      <div className="flex justify-center gap-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={toggleTimer}
          className={`
            px-8 py-4 rounded-2xl font-display font-semibold flex items-center gap-3 transition-all shadow-lg
            ${isComplete
              ? 'bg-gradient-to-r from-sage to-sage/80 text-base shadow-sage'
              : isRunning
              ? 'bg-gradient-to-r from-lavender to-sky text-base shadow-lavender'
              : 'bg-gradient-to-r from-sunrise to-golden text-base shadow-sunrise'
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
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={resetTimer}
          className="p-4 glass-light rounded-2xl border border-white/10 text-text-secondary hover:text-text-primary hover:border-white/20 transition-colors"
        >
          <RotateCcw className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Stats */}
      <div className="pt-6 border-t border-white/[0.06]">
        <div className="flex items-center justify-center gap-2 text-text-muted text-sm mb-2">
          <Clock className="w-4 h-4" />
          <span>Total Deep Work</span>
        </div>
        <p className="text-3xl font-display font-bold text-center bg-gradient-to-r from-lavender to-sky bg-clip-text text-transparent">
          {Math.floor(userProgress.deepWorkMinutes / 60)}h{' '}
          {userProgress.deepWorkMinutes % 60}m
        </p>
      </div>

      {/* Focus Rules */}
      <GlassCard>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-lavender/10 border border-lavender/20 flex items-center justify-center">
            <Focus className="w-5 h-5 text-lavender" />
          </div>
          <h3 className="font-display font-semibold text-text-primary">Focus Rules</h3>
        </div>
        <div className="space-y-3 text-sm">
          {[
            { text: 'Close all unnecessary tabs', good: true },
            { text: 'Put phone in another room', good: true },
            { text: 'Set a clear goal for this session', good: true },
            { text: 'No task switching - single focus only', good: true },
            { text: 'No "quick checks" of email or messages', good: false },
          ].map((rule, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 ${
                rule.good ? 'bg-sage/10 border border-sage/20' : 'bg-coral/10 border border-coral/20'
              }`}>
                {rule.good ? (
                  <Check className="w-3 h-3 text-sage" />
                ) : (
                  <X className="w-3 h-3 text-coral" />
                )}
              </div>
              <span className="text-text-secondary">{rule.text}</span>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}

export default DeepWorkTimer;
