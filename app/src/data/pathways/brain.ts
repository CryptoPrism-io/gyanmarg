import type { PathwayLevel } from '@/types';
import { brainMasteryLessons } from './brain-mastery';

/**
 * Brain & Neuroscience Pathway
 * 25 lessons covering neuroscience fundamentals, cognitive optimization, neuroplasticity, and brain hacking
 */
export const brainPathway: PathwayLevel[] = [
  {
    id: 'brain-level1',
    title: 'Level 1: Neuroscience Foundations',
    description: 'Understand the basics of how your brain works',
    icon: '🧠',
    color: 'purple',
    unlockRequirement: 0,
    lessons: brainMasteryLessons.slice(0, 8), // Lessons 1-8
  },
  {
    id: 'brain-level2',
    title: 'Level 2: Cognitive Optimization',
    description: 'Techniques for enhancing memory, focus, and mental performance',
    icon: '⚡',
    color: 'blue',
    unlockRequirement: 500,
    lessons: brainMasteryLessons.slice(8, 16), // Lessons 9-16
  },
  {
    id: 'brain-level3',
    title: 'Level 3: Advanced Brain Science',
    description: 'Neuroplasticity, states of consciousness, and cutting-edge neuroscience',
    icon: '🔬',
    color: 'indigo',
    unlockRequirement: 1500,
    lessons: brainMasteryLessons.slice(16), // Lessons 17-25
  },
];

export default brainPathway;
