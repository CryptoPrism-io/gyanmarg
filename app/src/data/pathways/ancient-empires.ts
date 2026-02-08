import type { PathwayLevel } from '@/types';
import {
  aeLessonsLevel1,
  aeLessonsLevel2,
  aeLessonsLevel3,
  aeLessonsLevel4,
  aeLessonsLevel5,
  aeLessonsLevel6,
  aeLessonsLevel7,
  aeLessonsLevel8,
  aeLessonsLevel9,
  aeLessonsLevel10,
} from './ancient-empires-lessons';

/**
 * Ancient Empires Pathway
 * 80 lessons across 10 levels studying the rise, peak, and fall of history's greatest empires
 */
export const ancientEmpiresPathway: PathwayLevel[] = [
  {
    id: 'ae-level1',
    title: 'Level 1: Patterns of Empire',
    description: 'Discover the recurring patterns behind the rise and fall of every great empire',
    icon: '🏛️',
    color: 'orange',
    unlockRequirement: 0,
    lessons: aeLessonsLevel1,
  },
  {
    id: 'ae-level2',
    title: 'Level 2: Egypt & Mesopotamia',
    description: 'Explore the cradle of civilization: pyramids, laws, and the power of rivers',
    icon: '🏺',
    color: 'amber',
    unlockRequirement: 500,
    lessons: aeLessonsLevel2,
  },
  {
    id: 'ae-level3',
    title: 'Level 3: Greece: Democracy & Ideas',
    description: 'From Athenian democracy to Alexander the Great, the birth of Western civilization',
    icon: '🏟️',
    color: 'blue',
    unlockRequirement: 1000,
    lessons: aeLessonsLevel3,
  },
  {
    id: 'ae-level4',
    title: 'Level 4: Rome: Republic to Empire',
    description: 'The greatest empire in Western history: its genius, its glory, and its fatal flaws',
    icon: '⚔️',
    color: 'red',
    unlockRequirement: 1500,
    lessons: aeLessonsLevel4,
  },
  {
    id: 'ae-level5',
    title: 'Level 5: Persia & the Silk Road',
    description: 'Cyrus the Great, religious tolerance, and the trade routes that connected worlds',
    icon: '🐫',
    color: 'purple',
    unlockRequirement: 2000,
    lessons: aeLessonsLevel5,
  },
  {
    id: 'ae-level6',
    title: 'Level 6: China: Dynasties & Philosophy',
    description: 'From the First Emperor to the Tang golden age, the Middle Kingdom endures',
    icon: '🐉',
    color: 'rose',
    unlockRequirement: 2500,
    lessons: aeLessonsLevel6,
  },
  {
    id: 'ae-level7',
    title: 'Level 7: India: Maurya & Gupta',
    description: 'Ashoka, Kautilya, zero, and the golden age of Indian civilization',
    icon: '🪷',
    color: 'emerald',
    unlockRequirement: 3000,
    lessons: aeLessonsLevel7,
  },
  {
    id: 'ae-level8',
    title: 'Level 8: Mongols & Ottomans',
    description: 'Genghis Khan built the largest land empire; the Ottomans bridged East and West',
    icon: '🏹',
    color: 'slate',
    unlockRequirement: 3500,
    lessons: aeLessonsLevel8,
  },
  {
    id: 'ae-level9',
    title: 'Level 9: Why Empires Fall',
    description: 'The universal patterns of decline: overextension, corruption, and complacency',
    icon: '📉',
    color: 'cyan',
    unlockRequirement: 4000,
    lessons: aeLessonsLevel9,
  },
  {
    id: 'ae-level10',
    title: 'Level 10: Leadership Lessons Across Empires',
    description: 'Extract timeless leadership and strategy lessons from 5,000 years of empires',
    icon: '👑',
    color: 'yellow',
    unlockRequirement: 4500,
    lessons: aeLessonsLevel10,
  },
];

export default ancientEmpiresPathway;
