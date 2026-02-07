import type { PathwayLevel } from '@/types';
import {
  stoicLessonsLevel1,
  stoicLessonsLevel2,
  stoicLessonsLevel3,
  stoicLessonsLevel4,
  stoicLessonsLevel5,
  stoicLessonsLevel6,
  stoicLessonsLevel7,
  stoicLessonsLevel8,
  stoicLessonsLevel9,
  stoicLessonsLevel10,
} from './stoicism-lessons';

/**
 * Stoicism Pathway
 * 80 lessons across 10 levels covering practical Stoic philosophy
 */
export const stoicismPathway: PathwayLevel[] = [
  {
    id: 'stoic-level1',
    title: 'Level 1: Foundations of Stoicism',
    description: 'Discover the Stoic school, its key thinkers, and the dichotomy of control',
    icon: '🏛️',
    color: 'slate',
    unlockRequirement: 0,
    lessons: stoicLessonsLevel1,
  },
  {
    id: 'stoic-level2',
    title: 'Level 2: The Dichotomy of Control',
    description: 'Master Epictetus\' core teaching: what is up to us vs. what is not',
    icon: '⚖️',
    color: 'blue',
    unlockRequirement: 500,
    lessons: stoicLessonsLevel2,
  },
  {
    id: 'stoic-level3',
    title: 'Level 3: Virtue Ethics',
    description: 'Explore the four cardinal virtues: wisdom, courage, justice, and temperance',
    icon: '🌿',
    color: 'emerald',
    unlockRequirement: 1000,
    lessons: stoicLessonsLevel3,
  },
  {
    id: 'stoic-level4',
    title: 'Level 4: Seneca\'s Practical Wisdom',
    description: 'Deep dive into Seneca\'s letters on time, anger, grief, and adversity',
    icon: '📜',
    color: 'amber',
    unlockRequirement: 1500,
    lessons: stoicLessonsLevel4,
  },
  {
    id: 'stoic-level5',
    title: 'Level 5: Marcus Aurelius — The Philosopher King',
    description: 'Explore the Meditations: journaling, impermanence, duty, and cosmic perspective',
    icon: '👑',
    color: 'purple',
    unlockRequirement: 2000,
    lessons: stoicLessonsLevel5,
  },
  {
    id: 'stoic-level6',
    title: 'Level 6: Stoic Psychology',
    description: 'Connect Stoic principles to modern CBT, cognitive distortions, and emotional resilience',
    icon: '🧠',
    color: 'pink',
    unlockRequirement: 2500,
    lessons: stoicLessonsLevel6,
  },
  {
    id: 'stoic-level7',
    title: 'Level 7: Stoic Resilience',
    description: 'Build antifragility through voluntary discomfort, memento mori, and the Stockdale Paradox',
    icon: '🔥',
    color: 'red',
    unlockRequirement: 3000,
    lessons: stoicLessonsLevel7,
  },
  {
    id: 'stoic-level8',
    title: 'Level 8: Stoic Relationships',
    description: 'Practice cosmopolitanism, forgiveness, community service, and Stoic leadership',
    icon: '🤝',
    color: 'teal',
    unlockRequirement: 3500,
    lessons: stoicLessonsLevel8,
  },
  {
    id: 'stoic-level9',
    title: 'Level 9: Modern Stoicism',
    description: 'Stoicism in the 21st century: Ryan Holiday, Tim Ferriss, Stoic Week, and daily practice',
    icon: '🌍',
    color: 'cyan',
    unlockRequirement: 4000,
    lessons: stoicLessonsLevel9,
  },
  {
    id: 'stoic-level10',
    title: 'Level 10: The Stoic Life',
    description: 'Integrate all practices, build your philosophy, create your Stoic manifesto',
    icon: '🌟',
    color: 'yellow',
    unlockRequirement: 4500,
    lessons: stoicLessonsLevel10,
  },
];

export default stoicismPathway;
