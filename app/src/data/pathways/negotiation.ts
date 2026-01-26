import type { PathwayLevel } from '@/types';
import { negotiationExpandedLessons } from './negotiation-expanded';
import { fbiFAdvancedNegotiationLessons } from './negotiation-fbi-advanced';

/**
 * Negotiation & Influence Pathway
 * 46 lessons covering FBI tactics, fundamentals, strategies, career negotiations, and everyday negotiations
 */
export const negotiationPathway: PathwayLevel[] = [
  {
    id: 'neg-level1',
    title: 'Level 1: FBI Negotiation Tactics',
    description: 'Learn the techniques that save lives',
    icon: '🎯',
    color: 'purple',
    unlockRequirement: 0,
    lessons: [
      {
        id: 'neg-intro',
        title: 'Never Split the Difference',
        type: 'intro',
        duration: 10,
        xpReward: 50,
        content: {
          overview: 'Chris Voss spent 24 years as an FBI hostage negotiator. Here\'s what he learned.',
          mainContent: `**Never Split the Difference: FBI Negotiation Secrets**

Chris Voss negotiated with terrorists, kidnappers, and criminals. His techniques work in business and daily life.

**The Core Insight:**
Negotiation is not about logic - it's about emotions. The person who controls the emotional frame wins.

**Why "Splitting the Difference" Fails:**
- You want $100, they offer $50
- "Let's split it at $75"
- Sounds fair, but:
  - You anchored at $100 for a reason
  - They started at $50 knowing you'd negotiate up
  - $75 was their target all along!

**The Alternative: Never Split**
- Understand their real needs
- Find creative solutions
- Expand the pie before dividing it
- Make them feel heard

**The Two Words That Change Everything:**
"That's right."

When they say "that's right," you've broken through. Not "you're right" (dismissive) - "THAT'S right" means they feel understood.

**The Goal:**
Every negotiation is an opportunity to discover what the other side really wants. Often it's not what they first asked for.`,
          keyTakeaway: 'Negotiation is about understanding emotions and making people feel heard, not logical arguments.',
          actionItem: 'In your next conversation, try to get someone to say "that\'s right" by summarizing their position.',
        },
      },
      {
        id: 'neg-mirroring',
        title: 'Tactical Empathy & Mirroring',
        type: 'concept',
        duration: 12,
        xpReward: 100,
        content: {
          overview: 'The two techniques that work in every negotiation.',
          mainContent: `**Tactical Empathy**

It's not about agreeing - it's about understanding.

**The Formula:**
1. Identify their emotion
2. Label it out loud
3. Wait for confirmation

**Labeling Phrases:**
- "It seems like..."
- "It sounds like..."
- "It looks like..."

**Example:**
Them: "Your price is way too high!"
You: "It seems like you're under a lot of budget pressure."
Them: "Yeah, exactly! My boss will kill me if I go over..."

Now you understand the REAL issue.

**Mirroring: The Simplest Technique**

Just repeat the last 1-3 words they said, with an upward inflection.

**Example:**
Them: "We can't do this project right now."
You: "Can't do it right now?"
Them: "Well, not with our current resources. We'd need more staff."
You: "More staff?"
Them: "Yeah, specifically someone with Python experience..."

**Why Mirroring Works:**
- Makes them feel heard
- Encourages elaboration
- Buys you thinking time
- Reveals hidden information
- Requires zero preparation

**Advanced Move: Mirror + Label**
"Can't do it right now? It sounds like there might be some resource constraints..."

This combination is incredibly powerful.`,
          keyTakeaway: 'Mirroring (repeating last words) and labeling (naming emotions) make people feel understood.',
          quiz: {
            question: 'What should you do when someone says "We can\'t possibly meet that deadline"?',
            options: [
              'Argue that it\'s reasonable',
              'Offer to extend the deadline',
              'Mirror: "Can\'t possibly meet it?"',
              'Give up on the negotiation',
            ],
            correct: 2,
            explanation: 'Mirroring gets them to elaborate on WHY they can\'t, revealing the real constraints.',
          },
        },
      },
      {
        id: 'neg-calibrated',
        title: 'Calibrated Questions',
        type: 'concept',
        duration: 10,
        xpReward: 100,
        content: {
          overview: 'Questions that give you control while making them feel in charge.',
          mainContent: `**Calibrated Questions: Your Secret Weapon**

These are open-ended questions that start with "How" or "What" (never "Why").

**Why Not "Why"?**
"Why did you do that?" sounds accusatory.
"What made you do that?" sounds curious.

**The Power Questions:**

**When they make a demand:**
"How am I supposed to do that?"
(Makes them solve their own problem)

**When negotiating price:**
"What would it take to make this work?"
(Puts the ball in their court)

**When they're resisting:**
"What's the biggest challenge you're facing?"
(Uncovers the real issue)

**When closing:**
"How would you like to proceed?"
(Assumes agreement, lets them choose path)

**The Magic Question:**
"How can I help make this better for us?"
- Collaborative ("us")
- Asks for their input
- Positions you as helpful
- Gets them invested in solution

**Calibrated Questions in Salary Negotiation:**
- "What does success look like in this role?"
- "How do you see this position evolving?"
- "What would top performance be rewarded with?"
- "How can I earn more responsibility?"

Notice: No direct demands. Just curious questions that lead them to your desired outcome.`,
          keyTakeaway: 'Calibrated "How" and "What" questions give you control while making them feel in charge.',
          actionItem: 'Replace your next 3 "Why" questions with "What made you..." versions.',
        },
      },
    ],
  },
  {
    id: 'neg-level2',
    title: 'Level 2: Words That Work',
    description: 'Master the language of persuasion',
    icon: '💬',
    color: 'pink',
    unlockRequirement: 2,
    lessons: [
      {
        id: 'neg-words',
        title: 'It\'s Not What You Say...',
        type: 'concept',
        duration: 10,
        xpReward: 75,
        content: {
          overview: 'Frank Luntz discovered that small word changes create massive perception shifts.',
          mainContent: `**Words That Work: The Science of Language**

Frank Luntz tested thousands of word choices. Small changes = big differences.

**Real Examples That Changed History:**

**"Death Tax" vs "Estate Tax"**
- Estate Tax: 60% support keeping it
- Death Tax: 70% want to repeal it
- Same policy, different name, opposite reactions

**"Climate Change" vs "Global Warming"**
- Global Warming sounds urgent
- Climate Change sounds natural
- The term shift changed the debate

**"Drilling for Oil" vs "Exploring for Energy"**
- Drilling: Negative, destructive image
- Exploring: Positive, adventurous image

**The 10 Rules of Effective Language:**

1. **Simplicity** - Use small words
2. **Brevity** - Use short sentences
3. **Credibility** - Be believable
4. **Consistency** - Repeat your message
5. **Novelty** - Say it fresh
6. **Sound** - Words should sound good
7. **Aspiration** - Paint a vision
8. **Visualization** - Create pictures
9. **Questioning** - Ask, don't tell
10. **Context** - Frame matters most

**Power Words:**
- "Imagine" - Opens minds
- "Because" - Creates compliance (Xerox study: 94% vs 60%)
- "You" - Makes it personal
- "New" - Triggers attention
- "Free" - Irrational pull
- "Instantly" - Satisfies impatience`,
          keyTakeaway: 'The words you choose shape how people think. Small changes in language create massive shifts in perception.',
          quiz: {
            question: 'Why did "climate change" become preferred over "global warming"?',
            options: [
              'It\'s more scientifically accurate',
              'It sounds less urgent and threatening',
              'Scientists requested the change',
              'It\'s shorter to say',
            ],
            correct: 1,
            explanation: 'The term shift made the issue seem more natural and less alarming, changing public perception.',
          },
        },
      },
    ],
  },
  {
    id: 'neg-level3',
    title: 'Level 3: Advanced Negotiation Mastery',
    description: 'Master tactics, handle difficult negotiations, and negotiate your career',
    icon: '🤝',
    color: 'indigo',
    unlockRequirement: 500,
    lessons: negotiationExpandedLessons,
  },
  {
    id: 'neg-level4',
    title: 'Level 4: FBI Advanced Tactics',
    description: 'Master Chris Voss\'s advanced techniques: Accusation Audits, Ackerman Model, Black Swans, and more',
    icon: '🔥',
    color: 'red',
    unlockRequirement: 2000,
    lessons: fbiFAdvancedNegotiationLessons,
  },
];

export default negotiationPathway;
