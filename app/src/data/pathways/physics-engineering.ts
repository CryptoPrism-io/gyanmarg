import type { PathwayLevel } from '@/types';
import {
  physLessonsLevel1,
  physLessonsLevel2,
  physLessonsLevel3,
  physLessonsLevel4,
  physLessonsLevel5,
  physLessonsLevel6,
  physLessonsLevel7,
  physLessonsLevel8,
} from './physics-engineering-lessons';

/**
 * Physics & Engineering Pathway
 * 64 lessons across 8 levels covering fundamental laws and engineering principles
 */
export const physicsEngineeringPathway: PathwayLevel[] = [
  {
    id: 'phys-level1',
    title: 'Level 1: Classical Mechanics',
    description: "Master Newton's laws, forces, energy, and conservation principles",
    icon: '⚙️',
    color: 'blue',
    unlockRequirement: 0,
    lessons: physLessonsLevel1,
  },
  {
    id: 'phys-level2',
    title: 'Level 2: Thermodynamics',
    description: 'Understand heat, entropy, energy transfer, and the laws of thermodynamics',
    icon: '🔥',
    color: 'red',
    unlockRequirement: 500,
    lessons: physLessonsLevel2,
  },
  {
    id: 'phys-level3',
    title: 'Level 3: Waves & Oscillations',
    description: 'Explore wave mechanics, sound, resonance, and oscillatory motion',
    icon: '〰️',
    color: 'cyan',
    unlockRequirement: 1000,
    lessons: physLessonsLevel3,
  },
  {
    id: 'phys-level4',
    title: 'Level 4: Electromagnetism',
    description: "Master electric fields, circuits, magnetism, and Maxwell's equations",
    icon: '⚡',
    color: 'yellow',
    unlockRequirement: 1500,
    lessons: physLessonsLevel4,
  },
  {
    id: 'phys-level5',
    title: 'Level 5: Modern Physics',
    description: 'Discover relativity, quantum mechanics, and wave-particle duality',
    icon: '⚛️',
    color: 'purple',
    unlockRequirement: 2000,
    lessons: physLessonsLevel5,
  },
  {
    id: 'phys-level6',
    title: 'Level 6: Engineering Fundamentals',
    description: 'Learn statics, dynamics, materials science, and structural engineering',
    icon: '🏗️',
    color: 'orange',
    unlockRequirement: 2500,
    lessons: physLessonsLevel6,
  },
  {
    id: 'phys-level7',
    title: 'Level 7: Applied Engineering',
    description: 'Apply fluid mechanics, heat transfer, and control systems knowledge',
    icon: '🔧',
    color: 'emerald',
    unlockRequirement: 3000,
    lessons: physLessonsLevel7,
  },
  {
    id: 'phys-level8',
    title: 'Level 8: Cutting Edge Physics',
    description: 'Explore general relativity, quantum field theory, and cosmology',
    icon: '🌌',
    color: 'violet',
    unlockRequirement: 3500,
    lessons: physLessonsLevel8,
  },
];

export default physicsEngineeringPathway;
