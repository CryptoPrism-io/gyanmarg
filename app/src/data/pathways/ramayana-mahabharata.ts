import type { PathwayLevel } from '@/types';
import {
  epicLessonsLevel1,
  epicLessonsLevel2,
  epicLessonsLevel3,
  epicLessonsLevel4,
  epicLessonsLevel5,
  epicLesson039,
  epicLessonsLevel6,
  epicLessonsLevel7,
  epicLessonsLevel7Remaining,
  epicLessonsLevel8,
  epicLessonsLevel9,
  epicLessonsLevel10,
} from './ramayana-mahabharata-lessons';

/**
 * Ramayana & Mahabharata Pathway
 * 80 lessons across 10 levels covering leadership and strategy from the epics
 */
export const ramayanaPathway: PathwayLevel[] = [
  {
    id: 'epic-level1',
    title: 'Level 1: Ramayana — Origins & Bala Kanda',
    description: 'Ideal leadership and preparation for greatness',
    icon: '👑',
    color: 'amber',
    unlockRequirement: 0,
    lessons: epicLessonsLevel1,
  },
  {
    id: 'epic-level2',
    title: 'Level 2: Ramayana — Exile & Forest Life',
    description: 'Resilience, adaptability, and thriving under constraints',
    icon: '🌿',
    color: 'emerald',
    unlockRequirement: 500,
    lessons: epicLessonsLevel2,
  },
  {
    id: 'epic-level3',
    title: 'Level 3: Ramayana — Alliance & Search',
    description: 'Building alliances and mobilizing resources',
    icon: '🤝',
    color: 'blue',
    unlockRequirement: 1000,
    lessons: epicLessonsLevel3,
  },
  {
    id: 'epic-level4',
    title: 'Level 4: Ramayana — War & Victory',
    description: 'Strategic warfare and overcoming impossible odds',
    icon: '⚔️',
    color: 'red',
    unlockRequirement: 1500,
    lessons: epicLessonsLevel4,
  },
  {
    id: 'epic-level5',
    title: 'Level 5: Ramayana — Dharma & Legacy',
    description: 'Governance, justice, and legacy building',
    icon: '🏛️',
    color: 'orange',
    unlockRequirement: 2000,
    lessons: [...epicLessonsLevel5, ...epicLesson039],
  },
  {
    id: 'epic-level6',
    title: 'Level 6: Mahabharata — Origins & Adi Parva',
    description: 'Family dynamics, rivalry, and ambition management',
    icon: '👨‍👩‍👦‍👦',
    color: 'purple',
    unlockRequirement: 2500,
    lessons: epicLessonsLevel6,
  },
  {
    id: 'epic-level7',
    title: 'Level 7: Mahabharata — Sabha & Vana Parva',
    description: 'Risk, loss, and patience as strategy',
    icon: '🎲',
    color: 'slate',
    unlockRequirement: 3000,
    lessons: [...epicLessonsLevel7, ...epicLessonsLevel7Remaining],
  },
  {
    id: 'epic-level8',
    title: 'Level 8: Mahabharata — Diplomacy & War',
    description: 'Negotiation failure and escalation dynamics',
    icon: '📜',
    color: 'cyan',
    unlockRequirement: 3500,
    lessons: epicLessonsLevel8,
  },
  {
    id: 'epic-level9',
    title: 'Level 9: Mahabharata — Aftermath & Grief',
    description: 'Processing loss and the cost of victory',
    icon: '🕯️',
    color: 'rose',
    unlockRequirement: 4000,
    lessons: epicLessonsLevel9,
  },
  {
    id: 'epic-level10',
    title: 'Level 10: Mahabharata — Shanti Parva',
    description: 'Governance wisdom and statecraft for modern leaders',
    icon: '🏰',
    color: 'indigo',
    unlockRequirement: 4500,
    lessons: epicLessonsLevel10,
  },
];

export default ramayanaPathway;
