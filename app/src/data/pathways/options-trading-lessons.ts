import type { PathwayLesson } from "@/types";

export const optLessonsLevel1: PathwayLesson[] = [
  {
    id: "opt-001",
    title: "Welcome to Options Trading",
    type: "intro",
    duration: 10,
    xpReward: 100,
    content: {
      overview: "Discover the powerful world of options -- derivatives that offer leverage, income generation, and sophisticated risk management.",
      mainContent: `## The Leverage Multiplier

Options are among the most versatile financial instruments ever created. While stocks offer linear returns (stock up 10% = portfolio up 10%), options provide asymmetric payoffs and leverage that can amplify returns -- or losses -- by 5x, 10x, or more.

Consider this real example: In January 2020, Tesla stock traded at $100. A $10,000 investment bought 100 shares. By December, Tesla hit $700 -- a 600% gain yielding $60,000. Impressive.

But $10,000 in Tesla call options (the right to buy at $150) cost about $20 per contract (100 shares/contract). You could buy 50 contracts controlling 5,000 shares. When Tesla hit $700, those options were worth approximately $550 each -- turning $10,000 into $275,000, a 2,650% return.

Of course, if Tesla had dropped, those options could have expired worthless.

**More Than Speculation**

While the leverage attracts speculators, professional investors use options for:

- **Income generation**: Selling covered calls on stock holdings for monthly premiums
- **Downside protection**: Buying puts as portfolio insurance
- **Strategic positioning**: Capturing specific market views with defined risk
- **Tax efficiency**: Converting short-term gains into long-term treatment

According to the Options Clearing Corporation, daily options volume exceeded 40 million contracts in 2023, up from 10 million in 2010. This isn't just retail speculation -- institutions like hedge funds and pension funds are major participants.

**The Learning Curve**

Options have a reputation for complexity, and it's partly deserved. Unlike stocks (buy low, sell high), options involve:

- Strike prices and expiration dates
- Four basic positions (buy/sell calls/puts)
- "The Greeks" (delta, gamma, theta, vega, rho)
- Implied volatility and time decay
- Multi-leg strategies with exotic names

But this complexity is manageable when learned systematically. And the payoff -- in both understanding and potential returns -- is substantial.

> "Options are the most powerful financial tool ever invented. They allow you to leverage your capital, protect your downside, and generate income. But like any powerful tool, they require knowledge and respect." -- Nassim Taleb

**What You'll Master**

This pathway transforms you from options novice to confident trader who can:

- Understand call and put mechanics inside-out
- Use the Greeks to analyze risk and probability
- Deploy income strategies like covered calls and cash-secured puts
- Execute multi-leg spreads for defined-risk directional plays
- Manage positions dynamically as markets move
- Avoid the common traps that blow up novice options traders

**The Path Forward**

We'll start with the fundamentals -- what calls and puts are, how they're priced, and basic buying strategies. Then we'll progress to selling strategies, the Greeks, advanced multi-leg positions, and sophisticated risk management. By the end, you'll have a complete options trading toolkit.`,
      keyTakeaway: "Options provide leverage, income, and risk management capabilities unavailable with stocks alone, but require systematic learning to use effectively.",
      actionItem: "Open a paper trading account (TD Ameritrade's thinkorswim or Interactive Brokers offer free ones) so you can practice without risking real money as you learn."
    }
  },
  {
    id: "opt-002",
    title: "Calls and Puts: The Building Blocks",
    type: "concept",
    duration: 12,
    xpReward: 120,
    content: {
      overview: "Master the two fundamental option types -- calls and puts -- and understand the four basic positions that form the foundation of all options strategies.",
      mainContent: `## The Essential Option Contracts

Every options strategy, no matter how complex, is built from just two building blocks: calls and puts. Understanding these thoroughly is non-negotiable.

**Call Options: The Right to Buy**

A call option gives you the *right, but not the obligation*, to buy 100 shares of stock at a specified price (the "strike price") before a specified date (expiration).

Example: AAPL trades at $180. You buy a $190 call expiring in 30 days for $3 per share ($300 total, since each contract = 100 shares).

**Scenario 1**: AAPL rises to $210. Your call is now worth at least $20 ($210 current price - $190 strike), netting you $2,000 on your $300 investment -- a 566% return.

**Scenario 2**: AAPL stays at $180. Your $190 call expires worthless. You lose the entire $300 premium.

**Put Options: The Right to Sell**

A put option gives you the right to *sell* 100 shares at the strike price before expiration.

Example: AAPL at $180, you buy a $170 put for $2 per share ($200 total).

**Scenario 1**: AAPL crashes to $150. Your put is worth at least $20 ($170 strike - $150 price), turning $200 into $2,000 -- a 900% return.

**Scenario 2**: AAPL rises to $200. Your put expires worthless. You lose $200.

**The Four Basic Positions**

These two option types create four foundational positions:

| Position | Action | View | Max Profit | Max Loss |
|----------|--------|------|------------|----------|
| **Long Call** | Buy call | Bullish | Unlimited | Premium paid |
| **Short Call** | Sell call | Bearish/Neutral | Premium received | Unlimited |
| **Long Put** | Buy put | Bearish | Strike - Premium | Premium paid |
| **Short Put** | Sell put | Bullish/Neutral | Premium received | Strike - Premium |

**The Asymmetry Advantage**

Notice the asymmetry: buying options has limited downside (premium paid) and unlimited or large upside. Selling options has limited upside (premium received) and unlimited or large downside. This is why buying options feels like buying lottery tickets -- small cost, big potential payoff -- while selling options is like being the casino -- consistent small wins, occasional catastrophic loss.

**Real-World Application**

During the COVID crash of March 2020, SPY (S&P 500 ETF) fell from $330 to $220 in 30 days. Investors who bought $280 puts when SPY was at $330 paid about $5 per contract. At the bottom, those puts were worth $60 -- a 1,100% return.

Conversely, investors who sold $280 puts (collecting that $5 premium) faced assignment -- forced to buy SPY at $280 when it was trading at $220, an immediate $60/share loss.

**Intrinsic Value vs. Extrinsic Value**

An option's price has two components:

- **Intrinsic value**: How much it's "in the money" (ITM). A call with $190 strike on a $200 stock has $10 intrinsic value.
- **Extrinsic value (time premium)**: Additional value from time remaining and volatility. If that call trades at $13, the extra $3 is extrinsic value.

At expiration, all extrinsic value disappears -- options are worth only their intrinsic value.`,
      keyTakeaway: "Calls and puts, each with buy and sell sides, create four basic positions that differ dramatically in risk-reward profiles.",
      actionItem: "Use an options profit calculator (optionsprofitcalculator.com is free) to visualize payoff diagrams for buying a call, selling a call, buying a put, and selling a put on a stock you follow."
    }
  },
  {
    id: "opt-003",
    title: "Options Pricing: What Determines Value",
    type: "concept",
    duration: 13,
    xpReward: 130,
    content: {
      overview: "Understand the Black-Scholes model and the six factors that determine every option's price.",
      mainContent: `## The Mathematics of Uncertainty

In 1973, Fischer Black, Myron Scholes, and Robert Merton published a mathematical model for pricing options that revolutionized finance and earned Scholes and Merton the 1997 Nobel Prize (Black had passed away). The Black-Scholes model provides the theoretical framework for option pricing.

**The Six Pricing Factors**

Every option's price is determined by six variables:

**1. Stock Price (Underlying Price)**

As the stock rises, call values increase and put values decrease. A $10 increase in stock price typically increases call value by the option's "delta" (more on this in the Greeks lesson).

**2. Strike Price**

Calls with lower strikes are more valuable (cheaper to buy stock). Puts with higher strikes are more valuable (higher selling price). A $200 strike call is worth more than a $210 call when the stock is at $205.

**3. Time to Expiration**

More time = more value. A 60-day option is worth more than a 30-day option because there's more time for favorable movement. This is called "time value" or "theta."

Real example: With AAPL at $180, the $185 call might be worth:
- 7 days to expiration: $1.50
- 30 days to expiration: $3.20
- 90 days to expiration: $6.10

**4. Volatility (Implied Volatility)**

Higher volatility = higher option prices for both calls and puts. Why? Greater price swings mean higher probability of profitable movement.

During normal times, AAPL's implied volatility (IV) might be 25%. During earnings or market crashes, IV can spike to 60%+. This volatility expansion can triple option prices overnight.

In March 2020, the VIX (volatility index) spiked from 15 to 80. Options that were worth $5 in February traded for $30 in March -- not because stocks moved dramatically yet, but because *expected* movement increased.

**5. Interest Rates**

Higher rates slightly increase call values and decrease put values. In practice, this is the least impactful factor for shorter-term options, though it matters for LEAPS (long-term options).

**6. Dividends**

Expected dividends decrease call values and increase put values. When a stock goes ex-dividend, it drops by approximately the dividend amount, benefiting puts and hurting calls.

**Implied Volatility: The Wild Card**

While most factors are observable (stock price, strike, time, rates, dividends), volatility must be *implied* from option prices. This creates a fascinating dynamic: option prices reflect the market's expectation of future volatility.

If AAPL options are pricing in 40% IV but you believe volatility will be only 25%, those options are "expensive" -- good for selling, bad for buying. This is the foundation of volatility trading.

**Real-World Pricing Example**

TSLA at $250, 45 days to expiration, 60% IV, 0% interest rate:

- $250 call (at-the-money): $23
- $270 call (out-of-the-money): $14
- $230 put (out-of-the-money): $11
- $250 put (at-the-money): $22

Notice the symmetry: at-the-money calls and puts have similar prices because they both benefit from volatility.

**The Volatility Smile**

Plot implied volatility across strikes and you'll often see a "smile" -- higher IV at extreme strikes. This reflects market fears of tail events (crashes or surges). The 2008 crisis permanently embedded higher IV in out-of-the-money puts, creating "crash insurance" premiums.

> "In theory there is no difference between theory and practice. In practice there is." -- Yogi Berra

The Black-Scholes model assumes constant volatility, no dividends, European exercise (only at expiration), and efficient markets. Real markets violate all these assumptions, creating opportunities for sophisticated traders.`,
      keyTakeaway: "Options prices are determined by six factors, with implied volatility being the most dynamic and creating opportunities for those who can forecast it accurately.",
      actionItem: "Check the options chain for a stock you own -- compare the price of at-the-money calls and puts with different expirations. Notice how time value decays faster as expiration approaches."
    }
  },
  {
    id: "opt-004",
    title: "Quiz: Options Fundamentals",
    type: "quiz",
    duration: 8,
    xpReward: 100,
    content: {
      overview: "Test your understanding of option mechanics and pricing principles.",
      mainContent: `## Knowledge Check

Let's assess your grasp of calls, puts, and the factors that drive option prices. These fundamentals are the foundation for everything that follows.`,
      keyTakeaway: "Mastering option basics prevents costly mistakes and enables sophisticated strategy deployment.",
      quiz: {
        question: "You own a stock trading at $180 and are worried about a potential crash in the next 30 days. Which position provides insurance against downside while maintaining unlimited upside?",
        options: [
          "Buy a $170 put option",
          "Sell a $190 call option",
          "Buy a $190 call option",
          "Sell a $170 put option"
        ],
        correct: 0,
        explanation: "Buying a put option is 'portfolio insurance' -- it gives you the right to sell at the strike price ($170), protecting against drops below that level. If the stock crashes to $140, you can still sell at $170. But if the stock rises to $220, you simply don't exercise the put and enjoy the gains. This is exactly like car insurance: you pay a premium for downside protection while keeping unlimited upside."
      }
    }
  },
  {
    id: "opt-005",
    title: "The Greeks: Risk Metrics That Matter",
    type: "concept",
    duration: 14,
    xpReward: 140,
    content: {
      overview: "Master delta, gamma, theta, vega, and rho -- the five Greeks that quantify your option position's risk exposures.",
      mainContent: `## Measuring Invisible Forces

Stock positions have one risk dimension: price. If the stock moves $1, you make or lose $100 per 100 shares. Simple.

Options have *five* risk dimensions, quantified by "the Greeks" -- delta, gamma, theta, vega, and rho. Understanding these transforms you from guessing to calculating precise risk exposures.

**Delta: Directional Exposure**

Delta measures how much an option's price changes per $1 stock move. It ranges from 0 to 1 for calls (-1 to 0 for puts).

- Delta 0.50 call: Stock up $1 → Option up $0.50
- Delta -0.30 put: Stock up $1 → Option down $0.30

Delta also approximates probability of expiring in-the-money. A 0.70 delta call has roughly 70% chance of being profitable at expiration.

Deep in-the-money calls have delta near 1.00 (move almost 1:1 with stock). Out-of-the-money calls have low delta (0.10-0.20). At-the-money calls typically have 0.50 delta.

**Real application**: If you want $10,000 of SPY exposure but don't want to buy shares, buy calls with 0.50 delta. To match 100 shares ($40,000 exposure), you need $40,000 / 0.50 delta = $80,000 notional, or 20 contracts.

**Gamma: Delta's Rate of Change**

Delta isn't constant -- it changes as the stock moves. Gamma measures this change. High gamma means delta changes rapidly.

At-the-money options have the highest gamma. A 0.50 delta call with 0.05 gamma becomes 0.55 delta if the stock rises $1.

This creates explosive moves near expiration: a near-expiration at-the-money option can have 0.10+ gamma, meaning delta swings wildly with small price moves.

**Theta: The Enemy of Time**

Theta measures daily time decay. A theta of -0.05 means the option loses $5 in value per day (per contract), all else equal.

Time decay accelerates as expiration approaches. A 90-day option might have theta of -0.02, while a 7-day option has theta of -0.15. The last week before expiration is brutal for option buyers.

Example: AAPL $180 call, 30 days out, theta -0.08. Even if AAPL doesn't move, you lose $8/day. Over the weekend (3 days), you lose $24 just from time passing.

This is why option sellers love theta -- they profit from time decay even if the stock doesn't move.

**Vega: Volatility Sensitivity**

Vega measures sensitivity to 1% change in implied volatility (IV). A vega of 0.20 means a 1% IV increase adds $20 to the option's value.

During earnings or market uncertainty, IV spikes can dramatically increase option values. Conversely, after earnings or when volatility calms, "volatility crush" can collapse option values even if the stock moved favorably.

Real trap: You buy calls before earnings because you expect a stock surge. The stock does rise 5%, but IV collapses from 60% to 35% post-earnings. Your calls might *lose* value despite being right on direction because vega losses exceeded delta gains.

**Rho: Interest Rate Sensitivity**

Rho measures sensitivity to 1% interest rate change. It's the least important Greek for most traders, especially with shorter-term options. Longer-dated LEAPS are more rate-sensitive.

**Practical Greek Example**

SPY at $450, you buy a 30-day $455 call for $8.50:
- Delta: 0.45 (45% probability ITM, moves $0.45 per $1 SPY move)
- Gamma: 0.03 (delta increases 0.03 per $1 SPY move)
- Theta: -0.12 ($12/day time decay)
- Vega: 0.25 ($25 gain per 1% IV increase)
- Rho: 0.05 (ignore this)

**Day 1**: SPY rises $3 to $453. Your call gains: (3 × $0.45) + (gamma adjustments) ≈ $1.40, now worth $9.90.

**Day 2**: SPY unchanged, but IV drops 2%. Your call loses: (2 × $0.25 vega) + ($0.12 theta) = $0.62, now worth $9.28.

Without the Greeks, you're flying blind. With them, you can calculate expected returns under various scenarios.`,
      keyTakeaway: "The Greeks -- delta, gamma, theta, vega, and rho -- quantify the five dimensions of options risk, enabling precise position management.",
      actionItem: "Open your broker's options chain and examine the Greeks for at-the-money, in-the-money, and out-of-the-money options. Notice how theta accelerates as expiration approaches."
    }
  },
  {
    id: "opt-006",
    title: "Income Strategy: The Covered Call",
    type: "concept",
    duration: 12,
    xpReward: 120,
    content: {
      overview: "Learn the most popular options income strategy -- selling covered calls on stock you own to generate monthly cash flow.",
      mainContent: `## Rent Out Your Stocks

Imagine collecting rent on stocks you already own, generating 1-3% monthly income without selling shares. This is the covered call -- the most widely used options strategy, accounting for billions in daily premium volume.

**The Mechanics**

A covered call involves:
1. Own 100 shares of stock
2. Sell 1 call option against those shares

Example: You own 100 shares of AAPL at $180. You sell a $190 call expiring in 30 days for $3.50 per share, collecting $350 premium.

**Three Possible Outcomes:**

**Scenario 1: Stock stays below $190**
The call expires worthless. You keep the $350 premium and still own your shares. Repeat next month. Annualized, this 1.9% monthly income becomes 23% yearly income -- on top of stock appreciation and dividends.

**Scenario 2: Stock rises above $190**
Your shares are "called away" at $190. You still profit: $10 stock gain ($180→$190) + $3.50 premium = $13.50 total gain. The downside? You miss gains above $190. If AAPL surges to $210, you sold at $190.

**Scenario 3: Stock drops**
You keep the $350 premium, cushioning the loss. If AAPL falls to $175, your net loss is $5/share instead of $5 + missed premium.

**Real-World Performance**

A 2019 study by the CBOE analyzed covered call performance on the S&P 500 from 1986-2019. The BuyWrite Index (systematic covered calls) returned 9.7% annually vs. 10.3% for buy-and-hold -- slightly lower return but with 35% lower volatility. Risk-adjusted (Sharpe ratio), covered calls outperformed.

During bear markets, covered calls significantly outperform. In 2008, the S&P fell 37%, but the BuyWrite Index fell only 28% -- the premium income cushioned losses.

**Selecting Strike Prices**

**Out-of-the-money (OTM)**: Sell strikes above current price (e.g., $190 strike on $180 stock). Lower premium but keeps upside potential. Used when bullish.

**At-the-money (ATM)**: Sell strikes at current price. Higher premium but immediate assignment risk. Used for maximum income.

**In-the-money (ITM)**: Sell strikes below current price. Highest premium but likely assignment. Used when neutral to slightly bearish.

**Premium Collection Strategy**

Target 1-2% monthly returns (12-24% annualized). On a $50,000 portfolio, this generates $500-$1,000 monthly income.

**The Wheel Strategy**

Advanced traders combine covered calls with cash-secured puts (selling puts on stocks they want to own) in a continuous "wheel":

1. Sell puts → get assigned stock
2. Sell covered calls → get called away
3. Repeat

This generates premium income in both directions, whether acquiring or selling stock.

**Risks and Limitations**

**Capped upside**: You miss explosive moves above the strike. During the 2020 tech rally, covered call sellers left billions on the table as TSLA, AAPL, and NVDA surged.

**Still exposed to downside**: Premium provides only limited protection. A 20% crash still hurts, even with 2% premium cushion.

**Tax inefficiency**: Premiums are taxed as short-term gains (ordinary income rates), while stock gains can be long-term (preferential rates).

> "Covered calls are for investors who want to reduce volatility and generate income. They're not for those expecting massive upside." -- CBOE Research

**Ideal Candidates**

Covered calls work best on:
- Large, stable positions you're willing to sell
- High-volatility stocks (higher premiums)
- Sideways or mildly bullish markets
- Dividend stocks (combine income sources)`,
      keyTakeaway: "Covered calls generate 1-3% monthly income on stocks you own, reducing volatility but capping upside -- ideal for sideways markets and income-focused investors.",
      actionItem: "Calculate potential covered call income on a stock you own: check the options chain for out-of-the-money calls 30-45 days out. What premium can you collect? What's the annualized yield?"
    }
  },
  {
    id: "opt-007",
    title: "Quiz: The Greeks & Basic Strategies",
    type: "quiz",
    duration: 8,
    xpReward: 100,
    content: {
      overview: "Test your understanding of the Greeks and covered call strategy.",
      mainContent: `## Assess Your Knowledge

The Greeks and covered calls are fundamental to options proficiency. Let's verify your comprehension before moving to advanced strategies.`,
      keyTakeaway: "Mastering these concepts enables you to generate income and manage risk with precision.",
      quiz: {
        question: "You own 100 shares of a stock at $200 and sell a $210 covered call for $4, expiring in 30 days. The stock rises to $225 at expiration. What is your total profit?",
        options: [
          "$14 per share ($1,400 total)",
          "$25 per share ($2,500 total)",
          "$29 per share ($2,900 total)",
          "$4 per share ($400 total)"
        ],
        correct: 0,
        explanation: "Your shares are called away at $210, giving you a $10 stock gain ($200→$210). You also keep the $4 premium. Total profit: $10 + $4 = $14 per share, or $1,400. The 'opportunity cost' is the $15 you missed above $210, but your actual realized profit is $14/share. This illustrates the covered call tradeoff: capped upside in exchange for immediate income."
      }
    }
  },
  {
    id: "opt-008",
    title: "Risk Management: Position Sizing & Stop Losses",
    type: "exercise",
    duration: 15,
    xpReward: 150,
    content: {
      overview: "Learn how to size option positions properly and implement stop losses to prevent catastrophic losses.",
      mainContent: `## Survival Before Success

The #1 cause of options trading failure isn't bad strategy -- it's overleveraging and lack of risk management. A single oversized position can wipe out months of profits. Let's ensure you're in the 10% who survive long-term.

**The 2-5% Rule**

Never risk more than 2-5% of your total capital on a single trade. If you have a $50,000 account, maximum risk per trade is $1,000-$2,500.

For buying options, this is straightforward: if you buy calls for $1,500 total, that's your maximum loss.

For selling options (naked or spreads), calculate maximum possible loss and ensure it's within your 2-5% limit.

**Real Catastrophe Example**

In January 2021, a trader with a $77,000 account sold 500 naked calls on GameStop (GME) when it was at $40, collecting $4,000 in premium. He thought GME couldn't possibly rise above $60.

GME proceeded to surge to $483. His calls, originally sold for $0.08 each, were now worth $44 each. Total loss: $2.2 million on a $77,000 account. He declared bankruptcy.

Had he risked only 5% ($3,850) by using spreads or limiting position size, he'd still be trading.

**Position Sizing Framework**

**Step 1**: Determine total capital at risk
- Account size: $50,000
- Risk per trade: 3% = $1,500

**Step 2**: Calculate per-contract risk
- Buying $5 calls: Risk = $500 per contract (100 shares × $5)
- Buying $2 puts: Risk = $200 per contract

**Step 3**: Calculate position size
- Max contracts = $1,500 / $500 = 3 contracts (for the calls)
- Max contracts = $1,500 / $200 = 7 contracts (for the puts)

**The Probability-Adjusted Approach**

Sophisticated traders adjust position size based on probability. A 0.30 delta option (30% probability of profit) might warrant a larger position than a 0.10 delta "lottery ticket."

Formula: Position Size = (Max Risk / Probability of Max Loss)

If you're selling 0.30 delta puts with $1,000 max risk, and you estimate 20% chance of assignment, you might increase size slightly since full loss is unlikely. But this requires accurate probability estimation.

**Stop Losses for Options**

Options are different from stocks -- they can gap overnight, making traditional stop losses ineffective. Better approaches:

**Time Stop**: Exit after X days regardless of profit/loss. If you bought 30-day calls and the thesis hasn't played out in 15 days, exit to preserve extrinsic value.

**Percentage Stop**: Exit if option loses 50-75% of value. This prevents total wipeouts while allowing room for volatility.

**Underlying Stop**: Exit if the stock breaks a technical level. Buying calls with stock at $180? Set a stop if stock falls below $175 support.

**Theta Stop**: For buyers, exit when theta decay accelerates in the final 1-2 weeks before expiration.

**Portfolio-Level Risk Management**

**Diversification**: Don't have all positions in one sector. If you own tech stock calls and sell tech stock puts, you're dangerously concentrated.

**Net Delta Management**: Sum all position deltas to see total market exposure. If your portfolio delta is +5,000, you're equivalent to being long 5,000 shares of SPY. Adjust if over-exposed.

**Defined-Risk Strategies**: Use spreads (covered calls, credit spreads, iron condors) that have capped maximum loss. Your account can never be blown up by a single spread.

**The Recovery Math Problem**

A 50% loss requires a 100% gain to recover. Lose 75% and you need a 300% gain. This is why preventing large losses matters more than chasing large gains.

Portfolio drawdown recovery requirements:
- 10% loss → need 11% gain to recover
- 25% loss → need 33% gain
- 50% loss → need 100% gain
- 75% loss → need 300% gain

**Practical Risk Management Checklist**

Before every trade, ask:
1. What's my maximum loss on this position?
2. Is this loss within my 2-5% per-trade limit?
3. What's my exit plan if wrong?
4. What's my profit target?
5. Does this position over-concentrate my portfolio in one direction/sector?

> "Risk management is the only thing that matters. If you can't manage risk, you'll blow up eventually, no matter how good your strategy is." -- Professional options trader

**The Survivor's Mindset**

Your goal isn't to maximize returns -- it's to stay in the game long enough to compound wealth. Consistent 2-3% monthly returns with strict risk management beats volatile 10% gains followed by catastrophic losses.`,
      keyTakeaway: "Position sizing (2-5% risk per trade) and stop loss discipline prevent catastrophic losses -- survival comes before success in options trading.",
      actionItem: "Calculate your maximum position size: Determine 3% of your trading capital, then calculate how many contracts you can buy for positions you're considering. Set hard rules before risking real money."
    }
  }
];
