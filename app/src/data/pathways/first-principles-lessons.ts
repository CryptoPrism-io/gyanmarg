import type { PathwayLesson } from "@/types";

export const fpLessonsLevel1: PathwayLesson[] = [
  {
    id: "fp-001",
    title: "Welcome to First Principles Thinking",
    type: "intro",
    duration: 10,
    xpReward: 100,
    content: {
      overview: "First principles thinking means breaking problems down to fundamental truths and reasoning up from there.",
      mainContent: `## Thinking from the Ground Up

In 2002, Elon Musk wanted to send a rocket to Mars but discovered it would cost $65 million. Too expensive. Most people would have stopped there.

Musk used **first principles thinking**: What is a rocket really? Aluminum alloys, titanium, copper, carbon fiber—just materials. He calculated: raw materials cost about **2% of the rocket's price**. The rest was assembly, historical pricing, and inefficiency.

So he started SpaceX, built rockets from scratch, and reduced launch costs by 90%. This is first principles thinking in action.

> "I think it's important to reason from first principles rather than by analogy. The normal way we conduct our lives is we reason by analogy. We are doing this because it's like something else that was done." — Elon Musk

**Reasoning by analogy:** "We've always done it this way." "Other companies price it like this." "That's how the industry works."

Analogy is **efficient**—most of the time, copying what works is smart. But it also traps you in local maxima. You optimize within constraints that might not even be necessary.

**First principles thinking breaks through constraints:**

**1. Identify and question assumptions.** What are you taking for granted? What "rules" are actually just conventions?

**2. Break down the problem to fundamental truths.** What is absolutely, provably true? Strip away everything else.

**3. Reason up from those truths.** Build solutions from the ground up, not from how things are currently done.

**Example: Online education**

**Analogy thinking:** "Online courses should mimic classroom structure—lectures, homework, tests, semesters."

**First principles:** What's the fundamental goal? Transfer knowledge effectively. What's provably true about learning? Spaced repetition works. Active recall works. Immediate feedback works.

**New solution:** Adaptive platforms that test frequently, personalize pacing, and use spaced repetition—completely different from traditional classrooms but more effective.

First principles thinking is **hard**. It requires rejecting comfortable assumptions, confronting uncertainty, and doing real mental work. But it's the only way to achieve 10x improvements instead of 10% optimizations.`,
      keyTakeaway: "First principles thinking means breaking problems down to fundamental truths and building solutions from scratch, not copying what exists.",
      actionItem: "Pick something you assume must be done a certain way. Ask: Why? Keep asking until you hit a fundamental truth or realize it's just convention."
    }
  },
  {
    id: "fp-002",
    title: "Identifying Hidden Assumptions",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "Most problems are constrained by assumptions we don't even realize we're making.",
      mainContent: `## Seeing Your Invisible Constraints

The electric car industry assumed for decades: "Batteries are too expensive and heavy for consumer vehicles. Electric cars must be tiny, slow, and have short range."

Tesla questioned this: **Is this a fundamental truth or an assumption?**

They discovered: Battery costs were falling exponentially (Moore's Law for batteries). The assumption was **historically true but no longer valid**. By betting against conventional wisdom, Tesla created the first desirable electric car.

> "The first principle is that you must not fool yourself—and you are the easiest person to fool." — Richard Feynman

**Common hidden assumptions:**

**Industry assumptions:** "This is how the industry works." Often historical accidents, not necessities. Airbnb questioned: "Why do travelers need hotels?" Uber questioned: "Why do taxi medallions exist?"

**Resource assumptions:** "We can't afford that." Sometimes true, sometimes lack of creativity. Can you rent instead of buy? Partner instead of build? Automate instead of hire?

**Capability assumptions:** "We don't have the expertise." Can you learn? Hire? Acquire? Many "impossible" things are just unfamiliar.

**Time assumptions:** "This takes six months." Based on current process, not fundamental limits. What if you parallelize? Eliminate steps? Use different tools?

**Customer assumptions:** "Users want X feature." Based on surveys, not observation. What if you watch what they **do** instead of what they say?

**How to surface assumptions:**

**"Why?" five times.** Keep asking why until you hit bedrock truth or reveal the assumption. Often you hit assumption at level 2 or 3.

**Invert the assumption.** "What if the opposite were true?" If it sounds absurd, why? Is it actually impossible or just unfamiliar?

**Look at extreme cases.** How do people solve this with 1/10th the resources? 10x the resources? Different constraints force different assumptions to the surface.

**Bring in outsiders.** People new to your domain see assumptions you're blind to. They ask "dumb" questions that reveal deep truths.

**Study history.** Many current "truths" were false 20 years ago or in different contexts. This reveals they're not fundamental.

The most dangerous assumptions are the ones you don't know you're making. They feel like facts.`,
      keyTakeaway: "Hidden assumptions constrain solutions invisibly—surfacing and questioning them is the first step to breakthrough thinking.",
      actionItem: "Take a constraint you face. Ask 'Why is this a constraint?' five times. When do you hit an assumption vs. a fundamental truth?"
    }
  },
  {
    id: "fp-003",
    title: "Breaking Down to Fundamentals",
    type: "concept",
    duration: 11,
    xpReward: 100,
    content: {
      overview: "Strip away everything non-essential to reach the core truths you can build from.",
      mainContent: `## Finding Bedrock

Aristotle called first principles "the first basis from which a thing is known." In physics, these are fundamental laws: thermodynamics, conservation of energy, laws of motion. In business, they might be: customers need value, costs must be less than revenue, trust enables transactions.

**How to break down to fundamentals:**

**Physics approach:** What are the immutable laws? For transportation: you must overcome friction and move mass through space. Everything else (cars, planes, trains) is just different methods of doing this.

**Chemistry approach:** What are the component parts? Musk's rocket question: What materials do I actually need? Strip away legacy pricing and manufacturing assumptions.

**Mathematics approach:** What's the equation? For a business: profit = revenue - costs. This is fundamental. Everything else (sales strategies, org structure) is in service of this equation.

**Philosophy approach:** What must be true? For human motivation: people act in their self-interest (broadly defined, including altruism). You can't design systems that require people to consistently act against self-interest.

**Example: Restaurant industry**

**Surface level:** Restaurants need dining rooms, waiters, menus, kitchens.

**Questioning:** Why? What are we actually providing?

**Fundamental:** People need prepared food they didn't make themselves, delivered conveniently.

**New solutions from fundamentals:** Food trucks (no dining room), ghost kitchens (no front-of-house), meal kits (no preparation), delivery apps (pure convenience). Each reimagines from fundamentals.

**Example: Transportation**

**Surface level:** Cars need engines, fuel, transmissions, dealers.

**Fundamental:** Move people and goods from A to B efficiently.

**New solutions:** Electric (no engine/transmission), autonomous (no driver), shared (no ownership), flying (vertical, not horizontal). Each path emerges from fundamentals.

**Warning: Don't confuse "simple" with "fundamental"**

Fundamental truths can be complex. Physics equations are fundamental but not simple. The trick is finding truths that are **invariant**—true across contexts and time.

**Test if something is fundamental:** Can you imagine a scenario where it's false? If yes, it's probably not fundamental—it's contextual.`,
      keyTakeaway: "Breaking down to fundamentals means stripping away conventions, assumptions, and current implementations to find immutable truths.",
      actionItem: "Choose a product or service you use daily. Break it down: What fundamental need does it serve? What parts are essential vs. conventional?"
    }
  },
  {
    id: "fp-004",
    title: "Quiz: Assumptions and Fundamentals",
    type: "quiz",
    duration: 8,
    xpReward: 100,
    content: {
      overview: "Test your understanding of first principles decomposition.",
      mainContent: `## Check Your First Principles Thinking

Can you distinguish between assumptions and fundamental truths?`,
      keyTakeaway: "First principles thinking requires distinguishing between what must be true and what's just conventional.",
      quiz: {
        question: "A founder says 'Our startup needs VC funding to grow.' Using first principles, what should they question?",
        options: [
          "Nothing—all startups need VC funding to scale",
          "The assumption that growth requires external capital; could they grow through revenue, partnerships, or different business models?",
          "Whether VCs would even fund them",
          "How much equity they'd have to give up"
        ],
        correct: 1,
        explanation: "The assumption 'startups need VC' is conventional wisdom, not a fundamental truth. Fundamentally, growth requires capital—but that capital could come from revenue (profitability-first), customers (pre-orders), partners (strategic alliances), or different structures (franchising, licensing). VC is ONE path, not a necessity. Questioning this assumption reveals alternatives many founders never consider."
      }
    }
  },
  {
    id: "fp-005",
    title: "Rebuilding from First Principles",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "Once you've broken down to fundamentals, rebuild solutions optimized for today's context, not yesterday's constraints.",
      mainContent: `## Constructing New Solutions

After Musk broke rockets down to raw materials and fundamental physics, he rebuilt from scratch: What's the optimal design if we're not constrained by legacy suppliers, government contracts, or traditional aerospace assumptions?

Answers: Vertical integration (build components in-house), reusable rockets (the fundamental cost is manufacturing, not fuel, so reuse the expensive part), rapid iteration (test and learn quickly instead of perfect-first-try).

These weren't rocket science—they were **obvious once you reasoned from first principles** instead of industry norms.

> "When you're trying to solve a problem, it's important to start with first principles and not analogies." — Elon Musk

**The rebuilding process:**

**1. Start with your fundamentals.** What truths did you identify? List them explicitly.

**2. Remove old constraints.** What constraints existed when current solutions were designed? Which no longer apply? Technology changes, costs change, regulations change, customer expectations change.

**3. Ask: What's the optimal solution given fundamentals and current reality?** Ignore what exists. If you were designing from scratch today, what would you build?

**4. Identify new constraints.** You can't ignore all constraints—physics, economics, human behavior are real. But question which constraints are fundamental vs. conventional.

**5. Prototype and test.** First principles thinking gives you hypotheses, not certainties. Test them against reality.

**Example: Banking**

**Fundamentals:** People need to store value securely, transfer it, and access credit.

**Old constraints:** Physical branches, paper ledgers, local presence, high transaction costs.

**Removed constraints:** Digital technology, internet connectivity, mobile devices, cryptography.

**Rebuilt solution:** Digital banks with no branches, AI-driven credit scoring, instant global transfers, cryptocurrency alternatives. Fundamentals unchanged; implementation completely reimagined.

**Example: Education**

**Fundamentals:** Transfer knowledge and skills effectively.

**Old constraints:** Scarce expert time, expensive buildings, synchronous scheduling, geographic limits.

**Removed constraints:** Video recording, global internet, asynchronous communication, AI personalization.

**Rebuilt solution:** Online courses, adaptive learning platforms, micro-credentials, global expert access. Same fundamental goal; radically different implementation.

**The power of rebuilding:** You optimize for **today's reality**, not yesterday's constraints. This is where 10x improvements come from.`,
      keyTakeaway: "Rebuilding from first principles means designing optimal solutions for today's context, not optimizing yesterday's legacy systems.",
      actionItem: "Take your earlier breakdown. Now rebuild: If you designed this from scratch today, ignoring what currently exists, what would you create?"
    }
  },
  {
    id: "fp-006",
    title: "Quiz: First Principles Reconstruction",
    type: "quiz",
    duration: 8,
    xpReward: 100,
    content: {
      overview: "Test your ability to rebuild solutions from fundamentals.",
      mainContent: `## Check Your Reconstruction Skills

Rebuilding from first principles requires creativity constrained by fundamentals.`,
      keyTakeaway: "First principles rebuilding creates solutions optimized for current reality, not past constraints.",
      quiz: {
        question: "Which of these is the BEST example of first principles thinking?",
        options: [
          "Netflix copied Blockbuster's rental model but made it online",
          "Netflix questioned 'why do people rent?'—they want convenient entertainment access, so streaming subscriptions replaced per-rental fees entirely",
          "Netflix improved Blockbuster by eliminating late fees",
          "Netflix offered more movies than Blockbuster stores could stock"
        ],
        correct: 1,
        explanation: "Option B demonstrates true first principles thinking: Netflix broke down to the fundamental need (entertainment access) and rebuilt the solution without rental-era constraints (physical media, per-transaction pricing). Options A, C, and D are improvements via analogy—making rentals better—not fundamental reconception. First principles led Netflix from 'better rentals' to 'unlimited streaming,' a completely different category."
      }
    }
  },
  {
    id: "fp-007",
    title: "When NOT to Use First Principles",
    type: "concept",
    duration: 11,
    xpReward: 100,
    content: {
      overview: "First principles thinking is powerful but expensive—know when analogy is better.",
      mainContent: `## The Cost of First Principles

Elon Musk uses first principles to rethink rockets and cars. But he doesn't use first principles to design door handles, steering wheels, or manufacturing floors (initially—those come later).

Why? **First principles thinking is cognitively expensive.** It requires:

- Deep expertise to know what's truly fundamental
- Time to question, break down, and rebuild
- Risk tolerance (you might be wrong)
- Resources to test new approaches

**When to use analogies instead:**

**Well-solved problems.** Don't reinvent doors, accounting, or email. Copy what works and spend your cognitive resources on novel problems.

**Time constraints.** In a crisis, use proven playbooks. First principles requires reflection time you might not have.

**Outside your expertise.** First principles requires deep knowledge to distinguish fundamental from conventional. Without expertise, you'll mistake conventions for fundamentals.

**Low-stakes decisions.** The cognitive cost exceeds the benefit. Don't use first principles to choose lunch.

**When proven solutions exist and work.** If it ain't broke, maybe don't fix it—unless the "broke" part is hidden or long-term.

> "The best place to start is where the world ends." — Charlie Munger

Munger's point: Use conventional wisdom for most things. Save first principles for **where conventional wisdom fails** or **where breakthrough advantage exists**.

**Strategic use of first principles:**

**Identify your leverage points.** Where will 10x improvement matter most? Apply first principles there.

**Combine approaches.** Use analogy for 80% of your problem; first principles for the critical 20%.

**Alternate over time.** Build v1 with analogy (ship fast). Rebuild v2 with first principles (optimize after learning).

**Know your constraints.** If you lack time, expertise, or resources, acknowledge this. Don't fake first principles thinking—it's worse than good analogy.

**Red flags you're misusing first principles:**

- Reinventing things that work fine (NIH syndrome)
- Ignoring domain expertise ("I don't need to know the industry")
- No testing (pure reasoning without reality checks)
- Analysis paralysis (infinite questioning, no action)

First principles is a **tool**, not a philosophy. Use it when the benefits exceed the costs.`,
      keyTakeaway: "First principles thinking is powerful but expensive—use it strategically where breakthrough matters, not everywhere.",
      actionItem: "List three current problems. Which deserves first principles thinking? Which is better solved by proven analogies? Why?"
    }
  },
  {
    id: "fp-008",
    title: "Reflection: Your First Principles Challenge",
    type: "reflection",
    duration: 15,
    xpReward: 100,
    content: {
      overview: "Apply first principles thinking to reimagine something important to you.",
      mainContent: `## Rebuilding from Bedrock

Choose a **significant challenge** where first principles might unlock breakthrough solutions:

- A business model that feels stuck
- A career path that seems limited
- A product that's incremental when it needs to be revolutionary
- A personal habit or system that isn't working

**Complete the first principles process:**

**1. Document current approach and assumptions**
- How is this currently done (by you or others)?
- List every assumption embedded in the current approach
- Which assumptions are conventions vs. fundamental truths?

**2. Break down to fundamentals**
- What's the core need or goal?
- What's absolutely, provably true about this domain?
- What physical, economic, or behavioral laws apply?
- What constraints are real vs. conventional?

**3. Identify removed constraints**
- What constraints existed when current solutions were created?
- Which no longer apply (technology, cost, regulation, knowledge)?
- What new capabilities exist now that didn't before?

**4. Rebuild from fundamentals**
- If you designed from scratch today, what would you create?
- How does this differ from current approaches?
- What makes this better? What are the risks?

**5. Reality check**
- Do you have the expertise to judge what's fundamental?
- Is the potential benefit worth the cognitive and resource cost?
- How would you test your new approach?

> "First principles thinking is one of the best ways to reverse-engineer complicated problems and unleash creative possibility." — James Clear

**Document your thinking.** Writing forces clarity and reveals logical gaps.

**Share for critique.** First principles thinking can lead you astray if you mistake conventions for fundamentals. Get challenged by people with relevant expertise.

**Decide: Build or abandon.** Not every first principles insight is worth pursuing. Some reveal "current approaches are actually pretty good." That's valuable learning too.

The goal isn't to always rebuild from scratch—it's to **know when you should**.`,
      keyTakeaway: "First principles thinking reveals breakthrough opportunities by questioning assumptions and rebuilding from fundamental truths.",
      actionItem: "Complete your first principles analysis. If you rebuild this from scratch, what's different? Is the difference worth pursuing?"
    }
  }
];
