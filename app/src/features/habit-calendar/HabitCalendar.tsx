import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Flame } from 'lucide-react';
import { useHabitStore } from '@/store/habitStore';
import { useProgressStore } from '@/store/progressStore';
import { ModuleLayout } from '@/components/templates';
import { Card } from '@/components/molecules';
import { HabitItem, HabitCategoryLabel } from '@/components/molecules/HabitItem';
import { Modal } from '@/components/organisms';
import { Button, Input } from '@/components/atoms';
import type { HabitCategory } from '@/types';

const categories: { id: HabitCategory; label: string }[] = [
  { id: 'morning', label: 'Morning' },
  { id: 'work', label: 'Work' },
  { id: 'evening', label: 'Evening' },
  { id: 'anytime', label: 'Anytime' },
];

export function HabitCalendar() {
  const { habits, addHabit, toggleHabitComplete, deleteHabit, getTodayCompletedCount } =
    useHabitStore();
  const { addXP, unlockAchievement, hasAchievement } = useProgressStore();

  const [showAddModal, setShowAddModal] = useState(false);
  const [newHabit, setNewHabit] = useState({
    name: '',
    cue: '',
    craving: '',
    response: '',
    reward: '',
    category: 'morning' as HabitCategory,
  });

  const handleAddHabit = () => {
    if (!newHabit.name.trim()) return;

    addHabit(newHabit);
    setNewHabit({
      name: '',
      cue: '',
      craving: '',
      response: '',
      reward: '',
      category: 'morning',
    });
    setShowAddModal(false);

    // Achievement check
    if (!hasAchievement('habit_created')) {
      unlockAchievement('habit_created', 75);
    }
  };

  const handleToggleHabit = (id: string) => {
    const habit = habits.find((h) => h.id === id);
    if (habit && !habit.completedToday) {
      addXP(25);
    }
    toggleHabitComplete(id);
  };

  const completedCount = getTodayCompletedCount();
  const totalCount = habits.length;
  const completionRate = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <ModuleLayout
      title="Habit Builder"
      subtitle="Build identity through small wins"
      rightContent={
        <Button
          icon={<Plus className="w-4 h-4" />}
          onClick={() => setShowAddModal(true)}
        >
          Add Habit
        </Button>
      }
    >
      {/* Progress Card */}
      <Card className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-primary">Today's Progress</h3>
            <p className="text-sm text-muted">
              {completedCount} of {totalCount} habits completed
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Flame className={`w-6 h-6 ${completedCount > 0 ? 'text-warning' : 'text-muted'}`} />
            <span className="text-2xl font-semibold text-warning">
              {habits.reduce((max, h) => Math.max(max, h.streak), 0)}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-border rounded-full h-3 mb-2">
          <motion.div
            className="h-full bg-gradient-to-r from-success to-emerald-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${completionRate}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <p className="text-xs text-muted text-right">{Math.round(completionRate)}%</p>
      </Card>

      {/* Empty State */}
      {habits.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-2xl flex items-center justify-center">
            <Plus className="w-8 h-8 text-accent" />
          </div>
          <h3 className="text-lg font-semibold text-primary mb-2">
            No habits yet
          </h3>
          <p className="text-secondary mb-6 max-w-sm mx-auto">
            Start building your identity by creating your first habit using the
            Atomic Habits framework.
          </p>
          <Button onClick={() => setShowAddModal(true)}>Create First Habit</Button>
        </motion.div>
      )}

      {/* Habits by Category */}
      {habits.length > 0 && (
        <div className="space-y-6">
          {categories.map((category) => {
            const categoryHabits = habits.filter((h) => h.category === category.id);
            if (categoryHabits.length === 0) return null;

            return (
              <div key={category.id}>
                <HabitCategoryLabel category={category.id} />
                <AnimatePresence>
                  <div className="space-y-2">
                    {categoryHabits.map((habit) => (
                      <HabitItem
                        key={habit.id}
                        habit={habit}
                        onToggle={() => handleToggleHabit(habit.id)}
                        onDelete={() => deleteHabit(habit.id)}
                        showDetails
                      />
                    ))}
                  </div>
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      )}

      {/* Add Habit Modal */}
      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Create New Habit"
        size="lg"
      >
        <div className="space-y-4">
          <Input
            label="Habit Name"
            placeholder="e.g., Morning journaling"
            value={newHabit.name}
            onChange={(e) => setNewHabit({ ...newHabit, name: e.target.value })}
          />

          <div className="bg-accent/5 border border-accent/20 rounded-xl p-4 mb-4">
            <p className="text-sm text-accent font-medium mb-2">
              Atomic Habits Framework
            </p>
            <p className="text-xs text-secondary">
              Design your habit using the 4 Laws: Cue, Craving, Response, Reward
            </p>
          </div>

          <Input
            label="Cue (What triggers this habit?)"
            placeholder="e.g., After I pour my morning coffee"
            value={newHabit.cue}
            onChange={(e) => setNewHabit({ ...newHabit, cue: e.target.value })}
          />

          <Input
            label="Craving (What do you want from this?)"
            placeholder="e.g., Clarity and calm start to my day"
            value={newHabit.craving}
            onChange={(e) => setNewHabit({ ...newHabit, craving: e.target.value })}
          />

          <Input
            label="Response (2-minute version)"
            placeholder="e.g., Write one sentence about how I feel"
            value={newHabit.response}
            onChange={(e) => setNewHabit({ ...newHabit, response: e.target.value })}
          />

          <Input
            label="Reward (How will you celebrate?)"
            placeholder="e.g., Enjoy my coffee while reading"
            value={newHabit.reward}
            onChange={(e) => setNewHabit({ ...newHabit, reward: e.target.value })}
          />

          <div>
            <label className="block text-sm font-medium text-secondary mb-2">
              Category
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setNewHabit({ ...newHabit, category: cat.id })}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    newHabit.category === cat.id
                      ? 'bg-accent text-white'
                      : 'bg-secondary text-secondary hover:bg-elevated'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              variant="secondary"
              fullWidth
              onClick={() => setShowAddModal(false)}
            >
              Cancel
            </Button>
            <Button
              fullWidth
              onClick={handleAddHabit}
              disabled={!newHabit.name.trim()}
            >
              Create Habit
            </Button>
          </div>
        </div>
      </Modal>
    </ModuleLayout>
  );
}

export default HabitCalendar;
