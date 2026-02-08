import type { PathwayLevel } from '@/types';
import {
  qmLessonsLevel1,
  qmLessonsLevel2,
  qmLessonsLevel3,
  qmLessonsLevel4,
  qmLessonsLevel5,
  qmLessonsLevel6,
  qmLessonsLevel7,
  qmLessonsLevel8,
  qmLessonsLevel9,
  qmLessonsLevel10,
} from './quantum-mechanics-lessons';

/**
 * Quantum Mechanics Pathway
 * 80 lessons across 10 levels exploring the strange and beautiful world of quantum physics
 */
export const quantumMechanicsPathway: PathwayLevel[] = [
  {
    id: 'qm-level1',
    title: 'Level 1: The Quantum World',
    description: 'Discover why the quantum world is nothing like everyday experience',
    icon: '⚛️',
    color: 'blue',
    unlockRequirement: 0,
    lessons: qmLessonsLevel1,
  },
  {
    id: 'qm-level2',
    title: 'Level 2: Wave-Particle Duality',
    description: 'Explore the mind-bending reality that light and matter are both waves and particles',
    icon: '🌊',
    color: 'cyan',
    unlockRequirement: 500,
    lessons: qmLessonsLevel2,
  },
  {
    id: 'qm-level3',
    title: 'Level 3: Superposition & Probability',
    description: 'Understand how quantum objects exist in multiple states simultaneously',
    icon: '🎲',
    color: 'purple',
    unlockRequirement: 1000,
    lessons: qmLessonsLevel3,
  },
  {
    id: 'qm-level4',
    title: 'Level 4: Quantum Entanglement',
    description: 'Explore the spooky connection between entangled particles across any distance',
    icon: '🔗',
    color: 'violet',
    unlockRequirement: 1500,
    lessons: qmLessonsLevel4,
  },
  {
    id: 'qm-level5',
    title: 'Level 5: The Uncertainty Principle',
    description: 'Learn why nature itself sets fundamental limits on what we can know',
    icon: '🎯',
    color: 'amber',
    unlockRequirement: 2000,
    lessons: qmLessonsLevel5,
  },
  {
    id: 'qm-level6',
    title: 'Level 6: Quantum Tunneling & Energy',
    description: 'Discover how particles pass through barriers and power the sun',
    icon: '🚀',
    color: 'emerald',
    unlockRequirement: 2500,
    lessons: qmLessonsLevel6,
  },
  {
    id: 'qm-level7',
    title: 'Level 7: Quantum Computing',
    description: 'Understand qubits, quantum gates, and the coming computing revolution',
    icon: '💻',
    color: 'indigo',
    unlockRequirement: 3000,
    lessons: qmLessonsLevel7,
  },
  {
    id: 'qm-level8',
    title: 'Level 8: Quantum Field Theory',
    description: 'Explore the deeper reality where fields, not particles, are fundamental',
    icon: '🌌',
    color: 'rose',
    unlockRequirement: 3500,
    lessons: qmLessonsLevel8,
  },
  {
    id: 'qm-level9',
    title: 'Level 9: Interpretations & Philosophy',
    description: 'Wrestle with the biggest question in physics: what does it all mean?',
    icon: '🤔',
    color: 'slate',
    unlockRequirement: 4000,
    lessons: qmLessonsLevel9,
  },
  {
    id: 'qm-level10',
    title: 'Level 10: Quantum Thinking in Daily Life',
    description: 'Apply quantum principles as mental models for better thinking and decision-making',
    icon: '🧠',
    color: 'yellow',
    unlockRequirement: 4500,
    lessons: qmLessonsLevel10,
  },
];

export default quantumMechanicsPathway;
