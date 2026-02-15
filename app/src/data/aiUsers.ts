/**
 * AI Users Database
 * 10 AI users with simulated 30-day progression for social proof & leaderboard
 * Their data updates in real-time based on current date to show realistic progression
 */

export interface AIUser {
  id: string;
  name: string;
  displayName: string;
  bio: string;
  avatar: string; // emoji
  level: number;
  xp: number;
  currentStreak: number;
  longestStreak: number;
  lessonsCompleted: number;
  joinDate: string; // ISO date when they "joined"
  lastActive: string; // ISO datetime of last activity
  category: string; // LinkedIn, Twitter, GitHub, etc. for marketing context
  socialHandle?: string;
}

/**
 * Calculate AI user progress based on time since join date
 * Simulates realistic learning behavior over 30 days
 */
function calculateProgress(joinDate: string, name: string): Partial<AIUser> {
  const join = new Date(joinDate);
  const now = new Date();
  const daysElapsed = Math.floor((now.getTime() - join.getTime()) / (1000 * 60 * 60 * 24));

  // Use name as seed for consistent randomization (same user always has same pattern)
  const seed = name.split('').reduce((s, c) => s + c.charCodeAt(0), 0);
  const pseudoRandom = (n: number) => ((seed * (n + 1)) % 997) / 997;

  // Realistic 30-day progression (varies by "user personality")
  const variability = pseudoRandom(1); // 0-1, determines if user is casual or intense
  const baseXpPerDay = 150 + variability * 250; // 150-400 XP/day range
  const baseStreak = daysElapsed * (0.7 + variability * 0.2); // 70-90% daily activity

  const xp = Math.min(
    Math.floor(daysElapsed * baseXpPerDay + pseudoRandom(2) * 500),
    15000 // Cap at 15000 XP (~30 levels)
  );

  const level = Math.min(Math.floor(xp / 500) + 1, 30);
  const currentStreak = Math.max(0, Math.floor(baseStreak - Math.floor(pseudoRandom(3) * 5)));
  const longestStreak = Math.max(currentStreak, Math.floor(daysElapsed * 0.85));
  const lessonsCompleted = Math.min(
    Math.floor(daysElapsed * (2 + variability * 3)),
    Math.floor(daysElapsed * 5)
  );

  // Last active: random within last 24 hours (looks active)
  const lastActiveMs = now.getTime() - (Math.floor(pseudoRandom(4) * 24 * 60 * 60 * 1000));
  const lastActive = new Date(lastActiveMs).toISOString();

  return {
    xp,
    level,
    currentStreak,
    longestStreak,
    lessonsCompleted,
    lastActive,
  };
}

/**
 * AI Users seeded with realistic patterns
 * Spread across 30-day window for gradual team buildup
 */
