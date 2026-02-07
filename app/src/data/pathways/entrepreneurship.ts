import type { PathwayLevel } from '@/types';
import {
  entLessonsLevel1,
  entLessonsLevel2,
  entLessonsLevel3,
  entLessonsLevel4,
  entLessonsLevel5,
  entLessonsLevel6,
  entLessonsLevel7,
  entLessonsLevel8,
  entLessonsLevel9,
  entLessonsLevel10,
} from './entrepreneurship-lessons';

/**
 * Entrepreneurship 101 Pathway
 * 80 lessons across 10 levels covering the full journey from mindset to scaling.
 *
 * Sources: Eric Ries (The Lean Startup), Peter Thiel (Zero to One), Chris Guillebeau
 * (The $100 Startup), Alex Osterwalder (Business Model Generation), Rob Fitzpatrick
 * (The Mom Test), Michael Gerber (E-Myth Revisited), Alex Hormozi ($100M Offers),
 * Reid Hoffman (Blitzscaling), Phil Knight (Shoe Dog), Ben Horowitz (The Hard Thing
 * About Hard Things), Jason Fried & DHH (Rework).
 */
export const entrepreneurshipPathway: PathwayLevel[] = [
  {
    id: 'ent-level1',
    title: 'Level 1: The Entrepreneurial Mindset',
    description: 'Discover what makes entrepreneurs tick, cultivate a growth mindset, calibrate your risk tolerance, and learn to embrace failure as fuel',
    icon: '💡',
    color: 'amber',
    unlockRequirement: 0,
    lessons: entLessonsLevel1,
  },
  {
    id: 'ent-level2',
    title: 'Level 2: Finding Ideas Worth Building',
    description: 'Master problem-first thinking, opportunity recognition, and the art of scratching your own itch to find startup ideas that matter',
    icon: '🔍',
    color: 'cyan',
    unlockRequirement: 500,
    lessons: entLessonsLevel2,
  },
  {
    id: 'ent-level3',
    title: 'Level 3: Customer Discovery',
    description: 'Learn The Mom Test, jobs-to-be-done framework, customer interview techniques, and how to validate demand before building anything',
    icon: '🎯',
    color: 'emerald',
    unlockRequirement: 1000,
    lessons: entLessonsLevel3,
  },
  {
    id: 'ent-level4',
    title: 'Level 4: Business Models & Strategy',
    description: 'Master the Business Model Canvas, explore revenue models, build competitive moats, and think strategically about going from zero to one',
    icon: '🏗️',
    color: 'blue',
    unlockRequirement: 1500,
    lessons: entLessonsLevel4,
  },
  {
    id: 'ent-level5',
    title: 'Level 5: Building Your MVP',
    description: 'Apply Lean Startup principles to build, measure, and learn with minimum viable products, rapid prototyping, and no-code tools',
    icon: '🚀',
    color: 'violet',
    unlockRequirement: 2000,
    lessons: entLessonsLevel5,
  },
  {
    id: 'ent-level6',
    title: 'Level 6: The Grand Slam Offer',
    description: 'Craft irresistible offers using Hormozi\'s framework, master pricing psychology, and create value so compelling people feel stupid saying no',
    icon: '💰',
    color: 'orange',
    unlockRequirement: 2500,
    lessons: entLessonsLevel6,
  },
  {
    id: 'ent-level7',
    title: 'Level 7: Marketing & Growth',
    description: 'Build growth engines through content marketing, SEO, paid ads, viral loops, referral programs, and community-led growth',
    icon: '📈',
    color: 'green',
    unlockRequirement: 3000,
    lessons: entLessonsLevel7,
  },
  {
    id: 'ent-level8',
    title: 'Level 8: Operations & Systems',
    description: 'Systematize your business with SOPs, hiring frameworks, automation, delegation, and the E-Myth principle of working ON your business',
    icon: '⚙️',
    color: 'slate',
    unlockRequirement: 3500,
    lessons: entLessonsLevel8,
  },
  {
    id: 'ent-level9',
    title: 'Level 9: Fundraising & Finance',
    description: 'Navigate bootstrapping vs venture capital, master pitch decks, understand cap tables, and optimize unit economics for sustainability',
    icon: '🏦',
    color: 'indigo',
    unlockRequirement: 4000,
    lessons: entLessonsLevel9,
  },
  {
    id: 'ent-level10',
    title: 'Level 10: Scaling & Leadership',
    description: 'Learn blitzscaling strategies, build culture that scales, develop as a CEO, and plan for exits that create lasting legacy',
    icon: '👑',
    color: 'rose',
    unlockRequirement: 4500,
    lessons: entLessonsLevel10,
  },
];

export default entrepreneurshipPathway;
