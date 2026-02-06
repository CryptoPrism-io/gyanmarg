import type { PathwayLevel } from '@/types';
import {
  eqLessonsLevel1,
  eqLessonsLevel2,
  eqLessonsLevel3,
  eqLessonsLevel4,
  eqLessonsLevel5,
  eqLessonsLevel6,
  eqLessonsLevel7,
  eqLessonsLevel8,
  eqLessonsLevel9,
  eqLessonsLevel10,
} from './emotional-intelligence-lessons';

/**
 * Emotional Intelligence Mastery Pathway
 * 80 lessons across 10 levels covering the full spectrum of EQ development
 */
export const emotionalIntelligencePathway: PathwayLevel[] = [
  {
    id: 'eq-level1',
    title: 'Level 1: EQ Foundations',
    description: 'Discover what emotional intelligence is, why it matters more than IQ, and build your emotional vocabulary',
    icon: '🧠',
    color: 'pink',
    unlockRequirement: 0,
    lessons: eqLessonsLevel1,
  },
  {
    id: 'eq-level2',
    title: 'Level 2: Self-Awareness Mastery',
    description: 'Develop deep self-awareness through trigger mapping, body scanning, mindfulness, and the Observer Self',
    icon: '🪞',
    color: 'purple',
    unlockRequirement: 500,
    lessons: eqLessonsLevel2,
  },
  {
    id: 'eq-level3',
    title: 'Level 3: Self-Regulation',
    description: 'Master impulse control, cognitive reappraisal, anger management, and distress tolerance',
    icon: '⚖️',
    color: 'blue',
    unlockRequirement: 1000,
    lessons: eqLessonsLevel3,
  },
  {
    id: 'eq-level4',
    title: 'Level 4: Motivation & Drive',
    description: 'Unlock intrinsic motivation, flow states, grit, and resilience through emotional alchemy',
    icon: '🔥',
    color: 'orange',
    unlockRequirement: 1500,
    lessons: eqLessonsLevel4,
  },
  {
    id: 'eq-level5',
    title: 'Level 5: Empathy & Perspective',
    description: 'Develop cognitive, emotional, and compassionate empathy with active listening mastery',
    icon: '💜',
    color: 'violet',
    unlockRequirement: 2000,
    lessons: eqLessonsLevel5,
  },
  {
    id: 'eq-level6',
    title: 'Level 6: Social Skills',
    description: 'Build rapport, communicate assertively, resolve conflicts, and navigate difficult conversations',
    icon: '🤝',
    color: 'emerald',
    unlockRequirement: 2500,
    lessons: eqLessonsLevel6,
  },
  {
    id: 'eq-level7',
    title: 'Level 7: EQ in Relationships',
    description: 'Apply EQ to attachment, love languages, emotional bids, vulnerability, and relationship repair',
    icon: '❤️',
    color: 'rose',
    unlockRequirement: 3000,
    lessons: eqLessonsLevel7,
  },
  {
    id: 'eq-level8',
    title: 'Level 8: EQ in Leadership',
    description: 'Lead with emotional intelligence through resonance, psychological safety, and team EQ',
    icon: '👑',
    color: 'amber',
    unlockRequirement: 3500,
    lessons: eqLessonsLevel8,
  },
  {
    id: 'eq-level9',
    title: 'Level 9: Dark Side of Emotions',
    description: 'Defend against manipulation, narcissism, gaslighting, and emotional blackmail',
    icon: '🛡️',
    color: 'red',
    unlockRequirement: 4000,
    lessons: eqLessonsLevel9,
  },
  {
    id: 'eq-level10',
    title: 'Level 10: EQ Integration',
    description: 'Build lifelong EQ habits, measure growth, develop emotional agility, and create your legacy',
    icon: '🌟',
    color: 'yellow',
    unlockRequirement: 4500,
    lessons: eqLessonsLevel10,
  },
];

export default emotionalIntelligencePathway;
