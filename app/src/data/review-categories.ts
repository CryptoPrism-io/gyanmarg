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
    pathwayIds: ['polymath', 'master-synthesis', 'meta-learning', 'polymath-mastery', 'mental-models', 'first-principles'],
    xpPerCard: 35,
    description: 'Cross-domain synthesis, Mental models, First principles',
  },
  {
    id: 'emotional-intelligence',
    name: 'Emotional Intelligence',
    icon: '💖',
    color: 'coral',
    pathwayIds: ['emotional-intelligence'],
    xpPerCard: 25,
    description: 'Self-awareness, Empathy, Social skills',
  },
  {
    id: 'stoicism-wisdom',
    name: 'Stoicism & Western Philosophy',
    icon: '🏛️',
    color: 'lavender',
    pathwayIds: ['stoicism', 'western-philosophy'],
    xpPerCard: 25,
    description: 'Stoic virtue, Philosophical reasoning',
  },
  {
    id: 'bharat-wisdom',
    name: 'Bharat Wisdom',
    icon: '🙏',
    color: 'sunrise',
    pathwayIds: ['bhagavad-gita', 'ramayana-mahabharata', 'upanishads', 'shiv-sutras', 'sanskrit-mantras', 'jyotish-vastu', 'vedic-wisdom', 'ayurveda', 'yoga-philosophy', 'mythology'],
    xpPerCard: 25,
    description: 'Gita, Upanishads, Vedas, Yoga, Ayurveda',
  },
  {
    id: 'eastern-philosophy',
    name: 'Eastern Philosophy',
    icon: '☸️',
    color: 'golden',
    pathwayIds: ['eastern-philosophy', 'shiva-shakti', 'temple-science'],
    xpPerCard: 25,
    description: 'Buddhism, Taoism, Kashmir Shaivism',
  },
  {
    id: 'finance-markets',
    name: 'Finance & Markets',
    icon: '📈',
    color: 'sage',
    pathwayIds: ['finance-investing', 'technical-analysis', 'options-trading', 'macro-economics', 'crypto-trading'],
    xpPerCard: 30,
    description: 'Trading, Options, Macro, Technical analysis',
  },
  {
    id: 'sales-business',
    name: 'Sales & Business',
    icon: '🏢',
    color: 'golden',
    pathwayIds: ['sales-mastery', 'personal-branding', 'entrepreneurship-101', 'startups-innovation'],
    xpPerCard: 25,
    description: 'Sales, Branding, Startups, Entrepreneurship',
  },
  {
    id: 'tech-code',
    name: 'Technology & Code',
    icon: '💻',
    color: 'electric',
    pathwayIds: ['web-development', 'cloud-devops', 'cybersecurity'],
    xpPerCard: 30,
    description: 'Web dev, Cloud, DevOps, Security',
  },
  {
    id: 'science-universe',
    name: 'Science & Universe',
    icon: '🔬',
    color: 'electric',
    pathwayIds: ['astronomy', 'biology-evolution', 'quantum-mechanics', 'earth-sciences', 'physics-engineering', 'mathematics-patterns'],
    xpPerCard: 30,
    description: 'Physics, Biology, Astronomy, Quantum',
  },
  {
    id: 'creative-arts',
    name: 'Creative Arts',
    icon: '🎨',
    color: 'coral',
    pathwayIds: ['writing-storytelling', 'music-sound', 'creative-writing', 'content-creation', 'world-building'],
    xpPerCard: 20,
    description: 'Writing, Music, Content, World building',
  },
  {
    id: 'strategy-systems',
    name: 'Strategy & Systems',
    icon: '♟️',
    color: 'sage',
    pathwayIds: ['strategic-thinking', 'systems-complexity', 'game-theory', 'decision-making', 'risk-management', 'design-thinking'],
    xpPerCard: 30,
    description: 'Game theory, Systems thinking, Risk',
  },
  {
    id: 'history-culture',
    name: 'History & Culture',
    icon: '🏺',
    color: 'golden',
    pathwayIds: ['history-civilizations', 'geopolitics', 'ancient-empires', 'modern-history', 'cultural-anthropology'],
    xpPerCard: 25,
    description: 'Civilizations, Empires, Geopolitics',
  },
  {
    id: 'relationships-society',
    name: 'Relationships & Society',
    icon: '👥',
    color: 'lavender',
    pathwayIds: ['relationships-social', 'communication-rhetoric', 'dating-attraction', 'networking', 'parenting', 'social-intelligence'],
    xpPerCard: 20,
    description: 'Communication, Networking, Social skills',
  },
  {
    id: 'leadership-productivity',
    name: 'Leadership & Productivity',
    icon: '⚡',
    color: 'electric',
    pathwayIds: ['leadership', 'problem-solving', 'productivity-systems'],
    xpPerCard: 25,
    description: 'Leadership, Problem solving, Productivity',
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
  'poly-': 'polymath',
  'synthesis': 'polymath',
  'fp-': 'polymath',
  'mlearn-': 'polymath',

  // Emotional Intelligence
  'eq-': 'emotional-intelligence',

  // Stoicism & Western Philosophy
  'stoic-': 'stoicism-wisdom',
  'wphil-': 'stoicism-wisdom',

  // Bharat Wisdom
  'gita-': 'bharat-wisdom',
  'epic-': 'bharat-wisdom',
  'upan-': 'bharat-wisdom',
  'shiv-': 'bharat-wisdom',
  'sans-': 'bharat-wisdom',
  'jyot-': 'bharat-wisdom',
  'vedic-': 'bharat-wisdom',
  'ayur-': 'bharat-wisdom',
  'yoga-': 'bharat-wisdom',
  'myth-': 'bharat-wisdom',

  // Eastern Philosophy
  'east-': 'eastern-philosophy',

  // Finance & Markets
  'fi-': 'finance-markets',
  'ta-': 'finance-markets',
  'opt-': 'finance-markets',
  'macro-': 'finance-markets',

  // Sales & Business
  'sm-': 'sales-business',
  'pb-': 'sales-business',
  'ent-': 'sales-business',
  'startup-': 'sales-business',

  // Technology & Code
  'webdev-': 'tech-code',
  'devops-': 'tech-code',
  'cyber-': 'tech-code',

  // Science & Universe
  'astro-': 'science-universe',
  'bio-': 'science-universe',
  'qm-': 'science-universe',
  'earth-': 'science-universe',
  'phys-': 'science-universe',
  'math-': 'science-universe',

  // Creative Arts
  'ws-': 'creative-arts',
  'mus-': 'creative-arts',
  'cw-': 'creative-arts',
  'content-': 'creative-arts',
  'world-': 'creative-arts',

  // Strategy & Systems
  'strat-': 'strategy-systems',
  'sys-': 'strategy-systems',
  'gt-': 'strategy-systems',
  'decide-': 'strategy-systems',
  'risk-': 'strategy-systems',
  'dt-': 'strategy-systems',

  // History & Culture
  'hist-': 'history-culture',
  'geo-': 'history-culture',
  'ae-': 'history-culture',
  'modhist-': 'history-culture',
  'anthro-': 'history-culture',

  // Relationships & Society
  'rel-': 'relationships-society',
  'cr-': 'relationships-society',
  'da-': 'relationships-society',
  'net-': 'relationships-society',
  'par-': 'relationships-society',
  'si-': 'relationships-society',

  // Leadership & Productivity
  'lead-': 'leadership-productivity',
  'solve-': 'leadership-productivity',
  'prod-': 'leadership-productivity',
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
