import type { PathwayLevel } from '@/types';
import {
  gitaLessonsLevel1,
  gitaLessonsLevel2,
  gitaLessonsLevel3,
  gitaLessonsLevel4,
  gitaLessonsLevel5,
  gitaLessonsLevel6,
  gitaLessonsLevel7,
  gitaLessonsLevel8,
  gitaLessonsLevel9,
  gitaLessonsLevel9Remaining,
  gitaLessonsLevel10,
} from './bhagavad-gita-lessons';

/**
 * Bhagavad Gita Pathway
 * 80 lessons across 10 levels covering actionable wisdom from the Gita
 */
export const bhagavadGitaPathway: PathwayLevel[] = [
  {
    id: 'gita-level1',
    title: 'Level 1: Arjuna\'s Crisis & Context',
    description: 'Navigate decision paralysis and find clarity in chaos',
    icon: '⚔️',
    color: 'slate',
    unlockRequirement: 0,
    lessons: gitaLessonsLevel1,
  },
  {
    id: 'gita-level2',
    title: 'Level 2: Karma Yoga — Path of Action',
    description: 'Take massive action without burning out',
    icon: '🔥',
    color: 'orange',
    unlockRequirement: 500,
    lessons: gitaLessonsLevel2,
  },
  {
    id: 'gita-level3',
    title: 'Level 3: Jnana Yoga — Path of Knowledge',
    description: 'Self-inquiry and cutting through ego',
    icon: '📖',
    color: 'blue',
    unlockRequirement: 1000,
    lessons: gitaLessonsLevel3,
  },
  {
    id: 'gita-level4',
    title: 'Level 4: Bhakti Yoga — Path of Devotion',
    description: 'Finding purpose beyond ego and surrender as strength',
    icon: '💜',
    color: 'purple',
    unlockRequirement: 1500,
    lessons: gitaLessonsLevel4,
  },
  {
    id: 'gita-level5',
    title: 'Level 5: Sankhya & Buddhi Yoga',
    description: 'The three Gunas as an energy management framework',
    icon: '⚖️',
    color: 'emerald',
    unlockRequirement: 2000,
    lessons: gitaLessonsLevel5,
  },
  {
    id: 'gita-level6',
    title: 'Level 6: Dhyana Yoga — Meditation',
    description: 'Practical meditation techniques and mind mastery',
    icon: '🧘',
    color: 'amber',
    unlockRequirement: 2500,
    lessons: gitaLessonsLevel6,
  },
  {
    id: 'gita-level7',
    title: 'Level 7: Vibhuti Yoga — Divine Manifestations',
    description: 'Recognizing excellence and patterns of greatness',
    icon: '✨',
    color: 'rose',
    unlockRequirement: 3000,
    lessons: gitaLessonsLevel7,
  },
  {
    id: 'gita-level8',
    title: 'Level 8: Vishwarupa — Cosmic Vision',
    description: 'Systems thinking and radical perspective shifts',
    icon: '🌌',
    color: 'cyan',
    unlockRequirement: 3500,
    lessons: gitaLessonsLevel8,
  },
  {
    id: 'gita-level9',
    title: 'Level 9: Kshetra-Kshetrajna — Field & Knower',
    description: 'Metacognition and self-awareness frameworks',
    icon: '🔍',
    color: 'teal',
    unlockRequirement: 4000,
    lessons: [...gitaLessonsLevel9, ...gitaLessonsLevel9Remaining],
  },
  {
    id: 'gita-level10',
    title: 'Level 10: Moksha — Liberation & Synthesis',
    description: 'Design your personal philosophy and live freely',
    icon: '🕊️',
    color: 'indigo',
    unlockRequirement: 4500,
    lessons: gitaLessonsLevel10,
  },
];

export default bhagavadGitaPathway;
