export interface DailyReward {
  day: number;
  xp: number;
  bonus?: {
    type: 'freeze' | 'badge' | 'multiplier';
    name: string;
    description: string;
  };
}

export const DAILY_REWARDS: DailyReward[] = [
  {
    day: 1,
    xp: 50,
  },
  {
    day: 2,
    xp: 75,
  },
  {
    day: 3,
    xp: 100,
    bonus: {
      type: 'freeze',
      name: 'Streak Freeze',
      description: 'Protect your streak for one missed day',
    },
  },
  {
    day: 4,
    xp: 125,
  },
  {
    day: 5,
    xp: 150,
  },
  {
    day: 6,
    xp: 175,
  },
  {
    day: 7,
    xp: 250,
    bonus: {
      type: 'badge',
      name: 'Week Warrior',
      description: '7-day login streak achievement',
    },
  },
];

export function getDailyReward(streak: number): DailyReward {
  // For streaks beyond 7 days, cycle through the 7-day pattern
  const dayIndex = ((streak - 1) % 7);
  return DAILY_REWARDS[dayIndex];
}

export function getStreakMilestone(streak: number): string | null {
  if (streak === 3) return 'Earned a Streak Freeze! 🛡️';
  if (streak === 7) return 'Week Warrior Achievement Unlocked! 🏆';
  if (streak === 14) return 'Two-Week Champion! 🔥';
  if (streak === 30) return 'Monthly Master! 🌟';
  if (streak === 60) return 'Two-Month Legend! 💫';
  if (streak === 90) return 'Quarter-Year Virtuoso! 👑';
  return null;
}
