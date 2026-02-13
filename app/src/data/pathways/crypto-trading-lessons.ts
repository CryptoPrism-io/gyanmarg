import type { PathwayLesson } from "@/types";

export const cryptoLessonsLevel1: PathwayLesson[] = [
  {
    id: "crypto-001",
    title: "Welcome to Crypto Trading",
    type: "intro",
    duration: 10,
    xpReward: 100,
    content: {
      overview: "Enter the frontier of digital asset trading -- the highest-risk, highest-reward market in modern finance.",
      mainContent: `## The Digital Gold Rush

In 2010, Laszlo Hanyecz paid 10,000 Bitcoin for two pizzas. At Bitcoin's 2021 peak of $69,000, those pizzas cost $690 million -- the most expensive meal in history.

This captures crypto's essence: explosive volatility, life-changing gains, and stomach-churning losses. It's a market where assets can 10x in months or lose 90% in weeks. Where new technologies promise to revolutionize finance, and scams separate fools from their money daily.

**The Numbers Are Staggering**

The cryptocurrency market grew from near-zero in 2009 to a $3 trillion peak in November 2021. Bitcoin itself has delivered approximately 200% average annual returns since inception -- no asset class in history comes close. A $1,000 Bitcoin investment in 2013 would have exceeded $100,000 by 2021.

But the volatility is equally extreme. Bitcoin has experienced five 80%+ drawdowns since 2011. Altcoins (alternative cryptocurrencies) routinely lose 95%+ during bear markets. In 2022, the crypto market lost $2 trillion in value -- equivalent to wiping out Apple, Microsoft, and Google combined.

**Why Trade Crypto?**

Beyond the allure of massive returns, crypto offers:

**24/7 Markets**: Unlike stocks (9:30am-4pm), crypto never closes. Trade at 3am if you want.

**High Volatility**: 5-10% daily moves are common. For traders, volatility = opportunity.

**Emerging Technology**: Blockchain, DeFi (decentralized finance), NFTs, and Web3 represent potentially transformative innovations.

**Democratization**: Anyone with internet access can trade, custody assets, and access financial services without traditional intermediaries.

**Uncorrelated Returns**: Historically, crypto had low correlation with stocks and bonds, offering diversification (though this has increased recently).

**The Dangers Are Real**

Crypto is the Wild West of finance:

- **Extreme volatility**: 50% crashes happen regularly
- **Hacks and scams**: Over $10 billion lost to hacks and fraud in 2021-2022
- **Regulatory uncertainty**: Governments worldwide debating how to regulate
- **No investor protections**: No FDIC insurance, no SEC oversight on most platforms
- **Complexity**: Understanding blockchain, wallets, private keys, smart contracts requires technical knowledge

In 2022, major crypto firms collapsed: Terra/Luna ($40B wiped out in days), Celsius (bankruptcy, user funds frozen), FTX (fraud, $8B missing), Three Arrows Capital (liquidation). Millions lost everything.

> "Bitcoin is rat poison squared." -- Warren Buffett
> "Blockchain is one of the most over-hyped technologies ever." -- Nouriel Roubini
> "Bitcoin has succeeded in creating something that's limited in supply and digital." -- Elon Musk

Opinions span from "revolutionary" to "complete scam."

**What You'll Master**

This pathway transforms you from crypto novice to informed trader who understands:

- Bitcoin, Ethereum, and major altcoin fundamentals
- Blockchain technology and how it enables digital scarcity
- Trading strategies specific to crypto's unique characteristics
- On-chain analysis -- reading blockchain data for insights
- DeFi protocols and yield opportunities
- Risk management in an unregulated, volatile market
- Market cycles, hype patterns, and avoiding scams

**The Survival Mindset**

Most crypto traders lose money. They buy at peaks driven by FOMO (fear of missing out), sell in panic during crashes, fall for scams, over-leverage, and ignore risk management.

Your goal: Join the minority who profit by:
- Understanding what you're buying (not aping into random tokens)
- Sizing positions appropriately (never risking more than you can afford to lose)
- Thinking in probabilities, not certainties
- Learning from history (crypto cycles repeat with remarkable regularity)
- Maintaining emotional discipline during manias and panics

**The Path Forward**

We'll start with Bitcoin's history and blockchain fundamentals, then explore Ethereum and smart contracts, DeFi, trading strategies, on-chain analysis, and risk management. By the end, you'll have a complete framework for navigating crypto markets successfully.

But remember: crypto is speculation, not investment. It's venture capital, not retirement savings. Only risk what you can afford to lose entirely.`,
      keyTakeaway: "Crypto offers unprecedented return potential and 24/7 trading but carries extreme volatility, regulatory uncertainty, and significant fraud risk -- only invest what you can afford to lose.",
      actionItem: "Set your risk budget: Decide the maximum percentage of your net worth you'll allocate to crypto (financial advisors suggest 1-5% max). Write this down as your hard limit before the FOMO hits."
    }
  },
  {
    id: "crypto-002",
    title: "Bitcoin: Digital Gold & The Blockchain",
    type: "concept",
    duration: 13,
    xpReward: 130,
    content: {
      overview: "Understand Bitcoin's revolutionary innovation -- a decentralized, censorship-resistant digital currency with provably scarce supply.",
      mainContent: `## The Invention That Changed Everything

On October 31, 2008, an anonymous person (or group) using the pseudonym Satoshi Nakamoto published a 9-page whitepaper titled "Bitcoin: A Peer-to-Peer Electronic Cash System." This document solved a computer science problem that had stumped experts for decades: how to create digital scarcity without a central authority.

**The Double-Spend Problem**

Digital files can be copied infinitely. Send an MP3 to a friend, you both have it. This makes digital money impossible -- if I send you $10 digitally, what prevents me from sending those same $10 to someone else?

Before Bitcoin, the solution was trusted intermediaries: banks, PayPal, Visa. They maintain ledgers preventing double-spending. But this requires trusting them -- they can freeze accounts, reverse transactions, inflate supply.

Bitcoin eliminated the need for intermediaries through the blockchain -- a distributed ledger maintained by thousands of computers worldwide, where every transaction is recorded and cryptographically verified.

**How Bitcoin Works (Simplified)**

**1. The Blockchain**

Imagine a Google Sheet that everyone can view, but no single person controls. Every 10 minutes, a new "block" of transactions is added. Once added, it's permanent -- you can't edit past blocks without everyone noticing.

Each block contains:
- Transactions (Alice sends 1 BTC to Bob)
- Timestamp
- Cryptographic hash (unique fingerprint) of the previous block

This linking creates a "chain" of blocks -- hence "blockchain."

**2. Mining & Proof-of-Work**

Who adds new blocks? "Miners" -- computers competing to solve complex math problems. The first to solve it gets to add the next block and receives a reward (currently 6.25 BTC, worth ~$200,000 at $32,000/BTC).

This "proof-of-work" requires enormous energy, making attacks prohibitively expensive. To rewrite history, you'd need to control 51% of all mining power -- costing billions.

**3. Fixed Supply**

Bitcoin's code caps total supply at 21 million BTC. Currently ~19.5 million exist. The mining reward halves every 210,000 blocks (~4 years), creating programmatic scarcity.

Final Bitcoin will be mined around 2140. This hard cap makes Bitcoin deflationary, unlike fiat currencies where central banks print unlimited money.

**Why Bitcoin Has Value**

Critics ask: "It's just digital code, why is it worth $30,000?"

The same question applies to dollars, which are just paper (or digital entries). Currency has value because:
- **Scarcity**: Limited supply (21M BTC)
- **Utility**: Can transfer value globally in minutes
- **Network effect**: More users = more valuable
- **Censorship resistance**: No government can seize properly-stored Bitcoin
- **Store of value**: Inflation hedge (debatable)

**Bitcoin vs. Gold**

| Property | Gold | Bitcoin |
|----------|------|---------|
| **Supply** | ~200,000 tons, growing 1-2%/year | 21M cap, growing ~1.7%/year (declining) |
| **Portability** | Heavy, expensive to transport | Infinite, costs pennies |
| **Divisibility** | Limited (smallest practical: 1 gram) | 100M satoshis per BTC |
| **Verification** | Requires assaying | Cryptographically provable |
| **Seizure Resistance** | Can be confiscated | Requires private key |
| **History** | 5,000+ years | 15 years |

Bitcoin advocates call it "digital gold" -- a store of value for the internet age.

**The Halving Cycle**

Every ~4 years, Bitcoin's mining reward halves:
- 2012: 50 → 25 BTC
- 2016: 25 → 12.5 BTC
- 2020: 12.5 → 6.25 BTC
- 2024: 6.25 → 3.125 BTC (next halving)

Historically, Bitcoin surges 12-18 months after halvings as reduced supply meets constant/growing demand:
- Post-2012 halving: +5,000% (2013 peak)
- Post-2016 halving: +2,000% (2017 peak)
- Post-2020 halving: +600% (2021 peak)

This creates predictable 4-year cycles traders exploit.

**Bitcoin's Performance**

Despite volatility, Bitcoin is the best-performing asset of the past decade:
- 2010: $0.08
- 2013: $1,000 (peak)
- 2015: $200 (-80% crash)
- 2017: $20,000 (peak)
- 2018: $3,000 (-85% crash)
- 2021: $69,000 (peak)
- 2022: $16,000 (-77% crash)
- 2024: ~$32,000

Despite multiple 80% drawdowns, long-term holders have been massively rewarded. $1,000 invested in 2015 would be worth $150,000+ by 2021.

**Institutional Adoption**

Initially dismissed as a scam, Bitcoin now has institutional backing:
- **MicroStrategy**: $4+ billion Bitcoin treasury
- **Tesla**: Bought $1.5B (later sold most)
- **El Salvador**: Made Bitcoin legal tender (2021)
- **BlackRock, Fidelity**: Launched Bitcoin investment products
- **PayPal, Square**: Integrated Bitcoin buying/selling

This legitimization drove the 2020-2021 bull run.

**Criticisms & Risks**

**Energy consumption**: Bitcoin mining uses ~0.5% of global electricity, comparable to countries like Argentina. Critics call it wasteful; advocates argue it secures the most valuable digital network.

**Volatility**: Too volatile for everyday currency use.

**Scalability**: 7 transactions/second vs. Visa's 24,000. Layer-2 solutions (Lightning Network) aim to solve this.

**Regulatory risk**: Governments could ban or heavily restrict Bitcoin (China did in 2021).

> "Bitcoin is a remarkable cryptographic achievement... but I don't want to invest my retirement savings in it." -- Bill Gates`,
      keyTakeaway: "Bitcoin solved digital scarcity through blockchain and proof-of-work, creating a censorship-resistant, provably scarce digital asset with a 21 million cap and 4-year halving cycles.",
      actionItem: "Visit blockchain.com and explore recent Bitcoin blocks -- see real transactions, block rewards, and how the network operates in real-time. Understanding the technology removes the mysticism."
    }
  },
  {
    id: "crypto-003",
    title: "Ethereum & Smart Contracts: Programmable Money",
    type: "concept",
    duration: 12,
    xpReward: 120,
    content: {
      overview: "Discover Ethereum's innovation beyond Bitcoin -- smart contracts that enable decentralized applications and programmable finance.",
      mainContent: `## More Than Digital Cash

While Bitcoin digitized money, Ethereum digitized contracts. Launched in 2015 by Vitalik Buterin, Ethereum is a "world computer" -- a decentralized platform for running applications without central servers.

**Smart Contracts: Code as Law**

A smart contract is self-executing code on the blockchain. When conditions are met, the contract automatically executes.

Example: Alice and Bob bet on tomorrow's weather. They deposit $100 each into a smart contract programmed to:
- Check weather API tomorrow at noon
- If sunny, send $200 to Alice
- If rainy, send $200 to Bob

No middleman, no trust required, no disputes -- the code executes automatically.

This simple concept enables revolutionary applications:

**Decentralized Finance (DeFi)**

Traditional finance requires intermediaries: banks for savings, brokers for trades, insurance companies for coverage. DeFi replicates these services with smart contracts:

**Uniswap**: Decentralized exchange where you trade tokens without a company operating it. A smart contract manages the liquidity pool.

**Aave**: Lending protocol where you earn interest by depositing crypto or borrow by posting collateral. No credit checks, no bank -- just code.

**MakerDAO**: Stablecoin protocol that issues DAI (pegged to $1) backed by crypto collateral, maintaining the peg through algorithmic mechanisms.

At DeFi's 2021 peak, over $180 billion was locked in these protocols -- people earning yield, trading, and borrowing entirely through smart contracts.

**NFTs (Non-Fungible Tokens)**

Smart contracts create digital scarcity for unique items. An NFT is a blockchain token representing ownership of digital art, collectibles, or assets.

In 2021, Beeple's NFT artwork sold for $69 million. CryptoPunks (pixelated avatar NFTs) traded for millions. While 95% of NFT projects are worthless, the technology enables provable digital ownership -- potentially valuable for intellectual property, real estate titles, or event tickets.

**DAOs (Decentralized Autonomous Organizations)**

Organizations governed by smart contracts and token voting, not CEOs. ConstitutionDAO raised $47 million in days (trying to buy an original US Constitution copy). Members voted on decisions through token holdings.

**The Ethereum Ecosystem**

Ethereum hosts thousands of applications:
- **DeFi protocols**: Uniswap, Aave, Compound, Curve
- **NFT marketplaces**: OpenSea, Blur, LooksRare
- **Gaming**: Axie Infinity, Decentraland, The Sandbox
- **DAOs**: MakerDAO, Uniswap DAO, ApeCoin DAO

All powered by ETH (Ethereum's native currency) for transaction fees ("gas").

**ETH vs. BTC**

| Feature | Bitcoin | Ethereum |
|---------|---------|----------|
| **Purpose** | Digital gold, store of value | Programmable platform |
| **Launch** | 2009 | 2015 |
| **Supply Cap** | 21M | No hard cap (~120M, issuance varies) |
| **Block Time** | 10 minutes | 12 seconds |
| **Consensus** | Proof-of-Work (mining) | Proof-of-Stake (staking, since 2022) |
| **Primary Use** | Value transfer | Smart contract execution |

**The Merge: Ethereum 2.0**

In September 2022, Ethereum completed "The Merge" -- transitioning from proof-of-work (energy-intensive mining) to proof-of-stake (validators stake ETH to secure network).

Benefits:
- **99.95% energy reduction** (from ~112 TWh/year to ~0.05 TWh)
- **ETH becomes deflationary**: Issuance dropped from ~4.3% to ~0.5% annually. Combined with fee burns (EIP-1559), ETH supply can shrink during high usage.
- **Staking yield**: ETH holders earn 4-5% APY by staking

This made ETH fundamentally different from BTC -- it's now a yield-bearing, deflationary asset.

**Ethereum's Price History**

- 2015 ICO: $0.30
- 2017 peak: $1,400
- 2018 bottom: $80 (-94% crash)
- 2021 peak: $4,800
- 2022 bottom: $880 (-82% crash)
- 2024: ~$2,000

Like Bitcoin, massive volatility but strong long-term performance. $1,000 invested at 2018 bottom → $60,000 at 2021 peak.

**Layer 2 Scaling Solutions**

Ethereum's main limitation: High fees during congestion (sometimes $50-100 per transaction). Layer 2 solutions process transactions off-chain, then batch-settle on Ethereum:

- **Arbitrum, Optimism**: "Optimistic rollups" -- assume transactions are valid unless challenged
- **Polygon**: Separate blockchain compatible with Ethereum
- **zkSync, Starknet**: "Zero-knowledge rollups" -- cryptographically prove transaction validity

These reduce fees to pennies while inheriting Ethereum's security.

**Risks & Criticisms**

**Smart contract bugs**: Code vulnerabilities led to hundreds of millions in hacks (The DAO hack 2016, Ronin bridge 2022). Code is law... including buggy code.

**Complexity**: Understanding DeFi requires technical knowledge. Many users don't understand what they're investing in.

**Regulatory uncertainty**: Are DeFi protocols securities? Will governments ban permissionless finance?

**Competition**: Solana, Avalanche, BNB Chain, and others offer similar smart contract capabilities with faster speeds and lower fees.

> "Ethereum isn't just a cryptocurrency -- it's a platform for reinventing how finance, ownership, and organizations work." -- Vitalik Buterin`,
      keyTakeaway: "Ethereum enables smart contracts -- self-executing code powering DeFi, NFTs, and decentralized applications, making it a programmable platform beyond Bitcoin's store-of-value focus.",
      actionItem: "Explore Etherscan.io (Ethereum's blockchain explorer) -- search for Uniswap or Aave contracts and see smart contract interactions in real-time. This demystifies how DeFi actually works."
    }
  },
  {
    id: "crypto-004",
    title: "Quiz: Bitcoin & Ethereum Fundamentals",
    type: "quiz",
    duration: 8,
    xpReward: 100,
    content: {
      overview: "Test your understanding of Bitcoin's blockchain innovation and Ethereum's smart contract capabilities.",
      mainContent: `## Knowledge Check

Bitcoin and Ethereum represent two fundamental crypto paradigms. Let's ensure you've mastered the core concepts.`,
      keyTakeaway: "Understanding the technological innovations behind BTC and ETH is essential before trading or investing.",
      quiz: {
        question: "Every 4 years, Bitcoin undergoes a 'halving' event that reduces mining rewards by 50%. What is the primary effect this has on Bitcoin's price historically?",
        options: [
          "No effect -- mining rewards don't influence price",
          "Negative effect -- less mining means less security and lower confidence",
          "Positive effect -- reduced supply issuance creates scarcity, typically leading to price surges 12-18 months post-halving",
          "Immediate price spike on the halving day, then correction"
        ],
        correct: 2,
        explanation: "Bitcoin halvings reduce the rate of new supply entering the market. When demand remains constant or grows but new supply decreases, scarcity increases. Historically, this has led to major bull runs 12-18 months after halvings: 2012 halving → 2013 surge (+5,000%), 2016 halving → 2017 surge (+2,000%), 2020 halving → 2021 surge (+600%). The lag exists because it takes time for reduced supply to impact price, and because halvings are anticipated (often priced in months before)."
      }
    }
  },
  {
    id: "crypto-005",
    title: "Crypto Market Cycles: Boom, Bust, Repeat",
    type: "concept",
    duration: 14,
    xpReward: 140,
    content: {
      overview: "Learn the predictable 4-year crypto cycle pattern and how to position for each phase -- accumulation, markup, distribution, and markdown.",
      mainContent: `## History Doesn't Repeat, But It Rhymes

Crypto markets are remarkably cyclical. Every 4 years, the same pattern emerges: slow accumulation, explosive bull run, euphoric top, devastating crash, despair bottom. Understanding this cycle is the difference between life-changing gains and catastrophic losses.

**The Four-Year Bitcoin Cycle**

The cycle is driven by Bitcoin's halving events (every ~4 years) and psychological/market dynamics:

**Phase 1: Accumulation (Bear Market Bottom, 12-18 months)**
- **Price action**: Down 80-90% from peak, sideways grind
- **Sentiment**: Despair, "crypto is dead" media narratives
- **Characteristics**: Low volatility, low volume, accumulation by smart money
- **Example**: 2018-2019 (BTC $3,000-$10,000), 2022-2023 (BTC $16,000-$30,000)

**Phase 2: Markup (Bull Market, 12-18 months)**
- **Price action**: Steady rise, higher lows, breakouts
- **Sentiment**: Skeptical → cautiously optimistic → FOMO
- **Characteristics**: Halving occurs, institutional adoption news, altcoins start rallying
- **Example**: 2019-2020 (BTC $10,000 → $40,000), 2023-2024 (BTC $30,000 → ?)

**Phase 3: Distribution (Euphoric Top, 2-4 months)**
- **Price action**: Parabolic surge, blow-off top, extreme volatility
- **Sentiment**: Euphoria, everyone is a genius, mainstream FOMO
- **Characteristics**: Your taxi driver asks about Bitcoin, new ATHs daily, altcoins 10x in weeks
- **Example**: Dec 2017 (BTC hit $20,000), Nov 2021 (BTC hit $69,000)

**Phase 4: Markdown (Bear Market Crash, 6-12 months)**
- **Price action**: -80%+ collapse, failed rallies, capitulation
- **Sentiment**: Denial → fear → panic → despair
- **Characteristics**: Leveraged traders liquidated, projects fail, exchange collapses
- **Example**: 2018 (BTC $20,000 → $3,000), 2022 (BTC $69,000 → $16,000)

**Historical Cycle Data**

| Cycle | Peak Date | Peak Price | Bottom Date | Bottom Price | Drawdown | Recovery |
|-------|-----------|------------|-------------|--------------|----------|----------|
| 2013 | Dec 2013 | $1,150 | Jan 2015 | $170 | -85% | 13 months |
| 2017 | Dec 2017 | $19,700 | Dec 2018 | $3,200 | -84% | 12 months |
| 2021 | Nov 2021 | $69,000 | Nov 2022 | $15,500 | -78% | 12 months |

Notice the pattern: 80%+ crashes, ~12 month bottom-to-bottom recovery, then new cycle.

**Altcoin Season**

During bull markets, altcoins (everything except Bitcoin) often outperform dramatically:

**Early bull market**: Bitcoin leads (BTC dominance rises)

**Mid bull market**: Large-cap alts rally (ETH, SOL, ADA) -- "altcoin season begins"

**Late bull market**: Small-cap alts explode 50-100x (peak euphoria, maximum risk)

**Bear market**: Alts crash 90-99%, many go to zero

In 2017, hundreds of altcoins gained 1,000%+. In 2018, most lost 95%+. Only a handful survived.

In 2021, Solana went from $1 to $260 (+26,000%), DOGE from $0.002 to $0.73 (+36,000%). In 2022, most gave back 90%+ of gains.

**The Cycle Psychology**

**Bottom (Accumulation)**: "I'll never buy crypto again after losing 80%."

**Early Rise**: "Is this a real rally or another fake-out?"

**Mid Bull**: "Maybe I should buy a little..."

**Late Bull**: "I'm taking out a loan to buy more, this is going to $1 million!"

**Top**: "New paradigm, this time is different, never selling!"

**Early Crash**: "Just a healthy correction, we'll recover."

**Mid Crash**: "Okay, this hurts, but I'm holding."

**Late Crash**: "Get me out at any price, I'm done with crypto forever."

This emotional cycle guarantees most traders buy high (euphoria) and sell low (despair).

**How to Trade the Cycle**

**Accumulation Phase (Bear Market Bottom)**:
- Dollar-cost average into Bitcoin and top altcoins
- Focus on projects with real usage and strong teams
- Accumulate when everyone else has given up

**Markup Phase (Bull Market)**:
- Hold and add on dips
- Take partial profits at predetermined targets (e.g., 2x, 5x, 10x)
- Rotate gains from Bitcoin to large-cap alts to small-caps as cycle progresses

**Distribution Phase (Euphoric Top)**:
- Systematically sell into euphoria
- Take profits when taxi drivers give you crypto tips
- Shift to stablecoins/cash

**Markdown Phase (Bear Market Crash)**:
- Don't try to catch falling knives early
- Wait for capitulation and basing
- Preserve capital for next accumulation phase

**Cycle Indicators to Watch**

**Bitcoin Halving**: Next halving April 2024 -- historically leads to bull markets 12-18 months later

**Google Trends**: "Bitcoin" search volume spikes at tops, dead at bottoms

**Crypto Fear & Greed Index**: Extreme fear = accumulate, extreme greed = distribute

**Exchange inflows**: Heavy inflows = selling pressure, outflows = accumulation

**Funding rates**: Positive funding (longs pay shorts) = over-leveraged longs, bearish; negative = over-leveraged shorts, bullish

**Pi Cycle Top Indicator**: When Bitcoin's 111-day MA crosses above 350-day MA x2, tops often occur (worked in 2013, 2017, 2021)

> "The best time to buy crypto is when you're terrified. The worst time is when you're euphoric." -- Anonymous trader`,
      keyTakeaway: "Crypto follows predictable 4-year cycles driven by halving events and psychology -- accumulation (bear), markup (bull), distribution (euphoria), markdown (crash).",
      actionItem: "Study Bitcoin's historical price chart from 2013-2024 on TradingView.com -- mark the cycle tops and bottoms. Notice the pattern repeating. Where are we now in the current cycle?"
    }
  },
  {
    id: "crypto-006",
    title: "On-Chain Analysis: Reading the Blockchain",
    type: "concept",
    duration: 13,
    xpReward: 130,
    content: {
      overview: "Master on-chain metrics that reveal what's happening on the blockchain -- whale movements, exchange flows, and network health.",
      mainContent: `## The Data That Can't Lie

Traditional markets are opaque -- you can't see what Warren Buffett bought yesterday or when hedge funds are selling. But blockchain is transparent: every transaction, every wallet balance, every flow is publicly visible.

On-chain analysis reads this blockchain data to predict price movements. It's like having insider information, except it's legal and available to everyone.

**Key On-Chain Metrics**

**1. Exchange Inflows vs. Outflows**

When Bitcoin flows into exchanges, it suggests selling pressure (people deposit to sell). Outflows suggest accumulation (people withdraw to cold storage for long-term holding).

**Bullish signal**: Large exchange outflows
**Bearish signal**: Large exchange inflows

Example: In May 2021, Coinbase saw 30,000+ BTC outflows daily as institutions accumulated. Price rallied from $30,000 to $60,000. In May 2022, exchange inflows spiked as retail panic-sold, driving prices from $40,000 to $25,000.

**2. Whale Accumulation**

"Whales" are wallets holding 1,000+ BTC. Tracking their activity reveals smart money moves.

Glassnode and CryptoQuant track:
- Whale wallet count (increasing = accumulation)
- Whale transaction volume (spikes = distribution or accumulation)
- Whale exchange deposits (selling) vs. withdrawals (buying)

In November 2022, whale wallets accumulated 100,000+ BTC while retail sold in panic at $16,000. Six months later, BTC doubled.

**3. MVRV Ratio (Market Value to Realized Value)**

Compares Bitcoin's market cap to its "realized cap" (price at which each coin last moved).

- **MVRV > 3.5**: Overvalued, holders in massive profit, likely to take profits (tops often occur)
- **MVRV < 1**: Undervalued, holders underwater, capitulation phase (bottoms often occur)

This nailed the 2021 top (MVRV = 3.7 in November) and 2022 bottom (MVRV = 0.9 in November).

**4. NVT Ratio (Network Value to Transactions)**

Like P/E ratio for stocks, NVT compares market cap to transaction volume.

- **High NVT**: Overvalued relative to usage (bearish)
- **Low NVT**: Undervalued relative to usage (bullish)

When Bitcoin hit $69,000 in 2021, NVT was extremely elevated -- price far exceeded network activity. The correction was inevitable.

**5. Active Addresses**

Number of unique addresses transacting daily. Indicates network usage and adoption.

Rising active addresses in bear markets = accumulation phase, bottoming process
Falling active addresses in bull markets = distribution phase, topping process

**6. Long-Term Holder Supply**

Coins held for 155+ days (long-term holders) vs. short-term speculators.

When long-term holder supply increases, it removes BTC from circulation, creating scarcity. When they start distributing (supply decreases), tops are near.

In 2020-2021, LTH supply steadily increased as smart money accumulated. In late 2021, LTH supply started decreasing as whales took profits at $60,000+ -- signaling the top.

**7. Realized Cap HODL Waves**

Shows age distribution of Bitcoin supply:
- 1 day to 1 week old
- 1 week to 1 month
- 1 month to 3 months
- 3-6 months
- 6-12 months
- 1-2 years
- 2-3 years
- 3-5 years
- 5+ years

At bottoms, most supply is "old" (long-term holders not selling). At tops, supply "rejuvenates" as old coins move (OGs taking profits).

**8. Stablecoin Supply & Inflows to Exchanges**

Stablecoins (USDT, USDC, DAI) are crypto's "dry powder" -- sitting on exchanges waiting to buy.

Rising stablecoin supply + exchange inflows = buying power building (bullish)
Falling stablecoin supply + exchange outflows = dry powder depleting (bearish)

In 2022-2023, stablecoin supply fell from $180B to $130B as investors left crypto entirely. Recovery requires stablecoin supply growth.

**Ethereum-Specific Metrics**

**ETH burned**: After EIP-1559, ETH is burned per transaction. High usage = high burn = deflationary pressure.

**ETH staked**: ~20M ETH ($40B+) locked in staking, removed from circulation. Can't be easily sold.

**Gas fees (Gwei)**: High fees = high network usage, often correlates with price action.

**DeFi TVL (Total Value Locked)**: Money in DeFi protocols. Rising TVL = healthy ecosystem.

**Where to Access On-Chain Data**

- **Glassnode**: Premium analytics ($29-$800/month), some free metrics
- **CryptoQuant**: Exchange flows, miner data, derivatives
- **Nansen**: Wallet tracking, smart money movements
- **DeFi Llama**: DeFi protocol TVL, yields
- **Etherscan / Blockchain.com**: Free blockchain explorers

**Using On-Chain Data Practically**

Don't rely on single metrics -- combine multiple:

**Bullish confluence example (bottom)**:
- Exchange outflows increasing
- Whale accumulation rising
- MVRV < 1 (undervalued)
- Long-term holder supply increasing
- NVT normalizing

This happened in November 2022 -- the bottom.

**Bearish confluence example (top)**:
- Exchange inflows spiking
- Whale distribution
- MVRV > 3.5 (overvalued)
- Long-term holder supply decreasing
- NVT extremely elevated

This happened in November 2021 -- the top.

> "Price is what you pay, value is what you get. On-chain data reveals the value." -- On-chain analyst`,
      keyTakeaway: "On-chain analysis tracks blockchain data -- exchange flows, whale activity, MVRV, NVT, and holder behavior -- to identify accumulation and distribution phases before price reflects them.",
      actionItem: "Explore Glassnode's free charts or CryptoQuant -- check current exchange flows and MVRV ratio. Are whales accumulating or distributing? This gives you an edge over traders watching only price."
    }
  },
  {
    id: "crypto-007",
    title: "Quiz: Crypto Cycles & On-Chain Analysis",
    type: "quiz",
    duration: 8,
    xpReward: 100,
    content: {
      overview: "Test your understanding of crypto market cycles and on-chain metrics.",
      mainContent: `## Assess Your Knowledge

Cycle awareness and on-chain analysis are what separate informed crypto traders from gamblers. Let's verify your mastery.`,
      keyTakeaway: "Combining cycle timing with on-chain data creates a powerful framework for crypto trading decisions.",
      quiz: {
        question: "You notice Bitcoin's MVRV ratio has fallen below 1.0, exchange outflows are at multi-month highs, and long-term holder supply is increasing. What does this on-chain confluence suggest?",
        options: [
          "Market top approaching -- time to take profits",
          "Neutral market -- wait for clearer signals",
          "Market bottom forming -- accumulation phase by smart money",
          "High volatility ahead -- reduce all positions"
        ],
        correct: 2,
        explanation: "All three metrics point to accumulation: MVRV < 1 means most holders are underwater (capitulation phase typical of bottoms), exchange outflows mean people are withdrawing to cold storage for long-term holding (not selling), and increasing LTH supply means smart money is accumulating and holding. This confluence occurred at the November 2022 bottom ($16,000), and BTC doubled within 6 months. Bottoms are characterized by smart money accumulating while retail panics."
      }
    }
  },
  {
    id: "crypto-008",
    title: "Risk Management: Surviving Crypto Volatility",
    type: "exercise",
    duration: 15,
    xpReward: 150,
    content: {
      overview: "Learn position sizing, stop losses, and portfolio construction strategies specifically designed for crypto's extreme volatility.",
      mainContent: `## The First Rule: Don't Get Rekt

"Rekt" (crypto slang for "wrecked") means losing everything. It happens to crypto traders with alarming frequency -- overleveraging, holding through 90% crashes, falling for scams, or storing funds on exchanges that collapse.

Your primary goal isn't making money -- it's *not losing* money. Survival is the prerequisite for success.

**The 1-5% Rule (Crypto Edition)**

In traditional markets, risking 2-5% per trade is standard. In crypto, given the extreme volatility, many professionals suggest:

- **Total crypto allocation**: 1-10% of net worth (depends on risk tolerance)
- **Per-trade risk**: 1-3% of crypto portfolio (not net worth)
- **Leverage**: Avoid entirely or use sparingly (2-3x max)

Example: $100,000 net worth, 5% crypto allocation = $5,000 crypto portfolio
- Max per-trade risk: $150 (3% of $5,000)
- If buying an altcoin at $10 with $8 stop loss (20% risk), max position: $750 ($150 / 20% = $750)

**The Three Bucket System**

Professional crypto investors often split portfolios:

**Bucket 1: Core Holdings (50-70%)** -- Bitcoin, Ethereum
- Long-term hold, rarely trade
- Stored in cold wallets (hardware wallets like Ledger)
- Accept volatility, don't sell during crashes

**Bucket 2: Strategic Alts (20-40%)** -- Top 20 projects with strong fundamentals
- Solana, Avalanche, Polygon, Chainlink, etc.
- Hold through cycles but rotate based on performance
- Take partial profits at major resistance levels

**Bucket 3: Speculative/Trading (10-20%)** -- Small caps, new projects, trading positions
- High-risk, high-reward
- Tight stops, quick exits
- Expect many to go to zero, looking for 10-100x winners

This structure balances stability (BTC/ETH) with upside (strategic alts) and lottery tickets (speculation).

**Stop Losses in Crypto**

Traditional stop losses are dangerous in crypto due to:
- **Flash crashes**: Sudden wicks down 20-30%, then recovery (you get stopped out at bottom)
- **Exchange manipulation**: Coordinated liquidations of leveraged positions
- **Low liquidity**: Thin order books cause slippage

Better approaches:

**Mental stops**: Pre-determined exit levels but manually executed (avoids flash crash stops)

**Time stops**: "If this hasn't moved in 30 days, exit" (prevents holding dead projects)

**Percentage stops**: "If down 30-40%, exit" (prevents total wipeouts while allowing volatility room)

**Cycle-based stops**: "If we enter bear market (BTC breaks key support), sell all alts"

**Taking Profits Systematically**

Most crypto traders fail to take profits, riding gains to the top then back down. Prevent this with systematic profit-taking:

**The Thirds Strategy**:
- Sell 1/3 at 2x (you've now broken even)
- Sell 1/3 at 5x
- Hold 1/3 for potential 10x+

**The Ladder Strategy**:
- Sell 10% at +50%
- Sell 15% at +100%
- Sell 20% at +200%
- Sell 25% at +500%
- Hold 30% for moonshot potential

This guarantees profits while maintaining upside exposure.

**Never Go Full Degen**

"Degen" (degenerate gambler) behavior kills accounts:

**Don't**: Put your entire portfolio into one memecoin because Twitter is hyped
**Don't**: Use 20x leverage because "it's a sure thing"
**Don't**: FOMO into a coin up 300% in a week
**Don't**: Keep funds on exchanges (not your keys, not your coins)
**Don't**: Invest in projects you don't understand

**Do**: Research thoroughly before buying
**Do**: Size positions small enough to sleep well
**Do**: Use hardware wallets for long-term holdings
**Do**: Assume every project could go to zero
**Do**: Take profits during euphoria, accumulate during fear

**The Tax Trap**

In the US and most countries, crypto trades are taxable events. Swapping ETH for an altcoin triggers capital gains tax. Trading actively without tracking creates tax nightmares.

Solutions:
- Use crypto tax software (CoinTracker, Koinly)
- Track every transaction
- Set aside money for taxes (assume 20-30% of profits)
- Consider long-term holding for preferential rates

**Security: The Overlooked Risk**

More crypto is lost to hacks and scams than market crashes:

- **Use hardware wallets** (Ledger, Trezor) for significant holdings
- **Enable 2FA** (two-factor authentication) on all exchanges
- **Never share seed phrases** with anyone (scammers constantly phish for these)
- **Verify contract addresses** before interacting (scam tokens mimic real ones)
- **Use separate devices** for high-value transactions
- **Assume every DM is a scam** (legitimate projects never DM first)

**The Psychological Framework**

**Fear gauge**: If you're checking prices every 5 minutes, you're over-positioned. Size down.

**Sleep test**: If you can't sleep due to crypto stress, you have too much at risk.

**Loss acceptance**: Before every trade, mentally accept the worst-case loss. If that's unbearable, don't take the trade.

**Detachment**: View crypto as Monopoly money during trading, real money during tax/profit-taking.

**The Survivor's Checklist**

Before every crypto decision, ask:
1. What's my max loss if this goes to zero?
2. Can I afford to lose this amount?
3. Am I buying from fear/FOMO or rational analysis?
4. Have I researched this project thoroughly?
5. Do I have a profit-taking plan?
6. Is this position sized appropriately?

> "The crypto market is designed to transfer wealth from the impatient to the patient, from the emotional to the disciplined, and from the reckless to the cautious." -- Crypto trader wisdom`,
      keyTakeaway: "Crypto risk management requires strict position sizing (1-5% of portfolio), systematic profit-taking, security consciousness, and emotional discipline to survive extreme volatility.",
      actionItem: "Create your crypto risk management plan: Set total allocation %, per-trade risk limits, profit-taking levels (at 2x, 5x, 10x), and security protocols. Write it down and commit to following it regardless of FOMO or fear."
    }
  }
];
