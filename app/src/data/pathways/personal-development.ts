import type { PathwayLevel } from '@/types';

// Import all Mind Mastery lesson modules
import { atomicHabitsLessons } from './mind-mastery-habits';
import { deepWorkLessons } from './mind-mastery-deepwork';
import { futureSelfLessons } from './mind-mastery-futureself';
import { meaningLessons } from './mind-mastery-meaning';
import { valuesLessons } from './mind-mastery-values';
import { mindsetLessons } from './mind-mastery-mindset';
import { productivityLessons } from './mind-mastery-productivity';
import { emotionalIntelligenceLessons } from './mind-mastery-eq';
import { learningScienceLessons } from './mind-mastery-learning';

/**
 * Personal Development Pathway - Mind Mastery Module
 * 150+ lessons across 10 levels covering habits, focus, mindset, and more
 */
export const personalDevelopmentPathway: PathwayLevel[] = [
  {
    id: 'pd-level1',
    title: 'Level 1: The Foundation',
    description: 'Master the science of atomic habits and compound growth',
    icon: '🌱',
    color: 'emerald',
    unlockRequirement: 0,
    lessons: [
      {
        id: 'pd-intro',
        title: 'Welcome to Mind Mastery',
        type: 'intro',
        duration: 5,
        xpReward: 50,
        content: {
          overview: 'Welcome to Gyanmarg - your path to personal mastery through 150+ lessons.',
          mainContent: `**Your Mind Mastery Journey Begins**

You're about to embark on a comprehensive journey through the most powerful concepts in personal development:

**What You'll Master:**
- **Atomic Habits** - Tiny changes that compound into remarkable results
- **Deep Work** - Focus without distraction on what matters most
- **Future Self** - Bridge the gap between who you are and who you want to become
- **Purpose & Meaning** - Discover why you do what you do
- **Values & Priorities** - Learn what truly matters
- **Mental Models** - Think more clearly and make better decisions
- **Productivity Systems** - Get more done with less stress
- **Emotional Intelligence** - Master your emotions and relationships
- **Learning Science** - Learn how to learn effectively

**10 Levels, 150+ Lessons**
Each level builds on the previous, taking you from foundations to mastery.

**Why This Matters:**
Knowledge without action is just entertainment. This pathway ensures you transform insights into lasting change through structured lessons, quizzes, and daily action items.`,
          keyTakeaway: 'Small daily improvements lead to staggering long-term results.',
          actionItem: 'Commit to completing at least one lesson per day for the next 30 days.',
        },
      },
      ...atomicHabitsLessons.slice(0, 14),
    ],
  },
  {
    id: 'pd-level2',
    title: 'Level 2: Deep Work Mastery',
    description: 'Learn to focus without distraction on cognitively demanding tasks',
    icon: '🎯',
    color: 'blue',
    unlockRequirement: 500,
    lessons: deepWorkLessons,
  },
  {
    id: 'pd-level3',
    title: 'Level 3: Your Future Self',
    description: 'Bridge the gap between who you are and who you want to become',
    icon: '🚀',
    color: 'purple',
    unlockRequirement: 1000,
    lessons: futureSelfLessons,
  },
  {
    id: 'pd-level4',
    title: 'Level 4: Purpose & Meaning',
    description: 'Discover meaning even in the most difficult circumstances',
    icon: '💫',
    color: 'amber',
    unlockRequirement: 1500,
    lessons: meaningLessons,
  },
  {
    id: 'pd-level5',
    title: 'Level 5: Values & The Subtle Art',
    description: 'Learn to prioritize what truly matters and let go of what doesn\'t',
    icon: '⚖️',
    color: 'rose',
    unlockRequirement: 2000,
    lessons: valuesLessons,
  },
  {
    id: 'pd-level6',
    title: 'Level 6: Mental Models & Mindset',
    description: 'Think more clearly with powerful mental frameworks',
    icon: '🧠',
    color: 'indigo',
    unlockRequirement: 2500,
    lessons: mindsetLessons,
  },
  {
    id: 'pd-level7',
    title: 'Level 7: Productivity Systems',
    description: 'Build systems that make success inevitable',
    icon: '⚡',
    color: 'cyan',
    unlockRequirement: 3000,
    lessons: productivityLessons,
  },
  {
    id: 'pd-level8',
    title: 'Level 8: Emotional Intelligence',
    description: 'Master your emotions and transform your relationships',
    icon: '❤️',
    color: 'pink',
    unlockRequirement: 3500,
    lessons: emotionalIntelligenceLessons,
  },
  {
    id: 'pd-level9',
    title: 'Level 9: Learning Science',
    description: 'Learn how to learn - master the meta-skill',
    icon: '📚',
    color: 'teal',
    unlockRequirement: 4000,
    lessons: learningScienceLessons,
  },
  {
    id: 'pd-level10',
    title: 'Level 10: Integration & Mastery',
    description: 'Bring it all together and cement your transformation',
    icon: '🏆',
    color: 'gold',
    unlockRequirement: 4500,
    lessons: [
      {
        id: 'pd-mastery-1',
        title: 'The Integration Principle',
        type: 'concept',
        duration: 15,
        xpReward: 150,
        content: {
          overview: 'Learn how all the concepts connect to create lasting transformation.',
          mainContent: `**Bringing It All Together**

You've learned about habits, focus, mindset, emotions, and more. Now it's time to integrate everything into a cohesive system for life mastery.

**The Master Framework:**

1. **Foundation (Habits)** - Your daily habits form the foundation of everything
2. **Focus (Deep Work)** - Protect time for what matters most
3. **Direction (Future Self)** - Know where you're going
4. **Purpose (Meaning)** - Know why you're going there
5. **Priorities (Values)** - Know what to say no to
6. **Thinking (Mental Models)** - Make better decisions
7. **Systems (Productivity)** - Remove friction from success
8. **Relationships (EQ)** - Succeed with others
9. **Growth (Learning)** - Never stop improving

**The Daily Practice:**
- Morning: Review your future self vision (2 min)
- Work: Deep work block with time blocking (2-4 hours)
- Throughout: Apply mental models to decisions
- Evening: Habit tracking and reflection (5 min)

**The Weekly Review:**
- What worked?
- What didn't?
- What will I do differently?

You now have all the tools. The only question is: Will you use them?`,
          keyTakeaway: 'Mastery comes from integration - connecting all the pieces into a system that works for you.',
          actionItem: 'Create your personal "Master System" document combining your top insights from each level.',
        },
      },
      {
        id: 'pd-mastery-2',
        title: 'Your 30-Day Mastery Challenge',
        type: 'challenge',
        duration: 10,
        xpReward: 200,
        content: {
          overview: 'The ultimate challenge to cement your transformation.',
          mainContent: `**The 30-Day Mind Mastery Challenge**

You've completed the curriculum. Now prove you've internalized it.

**The Challenge:**

**Week 1: Habits**
- Implement one keystone habit
- Track it daily without fail
- Use the habit stacking technique

**Week 2: Focus**
- Complete 4+ hours of deep work daily
- Use time blocking for your calendar
- Implement a shutdown ritual

**Week 3: Mindset**
- Journal using mental models
- Practice growth mindset daily
- Use inversion for one major decision

**Week 4: Integration**
- Combine all systems
- Teach one concept to someone else
- Write your personal philosophy

**Success Metrics:**
- 28/30 days of habit completion
- 80+ hours of deep work logged
- 5 mental models applied to real decisions
- 1 concept taught to another person

Complete this challenge and you'll have transformed from learner to practitioner.`,
          keyTakeaway: 'Knowledge becomes wisdom only through application.',
          actionItem: 'Start the 30-Day Mastery Challenge today. Mark your calendar.',
        },
      },
    ],
  },
];

export default personalDevelopmentPathway;
