import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';

interface Task {
  id: string;
  task: string;
  time: string;
  category: string;
}

const tasks: Task[] = [
  { id: '1', task: 'Reply to that email', time: '1 min', category: 'Communication' },
  { id: '2', task: 'Put dishes in dishwasher', time: '2 min', category: 'Home' },
  { id: '3', task: 'File that document', time: '30 sec', category: 'Work' },
  { id: '4', task: 'Make your bed', time: '1 min', category: 'Home' },
  { id: '5', task: 'Send that text', time: '30 sec', category: 'Communication' },
  { id: '6', task: 'Wipe down counter', time: '1 min', category: 'Home' },
  { id: '7', task: 'Schedule appointment', time: '2 min', category: 'Life' },
  { id: '8', task: 'Water the plant', time: '30 sec', category: 'Home' },
];

export function TwoMinuteRule() {
  const [pendingTasks, setPendingTasks] = useState(tasks);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  const [totalTimeSaved, setTotalTimeSaved] = useState(0);

  const completeTask = (task: Task) => {
    setPendingTasks(prev => prev.filter(t => t.id !== task.id));
    setCompletedTasks(prev => [...prev, task]);
    // Each undone small task creates ~15 min of mental overhead
    setTotalTimeSaved(prev => prev + 15);
  };

  const resetDemo = () => {
    setPendingTasks(tasks);
    setCompletedTasks([]);
    setTotalTimeSaved(0);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Glassmorphism layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] via-transparent to-green-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
            <Zap className="w-4 h-4 text-amber-400" />
          </div>
          <h3 className="text-sm font-medium text-[var(--viz-secondary)]">Two-Minute Rule</h3>
        </div>

        <div className="flex flex-col items-center gap-4">
          {/* Stats */}
          <div className="flex gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-amber-400">{pendingTasks.length}</p>
              <p className="text-[10px] text-[var(--viz-muted)]">Pending</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-400">{completedTasks.length}</p>
              <p className="text-[10px] text-[var(--viz-muted)]">Done</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-400">{totalTimeSaved}m</p>
              <p className="text-[10px] text-[var(--viz-muted)]">Mental overhead saved</p>
            </div>
          </div>

          {/* Rule explanation */}
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-amber-500/10" />
            <div className="absolute inset-0 border border-amber-500/30 rounded-lg" />
            <div className="relative px-4 py-2 text-center">
              <p className="text-xs text-amber-400">
                If it takes <span className="font-bold">less than 2 minutes</span>, do it NOW
              </p>
            </div>
          </div>

          {/* Task list */}
          <div className="w-full max-w-xs space-y-2">
            <AnimatePresence>
              {pendingTasks.slice(0, 5).map((task, index) => (
                <motion.button
                  key={task.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20, height: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => completeTask(task)}
                  className="w-full relative overflow-hidden rounded-lg group"
                >
                  <div
                    className="absolute inset-0 transition-colors"
                    style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
                  />
                  <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg group-hover:border-green-500/50 transition-colors" />
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="relative p-3 flex items-center justify-between">
                    <div className="text-left">
                      <p className="text-xs text-[var(--viz-secondary)] group-hover:text-green-400 transition-colors">
                        {task.task}
                      </p>
                      <p className="text-[10px] text-[var(--viz-muted)]">{task.category}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-[var(--viz-muted)]">{task.time}</span>
                      <span className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        ✓
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>

            {pendingTasks.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="text-4xl mb-2">🎉</div>
                <p className="text-sm text-green-400 font-medium">All clear!</p>
                <p className="text-xs text-[var(--viz-muted)] mt-1">
                  You saved ~{totalTimeSaved} minutes of mental overhead
                </p>
              </motion.div>
            )}
          </div>

          {/* Reset button */}
          {(completedTasks.length > 0 || pendingTasks.length < tasks.length) && (
            <button
              onClick={resetDemo}
              className="text-xs text-[var(--viz-muted)] hover:text-[var(--viz-secondary)] transition-colors"
            >
              ↻ Reset demo
            </button>
          )}

          {/* Insight */}
          <div className="relative overflow-hidden rounded-lg max-w-xs">
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
            />
            <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="relative p-3 text-center">
              <p className="text-xs text-[var(--viz-secondary)]">
                Small undone tasks create <span className="text-amber-400">mental overhead</span> far exceeding their actual time.
                Just do them.
              </p>
            </div>
          </div>

          <p className="text-[10px] text-[var(--viz-muted)] text-center">
            Click tasks to complete them • From Getting Things Done by David Allen
          </p>
        </div>
      </div>
    </div>
  );
}

export default TwoMinuteRule;
