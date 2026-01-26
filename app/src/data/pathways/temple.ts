import type { PathwayLevel } from '@/types';
import { templeScienceLessons } from './temple-science';

/**
 * Temple Science & Sacred Geometry Pathway
 * 15 lessons covering temple architecture, Vastu, sacred geometry, and energy engineering
 */
export const templePathway: PathwayLevel[] = [
  {
    id: 'temple-level1',
    title: 'Level 1: Temple Science Foundations',
    description: 'Introduction to Vastu Shastra and sacred geometry',
    icon: '🛕',
    color: 'amber',
    unlockRequirement: 0,
    lessons: templeScienceLessons.slice(0, 5), // Lessons 1-5
  },
  {
    id: 'temple-level2',
    title: 'Level 2: Temple Architecture',
    description: 'Understanding Dravidian and Nagara styles',
    icon: '🏛️',
    color: 'orange',
    unlockRequirement: 500,
    lessons: templeScienceLessons.slice(5, 10), // Lessons 6-10
  },
  {
    id: 'temple-level3',
    title: 'Level 3: Temple Energy Systems',
    description: 'Acoustics, energy fields, and modern applications',
    icon: '⚡',
    color: 'gold',
    unlockRequirement: 1500,
    lessons: templeScienceLessons.slice(10), // Lessons 11-15
  },
];

export default templePathway;
