import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Flame, Calendar, Sparkles, Target } from 'lucide-react';
import { useHabitStore } from '@/store/habitStore';
import { useProgressStore } from '@/store/progressStore';
import { ModuleLayout } from '@/components/templates';
import { GlassCard } from '@/components/molecules';
import { HabitItem, HabitCategoryLabel } from '@/components/molecules/HabitItem';
import { Modal } from '@/components/organisms';
import { Button, Input, ProgressBar } from '@/components/atoms';
import type { HabitCategory } from '@/types';

const categories: { id: HabitCategory; label: string; color: string }[] = [
  { id: 'morning', label: 'Morning', color: 'sunrise' },
  { id: 'work', label: 'Work', color: 'lavender' },
  { id: 'evening', label: 'Evening', color: 'coral' },
  { id: 'anytime', label: 'Anytime', color: 'sage' },
];

const colorStyles: Record<string, { bg: string; border: string; text: string }> = {
  sunrise: { bg: 'bg-sunrise/10', border: 'border-sunrise/30', text: 'text-sunrise' },
  lavender: { bg: 'bg-lavender/10', border: 'border-lavender/30', text: 'text-lavender' },
  coral: { bg: 'bg-coral/10', border: 'border-coral/30', text: 'text-coral' },
  sage: { bg: 'bg-sage/10', border: 'border-sage/30', text: 'text-sage' },
  golden: { bg: 'bg-golden/10', border: 'border-golden/30', text: 'text-golden' },
};

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
  const maxStreak = habits.reduce((max, h) => Math.max(max, h.streak), 0);

  return (
    <ModuleLayout
      title="Habit Builder"
      subtitle="Build identity through small wins"
      icon={<Calendar className="w-5 h-5" />}
      headerGradient="forest"
      rightContent={
        <Button
          variant="primary"
          size="sm"
          onClick={() => setShowAddModal(true)}
          glow
        >
          <Plus className="w-4 h-4 mr-1" />
          Add Habit
        </Button>
      }
    >
      {/* Progress Card */}
      <GlassCard className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sage to-sage-light flex items-center justify-center shadow-sage">
              <Target className="w-6 h-6 text-base" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-text-primary">Today's Progress</h3>
              <p className="text-sm text-text-muted">
                {completedCount} of {totalCount} habits completed
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-coral/10 border border-coral/20">
            <Flame className={`w-5 h-5 ${completedCount > 0 ? 'text-coral' : 'text-text-muted'}`} />
            <span className="text-xl font-display font-bold text-coral">
              {maxStreak}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <ProgressBar
          value={completionRate}
          variant="success"
          size="md"
          animated
          glow={completionRate >= 50}
        />
        <p className="text-xs text-text-muted text-right mt-2">{Math.round(completionRate)}% complete</p>
      </GlassCard>

      {/* Empty State */}
      {habits.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <div className="w-20 h-20 mx-auto mb-4 bg-sunrise/10 border border-sunrise/20 rounded-2xl flex items-center justify-center">
            <Sparkles className="w-10 h-10 text-sunrise" />
          </div>
          <h3 className="text-xl font-display font-semibold text-text-primary mb-2">
            No habits yet
          </h3>
          <p className="text-text-secondary mb-6 max-w-sm mx-auto">
            Start building your identity by creating your first habit using the
            Atomic Habits framework.
          </p>
          <Button variant="primary" onClick={() => setShowAddModal(true)} glow>
            <Plus className="w-4 h-4 mr-2" />
            Create First Habit
          </Button>
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
            variant="glass"
          />

          <GlassCard className="border-sunrise/20">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-sunrise/10 border border-sunrise/20 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-sunrise" />
              </div>
              <div>
                <p className="text-sm text-sunrise font-medium mb-1">
                  Atomic Habits Framework
                </p>
                <p className="text-xs text-text-secondary">
                  Design your habit using the 4 Laws: Cue, Craving, Response, Reward
                </p>
              </div>
            </div>
          </GlassCard>

          <Input
            label="Cue (What triggers this habit?)"
            placeholder="e.g., After I pour my morning coffee"
            value={newHabit.cue}
            onChange={(e) => setNewHabit({ ...newHabit, cue: e.target.value })}
            variant="glass"
          />

          <Input
            label="Craving (What do you want from this?)"
            placeholder="e.g., Clarity and calm start to my day"
            value={newHabit.craving}
            onChange={(e) => setNewHabit({ ...newHabit, craving: e.target.value })}
            variant="glass"
          />

          <Input
            label="Response (2-minute version)"
            placeholder="e.g., Write one sentence about how I feel"
            value={newHabit.response}
            onChange={(e) => setNewHabit({ ...newHabit, response: e.target.value })}
            variant="glass"
          />

          <Input
            label="Reward (How will you celebrate?)"
            placeholder="e.g., Enjoy my coffee while reading"
            value={newHabit.reward}
            onChange={(e) => setNewHabit({ ...newHabit, reward: e.target.value })}
            variant="glass"
          />

          <div>
            <label className="block text-sm font-medium text-text-secondary mb-3">
              Category
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const colors = colorStyles[cat.color];
                const isSelected = newHabit.category === cat.id;

                return (
                  <motion.button
                    key={cat.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setNewHabit({ ...newHabit, category: cat.id })}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${
                      isSelected
                        ? `${colors.bg} ${colors.border} ${colors.text}`
                        : 'glass-light border-white/10 text-text-secondary hover:border-white/20'
                    }`}
                  >
                    {cat.label}
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              variant="glass"
              fullWidth
              onClick={() => setShowAddModal(false)}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              fullWidth
              onClick={handleAddHabit}
              disabled={!newHabit.name.trim()}
              glow={!!newHabit.name.trim()}
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
