import type { PathwayLesson } from "@/types";

export const riskLessonsLevel1: PathwayLesson[] = [
  {
    id: "risk-001",
    title: "Welcome to Risk Management",
    type: "intro",
    duration: 10,
    xpReward: 100,
    content: {
      overview: "Risk isn't something to eliminate—it's something to understand, price, and manage strategically.",
      mainContent: `## The Nature of Risk

In 1998, Long-Term Capital Management (LTCM) had Nobel Prize winners, sophisticated models, and 99.9% confidence in their risk calculations. They were wrong. A Russian debt crisis they rated as near-impossible happened, and LTCM collapsed, nearly taking the financial system with it.

What killed them? **Tail risk**—low-probability, high-impact events that models underestimate.

> "Risk comes from not knowing what you're doing." — Warren Buffett

**Risk isn't inherently bad.** Every reward requires some risk. The question isn't "how do I avoid all risk?" but "which risks am I equipped to take, and which could destroy me?"

**Types of risk:**

**Known risks:** You understand the probability and impact. Driving a car has quantifiable accident risk. You manage this with insurance, defensive driving, and maintenance.

**Unknown risks (uncertainty):** You know something could go wrong but can't quantify it precisely. Starting a business has uncertain revenue projections.

**Unknown unknowns (Black Swans):** Events you didn't even imagine. COVID-19 for most industries, 9/11, the 2008 financial crisis.

**The key distinction: Risks of ruin vs. acceptable risks**

**Risks of ruin** can permanently impair you—death, bankruptcy, catastrophic reputation damage, unrecoverable losses. These must be avoided absolutely, regardless of potential upside.

**Acceptable risks** might hurt but won't destroy you. You can recover, learn, and try again.

Nassim Taleb's rule: **Never take a risk that could wipe you out, no matter how small the probability.** Over enough iterations, low-probability events become certainties.

**The risk management mindset:**

**Identify what could go wrong.** Comprehensive risk mapping before committing.

**Distinguish ruin risks from acceptable risks.** Protect against the former, embrace the latter strategically.

**Build redundancy and margin of safety.** Buffers absorb shocks you didn't predict.

**Seek asymmetric risk/reward.** Prefer situations where downside is limited but upside is unlimited.

**Learn from near-misses.** If something almost went wrong, treat it as seriously as if it did—it reveals fragility.

This module teaches you to think about risk like a world-class investor, not a fearful amateur.`,
      keyTakeaway: "Risk management means distinguishing risks of ruin (avoid absolutely) from acceptable risks (embrace strategically for potential reward).",
      actionItem: "List three major risks in your life or work. Which are risks of ruin? Which are acceptable risks? Are you treating them appropriately?"
    }
  },
  {
    id: "risk-002",
    title: "Tail Risks and Black Swans",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "Low-probability, high-impact events occur more often than models predict and cause most catastrophic losses.",
      mainContent: `## The Events That Shouldn't Happen

The 2008 financial crisis was rated by risk models as a **25-standard-deviation event**—something that should happen once every 13.7 billion years. But it happened in our lifetime.

Why? Models assumed normal distributions (bell curves), but financial markets have **fat tails**—extreme events happen far more often than bell curves predict.

> "The Black Swan is the outlier that carries an extreme impact. Against all our wishes, the unexpected happens." — Nassim Taleb

**What makes Black Swans dangerous:**

**They're outside normal experience.** No amount of observing white swans proves black swans don't exist. Pre-2008, no modern generation had seen a global financial meltdown.

**Retrospective predictability.** After the fact, we convince ourselves it was predictable (hindsight bias). This prevents learning the real lesson: **our models are always incomplete**.

**Extreme impact.** Black Swans dominate outcomes. In finance, a few catastrophic days determine decade-long returns. In careers, a few key opportunities determine lifetime success.

**Examples of tail risks:**

**Financial:** Market crashes, currency collapses, unexpected regulations, fraud

**Business:** Key person loss, major customer churn, technology disruption, lawsuit

**Personal:** Health crises, accidents, natural disasters, career setbacks

**Geopolitical:** Wars, pandemics, regime changes, supply chain collapses

**How to prepare for tail risks:**

**Avoid exposure to ruin.** Taleb's rule: Don't fly on a plane with a 95% safety record. Don't invest in strategies that work 95% of the time but destroy you 5% of the time. One ruin event ends the game.

**Build redundancy.** Multiple income streams, emergency funds, backup suppliers, distributed systems. Redundancy seems wasteful—until it saves you.

**Stress test assumptions.** What if your key assumption is wrong? What if the unlikely happens? Pre-mortem analysis surfaces tail risks.

**Limit downside, preserve upside.** Options-like payoffs: lose small amounts most of the time, win massively occasionally. Angel investing, entrepreneurship with savings, dating.

**Use the barbell strategy.** Taleb's approach: Put 90% in extremely safe assets, 10% in extremely risky high-upside bets. Avoid the middle (medium risk, medium return) where tail risks hide.

**Stay antifragile.** Some systems get stronger from shocks (evolution, immune systems, entrepreneurial ecosystems). Design your life to benefit from volatility, not just survive it.

**Track near-misses.** If something almost went catastrophically wrong, you got lucky. Fix the vulnerability before luck runs out.

You can't predict Black Swans, but you can position yourself to survive—or even benefit from—them.`,
      keyTakeaway: "Tail risks (Black Swans) happen more often than models predict and cause catastrophic losses—protect against ruin, embrace volatility strategically.",
      actionItem: "Identify your biggest tail risk—the low-probability event that would destroy you. What redundancy or protection could you build?"
    }
  },
  {
    id: "risk-003",
    title: "Margin of Safety: Your Risk Buffer",
    type: "concept",
    duration: 11,
    xpReward: 100,
    content: {
      overview: "Building buffers and safety margins protects you from errors, bad luck, and unexpected events.",
      mainContent: `## The Power of Buffers

Benjamin Graham, Warren Buffett's mentor, had one core principle: **margin of safety**. Never pay $1 for something worth $1—pay $0.50. The 50% discount is your buffer against valuation errors, bad luck, and changing conditions.

Buffett used this to build $100+ billion. When asked his secret, he said: **"Rule #1: Never lose money. Rule #2: Never forget Rule #1."** Margin of safety is how you follow that rule.

> "The margin of safety is always dependent on the price paid. It will be large at one price, small at another price, and nonexistent at some higher price." — Benjamin Graham

**Margin of safety across domains:**

**Investing:** Buy assets worth $100 for $60. Even if your valuation is 20% off, you still profit. If things go better than expected, you profit massively.

**Finance:** Keep 6-12 months expenses in emergency funds. Underestimate income, overestimate expenses. This buffer absorbs job loss, health issues, or economic downturns.

**Engineering:** Build bridges rated for 10x expected load. Airplanes have redundant systems. Space shuttles have backup backups. Over-engineering seems wasteful until it prevents catastrophe.

**Time management:** Estimate tasks, then double the time. Protect yourself against planning fallacy and unexpected delays.

**Business:** Maintain cash reserves, diversify customers, avoid single points of failure. Companies that operate on thin margins die in recessions.

**Relationships:** Build trust surplus. Don't operate transactionally—give more than you take. The surplus buffers inevitable conflicts.

**Why margin of safety works:**

**It protects against your own errors.** You're not as smart as you think. Your estimates are wrong. Margin of safety absorbs this.

**It protects against bad luck.** Even good decisions have unlucky outcomes. Buffers keep you in the game long enough for luck to even out.

**It allows you to take advantage of opportunities.** Cash reserves let you invest when assets are cheap (everyone else is forced to sell). Time buffers let you say yes to unexpected opportunities.

**It compounds.** Avoiding losses matters more than maximizing gains. Lose 50%, you need 100% gain to recover. Avoiding big losses through margin of safety enables long-term compounding.

**How to build margin of safety:**

**Price conservatively.** Whether buying, selling, or estimating, build in a buffer.

**Diversify.** Multiple income sources, multiple customers, multiple skills. Don't bet everything on one outcome.

**Maintain reserves.** Cash, time, energy, goodwill—have more than you "need."

**Avoid leverage.** Borrowing (financial, temporal, reputational) eliminates margin of safety. You become fragile to shocks.

Margin of safety isn't about being paranoid—it's about **staying in the game long enough to win**.`,
      keyTakeaway: "Margin of safety means building buffers (financial, temporal, relational) that protect against errors, bad luck, and unexpected shocks.",
      actionItem: "Audit your buffers. Do you have emergency savings? Time padding? Skill diversification? Where is your margin of safety too thin?"
    }
  },
  {
    id: "risk-004",
    title: "Quiz: Tail Risks and Safety Margins",
    type: "quiz",
    duration: 8,
    xpReward: 100,
    content: {
      overview: "Test your understanding of tail risks and margin of safety principles.",
      mainContent: `## Check Your Risk Foundation

Understanding tail risks and safety margins is fundamental to avoiding catastrophic losses.`,
      keyTakeaway: "Protecting against ruin through margin of safety and tail risk awareness enables long-term success.",
      quiz: {
        question: "You're offered an investment: 95% chance of 15% return, 5% chance of losing everything. Your entire net worth is $100K, and you're considering investing $80K. What's the BEST risk assessment?",
        options: [
          "Take it—95% success rate is excellent, and 15% return is strong",
          "Calculate expected value: (0.95 × 0.15) - (0.05 × 1.0) = 0.0925 or 9.25% expected return, which is positive, so take it",
          "Reject it—the 5% ruin risk destroys your margin of safety. Even with positive expected value, one occurrence wipes you out permanently",
          "Negotiate for better terms, like 98% success rate instead of 95%"
        ],
        correct: 2,
        explanation: "This is a classic ruin risk disguised as good expected value. Option A ignores tail risk. Option B makes the mathematical mistake of treating expected value as the only criterion—but expected value ONLY works over many iterations. You can't iterate if one loss wipes you out. Option C is correct: investing 80% of net worth in something with 5% total loss probability violates margin of safety principles. Over time, low-probability events become certainties—you'll eventually hit that 5%, and you're done. Option D doesn't solve the fundamental ruin risk. The right play: either don't invest, or invest only an amount you can afford to lose completely (maybe $5K-10K)."
      }
    }
  },
  {
    id: "risk-005",
    title: "Asymmetric Risk-Reward: Seeking Convexity",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "The best risks have limited downside and unlimited (or disproportionate) upside—seek asymmetry.",
      mainContent: `## The Geometry of Great Bets

Venture capitalists invest in 20 startups knowing 15 will fail, 4 will return capital, and 1 will return 100x. They're not trying to pick winners—they're seeking **asymmetric payoffs**.

**Asymmetric risk-reward:** Lose small amounts, win large amounts. Options-like payoffs where downside is capped but upside is unlimited.

> "Take risks where if you're wrong, you fail small, but if you're right, you win big." — Naval Ravikant

**Examples of asymmetry:**

**Angel investing:** Invest $10K in a startup. Worst case: lose $10K. Best case: 1000x return = $10M. Downside = 1x, upside = 1000x.

**Career asymmetry:** Working at a startup. Worst case: it fails, you get market-rate salary for a few years and learn a lot. Best case: equity worth millions + career acceleration. Downside is limited (you'd earn salary anyway), upside is massive.

**Creative work:** Write a book, build a product, create content. Worst case: small time investment, no traction. Best case: it compounds forever (books sell for decades, content goes viral, products scale).

**Relationships:** Meeting new people. Worst case: waste an hour on coffee. Best case: lifelong friend, business partner, or mentor who changes your trajectory.

**Contrast with symmetric or negative asymmetry:**

**Casino gambling:** Win 2x, lose 1x, but odds ensure you lose over time. Symmetric at best, negative expected value in reality.

**Employment at mature companies:** Salary is capped (limited upside), but you can be fired (downside exists). Symmetric-ish with slight negative asymmetry.

**High-leverage investments:** Borrow to invest. If right, you gain modestly more. If wrong, you lose everything plus debt. Negative asymmetry.

**Nassim Taleb's "antifragile" strategy:**

Some systems have **convexity**—they benefit more from positive shocks than they suffer from negative ones.

**Barbell approach:** Extreme safety (90% in treasury bonds) + extreme risk (10% in volatile, high-upside bets). Avoid the middle (medium-risk "safe" investments that actually have hidden tail risks).

**Why asymmetry matters:**

**You can be wrong most of the time and still win.** VCs are wrong 75% of the time but still make great returns because the 25% that work massively outperform.

**Losses are capped, gains compound.** Losing 1x many times is fine if you occasionally gain 100x.

**Psychological advantage.** You can take risks knowing "the worst case isn't that bad." This enables action where others freeze.

**How to seek asymmetry:**

**Look for optionality.** Decisions that preserve future choices have asymmetric upside.

**Invest in learning.** Knowledge compounds forever (upside), costs are one-time (limited downside).

**Build in public.** Share your work, ideas, writing. Downside: some criticism. Upside: opportunities you can't predict.

**Keep your downside small.** Never bet more than you can afford to lose. Always preserve ability to play again.

The secret to long-term success: **Make many small bets with asymmetric payoffs and avoid any single bet that could ruin you.**`,
      keyTakeaway: "Asymmetric risk-reward means limited downside with unlimited upside—seek convex payoffs where you can be wrong often but still win big.",
      actionItem: "Identify three opportunities with asymmetric risk-reward in your life. What small downside could lead to disproportionate upside?"
    }
  },
  {
    id: "risk-006",
    title: "Quiz: Asymmetric Risk",
    type: "quiz",
    duration: 8,
    xpReward: 100,
    content: {
      overview: "Test your understanding of asymmetric risk-reward and convexity.",
      mainContent: `## Check Your Asymmetry Thinking

Recognizing asymmetric opportunities is key to compounding success while limiting catastrophic failures.`,
      keyTakeaway: "Asymmetry allows you to be wrong often while still achieving outsized success through occasional massive wins.",
      quiz: {
        question: "Which situation has the MOST favorable asymmetric risk-reward?",
        options: [
          "Taking a 50% salary cut to join a late-stage startup with established revenue",
          "Using margin (borrowed money) to invest in index funds for potentially higher returns",
          "Writing a technical book in your field of expertise on nights/weekends while keeping your job",
          "Quitting your job to day-trade stocks full-time"
        ],
        correct: 2,
        explanation: "Option C (writing a book) has textbook asymmetric payoff: limited downside (nights/weekends time, small publishing costs, you keep your income), potentially unlimited upside (royalties compound forever, career opportunities, speaking gigs, consulting, increased reputation). Option A has significant downside (50% less income) with capped upside (late-stage equity rarely returns 100x). Option B has negative asymmetry (leverage amplifies losses more than gains, margin calls can wipe you out). Option D has catastrophic downside (no income, most day traders lose money) with capped upside (even successful traders rarely beat market indexes long-term). Asymmetry requires LIMITED downside + UNLIMITED or disproportionate upside."
      }
    }
  },
  {
    id: "risk-007",
    title: "Antifragility: Benefiting from Disorder",
    type: "concept",
    duration: 13,
    xpReward: 100,
    content: {
      overview: "Some systems don't just survive shocks—they get stronger from them. Build antifragile systems.",
      mainContent: `## Beyond Resilience

**Fragile** systems break under stress (china cups, complex financial instruments, centralized organizations).

**Robust** systems resist stress but don't improve (rocks, well-built bridges, redundant systems).

**Antifragile** systems get stronger from stress, shocks, and volatility (muscles, immune systems, evolutionary processes, entrepreneurial ecosystems).

> "Antifragility is beyond resilience or robustness. The resilient resists shocks and stays the same; the antifragile gets better." — Nassim Taleb

**How antifragility works:**

**Small stresses strengthen; large stresses destroy.** Muscles grow from exercise (small tears that heal stronger) but break from excessive weight. Businesses improve from competitive pressure but die from market collapse.

**Redundancy + randomness + selection = antifragility.** Evolution works because organisms have redundancy (many offspring), experience randomness (mutations), and selection kills the weak (only fit survive). Each generation gets stronger.

**Skin in the game.** When decision-makers bear consequences, systems self-correct quickly. No skin in the game → fragility builds invisibly until catastrophic failure.

**Optionality over prediction.** Antifragile approaches collect options (potential upsides) rather than betting on predictions. Can't predict the future? Position yourself to benefit from multiple futures.

**Examples of antifragility:**

**Career:** Don't specialize narrowly (fragile to that one skill becoming obsolete). Build complementary skills (writing + coding + marketing) that create convex combinations. Economic shocks reveal new opportunities for the multi-skilled.

**Business:** Amazon's "two-pizza teams" can fail individually without killing the company, but successful experiments scale massively. Failure strengthens the system through learning.

**Finance:** The barbell strategy (90% safe, 10% wild bets) benefits from volatility. Market crashes? Your safe assets are fine, and you can buy cheap. Market booms? Your wild bets pay off massively.

**Health:** Intermittent fasting, cold exposure, exercise—these are controlled stressors that trigger adaptive responses, making you stronger.

**Relationships:** Couples who constructively argue and repair grow stronger than couples who avoid conflict (hidden fragility). Small conflicts reveal and fix issues before they become catastrophic.

**How to build antifragility:**

**Embrace small failures.** Fail fast and often in small ways to prevent catastrophic failure. Test assumptions early when costs are low.

**Keep optionality.** Make decisions that preserve future choices. Avoid irreversible commitments to single paths.

**Build redundancy.** Multiple income sources, skills, relationships, suppliers. Seems inefficient until shocks hit.

**Expose yourself to controlled volatility.** Deliberate discomfort (public speaking, physical challenges, intellectual debates) builds adaptation capacity.

**Remove single points of failure.** What could destroy you if it failed? Add backups.

**Seek environments with upside volatility.** Where randomness creates more opportunities than threats.

The antifragile don't just survive uncertainty—they **thrive on it**.`,
      keyTakeaway: "Antifragile systems grow stronger from shocks and volatility—build optionality, redundancy, and expose yourself to controlled stressors.",
      actionItem: "Identify one fragile area in your life (single point of failure, excessive optimization). How could you make it antifragile through redundancy or optionality?"
    }
  },
  {
    id: "risk-008",
    title: "Reflection: Your Risk Management System",
    type: "reflection",
    duration: 15,
    xpReward: 100,
    content: {
      overview: "Design a comprehensive risk management approach for your life or business.",
      mainContent: `## Building Your Risk Framework

You've learned: tail risks, margin of safety, asymmetric risk-reward, and antifragility. Now integrate them into a personal risk management system.

**Choose a domain to analyze:**
- Career and income
- Investments and finances
- Business or project
- Health and relationships

**Complete this risk audit:**

**1. Identify risks of ruin**
- What events could permanently destroy you in this domain?
- Financial ruin? Reputational destruction? Health catastrophe?
- What's your absolute "never risk this" line?

**2. Map tail risks**
- What low-probability, high-impact events could occur?
- Are you exposed to fat-tail distributions?
- What Black Swans would you not recover from?
- How can you limit exposure to ruin while staying in the game?

**3. Assess your margin of safety**
- Do you have adequate buffers (financial, time, skill, relationship)?
- Are you operating at capacity or with slack?
- What would happen if your key assumption is 30% wrong?
- Where do you need more buffer?

**4. Find asymmetric opportunities**
- Where can you make small bets with capped downside and unlimited upside?
- What has optionality (preserves future choices)?
- What are you avoiding because of symmetric thinking?

**5. Build antifragility**
- Where are your single points of failure?
- How can you add redundancy?
- What controlled volatility could make you stronger?
- How can you position to benefit from uncertainty?

**6. Design your strategy**

Create a **barbell approach** for this domain:

**Extreme safety (70-90%):** What should be absolutely protected? Where do you need margin of safety and redundancy?

**Controlled risk (10-30%):** Where should you take asymmetric bets with limited downside and high upside?

**Avoid the middle:** What "medium risk" things should you eliminate? (These often have hidden tail risks.)

> "The best way to measure your investing success is not by whether you're beating the market but by whether you've put in place a financial plan and a behavioral discipline that are likely to get you where you want to go." — Benjamin Graham

**Document your risk management rules:**

- What will you never risk?
- What buffers will you maintain?
- What asymmetric bets will you take?
- What makes you antifragile?

Review this annually. Risk landscapes change; your system should adapt.`,
      keyTakeaway: "Effective risk management combines margin of safety (protection), asymmetric bets (upside), and antifragility (benefiting from volatility).",
      actionItem: "Complete your risk audit. Write your risk management rules. What's one change you'll make this month to improve your risk position?"
    }
  }
];
