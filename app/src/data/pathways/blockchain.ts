import type { PathwayLevel } from '@/types';
import { blockchainExpandedLessons } from './blockchain-expanded';

/**
 * Blockchain & Web3 Pathway
 * 34 lessons covering blockchain fundamentals, Bitcoin, Ethereum, DeFi, NFTs, and Web3
 */
export const blockchainPathway: PathwayLevel[] = [
  {
    id: 'blockchain-level1',
    title: 'Level 1: Blockchain Fundamentals',
    description: 'Understand the technology reshaping finance and beyond',
    icon: '⛓️',
    color: 'cyan',
    unlockRequirement: 0,
    lessons: [
      {
        id: 'blockchain-intro',
        title: 'What is Blockchain, Really?',
        type: 'intro',
        duration: 10,
        xpReward: 50,
        content: {
          overview: 'Cut through the hype and understand what blockchain actually does.',
          mainContent: `**Blockchain Demystified**

Forget the jargon. A blockchain is simply:

**A shared database that no single person controls.**

**Traditional Database:**
- One company owns it (Google, your bank)
- They can change, delete, or censor data
- You trust them to be honest
- Single point of failure

**Blockchain Database:**
- Thousands of computers hold copies
- Changes require consensus
- Extremely hard to alter history
- No single point of control

**The "Block" + "Chain" Structure:**

Each block contains:
1. Data (transactions)
2. A timestamp
3. A hash (digital fingerprint)
4. Previous block's hash (the chain)

If you change old data, the hash changes, breaking the chain. Everyone notices.

**Why Does This Matter?**

**1. Trust Without Middlemen**
Send money without banks. Prove ownership without lawyers. Trade without brokers.

**2. Immutable Records**
Once recorded, data can't be erased. Useful for:
- Financial records
- Supply chain tracking
- Voting systems
- Identity verification

**3. Programmable Money**
Smart contracts: "If X happens, automatically do Y."
- Insurance payouts without claims
- Escrow without lawyers
- Royalties without intermediaries

**The Honest Truth:**
Blockchain is powerful but overhyped. It solves specific problems (trustless coordination) but isn't magic for everything.`,
          keyTakeaway: 'Blockchain is a shared database that creates trust without needing a central authority.',
          actionItem: 'Think of one thing you currently trust a middleman to verify. Could blockchain help?',
        },
      },
      {
        id: 'blockchain-crypto',
        title: 'Cryptocurrency Explained',
        type: 'concept',
        duration: 12,
        xpReward: 100,
        content: {
          overview: 'How Bitcoin and other cryptocurrencies actually work.',
          mainContent: `**Cryptocurrency: Digital Money Explained**

**What Makes It "Crypto"?**
Cryptography (math-based security) enables:
- Proving ownership without revealing identity
- Sending value without intermediaries
- Creating scarcity in digital space

**Bitcoin: The First Cryptocurrency**

Created by anonymous "Satoshi Nakamoto" in 2009.

**Key Innovation:** Solved the "double-spend problem"
- Digital files can be copied infinitely
- How do you prevent copying money?
- Bitcoin: everyone agrees on ONE transaction history

**How Mining Works:**
1. Transactions are broadcast to network
2. Miners compete to solve math puzzle
3. Winner adds block, gets Bitcoin reward
4. Process repeats every ~10 minutes

The puzzle is hard to solve but easy to verify. This prevents cheating.

**Why Bitcoin Has Value:**
- Fixed supply: only 21 million will ever exist
- Network effect: more users = more valuable
- No central control: can't be inflated
- Censorship resistant: no one can stop transactions

**Beyond Bitcoin:**

**Ethereum:** Programmable blockchain
- Smart contracts enable complex applications
- Foundation for DeFi, NFTs, DAOs

**Stablecoins:** Crypto pegged to dollars
- USDC, USDT, DAI
- Price stability for practical use

**Layer 2s:** Faster, cheaper transactions
- Built on top of base chains
- Scale without sacrificing security`,
          keyTakeaway: 'Cryptocurrency creates digital scarcity and enables trustless transfer of value.',
          quiz: {
            question: 'What problem did Bitcoin solve that previous digital currencies couldn\'t?',
            options: [
              'Making transactions faster',
              'The double-spend problem',
              'Making currency anonymous',
              'Replacing banks entirely',
            ],
            correct: 1,
            explanation: 'Bitcoin solved how to prevent someone from spending the same digital money twice without a central authority.',
          },
        },
      },
      {
        id: 'blockchain-defi',
        title: 'DeFi, NFTs, and DAOs',
        type: 'concept',
        duration: 10,
        xpReward: 75,
        content: {
          overview: 'The applications being built on blockchain technology.',
          mainContent: `**Web3 Building Blocks**

**DeFi: Decentralized Finance**
Banking services without banks:

- **Lending/Borrowing:** Deposit crypto, earn interest. Borrow against collateral.
- **Decentralized Exchanges:** Trade without intermediaries
- **Yield Farming:** Earn rewards for providing liquidity

Risks: Smart contract bugs, volatile collateral, regulatory uncertainty

**NFTs: Non-Fungible Tokens**
Digital proof of ownership for unique items:

- Art and collectibles (most visible use)
- Event tickets (can't be counterfeited)
- Music royalties (direct artist payment)
- Game items (true ownership, cross-game use)
- Identity/credentials (verifiable diplomas)

Beyond the hype: NFTs are really about provable ownership and scarcity for digital things.

**DAOs: Decentralized Autonomous Organizations**
Organizations run by code and voting:

- No CEO or board
- Token holders vote on decisions
- Treasury managed by smart contracts
- Transparent rules enforced automatically

Examples: Protocol governance, investment clubs, creator collectives

**The Bigger Picture:**

These aren't separate things - they combine:
- A DAO could manage DeFi protocol
- NFTs could represent DAO voting power
- DeFi could enable NFT lending

We're seeing new organizational forms emerge that weren't possible before.`,
          keyTakeaway: 'DeFi, NFTs, and DAOs are building blocks for new forms of finance, ownership, and organization.',
          actionItem: 'Research one DAO and understand how its governance works.',
        },
      },
    ],
  },
  {
    id: 'blockchain-level2',
    title: 'Level 2: Deep Dive - Blockchain & Web3',
    description: 'Advanced concepts in blockchain technology, DeFi, NFTs, and DAOs',
    icon: '🔗',
    color: 'blue',
    unlockRequirement: 500,
    lessons: blockchainExpandedLessons,
  },
];

export default blockchainPathway;
