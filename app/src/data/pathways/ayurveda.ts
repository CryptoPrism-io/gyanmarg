import type { PathwayLevel } from '@/types';
import {
  ayurLessonsLevel1,
  ayurLessonsLevel2,
  ayurLessonsLevel3,
  ayurLessonsLevel4,
  ayurLessonsLevel5,
  ayurLessonsLevel6,
  ayurLessonsLevel7,
  ayurLessonsLevel8,
  ayurLessonsLevel9,
  ayurLessonsLevel10,
} from './ayurveda-lessons';

/**
 * Ayurveda Pathway
 * 80 lessons across 10 levels covering personalized wellness and ancient medicine
 */
export const ayurvedaPathway: PathwayLevel[] = [
  {
    id: 'ayur-level1',
    title: 'Level 1: Foundations of Ayurveda',
    description: 'The science of personalized wellness and why it matters now',
    icon: '🌱',
    color: 'emerald',
    unlockRequirement: 0,
    lessons: ayurLessonsLevel1,
  },
  {
    id: 'ayur-level2',
    title: 'Level 2: Tridosha Theory',
    description: 'Understanding Vata, Pitta, and Kapha constitutions',
    icon: '🔺',
    color: 'orange',
    unlockRequirement: 500,
    lessons: ayurLessonsLevel2,
  },
  {
    id: 'ayur-level3',
    title: 'Level 3: Prakriti — Your Constitution',
    description: 'Discover your unique body-mind type and personalize everything',
    icon: '🧬',
    color: 'blue',
    unlockRequirement: 1000,
    lessons: ayurLessonsLevel3,
  },
  {
    id: 'ayur-level4',
    title: 'Level 4: Dinacharya — Daily Routine',
    description: 'Design your perfect morning routine based on your body type',
    icon: '🌅',
    color: 'amber',
    unlockRequirement: 1500,
    lessons: ayurLessonsLevel4,
  },
  {
    id: 'ayur-level5',
    title: 'Level 5: Ahara — Food & Nutrition',
    description: 'Six tastes, food combining, and eating for your constitution',
    icon: '🍽️',
    color: 'yellow',
    unlockRequirement: 2000,
    lessons: ayurLessonsLevel5,
  },
  {
    id: 'ayur-level6',
    title: 'Level 6: Dravyaguna — Herbal Medicine',
    description: 'Key herbs, their uses, and safe supplementation',
    icon: '🌿',
    color: 'green',
    unlockRequirement: 2500,
    lessons: ayurLessonsLevel6,
  },
  {
    id: 'ayur-level7',
    title: 'Level 7: Panchakarma — Purification',
    description: 'Detox protocols and seasonal cleansing',
    icon: '💧',
    color: 'cyan',
    unlockRequirement: 3000,
    lessons: ayurLessonsLevel7,
  },
  {
    id: 'ayur-level8',
    title: 'Level 8: Rasa Shastra & Rejuvenation',
    description: 'Rasayanas, mineral therapies, and longevity practices',
    icon: '⚗️',
    color: 'purple',
    unlockRequirement: 3500,
    lessons: ayurLessonsLevel8,
  },
  {
    id: 'ayur-level9',
    title: 'Level 9: Ayurvedic Psychology',
    description: 'Sattva, Rajas, Tamas and mental wellness frameworks',
    icon: '🧠',
    color: 'rose',
    unlockRequirement: 4000,
    lessons: ayurLessonsLevel9,
  },
  {
    id: 'ayur-level10',
    title: 'Level 10: Modern Integrative Ayurveda',
    description: 'Combining ancient wisdom with modern evidence-based medicine',
    icon: '🔬',
    color: 'indigo',
    unlockRequirement: 4500,
    lessons: ayurLessonsLevel10,
  },
];

export default ayurvedaPathway;
