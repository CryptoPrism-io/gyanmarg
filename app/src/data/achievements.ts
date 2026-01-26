import type { Achievement } from '@/types';

export const achievements: Achievement[] = [
  {
    id: "first_lesson",
    name: "First Steps",
    description: "Complete your first lesson",
    icon: "target",
    xpReward: 50,
  },
  {
    id: "habit_created",
    name: "Habit Architect",
    description: "Create your first habit",
    icon: "flame",
    xpReward: 75,
  },
  {
    id: "deep_work_30",
    name: "Focus Initiate",
    description: "Complete 30 min deep work",
    icon: "timer",
    xpReward: 100,
  },
  {
    id: "quiz_perfect",
    name: "Sharp Mind",
    description: "Get a quiz question right",
    icon: "brain",
    xpReward: 50,
  },
  {
    id: "five_lessons",
    name: "Knowledge Seeker",
    description: "Complete 5 lessons",
    icon: "book",
    xpReward: 150,
  },
  {
    id: "all_books_intro",
    name: "Explorer",
    description: "Read from all 5 books",
    icon: "sparkles",
    xpReward: 200,
  },
  {
    id: "week_streak",
    name: "Consistent",
    description: "7-day habit streak",
    icon: "flame",
    xpReward: 300,
  },
  {
    id: "deep_work_master",
    name: "Deep Worker",
    description: "3 hours total deep work",
    icon: "target",
    xpReward: 500,
  },
];

export const getAchievementById = (id: string) =>
  achievements.find((a) => a.id === id);

export default achievements;
