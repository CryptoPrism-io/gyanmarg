import type { PathwayLevel } from '@/types';
import { bodyLongevityLessons } from './body-longevity';

/**
 * Body & Longevity Pathway
 * 25 lessons covering physical optimization, longevity science, biohacking, and health mastery
 */
export const bodyPathway: PathwayLevel[] = [
  {
    id: 'body-level1',
    title: 'Level 1: Longevity Foundations',
    description: 'Healthspan vs lifespan and the four horsemen of chronic disease',
    icon: '💪',
    color: 'green',
    unlockRequirement: 0,
    lessons: bodyLongevityLessons.slice(0, 8), // Lessons 1-8
  },
  {
    id: 'body-level2',
    title: 'Level 2: Physical Optimization',
    description: 'Exercise science, nutrition protocols, and recovery strategies',
    icon: '🏃',
    color: 'teal',
    unlockRequirement: 500,
    lessons: bodyLongevityLessons.slice(8, 16), // Lessons 9-16
  },
  {
    id: 'body-level3',
    title: 'Level 3: Advanced Biohacking',
    description: 'Cutting-edge longevity protocols from Peter Attia and Bryan Johnson',
    icon: '🔋',
    color: 'cyan',
    unlockRequirement: 1500,
    lessons: bodyLongevityLessons.slice(16), // Lessons 17-25
  },
];

export default bodyPathway;
