import type { PathwayLesson } from "@/types";

export const prodLessonsLevel1: PathwayLesson[] = [
  {
    id: "prod-001",
    title: "The Productivity Paradox",
    type: "intro",
    duration: 10,
    xpReward: 100,
    content: {
      overview: "Discover why working harder often makes you less productive—and what actually drives meaningful output.",
      mainContent: `## The Hamster Wheel Trap

You're answering emails at 11 PM. Your task list grows faster than you can check items off. You feel busy, exhausted, and somehow still behind. **You're confusing motion with progress**.

This is the productivity paradox: more activity doesn't equal more achievement. As Peter Drucker observed, "There is nothing so useless as doing efficiently that which should not be done at all."

## Effectiveness vs. Efficiency

**Efficiency** - Doing things right
- How fast you process email
- How many tasks you complete
- How optimized your workflow is

**Effectiveness** - Doing the right things
- Which emails deserve responses
- Which tasks actually matter
- Which work moves the needle

Tim Ferriss's 80/20 analysis revealed that 80% of his business revenue came from 20% of his customers. He cut the other 80% of customers, despite them consuming 95% of his time. **Revenue increased while work decreased**.

## The Four Pillars of Productivity Systems

**Capture** - Get everything out of your head
- Unfinished tasks consume mental energy even when you're not working on them
- David Allen's GTD: "Your mind is for having ideas, not holding them"
- Every open loop (unfinished task, unanswered question, pending decision) drains focus

**Clarify** - What does this actually require?
- Most "tasks" are actually projects with multiple steps
- "Plan vacation" isn't a task; "Book flights" is a task
- Define next physical action for everything

**Organize** - Create trusted systems
- If you don't trust your system, your brain won't let go
- Context-based organization (calls, computer, errands, waiting for)
- Time-based organization (today, this week, someday/maybe)

**Execute** - Do the work that matters
- Not everything is equally important
- Energy management beats time management
- Deep work on high-leverage tasks during peak hours

> "The key is not to prioritize what's on your schedule, but to schedule your priorities." — Stephen Covey`,
      keyTakeaway: "True productivity comes from ruthlessly focusing on high-leverage work while building systems that handle everything else efficiently.",
      actionItem: "Track your time tomorrow in 30-minute blocks. At day's end, label each block: High-leverage work, Necessary admin, or Low-value distraction. Calculate percentages."
    }
  },
  {
    id: "prod-002",
    title: "Getting Things Done: The Complete System",
    type: "concept",
    duration: 13,
    xpReward: 100,
    content: {
      overview: "Master David Allen's GTD methodology—the productivity system that handles complexity without stress.",
      mainContent: `## The Mind Like Water Principle

David Allen's GTD begins with a martial arts concept: "mind like water." Throw a pebble in a pond—the water responds appropriately, then returns to calm. Throw a boulder—bigger response, then calm again.

Your mind should work the same way: **respond appropriately to demands, then return to clarity**.

Most people's minds are more like churning rapids—constant turbulence from unprocessed commitments.

## The Five-Step GTD Workflow

**1. Capture**
- Use ONE inbox per input type (physical, email, ideas, etc.)
- Empty your head completely in a "mind sweep"
- Capture everything from "fix squeaky door" to "write novel"

**2. Clarify**
- Is it actionable?
  - **No** → Trash, reference, or someday/maybe
  - **Yes** → Continue...
- What's the next physical action?
- Will it take less than 2 minutes?
  - **Yes** → Do it now
  - **No** → Delegate or defer

**3. Organize**
- **Projects** - Anything requiring 2+ actions (keep list of desired outcomes)
- **Next Actions** - Organized by context (@computer, @calls, @errands)
- **Waiting For** - Delegated items requiring follow-up
- **Calendar** - Only time-specific commitments (appointments, deadlines)
- **Someday/Maybe** - Ideas you're not committed to yet

**4. Reflect**
- **Daily** - Review calendar and next actions
- **Weekly** - Complete weekly review (process inboxes, review projects, update lists)

**5. Engage**
- Choose based on context (where you are)
- Choose based on time available
- Choose based on energy available
- Choose based on priority

## The Weekly Review: Non-Negotiable

This is GTD's secret weapon. Every week:
1. ✓ Clear all inboxes to zero
2. ✓ Review calendar for past week and upcoming 2 weeks
3. ✓ Review all projects—is there a next action for each?
4. ✓ Review next actions lists
5. ✓ Review waiting-for list
6. ✓ Review someday/maybe for anything to activate

This ritual creates **trusted system integrity**. Your brain releases control because it knows nothing falls through cracks.

## Common GTD Mistakes

**Not truly defining next actions** - "Plan vacation" isn't a next action; "Search Kayak for flights to Barcelona" is

**Calendar as task list** - Calendar is for time-specific items only. Tasks go on next actions lists

**Skipping weekly review** - The system collapses without this ritual

**Too many contexts** - Start simple (@computer, @calls, @errands, @home, @office)

> "You can do anything, but not everything." — David Allen`,
      keyTakeaway: "GTD provides the complete system for managing complexity: capture everything, clarify rigorously, organize systematically, review weekly, execute with confidence.",
      actionItem: "Do a complete mind sweep: spend 30 minutes writing down every commitment, project, and idea in your head. Don't organize yet—just capture everything.",
      quiz: {
        question: "In the GTD methodology, what is the two-minute rule?",
        options: [
          "If an action takes less than two minutes, do it immediately rather than organizing it",
          "Review your task list for two minutes every hour",
          "Spend only two minutes per email response",
          "Take a two-minute break between tasks"
        ],
        correct: 0,
        explanation: "The two-minute rule states that if an actionable item takes less than two minutes to complete, you should do it immediately rather than adding it to a list. This is more efficient than the overhead of organizing, tracking, and later re-engaging with the task."
      }
    }
  },
  {
    id: "prod-003",
    title: "Time Blocking: The Calendar Revolution",
    type: "concept",
    duration: 11,
    xpReward: 100,
    content: {
      overview: "Transform your calendar from meeting tracker into strategic productivity weapon.",
      mainContent: `## The Default Schedule Trap

Most knowledge workers have two states:
1. **Meetings** - Where their calendar controls them
2. **Reactive work** - Where email, Slack, and interruptions control them

Result? **Important deep work gets perpetually postponed** for "when I have time."

Cal Newport's solution: **Treat your attention like money**. You wouldn't spend money without a budget. Why spend time without one?

## Time Blocking Fundamentals

**Block EVERYTHING on your calendar** - Not just meetings, but:
- Deep work blocks (2-4 hours, no interruptions)
- Shallow work blocks (admin, email, meetings)
- Personal time (exercise, lunch, breaks)
- Buffer blocks (flexibility for overruns)

**Why it works:**
- Parkinson's Law: "Work expands to fill the time available." Fixed blocks create healthy constraint
- Prevents the planning fallacy (underestimating task duration)
- Makes trade-offs explicit—choosing one block means not choosing another

## The Ideal Week Template

**Monday Morning** - Strategic planning (2 hours)
- Review goals
- Plan week
- Identify top priorities

**Deep Work Blocks** - 2-4 hour chunks, 3-4 days per week
- No email, Slack, or phone
- Single focus
- Peak energy hours (typically mornings)

**Batching Blocks** - Group similar tasks
- All meetings in Tuesday/Thursday afternoons
- Email processing: 30 min blocks, 3x daily
- Admin work: Friday afternoons

**Recovery Blocks** - Protected non-work time
- Exercise
- Learning
- Relationships
- Sleep (7-9 hours, blocked!)

## The Shutdown Ritual

At day's end, Cal Newport performs a shutdown ritual:
1. Check email one final time
2. Transfer incomplete items to tomorrow's blocks
3. Review tomorrow's calendar
4. Say out loud: "Shutdown complete"

This **psychological closure** prevents evening work anxiety and maintains work-life boundaries.

## Handling Interruptions

**Scheduled office hours** - "I'm available 2-3 PM daily for quick questions"

**Auto-responders** - "I check email 10 AM, 2 PM, 5 PM. Urgent? Call me."

**Block negotiation** - Someone wants your deep work block? "I can do Tuesday at 2 PM or Thursday at 10 AM, which works?"

> "The bad news is time flies. The good news is you're the pilot." — Michael Altshuler`,
      keyTakeaway: "Time blocking transforms productivity from reactive fire-fighting to intentional execution by treating attention as a scarce resource requiring budgeting.",
      actionItem: "Design your ideal week template. Block all recurring activities first (meetings, deep work, exercise, sleep). Leave 20% unscheduled for flexibility and unexpected items.",
      quiz: {
        question: "What is Parkinson's Law, and how does time blocking leverage it?",
        options: [
          "Work expands to fill available time; fixed blocks create healthy constraints that prevent expansion",
          "People procrastinate until deadlines; blocking creates artificial deadlines",
          "Multitasking reduces productivity; blocking prevents task-switching",
          "Urgent tasks crowd out important ones; blocking protects important work"
        ],
        correct: 0,
        explanation: "Parkinson's Law states that work expands to fill the time allocated for it. Time blocking leverages this by creating fixed containers for tasks, preventing the natural expansion that occurs with unlimited time. A 1-hour block forces focus that an open-ended 'finish this today' doesn't."
      }
    }
  },
  {
    id: "prod-004",
    title: "Energy Management: The Hidden Variable",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "Stop managing time and start managing energy—the true limiting factor in peak performance.",
      mainContent: `## The Energy Myth

You have a meeting at 9 AM and another at 4 PM. Same duration, same topic, same people. Why is one so much harder?

**Energy levels fluctuate dramatically throughout the day**. Time management assumes every hour is equal. It's not.

Tony Schwartz and Jim Loehr's research with athletes revealed that **energy, not time, is the fundamental currency of high performance**.

## The Four Energy Dimensions

**Physical Energy** - The foundation
- Sleep (7-9 hours, non-negotiable)
- Movement (breaks every 90 minutes)
- Nutrition (protein + complex carbs for stable blood sugar)
- Hydration (mild dehydration reduces cognitive performance 10-15%)

**Emotional Energy** - Quality of experience
- Positive energy: enthusiastic, challenged, joyful
- Negative energy: defensive, resentful, anxious
- Recovery rituals that trigger positive emotions

**Mental Energy** - Focus and concentration
- Single-tasking vs. multitasking (40% productivity loss from task switching)
- Strategic renewal (walking meetings, meditation, nature breaks)
- Deep work requires mental energy reserves

**Spiritual Energy** - Purpose and meaning
- Alignment with values
- Work that matters
- Contributing to something larger

## The Ultradian Rhythm

Your body operates on 90-120 minute cycles (ultradian rhythms):
- **First 90 min**: Peak focus and energy
- **Next 20 min**: Natural dip, need for recovery

Elite performers work WITH this rhythm:
- Sprint for 90 minutes (deep work)
- Recover for 15-20 minutes (walk, stretch, disconnect)
- Repeat

Amateur approach: Push through fatigue with caffeine and willpower. Result: burnout and declining returns.

## Energy Audit Exercise

Track for one week:

**Peak Energy** - When are you most alert and focused?
- Most people: 2-4 hours after waking
- Schedule hardest cognitive work here
- Protect these hours ruthlessly

**Dip Energy** - When do you hit walls?
- Mid-afternoon is common (2-4 PM)
- Schedule meetings, admin work, or take a break
- Don't fight biology with willpower

**Second Wind** - Secondary peak?
- Some people get 5-7 PM boost
- Use for moderate-difficulty work or learning

## Renewal Rituals

**Micro-renewals** (1-5 min every 90 min)
- Deep breathing
- Stand and stretch
- Walk around block
- Social connection

**Macro-renewals** (weekly/monthly)
- True sabbath (24 hours completely unplugged)
- Vacation (minimum 1 week, 2-3x yearly)
- Quarterly reflection retreats

The paradox: **Strategic recovery isn't the opposite of productivity—it's the foundation**.

> "Rest and recovery are as important as activity. In fact, they are not the opposites of each other; they are two sides of the same coin." — Jim Loehr`,
      keyTakeaway: "Managing energy across physical, emotional, mental, and spiritual dimensions produces far greater results than simply managing time.",
      actionItem: "Conduct a one-week energy audit. Note your energy level (1-10) every hour. Identify your consistent peak and dip times. Redesign your schedule accordingly."
    }
  },
  {
    id: "prod-005",
    title: "Deep Work: The Superpower of Focus",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "Master the increasingly rare ability to focus without distraction on cognitively demanding tasks.",
      mainContent: `## The Focus Crisis

Microsoft research found that after an interruption, it takes an average of **23 minutes to return to the original task**. Meanwhile, knowledge workers are interrupted every 3-5 minutes.

Do the math: Most people never actually focus.

Cal Newport defines **deep work** as "professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to their limit."

The opposite—**shallow work**—is non-cognitively demanding tasks performed while distracted. Email, meetings about meetings, administrative overhead.

## Why Deep Work Matters

**Economic Value** - In a knowledge economy, your value comes from:
1. Ability to master hard things quickly
2. Ability to produce at elite level

Both require deep work.

**Scarcity** - As open offices, Slack, and always-on culture become standard, deep work becomes rarer—and therefore more valuable

**Meaning** - Flow states (what happens during deep work) are when humans report highest satisfaction

## The Four Deep Work Philosophies

**Monastic** - Eliminate shallow obligations entirely
- Example: Neal Stephenson (author) has no email address
- Best for: Writers, researchers, academics
- Unrealistic for: Most knowledge workers

**Bimodal** - Dedicate clear stretches to deep work
- Example: 4-day deep work retreat per month
- Minimum unit: One full day
- Balance between monastic and realistic

**Rhythmic** - Daily deep work habit
- Example: 5-6 AM every morning, no exceptions
- Most sustainable for regular employment
- "The chain method"—don't break the streak

**Journalistic** - Deep work whenever gaps appear
- Example: Walter Isaacson writing between interviews
- Requires well-trained focus muscle
- Hardest philosophy to execute

## Building Your Deep Work Practice

**Start Small** - Don't begin with 4-hour blocks
- Week 1: 30 minutes daily
- Week 2: 45 minutes daily
- Week 3: 60 minutes daily
- Scale gradually to 2-4 hour blocks

**Create Rituals**
- Same time/place signals "deep work mode" to your brain
- Prep ritual (coffee, close door, airplane mode)
- Shutdown ritual (signals end, prevents guilt)

**Measure Depth** - Track hours of deep work weekly
- Target: 20-25 hours/week at peak capacity
- Most knowledge workers: 5-10 hours/week currently
- Even 15 hours/week puts you in top 10%

**Embrace Boredom** - The ability to focus is a muscle
- Don't reach for phone in line at store
- Tolerate boredom without digital pacifier
- Practice attention control constantly

> "The ability to perform deep work is becoming increasingly rare at exactly the same time it is becoming increasingly valuable." — Cal Newport`,
      keyTakeaway: "Deep work—focused, distraction-free concentration on cognitively demanding tasks—is the superpower of the knowledge economy, producing exceptional results in less time.",
      actionItem: "Schedule one 90-minute deep work block tomorrow. Eliminate all distractions: phone off, notifications disabled, door closed. Track what you accomplish versus typical working time.",
      quiz: {
        question: "According to Cal Newport, what defines deep work?",
        options: [
          "Professional activities in distraction-free concentration that push cognitive limits",
          "Working long hours to complete difficult projects",
          "Any important work that advances career goals",
          "Tasks requiring specialized expertise or credentials"
        ],
        correct: 0,
        explanation: "Deep work is specifically defined as professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to their limit. It's not just about difficulty or importance, but about sustained, undistracted focus on cognitively demanding work."
      }
    }
  },
  {
    id: "prod-006",
    title: "Workflow Automation: Systems Over Willpower",
    type: "exercise",
    duration: 11,
    xpReward: 100,
    content: {
      overview: "Build automated systems that make productivity the path of least resistance.",
      mainContent: `## The Willpower Myth

You can't rely on motivation. As Jocko Willink says, "Discipline equals freedom." But even discipline is a limited resource.

The solution? **Systems that automate good decisions**.

James Clear: "You do not rise to the level of your goals. You fall to the level of your systems."

## The Automation Pyramid

**Level 1: Decision Automation** - Eliminate choices
- Obama wore the same suit daily—one less decision
- Steve Jobs: Black turtleneck, jeans, New Balance
- You: Standard breakfast, workout time, evening routine

**Level 2: Process Automation** - Workflows trigger automatically
- Email filters route messages to folders
- Calendar blocks auto-schedule based on templates
- Shopping lists auto-populate based on inventory

**Level 3: Execution Automation** - Tasks complete themselves
- Bills pay automatically
- Reports generate and distribute
- Backups run without thought

## Email: The Workflow Killer

Average knowledge worker: 28% of workday on email (McKinsey study)

**Inbox Zero System:**

1. **Filters** - Auto-categorize incoming mail
   - Newsletters → Read/Review folder
   - Receipts → Finance folder
   - Notifications → Archive (search when needed)

2. **Four D's** - Every email gets ONE action:
   - **Delete** - Irrelevant
   - **Delegate** - Forward with clear request
   - **Defer** - Move to action folder, calendar follow-up
   - **Do** - If under 2 minutes, handle now

3. **Batch Processing** - Check 2-3x daily, not constantly
   - Morning (10 AM): 30 min
   - Afternoon (2 PM): 30 min
   - End of day (5 PM): 20 min

4. **Templates** - Save frequent responses
   - Meeting requests
   - Status updates
   - Common questions

## Information Workflow

**Capture** → **Process** → **Act**

**RSS/Feedly** - News and blogs feed to one place
- Daily 15-minute review
- Save-for-later service (Pocket, Instapaper)
- Tag by project/interest

**Read-later** - Batch reading in dedicated blocks
- Commute time
- Exercise cardio (audiobooks/podcasts)
- Sunday morning ritual

**Note-taking** - Progressive summarization (Tiago Forte)
1. Capture highlights
2. Bold key passages
3. Highlight the highlights
4. Executive summary in own words

**Implementation** - Notes become actions
- Code snippets → personal docs
- Frameworks → templates
- Insights → experiments

## The 5S Workplace Organization

From lean manufacturing, applies to knowledge work:

**Sort** - Remove what doesn't belong
**Set in order** - Everything has a place
**Shine** - Clean and maintain
**Standardize** - Create consistent processes
**Sustain** - Make it a habit

Physical desk AND digital desktop.

> "For every minute spent organizing, an hour is earned." — Benjamin Franklin`,
      keyTakeaway: "Automated workflows remove friction from productive behavior and create friction for distractions, making good work the path of least resistance.",
      actionItem: "Set up three email filters today: one for newsletters, one for receipts, one for notifications. Then switch to checking email only 3x daily for one week. Track the time saved.",
      quiz: {
        question: "What does James Clear mean by 'You fall to the level of your systems'?",
        options: [
          "Your actual behavior is determined by automated processes, not motivation or goals",
          "Poor organizational systems cause productivity to decline",
          "Complex systems are harder to maintain than simple ones",
          "System failures explain most productivity problems"
        ],
        correct: 0,
        explanation: "Clear's point is that motivation and goals are unreliable—you'll ultimately perform at whatever level your systems automate. Good systems make productive behavior automatic; bad systems (or no systems) make you dependent on willpower, which inevitably fails."
      }
    }
  },
  {
    id: "prod-007",
    title: "The Weekly Review: Your Productivity Flywheel",
    type: "exercise",
    duration: 10,
    xpReward: 100,
    content: {
      overview: "Master the single habit that multiplies the effectiveness of every other productivity practice.",
      mainContent: `## The System Integrity Problem

You've built the perfect productivity system. Two weeks later, it's collapsed.

Why? **Systems without maintenance decay**. Entropy is universal.

The weekly review is your defense against chaos—the ritual that keeps everything aligned and current.

## David Allen's Weekly Review Protocol

**Get Clear** (30-45 minutes)
1. ✓ Collect loose papers and materials
2. ✓ Process notes from meetings and events
3. ✓ Empty all inboxes (physical and digital)

**Get Current** (45-60 minutes)
4. ✓ Review previous calendar week
   - Capture actions from completed items
   - Identify open loops
5. ✓ Review upcoming calendar (2-3 weeks)
   - Prep materials needed
   - Block preparation time
6. ✓ Review action lists
   - Mark completed items
   - Delete obsolete actions
7. ✓ Review project list
   - Ensure each project has next action
   - Mark completed projects
   - Archive inactive projects
8. ✓ Review "Waiting For" list
   - Follow up on overdue items
   - Remove completed items

**Get Creative** (15-30 minutes)
9. ✓ Review "Someday/Maybe" list
   - Activate items ready to become projects
   - Delete items no longer relevant
   - Add new ideas
10. ✓ Identify new projects or actions
11. ✓ Review goals and values

## The Reflection Layer

Beyond tactical review, add strategic reflection:

**Wins** - What went well this week?
- Celebrate progress
- Identify patterns of success
- Reinforce effective behaviors

**Lessons** - What didn't work?
- Mistakes and failures
- System breakdowns
- Opportunities for improvement

**Adjustments** - What will you change?
- One process improvement
- One boundary to set
- One experiment to try

## Making It Stick

**Schedule It** - Same time, every week
- Friday afternoon (closure before weekend)
- Sunday evening (preparation for week ahead)
- Non-negotiable calendar block

**Create a Ritual**
- Same location (coffee shop, home office, park)
- Same music or ambiance
- Small reward at completion

**Track the Habit**
- Don't break the chain
- Minimum: 52 reviews per year
- Miss one? Double down next week

## The Compounding Effect

Week 1: Reviews seem tedious
Week 4: Starting to see benefits
Week 12: System feels reliable
Week 26: Can't imagine working without it
Week 52: Productivity autopilot

**The weekly review is what separates people who have systems from people whose systems have them**.

> "We are what we repeatedly do. Excellence, then, is not an act, but a habit." — Aristotle`,
      keyTakeaway: "The weekly review is the keystone habit that maintains system integrity, prevents overwhelm, and enables trusted, stress-free productivity.",
      actionItem: "Schedule your first weekly review. Block 90 minutes. Use the 11-step GTD protocol. At completion, immediately schedule next week's review."
    }
  },
  {
    id: "prod-008",
    title: "Building Your Personal Productivity System",
    type: "reflection",
    duration: 11,
    xpReward: 100,
    content: {
      overview: "Design a personalized productivity system that fits your work, personality, and goals—not someone else's template.",
      mainContent: `## The Anti-Template Manifesto

You've read the productivity books. Tried GTD, time blocking, Pomodoro, and the 5 AM miracle. Nothing sticks.

Here's why: **Productive systems are personal**. What works for a freelance designer won't work for a corporate lawyer. What works for an introvert won't work for an extrovert.

Stop copying systems. Start designing yours.

## The System Design Process

**Step 1: Audit Your Reality**

Track one week in brutal honesty:
- Where does time actually go?
- When are you most/least productive?
- What energizes vs. drains you?
- What's working vs. broken?

**Step 2: Identify Your Constraints**

- **Work structure** - Remote, office, hybrid? Meetings-heavy or solo work?
- **Energy patterns** - Morning or night person? How's your health?
- **Obligations** - Family, caregiving, side projects?
- **Personality** - Do you need structure or flexibility? Variety or routine?

**Step 3: Define Your Goals**

Don't adopt others' definitions of productivity. What does success look like for YOU?

- More deep work hours?
- Better work-life balance?
- Starting a side business?
- Learning new skills?
- Being present with family?

**Step 4: Choose Your Components**

Mix and match from proven systems:

**From GTD:**
- Weekly review ritual
- Trusted capture system
- Context-based action lists

**From Time Blocking:**
- Deep work blocks
- Themed days
- Shutdown ritual

**From Energy Management:**
- Ultradian rhythm work cycles
- Recovery rituals
- Sleep non-negotiable

**From Automation:**
- Email batching
- Decision automation
- Template creation

## The Minimum Viable System

Don't build complexity. Start with:

1. **One trusted inbox** - Physical or digital, where everything gets captured
2. **Weekly review** - 60-90 minutes, same time weekly
3. **Daily planning** - 10 minutes, identify top 3 priorities
4. **One deep work block** - 90-120 minutes, daily if possible

That's it. Master these four before adding complexity.

## The Iteration Cycle

**Monthly Review:**
- What's working? Do more of it.
- What's not working? Fix or eliminate.
- What's missing? Add ONE new component.

**Quarterly Audit:**
- Are goals still relevant?
- Is system aligned with reality?
- Major life changes requiring system redesign?

**Annual Reflection:**
- Did the system serve your actual priorities?
- What were the highest-leverage components?
- What should next year's system look like?

## The Productivity Philosophy

Your system should support your life, not become your life.

**Productivity is not:**
- Doing more for the sake of more
- Optimization to the point of rigidity
- Sacrificing health, relationships, or joy

**Productivity is:**
- Creating space for what matters
- Reducing anxiety through trusted systems
- Achieving meaningful goals sustainably

> "The things which are most important don't always scream the loudest." — Bob Hawke`,
      keyTakeaway: "Effective productivity systems are personally designed based on your reality, constraints, and goals—not copied from someone else's template.",
      actionItem: "Complete a one-week honest audit tracking: time usage, energy levels, what worked, and what didn't. Use this data to design your minimum viable productivity system.",
      quiz: {
        question: "Why do most people fail to maintain productivity systems they learn from books?",
        options: [
          "They copy systems designed for different work structures, personalities, and goals instead of personalizing",
          "They lack the discipline to follow through on commitments",
          "The systems are too complex and time-consuming",
          "They don't read the books carefully enough"
        ],
        correct: 0,
        explanation: "The core problem isn't discipline or complexity—it's misalignment. A system designed for a freelance writer won't work for a corporate manager. Effective systems must be personalized to your actual work structure, energy patterns, constraints, and goals."
      }
    }
  }
];
