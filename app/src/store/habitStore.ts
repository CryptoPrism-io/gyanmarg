import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Habit, HabitCompletion, HabitCategory } from '@/types';
import { triggerSync } from '@/store/firebaseSync';

interface HabitState {
  habits: Habit[];
  completions: HabitCompletion[];

  // Actions
  addHabit: (habit: Omit<Habit, 'id' | 'streak' | 'completedToday' | 'createdAt'>) => void;
  updateHabit: (id: string, updates: Partial<Habit>) => void;
  deleteHabit: (id: string) => void;
  toggleHabitComplete: (id: string) => void;
  resetDailyHabits: () => void;
  getHabitsByCategory: (category: HabitCategory) => Habit[];
  getTodayCompletedCount: () => number;
  getTotalHabitsCount: () => number;
}

export const useHabitStore = create<HabitState>()(
  persist(
    (set, get) => ({
      habits: [],
      completions: [],

      addHabit: (habitData) => {
        set((state) => ({
          habits: [
            ...state.habits,
            {
              ...habitData,
              id: Date.now().toString(),
              streak: 0,
              completedToday: false,
              createdAt: new Date().toISOString(),
            },
          ],
        }));
        triggerSync();
      },

      updateHabit: (id, updates) => {
        set((state) => ({
          habits: state.habits.map((h) => (h.id === id ? { ...h, ...updates } : h)),
        }));
        triggerSync();
      },

      deleteHabit: (id) => {
        set((state) => ({
          habits: state.habits.filter((h) => h.id !== id),
          completions: state.completions.filter((c) => c.habitId !== id),
        }));
        triggerSync();
      },

      toggleHabitComplete: (id) => {
        set((state) => {
          const today = new Date().toISOString().split('T')[0];
          return {
            habits: state.habits.map((h) => {
              if (h.id === id) {
                const newCompleted = !h.completedToday;
                return {
                  ...h,
                  completedToday: newCompleted,
                  streak: newCompleted ? h.streak + 1 : Math.max(0, h.streak - 1),
                };
              }
              return h;
            }),
            completions: [
              ...state.completions.filter(
                (c) => !(c.habitId === id && c.date === today)
              ),
              {
                habitId: id,
                date: today,
                completed: !state.habits.find((h) => h.id === id)?.completedToday,
              },
            ],
          };
        });
        triggerSync();
      },

      resetDailyHabits: () =>
        set((state) => {
          const today = new Date().toISOString().split('T')[0];
          const lastResetDate = localStorage.getItem('gyanmarg-last-reset-date');

          if (lastResetDate !== today) {
            localStorage.setItem('gyanmarg-last-reset-date', today);
            return {
              habits: state.habits.map((h) => ({
                ...h,
                completedToday: false,
              })),
            };
          }
          return state;
        }),

      getHabitsByCategory: (category) => {
        return get().habits.filter((h) => h.category === category);
      },

      getTodayCompletedCount: () => {
        return get().habits.filter((h) => h.completedToday).length;
      },

      getTotalHabitsCount: () => {
        return get().habits.length;
      },
    }),
    {
      name: 'gyanmarg-habits',
    }
  )
);
