// All 16 Learning Modules Configuration
import type { PathwayLevel } from '@/types';
import { personalDevelopmentPathway } from './pathways/personal-development';
import { aiMlPathway } from './pathways/ai-ml';
import { wealthBuildingPathway } from './pathways/wealth-building';
import { negotiationPathway } from './pathways/negotiation';
import { bruceLeePathway } from './pathways/bruce-lee';
import { blockchainPathway } from './pathways/blockchain';
import { psychologyPathway } from './pathways/psychology';
import { pythonDataPathway } from './pathways/python-data';
import { lifeDesignPathway } from './pathways/life-design';
import { masterSynthesisPathway } from './pathways/master-synthesis';

// New modules
import { brainPathway } from './pathways/brain';
import { bodyPathway } from './pathways/body';
import { spiritualityPathway } from './pathways/spirituality';
import { shivaPathway } from './pathways/shiva';
import { templePathway } from './pathways/temple';
import { polymathPathway } from './pathways/polymath';

export interface ModuleConfig {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  books: string[];
  skills: string[];
  features: string[];
  route: string;
  isAvailable: boolean;
  pathway?: PathwayLevel[];
}

export const modules: ModuleConfig[] = [
  {
    id: 'personal-development',
    number: 1,
    title: 'Personal Development',
    subtitle: 'Mindset & Habits',
    description: 'Build unbreakable habits, enter deep focus states, design your future identity, develop mental toughness, and prioritize what truly matters.',
    icon: 'brain',
    color: 'orange',
    books: ['Atomic Habits', 'Deep Work', 'Be Your Future Self Now', "Man's Search for Meaning", 'The Subtle Art', "Can't Hurt Me", 'Mindset'],
    skills: ['Habit Building', 'Deep Focus', 'Identity Design', 'Purpose Finding', 'Mental Toughness', 'Growth Mindset'],
    features: ['Habit Tracker', 'Deep Work Timer', 'Future Self Letters', 'Values Card Sort', 'F*ck Budget', '40% Rule Challenge'],
    route: '/modules/personal-development',
    isAvailable: true,
    pathway: personalDevelopmentPathway,
  },
  {
    id: 'ai-ml',
    number: 2,
    title: 'AI & Machine Learning',
    subtitle: 'Intelligence Odyssey',
    description: 'Understand how intelligence evolved, learn neural network fundamentals, and explore AI\'s impact on the future.',
    icon: 'cpu',
    color: 'blue',
    books: ['AI 2041', 'Brief History of Intelligence', 'Deep Learning Crash Course', 'Mathematical Foundations of AI'],
    skills: ['AI Fundamentals', 'Neural Networks', 'Future Scenarios', 'ML Basics', 'AI Ethics'],
    features: ['Neural Network Playground', 'Train the AI Games', 'Future Scenario Explorer', 'Evolution Timeline'],
    route: '/modules/ai-ml',
    isAvailable: true,
    pathway: aiMlPathway,
  },
  {
    id: 'wealth-building',
    number: 3,
    title: 'Wealth Building',
    subtitle: 'Financial Mastery',
    description: 'Master value investing, build automatic wealth systems, understand tax strategy, real estate fundamentals, and business acquisition.',
    icon: 'trending-up',
    color: 'emerald',
    books: ['Intelligent Investor', 'The Richest Man in Babylon', 'Rich Dad Poor Dad', 'Tax-Free Wealth', 'Buy Then Build', '$100M Leads', 'Quantitative Trading'],
    skills: ['Value Investing', 'Automatic Savings', 'Tax Strategy', 'Real Estate', 'Business Acquisition', 'Lead Generation'],
    features: ['Compound Calculator', 'Risk Quiz', 'Asset vs Liability Tracker', 'Tax Planning', 'Acquisition Checklist'],
    route: '/modules/wealth-building',
    isAvailable: true,
    pathway: wealthBuildingPathway,
  },
  {
    id: 'negotiation',
    number: 4,
    title: 'Negotiation & Influence',
    subtitle: 'Communication Lab',
    description: 'Master FBI negotiation tactics, public speaking, body language, persuasion frameworks, and networking strategies.',
    icon: 'message-square',
    color: 'purple',
    books: ['Never Split the Difference', 'Getting to Yes', 'Influence', 'Talk Like TED', 'What Every BODY is Saying', 'Body Language', 'Never Eat Alone'],
    skills: ['FBI Tactics', 'Principled Negotiation', 'Public Speaking', 'Body Language', 'Persuasion', 'Networking'],
    features: ['Negotiation Simulator', 'Body Language Decoder', 'Speech Builder', 'Networking Tracker'],
    route: '/modules/negotiation',
    isAvailable: true,
    pathway: negotiationPathway,
  },
  {
    id: 'bruce-lee',
    number: 5,
    title: 'Bruce Lee Philosophy',
    subtitle: 'Mind & Movement',
    description: 'Embrace Jeet Kune Do philosophy, cultivate adaptability mindset, and master mind-body integration.',
    icon: 'zap',
    color: 'amber',
    books: ['Be Water My Friend', 'Striking Thoughts', "Men's Fitness Home Workouts"],
    skills: ['JKD Philosophy', 'Adaptability', 'Home Workouts', 'Mind-Body', 'Movement Flow'],
    features: ['Daily Quote', 'Be Water Challenges', 'Workout Builder', 'Philosophy Journal', 'Flow Timer'],
    route: '/modules/bruce-lee',
    isAvailable: true,
    pathway: bruceLeePathway,
  },
  {
    id: 'blockchain',
    number: 6,
    title: 'Blockchain & Web3',
    subtitle: 'Decentralized Future',
    description: 'Understand how blockchain works, learn smart contracts, and demystify DeFi, NFTs, and DAOs.',
    icon: 'link',
    color: 'cyan',
    books: ['Blockchain Illustrated Guide', 'Blockchain for Dummies', 'Building Blockchain Apps'],
    skills: ['Blockchain Basics', 'Smart Contracts', 'DeFi', 'NFTs', 'DAOs'],
    features: ['Blockchain Visualizer', 'Mine a Block Sim', 'Smart Contract Builder', 'Crypto Tracker'],
    route: '/modules/blockchain',
    isAvailable: true,
    pathway: blockchainPathway,
  },
  {
    id: 'psychology',
    number: 7,
    title: 'Psychology & Decisions',
    subtitle: 'Thinking Science',
    description: 'Master cognitive biases, decision-making under uncertainty, status dynamics, and critical analysis skills.',
    icon: 'lightbulb',
    color: 'rose',
    books: ['Thinking Fast & Slow', 'Thinking in Bets', 'The Black Swan', 'Antifragile', 'The Status Game', 'Impro'],
    skills: ['Dual Systems', 'Probabilistic Thinking', 'Bias Recognition', 'Status Dynamics', 'Decision Making'],
    features: ['Bias Detector Game', 'Bet Calculator', 'Status Game Analyzer', 'Decision Journal'],
    route: '/modules/psychology',
    isAvailable: true,
    pathway: psychologyPathway,
  },
  {
    id: 'python-data',
    number: 8,
    title: 'Python & Data Science',
    subtitle: 'Code & Analyze',
    description: 'Learn Python fundamentals, master data manipulation, and build ML models from scratch.',
    icon: 'code',
    color: 'green',
    books: ['Learn Python in a Week', 'Python & ML', 'Data Detective', 'R Guides', 'Quantitative Trading'],
    skills: ['Python Basics', 'Data Manipulation', 'Visualization', 'Statistics', 'ML Models'],
    features: ['Code Playground', 'Data Viz Gallery', 'Algorithm Animations', 'Project Generator', 'Code Review'],
    route: '/modules/python-data',
    isAvailable: true,
    pathway: pythonDataPathway,
  },
  {
    id: 'life-design',
    number: 9,
    title: 'Life Design & Independence',
    subtitle: 'Self-Sufficiency',
    description: 'Build self-sufficiency skills, discover your life purpose, master personal branding, and create your own business.',
    icon: 'home',
    color: 'teal',
    books: ['Living Off Grid', 'Four Purposes of Life', 'Crush It!', 'Building a StoryBrand', 'How to Start Your Own Business'],
    skills: ['Self-Sufficiency', 'Life Purpose', 'Personal Branding', 'StoryBrand Framework', 'Independence'],
    features: ['Purpose Assessment', 'Brand Builder', 'StoryBrand Generator', 'Business Canvas', '365 Challenge'],
    route: '/modules/life-design',
    isAvailable: true,
    pathway: lifeDesignPathway,
  },
  {
    id: 'master-synthesis',
    number: 10,
    title: 'Master Synthesis',
    subtitle: 'Connect Everything',
    description: 'Build cross-domain connections, create your personal knowledge system, and master lifelong learning.',
    icon: 'network',
    color: 'indigo',
    books: ['All Books Combined'],
    skills: ['Cross-Domain Links', 'Knowledge Systems', 'Teaching Others', 'Lifelong Learning', 'Synthesis'],
    features: ['Concept Map', 'Six Degrees Challenge', 'Personal Wiki', 'Teaching Simulator', 'Annual Review'],
    route: '/modules/master-synthesis',
    isAvailable: true,
    pathway: masterSynthesisPathway,
  },
  {
    id: 'brain-neuroscience',
    number: 11,
    title: 'Brain & Neuroscience',
    subtitle: 'Cognitive Mastery',
    description: 'Optimize your brain with neuroscience: neuroplasticity, energy management, peak performance protocols, and focus states.',
    icon: 'brain',
    color: 'purple',
    books: ['Huberman Lab', 'The Power of Full Engagement', 'Peak Performance', 'Why We Sleep'],
    skills: ['Neuroplasticity', 'Energy Management', 'Peak Performance', 'Focus States', 'Sleep Optimization'],
    features: ['Brain Tracker', 'Energy Dashboard', 'Sleep Analyzer', 'Focus Protocol', 'Performance Journal'],
    route: '/modules/brain-neuroscience',
    isAvailable: true,
    pathway: brainPathway,
  },
  {
    id: 'body-longevity',
    number: 12,
    title: 'Body & Longevity',
    subtitle: 'Physical Optimization',
    description: 'Master your body with longevity science: Peter Attia protocols, Bryan Johnson methods, and biohacking.',
    icon: 'heart-pulse',
    color: 'green',
    books: ['Outlive by Peter Attia', 'Blueprint by Bryan Johnson', 'Longevity Research'],
    skills: ['Healthspan Optimization', 'Exercise Science', 'Nutrition Protocols', 'Sleep Science', 'Biohacking'],
    features: ['Longevity Tracker', 'Workout Builder', 'Nutrition Log', 'Sleep Analyzer', 'Biomarker Dashboard'],
    route: '/modules/body-longevity',
    isAvailable: true,
    pathway: bodyPathway,
  },
  {
    id: 'spirituality-sadhana',
    number: 13,
    title: 'Spirituality & Sadhana',
    subtitle: 'Daily Practice',
    description: 'Build a transformative daily practice: Stoic philosophy, meditation, breathwork, cold exposure, and ancient wisdom.',
    icon: 'sun',
    color: 'amber',
    books: ['Meditations', 'The Daily Stoic', 'The Wim Hof Method', 'Yoga Sutras'],
    skills: ['Stoic Practice', 'Meditation', 'Breathwork', 'Cold Exposure', 'Mindfulness'],
    features: ['Stoic Journal', 'Meditation Timer', 'Breath Guide', 'Cold Exposure Tracker', 'Morning Ritual'],
    route: '/modules/spirituality-sadhana',
    isAvailable: true,
    pathway: spiritualityPathway,
  },
  {
    id: 'shiva-shakti',
    number: 14,
    title: 'Shiva-Shakti Philosophy',
    subtitle: 'Kashmir Shaivism',
    description: 'Explore non-dual philosophy: consciousness, energy, the 36 tattvas, and the recognition philosophy of Kashmir Shaivism.',
    icon: 'sparkles',
    color: 'violet',
    books: ['Shiva Sutras', 'Pratyabhijna Philosophy', 'Tantra Texts'],
    skills: ['Non-dual Philosophy', 'Consciousness Studies', 'Tantric Practice', 'Meditation', 'Self-Recognition'],
    features: ['Tattva Explorer', 'Philosophy Map', 'Practice Guide', 'Concept Cards', 'Integration Journal'],
    route: '/modules/shiva-shakti',
    isAvailable: true,
    pathway: shivaPathway,
  },
  {
    id: 'temple-science',
    number: 15,
    title: 'Temple Science',
    subtitle: 'Sacred Geometry',
    description: 'Decode temple architecture: Vastu Shastra, sacred geometry, acoustic engineering, and energy systems.',
    icon: 'landmark',
    color: 'orange',
    books: ['Vastu Shastra Texts', 'Temple Architecture', 'Sacred Geometry'],
    skills: ['Vastu Principles', 'Sacred Geometry', 'Temple Architecture', 'Energy Systems', 'Acoustic Science'],
    features: ['Temple Explorer', 'Vastu Calculator', 'Geometry Visualizer', 'Virtual Tours', 'Architecture Quiz'],
    route: '/modules/temple-science',
    isAvailable: true,
    pathway: templePathway,
  },
  {
    id: 'polymath-mastery',
    number: 16,
    title: 'Polymath Mastery',
    subtitle: 'Renaissance Learning',
    description: 'Become a modern polymath: leadership, emotional intelligence, difficult conversations, meta-learning, and cross-domain synthesis.',
    icon: 'graduation-cap',
    color: 'indigo',
    books: ['Extreme Ownership', 'Leaders Eat Last', 'Emotional Intelligence 2.0', 'Crucial Conversations', 'Difficult Conversations', 'Nonviolent Communication', 'Range'],
    skills: ['Leadership', 'Emotional Intelligence', 'Difficult Conversations', 'Meta-Learning', 'Cross-Domain Synthesis'],
    features: ['EQ Assessment', 'Conversation Simulator', 'Leadership Journal', 'Mental Model Library', 'Skill Tree'],
    route: '/modules/polymath-mastery',
    isAvailable: true,
    pathway: polymathPathway,
  },
];

export const getModuleById = (id: string) => modules.find(m => m.id === id);
export const getModuleByNumber = (num: number) => modules.find(m => m.number === num);

export default modules;
