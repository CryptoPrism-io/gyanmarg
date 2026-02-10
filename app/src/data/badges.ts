export type BadgeCategory =
  | 'streak'
  | 'module'
  | 'xp'
  | 'lesson'
  | 'review'
  | 'special';

export type BadgeTier = 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond';

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string; // emoji
  category: BadgeCategory;
  tier: BadgeTier;
  requirement: {
    type: 'streak' | 'modules' | 'xp' | 'lessons' | 'reviews' | 'special';
    value: number;
  };
  color: string; // tailwind color class
  unlockedAt?: string; // ISO timestamp when user unlocked
}

export const BADGES: Badge[] = [
  // ============================================
  // STREAK BADGES
  // ============================================
  {
    id: 'streak-3',
    name: 'First Steps',
    description: 'Complete a 3-day learning streak',
    icon: '🔥',
    category: 'streak',
    tier: 'bronze',
    requirement: { type: 'streak', value: 3 },
    color: 'amber',
  },
  {
    id: 'streak-7',
    name: 'Week Warrior',
    description: 'Complete a 7-day learning streak',
    icon: '⚡',
    category: 'streak',
    tier: 'silver',
    requirement: { type: 'streak', value: 7 },
    color: 'amber',
  },
  {
    id: 'streak-14',
    name: 'Two-Week Champion',
    description: 'Complete a 14-day learning streak',
    icon: '💪',
    category: 'streak',
    tier: 'gold',
    requirement: { type: 'streak', value: 14 },
    color: 'amber',
  },
  {
    id: 'streak-30',
    name: 'Monthly Master',
    description: 'Complete a 30-day learning streak',
    icon: '👑',
    category: 'streak',
    tier: 'platinum',
    requirement: { type: 'streak', value: 30 },
    color: 'amber',
  },
  {
    id: 'streak-60',
    name: 'Two-Month Legend',
    description: 'Complete a 60-day learning streak',
    icon: '🌟',
    category: 'streak',
    tier: 'diamond',
    requirement: { type: 'streak', value: 60 },
    color: 'amber',
  },
  {
    id: 'streak-90',
    name: 'Quarter-Year Virtuoso',
    description: 'Complete a 90-day learning streak',
    icon: '💎',
    category: 'streak',
    tier: 'diamond',
    requirement: { type: 'streak', value: 90 },
    color: 'purple',
  },

  // ============================================
  // MODULE COMPLETION BADGES
  // ============================================
  {
    id: 'modules-1',
    name: 'First Module',
    description: 'Complete your first learning module',
    icon: '📚',
    category: 'module',
    tier: 'bronze',
    requirement: { type: 'modules', value: 1 },
    color: 'blue',
  },
  {
    id: 'modules-3',
    name: 'Triple Threat',
    description: 'Complete 3 learning modules',
    icon: '📖',
    category: 'module',
    tier: 'silver',
    requirement: { type: 'modules', value: 3 },
    color: 'blue',
  },
  {
    id: 'modules-5',
    name: 'Pentamath',
    description: 'Complete 5 learning modules',
    icon: '🎓',
    category: 'module',
    tier: 'gold',
    requirement: { type: 'modules', value: 5 },
    color: 'blue',
  },
  {
    id: 'modules-10',
    name: 'Decathlon Scholar',
    description: 'Complete 10 learning modules',
    icon: '🏆',
    category: 'module',
    tier: 'platinum',
    requirement: { type: 'modules', value: 10 },
    color: 'blue',
  },
  {
    id: 'modules-20',
    name: 'Polymath Master',
    description: 'Complete 20 learning modules',
    icon: '🧠',
    category: 'module',
    tier: 'diamond',
    requirement: { type: 'modules', value: 20 },
    color: 'purple',
  },

  // ============================================
  // XP MILESTONE BADGES
  // ============================================
  {
    id: 'xp-1000',
    name: 'Novice',
    description: 'Earn 1,000 XP',
    icon: '⭐',
    category: 'xp',
    tier: 'bronze',
    requirement: { type: 'xp', value: 1000 },
    color: 'golden',
  },
  {
    id: 'xp-5000',
    name: 'Apprentice',
    description: 'Earn 5,000 XP',
    icon: '🌟',
    category: 'xp',
    tier: 'silver',
    requirement: { type: 'xp', value: 5000 },
    color: 'golden',
  },
  {
    id: 'xp-10000',
    name: 'Expert',
    description: 'Earn 10,000 XP',
    icon: '✨',
    category: 'xp',
    tier: 'gold',
    requirement: { type: 'xp', value: 10000 },
    color: 'golden',
  },
  {
    id: 'xp-25000',
    name: 'Master',
    description: 'Earn 25,000 XP',
    icon: '💫',
    category: 'xp',
    tier: 'platinum',
    requirement: { type: 'xp', value: 25000 },
    color: 'golden',
  },
  {
    id: 'xp-50000',
    name: 'Grandmaster',
    description: 'Earn 50,000 XP',
    icon: '🌠',
    category: 'xp',
    tier: 'diamond',
    requirement: { type: 'xp', value: 50000 },
    color: 'purple',
  },

  // ============================================
  // LESSON COUNT BADGES
  // ============================================
  {
    id: 'lessons-10',
    name: 'Getting Started',
    description: 'Complete 10 lessons',
    icon: '📝',
    category: 'lesson',
    tier: 'bronze',
    requirement: { type: 'lessons', value: 10 },
    color: 'sage',
  },
  {
    id: 'lessons-50',
    name: 'Dedicated Learner',
    description: 'Complete 50 lessons',
    icon: '📋',
    category: 'lesson',
    tier: 'silver',
    requirement: { type: 'lessons', value: 50 },
    color: 'sage',
  },
  {
    id: 'lessons-100',
    name: 'Centurion',
    description: 'Complete 100 lessons',
    icon: '📜',
    category: 'lesson',
    tier: 'gold',
    requirement: { type: 'lessons', value: 100 },
    color: 'sage',
  },
  {
    id: 'lessons-250',
    name: 'Knowledge Seeker',
    description: 'Complete 250 lessons',
    icon: '🎯',
    category: 'lesson',
    tier: 'platinum',
    requirement: { type: 'lessons', value: 250 },
    color: 'sage',
  },
  {
    id: 'lessons-500',
    name: 'Wisdom Keeper',
    description: 'Complete 500 lessons',
    icon: '🏛️',
    category: 'lesson',
    tier: 'diamond',
    requirement: { type: 'lessons', value: 500 },
    color: 'purple',
  },

  // ============================================
  // REVIEW MASTER BADGES (Spaced Repetition)
  // ============================================
  {
    id: 'reviews-100',
    name: 'Review Rookie',
    description: 'Complete 100 card reviews',
    icon: '🃏',
    category: 'review',
    tier: 'bronze',
    requirement: { type: 'reviews', value: 100 },
    color: 'lavender',
  },
  {
    id: 'reviews-500',
    name: 'Review Regular',
    description: 'Complete 500 card reviews',
    icon: '🎴',
    category: 'review',
    tier: 'silver',
    requirement: { type: 'reviews', value: 500 },
    color: 'lavender',
  },
  {
    id: 'reviews-1000',
    name: 'Review Veteran',
    description: 'Complete 1,000 card reviews',
    icon: '🎰',
    category: 'review',
    tier: 'gold',
    requirement: { type: 'reviews', value: 1000 },
    color: 'lavender',
  },
  {
    id: 'reviews-2500',
    name: 'Review Master',
    description: 'Complete 2,500 card reviews',
    icon: '🏅',
    category: 'review',
    tier: 'platinum',
    requirement: { type: 'reviews', value: 2500 },
    color: 'lavender',
  },
  {
    id: 'reviews-5000',
    name: 'Review Grandmaster',
    description: 'Complete 5,000 card reviews',
    icon: '🎖️',
    category: 'review',
    tier: 'diamond',
    requirement: { type: 'reviews', value: 5000 },
    color: 'purple',
  },
];

