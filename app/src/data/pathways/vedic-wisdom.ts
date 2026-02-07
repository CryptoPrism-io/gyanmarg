import type { PathwayLevel } from '@/types';
import {
  vedicLessonsLevel1,
  vedicLessonsLevel2,
  vedicLessonsLevel3,
  vedicLessonsLevel4,
  vedicLessonsLevel5,
  vedicLessonsLevel6,
  vedicLessonsLevel7,
  vedicLessonsLevel8,
  vedicLessonsLevel9,
  vedicLessonsLevel10,
} from './vedic-wisdom-lessons';

/**
 * Vedic Wisdom Pathway
 * 80 lessons across 10 levels covering Vedas, Upanishads, Gita, Yoga Sutras, Vedanta, and more
 */
export const vedicWisdomPathway: PathwayLevel[] = [
  {
    id: 'vedic-level1',
    title: 'Level 1: Introduction to Vedic Tradition',
    description: 'The four Vedas, Vedic cosmology, Brahman, rta, and the oral tradition',
    icon: '🕉️',
    color: 'orange',
    unlockRequirement: 0,
    lessons: vedicLessonsLevel1,
  },
  {
    id: 'vedic-level2',
    title: 'Level 2: The Upanishads',
    description: 'Atman, Brahman, Tat Tvam Asi, the five sheaths, and the wisdom of the forest sages',
    icon: '🌳',
    color: 'emerald',
    unlockRequirement: 500,
    lessons: vedicLessonsLevel2,
  },
  {
    id: 'vedic-level3',
    title: 'Level 3: The Bhagavad Gita',
    description: 'Krishna\'s teaching to Arjuna: karma yoga, jnana yoga, bhakti yoga, and detachment',
    icon: '🏹',
    color: 'blue',
    unlockRequirement: 1000,
    lessons: vedicLessonsLevel3,
  },
  {
    id: 'vedic-level4',
    title: 'Level 4: Dharma, Karma & Reincarnation',
    description: 'Cosmic duty, the law of action, samsara, moksha, and living dharma in daily life',
    icon: '☸️',
    color: 'purple',
    unlockRequirement: 1500,
    lessons: vedicLessonsLevel4,
  },
  {
    id: 'vedic-level5',
    title: 'Level 5: Yoga Sutras of Patanjali',
    description: 'The eight limbs of yoga, chitta vritti nirodha, kleshas, and the path to samadhi',
    icon: '🧘',
    color: 'teal',
    unlockRequirement: 2000,
    lessons: vedicLessonsLevel5,
  },
  {
    id: 'vedic-level6',
    title: 'Level 6: Vedanta — The End of Knowledge',
    description: 'Adi Shankara, Advaita, maya, viveka, vairagya, and the mahavakyas',
    icon: '💎',
    color: 'violet',
    unlockRequirement: 2500,
    lessons: vedicLessonsLevel6,
  },
  {
    id: 'vedic-level7',
    title: 'Level 7: The Epics — Ramayana & Mahabharata',
    description: 'Rama, Sita, Hanuman, the Pandavas, dharma lessons, and Vidura Niti',
    icon: '⚔️',
    color: 'red',
    unlockRequirement: 3000,
    lessons: vedicLessonsLevel7,
  },
  {
    id: 'vedic-level8',
    title: 'Level 8: Vedic Science & Ayurveda',
    description: 'The three doshas, dinacharya, Vedic mathematics, and Jyotisha astronomy',
    icon: '🌿',
    color: 'amber',
    unlockRequirement: 3500,
    lessons: vedicLessonsLevel8,
  },
  {
    id: 'vedic-level9',
    title: 'Level 9: Modern Vedic Thinkers',
    description: 'Vivekananda, Aurobindo, Ramana Maharshi, Yogananda, Krishnamurti, and Nisargadatta',
    icon: '🙏',
    color: 'rose',
    unlockRequirement: 4000,
    lessons: vedicLessonsLevel9,
  },
  {
    id: 'vedic-level10',
    title: 'Level 10: Living Vedic Wisdom',
    description: 'Create a personal sadhana, integrate Vedic wisdom in modern life, your spiritual path',
    icon: '🌟',
    color: 'yellow',
    unlockRequirement: 4500,
    lessons: vedicLessonsLevel10,
  },
];

export default vedicWisdomPathway;
