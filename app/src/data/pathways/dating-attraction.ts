import type { PathwayLevel } from '@/types';
import {
  daLessonsLevel1,
  daLessonsLevel2,
  daLessonsLevel3,
  daLessonsLevel4,
  daLessonsLevel5,
  daLessonsLevel6,
  daLessonsLevel7,
  daLessonsLevel8,
  daLessonsLevel9,
  daLessonsLevel10,
} from './dating-attraction-lessons';

/**
 * Dating & Attraction Pathway
 * 80 lessons across 10 levels mastering the science and art of dating,
 * attraction, and building meaningful romantic relationships
 */
export const datingAttractionPathway: PathwayLevel[] = [
  {
    id: 'da-level1',
    title: 'Level 1: Foundations of Attraction',
    description: 'Understand the evolutionary psychology, neurochemistry, and attachment science behind human attraction',
    icon: '💘',
    color: 'pink',
    unlockRequirement: 0,
    lessons: daLessonsLevel1,
  },
  {
    id: 'da-level2',
    title: 'Level 2: Self-Confidence & Inner Game',
    description: 'Build genuine self-worth, overcome rejection sensitivity, and develop the mindset of naturally attractive people',
    icon: '💪',
    color: 'amber',
    unlockRequirement: 500,
    lessons: daLessonsLevel2,
  },
  {
    id: 'da-level3',
    title: 'Level 3: Social Dynamics & First Impressions',
    description: 'Master body language, approach with confidence, and make powerful authentic first impressions',
    icon: '🤝',
    color: 'emerald',
    unlockRequirement: 1000,
    lessons: daLessonsLevel3,
  },
  {
    id: 'da-level4',
    title: 'Level 4: Conversation & Connection',
    description: 'Move beyond small talk to create deep rapport through active listening, storytelling, and emotional intelligence',
    icon: '💬',
    color: 'blue',
    unlockRequirement: 1500,
    lessons: daLessonsLevel4,
  },
  {
    id: 'da-level5',
    title: 'Level 5: Dating Psychology',
    description: 'Navigate attachment styles, love languages, partner selection biases, and relationship readiness',
    icon: '🧠',
    color: 'purple',
    unlockRequirement: 2000,
    lessons: daLessonsLevel5,
  },
  {
    id: 'da-level6',
    title: 'Level 6: Digital Dating',
    description: 'Optimize dating profiles, master texting strategy, and transition from digital to real-world connection',
    icon: '📱',
    color: 'cyan',
    unlockRequirement: 2500,
    lessons: daLessonsLevel6,
  },
  {
    id: 'da-level7',
    title: 'Level 7: Relationship Building',
    description: 'Build trust, set healthy boundaries, navigate milestones, and create a strong relational foundation',
    icon: '🏗️',
    color: 'teal',
    unlockRequirement: 3000,
    lessons: daLessonsLevel7,
  },
  {
    id: 'da-level8',
    title: 'Level 8: Conflict & Communication',
    description: 'Master Nonviolent Communication, fair fighting rules, emotional regulation, and the art of forgiveness',
    icon: '🔥',
    color: 'red',
    unlockRequirement: 3500,
    lessons: daLessonsLevel8,
  },
  {
    id: 'da-level9',
    title: 'Level 9: Long-term Attraction',
    description: 'Maintain passion, grow together, build shared meaning, and sustain love over years and decades',
    icon: '💎',
    color: 'rose',
    unlockRequirement: 4000,
    lessons: daLessonsLevel9,
  },
  {
    id: 'da-level10',
    title: 'Level 10: Mastery & Integration',
    description: 'Integrate all skills into authentic relating, advanced calibration, and the courage to love fully',
    icon: '👑',
    color: 'yellow',
    unlockRequirement: 4500,
    lessons: daLessonsLevel10,
  },
];

export default datingAttractionPathway;