// Helper functions
export function getBadgeById(id: string): Badge | undefined {
  return BADGES.find((badge) => badge.id === id);
}

export function getBadgesByCategory(category: BadgeCategory): Badge[] {
  return BADGES.filter((badge) => badge.category === category);
}

export function getBadgesByTier(tier: BadgeTier): Badge[] {
  return BADGES.filter((badge) => badge.tier === tier);
}

export function checkBadgeUnlock(
  badge: Badge,
  userStats: {
    streak: number;
    modulesCompleted: number;
    xp: number;
    lessonsCompleted: number;
    reviewsCompleted: number;
  }
): boolean {
  switch (badge.requirement.type) {
    case 'streak':
      return userStats.streak >= badge.requirement.value;
    case 'modules':
      return userStats.modulesCompleted >= badge.requirement.value;
    case 'xp':
      return userStats.xp >= badge.requirement.value;
    case 'lessons':
      return userStats.lessonsCompleted >= badge.requirement.value;
    case 'reviews':
      return userStats.reviewsCompleted >= badge.requirement.value;
    default:
      return false;
  }
}

export function getNextBadgeInCategory(
  category: BadgeCategory,
  unlockedBadges: string[]
): Badge | null {
  const categoryBadges = BADGES.filter((b) => b.category === category).sort(
    (a, b) => a.requirement.value - b.requirement.value
  );

  for (const badge of categoryBadges) {
    if (!unlockedBadges.includes(badge.id)) {
      return badge;
    }
  }

  return null;
}

export function getBadgeProgress(
  badge: Badge,
  userStats: {
    streak: number;
    modulesCompleted: number;
    xp: number;
    lessonsCompleted: number;
    reviewsCompleted: number;
  }
): number {
  let current = 0;

  switch (badge.requirement.type) {
    case 'streak':
      current = userStats.streak;
      break;
    case 'modules':
      current = userStats.modulesCompleted;
      break;
    case 'xp':
      current = userStats.xp;
      break;
    case 'lessons':
      current = userStats.lessonsCompleted;
      break;
    case 'reviews':
      current = userStats.reviewsCompleted;
      break;
  }

  return Math.min(100, (current / badge.requirement.value) * 100);
}
