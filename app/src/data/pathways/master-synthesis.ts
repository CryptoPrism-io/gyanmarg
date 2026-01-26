import type { PathwayLevel } from '@/types';
import { masterSynthesisLessons } from './master-synthesis-expanded';

/**
 * Master Synthesis Pathway
 * 36 lessons connecting concepts across all modules through mental models, systems thinking, and decision making
 */
export const masterSynthesisPathway: PathwayLevel[] = [
  {
    id: 'synthesis-level1',
    title: 'Level 1: Connecting the Dots',
    description: 'Synthesize knowledge across all domains',
    icon: '🌐',
    color: 'violet',
    unlockRequirement: 0,
    lessons: [
      {
        id: 'synthesis-intro',
        title: 'The Art of Synthesis',
        type: 'intro',
        duration: 10,
        xpReward: 50,
        content: {
          overview: 'True wisdom comes from connecting knowledge across domains.',
          mainContent: `**Master Synthesis: Beyond Expertise**

The most powerful insights come from connecting ideas across fields.

**The T-Shaped Mind:**
- **Vertical bar:** Deep expertise in one area
- **Horizontal bar:** Broad knowledge across many fields
- **Power:** Finding connections others miss

**Cross-Domain Patterns:**

**From Wealth Building + Psychology:**
- Loss aversion explains why investors hold losing stocks
- Compound interest applies to skills and relationships too
- The "automatic millionaire" uses System 1 to bypass System 2's laziness

**From Bruce Lee + Negotiation:**
- "Be water" - adapt your negotiation style to each opponent
- "Using no way as way" - don't be locked into one technique
- Tactical empathy IS "emptying your cup" - receiving before responding

**From AI + Blockchain:**
- Decentralized AI could prevent single-point AI control
- Smart contracts could automate AI governance
- Both face the "trust but verify" problem

**From Psychology + Life Design:**
- System 2 tires quickly - automate good decisions
- Confirmation bias affects career choices
- Prototyping bypasses cognitive biases

**The Synthesis Framework:**

1. **Learn deeply** in one domain
2. **Learn broadly** across many
3. **Look for patterns** that repeat
4. **Create connections** between fields
5. **Test combinations** in real life

**Charlie Munger's Mental Models:**
Warren Buffett's partner advocates knowing the "big ideas" from every major discipline:
- Psychology: biases, incentives
- Mathematics: compound interest, probability
- Biology: evolution, ecosystems
- Physics: critical mass, inertia
- Economics: supply/demand, opportunity cost`,
          keyTakeaway: 'Breakthrough insights come from connecting ideas across domains. Build a latticework of mental models.',
          actionItem: 'Identify one concept from this course that applies to a completely different area of your life.',
        },
      },
      {
        id: 'synthesis-mental-models',
        title: 'Essential Mental Models',
        type: 'concept',
        duration: 15,
        xpReward: 125,
        content: {
          overview: 'The most powerful thinking tools that apply everywhere.',
          mainContent: `**Universal Mental Models**

**From Physics:**

**Inertia**
Objects in motion stay in motion. Starting is hard; momentum makes continuation easy.
- Apply to habits: hardest part is starting
- Apply to projects: early effort yields later ease

**Leverage**
Small inputs create large outputs with the right fulcrum.
- Apply to business: technology as leverage
- Apply to learning: master fundamentals first

**From Biology:**

**Evolution**
What survives isn't strongest, but most adaptable.
- Apply to careers: adapt or become obsolete
- Apply to ideas: test and iterate

**Ecosystem Thinking**
Everything connects. Changes ripple.
- Apply to decisions: consider second-order effects
- Apply to business: understand your ecosystem

**From Economics:**

**Opportunity Cost**
Every choice costs you the next best alternative.
- Apply to time: what are you NOT doing?
- Apply to money: investment A vs B

**Incentives**
People respond to incentives, not intentions.
- Apply to management: design systems, not lectures
- Apply to self: engineer your environment

**From Psychology:**

**Inversion**
Instead of asking "How do I succeed?" ask "How would I guarantee failure?"
- Then avoid those things
- Often more actionable than positive goals

**Circle of Competence**
Know what you know and what you don't.
- Stay inside for important decisions
- Expand it deliberately over time

**From Mathematics:**

**Pareto Principle (80/20)**
80% of results come from 20% of efforts.
- Find your 20%
- Ruthlessly prioritize

**Compound Growth**
Small consistent gains create exponential results.
- 1% better daily = 37x better yearly
- Applies to money, skills, relationships`,
          keyTakeaway: 'Mental models are thinking tools. The more you have, the better you can understand reality.',
          quiz: {
            question: 'What mental model suggests you should ask "How would I guarantee failure?" before planning?',
            options: [
              'Inertia',
              'Inversion',
              'Leverage',
              'Opportunity Cost',
            ],
            correct: 1,
            explanation: 'Inversion flips the problem - avoiding guaranteed failure paths often reveals the path to success.',
          },
        },
      },
      {
        id: 'synthesis-integration',
        title: 'Your Integrated Life System',
        type: 'reflection',
        duration: 12,
        xpReward: 100,
        content: {
          overview: 'Build a personal operating system from all you\'ve learned.',
          mainContent: `**Your Personal Operating System**

Integrate everything into a system that works for YOU.

**Morning Protocol (Drawing from multiple modules):**
1. **Wake early** (Deep Work: protect focused time)
2. **Review goals** (Wealth: automate the important)
3. **Identify MIT** (80/20: what's the ONE thing?)
4. **Time block** (Deep Work: schedule focus)
5. **Positive priming** (Psychology: prime System 1)

**Decision Framework:**
1. **Define the problem clearly** (Life Design: reframe)
2. **Check biases** (Psychology: what am I missing?)
3. **Consider opportunity cost** (Economics)
4. **Apply relevant mental models** (Synthesis)
5. **Prototype if possible** (Life Design)
6. **Use calibrated questions** (Negotiation: ask "How?")

**Relationship Protocol:**
1. **Tactical empathy first** (Negotiation: understand before acting)
2. **Empty your cup** (Bruce Lee: receive before responding)
3. **Be water** (Bruce Lee: adapt to each person)
4. **Label emotions** (Negotiation: "It seems like...")

**Learning Protocol:**
1. **Spaced repetition** for retention
2. **Teach what you learn** (Feynman technique)
3. **Apply immediately** (sticky learning)
4. **Connect to existing knowledge** (synthesis)
5. **Review and consolidate** (compound learning)

**Financial Protocol:**
1. **Automate savings** (Automatic Millionaire)
2. **Know your FIRE number** (Life Design)
3. **Margin of safety** (Intelligent Investor)
4. **Mr. Market is emotional** (don't react)

**The Weekly Review:**
1. What worked this week?
2. What didn't work?
3. What will I do differently?
4. What's the 20% that matters next week?

This isn't about perfection. It's about continuous iteration toward the life you want.`,
          keyTakeaway: 'Build your own system from the best ideas. Test, iterate, and make it yours.',
          actionItem: 'Design your personal morning protocol drawing from at least 3 modules in this course.',
        },
      },
    ],
  },
  {
    id: 'synthesis-level2',
    title: 'Level 2: Mastery & Legacy',
    description: 'The final level: teaching and building your legacy',
    icon: '👑',
    color: 'gold',
    unlockRequirement: 2,
    lessons: [
      {
        id: 'synthesis-teach',
        title: 'Learn by Teaching',
        type: 'concept',
        duration: 10,
        xpReward: 100,
        content: {
          overview: 'The Feynman Technique: you don\'t truly understand until you can teach.',
          mainContent: `**The Feynman Technique**

Richard Feynman, Nobel physicist, was famous for explaining complex things simply.

**The Four Steps:**

**Step 1: Choose a Concept**
Pick something you want to understand deeply.

**Step 2: Teach It to a Child**
Write an explanation using:
- Simple words (no jargon)
- Short sentences
- Clear examples
- Analogies to familiar things

**Step 3: Identify Gaps**
Where did your explanation break down?
- Where did you use jargon?
- Where were you unclear?
- What questions couldn't you answer?

**Step 4: Review and Simplify**
Go back to source material. Fill gaps. Simplify further.

**Why This Works:**

**It exposes illusions of understanding**
You think you understand until you try to explain.

**It creates deeper encoding**
Teaching requires reorganizing information.

**It builds connections**
Simple explanations require seeing the essence.

**Application:**
After each module in this course:
1. Summarize it in one paragraph
2. Explain it to someone else
3. Answer their questions
4. Refine your understanding

The best way to learn is to teach. Share your knowledge.`,
          keyTakeaway: 'You don\'t understand something until you can explain it simply. Teaching is the highest form of learning.',
          actionItem: 'Pick one concept from this course and explain it to someone who knows nothing about it.',
        },
      },
    ],
  },
  {
    id: 'synthesis-level3',
    title: 'Level 3: Advanced Synthesis',
    description: 'Master mental models, systems thinking, decision frameworks, and knowledge transfer',
    icon: '🔮',
    color: 'fuchsia',
    unlockRequirement: 500,
    lessons: masterSynthesisLessons,
  },
];

export default masterSynthesisPathway;
