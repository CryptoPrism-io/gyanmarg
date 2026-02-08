import type { PathwayLevel } from '@/types';
import {
  sansLessonsLevel1,
  sansLessonsLevel2,
  sansLessonsLevel3,
  sansLessonsLevel4,
  sansLessonsLevel5,
  sansLessonsLevel6,
  sansLessonsLevel7,
  sansLessonsLevel8,
  sansLessonsLevel9,
  sansLessonsLevel10,
} from './sanskrit-mantras-lessons';

/**
 * Sanskrit & Mantras Pathway
 * 80 lessons across 10 levels covering the science of sacred sound
 */
export const sanskritMantrasPathway: PathwayLevel[] = [
  {
    id: 'sans-level1',
    title: 'Level 1: Devanagari Script & Phonetics',
    description: 'The science behind Sanskrit sounds and phonetic precision',
    icon: '🔤',
    color: 'amber',
    unlockRequirement: 0,
    lessons: sansLessonsLevel1,
  },
  {
    id: 'sans-level2',
    title: 'Level 2: Basic Sanskrit Grammar',
    description: 'The logical beauty of the most precise language',
    icon: '📐',
    color: 'blue',
    unlockRequirement: 500,
    lessons: sansLessonsLevel2,
  },
  {
    id: 'sans-level3',
    title: 'Level 3: Vedic Chanting Traditions',
    description: 'Oral transmission, chanting rules, and breath patterns',
    icon: '🎵',
    color: 'emerald',
    unlockRequirement: 1000,
    lessons: sansLessonsLevel3,
  },
  {
    id: 'sans-level4',
    title: 'Level 4: Gayatri & Core Mantras',
    description: 'The most powerful mantras — meaning, method, and practice',
    icon: '☀️',
    color: 'orange',
    unlockRequirement: 1500,
    lessons: sansLessonsLevel4,
  },
  {
    id: 'sans-level5',
    title: 'Level 5: Stotras & Devotional Hymns',
    description: 'Major hymns, their meanings, and psychological benefits',
    icon: '🙏',
    color: 'purple',
    unlockRequirement: 2000,
    lessons: sansLessonsLevel5,
  },
  {
    id: 'sans-level6',
    title: 'Level 6: Mantra Science & Vibration',
    description: 'How sound affects the nervous system — nada yoga',
    icon: '〰️',
    color: 'rose',
    unlockRequirement: 2500,
    lessons: sansLessonsLevel6,
  },
  {
    id: 'sans-level7',
    title: 'Level 7: Sanskrit Literature Classics',
    description: 'Kalidasa, Bhartrihari, and timeless life lessons',
    icon: '📚',
    color: 'slate',
    unlockRequirement: 3000,
    lessons: sansLessonsLevel7,
  },
  {
    id: 'sans-level8',
    title: 'Level 8: Kavya — Sanskrit Poetry',
    description: 'Poetic devices, aesthetic theory, and beauty in language',
    icon: '✍️',
    color: 'cyan',
    unlockRequirement: 3500,
    lessons: sansLessonsLevel8,
  },
  {
    id: 'sans-level9',
    title: 'Level 9: Darshana — Six Schools of Philosophy',
    description: 'Six intellectual frameworks that shaped Indian thought',
    icon: '🏛️',
    color: 'teal',
    unlockRequirement: 4000,
    lessons: sansLessonsLevel9,
  },
  {
    id: 'sans-level10',
    title: 'Level 10: Living Sanskrit Today',
    description: 'Using Sanskrit daily and the modern revival movement',
    icon: '🌍',
    color: 'indigo',
    unlockRequirement: 4500,
    lessons: sansLessonsLevel10,
  },
];

export default sanskritMantrasPathway;
