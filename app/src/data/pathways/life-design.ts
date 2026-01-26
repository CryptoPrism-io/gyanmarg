import type { PathwayLevel } from '@/types';
import { lifeDesignExpandedLessons } from './life-design-expanded';

/**
 * Life Design & Independence Pathway
 * 36 lessons covering life design thinking, purpose, work-life integration, minimalism, and health optimization
 */
export const lifeDesignPathway: PathwayLevel[] = [
  {
    id: 'life-level1',
    title: 'Level 1: Designing Your Life',
    description: 'Apply design thinking to build a life you love',
    icon: '🎨',
    color: 'teal',
    unlockRequirement: 0,
    lessons: [
      {
        id: 'life-intro',
        title: 'Life as a Design Problem',
        type: 'intro',
        duration: 10,
        xpReward: 50,
        content: {
          overview: 'Stanford\'s "Designing Your Life" applies design thinking to your career and life.',
          mainContent: `**Designing Your Life: A Stanford Approach**

From Bill Burnett and Dave Evans at Stanford's d.school:

**The Core Insight:**
Designers don't start with a perfect solution. They prototype, test, fail, and iterate. Your life should work the same way.

**Design Thinking Mindset:**

**1. Reframe Problems**
"I need to find my passion" → "I need to develop interests through action"
"I need the perfect job" → "I need to try multiple possible careers"

**2. Be Curious**
Don't judge ideas as good/bad initially. Explore with genuine curiosity. Ask "What if?"

**3. Bias to Action**
Thinking about life changes nothing. Small experiments create real data.

**4. Radical Collaboration**
You can't design your life alone. Involve mentors, friends, and "lifeview" conversations.

**5. Prototype Everything**
Before committing to a career change, "try it on." Shadow someone. Take a class. Do a side project.

**The Dysfunctional Beliefs:**

❌ "Your degree determines your career"
✅ 3/4 of college grads don't work in their field of study

❌ "You should know what you want by now"
✅ Most people change careers 3-7 times

❌ "If you're successful, you won't be unhappy"
✅ Success without meaning leads to burnout

**Good Life Design:**
- You work on things that give you energy
- You have clear workview and lifeview
- You prototype before committing
- You reframe problems when stuck`,
          keyTakeaway: 'You can\'t think your way to a new life - you must prototype your way there.',
          actionItem: 'Write down three possible versions of "the next five years" of your life.',
        },
      },
      {
        id: 'life-energy',
        title: 'The Energy Engagement Map',
        type: 'concept',
        duration: 12,
        xpReward: 100,
        content: {
          overview: 'Track what gives you energy vs. what drains you.',
          mainContent: `**Energy & Engagement Tracking**

**The Activity Log:**
For one week, track every activity and rate:
- **Engagement:** How absorbed were you? (1-5)
- **Energy:** Did it energize or drain you? (-2 to +2)

**Example Log:**
| Activity | Engagement | Energy |
|----------|------------|--------|
| Team meeting | 2 | -1 |
| Writing code | 5 | +2 |
| Email admin | 1 | -2 |
| Mentoring intern | 4 | +2 |
| Budget spreadsheet | 2 | -1 |

**The AEIOU Framework:**
When analyzing peak experiences, note:
- **A**ctivities: What were you doing?
- **E**nvironments: Where were you?
- **I**nteractions: Who were you with?
- **O**bjects: What tools/things were involved?
- **U**sers: Who benefited?

**Key Patterns to Find:**
- What activities put you in flow state?
- What environments make you thrive?
- Do you energize alone or with people?
- What kind of problems excite you?

**The Good Time Journal:**
Daily entry format:
1. What did I do today?
2. What engaged me most?
3. What drained me?
4. What gave me energy?

After 2-3 weeks, patterns emerge that reveal your natural inclinations.`,
          keyTakeaway: 'Your energy patterns reveal what work you should pursue - follow the energy.',
          quiz: {
            question: 'According to the energy engagement model, what should you do with activities that drain you?',
            options: [
              'Push through and build tolerance',
              'Minimize, delegate, or redesign them',
              'Avoid work entirely',
              'Take more breaks between them',
            ],
            correct: 1,
            explanation: 'Design thinking says to minimize draining activities and maximize energizing ones, not just endure.',
          },
        },
      },
      {
        id: 'life-odyssey',
        title: 'The Odyssey Plan',
        type: 'concept',
        duration: 15,
        xpReward: 125,
        content: {
          overview: 'Design three possible five-year futures for yourself.',
          mainContent: `**The Odyssey Plan: Three Lives**

Design three alternative five-year plans:

**Plan 1: Your Current Path**
If you continue on your current trajectory, where will you be in 5 years?
- What's the logical progression?
- What would need to happen?
- How does this feel?

**Plan 2: What If Plan 1 Disappeared?**
Imagine your current career/path suddenly wasn't an option. What would you do?
- What else have you considered?
- What would you do if money wasn't an issue?
- This forces creative thinking

**Plan 3: Your Wild Card**
If money, time, and others' opinions didn't matter, what would you do?
- What's the thing you secretly want?
- What would you do if you knew you couldn't fail?
- Often reveals hidden desires

**For Each Plan, Rate:**
- **Resources:** Do you have what you need? (1-5)
- **Likability:** How much does this excite you? (1-5)
- **Confidence:** How sure are you about this? (1-5)
- **Coherence:** Does it fit your values/lifeview? (1-5)

**The Dashboard:**
Draw a visual "gauge" for each metric per plan. Patterns emerge.

**Key Insight:**
Most people discover their Plan 2 or 3 is actually more exciting than Plan 1. This is valuable data.

**After Creating Plans:**
1. Share with trusted people
2. Identify small prototypes for each
3. Start testing with low-risk experiments`,
          keyTakeaway: 'You have multiple possible great lives. The odyssey plan helps you see options you\'re ignoring.',
          actionItem: 'Spend 30 minutes drafting your three Odyssey Plans.',
        },
      },
    ],
  },
  {
    id: 'life-level2',
    title: 'Level 2: Financial Independence',
    description: 'Build systems for freedom and optionality',
    icon: '🔓',
    color: 'green',
    unlockRequirement: 2,
    lessons: [
      {
        id: 'life-fire',
        title: 'The FIRE Movement',
        type: 'concept',
        duration: 12,
        xpReward: 100,
        content: {
          overview: 'Financial Independence, Retire Early - understand the math of freedom.',
          mainContent: `**FIRE: Financial Independence Retire Early**

**The Core Concept:**
Accumulate enough assets that investment returns cover your expenses forever.

**The 4% Rule:**
You can safely withdraw 4% of your portfolio annually without running out.

**The Math:**
Annual Expenses × 25 = Your FIRE Number

Examples:
- $40,000/year expenses → Need $1,000,000
- $60,000/year expenses → Need $1,500,000
- $100,000/year expenses → Need $2,500,000

**The Three Levers:**

**1. Increase Income**
- Negotiate salary
- Develop valuable skills
- Side businesses
- Multiple income streams

**2. Decrease Expenses**
- Housing (biggest lever)
- Transportation
- Food
- Subscriptions
- Lifestyle inflation awareness

**3. Invest the Gap**
- Max out tax-advantaged accounts
- Low-cost index funds
- Compound interest over time

**FIRE Variations:**

**Lean FIRE:** Minimal lifestyle, lower number (~$600k-$1M)
**Fat FIRE:** Maintain high lifestyle ($2.5M+)
**Barista FIRE:** Part-time work covers some expenses
**Coast FIRE:** Save enough early that growth covers retirement

**The Real Goal:**
FIRE isn't about never working. It's about optionality - working because you want to, not because you have to.

**Timeline Reality:**
With 50% savings rate: ~17 years to FIRE
With 70% savings rate: ~8.5 years to FIRE
With 25% savings rate: ~32 years to FIRE`,
          keyTakeaway: 'Financial independence is math, not magic. Know your number and work toward it.',
          quiz: {
            question: 'Using the 4% rule, how much do you need to FIRE with $50,000 annual expenses?',
            options: [
              '$500,000',
              '$1,000,000',
              '$1,250,000',
              '$2,000,000',
            ],
            correct: 2,
            explanation: '$50,000 × 25 = $1,250,000. The 4% rule means you need 25x your annual expenses.',
          },
        },
      },
    ],
  },
  {
    id: 'life-level3',
    title: 'Level 3: Advanced Life Design',
    description: 'Master purpose, work-life integration, minimalism, relationships, and health',
    icon: '🌟',
    color: 'emerald',
    unlockRequirement: 500,
    lessons: lifeDesignExpandedLessons,
  },
];

export default lifeDesignPathway;
