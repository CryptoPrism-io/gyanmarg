import type { PathwayLesson } from "@/types";

export const solveLessonsLevel1: PathwayLesson[] = [
  {
    id: "solve-001",
    title: "The Problem-Solving Mindset",
    type: "intro",
    duration: 10,
    xpReward: 100,
    content: {
      overview: "Learn why the best problem solvers see obstacles as puzzles to decode, not walls to crash against.",
      mainContent: `## The Apollo 13 Moment

When an explosion crippled Apollo 13, Mission Control faced an impossible problem: bring three astronauts home alive with a crippled spacecraft. Flight Director Gene Kranz said five words that defined problem-solving excellence: **"Failure is not an option."**

But Kranz didn't mean ignoring reality. He meant systematically working the problem until they found a solution. The team built a CO2 filter adapter using only materials available on the spacecraft—duct tape, plastic bags, and cardboard. It worked.

This is problem-solving at its essence: **creative constraint navigation**.

## The Two Problem-Solving Modes

**Convergent Thinking** - Narrowing down to the single best solution
- Analytical, logical, systematic
- Eliminates possibilities until one remains
- Used in math problems, debugging code, medical diagnosis

**Divergent Thinking** - Generating multiple possible solutions
- Creative, exploratory, non-linear
- Suspends judgment to maximize options
- Used in brainstorming, design, innovation

Amateur problem solvers skip straight to convergent thinking. They grab the first solution that seems plausible. **Experts deliberately separate the two modes**: first diverge widely, then converge rigorously.

## The Problem-Solver's Toolkit

**First Principles Thinking** - Break complex problems into fundamental truths, then rebuild from there. Elon Musk used this when everyone said rocket costs couldn't drop. He asked: "What are rockets made of? Aluminum, titanium, copper—commodities that cost 2% of typical rocket prices. The problem isn't materials; it's manufacturing and reuse."

**Inversion** - Solve from the end backward. Charlie Munger asks: "What would guarantee failure?" then avoids those actions. Easier to avoid stupidity than achieve brilliance.

**Constraint Relaxation** - What if money/time/physics weren't limiting factors? This reveals whether you're solving the real problem or accepting artificial constraints.

> "We cannot solve our problems with the same thinking we used when we created them." — Albert Einstein`,
      keyTakeaway: "Great problem solvers separate divergent exploration from convergent analysis, using first principles and inversion to see what others miss.",
      actionItem: "Take a current problem. Spend 10 minutes in pure divergent mode—generate 20 possible solutions without judging any. Then switch to convergent mode to evaluate."
    }
  },
  {
    id: "solve-002",
    title: "Root Cause Analysis: The 5 Whys",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "Stop treating symptoms and start solving actual problems with Toyota's legendary debugging technique.",
      mainContent: `## The Monument Problem

Washington's monuments were deteriorating rapidly. The first solution: clean them more often. But that accelerated damage. Why?

- **Why are monuments eroding?** Harsh cleaning chemicals
- **Why use harsh chemicals?** Need to remove bird droppings
- **Why so many droppings?** Large bird population
- **Why so many birds?** They eat spiders
- **Why so many spiders?** They eat midges
- **Why so many midges?** They're attracted to lights turned on at dusk

Real solution: Turn lights on later. Problem solved without cleaning chemicals.

This is **root cause analysis**—drilling past symptoms to fundamental causes.

## The 5 Whys Technique

Developed by Sakichi Toyoda, founder of Toyota Industries, this simple method reveals root causes:

1. **State the problem** - "Production line stopped"
2. **Ask why** - "Because machine overheated"
3. **Ask why again** - "Because oil pump failed"
4. **Ask why again** - "Because oil pump shaft wore out"
5. **Ask why again** - "Because no filter, so metal particles damaged shaft"
6. **Ask why again** - "Because no maintenance schedule for filters"

Root cause: Missing maintenance system. Solution: Implement preventive maintenance, not just replace the pump.

## The Ishikawa Fishbone Diagram

For complex problems with multiple potential causes, use the fishbone diagram:

**Main Problem** (fish head) ← **Major Categories** (bones):
- **People** - Training, skills, motivation
- **Process** - Procedures, workflow, handoffs
- **Tools** - Equipment, software, materials
- **Environment** - Workspace, culture, external factors

Map all potential causes in each category, then use 5 Whys to drill into the most likely culprits.

## Avoiding False Root Causes

Common traps:
- **Stopping too early** - "Human error" is never a root cause; ask why the error was possible
- **Blame bias** - Focusing on who rather than what systemic factors allowed failure
- **Confirmation bias** - Finding evidence for your pre-existing theory

The test: If you fix the root cause, does the problem become impossible? If not, keep digging.

> "The formulation of the problem is often more essential than its solution." — Albert Einstein`,
      keyTakeaway: "Root cause analysis transforms firefighting into prevention by drilling past symptoms to systemic causes using structured techniques like 5 Whys.",
      actionItem: "Take a recurring problem at work or home. Apply the 5 Whys technique. Document each level and identify the true root cause you can address.",
      quiz: {
        question: "What is the primary purpose of the 5 Whys technique in problem-solving?",
        options: [
          "To drill past surface symptoms and identify fundamental systemic root causes",
          "To assign blame for problems to specific individuals",
          "To generate creative solutions through repetitive questioning",
          "To document problems for legal compliance purposes"
        ],
        correct: 0,
        explanation: "The 5 Whys technique, developed by Toyota's Sakichi Toyoda, systematically peels back layers of symptoms by repeatedly asking 'why?' until reaching the fundamental cause. This enables solving the actual problem rather than treating symptoms."
      }
    }
  },
  {
    id: "solve-003",
    title: "The Debugging Mindset",
    type: "concept",
    duration: 11,
    xpReward: 100,
    content: {
      overview: "Apply software engineering's systematic approach to debugging any problem in life or work.",
      mainContent: `## The Most Expensive Hyphen in History

In 1962, NASA's Mariner 1 spacecraft veered off course and had to be destroyed. Cost: $18.5 million (equivalent to $150M today). The cause? A missing hyphen in the guidance code.

This disaster birthed systematic debugging practices that now extend far beyond software. The mindset? **Problems are puzzles with discoverable solutions, not random chaos**.

## The Scientific Method of Debugging

**1. Reproduce** - Can you make the problem happen consistently?
- Intermittent problems are harder but still debuggable
- Document exactly what triggers the issue
- "It sometimes fails" becomes "It fails when X, Y, and Z occur together"

**2. Isolate** - Binary search for the source
- Divide the system in half, test which half contains the bug
- Repeat until you've pinpointed the exact component
- Like finding a defective bulb by testing half the string at a time

**3. Hypothesize** - What could cause this specific symptom?
- Generate multiple theories
- List them from most to least likely
- Avoid fixating on your first guess

**4. Test** - Design experiments that prove/disprove each hypothesis
- Change ONE variable at a time
- Document results rigorously
- Failed tests eliminate possibilities—that's progress

**5. Fix** - Implement the solution
- Verify it actually solves the root cause
- Ensure it doesn't create new problems
- Document for future reference

## The Rubber Duck Technique

Programmers keep a rubber duck at their desk. When stuck, they explain the problem out loud to the duck. Often, **articulating the problem reveals the solution**.

Why it works:
- Forces linear thinking instead of circular loops
- Exposes assumptions you're making unconsciously
- Activates different neural pathways than silent contemplation

You don't need an actual duck—a colleague, a journal, or even an imaginary expert works. The key is explaining with enough clarity that a naive listener could understand.

> "If debugging is the process of removing bugs, then programming must be the process of putting them in." — Edsger Dijkstra`,
      keyTakeaway: "The debugging mindset treats every problem as a puzzle with discoverable patterns, using scientific method and systematic isolation to find root causes.",
      actionItem: "Next time you face a confusing problem, try rubber duck debugging. Explain it out loud as if teaching someone who knows nothing about the domain.",
      quiz: {
        question: "Why does the 'rubber duck technique' work for solving complex problems?",
        options: [
          "Explaining the problem out loud forces linear thinking and exposes unconscious assumptions",
          "The duck provides emotional support that reduces stress",
          "Speaking activates brain regions that silent reading doesn't",
          "It's a form of procrastination that allows time for solutions to emerge"
        ],
        correct: 0,
        explanation: "Rubber duck debugging works because articulating a problem clearly enough to explain to a naive listener forces structured thinking, reveals hidden assumptions, and often exposes the solution through the very act of explanation."
      }
    }
  },
  {
    id: "solve-004",
    title: "Pattern Recognition: Seeing What Others Miss",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "Develop the expert ability to recognize patterns across seemingly unrelated domains.",
      mainContent: `## The Semmelweis Insight

In 1847, Dr. Ignaz Semmelweis noticed a pattern: women who gave birth with doctors had far higher mortality rates than those with midwives. The difference? **Doctors came from autopsies without washing hands**.

His solution—mandatory hand-washing—dropped mortality from 18% to 2%. Yet the medical establishment rejected him for decades. Why? **He saw a pattern they couldn't**.

Pattern recognition is the difference between novice and expert problem solvers.

## How Experts See Differently

Gary Klein's research with firefighters, chess masters, and neonatal nurses revealed that experts recognize **meaningful patterns** where novices see chaos.

A chess grandmaster glances at a board and immediately knows if white is winning. Not through calculation—through pattern recognition. They've seen similar configurations thousands of times.

**Chunking** - Experts group information into meaningful patterns:
- Novice sees: "King on e1, rook on f1, bishop on g1..."
- Expert sees: "Kingside castled with fianchetto bishop—defensive formation"

This applies everywhere:
- Experienced doctors diagnose from symptom patterns
- Veteran mechanics identify problems from sound patterns
- Elite coaches recognize strategic patterns in player movements

## Building Your Pattern Library

**Deliberate Exposure** - Actively study diverse examples
- Don't just solve problems; study *how* others solved them
- Analyze failures as deeply as successes
- Compare across domains to find universal patterns

**Pattern Journaling** - Document recurring themes
- "This customer complaint has the same structure as last month's"
- "This technical issue resembles the Y2K problem—date formatting assumptions"
- "This team conflict mirrors the earlier one—unclear role boundaries"

**Cross-Domain Application** - Force analogies between different fields
- How is this software bug like a medical misdiagnosis?
- How is this marketing challenge like a military campaign?
- How is this relationship issue like a negotiation breakdown?

## The TRIZ Framework

Russian engineer Genrich Altshuller analyzed 200,000 patents and found that **most innovations are variations on 40 core patterns**. Examples:

- **Segmentation** - Divide into parts (replaceable blade razors)
- **Taking Out** - Remove problematic element (caffeine-free coffee)
- **Inversion** - Flip the problem (prevent spills by eliminating the container—edible cups)

Knowing these patterns means you're never starting from scratch.

> "The world is full of obvious things which nobody by any chance ever observes." — Sherlock Holmes`,
      keyTakeaway: "Expert problem solvers have extensive pattern libraries built through deliberate study of diverse examples, enabling instant recognition of what novices can't see.",
      actionItem: "Start a pattern journal this week. After solving any problem, document the underlying pattern in one sentence. Review monthly to find recurring themes."
    }
  },
  {
    id: "solve-005",
    title: "Lateral Thinking: Breaking Mental Fixedness",
    type: "concept",
    duration: 11,
    xpReward: 100,
    content: {
      overview: "Escape the mental ruts that trap most people in conventional thinking.",
      mainContent: `## The Nine Dots Problem

Connect all nine dots with four straight lines without lifting your pencil:

• • •
• • •
• • •

Most people fail because they assume an invisible constraint: lines must stay within the dots' boundary. The solution requires **thinking outside the box**—literally extending lines beyond the implied frame.

This is mental fixedness—the invisible assumptions that make problems unsolvable.

## Edward de Bono's Lateral Thinking

Traditional thinking moves forward logically from premise to conclusion. **Lateral thinking** jumps sideways, challenging assumptions and exploring unconventional paths.

**Provocation Technique** - Make deliberately absurd statements to break fixedness:
- "PO: Cars should have square wheels"
- Initial reaction: Ridiculous!
- Lateral benefit: Leads to suspension systems that adapt to terrain irregularities

**Random Entry** - Force connections to unrelated concepts:
- Stuck on packaging design? Open dictionary to random word: "Tiger"
- How could tiger characteristics apply? Stripes → visual hierarchy, predator → premium positioning, camouflage → adaptive design

**Challenge Assumptions** - Question every "must":
- "Hotels must have rooms" → Airbnb
- "Taxis must be hailed on streets" → Uber
- "Phones must have keyboards" → iPhone

## Functional Fixedness

Karl Duncker's candle problem: Using only a candle, matches, and box of tacks, attach the candle to the wall so wax doesn't drip on the floor.

Most people try melting wax to stick the candle to the wall (fails) or tacking through the candle (fails). Solution: **Empty the tack box, tack it to the wall, use it as a platform for the candle**.

The mental block? Seeing the box only as a container, not as a potential platform. This is **functional fixedness**—the inability to see objects beyond their typical use.

Breaking it:
- List alternative uses for common objects
- Ask "What else could this be?"
- Study how different industries solve similar problems

> "You can't use up creativity. The more you use, the more you have." — Maya Angelou`,
      keyTakeaway: "Lateral thinking breaks mental fixedness by deliberately challenging assumptions, making random connections, and exploring unconventional problem framings.",
      actionItem: "Practice the random entry technique. Take your current biggest problem. Open a dictionary to a random word. Force five connections between that word and your problem.",
      quiz: {
        question: "What is functional fixedness, and why does it limit problem-solving ability?",
        options: [
          "The inability to see objects beyond their typical use, blocking creative solutions",
          "The tendency to fixate on functional rather than aesthetic solutions",
          "A focus on fixing functions instead of replacing entire systems",
          "The preference for practical solutions over theoretical ones"
        ],
        correct: 0,
        explanation: "Functional fixedness is a cognitive bias where people can only see objects in their traditional roles (like seeing a box only as a container, not as a platform). This mental constraint blocks creative problem-solving by preventing us from imagining alternative uses."
      }
    }
  },
  {
    id: "solve-006",
    title: "Systematic Troubleshooting Frameworks",
    type: "exercise",
    duration: 13,
    xpReward: 100,
    content: {
      overview: "Master battle-tested frameworks that provide structure when problems feel overwhelming.",
      mainContent: `## The Swiss Cheese Model

James Reason's Swiss Cheese Model explains how disasters happen: each defensive layer has holes (weaknesses), and disaster occurs when holes align across all layers.

The Challenger explosion wasn't caused by one failure—it was:
- Cold weather (environmental hole)
- O-ring design flaw (engineering hole)
- Ignored engineer warnings (communication hole)
- Schedule pressure (organizational hole)

**Application**: When analyzing failures, map all the defensive layers that should have prevented the problem. Which holes aligned?

## DMAIC: Six Sigma's Problem-Solving Framework

**Define** - What exactly is the problem?
- Specific, measurable problem statement
- Scope boundaries
- Success criteria

**Measure** - Quantify current state
- Collect baseline data
- Establish metrics
- Determine problem frequency/severity

**Analyze** - Identify root causes
- Use 5 Whys, fishbone diagrams
- Statistical analysis of data
- Test hypotheses

**Improve** - Implement solutions
- Design interventions
- Test on small scale first
- Measure impact

**Control** - Sustain improvements
- Document new processes
- Monitor for regression
- Create feedback loops

## The Cynefin Framework

Dave Snowden's framework for choosing problem-solving approaches:

**Simple/Obvious** - Best practice applies
- Problem: Standard oil change
- Approach: Follow established procedure

**Complicated** - Expert analysis needed
- Problem: Engine making strange noise
- Approach: Diagnose, then apply expertise

**Complex** - Emergent solutions through experimentation
- Problem: Improving team collaboration
- Approach: Probe (small experiments), sense (observe results), respond (adapt)

**Chaotic** - Act immediately to stabilize
- Problem: Server on fire (literally)
- Approach: Act decisively, establish order, then analyze

The mistake? Using simple domain approaches (best practices) in complex domains (human systems). Or applying complex domain approaches (endless experimentation) to simple problems.

## Problem-Solving Checklist

Before diving into solutions:
1. ✓ Can I reproduce the problem consistently?
2. ✓ Have I documented symptoms precisely?
3. ✓ Have I separated observation from interpretation?
4. ✓ Have I identified assumptions I'm making?
5. ✓ Have I considered multiple hypotheses?
6. ✓ Do I have a way to test each hypothesis?
7. ✓ Am I solving the root cause or treating symptoms?

> "For every complex problem there is an answer that is clear, simple, and wrong." — H.L. Mencken`,
      keyTakeaway: "Systematic frameworks like DMAIC and Cynefin provide structured approaches that prevent the common mistake of using the wrong problem-solving method for the domain.",
      actionItem: "Map a recent failure using the Swiss Cheese Model. Identify all the defensive layers that should have prevented it and where each had holes.",
      quiz: {
        question: "According to the Cynefin framework, what is the appropriate approach for complex problems with emergent solutions?",
        options: [
          "Probe with small experiments, sense the results, then respond and adapt",
          "Apply established best practices from similar situations",
          "Seek expert analysis to identify the correct solution",
          "Act immediately and decisively to establish control"
        ],
        correct: 0,
        explanation: "In the complex domain of Cynefin, solutions emerge through experimentation rather than analysis. The approach is probe-sense-respond: run small experiments, observe what happens, then adapt based on results. This differs from simple (best practice), complicated (expert analysis), or chaotic (immediate action) domains."
      }
    }
  },
  {
    id: "solve-007",
    title: "Decision Trees and Problem Decomposition",
    type: "concept",
    duration: 10,
    xpReward: 100,
    content: {
      overview: "Break overwhelming problems into manageable components using structured decomposition techniques.",
      mainContent: `## The Complexity Barrier

When SpaceX attempted to land orbital rockets, the problem seemed impossibly complex. Elon Musk's approach? **Break it into sub-problems, solve each, then integrate**.

This is problem decomposition—the most powerful weapon against complexity.

## Decision Tree Methodology

Decision trees map all possible paths through a problem:

**Root Question**: "Should we expand to the European market?"

**Branch 1**: "What are customer acquisition costs?"
- High CAC → Sub-question: "Can we reduce through local partnerships?"
  - Yes → Continue analysis
  - No → Abort or delay
- Low CAC → Continue to Branch 2

**Branch 2**: "What are regulatory hurdles?"
- Manageable → Continue to Branch 3
- Severe → Requires different strategy

Each branch ends in either:
- **Decision** (go/no-go)
- **Further decomposition** (more questions)
- **Action item** (specific next step)

## The MECE Principle

McKinsey's problem-solving cornerstone: **Mutually Exclusive, Collectively Exhaustive**.

**Mutually Exclusive** - No overlap between categories
- Bad: "Sales declined due to economy, poor marketing, and recession"
  (economy and recession overlap)
- Good: "Sales declined due to macro economy, competitive pressure, or internal execution"

**Collectively Exhaustive** - All possibilities covered
- Bad: "Traffic comes from Google or Facebook"
  (missing: direct, email, other social, etc.)
- Good: "Traffic comes from organic search, paid ads, social media, email, direct, or referrals"

When you decompose problems using MECE, you ensure **complete coverage without redundant analysis**.

## Work Breakdown Structure (WBS)

Project management's decomposition tool:

**Level 0**: Launch Mobile App

**Level 1**: Design | Development | Testing | Marketing

**Level 2**:
- Design → Wireframes, UI, UX Testing
- Development → Frontend, Backend, API Integration
- Testing → Unit Tests, Integration Tests, User Testing
- Marketing → Landing Page, App Store Optimization, Launch Campaign

Each level breaks into increasingly specific, actionable components until tasks are 1-3 day efforts.

## The 80/20 Decomposition

After decomposing, identify the 20% of sub-problems that will solve 80% of the overall problem. Attack those first.

Example: "Improve customer satisfaction"
- Decompose into: Product quality, Support response time, Pricing, User experience, Documentation
- Data shows: 80% of complaints relate to support response time
- Focus there first

> "The chief cause of problems is solutions." — Eric Sevareid`,
      keyTakeaway: "Problem decomposition using MECE principles and decision trees transforms overwhelming complexity into manageable sub-problems with clear paths forward.",
      actionItem: "Take your most complex current problem. Create a MECE decomposition with 3-5 main categories. Then break one category into sub-components. Identify which sub-problem to tackle first."
    }
  },
  {
    id: "solve-008",
    title: "Building Your Problem-Solving Practice",
    type: "reflection",
    duration: 11,
    xpReward: 100,
    content: {
      overview: "Develop the habits and systems that transform problem-solving from reactive firefighting to proactive mastery.",
      mainContent: `## The Problem-Solver's Journal

Richard Feynman kept a notebook titled "Things I Don't Know." When he encountered interesting problems, he documented them, attempted solutions, and reviewed outcomes. This **deliberate practice** transformed problem-solving from occasional skill to core competency.

Your problem-solving practice needs three components:

## 1. Pattern Library

**Document every significant problem**:
- Problem description
- Initial hypotheses
- Approach used
- What worked / what didn't
- Root cause discovered
- Patterns observed

Monthly review reveals meta-patterns: "I tend to jump to solutions too quickly" or "Complex problems benefit from sleeping on them."

## 2. Constraint Training

Deliberately practice with artificial constraints:
- **Time boxing** - Solve in 25 minutes (Pomodoro)
- **Resource limits** - Use only free tools
- **Method forcing** - Must use 5 Whys, or fishbone diagram, or lateral thinking
- **Domain transfer** - Solve a software problem using biology principles

Constraints force creativity and build mental flexibility.

## 3. Collaborative Problem-Solving

Join or create:
- **Code review sessions** - Even for non-programmers; the mindset applies everywhere
- **Mastermind groups** - Monthly problem-sharing with diverse perspectives
- **Teaching moments** - Explain your problem-solving process to others

Teaching reveals gaps in your own understanding and crystallizes effective techniques.

## The Anti-Patterns to Avoid

**Solution fixation** - Falling in love with your first idea
- Fix: Generate 5 solutions before evaluating any

**Confirmation bias** - Seeking only supporting evidence
- Fix: Actively try to disprove your hypothesis

**Anchoring** - Over-weighting initial information
- Fix: Deliberately consider what might be different

**Sunk cost fallacy** - Continuing because you've invested time
- Fix: Regularly ask "Would I start this today knowing what I know?"

## The Growth Trajectory

**Novice** (0-6 months): Learning techniques, applying frameworks rigidly
**Advanced beginner** (6-18 months): Recognizing patterns, choosing appropriate methods
**Competent** (1.5-3 years): Systematic troubleshooting, rare complete stumps
**Proficient** (3-7 years): Intuitive pattern recognition, fast hypothesis generation
**Expert** (7+ years): Novel problem-solving, creating new techniques

The key? **Deliberate practice with reflection**. Random problem-solving builds experience slowly. Systematic practice with documentation accelerates mastery.

> "We cannot solve our problems with the same thinking we used when we created them." — Albert Einstein`,
      keyTakeaway: "Problem-solving mastery comes from deliberate practice with documentation, constraint training, and collaborative learning—not from passively accumulating experience.",
      actionItem: "Start your problem-solving journal today. Document the next three problems you tackle using this structure: Problem, Approach, Outcome, Lesson Learned.",
      quiz: {
        question: "According to the growth trajectory outlined, what distinguishes competent problem solvers from expert ones?",
        options: [
          "Experts develop intuitive pattern recognition and create novel techniques, while competent solvers apply systematic methods",
          "Experts work faster than competent problem solvers",
          "Experts have access to better tools and resources",
          "Experts solve more complex problems but use the same methods"
        ],
        correct: 0,
        explanation: "The distinction is qualitative, not quantitative. Competent solvers (1.5-3 years) systematically apply learned frameworks. Experts (7+ years) intuitively recognize patterns and innovate new techniques. The difference is from deliberate practice with reflection, not just time."
      }
    }
  }
];
