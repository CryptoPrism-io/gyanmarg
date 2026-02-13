import type { PathwayLesson } from "@/types";

export const mmLessonsLevel1: PathwayLesson[] = [
  {
    id: "mm-001",
    title: "Welcome to Mental Models",
    type: "intro",
    duration: 10,
    xpReward: 100,
    content: {
      overview: "Mental models are thinking tools that help you see reality more clearly and make better decisions.",
      mainContent: `## The Power of Better Thinking Tools

Charlie Munger, Warren Buffett's partner, built a $2+ billion fortune not through insider knowledge, but through **mental models**—frameworks for understanding how the world works.

> "You've got to have models in your head. And you've got to array your experience—both vicarious and direct—on this latticework of models." — Charlie Munger

Most people approach problems with a hammer—they use the same thinking pattern regardless of the problem. Mental models give you a full toolkit: hammers, screwdrivers, saws, wrenches. Each model is specialized for certain types of problems.

**What are mental models?**

Mental models are **compressed wisdom**—patterns that appear across disciplines and domains. They help you:

**See what others miss.** The **inversion** model (thinking backwards from failure) helped Jeff Bezos avoid the mistakes that killed most dot-com companies.

**Make better predictions.** Understanding **regression to the mean** prevents you from overreacting to outlier events or mistaking luck for skill.

**Avoid costly mistakes.** **Second-order thinking** (considering consequences of consequences) stops you from choosing solutions that create worse problems.

**Key insight:** The best thinkers borrow models from multiple disciplines. Munger combines psychology, physics, biology, economics, and history. This **multidisciplinary approach** reveals connections specialists miss.

A biologist sees competition. An economist sees market dynamics. A psychologist sees cognitive bias. Someone with all three models sees the complete picture.

**The latticework approach:**

Don't just collect models—connect them. Models reinforce each other. **Incentives** (economics) combine with **confirmation bias** (psychology) to explain why people ignore inconvenient data. **Network effects** (technology) combine with **economies of scale** (business) to create unbeatable market positions.

This module will teach you 100+ models from diverse fields. Your goal isn't to memorize them—it's to **internalize** them until they become automatic thinking patterns.`,
      keyTakeaway: "Mental models are thinking frameworks from multiple disciplines that reveal patterns, improve decisions, and help you see what others miss.",
      actionItem: "Think of a recent decision. What mental model or thinking pattern did you use (even unconsciously)? Was it the right tool for that problem?"
    }
  },
  {
    id: "mm-002",
    title: "Inversion: Thinking Backwards",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "Often the best way to solve a problem is to think about how to create or avoid the opposite outcome.",
      mainContent: `## The Power of Reverse Thinking

Mathematician Carl Jacobi's advice: **"Invert, always invert."** Instead of asking "How do I succeed?" ask "How would I guarantee failure?"—then avoid those things.

Charlie Munger uses inversion religiously: "Tell me where I'm going to die, so I'll never go there."

**Why inversion works:**

**It reveals hidden risks.** Asking "How could this project fail spectacularly?" surfaces assumptions you haven't tested and dependencies you've overlooked.

**It breaks fixation.** When stuck on a hard problem, flipping it often generates new insights. Can't figure out how to increase sales? Ask: What would destroy sales? Often the inverse reveals the answer.

**It fights optimism bias.** We naturally focus on upside and ignore downside. Inversion forces you to confront what could go wrong.

> "It is remarkable how much long-term advantage people like us have gotten by trying to be consistently not stupid, instead of trying to be very intelligent." — Charlie Munger

**Inversion in practice:**

**Before a marriage:** Don't just think "What makes relationships great?" Think: "What kills marriages?" (Contempt, lack of trust, taking each other for granted, poor communication.) Then avoid those.

**Before a business launch:** Don't just plan for success. Ask: "How would we guarantee this business fails?" (Run out of cash, build something nobody wants, ignore competition, hire wrong people.) Then prevent those outcomes.

**In investing:** Munger doesn't ask "What stocks will soar?" He asks "What could permanently impair capital?" Then he avoids those investments.

**How to use inversion:**

1. State your goal clearly
2. Invert it: What's the opposite outcome?
3. List everything that would cause the inverted outcome
4. Avoid those things or strengthen defenses against them

**Combine inversion with other models:** Inversion + **second-order thinking** = "What are the consequences of avoiding this failure mode?" Inversion + **incentives** = "What incentives would make people create the opposite outcome?"

Inversion doesn't replace forward thinking—it complements it. Use both to see the full picture.`,
      keyTakeaway: "Inversion means solving problems by thinking backwards—identify what would create failure, then avoid it relentlessly.",
      actionItem: "Pick a goal. Write down 5-7 ways you could guarantee failure at this goal. Which of these failure modes are you currently risking?"
    }
  },
  {
    id: "mm-003",
    title: "Circle of Competence: Know What You Know",
    type: "concept",
    duration: 11,
    xpReward: 100,
    content: {
      overview: "Success comes not from knowing everything, but from knowing the boundaries of your knowledge.",
      mainContent: `## The Wisdom of Knowing Your Limits

Warren Buffett passed on countless tech investments during the dot-com boom—not because he thought tech was bad, but because it was **outside his circle of competence**. He didn't understand tech business models deeply enough to value them.

He avoided FOMO and billions in losses. Meanwhile, investors who ventured outside their competence lost everything when the bubble burst.

> "What an investor needs is the ability to correctly evaluate selected businesses. You don't have to be an expert on every company, or even many. You only have to be able to evaluate companies within your circle of competence." — Warren Buffett

**Circle of competence** means:

**Know what you truly understand.** Not surface-level familiarity—deep, earned knowledge from experience and study.

**Know where your knowledge ends.** This is harder. We overestimate our understanding, especially in areas adjacent to our expertise.

**Operate within your circle most of the time.** This is where your edge exists.

**Expand your circle deliberately.** You can learn new domains, but it requires genuine effort and humility.

**Why this matters:**

**Outside your circle, you're average.** Worse, you don't know you're average—you lack the knowledge to even evaluate your own understanding.

**Luck gets mistaken for skill.** Beginners occasionally succeed outside their competence through luck, then overestimate their abilities—until they don't.

**Competition matters.** You're not competing against average; you're competing against experts in their circle. A novice real estate investor competes with people who've done hundreds of deals.

**How to define your circle:**

**Can you explain it simply?** If you can't explain a domain clearly, you don't understand it deeply.

**Have you been tested?** Theory isn't competence. Have you made real decisions with real consequences and learned from failures?

**Do you know the second-order effects?** Experts know not just "what happens" but "what happens next, and next."

**Can you predict better than average?** Competence shows up in prediction accuracy.

**How to expand your circle:**

Study deeply, not broadly. Learn from practitioners, not just books. Get feedback from reality. Embrace mistakes as tuition.

Most importantly: **be honest about the boundary**. The edge of your circle is where humility matters most.`,
      keyTakeaway: "Circle of competence means knowing what you deeply understand, respecting those boundaries, and only expanding through deliberate learning.",
      actionItem: "Map your circle of competence. List 3 areas where you have genuine expertise and 3 where you think you know more than you do."
    }
  },
  {
    id: "mm-004",
    title: "Quiz: Core Mental Models",
    type: "quiz",
    duration: 8,
    xpReward: 100,
    content: {
      overview: "Test your understanding of inversion and circle of competence.",
      mainContent: `## Check Your Mental Model Mastery

Let's verify you understand how to apply these fundamental thinking tools.`,
      keyTakeaway: "Mental models are only useful when you can recognize when and how to apply them.",
      quiz: {
        question: "You're considering a career change into a high-growth field you find exciting but know little about. Using circle of competence, what's the BEST approach?",
        options: [
          "Don't do it—stay forever within your current circle",
          "Jump in immediately to learn by doing—competence comes from experience",
          "Acknowledge you're outside your circle and will be at a disadvantage initially; expand competence deliberately before making major bets",
          "Hire experts to advise you so you don't need to build competence yourself"
        ],
        correct: 2,
        explanation: "Circle of competence doesn't mean never learning new things—it means being honest about where you are. Acknowledge you're a novice, expect to be outcompeted by experts, and build genuine competence (through study and experience) before making large irreversible bets. You can expand your circle, but you must respect the learning curve."
      }
    }
  },
  {
    id: "mm-005",
    title: "Second-Order Thinking: Consequences of Consequences",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "First-order thinking stops at immediate effects; second-order thinking asks what happens next.",
      mainContent: `## Seeing Beyond the Obvious

Prohibition in 1920s America seemed logical at first-order: ban alcohol → less drinking → healthier society.

Second-order effects destroyed the plan: alcohol ban → underground production → organized crime → violence and corruption → disrespect for law → **worse outcomes than the original problem**.

> "First-level thinking is simplistic and superficial... Second-level thinking is deep, complex, and convoluted." — Howard Marks

**First-order thinking:** Immediate, obvious, surface-level consequences. "If I do X, Y will happen."

**Second-order thinking:** Consequences of consequences. "If I do X, Y will happen, which will cause Z, which will lead to..."

**Examples:**

**First-order:** Lower prices → more customers.

**Second-order:** Lower prices → more customers → need more support staff → higher costs → squeezed margins → quality cuts to maintain margins → customer dissatisfaction → churn increases → total revenue falls.

**First-order:** Automate this task → save time.

**Second-order:** Automate task → employee who did it loses skill development opportunity → less prepared for complex challenges → team capability atrophies → over-dependence on automation → fragility when automation fails.

**First-order:** Win this argument → feel validated.

**Second-order:** Win this argument → damage relationship → person avoids bringing problems to you → less information → worse decisions → long-term loses.

**Why second-order thinking is rare:**

**It's mentally taxing.** Easier to stop at the obvious answer.

**Consequences are delayed.** First-order effects are immediate and visible; second-order effects often appear much later.

**Consequences are less certain.** First-order effects are predictable; second-order involves more variables and uncertainty.

**How to practice second-order thinking:**

**Always ask "And then what?"** Keep asking until you reach an endpoint or loop.

**Consider multiple stakeholders.** First-order thinking focuses on yourself; second-order considers how others will react and adapt.

**Think in time horizons.** What happens in a week? A month? A year? Five years?

**Look for unintended consequences.** What will people do in response that you didn't anticipate?

The best decisions balance first-order gains against second-order costs—or accept first-order pain for second-order gains.`,
      keyTakeaway: "Second-order thinking means tracing consequences beyond the immediate and obvious to see the full chain of effects.",
      actionItem: "Take a decision you're considering. Map it three levels deep: First-order (immediate), second-order (what happens because of first-order), third-order (what happens because of second-order)."
    }
  },
  {
    id: "mm-006",
    title: "Incentives: The Super-Power Model",
    type: "concept",
    duration: 13,
    xpReward: 100,
    content: {
      overview: "Show me the incentive and I'll show you the outcome—people respond to rewards and punishments, not intentions.",
      mainContent: `## Understanding What Drives Behavior

In the 1700s, British government paid ship captains for every prisoner transported to Australia. Lots of prisoners died en route—captains had no incentive to keep them alive, only to load them on ships.

The government changed the incentive: **pay per prisoner delivered alive**. Suddenly, survival rates soared. Captains invested in food, healthcare, and safe conditions. Same people, different incentives, completely different outcomes.

> "Never, ever, think about something else when you should be thinking about the power of incentives." — Charlie Munger

**Incentives are the most powerful force shaping behavior.** Stronger than:

- Good intentions ("I want to be healthy" fails against the incentive of immediate pleasure)
- Intelligence (smart people respond to incentives like everyone else)
- Morality (even good people cut corners when incentives push them that way)

**Types of incentives:**

**Financial:** Money, bonuses, commissions, fees. Obvious and powerful.

**Social:** Status, reputation, approval, belonging. Often stronger than financial.

**Psychological:** Identity, consistency, loss aversion, ego. We do things to maintain self-image.

**Moral:** Doing the "right thing," fairness, reciprocity. Real but easily overwhelmed by other incentives.

**Examples of incentive power:**

**Sales commissions:** Pay per sale → salespeople push products customers don't need. Pay for customer retention → salespeople focus on good matches.

**Teacher incentives:** Pay for test scores → teaching to the test, cheating scandals. Pay for student growth → genuine learning focus.

**Medical incentives:** Pay per procedure → over-treatment. Pay for health outcomes → prevention and appropriate care.

**How to think about incentives:**

**Follow the money (or status, or power).** Where does the reward come from? That's what gets optimized.

**Look for misaligned incentives.** When someone's incentive differs from yours, expect their behavior to reflect theirs, not yours.

**Design systems around incentives.** Don't rely on people being "better." Change the incentive structure to naturally drive desired behavior.

**Watch for unintended incentives.** Every rule, policy, or reward creates incentives—some you didn't intend.

**Combine with other models:** Incentives + **second-order thinking** = "What behavior will this incentive actually create down the line?" Incentives + **systems thinking** = "What feedback loops do these incentives create?"

Remember: People aren't good or bad—they respond to incentives. Design the incentives, design the outcome.`,
      keyTakeaway: "Incentives powerfully shape behavior—people optimize for what's rewarded, not what's intended. Always ask: What's actually being incentivized?",
      actionItem: "Examine a recurring problem at work or home. What's the current incentive structure? What behavior is being rewarded (even accidentally)? How could you redesign incentives?"
    }
  },
  {
    id: "mm-007",
    title: "Quiz: Second-Order Thinking and Incentives",
    type: "quiz",
    duration: 8,
    xpReward: 100,
    content: {
      overview: "Test your understanding of consequences and incentive structures.",
      mainContent: `## Check Your Advanced Model Thinking

Second-order thinking and incentives are among the most powerful mental models for predicting outcomes.`,
      keyTakeaway: "Combining mental models reveals insights that single models miss.",
      quiz: {
        question: "A company starts measuring engineers by lines of code written. What's the most likely SECOND-ORDER effect?",
        options: [
          "Engineers become more productive because they have clear metrics",
          "Code quality decreases as engineers optimize for quantity over quality, creating technical debt and future maintenance costs",
          "Engineers quit because they dislike being measured",
          "The company saves money by identifying low performers"
        ],
        correct: 1,
        explanation: "First-order: engineers write more code (meeting the metric). Second-order: engineers optimize for the metric, not quality—they write verbose, bloated code and avoid refactoring (which reduces lines). This creates technical debt, bugs, and maintenance burden. The incentive (lines of code) creates behavior (quantity over quality) that damages the actual goal (good software). This is a classic example of Goodhart's Law: 'When a measure becomes a target, it ceases to be a good measure.'"
      }
    }
  },
  {
    id: "mm-008",
    title: "Reflection: Building Your Model Latticework",
    type: "reflection",
    duration: 15,
    xpReward: 100,
    content: {
      overview: "Apply multiple mental models to analyze a complex decision or situation.",
      mainContent: `## Integrating Mental Models

You've learned five powerful models: **inversion**, **circle of competence**, **second-order thinking**, **incentives**, and the **latticework approach** itself.

Now practice **multidisciplinary thinking**—applying multiple models to see a situation from different angles.

**Choose a significant decision or challenge:**
- A career move
- A business strategy
- An investment
- A relationship decision
- A major purchase

**Analyze it through each model:**

**1. Inversion:** How would you guarantee this decision fails? What are you trying to avoid?

**2. Circle of Competence:** Is this within your circle? If not, how will you compensate? What do you need to learn before committing?

**3. Second-Order Thinking:** Map the consequences three levels deep. What happens? What happens because of that? And then what?

**4. Incentives:** What are YOUR incentives (conscious and unconscious)? What are others' incentives? Are they aligned or conflicting?

**5. Connections:** How do these models interact? Do incentives + second-order thinking reveal risks? Does inversion + circle of competence suggest preparation steps?

> "I think it is undeniably true that the human brain must work in models. The trick is to have your brain work better than the other person's brain because it understands the most fundamental models—ones that will do most work per unit." — Charlie Munger

**Document your analysis:**

Write out your thinking for each model. The act of writing forces clarity and reveals gaps in reasoning.

**Make a decision:**

Better thinking doesn't guarantee perfect outcomes (uncertainty remains), but it dramatically improves your odds. What does your multi-model analysis suggest?

This exercise is **meta-learning**—you're not just learning models, you're learning to combine them. This is where the real power lives.`,
      keyTakeaway: "The latticework approach combines multiple mental models to see situations from different angles, revealing insights single models miss.",
      actionItem: "Complete your multi-model analysis. Which model revealed the most surprising insight? Which combination of models was most powerful?"
    }
  }
];
