import type { PathwayLevel } from '@/types';
import {
  mathLessonsLevel1,
  mathLessonsLevel2,
  mathLessonsLevel3,
  mathLessonsLevel4,
  mathLessonsLevel5,
  mathLessonsLevel6,
  mathLessonsLevel7,
  mathLessonsLevel8,
} from './mathematics-patterns-lessons';

/**
 * Mathematics & Patterns Pathway
 * 64 lessons across 8 levels covering mathematical thinking, patterns, and beauty
 */
export const mathematicsPatternsPathway: PathwayLevel[] = [
  {
    id: 'math-level1',
    title: 'Level 1: Mathematical Foundations',
    description: 'Discover number systems, mathematical thinking, and problem-solving strategies',
    icon: '🔢',
    color: 'orange',
    unlockRequirement: 0,
    lessons: mathLessonsLevel1,
  },
  {
    id: 'math-level2',
    title: 'Level 2: Geometry & Spatial Thinking',
    description: 'Master shapes, symmetry, transformations, and spatial reasoning',
    icon: '📐',
    color: 'blue',
    unlockRequirement: 500,
    lessons: mathLessonsLevel2,
  },
  {
    id: 'math-level3',
    title: 'Level 3: Patterns in Nature',
    description: 'Explore Fibonacci, golden ratio, fractals, and mathematical patterns in nature',
    icon: '🌀',
    color: 'emerald',
    unlockRequirement: 1000,
    lessons: mathLessonsLevel3,
  },
  {
    id: 'math-level4',
    title: 'Level 4: Sacred Geometry',
    description: 'Understand Platonic solids, Flower of Life, and geometric symbolism',
    icon: '🔯',
    color: 'purple',
    unlockRequirement: 1500,
    lessons: mathLessonsLevel4,
  },
  {
    id: 'math-level5',
    title: 'Level 5: Algebra & Logic',
    description: 'Build algebraic thinking, logical reasoning, and proof techniques',
    icon: '🧮',
    color: 'amber',
    unlockRequirement: 2000,
    lessons: mathLessonsLevel5,
  },
  {
    id: 'math-level6',
    title: 'Level 6: Probability & Statistics',
    description: 'Master randomness, distributions, correlation, and Bayesian thinking',
    icon: '🎲',
    color: 'red',
    unlockRequirement: 2500,
    lessons: mathLessonsLevel6,
  },
  {
    id: 'math-level7',
    title: 'Level 7: Calculus & Change',
    description: 'Understand limits, derivatives, integrals, and optimization',
    icon: '📈',
    color: 'cyan',
    unlockRequirement: 3000,
    lessons: mathLessonsLevel7,
  },
  {
    id: 'math-level8',
    title: 'Level 8: Mathematical Beauty & Mastery',
    description: 'Explore number theory, topology, infinity, and the beauty of mathematics',
    icon: '✨',
    color: 'yellow',
    unlockRequirement: 3500,
    lessons: mathLessonsLevel8,
  },
];

export default mathematicsPatternsPathway;
