import type { PathwayLevel } from '@/types';
import {
  crLessonsLevel1,
  crLessonsLevel2,
  crLessonsLevel3,
  crLessonsLevel4,
  crLessonsLevel5,
  crLessonsLevel6,
  crLessonsLevel7,
  crLessonsLevel8,
  crLessonsLevel9,
  crLessonsLevel10,
} from './communication-rhetoric-lessons';

/**
 * Communication & Rhetoric Pathway
 * 80 lessons across 10 levels mastering persuasion, public speaking, and influence
 */
export const communicationRhetoricPathway: PathwayLevel[] = [
  {
    id: 'cr-level1',
    title: 'Level 1: Foundations of Persuasion',
    description: 'Master Aristotle\'s ethos-pathos-logos and Cialdini\'s influence principles',
    icon: '🎤',
    color: 'purple',
    unlockRequirement: 0,
    lessons: crLessonsLevel1,
  },
  {
    id: 'cr-level2',
    title: 'Level 2: Argumentation & Logic',
    description: 'Build bulletproof arguments, spot logical fallacies, and think critically',
    icon: '🧩',
    color: 'blue',
    unlockRequirement: 500,
    lessons: crLessonsLevel2,
  },
  {
    id: 'cr-level3',
    title: 'Level 3: Storytelling for Impact',
    description: 'Use the hero\'s journey, data storytelling, and narrative arcs to captivate any audience',
    icon: '📖',
    color: 'amber',
    unlockRequirement: 1000,
    lessons: crLessonsLevel3,
  },
  {
    id: 'cr-level4',
    title: 'Level 4: Public Speaking Mastery',
    description: 'Command a stage with presence, vocal variety, and world-class delivery',
    icon: '🎙️',
    color: 'emerald',
    unlockRequirement: 1500,
    lessons: crLessonsLevel4,
  },
  {
    id: 'cr-level5',
    title: 'Level 5: Written Communication',
    description: 'Write emails, proposals, and documents that get results',
    icon: '✍️',
    color: 'cyan',
    unlockRequirement: 2000,
    lessons: crLessonsLevel5,
  },
  {
    id: 'cr-level6',
    title: 'Level 6: Difficult Conversations',
    description: 'Navigate confrontation, give feedback, and resolve conflict with grace',
    icon: '🔥',
    color: 'red',
    unlockRequirement: 2500,
    lessons: crLessonsLevel6,
  },
  {
    id: 'cr-level7',
    title: 'Level 7: Active Listening & Empathy',
    description: 'Become the person everyone wants to talk to through deep listening skills',
    icon: '👂',
    color: 'teal',
    unlockRequirement: 3000,
    lessons: crLessonsLevel7,
  },
  {
    id: 'cr-level8',
    title: 'Level 8: Debate & Dialectic',
    description: 'Master formal debate, the Socratic method, and dialectical reasoning',
    icon: '⚔️',
    color: 'indigo',
    unlockRequirement: 3500,
    lessons: crLessonsLevel8,
  },
  {
    id: 'cr-level9',
    title: 'Level 9: Influence & Framing',
    description: 'Understand how framing, anchoring, and nudges shape decisions',
    icon: '🖼️',
    color: 'rose',
    unlockRequirement: 4000,
    lessons: crLessonsLevel9,
  },
  {
    id: 'cr-level10',
    title: 'Level 10: Your Communication Playbook',
    description: 'Build your personal communication toolkit and 30-day mastery challenge',
    icon: '📋',
    color: 'yellow',
    unlockRequirement: 4500,
    lessons: crLessonsLevel10,
  },
];

export default communicationRhetoricPathway;