export const AI_USERS: AIUser[] = [
  {
    id: 'ai-001',
    name: 'Sarah Chen',
    displayName: 'Sarah',
    bio: 'Learning machine learning 🤖',
    avatar: '👩‍💻',
    level: 8,
    xp: 3500,
    currentStreak: 12,
    longestStreak: 18,
    lessonsCompleted: 24,
    joinDate: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(),
    lastActive: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    category: 'LinkedIn',
    socialHandle: '@sarahr_codes',
  },
  {
    id: 'ai-002',
    name: 'Marcus Johnson',
    displayName: 'Marcus',
    bio: 'Building the future 🚀',
    avatar: '👨‍🔬',
    level: 11,
    xp: 5200,
    currentStreak: 18,
    longestStreak: 22,
    lessonsCompleted: 35,
    joinDate: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString(),
    lastActive: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    category: 'Twitter',
    socialHandle: '@marcus_learns',
  },
  {
    id: 'ai-003',
    name: 'Priya Patel',
    displayName: 'Priya',
    bio: 'Product manager learning AI 🧠',
    avatar: '👩‍💼',
    level: 6,
    xp: 2800,
    currentStreak: 8,
    longestStreak: 12,
    lessonsCompleted: 18,
    joinDate: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000).toISOString(),
    lastActive: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    category: 'LinkedIn',
    socialHandle: '@priyap_pm',
  },
  {
    id: 'ai-004',
    name: 'Alex Rodriguez',
    displayName: 'Alex',
    bio: 'Crypto & web3 dev 💻',
    avatar: '👨‍💻',
    level: 13,
    xp: 6100,
    currentStreak: 22,
    longestStreak: 27,
    lessonsCompleted: 42,
    joinDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    lastActive: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    category: 'Twitter',
    socialHandle: '@alexrod_dev',
  },
  {
    id: 'ai-005',
    name: 'Jessica Lee',
    displayName: 'Jessica',
    bio: 'Data science student 📊',
    avatar: '👩‍🎓',
    level: 7,
    xp: 3200,
    currentStreak: 11,
    longestStreak: 15,
    lessonsCompleted: 21,
    joinDate: new Date(Date.now() - 22 * 24 * 60 * 60 * 1000).toISOString(),
    lastActive: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    category: 'GitHub',
    socialHandle: 'jlee-data',
  },
  {
    id: 'ai-006',
    name: 'David Kim',
    displayName: 'David',
    bio: 'Founder exploring new domains 🎯',
    avatar: '👨‍🏫',
    level: 10,
    xp: 4750,
    currentStreak: 16,
    longestStreak: 20,
    lessonsCompleted: 32,
    joinDate: new Date(Date.now() - 26 * 24 * 60 * 60 * 1000).toISOString(),
    lastActive: new Date(Date.now() - 2.5 * 60 * 60 * 1000).toISOString(),
    category: 'LinkedIn',
    socialHandle: '@davidkim_co',
  },
  {
    id: 'ai-007',
    name: 'Sofia Moreno',
    displayName: 'Sofia',
    bio: 'Designer learning tech 🎨',
    avatar: '👩‍🎨',
    level: 5,
    xp: 2100,
    currentStreak: 6,
    longestStreak: 9,
    lessonsCompleted: 14,
    joinDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    lastActive: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    category: 'Twitter',
    socialHandle: '@sofiam_design',
  },
  {
    id: 'ai-008',
    name: 'James Wilson',
    displayName: 'James',
    bio: 'Mentor & learner 🧑‍🏫',
    avatar: '👨‍💼',
    level: 15,
    xp: 7300,
    currentStreak: 25,
    longestStreak: 29,
    lessonsCompleted: 51,
    joinDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    lastActive: new Date(Date.now() - 1.5 * 60 * 60 * 1000).toISOString(),
    category: 'LinkedIn',
    socialHandle: '@jameswilson_dev',
  },
  {
    id: 'ai-009',
    name: 'Emma Thompson',
    displayName: 'Emma',
    bio: 'Career changer 🚀',
    avatar: '👩‍💻',
    level: 8,
    xp: 3900,
    currentStreak: 13,
    longestStreak: 17,
    lessonsCompleted: 26,
    joinDate: new Date(Date.now() - 23 * 24 * 60 * 60 * 1000).toISOString(),
    lastActive: new Date(Date.now() - 4.5 * 60 * 60 * 1000).toISOString(),
    category: 'Twitter',
    socialHandle: '@emma_learns',
  },
  {
    id: 'ai-010',
    name: 'Raj Patel',
    displayName: 'Raj',
    bio: 'Full-stack engineer 🌐',
    avatar: '👨‍💻',
    level: 12,
    xp: 5600,
    currentStreak: 20,
    longestStreak: 24,
    lessonsCompleted: 38,
    joinDate: new Date(Date.now() - 27 * 24 * 60 * 60 * 1000).toISOString(),
    lastActive: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    category: 'GitHub',
    socialHandle: 'rajpatel-dev',
  },
];

/**
 * Get AI users with simulated real-time progress
 * Returns users sorted by XP (leaderboard-ready)
 */
export function getAIUsersWithProgress(): AIUser[] {
  return AI_USERS.map((user) => ({
    ...user,
    ...calculateProgress(user.joinDate, user.name),
  })).sort((a, b) => (b.xp || 0) - (a.xp || 0));
}

/**
 * Get a specific AI user with progress
 */
export function getAIUser(id: string): AIUser | null {
  const user = AI_USERS.find((u) => u.id === id);
  if (!user) return null;

  return {
    ...user,
    ...calculateProgress(user.joinDate, user.name),
  };
}

/**
 * Search AI users by name or handle
 */
export function searchAIUsers(query: string): AIUser[] {
  const q = query.toLowerCase();
  return getAIUsersWithProgress().filter(
    (user) =>
      user.name.toLowerCase().includes(q) ||
      user.displayName.toLowerCase().includes(q) ||
      user.socialHandle?.toLowerCase().includes(q)
  );
}
