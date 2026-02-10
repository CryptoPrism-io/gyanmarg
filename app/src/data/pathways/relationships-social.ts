import type { PathwayLevel } from '@/types';
import {
  relLessonsLevel1,
  relLessonsLevel2,
  relLessonsLevel3,
  relLessonsLevel4,
  relLessonsLevel5,
  relLessonsLevel6,
  relLessonsLevel7,
  relLessonsLevel8,
} from './relationships-social-lessons';

/**
 * Relationships & Social Pathway
 * 64 lessons across 8 levels covering attachment, communication, and social mastery
 */
export const relationshipsSocialPathway: PathwayLevel[] = [
  {
    id: 'rel-level1',
    title: 'Level 1: Connection Foundations',
    description: 'Understand human connection, social needs, and the power of vulnerability',
    icon: '🤝',
    color: 'pink',
    unlockRequirement: 0,
    lessons: relLessonsLevel1,
  },
  {
    id: 'rel-level2',
    title: 'Level 2: Attachment Theory',
    description: 'Master secure, anxious, avoidant, and disorganized attachment styles',
    icon: '❤️',
    color: 'red',
    unlockRequirement: 500,
    lessons: relLessonsLevel2,
  },
  {
    id: 'rel-level3',
    title: 'Level 3: Communication Mastery',
    description: 'Learn active listening, nonviolent communication, and difficult conversations',
    icon: '💬',
    color: 'blue',
    unlockRequirement: 1000,
    lessons: relLessonsLevel3,
  },
  {
    id: 'rel-level4',
    title: 'Level 4: Emotional Intelligence in Relationships',
    description: 'Apply EQ to relationships through empathy, validation, and co-regulation',
    icon: '🧠',
    color: 'purple',
    unlockRequirement: 1500,
    lessons: relLessonsLevel4,
  },
  {
    id: 'rel-level5',
    title: 'Level 5: Conflict & Repair',
    description: 'Navigate healthy conflict, master repair attempts, and set boundaries',
    icon: '🛡️',
    color: 'orange',
    unlockRequirement: 2000,
    lessons: relLessonsLevel5,
  },
  {
    id: 'rel-level6',
    title: 'Level 6: Friendships',
    description: 'Make and maintain friendships, build social circles, and handle toxic dynamics',
    icon: '👯',
    color: 'cyan',
    unlockRequirement: 2500,
    lessons: relLessonsLevel6,
  },
  {
    id: 'rel-level7',
    title: 'Level 7: Romantic Relationships',
    description: 'Understand attraction, build intimacy, learn love languages, and maintain partnerships',
    icon: '💕',
    color: 'rose',
    unlockRequirement: 3000,
    lessons: relLessonsLevel7,
  },
  {
    id: 'rel-level8',
    title: 'Level 8: Social Mastery',
    description: 'Master social dynamics, build charisma, influence ethically, and grow social capital',
    icon: '✨',
    color: 'yellow',
    unlockRequirement: 3500,
    lessons: relLessonsLevel8,
  },
];

export default relationshipsSocialPathway;
