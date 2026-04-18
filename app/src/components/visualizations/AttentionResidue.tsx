import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

interface Task {
  id: string;
  name: string;
  color: string;
}

const tasks: Task[] = [
  { id: 'email', name: 'Checking email', color: '#3B82F6' },
  { id: 'code', name: 'Deep coding', color: '#22C55E' },
  { id: 'meeting', name: 'Team meeting', color: '#8B5CF6' },
  { id: 'slack', name: 'Slack messages', color: '#F59E0B' },
];

export function AttentionResidue() {
  const [currentTask, setCurrentTask] = useState(0);
  const [residueLayers, setResidueLayers] = useState<Task[]>([]);
  const [focusQuality, setFocusQuality] = useState(100);
  const [taskHistory, setTaskHistory] = useState<Task[]>([]);

  const switchTask = (newTaskIndex: number) => {
    if (newTaskIndex === currentTask) return;

    const oldTask = tasks[currentTask];

    // Add residue from previous task
    setResidueLayers(prev => [...prev, oldTask]);
    setTaskHistory(prev => [...prev, oldTask]);

    // Decrease focus quality
    setFocusQuality(prev => Math.max(20, prev - 15));

    setCurrentTask(newTaskIndex);
  };

  const takeBreak = () => {
    // Clear residue gradually
    setResidueLayers([]);
    setFocusQuality(100);
    setTaskHistory([]);
  };

  const task = tasks[currentTask];

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Glass layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-purple-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 100%)' }}
          >
            <Brain className="w-4 h-4 text-blue-400" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-[var(--viz-secondary)]">Attention Residue</h3>
            <p className="text-[10px] text-[var(--viz-muted)]">From Deep Work by Cal Newport</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          {/* Brain visualization with residue layers */}
          <div className="relative w-32 h-32">
            {/* Base brain */}
            <div
              className="absolute inset-0 rounded-full border-2 border-white/20
                        flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
            >
              <span className="text-4xl">🧠</span>
            </div>

            {/* Residue layers */}
            {residueLayers.map((residue, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.3, scale: 1 }}
                className="absolute inset-0 rounded-full"
                style={{
                  border: `2px solid ${residue.color}`,
                  transform: `scale(${1 + (idx + 1) * 0.1})`,
                }}
              />
            ))}

            {/* Current task indicator */}
            <motion.div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-[10px] font-medium"
              style={{ backgroundColor: task.color + '30', color: task.color }}
              key={currentTask}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {task.name}
            </motion.div>
          </div>

          {/* Focus quality meter */}
          <div className="w-full max-w-xs">
            <div className="flex justify-between text-[10px] text-[var(--viz-muted)] mb-1">
              <span>Focus Quality</span>
              <span>{focusQuality}%</span>
            </div>
            <div
              className="h-3 rounded-full border border-[var(--viz-border)] overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  backgroundColor: focusQuality > 70 ? '#22C55E' :
                                 focusQuality > 40 ? '#F59E0B' : '#EF4444'
                }}
                animate={{ width: `${focusQuality}%` }}
              />
            </div>
          </div>

          {/* Task switcher */}
          <div className="w-full max-w-xs">
            <p className="text-[10px] text-[var(--viz-muted)] uppercase tracking-wide mb-2 text-center">
              Switch tasks to see residue build up
            </p>
            <div className="grid grid-cols-2 gap-2">
              {tasks.map((t, index) => (
                <motion.button
                  key={t.id}
                  onClick={() => switchTask(index)}
                  className={`relative p-2 rounded-lg border text-xs transition-all overflow-hidden ${
                    currentTask === index
                      ? 'border-2'
                      : 'border-[var(--viz-border)] hover:border-[var(--viz-border-light)]'
                  }`}
                  style={{
                    borderColor: currentTask === index ? t.color : undefined,
                    backgroundColor: currentTask === index ? t.color + '15' : undefined,
                    background: currentTask !== index ? 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' : undefined,
                    color: currentTask === index ? t.color : 'rgba(255,255,255,0.6)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  {t.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Switch history */}
          {taskHistory.length > 0 && (
            <div className="w-full max-w-xs">
              <p className="text-[10px] text-[var(--viz-muted)] mb-2">
                Task switches: {taskHistory.length} (each leaves residue)
              </p>
              <div className="flex flex-wrap gap-1">
                {taskHistory.map((t, idx) => (
                  <div
                    key={idx}
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: t.color }}
                    title={t.name}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Take a break button */}
          {residueLayers.length > 0 && (
            <button
              onClick={takeBreak}
              className="px-4 py-2 bg-green-500/10 border border-green-500/30
                       text-green-400 rounded-lg text-xs hover:bg-green-500/20 transition-all"
            >
              Take a break (clear residue)
            </button>
          )}

          {/* Warning at low focus */}
          {focusQuality <= 40 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 max-w-xs"
            >
              <p className="text-xs text-red-400 text-center">
                Too much residue! Your cognitive performance is severely degraded.
                Deep work is nearly impossible.
              </p>
            </motion.div>
          )}

          {/* Key insight */}
          <div
            className="relative border border-[var(--viz-border)] rounded-lg p-3 max-w-xs text-center overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="text-xs text-[var(--viz-secondary)]">
              <span className="text-blue-400 font-medium">Cal Newport:</span> Every task switch
              leaves "attention residue" that reduces cognitive capacity. Batch similar tasks,
              minimize switches.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttentionResidue;
