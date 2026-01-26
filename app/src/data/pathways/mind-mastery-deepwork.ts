import type { Lesson } from '@/types';

export const deepWorkLessons: Lesson[] = [
  {
    id: 'mm-dw-001',
    title: 'Deep Work vs Shallow Work - The Distinction',
    type: 'concept',
    duration: 12,
    xpReward: 100,
    content: {
      overview: 'Understand the fundamental difference between deep and shallow work, and why this distinction determines your professional success.',
      mainContent: `**The Two Types of Work**

Cal Newport defines two fundamentally different types of work that occupy our professional lives:

**Deep Work:**
Professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to their limit. These efforts create new value, improve your skill, and are hard to replicate.

*Examples:*
- Writing a book chapter
- Coding a complex algorithm
- Developing a strategic business plan
- Learning a new programming language
- Analyzing complex data sets
- Creating original research

**Shallow Work:**
Non-cognitively demanding, logistical-style tasks, often performed while distracted. These efforts tend not to create much new value and are easy to replicate.

*Examples:*
- Answering routine emails
- Attending status update meetings
- Filling out expense reports
- Scheduling appointments
- Copying and formatting documents
- Social media browsing

**The Critical Insight:**

Most knowledge workers spend the vast majority of their time on shallow work. A 2012 McKinsey study found that the average knowledge worker spends 60% of the workweek engaged in electronic communication and Internet searching.

**Why This Matters:**

> "Clarity about what matters provides clarity about what does not." - Cal Newport

Deep work is where the magic happens. It's where:
- Breakthrough ideas emerge
- Complex skills are developed
- Career capital is built
- Meaningful contributions are made

**The Uncomfortable Truth:**

You cannot do deep work and shallow work simultaneously. Every time you switch to a quick email check, you're not just losing those seconds - you're compromising the next 15-20 minutes of cognitive performance due to attention residue.

**The 4-Hour Rule:**

Newport suggests that most people can sustain only about 4 hours of truly deep work per day. Elite performers protect these hours ruthlessly.`,
      keyTakeaway: 'Deep work creates value and builds skills; shallow work is logistical noise. Success comes from maximizing deep work hours while minimizing shallow interruptions.',
      actionItem: 'Track your work activities for one full day, categorizing each task as "Deep" or "Shallow." Calculate the percentage split.',
    },
    quiz: [
      {
        id: 'mm-dw-001-q1',
        question: 'Which of the following is an example of deep work?',
        options: [
          'Responding to Slack messages',
          'Developing a complex algorithm from scratch',
          'Attending a team standup meeting',
          'Organizing your inbox'
        ],
        correctAnswer: 1,
        explanation: 'Deep work requires distraction-free concentration on cognitively demanding tasks. Developing a complex algorithm pushes your cognitive limits and creates new value.'
      },
      {
        id: 'mm-dw-001-q2',
        question: 'According to Newport, how many hours of deep work can most people sustain daily?',
        options: [
          '8 hours',
          '6 hours',
          '4 hours',
          '2 hours'
        ],
        correctAnswer: 2,
        explanation: 'Newport suggests that about 4 hours of truly deep work per day is the maximum most people can sustain. Elite performers protect these hours ruthlessly.'
      }
    ]
  },
  {
    id: 'mm-dw-002',
    title: 'The Deep Work Hypothesis - Why It Matters Now',
    type: 'concept',
    duration: 10,
    xpReward: 100,
    content: {
      overview: 'Discover why deep work is becoming increasingly rare and valuable in our distracted economy, creating a massive opportunity for those who master it.',
      mainContent: `**The Deep Work Hypothesis:**

> "The ability to perform deep work is becoming increasingly RARE at exactly the same time it is becoming increasingly VALUABLE in our economy. As a consequence, the few who cultivate this skill, and then make it the core of their working life, will thrive." - Cal Newport

**Why Deep Work Is Becoming Rare:**

1. **The Open Office Epidemic**
Modern workplaces are designed for collaboration at the expense of concentration. Open floor plans, while great for quick communication, make sustained focus nearly impossible.

2. **The Always-On Culture**
Expectations of immediate email response, constant Slack availability, and 24/7 connectivity have normalized fragmented attention as a work style.

3. **Social Media Addiction**
Our brains have been trained to crave the dopamine hits of likes, comments, and notifications. This rewiring makes sustained focus feel uncomfortable.

4. **The Metric Black Hole**
Knowledge work lacks clear productivity metrics. In the absence of better measures, "busyness" becomes a proxy for productivity. Looking busy (responding quickly, attending meetings) becomes more valued than being productive.

**Why Deep Work Is Becoming More Valuable:**

1. **The Rise of Complex Problems**
Routine cognitive work is being automated. What remains requires human creativity and complex problem-solving.

2. **The Winner-Take-All Economy**
In a globally connected marketplace, being slightly better can mean capturing dramatically more value. Deep work builds the expertise that creates this edge.

3. **The Skills Gap**
Those who can learn complex new skills quickly will thrive. Deep work is how you master hard things fast.

**The Two Core Abilities for Thriving:**

Newport identifies two abilities essential for success in the new economy:
1. The ability to quickly master hard things
2. The ability to produce at an elite level, in terms of both quality and speed

*Both require deep work.*

**The Opportunity:**

Because most people CAN'T focus anymore, those who CAN have an unfair competitive advantage. Deep work mastery is your arbitrage opportunity.`,
      keyTakeaway: 'Deep work is rare because our environment fights against it, yet more valuable than ever because complex skills require sustained focus to develop.',
      actionItem: 'Identify three ways your current work environment undermines deep work, and brainstorm one countermeasure for each.',
    },
    quiz: [
      {
        id: 'mm-dw-002-q1',
        question: 'Why is deep work becoming MORE valuable according to Newport?',
        options: [
          'Because employers prefer employees who check email less',
          'Because routine work is being automated, leaving complex tasks that require deep focus',
          'Because offices are becoming quieter',
          'Because social media is being banned at work'
        ],
        correctAnswer: 1,
        explanation: 'As routine cognitive work gets automated, what remains are complex problems requiring creativity and deep thinking - exactly what deep work enables.'
      }
    ]
  },
  {
    id: 'mm-dw-003',
    title: 'The Four Philosophies of Deep Work',
    type: 'concept',
    duration: 15,
    xpReward: 150,
    content: {
      overview: 'Learn the four different approaches to scheduling deep work, and discover which philosophy matches your life circumstances and professional demands.',
      mainContent: `**Choosing Your Deep Work Philosophy**

Not everyone can approach deep work the same way. Newport identifies four distinct philosophies, each suited to different life circumstances:

---

**1. The Monastic Philosophy**

*Definition:* Eliminate or radically minimize shallow obligations to maximize deep work.

*Best for:* Those whose primary value comes from one activity (writing, research, art).

*Example:* Donald Knuth, legendary computer scientist, has no email address. His secretary handles all correspondence, and he responds via physical mail when necessary.

*Characteristics:*
- Complete unavailability for shallow tasks
- Total dedication to a single deep pursuit
- Works in isolation for extended periods

*Trade-off:* Maximum depth, but requires ability to ignore most professional obligations.

---

**2. The Bimodal Philosophy**

*Definition:* Divide your time, dedicating some clearly defined stretches to deep pursuits while leaving the rest open to everything else.

*Best for:* Those who need periods of total focus but cannot abandon other responsibilities permanently.

*Example:* Carl Jung would retreat to his tower in Bollingen for deep writing, then return to his bustling clinical practice in Zurich.

*Characteristics:*
- Minimum deep work stretch: at least one full day
- Clear boundaries between deep and shallow periods
- Often seasonal or weekly rhythms

*Trade-off:* Significant depth possible, but requires flexible schedule.

---

**3. The Rhythmic Philosophy**

*Definition:* Create a daily ritual by scheduling deep work at the same time every day. Chain those days together.

*Best for:* Most people with regular jobs and consistent schedules.

*Example:* A software developer who codes from 5:30-7:30 AM before the rest of the household wakes, every single day.

*Characteristics:*
- Same time, same place, same duration
- Builds momentum through consistency
- Uses "don't break the chain" motivation

*Trade-off:* Most sustainable and realistic, but less total deep work time than bimodal.

---

**4. The Journalistic Philosophy**

*Definition:* Fit deep work wherever you can into your schedule, switching into deep work mode on demand.

*Best for:* Experienced deep workers with significant willpower and schedule chaos.

*Example:* Walter Isaacson, who would retreat to write whenever he had free time during his busy journalist schedule.

*Characteristics:*
- Opportunistic deep work sessions
- Requires ability to switch modes instantly
- No set schedule

*Trade-off:* Maximum flexibility, but requires significant willpower and practice.

---

**Newport's Recommendation:**

For most people, the **Rhythmic Philosophy** is most effective. It:
- Builds deep work into habit
- Reduces willpower required
- Creates momentum through consistency
- Works with standard work schedules`,
      keyTakeaway: 'Choose the deep work philosophy that matches your life reality. The Rhythmic Philosophy (same time daily) works best for most people with regular schedules.',
      actionItem: 'Determine which philosophy matches your current life circumstances and schedule your first week of deep work accordingly.',
    },
    quiz: [
      {
        id: 'mm-dw-003-q1',
        question: 'Which deep work philosophy involves scheduling deep work at the same time every single day?',
        options: [
          'Monastic Philosophy',
          'Bimodal Philosophy',
          'Rhythmic Philosophy',
          'Journalistic Philosophy'
        ],
        correctAnswer: 2,
        explanation: 'The Rhythmic Philosophy creates a daily ritual of deep work at the same time, building consistency and reducing willpower needed to start.'
      },
      {
        id: 'mm-dw-003-q2',
        question: 'Which philosophy does Newport recommend for MOST people?',
        options: [
          'Monastic - for maximum depth',
          'Bimodal - for flexibility',
          'Rhythmic - for sustainability and habit-building',
          'Journalistic - for opportunistic sessions'
        ],
        correctAnswer: 2,
        explanation: 'The Rhythmic Philosophy is most sustainable for people with regular schedules because it builds deep work into a consistent habit, reducing reliance on willpower.'
      }
    ]
  },
  {
    id: 'mm-dw-004',
    title: 'Attention Residue and Task Switching Costs',
    type: 'concept',
    duration: 12,
    xpReward: 100,
    content: {
      overview: 'Understand the hidden cognitive tax of task switching and why even a "quick" email check destroys your deep work capacity.',
      mainContent: `**The Hidden Tax on Your Brain**

Every time you switch tasks, you pay a cognitive penalty you cannot see but absolutely feel.

**What Is Attention Residue?**

Research by Sophie Leroy at the University of Minnesota revealed a critical finding:

> "People need to stop thinking about one task in order to fully transition their attention and perform well on another. Yet, results indicate it is difficult for people to transition their attention away from an unfinished task."

When you switch from Task A to Task B, your attention doesn't immediately follow. A "residue" of your attention remains stuck thinking about Task A - especially if Task A was unfinished or challenging.

**The Study:**

Leroy had participants work on word puzzles, then switch to a new task. Those who were interrupted mid-puzzle performed significantly worse on the subsequent task. Their minds were still processing the incomplete puzzle.

*The residue effect lasted for extended periods, not just seconds.*

**The Email Disaster:**

Consider what happens when you "just quickly check email" during deep work:

1. You see a message requiring action
2. You can't act on it now (you're supposed to be doing deep work)
3. You return to your deep work
4. Your mind is now split - part of it is thinking about that email
5. This residue degrades your performance for the next 15-20 minutes

**The Zeigarnik Effect:**

Your brain doesn't let go of incomplete tasks. Psychologist Bluma Zeigarnik discovered that uncompleted tasks occupy mental space until they're finished or captured somewhere trusted.

This is why that email you saw but didn't respond to keeps nagging at you.

**The True Cost of Interruptions:**

Studies suggest it takes an average of **23 minutes and 15 seconds** to return to the original task after an interruption. But it's worse than that - you often never return to the same depth of focus.

**Newport's Formula:**

> High-Quality Work Produced = (Time Spent) x (Intensity of Focus)

A 4-hour deep work session is NOT equal to four 1-hour sessions separated by email checks. The latter produces a fraction of the value.

**The Solution: Batching**

Instead of checking email throughout the day:
- Check at 10 AM, 2 PM, and 5 PM only
- Process all messages in one batch
- Create clear transition rituals between shallow and deep work`,
      keyTakeaway: 'Each task switch leaves attention residue that degrades performance for 15-23 minutes. Protect deep work blocks from ALL interruptions, including "quick" checks.',
      actionItem: 'Implement an "email batching" protocol: check email only at 2-3 designated times today and observe how this affects your focus.',
    },
    quiz: [
      {
        id: 'mm-dw-004-q1',
        question: 'According to research, how long does it typically take to fully return to a task after an interruption?',
        options: [
          'About 30 seconds',
          'About 5 minutes',
          'About 23 minutes',
          'About 2 hours'
        ],
        correctAnswer: 2,
        explanation: 'Studies show it takes an average of 23 minutes and 15 seconds to return to the original task after an interruption, and you may never return to the same depth of focus.'
      }
    ]
  },
  {
    id: 'mm-dw-005',
    title: 'The Craftsman Approach to Tool Selection',
    type: 'concept',
    duration: 10,
    xpReward: 100,
    content: {
      overview: 'Learn a rigorous framework for deciding which digital tools deserve your attention and which are costing you more than they provide.',
      mainContent: `**The Any-Benefit Approach (What Most People Do)**

Most people adopt a new tool if they can identify ANY possible benefit it might provide. This is how we end up with:
- Seven different messaging apps
- Three project management tools
- Social media accounts we "might need someday"
- Notifications from apps we forgot we installed

**The Problem:**

Every tool comes with costs:
- Time cost (learning, maintaining, using)
- Attention cost (notifications, checking habits)
- Opportunity cost (time not spent on better activities)
- Cognitive cost (another thing to remember/manage)

**The Craftsman Approach to Tool Selection:**

> "Identify the core factors that determine success and happiness in your professional and personal life. Adopt a tool only if its positive impacts on these factors substantially outweigh its negative impacts."

**The Process:**

**Step 1: Identify Your Core Goals**
List the 2-3 most important goals in both your professional and personal life.

*Example:*
- Professional: Produce high-quality research papers
- Personal: Be a present, engaged parent

**Step 2: List Key Activities**
For each goal, identify the 2-3 activities that most help you succeed.

*Example for research goal:*
- Deep reading of primary sources
- Focused writing sessions
- Discussing ideas with colleagues

**Step 3: Evaluate Each Tool**

For each tool you currently use (or are considering), ask:
- Does this tool have a substantially positive, negative, or neutral impact on these activities?
- Is the benefit substantial enough to justify the costs?

**The Law of the Vital Few (80/20):**

In many settings, 80% of results come from 20% of causes. Applied to tools:
- Most of your success comes from a small number of activities
- Most tools contribute little to these vital activities
- Focus on the tools that amplify your most important work

**Example: Social Media Audit**

*Goal:* Advance career as a writer
*Key activities:* Writing, reading, developing ideas

*Twitter:*
- Benefit: Some exposure, occasional interesting discussions
- Cost: Massive time sink, fragmented attention, comparison anxiety
- Verdict: Costs outweigh benefits for the core goal

**The Courage Required:**

This approach often leads to eliminating tools that provide SOME benefit. That's uncomfortable. But the craftsman knows:

> "A tool is just a tool. It has no power over you unless you give it power."`,
      keyTakeaway: 'Adopt tools only when their benefits to your core goals substantially outweigh their costs. The "any-benefit" approach leads to tool overload and attention fragmentation.',
      actionItem: 'List your 3 most-used digital tools. For each, honestly assess whether its benefits to your core life goals outweigh its costs.',
    },
    quiz: [
      {
        id: 'mm-dw-005-q1',
        question: 'What is the "Any-Benefit Approach" to tool selection?',
        options: [
          'Only adopting tools that provide substantial benefit',
          'Adopting a tool if it provides ANY possible benefit, regardless of costs',
          'Carefully weighing benefits against costs before adoption',
          'Only using free tools'
        ],
        correctAnswer: 1,
        explanation: 'The Any-Benefit Approach means adopting tools based on any possible benefit, without considering the costs. Newport argues this leads to tool overload.'
      }
    ]
  },
  {
    id: 'mm-dw-006',
    title: 'Embracing Boredom - Training Your Focus Muscle',
    type: 'concept',
    duration: 12,
    xpReward: 100,
    content: {
      overview: 'Discover why your ability to tolerate boredom determines your capacity for deep work, and how to train your brain to resist distraction.',
      mainContent: `**The Boredom-Focus Connection**

Here's an uncomfortable truth:

> "The ability to concentrate intensely is a skill that must be trained. Efforts to deepen your focus will struggle if you don't simultaneously wean your mind from a dependence on distraction." - Cal Newport

**The Problem:**

Most people, at the slightest hint of boredom, reach for their phone. Waiting in line? Phone. Commercial break? Phone. Boring meeting? Phone.

Each time you do this, you're training your brain that:
- Boredom is intolerable
- Distraction is the solution
- Focus is optional

This conditioning destroys your ability to do deep work.

**The Neuroscience:**

Your brain is plastic - it physically rewires based on your behaviors. If you consistently interrupt focus with distraction, you're building neural pathways that demand distraction.

*You're literally training your brain to be unable to focus.*

**Newport's Rule:**

> "Schedule in advance when you'll use the Internet, and then avoid it altogether outside these times."

This isn't about using the Internet less. It's about practicing resistance to distraction.

**The Practice:**

**1. Schedule Internet Blocks**
Decide in advance when you'll go online. Outside those blocks, stay offline - even if it's boring.

**2. Embrace Boredom**
When waiting in line, don't reach for your phone. Just wait. Let your mind wander. Be bored.

*This feels uncomfortable at first. That discomfort is the training.*

**3. The 5-Minute Wait**
When you feel the urge to check something, wait 5 minutes before acting on it. Often the urge passes.

**4. Productive Meditation**
Use "low-cognitive" time (walking, driving, showering) to work on a professional problem in your head. This trains focus.

**The Insight:**

If every moment of potential boredom is replaced with a glance at your phone, your brain never builds the tolerance for the boredom that often accompanies deep work.

**The Goal:**

Rewire your brain so that:
- Focus feels natural
- Boredom is tolerable
- Distraction requires effort, not the other way around

**Roosevelt Dashes:**

Teddy Roosevelt was known for intense bursts of focused work. Try this: take a task, estimate the time needed, then reduce that time drastically and race to complete it. This trains intensity of focus.`,
      keyTakeaway: 'Every time you reach for your phone out of boredom, you train your brain to be unable to focus. Embracing boredom builds the mental muscles required for deep work.',
      actionItem: 'For the next 24 hours, whenever you feel the urge to check your phone out of boredom, wait 5 minutes instead. Notice what happens to the urge.',
    },
    quiz: [
      {
        id: 'mm-dw-006-q1',
        question: 'Why is embracing boredom important for deep work?',
        options: [
          'Boredom makes you more creative',
          'It trains your brain to tolerate the discomfort that accompanies sustained focus',
          'Boredom is a sign of intelligence',
          'It helps you sleep better'
        ],
        correctAnswer: 1,
        explanation: 'When you constantly escape boredom with distraction, you train your brain that focus is optional. Tolerating boredom builds the mental muscles needed for deep work.'
      }
    ]
  },
  {
    id: 'mm-dw-007',
    title: 'The Shutdown Ritual - Complete Work, Complete Recovery',
    type: 'concept',
    duration: 10,
    xpReward: 100,
    content: {
      overview: 'Learn why a deliberate end-of-day ritual is essential for sustainable deep work and how to close open loops that drain cognitive energy.',
      mainContent: `**The Problem with "Always On"**

Without a clear ending to your workday:
- Work bleeds into personal time
- Your mind never fully rests
- Recovery is incomplete
- Tomorrow's deep work suffers

**The Shutdown Complete Ritual**

Newport advocates for a strict shutdown ritual at the end of each workday. The ritual ensures every incomplete task, goal, or project has been reviewed and that for each you have either:

1. Confirmed a plan for its completion, or
2. Captured it in a system you trust to revisit

**Newport's Personal Ritual:**

At the end of each workday, Newport:

1. Takes one final look at his email inbox to ensure nothing urgent
2. Transfers new tasks to his official task lists
3. Reviews every task on every list, looking at the next few days on his calendar
4. Makes a rough plan for the next day
5. Says "Shutdown complete" out loud (yes, really)

**Why It Works:**

**The Zeigarnik Effect Revisited:**

Your brain holds onto incomplete tasks, constantly processing them in the background. This is why you lie in bed thinking about work.

The shutdown ritual closes these loops by:
- Confirming that everything important has been captured
- Creating a plan (so your brain knows it will be handled)
- Providing a clear signal that work is DONE

**After "Shutdown Complete":**

Once you've completed the ritual and said the phrase:
- No email checking
- No thinking about work problems
- No "just one quick thing"

*The phrase becomes a trigger that tells your brain it's safe to release work concerns.*

**Why Recovery Matters:**

Research by Dutch psychologist Sabine Sonnentag found that:
- Employees who completely disconnect from work recover faster
- Those who kept checking email remained fatigued
- Deliberate rest improves next-day performance

**The Insight:**

> "Your conscious mind can only focus on one thing at a time. When you switch off, you need your subconscious to take over processing. But it can't if your conscious mind keeps interfering."

**Building Your Ritual:**

1. **Task capture:** Move all loose tasks to a trusted system
2. **Calendar review:** Check the next few days for deadlines
3. **Next-day plan:** Rough outline of tomorrow's priorities
4. **Phrase:** Say "Shutdown complete" (or your own phrase)
5. **Commit:** No work after the phrase, no exceptions`,
      keyTakeaway: 'A deliberate shutdown ritual closes cognitive loops, signals your brain to release work, and enables the recovery essential for sustainable deep work.',
      actionItem: 'Design your own shutdown ritual with 3-5 steps and a closing phrase. Use it tonight to end your workday.',
    },
    quiz: [
      {
        id: 'mm-dw-007-q1',
        question: 'What is the purpose of saying "Shutdown complete" at the end of the workday ritual?',
        options: [
          'To remind yourself to turn off your computer',
          'To signal to colleagues that you are leaving',
          'To provide a clear trigger that tells your brain work is done and it is safe to release work concerns',
          'To practice positive affirmations'
        ],
        correctAnswer: 2,
        explanation: 'The phrase acts as a psychological trigger that tells your brain the workday is complete, allowing it to release work-related thoughts and enable genuine recovery.'
      }
    ]
  },
  {
    id: 'mm-dw-008',
    title: 'Time Blocking Mastery',
    type: 'concept',
    duration: 15,
    xpReward: 150,
    content: {
      overview: 'Master the time blocking technique that Cal Newport calls essential for deep work, and learn to schedule every minute of your day with intention.',
      mainContent: `**Why Time Blocking?**

Newport considers time blocking essential:

> "A 40-hour time-blocked work week, I estimate, produces the same amount of output as a 60+ hour work week pursued without structure."

**The Core Idea:**

Instead of reacting to what comes at you, proactively decide what you'll do with every minute of your workday.

At the start of each day:
1. Divide your day into blocks (typically 30-60 minutes each)
2. Assign specific activities to each block
3. Batch similar tasks together
4. Protect deep work blocks ruthlessly

**The Deep Work Block:**

Reserve your best hours (typically morning) for deep work. These blocks should:
- Be at least 90 minutes long
- Have no meetings scheduled
- Have no email checking allowed
- Have a specific output goal

**Sample Time-Blocked Day:**

| Time | Block |
|------|-------|
| 6:00-8:00 | Deep Work: Project X coding |
| 8:00-8:30 | Email batch #1 |
| 8:30-9:00 | Planning/admin |
| 9:00-11:00 | Deep Work: Strategic report |
| 11:00-11:30 | Email batch #2 |
| 11:30-12:00 | Shallow tasks |
| 12:00-1:00 | Lunch (no work) |
| 1:00-2:00 | Meetings |
| 2:00-3:30 | Deep Work: Research |
| 3:30-4:00 | Email batch #3 |
| 4:00-4:30 | Wrap-up/tomorrow planning |

**Key Principles:**

**1. Be Realistic**
Don't over-schedule. Include buffer blocks for the inevitable surprises.

**2. Revise as Needed**
Your schedule will be disrupted. When it is, reschedule for the rest of the day. The goal isn't perfection - it's intention.

**3. Batch Shallow Work**
Group emails, calls, and administrative tasks into dedicated blocks rather than spreading them throughout the day.

**4. Protect Deep Blocks**
Treat your deep work blocks like important meetings. Would you cancel a meeting with your CEO? Then don't cancel your deep work.

**5. Quantify Depth**
At the end of each week, count your deep work hours. Track the trend over time.

**The Overflow Conditional:**

If a task takes longer than expected, have a decision rule:
- If it's deep work on a key project: extend the block
- If it's shallow work: stop and schedule for later

**The Weekly Review:**

Each Sunday, review:
- Total deep work hours this week
- What disrupted your blocks
- What you'll do differently next week`,
      keyTakeaway: 'Time blocking transforms reactive days into intentional ones. Schedule every minute, protect deep work blocks, and revise when disrupted - the goal is intention, not perfection.',
      actionItem: 'Time block your entire next workday before it begins. At day end, note what worked and what needs adjustment.',
    },
    quiz: [
      {
        id: 'mm-dw-008-q1',
        question: 'According to Newport, how much more productive is a time-blocked 40-hour week compared to an unstructured 60+ hour week?',
        options: [
          'Slightly less productive',
          'About the same productivity',
          'About the same productivity (40 hours = 60+ hours of output)',
          'Twice as productive'
        ],
        correctAnswer: 2,
        explanation: 'Newport estimates a structured 40-hour time-blocked week produces the same output as an unstructured 60+ hour week, due to reduced context switching and protected focus time.'
      },
      {
        id: 'mm-dw-008-q2',
        question: 'How long should deep work blocks typically be?',
        options: [
          '15-30 minutes',
          'At least 90 minutes',
          'Exactly 2 hours',
          '4 hours or more'
        ],
        correctAnswer: 1,
        explanation: 'Deep work blocks should be at least 90 minutes to allow for full immersion. Shorter blocks do not provide enough time to overcome attention residue from previous tasks.'
      }
    ]
  },
  {
    id: 'mm-dw-009',
    title: 'The 4DX Framework for Deep Work',
    type: 'concept',
    duration: 12,
    xpReward: 100,
    content: {
      overview: 'Apply the 4 Disciplines of Execution framework to make deep work a consistent reality in your life, not just an aspiration.',
      mainContent: `**From Strategy to Execution**

Many people understand the value of deep work intellectually but fail to execute consistently. Newport adapts the 4DX framework (from "The 4 Disciplines of Execution") to solve this problem.

**Discipline #1: Focus on the Wildly Important**

> "The more you try to do, the less you actually accomplish."

*Application to Deep Work:*

Identify a small number of ambitious outcomes to pursue with your deep work hours. These should be:
- Specific and measurable
- Meaningful to your career/life
- Achievable with deep work

*Example:*
- "Complete my novel by December" (not "write more")
- "Publish 5 peer-reviewed papers this year" (not "do research")
- "Learn Python proficiently in 3 months" (not "learn to code")

**Discipline #2: Act on Lead Measures**

Two types of metrics:
- **Lag measures:** The ultimate goal (papers published, revenue generated)
- **Lead measures:** The behaviors that drive the lag measure

*For deep work, the lead measure is: hours of deep work per day/week.*

This is actionable and within your control. Track it religiously.

**Discipline #3: Keep a Compelling Scoreboard**

Create a physical scoreboard that tracks your deep work hours. Newport uses a simple tally on a card near his desk.

*The scoreboard should be:*
- Visible (you see it constantly)
- Simple (one glance tells the story)
- Updated immediately (after each session)

*Why it works:*
People play differently when they're keeping score. A visible scoreboard creates accountability and motivation.

**Discipline #4: Create a Cadence of Accountability**

Hold a weekly review with yourself:
- How many deep work hours did I log?
- Did I hit my target?
- What prevented more deep work?
- What will I do differently next week?

*Schedule this review:* Same time each week (e.g., Sunday evening or Friday afternoon).

**Putting It Together:**

1. **Wildly Important Goal:** "Write and publish my first book by end of year"
2. **Lead Measure:** "20 hours of deep work per week on the book"
3. **Scoreboard:** Tally card tracking weekly deep work hours
4. **Weekly Review:** Sunday at 6 PM - review the week, plan the next

**The Power of the Framework:**

Without this structure:
- Goals remain vague
- Progress is unmeasured
- Accountability is absent
- Deep work stays aspirational

With this structure:
- Goals are specific
- Progress is visible
- Accountability is built-in
- Deep work becomes real`,
      keyTakeaway: 'Use 4DX to make deep work execution-focused: set wildly important goals, track lead measures (deep work hours), maintain a visible scoreboard, and review weekly.',
      actionItem: 'Define your "Wildly Important Goal" for the next quarter and the lead measure (deep work hours/week) needed to achieve it.',
    },
    quiz: [
      {
        id: 'mm-dw-009-q1',
        question: 'In the 4DX framework, what is the "lead measure" for deep work?',
        options: [
          'Number of projects completed',
          'Hours of deep work per day/week',
          'Revenue generated',
          'Emails responded to'
        ],
        correctAnswer: 1,
        explanation: 'Lead measures are the behaviors you control that drive results. For deep work, the lead measure is hours of deep work, which you can directly control and track.'
      }
    ]
  },
  {
    id: 'mm-dw-010',
    title: 'Quitting Social Media - The Network Effect Trap',
    type: 'concept',
    duration: 12,
    xpReward: 100,
    content: {
      overview: 'Examine the true costs and benefits of social media through the lens of deep work, and learn how to escape the "fear of missing out" trap.',
      mainContent: `**The Network Effect Trap**

Social media companies understand something powerful: the more people who use their platform, the more valuable it becomes for each user. This creates pressure to participate.

> "If everyone's on Twitter, I need to be on Twitter too."

**The Hidden Costs:**

While you calculate benefits ("I might miss opportunities!"), you ignore costs:

1. **Attention fragmentation** - Constant checking trains distraction
2. **Time sink** - Average user spends 2+ hours daily on social media
3. **Comparison anxiety** - Curated lives create envy
4. **Shallow connection illusion** - Many "friends," few real relationships
5. **Algorithmic manipulation** - Designed to maximize engagement, not your wellbeing

**The "Any-Benefit" Fallacy Revisited:**

People defend social media by identifying any possible benefit:
- "I might miss an important news story"
- "I found a job lead once"
- "It's how I stay connected with old friends"

But would you hire a personal assistant who occasionally provided useful information but also:
- Interrupted you every 15 minutes
- Made you feel bad about yourself daily
- Wasted 2 hours of your time per day

You'd fire them immediately.

**Newport's Experiment:**

Try quitting social media for 30 days. Don't announce it (that's just seeking attention). Just... stop.

After 30 days, ask:
1. Did anyone notice?
2. Did I miss anything truly important?
3. Was my life better or worse?

**Common Findings:**

Most people discover:
- Almost no one noticed their absence
- They missed nothing of genuine importance
- Their capacity for deep work dramatically improved
- They had more time for meaningful activities

**The "But My Job Requires It" Objection:**

For most people, this isn't true. You think it's required because:
- Everyone else does it
- You might miss something
- It feels like work (but it's not)

*Ask: Would my employer fire me if I quit social media? If not, it's not required.*

**A More Nuanced Approach:**

If complete elimination feels extreme:
1. Use the Craftsman Approach (evaluate each platform rigorously)
2. Set strict time limits (30 minutes/day max)
3. Remove from phone (access only via desktop)
4. Schedule specific times (no constant checking)

**The Deeper Truth:**

Social media provides the illusion of connection and productivity while delivering fragmented attention and wasted time. Deep work requires the opposite.`,
      keyTakeaway: 'Social media provides marginal benefits at massive attention costs. Apply the Craftsman Approach: unless a platform substantially serves your core goals, eliminate it.',
      actionItem: 'Calculate your actual social media usage this week using screen time tools. Compare the hours spent versus genuine value received.',
    },
    quiz: [
      {
        id: 'mm-dw-010-q1',
        question: 'What does Newport suggest for evaluating whether to keep a social media platform?',
        options: [
          'Keep it if it provides any possible benefit',
          'Keep it only if its benefits substantially outweigh its costs to your core goals',
          'Keep all platforms because networking is essential',
          'Only use platforms your employer recommends'
        ],
        correctAnswer: 1,
        explanation: 'Newport advocates the Craftsman Approach: keep a tool only if its positive impacts on your core life goals substantially outweigh its negative impacts.'
      }
    ]
  },
  {
    id: 'mm-dw-011',
    title: 'Drain the Shallows - Scheduling Every Minute',
    type: 'concept',
    duration: 10,
    xpReward: 100,
    content: {
      overview: 'Learn to identify, quantify, and ruthlessly minimize shallow work so that deep work can expand to fill your professional life.',
      mainContent: `**The Shallow Work Problem**

Shallow work is seductive because it's:
- Easy (requires little cognitive effort)
- Visible (looks like you're being productive)
- Expected (culture rewards "responsiveness")

But shallow work is a trap. It fills your day without moving you forward.

**Identifying Shallow Work:**

Ask this question about each task:

> "How long would it take (in months) to train a smart recent college graduate with no specialized training in my field to complete this task?"

If the answer is less than a few months, the task is probably shallow.

**Examples:**

| Task | Training Time | Classification |
|------|---------------|----------------|
| Responding to routine emails | Days | Shallow |
| Filling out expense reports | Hours | Shallow |
| Attending status meetings | Weeks | Shallow |
| Writing original research | Years | Deep |
| Designing complex systems | Years | Deep |
| Strategic planning | Months-Years | Deep |

**The Quantification:**

Track your shallow work percentage for one week:
- Record time spent on each task category
- Calculate: Shallow hours / Total hours = Shallow %

Most knowledge workers discover they're at 60-80% shallow.

**The Target:**

Newport suggests aiming for 30-50% shallow work maximum, depending on your role. This means:
- 4-hour workday = 2 hours deep, 2 hours shallow
- 8-hour workday = 4 hours deep, 4 hours shallow

**Draining Strategies:**

**1. Schedule shallow work**
Give shallow work its own time blocks. Don't let it leak into the whole day.

**2. Batch processing**
Handle similar shallow tasks together (all emails at once, all expense reports together).

**3. Reduce obligations**
Say no to meetings, committees, and tasks that add shallow work without commensurate value.

**4. Automate or delegate**
Systematize repetitive tasks. Use templates. Delegate where possible.

**5. Set response expectations**
Train colleagues that you don't respond instantly. This reduces interruptions.

**The Shallow-to-Deep Ratio Conversation:**

If you have a boss, have this conversation:

> "What ratio of shallow to deep work do you want me to maintain? If I'm spending X% on shallow work, are you comfortable with that?"

This makes the trade-off explicit and often reveals that your organization values deep work more than the culture suggests.

**The Goal:**

Shallow work will never be zero. But it can be minimized and contained, freeing time and attention for the deep work that actually matters.`,
      keyTakeaway: 'Quantify your shallow work percentage and work to reduce it below 50%. Schedule, batch, and contain shallow work so deep work can expand.',
      actionItem: 'For each task you do today, ask: "How long to train someone to do this?" Categorize and calculate your shallow work percentage.',
    },
    quiz: [
      {
        id: 'mm-dw-011-q1',
        question: 'How does Newport suggest you identify if a task is shallow work?',
        options: [
          'If it takes less than an hour to complete',
          'If it could be done by a trained college graduate in a few months',
          'If it does not require a computer',
          'If it is not creative work'
        ],
        correctAnswer: 1,
        explanation: 'Newport suggests asking how long it would take to train a smart recent college graduate to do the task. If the answer is less than a few months, the task is likely shallow.'
      }
    ]
  },
  {
    id: 'mm-dw-012',
    title: 'Fixed-Schedule Productivity',
    type: 'concept',
    duration: 10,
    xpReward: 100,
    content: {
      overview: 'Discover the counterintuitive approach of fixing your work hours first and then fitting your work into that container, dramatically increasing productivity.',
      mainContent: `**The Conventional Approach:**

Most people work like this:
1. Look at all the work to be done
2. Work until it's done (or exhaustion hits)
3. Repeat

This leads to:
- Expanding workweeks (50, 60, 70 hours)
- Blurred work/life boundaries
- Decreasing productivity per hour
- Burnout

**Fixed-Schedule Productivity:**

Newport proposes inverting the equation:

> "Fix the hours you want to work, then work backwards to find strategies that allow you to satisfy your obligations within those hours."

**Example: The 5:30 PM Rule**

Commit to ending work at 5:30 PM every day, no exceptions.

Now you must:
- Ruthlessly prioritize
- Protect deep work time
- Say no to low-value commitments
- Work with intensity during work hours

**Why This Works:**

**Parkinson's Law:** "Work expands to fill the time available for its completion."

When you have unlimited time, work expands infinitely. When time is fixed, you're forced to be efficient.

**The Productivity Paradox:**

People with fixed schedules often produce MORE than those who work longer hours because:
- Constraints breed creativity
- Deadlines create urgency
- Rest enables sustained performance
- Focus replaces busyness

**Implementation:**

**1. Choose Your Finish Time**
Pick a reasonable end time (e.g., 5:30 PM). This becomes non-negotiable.

**2. Work Backwards**
What must be true for you to accomplish your obligations by that time?
- Fewer meetings?
- Less email?
- More deep work?

**3. Say No**
The fixed schedule gives you a reason to decline requests:
> "I'd love to help, but I have a hard stop at 5:30 and my schedule is full. Could we find another way?"

**4. Protect Deep Work**
Deep work is now precious. Guard it accordingly.

**5. Increase Intensity**
Work with urgency during work hours. No social media. No long coffee breaks. Just focused work.

**Newport's Personal Practice:**

Newport is a professor who publishes multiple books and papers while:
- Rarely working past 5:30 PM
- Never working weekends
- Maintaining a rich family life

The fixed schedule forced him to develop systems for intense productivity during work hours.

**The Mindset Shift:**

From: "I'll work until it's done"
To: "I'll find a way to get it done by 5:30"

This small shift transforms how you approach every workday.`,
      keyTakeaway: 'Fix your work hours first, then find ways to meet obligations within that container. Constraints force efficiency, creativity, and ruthless prioritization.',
      actionItem: 'Commit to a fixed end time for the next week. When that time arrives, stop - no matter what. Observe how this changes your work behavior.',
    },
    quiz: [
      {
        id: 'mm-dw-012-q1',
        question: 'What is the core principle of Fixed-Schedule Productivity?',
        options: [
          'Work as many hours as needed until everything is done',
          'Fix your work hours first, then fit work into that container',
          'Schedule only deep work and ignore shallow tasks',
          'Work in 4-hour blocks with long breaks'
        ],
        correctAnswer: 1,
        explanation: 'Fixed-Schedule Productivity means setting firm work hours first, then working backwards to find strategies that allow you to meet obligations within those fixed hours.'
      }
    ]
  },
  {
    id: 'mm-dw-013',
    title: 'Productive Meditation - Walking Problem Solving',
    type: 'concept',
    duration: 10,
    xpReward: 100,
    content: {
      overview: 'Learn to use periods of physical activity as opportunities for focused thinking, turning commutes and walks into deep work sessions.',
      mainContent: `**What Is Productive Meditation?**

> "The goal of productive meditation is to take a period in which you're occupied physically but not mentally - walking, jogging, driving, showering - and focus your attention on a single well-defined professional problem."

**The Benefits:**

1. **Additional deep thinking time** - Converts "dead" time into productive time
2. **Trains concentration** - Strengthens your ability to hold focus on one problem
3. **Generates insights** - Physical movement often unlocks creative solutions
4. **Builds focus stamina** - Each session is like a workout for your attention

**The Technique:**

**Step 1: Choose Your Problem**
Before you begin, identify a specific problem to work on. It should be:
- Well-defined (not vague)
- Professionally important
- Solvable through thinking (not requiring research)

*Example:* "What's the best way to structure chapter 3 of my book?"

**Step 2: Begin Physical Activity**
Start walking, jogging, driving, or whatever activity occupies your body.

**Step 3: Focus on the Problem**
Direct your full attention to the problem. When your mind wanders (it will), gently return it to the problem.

**Step 4: Work Through Systematically**
- Identify the relevant variables
- Consider possible approaches
- Evaluate each approach
- Reach a conclusion or next step

**Step 5: Capture Insights**
When you finish, immediately record your conclusions.

**Common Pitfalls:**

**1. Looping**
Your mind keeps circling the same ground without progress. When this happens, push yourself to identify the next variable or consider a new approach.

**2. Distraction**
Your attention drifts to other topics. This is normal. Gently return to the problem each time.

**3. Vague Problems**
If your problem isn't specific enough, you'll have nothing concrete to think about. Define the problem precisely before beginning.

**Building the Practice:**

Start with:
- 2-3 sessions per week
- 15-30 minutes each
- Low-intensity physical activity (walking is ideal)

Progress to:
- Daily practice
- Longer sessions
- More complex problems

**The Meta-Benefit:**

Regular productive meditation trains a skill that transfers to all deep work: the ability to hold one topic in your mind and make progress on it, even when your brain wants to wander.

**Example Problems for Productive Meditation:**

- How should I approach this difficult conversation?
- What's the key insight for my presentation?
- How can I restructure this process to be more efficient?
- What's the next step in solving this technical problem?`,
      keyTakeaway: 'Productive meditation converts physical activity time into deep thinking time while training your concentration. Start with walking and a single well-defined problem.',
      actionItem: 'During your next walk or commute, practice productive meditation on one specific professional problem. Record insights immediately afterward.',
    },
    quiz: [
      {
        id: 'mm-dw-013-q1',
        question: 'What is the purpose of productive meditation?',
        options: [
          'To reduce stress through mindfulness',
          'To focus on a professional problem during physical activity that occupies your body but not your mind',
          'To meditate while working at your desk',
          'To replace all traditional meditation practices'
        ],
        correctAnswer: 1,
        explanation: 'Productive meditation uses physical activities like walking to focus on a specific professional problem, converting "dead" time into deep thinking time.'
      }
    ]
  },
  {
    id: 'mm-dw-014',
    title: 'The Grand Gesture - Environmental Leverage',
    type: 'concept',
    duration: 10,
    xpReward: 100,
    content: {
      overview: 'Learn how making a significant commitment or changing your environment can inject a surge of motivation and focus into your deep work.',
      mainContent: `**The Psychology of Grand Gestures**

Sometimes, routine isn't enough. You need something dramatic to overcome resistance and signal to your brain: "This matters."

> "By leveraging a radical change to your normal environment, coupled with a significant investment of effort or money, all dedicated toward supporting a deep work task, you increase the perceived importance of the task. This boost in importance reduces your mind's instinct to procrastinate."

**Historical Examples:**

**J.K. Rowling**
To finish "The Deathly Hallows," Rowling checked into a suite at the Balmoral Hotel in Edinburgh. The change of environment and significant expense forced her to treat the writing as the important work it was.

**Bill Gates**
Gates was famous for his "Think Weeks" - twice a year, he would isolate himself in a cabin, disconnected from the world, to read and think deeply about the future of Microsoft.

**Peter Shankman**
To write his book, Shankman bought a round-trip business class ticket to Tokyo. He wrote the entire flight there, then immediately flew back. The radical environment change and significant cost made deep focus inevitable.

**Why Grand Gestures Work:**

1. **Commitment escalation** - The investment raises the stakes
2. **Environmental novelty** - New surroundings break old patterns
3. **Signal to self** - You're telling yourself this matters
4. **Reduced willpower requirements** - The environment does the work

**Creating Your Grand Gesture:**

You don't need to fly to Tokyo or rent a castle. Consider:

**Medium gestures:**
- Booking a hotel room for a writing weekend
- Renting a cabin for a creative retreat
- Working from a different city for a week
- A full-day offsite at a library or coworking space

**Small gestures:**
- Working from a coffee shop with no WiFi
- A "focus day" with phone locked away
- A dedicated room set up only for deep work
- Waking up at 4 AM for a distraction-free start

**When to Use Grand Gestures:**

- Starting a major project
- Overcoming a creative block
- Meeting a critical deadline
- Doing work that feels intimidating

**The Key Elements:**

1. **Environmental change** - Somewhere different from your normal work space
2. **Investment** - Money, time, or effort that raises the stakes
3. **Dedication** - The gesture is specifically for the deep work task
4. **Limited duration** - Intensive but temporary

**The Insight:**

Your brain is constantly evaluating whether tasks are worth the effort. A grand gesture shifts that calculation dramatically, making deep focus feel not just possible but necessary.`,
      keyTakeaway: 'Grand gestures - significant environmental changes or investments dedicated to deep work - can provide the motivational boost needed to overcome resistance to challenging work.',
      actionItem: 'Plan one "grand gesture" for an important project: book a hotel room, schedule a cabin weekend, or create another significant commitment to deep work.',
    },
    quiz: [
      {
        id: 'mm-dw-014-q1',
        question: 'Why do grand gestures boost deep work effectiveness?',
        options: [
          'They provide better WiFi connections',
          'They increase perceived importance of the task, reducing procrastination',
          'They allow for longer work hours',
          'They make work more comfortable'
        ],
        correctAnswer: 1,
        explanation: 'Grand gestures work because the significant investment (time, money, environmental change) signals to your brain that this task matters, reducing procrastination instincts.'
      }
    ]
  },
  {
    id: 'mm-dw-015',
    title: 'Becoming Hard to Reach - Email Strategies',
    type: 'concept',
    duration: 12,
    xpReward: 100,
    content: {
      overview: 'Master strategies for managing email and communication that protect your deep work time while maintaining professional relationships.',
      mainContent: `**The Email Problem**

Email is one of the greatest threats to deep work:
- Average professional checks email every 6 minutes
- Each check creates attention residue
- The expectation of quick response creates anxiety
- Most emails add little value but consume significant time

**Strategy #1: Make People Work to Reach You**

Create friction for incoming messages:

**The "Process-Centric" Response:**

Instead of:
> "Sure, let's meet sometime to discuss."

Write:
> "I'd be happy to meet. I'm available Tuesday or Thursday between 2-4 PM. Let me know which works for you, and I'll send a calendar invite with a Zoom link."

This closes the loop. One email instead of 10.

**The Sender Filter:**

Make it clear what kind of messages you want:
> "I read every message, but I may not respond if action isn't required. Please include 'Action Required' in the subject if you need a response."

**Strategy #2: Don't Respond**

This feels rude, but Newport argues many emails don't require response:

- Messages that are vague or open-ended
- Requests that would benefit the sender more than you
- "Just following up" on things you intentionally ignored
- Messages where your response wouldn't matter much

**The Professorial E-mail Sorting:**

Ask: "What's the worst that happens if I don't respond?"

Often, the answer is: nothing important.

**Strategy #3: Process Email in Batches**

Check email at scheduled times only:
- Morning (e.g., 9:00 AM)
- Midday (e.g., 1:00 PM)
- End of day (e.g., 4:30 PM)

Between these times, email is closed. Completely.

**Strategy #4: Set Expectations**

Add to your email signature:
> "I check email twice daily. For urgent matters, please call/text."

Or set an auto-responder explaining your communication style.

**Strategy #5: The Project-Based Approach**

For collaborative projects, replace endless email chains with:
- Shared documents with comments
- Scheduled check-in calls
- Project management tools
- Clear decision-making processes

**The Mindset Shift:**

From: "I must respond to everything quickly"
To: "My time is valuable, and deep work matters more than email speed"

**Common Objections:**

**"But my job requires quick responses!"**
Does it really? Or is that just the culture you've accepted? Many high performers are known for slow email and remain successful.

**"People will think I'm rude."**
Set expectations and be consistent. People adapt quickly to your communication style.

**"I'll miss something important!"**
Truly urgent matters rarely come via email. They come via phone calls or in person.

**The Goal:**

Email should be a tool you control, not a force that controls you. Becoming "hard to reach" doesn't mean being unresponsive - it means being intentional about where your attention goes.`,
      keyTakeaway: 'Become intentionally hard to reach: batch email processing, make senders work to engage you, set expectations, and remember that most emails do not require response.',
      actionItem: 'Implement one email strategy today: add an expectation-setting signature, schedule email batches, or practice the "process-centric" response style.',
    },
    quiz: [
      {
        id: 'mm-dw-015-q1',
        question: 'What is a "process-centric" email response?',
        options: [
          'An automated response',
          'A response that closes the loop by providing all needed information in one message',
          'A response that delegates the task to someone else',
          'A response that asks for more information'
        ],
        correctAnswer: 1,
        explanation: 'A process-centric response provides all needed information to close the loop in one message, reducing back-and-forth email chains that drain time and attention.'
      },
      {
        id: 'mm-dw-015-q2',
        question: 'According to Newport, what should you ask before responding to an email?',
        options: [
          'Is this from my boss?',
          'Is this marked as urgent?',
          'What is the worst that happens if I do not respond?',
          'How long will the response take to write?'
        ],
        correctAnswer: 2,
        explanation: 'Newport suggests asking what happens if you do not respond. Often, the answer is nothing important, meaning many emails do not require response at all.'
      }
    ]
  }
];

export default deepWorkLessons;
