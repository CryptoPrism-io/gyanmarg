import type { PathwayLevel } from '@/types';
import {
  salesLessonsLevel1,
  salesLessonsLevel2,
  salesLessonsLevel3,
  salesLessonsLevel4,
  salesLessonsLevel5,
  salesLessonsLevel6,
  salesLessonsLevel7,
  salesLessonsLevel8,
  salesLessonsLevel9,
  salesLessonsLevel10,
} from './sales-mastery-lessons';

/**
 * Sales Mastery Pathway
 * 80 lessons across 10 levels covering the full spectrum of modern sales excellence.
 *
 * Sources: Neil Rackham (SPIN Selling), Dixon & Adamson (The Challenger Sale),
 * Daniel Pink (To Sell Is Human), Jordan Belfort (Way of the Wolf),
 * Robert Cialdini (Influence), Chris Voss (Never Split the Difference),
 * Alex Hormozi ($100M Offers), Zig Ziglar, Brian Tracy, Keenan (Gap Selling),
 * David Sandler (Sandler Selling System), and peer-reviewed sales research.
 */
export const salesMasteryPathway: PathwayLevel[] = [
  {
    id: 'sm-level1',
    title: 'Level 1: Sales Foundations',
    description: 'Discover what sales really is, build a servant-seller mindset, and learn the ethical persuasion principles that top performers live by',
    icon: '🤝',
    color: 'emerald',
    unlockRequirement: 0,
    lessons: salesLessonsLevel1,
  },
  {
    id: 'sm-level2',
    title: 'Level 2: Understanding Buyers',
    description: 'Decode buyer psychology, map decision-making processes, and profile communication styles with DISC and behavioral science',
    icon: '🧠',
    color: 'blue',
    unlockRequirement: 500,
    lessons: salesLessonsLevel2,
  },
  {
    id: 'sm-level3',
    title: 'Level 3: Prospecting & Outreach',
    description: 'Master cold calling, email sequences, LinkedIn selling, warm introductions, and Hormozi\'s $100M Leads framework',
    icon: '🎯',
    color: 'cyan',
    unlockRequirement: 1000,
    lessons: salesLessonsLevel3,
  },
  {
    id: 'sm-level4',
    title: 'Level 4: Discovery & Qualification',
    description: 'Uncover real buyer pain with SPIN questions, BANT qualification, Sandler\'s pain funnel, and world-class active listening',
    icon: '🔍',
    color: 'violet',
    unlockRequirement: 1500,
    lessons: salesLessonsLevel4,
  },
  {
    id: 'sm-level5',
    title: 'Level 5: The Pitch & Presentation',
    description: 'Craft compelling stories, deliver flawless demos, build irresistible value propositions, and master the Challenger teaching approach',
    icon: '🎤',
    color: 'orange',
    unlockRequirement: 2000,
    lessons: salesLessonsLevel5,
  },
  {
    id: 'sm-level6',
    title: 'Level 6: Objection Handling',
    description: 'Turn resistance into revenue using Feel-Felt-Found, Sandler reframes, Chris Voss tactics, and Belfort\'s looping technique',
    icon: '🛡️',
    color: 'red',
    unlockRequirement: 2500,
    lessons: salesLessonsLevel6,
  },
  {
    id: 'sm-level7',
    title: 'Level 7: Closing Techniques',
    description: 'Master the assumptive close, urgency levers, Zig Ziglar\'s classics, trial closes, and the psychology of commitment',
    icon: '🏆',
    color: 'amber',
    unlockRequirement: 3000,
    lessons: salesLessonsLevel7,
  },
  {
    id: 'sm-level8',
    title: 'Level 8: Relationship Selling',
    description: 'Build unshakeable trust, manage strategic accounts, generate referrals, and create customers for life',
    icon: '💎',
    color: 'pink',
    unlockRequirement: 3500,
    lessons: salesLessonsLevel8,
  },
  {
    id: 'sm-level9',
    title: 'Level 9: Advanced Sales Psychology',
    description: 'Apply Cialdini\'s 6 principles, anchoring, loss aversion, framing effects, and neuromarketing to ethical sales mastery',
    icon: '🧬',
    color: 'purple',
    unlockRequirement: 4000,
    lessons: salesLessonsLevel9,
  },
  {
    id: 'sm-level10',
    title: 'Level 10: Sales Leadership & Systems',
    description: 'Build high-performing teams, master CRM systems, track the right KPIs, coach for excellence, and scale revenue',
    icon: '🚀',
    color: 'yellow',
    unlockRequirement: 4500,
    lessons: salesLessonsLevel10,
  },
];

export default salesMasteryPathway;
