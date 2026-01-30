import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Task {
  id: string;
  name: string;
  status: 'incomplete' | 'complete';
}

const initialTasks: Task[] = [
  { id: '1', name: 'Finish project report', status: 'incomplete' },
  { id: '2', name: 'Reply to client email', status: 'incomplete' },
  { id: '3', name: 'Schedule dentist', status: 'incomplete' },
  { id: '4', name: 'Call mom back', status: 'incomplete' },
  { id: '5', name: 'Buy groceries', status: 'incomplete' },
];

export function ZeigarnikEffect() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [showBrainDemo, setShowBrainDemo] = useState(true);

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(t =>
        t.id === id
          ? { ...t, status: t.status === 'complete' ? 'incomplete' : 'complete' }
          : t
      )
    );
  };

  const resetDemo = () => {
    setTasks(initialTasks);
    setShowBrainDemo(true);
  };

  const incompleteTasks = tasks.filter(t => t.status === 'incomplete');
  const completeTasks = tasks.filter(t => t.status === 'complete');
  const mentalLoad = incompleteTasks.length * 20;

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Brain visualization */}
      <div className="relative">
        <div className="w-24 h-24 rounded-full bg-[#111113] border border-gray-800 flex items-center justify-center">
          <span className="text-4xl">🧠</span>
        </div>

        {/* Mental loops visualization */}
        <AnimatePresence>
          {showBrainDemo && incompleteTasks.map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 0.6,
                scale: 1,
                rotate: [0, 360],
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                rotate: {
                  duration: 3 + index * 0.5,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
              className="absolute inset-0"
              style={{
                borderRadius: '50%',
                border: '2px dashed',
                borderColor: '#F59E0B',
                transform: `scale(${1 + index * 0.2})`,
              }}
            />
          ))}
        </AnimatePresence>

        {/* Mental load indicator */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
          <motion.div
            className="text-xs font-bold"
            style={{ color: mentalLoad > 60 ? '#EF4444' : mentalLoad > 30 ? '#F59E0B' : '#22C55E' }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            {mentalLoad}% Load
          </motion.div>
        </div>
      </div>

      {/* Explanation */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 max-w-xs text-center mt-4">
        <p className="text-xs text-gray-300">
          <span className="text-amber-400 font-medium">The Zeigarnik Effect:</span> Your brain
          keeps <span className="text-amber-400">open loops</span> running for unfinished tasks,
          consuming mental energy even when you're not working on them.
        </p>
      </div>

      {/* Task list */}
      <div className="w-full max-w-xs space-y-2">
        <div className="flex justify-between items-center mb-2">
          <p className="text-[10px] text-gray-500 uppercase tracking-wide">Your open loops</p>
          <p className="text-[10px] text-gray-500">
            {incompleteTasks.length} open / {completeTasks.length} closed
          </p>
        </div>

        {tasks.map((task) => (
          <motion.button
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className={`w-full p-2 rounded-lg border text-left text-xs transition-all flex items-center gap-2 ${
              task.status === 'complete'
                ? 'bg-green-500/5 border-green-500/30 text-green-400/70 line-through'
                : 'bg-[#111113] border-gray-800 text-gray-300 hover:border-amber-500/30'
            }`}
            whileTap={{ scale: 0.98 }}
            layout
          >
            <span className="w-4 h-4 rounded border flex items-center justify-center text-[10px]"
              style={{
                borderColor: task.status === 'complete' ? '#22C55E' : '#4B5563',
                backgroundColor: task.status === 'complete' ? '#22C55E20' : 'transparent',
              }}
            >
              {task.status === 'complete' && '✓'}
            </span>
            {task.name}
            {task.status === 'incomplete' && (
              <motion.span
                className="ml-auto text-amber-400 text-[10px]"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ↻ looping
              </motion.span>
            )}
          </motion.button>
        ))}
      </div>

      {/* Action items */}
      <div className="bg-[#111113] border border-gray-800 rounded-lg p-3 max-w-xs">
        <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-2">Close the loops by:</p>
        <ul className="text-xs text-gray-400 space-y-1">
          <li>• <span className="text-green-400">Complete</span> the task</li>
          <li>• <span className="text-blue-400">Schedule</span> it for later</li>
          <li>• <span className="text-amber-400">Write it down</span> to externalize it</li>
          <li>• <span className="text-red-400">Decide not</span> to do it (deliberate)</li>
        </ul>
      </div>

      {/* Reset */}
      {completeTasks.length > 0 && (
        <button
          onClick={resetDemo}
          className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
        >
          ↻ Reset demo
        </button>
      )}

      <p className="text-[10px] text-gray-500 text-center">
        Click tasks to complete them • Bluma Zeigarnik (1927)
      </p>
    </div>
  );
}

export default ZeigarnikEffect;
