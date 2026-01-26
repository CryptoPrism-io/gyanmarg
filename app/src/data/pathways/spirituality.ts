import type { PathwayLevel } from '@/types';
import { spiritualitySadhanaLessons } from './spirituality-sadhana';

/**
 * Spirituality & Sadhana Pathway
 * 25 lessons covering meditation, breathwork, yoga, and daily spiritual practice
 */
export const spiritualityPathway: PathwayLevel[] = [
  {
    id: 'spirit-level1',
    title: 'Level 1: Sadhana Foundations',
    description: 'Understanding daily spiritual practice and its neuroscience',
    icon: '🕯️',
    color: 'amber',
    unlockRequirement: 0,
    lessons: spiritualitySadhanaLessons.slice(0, 8), // Lessons 1-8
  },
  {
    id: 'spirit-level2',
    title: 'Level 2: Meditation & Breathwork',
    description: 'Practical techniques from yoga and Buddhist traditions',
    icon: '🧘',
    color: 'orange',
    unlockRequirement: 500,
    lessons: spiritualitySadhanaLessons.slice(8, 16), // Lessons 9-16
  },
  {
    id: 'spirit-level3',
    title: 'Level 3: Advanced Practices',
    description: 'Kundalini, chakras, and expanded states of consciousness',
    icon: '✨',
    color: 'rose',
    unlockRequirement: 1500,
    lessons: spiritualitySadhanaLessons.slice(16), // Lessons 17-25
  },
];

export default spiritualityPathway;
