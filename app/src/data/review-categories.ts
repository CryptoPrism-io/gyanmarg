/**
 * Review Categories Configuration
 *
 * Maps modules to their flashcard categories, XP rewards, and unlock requirements.
 * Flashcards unlock when ANY lesson from that module is completed.
 */

export interface ReviewCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  pathwayIds: string[];  // Which pathwayIds on flashcards belong to this category
  xpPerCard: number;     // XP earned per card reviewed
  description: string;
}

export const reviewCategories: ReviewCategory[] = [
  {
    id: 'personal-development',
    name: 'Personal Development',
    icon: '🧠',
    color: 'lavender',
    pathwayIds: ['personal-development', 'mind-mastery'],
    xpPerCard: 20,
    description: 'Habits, Deep Work, Future Self, Mindset',
  },
  {
    id: 'psychology',
    name: 'Psychology & Decisions',
    icon: '🎯',
    color: 'coral',
    pathwayIds: ['psychology', 'thinking-fast-slow', 'cognitive-bias'],
    xpPerCard: 25,
    description: 'Cognitive biases, Decision making, Behavioral science',
  },
  {
    id: 'negotiation',
    name: 'Negotiation & Influence',
    icon: '🤝',
    color: 'golden',
    pathwayIds: ['negotiation', 'influence', 'communication'],
    xpPerCard: 25,
    description: 'FBI tactics, Persuasion, Communication',
  },
  {
    id: 'wealth',
    name: 'Wealth Building',
    icon: '💰',
    color: 'sage',
    pathwayIds: ['wealth-building', 'investing', 'finance', 'fire'],
    xpPerCard: 30,
    description: 'Investing, FIRE, Tax strategy, Real estate',
  },
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    icon: '🤖',
    color: 'electric',
    pathwayIds: ['ai-ml', 'machine-learning', 'deep-learning', 'ai'],
    xpPerCard: 35,
    description: 'Neural networks, NLP, Computer vision',
  },
  {
    id: 'blockchain',
    name: 'Blockchain & Web3',
    icon: '🔗',
    color: 'sunrise',
    pathwayIds: ['blockchain', 'web3', 'defi', 'crypto'],
    xpPerCard: 35,
    description: 'DeFi, Smart contracts, Crypto',
  },
  {
    id: 'python',
    name: 'Python & Data Science',
    icon: '🐍',
    color: 'sage',
    pathwayIds: ['python-data', 'data-science', 'python'],
    xpPerCard: 30,
    description: 'Python, Data analysis, Statistics',
  },
  {
    id: 'bruce-lee',
    name: 'Bruce Lee Philosophy',
    icon: '🥋',
    color: 'golden',
    pathwayIds: ['bruce-lee', 'martial-arts'],
    xpPerCard: 20,
    description: 'Be Water, JKD, Warrior mindset',
  },
  {
    id: 'life-design',
    name: 'Life Design',
    icon: '🏠',
    color: 'lavender',
    pathwayIds: ['life-design', 'purpose', 'career'],
    xpPerCard: 20,
    description: 'Purpose, Independence, Career',
  },
  {
    id: 'brain',
    name: 'Brain & Neuroscience',
    icon: '🧬',
    color: 'electric',
    pathwayIds: ['brain', 'neuroscience', 'cognitive'],
    xpPerCard: 30,
    description: 'Cognitive optimization, Neuroscience',
  },
  {
    id: 'body',
    name: 'Body & Longevity',
    icon: '💪',
    color: 'sage',
    pathwayIds: ['body', 'longevity', 'health'],
    xpPerCard: 25,
    description: 'Health, Longevity, Biohacking',
  },
  {
    id: 'spirituality',
    name: 'Spirituality & Sadhana',
    icon: '🕉️',
    color: 'sunrise',
    pathwayIds: ['spirituality', 'meditation', 'sadhana'],
    xpPerCard: 20,
    description: 'Meditation, Breathwork, Mindfulness',
  },
  {
    id: 'philosophy',
    name: 'Eastern Philosophy',
    icon: '☯️',
    color: 'lavender',
    pathwayIds: ['shiva-shakti', 'philosophy', 'temple'],
    xpPerCard: 25,
    description: 'Kashmir Shaivism, Temple science',
  },
  {
    id: 'polymath',
    name: 'Polymath Mastery',
    icon: '🎓',
    color: 'golden',
    pathwayIds: ['polymath', 'master-synthesis', 'meta-learning'],
    xpPerCard: 35,
    description: 'Cross-domain synthesis, Mental models',
  },
];

/**
 * Get category by ID
 */
export function getCategoryById(id: string): ReviewCategory | undefined {
  return reviewCategories.find(c => c.id === id);
}

/**
 * Get category for a flashcard based on its pathwayId
 */
export function getCategoryForPathwayId(pathwayId: string): ReviewCategory | undefined {
  return reviewCategories.find(cat =>
    cat.pathwayIds.some(p =>
      pathwayId.toLowerCase().includes(p.toLowerCase()) ||
      p.toLowerCase().includes(pathwayId.toLowerCase())
    )
  );
}

/**
 * Map lesson ID patterns to category IDs
 * Used to determine which category unlocks when a lesson is completed
 */
export const lessonPatternToCategory: Record<string, string> = {
  // Personal Development
  'pd-': 'personal-development',
  'mm-habits': 'personal-development',
  'mm-': 'personal-development',
  'dw-': 'personal-development',
  'fs-': 'personal-development',
  'atomic': 'personal-development',
  'deep-work': 'personal-development',

  // Psychology
  'psych': 'psychology',
  'tfs-': 'psychology',
  'bias': 'psychology',
  'dark-psych': 'psychology',

  // Negotiation
  'neg-': 'negotiation',
  'fbi': 'negotiation',

  // Wealth
  'wealth': 'wealth',
  'invest': 'wealth',
  'finance': 'wealth',
  'fire-': 'wealth',
  'tax-': 'wealth',
  'business': 'wealth',

  // AI/ML
  'ai-': 'ai-ml',
  'ml-': 'ai-ml',

  // Blockchain
  'blockchain': 'blockchain',
  'crypto': 'blockchain',
  'defi': 'blockchain',
  'web3': 'blockchain',

  // Python
  'python': 'python',
  'data-': 'python',

  // Bruce Lee
  'bruce': 'bruce-lee',
  'bl-': 'bruce-lee',
  'jkd': 'bruce-lee',

  // Life Design
  'life-': 'life-design',
  'purpose': 'life-design',
  'career': 'life-design',

  // Brain
  'brain': 'brain',
  'neuro': 'brain',
  'cognitive': 'brain',

  // Body
  'body': 'body',
  'health': 'body',
  'longevity': 'body',

  // Spirituality
  'spirit': 'spirituality',
  'meditat': 'spirituality',
  'sadhana': 'spirituality',

  // Philosophy
  'shiva': 'philosophy',
  'shakti': 'philosophy',
  'temple': 'philosophy',

  // Polymath
  'polymath': 'polymath',
  'synthesis': 'polymath',
};

/**
 * Get which categories are unlocked based on completed lesson IDs
 */
export function getUnlockedCategoryIds(completedLessonIds: string[]): Set<string> {
  const unlocked = new Set<string>();

  for (const lessonId of completedLessonIds) {
    const lessonLower = lessonId.toLowerCase();
    for (const [pattern, categoryId] of Object.entries(lessonPatternToCategory)) {
      if (lessonLower.includes(pattern.toLowerCase())) {
        unlocked.add(categoryId);
      }
    }
  }

  return unlocked;
}
