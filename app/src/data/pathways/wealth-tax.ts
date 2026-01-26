import type { PathwayLesson } from '@/types';

export const taxStrategyLessons: PathwayLesson[] = [
  {
    id: 'wb-tax-001',
    title: 'Tax-Advantaged Accounts Overview',
    type: 'concept',
    duration: 12,
    xpReward: 110,
    content: {
      overview: 'Tax-advantaged accounts are the cornerstone of wealth building, providing legal shields that allow your money to grow faster by reducing or eliminating tax drag on your investments.',
      mainContent: `**The Tax-Advantaged Arsenal**

The government provides specific account types designed to encourage retirement savings and healthcare funding. Understanding and maximizing these accounts is one of the highest-return financial decisions you can make.

**Why Tax Advantage Matters**

Consider two investors, each earning 8% annually on $500/month for 30 years:

**Taxable Account (25% annual tax drag):**
- Effective return: ~6%
- Final value: ~$502,000

**Tax-Advantaged Account (no tax drag):**
- Full 8% compounds
- Final value: ~$745,000

**The difference: $243,000** - from the same contributions and underlying returns.

**The Major Account Types**

**401(k) / 403(b) - Employer-Sponsored:**
- 2024 limit: $23,000 ($30,500 if 50+)
- Pre-tax contributions reduce taxable income immediately
- Many employers match contributions - this is FREE MONEY
- Traditional: taxed on withdrawal
- Roth 401(k): no deduction now, tax-free withdrawal

**Individual Retirement Accounts (IRAs):**
- 2024 limit: $7,000 ($8,000 if 50+)
- Traditional IRA: deduction now, taxed later
- Roth IRA: no deduction, tax-free forever
- Income limits apply to Roth IRA direct contributions

**Health Savings Account (HSA):**
- The only TRIPLE tax-advantaged account
- Deductible contributions
- Tax-free growth
- Tax-free withdrawal for medical expenses
- 2024 limit: $4,150 individual, $8,300 family
- Can be used as a stealth retirement account

**The Priority Order**

1. **401(k) up to employer match** - Capture all free money first
2. **HSA if eligible** - Triple tax advantage is unbeatable
3. **Max Roth IRA** - Tax-free growth is powerful long-term
4. **Max remaining 401(k)** - Reduce taxable income
5. **Backdoor Roth** - If income exceeds Roth limits
6. **Taxable brokerage** - After all tax-advantaged space is used

**The Compound Advantage**

Every dollar saved in taxes today, invested and compounded over decades, becomes significant wealth. Tax-advantaged accounts are not just tax savings - they are wealth multiplication engines.`,
      keyTakeaway: 'Tax-advantaged accounts can mean $200,000+ extra over your investing lifetime. Always capture employer matches first, then prioritize HSA, Roth IRA, and remaining 401(k) space.',
      actionItem: 'Review your current retirement account contributions. Are you capturing your full employer match? Calculate the maximum you can contribute across all tax-advantaged accounts and create a plan to reach it.'
    }
  },
  {
    id: 'wb-tax-002',
    title: 'Income vs Capital Gains Taxation',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Understanding the fundamental difference between how earned income and investment gains are taxed is essential for strategic wealth building and tax optimization.',
      mainContent: `**Two Tax Systems, Two Strategies**

The tax code treats different types of income very differently. Earned income (wages, salaries, business income) faces one set of rules, while investment income (capital gains, dividends) faces another - often more favorable - set of rules.

**Ordinary Income Tax Brackets (2024)**

Your wages, salary, tips, and short-term investment gains are taxed at progressive rates:

- 10%: $0 - $11,600
- 12%: $11,601 - $47,150
- 22%: $47,151 - $100,525
- 24%: $100,526 - $191,950
- 32%: $191,951 - $243,725
- 35%: $243,726 - $609,350
- 37%: $609,351+

Plus: Social Security (6.2%) and Medicare (1.45%) taxes on earned income.

**Long-Term Capital Gains Rates (2024)**

Investments held over one year receive preferential treatment:

- 0%: Income up to $47,025
- 15%: $47,026 - $518,900
- 20%: $518,901+

**No Social Security or Medicare taxes** on investment gains.

**The Strategic Implication**

A high earner paying 35% marginal rate on their salary pays only 15% on long-term capital gains. This 20% difference is why wealthy individuals often structure their compensation and wealth around investments rather than wages.

**Qualified Dividends**

Dividends from most US stocks receive the same favorable treatment as long-term capital gains - 0%, 15%, or 20% based on income. This makes dividend-paying stocks tax-efficient for taxable accounts.

**Short-Term vs Long-Term**

The holding period matters enormously:

- **Short-term (under 1 year):** Taxed as ordinary income (up to 37%)
- **Long-term (over 1 year):** Taxed at preferential rates (0-20%)

**Practical Example**

You buy stock for $10,000 and sell for $15,000 (a $5,000 gain):

**If sold after 11 months (short-term) at 32% bracket:**
Tax: $5,000 x 32% = $1,600

**If sold after 13 months (long-term) at 15% rate:**
Tax: $5,000 x 15% = $750

**Waiting 2 extra months saved $850** - a 17% boost to your return.

**The Wealth-Building Lesson**

The tax code rewards patient investors who hold assets long-term and penalizes frequent trading. Build wealth by:
- Holding investments over one year when possible
- Using tax-advantaged accounts for frequent trading
- Keeping tax-efficient investments in taxable accounts
- Structuring income toward capital gains when possible`,
      keyTakeaway: 'Long-term capital gains (15%) are taxed far lower than ordinary income (up to 37%). The holding period threshold is one year - crossing it can save thousands in taxes.',
      actionItem: 'Review your investment accounts. Identify any positions approaching the 1-year mark and consider whether holding slightly longer would convert short-term gains to long-term, saving significant taxes.'
    }
  },
  {
    id: 'wb-tax-003',
    title: 'Tax Loss Harvesting',
    type: 'concept',
    duration: 13,
    xpReward: 115,
    content: {
      overview: 'Tax loss harvesting is the strategic selling of investments at a loss to offset capital gains and reduce your tax bill, effectively turning market downturns into tax savings.',
      mainContent: `**Making Losses Work For You**

Markets fluctuate, and your portfolio will inevitably contain some positions trading below your purchase price. Tax loss harvesting transforms these paper losses into real tax savings without necessarily changing your investment strategy.

**How It Works**

1. Identify investments trading below your cost basis (purchase price)
2. Sell those investments to realize the loss
3. Use the loss to offset capital gains from other investments
4. Optionally: Buy a similar (but not identical) investment to maintain market exposure

**The Math**

**Without harvesting:**
- $10,000 capital gain
- Tax at 15%: $1,500

**With harvesting ($4,000 loss):**
- $10,000 gain - $4,000 loss = $6,000 net gain
- Tax at 15%: $900
- **Savings: $600**

**Exceeding Your Gains**

If your losses exceed your gains, you can deduct up to $3,000 against ordinary income each year. Remaining losses carry forward indefinitely.

**Example:**
- Capital gains: $5,000
- Capital losses: $12,000
- Net loss: $7,000
- Offset gains: $5,000 (tax saved: ~$750)
- Deduct from income: $3,000 (tax saved: ~$720 at 24%)
- Carry forward: $4,000 (to use next year)

**The Wash Sale Rule**

The IRS prevents you from claiming a loss if you buy a "substantially identical" security within 30 days before or after the sale.

**Violation:** Sell Stock A at loss, buy Stock A back within 30 days
**Result:** Loss disallowed

**Compliant strategies:**
- Wait 31 days to repurchase
- Buy a similar but not identical investment (different index fund)
- Buy the same security in a different account type (but be careful)

**When To Harvest**

**Good times:**
- Market downturns (many positions underwater)
- Year-end tax planning
- When you have significant gains to offset
- Before selling a big winner

**Less ideal:**
- If you have no gains to offset and minimal income
- If transaction costs exceed tax savings
- If it disrupts a carefully planned portfolio

**Automated Harvesting**

Many robo-advisors (Wealthfront, Betterment) offer automated tax-loss harvesting, claiming to add 1-2% annually through continuous harvesting. Consider these platforms for taxable accounts.

**The Long Game**

Tax loss harvesting doesn't eliminate taxes - it defers them by reducing your cost basis in the replacement investment. But deferral has real value: money that would have gone to taxes instead compounds for years or decades.`,
      keyTakeaway: 'Tax loss harvesting lets you turn investment losses into immediate tax savings while maintaining your investment strategy. Losses offset gains dollar-for-dollar and up to $3,000 of ordinary income annually.',
      actionItem: 'Review your taxable investment accounts for positions currently trading below your purchase price. Calculate the potential tax savings from harvesting these losses, being mindful of the 30-day wash sale rule.'
    }
  },
  {
    id: 'wb-tax-004',
    title: 'Retirement Account Strategies',
    type: 'concept',
    duration: 15,
    xpReward: 130,
    content: {
      overview: 'Strategic use of retirement accounts goes beyond basic contributions - it involves choosing the right account types, optimizing contribution timing, and planning withdrawals to minimize lifetime taxes.',
      mainContent: `**Beyond Basic Contributions**

Most people understand that retirement accounts offer tax benefits. But strategic planning around which accounts to use, when to contribute, and how to convert between types can add hundreds of thousands to your retirement.

**Traditional vs Roth: The Core Decision**

**Traditional (Pre-Tax):**
- Deduction today
- Taxed on withdrawal
- Best when: Current tax rate higher than expected retirement rate

**Roth (Post-Tax):**
- No deduction today
- Tax-free forever
- Best when: Current tax rate lower than expected retirement rate

**The Roth Conversion Ladder**

A powerful strategy for early retirees and those with variable income years:

1. Contribute to Traditional 401(k)/IRA (get deduction at high income)
2. In low-income years, convert to Roth IRA
3. Pay taxes at lower rate on conversion
4. Future growth and withdrawals are tax-free

**Example:**
- Working years: 32% bracket, contribute to Traditional
- Early retirement: 12% bracket, convert $50,000/year
- Convert $50,000 at 12% instead of withdrawing at 22% later
- Savings: 10% = $5,000 per year, $50,000+ over 10 years

**The Backdoor Roth IRA**

For high earners who exceed Roth IRA income limits:

1. Contribute to a non-deductible Traditional IRA
2. Immediately convert to Roth IRA
3. Pay minimal tax on conversion (just any earnings)
4. Enjoy tax-free growth forever

**Warning:** Pro-rata rule applies if you have existing pre-tax IRA balances. Consider rolling those into a 401(k) first.

**The Mega Backdoor Roth**

Some 401(k) plans allow after-tax contributions beyond the $23,000 limit, up to $69,000 total. These can be converted to Roth:

1. Max regular 401(k) contribution ($23,000)
2. Add after-tax contributions (up to $46,000 more)
3. Convert after-tax portion to Roth 401(k) or Roth IRA
4. Result: Up to $69,000/year in Roth money

**Strategic Withdrawal Planning**

In retirement, withdraw from accounts in this general order:
1. Taxable accounts (least tax-advantaged)
2. Traditional accounts (fill lower tax brackets)
3. Roth accounts (last, for tax-free growth)

But be flexible - sometimes withdrawing from Roth in high-income years or Traditional in low-income years optimizes lifetime taxes.

**The 5-Year Roth Rules**

- Roth IRA contributions: Withdrawable anytime, tax-free
- Roth conversions: 5-year clock for penalty-free withdrawal under 59.5
- Roth earnings: Need both 5-year rule AND age 59.5 for tax-free

Plan conversion timing around these rules if early access is needed.`,
      keyTakeaway: 'Strategic Roth conversions during low-income years, backdoor Roth contributions for high earners, and thoughtful withdrawal sequencing can save tens of thousands in lifetime taxes.',
      actionItem: 'Evaluate whether your current and expected future tax rates favor Traditional or Roth contributions. If you have variable income, identify potential years for Roth conversions when you might be in a lower bracket.'
    }
  },
  {
    id: 'wb-tax-005',
    title: 'Asset Location Optimization',
    type: 'concept',
    duration: 12,
    xpReward: 110,
    content: {
      overview: 'Asset location is the strategic placement of investments across different account types to minimize taxes - distinct from asset allocation which determines what you invest in.',
      mainContent: `**The Right Investment in the Right Account**

Asset allocation asks: What should I invest in?
Asset location asks: Where should each investment live?

The same investment can have dramatically different after-tax returns depending on which account type holds it.

**Tax Characteristics of Investments**

**Tax-Inefficient (high tax drag):**
- Taxable bonds (interest taxed as ordinary income)
- REITs (dividends taxed as ordinary income)
- Actively managed funds (frequent trading = short-term gains)
- High-yield dividend stocks

**Tax-Efficient (low tax drag):**
- Index funds (minimal trading, few distributions)
- Growth stocks (no dividends, gains deferred until sale)
- Municipal bonds (tax-free interest)
- ETFs (more tax-efficient than mutual funds)

**The Optimal Location Strategy**

**Tax-Advantaged Accounts (401k, IRA, HSA):**
Place tax-inefficient investments here:
- Taxable bonds and bond funds
- REITs and real estate funds
- High-turnover active funds
- High-dividend stocks

Why? These accounts shield ordinary income tax rates and eliminate annual tax drag.

**Roth Accounts Specifically:**
Place highest-growth investments here:
- Growth stocks
- Aggressive equity funds
- Small-cap funds

Why? All growth is tax-free forever. Maximize what compounds tax-free.

**Taxable Brokerage Accounts:**
Place tax-efficient investments here:
- Total market index funds
- Tax-managed funds
- Municipal bonds (already tax-advantaged)
- Individual stocks you plan to hold long-term

Why? Lower turnover means fewer taxable events. Qualified dividends and long-term gains get preferential rates.

**The Mathematical Impact**

Suppose you have $100,000 each in taxable and tax-advantaged accounts:

**Poor asset location:**
- Bonds (5% yield) in taxable, taxed at 24% = 3.8% after-tax
- Stocks (8% growth) in tax-advantaged

**Optimal asset location:**
- Stocks (8% growth) in taxable, minimal current tax
- Bonds (5% yield) in tax-advantaged, no current tax

Over 20 years, optimal location can add 0.5-1% annually - potentially $100,000+ on a $500,000 portfolio.

**Practical Implementation**

1. List all your accounts (401k, IRA, Roth, taxable)
2. Determine your target asset allocation (e.g., 70% stocks, 30% bonds)
3. Place tax-inefficient assets in tax-advantaged accounts first
4. Fill remaining space with tax-efficient assets
5. Place tax-efficient assets in taxable accounts
6. Rebalance across accounts, not within each account

**The Coordination Challenge**

Asset location requires viewing all accounts as one portfolio. You may hold 100% bonds in your 401(k) and 100% stocks in your taxable account, but your overall allocation is 50/50. This is intentional optimization, not imbalance.`,
      keyTakeaway: 'Asset location can add 0.5-1% annually to returns by placing tax-inefficient investments in tax-advantaged accounts and tax-efficient investments in taxable accounts.',
      actionItem: 'Create a spreadsheet listing all your investment accounts, what each holds, and the tax efficiency of each holding. Identify opportunities to swap tax-inefficient assets into tax-advantaged accounts.'
    }
  },
  {
    id: 'wb-tax-006',
    title: 'Estate Planning Basics',
    type: 'concept',
    duration: 14,
    xpReward: 125,
    content: {
      overview: 'Estate planning ensures your wealth transfers efficiently to your intended beneficiaries while minimizing taxes and avoiding probate - it is not just for the wealthy.',
      mainContent: `**Why Everyone Needs Estate Planning**

Estate planning is not about being rich - it is about control. Without proper planning:
- Courts decide who gets your assets
- Your family may face costly, lengthy probate
- Taxes may consume a larger share than necessary
- Your wishes regarding healthcare may not be honored

**The Core Documents**

**1. Will (Last Will and Testament)**
- Names who receives your assets
- Names a guardian for minor children
- Names an executor to manage the process
- Goes through probate (public, can be slow and costly)

**2. Revocable Living Trust**
- Holds assets during your life (you remain in control)
- Transfers assets upon death WITHOUT probate
- Remains private (unlike wills, which are public)
- More expensive to set up but saves time and money later

**3. Financial Power of Attorney**
- Allows someone to manage your finances if you cannot
- Effective immediately or upon incapacity
- Essential for paying bills, managing investments if you are ill

**4. Healthcare Directive / Living Will**
- States your wishes for medical treatment
- Guides decisions if you cannot communicate
- Includes do-not-resuscitate preferences

**5. Healthcare Power of Attorney**
- Names someone to make medical decisions for you
- Works alongside healthcare directive
- Choose someone who knows and respects your wishes

**The Step-Up in Basis**

One of the most powerful wealth transfer mechanisms:

When you die, your heirs receive assets at their current market value (stepped-up basis), not your original purchase price.

**Example:**
- You bought stock for $10,000
- At death, it is worth $100,000
- Heir receives it with $100,000 basis
- If they sell immediately: $0 capital gains tax
- **$90,000 in gains never taxed**

This makes holding appreciated assets until death extremely tax-efficient.

**Beneficiary Designations**

These override your will for:
- Retirement accounts (401k, IRA)
- Life insurance
- Bank accounts with POD (payable on death)
- Brokerage accounts with TOD (transfer on death)

**Critical:** Review and update beneficiaries after major life events (marriage, divorce, births, deaths). An outdated beneficiary form can send assets to an ex-spouse.

**Estate Tax Basics (2024)**

Federal estate tax exemption: $13.61 million per person ($27.22 million for married couples).

Most people will never owe federal estate tax. However:
- Some states have lower thresholds
- The exemption is scheduled to drop after 2025
- Proper planning can preserve exemption for both spouses

**The Annual Gift Exclusion**

You can give $18,000 per person per year (2024) without any gift tax implications. A married couple can give $36,000 per recipient. This allows wealth transfer during life, removing future appreciation from your estate.`,
      keyTakeaway: 'Estate planning is about control and efficiency, not wealth level. Key documents include a will or trust, powers of attorney, and healthcare directives. The step-up in basis at death eliminates capital gains on inherited assets.',
      actionItem: 'If you do not have a will, healthcare directive, and powers of attorney, schedule time this week to begin the process. If you have these documents, review them to ensure they reflect your current wishes and life circumstances.'
    }
  },
  {
    id: 'wb-tax-007',
    title: 'Trust Structures Explained',
    type: 'concept',
    duration: 15,
    xpReward: 130,
    content: {
      overview: 'Trusts are legal arrangements that hold assets for beneficiaries, offering control over distributions, tax benefits, and asset protection that simple wills cannot provide.',
      mainContent: `**Understanding Trusts**

A trust is a legal arrangement where one party (the grantor) transfers assets to be held by another party (the trustee) for the benefit of a third party (the beneficiary). Trusts can be the grantor, trustee, and beneficiary simultaneously during their lifetime.

**The Core Trust Types**

**Revocable Living Trust**

The most common trust for estate planning:
- You create and fund it during your lifetime
- You retain full control and can modify or revoke it
- Assets avoid probate upon death
- No tax benefits during your lifetime
- Becomes irrevocable upon your death

**Irrevocable Trust**

Once created, cannot be modified:
- Assets are removed from your estate
- Potential estate tax benefits
- Asset protection from creditors
- Loss of control over assets
- Gift tax implications when funding

**Common Specialized Trusts**

**Credit Shelter Trust (Bypass Trust)**
- Preserves estate tax exemption for both spouses
- First spouse to die funds trust up to exemption amount
- Assets pass to children estate-tax-free upon second death

**Qualified Personal Residence Trust (QPRT)**
- Transfers home at reduced gift tax value
- You continue living in home for term of years
- Removes future appreciation from estate
- Risk: If you die during term, home returns to estate

**Irrevocable Life Insurance Trust (ILIT)**
- Owns life insurance policy outside your estate
- Death benefit passes estate-tax-free
- Provides liquidity for estate without increasing taxable estate
- Must be funded at least 3 years before death

**Charitable Remainder Trust (CRT)**
- Provides income to you for life or term of years
- Remainder passes to charity
- Immediate income tax deduction
- Avoids capital gains on appreciated assets transferred in

**Spendthrift Trust**
- Protects beneficiaries from their own poor decisions
- Protects assets from beneficiaries creditors
- Trustee controls distributions
- Common for children with money management issues

**Why Use Trusts?**

**Probate Avoidance:**
Probate can take 6-18 months and cost 3-8% of estate value. Trusts transfer immediately and privately.

**Control Beyond Death:**
Specify exactly how and when beneficiaries receive assets:
- Staggered distributions (1/3 at 25, 1/3 at 30, 1/3 at 35)
- Incentive provisions (matching income from work)
- Protection during divorce (assets stay in trust)

**Asset Protection:**
Properly structured irrevocable trusts can protect assets from:
- Lawsuits against you
- Creditors
- Nursing home costs (with proper planning timeline)

**Tax Planning:**
- Remove appreciating assets from taxable estate
- Generation-skipping for grandchildren
- Charitable giving with income retention

**Trust Administration**

Being a trustee is a serious responsibility:
- Fiduciary duty to beneficiaries
- Prudent investment standard
- Record keeping and accounting
- Tax filing (Form 1041 for irrevocable trusts)
- Potential personal liability

Consider professional trustees for complex trusts or when family dynamics are challenging.`,
      keyTakeaway: 'Trusts provide control, privacy, and tax benefits that wills cannot match. Revocable trusts avoid probate while irrevocable trusts offer asset protection and estate tax benefits at the cost of control.',
      actionItem: 'Assess whether your estate planning needs extend beyond a simple will. If you have assets over $1 million, minor children, blended family situations, or asset protection concerns, consult an estate planning attorney about trust options.'
    }
  },
  {
    id: 'wb-tax-008',
    title: 'Charitable Giving Strategies',
    type: 'concept',
    duration: 13,
    xpReward: 115,
    content: {
      overview: 'Strategic charitable giving can multiply your philanthropic impact while providing significant tax benefits, allowing you to give more to causes you care about and less to the government.',
      mainContent: `**Tax-Smart Philanthropy**

Charitable giving provides income tax deductions, but the strategy behind your giving can dramatically increase both the tax benefit and the ultimate impact of your generosity.

**The Basic Deduction**

Cash gifts to qualified charities are deductible up to 60% of your adjusted gross income (AGI). Excess carries forward for up to 5 years.

**But Here Is Where Strategy Comes In...**

**Donate Appreciated Assets**

Instead of selling appreciated stock and donating cash:

**Sell then donate:**
- Stock worth $10,000, basis $2,000
- Sell: Pay $1,200 capital gains tax (15%)
- Donate $8,800 cash
- Deduction: $8,800

**Donate stock directly:**
- Transfer stock worth $10,000 to charity
- No capital gains tax owed
- Full $10,000 deduction
- **Benefit: $1,200 more to charity + larger deduction**

This works for stock, real estate, and other appreciated assets.

**Donor-Advised Funds (DAFs)**

A charitable checking account for your giving:

1. Contribute cash or assets to DAF
2. Receive immediate tax deduction
3. Invest the funds tax-free
4. Grant to charities over time as you choose

**Strategic Use:**

"Bunching" donations: Instead of $5,000/year (below standard deduction threshold), contribute $25,000 every 5 years to a DAF. Itemize that year, take standard deduction other years. Same total giving, much larger tax benefit.

**Example:**
- 5 years of $5,000 gifts, standard deduction each year: $0 additional benefit
- One $25,000 DAF contribution, itemize that year: ~$5,500 tax savings (at 22%)

**Qualified Charitable Distribution (QCD)**

For those 70.5+ with IRAs:

- Donate up to $105,000 directly from IRA to charity
- Counts toward Required Minimum Distribution (RMD)
- Excluded from taxable income entirely
- Better than deduction because it reduces AGI

This can lower Medicare premiums, reduce Social Security taxation, and more.

**Charitable Remainder Trust (CRT)**

Advanced strategy for large appreciated assets:

1. Transfer appreciated asset to CRT
2. CRT sells asset (no immediate capital gains)
3. CRT invests proceeds and pays you income for life
4. Remainder goes to charity
5. You get partial income tax deduction immediately

**Private Foundation**

For significant philanthropists ($1M+):

- Create your own charitable organization
- Deduct contributions (30% AGI limit)
- Control investments and grants
- Family members can be paid reasonable salaries
- Legacy continues beyond your lifetime

**Charitable Lead Trust**

The reverse of CRT:
- Charity receives income for a term
- Remainder passes to heirs at reduced gift/estate tax value
- Good for transferring appreciating assets to heirs

**The Hierarchy of Giving Strategies**

1. Donate appreciated assets (avoid capital gains)
2. Use a DAF for timing flexibility
3. QCD from IRA if 70.5+
4. Cash donations if nothing appreciated available`,
      keyTakeaway: 'Donating appreciated assets instead of cash avoids capital gains tax and provides a deduction for full market value. Donor-advised funds and bunching strategies maximize tax benefits for consistent givers.',
      actionItem: 'Review your charitable giving and investment positions. Identify appreciated assets that could be donated directly instead of cash. Consider opening a donor-advised fund if you give consistently and could benefit from bunching.'
    }
  },
  {
    id: 'wb-tax-009',
    title: 'Self-Employment Tax Optimization',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Self-employed individuals face unique tax challenges including self-employment tax, but also have access to powerful deductions and retirement account options unavailable to traditional employees.',
      mainContent: `**The Self-Employment Tax Burden**

As a W-2 employee, you pay 7.65% for Social Security (6.2%) and Medicare (1.45%). Your employer pays another 7.65%.

As self-employed, you pay BOTH halves: 15.3% on net self-employment income up to $168,600 (2024), then 2.9% Medicare on amounts above.

**The Silver Lining**

You can deduct the employer-equivalent portion (half) of self-employment tax from your income. This does not eliminate it, but reduces your income tax.

**Business Structure Optimization**

**Sole Proprietorship / Single-Member LLC:**
- Simplest structure
- All profit subject to self-employment tax
- Good for: Low-profit businesses, testing ideas

**S-Corporation:**
- Profits split between salary (subject to employment tax) and distributions (not subject)
- Must pay yourself reasonable salary
- Potential savings on self-employment tax
- Good for: Consistent profits above $40,000+

**Example:**
$100,000 business profit as sole proprietor:
- Self-employment tax: ~$14,130

$100,000 as S-Corp ($50,000 salary, $50,000 distribution):
- Employment tax on salary: ~$7,065
- No self-employment tax on distribution
- **Savings: ~$7,065**

**The Qualified Business Income (QBI) Deduction**

Section 199A provides a 20% deduction on qualified business income for pass-through entities.

**Example:**
$100,000 business profit
QBI deduction: $20,000
Taxable: $80,000
At 22% bracket: $4,400 tax savings

**Limitations apply** for specified service businesses (lawyers, doctors, consultants) above income thresholds.

**Retirement Accounts for Self-Employed**

**Solo 401(k):**
- Employee contribution: $23,000 (2024)
- Employer contribution: Up to 25% of compensation
- Total maximum: $69,000
- Can include Roth option
- Allows loans from the plan

**SEP IRA:**
- Simpler than Solo 401(k)
- Contribute up to 25% of net self-employment income
- Maximum: $69,000
- Only employer contributions (no employee portion)
- Easy to set up and maintain

**SIMPLE IRA:**
- For businesses with employees
- Lower limits: $16,000 employee + 3% match
- Easier than 401(k) administration

**Key Deductions**

**Home Office:**
- Dedicated space used exclusively for business
- Deduct proportionate share of mortgage/rent, utilities, insurance
- Simplified option: $5/sq ft up to 300 sq ft ($1,500)

**Health Insurance:**
- Self-employed can deduct 100% of health insurance premiums
- Deduction reduces AGI (above-the-line), very valuable

**Business Expenses:**
- Equipment and supplies
- Professional development and education
- Business travel (not commuting)
- Marketing and advertising
- Professional services (accounting, legal)

**Vehicle:**
- Standard mileage rate: 67 cents/mile (2024)
- Or actual expenses if you track meticulously
- Keep a mileage log!

**Estimated Taxes**

Self-employed must pay quarterly estimated taxes (April 15, June 15, September 15, January 15) to avoid penalties. Underpayment penalties apply if you do not pay at least 90% of current year or 100% of prior year tax (110% if high income).`,
      keyTakeaway: 'S-corporation election can save thousands in self-employment tax on profits above reasonable salary. Maximize retirement contributions through Solo 401(k) or SEP IRA, and claim all legitimate business deductions.',
      actionItem: 'If self-employed with consistent profits above $40,000, consult a tax professional about S-corporation election. Ensure you are maximizing retirement contributions and tracking all deductible business expenses.'
    }
  },
  {
    id: 'wb-tax-010',
    title: 'International Tax Considerations',
    type: 'concept',
    duration: 15,
    xpReward: 125,
    content: {
      overview: 'Global income, foreign accounts, and international investments create complex tax obligations for US persons, with severe penalties for non-compliance and opportunities for optimization.',
      mainContent: `**US Taxation of Worldwide Income**

The United States taxes its citizens and residents on worldwide income, regardless of where it is earned or where you live. This creates unique obligations:

**If You Live Abroad:**

You still must file US tax returns and report all income. However:

**Foreign Earned Income Exclusion (FEIE):**
- Exclude up to $126,500 (2024) of foreign earned income
- Must meet Physical Presence Test (330 days abroad) or Bona Fide Residence Test
- Does not apply to self-employment tax or investment income

**Foreign Tax Credit:**
- Credit for foreign taxes paid on income also taxed by US
- Prevents double taxation
- Can carry forward/back unused credits
- Generally better than FEIE for higher earners

**Foreign Housing Exclusion/Deduction:**
- Exclude/deduct qualifying housing expenses abroad
- Above a base amount tied to FEIE
- Location-specific limits apply

**Reporting Requirements**

**FBAR (FinCEN 114):**
- Required if foreign accounts exceed $10,000 at any point during year
- All accounts in which you have signature authority
- Due April 15 (automatic extension to October 15)
- **Penalty: Up to $100,000 or 50% of account balance per violation**

**FATCA (Form 8938):**
- Required for specified foreign financial assets
- Thresholds: $50,000+ (US resident) or $200,000+ (living abroad)
- Filed with tax return
- **Penalty: $10,000+ per form not filed**

These are separate filings - you may need both.

**Foreign Accounts and Investments**

**Passive Foreign Investment Companies (PFICs):**
- Most foreign mutual funds and ETFs are PFICs
- Punitive US tax treatment: Gains taxed at highest rate plus interest
- Annual reporting required (Form 8621)
- **Strategy:** Use US-domiciled funds to invest internationally

**Foreign Trusts:**
- Complex reporting requirements
- Potential excise taxes on distributions
- Forms 3520 and 3520-A required
- Penalties are severe for non-compliance

**Tax Treaty Benefits**

The US has tax treaties with many countries that can:
- Reduce withholding on dividends and interest
- Prevent double taxation
- Provide tiebreaker rules for dual residents
- Exempt certain income types

**Common situations:**
- UK pension: Treaty may defer US tax
- Canadian TFSA: Not tax-advantaged for US purposes
- Rental income abroad: Credits available for foreign taxes

**State Tax Complexity**

Even if you leave the US, some states (California, notably) may continue to claim you as a resident if you:
- Have significant ties (home, family, memberships)
- Intend to return
- Spend substantial time in the state

Proper state exit planning is essential before going abroad.

**Renunciation Considerations**

Some Americans abroad consider renouncing citizenship for tax simplicity. Be aware:
- Exit tax on unrealized gains
- Covered expatriate rules
- Future US inheritance complications
- Cannot be undone

This is a serious decision requiring professional guidance.

**The Compliance Imperative**

International tax penalties are severe and the IRS is increasingly focused on offshore compliance. If you have unreported foreign accounts or income:
- Voluntary disclosure programs may be available
- Streamlined filing procedures for non-willful non-compliance
- Professional guidance is essential`,
      keyTakeaway: 'US citizens owe tax on worldwide income regardless of residence. FBAR and FATCA reporting have severe penalties. Avoid foreign mutual funds (PFICs) and use Foreign Tax Credits or FEIE to minimize double taxation.',
      actionItem: 'If you have any foreign financial accounts, income sources, or investments, verify you are meeting all reporting requirements. Consult an international tax specialist if you have foreign assets above $10,000 or earn income abroad.'
    }
  },
  {
    id: 'wb-tax-011',
    title: 'Wealth Preservation Strategies',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Wealth preservation protects your assets from erosion through taxes, inflation, lawsuits, and poor planning, ensuring your wealth serves you and future generations.',
      mainContent: `**The Threats to Wealth**

Building wealth is only half the battle. Preserving it requires defending against multiple threats:

1. **Taxes** - Income, capital gains, estate
2. **Inflation** - Silent erosion of purchasing power
3. **Lawsuits** - Liability from business, property, accidents
4. **Divorce** - Potential 50% reduction
5. **Poor investments** - Market losses, fraud
6. **Healthcare costs** - Long-term care can devastate savings
7. **Family mismanagement** - Heirs spending inheritance

**Tax Preservation Strategies**

**Hold appreciating assets until death:**
The step-up in basis eliminates capital gains. A stock purchased for $10,000 worth $1,000,000 at death passes with $1,000,000 basis - no capital gains ever.

**Roth conversions in low-income years:**
Convert Traditional IRA to Roth when income is low (between jobs, early retirement, sabbatical). Pay taxes at lower rate now, enjoy tax-free growth forever.

**Strategic charitable giving:**
Donate appreciated assets to avoid gains. Use QCDs from IRAs after 70.5. Establish a donor-advised fund for flexibility.

**Multi-generational Roth IRA:**
Fund Roth accounts for children/grandchildren. Decades of tax-free growth creates enormous wealth.

**Asset Protection Strategies**

**Maximize retirement accounts:**
401(k)s and IRAs have strong federal/state creditor protection. Max these out before taxable accounts.

**Umbrella insurance:**
$1-5 million in additional liability coverage costs only $200-500/year. Essential protection against lawsuits.

**Business entity structure:**
LLCs and corporations create liability shields between business activities and personal assets. Never conduct business in your personal name.

**Irrevocable trusts:**
Assets properly transferred to irrevocable trusts are protected from your creditors (with proper planning timeline).

**Domestic Asset Protection Trusts (DAPTs):**
Available in certain states (Nevada, Delaware, South Dakota). Can protect assets while you remain a beneficiary. Requires careful planning.

**Homestead exemption:**
Many states protect significant home equity from creditors. Know your state's rules.

**Inflation Protection**

**Hold productive assets:**
Stocks, real estate, and businesses tend to grow with or ahead of inflation. Cash and bonds lose purchasing power.

**Treasury Inflation-Protected Securities (TIPS):**
Bonds that adjust principal for inflation. Consider for the fixed-income portion of your portfolio.

**Real assets:**
Real estate, commodities, and infrastructure can hedge against inflation.

**Long-Term Care Planning**

Long-term care costs average $100,000+/year and can quickly deplete savings.

**Options:**
- Long-term care insurance (buy in your 50s-early 60s)
- Hybrid life/LTC policies
- Self-insure if wealth is substantial ($2M+)
- Medicaid planning (complex, requires advance planning)

**Succession and Governance**

For family businesses and significant wealth:
- Establish family governance structures
- Create a family mission statement
- Hold regular family meetings
- Educate heirs about wealth responsibility
- Consider incentive trusts that encourage productivity

**The Preservation Mindset**

Wealth preservation is not about hoarding - it is about ensuring your wealth serves its intended purpose (your retirement, your family, your philanthropy) rather than being eroded by preventable losses.`,
      keyTakeaway: 'Wealth preservation requires defense against taxes, inflation, lawsuits, healthcare costs, and family mismanagement. Use retirement accounts, insurance, proper entity structure, and trusts to protect what you have built.',
      actionItem: 'Conduct a wealth preservation audit: Do you have adequate umbrella insurance? Are your business activities properly structured? Have you considered long-term care planning? Identify and address your biggest preservation gaps.'
    }
  },
  {
    id: 'wb-tax-012',
    title: 'Building Your Tax Strategy',
    type: 'concept',
    duration: 15,
    xpReward: 130,
    content: {
      overview: 'An integrated tax strategy coordinates all elements of tax planning into a coherent system that evolves with your life circumstances and changing tax laws.',
      mainContent: `**From Tactics to Strategy**

Individual tax tactics are powerful, but true optimization comes from integrating them into a comprehensive, evolving strategy that considers your complete financial picture.

**The Strategic Framework**

**1. Know Your Current Position**

Map your complete tax situation:
- All income sources and types (W-2, 1099, investments)
- All accounts and their tax characteristics
- Current and expected future tax brackets
- State tax situation
- Family circumstances (dependents, estate)

**2. Project Your Future**

Tax planning is multi-decade thinking:
- Expected income trajectory
- Anticipated major events (retirement, inheritance, sale of business)
- Legislative changes (tax laws sunset and change)
- Life changes (marriage, divorce, children, relocation)

**3. Optimize Across Time**

The goal is minimizing lifetime taxes, not just this year's taxes:
- Sometimes paying more now (Roth contributions) reduces lifetime taxes
- Accelerating income into low-bracket years
- Deferring deductions to high-bracket years
- Timing capital gains realization

**The Annual Tax Planning Calendar**

**January-March:**
- Max out prior year IRA contributions (until April 15)
- Review prior year for missed deductions/credits
- Adjust withholding based on prior year results

**April-June:**
- File returns (or extensions)
- Fund current year retirement accounts
- Review Q1 investment performance for tax-loss harvesting opportunities

**July-September:**
- Mid-year tax projection
- Adjust estimated payments if needed
- Review charitable giving plans

**October-December:**
- Final tax-loss harvesting
- Last chance for Roth conversions this year
- Charitable contributions (especially appreciated assets)
- Required Minimum Distributions (if applicable)
- Max retirement contributions
- Business expense acceleration/deferral decisions

**Building Your Tax Team**

**CPA/Tax Preparer:**
- Annual return preparation
- Quarterly estimated payments
- Basic planning guidance

**Tax Attorney:**
- Complex transactions
- IRS disputes
- Trust and estate planning

**Financial Planner:**
- Investment tax efficiency
- Retirement planning
- Insurance and risk management

**Estate Planning Attorney:**
- Wills and trusts
- Wealth transfer strategies
- Business succession

**The Integration Checklist**

Review annually:

- [ ] Retirement contributions maximized across all account types
- [ ] Asset location optimized across accounts
- [ ] Tax-loss harvesting opportunities captured
- [ ] Charitable giving strategically timed and structured
- [ ] Business structure and compensation optimized (if applicable)
- [ ] Estate plan current and coordinated with tax strategy
- [ ] Insurance coverage adequate for asset protection
- [ ] Beneficiary designations current
- [ ] Required documents (FBAR, etc.) filed if applicable
- [ ] Next year's tax situation projected

**Adapting to Change**

Tax laws change constantly. The 2017 Tax Cuts and Jobs Act provisions largely expire after 2025. Stay informed and be prepared to adjust:
- Standard deduction may decrease
- Tax brackets may change
- Estate tax exemption may drop significantly
- State and local tax (SALT) deduction cap may change

**The Wealth-Building Connection**

Every dollar saved in taxes is a dollar that can compound for decades. A comprehensive tax strategy is not separate from wealth building - it is essential to it.

At 8% annual return, $10,000 in annual tax savings becomes:
- 10 years: $156,455
- 20 years: $494,229
- 30 years: $1,223,459

This is the true power of tax strategy: not just annual savings, but compounded lifetime wealth.`,
      keyTakeaway: 'An integrated tax strategy coordinates retirement accounts, asset location, charitable giving, business structure, and estate planning into a system that minimizes lifetime taxes and maximizes wealth accumulation.',
      actionItem: 'Create a comprehensive tax strategy document that maps all your accounts, income sources, and current tax tactics. Identify gaps where you could be more tax-efficient. Schedule an annual review with your tax advisor to ensure coordination.'
    }
  }
];

export default taxStrategyLessons;
