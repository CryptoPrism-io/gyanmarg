import type { PathwayLevel } from '@/types';
import { polymathMasteryLessons } from './polymath-mastery';

/**
 * Polymath Mastery Pathway
 * 20 lessons covering meta-learning, cross-domain synthesis, and becoming a modern Renaissance person
 */
export const polymathPathway: PathwayLevel[] = [
  {
    id: 'polymath-level1',
    title: 'Level 1: Polymath Foundations',
    description: 'What is a polymath and why it matters today',
    icon: '📚',
    color: 'indigo',
    unlockRequirement: 0,
    lessons: polymathMasteryLessons.slice(0, 7), // Lessons 1-7
  },
  {
    id: 'polymath-level2',
    title: 'Level 2: Learning Systems',
    description: 'Mental models, Zettelkasten, and knowledge synthesis',
    icon: '🔗',
    color: 'blue',
    unlockRequirement: 500,
    lessons: polymathMasteryLessons.slice(7, 14), // Lessons 8-14
  },
  {
    id: 'polymath-level3',
    title: 'Level 3: Expert-Generalist Mastery',
    description: 'Building portfolio careers and creative synthesis',
    icon: '🌟',
    color: 'purple',
    unlockRequirement: 1500,
    lessons: polymathMasteryLessons.slice(14), // Lessons 15-20
  },
];

export default polymathPathway;
