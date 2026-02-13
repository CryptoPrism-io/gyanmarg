import type { PathwayLesson } from "@/types";

export const fiLessonsLevel1: PathwayLesson[] = [
  {
    id: "fi-001",
    title: "Welcome to the World of Finance & Investing",
    type: "intro",
    duration: 10,
    xpReward: 100,
    content: {
      overview: "Discover why understanding finance and investing is one of the most valuable skills you can develop in the 21st century.",
      mainContent: `## The Power of Financial Literacy

Welcome to your journey into finance and investing -- a skill that has created more wealth than any other human endeavor. According to Credit Suisse's Global Wealth Report, there are over 62 million millionaires worldwide, and the vast majority built their wealth through strategic investing, not lottery wins or inheritance.

**Why This Matters Now**

The landscape of personal finance has transformed dramatically. What once required expensive brokers and exclusive access is now available to anyone with a smartphone. But with this democratization comes a paradox: we have more tools than ever, yet financial literacy rates remain alarmingly low. A 2023 FINRA study found that only 34% of Americans could answer basic questions about interest rates, inflation, and risk diversification.

> "An investment in knowledge pays the best interest." -- Benjamin Franklin

**The Opportunity Cost of Waiting**

Consider this striking example: If you invest $500 monthly starting at age 25 with an average 8% annual return, you'll have approximately $1.4 million by age 65. Wait until 35 to start, and that figure drops to $610,000 -- a $790,000 difference for just 10 years of delay. This is the power of compound interest that Einstein allegedly called "the eighth wonder of the world."

**What You'll Learn**

This pathway will transform you from a financial novice to a confident investor who understands portfolio construction, risk management, market analysis, and wealth-building strategies. You'll learn to read financial statements, evaluate investment opportunities, understand macroeconomic forces, and build a diversified portfolio aligned with your goals.

**The Journey Ahead**

We'll start with foundational concepts -- understanding different asset classes, the risk-return tradeoff, and the psychology of investing. Then we'll progress to portfolio theory, technical and fundamental analysis, options strategies, and macro-economic thinking. By the end, you'll have the toolkit to make informed investment decisions and build lasting wealth.`,
      keyTakeaway: "Financial literacy is the gateway to wealth creation, and the cost of delaying investment knowledge is measured in hundreds of thousands of dollars.",
      actionItem: "Calculate your own compound interest scenario using an online calculator -- see what difference starting today versus next year makes to your retirement fund."
    }
  },
  {
    id: "fi-002",
    title: "The Foundation: Asset Classes Explained",
    type: "concept",
    duration: 12,
    xpReward: 120,
    content: {
      overview: "Master the building blocks of any investment portfolio -- the major asset classes and how they behave.",
      mainContent: `## Understanding Your Investment Universe

Every investment you'll ever make falls into one of several asset classes, each with distinct characteristics, risk profiles, and return patterns. Understanding these is crucial because, according to a landmark 1991 study by Brinson, Hood, and Beebower, asset allocation explains over 90% of portfolio performance variability.

**The Major Asset Classes**

**1. Equities (Stocks)**

Ownership shares in companies. Historically, the S&P 500 has returned approximately 10% annually over the past century, though with significant volatility. The greatest 12-month gain was 61% (June 1982-1983), while the worst was -43% (March 2008-2009). Stocks offer the highest long-term returns but require patience through market cycles.

**2. Fixed Income (Bonds)**

Debt instruments where you loan money to governments or corporations. US Treasury bonds have averaged 5-6% annual returns historically with much lower volatility than stocks. During the 2008 crisis, while stocks fell 37%, long-term Treasuries rose 20%, demonstrating their defensive properties.

**3. Real Estate**

Property investments, either direct or through REITs (Real Estate Investment Trusts). The NCREIF Property Index shows commercial real estate has returned about 9% annually since 1978, with the added benefit of rental income and inflation protection.

**4. Commodities**

Raw materials like gold, oil, or agricultural products. Gold, often called a "crisis hedge," rose 300% from 2008-2011 during financial turmoil. Commodities typically have low correlation with stocks, making them valuable diversifiers.

**5. Cash & Equivalents**

Money market funds, savings accounts, and short-term debt. While returns are minimal (1-3%), cash provides liquidity and stability -- your "dry powder" for opportunities.

**The Correlation Principle**

Different assets don't always move together. When stocks fell 37% in 2008, gold rose 5% and bonds surged 20%. This negative correlation is the foundation of diversification -- combining assets that zig when others zag reduces overall portfolio risk without necessarily sacrificing returns.`,
      keyTakeaway: "Asset allocation across stocks, bonds, real estate, commodities, and cash is the single most important investment decision you'll make.",
      actionItem: "Review your current savings and investments -- which asset classes do you own? Are you over-concentrated in one area?"
    }
  },
  {
    id: "fi-003",
    title: "The Risk-Return Tradeoff",
    type: "concept",
    duration: 11,
    xpReward: 110,
    content: {
      overview: "Learn why higher returns always come with higher risk, and how to find your personal risk tolerance sweet spot.",
      mainContent: `## The Fundamental Law of Investing

There's no such thing as a free lunch in financial markets. This principle, fundamental to modern portfolio theory, states that higher expected returns always come with higher risk. Understanding this tradeoff is essential to becoming a successful investor.

**Quantifying Risk and Return**

Risk is typically measured by *volatility* -- how much an investment's value fluctuates. The standard deviation of annual returns tells the story:

| Asset Class | Avg Annual Return | Standard Deviation |
|-------------|-------------------|-------------------|
| Small-Cap Stocks | 12% | 20% |
| Large-Cap Stocks | 10% | 15% |
| Corporate Bonds | 6% | 8% |
| Treasury Bonds | 5% | 6% |
| Cash | 2% | 1% |

A higher standard deviation means more uncertainty. In any given year, small-cap stocks might return -8% to +32% (12% ± 20%), while cash returns stay near 2%.

**The Sharpe Ratio: Risk-Adjusted Returns**

Nobel laureate William Sharpe created a metric to evaluate whether higher returns justify their risk. The Sharpe ratio divides excess return (above the risk-free rate) by volatility. A ratio above 1.0 is considered good; above 2.0 is excellent.

Example: A stock portfolio returning 10% with 15% volatility vs. a 2% risk-free rate has a Sharpe ratio of 0.53. A balanced portfolio returning 8% with 9% volatility has a Sharpe ratio of 0.67 -- better risk-adjusted performance despite lower absolute returns.

**The危险 of Reaching for Yield**

The 2008 financial crisis demonstrated what happens when investors ignore risk in pursuit of returns. Many "safe" AAA-rated mortgage securities offered 6-7% yields -- seemingly free money above Treasury rates. When the housing market collapsed, these "safe" investments lost 50-90% of their value. The extra 2-3% yield wasn't compensation for the catastrophic risk.

> "Risk comes from not knowing what you're doing." -- Warren Buffett

**Finding Your Risk Tolerance**

Your optimal risk level depends on three factors: time horizon (longer = more risk capacity), financial situation (stable = more risk capacity), and emotional temperament (can you stomach a 30% drop without panic selling?).

A 25-year-old saving for retirement in 40 years can weather market storms. A 60-year-old needing funds in 5 years cannot.`,
      keyTakeaway: "Higher returns always come with higher risk -- the key is finding the right balance for your time horizon and risk tolerance.",
      actionItem: "Take an online risk tolerance questionnaire (Vanguard and Schwab offer free ones) to discover your investor profile."
    }
  },
  {
    id: "fi-004",
    title: "Quiz: Asset Classes & Risk Fundamentals",
    type: "quiz",
    duration: 8,
    xpReward: 100,
    content: {
      overview: "Test your understanding of asset classes and the risk-return relationship.",
      mainContent: `## Knowledge Check

Let's assess your grasp of the fundamental concepts we've covered. These principles form the bedrock of all investment decisions you'll make.`,
      keyTakeaway: "Mastering these basics ensures you build your investment knowledge on a solid foundation.",
      quiz: {
        question: "During the 2008 financial crisis, stocks fell 37%. Which asset class demonstrated the best defensive properties by rising 20%?",
        options: [
          "Long-term Treasury bonds",
          "Gold commodities",
          "Real estate (REITs)",
          "Corporate bonds"
        ],
        correct: 0,
        explanation: "Long-term Treasury bonds rose 20% in 2008, demonstrating their negative correlation with stocks and their role as a defensive asset during market crises. This is why balanced portfolios include bonds -- they often rise when stocks fall, smoothing overall returns."
      }
    }
  },
  {
    id: "fi-005",
    title: "Modern Portfolio Theory: Diversification Magic",
    type: "concept",
    duration: 13,
    xpReward: 130,
    content: {
      overview: "Discover how Harry Markowitz's Nobel Prize-winning theory proves that proper diversification is the only free lunch in investing.",
      mainContent: `## The Mathematics of Not Putting Eggs in One Basket

In 1952, Harry Markowitz published a 14-page paper that revolutionized investing and eventually earned him the Nobel Prize. His Modern Portfolio Theory (MPT) proved mathematically what investors had intuited: diversification reduces risk without necessarily reducing returns.

**The Diversification Effect**

Here's the magic: when you combine assets that don't move in lockstep, the portfolio's overall volatility is *less* than the weighted average of individual volatilities. This isn't financial alchemy -- it's mathematics.

Consider two stocks, each with 20% volatility. If they're perfectly correlated (always move together), a 50/50 portfolio still has 20% volatility. But if they're uncorrelated (move independently), the portfolio volatility drops to approximately 14% -- a 30% risk reduction with no reduction in expected return.

**The Efficient Frontier**

Markowitz showed that for any level of risk, there's an optimal portfolio that maximizes return. Plot all possible portfolios on a risk-return graph, and the best ones form a curve called the "efficient frontier." Any portfolio not on this curve is suboptimal -- you could get better returns for the same risk, or lower risk for the same return.

**Real-World Validation**

The Yale Endowment, managed by David Swensen, demonstrates MPT in action. By diversifying across stocks, bonds, real estate, private equity, and absolute return strategies, Yale achieved 12.4% annual returns over 30 years through 2023 -- outperforming most investors while managing risk through diversification.

**The Number of Holdings That Matter**

Research by Meir Statman showed that naive diversification (random stock selection) captures most benefits with 20-30 stocks. Beyond 30, additional diversification offers minimal risk reduction. This is why index funds holding hundreds of stocks effectively eliminate company-specific risk.

**Correlation Is Key**

The power of diversification depends on correlation. During the 2020 COVID crash, technology stocks fell 30% while Zoom rose 40% -- negative correlation in action. But in extreme crises, correlations often approach 1.0 (everything falls together), which is why truly uncorrelated assets like gold or Treasury bonds are valuable.

> "Diversification is the only free lunch in investing." -- Harry Markowitz

**Beyond Stocks and Bonds**

Modern portfolios often include alternative assets: commodities (GSCI commodity index), REITs (real estate), and even cryptocurrencies. A 2022 study by Campbell Harvey showed that adding just 5% Bitcoin to a traditional 60/40 portfolio from 2015-2022 improved the Sharpe ratio by 0.15 despite Bitcoin's extreme volatility -- the diversification benefit outweighed the added volatility.`,
      keyTakeaway: "Combining assets with low correlation reduces portfolio risk without sacrificing returns -- this is the only free lunch in investing.",
      actionItem: "Research the correlation between your current holdings using a free tool like Portfolio Visualizer -- are you truly diversified or just holding similar assets?"
    }
  },
  {
    id: "fi-006",
    title: "The Psychology of Investing: Your Biggest Enemy",
    type: "concept",
    duration: 12,
    xpReward: 120,
    content: {
      overview: "Understand the cognitive biases and emotional traps that cause investors to consistently underperform the market.",
      mainContent: `## Why Smart People Make Dumb Investment Decisions

Here's a sobering statistic: According to Dalbar's Quantitative Analysis of Investor Behavior, the average equity investor returned just 7.4% annually over the 20 years ending in 2022, while the S&P 500 returned 9.5%. This 2.1% annual gap -- the "behavior gap" -- costs investors hundreds of thousands of dollars over a lifetime.

The culprit? Psychology.

**The Emotional Rollercoaster**

Nobel laureate Daniel Kahneman's research on behavioral economics revealed systematic irrationalities in human decision-making. In investing, these manifest as predictable, costly errors.

**1. Loss Aversion**

Humans feel the pain of losses about 2.5 times more intensely than the pleasure of equivalent gains. This causes investors to sell winners too early (locking in pleasure) and hold losers too long (avoiding pain). A study of 10,000 trading accounts by Terrance Odean found investors sold winning stocks 50% more often than losers, even though the losers subsequently underperformed the winners by 3.4% annually.

**2. Recency Bias**

Recent events feel more significant than they are. After stocks surge, investors pile in expecting continuation. After crashes, they sell expecting more pain. This causes the classic "buy high, sell low" pattern. During the dot-com boom, equity fund inflows hit record highs in early 2000 -- right before the crash. During the 2009 bottom, investors withdrew $150 billion -- missing the subsequent 300% rally.

**3. Confirmation Bias**

We seek information confirming our beliefs and ignore contradictory evidence. If you bought Tesla stock, you'll obsessively read bullish Tesla articles while dismissing bearish ones. This prevents objective reassessment and leads to over-concentration.

**4. Overconfidence**

Studies show 80% of drivers rate themselves above average (statistically impossible). Similarly, most investors believe they can beat the market. Barber and Odean found that individual investors who traded most actively (overconfident in their abilities) underperformed the least active investors by 6.5% annually.

**The Solution: Systems Over Emotions**

Professional investors use systematic approaches to override emotion:

- **Dollar-cost averaging**: Automatic monthly investments remove timing decisions
- **Rebalancing**: Mechanical selling of winners and buying of losers
- **Written investment policies**: Pre-committed rules followed regardless of emotion
- **Long holding periods**: Warren Buffett's favorite holding period is "forever"

**The Power of Doing Nothing**

Fidelity once analyzed which accounts performed best and found a striking pattern: the top performers belonged to people who had *forgotten they had accounts*. They couldn't panic sell, chase trends, or overtrade. Sometimes the best action is inaction.

> "The stock market is a device for transferring money from the impatient to the patient." -- Warren Buffett`,
      keyTakeaway: "Emotional biases cause investors to underperform the market by 2%+ annually -- systematic, unemotional approaches are the antidote.",
      actionItem: "Write down your investment rules now, before the next market crash: At what point will you rebalance? Will you sell during a 30% drop? Having pre-committed rules prevents emotional decisions."
    }
  },
  {
    id: "fi-007",
    title: "Quiz: Portfolio Theory & Investor Psychology",
    type: "quiz",
    duration: 8,
    xpReward: 100,
    content: {
      overview: "Test your grasp of diversification principles and behavioral finance concepts.",
      mainContent: `## Assess Your Understanding

These concepts -- Modern Portfolio Theory and behavioral biases -- separate sophisticated investors from novices. Let's check your comprehension.`,
      keyTakeaway: "Understanding both the mathematics of portfolios and the psychology of decision-making gives you a powerful edge.",
      quiz: {
        question: "According to Dalbar's research, what is the primary reason the average equity investor underperformed the S&P 500 by 2.1% annually over 20 years?",
        options: [
          "High management fees and transaction costs",
          "Poor security selection and bad timing",
          "Emotional biases causing buy-high, sell-low behavior",
          "Insufficient diversification across asset classes"
        ],
        correct: 2,
        explanation: "The 'behavior gap' is primarily caused by emotional biases -- recency bias, loss aversion, and panic selling during downturns, then buying during euphoric peaks. This buy-high, sell-low pattern costs investors more than fees or poor stock selection. Systematic, unemotional investing eliminates this gap."
      }
    }
  },
  {
    id: "fi-008",
    title: "Building Your First Investment Strategy",
    type: "exercise",
    duration: 15,
    xpReward: 150,
    content: {
      overview: "Apply everything you've learned to design a personalized investment strategy aligned with your goals and risk tolerance.",
      mainContent: `## From Theory to Action

You've learned about asset classes, risk-return tradeoffs, diversification, and behavioral pitfalls. Now it's time to synthesize this knowledge into a concrete investment strategy tailored to your situation.

**Step 1: Define Your Goals**

Be specific. "Get rich" isn't a goal. "Accumulate $1 million for retirement in 30 years" is. Different goals require different strategies:

- **Retirement (20+ years)**: Aggressive growth, high equity allocation
- **House down payment (5 years)**: Conservative, more bonds/cash
- **Emergency fund (immediate access)**: High-liquidity, low-risk
- **Wealth building (10-15 years)**: Balanced growth and income

**Step 2: Determine Your Asset Allocation**

Use your time horizon and risk tolerance to set target percentages. Common frameworks:

**Age-Based Rule**: Bond allocation = your age (25 years old = 25% bonds, 75% stocks). This automatically de-risks as you age.

**Target-Date Approach**: Start aggressive (90/10 stocks/bonds), gradually shift to conservative (40/60) as goal approaches.

**Risk-Parity**: Allocate based on risk contribution, not dollars. Bonds are less volatile, so you might hold 60% bonds, 40% stocks, adjusting with leverage so each contributes equally to portfolio risk.

**Step 3: Select Implementation Vehicles**

**For most investors, low-cost index funds are optimal:**

- Total US Stock Market: Vanguard VTI (0.03% expense ratio)
- Total International Stock: Vanguard VXUS (0.07% ER)
- Total Bond Market: Vanguard BND (0.03% ER)
- Real Estate: Vanguard VNQ (0.12% ER)

A simple three-fund portfolio -- 60% VTI, 30% VXUS, 10% BND -- provides global diversification with rock-bottom costs.

**Step 4: Establish Rebalancing Rules**

Markets drift from targets. If stocks surge, your 70/30 portfolio might become 80/20, increasing risk. Rebalancing restores the target.

**Common approaches:**
- Calendar: Rebalance every 6-12 months
- Threshold: Rebalance when allocations drift 5%+ from target
- Hybrid: Check quarterly, rebalance if thresholds breached

**Step 5: Automate Everything**

Set up automatic monthly investments (dollar-cost averaging), automatic dividend reinvestment, and calendar reminders for rebalancing. Remove discretion, remove emotion.

**Sample Strategy: 30-Year-Old Professional**

- Goal: $2M retirement fund in 35 years
- Risk tolerance: Moderate-aggressive
- Strategy: 70% stocks, 20% bonds, 10% alternatives
- Implementation: 45% VTI, 25% VXUS, 20% BND, 10% VNQ
- Contributions: $1,000/month automated
- Rebalancing: Annually every January
- Review: Full strategy review every 5 years

With 8% average annual returns, this yields $2.3M in 35 years.

**The Power of Starting**

The perfect strategy doesn't exist. A good strategy executed consistently beats a perfect strategy delayed. Start today, refine as you learn.`,
      keyTakeaway: "A personalized investment strategy aligned with your goals, risk tolerance, and time horizon -- consistently executed -- is more valuable than chasing optimal returns.",
      actionItem: "Draft your investment policy statement: Write down your goals, time horizon, target allocation, rebalancing rules, and commitment to stay the course during market turmoil. Make it concrete and specific."
    }
  }
];
