import type { PathwayLevel } from '@/types';
import {
  startupLessonsLevel1,
  startupLessonsLevel2,
  startupLessonsLevel3,
  startupLessonsLevel4,
  startupLessonsLevel5,
  startupLessonsLevel6,
  startupLessonsLevel7,
  startupLessonsLevel8,
} from './startups-innovation-lessons';

/**
 * Startups & Innovation Pathway
 * 64 lessons across 8 levels covering lean startup, fundraising, and scaling
 */
export const startupsInnovationPathway: PathwayLevel[] = [
  {
    id: 'startup-level1',
    title: 'Level 1: Startup Mindset',
    description: 'Develop entrepreneurial thinking, embrace uncertainty, and build in public',
    icon: '🚀',
    color: 'emerald',
    unlockRequirement: 0,
    lessons: startupLessonsLevel1,
  },
  {
    id: 'startup-level2',
    title: 'Level 2: Ideation & Validation',
    description: 'Find problems worth solving, conduct customer interviews, and validate ideas',
    icon: '💡',
    color: 'amber',
    unlockRequirement: 500,
    lessons: startupLessonsLevel2,
  },
  {
    id: 'startup-level3',
    title: 'Level 3: Lean Methodology',
    description: 'Master Build-Measure-Learn, create MVPs, and iterate rapidly',
    icon: '🔄',
    color: 'blue',
    unlockRequirement: 1000,
    lessons: startupLessonsLevel3,
  },
  {
    id: 'startup-level4',
    title: 'Level 4: Product-Market Fit',
    description: 'Measure PMF, track key metrics, and know when to pivot',
    icon: '🎯',
    color: 'purple',
    unlockRequirement: 1500,
    lessons: startupLessonsLevel4,
  },
  {
    id: 'startup-level5',
    title: 'Level 5: Building Teams & Culture',
    description: 'Hire great people, build culture, and manage startup operations',
    icon: '👥',
    color: 'cyan',
    unlockRequirement: 2000,
    lessons: startupLessonsLevel5,
  },
  {
    id: 'startup-level6',
    title: 'Level 6: Fundraising',
    description: 'Master pitch decks, understand cap tables, and navigate term sheets',
    icon: '💰',
    color: 'yellow',
    unlockRequirement: 2500,
    lessons: startupLessonsLevel6,
  },
  {
    id: 'startup-level7',
    title: 'Level 7: Growth & Scaling',
    description: 'Implement growth hacking, build viral loops, and scale systems',
    icon: '📈',
    color: 'red',
    unlockRequirement: 3000,
    lessons: startupLessonsLevel7,
  },
  {
    id: 'startup-level8',
    title: 'Level 8: Leadership & Exit',
    description: 'Lead at scale, understand exits, and build a lasting legacy',
    icon: '👑',
    color: 'orange',
    unlockRequirement: 3500,
    lessons: startupLessonsLevel8,
  },
];

export default startupsInnovationPathway;
