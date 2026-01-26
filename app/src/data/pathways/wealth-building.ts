import type { PathwayLevel } from '@/types';

// Import expanded lesson modules
import { valueInvestingLessons } from './wealth-investing';
import { businessLessons } from './wealth-business';
import { realEstateLessons } from './wealth-realestate';
import { taxStrategyLessons } from './wealth-tax';
import { wealthPsychologyLessons } from './wealth-psychology';
import { fireLessons } from './wealth-fire';

/**
 * Wealth Building Academy Pathway
 * 106 lessons across 10 levels covering personal finance, investing, business, and financial independence
 */
export const wealthBuildingPathway: PathwayLevel[] = [
  {
    id: 'wealth-level1',
    title: 'Level 1: Wealth Mindset Foundations',
    description: 'Build the mental foundation for lasting wealth',
    icon: '💰',
    color: 'emerald',
    unlockRequirement: 0,
    lessons: [
      {
        id: 'wb-1',
        title: 'The Wealth Mindset',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Your beliefs about money determine your financial destiny.',
          mainContent: `**The Psychology of Wealth**

Most people have a complicated relationship with money. They want it but feel guilty about wanting it. They admire the wealthy but resent them too. This internal conflict sabotages their ability to build wealth.

**The Scarcity vs. Abundance Mindset**

David Bach in "Start Late, Finish Rich" identifies a fundamental split:

**Scarcity Mindset:**
- Money is limited - if I get more, someone else gets less
- Rich people are lucky or dishonest
- I don't deserve wealth
- Money is the root of all evil

**Abundance Mindset:**
- Wealth can be created, not just redistributed
- Rich people often solve problems for others
- I can learn to build wealth
- Money is a tool that amplifies who you are

**Benjamin Graham's Intelligent Investor Mindset:**

Graham, Warren Buffett's mentor, emphasized that successful investing is 80% psychological:

"The investor's chief problem - and even his worst enemy - is likely to be himself."

**The Three Wealth Beliefs:**

1. **Wealth is learnable** - It's a skill, not a birthright
2. **Wealth is systematic** - It follows predictable rules
3. **Wealth is available** - The door is open to anyone willing to walk through

**Action Step:**
Examine your current money beliefs. Where did they come from? Parents? Culture? Experience? Which beliefs serve you, and which hold you back?`,
          keyTakeaway: 'Wealth begins in your mind. Change your beliefs about money, and your financial reality will follow.',
          quiz: {
            question: 'According to Benjamin Graham, what is the investor\'s chief problem?',
            options: [
              'Lack of capital',
              'Market volatility',
              'Himself (psychology)',
              'Bad stock picks',
            ],
            correct: 2,
            explanation: 'Graham believed that emotional discipline and psychological mastery were more important than technical analysis.',
          },
        },
      },
      {
        id: 'wb-2',
        title: 'Pay Yourself First',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'The single habit that separates the wealthy from everyone else.',
          mainContent: `**The Most Powerful Wealth Habit**

David Bach calls "Pay Yourself First" the most important financial habit you can develop. It's simple but revolutionary:

**Before you pay anyone else - bills, rent, subscriptions - pay yourself.**

**Why Most People Stay Broke:**

Typical approach:
Income -> Bills -> Spending -> Savings (if anything left)

Result: Nothing is ever left. Lifestyle expands to consume income.

**The Wealthy Approach:**

Income -> Savings (10-20%) -> Bills -> Spending

Result: Wealth builds automatically, regardless of income.

**The Math:**

If you earn $50,000/year and save 10%:
- Monthly savings: $416
- After 30 years at 8% return: $611,729

If you wait 10 years to start:
- Monthly savings: $416
- After 20 years at 8% return: $244,691

**Starting late costs you $367,000!**

**The Minimum Percentages:**

- **Broke:** 0% (living paycheck to paycheck)
- **Surviving:** 3% (barely growing)
- **Building:** 10% (solid foundation)
- **Accelerating:** 15-20% (wealth trajectory)
- **Wealthy:** 20%+ (financial freedom path)

**The Implementation:**

1. Calculate your "Pay Yourself First" amount (start with 10%)
2. Set up automatic transfer on payday
3. Transfer happens BEFORE you see the money
4. Treat it as non-negotiable as rent

**The Secret:**

You won't miss what you never see. Automate it and forget it.`,
          keyTakeaway: 'Pay yourself first - automatically, before you pay anyone else. This single habit can make you a millionaire.',
          quiz: {
            question: 'What is the recommended minimum percentage to pay yourself first?',
            options: [
              '3%',
              '5%',
              '10%',
              '25%',
            ],
            correct: 2,
            explanation: '10% is the minimum recommended to build a solid wealth foundation. Higher percentages accelerate your path to financial freedom.',
          },
        },
      },
      {
        id: 'wb-3',
        title: 'The Latte Factor',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Small daily expenses can cost you a fortune - or build one.',
          mainContent: `**The Latte Factor Concept**

David Bach coined "The Latte Factor" to illustrate how small, mindless daily expenses sabotage wealth building.

**The Original Example:**

A daily $5 latte seems harmless. But let's do the math:

- Daily: $5
- Monthly: $150
- Yearly: $1,800
- Over 30 years at 10%: **$339,073**

Your daily coffee habit could cost you over a third of a million dollars.

**But It's Not Just Coffee:**

Track your spending for one week. Common "Latte Factors" include:

- Subscription services you forgot about: $50/month
- Eating out for lunch: $15/day = $300/month
- Impulse Amazon purchases: $100/month
- Premium app upgrades: $30/month
- Convenience store stops: $10/day

**The Typical American's Latte Factor:**

Most people leak $200-500/month on things that bring no lasting value.

$300/month invested at 10% for 30 years = **$678,146**

**The Point Isn't Deprivation:**

Bach clarifies: "I'm not saying never buy a latte. I'm saying be CONSCIOUS about it."

**The Exercise:**

For one week, write down every purchase. Ask:
1. Did this bring me lasting value?
2. Will I remember this purchase in a month?
3. Could this money work harder for me invested?

**The Redirect:**

Take your Latte Factor and redirect it:
- Cancel unused subscriptions
- Bring lunch twice a week
- Wait 24 hours before impulse purchases
- Automate the savings

**The Result:**

Small daily choices, compounded over decades, determine whether you retire wealthy or broke.`,
          keyTakeaway: 'Track your small daily expenses for one week. The "Latte Factor" reveals how minor spending habits can cost you a fortune.',
          quiz: {
            question: 'A $5 daily expense invested instead at 10% for 30 years becomes approximately:',
            options: [
              '$54,000',
              '$150,000',
              '$339,000',
              '$1,000,000',
            ],
            correct: 2,
            explanation: '$5/day = $1,800/year. Invested at 10% for 30 years with compound interest, this grows to approximately $339,000.',
          },
        },
      },
      {
        id: 'wb-4',
        title: 'Compound Interest Magic',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Einstein allegedly called it the eighth wonder of the world.',
          mainContent: `**The Most Powerful Force in Finance**

Compound interest is interest earning interest. It's the engine that turns modest savings into fortunes.

**Simple vs. Compound Interest:**

Simple Interest (rare today):
- $10,000 at 10% = $1,000/year forever
- After 30 years: $40,000

Compound Interest:
- $10,000 at 10%, reinvested annually
- After 30 years: $174,494

**The difference: $134,494** - from the same initial investment!

**Why Time Matters More Than Amount:**

Consider two investors:

**Investor A (Starts at 25):**
- Invests $5,000/year for 10 years (ages 25-35)
- Total invested: $50,000
- Then stops and lets it grow
- At age 65: **$787,176**

**Investor B (Starts at 35):**
- Invests $5,000/year for 30 years (ages 35-65)
- Total invested: $150,000
- At age 65: **$611,729**

**Investor A invests 3x LESS but ends up with MORE!**

This is why starting early (or starting NOW if you're late) matters so much.

**The Three Variables:**

1. **Principal** - How much you invest
2. **Rate** - What return you earn
3. **Time** - How long it compounds

You control all three. But time is the most powerful and the only one you can never get back.

**The Formula:**

Future Value = Present Value x (1 + rate)^years

But you don't need math - you need action. Start now.`,
          keyTakeaway: 'Compound interest is exponential, not linear. Time is your greatest asset - every year you wait costs you exponentially.',
          quiz: {
            question: 'Why does someone who starts investing at 25 often end up wealthier than someone who starts at 35?',
            options: [
              'They earn higher returns',
              'They invest more money',
              'Compound interest has more time to work',
              'They pick better stocks',
            ],
            correct: 2,
            explanation: 'The extra 10 years of compounding makes a massive difference. Time is the most powerful variable in the compound interest equation.',
          },
        },
      },
      {
        id: 'wb-5',
        title: 'The Rule of 72',
        type: 'concept',
        duration: 3,
        xpReward: 50,
        content: {
          overview: 'A simple mental math trick to estimate investment growth.',
          mainContent: `**The Rule of 72**

This simple formula tells you how long it takes to double your money:

**Years to Double = 72 / Interest Rate**

**Examples:**

- At 6% return: 72/6 = **12 years** to double
- At 8% return: 72/8 = **9 years** to double
- At 10% return: 72/10 = **7.2 years** to double
- At 12% return: 72/12 = **6 years** to double

**Practical Applications:**

**Evaluating Investments:**

"This fund returned 9% annually."
72/9 = 8 years to double your money.

**Understanding Debt:**

Credit card at 18% interest:
72/18 = 4 years for your debt to DOUBLE if unpaid.

**The Doubling Chain:**

$10,000 at 10% annual return:
- Start: $10,000
- Year 7: $20,000 (1st double)
- Year 14: $40,000 (2nd double)
- Year 21: $80,000 (3rd double)
- Year 28: $160,000 (4th double)
- Year 35: $320,000 (5th double)

**5 doubles in 35 years turns $10,000 into $320,000**

**Why This Matters:**

Benjamin Graham emphasized that intelligent investors must understand basic math. The Rule of 72 lets you:
- Quickly evaluate opportunities
- Understand the true cost of debt
- Set realistic expectations
- Make informed decisions without a calculator

**Reverse Application:**

Want to double money in 6 years?
72/6 = 12% return needed

Is that realistic? With stocks historically returning 7-10%, probably not consistently.`,
          keyTakeaway: 'Divide 72 by any interest rate to estimate years to double. This simple tool helps you evaluate investments and understand debt instantly.',
          quiz: {
            question: 'Using the Rule of 72, how long does money take to double at 8% annual return?',
            options: [
              '6 years',
              '8 years',
              '9 years',
              '12 years',
            ],
            correct: 2,
            explanation: '72 divided by 8 equals 9 years. Your money doubles approximately every 9 years at an 8% return.',
          },
        },
      },
      {
        id: 'wb-6',
        title: 'Emergency Fund Essentials',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'The financial foundation that prevents disaster from becoming catastrophe.',
          mainContent: `**Why Emergency Funds Come First**

Before investing, before paying off debt aggressively, you need a cash cushion. David Bach calls this your "Security Bucket."

**What Qualifies as an Emergency:**

- Job loss
- Medical expenses
- Major car repair
- Home emergency
- Family crisis

**What Doesn't:**

- Sales you don't want to miss
- Vacations
- New phone because yours is "old"
- Holiday gifts
- Anything planned or predictable

**The Target Amount:**

**Minimum:** 3 months of expenses
**Ideal:** 6 months of expenses
**Secure:** 12 months of expenses

Calculate YOUR number:
Monthly essential expenses x 6 = Your goal

**Where to Keep It:**

- High-yield savings account (earning 4-5% currently)
- Money market account
- NOT in checking (too easy to spend)
- NOT invested (too volatile when needed)

**The Psychological Benefit:**

An emergency fund isn't just financial security - it's mental freedom.

- You can negotiate better at work (not desperate)
- You can take calculated risks
- You sleep better
- You make better decisions under pressure

**Benjamin Graham's Perspective:**

Graham taught that intelligent investing starts with security. You cannot think clearly about long-term wealth when worried about next month's rent.

**Building It:**

1. Start with $1,000 (starter emergency fund)
2. Then build to one month of expenses
3. Continue to 3-6 months
4. Maintain and replenish when used

**The First Priority:**

Before aggressive debt payoff, before investing, build at least a $1,000 starter emergency fund. This prevents emergencies from becoming debt spirals.`,
          keyTakeaway: 'Build 3-6 months of expenses in cash before aggressive investing. This foundation prevents emergencies from derailing your wealth journey.',
          quiz: {
            question: 'What is the recommended emergency fund size?',
            options: [
              '1 month of expenses',
              '3-6 months of expenses',
              '1 year of income',
              '$10,000 flat',
            ],
            correct: 1,
            explanation: '3-6 months of expenses is the recommended range. This provides adequate buffer for most emergencies while not keeping too much cash uninvested.',
          },
        },
      },
      {
        id: 'wb-7',
        title: 'Good Debt vs Bad Debt',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Not all debt is created equal - learn to use debt as a tool.',
          mainContent: `**The Debt Distinction**

David Bach teaches that debt isn't inherently evil - it's a tool. Like any tool, it can build or destroy depending on how you use it.

**Bad Debt (Destroys Wealth):**

Debt used to buy things that decrease in value:

- Credit card debt (15-25% interest)
- Car loans for depreciating vehicles
- Furniture financing
- Personal loans for consumption
- Payday loans (400%+ interest!)

**Characteristics of Bad Debt:**
- High interest rates
- Funds consumption, not investment
- The item loses value while debt remains
- Creates negative net worth

**Good Debt (Can Build Wealth):**

Debt used to acquire appreciating assets or increase earning power:

- Mortgage on a reasonably priced home
- Student loans for in-demand skills
- Business loans for profitable ventures
- Investment property loans

**Characteristics of Good Debt:**
- Lower interest rates
- Funds assets that appreciate
- The asset gains value over time
- Creates positive net worth over time

**The Test Questions:**

Before taking on debt, ask:
1. Will this asset appreciate or depreciate?
2. Will this increase my earning power?
3. Is the interest rate below potential returns?
4. Can I afford payments without stress?

**Benjamin Graham's Warning:**

Graham cautioned against leverage (borrowed money for investing). Even "good" debt amplifies both gains AND losses. The intelligent investor uses debt sparingly and strategically.

**The Priority Order:**

1. Eliminate high-interest debt first (credit cards)
2. Maintain low-interest good debt (mortgage)
3. Never take bad debt again
4. Use good debt strategically`,
          keyTakeaway: 'Good debt buys appreciating assets; bad debt buys depreciating things. Eliminate bad debt first, use good debt strategically.',
          quiz: {
            question: 'Which is typically considered "good debt"?',
            options: [
              'Credit card balance',
              'Car loan',
              'Mortgage on a reasonable home',
              'Furniture financing',
            ],
            correct: 2,
            explanation: 'A mortgage on a reasonably priced home is considered good debt because the asset typically appreciates over time and interest rates are relatively low.',
          },
        },
      },
    ],
  },
  {
    id: 'wealth-level2',
    title: 'Level 2: Value Investing Principles',
    description: 'Master Benjamin Graham\'s timeless investment wisdom',
    icon: '📈',
    color: 'blue',
    unlockRequirement: 5,
    lessons: [
      {
        id: 'wb-8',
        title: 'Value Investing 101',
        type: 'concept',
        duration: 5,
        xpReward: 50,
        content: {
          overview: 'The investment philosophy that created Warren Buffett.',
          mainContent: `**What Is Value Investing?**

Benjamin Graham developed value investing in the 1930s. His student Warren Buffett used these principles to become one of the world's richest people.

**The Core Idea:**

A stock is not just a ticker symbol - it's partial ownership in a real business. The market price fluctuates daily, but the business's true value changes slowly.

**Graham's Definition:**

"An investment operation is one which, upon thorough analysis, promises safety of principal and an adequate return. Operations not meeting these requirements are speculative."

**The Two Key Concepts:**

1. **Price** - What you pay (market determined)
2. **Value** - What you get (business determined)

**The Value Investor's Advantage:**

When price < value = buying opportunity
When price > value = selling opportunity (or avoid)

**Graham vs. Speculation:**

**Speculators:**
- Focus on price movements
- Try to predict market direction
- Trade frequently
- Follow crowds and trends

**Value Investors:**
- Focus on business fundamentals
- Calculate intrinsic value
- Hold for long term
- Buy when others are fearful

**The Buffett Summary:**

"Price is what you pay. Value is what you get."

"Be fearful when others are greedy, and greedy when others are fearful."

**The Mindset Shift:**

Stop asking: "Where is this stock going?"
Start asking: "What is this business worth?"

The market is a voting machine short-term (popularity contest) but a weighing machine long-term (true value emerges).`,
          keyTakeaway: 'Value investing means buying businesses for less than they are worth. Focus on value, not price movements.',
          quiz: {
            question: 'According to Benjamin Graham, what is the difference between investing and speculating?',
            options: [
              'How much money you use',
              'Whether you analyze the business and seek safety of principal',
              'How long you hold the investment',
              'Whether you use a broker',
            ],
            correct: 1,
            explanation: 'Graham defined investing as operations that, upon thorough analysis, promise safety of principal and adequate return. Everything else is speculation.',
          },
        },
      },
      {
        id: 'wb-9',
        title: 'Mr. Market Explained',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Graham\'s brilliant allegory for dealing with market volatility.',
          mainContent: `**The Mr. Market Parable**

Benjamin Graham created "Mr. Market" to help investors understand stock market psychology:

**The Setup:**

Imagine you own a small share of a business with a partner named Mr. Market. Every day, Mr. Market shows up and offers to buy your share or sell you his share.

**The Catch:**

Mr. Market is emotionally unstable:
- Some days he's euphoric and offers high prices
- Some days he's depressed and offers low prices
- His mood has nothing to do with the business's actual value

**Your Options:**

1. Trade with him when his price is favorable
2. Ignore him completely
3. Never be forced to trade because of his mood

**The Key Insight:**

Mr. Market is there to serve you, not guide you. His prices don't tell you what your business is worth - they only tell you what he's willing to pay TODAY.

**Common Mistakes:**

- Selling when Mr. Market is depressed (selling low)
- Buying when Mr. Market is euphoric (buying high)
- Letting his mood affect your emotions
- Thinking his price reflects true value

**The Intelligent Response:**

When Mr. Market is depressed:
"Great, I can buy more at a discount."

When Mr. Market is euphoric:
"Maybe I should sell some, or just hold."

When Mr. Market is anywhere:
"His mood doesn't change what my business is worth."

**Buffett's Extension:**

"The stock market is designed to transfer money from the Active to the Patient."

The patient investor ignores Mr. Market's daily tantrums and focuses on long-term business value.`,
          keyTakeaway: 'The market is there to serve you, not guide you. Never let Mr. Market\'s emotional swings determine your investment decisions.',
          quiz: {
            question: 'According to the Mr. Market parable, what should an intelligent investor do when the market crashes?',
            options: [
              'Sell immediately to prevent further losses',
              'See it as a potential buying opportunity',
              'Stop checking their investments',
              'Move everything to cash',
            ],
            correct: 1,
            explanation: 'When Mr. Market is depressed, he offers low prices. For a value investor, this can be a buying opportunity, not a reason to sell.',
          },
        },
      },
      {
        id: 'wb-10',
        title: 'Intrinsic Value',
        type: 'concept',
        duration: 5,
        xpReward: 50,
        content: {
          overview: 'The true worth of a business, independent of its market price.',
          mainContent: `**What Is Intrinsic Value?**

Intrinsic value is what a business is actually worth based on its fundamentals - independent of what the stock market says.

**Graham's Definition:**

"The value which is justified by the facts - assets, earnings, dividends, and definite prospects."

**The Concept:**

A business generates cash flows. Those future cash flows have a present value. That present value is the intrinsic value.

**Graham's Simple Formula:**

Intrinsic Value = EPS x (8.5 + 2g)

Where:
- EPS = Earnings per share
- 8.5 = P/E ratio for a no-growth company
- g = Expected annual growth rate (as whole number)

**Example:**

Company XYZ:
- EPS: $5
- Expected growth: 7% annually

Intrinsic Value = $5 x (8.5 + 2x7) = $5 x 22.5 = $112.50

If the stock trades at $80, it might be undervalued.
If the stock trades at $150, it might be overvalued.

**Important Caveats:**

Graham emphasized this is a rough estimate, not precision:

- Growth estimates are uncertain
- Economic conditions change
- Company circumstances evolve
- Formula assumes normal conditions

**The Practical Approach:**

You don't need exact precision. You need to know if something is clearly cheap, clearly expensive, or fairly priced.

As Buffett says: "I'd rather be approximately right than precisely wrong."

**The Process:**

1. Estimate future earnings
2. Apply reasonable growth assumptions
3. Calculate rough intrinsic value
4. Compare to current market price
5. Require significant discount to buy`,
          keyTakeaway: 'Intrinsic value is what a business is actually worth. Calculate it approximately, then buy only when market price is significantly below.',
          quiz: {
            question: 'What does intrinsic value represent?',
            options: [
              'The current stock price',
              'What the business is actually worth based on fundamentals',
              'The highest price a stock has ever reached',
              'The company\'s total revenue',
            ],
            correct: 1,
            explanation: 'Intrinsic value is the true worth of a business based on its fundamentals, independent of what the market says.',
          },
        },
      },
      {
        id: 'wb-11',
        title: 'Margin of Safety',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'The most important concept in investing - never pay full price.',
          mainContent: `**The Cornerstone of Intelligent Investing**

Graham called Margin of Safety the central concept of investment. It's the buffer between price paid and value received.

**The Definition:**

Margin of Safety = Intrinsic Value - Purchase Price

If a stock is worth $100 and you pay $70, your margin of safety is $30 (30%).

**Why It Matters:**

1. **Estimates are imperfect** - You might be wrong about value
2. **The future is uncertain** - Conditions change
3. **Bad things happen** - Companies face unexpected challenges
4. **Limits downside** - Even if wrong, loss is minimized

**The Engineering Analogy:**

Graham loved this comparison:

A bridge designed to carry 10,000 pounds is built to handle 30,000 pounds. Why? Because engineers know:
- Materials have defects
- Conditions vary
- Accidents happen
- Safety requires buffer

The same logic applies to investing.

**Practical Application:**

Don't buy unless you have at least 25-50% margin of safety.

- Stock worth $100? Don't pay more than $50-75.
- If you can't find this margin, wait or look elsewhere.

**Graham's Wisdom:**

"Confronted with the challenge to distill the secret of sound investment into three words, we venture the motto: MARGIN OF SAFETY."

**The Contrarian Element:**

Significant margins of safety usually exist when others are pessimistic. You must be willing to buy what others are selling - after careful analysis confirms value.

**The Result:**

With sufficient margin of safety:
- If you're right, you profit substantially
- If you're wrong, you're protected from severe loss

This is how value investors survive and thrive long-term.`,
          keyTakeaway: 'Never invest without a margin of safety. The gap between price paid and intrinsic value is your protection against error and uncertainty.',
          quiz: {
            question: 'If a stock has an intrinsic value of $100 and you buy it for $65, what is your margin of safety?',
            options: [
              '65%',
              '35%',
              '100%',
              '165%',
            ],
            correct: 1,
            explanation: 'Margin of Safety = (100 - 65) / 100 = 35%. This 35% buffer protects you against errors in your valuation or unexpected problems.',
          },
        },
      },
      {
        id: 'wb-12',
        title: 'Dollar Cost Averaging',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'The simple strategy that removes emotion and timing from investing.',
          mainContent: `**What Is Dollar Cost Averaging?**

Dollar Cost Averaging (DCA) means investing a fixed amount at regular intervals, regardless of market conditions.

**Example:**

You invest $500 every month:
- Month 1: Price $50, you buy 10 shares
- Month 2: Price $40, you buy 12.5 shares
- Month 3: Price $60, you buy 8.3 shares
- Month 4: Price $45, you buy 11.1 shares

Total invested: $2,000
Total shares: 41.9
Average cost per share: $47.73

**Why It Works:**

1. **Removes timing pressure** - No need to predict markets
2. **Automatic discipline** - Emotion removed from equation
3. **Buys more when cheap** - Natural "buy low" mechanism
4. **Reduces volatility impact** - Smooths out market swings
5. **Builds habit** - Consistent wealth-building behavior

**Graham's Endorsement:**

Benjamin Graham recommended dollar cost averaging for defensive investors - those without time or expertise for individual stock analysis.

"Such a policy will pay off ultimately, regardless of when it is begun, provided that it is adhered to conscientiously and courageously under all conditions."

**David Bach's Implementation:**

In "Start Late, Finish Rich," Bach emphasizes automating DCA:

1. Set up automatic transfer on payday
2. Money goes directly to investment account
3. Investment happens automatically
4. You never see or miss the money

**The Psychological Advantage:**

Market drops become opportunities, not threats. When prices fall, your regular investment buys more shares. This reframes volatility as beneficial.

**Best For:**

- Beginning investors
- Those without time for analysis
- Anyone who struggles with market timing
- Long-term retirement investors`,
          keyTakeaway: 'Invest the same amount regularly regardless of market conditions. This removes emotion and automatically buys more when prices are low.',
          quiz: {
            question: 'What happens to your share purchases when market prices drop during dollar cost averaging?',
            options: [
              'You buy fewer shares',
              'You buy more shares',
              'You buy the same number of shares',
              'Your purchases stop automatically',
            ],
            correct: 1,
            explanation: 'With a fixed dollar amount, lower prices mean you automatically buy more shares. This is the built-in advantage of dollar cost averaging.',
          },
        },
      },
      {
        id: 'wb-13',
        title: 'Index Funds vs Active Investing',
        type: 'concept',
        duration: 5,
        xpReward: 50,
        content: {
          overview: 'The debate that defines modern investing strategy.',
          mainContent: `**The Great Investing Debate**

Should you try to beat the market (active) or simply match it (passive/index)?

**Active Investing:**

Trying to outperform the market by:
- Picking individual stocks
- Timing market entries/exits
- Using managed mutual funds
- Following analyst recommendations

**Passive/Index Investing:**

Matching market returns by:
- Buying index funds (S&P 500, total market)
- Holding long-term
- Minimizing fees
- Ignoring short-term movements

**The Data:**

Over 15-year periods, approximately 90% of active managers fail to beat their benchmark index after fees.

**Why Active Fails:**

1. **Fees** - Active funds charge 1-2%, indexes charge 0.03-0.2%
2. **Trading costs** - Buying/selling incurs expenses
3. **Tax inefficiency** - Frequent trading creates tax events
4. **Behavioral errors** - Emotion leads to poor timing

**Graham's Evolution:**

Graham initially favored careful stock selection. But late in life, he acknowledged:

"I am no longer an advocate of elaborate techniques of security analysis... I favor the index fund approach."

**Warren Buffett's Advice:**

For non-professional investors, Buffett consistently recommends:

"A low-cost S&P 500 index fund."

His will directs 90% of his wife's inheritance into index funds.

**The Practical Answer:**

For most people:
- Core portfolio in low-cost index funds
- Automatic monthly contributions
- Hold for decades
- Ignore market noise

If you want to try active investing:
- Use only 5-10% of portfolio
- Consider it "educated speculation"
- Never bet money you can't afford to lose`,
          keyTakeaway: 'Most investors should use low-cost index funds. The data overwhelmingly shows that simple, passive investing beats active management over time.',
          quiz: {
            question: 'What percentage of active fund managers beat their benchmark index over 15-year periods?',
            options: [
              'About 50%',
              'About 30%',
              'About 10%',
              'About 1%',
            ],
            correct: 2,
            explanation: 'Approximately 90% of active managers fail to beat their benchmark after fees over 15-year periods. This is why index funds are recommended for most investors.',
          },
        },
      },
      {
        id: 'wb-14',
        title: 'Asset Allocation Basics',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'How you divide your money matters more than what you buy.',
          mainContent: `**The Most Important Decision**

Studies show that asset allocation - how you divide money between stocks, bonds, and cash - determines approximately 90% of portfolio performance.

**The Main Asset Classes:**

**Stocks (Equities):**
- Highest long-term returns (~10% historically)
- Highest volatility
- Best for growth and inflation protection
- Can lose 50%+ in crashes

**Bonds (Fixed Income):**
- Lower returns (~5% historically)
- Lower volatility
- Provides income and stability
- Cushions stock declines

**Cash/Cash Equivalents:**
- Lowest returns (~3% currently)
- Lowest volatility
- Maximum liquidity
- Loses purchasing power to inflation

**The Age-Based Rule:**

Traditional guideline: Subtract your age from 110 to get stock percentage.

- Age 30: 110 - 30 = 80% stocks, 20% bonds
- Age 50: 110 - 50 = 60% stocks, 40% bonds
- Age 70: 110 - 70 = 40% stocks, 60% bonds

**Graham's Recommendation:**

Benjamin Graham suggested never less than 25% or more than 75% in stocks:

- Minimum 25% stocks (maintain growth potential)
- Maximum 75% stocks (maintain safety)
- Adjust based on market conditions

**The Psychology:**

Your allocation must match your risk tolerance:

- Can you sleep if portfolio drops 40%?
- Will you panic-sell in a crash?
- How soon do you need the money?

The best allocation is one you can stick with through all conditions.

**Rebalancing:**

Periodically (annually) return to target allocation:
- If stocks grew to 70% and target is 60%
- Sell 10% of stocks, buy bonds
- This forces "sell high, buy low"`,
          keyTakeaway: 'Asset allocation determines most of your returns. Choose a stock/bond mix based on your age, goals, and risk tolerance, then rebalance annually.',
          quiz: {
            question: 'According to the age-based rule, what percentage should a 40-year-old hold in stocks?',
            options: [
              '40%',
              '60%',
              '70%',
              '80%',
            ],
            correct: 2,
            explanation: '110 - 40 = 70% in stocks. This traditional guideline adjusts risk as you age, though individual circumstances may warrant different allocations.',
          },
        },
      },
      {
        id: 'wb-15',
        title: 'The Automatic Millionaire System',
        type: 'concept',
        duration: 5,
        xpReward: 50,
        content: {
          overview: 'David Bach\'s complete system for building wealth without willpower.',
          mainContent: `**The Automatic Millionaire**

David Bach's system eliminates willpower from wealth building. The key: make everything automatic.

**The Core Principle:**

"If your financial plan is not automatic, you won't follow it."

**The 5-Step System:**

**Step 1: Pay Yourself First - Automatically**
- Minimum 10% of gross income
- Directly from paycheck to retirement account
- You never see it, never miss it
- Increase by 1% each year

**Step 2: Automate Emergency Savings**
- 5% of income to high-yield savings
- Build to 3-6 months expenses
- Then redirect to investments

**Step 3: Automate Bill Payments**
- Set up auto-pay for all recurring bills
- No late fees ever
- No decision fatigue

**Step 4: Automate Debt Payoff**
- Extra payments scheduled automatically
- Debt snowball or avalanche method
- Consistent progress without thinking

**Step 5: Automate Lifestyle Buckets**
- Dream savings (vacation, goals)
- Giving bucket (charity)
- Fun money (guilt-free spending)

**The Math:**

$500/month automated at 8% return:
- After 10 years: $91,473
- After 20 years: $294,510
- After 30 years: $745,180
- After 40 years: $1,745,504

**The Millionaire Zone:**

Save this percentage to reach millionaire status:
- 10% = Millionaire in 35 years
- 15% = Millionaire in 28 years
- 20% = Millionaire in 23 years

**Why Automation Wins:**

1. Removes daily decisions
2. Eliminates willpower depletion
3. Prevents lifestyle inflation
4. Creates consistency
5. Compounds without interruption

**The One-Hour Setup:**

Bach emphasizes: spend one hour setting up automation, then your wealth builds automatically for life.`,
          keyTakeaway: 'Make every financial behavior automatic. Spend one hour setting up systems that build wealth without ongoing decisions or willpower.',
          quiz: {
            question: 'According to the Automatic Millionaire system, why does automation work better than willpower?',
            options: [
              'It earns higher returns',
              'It removes daily decisions and prevents lifestyle inflation',
              'It provides better tax benefits',
              'It allows for more aggressive investments',
            ],
            correct: 1,
            explanation: 'Automation eliminates the need for daily decisions, prevents lifestyle inflation from absorbing raises, and ensures consistent investing without willpower depletion.',
          },
        },
      },
    ],
  },
  {
    id: 'wealth-level3',
    title: 'Level 3: Lead Generation Mastery',
    description: 'Alex Hormozi\'s $100M framework for getting customers',
    icon: '🎯',
    color: 'green',
    unlockRequirement: 12,
    lessons: [
      {
        id: 'wb-16',
        title: 'Lead Generation Fundamentals',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Alex Hormozi\'s framework for getting strangers to want your stuff.',
          mainContent: `**What Is a Lead?**

A lead is anyone who has shown interest in what you offer. They've raised their hand and said, "Tell me more."

**The Lead Generation Equation:**

From "$100M Leads":

Leads = (Reach x Engagement) x (Offer Value / Friction)

**Breaking It Down:**

**Reach:** How many people see your message
**Engagement:** What percentage interact
**Offer Value:** How desirable your offer is
**Friction:** How easy/hard to respond

**The 4 Core Lead Sources:**

Alex Hormozi identifies exactly 4 ways to get leads:

1. **Warm Outreach** - People who know you
2. **Content** - Attract through value
3. **Cold Outreach** - People who don't know you
4. **Paid Ads** - Buying attention

Each has different costs, scale, and conversion rates.

**The Order of Operations:**

For beginners, Hormozi recommends:
1. Start with warm outreach (free, fastest)
2. Add content (free, builds over time)
3. Add cold outreach (free, labor intensive)
4. Add paid ads (costs money, fastest scale)

**The "Get Your First Customers" Path:**

- List 100 people who know you
- Tell them what you do
- Ask for referrals
- This is warm outreach - start here

**The Fundamental Truth:**

More leads = more opportunities = more revenue

Lead generation is the lifeblood of any business. Master this, and you control your income.`,
          keyTakeaway: 'There are exactly 4 ways to get leads: warm outreach, content, cold outreach, and paid ads. Master all four, starting with warm outreach.',
          quiz: {
            question: 'According to Hormozi, what is the recommended first step for getting leads?',
            options: [
              'Running paid ads',
              'Building a website',
              'Warm outreach to people who know you',
              'Hiring a marketing agency',
            ],
            correct: 2,
            explanation: 'Warm outreach is free and has the highest conversion rate because these people already know and trust you. Start here before anything else.',
          },
        },
      },
      {
        id: 'wb-17',
        title: 'Warm vs Cold Leads',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Understanding lead temperature changes your entire approach.',
          mainContent: `**Lead Temperature Spectrum**

Not all leads are created equal. Their "temperature" indicates how ready they are to buy.

**Warm Leads:**

People who:
- Know you personally
- Have been referred to you
- Have engaged with your content
- Are existing customers

**Characteristics:**
- Higher trust
- Faster decisions
- Less convincing needed
- Higher conversion rates

**Cold Leads:**

People who:
- Don't know you
- Haven't heard of your business
- Need education about your offer
- May be skeptical

**Characteristics:**
- Lower trust (initially)
- Longer sales cycle
- More education required
- Lower conversion rates

**The Numbers:**

Typical conversion rates:
- Warm leads: 10-30%
- Cold leads: 1-5%

This means you need 5-10x more cold leads for the same result.

**Hormozi's Warm Outreach Strategy:**

1. Make a list of everyone you know (aim for 100+)
2. Reach out personally (not mass message)
3. Have a genuine conversation
4. Mention what you do naturally
5. Ask for referrals: "Know anyone who might benefit from X?"

**The Referral Multiplication:**

Every warm conversation can generate:
- A direct customer
- 2-3 referrals
- Social proof
- Testimonials

**Warming Up Cold Leads:**

Cold leads become warm through:
- Consistent content
- Email nurturing
- Providing value first
- Building familiarity

**The Key Insight:**

Warm outreach is underutilized because it feels uncomfortable. But it's free, fast, and effective. Don't skip it for the "easier" feeling of paid ads.`,
          keyTakeaway: 'Warm leads convert 5-10x better than cold leads. Never neglect warm outreach - it\'s your highest ROI lead source.',
          quiz: {
            question: 'What is a typical conversion rate difference between warm and cold leads?',
            options: [
              'Warm converts 2x better',
              'Warm converts 5-10x better',
              'They convert about the same',
              'Cold converts better because of scale',
            ],
            correct: 1,
            explanation: 'Warm leads typically convert at 10-30% while cold leads convert at 1-5%. This 5-10x difference makes warm outreach extremely valuable.',
          },
        },
      },
      {
        id: 'wb-18',
        title: 'Content Marketing for Leads',
        type: 'concept',
        duration: 5,
        xpReward: 50,
        content: {
          overview: 'How to attract leads by giving value before asking for anything.',
          mainContent: `**The Content Lead Machine**

Content marketing attracts leads by providing value upfront. You demonstrate expertise and build trust before any sales conversation.

**Hormozi's Content Framework:**

**Give Away the Secrets, Sell the Implementation**

Share your best stuff freely:
- How-to guides
- Frameworks
- Case studies
- Step-by-step processes

Why? Because knowing and doing are different. Those who can do it themselves weren't your customers anyway. Those who want help will pay.

**The Content Types:**

**Educational:** Teach something valuable
- "How to X in 5 steps"
- "The mistake most people make with Y"
- "Why Z doesn't work (and what does)"

**Entertaining:** Keep attention
- Stories
- Analogies
- Personality

**Engaging:** Start conversations
- Questions
- Controversies
- Challenges

**The Platforms:**

Short-form: TikTok, Instagram Reels, YouTube Shorts
Long-form: YouTube, Podcasts, Blogs
Text: Twitter/X, LinkedIn, Email

**The Content Flywheel:**

1. Create valuable content
2. Attract audience
3. Some become leads
4. Customers create testimonials
5. Testimonials become content
6. Repeat

**The Volume Game:**

Hormozi emphasizes quantity, especially at first:
- You don't know what will resonate
- More attempts = more data
- Consistency beats perfection
- 100 posts teaches more than 10 perfect ones

**The Call to Action:**

Every piece of content should have a next step:
- "Link in bio"
- "Comment X for free guide"
- "Subscribe for more"
- "DM me 'START'"

Content without CTA is entertainment, not marketing.`,
          keyTakeaway: 'Give away your best knowledge freely through content. Those who can implement it themselves were never your customers. Those who want help will pay.',
          quiz: {
            question: 'Why does Hormozi recommend giving away your secrets in content?',
            options: [
              'It confuses competitors',
              'Knowing and doing are different - those who want help will pay for implementation',
              'It\'s required by advertising laws',
              'Free content ranks better in search',
            ],
            correct: 1,
            explanation: 'Knowledge is freely available, but implementation requires help. By sharing secrets, you demonstrate expertise and attract people who want assistance applying it.',
          },
        },
      },
      {
        id: 'wb-19',
        title: 'Paid Advertising Basics',
        type: 'concept',
        duration: 5,
        xpReward: 50,
        content: {
          overview: 'Trade money for speed when your offer converts.',
          mainContent: `**When to Use Paid Ads**

Paid advertising is powerful but dangerous. Hormozi's rule: Don't run paid ads until you can profitably acquire customers through free methods.

**Why Wait?**

- Free methods validate your offer
- You learn what messaging works
- You understand your customer
- You can afford mistakes
- Paid ads amplify - they amplify bad offers too

**The Paid Ads Equation:**

Profit = (Revenue per Customer) - (Cost per Customer) - (Fulfillment Cost)

If this is negative, paid ads accelerate losses, not gains.

**The Main Platforms:**

**Meta (Facebook/Instagram):**
- Best for B2C
- Visual/video focused
- Interest-based targeting
- Largest scale

**Google:**
- Intent-based (people searching)
- Higher intent = higher cost
- Great for services people search for
- Search and Display networks

**YouTube:**
- Video ads before/during content
- Great for complex offers
- Builds trust through face time
- Lower cost than Facebook for some niches

**LinkedIn:**
- B2B focused
- Higher cost per lead
- Higher value leads
- Professional targeting

**The Testing Process:**

1. Start small ($20-50/day)
2. Test multiple audiences
3. Test multiple creatives
4. Find winners
5. Scale winners slowly
6. Kill losers fast

**Key Metrics:**

- CPC (Cost Per Click): $0.50-$5 typical
- CPM (Cost Per 1000 Impressions): $5-$30 typical
- CPL (Cost Per Lead): Varies widely
- CAC (Customer Acquisition Cost): Must be less than customer value

**The Warning:**

Paid ads can consume money quickly. Set strict budgets. Only scale what's proven profitable.`,
          keyTakeaway: 'Don\'t run paid ads until free methods prove your offer works. Paid ads amplify both success and failure - make sure you\'re amplifying success.',
          quiz: {
            question: 'When should you start running paid ads according to Hormozi?',
            options: [
              'Immediately when starting a business',
              'After building a website',
              'After profitably acquiring customers through free methods',
              'Only during product launches',
            ],
            correct: 2,
            explanation: 'Free methods validate your offer and messaging first. Paid ads amplify whatever you have - if your offer doesn\'t convert, you\'ll just lose money faster.',
          },
        },
      },
      {
        id: 'wb-20',
        title: 'The Lead Magnet',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'The ethical bribe that turns strangers into leads.',
          mainContent: `**What Is a Lead Magnet?**

A lead magnet is something valuable you give away for free in exchange for contact information. It's the first step in the value ladder.

**The Exchange:**

You give: Valuable free resource
They give: Email address (or phone number)

**Hormozi's Lead Magnet Criteria:**

The best lead magnets:

1. **Solve a specific problem** - Not vague "tips"
2. **Deliver quick wins** - Immediate value
3. **Create desire for more** - Natural next step
4. **Qualify the lead** - Attracts right people
5. **Easy to consume** - 5-15 minutes max

**Lead Magnet Types:**

**Documents:**
- Checklists
- Templates
- Cheat sheets
- Guides/ebooks

**Video:**
- Free training
- Mini-course
- Webinar replay

**Tools:**
- Calculators
- Assessments
- Quizzes

**Samples:**
- Free trial
- Chapter 1
- Demo access

**The "Complete but Incomplete" Formula:**

Your lead magnet should:
- Fully solve one small problem (complete)
- Reveal a bigger problem (incomplete)

Example: "Free checklist to prep for job interview" (solves prep)
Reveals: "Now you need to ace the interview" (creates desire for course)

**The Naming Formula:**

How to [Desired Result] in [Timeframe] without [Main Objection]

"How to Get 10 New Clients in 30 Days Without Cold Calling"

**Distribution:**

- Landing page with email opt-in
- Social media bio links
- Content call-to-actions
- Paid ad destinations`,
          keyTakeaway: 'A great lead magnet solves one specific problem quickly while creating desire for your paid solution. It qualifies leads and starts the relationship.',
          quiz: {
            question: 'What makes an effective lead magnet according to Hormozi?',
            options: [
              'It should be as long and comprehensive as possible',
              'It should solve a specific problem quickly and create desire for more',
              'It should require payment, even if small',
              'It should be difficult to understand to seem valuable',
            ],
            correct: 1,
            explanation: 'Effective lead magnets solve one specific problem quickly, deliver immediate value, and naturally create desire for your paid offer.',
          },
        },
      },
      {
        id: 'wb-21',
        title: 'Building an Audience',
        type: 'concept',
        duration: 5,
        xpReward: 50,
        content: {
          overview: 'An audience is a moat - people who will hear anything you say.',
          mainContent: `**The Power of Audience**

An audience is a group of people who have given you permission to communicate with them. It's one of the most valuable assets you can build.

**Why Audience Matters:**

**With audience:**
- Launch products to instant customers
- Get feedback on ideas
- Weather business downturns
- Multiple monetization options
- Partnerships seek you out

**Without audience:**
- Every sale starts from scratch
- No feedback loop
- Vulnerable to algorithm changes
- Limited leverage
- You seek partnerships

**Hormozi's Audience Building Framework:**

**1. Pick One Platform**
- Go deep before going wide
- Master one before adding another
- Each platform has different rules

**2. Post Consistently**
- Daily if possible
- Minimum 3x per week
- Consistency beats perfection
- Algorithms reward regular posting

**3. Provide Massive Value**
- What would your ideal customer want to learn?
- What problems do they have?
- What mistakes do they make?
- Answer these publicly

**4. Engage Relentlessly**
- Reply to every comment (at first)
- DM people who engage
- Build relationships, not just followers
- Community > numbers

**The Audience Growth Timeline:**

- Month 1-3: Feels like shouting into void
- Month 3-6: Small engaged community forms
- Month 6-12: Momentum builds
- Year 1+: Compounds significantly

**The Key Metrics:**

Don't obsess over followers. Watch:
- Engagement rate
- DMs received
- Shares/saves
- Lead magnet downloads
- Actual sales

**The Long Game:**

Audience building is slow but permanent. Every piece of content is an asset working for you forever.`,
          keyTakeaway: 'Build an audience by providing massive value consistently on one platform. An audience is a business asset that compounds over time.',
          quiz: {
            question: 'According to Hormozi, what should you focus on when building an audience?',
            options: [
              'Growing follower count as fast as possible',
              'Being on every platform simultaneously',
              'Mastering one platform with consistent valuable content',
              'Buying followers for social proof',
            ],
            correct: 2,
            explanation: 'Focus on one platform, post consistently, and provide massive value. Deep mastery beats wide presence when building a genuine audience.',
          },
        },
      },
      {
        id: 'wb-22',
        title: 'The Value Ladder',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'How to take customers from free to premium through increasing value.',
          mainContent: `**The Value Ladder Concept**

A value ladder is a series of offers at increasing price points, each delivering more value than the last.

**The Structure:**

**Rung 1: Free (Lead Magnet)**
- Price: $0
- Purpose: Acquire leads
- Example: Free guide, checklist

**Rung 2: Low-Ticket ($1-100)**
- Price: Low
- Purpose: Convert leads to buyers
- Example: Book, mini-course

**Rung 3: Core Offer ($100-2000)**
- Price: Medium
- Purpose: Main revenue driver
- Example: Course, coaching program

**Rung 4: Premium ($2000-25000)**
- Price: High
- Purpose: Maximum value/revenue
- Example: Mastermind, done-for-you service

**Rung 5: Exclusive ($25000+)**
- Price: Very high
- Purpose: Ultimate transformation
- Example: Private consulting, partnership

**Why It Works:**

1. **Lowers initial risk** - Easy to try free/cheap offers
2. **Builds trust progressively** - Proven value before big ask
3. **Identifies best customers** - Some want premium
4. **Maximizes lifetime value** - Multiple purchase opportunities
5. **Natural progression** - Customers want more

**The Math:**

Without value ladder: 1000 leads x $100 offer = $100,000

With value ladder:
- 1000 leads
- 500 buy $10 product = $5,000
- 100 buy $500 course = $50,000
- 20 buy $3000 coaching = $60,000
- 5 buy $10000 mastermind = $50,000
- Total = $165,000

**Building Your Ladder:**

1. Start with core offer (what you sell)
2. Add lead magnet above (to attract)
3. Add premium below (for best customers)
4. Fill gaps over time`,
          keyTakeaway: 'A value ladder takes customers from free to premium through increasing value at each level. It maximizes customer lifetime value and revenue.',
          quiz: {
            question: 'What is the primary purpose of a value ladder?',
            options: [
              'To confuse competitors about pricing',
              'To progressively increase value and price, maximizing customer lifetime value',
              'To discount products for loyal customers',
              'To eliminate the need for marketing',
            ],
            correct: 1,
            explanation: 'A value ladder progressively offers more value at higher prices, building trust with each purchase and maximizing what each customer is worth over time.',
          },
        },
      },
      {
        id: 'wb-23',
        title: 'Creating Offers That Convert',
        type: 'concept',
        duration: 5,
        xpReward: 50,
        content: {
          overview: 'Hormozi\'s Grand Slam Offer framework for irresistible offers.',
          mainContent: `**The Grand Slam Offer**

From "$100M Offers," Hormozi defines a Grand Slam Offer as one so good, people feel stupid saying no.

**The Value Equation:**

Value = (Dream Outcome x Perceived Likelihood of Achievement) / (Time Delay x Effort & Sacrifice)

**To Increase Value:**

**Increase Dream Outcome:**
- What do they REALLY want?
- Be specific and vivid
- Connect to deeper desires

**Increase Perceived Likelihood:**
- Guarantees
- Testimonials
- Case studies
- Credentials

**Decrease Time Delay:**
- How fast do they get results?
- Quick wins along the way
- Accelerated timelines

**Decrease Effort & Sacrifice:**
- Done-for-you elements
- Templates and shortcuts
- Reduced complexity
- Fewer steps

**Naming Your Offer:**

[Result] + [Time] + [Guarantee] + [Unique Mechanism]

Example: "Lose 20 Pounds in 8 Weeks, Guaranteed, Using Our Metabolic Reset Protocol"

**The Stack:**

List everything included:
- Core offering
- Bonuses
- Tools
- Support
- Guarantees

Anchor high, reveal "deal":
"Total value: $15,000. Your price: $2,000"

**Guarantees That Work:**

- Unconditional: "100% money back, no questions"
- Conditional: "Get X result or money back"
- Performance: "We'll work until you get X"

**The Scarcity/Urgency:**

Real scarcity converts:
- Limited spots
- Limited time
- Limited bonuses
- Price increases

Never fake scarcity - it destroys trust.`,
          keyTakeaway: 'Craft offers that maximize dream outcome and likelihood while minimizing time and effort. Make it so good people feel stupid saying no.',
          quiz: {
            question: 'In Hormozi\'s Value Equation, which of these INCREASES perceived value?',
            options: [
              'Longer time to results',
              'More effort required',
              'Stronger guarantees and testimonials',
              'Higher price',
            ],
            correct: 2,
            explanation: 'Guarantees and testimonials increase perceived likelihood of achievement, which increases value. Longer time and more effort decrease value.',
          },
        },
      },
    ],
  },
  {
    id: 'wealth-level4',
    title: 'Level 4: Business & Income Fundamentals',
    description: 'Build and scale income through business principles',
    icon: '🏗️',
    color: 'purple',
    unlockRequirement: 20,
    lessons: [
      {
        id: 'wb-24',
        title: 'Business Model Basics',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'How businesses actually make money - the fundamental models.',
          mainContent: `**What Is a Business Model?**

A business model describes how a company creates, delivers, and captures value. It's the engine that turns effort into income.

**The Core Question:**

How do you make money?

**Common Business Models:**

**1. Product Sales**
- Create once, sell many times
- Physical or digital products
- Revenue = Units x Price
- Example: Apple, Nike, course creators

**2. Service/Consulting**
- Trade time/expertise for money
- High margins, limited scale
- Revenue = Hours x Rate
- Example: Lawyers, consultants, coaches

**3. Subscription/Membership**
- Recurring revenue
- Predictable income
- Revenue = Subscribers x Monthly Fee
- Example: Netflix, gyms, SaaS

**4. Marketplace/Platform**
- Connect buyers and sellers
- Take percentage of transactions
- Revenue = Transaction Volume x Fee %
- Example: Airbnb, Uber, Amazon

**5. Advertising**
- Free product, monetize attention
- Scale = everything
- Revenue = Impressions x Ad Rate
- Example: Google, Facebook, media

**The Best Business Characteristics:**

Hormozi looks for:
- High margins (>50%)
- Recurring revenue
- Low fulfillment complexity
- High perceived value

**Your Business Model:**

To design yours, answer:
1. Who is your customer?
2. What problem do you solve?
3. How do you deliver value?
4. How do you get paid?
5. How much does it cost to deliver?
6. What's left over (profit)?

**The Simple Math:**

Revenue - Costs = Profit

Everything else is details.`,
          keyTakeaway: 'Your business model is how you create and capture value. The best models have high margins, recurring revenue, and low fulfillment complexity.',
          quiz: {
            question: 'Which business model characteristic does Hormozi prioritize?',
            options: [
              'Maximum complexity',
              'One-time purchases only',
              'High margins and recurring revenue',
              'Lowest possible prices',
            ],
            correct: 2,
            explanation: 'Hormozi looks for high margins (>50%), recurring revenue, and low fulfillment complexity. These characteristics create sustainable, profitable businesses.',
          },
        },
      },
      {
        id: 'wb-25',
        title: 'Unit Economics',
        type: 'concept',
        duration: 5,
        xpReward: 50,
        content: {
          overview: 'The math that determines if your business can scale profitably.',
          mainContent: `**What Are Unit Economics?**

Unit economics measure the revenue and costs associated with a single "unit" of your business - typically one customer or one transaction.

**The Key Metrics:**

**CAC - Customer Acquisition Cost**
How much does it cost to get one customer?

CAC = Total Marketing Spend / New Customers Acquired

Example: $10,000 spend / 100 customers = $100 CAC

**LTV - Lifetime Value**
How much does one customer spend over their lifetime?

LTV = Average Purchase x Purchase Frequency x Customer Lifespan

Example: $50 x 4 times/year x 3 years = $600 LTV

**The Golden Ratio:**

LTV:CAC should be at least 3:1

- $600 LTV : $100 CAC = 6:1 (excellent)
- $600 LTV : $200 CAC = 3:1 (healthy)
- $600 LTV : $400 CAC = 1.5:1 (danger)
- $600 LTV : $600 CAC = 1:1 (unsustainable)

**Why This Matters:**

With good unit economics:
- You can confidently spend on marketing
- Growth is profitable
- Business compounds

With bad unit economics:
- More customers = more losses
- Growth kills the business
- No path to profit

**Improving Unit Economics:**

**Lower CAC:**
- Better targeting
- Higher conversion rates
- Organic marketing
- Referral programs

**Increase LTV:**
- Raise prices
- Increase purchase frequency
- Extend customer lifespan
- Upsell/cross-sell

**The Payback Period:**

How long until a customer's revenue covers their acquisition cost?

Payback Period = CAC / (Monthly Revenue per Customer x Margin)

Shorter is better. Under 12 months is good.`,
          keyTakeaway: 'LTV must exceed CAC by at least 3x for a sustainable business. Know your unit economics before scaling - otherwise you scale losses.',
          quiz: {
            question: 'What is a healthy LTV:CAC ratio?',
            options: [
              '1:1',
              '2:1',
              '3:1 or higher',
              '1:3',
            ],
            correct: 2,
            explanation: 'A 3:1 ratio means each customer is worth 3x what you spent to acquire them. This provides healthy margins for operations, profit, and reinvestment.',
          },
        },
      },
      {
        id: 'wb-26',
        title: 'Cash Flow Management',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'Revenue is vanity, profit is sanity, but cash flow is reality.',
          mainContent: `**Cash Flow vs. Profit**

Profit is what you earn on paper.
Cash flow is what moves through your bank account.

Many profitable businesses fail because they run out of cash.

**The Cash Flow Statement:**

**Cash In:**
- Sales revenue
- Investments received
- Loans taken
- Asset sales

**Cash Out:**
- Operating expenses
- Inventory purchases
- Debt payments
- Taxes
- Owner distributions

**Net Cash Flow = Cash In - Cash Out**

**The Timing Problem:**

Imagine:
- January: Spend $50K on inventory
- February: Make sales (60-day payment terms)
- April: Finally get paid

You're "profitable" but broke for 3 months.

**Cash Flow Strategies:**

**Speed Up Cash In:**
- Require deposits
- Shorten payment terms
- Incentivize early payment
- Accept credit cards (instant)

**Slow Down Cash Out:**
- Negotiate longer payment terms
- Don't overbuy inventory
- Stagger large purchases
- Lease vs. buy equipment

**Build a Buffer:**

Business needs emergency fund too:
- Minimum: 2 months operating expenses
- Comfortable: 6 months operating expenses
- Secure: 12 months operating expenses

**The 13-Week Cash Flow:**

Create a simple spreadsheet:
- Row for each week
- Expected cash in
- Expected cash out
- Running balance

This shows problems before they become crises.

**The Rule:**

Never make a major expense without checking cash flow impact for the next 90 days.`,
          keyTakeaway: 'Cash flow is reality - profitable businesses fail without it. Always know when cash comes in and goes out, and maintain reserves.',
          quiz: {
            question: 'What is the key difference between profit and cash flow?',
            options: [
              'They are the same thing',
              'Profit is theoretical, cash flow is actual money movement',
              'Cash flow is always higher than profit',
              'Profit includes cash flow',
            ],
            correct: 1,
            explanation: 'Profit is earned on paper (revenue minus expenses), while cash flow is actual money moving in and out of your bank account. Timing differences can make profitable businesses cash-poor.',
          },
        },
      },
      {
        id: 'wb-27',
        title: 'Multiple Income Streams',
        type: 'concept',
        duration: 5,
        xpReward: 50,
        content: {
          overview: 'The wealthy don\'t depend on a single source of income.',
          mainContent: `**Why Multiple Streams?**

The average millionaire has 7 sources of income. This isn't coincidence - it's strategy.

**The Benefits:**

1. **Risk reduction** - One stream failing doesn't sink you
2. **Growth multiplication** - Different streams compound separately
3. **Opportunity capture** - Different skills monetized
4. **Tax optimization** - Different income types, different treatments

**The Income Types:**

**Active Income (Trade Time):**
- Salary/wages
- Consulting/freelancing
- Service business

**Portfolio Income (Invested Capital):**
- Dividends
- Interest
- Capital gains

**Passive Income (Systems Working):**
- Rental income
- Royalties
- Business profits (not operator)

**Building Multiple Streams:**

**Phase 1: Master One**
- Get excellent at one income source
- Build surplus capital
- Don't diversify too early

**Phase 2: Add Portfolio Income**
- Invest surplus in index funds
- Dividends create second stream
- Compound while you work

**Phase 3: Add Passive Income**
- Create digital products
- Build systems that work without you
- Consider real estate

**The Common Mistake:**

Trying to build 5 streams at once = building 5 weak streams

Better: One strong stream, then add deliberately

**David Bach's Approach:**

From "Start Late, Finish Rich":
1. Your job (primary income)
2. Investment accounts (portfolio income)
3. Real estate (rental income)
4. Side business (additional active/passive)

**The Time Allocation:**

- 80% of energy: Your primary income
- 20% of energy: Building next stream
- Shift ratios as streams mature`,
          keyTakeaway: 'The wealthy average 7 income streams. Build one strong stream first, then deliberately add others using surplus capital and time.',
          quiz: {
            question: 'What is the recommended approach to building multiple income streams?',
            options: [
              'Start 7 streams simultaneously',
              'Master one stream first, then add others deliberately',
              'Only focus on passive income',
              'Avoid employment entirely',
            ],
            correct: 1,
            explanation: 'Trying to build many streams at once creates many weak streams. Master one first, generate surplus, then deliberately add others.',
          },
        },
      },
      {
        id: 'wb-28',
        title: 'Tax Optimization Basics',
        type: 'concept',
        duration: 4,
        xpReward: 50,
        content: {
          overview: 'It\'s not what you make, it\'s what you keep after taxes.',
          mainContent: `**Legal Tax Minimization**

Tax optimization is using legal strategies to minimize your tax burden. It's not evasion (illegal) - it's planning.

**Why It Matters:**

If you earn $100,000 and pay:
- 30% tax = $30,000 lost
- 20% tax = $20,000 lost
- Difference: $10,000/year

Over 30 years at 8% return, that $10K/year = $1.2 MILLION

**Key Concepts:**

**Pre-Tax vs. Post-Tax:**
- Pre-tax: Reduces taxable income now
- Post-tax (Roth): No tax on growth/withdrawal

**Tax-Deferred:**
- Pay no tax now
- Pay tax on withdrawal
- Examples: Traditional IRA, 401(k)

**Tax-Free:**
- Pay tax now (or never)
- No tax on growth or withdrawal
- Examples: Roth IRA, Municipal bonds

**The Basic Strategies:**

**1. Max Retirement Accounts**
- 401(k): $23,000/year (2024)
- IRA: $7,000/year (2024)
- Reduces taxable income immediately

**2. Health Savings Account (HSA)**
- Triple tax advantage
- Deduction, tax-free growth, tax-free withdrawal
- $4,150 individual, $8,300 family (2024)

**3. Capital Gains Planning**
- Long-term (>1 year): 0-20% rate
- Short-term (<1 year): Ordinary income rate
- Hold investments 1+ year when possible

**4. Tax-Loss Harvesting**
- Sell losers to offset winners
- Up to $3,000 against ordinary income
- Reduces overall tax burden

**The Warning:**

Tax laws change. Work with a professional for significant amounts. These are starting points, not personalized advice.`,
          keyTakeaway: 'Tax optimization can save hundreds of thousands over a lifetime. Use retirement accounts, HSAs, and long-term capital gains treatment legally.',
          quiz: {
            question: 'What is the main advantage of a Roth IRA?',
            options: [
              'Immediate tax deduction',
              'Tax-free growth and withdrawal in retirement',
              'No contribution limits',
              'Required employer match',
            ],
            correct: 1,
            explanation: 'Roth IRAs are funded with after-tax dollars, but all growth and qualified withdrawals are completely tax-free. This is powerful for long-term compounding.',
          },
        },
      },
      {
        id: 'wb-29',
        title: 'Retirement Account Types',
        type: 'concept',
        duration: 5,
        xpReward: 50,
        content: {
          overview: 'The tax-advantaged vehicles that build wealth on autopilot.',
          mainContent: `**The Retirement Account Arsenal**

David Bach emphasizes that retirement accounts are the most powerful wealth-building tools available. The tax advantages compound dramatically over time.

**Employer-Sponsored Accounts:**

**401(k) / 403(b):**
- Contribution limit: $23,000 (2024)
- Pre-tax contributions
- Often employer match (FREE MONEY)
- Tax-deferred growth
- Taxed on withdrawal

**Rule: Always get full employer match first!**

If employer matches 50% up to 6%, contribute at least 6%.
Not doing this = refusing free money.

**Individual Retirement Accounts:**

**Traditional IRA:**
- Contribution limit: $7,000 (2024)
- Tax deduction now
- Tax-deferred growth
- Taxed on withdrawal

**Roth IRA:**
- Contribution limit: $7,000 (2024)
- No deduction now
- Tax-FREE growth
- Tax-FREE withdrawal
- Income limits apply

**Self-Employed Options:**

**SEP IRA:**
- Up to 25% of compensation
- Max $69,000 (2024)
- Easy to set up
- Only employer contributions

**Solo 401(k):**
- Employee + employer contributions
- Max $69,000 (2024)
- More complex but more flexible

**The Order of Operations:**

1. 401(k) up to employer match (free money)
2. Max Roth IRA (tax-free growth)
3. Max remaining 401(k)
4. HSA if eligible
5. Taxable brokerage accounts

**The Power of Starting:**

$500/month in tax-advantaged accounts from age 25 to 65 at 8%:
= $1.75 MILLION

Same amount in taxable account (25% tax drag):
= $1.1 MILLION

**Tax advantage = $650,000 extra!**`,
          keyTakeaway: 'Retirement accounts provide massive tax advantages. Follow the order: employer match, Roth IRA, remaining 401(k), HSA, then taxable accounts.',
          quiz: {
            question: 'What should be your first priority when saving for retirement?',
            options: [
              'Max out Roth IRA',
              'Contribute to 401(k) up to employer match',
              'Open a taxable brokerage account',
              'Pay off all debt first',
            ],
            correct: 1,
            explanation: 'Always capture the full employer match first - it\'s literally free money. A 50% match is an instant 50% return on your investment.',
          },
        },
      },
      {
        id: 'wb-30',
        title: 'Building Generational Wealth',
        type: 'concept',
        duration: 5,
        xpReward: 50,
        content: {
          overview: 'Wealth that transcends your lifetime and blesses future generations.',
          mainContent: `**Beyond Personal Wealth**

Generational wealth isn't just about leaving money - it's about creating lasting advantage for those who come after you.

**The Three Pillars:**

**1. Financial Capital**
- Investments and assets
- Real estate holdings
- Business ownership
- Life insurance

**2. Human Capital**
- Education and skills
- Financial literacy
- Work ethic and values
- Network and relationships

**3. Social Capital**
- Family reputation
- Community standing
- Opportunities and access
- Mentorship connections

**The Compound Effect Across Generations:**

$100,000 invested at 8%:
- After 30 years: $1,006,266
- After 60 years: $10,125,706
- After 90 years: $101,923,604

Wealth grows exponentially when not interrupted.

**Why Most Wealth Disappears:**

"Shirtsleeves to shirtsleeves in three generations"
- 70% of wealthy families lose wealth by 2nd generation
- 90% by 3rd generation

**The Causes:**
- No financial education passed down
- Entitlement vs. stewardship
- Poor investment choices
- Family conflict over assets
- Lack of shared purpose

**Building Lasting Wealth:**

**1. Education Over Inheritance**
Teach children/heirs about:
- Money management
- Investing principles
- Business fundamentals
- Family values around wealth

**2. Structures That Protect**
- Trusts
- Family limited partnerships
- Life insurance
- Estate planning

**3. Shared Family Mission**
- Why does our wealth exist?
- What are we building together?
- How do we give back?

**4. Gradual Responsibility**
- Small amounts managed young
- Increase with demonstrated capability
- "Ownership" before "inheritance"

**The Ultimate Goal:**

Create wealth that serves future generations without corrupting them. Teach them to be productive contributors who happen to have resources, not passive consumers of inheritance.`,
          keyTakeaway: 'Generational wealth requires financial capital, human capital (education), and social capital. Most wealth disappears in 3 generations without intentional transmission.',
          quiz: {
            question: 'Why does most family wealth disappear within three generations?',
            options: [
              'Taxes take everything',
              'Investment returns decline over time',
              'Lack of financial education and stewardship passed to heirs',
              'Inflation destroys all wealth',
            ],
            correct: 2,
            explanation: '90% of family wealth is lost by the third generation primarily due to lack of financial education, entitlement mindset, and failure to pass on values alongside assets.',
          },
        },
      },
    ],
  },
  {
    id: 'wealth-level5',
    title: 'Level 5: Advanced Value Investing',
    description: 'Deep dive into Graham\'s value investing principles',
    icon: '📊',
    color: 'indigo',
    unlockRequirement: 1500,
    lessons: valueInvestingLessons,
  },
  {
    id: 'wealth-level6',
    title: 'Level 6: Business Building',
    description: 'Master entrepreneurship and scaling businesses',
    icon: '🚀',
    color: 'pink',
    unlockRequirement: 2000,
    lessons: businessLessons,
  },
  {
    id: 'wealth-level7',
    title: 'Level 7: Real Estate Investing',
    description: 'Build wealth through property investment',
    icon: '🏠',
    color: 'orange',
    unlockRequirement: 2500,
    lessons: realEstateLessons,
  },
  {
    id: 'wealth-level8',
    title: 'Level 8: Tax Strategy',
    description: 'Legally minimize taxes and maximize wealth retention',
    icon: '📋',
    color: 'teal',
    unlockRequirement: 3000,
    lessons: taxStrategyLessons,
  },
  {
    id: 'wealth-level9',
    title: 'Level 9: Wealth Psychology',
    description: 'Master your money mindset and behavioral finance',
    icon: '🧠',
    color: 'rose',
    unlockRequirement: 3500,
    lessons: wealthPsychologyLessons,
  },
  {
    id: 'wealth-level10',
    title: 'Level 10: Financial Independence',
    description: 'Achieve FIRE and design your ideal life',
    icon: '🔥',
    color: 'amber',
    unlockRequirement: 4000,
    lessons: fireLessons,
  },
];

export default wealthBuildingPathway;
