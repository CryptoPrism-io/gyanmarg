import type { PathwayLevel } from '@/types';
import {
  parLessonsLevel1,
  parLessonsLevel2,
  parLessonsLevel3,
  parLessonsLevel4,
  parLessonsLevel5,
  parLessonsLevel6,
  parLessonsLevel7,
  parLessonsLevel8,
  parLessonsLevel9,
  parLessonsLevel10,
} from './parenting-lessons';

/**
 * Parenting Pathway
 * 80 lessons across 10 levels mastering evidence-based parenting
 */
export const parentingPathway: PathwayLevel[] = [
  {
    id: 'par-level1',
    title: 'Level 1: The Science of Child Development',
    description: 'Understand how the brain grows, attachment forms, and critical periods shape your child\'s future',
    icon: '\u{1F476}',
    color: 'teal',
    unlockRequirement: 0,
    lessons: parLessonsLevel1,
  },
  {
    id: 'par-level2',
    title: 'Level 2: Emotional Intelligence for Parents',
    description: 'Master your own triggers, model healthy emotions, and build your child\'s emotional vocabulary',
    icon: '\u{1F9E1}',
    color: 'rose',
    unlockRequirement: 500,
    lessons: parLessonsLevel2,
  },
  {
    id: 'par-level3',
    title: 'Level 3: Communication with Children',
    description: 'Learn active listening, validation techniques, and age-appropriate dialogue strategies',
    icon: '\u{1F4AC}',
    color: 'blue',
    unlockRequirement: 1000,
    lessons: parLessonsLevel3,
  },
  {
    id: 'par-level4',
    title: 'Level 4: Positive Discipline',
    description: 'Set firm boundaries without punishment using natural consequences and collaborative problem-solving',
    icon: '\u{1F331}',
    color: 'emerald',
    unlockRequirement: 1500,
    lessons: parLessonsLevel4,
  },
  {
    id: 'par-level5',
    title: 'Level 5: Building Resilience',
    description: 'Foster growth mindset, grit, and the ability to bounce back from failure',
    icon: '\u{1F4AA}',
    color: 'amber',
    unlockRequirement: 2000,
    lessons: parLessonsLevel5,
  },
  {
    id: 'par-level6',
    title: 'Level 6: The Digital Age Parent',
    description: 'Navigate screen time, online safety, social media, and raising tech-healthy kids',
    icon: '\u{1F4F1}',
    color: 'cyan',
    unlockRequirement: 2500,
    lessons: parLessonsLevel6,
  },
  {
    id: 'par-level7',
    title: 'Level 7: Education & Learning',
    description: 'Support different learning styles, foster curiosity, and create a love of learning at home',
    icon: '\u{1F4DA}',
    color: 'purple',
    unlockRequirement: 3000,
    lessons: parLessonsLevel7,
  },
  {
    id: 'par-level8',
    title: 'Level 8: Family Systems',
    description: 'Master sibling dynamics, co-parenting, family meetings, and building lasting traditions',
    icon: '\u{1F3E0}',
    color: 'indigo',
    unlockRequirement: 3500,
    lessons: parLessonsLevel8,
  },
  {
    id: 'par-level9',
    title: 'Level 9: Adolescence & Teen Years',
    description: 'Navigate identity formation, peer pressure, risk-taking, and the quest for independence',
    icon: '\u{1F9D1}',
    color: 'red',
    unlockRequirement: 4000,
    lessons: parLessonsLevel9,
  },
  {
    id: 'par-level10',
    title: 'Level 10: Raising Future Adults',
    description: 'Instill values, build character, and launch confident young adults into the world',
    icon: '\u{1F31F}',
    color: 'yellow',
    unlockRequirement: 4500,
    lessons: parLessonsLevel10,
  },
];

export default parentingPathway;
