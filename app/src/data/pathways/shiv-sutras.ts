import type { PathwayLevel } from '@/types';
import {
  shivLessonsLevel1,
  shivLessonsLevel2,
  shivLessonsLevel3,
  shivLessonsLevel4,
  shivLessonsLevel5,
  shivLessonsLevel6,
  shivLessonsLevel7,
  shivLessonsLevel8,
  shivLessonsLevel9,
  shivLessonsLevel10,
} from './shiv-sutras-lessons';

/**
 * Shiv Sutras & Tantra Pathway
 * 80 lessons across 10 levels covering Kashmir Shaivism and consciousness practices
 */
export const shivSutrasPathway: PathwayLevel[] = [
  {
    id: 'shiv-level1',
    title: 'Level 1: Introduction to Kashmir Shaivism',
    description: 'A consciousness-first worldview for modern seekers',
    icon: '🔱',
    color: 'violet',
    unlockRequirement: 0,
    lessons: shivLessonsLevel1,
  },
  {
    id: 'shiv-level2',
    title: 'Level 2: Shambhavopaya — Divine Means',
    description: 'Instant recognition and spontaneous awareness shifts',
    icon: '⚡',
    color: 'amber',
    unlockRequirement: 500,
    lessons: shivLessonsLevel2,
  },
  {
    id: 'shiv-level3',
    title: 'Level 3: Shaktopaya — Empowered Means',
    description: 'Power of thought, mantra, and mental discipline',
    icon: '💭',
    color: 'blue',
    unlockRequirement: 1000,
    lessons: shivLessonsLevel3,
  },
  {
    id: 'shiv-level4',
    title: 'Level 4: Anavopaya — Individual Means',
    description: 'Body-based practices, breath, and physical techniques',
    icon: '🫁',
    color: 'emerald',
    unlockRequirement: 1500,
    lessons: shivLessonsLevel4,
  },
  {
    id: 'shiv-level5',
    title: 'Level 5: Spanda — Doctrine of Vibration',
    description: 'Creative pulsation and energy management',
    icon: '〰️',
    color: 'orange',
    unlockRequirement: 2000,
    lessons: shivLessonsLevel5,
  },
  {
    id: 'shiv-level6',
    title: 'Level 6: Pratyabhijna — Self-Recognition',
    description: 'You already are what you seek',
    icon: '🪞',
    color: 'purple',
    unlockRequirement: 2500,
    lessons: shivLessonsLevel6,
  },
  {
    id: 'shiv-level7',
    title: 'Level 7: Vijnanabhairava — 112 Meditations',
    description: 'Practical meditation techniques from ancient masters',
    icon: '🧘',
    color: 'rose',
    unlockRequirement: 3000,
    lessons: shivLessonsLevel7,
  },
  {
    id: 'shiv-level8',
    title: 'Level 8: Tantric Practices & Rituals',
    description: 'Sacred practice and ritual as technology',
    icon: '🕯️',
    color: 'red',
    unlockRequirement: 3500,
    lessons: shivLessonsLevel8,
  },
  {
    id: 'shiv-level9',
    title: 'Level 9: Kundalini & Chakra System',
    description: 'Energy anatomy and safe kundalini practices',
    icon: '🐍',
    color: 'teal',
    unlockRequirement: 4000,
    lessons: shivLessonsLevel9,
  },
  {
    id: 'shiv-level10',
    title: 'Level 10: Non-Dual Realization',
    description: 'Living non-duality and everyday enlightenment',
    icon: '☀️',
    color: 'indigo',
    unlockRequirement: 4500,
    lessons: shivLessonsLevel10,
  },
];

export default shivSutrasPathway;
