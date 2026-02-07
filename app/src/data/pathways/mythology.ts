import type { PathwayLevel } from '@/types';
import {
  mythLessonsLevel1,
  mythLessonsLevel2,
  mythLessonsLevel3,
  mythLessonsLevel4,
  mythLessonsLevel5,
  mythLessonsLevel6,
  mythLessonsLevel7,
  mythLessonsLevel8,
  mythLessonsLevel9,
  mythLessonsLevel10,
} from './mythology-lessons';

/**
 * Mythology Pathway
 * 80 lessons across 10 levels covering world myths, archetypes, and the hero's journey
 */
export const mythologyPathway: PathwayLevel[] = [
  {
    id: 'myth-level1',
    title: 'Level 1: What is Mythology?',
    description: 'Joseph Campbell, the monomyth, archetypes, and why myths matter',
    icon: '📚',
    color: 'violet',
    unlockRequirement: 0,
    lessons: mythLessonsLevel1,
  },
  {
    id: 'myth-level2',
    title: 'Level 2: The Hero\'s Journey',
    description: 'The 17 stages of the monomyth from the call to adventure to the return with the elixir',
    icon: '🗡️',
    color: 'blue',
    unlockRequirement: 500,
    lessons: mythLessonsLevel2,
  },
  {
    id: 'myth-level3',
    title: 'Level 3: Greek Mythology',
    description: 'The Olympian pantheon, the Trojan War, Odysseus, and the great Greek tragedies',
    icon: '⚡',
    color: 'amber',
    unlockRequirement: 1000,
    lessons: mythLessonsLevel3,
  },
  {
    id: 'myth-level4',
    title: 'Level 4: Norse Mythology',
    description: 'Odin, Thor, Loki, the nine worlds, Yggdrasil, Valhalla, and Ragnarok',
    icon: '🔨',
    color: 'cyan',
    unlockRequirement: 1500,
    lessons: mythLessonsLevel4,
  },
  {
    id: 'myth-level5',
    title: 'Level 5: Hindu Mythology',
    description: 'The Trimurti, avatars of Vishnu, Devi traditions, Ganesha, and the cosmic dance',
    icon: '🪷',
    color: 'orange',
    unlockRequirement: 2000,
    lessons: mythLessonsLevel5,
  },
  {
    id: 'myth-level6',
    title: 'Level 6: Egyptian & Mesopotamian Myths',
    description: 'Osiris and Isis, the Book of the Dead, the Epic of Gilgamesh, and Sumerian creation',
    icon: '🏺',
    color: 'emerald',
    unlockRequirement: 2500,
    lessons: mythLessonsLevel6,
  },
  {
    id: 'myth-level7',
    title: 'Level 7: Celtic, African & Indigenous Myths',
    description: 'The Tuatha De Danann, Anansi, Coyote, Aboriginal Dreamtime, and oral traditions',
    icon: '🌍',
    color: 'teal',
    unlockRequirement: 3000,
    lessons: mythLessonsLevel7,
  },
  {
    id: 'myth-level8',
    title: 'Level 8: Archetypes & Symbols',
    description: 'Jung\'s 12 archetypes, shadow, anima/animus, universal symbols, and self-understanding',
    icon: '🔮',
    color: 'purple',
    unlockRequirement: 3500,
    lessons: mythLessonsLevel8,
  },
  {
    id: 'myth-level9',
    title: 'Level 9: Mythology in Modern Culture',
    description: 'Star Wars, Tolkien, Marvel, video games, music, and myth-making in the digital age',
    icon: '🎬',
    color: 'red',
    unlockRequirement: 4000,
    lessons: mythLessonsLevel9,
  },
  {
    id: 'myth-level10',
    title: 'Level 10: Your Personal Mythology',
    description: 'Find your personal myth, write your hero\'s journey, and create your mythic manifesto',
    icon: '🌟',
    color: 'yellow',
    unlockRequirement: 4500,
    lessons: mythLessonsLevel10,
  },
];

export default mythologyPathway;
