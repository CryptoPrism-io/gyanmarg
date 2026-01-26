import type { PathwayLevel } from '@/types';

// Import all Dark Psychology lesson modules
import { darkPersonalityLessons } from './dark-psych-personalities';
import { manipulationLessons } from './dark-psych-manipulation';
import { persuasionLessons } from './dark-psych-persuasion';
import { cognitiveBiasLessons } from './dark-psych-biases';
import { bodyLanguageLessons } from './dark-psych-bodylang';
import { deceptionLessons } from './dark-psych-deception';
import { socialEngineeringLessons } from './dark-psych-social';
import { emotionalManipLessons } from './dark-psych-emotional';
import { powerDynamicsLessons } from './dark-psych-power';
import { ethicsDefenseLessons } from './dark-psych-ethics';

/**
 * Dark Psychology Pathway
 * 145 lessons across 10 levels covering manipulation defense, influence science, and psychological protection
 */
export const psychologyPathway: PathwayLevel[] = [
  {
    id: 'dp-level1',
    title: 'Level 1: Dark Personality Types',
    description: 'Understand the Dark Triad/Tetrad and how to identify dangerous personalities',
    icon: '🎭',
    color: 'rose',
    unlockRequirement: 0,
    lessons: [
      {
        id: 'dp-intro',
        title: 'Welcome to Dark Psychology',
        type: 'intro',
        duration: 5,
        xpReward: 50,
        content: {
          overview: 'Welcome to the Dark Psychology pathway - your guide to understanding manipulation and protecting yourself.',
          mainContent: `**Why Study Dark Psychology?**

Knowledge is the ultimate defense. This pathway will teach you to recognize, understand, and protect yourself from psychological manipulation.

**What You'll Master:**
- **Dark Personalities** - Narcissism, Machiavellianism, Psychopathy, Sadism
- **Manipulation Tactics** - How manipulators gain control
- **Persuasion Science** - Cialdini's principles of influence
- **Cognitive Biases** - Mental shortcuts that make you vulnerable
- **Body Language** - Reading nonverbal communication
- **Deception Detection** - Spotting lies and deceit
- **Social Engineering** - How hackers exploit psychology
- **Emotional Manipulation** - Guilt, fear, and obligation tactics
- **Power Dynamics** - Understanding social hierarchies
- **Ethical Defense** - Building psychological immunity

**10 Levels, 145+ Lessons**
Each level builds your psychological armor, transforming you from potential victim to informed protector.

**The Ethical Framework:**
This knowledge is for DEFENSE only. Understanding manipulation tactics helps you:
- Recognize when you're being manipulated
- Protect yourself and loved ones
- Help others escape toxic situations
- Make truly autonomous decisions

Never use these tactics to harm others.`,
          keyTakeaway: 'Understanding dark psychology protects you from those who would exploit psychological vulnerabilities.',
          actionItem: 'Commit to completing this pathway with the intention of using this knowledge only for protection and defense.',
        },
      },
      ...darkPersonalityLessons,
    ],
  },
  {
    id: 'dp-level2',
    title: 'Level 2: Manipulation Tactics',
    description: 'Learn to identify and defend against common manipulation techniques',
    icon: '🎯',
    color: 'red',
    unlockRequirement: 500,
    lessons: manipulationLessons,
  },
  {
    id: 'dp-level3',
    title: 'Level 3: Persuasion Science',
    description: 'Master Cialdini\'s principles of influence and ethical persuasion',
    icon: '🧲',
    color: 'orange',
    unlockRequirement: 1000,
    lessons: persuasionLessons,
  },
  {
    id: 'dp-level4',
    title: 'Level 4: Cognitive Biases',
    description: 'Understand mental shortcuts that make you vulnerable to manipulation',
    icon: '🧠',
    color: 'yellow',
    unlockRequirement: 1500,
    lessons: cognitiveBiasLessons,
  },
  {
    id: 'dp-level5',
    title: 'Level 5: Body Language & Micro-expressions',
    description: 'Read nonverbal communication and detect hidden emotions',
    icon: '👁️',
    color: 'lime',
    unlockRequirement: 2000,
    lessons: bodyLanguageLessons,
  },
  {
    id: 'dp-level6',
    title: 'Level 6: Deception Detection',
    description: 'Learn to spot lies, inconsistencies, and deceptive behavior',
    icon: '🔍',
    color: 'emerald',
    unlockRequirement: 2500,
    lessons: deceptionLessons,
  },
  {
    id: 'dp-level7',
    title: 'Level 7: Social Engineering',
    description: 'Understand how attackers exploit human psychology for access',
    icon: '🔐',
    color: 'teal',
    unlockRequirement: 3000,
    lessons: socialEngineeringLessons,
  },
  {
    id: 'dp-level8',
    title: 'Level 8: Emotional Manipulation',
    description: 'Recognize guilt, fear, and obligation tactics used to control',
    icon: '💔',
    color: 'cyan',
    unlockRequirement: 3500,
    lessons: emotionalManipLessons,
  },
  {
    id: 'dp-level9',
    title: 'Level 9: Power Dynamics',
    description: 'Navigate social hierarchies and protect yourself from power plays',
    icon: '👑',
    color: 'blue',
    unlockRequirement: 4000,
    lessons: powerDynamicsLessons,
  },
  {
    id: 'dp-level10',
    title: 'Level 10: Ethics & Self-Defense',
    description: 'Build psychological immunity and use knowledge responsibly',
    icon: '🛡️',
    color: 'purple',
    unlockRequirement: 4500,
    lessons: ethicsDefenseLessons,
  },
];

export default psychologyPathway;
