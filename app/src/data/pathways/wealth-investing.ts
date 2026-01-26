import type { PathwayLesson } from '@/types';

export const valueInvestingLessons: PathwayLesson[] = [
  {
    id: 'wb-inv-001',
    title: 'Circle of Competence: Know What You Know',
    type: 'concept',
    duration: 12,
    xpReward: 110,
    content: {
      overview: 'Understanding the boundaries of your knowledge is the foundation of successful value investing. This lesson explores how to identify, develop, and stay within your circle of competence.',
      mainContent: `## The Power of Knowing Your Limits

Warren Buffett and Charlie Munger popularized the concept of the "circle of competence" - the idea that investors should focus on areas where they have genuine expertise and understanding. This isn't about intelligence; it's about intellectual honesty.

### What Is Your Circle of Competence?

Your circle of competence encompasses industries, business models, and companies that you truly understand. This means knowing:

- **How the business makes money** - not just revenue sources, but the underlying economics
- **Competitive dynamics** - who are the competitors, what drives market share
- **Key value drivers** - what factors most impact profitability
- **Potential risks** - what could fundamentally damage the business

### Why Staying Inside Matters

The edge of your circle is where danger lurks. When investors venture outside their competence, they often:

1. **Overestimate their understanding** - Dunning-Kruger effect in action
2. **Miss crucial industry nuances** - Every industry has unwritten rules
3. **Fall for compelling narratives** - Stories sound better when you don't know the details
4. **Misread financial statements** - Industry-specific accounting matters

### Expanding Your Circle Deliberately

Your circle isn't fixed - it can grow through deliberate study. Choose industries strategically:

- **Adjacent industries** - Move from what you know to related fields
- **Pattern recognition** - Some business models repeat across sectors
- **Deep reading** - Annual reports, trade publications, industry analyses
- **Practical experience** - Nothing beats working in or closely with an industry

### The Discipline of Saying "No"

Perhaps the most valuable skill is recognizing opportunities outside your circle and passing on them. Buffett famously avoided technology stocks for decades - not because they were bad investments, but because he couldn't predict their futures with confidence.

### Building Your Investment Universe

Create a written list of industries and company types you understand well. Be specific. "I understand retail" is too broad. "I understand off-price retail economics because I've studied TJX, Ross, and Burlington for five years" is a circle of competence.`,
      keyTakeaway: 'The size of your circle of competence matters less than knowing where its edges are. Staying within your circle dramatically reduces the risk of permanent capital loss.',
      actionItem: 'Write down three industries or business types you genuinely understand deeply. For each, list five specific things you know that the average investor probably doesn\'t. This is your starting circle of competence.'
    }
  },
  {
    id: 'wb-inv-002',
    title: 'Economic Moats: The Source of Lasting Competitive Advantage',
    type: 'concept',
    duration: 15,
    xpReward: 130,
    content: {
      overview: 'Warren Buffett\'s concept of economic moats helps identify businesses capable of sustaining high returns on capital. Learn to recognize the five primary sources of durable competitive advantage.',
      mainContent: `## Understanding Economic Moats

An economic moat is a sustainable competitive advantage that protects a company's profits from competitors, much like a medieval moat protected a castle from invaders. Buffett considers moats essential for long-term investment success.

### The Five Sources of Moats

**1. Network Effects**
The product or service becomes more valuable as more people use it. Think of payment networks, social platforms, or marketplaces. Each new user adds value for existing users, creating a virtuous cycle that's nearly impossible to disrupt.

**2. Intangible Assets**
These include brands, patents, and regulatory licenses. A powerful brand lets companies charge premium prices - consumers will pay more for Coca-Cola than generic cola. Patents provide temporary legal monopolies. Regulatory licenses create barriers to entry in industries like banking or utilities.

**3. Cost Advantages**
Some companies can produce goods or services at lower costs than competitors. This might stem from:
- Scale economies that spread fixed costs
- Superior processes or technology
- Unique access to low-cost inputs
- Geographic advantages for distribution

**4. Switching Costs**
When it's expensive, time-consuming, or risky for customers to switch to a competitor, the incumbent has a moat. Enterprise software exemplifies this - migrating from one ERP system to another is so painful that companies tolerate mediocre products for years.

**5. Efficient Scale**
Some markets are only large enough to support one or a few profitable competitors. A regional cement company might dominate because the economics don't support additional capacity. Potential entrants stay away because new competition would make everyone unprofitable.

### Evaluating Moat Strength

Ask these questions:
- **How long has the advantage persisted?** Moats proven over decades are more reliable
- **Is the moat widening or narrowing?** Technology disrupts many traditional moats
- **What would it cost to replicate?** The higher the cost, the stronger the moat
- **Can you measure pricing power?** Companies with moats can raise prices without losing customers

### Moats and Returns on Capital

The ultimate test of a moat is sustained high returns on invested capital (ROIC). If a company earns 20%+ ROIC for a decade while competitors earn 10%, something is protecting those excess returns.`,
      keyTakeaway: 'Economic moats are the source of sustainable excess returns. Identify the specific source of a company\'s moat before investing, and continuously monitor whether that moat is strengthening or eroding.',
      actionItem: 'Analyze three companies you\'re familiar with. For each, identify whether they have a moat and which type. Write a paragraph explaining why the moat will or won\'t persist for the next decade.'
    }
  },
  {
    id: 'wb-inv-003',
    title: 'Reading Financial Statements: The Income Statement',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'The income statement tells the story of a company\'s profitability over time. Learn to read beyond the headline numbers and extract insights that reveal business quality.',
      mainContent: `## Decoding the Income Statement

The income statement (or profit and loss statement) shows revenues, expenses, and profits over a specific period. Value investors use it to assess earnings quality, profitability trends, and business economics.

### Revenue: The Top Line

Revenue recognition matters enormously. Watch for:

- **Recurring vs. one-time revenue** - Subscription revenue is more valuable than project-based sales
- **Organic vs. acquired growth** - Companies can buy revenue through acquisitions
- **Customer concentration** - Revenue from a few customers is riskier
- **Seasonality patterns** - Some businesses are inherently cyclical

### Gross Profit: The First Indicator of Moat

Gross profit = Revenue - Cost of Goods Sold. The gross margin percentage reveals:

- **Pricing power** - High margins suggest customers value the product
- **Competitive position** - Declining margins may indicate competitive pressure
- **Business model efficiency** - Software companies often have 70-80% gross margins

### Operating Expenses: Where Money Gets Spent

- **R&D** - Investment in future products; essential in tech, less so in mature industries
- **Sales & Marketing** - Customer acquisition costs; should decline as percentage of revenue over time in healthy businesses
- **General & Administrative** - Overhead; should scale efficiently with growth

### Operating Income: The True Business Engine

Operating income (EBIT) shows profitability from core operations before financing decisions. Compare operating margins across competitors to assess relative efficiency.

### The Path to Net Income

Below operating income, you'll find:
- **Interest expense** - Cost of debt
- **Other income/expenses** - Often one-time items; investigate unusual amounts
- **Tax expense** - Effective tax rate reveals tax efficiency

### Earnings Quality Red Flags

Watch for these warning signs:
- Revenue growing faster than cash from operations
- Gross margins declining while revenue grows
- One-time gains inflating earnings
- Frequent "restructuring" charges
- Accounts receivable growing faster than revenue

### Normalized Earnings

Strip out one-time items to find sustainable earning power. A single year's net income rarely reflects true economics - look at five to ten years of data.`,
      keyTakeaway: 'The income statement reveals business quality when you look beyond headline earnings. Focus on revenue quality, margin trends, and the sustainability of profits rather than just the bottom line.',
      actionItem: 'Download the last five years of income statements for a company you\'re interested in. Calculate gross margin, operating margin, and net margin for each year. Identify the trend and explain what\'s driving it.'
    }
  },
  {
    id: 'wb-inv-004',
    title: 'Reading Financial Statements: The Balance Sheet',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'The balance sheet provides a snapshot of financial position and reveals the strength or fragility of a business. Learn to assess asset quality, liability risks, and equity composition.',
      mainContent: `## The Balance Sheet: A Snapshot of Financial Health

While the income statement shows profitability over time, the balance sheet captures everything a company owns and owes at a specific moment. It follows a simple equation: Assets = Liabilities + Shareholders' Equity.

### Asset Quality Assessment

Not all assets are created equal:

**Current Assets**
- **Cash and equivalents** - The ultimate asset; provides flexibility and safety
- **Accounts receivable** - Money owed by customers; watch for aging and bad debt reserves
- **Inventory** - Can become obsolete; compare to industry norms and historical levels

**Long-Term Assets**
- **Property, plant & equipment** - Physical assets; depreciation methods affect reported values
- **Goodwill** - Premium paid in acquisitions; can indicate overpayment if impaired
- **Intangibles** - Patents, trademarks; often undervalued on balance sheets

### Understanding Liabilities

**Current Liabilities**
- **Accounts payable** - Money owed to suppliers; extending payment terms improves cash flow
- **Accrued expenses** - Expenses incurred but not yet paid
- **Current portion of long-term debt** - Debt due within one year

**Long-Term Liabilities**
- **Long-term debt** - Fixed obligations; examine interest rates and maturity schedule
- **Pension obligations** - Often underestimated; read the footnotes carefully
- **Operating leases** - Now on balance sheet; previously hidden obligations

### Key Balance Sheet Ratios

- **Current ratio** = Current assets / Current liabilities (>1.5 is generally healthy)
- **Debt-to-equity** = Total debt / Shareholders' equity (varies by industry)
- **Working capital** = Current assets - Current liabilities
- **Tangible book value** = Equity minus goodwill and intangibles

### Hidden Assets and Liabilities

The balance sheet doesn't capture everything:
- **Real estate carried at historical cost** may be worth far more
- **Brand value** often doesn't appear
- **Off-balance-sheet arrangements** require footnote investigation
- **Contingent liabilities** from lawsuits or guarantees

### The Fortress Balance Sheet

Buffett seeks companies with "fortress" balance sheets:
- More cash than debt
- Conservative leverage ratios
- No complex financial engineering
- Ability to survive economic stress

A strong balance sheet isn't just about surviving - it enables opportunistic actions during crises when competitors struggle.`,
      keyTakeaway: 'The balance sheet reveals financial resilience and hidden risks. A fortress balance sheet with conservative leverage and strong liquidity provides safety and optionality during uncertain times.',
      actionItem: 'Compare the balance sheets of two competitors in the same industry. Calculate current ratio, debt-to-equity, and tangible book value for each. Which company has the stronger financial position and why?'
    }
  },
  {
    id: 'wb-inv-005',
    title: 'Reading Financial Statements: Cash Flow Statement',
    type: 'concept',
    duration: 13,
    xpReward: 115,
    content: {
      overview: 'Cash flow is the lifeblood of every business. Learn to analyze the cash flow statement to understand true economic performance and identify potential manipulation in reported earnings.',
      mainContent: `## Cash Flow: The Ultimate Truth-Teller

While earnings can be manipulated through accounting choices, cash flow is harder to fake. The cash flow statement reconciles accrual-based earnings with actual cash movements, revealing the true economics of a business.

### Three Sections of Cash Flow

**Operating Cash Flow (OCF)**
This shows cash generated from core business operations. It starts with net income and adjusts for:
- Non-cash charges (depreciation, amortization, stock compensation)
- Changes in working capital (receivables, inventory, payables)
- Other operating adjustments

The most important metric for value investors: Is the company generating more cash than it reports in earnings?

**Investing Cash Flow**
This section tracks capital allocation:
- **Capital expenditures (CapEx)** - Spending on property, plant, and equipment
- **Acquisitions** - Cash spent buying other companies
- **Asset sales** - Proceeds from selling assets
- **Investment purchases/sales** - Securities and other investments

**Financing Cash Flow**
This shows how the company funds itself and returns capital:
- Debt issuance and repayments
- Stock issuance and buybacks
- Dividend payments

### Free Cash Flow: The Key Metric

Free Cash Flow = Operating Cash Flow - Capital Expenditures

This represents cash available for:
- Paying dividends
- Buying back shares
- Reducing debt
- Making acquisitions
- Building cash reserves

### Maintenance vs. Growth CapEx

Not all capital expenditure is equal:
- **Maintenance CapEx** - Required to sustain current operations
- **Growth CapEx** - Investment in expansion

True owner earnings = OCF - Maintenance CapEx. Companies often obscure this distinction.

### Cash Flow Red Flags

- OCF consistently below net income (earnings may be overstated)
- Growing receivables consuming cash
- Heavy stock-based compensation adding back to cash flow
- Acquisitions masking organic cash generation
- CapEx declining while depreciation stays constant

### Cash Conversion Cycle

Track how efficiently a company converts sales to cash:
Days Sales Outstanding + Days Inventory Outstanding - Days Payables Outstanding

Shorter cycles mean faster cash conversion and better working capital management.`,
      keyTakeaway: 'Free cash flow reveals true owner earnings after accounting for the capital required to maintain the business. Consistently strong cash conversion is a hallmark of quality businesses.',
      actionItem: 'Calculate the free cash flow yield (FCF / Market Cap) for three companies in your watchlist. Compare their cash conversion (OCF / Net Income ratio) and explain what the differences reveal about business quality.'
    }
  },
  {
    id: 'wb-inv-006',
    title: 'Price vs Value: The Central Concept of Value Investing',
    type: 'concept',
    duration: 12,
    xpReward: 110,
    content: {
      overview: 'Benjamin Graham\'s insight that price and value are distinct concepts forms the intellectual foundation of value investing. Learn to think about stocks as ownership stakes in businesses, not lottery tickets.',
      mainContent: `## The Distinction That Creates Opportunity

Benjamin Graham, the father of value investing, taught that the stock market is a voting machine in the short run but a weighing machine in the long run. Price reflects current sentiment; value reflects underlying business reality.

### Price: What You Pay

Stock prices are set by supply and demand in the market. They're influenced by:
- Investor sentiment and psychology
- Macroeconomic news and forecasts
- Short-term earnings surprises
- Technical trading patterns
- Index fund flows
- Momentum and narrative

Prices can move dramatically on news that has little bearing on long-term business value. This volatility creates opportunity for patient investors.

### Value: What You Get

Intrinsic value represents the present value of all future cash flows a business will generate. Determining it requires:
- Estimating future cash flows
- Selecting an appropriate discount rate
- Making assumptions about growth and duration
- Understanding competitive dynamics

Value is inherently uncertain - it exists within a range rather than as a precise number. This is why Buffett says he'd rather be approximately right than precisely wrong.

### Mr. Market: Your Emotional Business Partner

Graham personified the market as "Mr. Market," a manic-depressive business partner who offers to buy or sell shares daily. Some days he's euphoric and offers high prices. Other days he's depressed and sells cheaply.

Your advantage: You don't have to trade. You can wait for Mr. Market to offer attractive prices and ignore him otherwise.

### Margin of Safety: The Bridge Between Price and Value

Because value estimates are uncertain, intelligent investors demand a margin of safety - paying significantly less than their estimate of intrinsic value. This provides:
- Protection against analytical errors
- Buffer against unforeseen problems
- Higher potential returns if correct

### When Price and Value Converge

Eventually, price tends to reflect value. Catalysts that close the gap include:
- Improved financial performance
- Dividend increases
- Share buybacks
- Acquisitions
- Activist investors
- Simple passage of time

The value investor's edge comes from being right about value and waiting patiently for price to catch up.`,
      keyTakeaway: 'Price is what you pay; value is what you get. The gap between them creates investment opportunity, but only patient investors who understand the difference can exploit it.',
      actionItem: 'Find a stock that has declined 30% or more in the past year. Analyze whether the business value has actually declined by a similar amount, or whether price has simply disconnected from value. Document your reasoning.'
    }
  },
  {
    id: 'wb-inv-007',
    title: 'Intrinsic Value: Methods of Business Valuation',
    type: 'concept',
    duration: 15,
    xpReward: 130,
    content: {
      overview: 'Learn the primary methods for estimating intrinsic value, understanding both their applications and limitations. No single method is perfect - wisdom lies in triangulating across approaches.',
      mainContent: `## Approaches to Valuation

Estimating intrinsic value is both art and science. Different methods suit different business types, and skilled investors often use multiple approaches to triangulate toward a reasonable range.

### Discounted Cash Flow (DCF) Analysis

The theoretically purest method discounts expected future cash flows to present value:

Intrinsic Value = Sum of (Future Cash Flows / (1 + Discount Rate)^n)

**Key Inputs:**
- Free cash flow projections
- Terminal value assumptions
- Discount rate (often 10% for stocks)
- Growth rate estimates

**Challenges:**
- Small changes in assumptions dramatically affect output
- Projecting cash flows beyond 3-5 years is speculative
- Terminal value often dominates the calculation

### Earnings-Based Valuation

**P/E Ratio Analysis**
Compare current price/earnings to:
- Historical average P/E
- Industry peer P/E
- Growth rate (PEG ratio)

A company with sustainable 15% growth might warrant a 15x P/E, while a no-growth utility might deserve 10x.

**Normalized Earnings**
Use average earnings over a full business cycle rather than a single year. This smooths out cyclical fluctuations and reveals true earning power.

### Asset-Based Valuation

**Book Value**
Total assets minus total liabilities. Most useful for:
- Financial companies (banks, insurers)
- Asset-heavy businesses
- Liquidation analysis

**Replacement Cost**
What would it cost to recreate this business from scratch? If market cap is below replacement cost, the stock may be undervalued.

### Owner Earnings

Buffett's preferred metric:
Owner Earnings = Net Income + Depreciation/Amortization - Maintenance CapEx - Changes in Working Capital

This represents cash actually available to owners, stripped of accounting distortions.

### Relative Valuation Pitfalls

Comparing valuations across peers can be misleading:
- Different accounting policies affect comparability
- "Cheap" relative to overvalued peers is still expensive
- Unique competitive positions deserve unique valuations

### The Range Approach

Rather than calculating a precise intrinsic value, estimate a range:
- Conservative case (pessimistic assumptions)
- Base case (reasonable assumptions)
- Optimistic case (things go right)

Buy only when price is below even your conservative estimate.`,
      keyTakeaway: 'Intrinsic value estimation requires multiple approaches and humility about uncertainty. Focus on being approximately right within a range rather than precisely wrong with false precision.',
      actionItem: 'Choose a company you understand well. Calculate intrinsic value using three different methods: P/E-based, DCF (simplified), and owner earnings multiple. Compare results and explain any significant differences.'
    }
  },
  {
    id: 'wb-inv-008',
    title: 'When to Sell: The Overlooked Discipline',
    type: 'concept',
    duration: 11,
    xpReward: 105,
    content: {
      overview: 'Most investment education focuses on buying, but knowing when to sell separates good investors from great ones. Learn the frameworks for making disciplined sell decisions.',
      mainContent: `## The Art of Selling

Selling is psychologically harder than buying. We anchor to purchase prices, fear realizing losses, and worry about missing future gains. A systematic framework removes emotion from this critical decision.

### The Three Valid Reasons to Sell

**1. The Thesis Is Broken**
Your original investment thesis was based on certain assumptions. When those assumptions prove wrong, sell:

- The competitive moat has eroded
- Management integrity is questioned
- Industry dynamics have fundamentally changed
- Expected growth drivers failed to materialize

This isn't about short-term problems - it's about permanent impairment of business value.

**2. Valuation Becomes Extreme**
Even wonderful businesses can become overpriced. Consider selling when:

- Price exceeds your estimate of intrinsic value by wide margin
- The stock trades at historically extreme multiples
- Future returns from current price appear inadequate

Remember: a great business at a terrible price is a terrible investment.

**3. Better Opportunity Exists**
Opportunity cost matters. You might sell when:

- A clearly superior investment emerges
- Your portfolio needs rebalancing
- Cash is needed for personal reasons

Be careful here - the grass often looks greener. Switching costs (taxes, transaction costs) mean you need significantly better opportunities.

### Invalid Reasons to Sell

**The stock has gone down**
Price declines without fundamental deterioration often create buying opportunities, not selling signals.

**The stock has gone up**
Gains aren't a reason to sell. What matters is current price versus current value.

**Market predictions**
Trying to time macro events destroys returns over time.

### Tax-Aware Selling

Long-term capital gains enjoy preferential tax rates. Before selling a winner:
- Calculate the after-tax proceeds
- Compare to after-tax returns from alternatives
- Consider tax-loss harvesting to offset gains

### The Checklist Approach

Before selling, answer these questions:
1. Would I buy this stock at today's price?
2. Has something fundamentally changed?
3. Am I reacting emotionally to price movement?
4. What will I do with the proceeds?

If you can't articulate a clear reason to sell, don't.`,
      keyTakeaway: 'Sell when the thesis breaks, valuation becomes extreme, or a significantly better opportunity exists. Never sell merely because prices moved in either direction.',
      actionItem: 'Review your current holdings and write a "sell thesis" for each - the specific conditions under which you would sell. Having this predetermined removes emotion from future decisions.'
    }
  },
  {
    id: 'wb-inv-009',
    title: 'Behavioral Finance: Understanding Your Own Biases',
    type: 'concept',
    duration: 13,
    xpReward: 115,
    content: {
      overview: 'Your biggest enemy in investing is often yourself. Learn to recognize the cognitive biases that lead to poor investment decisions and develop strategies to counteract them.',
      mainContent: `## The Psychology of Investment Mistakes

Behavioral finance reveals that humans are not the rational actors assumed in traditional finance theory. Our brains evolved for survival, not stock picking, and the resulting biases cause predictable errors.

### Cognitive Biases That Destroy Returns

**Confirmation Bias**
We seek information confirming our existing beliefs and dismiss contradictory evidence. Investors in love with a stock ignore warning signs and overweight positive news.

*Countermeasure:* Actively seek out the bear case. Before buying, write down three reasons the investment could fail.

**Anchoring**
We fixate on irrelevant reference points, especially purchase prices. A stock isn't "cheap" because it's down 50% from highs - price history is irrelevant to future value.

*Countermeasure:* Always ask "Would I buy this today at this price?" regardless of your cost basis.

**Loss Aversion**
Losses hurt roughly twice as much as equivalent gains feel good. This leads to:
- Holding losers too long (hoping to break even)
- Selling winners too early (locking in gains)
- Taking excessive risk to recover losses

*Countermeasure:* Pre-commit to sell rules before investing.

**Recency Bias**
We overweight recent events and underweight historical patterns. After a market crash, we expect more crashes. After a bull market, we expect continued gains.

*Countermeasure:* Study market history extensively. What feels unprecedented often has precedent.

**Overconfidence**
Most investors believe they're above average. Studies show active traders underperform passive investors, yet trading persists.

*Countermeasure:* Keep detailed records of your predictions and outcomes. Data humbles overconfidence.

### Emotional Traps

**Fear and Greed**
These twin emotions drive market cycles. Fear causes selling at lows; greed causes buying at highs. Both destroy returns.

**Herd Behavior**
Following the crowd feels safe but produces average results at best. The best opportunities often exist when you're acting differently from the herd.

### Building Decision Processes

Create systems that bypass bias:
- Investment checklists
- Written investment theses
- Cooling-off periods before major decisions
- Devil's advocate discussions
- Regular portfolio reviews with specific questions`,
      keyTakeaway: 'Self-awareness about cognitive biases is the first step toward better decisions. Build processes and checklists that force you to counteract your natural tendencies.',
      actionItem: 'Identify your two strongest cognitive biases by reviewing past investment mistakes. Design a specific countermeasure for each and commit to implementing it on your next investment decision.'
    }
  },
  {
    id: 'wb-inv-010',
    title: 'Risk vs Uncertainty: A Crucial Distinction',
    type: 'concept',
    duration: 12,
    xpReward: 110,
    content: {
      overview: 'Frank Knight distinguished between risk (quantifiable probability) and uncertainty (unknowable outcomes). This distinction has profound implications for how value investors think about protecting capital.',
      mainContent: `## Beyond Simple Risk Metrics

Modern finance treats risk as volatility - the standard deviation of returns. But value investors view risk differently: the probability of permanent capital loss, not temporary price fluctuations.

### Risk: What Can Be Measured

Risk involves situations where:
- Outcomes can be identified
- Probabilities can be reasonably estimated
- Historical data provides guidance

Examples of quantifiable risk:
- Default rates on bonds with similar credit ratings
- Insurance claim frequencies based on actuarial data
- Portfolio correlation during normal market conditions

These risks can be managed through diversification, hedging, and probabilistic thinking.

### Uncertainty: The Unknown Unknowns

Uncertainty involves situations where:
- Possible outcomes are unknown
- No probability can be meaningfully assigned
- History provides little guidance

Examples of true uncertainty:
- Technological disruption of entire industries
- Regulatory changes that reshape markets
- Management fraud at companies with clean histories
- Black swan events

### Why This Distinction Matters

**Beta Is Not Risk**
A stock that moves more than the market isn't necessarily riskier in the value investing sense. High beta might simply mean the market doesn't understand the business. Low beta doesn't mean safe - a stable stock heading toward obsolescence carries enormous risk.

**Volatility Creates Opportunity**
If you define risk correctly (permanent capital loss, not price volatility), then volatility becomes your friend. Price drops without fundamental deterioration let you buy more at lower prices.

### Managing the Unmanageable

For true uncertainty, traditional risk management fails. Instead:

**Margin of Safety**
Pay prices so low that even unexpected negative outcomes don't cause permanent losses.

**Balance Sheet Strength**
Companies with fortress balance sheets survive black swans that destroy leveraged competitors.

**Business Model Resilience**
Some businesses prove robust across diverse scenarios; others are fragile to specific uncertainties.

**Humility**
Accept that you can't predict everything. Size positions to survive being wrong.

### The Permanent Loss Focus

Ask not "How volatile might this investment be?" but rather:
- What could permanently impair this business?
- How likely is that scenario?
- Am I being compensated for taking this risk?

This reframing shifts attention from price movements to business fundamentals.`,
      keyTakeaway: 'True investment risk is the probability of permanent capital loss, not volatility. Uncertainty cannot be eliminated, only managed through margin of safety, diversification, and humility.',
      actionItem: 'For your largest holding, identify three sources of quantifiable risk and three sources of true uncertainty. Assess whether your position size appropriately accounts for the uncertainties you cannot predict.'
    }
  },
  {
    id: 'wb-inv-011',
    title: 'Portfolio Concentration: How Many Stocks to Own',
    type: 'concept',
    duration: 11,
    xpReward: 105,
    content: {
      overview: 'Should you own 10 stocks or 100? This lesson explores the trade-offs between concentration and diversification, helping you find the right balance for your situation.',
      mainContent: `## The Concentration Debate

Value investors have long debated optimal portfolio concentration. Buffett argues that diversification protects against ignorance - if you know what you're doing, it makes little sense to put significant money in your 50th favorite stock rather than your best ideas.

### The Case for Concentration

**Your Best Ideas Deserve Most Capital**
If you have genuine insight into a few businesses, diluting exposure across dozens of stocks guarantees mediocre returns. Your 20th-best idea probably isn't much better than an index fund.

**Forced Discipline**
Concentration forces careful analysis. When each position represents 10% of your portfolio, you cannot afford careless mistakes. This pressure improves decision quality.

**The Greats Concentrate**
Buffett's portfolio has often been dominated by a few positions. Charlie Munger has noted that their best returns came from concentrated bets, not diversification.

### The Case for Diversification

**Protection Against the Unknowable**
Even careful analysis cannot predict fraud, unexpected competitive disruption, or black swan events. Diversification protects against risks you cannot foresee.

**Cognitive Limitations**
How many businesses can you truly understand deeply? Most investors overestimate their circle of competence. Diversification acknowledges these limits.

**Behavioral Benefits**
Concentrated portfolios experience larger swings. Many investors cannot emotionally handle watching 30% of net worth drop 50%. Diversification reduces behavioral mistakes driven by volatility.

### Finding Your Optimal Concentration

Consider these factors:

**Experience Level**
Beginners should diversify more heavily. As skill develops, concentration can increase.

**Time Available**
Concentration requires ongoing monitoring. Investors with limited time should diversify.

**Edge Magnitude**
How much better are your ideas than the market? Small edges require diversification; large edges can support concentration.

### Practical Guidelines

- **Minimum diversification:** At least 10-12 positions to avoid single-stock catastrophe risk
- **Maximum concentration:** No more than 25-30% in any single position (even your best idea can fail)
- **Sector awareness:** Avoid concentration in a single industry
- **Correlation matters:** Holdings should face different risks

### The Kelly Criterion Insight

Optimal position sizing depends on probability of success and payoff ratio. High conviction + high expected value = larger position. Low conviction = smaller position. This isn't about feeling confident - it's about having analytical reasons for conviction.`,
      keyTakeaway: 'Concentrate enough to make your best ideas matter, but diversify enough to survive being wrong. The optimal number of holdings depends on your skill, time, and psychological makeup.',
      actionItem: 'Review your portfolio and calculate the concentration in your top 5 holdings. Does this match your actual conviction level? Adjust position sizes to better reflect your edge in each investment.'
    }
  },
  {
    id: 'wb-inv-012',
    title: 'Dividend Investing: Income and Signal',
    type: 'concept',
    duration: 12,
    xpReward: 110,
    content: {
      overview: 'Dividends provide both income and important signals about business quality. Learn to evaluate dividend sustainability, growth potential, and the role of dividends in total return.',
      mainContent: `## The Power of Dividends

Dividends represent a direct return of cash to shareholders. Unlike earnings, which can be manipulated through accounting, dividends require actual cash generation. This makes them both an income source and a signal of business quality.

### Why Dividends Matter

**Forced Discipline**
Committing to dividends forces management to generate real cash flow. Companies cannot pay dividends with creative accounting - only with cash.

**Skin in the Game**
Dividends reduce capital available for empire-building acquisitions and wasteful spending. Returning cash to shareholders signals confidence in current operations rather than endless expansion.

**Compounding Power**
Reinvested dividends compound dramatically over time. Studies show that over long periods, dividends and their reinvestment account for the majority of total equity returns.

### Evaluating Dividend Safety

**Payout Ratio**
Dividends / Earnings (or better: Dividends / Free Cash Flow)
- Under 50%: Generally safe, room for growth
- 50-70%: Moderate, watch for earnings declines
- Over 70%: Potentially unsustainable; investigate

**Coverage Ratio**
Free Cash Flow / Dividends
- Above 1.5x is comfortable
- Below 1x means dividends exceed cash generation (unsustainable)

**Balance Sheet Strength**
Companies with low debt can maintain dividends through temporary difficulties. Highly leveraged companies may cut dividends to service debt.

### Dividend Growth Investing

The best dividend stocks combine:
- **Reasonable starting yield** (2-4%)
- **Consistent dividend growth** (7-10% annually)
- **Sustainable payout ratio** (room to grow)
- **Business quality** (moat and competitive position)

A 3% yield growing 10% annually becomes a 7.8% yield on original cost after 10 years.

### Dividend Aristocrats

Companies that have raised dividends for 25+ consecutive years have demonstrated:
- Durable business models
- Management commitment to shareholders
- Financial discipline

This track record doesn't guarantee future success but indicates quality.

### Tax Considerations

Qualified dividends receive preferential tax treatment (0%, 15%, or 20% depending on income). Consider holding dividend stocks in taxable accounts and growth stocks in tax-advantaged accounts.

### The Total Return Perspective

Don't choose between dividends and growth. Total return = price appreciation + dividends. Some wonderful businesses return cash through buybacks rather than dividends. What matters is total return to shareholders, not the form it takes.`,
      keyTakeaway: 'Dividends signal quality and discipline while providing compounding income. Evaluate safety through payout ratios and cash flow coverage, and prioritize sustainable dividend growth over high current yield.',
      actionItem: 'Identify three dividend stocks that have raised dividends for at least 10 consecutive years. Calculate their current yield, 5-year dividend growth rate, and payout ratio. Assess which offers the best combination of safety and growth.'
    }
  },
  {
    id: 'wb-inv-013',
    title: 'Long-Term Compounding: The Eighth Wonder',
    type: 'concept',
    duration: 13,
    xpReward: 120,
    content: {
      overview: 'Einstein allegedly called compound interest the eighth wonder of the world. Learn how to harness compounding through patient, long-term investing and avoid the behaviors that interrupt it.',
      mainContent: `## The Mathematics of Wealth Building

Compounding is the process by which returns generate additional returns. Over long periods, this creates extraordinary wealth from modest beginnings. Yet most investors fail to capture compounding's full power because they interrupt the process.

### Understanding Exponential Growth

Consider two scenarios with $100,000:
- 10% annual return for 30 years: $1,744,940
- 15% annual return for 30 years: $6,621,177

A 5% difference in annual returns creates nearly 4x the final wealth. Small improvements in returns, sustained over decades, have enormous consequences.

### The Three Enemies of Compounding

**1. Taxes**
Every time you sell a winning investment, you pay taxes on gains. These taxes reduce the capital available to compound. Long-term holders defer taxes for decades, allowing more capital to work.

Example: $100,000 compounding at 10% for 30 years
- Holding entire period (20% tax at end): $1,395,952 after tax
- Selling every year (20% tax each year): $761,225 after tax

Same pre-tax returns, vastly different outcomes.

**2. Transaction Costs**
Trading costs include commissions, bid-ask spreads, and market impact. Frequent trading accumulates costs that drain returns.

**3. Behavioral Interruption**
The biggest enemy of compounding is selling during market panics. Missing just the 10 best days in the market over 20 years can cut returns in half. Those best days often follow the worst days, which is exactly when panicked investors sell.

### The Power of Time

Time is the value investor's greatest asset:
- At 10% annually, money doubles roughly every 7 years
- Over 28 years: 16x your initial investment
- Over 42 years: 64x your initial investment

Starting early and remaining invested matters more than being brilliant.

### Finding Compounding Machines

The ideal investment for compounding:
- Earns high returns on capital (15%+)
- Can reinvest earnings at similar high rates
- Has a long runway for reinvestment
- Requires little additional capital for growth

These "compounding machines" generate wealth far exceeding the market average.

### The Buy-and-Hold Philosophy

Buffett's preferred holding period is "forever." This isn't dogma - it's tax efficiency combined with the recognition that truly great businesses are rare. When you find one, let it compound.

### Patience as Competitive Advantage

Most investors are impatient. They trade frequently, chase performance, and panic during downturns. Simply having a longer time horizon than others creates an exploitable edge.`,
      keyTakeaway: 'Compounding is powerful but fragile - easily interrupted by taxes, costs, and behavioral mistakes. Time and patience are the value investor\'s greatest advantages. Let your winners run.',
      actionItem: 'Calculate how much your portfolio would be worth in 30 years at your current return rate. Then calculate the impact of improving returns by 2% annually through better stock selection and reduced trading. Let the numbers motivate long-term discipline.'
    }
  },
  {
    id: 'wb-inv-014',
    title: 'Management Quality: Investing in People',
    type: 'concept',
    duration: 12,
    xpReward: 115,
    content: {
      overview: 'Behind every great business are capable, honest managers who think like owners. Learn to evaluate management quality, capital allocation skill, and alignment with shareholders.',
      mainContent: `## The Human Factor in Investing

Business quality matters, but management quality determines how effectively that business is run. Mediocre managers can destroy great businesses; exceptional managers can create value in average ones.

### The Three Pillars of Management Quality

**1. Integrity**
The most important quality - without it, the others don't matter:
- Track record of honest communication
- Admitting mistakes and learning from them
- Related party transactions and conflicts of interest
- Compensation alignment with shareholder outcomes
- Consistency between words and actions

Red flags: Excessive executive compensation, aggressive accounting, insider selling at highs, blame-shifting during difficulties.

**2. Competence**
The ability to run operations effectively:
- Industry expertise and experience
- Track record of operational improvement
- Understanding of competitive dynamics
- Ability to attract and retain talent
- Adaptability to changing conditions

Assess this through historical results, not charisma or credentials.

**3. Capital Allocation**
Perhaps the most overlooked skill. Managers decide how to deploy cash:
- Reinvest in the business (organic growth)
- Make acquisitions
- Pay dividends
- Buy back shares
- Reduce debt
- Hold cash

Great capital allocators create enormous shareholder value. Poor capital allocators destroy value through overpriced acquisitions and ill-timed buybacks.

### Reading the Signals

**Shareholder Letters**
Annual letters reveal thinking quality. Look for:
- Candor about problems, not just successes
- Long-term focus over quarterly performance
- Owner mentality in language and decisions

**Earnings Calls**
How does management handle tough questions? Defensive evasion suggests problems.

**Insider Ownership**
Managers with significant personal wealth in the stock are aligned with shareholders. Token ownership suggests misalignment.

**Compensation Structure**
Does pay reward long-term value creation or short-term metrics that can be gamed?

### The Founder Advantage

Founder-led companies often outperform. Founders typically:
- Think in decades, not quarters
- Have emotional investment beyond financial
- Make bolder long-term decisions
- Maintain cultural integrity

### When Management Is a Dealbreaker

Even cheap stocks should be avoided when:
- Management has a history of dishonesty
- Capital allocation has consistently destroyed value
- Insider selling is heavy without explanation
- Compensation is excessive relative to performance`,
      keyTakeaway: 'Invest with honest, competent managers who allocate capital wisely. Integrity is non-negotiable - skilled but untrustworthy managers are dangerous. Track record reveals character better than interviews.',
      actionItem: 'Read the last three annual shareholder letters from a company you own. Evaluate the CEO\'s candor about challenges, consistency of messaging, and evidence of long-term thinking. Rate management quality and decide if it supports your investment thesis.'
    }
  },
  {
    id: 'wb-inv-015',
    title: 'Building Your Investment Process',
    type: 'concept',
    duration: 14,
    xpReward: 125,
    content: {
      overview: 'Success in value investing requires a systematic, repeatable process. Learn to build an investment framework that incorporates everything you\'ve learned into disciplined decision-making.',
      mainContent: `## From Knowledge to Process

Understanding value investing concepts is necessary but not sufficient. Converting knowledge into consistent practice requires a systematic investment process that guides decisions and removes emotion.

### The Four-Phase Investment Process

**Phase 1: Idea Generation**
Where do investment ideas come from?

- Screeners filtering for value metrics
- Industry research and trade publications
- 13F filings from respected investors
- Spin-offs and corporate restructurings
- Personal experience and observation
- Market dislocations and sector selloffs

Create multiple idea sources to ensure a steady pipeline of candidates.

**Phase 2: Initial Analysis**
Quick assessment to determine if deeper work is warranted:

- Is this within my circle of competence?
- Does the business have an economic moat?
- Is the balance sheet safe?
- Is current valuation potentially attractive?
- Are there any immediate disqualifiers?

Most ideas should be rejected here. Only proceed with promising candidates.

**Phase 3: Deep Research**
Thorough analysis of surviving candidates:

- Complete reading of annual reports (10-Ks)
- Understanding the competitive landscape
- Detailed financial analysis (5-10 years)
- Multiple valuation approaches
- Identification of key value drivers and risks
- Assessment of management quality

Document everything. Write a full investment thesis.

**Phase 4: Position Management**
Ongoing monitoring of holdings:

- Quarterly review of fundamentals
- Comparison of results to original thesis
- Valuation updates as price changes
- Continuous learning about the industry
- Predetermined triggers for additional buying or selling

### The Investment Checklist

Create a checklist of questions every investment must answer:

1. Can I explain this business to a child?
2. Will this business exist in 10 years?
3. What is the source of competitive advantage?
4. Is management honest and capable?
5. Am I paying less than intrinsic value?
6. What could go wrong, and can I survive it?
7. Why does this opportunity exist?

### Journaling and Learning

Keep an investment journal:
- Record your thesis when buying
- Note your thinking when selling
- Review past decisions annually
- Identify patterns in mistakes and successes

### Continuous Improvement

The best investors are perpetual students:
- Read annual reports obsessively
- Study great investors' writings
- Learn from mistakes without dwelling
- Expand circle of competence deliberately
- Stay humble about what you don't know

Your process will evolve. What matters is having one and following it consistently.`,
      keyTakeaway: 'Convert knowledge into a systematic process with clear phases for idea generation, research, decision-making, and monitoring. Document everything, use checklists, and continuously improve based on honest assessment of outcomes.',
      actionItem: 'Write out your complete investment process from idea generation through position management. Include specific checklists and decision criteria. Then use this process on your next investment candidate, documenting each step.'
    }
  }
];
