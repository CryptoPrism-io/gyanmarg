import type { PathwayLevel } from '@/types';
import {
  siLessonsLevel1,
  siLessonsLevel2,
  siLessonsLevel3,
  siLessonsLevel4,
  siLessonsLevel5,
  siLessonsLevel6,
  siLessonsLevel7,
  siLessonsLevel8,
  siLessonsLevel9,
  siLessonsLevel10,
} from './social-intelligence-lessons';

/**
 * Social Intelligence Pathway
 * 80 lessons across 10 levels mastering interpersonal perception, charisma, and social mastery
 */
export const socialIntelligencePathway: PathwayLevel[] = [
  {
    id: 'si-level1',
    title: 'Level 1: The Social Brain',
    description: 'Discover mirror neurons, social cognition, and the neural circuitry that makes humans the most social species on Earth',
    icon: '\u{1F9E0}',
    color: 'purple',
    unlockRequirement: 0,
    lessons: siLessonsLevel1,
  },
  {
    id: 'si-level2',
    title: 'Level 2: Reading Body Language',
    description: 'Decode nonverbal cues, microexpressions, gesture clusters, and the silent signals people broadcast every second',
    icon: '\u{1F440}',
    color: 'blue',
    unlockRequirement: 500,
    lessons: siLessonsLevel2,
  },
  {
    id: 'si-level3',
    title: 'Level 3: Emotional Awareness',
    description: 'Develop empathic accuracy -- the ability to read what others feel beneath the surface',
    icon: '\u{1F49C}',
    color: 'rose',
    unlockRequirement: 1000,
    lessons: siLessonsLevel3,
  },
  {
    id: 'si-level4',
    title: 'Level 4: The Art of Charisma',
    description: 'Master Olivia Fox Cabane\'s presence-power-warmth framework to become magnetically compelling',
    icon: '\u{2728}',
    color: 'amber',
    unlockRequirement: 1500,
    lessons: siLessonsLevel4,
  },
  {
    id: 'si-level5',
    title: 'Level 5: Conversational Intelligence',
    description: 'Build deep rapport, ask transformative questions, and become the person everyone wants to talk to',
    icon: '\u{1F4AC}',
    color: 'emerald',
    unlockRequirement: 2000,
    lessons: siLessonsLevel5,
  },
  {
    id: 'si-level6',
    title: 'Level 6: Social Calibration',
    description: 'Read the room, shift between social contexts, and master the unwritten rules of every situation',
    icon: '\u{1F3AF}',
    color: 'cyan',
    unlockRequirement: 2500,
    lessons: siLessonsLevel6,
  },
  {
    id: 'si-level7',
    title: 'Level 7: Influence & Persuasion',
    description: 'Apply Cialdini\'s principles of social proof, liking, and reciprocity in real-world interactions',
    icon: '\u{1F9F2}',
    color: 'indigo',
    unlockRequirement: 3000,
    lessons: siLessonsLevel7,
  },
  {
    id: 'si-level8',
    title: 'Level 8: Navigating Difficult People',
    description: 'Handle toxic personalities, set boundaries, and de-escalate conflict with composure',
    icon: '\u{1F6E1}\u{FE0F}',
    color: 'red',
    unlockRequirement: 3500,
    lessons: siLessonsLevel8,
  },
  {
    id: 'si-level9',
    title: 'Level 9: Group Dynamics',
    description: 'Understand status hierarchies, coalition building, and how to lead with social presence',
    icon: '\u{1F465}',
    color: 'teal',
    unlockRequirement: 4000,
    lessons: siLessonsLevel9,
  },
  {
    id: 'si-level10',
    title: 'Level 10: Social Mastery',
    description: 'Integrate all skills into authentic connection, build your social legacy, and design a life of meaningful relationships',
    icon: '\u{1F451}',
    color: 'yellow',
    unlockRequirement: 4500,
    lessons: siLessonsLevel10,
  },
];

export default socialIntelligencePathway;
