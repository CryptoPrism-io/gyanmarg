import type { PathwayLevel } from '@/types';
import {
  jyotLessonsLevel1,
  jyotLessonsLevel2,
  jyotLessonsLevel3,
  jyotLessonsLevel4,
  jyotLessonsLevel5,
  jyotLessonsLevel6,
  jyotLessonsLevel7,
  jyotLessonsLevel8,
  jyotLessonsLevel9,
  jyotLessonsLevel10,
} from './jyotish-vastu-lessons';

/**
 * Jyotish & Vastu Pathway
 * 80 lessons across 10 levels covering timing, cycles, and space design
 */
export const jyotishVastuPathway: PathwayLevel[] = [
  {
    id: 'jyot-level1',
    title: 'Level 1: Foundations of Jyotish Shastra',
    description: 'Pattern recognition and astronomical wisdom',
    icon: '⭐',
    color: 'amber',
    unlockRequirement: 0,
    lessons: jyotLessonsLevel1,
  },
  {
    id: 'jyot-level2',
    title: 'Level 2: Navagraha — The Nine Planets',
    description: 'Planetary archetypes as personality and energy models',
    icon: '🪐',
    color: 'blue',
    unlockRequirement: 500,
    lessons: jyotLessonsLevel2,
  },
  {
    id: 'jyot-level3',
    title: 'Level 3: Rashis — The Twelve Signs',
    description: 'Zodiac as personality framework and elemental understanding',
    icon: '♈',
    color: 'orange',
    unlockRequirement: 1000,
    lessons: jyotLessonsLevel3,
  },
  {
    id: 'jyot-level4',
    title: 'Level 4: Bhavas — The Twelve Houses',
    description: 'Life areas framework and mapping your priorities',
    icon: '🏠',
    color: 'emerald',
    unlockRequirement: 1500,
    lessons: jyotLessonsLevel4,
  },
  {
    id: 'jyot-level5',
    title: 'Level 5: Dashas & Planetary Transits',
    description: 'Life cycles and understanding seasons of change',
    icon: '🔄',
    color: 'purple',
    unlockRequirement: 2000,
    lessons: jyotLessonsLevel5,
  },
  {
    id: 'jyot-level6',
    title: 'Level 6: Muhurta — Auspicious Timing',
    description: 'Strategic timing for launches, decisions, and big moves',
    icon: '⏰',
    color: 'rose',
    unlockRequirement: 2500,
    lessons: jyotLessonsLevel6,
  },
  {
    id: 'jyot-level7',
    title: 'Level 7: Vastu Shastra Foundations',
    description: 'Space design principles and directional energy',
    icon: '🏗️',
    color: 'slate',
    unlockRequirement: 3000,
    lessons: jyotLessonsLevel7,
  },
  {
    id: 'jyot-level8',
    title: 'Level 8: Vastu for Homes & Workplaces',
    description: 'Practical space optimization for productivity and peace',
    icon: '🏡',
    color: 'teal',
    unlockRequirement: 3500,
    lessons: jyotLessonsLevel8,
  },
  {
    id: 'jyot-level9',
    title: 'Level 9: Yantras & Sacred Geometry',
    description: 'Geometric patterns and visual meditation tools',
    icon: '🔷',
    color: 'cyan',
    unlockRequirement: 4000,
    lessons: jyotLessonsLevel9,
  },
  {
    id: 'jyot-level10',
    title: 'Level 10: Integration & Modern Applications',
    description: 'Using Jyotish and Vastu practically in daily life',
    icon: '🎯',
    color: 'indigo',
    unlockRequirement: 4500,
    lessons: jyotLessonsLevel10,
  },
];

export default jyotishVastuPathway;
