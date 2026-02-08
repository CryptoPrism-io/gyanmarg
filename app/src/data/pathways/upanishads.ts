import type { PathwayLevel } from '@/types';
import {
  upanLessonsLevel1,
  upanLessonsLevel2,
  upanLessonsLevel3,
  upanLessonsLevel4,
  upanLessonsLevel5,
  upanLessonsLevel6,
  upanLessonsLevel7Full,
  upanLessonsLevel8,
  upanLessonsLevel9,
  upanLessonsLevel9Remaining,
  upanLessonsLevel10,
  upanLessonsLevel10Remaining,
} from './upanishads-lessons';

/**
 * Upanishads Pathway
 * 80 lessons across 10 levels covering self-inquiry and consciousness
 */
export const upanishadsPathway: PathwayLevel[] = [
  {
    id: 'upan-level1',
    title: 'Level 1: Introduction to the Upanishads',
    description: 'Why ancient self-inquiry matters for modern clarity',
    icon: '🔮',
    color: 'amber',
    unlockRequirement: 0,
    lessons: upanLessonsLevel1,
  },
  {
    id: 'upan-level2',
    title: 'Level 2: Isha & Kena Upanishad',
    description: 'Non-attachment while fully engaging in life',
    icon: '👁️',
    color: 'blue',
    unlockRequirement: 500,
    lessons: upanLessonsLevel2,
  },
  {
    id: 'upan-level3',
    title: 'Level 3: Katha — Death & Immortality',
    description: 'Facing mortality and choosing the good over the pleasant',
    icon: '💀',
    color: 'slate',
    unlockRequirement: 1000,
    lessons: upanLessonsLevel3,
  },
  {
    id: 'upan-level4',
    title: 'Level 4: Mundaka & Prashna Upanishad',
    description: 'Higher vs lower knowledge and the six key questions',
    icon: '❓',
    color: 'purple',
    unlockRequirement: 1500,
    lessons: upanLessonsLevel4,
  },
  {
    id: 'upan-level5',
    title: 'Level 5: Mandukya — OM & Consciousness',
    description: 'States of consciousness and awareness science',
    icon: '🕉️',
    color: 'orange',
    unlockRequirement: 2000,
    lessons: upanLessonsLevel5,
  },
  {
    id: 'upan-level6',
    title: 'Level 6: Taittiriya & Aitareya',
    description: 'Five sheaths of self and holistic wellness',
    icon: '🧅',
    color: 'emerald',
    unlockRequirement: 2500,
    lessons: upanLessonsLevel6,
  },
  {
    id: 'upan-level7',
    title: 'Level 7: Chandogya Upanishad',
    description: 'Tat Tvam Asi — discovering your true nature',
    icon: '🌟',
    color: 'rose',
    unlockRequirement: 3000,
    lessons: upanLessonsLevel7Full,
  },
  {
    id: 'upan-level8',
    title: 'Level 8: Brihadaranyaka Upanishad',
    description: 'Neti Neti — elimination thinking and ultimate reality',
    icon: '🌊',
    color: 'cyan',
    unlockRequirement: 3500,
    lessons: upanLessonsLevel8,
  },
  {
    id: 'upan-level9',
    title: 'Level 9: Shvetashvatara & Kaivalya',
    description: 'Personal God, meditation practices, and liberation',
    icon: '🙏',
    color: 'teal',
    unlockRequirement: 4000,
    lessons: [...upanLessonsLevel9, ...upanLessonsLevel9Remaining],
  },
  {
    id: 'upan-level10',
    title: 'Level 10: Synthesis & Modern Relevance',
    description: 'Integrating Upanishadic wisdom into daily life',
    icon: '💎',
    color: 'indigo',
    unlockRequirement: 4500,
    lessons: [...upanLessonsLevel10, ...upanLessonsLevel10Remaining],
  },
];

export default upanishadsPathway;
