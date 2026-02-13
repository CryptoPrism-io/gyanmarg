import type { PathwayLesson } from "@/types";

export const stratLessonsLevel1: PathwayLesson[] = [
  {
    id: "strat-001",
    title: "Welcome to Strategic Thinking",
    type: "intro",
    duration: 10,
    xpReward: 100,
    content: {
      overview: "Strategy isn't about planning—it's about making choices that create lasting advantage.",
      mainContent: `## What Strategy Really Means

When Steve Jobs returned to Apple in 1997, the company was 90 days from bankruptcy. He didn't write a 300-page strategic plan. Instead, he made one brutal choice: **kill 70% of products and focus on four**.

That's strategy. Not planning everything, but choosing what **not** to do.

> "Strategy is about making choices, trade-offs; it's about deliberately choosing to be different." — Michael Porter

Most people confuse strategy with goals ("be the market leader") or tactics ("launch on social media"). Real strategy answers three questions:

**Where will we play?** What markets, customers, or problems? Apple chose creative professionals and premium consumers, not everyone.

**How will we win?** What makes us different and defensible? Apple integrated hardware and software when competitors didn't.

**What capabilities must we have?** Design excellence, supply chain mastery, retail experience—capabilities competitors couldn't easily copy.

Richard Rumelt, in *Good Strategy Bad Strategy*, found that most corporate strategies are just fluff—vision statements and financial goals with no real choices. Good strategy has a **kernel**: a diagnosis of the challenge, a guiding policy, and coherent actions.

Strategic thinking isn't reserved for CEOs. It applies to careers (where will you build rare skills?), relationships (what kind of life partnership do you want?), and personal development (what capabilities matter most?).

The strategic mindset starts with accepting **you cannot do everything**. Resources—time, money, attention—are finite. Strategy is the art of concentrating force where it matters most.`,
      keyTakeaway: "Strategy is choosing what not to do, then building capabilities competitors can't easily copy.",
      actionItem: "List three things you're currently doing. Which one should you kill to focus resources on what truly matters?"
    }
  },
  {
    id: "strat-002",
    title: "Diagnosis: Seeing the Challenge Clearly",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "Before you can solve a problem strategically, you must see it for what it really is.",
      mainContent: `## The Power of Accurate Diagnosis

In 1982, Lou Gerstner took over IBM when it was on the brink of collapse. Everyone thought IBM's problem was "too much bureaucracy" or "outdated mainframes." Gerstner diagnosed something different: **IBM had lost touch with what customers actually needed**—integrated solutions, not just hardware.

This diagnosis changed everything. Instead of breaking IBM into smaller companies (the popular recommendation), Gerstner kept it together and pivoted to services. IBM survived and thrived.

> "A problem well stated is a problem half solved." — Charles Kettering

**Diagnosis** is the first step in Rumelt's strategy kernel. It simplifies the overwhelming complexity of reality by identifying **the critical factors** in a situation.

Poor diagnosis looks at symptoms: "Sales are down." Good diagnosis identifies root causes: "Our value proposition is identical to competitors, so we compete only on price, which we can't sustain."

**How to diagnose well:**

**Look for leverage points.** Where is the system stuck? What constraint, if removed, unlocks progress?

**Question the obvious explanation.** First impressions are often wrong. When Netflix started losing subscribers in 2011 after splitting DVD and streaming services, the obvious diagnosis was "bad PR." The real issue? They misunderstood how customers valued choice and simplicity.

**Gather disconfirming evidence.** Actively seek data that contradicts your initial hypothesis. Confirmation bias is the enemy of accurate diagnosis.

**Talk to people closest to the problem.** Frontline employees, customers, and even competitors often see what executives miss.

Strategy without diagnosis is just random action. Diagnosis without strategy is just interesting analysis. Together, they create the foundation for decisive advantage.`,
      keyTakeaway: "Accurate diagnosis identifies the critical factors in a situation, cutting through symptoms to reach root causes.",
      actionItem: "Pick one challenge you face. Write down the obvious explanation, then list three alternative diagnoses you haven't considered."
    }
  },
  {
    id: "strat-003",
    title: "Guiding Policy: The Path Forward",
    type: "concept",
    duration: 11,
    xpReward: 100,
    content: {
      overview: "Once you understand the problem, your guiding policy sets the approach for overcoming it.",
      mainContent: `## Creating Your Strategic Approach

After diagnosing IBM's problem (disconnection from customer needs), Gerstner's guiding policy was simple: **"Solutions, not products."** Everything flowed from this.

A guiding policy is **not** a goal or vision statement. It's an **approach** to dealing with the obstacles identified in your diagnosis.

During the Cold War, the United States faced a diagnosis: Soviet conventional forces outnumbered NATO in Europe. The guiding policy? **Nuclear deterrence**. If the Soviets invaded, the U.S. would escalate to nuclear response. This policy didn't require matching Soviet tank-for-tank—it changed the nature of the game.

> "In strategy, it is important to see distant things as if they were close and to take a distanced view of close things." — Miyamoto Musashi

**Good guiding policies have three qualities:**

**They exploit advantages.** Amazon's policy of "customer obsession over competitor obsession" leverages their data and logistics capabilities.

**They neutralize obstacles.** Netflix's streaming pivot neutralized the obstacle of physical distribution and late fees that killed Blockbuster.

**They create coherence.** Every subsequent decision should flow naturally. If your policy is "premium positioning," you don't compete on price.

**Bad guiding policies are vague:** "We will be customer-focused and innovative." Everyone says this. It provides no actual guidance.

**Bad guiding policies are internally contradictory:** "We will be the low-cost provider with premium service." Pick one.

The test of a good guiding policy: Can someone use it to make decisions without asking for permission? If your team still needs to escalate every choice, your policy is too vague.

Your guiding policy should feel almost obvious once stated—but only after you've done the hard work of diagnosis. Before that, it would seem like one of many options.`,
      keyTakeaway: "A guiding policy defines your approach to overcoming obstacles, creating coherence in all subsequent actions.",
      actionItem: "For your diagnosed challenge, draft a one-sentence guiding policy. Test it: Does it rule out specific actions?"
    }
  },
  {
    id: "strat-004",
    title: "Quiz: Strategy Fundamentals",
    type: "quiz",
    duration: 8,
    xpReward: 100,
    content: {
      overview: "Test your understanding of strategic thinking basics.",
      mainContent: `## Check Your Strategic Knowledge

Let's verify you understand the core concepts of strategic thinking before we move deeper.`,
      keyTakeaway: "Strategic thinking requires understanding choices, diagnosis, and guiding policies.",
      quiz: {
        question: "What is the PRIMARY essence of strategy according to Michael Porter?",
        options: [
          "Making deliberate choices and trade-offs to be different",
          "Creating detailed long-term plans",
          "Setting ambitious financial goals",
          "Copying best practices from successful competitors"
        ],
        correct: 0,
        explanation: "Strategy is fundamentally about making choices—specifically choosing to do things differently than competitors, which requires trade-offs. Plans, goals, and best practices are not strategy; they're outputs or tactics."
      }
    }
  },
  {
    id: "strat-005",
    title: "Coherent Actions: Turning Policy into Reality",
    type: "concept",
    duration: 12,
    xpReward: 100,
    content: {
      overview: "Strategy without coordinated action is just wishful thinking.",
      mainContent: `## The Coordination Challenge

Walmart's diagnosis in the 1980s: rural America was underserved by retailers. Guiding policy: everyday low prices through operational excellence. But the magic was in **coherent actions**:

- Build stores in small towns ignored by competitors
- Invest heavily in logistics and IT systems
- Negotiate aggressively with suppliers for volume discounts
- Keep stores simple and costs low
- Share savings with customers, not shareholders

Each action reinforced the others. Cheap locations allowed low prices. Low prices drove volume. Volume enabled supplier leverage. Supplier leverage enabled lower prices. A **virtuous cycle**.

> "Strategy without tactics is the slowest route to victory. Tactics without strategy is the noise before defeat." — Sun Tzu

Coherent actions are **coordinated and mutually reinforcing**. They create momentum that isolated actions never achieve.

**Apple's iPhone strategy:**

Diagnosis: Smartphones were terrible—complex interfaces, styluses, separate music players.

Policy: Integrated, beautiful, simple devices that "just work."

Actions: Multi-touch interface, no stylus, iTunes integration, App Store ecosystem, premium pricing, controlled hardware/software, retail stores for experience.

Each action supported the others. Retail stores let customers experience the interface. App Store made the device more valuable. Premium pricing funded R&D for better integration.

**Contrast this with Microsoft's phone strategy:** great products in isolation (decent hardware, decent software) but no coherent actions connecting them. They copied competitors' moves without a unifying logic.

**How to create coherent actions:**

**Start with constraints.** What must be true for your policy to work? These become your actions.

**Look for reinforcement.** Do actions strengthen each other, or do they pull in different directions?

**Sequence matters.** Some actions must happen before others. What's the critical path?

A good strategy feels like dominoes falling—each action sets up the next.`,
      keyTakeaway: "Coherent actions are coordinated moves that reinforce each other, creating momentum and competitive advantage.",
      actionItem: "List five actions your guiding policy implies. Draw arrows showing how each action reinforces or depends on others."
    }
  },
  {
    id: "strat-006",
    title: "Quiz: Competitive Advantage",
    type: "quiz",
    duration: 8,
    xpReward: 100,
    content: {
      overview: "Understanding what creates lasting competitive advantage.",
      mainContent: `## Test Your Advantage Thinking

Competitive advantage isn't about being better—it's about being different in ways that matter.`,
      keyTakeaway: "Lasting advantage comes from coherent, mutually reinforcing actions that competitors can't easily copy.",
      quiz: {
        question: "Why was Walmart's strategy difficult for competitors to copy?",
        options: [
          "They had better marketing campaigns",
          "Their actions were mutually reinforcing—copying one element didn't work without the others",
          "They had exclusive supplier contracts",
          "They spent more on technology than anyone else"
        ],
        correct: 1,
        explanation: "Walmart's advantage came from the coherence of their entire system. Competitors could copy individual elements (low prices, technology, supplier negotiations), but without the complete, reinforcing set of actions, none worked as well. This is called a 'activity system' advantage."
      }
    }
  },
  {
    id: "strat-007",
    title: "Strategic Positioning: Finding Your Unique Space",
    type: "concept",
    duration: 13,
    xpReward: 100,
    content: {
      overview: "Competitive advantage comes from serving a unique set of customer needs or serving common needs uniquely.",
      mainContent: `## The Three Positioning Strategies

Michael Porter identified three fundamental ways to position strategically: **cost leadership**, **differentiation**, and **focus** (serving a narrow segment exceptionally well).

**Southwest Airlines chose focus + cost leadership:** short-haul flights, no frills, point-to-point routes (not hub-and-spoke), single aircraft type (Boeing 737), fast turnarounds, no assigned seats.

Competitors couldn't easily respond. Legacy carriers were stuck with hub-and-spoke networks, multiple aircraft types, unions, and business-class customers who demanded amenities. Copying Southwest meant abandoning their existing customer base.

> "The essence of strategy is choosing what not to do." — Michael Porter

**IKEA chose differentiation through self-service:** Flat-pack furniture, warehouse-style stores, customers assemble products themselves. This allowed lower prices (labor savings) while maintaining design quality. Traditional furniture stores couldn't compete—their entire cost structure assumed delivery and assembly.

**Common positioning mistakes:**

**Being stuck in the middle.** Trying to be low-cost AND highly differentiated. This rarely works—the actions required contradict each other.

**Confusing operational effectiveness with strategy.** Getting better at what everyone does (faster checkout, friendlier service) is important but not strategic. Competitors can copy it.

**Ignoring trade-offs.** Every strategic position requires giving something up. Southwest gave up long-haul routes and business travelers. IKEA gave up assembled delivery.

**How to find your position:**

**Identify underserved segments.** What group has needs incumbents ignore? Southwest saw price-sensitive short-haul travelers.

**Reconfigure the value chain.** What if you eliminated or changed a major activity? IKEA eliminated assembly and delivery.

**Look for conflicting needs.** Serving one customer group often means NOT serving another. Embrace this.

Your strategic position should make some customers say "that's not for me"—and others say "that's exactly what I needed."`,
      keyTakeaway: "Strategic positioning means serving unique customer needs or serving common needs uniquely, requiring trade-offs competitors can't easily make.",
      actionItem: "Map your current position: Who do you serve? What do you offer them? What are you deliberately NOT doing?"
    }
  },
  {
    id: "strat-008",
    title: "Reflection: Your Strategic Kernel",
    type: "reflection",
    duration: 15,
    xpReward: 100,
    content: {
      overview: "Apply the strategy kernel to a real challenge in your life or work.",
      mainContent: `## Building Your Strategy

You've learned Rumelt's strategy kernel: **diagnosis, guiding policy, coherent actions**. Now apply it to something that matters to you.

This could be:
- A career challenge (positioning yourself in the job market)
- A business problem (product launch, competitive threat)
- A personal goal (skill development, relationship building)

**Complete this framework:**

**Diagnosis:** What's the real challenge? Not symptoms—what's the root obstacle or opportunity?

**Guiding Policy:** What's your approach to this challenge? How will you deal with the obstacles?

**Coherent Actions:** What 3-5 specific actions does your policy imply? How do they reinforce each other?

**Trade-offs:** What are you choosing NOT to do? Every good strategy has explicit trade-offs.

> "The strategist's method is very simply to challenge the prevailing assumptions with a single question: Why?" — Kenichi Ohmae

**Example: Career Strategy**

Diagnosis: Software engineering is becoming commoditized. AI tools make coding faster, and competition from global talent is intense.

Guiding Policy: Position at the intersection of technical depth and business strategy—become the engineer who can translate business needs into technical solutions.

Coherent Actions:
1. Deepen expertise in one technical area (e.g., distributed systems)
2. Take on projects with direct business impact
3. Learn to communicate in business terms (revenue, cost, risk)
4. Build relationships with product and business leaders
5. Write and speak about technical strategy, not just code

Trade-offs: Saying no to pure technical IC track, less time on breadth-first learning.

Take time with this. Good strategy requires deep thinking, not quick answers.`,
      keyTakeaway: "The strategy kernel—diagnosis, guiding policy, coherent actions—applies to any challenge you face.",
      actionItem: "Write out your complete strategic kernel. Share it with someone who will challenge your assumptions."
    }
  }
];
