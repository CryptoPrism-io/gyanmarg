import type { PathwayLevel } from '@/types';
import { shivaShaktiLessons } from './shiva-shakti';

/**
 * Shiva-Shakti & Kashmir Shaivism Pathway
 * 20 lessons covering non-dual philosophy, consciousness, and tantra
 */
export const shivaPathway: PathwayLevel[] = [
  {
    id: 'shiva-level1',
    title: 'Level 1: Kashmir Shaivism Foundations',
    description: 'Introduction to non-dual philosophy and Shiva-Shakti principles',
    icon: '🔱',
    color: 'indigo',
    unlockRequirement: 0,
    lessons: shivaShaktiLessons.slice(0, 7), // Lessons 1-7
  },
  {
    id: 'shiva-level2',
    title: 'Level 2: The 36 Tattvas',
    description: 'The cosmic principles of manifestation',
    icon: '🌀',
    color: 'purple',
    unlockRequirement: 500,
    lessons: shivaShaktiLessons.slice(7, 14), // Lessons 8-14
  },
  {
    id: 'shiva-level3',
    title: 'Level 3: Advanced Non-Dual Practice',
    description: 'Pratyabhijna, spanda, and recognition philosophy',
    icon: '💫',
    color: 'violet',
    unlockRequirement: 1500,
    lessons: shivaShaktiLessons.slice(14), // Lessons 15-20
  },
];

export default shivaPathway;
