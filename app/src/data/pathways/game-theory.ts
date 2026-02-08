import type { PathwayLevel } from '@/types';
import {
  gtLessonsLevel1,
  gtLessonsLevel2,
  gtLessonsLevel3,
  gtLessonsLevel4,
  gtLessonsLevel5,
  gtLessonsLevel6,
  gtLessonsLevel7,
  gtLessonsLevel8,
  gtLessonsLevel9,
  gtLessonsLevel10,
} from './game-theory-lessons';

/**
 * Game Theory Pathway
 * 80 lessons across 10 levels covering strategic thinking, Nash equilibrium, and real-world strategy
 */
export const gameTheoryPathway: PathwayLevel[] = [
  {
    id: 'gt-level1',
    title: 'Level 1: Strategic Thinking Foundations',
    description: 'Learn the language of strategic interaction: players, strategies, and payoffs',
    icon: '♟️',
    color: 'slate',
    unlockRequirement: 0,
    lessons: gtLessonsLevel1,
  },
  {
    id: 'gt-level2',
    title: "Level 2: Prisoner's Dilemma & Cooperation",
    description: 'Explore the most famous game in history and why cooperation is so hard',
    icon: '🤝',
    color: 'blue',
    unlockRequirement: 500,
    lessons: gtLessonsLevel2,
  },
  {
    id: 'gt-level3',
    title: 'Level 3: Nash Equilibrium & Dominant Strategies',
    description: 'Find the stable outcomes where no player wants to change their strategy',
    icon: '⚖️',
    color: 'emerald',
    unlockRequirement: 1000,
    lessons: gtLessonsLevel3,
  },
  {
    id: 'gt-level4',
    title: 'Level 4: Sequential Games & Decision Trees',
    description: 'Master backward induction, first-mover advantage, and credible threats',
    icon: '🌳',
    color: 'amber',
    unlockRequirement: 1500,
    lessons: gtLessonsLevel4,
  },
  {
    id: 'gt-level5',
    title: 'Level 5: Mixed Strategies & Randomization',
    description: 'Learn when unpredictability is your best strategy',
    icon: '🎲',
    color: 'purple',
    unlockRequirement: 2000,
    lessons: gtLessonsLevel5,
  },
  {
    id: 'gt-level6',
    title: 'Level 6: Repeated Games & Reputation',
    description: 'Understand how the shadow of the future changes everything',
    icon: '🔄',
    color: 'cyan',
    unlockRequirement: 2500,
    lessons: gtLessonsLevel6,
  },
  {
    id: 'gt-level7',
    title: 'Level 7: Bargaining & Negotiation Theory',
    description: 'Apply game theory to splitting the pie, salary talks, and deal-making',
    icon: '💰',
    color: 'orange',
    unlockRequirement: 3000,
    lessons: gtLessonsLevel7,
  },
  {
    id: 'gt-level8',
    title: 'Level 8: Mechanism Design & Auctions',
    description: 'Design rules and incentives that produce the outcomes you want',
    icon: '🏗️',
    color: 'red',
    unlockRequirement: 3500,
    lessons: gtLessonsLevel8,
  },
  {
    id: 'gt-level9',
    title: 'Level 9: Information Asymmetry & Signaling',
    description: 'Navigate a world where everyone knows different things',
    icon: '🔍',
    color: 'rose',
    unlockRequirement: 4000,
    lessons: gtLessonsLevel9,
  },
  {
    id: 'gt-level10',
    title: 'Level 10: Evolutionary Game Theory & Real-World Strategy',
    description: 'Apply game theory to business, biology, and your personal strategy',
    icon: '🧬',
    color: 'yellow',
    unlockRequirement: 4500,
    lessons: gtLessonsLevel10,
  },
];

export default gameTheoryPathway;
