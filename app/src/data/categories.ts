// Module Categories for Netflix-style Learning Pathway
import type { ModuleCategory } from '@/types';
import type { ModuleConfig } from './modules';

export const moduleCategories: ModuleCategory[] = [
  {
    id: 'mind-performance',
    name: 'Mind & Performance',
    icon: '🧠',
    description: 'Master your mind, optimize habits, and achieve peak performance',
    color: 'purple',
    moduleIds: ['personal-development', 'brain-neuroscience', 'psychology', 'bruce-lee', 'emotional-intelligence'],
    order: 1,
  },
  {
    id: 'technology-code',
    name: 'Technology & Code',
    icon: '⚡',
    description: 'AI, machine learning, programming, and blockchain technologies',
    color: 'blue',
    moduleIds: ['ai-ml', 'python-data', 'blockchain', 'web-development', 'cloud-devops'],
    order: 2,
  },
  {
    id: 'wealth-power',
    name: 'Wealth & Power',
    icon: '💰',
    description: 'Build wealth, negotiate effectively, and design your ideal life',
    color: 'emerald',
    moduleIds: ['wealth-building', 'negotiation', 'life-design', 'sales-mastery', 'personal-branding', 'entrepreneurship-101'],
    order: 3,
  },
  {
    id: 'finance-markets',
    name: 'Finance & Markets',
    icon: '📈',
    description: 'Advanced investing, trading strategies, and market analysis',
    color: 'green',
    moduleIds: ['finance-investing', 'technical-analysis', 'options-trading', 'macro-economics', 'crypto-trading'],
    order: 4,
  },
  {
    id: 'bharat-wisdom',
    name: 'Bharat',
    icon: '🙏',
    description: 'Timeless Indian wisdom made actionable for modern life',
    color: 'orange',
    moduleIds: ['bhagavad-gita', 'ramayana-mahabharata', 'upanishads', 'shiv-sutras', 'ayurveda', 'yoga-philosophy', 'sanskrit-mantras', 'jyotish-vastu', 'vedic-wisdom', 'shiva-shakti', 'temple-science'],
    order: 5,
  },
  {
    id: 'spirit-body',
    name: 'Spirit & Body',
    icon: '🕉️',
    description: 'Optimize your body and explore spiritual traditions',
    color: 'amber',
    moduleIds: ['body-longevity', 'spirituality-sadhana'],
    order: 6,
  },
  {
    id: 'synthesis-mastery',
    name: 'Synthesis & Mastery',
    icon: '🔮',
    description: 'Connect knowledge across domains and become a modern polymath',
    color: 'indigo',
    moduleIds: ['master-synthesis', 'polymath-mastery', 'mental-models', 'first-principles', 'meta-learning'],
    order: 7,
  },
  {
    id: 'science-universe',
    name: 'Science & Universe',
    icon: '🔭',
    description: 'Explore astronomy, physics, and engineering principles',
    color: 'cyan',
    moduleIds: ['astronomy', 'physics-engineering', 'biology-evolution', 'quantum-mechanics', 'earth-sciences'],
    order: 8,
  },
  {
    id: 'creative-arts',
    name: 'Creative Arts',
    icon: '🎨',
    description: 'Master storytelling, writing, music, and creative expression',
    color: 'rose',
    moduleIds: ['writing-storytelling', 'music-sound', 'creative-writing', 'content-creation', 'world-building'],
    order: 9,
  },
  {
    id: 'strategy-systems',
    name: 'Strategy & Systems',
    icon: '♟️',
    description: 'Strategic thinking, game theory, and complex systems',
    color: 'slate',
    moduleIds: ['strategic-thinking', 'systems-complexity', 'game-theory', 'decision-making', 'risk-management'],
    order: 10,
  },
  {
    id: 'history-culture',
    name: 'History & Culture',
    icon: '📜',
    description: 'Learn from civilizations past and philosophical traditions',
    color: 'orange',
    moduleIds: ['history-civilizations', 'western-philosophy', 'ancient-empires', 'modern-history', 'cultural-anthropology'],
    order: 11,
  },
  {
    id: 'practical-mastery',
    name: 'Practical Mastery',
    icon: '🛠️',
    description: 'Design thinking, cybersecurity, and startup innovation',
    color: 'teal',
    moduleIds: ['design-thinking', 'cybersecurity', 'startups-innovation', 'leadership', 'problem-solving', 'productivity-systems'],
    order: 12,
  },
  {
    id: 'relationships-society',
    name: 'Relationships & Society',
    icon: '🤝',
    description: 'Social dynamics, geopolitics, and communication mastery',
    color: 'pink',
    moduleIds: ['relationships-social', 'geopolitics', 'communication-rhetoric', 'dating-attraction', 'networking', 'parenting', 'social-intelligence'],
    order: 13,
  },
  {
    id: 'ancient-wisdom',
    name: 'Ancient Wisdom',
    icon: '🪷',
    description: 'Sacred mathematics, Stoic and Eastern philosophy, and timeless myths',
    color: 'yellow',
    moduleIds: ['mathematics-patterns', 'stoicism', 'eastern-philosophy', 'mythology'],
    order: 14,
  },
];

// Helper: Get category by ID
export function getCategoryById(id: string): ModuleCategory | undefined {
  return moduleCategories.find((c) => c.id === id);
}

// Helper: Get category for a module
export function getCategoryForModule(moduleId: string): ModuleCategory | undefined {
  return moduleCategories.find((c) => c.moduleIds.includes(moduleId));
}

// Helper: Get all categories with their modules populated
export interface CategoryWithModules {
  category: ModuleCategory;
  modules: ModuleConfig[];
}

export function getCategoriesWithModules(allModules: ModuleConfig[]): CategoryWithModules[] {
  return moduleCategories
    .sort((a, b) => a.order - b.order)
    .map((category) => ({
      category,
      modules: category.moduleIds
        .map((id) => allModules.find((m) => m.id === id))
        .filter((m): m is ModuleConfig => m !== undefined),
    }))
    .filter((cwm) => cwm.modules.length > 0); // Only show categories with at least one module
}

export default moduleCategories;
