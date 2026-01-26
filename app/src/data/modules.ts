// All 10 Learning Modules Configuration
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
    description: 'Build unbreakable habits, enter deep focus states, design your future identity, and prioritize what truly matters.',
    icon: 'brain',
    color: 'orange',
    books: ['Atomic Habits', 'Deep Work', 'Be Your Future Self Now', "Man's Search for Meaning", 'The Subtle Art'],
    skills: ['Habit Building', 'Deep Focus', 'Identity Design', 'Purpose Finding', 'Priority Setting'],
    features: ['Habit Tracker', 'Deep Work Timer', 'Future Self Letters', 'Values Card Sort', 'F*ck Budget'],
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
    description: 'Master value investing, build automatic wealth systems, generate leads, and understand algorithmic trading.',
    icon: 'trending-up',
    color: 'emerald',
    books: ['Intelligent Investor', 'Start Late Finish Rich', '$100M Leads', 'Quantitative Trading', 'AI For Finance'],
    skills: ['Value Investing', 'Automatic Savings', 'Lead Generation', 'Algo Trading', 'Financial AI'],
    features: ['Compound Calculator', 'Risk Quiz', 'Latte Factor Calc', 'Paper Trading Sim', 'Lead Magnet Builder'],
    route: '/modules/wealth-building',
    isAvailable: true,
    pathway: wealthBuildingPathway,
  },
  {
    id: 'negotiation',
    number: 4,
    title: 'Negotiation & Influence',
    subtitle: 'Communication Lab',
    description: 'Learn FBI negotiation tactics, master persuasion frameworks, and recognize manipulation techniques.',
    icon: 'message-square',
    color: 'purple',
    books: ['Never Split the Difference', 'Words That Work', 'Communication Genius', 'Dark Psychology'],
    skills: ['FBI Tactics', 'Persuasion', 'Daily Communication', 'Manipulation Defense', 'Mirroring'],
    features: ['Negotiation Simulator', 'Spot the Technique', 'Word A/B Tester', 'Defense Training'],
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
    description: 'Master System 1 vs System 2 thinking, learn cognitive biases, and develop critical analysis skills.',
    icon: 'lightbulb',
    color: 'rose',
    books: ['Thinking Fast & Slow', 'Dark Psychology', 'Data Detective'],
    skills: ['Dual Systems', 'Bias Recognition', 'Statistical Thinking', 'Critical Analysis', 'Decision Making'],
    features: ['Bias Detector Game', 'System Sorter', 'Illusion Revealer', 'Decision Journal', 'BS Detector'],
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
    description: 'Build self-sufficiency skills, discover your life purpose, cultivate happiness habits, and learn business fundamentals.',
    icon: 'home',
    color: 'teal',
    books: ['Living Off Grid', 'Four Purposes of Life', 'Happiest You Ever', 'How to Start Your Own Business'],
    skills: ['Self-Sufficiency', 'Life Purpose', 'Happiness Habits', 'Business Basics', 'Independence'],
    features: ['Purpose Assessment', 'Happiness Tracker', 'Skill Tree', 'Business Canvas', '365 Challenge'],
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
];

export const getModuleById = (id: string) => modules.find(m => m.id === id);
export const getModuleByNumber = (num: number) => modules.find(m => m.number === num);

export default modules;
