import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Flame, Target, Check, Plus, Trash2, Calendar, TrendingUp } from 'lucide-react';

interface HabitLog {
  date: string; // YYYY-MM-DD
  completed: boolean;
}

interface Habit {
  id: string;
  name: string;
  emoji: string;
  color: string;
  logs: HabitLog[];
  createdAt: string;
}

const COLORS = [
  { name: 'orange', bg: 'bg-orange-500', light: 'bg-orange-500/20', text: 'text-orange-400' },
  { name: 'blue', bg: 'bg-blue-500', light: 'bg-blue-500/20', text: 'text-blue-400' },
  { name: 'green', bg: 'bg-green-500', light: 'bg-green-500/20', text: 'text-green-400' },
  { name: 'purple', bg: 'bg-purple-500', light: 'bg-purple-500/20', text: 'text-purple-400' },
  { name: 'pink', bg: 'bg-pink-500', light: 'bg-pink-500/20', text: 'text-pink-400' },
  { name: 'yellow', bg: 'bg-yellow-500', light: 'bg-yellow-500/20', text: 'text-yellow-400' },
];

const EMOJIS = ['🎯', '📚', '💪', '🧘', '✍️', '💧', '🏃', '😴', '🥗', '💊', '🎨', '🎵'];

export default function HabitCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [habits, setHabits] = useState<Habit[]>([
    {
      id: '1',
      name: 'Morning Meditation',
      emoji: '🧘',
      color: 'purple',
      logs: generateSampleLogs(30, 0.7),
      createdAt: '2024-01-01'
    },
    {
      id: '2',
      name: 'Read 30 mins',
      emoji: '📚',
      color: 'blue',
      logs: generateSampleLogs(30, 0.6),
      createdAt: '2024-01-01'
    },
    {
      id: '3',
      name: 'Deep Work Session',
      emoji: '🎯',
      color: 'orange',
      logs: generateSampleLogs(30, 0.5),
      createdAt: '2024-01-01'
    }
  ]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newHabit, setNewHabit] = useState({ name: '', emoji: '🎯', color: 'orange' });
  const [selectedHabit, setSelectedHabit] = useState<string | null>(null);

  // Generate sample logs for demo
  function generateSampleLogs(days: number, probability: number): HabitLog[] {
    const logs: HabitLog[] = [];
    for (let i = days; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      if (Math.random() < probability) {
        logs.push({
          date: date.toISOString().split('T')[0],
          completed: true
        });
      }
    }
    return logs;
  }

  // Calendar helpers
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  const navigateMonth = (direction: number) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1));
  };

  // Toggle habit completion for a date
  const toggleHabit = (habitId: string, date: string) => {
    setHabits(habits.map(habit => {
      if (habit.id !== habitId) return habit;

      const existingLog = habit.logs.find(log => log.date === date);
      if (existingLog) {
        return {
          ...habit,
          logs: habit.logs.filter(log => log.date !== date)
        };
      } else {
        return {
          ...habit,
          logs: [...habit.logs, { date, completed: true }]
        };
      }
    }));
  };

  // Calculate streak
  const calculateStreak = (habit: Habit): number => {
    let streak = 0;
    const today = new Date();

    for (let i = 0; i <= 365; i++) {
      const checkDate = new Date(today);
      checkDate.setDate(today.getDate() - i);
      const dateStr = formatDate(checkDate);

      if (habit.logs.some(log => log.date === dateStr)) {
        streak++;
      } else if (i > 0) {
        break;
      }
    }
    return streak;
  };

  // Calculate completion rate
  const calculateRate = (habit: Habit, days: number = 30): number => {
    const today = new Date();
    let completed = 0;

    for (let i = 0; i < days; i++) {
      const checkDate = new Date(today);
      checkDate.setDate(today.getDate() - i);
      const dateStr = formatDate(checkDate);

      if (habit.logs.some(log => log.date === dateStr)) {
        completed++;
      }
    }
    return Math.round((completed / days) * 100);
  };

  // Add new habit
  const addHabit = () => {
    if (newHabit.name.trim()) {
      setHabits([...habits, {
        id: Date.now().toString(),
        name: newHabit.name,
        emoji: newHabit.emoji,
        color: newHabit.color,
        logs: [],
        createdAt: formatDate(new Date())
      }]);
      setNewHabit({ name: '', emoji: '🎯', color: 'orange' });
      setShowAddForm(false);
    }
  };

  // Delete habit
  const deleteHabit = (habitId: string) => {
    setHabits(habits.filter(h => h.id !== habitId));
    if (selectedHabit === habitId) setSelectedHabit(null);
  };

  // Get color classes
  const getColorClasses = (colorName: string) => {
    return COLORS.find(c => c.name === colorName) || COLORS[0];
  };

  // Render calendar grid
  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Day headers
    dayNames.forEach(day => {
      days.push(
        <div key={`header-${day}`} className="text-center text-xs text-slate-500 py-2">
          {day}
        </div>
      );
    });

    // Empty cells before first day
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-1" />);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const dateStr = formatDate(date);
      const isToday = dateStr === formatDate(new Date());
      const isFuture = date > new Date();

      // Check which habits were completed on this day
      const completedHabits = selectedHabit
        ? habits.filter(h => h.id === selectedHabit && h.logs.some(l => l.date === dateStr))
        : habits.filter(h => h.logs.some(l => l.date === dateStr));

      const allCompleted = selectedHabit
        ? completedHabits.length > 0
        : completedHabits.length === habits.length && habits.length > 0;

      const someCompleted = completedHabits.length > 0 && !allCompleted;

      days.push(
        <div
          key={day}
          onClick={() => {
            if (!isFuture && selectedHabit) {
              toggleHabit(selectedHabit, dateStr);
            }
          }}
          className={`
            relative p-1 text-center rounded-lg transition-all
            ${isToday ? 'ring-2 ring-orange-500' : ''}
            ${isFuture ? 'opacity-30' : 'cursor-pointer hover:bg-slate-700/50'}
            ${allCompleted ? 'bg-green-500/30' : someCompleted ? 'bg-yellow-500/20' : ''}
          `}
        >
          <span className={`text-sm ${isToday ? 'font-bold text-orange-400' : 'text-slate-300'}`}>
            {day}
          </span>

          {/* Habit dots */}
          {!selectedHabit && completedHabits.length > 0 && (
            <div className="flex justify-center gap-0.5 mt-0.5">
              {completedHabits.slice(0, 3).map(habit => (
                <div
                  key={habit.id}
                  className={`w-1.5 h-1.5 rounded-full ${getColorClasses(habit.color).bg}`}
                />
              ))}
            </div>
          )}

          {selectedHabit && completedHabits.length > 0 && (
            <Check className="w-3 h-3 text-green-400 absolute top-0 right-0" />
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white p-4">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-orange-400" />
            <h1 className="text-xl font-bold">Habit Tracker</h1>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="p-2 bg-orange-500 rounded-lg hover:bg-orange-600"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Add Habit Form */}
        {showAddForm && (
          <div className="bg-slate-800/50 rounded-xl p-4 mb-4 border border-orange-500/30">
            <h3 className="font-semibold mb-3">New Habit</h3>

            <input
              type="text"
              value={newHabit.name}
              onChange={e => setNewHabit({...newHabit, name: e.target.value})}
              placeholder="Habit name..."
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 mb-3"
            />

            <div className="flex gap-2 mb-3">
              <div className="flex-1">
                <p className="text-xs text-slate-400 mb-1">Emoji</p>
                <div className="flex flex-wrap gap-1">
                  {EMOJIS.map(emoji => (
                    <button
                      key={emoji}
                      onClick={() => setNewHabit({...newHabit, emoji})}
                      className={`w-8 h-8 rounded ${newHabit.emoji === emoji ? 'bg-slate-600 ring-2 ring-orange-500' : 'bg-slate-700'}`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-3">
              <p className="text-xs text-slate-400 mb-1">Color</p>
              <div className="flex gap-2">
                {COLORS.map(color => (
                  <button
                    key={color.name}
                    onClick={() => setNewHabit({...newHabit, color: color.name})}
                    className={`w-8 h-8 rounded-full ${color.bg} ${newHabit.color === color.name ? 'ring-2 ring-white' : ''}`}
                  />
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={addHabit}
                className="flex-1 py-2 bg-green-500 rounded-lg hover:bg-green-600"
              >
                Add Habit
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Habits List */}
        <div className="space-y-2 mb-4">
          {habits.map(habit => {
            const colors = getColorClasses(habit.color);
            const streak = calculateStreak(habit);
            const rate = calculateRate(habit);
            const isSelected = selectedHabit === habit.id;

            return (
              <div
                key={habit.id}
                onClick={() => setSelectedHabit(isSelected ? null : habit.id)}
                className={`
                  flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all
                  ${isSelected ? `${colors.light} border-2 border-${habit.color}-500` : 'bg-slate-800/50 border border-transparent'}
                `}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{habit.emoji}</span>
                  <div>
                    <p className={`font-medium ${isSelected ? colors.text : 'text-white'}`}>
                      {habit.name}
                    </p>
                    <p className="text-xs text-slate-400">{rate}% this month</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {streak > 0 && (
                    <div className="flex items-center gap-1">
                      <Flame className={`w-4 h-4 ${streak >= 7 ? 'text-orange-400' : 'text-slate-500'}`} />
                      <span className={`text-sm ${streak >= 7 ? 'text-orange-400 font-bold' : 'text-slate-400'}`}>
                        {streak}
                      </span>
                    </div>
                  )}
                  <button
                    onClick={(e) => { e.stopPropagation(); deleteHabit(habit.id); }}
                    className="p-1 text-slate-500 hover:text-red-400"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}

          {habits.length === 0 && (
            <div className="text-center py-8 text-slate-400">
              <Target className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No habits yet. Add your first habit!</p>
            </div>
          )}
        </div>

        {/* Calendar */}
        <div className="bg-slate-800/50 rounded-xl p-4">
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => navigateMonth(-1)}
              className="p-2 hover:bg-slate-700 rounded-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h2 className="font-semibold">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            <button
              onClick={() => navigateMonth(1)}
              className="p-2 hover:bg-slate-700 rounded-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {renderCalendar()}
          </div>

          {/* Legend */}
          <div className="mt-4 pt-4 border-t border-slate-700">
            <p className="text-xs text-slate-500 mb-2">
              {selectedHabit
                ? 'Tap a date to toggle completion'
                : 'Select a habit above to edit, or view all completions'}
            </p>
            <div className="flex gap-4 text-xs">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded bg-green-500/30" />
                <span className="text-slate-400">All done</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded bg-yellow-500/20" />
                <span className="text-slate-400">Some done</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        {habits.length > 0 && (
          <div className="mt-4 bg-slate-800/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <h3 className="font-semibold">Monthly Overview</h3>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-400">
                  {Math.max(...habits.map(h => calculateStreak(h)))}
                </p>
                <p className="text-xs text-slate-400">Best Streak</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-400">
                  {Math.round(habits.reduce((sum, h) => sum + calculateRate(h), 0) / habits.length)}%
                </p>
                <p className="text-xs text-slate-400">Avg Rate</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-400">
                  {habits.reduce((sum, h) => sum + h.logs.length, 0)}
                </p>
                <p className="text-xs text-slate-400">Total Checks</p>
              </div>
            </div>
          </div>
        )}

        {/* Atomic Habits Tip */}
        <div className="mt-4 bg-orange-500/10 border border-orange-500/30 rounded-lg p-3">
          <p className="text-orange-300 text-sm">
            💡 <strong>From Atomic Habits:</strong> "Don't break the chain. Every day you maintain your streak,
            you're casting another vote for your new identity."
          </p>
        </div>
      </div>
    </div>
  );
}
