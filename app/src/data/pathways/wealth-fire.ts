import type { PathwayLesson } from '@/types';

export const fireLessons: PathwayLesson[] = [
  {
    id: 'wb-fire-001',
    title: 'The FIRE Movement Explained',
    type: 'concept',
    duration: 12,
    xpReward: 110,
    content: {
      overview: 'Financial Independence, Retire Early (FIRE) is a movement focused on extreme savings and investment to achieve financial freedom decades earlier than traditional retirement.',
      mainContent: `**What Is the FIRE Movement?**

FIRE stands for **Financial Independence, Retire Early**. It's a lifestyle movement that emerged from the early 2000s, popularized by blogs like Mr. Money Mustache and the book "Your Money or Your Life" by Vicki Robin.

**The Core Philosophy**

FIRE isn't really about retiring early to do nothing. It's about **buying back your time**. When you reach financial independence, work becomes optional. You can:

- Continue working on things you love
- Take career risks without financial fear
- Spend more time with family
- Pursue passion projects
- Travel and explore
- Give back to your community

**The Basic Math**

The FIRE equation is surprisingly simple:

1. **Calculate your annual expenses**
2. **Multiply by 25** (this is your "FIRE number")
3. **Save aggressively** (typically 50-70% of income)
4. **Invest in low-cost index funds**
5. **Reach your number in 10-15 years instead of 40**

**Example:**
- Annual expenses: $40,000
- FIRE number: $40,000 x 25 = $1,000,000
- At a 70% savings rate, achievable in ~10 years

**Why 25x?**

The 25x multiplier comes from the famous "4% rule" (covered in a later lesson). In essence, you can safely withdraw 4% of your portfolio annually, and it should last 30+ years. 1/0.04 = 25.

**The Mindset Shift**

Traditional thinking: Work for 40 years, save 10-15%, retire at 65.

FIRE thinking: Work intensely for 10-15 years, save 50-70%, retire whenever you want.

**Common Misconceptions**

1. **"FIRE means deprivation"** - It means intentional spending, not poverty
2. **"You need high income"** - Many achieve FIRE on median salaries
3. **"Early retirement is boring"** - FIRE creates time for meaningful pursuits
4. **"It's only for young people"** - Starting at any age improves your position

**The Three Pillars of FIRE**

1. **Increase income** - Side hustles, career advancement, skill building
2. **Decrease expenses** - Cut waste, optimize spending, live intentionally
3. **Invest the difference** - Let compound interest do the heavy lifting

FIRE isn't a get-rich-quick scheme. It's a fundamental reorientation of your relationship with money, time, and freedom.`,
      keyTakeaway: 'FIRE is about achieving financial independence so that work becomes optional. Multiply your annual expenses by 25 to find your target number, then save aggressively and invest wisely.',
      actionItem: 'Calculate your current annual expenses and multiply by 25 to determine your preliminary FIRE number. Write this number down where you will see it daily.',
    },
  },
  {
    id: 'wb-fire-002',
    title: 'Your FIRE Number',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Your FIRE number is the specific amount of invested assets you need to cover your living expenses indefinitely. Calculating it accurately is the foundation of your entire FIRE plan.',
      mainContent: `**What Is Your FIRE Number?**

Your FIRE number is the amount of money you need invested to generate enough passive income to cover all your living expenses forever. When you reach this number, you are financially independent.

**The Calculation Method**

**Step 1: Track Your Actual Spending**

Don't estimate. Track every expense for 3-6 months:
- Housing (rent/mortgage, utilities, maintenance)
- Transportation (car payment, insurance, gas, maintenance)
- Food (groceries and dining out)
- Healthcare (insurance, medications, dental, vision)
- Insurance (life, disability, home/renters)
- Personal (clothing, grooming, subscriptions)
- Entertainment (hobbies, travel, recreation)
- Debt payments (student loans, credit cards)
- Miscellaneous (gifts, donations, unexpected)

**Step 2: Adjust for Post-FIRE Reality**

Some expenses change after FIRE:
- **Decrease**: Commuting costs, work clothes, convenience spending
- **Increase**: Healthcare (if losing employer coverage), hobbies, travel
- **New**: Portfolio management time, potential relocation costs

**Step 3: Apply the Multiplier**

**Annual Expenses x 25 = Your FIRE Number**

This assumes a 4% safe withdrawal rate. Adjust based on your risk tolerance:
- Conservative (3.5% withdrawal): Multiply by 28.6
- Standard (4% withdrawal): Multiply by 25
- Aggressive (4.5% withdrawal): Multiply by 22.2

**Example Calculations**

**Frugal FIRE:**
- Annual expenses: $30,000
- FIRE number: $30,000 x 25 = $750,000

**Comfortable FIRE:**
- Annual expenses: $50,000
- FIRE number: $50,000 x 25 = $1,250,000

**Affluent FIRE:**
- Annual expenses: $80,000
- FIRE number: $80,000 x 25 = $2,000,000

**The Power of Expense Reduction**

Reducing annual expenses by $10,000:
- Saves $10,000/year immediately
- Reduces FIRE number by $250,000
- Could shave years off your timeline

**Dynamic FIRE Numbers**

Your number isn't fixed forever:
- Recalculate annually as life changes
- Account for major life events (kids, location changes)
- Build in buffer for uncertainty (aim for 28-30x for safety)

**The Psychology of Your Number**

Knowing your specific target:
- Creates concrete, achievable goal
- Motivates daily savings decisions
- Transforms abstract dream into actionable plan
- Provides clear progress measurement

**What NOT to Include**

Your FIRE number typically excludes:
- Home equity (if you plan to live there)
- Social Security (treat as bonus buffer)
- Pensions (unless absolutely guaranteed)

Include only liquid, investable assets you can withdraw from.`,
      keyTakeaway: 'Your FIRE number is your annual expenses multiplied by 25. Every dollar you cut from annual expenses reduces your target by $25 and accelerates your timeline significantly.',
      actionItem: 'Track every expense for the next 30 days using an app or spreadsheet. Calculate your current annual run rate and your preliminary FIRE number.',
    },
  },
  {
    id: 'wb-fire-003',
    title: 'Lean FIRE vs Fat FIRE',
    type: 'concept',
    duration: 13,
    xpReward: 115,
    content: {
      overview: 'The FIRE community has developed different approaches based on lifestyle preferences and risk tolerance. Understanding Lean FIRE versus Fat FIRE helps you choose the right path for your life.',
      mainContent: `**The FIRE Spectrum**

FIRE isn't one-size-fits-all. The community has identified several distinct approaches along a spectrum of spending and lifestyle choices.

**Lean FIRE**

**Definition:** Achieving financial independence with a minimalist lifestyle and lower annual expenses, typically under $40,000/year for a single person or $60,000 for a couple.

**Characteristics:**
- Frugal living is a lifestyle choice, not sacrifice
- Housing in lower cost-of-living areas
- Cooking at home, minimal dining out
- Used cars or no car at all
- Free or low-cost entertainment
- DIY approach to many expenses

**Pros:**
- Achieve FI faster (often 7-12 years)
- Lower FIRE number ($750K-$1M typically)
- Less dependence on market performance
- Environmental sustainability
- Forces creativity and intentionality

**Cons:**
- Less margin for error or unexpected expenses
- Geographic limitations
- May feel restrictive long-term
- Healthcare can consume larger percentage
- Limited travel budget

**Fat FIRE**

**Definition:** Achieving financial independence while maintaining a more luxurious lifestyle, typically $100,000+ annual expenses.

**Characteristics:**
- Premium housing in desirable locations
- Regular travel and dining experiences
- New or luxury vehicles
- Paid services (cleaning, lawn care, etc.)
- Higher entertainment budget
- Private education for children

**Pros:**
- More comfortable lifestyle
- Greater margin for unexpected costs
- More location flexibility
- Can handle market downturns better
- Less lifestyle adjustment needed

**Cons:**
- Requires longer accumulation phase (often 15-25 years)
- Higher FIRE number ($2.5M-$5M+)
- May encourage lifestyle inflation
- Risk of "one more year" syndrome
- Higher income requirements

**Regular FIRE (Middle Ground)**

Many people land in between, with $50,000-$80,000 annual expenses. This provides:
- Comfortable but not extravagant living
- 12-18 year typical timeline
- $1.25M-$2M target range
- Balance of speed and comfort

**Choosing Your Path**

Ask yourself:
1. What expenses bring you genuine happiness?
2. What can you live without permanently?
3. Do you value time freedom or lifestyle comfort more?
4. What's your income potential?
5. How risk-tolerant are you?

**The Hybrid Approach**

Many successful FIRE practitioners:
- Achieve Lean FIRE first (buy freedom)
- Continue working part-time on things they love
- Eventually reach Fat FIRE through continued investing
- Have the option, not the obligation, to work

**Important: Neither Is "Better"**

Lean FIRE isn't morally superior. Fat FIRE isn't selling out. The best approach is the one aligned with your values and achievable given your circumstances.

**The Real Question**

Not "Lean or Fat?" but "What do I actually need to be happy, healthy, and fulfilled?"

Your answer determines your number.`,
      keyTakeaway: 'Lean FIRE targets under $40K/year expenses for faster freedom; Fat FIRE targets $100K+ for a more luxurious lifestyle. Choose based on what genuinely makes you happy, not what others think you should want.',
      actionItem: 'List your top 10 expenses and rate each 1-10 on how much genuine happiness it brings. Consider which category (Lean, Regular, or Fat FIRE) aligns with your happiness-maximizing spending.',
    },
  },
  {
    id: 'wb-fire-004',
    title: 'The 4% Rule',
    type: 'concept',
    duration: 15,
    xpReward: 130,
    content: {
      overview: 'The 4% rule, derived from the Trinity Study, is the cornerstone of FIRE withdrawal strategy. Understanding its origins, applications, and limitations is essential for confident retirement planning.',
      mainContent: `**The Origin of the 4% Rule**

In 1998, three finance professors at Trinity University published a landmark study analyzing historical stock and bond returns from 1926-1995. They tested various withdrawal rates to determine which would allow a portfolio to survive 30 years of retirement.

**The Key Finding:**

A **4% initial withdrawal rate**, adjusted annually for inflation, survived 95% of all 30-year historical periods with a 50/50 stock/bond allocation.

**How It Works**

**Year 1:** Withdraw 4% of your portfolio
- Example: $1,000,000 x 4% = $40,000

**Year 2+:** Adjust previous withdrawal for inflation
- If inflation is 3%: $40,000 x 1.03 = $41,200

**You withdraw the same real purchasing power each year, regardless of portfolio fluctuations.**

**Why It Works**

The rule balances:
- Stock market growth (average 10%/year historically)
- Bond stability and income
- Inflation adjustment
- Market volatility periods

Even accounting for major crashes (1929, 1987, 2000, 2008), most 30-year periods succeeded.

**The Math Behind 25x**

If 4% withdrawal is safe: 1 / 0.04 = 25

Therefore: **Annual Expenses x 25 = Required Portfolio**

$40,000 expenses x 25 = $1,000,000 portfolio

**Important Limitations**

**1. Based on Historical US Returns**
- US markets had exceptionally strong 20th century
- Future returns may differ
- International markets have underperformed historically

**2. 30-Year Timeframe**
- Original study assumed 30-year retirement
- Early retirees may need 50-60 year horizon
- Longer periods may require lower withdrawal rate

**3. Assumes Rational Behavior**
- No panic selling in crashes
- Consistent withdrawal discipline
- Proper rebalancing

**4. Doesn't Account for:**
- Sequence of returns risk (covered later)
- Major medical expenses
- Long-term care needs
- Changes in tax policy

**Adjustments for Early Retirees**

For 40+ year retirements, consider:
- **3.5% withdrawal rate** (multiply expenses by 28.6)
- **Variable withdrawal strategies** (spend more in good years)
- **Guardrails approach** (adjust spending based on portfolio)

**The "Flexible 4%"**

Modern FIRE practitioners often use dynamic strategies:
- **Basic:** Cut spending 10-25% in down years
- **Percentage of portfolio:** Withdraw 4% of current value each year
- **Guardrails:** Increase/decrease based on portfolio changes

**Real-World Application**

Most early retirees don't withdraw a fixed amount. They:
- Earn some income from passion projects
- Spend less in market downturns
- Have Social Security as eventual backup
- Adjust lifestyle based on circumstances

**The Bottom Line**

The 4% rule is a useful planning tool, not a guarantee. Build in flexibility, maintain some earning capacity, and don't treat it as absolute law.`,
      keyTakeaway: 'The 4% rule states you can withdraw 4% of your portfolio initially, adjusted for inflation annually, and have a 95% chance of lasting 30 years. For longer retirements, consider 3.5% or flexible withdrawal strategies.',
      actionItem: 'Calculate your current portfolio value and divide by 25. Compare this to your annual expenses to see how close you are to your FIRE number percentage-wise.',
    },
  },
  {
    id: 'wb-fire-005',
    title: 'Sequence of Returns Risk',
    type: 'concept',
    duration: 14,
    xpReward: 125,
    content: {
      overview: 'Sequence of returns risk is the danger that poor investment returns early in retirement can devastate your portfolio, even if average returns are fine. Understanding and mitigating this risk is crucial for FIRE success.',
      mainContent: `**What Is Sequence of Returns Risk?**

Sequence of returns risk (or sequence risk) occurs when the **order** of investment returns matters as much as the **average** return. This is especially dangerous during the transition from accumulation to withdrawal.

**Why Sequence Matters**

During accumulation, a bad year early on hurts less because:
- Your portfolio is smaller
- Future contributions buy more shares at low prices
- Time to recover is abundant

During withdrawal, a bad year early on hurts MORE because:
- You're selling shares at low prices
- Withdrawals lock in losses
- Portfolio has less ability to recover

**A Devastating Example**

Two retirees with identical $1,000,000 portfolios, identical 7% average returns over 30 years, but different sequences:

**Retiree A (Good Early Returns):**
- Years 1-5: Strong returns of 15%+ annually
- Years 25-30: Weak returns of -10% to -20%
- Result: Portfolio survives, ends with $1.5M

**Retiree B (Poor Early Returns):**
- Years 1-5: Poor returns of -10% to -20% annually
- Years 25-30: Strong returns of 15%+
- Result: Portfolio depleted by year 22

**Same average returns. Vastly different outcomes.**

**The Retirement Risk Zone**

The most dangerous period spans:
- 5 years before retirement
- 5 years after retirement

Poor returns during this 10-year window can permanently impair your portfolio.

**Mitigation Strategies**

**1. Cash Buffer (Bucket Strategy)**
- Keep 2-3 years expenses in cash/bonds
- Don't sell stocks during market downturns
- Replenish bucket when markets recover

**2. Flexible Spending**
- Cut discretionary spending 10-25% in down markets
- Delay major purchases during poor returns
- Have a "bare bones" budget ready

**3. Glide Path Allocation**
- Increase bond allocation approaching retirement
- Peak bond allocation at retirement (40-50%)
- Gradually shift back to stocks early in retirement

**4. Part-Time Income**
- Even small income reduces withdrawal pressure
- $10K/year income = $250K less needed in portfolio
- "Barista FIRE" as sequence risk protection

**5. Delay Big Purchases**
- Don't start retirement with major expenses
- Spread large purchases over multiple years
- Avoid locking in bad returns with big withdrawals

**6. Variable Withdrawal Rate**
- Withdraw percentage of current portfolio (not inflation-adjusted original)
- Naturally reduces spending in down years
- Trade-off: Income varies with market

**The Bond Tent Strategy**

Developed by researcher Michael Kitces:
- Increase bond allocation to 40-60% at retirement
- Gradually decrease bonds over first 10-15 years
- Protects against sequence risk
- Returns to higher equity allocation once risk period passes

**Practical Application**

Planning to retire with $1M?
- Build $50K-$75K cash buffer
- Increase bond allocation 5 years out
- Have "survival budget" ready
- Identify part-time income options
- Don't retire just before you think market will crash

**The Psychology**

Sequence risk is scariest because:
- It's largely out of your control
- It strikes when most vulnerable
- It can't be recovered from easily

The antidote: flexibility, buffer, and optionality.`,
      keyTakeaway: 'Sequence of returns risk means poor early retirement returns can devastate your portfolio permanently. Mitigate with cash buffers, flexible spending, bond tent strategy, and part-time income options.',
      actionItem: 'Create a "bare bones" budget showing your minimum survival expenses. This is your sequence-of-returns-risk emergency plan if markets crash early in your retirement.',
    },
  },
  {
    id: 'wb-fire-006',
    title: 'Coast FIRE',
    type: 'concept',
    duration: 12,
    xpReward: 110,
    content: {
      overview: 'Coast FIRE is a milestone where you have enough invested that compound growth alone will fund your retirement at a traditional age. This opens up lower-stress career options during your prime years.',
      mainContent: `**What Is Coast FIRE?**

Coast FIRE is reached when you have enough invested that, even if you never contribute another dollar, compound growth will bring your portfolio to your full FIRE number by traditional retirement age (65).

**The Core Concept**

Once at Coast FIRE, you only need to earn enough to cover current expenses. You can:
- Take a lower-paying but more fulfilling job
- Work part-time
- Take extended breaks between jobs
- Pursue passion projects that earn less
- Reduce stress dramatically

**The Math**

The formula uses the future value calculation:

**Current Need = FIRE Number / (1 + growth rate)^years until 65**

Assuming 7% real returns:

| Age Now | Years to 65 | Multiplier | If FIRE Number = $1M, Coast FIRE = |
|---------|-------------|------------|-------------------------------------|
| 25      | 40 years    | 14.97x     | $66,800                             |
| 30      | 35 years    | 10.68x     | $93,700                             |
| 35      | 30 years    | 7.61x      | $131,400                            |
| 40      | 25 years    | 5.43x      | $184,200                            |
| 45      | 20 years    | 3.87x      | $258,400                            |

**Why Coast FIRE Is Powerful**

**For a 30-year-old:**
With $94K invested for a $1M retirement, you could:
- Quit your high-stress tech job
- Work as a park ranger ($45K/year)
- Cover your $35K expenses
- Never invest another dollar
- Retire at 65 with $1M+

**The Psychological Freedom**

Coast FIRE provides:
- Reduced career pressure
- Freedom to prioritize life over salary
- Lower anxiety about job security
- Time to explore different careers
- Option to accelerate or coast

**Coast FIRE Strategies**

**1. Frontload Aggressively**
- Save maximum possible in early career
- Reach Coast FIRE by 30-35
- Then choose your own adventure

**2. Use as a Milestone**
- Celebrate reaching Coast FIRE
- Continue investing but with less pressure
- Know you have a safety net

**3. Bridge Strategy**
- Reach Coast FIRE
- Switch to lower-paying meaningful work
- Use extra time for side projects
- Those projects may grow income naturally

**Calculating Your Coast FIRE Number**

1. Determine your full FIRE number
2. Identify years until age 65
3. Use 7% annual real return (conservative)
4. Divide FIRE number by growth multiplier

**Online calculators make this easy.**

**The Coast FIRE Trap**

Some cautions:
- Don't assume 7% returns are guaranteed
- Build in safety margin (add 20-30%)
- Maintain some investing momentum
- Keep emergency fund separate
- Don't coast into poverty if returns disappoint

**Coast FIRE + Part-Time Work**

The combination is powerful:
- Expenses covered by part-time work
- Small continued investments accelerate timeline
- Maintain professional skills
- Social connection through work
- Best of both worlds

**Who Coast FIRE Is For**

Ideal candidates:
- High earners early in career
- People burned out on career ladder
- Those who prioritize life balance over wealth
- Anyone who started investing young
- Career changers seeking permission

Coast FIRE isn't giving up. It's strategic freedom.`,
      keyTakeaway: 'Coast FIRE means you have invested enough that compound growth alone will fund traditional retirement at 65. Once achieved, you only need to earn enough to cover current expenses, opening up lower-stress career options.',
      actionItem: 'Calculate your Coast FIRE number using your full FIRE number and years until age 65. Compare it to your current portfolio to see how far you are from this milestone.',
    },
  },
  {
    id: 'wb-fire-007',
    title: 'Barista FIRE',
    type: 'concept',
    duration: 11,
    xpReward: 105,
    content: {
      overview: 'Barista FIRE is a semi-retirement strategy where your investments cover most expenses, but you work part-time for additional income, healthcare benefits, or personal fulfillment.',
      mainContent: `**What Is Barista FIRE?**

Barista FIRE (named after working at a coffee shop like Starbucks for benefits) is a hybrid approach where you:

- Have substantial investments (50-80% of full FIRE number)
- Work part-time to cover remaining expenses
- Often gain employer health benefits
- Maintain social connections and purpose

**The Math of Barista FIRE**

Instead of needing $1,000,000 for $40,000 annual expenses:

**Barista FIRE Version:**
- Portfolio: $600,000 (generates $24,000/year at 4%)
- Part-time work: $16,000/year needed
- That's ~$10/hour at 30 hours/week

**You reach "retirement" with 40% less savings.**

**Why Consider Barista FIRE**

**1. The Healthcare Problem**

In the US, healthcare is a massive early retirement obstacle:
- ACA marketplace premiums can be $800-$1,500/month
- Employer coverage often costs $100-$300/month
- Starbucks offers benefits at 20 hours/week
- Many retailers offer part-time benefits

**2. Social and Purpose Benefits**
- Retirement can be isolating
- Structure and routine help mental health
- Social connections at work
- Sense of contribution and purpose

**3. Sequence Risk Protection**
- Part-time income reduces withdrawal needs
- Don't sell investments during downturns
- Portfolio has more time to recover
- Lower stress about market performance

**Jobs That Work for Barista FIRE**

**With Benefits:**
- Starbucks (20 hrs/week for benefits)
- Costco (good part-time benefits)
- REI (outdoor retailer with benefits)
- UPS (strong union benefits)
- Many hospital systems

**Flexible/Enjoyable:**
- Substitute teaching
- Adjunct professor
- Seasonal work (tax prep, retail)
- Freelance consulting in your field
- Golf course/ski resort (free access!)
- Museum or library

**Remote:**
- Customer service
- Virtual assistant
- Tutoring
- Writing/editing
- Bookkeeping

**The Barista FIRE Timeline**

**Traditional FIRE:** Need $1M, takes 15 years to save
**Barista FIRE:** Need $600K, takes 10 years to save

**You gain 5 years of freedom** in exchange for 20 hours/week of work.

**Making It Work**

**Calculate Your Gap:**
1. Your anticipated annual expenses: $____
2. Your portfolio's 4% withdrawal: $____
3. Gap to fill with work: $____ (#1 - #2)
4. Hourly rate needed at 20 hrs/week: $____ (#3 / 1040)

**Choose Strategically:**
- Prioritize benefits if healthcare is expensive
- Choose enjoyable work (it's indefinite)
- Consider location flexibility
- Build in growth/raises potential

**Potential Drawbacks**

- Still requires some work
- Healthcare tied to employment
- Less schedule freedom than full FIRE
- May feel like "not really retired"
- Part-time work can become full-time creep

**The Mindset Shift**

Barista FIRE reframes retirement:
- From: "Never work again"
- To: "Work is optional and on my terms"

If you find work you enjoy at 20 hours/week, is that really a sacrifice?`,
      keyTakeaway: 'Barista FIRE combines partial financial independence with part-time work, often for healthcare benefits. It allows earlier retirement with less savings and provides social structure and purpose.',
      actionItem: 'Research three employers in your area that offer health benefits to part-time employees. Calculate how much you would need to earn hourly to cover your gap between current portfolio and full FIRE number.',
    },
  },
  {
    id: 'wb-fire-008',
    title: 'Geographic Arbitrage',
    type: 'concept',
    duration: 13,
    xpReward: 115,
    content: {
      overview: 'Geographic arbitrage is the strategy of earning income in high-paying locations while spending in low-cost areas. This can dramatically accelerate your path to FIRE or stretch your retirement funds further.',
      mainContent: `**What Is Geographic Arbitrage?**

Geographic arbitrage (geoarbitrage) exploits the difference between where you earn money and where you spend it. By earning in expensive markets and spending in cheap ones, you maximize wealth accumulation and retirement longevity.

**The Two Types**

**1. Accumulation Phase Geoarbitrage**
- Work remotely for high-paying coastal companies
- Live in lower cost-of-living areas
- Save the massive difference

**2. Retirement Phase Geoarbitrage**
- Save money in high-earning years
- Retire in lower-cost location
- Portfolio stretches much further

**The Numbers Are Striking**

**Same Remote Tech Job ($120,000):**

| Location | Rent | Food | Total COL | Savings |
|----------|------|------|-----------|---------|
| San Francisco | $3,500/mo | $800/mo | $7,000/mo | $36K/yr |
| Austin, TX | $1,800/mo | $500/mo | $4,000/mo | $72K/yr |
| Boise, ID | $1,400/mo | $400/mo | $3,200/mo | $81K/yr |
| Mexico City | $800/mo | $300/mo | $1,800/mo | $98K/yr |

**Same income. $62K/year difference in savings.**

**Domestic Geoarbitrage**

Moving within your country:
- From NYC/SF/LA to medium cities
- From suburbs to rural areas
- From high-tax to low/no-tax states
- No visa issues, same language/culture

**Top US Value Cities for FIRE:**
- Boise, Idaho
- Tulsa, Oklahoma
- Raleigh, North Carolina
- Des Moines, Iowa
- Omaha, Nebraska

**International Geoarbitrage**

More dramatic savings possible:
- Southeast Asia (Thailand, Vietnam, Malaysia)
- Central/South America (Mexico, Colombia, Portugal)
- Eastern Europe (Czech Republic, Poland, Croatia)
- Southern Europe (Spain, Portugal, Greece)

**$40,000/year budget = middle class in US, upper class in Chiang Mai**

**Popular FIRE Destinations**

**Chiang Mai, Thailand:**
- Cost: $1,000-$1,500/month
- Great food, weather, healthcare
- Large expat community
- Visa options available

**Lisbon, Portugal:**
- Cost: $2,000-$2,500/month
- European lifestyle and travel
- D7 visa for passive income earners
- English widely spoken

**Medellin, Colombia:**
- Cost: $1,200-$1,800/month
- Perfect climate, modern city
- Growing digital nomad hub
- Easy visa process

**Practical Considerations**

**Before Relocating:**
- Visit for 1-3 months first
- Understand visa requirements
- Research healthcare quality
- Consider language barriers
- Tax implications (may still owe US taxes)
- Family and social connections

**The "Test Drive" Approach:**
1. Take extended vacation to potential location
2. Rent apartment, not hotel
3. Live like a local
4. Evaluate realistically
5. Make informed decision

**Geoarbitrage Isn't For Everyone**

Consider carefully:
- Family obligations (aging parents, children)
- Career implications
- Healthcare needs
- Cultural adaptation
- Loneliness/isolation risk
- Missing seasons/holidays

**The Hybrid Model**

Many FIRE practitioners:
- Spend winters in low-cost warm locations
- Return home for summers/holidays
- Maintain home base with family
- Get best of both worlds

Geographic arbitrage is a powerful tool, but location is deeply personal. Use it strategically, not dogmatically.`,
      keyTakeaway: 'Geographic arbitrage means earning in high-paying locations while spending in low-cost areas. This can double your savings rate or make your retirement portfolio last significantly longer.',
      actionItem: 'Research three cities or countries with lower cost of living than your current location. Calculate how your current expenses would change in each location.',
    },
  },
  {
    id: 'wb-fire-009',
    title: 'Health Insurance Strategies',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Healthcare is often the biggest obstacle to early retirement in the US. Understanding your options for coverage between early retirement and Medicare eligibility at 65 is essential for FIRE planning.',
      mainContent: `**The Healthcare Gap**

In the US, most people get health insurance through employers. Early retirees face a gap between leaving work and Medicare eligibility at age 65. This can be 10-30 years depending on when you retire.

**The True Cost**

Without subsidies, health insurance for a couple in their 50s:
- Bronze plan: $1,000-$1,500/month
- Silver plan: $1,400-$2,000/month
- Gold plan: $1,800-$2,500/month

**That's $12,000-$30,000/year just for premiums, plus deductibles.**

**Option 1: ACA Marketplace**

The Affordable Care Act created subsidized marketplaces:

**Key Feature: Subsidies Based on Income**

If your Modified Adjusted Gross Income (MAGI) is:
- Below 400% of Federal Poverty Level: Premium subsidies
- Very low income: Additional cost-sharing reductions

**For Early Retirees:**
- Control taxable income through strategic withdrawals
- Roth conversions in low-income years
- Capital gains harvesting at 0% bracket
- Can dramatically reduce or eliminate premiums

**Example:**
- Couple, early 50s, needs $60,000/year
- Withdraw from Roth (not taxable income): $30,000
- Withdraw from taxable (only gains counted): $15,000
- Total taxable income: $15,000
- Result: Very low ACA premiums, possibly under $200/month

**Option 2: COBRA**

Continue employer coverage for up to 18 months:
- Pay full premium (employer + employee share)
- Usually very expensive
- Good for short gaps
- Useful if you have ongoing medical needs

**Option 3: Spouse's Coverage**

If your spouse is still working:
- Stay on their employer plan
- Often the simplest solution
- Timing consideration for both retiring

**Option 4: Part-Time Work (Barista FIRE)**

Many employers offer benefits to part-time employees:
- Starbucks: 20 hours/week
- Costco: 20 hours/week
- REI: 20 hours/week
- UPS: Part-time with union benefits

**Option 5: Health Sharing Ministries**

Not insurance, but cost-sharing programs:
- Often $300-$500/month for families
- Faith-based requirements
- Not guaranteed coverage
- May exclude pre-existing conditions
- Examples: Medishare, Samaritan Ministries

**Option 6: Direct Primary Care**

Monthly fee for unlimited primary care visits:
- $50-$150/month per person
- No insurance middleman
- Pair with high-deductible catastrophic plan
- Good for generally healthy people

**Option 7: International Options**

If pursuing geographic arbitrage:
- Many countries have excellent, affordable healthcare
- Thailand: World-class hospitals, fraction of US cost
- Mexico: High-quality care, very affordable
- Portugal/Spain: Public healthcare available to residents
- Travel insurance can cover emergencies

**The MAGI Optimization Strategy**

Control your income to maximize ACA subsidies:

1. **Prioritize Roth withdrawals** (not counted as income)
2. **Harvest capital gains** at 0% bracket when possible
3. **Strategic Roth conversions** in low-income years
4. **Be aware of the ACA cliff** (subsidy loss at income thresholds)

**HSA: Your Secret Weapon**

If you have a high-deductible plan while working:
- Max out HSA contributions ($4,150 single, $8,300 family in 2024)
- Invest and let it grow
- Pay current medical expenses out of pocket
- In retirement, withdraw tax-free for medical expenses
- Essentially a triple-tax-advantaged retirement medical fund

**Planning Ahead**

Before retiring, understand:
- Your expected annual expenses including healthcare
- Your income sources and taxability
- ACA subsidy thresholds
- State-specific options (some states have better markets)
- Your health status and expected needs

Healthcare shouldn't prevent FIRE, but it requires careful planning.`,
      keyTakeaway: 'Control your taxable income in early retirement to maximize ACA subsidies. Combine Roth withdrawals, strategic capital gains harvesting, and possibly part-time work to manage healthcare costs effectively.',
      actionItem: 'Calculate your projected annual income in early retirement from all sources. Research ACA plans in your state at that income level using healthcare.gov to estimate your actual premiums.',
    },
  },
  {
    id: 'wb-fire-010',
    title: 'Life After FIRE',
    type: 'concept',
    duration: 15,
    xpReward: 130,
    content: {
      overview: 'Reaching financial independence is a beginning, not an end. The psychological and practical challenges of life after FIRE are often underestimated. Preparing for purpose, identity, and structure is as important as the financial preparation.',
      mainContent: `**The Unexpected Challenge**

Many FIRE achievers report that reaching their number felt anticlimactic. After years of intense focus on a goal, they faced an unexpected question: "Now what?"

**The Identity Crisis**

For many people, work provides:
- Identity ("I'm a software engineer")
- Social connections
- Daily structure
- Sense of purpose
- External validation
- Mental stimulation

Removing work without replacing these elements can lead to depression, anxiety, and regret.

**The Research Is Clear**

Studies on early retirees show:
- First 6-12 months often feel like extended vacation
- Year 2-3 can bring restlessness and loss of purpose
- Those who thrive have planned for meaning, not just money

**Building Your Post-FIRE Life**

**1. Purpose and Meaning**

Answer before retiring:
- What gets me out of bed excited?
- What problems do I want to solve?
- How do I want to contribute?
- What would I do if money was no object?

**Options:**
- Volunteer work
- Mentoring
- Starting a passion project
- Creating art or content
- Learning new skills
- Teaching or coaching

**2. Social Connections**

Work provides built-in social interaction. Replace intentionally:
- Join clubs or groups (hiking, book clubs, sports)
- Take classes
- Volunteer with others
- Maintain/rebuild family relationships
- Create or join FIRE community meetups
- Consider coworking spaces for structure

**3. Physical Health**

Retirement can lead to sedentary lifestyle:
- Build exercise into daily routine
- Join gym, sports league, or fitness group
- Walk, bike, or hike regularly
- Health is your most valuable asset

**4. Mental Stimulation**

Keep your mind engaged:
- Learn new skills (language, instrument, coding)
- Take courses (many free online)
- Read extensively
- Engage in strategy games
- Write or create

**5. Structure and Routine**

Without external structure:
- Create your own schedule
- Have morning and evening routines
- Set weekly and monthly goals
- Treat projects with same seriousness as work

**The "One Year" Rule**

Before fully retiring:
- Take a sabbatical or extended leave
- Trial run your FIRE life
- Discover what you miss (and don't miss)
- Adjust plans based on reality

Many discover they want to work, just differently.

**Common Post-FIRE Paths**

**1. Full Retirement**
- Never work for money again
- Fill time with hobbies, travel, relationships
- Requires intentional meaning-building

**2. Passion Projects**
- Start a business you always wanted
- Create content (blog, podcast, YouTube)
- Write a book
- May or may not generate income

**3. Consulting/Freelancing**
- Work on your terms
- Select only interesting projects
- Maintain skills and connections
- Extra income reduces portfolio pressure

**4. Encore Career**
- Completely different field
- Often lower-paid but more meaningful
- Teaching, non-profit, trades

**5. Serial Mini-Retirements**
- Work intensely on a project
- Take months off
- Repeat as desired
- Balance of engagement and freedom

**The "Enough" Question**

FIRE forces you to answer:
- How much is enough?
- What am I working toward?
- What does a good life look like?
- When do I stop optimizing and start living?

**Relationship Considerations**

FIRE affects partnerships:
- Both partners need aligned vision
- Sudden 24/7 togetherness can strain relationships
- Individual pursuits and togetherness balance
- Communicate extensively before and after

**The Best Advice from FIRE Achievers**

1. Don't rush to retire from something; retire to something
2. Build relationships and hobbies before retiring
3. Stay open to working on things you love
4. The goal is freedom, not idleness
5. Your identity is not your job

**The Ultimate Goal**

FIRE isn't about escaping work. It's about having the freedom to choose:
- What to work on
- When to work
- How much to work
- Or whether to work at all

That freedom is the real wealth.`,
      keyTakeaway: 'Reaching FIRE is a beginning, not an end. Plan for purpose, social connections, structure, and mental stimulation as carefully as you planned for the money. The goal is freedom to choose, not escape from meaning.',
      actionItem: 'Write down five things you would do with your time if you never had to work again. For each, identify how you can start incorporating it into your life now, before reaching FIRE.',
    },
  },
];
