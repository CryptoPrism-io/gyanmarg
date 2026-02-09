import type { PathwayLevel } from '@/types';
import {
  dtLessonsLevel1,
  dtLessonsLevel2,
  dtLessonsLevel3,
  dtLessonsLevel4,
  dtLessonsLevel5,
  dtLessonsLevel6,
  dtLessonsLevel7,
  dtLessonsLevel8,
} from './design-thinking-lessons';

/**
 * Design Thinking Pathway
 * 64 lessons across 8 levels covering human-centered design, UX, and creative problem-solving
 */
export const designThinkingPathway: PathwayLevel[] = [
  {
    id: 'dt-level1',
    title: 'Level 1: Design Foundations',
    description: 'Discover the fundamentals of design thinking, user-centered design, and the design process',
    icon: '🎨',
    color: 'teal',
    unlockRequirement: 0,
    lessons: dtLessonsLevel1,
  },
  {
    id: 'dt-level2',
    title: 'Level 2: Empathy & Research',
    description: 'Master user research methods, empathy mapping, and understanding user needs',
    icon: '🔍',
    color: 'blue',
    unlockRequirement: 500,
    lessons: dtLessonsLevel2,
  },
  {
    id: 'dt-level3',
    title: 'Level 3: Problem Definition',
    description: 'Learn to frame problems, create point-of-view statements, and define design challenges',
    icon: '🎯',
    color: 'purple',
    unlockRequirement: 1000,
    lessons: dtLessonsLevel3,
  },
  {
    id: 'dt-level4',
    title: 'Level 4: Ideation Mastery',
    description: 'Explore brainstorming techniques, creative thinking methods, and idea generation',
    icon: '💡',
    color: 'amber',
    unlockRequirement: 1500,
    lessons: dtLessonsLevel4,
  },
  {
    id: 'dt-level5',
    title: 'Level 5: Prototyping',
    description: 'Build rapid prototypes, create mockups, and test ideas quickly',
    icon: '🛠️',
    color: 'orange',
    unlockRequirement: 2000,
    lessons: dtLessonsLevel5,
  },
  {
    id: 'dt-level6',
    title: 'Level 6: Testing & Validation',
    description: 'Conduct user testing, gather feedback, and iterate on designs',
    icon: '🧪',
    color: 'emerald',
    unlockRequirement: 2500,
    lessons: dtLessonsLevel6,
  },
  {
    id: 'dt-level7',
    title: 'Level 7: Advanced Methods',
    description: 'Master design sprints, service design, and advanced collaboration techniques',
    icon: '🚀',
    color: 'cyan',
    unlockRequirement: 3000,
    lessons: dtLessonsLevel7,
  },
  {
    id: 'dt-level8',
    title: 'Level 8: Design Leadership',
    description: 'Build design culture, lead teams, and create lasting impact with design thinking',
    icon: '👑',
    color: 'violet',
    unlockRequirement: 3500,
    lessons: dtLessonsLevel8,
  },
];

export default designThinkingPathway;
