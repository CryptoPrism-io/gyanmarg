import type { PathwayLevel } from '@/types';
import {
  eastLessonsLevel1,
  eastLessonsLevel2,
  eastLessonsLevel3,
  eastLessonsLevel4,
  eastLessonsLevel5,
  eastLessonsLevel6,
  eastLessonsLevel7,
  eastLessonsLevel8,
  eastLessonsLevel9,
  eastLessonsLevel10,
} from './eastern-philosophy-lessons';

/**
 * Eastern Philosophy Pathway
 * 80 lessons across 10 levels covering Taoism, Buddhism, Zen, Confucianism, and more
 */
export const easternPhilosophyPathway: PathwayLevel[] = [
  {
    id: 'east-level1',
    title: 'Level 1: The Eastern Landscape',
    description: 'Overview of Eastern philosophical traditions and how they differ from Western thought',
    icon: '🌏',
    color: 'amber',
    unlockRequirement: 0,
    lessons: eastLessonsLevel1,
  },
  {
    id: 'east-level2',
    title: 'Level 2: Taoism — The Way',
    description: 'Lao Tzu, the Tao Te Ching, wu wei, yin and yang, and the watercourse way',
    icon: '☯️',
    color: 'emerald',
    unlockRequirement: 500,
    lessons: eastLessonsLevel2,
  },
  {
    id: 'east-level3',
    title: 'Level 3: Buddhism — The Middle Way',
    description: 'The Four Noble Truths, Eightfold Path, impermanence, no-self, and the end of suffering',
    icon: '🪷',
    color: 'orange',
    unlockRequirement: 1000,
    lessons: eastLessonsLevel3,
  },
  {
    id: 'east-level4',
    title: 'Level 4: Zen Buddhism',
    description: 'Zazen, koans, satori, beginner\'s mind, and the art of presence',
    icon: '🎋',
    color: 'teal',
    unlockRequirement: 1500,
    lessons: eastLessonsLevel4,
  },
  {
    id: 'east-level5',
    title: 'Level 5: Confucianism — The Way of Virtue',
    description: 'The Analects, ren, li, the superior person, and the five relationships',
    icon: '📖',
    color: 'red',
    unlockRequirement: 2000,
    lessons: eastLessonsLevel5,
  },
  {
    id: 'east-level6',
    title: 'Level 6: Mindfulness & Meditation',
    description: 'Vipassana, breath awareness, loving-kindness, and the science of mindfulness',
    icon: '🧘',
    color: 'purple',
    unlockRequirement: 2500,
    lessons: eastLessonsLevel6,
  },
  {
    id: 'east-level7',
    title: 'Level 7: Yoga & Liberation',
    description: 'Patanjali\'s eight limbs, pranayama, pratyahara, dharana, dhyana, and samadhi',
    icon: '🕉️',
    color: 'violet',
    unlockRequirement: 3000,
    lessons: eastLessonsLevel7,
  },
  {
    id: 'east-level8',
    title: 'Level 8: Japanese Wisdom',
    description: 'Bushido, wabi-sabi, ikigai, mono no aware, kintsugi, and kaizen',
    icon: '🏯',
    color: 'rose',
    unlockRequirement: 3500,
    lessons: eastLessonsLevel8,
  },
  {
    id: 'east-level9',
    title: 'Level 9: East Meets West',
    description: 'Alan Watts, Carl Jung, Fritjof Capra, and the convergence of Eastern and Western wisdom',
    icon: '🌉',
    color: 'blue',
    unlockRequirement: 4000,
    lessons: eastLessonsLevel9,
  },
  {
    id: 'east-level10',
    title: 'Level 10: The Integrated Path',
    description: 'Synthesize Eastern traditions, build a personal practice, and live with mindful awareness',
    icon: '🌟',
    color: 'yellow',
    unlockRequirement: 4500,
    lessons: eastLessonsLevel10,
  },
];

export default easternPhilosophyPathway;
