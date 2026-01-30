import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <div className="flex flex-col items-center gap-4">
      {/* Stats */}
      <div className="flex gap-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-amber-400">{pendingTasks.length}</p>
          <p className="text-[10px] text-gray-500">Pending</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-green-400">{completedTasks.length}</p>
          <p className="text-[10px] text-gray-500">Done</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-400">{totalTimeSaved}m</p>
          <p className="text-[10px] text-gray-500">Mental overhead saved</p>
        </div>
      </div>

      {/* Rule explanation */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg px-4 py-2 text-center">
        <p className="text-xs text-amber-400">
          If it takes <span className="font-bold">less than 2 minutes</span>, do it NOW
        </p>
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
              className="w-full p-3 bg-[#111113] border border-gray-800 rounded-lg
                       hover:border-green-500/50 hover:bg-green-500/5 transition-all
                       flex items-center justify-between group"
            >
              <div className="text-left">
                <p className="text-xs text-gray-300 group-hover:text-green-400 transition-colors">
                  {task.task}
                </p>
                <p className="text-[10px] text-gray-600">{task.category}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-gray-500">{task.time}</span>
                <span className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  ✓
                </span>
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
            <p className="text-xs text-gray-500 mt-1">
              You saved ~{totalTimeSaved} minutes of mental overhead
            </p>
          </motion.div>
        )}
      </div>

      {/* Reset button */}
      {(completedTasks.length > 0 || pendingTasks.length < tasks.length) && (
        <button
          onClick={resetDemo}
          className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
        >
          ↻ Reset demo
        </button>
      )}

      {/* Insight */}
      <div className="bg-[#111113] border border-gray-800 rounded-lg p-3 max-w-xs text-center">
        <p className="text-xs text-gray-400">
          Small undone tasks create <span className="text-amber-400">mental overhead</span> far exceeding their actual time.
          Just do them.
        </p>
      </div>

      <p className="text-[10px] text-gray-500 text-center">
        Click tasks to complete them • From Getting Things Done by David Allen
      </p>
    </div>
  );
}

export default TwoMinuteRule;
