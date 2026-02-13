import type { PathwayLesson } from "@/types";

export const decideLessonsLevel1: PathwayLesson[] = [
  {
    id: "decide-001",
    title: "Welcome to Decision Making Mastery",
    type: "intro",
    duration: 10,
    xpReward: 100,
    content: {
      overview: "Great decisions aren't about being right—they're about thinking in probabilities and managing uncertainty.",
      mainContent: `## The Art and Science of Choosing

Annie Duke, professional poker player turned decision strategist, made millions by understanding one principle: **You can't judge the quality of a decision by the outcome.**

A good decision with bad luck is still a good decision. A bad decision with good luck is still a bad decision. But most people confuse these—they **result in bias**, judging decisions by outcomes instead of process.

> "In most of our decisions, we are not betting against another person. Rather, we are betting against all the future versions of ourselves that we are not choosing." — Annie Duke

**Why decision-making is hard:**

**Uncertainty is fundamental.** We never have complete information. The future is probabilistic, not deterministic.

**Cognitive biases distort judgment.** Confirmation bias, availability bias, sunk cost fallacy, overconfidence—our brains systematically mislead us.

**Emotions override logic.** Fear, greed, ego, and social pressure influence decisions more than we admit.

**Feedback is delayed and noisy.** You make a decision today; consequences appear months or years later, mixed with other factors.

**The decision-making framework:**

**Define the decision clearly.** What exactly are you choosing? What are the real options?

**Identify what matters.** What criteria determine success? Revenue? Happiness? Learning? Time?

**Gather information efficiently.** More information helps, but diminishing returns hit fast. Don't let research become procrastination.

**Think probabilistically.** Estimate likelihoods and magnitudes. "70% chance this generates $100K, 30% chance it loses $20K."

**Account for biases.** Use frameworks to counteract systematic thinking errors.

**Make the call.** Perfection is impossible. Good process + decisive action beats perfect analysis + paralysis.

**Learn from outcomes.** Not "was I right?" but "what did I learn? What would I do differently?"

**The meta-skill:** Decisions compound. Small improvements in decision quality—1% better each time—create exponential advantage over time. Warren Buffett's success isn't one brilliant decision; it's decades of slightly-better-than-average decisions compounding.

This module will teach you frameworks, probabilistic thinking, bias mitigation, and decision processes used by the best thinkers in the world.`,
      keyTakeaway: "Great decision-making means thinking probabilistically, accounting for biases, and judging decisions by process, not just outcomes.",
      actionItem: "Recall a recent decision where the outcome was bad. Was the decision process bad, or was it just bad luck? How can you tell the difference?"
    }
  },
  {
    id: "decide-002",
    title: "Probabilistic Thinking: Embracing Uncertainty",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "The future is uncertain—thinking in probabilities and expected value improves decisions under uncertainty.",
      mainContent: `## From Binary to Probabilistic

Most people think in binaries: "Will this work or not? Is this true or false? Should I do it or not?"

Skilled decision-makers think in probabilities: "What's the likelihood this works? How confident am I? What's the expected value?"

**Why probabilities matter:**

Imagine two investment opportunities:

**Option A:** 90% chance of 10% return, 10% chance of losing everything.

**Option B:** 50% chance of 200% return, 50% chance of 0% return.

Binary thinking picks one and hopes. Probabilistic thinking calculates **expected value**:

- **Option A expected value:** (0.9 × 0.1) + (0.1 × -1) = -0.01 (negative!)
- **Option B expected value:** (0.5 × 2) + (0.5 × 0) = 1.0 (positive!)

Option A feels safer (90% success rate!) but has negative expected value. Option B feels risky but has much better expected value. This is why poker players and investors think probabilistically.

> "We live in a world where you don't get full credit for the decisions that work out well, but you also don't get docked too much for decisions that don't work out. That's why you should think probabilistically." — Jeff Bezos

**How to think probabilistically:**

**Assign confidence levels.** Instead of "this will work," say "I'm 70% confident this will work." Forces you to acknowledge uncertainty.

**Estimate ranges, not point estimates.** Revenue won't be exactly $500K—it might be $300K-$700K with highest probability around $500K.

**Consider multiple scenarios.** Base case, best case, worst case. What's the likelihood of each? What do you do in each?

**Calculate expected value.** (Probability of outcome A × Value of A) + (Probability of outcome B × Value of B) + ...

**Update probabilities with new information.** Bayesian thinking: start with prior probability, update based on evidence.

**Example: Career decision**

Stay at current job:
- 80% chance: steady $150K/year, moderate satisfaction
- 15% chance: promotion to $200K/year, high satisfaction
- 5% chance: layoff, 6 months unemployed

Expected value: (0.8 × 150K) + (0.15 × 200K) + (0.05 × -50K) = $147.5K

Join startup:
- 10% chance: company succeeds, equity worth $2M
- 30% chance: moderate success, equity worth $200K, salary $120K
- 60% chance: company fails, 1 year at $100K then job search

This isn't just about money—include satisfaction, learning, optionality. But probabilistic thinking makes trade-offs explicit.`,
      keyTakeaway: "Probabilistic thinking means estimating likelihoods and expected values instead of binary yes/no judgments.",
      actionItem: "Take a decision you're facing. Assign probabilities to different outcomes. Calculate expected value for each option. What does this reveal?"
    }
  },
  {
    id: "decide-003",
    title: "Cognitive Biases: Your Brain's Systematic Errors",
    type: "concept",
    duration: 13,
    xpReward: 100,
    content: {
      overview: "Our brains have predictable bugs—knowing them helps you make better decisions.",
      mainContent: `## The Predictable Irrationality of Human Judgment

Daniel Kahneman won a Nobel Prize for discovering that humans aren't rational—we're **predictably irrational**. We make systematic errors called cognitive biases.

> "We're blind to our blindness. We have very little idea of how little we know. We're not designed to know how little we know." — Daniel Kahneman

**Key biases that ruin decisions:**

**Confirmation bias:** We seek information that confirms existing beliefs and ignore contradicting evidence. Investors fall in love with a stock and only read bullish analysis.

**Availability bias:** We overweight recent, vivid, or easily recalled information. A shark attack makes people fear beaches more than driving, even though driving is far more dangerous.

**Anchoring bias:** First numbers we see influence subsequent estimates. Negotiation tip: whoever names a number first sets the anchor—counterintuitively, this often helps them.

**Sunk cost fallacy:** We continue investing in losing propositions because we've already invested. "I've already spent $10K on this, I can't quit now." Rational decision: ignore sunk costs, only consider future costs vs. benefits.

**Overconfidence bias:** We overestimate our knowledge, abilities, and the accuracy of our predictions. 90% of drivers think they're above average (mathematically impossible).

**Recency bias:** Recent events feel more predictive than they are. Market just crashed? People assume it'll keep crashing (it might, or it might rebound).

**Hindsight bias:** After an outcome, we think it was more predictable than it was. "I knew that would happen!" (No, you didn't—you're retrofitting certainty.)

**How to mitigate biases:**

**Pre-commit to decision criteria.** Decide what evidence would change your mind BEFORE seeing the evidence. Prevents confirmation bias.

**Seek disconfirming evidence actively.** Assign someone the role of devil's advocate. What would prove you wrong?

**Use base rates and outside view.** Don't just imagine your specific situation. What's the base rate for similar situations? Most startups fail—yours might succeed, but start with that prior.

**Run pre-mortems.** Assume the decision failed spectacularly. Why? This surfaces risks optimism bias hides.

**Use checklists.** Pilots use checklists because memory is fallible and stress degrades performance. Decisions are the same.

**Separate information gathering from decision-making.** Gather data without knowing how it'll be used to reduce confirmation bias.

You can't eliminate biases, but you can design processes that counteract them.`,
      keyTakeaway: "Cognitive biases systematically distort judgment—awareness and structured processes help counteract them.",
      actionItem: "Review a recent decision. Which bias influenced you most? How could you have designed your process to counteract it?"
    }
  },
  {
    id: "decide-004",
    title: "Quiz: Probability and Bias",
    type: "quiz",
    duration: 8,
    xpReward: 100,
    content: {
      overview: "Test your understanding of probabilistic thinking and cognitive biases.",
      mainContent: `## Check Your Decision Foundations

Probabilistic thinking and bias awareness are fundamental to good decision-making.`,
      keyTakeaway: "Understanding probability and biases prevents systematic decision errors.",
      quiz: {
        question: "You've invested $50K in a failing project. Continuing requires another $30K with 20% success chance ($200K return) and 80% failure chance (lose the $30K). Using rational decision-making, what should you do?",
        options: [
          "Continue—you've already invested $50K, quitting would waste that investment",
          "Quit—you should never throw good money after bad",
          "Calculate expected value of continuing: (0.2 × $200K) + (0.8 × -$30K) = $16K expected value, which is positive, so continue IF this exceeds your next-best opportunity",
          "Continue only if you can get the $50K back"
        ],
        correct: 2,
        explanation: "The $50K is a sunk cost—it's gone regardless of what you do next. Option A falls for the sunk cost fallacy. Rational decision: ignore sunk costs, calculate expected value of continuing ($16K positive), then compare to alternative uses of $30K. If continuing has the highest expected value, do it—not because of the $50K already spent, but because the forward-looking calculation justifies it. Option B is too simplistic (sometimes you should continue). Option D is impossible (sunk costs can't be recovered)."
      }
    }
  },
  {
    id: "decide-005",
    title: "Decision Frameworks: Structure for Better Choices",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "Frameworks provide structure that improves decision consistency and quality.",
      mainContent: `## Structured Approaches to Complex Choices

Jeff Bezos uses a simple framework for decisions: **Type 1 vs. Type 2 decisions.**

**Type 1 (one-way doors):** Irreversible or very costly to reverse. Examples: mergers, hiring senior leaders, major platform choices. These deserve deep analysis, slow deliberation, and high consensus.

**Type 2 (two-way doors):** Reversible. Examples: feature launches, marketing campaigns, pricing tests. These should be made quickly by small teams or individuals with good judgment.

Most organizations treat all decisions like Type 1, leading to analysis paralysis. Bezos: "Move fast on Type 2 decisions—you can always walk back through the door."

> "Most decisions should probably be made with somewhere around 70% of the information you wish you had. If you wait for 90%, in most cases, you're probably being slow." — Jeff Bezos

**Other powerful frameworks:**

**The Regret Minimization Framework (Bezos):** Imagine yourself at age 80 looking back. Which choice will you regret less? Removes short-term emotion.

**10/10/10 Rule (Suzy Welch):** How will you feel about this decision in 10 minutes? 10 months? 10 years? Surfaces time-horizon mismatches.

**Hell Yeah or No (Derek Sivers):** If you're not saying "Hell yeah!" about an opportunity, say no. Prevents half-hearted commitments.

**Expected Value + Asymmetric Upside:** Prefer decisions with unlimited upside and limited downside. Angel investing: lose at most 1x, potentially gain 100x+.

**The Eisenhower Matrix:** Urgent/Important grid. Do important+urgent, schedule important+not urgent, delegate urgent+not important, eliminate not important+not urgent.

**Pre-mortem:** Before committing, assume the decision failed catastrophically. Why? Surface hidden risks.

**Kill Criteria:** Before starting, define: "What evidence would make me stop?" Prevents sunk cost fallacy.

**WRAP Framework (Chip and Dan Heath):**
- **Widen your options:** Don't just yes/no—find more alternatives
- **Reality-test assumptions:** Seek disconfirming evidence
- **Attain distance:** Remove emotion, take outside view
- **Prepare to be wrong:** Plan for multiple scenarios

**When to use which framework:**

High-stakes + irreversible → Pre-mortem, WRAP, deep analysis

Low-stakes + reversible → Hell Yeah or No, quick decision

Career/life choices → Regret Minimization

Time management → Eisenhower Matrix

Uncertain outcomes → Expected Value, Probabilistic Thinking

The meta-framework: **Match decision process to decision type.** Don't over-analyze trivial choices or under-analyze crucial ones.`,
      keyTakeaway: "Decision frameworks provide structure that matches process to decision type, improving both speed and quality.",
      actionItem: "Categorize your current decisions: Which are Type 1 (one-way doors) vs. Type 2 (reversible)? Are you spending appropriate time on each?"
    }
  },
  {
    id: "decide-006",
    title: "Quiz: Decision Frameworks",
    type: "quiz",
    duration: 8,
    xpReward: 100,
    content: {
      overview: "Test your ability to apply decision frameworks correctly.",
      mainContent: `## Check Your Framework Application

The right framework depends on decision characteristics—reversibility, stakes, uncertainty.`,
      keyTakeaway: "Matching the right framework to the decision type improves outcomes.",
      quiz: {
        question: "You're considering whether to pivot your startup's core product. Which decision framework is MOST appropriate?",
        options: [
          "Hell Yeah or No—if you're not excited about the pivot, don't do it",
          "Type 2 decision—just try it quickly and reverse if it doesn't work",
          "Pre-mortem + WRAP framework—this is high-stakes and hard to reverse, requiring deep analysis of risks and alternatives",
          "10/10/10 rule—consider how you'll feel in 10 minutes, months, and years"
        ],
        correct: 2,
        explanation: "Product pivots are Type 1 decisions (one-way doors)—they're expensive to reverse, require significant resources, and have high stakes. This demands rigorous analysis: Pre-mortem (what could go catastrophically wrong?), WRAP (widen options, reality-test assumptions, attain distance, prepare for failure). Option A (Hell Yeah) is for low-stakes yes/no choices. Option B misclassifies this as Type 2 (it's not easily reversible). Option D (10/10/10) helps with emotional decisions but doesn't provide the analytical depth needed."
      }
    }
  },
  {
    id: "decide-007",
    title: "The Art of Knowing When to Decide",
    type: "concept",
    duration: 11,
    xpReward: 100,
    content: {
      overview: "Timing matters—knowing when you have enough information to decide is itself a crucial skill.",
      mainContent: `## Between Paralysis and Recklessness

Two decision-making failure modes:

**Analysis paralysis:** Endlessly gathering information, never committing. Perfectionism disguised as thoroughness.

**Reckless speed:** Deciding without sufficient information. Arrogance disguised as decisiveness.

The sweet spot: **Decide at the point where additional information costs more than its expected value.**

> "The cost of a wrong decision is less than the cost of indecision." — Anonymous

**When you have enough information:**

**Diminishing returns hit.** The first hour of research reveals 80% of what matters. The next 10 hours add 15%. The next 100 hours add 5%. Stop when marginal value drops below marginal cost.

**The decision is reversible.** If you can easily change course, decide faster. Test and learn beats analyze and plan.

**The opportunity window is closing.** Sometimes acting with 60% information is better than waiting for 90% and missing the window.

**You've identified key uncertainties.** You won't eliminate uncertainty—you can only identify what's unknown and decide if you can tolerate that risk.

**When you need more information:**

**The decision is irreversible.** Marriages, major acquisitions, core product decisions—these justify more diligence.

**You're operating outside your circle of competence.** Lack of expertise means you can't judge quality of available information.

**Key assumptions are untested.** If success depends on assumptions you haven't validated, test them before fully committing.

**The cost of waiting is low.** No urgency? Take your time.

**How to calibrate your decision timing:**

**Track your decision outcomes.** Are you deciding too fast (high error rate) or too slow (missed opportunities)? Adjust.

**Use Bezos's 70% rule.** When you have 70% of the information you wish you had, decide. Waiting for 90%+ is usually too slow.

**Set decision deadlines.** "I'll gather information until Friday, then decide regardless." Prevents endless analysis.

**Pre-commit to action triggers.** "If X happens, I'll choose option A. If Y happens, option B." Removes emotion from the moment of decision.

**Distinguish uncertainty from ambiguity.** Uncertainty = unknown probability (you can estimate). Ambiguity = unknown unknowns (you don't even know what you don't know). Ambiguity requires more information; uncertainty requires probabilistic thinking.

The goal isn't perfect timing—it's **slightly better calibration** than your default tendency.`,
      keyTakeaway: "Decide when marginal information value falls below marginal information cost—typically around 70% of desired information.",
      actionItem: "Reflect on your decision tendencies. Do you lean toward analysis paralysis or premature decisions? How could you better calibrate?"
    }
  },
  {
    id: "decide-008",
    title: "Reflection: Your Decision Audit",
    type: "reflection",
    duration: 15,
    xpReward: 100,
    content: {
      overview: "Audit a significant decision using probabilistic thinking, bias awareness, and frameworks.",
      mainContent: `## Learning from Your Decision Process

Choose an **important decision** you're currently facing or recently made:

- Career change
- Investment or major purchase
- Business strategy
- Relationship decision
- Major project commitment

**Complete this decision audit:**

**1. Decision classification**
- Type 1 (one-way door) or Type 2 (reversible)?
- High stakes or low stakes?
- High uncertainty or well-understood?
- Time-sensitive or flexible?

**2. Probabilistic analysis**
- What are the possible outcomes?
- What probability would you assign to each?
- What's the expected value of each option?
- What's the best case, worst case, and most likely case?

**3. Bias check**
- Which cognitive biases might be influencing you?
- Are you falling for sunk cost fallacy?
- Are you overconfident in your predictions?
- Are you seeking only confirming information?
- What's the outside view / base rate for decisions like this?

**4. Framework application**
- Which decision framework best fits this decision?
- If using pre-mortem: How could this fail spectacularly?
- If using regret minimization: What will 80-year-old you wish you'd done?
- If using WRAP: What other options exist? What assumptions need testing?

**5. Information assessment**
- What do you know? What don't you know?
- What's the cost of gathering more information?
- What's the cost of waiting to decide?
- Are you at 70% information, or still below that threshold?

**6. Action plan**
- What's your decision?
- What's your confidence level?
- What would change your mind?
- How will you know if this decision was good (not just lucky)?
- When will you review this decision to learn from it?

> "In the end, a decision is nothing more than the allocation of resources... The quality of your life comes down to the quality of your decisions." — Ray Dalio

**Document your process.** Writing clarifies thinking and creates a record for future learning.

**Share for feedback.** Others see biases and gaps you're blind to.

This isn't about getting it right—it's about **improving your decision process**, which compounds over time.`,
      keyTakeaway: "Auditing decisions with frameworks, probability, and bias checks improves decision quality and creates learning feedback loops.",
      actionItem: "Complete your decision audit. What did this structured process reveal that intuition missed? Make the decision, then schedule a review in 3-6 months to learn from the outcome."
    }
  }
];
