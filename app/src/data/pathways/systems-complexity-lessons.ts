import type { PathwayLesson } from "@/types";

export const sysLessonsLevel1: PathwayLesson[] = [
  {
    id: "sys-001",
    title: "Welcome to Systems Thinking",
    type: "intro",
    duration: 10,
    xpReward: 100,
    content: {
      overview: "The world is not a collection of isolated parts—it's an interconnected web of relationships.",
      mainContent: `## Seeing the Whole, Not Just the Parts

In the 1950s, ranchers in the Kaibab Plateau convinced the government to kill thousands of predators (wolves, cougars, coyotes) to protect deer populations. The plan worked—at first. Deer populations exploded.

Then disaster struck. **Deer overgrazed the plateau, destroying vegetation.** Mass starvation followed. The deer population crashed to lower levels than before. The ecosystem collapsed.

What went wrong? **Reductionist thinking.** The ranchers saw individual parts (predators = bad, deer = good) instead of the **system**—the relationships between predators, prey, and vegetation that maintained balance.

> "You can't just remove parts of a complex system and expect everything else to remain the same." — Donella Meadows

**Systems thinking** sees interconnections, feedback loops, and emergent behaviors. It asks not "what thing caused this?" but "what relationships and structures create these patterns?"

**Key systems concepts:**

**Feedback loops.** Actions create consequences that feed back to influence future actions. Population growth (more people → more births) is a reinforcing loop. Room temperature (too hot → AC turns on → cooler) is a balancing loop.

**Emergence.** System behavior arises from interactions, not individual components. Traffic jams emerge from individual driving decisions. Stock market crashes emerge from trader interactions.

**Non-linearity.** Small changes can have huge effects (tipping points), and huge efforts can have small effects (diminishing returns).

**Delays.** Actions and consequences are separated in time. You overeat today; health problems appear years later.

The systems mindset transforms how you see everything: markets, organizations, relationships, your own habits. Problems that seemed intractable become solvable when you see the underlying structure.`,
      keyTakeaway: "Systems thinking focuses on relationships and feedback loops, not isolated parts and linear cause-and-effect.",
      actionItem: "Identify a recurring problem in your life. Draw a simple loop: What actions lead to what consequences, which then influence future actions?"
    }
  },
  {
    id: "sys-002",
    title: "Feedback Loops: The Engine of Systems",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "Every system is driven by reinforcing loops (growth or collapse) and balancing loops (stability).",
      mainContent: `## Understanding System Dynamics

Facebook's early growth was a classic **reinforcing loop**: more users → more content → more value → more users. This is a **virtuous cycle** when it works in your favor, a **vicious cycle** when it doesn't.

Debt spirals are vicious cycles: high debt → high interest payments → less money to pay principal → higher debt.

> "All systems exhibit some form of oscillation, overshoot, or collapse, depending on the relative strength of reinforcing and balancing loops." — Peter Senge

**Reinforcing loops amplify change:**

- Compound interest (money earns interest, which earns more interest)
- Skill development (more skill → better results → more motivation → more practice → more skill)
- Reputational damage (bad press → customer loss → revenue decline → cost cuts → worse service → more bad press)

**Balancing loops resist change and seek equilibrium:**

- Body temperature regulation (too hot → sweat → cool down)
- Supply and demand (high price → less demand → lower price)
- Organizational bureaucracy (growth → complexity → rules to manage complexity → resistance to further growth)

**The leverage point:** Find the **dominant loop** driving system behavior, then identify where small interventions create large effects.

Amazon's flywheel is a masterclass in reinforcing loops: lower prices → more customers → more sales → economies of scale → lower costs → lower prices. Competitors can't easily break this loop.

**Delays complicate everything.** If you turn up the heat in your house, you might keep turning it higher before realizing it's working—then you overshoot and it's too hot. This "delay and overshoot" pattern appears everywhere: dieting, investing, hiring.

When you see recurring patterns (boom-bust cycles, repeated conflicts, persistent problems), you're seeing feedback loop structures. Change the structure, not the individual events.`,
      keyTakeaway: "Reinforcing loops amplify change; balancing loops resist it. Understanding which loop dominates reveals leverage points.",
      actionItem: "Draw a reinforcing loop in your work or life. What's amplifying? How could you reverse it or accelerate it intentionally?"
    }
  },
  {
    id: "sys-003",
    title: "Network Effects: When Systems Multiply Value",
    type: "concept",
    duration: 11,
    xpReward: 100,
    content: {
      overview: "Some systems become exponentially more valuable as more people participate—this is network effects.",
      mainContent: `## The Power of Connected Systems

In 1876, the first telephone was worthless. Who would you call? By 1900, with thousands of phones, each phone became valuable. This is **network effects**—the value of a network grows with the number of participants.

**Metcalfe's Law** says network value grows proportional to the square of users (n²). Ten users create 45 possible connections. One hundred users create 4,950 connections. One thousand users create nearly 500,000 connections.

> "The value of a network is proportional to the square of the number of connected users." — Robert Metcalfe

**Types of network effects:**

**Direct network effects:** More users directly benefit existing users. WhatsApp, telephone networks, social media. The product itself becomes more valuable.

**Indirect network effects:** More users attract complementary products, which attract more users. Windows had more users → more software developers → more apps → more users.

**Two-sided network effects:** Platforms match two groups. More riders on Uber → more drivers sign up → shorter wait times → more riders. eBay: more buyers → more sellers → more selection → more buyers.

**Data network effects:** More usage generates more data, which improves the product. Google search gets better as more people use it. Waze improves traffic routing with more drivers.

**Why network effects create winner-take-all markets:**

The leading network becomes exponentially more valuable, making it nearly impossible for competitors to catch up. Facebook vs. Myspace, VHS vs. Betamax, eBay vs. smaller auction sites.

**The cold start problem:** How do you create value when you have no users? Strategies include:

- Start with a niche (Facebook began with Harvard only)
- Subsidize one side (Uber gave free rides initially)
- Create value even without network (iPhone was useful before the App Store)

Understanding network effects explains why some companies grow explosively, why market dominance is so sticky, and where disruption opportunities exist (new networks starting from zero).`,
      keyTakeaway: "Network effects make systems exponentially more valuable as they grow, creating winner-take-all dynamics and competitive moats.",
      actionItem: "Identify a platform you use daily. Which type of network effect drives its value? What made you join despite it being less valuable when smaller?"
    }
  },
  {
    id: "sys-004",
    title: "Quiz: Feedback Loops and Networks",
    type: "quiz",
    duration: 8,
    xpReward: 100,
    content: {
      overview: "Test your understanding of system dynamics and network effects.",
      mainContent: `## Check Your Systems Knowledge

Let's verify you understand how feedback loops and networks create system behavior.`,
      keyTakeaway: "System behavior emerges from feedback loops and network structures, not individual components.",
      quiz: {
        question: "Why do reinforcing loops often lead to 'overshoot and collapse' instead of endless growth?",
        options: [
          "Because all systems eventually run out of energy",
          "Because balancing loops emerge that limit growth (resource constraints, competition, regulation)",
          "Because people lose interest over time",
          "Because reinforcing loops naturally reverse direction"
        ],
        correct: 1,
        explanation: "Reinforcing loops don't continue forever because they eventually encounter balancing forces: resource limits (population growth hits food supply), market saturation (can't have infinite customers), or emergent constraints (growth triggers regulation). Understanding both loop types is essential to predicting system behavior."
      }
    }
  },
  {
    id: "sys-005",
    title: "Emergence: When the Whole Exceeds the Parts",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "Complex systems exhibit behaviors that can't be predicted from studying components in isolation.",
      mainContent: `## The Surprises of Complex Systems

A single ant is simple—it follows chemical trails, gathers food, defends the colony. But an ant colony exhibits remarkable **emergent intelligence**: they build ventilated structures, farm fungus, wage coordinated warfare, and adapt to changing conditions.

No individual ant plans this. The colony's intelligence **emerges** from thousands of simple interactions following basic rules.

> "Emergence is when the whole is greater than the sum of its parts." — Aristotle (rephrased)

**Examples of emergence:**

**Consciousness.** Individual neurons are simple electrochemical switches. Yet billions of them interacting create self-awareness, emotions, and reasoning—properties that don't exist in any single neuron.

**Markets.** Individual traders make decisions based on limited information. The market as a whole processes vast information and sets prices that (imperfectly) reflect collective knowledge.

**Traffic jams.** No single driver creates a traffic jam. They emerge from individual decisions (following too close, changing lanes) interacting with road capacity and density.

**Culture.** No one designs organizational culture. It emerges from hiring decisions, leader behaviors, reward systems, and social interactions.

**Why emergence matters for strategy:**

**You can't control emergent systems directly.** You can only influence the rules and interactions that generate emergent behavior.

**Small rule changes create large behavioral shifts.** Changing incentive structures in an organization can transform culture without directly "managing" it.

**Emergent properties are fragile to structural changes.** Break up a team that works well, and you lose emergent collaboration. The people are the same, but the system changes.

**How to work with emergence:**

**Focus on interactions, not components.** Hiring smart people doesn't create smart organizations—interactions between them do.

**Design simple rules.** Complex behaviors emerge from simple rules repeated. Amazon's "customer obsession" rule generates countless emergent customer-friendly behaviors.

**Expect surprises.** Emergent systems produce unexpected outcomes. Plan for adaptation, not prediction.`,
      keyTakeaway: "Emergence means system-level behaviors arise from component interactions, not from any single component—you must influence the rules, not control outcomes.",
      actionItem: "Identify an emergent property in your organization or life (culture, habits, patterns). What simple rules or interactions generate it?"
    }
  },
  {
    id: "sys-006",
    title: "Leverage Points: Where to Intervene in Systems",
    type: "concept",
    duration: 13,
    xpReward: 100,
    content: {
      overview: "Not all interventions are equal—some places in a system offer far more leverage than others.",
      mainContent: `## Finding the Highest Leverage Interventions

Donella Meadows identified **12 leverage points** in systems, ranked from least to most effective. Most people intervene at the weakest points; systems thinkers find the strongest.

**Low-leverage interventions (what most people try):**

**Numbers and parameters.** Changing tax rates, subsidies, standards. These rarely transform systems—they're easy to adjust but don't change structure.

**Buffer sizes.** Increasing inventory, savings, or reserves. Helpful but doesn't address root causes.

**Stock and flow structures.** Changing infrastructure, population growth rates. More effective but slow and expensive.

**Medium-leverage interventions:**

**Feedback loop strength.** Speed up or slow down information flow. Faster feedback creates faster adaptation.

**Balancing feedback loops.** Adding corrective mechanisms. Thermostats, regulation, quality control systems.

**Reinforcing feedback loops.** Creating virtuous or vicious cycles. Compound interest, viral growth, reputational spirals.

**High-leverage interventions (rare but transformative):**

**Information flows.** Making consequences visible changes behavior dramatically. Publishing factory pollution data reduced pollution more than regulation—nobody wanted to be the worst.

**Rules of the system.** Who has power, what's allowed, what's rewarded. Constitutional changes, market rules, organizational incentives.

**Self-organization.** The ability of the system to change its own structure. Evolutionary systems, democratic governance, agile organizations.

**Goals.** Changing what the system optimizes for. If you measure factories by units produced, you get quantity. Measure by defect rate, you get quality. **"Tell me how you'll measure me, and I'll tell you how I'll behave."** — Eliyahu Goldratt

**Paradigms.** The mindset or worldview from which the system arises. Shifting from "nature exists to serve humans" to "humans are part of nature" changes everything.

**Transcending paradigms.** Holding paradigms lightly, recognizing they're models, not reality.

**The highest leverage:** Most interventions fail because they work at the wrong level. Instead of adding more rules (low leverage), change what information flows (high leverage). Instead of working harder (parameter change), change the goal you're optimizing for.`,
      keyTakeaway: "The highest leverage points in systems are paradigms, goals, and information flows—not parameters and numbers most people focus on.",
      actionItem: "Pick a persistent problem. List three interventions: one changing numbers, one changing feedback, one changing the goal. Which feels most powerful?"
    }
  },
  {
    id: "sys-007",
    title: "Quiz: Emergence and Leverage",
    type: "quiz",
    duration: 8,
    xpReward: 100,
    content: {
      overview: "Test your understanding of emergent behavior and leverage points.",
      mainContent: `## Check Your Complexity Thinking

Emergent systems and leverage points are key to intervening effectively in complex environments.`,
      keyTakeaway: "High-leverage interventions change system structure, not just parameters.",
      quiz: {
        question: "According to Donella Meadows, which intervention offers the HIGHEST leverage in a system?",
        options: [
          "Increasing budget or resources (changing parameters)",
          "Adding new rules or regulations (changing constraints)",
          "Changing what the system optimizes for (changing goals)",
          "Building more infrastructure (changing stock and flow)"
        ],
        correct: 2,
        explanation: "Changing the goal of a system is among the highest leverage interventions. If you change what you're measuring and optimizing for, all behaviors downstream shift. This is why switching from 'maximize shareholder value' to 'maximize customer lifetime value' transforms a company far more than adding budget or rules."
      }
    }
  },
  {
    id: "sys-008",
    title: "Reflection: Mapping Your System",
    type: "reflection",
    duration: 15,
    xpReward: 100,
    content: {
      overview: "Apply systems thinking to understand a complex situation in your life or work.",
      mainContent: `## Understanding Your System

Systems thinking isn't just theory—it's a practical tool for seeing patterns, finding leverage, and creating change.

Choose a **complex, recurring problem** you face:
- An organizational challenge (silos, slow decisions, culture issues)
- A market dynamic (competition, customer churn, pricing pressure)
- A personal pattern (procrastination, relationship conflicts, financial stress)

**Complete this systems analysis:**

**1. Identify the components:** What are the key elements (people, resources, processes, incentives)?

**2. Map the relationships:** How do components influence each other? Draw arrows showing causation.

**3. Find the feedback loops:**
- Which loops are **reinforcing** (amplifying problems or growth)?
- Which loops are **balancing** (resisting change)?
- Which loop is currently dominant?

**4. Locate delays:** Where is there a lag between action and consequence? How does this create overshooting?

**5. Identify emergent behaviors:** What system-level patterns emerge that no single component causes?

**6. Find leverage points:**
- What information is missing or delayed?
- What is the system optimizing for (the goal)?
- What simple rule change would shift behavior?

**7. Design an intervention:** Based on leverage points, what's your highest-impact intervention?

> "We can't impose our will on a system. We can listen to what the system tells us, and discover how its properties and our values can work together to bring forth something much better than could ever be produced by our will alone." — Donella Meadows

Take your time. Good systems mapping reveals surprising insights—connections you didn't see, leverage you didn't realize existed, and interventions that are simpler than you thought.`,
      keyTakeaway: "Systems mapping reveals hidden feedback loops, emergent patterns, and high-leverage intervention points.",
      actionItem: "Complete your systems map. Share it with someone who knows the situation—do they see additional loops or leverage points you missed?"
    }
  }
];
