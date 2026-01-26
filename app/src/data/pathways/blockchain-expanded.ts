import type { PathwayLesson } from '@/types';

export const blockchainExpandedLessons: PathwayLesson[] = [
  // SECTION 1: Blockchain Fundamentals (Lessons 1-5)
  {
    id: 'block-exp-001',
    title: 'Introduction to Distributed Ledger Technology',
    type: 'concept',
    duration: 12,
    xpReward: 100,
    content: {
      overview: 'Understand what distributed ledger technology (DLT) is and why it represents a paradigm shift in how we record and verify transactions.',
      mainContent: `
## What is a Distributed Ledger?

A **distributed ledger** is a database that is consensually shared and synchronized across multiple sites, institutions, or geographies. Unlike traditional centralized databases, there is no central administrator or centralized data storage.

### The Problem with Centralized Systems

Traditional databases rely on a single authority to maintain records. This creates several issues:

- **Single point of failure**: If the central server goes down, the entire system fails
- **Trust dependency**: Users must trust the central authority completely
- **Vulnerability to attacks**: Hackers target the central repository
- **Manipulation risk**: The central authority can alter records

### How Distributed Ledgers Solve These Problems

In a distributed ledger:

1. **Multiple copies exist**: Every participant (node) maintains an identical copy of the ledger
2. **Consensus is required**: Changes must be agreed upon by the network
3. **Immutability**: Once recorded, data cannot be altered without consensus
4. **Transparency**: All participants can verify the entire history

### Types of Distributed Ledgers

| Type | Description | Example |
|------|-------------|---------|
| **Public** | Open to anyone, fully decentralized | Bitcoin, Ethereum |
| **Private** | Restricted access, controlled by organization | Hyperledger Fabric |
| **Consortium** | Semi-decentralized, multiple organizations | R3 Corda |

### Real-World Analogy

Imagine a Google Doc shared among 1,000 people where:
- Everyone can see all changes
- Changes require majority approval
- No one can delete history
- No single person controls the document

This is essentially how a distributed ledger operates, but with cryptographic security.

### Why This Matters

Distributed ledgers enable **trustless systems**—environments where parties can transact without needing to trust each other or a central authority. This opens possibilities for:

- Peer-to-peer financial transactions
- Supply chain tracking
- Voting systems
- Digital identity management
      `,
      keyTakeaway: 'Distributed ledgers eliminate the need for central authorities by distributing identical copies of data across multiple nodes, requiring consensus for any changes.',
      actionItem: 'Research three industries beyond finance that could benefit from distributed ledger technology and identify the specific trust problem each solution addresses.'
    }
  },
  {
    id: 'block-exp-002',
    title: 'Blockchain Architecture and Data Structures',
    type: 'concept',
    duration: 14,
    xpReward: 120,
    content: {
      overview: 'Learn how blockchains organize data into blocks, link them cryptographically, and create an immutable chain of records.',
      mainContent: `
## The Anatomy of a Blockchain

A blockchain is a specific type of distributed ledger that organizes data into **blocks** linked together in a **chain** using cryptographic hashes.

### Block Structure

Each block contains:

\`\`\`
┌─────────────────────────────────┐
│         BLOCK HEADER            │
├─────────────────────────────────┤
│ • Previous Block Hash           │
│ • Timestamp                     │
│ • Merkle Root                   │
│ • Nonce (for PoW chains)        │
│ • Block Number                  │
├─────────────────────────────────┤
│         BLOCK BODY              │
├─────────────────────────────────┤
│ • Transaction 1                 │
│ • Transaction 2                 │
│ • Transaction 3                 │
│ • ...                           │
└─────────────────────────────────┘
\`\`\`

### The Chain Mechanism

The **previous block hash** in each header creates the chain:

- Block 100's header contains the hash of Block 99
- Block 101's header contains the hash of Block 100
- Changing Block 99 would change its hash, breaking the link to Block 100

This creates **immutability**—altering any historical block would require recalculating every subsequent block.

### Merkle Trees

Transactions within a block are organized using a **Merkle tree** (hash tree):

1. Each transaction is hashed
2. Pairs of hashes are combined and hashed again
3. This continues until a single **Merkle root** remains

Benefits:
- Efficient verification of transaction inclusion
- Quick detection of data tampering
- Enables light clients (SPV nodes)

### Hash Functions in Blockchain

Blockchains rely on **cryptographic hash functions** (like SHA-256):

- **Deterministic**: Same input always produces same output
- **One-way**: Cannot reverse-engineer input from output
- **Collision-resistant**: Virtually impossible to find two inputs with same output
- **Avalanche effect**: Tiny input change dramatically changes output

### Genesis Block

Every blockchain starts with a **genesis block**—the first block with no previous hash. It's hardcoded into the software and represents the birth of the chain.

Bitcoin's genesis block, mined January 3, 2009, famously contains: *"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"*
      `,
      keyTakeaway: 'Blockchains achieve immutability by linking blocks through cryptographic hashes—changing any historical data would require recalculating every subsequent block, making tampering computationally infeasible.',
      actionItem: 'Use an online SHA-256 calculator to hash different inputs. Observe how even a single character change produces a completely different hash output.'
    }
  },
  {
    id: 'block-exp-003',
    title: 'Consensus Mechanisms Explained',
    type: 'concept',
    duration: 15,
    xpReward: 130,
    content: {
      overview: 'Explore how decentralized networks achieve agreement on the state of the ledger without a central authority through various consensus mechanisms.',
      mainContent: `
## The Consensus Problem

In a decentralized network, how do thousands of independent nodes agree on:
- Which transactions are valid?
- What order should transactions be in?
- Who gets to add the next block?

This is the **consensus problem**, and solving it is fundamental to blockchain technology.

### Proof of Work (PoW)

**How it works:**
1. Miners compete to solve a computational puzzle
2. The puzzle requires finding a hash below a target value
3. First to solve broadcasts the block
4. Other nodes verify and accept the block
5. Winner receives block reward + transaction fees

**Pros:** Battle-tested security, truly decentralized
**Cons:** Energy-intensive, slow throughput

*Used by: Bitcoin, Litecoin, Dogecoin*

### Proof of Stake (PoS)

**How it works:**
1. Validators lock up (stake) cryptocurrency as collateral
2. Network selects validators based on stake size and other factors
3. Selected validator proposes the next block
4. Other validators attest to its validity
5. Malicious validators lose their stake (slashing)

**Pros:** Energy efficient, faster finality
**Cons:** Potential centralization, "nothing at stake" problem

*Used by: Ethereum, Cardano, Solana*

### Delegated Proof of Stake (DPoS)

Token holders vote for a limited number of delegates who validate transactions. Faster but more centralized.

*Used by: EOS, TRON, BitShares*

### Comparison Table

| Mechanism | Energy Use | Decentralization | Speed | Security |
|-----------|------------|------------------|-------|----------|
| PoW | Very High | High | Slow | Excellent |
| PoS | Low | Medium-High | Fast | Good |
| DPoS | Very Low | Lower | Very Fast | Moderate |

### The Byzantine Generals Problem

Consensus mechanisms solve the classic **Byzantine Generals Problem**: How can distributed parties reach agreement when some participants may be faulty or malicious?

Blockchain consensus ensures that even if up to 1/3 of nodes are malicious (Byzantine fault tolerance), the network reaches correct agreement.

### Finality

- **Probabilistic finality** (PoW): Transactions become increasingly unlikely to reverse as more blocks are added
- **Economic finality** (PoS): Reversing transactions would cost more than potential gain
      `,
      keyTakeaway: 'Consensus mechanisms enable trustless agreement among distributed nodes, with each approach making different tradeoffs between security, decentralization, energy usage, and speed.',
      actionItem: 'Calculate the current energy consumption of Bitcoin mining versus Ethereum post-merge, and analyze the environmental implications of each consensus approach.'
    }
  },
  {
    id: 'block-exp-004',
    title: 'Cryptography Foundations for Blockchain',
    type: 'concept',
    duration: 14,
    xpReward: 125,
    content: {
      overview: 'Master the cryptographic primitives that make blockchain secure: hash functions, public-key cryptography, and digital signatures.',
      mainContent: `
## Cryptography: The Security Foundation

Blockchain security rests on mathematical cryptography that has been tested for decades. Understanding these primitives is essential for grasping how blockchains work.

### Hash Functions Deep Dive

A **cryptographic hash function** transforms any input into a fixed-size output:

\`\`\`
Input: "Hello World"
SHA-256: a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e

Input: "Hello World!"
SHA-256: 7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069
\`\`\`

Notice how one character completely changes the output (avalanche effect).

### Public-Key Cryptography

Also called **asymmetric cryptography**, this involves key pairs:

- **Private Key**: Secret, never shared (like a password)
- **Public Key**: Derived from private key, freely shared (like a username)

The mathematical relationship allows:
1. Messages encrypted with public key can only be decrypted with private key
2. Signatures created with private key can be verified with public key

### Digital Signatures in Blockchain

When you send cryptocurrency:

1. **Create transaction**: "Send 1 BTC from Address A to Address B"
2. **Sign with private key**: Mathematical proof you control Address A
3. **Broadcast to network**: Anyone can verify signature using your public key
4. **Verification**: Network confirms you authorized the transaction

\`\`\`
Transaction + Private Key → Digital Signature
Transaction + Signature + Public Key → Verified/Invalid
\`\`\`

### Elliptic Curve Cryptography (ECC)

Most blockchains use **ECDSA** (Elliptic Curve Digital Signature Algorithm):

- Provides equivalent security to RSA with much smaller keys
- Bitcoin/Ethereum use the secp256k1 curve
- 256-bit private key generates 512-bit public key

### Address Generation

\`\`\`
Private Key (256 bits)
    ↓ Elliptic Curve Multiplication
Public Key (512 bits)
    ↓ SHA-256 + RIPEMD-160
Public Key Hash (160 bits)
    ↓ Base58Check/Bech32 Encoding
Blockchain Address
\`\`\`

### Security Guarantees

- **Brute-forcing** a 256-bit private key would require more energy than the sun produces in its lifetime
- **Quantum computing** poses future risks; post-quantum cryptography is being developed
- **Never share** your private key; whoever controls it controls your assets
      `,
      keyTakeaway: 'Public-key cryptography enables trustless transactions by allowing anyone to verify signatures without knowing the private key, ensuring only the legitimate owner can authorize transactions.',
      actionItem: 'Generate a cryptocurrency wallet using a reputable tool and understand the relationship between your seed phrase, private key, public key, and address.'
    }
  },
  {
    id: 'block-exp-005',
    title: 'Network Topology and Node Types',
    type: 'concept',
    duration: 12,
    xpReward: 110,
    content: {
      overview: 'Understand how blockchain networks are structured, the different types of nodes, and how information propagates through the peer-to-peer network.',
      mainContent: `
## Peer-to-Peer Network Architecture

Unlike client-server models, blockchain networks use **peer-to-peer (P2P) architecture** where every participant can act as both client and server.

### Network Topology

Blockchain networks typically use a **mesh topology**:

- No central hub or hierarchy
- Nodes connect to multiple peers
- Information propagates through gossip protocols
- Network remains functional even if nodes fail

### Node Types

#### Full Nodes

- Download and verify the **entire blockchain**
- Enforce all consensus rules independently
- Can validate any transaction without trusting others
- Require significant storage (Bitcoin: ~500GB, Ethereum: ~1TB+)

#### Light Nodes (SPV)

- Download only block headers
- Verify transactions using **Simplified Payment Verification**
- Trust full nodes for complete validation
- Suitable for mobile wallets

#### Archive Nodes

- Store full node data PLUS all historical states
- Enable querying any past blockchain state
- Require massive storage (Ethereum archive: 15TB+)
- Essential for block explorers and analytics

#### Mining/Validator Nodes

- Full nodes that also participate in consensus
- Create new blocks (PoW mining or PoS validation)
- Earn rewards for securing the network

### Information Propagation

When a new transaction or block is created:

1. **Originating node** sends to connected peers
2. **Receiving nodes** validate the data
3. **Valid data** is forwarded to their peers
4. **Process repeats** until network saturation

This **gossip protocol** ensures information reaches all nodes within seconds.

### Network Metrics

| Network | Avg. Propagation Time | Active Nodes |
|---------|----------------------|--------------|
| Bitcoin | ~6-10 seconds | ~15,000+ |
| Ethereum | ~1-2 seconds | ~8,000+ |

### Decentralization Spectrum

\`\`\`
More Decentralized ←────────────────→ Less Decentralized

Bitcoin     Ethereum     Solana     BSC     Private Chains
(~15K nodes) (~8K nodes)  (~2K)    (~21)    (controlled)
\`\`\`

### Why Node Count Matters

More nodes mean:
- Greater censorship resistance
- Higher fault tolerance
- True decentralization
- Harder to coordinate attacks
      `,
      keyTakeaway: 'A blockchain network\'s security and decentralization depend on its node distribution—more independent full nodes mean greater resilience against attacks and censorship.',
      actionItem: 'Visit a blockchain node explorer and analyze the geographic distribution of nodes for Bitcoin and Ethereum. Consider what factors influence where nodes are operated.'
    }
  },

  // SECTION 2: Bitcoin (Lessons 6-10)
  {
    id: 'block-exp-006',
    title: 'The History and Philosophy of Bitcoin',
    type: 'concept',
    duration: 13,
    xpReward: 115,
    content: {
      overview: 'Trace Bitcoin\'s origins from the cypherpunk movement through Satoshi Nakamoto\'s revolutionary whitepaper to its emergence as digital gold.',
      mainContent: `
## The Birth of Digital Money

Bitcoin didn't emerge in a vacuum—it was the culmination of decades of work by cryptographers and cypherpunks dreaming of digital cash.

### The Cypherpunk Movement

In the 1990s, a group of activists believed cryptography could protect individual freedom:

- **David Chaum** (1983): Created DigiCash, anonymous digital currency
- **Adam Back** (1997): Invented Hashcash, precursor to Proof of Work
- **Wei Dai** (1998): Proposed b-money, decentralized digital currency
- **Nick Szabo** (1998): Designed Bit Gold, remarkably similar to Bitcoin

All these attempts failed due to centralization, double-spending, or lack of adoption.

### Satoshi Nakamoto's Breakthrough

On **October 31, 2008**, an anonymous person (or group) named Satoshi Nakamoto published:

> *"Bitcoin: A Peer-to-Peer Electronic Cash System"*

The whitepaper solved the **double-spending problem** without a central authority by combining:
- Proof of Work consensus
- Blockchain data structure
- Economic incentives for miners

### Key Historical Moments

| Date | Event |
|------|-------|
| Jan 3, 2009 | Genesis block mined |
| Jan 12, 2009 | First Bitcoin transaction (Satoshi to Hal Finney) |
| May 22, 2010 | First real purchase: 10,000 BTC for two pizzas |
| Feb 2011 | Bitcoin reaches $1 parity with USD |
| Dec 2010 | Satoshi's last known communication |
| 2013 | Price reaches $1,000 for first time |
| 2017 | All-time high near $20,000 |
| 2021 | El Salvador adopts Bitcoin as legal tender |

### Bitcoin's Core Philosophy

**Decentralization**: No single entity controls the network
**Scarcity**: Only 21 million will ever exist
**Permissionless**: Anyone can participate
**Censorship-resistant**: No authority can block transactions
**Trustless**: Verify, don't trust

### Who is Satoshi Nakamoto?

The creator's identity remains unknown. Candidates have included:
- Nick Szabo
- Hal Finney
- Craig Wright (self-claimed, disputed)
- Various others

Satoshi's anonymity strengthens Bitcoin—no founder to arrest, pressure, or centralize power around.

### The Digital Gold Narrative

Bitcoin has evolved from "peer-to-peer cash" to "digital gold":
- Fixed supply (harder money than gold)
- Portable (send billions with a smartphone)
- Divisible (to 8 decimal places)
- Verifiable (instant authenticity check)
      `,
      keyTakeaway: 'Bitcoin represents the successful culmination of decades of cryptographic research, creating the first truly decentralized digital money by solving the double-spending problem without central authority.',
      actionItem: 'Read Satoshi Nakamoto\'s original whitepaper (only 9 pages) and identify which previous technologies and concepts were combined to create Bitcoin.'
    }
  },
  {
    id: 'block-exp-007',
    title: 'Bitcoin Mining and Proof of Work',
    type: 'concept',
    duration: 15,
    xpReward: 135,
    content: {
      overview: 'Understand how Bitcoin mining secures the network, validates transactions, and creates new bitcoins through computational work.',
      mainContent: `
## What is Bitcoin Mining?

Mining is the process by which:
1. New transactions are validated
2. New blocks are added to the blockchain
3. New bitcoins are created and distributed

It's called "mining" because it resembles gold mining—expending resources to extract something valuable.

### The Mining Process

\`\`\`
1. Collect pending transactions from mempool
2. Arrange into a candidate block
3. Construct block header with:
   - Previous block hash
   - Merkle root of transactions
   - Timestamp
   - Target difficulty
   - Nonce (starts at 0)
4. Hash the header
5. If hash < target, block is valid!
   If hash >= target, increment nonce, repeat
6. Broadcast winning block to network
7. Receive block reward + fees
\`\`\`

### The Difficulty Adjustment

Bitcoin automatically adjusts mining difficulty every **2,016 blocks** (~2 weeks):

- If blocks came too fast: difficulty increases
- If blocks came too slow: difficulty decreases
- Target: one block every 10 minutes on average

This maintains consistent block production regardless of total hash power.

### Mining Hardware Evolution

| Era | Hardware | Hash Rate | Efficiency |
|-----|----------|-----------|------------|
| 2009 | CPU | MH/s | Poor |
| 2010 | GPU | 100s MH/s | Better |
| 2011 | FPGA | GH/s | Good |
| 2013+ | ASIC | TH/s to PH/s | Excellent |

Modern ASICs are **billions of times** more efficient than original CPU mining.

### Mining Economics

**Revenue:**
- Block subsidy (currently 3.125 BTC per block)
- Transaction fees

**Costs:**
- Hardware (ASICs: $2,000-$15,000+)
- Electricity (dominant ongoing cost)
- Cooling and facilities
- Internet connectivity

Profitable mining requires cheap electricity (<$0.05/kWh) and efficient hardware.

### Mining Pools

Solo mining is nearly impossible today due to difficulty. **Mining pools** combine hash power:

1. Pool finds blocks more frequently
2. Rewards distributed proportionally to contributed hash power
3. Smaller, more consistent payouts
4. Top pools: Foundry USA, AntPool, F2Pool

### Energy Debate

Bitcoin mining consumes ~150 TWh annually (comparable to some countries). Perspectives:

**Critics say:** Wasteful energy use, environmental damage
**Proponents say:**
- Incentivizes renewable energy development
- More efficient than traditional banking
- Energy use reflects security provided
- ~60% renewable energy usage
      `,
      keyTakeaway: 'Bitcoin mining converts electricity into security through Proof of Work, creating an economic game where rational miners are incentivized to honestly validate transactions rather than attack the network.',
      actionItem: 'Use an online Bitcoin mining calculator to determine the profitability of mining with current hardware, electricity costs, and Bitcoin price. Understand why mining has become industrialized.'
    }
  },
  {
    id: 'block-exp-008',
    title: 'Bitcoin Halving and Supply Economics',
    type: 'concept',
    duration: 12,
    xpReward: 120,
    content: {
      overview: 'Learn about Bitcoin\'s fixed supply schedule, the halving mechanism, and how these create a deflationary monetary policy.',
      mainContent: `
## Bitcoin's Monetary Policy

Unlike fiat currencies where central banks can print unlimited money, Bitcoin has a **fixed supply** of 21 million coins, enforced by code.

### The Halving Mechanism

Every **210,000 blocks** (~4 years), the block reward is cut in half:

| Halving | Date | Block Reward | Total Mined |
|---------|------|--------------|-------------|
| 0 | Jan 2009 | 50 BTC | 0% |
| 1 | Nov 2012 | 25 BTC | 50% |
| 2 | Jul 2016 | 12.5 BTC | 75% |
| 3 | May 2020 | 6.25 BTC | 87.5% |
| 4 | Apr 2024 | 3.125 BTC | 93.75% |
| 5 | ~2028 | 1.5625 BTC | 96.875% |

The last bitcoin will be mined around **2140**.

### Supply Schedule Visualization

\`\`\`
Total Supply: 21,000,000 BTC
              ████████████████████░░░░░░░░░░░░░░░░░░░░
Currently:    ~19,600,000 BTC mined (93%+)

              |         |         |         |         |
             2009      2024      2028      2032      2140
\`\`\`

### Stock-to-Flow Model

Bitcoin's scarcity can be measured by **stock-to-flow ratio**:

\`\`\`
S2F = Existing Supply / Annual Production
\`\`\`

After the 2024 halving:
- Gold S2F: ~62
- Bitcoin S2F: ~120

This makes Bitcoin the **hardest money ever created** by this metric.

### Price Impact of Halvings

Historically, halvings have preceded major bull runs:

- **2012 halving**: Price went from ~$12 to ~$1,100 (2013)
- **2016 halving**: Price went from ~$650 to ~$20,000 (2017)
- **2020 halving**: Price went from ~$9,000 to ~$69,000 (2021)

The theory: reduced new supply + constant/increasing demand = price appreciation.

### Deflation vs. Inflation

**Fiat (Inflationary):**
- Supply increases over time
- Purchasing power decreases
- Encourages spending

**Bitcoin (Deflationary):**
- Supply approaches fixed limit
- Purchasing power may increase
- Encourages saving/holding

### After All Bitcoin is Mined

When block rewards reach zero:
- Miners earn only transaction fees
- Security relies on fee market
- Bitcoin must have enough transaction value to sustain mining

This transition will occur gradually over 100+ years.
      `,
      keyTakeaway: 'Bitcoin\'s halving mechanism creates predictable scarcity by reducing new supply every four years, making it the first truly scarce digital asset with a fixed maximum supply of 21 million.',
      actionItem: 'Calculate the current Bitcoin inflation rate and compare it to major fiat currencies. Project how Bitcoin\'s inflation rate will change after the next two halvings.'
    }
  },
  {
    id: 'block-exp-009',
    title: 'Bitcoin as Store of Value',
    type: 'concept',
    duration: 14,
    xpReward: 125,
    content: {
      overview: 'Analyze Bitcoin\'s properties as a store of value compared to traditional assets like gold, real estate, and fiat currencies.',
      mainContent: `
## What Makes a Good Store of Value?

A store of value preserves purchasing power over time. Key properties include:

- **Scarcity**: Limited supply
- **Durability**: Doesn't degrade
- **Portability**: Easy to transport
- **Divisibility**: Can be split into smaller units
- **Verifiability**: Easy to authenticate
- **Fungibility**: Units are interchangeable

### Bitcoin vs. Traditional Stores of Value

| Property | Bitcoin | Gold | Real Estate | Fiat |
|----------|---------|------|-------------|------|
| Scarcity | Fixed 21M | Limited mining | Location-dependent | Unlimited |
| Durability | Infinite (digital) | Excellent | Good | Paper degrades |
| Portability | Instant global | Heavy/regulated | Immovable | Good |
| Divisibility | 100M satoshis/BTC | Difficult | Very difficult | Good |
| Verifiability | Instant, free | Requires testing | Complex legal | Moderate |
| Confiscation resistance | Very high | Moderate | Very low | Low |

### The Digital Gold Thesis

Bitcoin is often called "digital gold" because it shares gold's monetary properties while being superior in several aspects:

**Bitcoin Advantages:**
- Truly scarce (gold supply grows ~1.5%/year)
- Instantly transferable globally
- Easily divisible to 8 decimal places
- Verifiable without trusted third party
- Cannot be counterfeited

**Gold Advantages:**
- 5,000+ years of history
- Physical, tangible asset
- No technology dependence
- Universally recognized

### Volatility Concerns

Critics argue Bitcoin's volatility disqualifies it as a store of value:

**Counter-arguments:**
- Volatility decreases as market matures
- Long-term holders (4+ years) have never lost money historically
- Volatility reflects price discovery in emerging asset class
- Gold was also volatile when first monetized

### Adoption Curve

\`\`\`
Adoption Phase:        [Innovators][Early Adopters][Early Majority]...
                             ↑
                       We are here (~3-5% global adoption)
\`\`\`

### Institutional Adoption

Major institutions now hold Bitcoin:
- MicroStrategy: 200,000+ BTC
- Tesla: Significant holdings
- Bitcoin ETFs: Billions in AUM
- Nation states: El Salvador, Central African Republic

### Risk Factors

- Regulatory crackdowns
- Technical failures
- Quantum computing threats
- Competition from other cryptocurrencies
- Environmental concerns affecting adoption
      `,
      keyTakeaway: 'Bitcoin\'s fixed supply, portability, divisibility, and verifiability make it a compelling digital store of value, though volatility and adoption risks remain as it matures.',
      actionItem: 'Compare the 10-year performance of Bitcoin against gold, the S&P 500, and real estate in your region. Consider both returns and volatility.'
    }
  },
  {
    id: 'block-exp-010',
    title: 'Bitcoin Transactions and UTXO Model',
    type: 'concept',
    duration: 13,
    xpReward: 130,
    content: {
      overview: 'Understand how Bitcoin transactions work under the hood, including the UTXO model, transaction fees, and confirmation times.',
      mainContent: `
## The UTXO Model

Bitcoin doesn't use account balances like a bank. Instead, it uses **Unspent Transaction Outputs (UTXOs)**.

### How UTXOs Work

Think of UTXOs as individual "bills" of varying denominations:

\`\`\`
Your "wallet" contains:
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ UTXO #1     │ │ UTXO #2     │ │ UTXO #3     │
│ 0.5 BTC     │ │ 0.3 BTC     │ │ 0.15 BTC    │
│ From: TxA   │ │ From: TxB   │ │ From: TxC   │
└─────────────┘ └─────────────┘ └─────────────┘

Total Balance: 0.95 BTC (sum of UTXOs)
\`\`\`

### Transaction Structure

When you send Bitcoin:

\`\`\`
INPUTS (UTXOs being spent)     OUTPUTS (New UTXOs created)
┌──────────────────────┐       ┌──────────────────────┐
│ UTXO #1: 0.5 BTC     │       │ To Alice: 0.6 BTC    │
│ UTXO #2: 0.3 BTC     │  ───► │ Change to me: 0.19 BTC│
│ Total: 0.8 BTC       │       │ Fee: 0.01 BTC        │
└──────────────────────┘       └──────────────────────┘
\`\`\`

The **transaction fee** is the difference between inputs and outputs.

### Transaction Lifecycle

1. **Creation**: Wallet builds transaction
2. **Signing**: Private key creates digital signature
3. **Broadcasting**: Sent to network nodes
4. **Mempool**: Waits in pending transaction pool
5. **Mining**: Included in a block
6. **Confirmation**: Block added to chain
7. **Finality**: More blocks built on top (6 confirmations standard)

### Transaction Fees

Fees are paid to miners and measured in **satoshis per byte (sat/vB)**:

| Fee Level | sat/vB | Typical Wait |
|-----------|--------|--------------|
| High | 50+ | Next block (~10 min) |
| Medium | 20-50 | 1-3 blocks |
| Low | 5-20 | Hours to days |
| Very Low | <5 | May never confirm |

Fees increase during high network congestion.

### Confirmation Times

- **0 confirmations**: Transaction broadcast but not in block (risky)
- **1 confirmation**: Included in one block
- **3 confirmations**: Generally safe for medium amounts
- **6 confirmations**: Gold standard for large amounts

### Replace-by-Fee (RBF)

If your transaction is stuck, RBF allows you to rebroadcast with a higher fee. The higher-fee version replaces the original in miners' mempools.

### Privacy Considerations

UTXO management affects privacy:
- Address reuse reduces privacy
- UTXO consolidation can link addresses
- CoinJoin mixes UTXOs for anonymity
      `,
      keyTakeaway: 'Bitcoin uses the UTXO model where transactions consume existing outputs and create new ones, with fees incentivizing miners to prioritize transactions.',
      actionItem: 'Use a Bitcoin block explorer to examine a recent transaction. Identify the inputs (UTXOs consumed), outputs (new UTXOs), and calculate the transaction fee.'
    }
  },

  // SECTION 3: Ethereum & Smart Contracts (Lessons 11-16)
  {
    id: 'block-exp-011',
    title: 'Ethereum: The World Computer',
    type: 'concept',
    duration: 14,
    xpReward: 125,
    content: {
      overview: 'Discover how Ethereum expanded blockchain beyond simple transactions to enable programmable money and decentralized applications.',
      mainContent: `
## From Digital Cash to Programmable Money

While Bitcoin proved decentralized digital currency was possible, **Vitalik Buterin** envisioned something broader: a blockchain that could run any program.

### Ethereum's Origin

- **2013**: Vitalik (19 years old) publishes Ethereum whitepaper
- **2014**: Crowdfunding raises ~$18 million
- **2015**: Ethereum mainnet launches
- **2022**: Transition from Proof of Work to Proof of Stake ("The Merge")

### Bitcoin vs. Ethereum Philosophy

| Aspect | Bitcoin | Ethereum |
|--------|---------|----------|
| Purpose | Digital gold, store of value | World computer, smart contracts |
| Scripting | Limited, intentionally restricted | Turing-complete |
| Block time | ~10 minutes | ~12 seconds |
| Supply | Fixed 21 million | No hard cap (with burning mechanism) |
| Consensus | Proof of Work | Proof of Stake |

### The Ethereum Virtual Machine (EVM)

The EVM is a **global, decentralized computer**:

\`\`\`
┌─────────────────────────────────────────────┐
│              ETHEREUM NETWORK               │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐     │
│  │ Node 1  │  │ Node 2  │  │ Node 3  │ ... │
│  │  [EVM]  │  │  [EVM]  │  │  [EVM]  │     │
│  └─────────┘  └─────────┘  └─────────┘     │
│         Every node runs same code           │
│         Reaches same result                 │
└─────────────────────────────────────────────┘
\`\`\`

Key properties:
- **Deterministic**: Same input always produces same output
- **Isolated**: Smart contracts can't access external data directly
- **Sandboxed**: Bugs in one contract don't crash others

### Accounts in Ethereum

Unlike Bitcoin's UTXO model, Ethereum uses **accounts**:

**Externally Owned Accounts (EOAs):**
- Controlled by private keys
- Can initiate transactions
- No code associated

**Contract Accounts:**
- Controlled by code (smart contracts)
- Cannot initiate transactions
- Contain executable code and storage

### Ether (ETH)

ETH serves multiple purposes:
1. **Value transfer**: Like Bitcoin
2. **Gas payment**: Fuel for computation
3. **Staking**: Security for PoS consensus
4. **Collateral**: DeFi applications

### The Ethereum Ecosystem

Ethereum hosts thousands of applications:
- **DeFi**: Uniswap, Aave, Compound
- **NFTs**: OpenSea, Art Blocks
- **DAOs**: MakerDAO, Uniswap governance
- **Identity**: ENS (Ethereum Name Service)
- **Gaming**: Axie Infinity, Decentraland
      `,
      keyTakeaway: 'Ethereum extends blockchain from simple value transfer to a global, programmable computer where anyone can deploy applications that run exactly as coded without intermediaries.',
      actionItem: 'Create an Ethereum wallet and explore a block explorer like Etherscan. Examine a smart contract transaction and identify the contract address, function called, and gas used.'
    }
  },
  {
    id: 'block-exp-012',
    title: 'Understanding Smart Contracts',
    type: 'concept',
    duration: 15,
    xpReward: 140,
    content: {
      overview: 'Learn what smart contracts are, how they automate agreements, and why they\'re called "unstoppable code."',
      mainContent: `
## What Are Smart Contracts?

**Smart contracts** are self-executing programs stored on a blockchain that automatically enforce the terms of an agreement.

The term was coined by **Nick Szabo** in 1994:

> "A smart contract is a computerized transaction protocol that executes the terms of a contract."

### Real-World Analogy: The Vending Machine

A vending machine is a primitive smart contract:

\`\`\`
IF (correct payment inserted)
    AND (item selected)
    AND (item in stock)
THEN
    dispense item
    return change
\`\`\`

No human intermediary needed—the machine enforces the rules.

### Smart Contract vs. Traditional Contract

| Aspect | Traditional Contract | Smart Contract |
|--------|---------------------|----------------|
| Enforcement | Courts, lawyers | Code execution |
| Speed | Days to years | Seconds |
| Cost | High legal fees | Gas fees only |
| Trust | Required in parties | Code is law |
| Modification | By agreement | Immutable (usually) |

### How Smart Contracts Work

\`\`\`
1. Developer writes contract code
2. Code deployed to blockchain
3. Contract gets unique address
4. Users interact by sending transactions
5. EVM executes code deterministically
6. State changes recorded on blockchain
\`\`\`

### Example: Simple Escrow

\`\`\`solidity
contract SimpleEscrow {
    address buyer;
    address seller;
    uint amount;
    bool buyerApproved;
    bool sellerDelivered;

    function deposit() external payable {
        // Buyer deposits funds
    }

    function confirmDelivery() external {
        // Buyer confirms goods received
        // Funds automatically released to seller
    }

    function refund() external {
        // If conditions met, buyer gets refund
    }
}
\`\`\`

### Key Properties

**Immutable**: Once deployed, code cannot be changed (unless designed with upgrade mechanisms)

**Transparent**: Anyone can read the code and verify behavior

**Trustless**: No need to trust counterparties—only trust the code

**Composable**: Contracts can interact with other contracts ("money legos")

### Limitations

- **Garbage in, garbage out**: Contracts only know blockchain data
- **Oracles required**: External data needs trusted sources
- **Bugs are permanent**: The DAO hack lost $60M due to code vulnerability
- **Gas costs**: Complex operations become expensive
- **No privacy**: All data is public by default

### Common Use Cases

- **DeFi**: Lending, trading, derivatives
- **NFTs**: Ownership and transfers
- **DAOs**: Governance voting
- **Gaming**: In-game assets and rules
- **Supply chain**: Tracking and verification
      `,
      keyTakeaway: 'Smart contracts are immutable, self-executing programs that automatically enforce agreements without intermediaries, enabling trustless transactions but requiring careful auditing since bugs cannot be easily fixed.',
      actionItem: 'Visit Etherscan and find a verified smart contract. Read through its code (even if you don\'t fully understand it) and identify the main functions and what they do.'
    }
  },
  {
    id: 'block-exp-013',
    title: 'Solidity Programming Basics',
    type: 'concept',
    duration: 15,
    xpReward: 145,
    content: {
      overview: 'Get introduced to Solidity, the primary programming language for Ethereum smart contracts, and understand its core concepts.',
      mainContent: `
## What is Solidity?

**Solidity** is a statically-typed, object-oriented programming language designed specifically for writing smart contracts on Ethereum and EVM-compatible blockchains.

### Basic Structure

\`\`\`solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract MyFirstContract {
    // State variables
    uint256 public storedNumber;
    address public owner;

    // Constructor - runs once at deployment
    constructor() {
        owner = msg.sender;
    }

    // Functions
    function setNumber(uint256 _number) public {
        storedNumber = _number;
    }

    function getNumber() public view returns (uint256) {
        return storedNumber;
    }
}
\`\`\`

### Data Types

**Value Types:**
- \`uint\` / \`int\`: Unsigned/signed integers (uint256, uint8, etc.)
- \`bool\`: true or false
- \`address\`: 20-byte Ethereum address
- \`bytes\`: Fixed-size byte arrays

**Reference Types:**
- \`string\`: Dynamic character array
- \`array\`: Fixed or dynamic arrays
- \`mapping\`: Key-value hash tables
- \`struct\`: Custom data structures

### Visibility Modifiers

| Modifier | Access |
|----------|--------|
| \`public\` | Anyone can call |
| \`private\` | Only this contract |
| \`internal\` | This contract + derived |
| \`external\` | Only from outside |

### Function Modifiers

\`\`\`solidity
modifier onlyOwner() {
    require(msg.sender == owner, "Not owner");
    _;  // Continue with function
}

function sensitiveAction() public onlyOwner {
    // Only owner can execute
}
\`\`\`

### Important Global Variables

- \`msg.sender\`: Address calling the function
- \`msg.value\`: ETH sent with the call (in wei)
- \`block.timestamp\`: Current block's timestamp
- \`block.number\`: Current block number
- \`address(this).balance\`: Contract's ETH balance

### Events

\`\`\`solidity
event Transfer(address indexed from, address indexed to, uint256 amount);

function transfer(address to, uint256 amount) public {
    // ... transfer logic ...
    emit Transfer(msg.sender, to, amount);
}
\`\`\`

Events are:
- Logged on blockchain (cheaper than storage)
- Indexed for efficient searching
- Used by frontends to track activity

### Error Handling

\`\`\`solidity
require(condition, "Error message");  // Revert if false
assert(condition);                     // For internal errors
revert("Error message");               // Explicit revert
\`\`\`

### Security Considerations

- **Reentrancy**: Check-Effects-Interactions pattern
- **Integer overflow**: Use Solidity 0.8+ or SafeMath
- **Access control**: Validate msg.sender
- **Front-running**: Be aware of mempool visibility
      `,
      keyTakeaway: 'Solidity enables developers to write smart contracts using familiar programming concepts while providing blockchain-specific features like built-in cryptocurrency handling and permanent storage.',
      actionItem: 'Use Remix IDE (remix.ethereum.org) to write and deploy a simple contract that stores and retrieves a message. Deploy it to a testnet using test ETH.'
    }
  },
  {
    id: 'block-exp-014',
    title: 'Gas: The Fuel of Ethereum',
    type: 'concept',
    duration: 12,
    xpReward: 115,
    content: {
      overview: 'Understand how Ethereum\'s gas mechanism works, why it exists, and how to optimize transactions for cost efficiency.',
      mainContent: `
## What is Gas?

**Gas** is a unit measuring the computational effort required to execute operations on Ethereum. It's the "fuel" that powers the network.

### Why Gas Exists

Gas serves critical purposes:

1. **Prevents infinite loops**: Transactions have limited computation
2. **Spam prevention**: Makes attacks expensive
3. **Resource allocation**: Prioritizes transactions fairly
4. **Miner compensation**: Rewards nodes for computation

### Gas Mechanics

\`\`\`
Transaction Cost = Gas Used × Gas Price

Example:
- Simple ETH transfer: 21,000 gas
- Gas price: 30 gwei (0.00000003 ETH)
- Cost: 21,000 × 0.00000003 = 0.00063 ETH
\`\`\`

### Gas Terminology

| Term | Definition |
|------|------------|
| **Gas Limit** | Maximum gas you're willing to use |
| **Gas Used** | Actual gas consumed |
| **Gas Price** | Price per gas unit (in gwei) |
| **Base Fee** | Minimum price set by protocol |
| **Priority Fee (Tip)** | Extra paid to validators |

### EIP-1559: Fee Market Change

Since the London upgrade (2021):

\`\`\`
Total Fee = (Base Fee + Priority Fee) × Gas Used

- Base Fee: Burned (removed from circulation)
- Priority Fee: Goes to validator
\`\`\`

This creates ETH **deflation** during high activity.

### Gas Costs by Operation

| Operation | Gas Cost |
|-----------|----------|
| ETH transfer | 21,000 |
| ERC-20 transfer | ~65,000 |
| Uniswap swap | ~150,000 |
| NFT mint | ~100,000+ |
| Contract deployment | 500,000+ |

### Optimization Strategies

**For Users:**
- Transact during low-activity periods (weekends, early morning)
- Use gas trackers to find optimal times
- Set appropriate gas limits (not too high)

**For Developers:**
- Use \`uint256\` instead of smaller uints (packed storage exception)
- Cache storage reads in memory
- Use events instead of storage where possible
- Batch operations when feasible

### Layer 2 Solutions

Gas costs on mainnet have driven adoption of Layer 2s:

| Solution | Gas Savings | Type |
|----------|-------------|------|
| Arbitrum | ~10-50x | Optimistic Rollup |
| Optimism | ~10-50x | Optimistic Rollup |
| zkSync | ~10-100x | ZK Rollup |
| Polygon | ~100-1000x | Sidechain/Validium |

### Gas Tracking Tools

- **ETH Gas Station**
- **Etherscan Gas Tracker**
- **Blocknative Gas Estimator**
      `,
      keyTakeaway: 'Gas is Ethereum\'s mechanism for measuring and pricing computation, preventing spam while compensating validators—optimization and timing can significantly reduce transaction costs.',
      actionItem: 'Monitor Ethereum gas prices over a week using a gas tracker. Identify patterns in when gas is cheapest and most expensive.'
    }
  },
  {
    id: 'block-exp-015',
    title: 'ERC Token Standards',
    type: 'concept',
    duration: 13,
    xpReward: 120,
    content: {
      overview: 'Learn about Ethereum\'s token standards (ERC-20, ERC-721, ERC-1155) and how they enable interoperability across the ecosystem.',
      mainContent: `
## What Are ERC Standards?

**ERC** (Ethereum Request for Comments) standards define common interfaces for smart contracts, enabling interoperability across the ecosystem.

### Why Standards Matter

Without standards:
- Every token would need custom integration
- Wallets couldn't display arbitrary tokens
- DEXs couldn't list new tokens easily
- Composability would be impossible

### ERC-20: Fungible Tokens

The most widely adopted standard for currencies and utility tokens.

\`\`\`solidity
interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
}
\`\`\`

**Use cases:** USDC, USDT, LINK, UNI, most DeFi tokens

### ERC-721: Non-Fungible Tokens (NFTs)

Each token is unique and distinguishable.

\`\`\`solidity
interface IERC721 {
    function balanceOf(address owner) external view returns (uint256);
    function ownerOf(uint256 tokenId) external view returns (address);
    function safeTransferFrom(address from, address to, uint256 tokenId) external;
    function approve(address to, uint256 tokenId) external;
    function tokenURI(uint256 tokenId) external view returns (string memory);
}
\`\`\`

**Use cases:** Digital art, collectibles, gaming items, domain names

### ERC-1155: Multi-Token Standard

Combines fungible and non-fungible in one contract.

**Advantages:**
- Batch transfers (gas efficient)
- Single contract for multiple token types
- Ideal for gaming (items + currency)

**Use cases:** Gaming assets, ticketing systems, mixed collections

### Comparison Table

| Feature | ERC-20 | ERC-721 | ERC-1155 |
|---------|--------|---------|----------|
| Fungibility | Yes | No | Both |
| Batch Transfer | No | No | Yes |
| Metadata | Optional | Required | Optional |
| Gas Efficiency | Good | Moderate | Best |

### Other Important ERCs

- **ERC-777**: Advanced ERC-20 with hooks
- **ERC-4626**: Tokenized vault standard
- **ERC-2981**: NFT royalty standard
- **ERC-6551**: Token-bound accounts (NFTs that own assets)

### Token Metadata

NFTs typically store metadata off-chain:

\`\`\`json
{
    "name": "Bored Ape #1234",
    "description": "A unique digital collectible",
    "image": "ipfs://Qm...",
    "attributes": [
        {"trait_type": "Background", "value": "Blue"},
        {"trait_type": "Eyes", "value": "Laser"}
    ]
}
\`\`\`

**Storage options:**
- IPFS (decentralized, content-addressed)
- Arweave (permanent storage)
- Centralized servers (risky)
- On-chain (expensive but permanent)
      `,
      keyTakeaway: 'ERC standards like ERC-20, ERC-721, and ERC-1155 define common interfaces that enable tokens to work seamlessly across wallets, exchanges, and applications throughout the Ethereum ecosystem.',
      actionItem: 'Create a simple ERC-20 token on a testnet using OpenZeppelin\'s contracts. Observe how it automatically appears in wallets that support the standard.'
    }
  },
  {
    id: 'block-exp-016',
    title: 'Layer 2 Scaling Solutions',
    type: 'concept',
    duration: 14,
    xpReward: 130,
    content: {
      overview: 'Explore how Layer 2 solutions scale Ethereum by processing transactions off the main chain while maintaining security.',
      mainContent: `
## The Scaling Challenge

Ethereum mainnet can process ~15-30 transactions per second. During high demand:
- Gas fees spike (sometimes $100+ per transaction)
- Network becomes unusable for small transactions
- Users priced out of participation

### What Are Layer 2s?

**Layer 2 (L2)** solutions process transactions off the main Ethereum chain (Layer 1) while inheriting its security.

\`\`\`
┌────────────────────────────────────────┐
│            Layer 2 Solutions            │
│   ┌──────────┐  ┌──────────┐           │
│   │ Arbitrum │  │ Optimism │  ...      │
│   │ 1000 TPS │  │ 1000 TPS │           │
│   └────┬─────┘  └────┬─────┘           │
│        │             │                  │
│        └──────┬──────┘                  │
│               │ Batch proofs            │
│               ▼                         │
│   ┌─────────────────────────┐          │
│   │    Ethereum Mainnet     │          │
│   │    (Security Layer)     │          │
│   └─────────────────────────┘          │
└────────────────────────────────────────┘
\`\`\`

### Types of Layer 2 Solutions

#### Optimistic Rollups

**How they work:**
1. Transactions executed off-chain
2. Compressed data posted to L1
3. Assumed valid unless challenged
4. 7-day challenge period for withdrawals

**Examples:** Arbitrum, Optimism, Base

**Pros:** EVM compatible, lower fees
**Cons:** Long withdrawal times

#### ZK Rollups

**How they work:**
1. Transactions executed off-chain
2. Cryptographic proof (ZK-SNARK/STARK) proves validity
3. Proof verified on L1
4. Instant finality once verified

**Examples:** zkSync, StarkNet, Polygon zkEVM

**Pros:** Fast finality, strong security
**Cons:** Complex technology, some EVM limitations

### Comparison

| Feature | Optimistic | ZK Rollup |
|---------|------------|-----------|
| Withdrawal Time | ~7 days | Minutes |
| Computational Cost | Lower | Higher |
| EVM Compatibility | Excellent | Improving |
| Security Model | Fraud proofs | Validity proofs |
| Current Maturity | More mature | Rapidly developing |

### Bridging Assets

To use L2s, you must "bridge" assets:

\`\`\`
1. Lock ETH/tokens in L1 bridge contract
2. Equivalent assets minted on L2
3. Use assets freely on L2
4. To exit: burn on L2, unlock on L1
\`\`\`

**Bridge risks:**
- Smart contract vulnerabilities
- Centralization in some bridges
- Liquidity fragmentation

### The Future: Modular Blockchain

Ethereum is becoming a **modular blockchain**:
- **Execution**: Layer 2s (Arbitrum, zkSync)
- **Settlement**: Ethereum mainnet
- **Data Availability**: Danksharding, EIP-4844

This architecture enables massive scaling while maintaining decentralization.

### Choosing an L2

Consider:
- Ecosystem and dApps available
- Transaction costs
- Withdrawal times
- Security assumptions
- Development activity
      `,
      keyTakeaway: 'Layer 2 solutions scale Ethereum by batching transactions off-chain while inheriting mainnet security, with optimistic rollups using fraud proofs and ZK rollups using validity proofs.',
      actionItem: 'Bridge a small amount of ETH to Arbitrum or Optimism using their official bridge. Compare gas costs for a swap on L2 versus mainnet.'
    }
  },

  // SECTION 4: DeFi (Lessons 17-22)
  {
    id: 'block-exp-017',
    title: 'Introduction to Decentralized Finance',
    type: 'concept',
    duration: 13,
    xpReward: 120,
    content: {
      overview: 'Understand what DeFi is, how it differs from traditional finance, and why it represents a fundamental shift in financial services.',
      mainContent: `
## What is DeFi?

**Decentralized Finance (DeFi)** is a movement to recreate traditional financial services using blockchain and smart contracts, removing intermediaries like banks and brokers.

### Traditional Finance vs. DeFi

| Aspect | Traditional Finance | DeFi |
|--------|-------------------|------|
| Access | Requires bank account, ID | Just need a wallet |
| Hours | Business hours, weekdays | 24/7/365 |
| Speed | Days for settlement | Minutes to seconds |
| Transparency | Opaque | Fully auditable |
| Control | Custodial | Non-custodial |
| Permission | Required | Permissionless |

### The DeFi Stack

\`\`\`
┌─────────────────────────────────────────┐
│     AGGREGATORS & INTERFACES            │
│     (1inch, Zapper, DeBank)             │
├─────────────────────────────────────────┤
│     APPLICATIONS                        │
│     (Uniswap, Aave, Compound, Curve)    │
├─────────────────────────────────────────┤
│     ASSETS                              │
│     (ETH, USDC, WBTC, Governance Tokens)│
├─────────────────────────────────────────┤
│     SETTLEMENT LAYER                    │
│     (Ethereum, Layer 2s)                │
└─────────────────────────────────────────┘
\`\`\`

### Key DeFi Primitives

**Lending/Borrowing:** Supply assets to earn interest, borrow against collateral (Aave, Compound)

**Trading:** Swap tokens without orderbooks using AMMs (Uniswap, Curve)

**Derivatives:** Synthetic assets, options, perpetuals (Synthetix, dYdX)

**Insurance:** Coverage against smart contract failures (Nexus Mutual)

**Stablecoins:** Crypto-collateralized stable assets (DAI, FRAX)

### Total Value Locked (TVL)

TVL measures assets deposited in DeFi protocols:

- **Peak TVL (2021):** ~$180 billion
- **Current TVL:** Fluctuates with market conditions
- **Top protocols:** Lido, Aave, MakerDAO, Uniswap

### DeFi Composability

Smart contracts can interact, creating **"money legos"**:

\`\`\`
1. Deposit ETH into Lido → Receive stETH
2. Deposit stETH into Aave → Borrow USDC
3. Swap USDC for more ETH → Deposit into Lido
4. Repeat...
\`\`\`

This composability enables complex strategies impossible in traditional finance.

### Risks in DeFi

- **Smart contract bugs**: Code vulnerabilities
- **Economic attacks**: Flash loan exploits
- **Oracle manipulation**: Price feed attacks
- **Rug pulls**: Malicious developers
- **Impermanent loss**: AMM liquidity risk
- **Regulatory uncertainty**: Evolving regulations

### The Promise of DeFi

DeFi aims to create a financial system that is:
- **Open**: Anyone can participate
- **Transparent**: All code and transactions public
- **Interoperable**: Protocols work together
- **Self-custodial**: You control your assets
      `,
      keyTakeaway: 'DeFi uses smart contracts to recreate financial services without intermediaries, offering 24/7 permissionless access while introducing new risks from code vulnerabilities and economic attacks.',
      actionItem: 'Explore a DeFi dashboard like DeBank or Zapper to see the total value locked across protocols. Connect your wallet to view your potential DeFi positions.'
    }
  },
  {
    id: 'block-exp-018',
    title: 'Decentralized Exchanges and AMMs',
    type: 'concept',
    duration: 15,
    xpReward: 140,
    content: {
      overview: 'Learn how decentralized exchanges work, understand the Automated Market Maker model, and compare DEXs to traditional exchanges.',
      mainContent: `
## What is a DEX?

A **Decentralized Exchange (DEX)** enables peer-to-peer trading of cryptocurrencies without a central authority holding funds.

### CEX vs. DEX

| Feature | Centralized Exchange | DEX |
|---------|---------------------|-----|
| Custody | Exchange holds funds | You control funds |
| KYC | Required | Not required |
| Listings | Controlled by exchange | Permissionless |
| Trading hours | Usually 24/7 | Always 24/7 |
| Regulation | Heavy | Minimal |
| Hack risk | Exchange is target | Smart contract risk |

### How Traditional Exchanges Work

Order book model:
\`\`\`
Buy Orders          Sell Orders
$99.50 - 100 units  $100.50 - 50 units
$99.00 - 200 units  $101.00 - 150 units
$98.50 - 75 units   $101.50 - 200 units
\`\`\`

Buyers and sellers match orders. Requires liquidity and market makers.

### Automated Market Makers (AMMs)

AMMs revolutionized DEX trading by replacing order books with **liquidity pools**.

**The Constant Product Formula:**
\`\`\`
x * y = k

Where:
x = quantity of Token A in pool
y = quantity of Token B in pool
k = constant (liquidity)
\`\`\`

### How AMM Swaps Work

\`\`\`
Pool: 100 ETH × 200,000 USDC = 20,000,000 (k)

You want to buy ETH with 2,000 USDC:

Before: 100 ETH, 200,000 USDC
After:  100 ETH - ? ETH, 202,000 USDC

Solve: (100 - x) × 202,000 = 20,000,000
x ≈ 0.99 ETH

You receive ~0.99 ETH for 2,000 USDC
Price impact: ~1% slippage
\`\`\`

### Providing Liquidity

Anyone can become a **Liquidity Provider (LP)**:

1. Deposit equal value of both tokens
2. Receive LP tokens representing your share
3. Earn trading fees (typically 0.3%)
4. Withdraw anytime by burning LP tokens

### Impermanent Loss

The risk of LPing in volatile pairs:

\`\`\`
Initial deposit: 1 ETH ($2000) + 2000 USDC
If ETH price doubles to $4000:

Holding would be worth: $4000 + $2000 = $6000
LP position worth: ~$5,657 (after rebalancing)

Impermanent loss: ~5.7%
\`\`\`

Loss is "impermanent" because it reverses if prices return to original levels.

### Major DEX Protocols

| Protocol | Innovation | Chain |
|----------|------------|-------|
| Uniswap | Pioneered AMM | Ethereum, L2s |
| Curve | Optimized for stablecoins | Multi-chain |
| Balancer | Multi-token pools | Ethereum |
| SushiSwap | Community governance | Multi-chain |
| PancakeSwap | BSC ecosystem | BNB Chain |

### DEX Aggregators

**1inch**, **Paraswap**, and others route trades across multiple DEXs to find the best price.
      `,
      keyTakeaway: 'AMM-based DEXs enable permissionless trading through liquidity pools using mathematical formulas, creating a new paradigm for market-making but introducing risks like impermanent loss for providers.',
      actionItem: 'Perform a small swap on Uniswap. Before confirming, analyze the quoted price impact and compare the rate to a centralized exchange.'
    }
  },
  {
    id: 'block-exp-019',
    title: 'DeFi Lending and Borrowing',
    type: 'concept',
    duration: 14,
    xpReward: 130,
    content: {
      overview: 'Explore how decentralized lending protocols work, understand over-collateralization, and learn about liquidation mechanics.',
      mainContent: `
## Decentralized Lending

DeFi lending protocols enable users to:
- **Lend**: Deposit assets to earn interest
- **Borrow**: Take loans against collateral

All without credit checks, paperwork, or approval processes.

### How It Works

\`\`\`
┌─────────────────────────────────────────┐
│           LENDING PROTOCOL              │
│  ┌─────────┐         ┌─────────┐       │
│  │ Lenders │──────►  │ Pool    │       │
│  │ Deposit │   +     │         │       │
│  │ USDC    │ Interest │         │       │
│  └─────────┘         │         │       │
│                      │  USDC   │       │
│  ┌─────────┐         │  Pool   │       │
│  │Borrowers│◄────────│         │       │
│  │ Provide │  Loan   │         │       │
│  │  ETH    │ + Debt  │         │       │
│  │Collat.  │         └─────────┘       │
│  └─────────┘                           │
└─────────────────────────────────────────┘
\`\`\`

### Over-Collateralization

Unlike traditional loans, DeFi loans require **more collateral than borrowed**:

\`\`\`
Deposit: $1,500 worth of ETH
Maximum borrow: $1,000 USDC (66% LTV)
Collateral ratio: 150%
\`\`\`

This protects lenders since there's no credit scoring.

### Interest Rate Models

Rates are algorithmic, based on **utilization**:

\`\`\`
Utilization = Total Borrowed / Total Supplied

Low utilization (20%): ~2% APY borrow rate
High utilization (80%): ~15% APY borrow rate
Critical (95%+): Rates spike to encourage repayment
\`\`\`

### Liquidation Mechanics

If collateral value drops below threshold:

\`\`\`
Initial: Deposit 1 ETH ($2000), Borrow $1200 USDC
         Health Factor: 1.25 (150% collateral)

ETH drops to $1500:
         Health Factor: 0.94 (below 1 = liquidatable)

Liquidator:
1. Repays $600 of your debt
2. Receives $660 worth of your ETH (10% bonus)
3. You keep remaining collateral minus penalty
\`\`\`

### Major Lending Protocols

| Protocol | TVL | Specialty |
|----------|-----|-----------|
| Aave | $10B+ | Flash loans, multi-chain |
| Compound | $3B+ | cTokens, governance pioneer |
| MakerDAO | $8B+ | DAI stablecoin minting |
| Morpho | $2B+ | P2P matching optimization |

### Flash Loans

Unique to DeFi: borrow any amount with **zero collateral** if repaid in same transaction.

\`\`\`
Single Transaction:
1. Borrow $1M USDC (flash loan)
2. Exploit arbitrage opportunity
3. Repay $1M + 0.09% fee
4. Keep profit

If step 3 fails, entire transaction reverts.
\`\`\`

### Use Cases for Borrowing

- **Leverage**: Increase exposure without selling
- **Arbitrage**: Capital-efficient trading
- **Tax efficiency**: Borrow instead of selling (no taxable event)
- **Short selling**: Borrow asset, sell, repay later at lower price

### Risks

- **Liquidation**: Rapid price movements can liquidate positions
- **Smart contract risk**: Protocol vulnerabilities
- **Oracle manipulation**: Bad price data triggers false liquidations
- **Interest rate volatility**: Rates can spike during high utilization
      `,
      keyTakeaway: 'DeFi lending uses over-collateralization and algorithmic interest rates to enable permissionless borrowing, with liquidation mechanisms protecting lenders when collateral values decline.',
      actionItem: 'Use Aave\'s interface (without depositing) to explore interest rates across different assets. Note how supply and borrow rates differ and fluctuate.'
    }
  },
  {
    id: 'block-exp-020',
    title: 'Yield Farming Strategies',
    type: 'concept',
    duration: 14,
    xpReward: 135,
    content: {
      overview: 'Understand yield farming mechanics, common strategies, and how to evaluate opportunities while managing associated risks.',
      mainContent: `
## What is Yield Farming?

**Yield farming** is the practice of moving crypto assets between DeFi protocols to maximize returns. Farmers earn yields from:

- Trading fee shares
- Protocol token rewards
- Interest from lending
- Liquidity mining incentives

### The Yield Farming Boom

DeFi Summer 2020 ignited yield farming when Compound launched COMP token distribution:

\`\`\`
Supply USDC to Compound:
- Earn 3% interest on USDC
- Earn COMP tokens worth 50%+ APY
- Total: 53%+ APY
\`\`\`

Protocols competed with increasingly lucrative incentives.

### Common Yield Sources

#### 1. Liquidity Provision
\`\`\`
Provide ETH/USDC to Uniswap:
- Earn 0.3% of all trading fees
- APY depends on volume vs liquidity
- Risk: Impermanent loss
\`\`\`

#### 2. Lending
\`\`\`
Supply assets to Aave:
- Earn variable interest
- May receive additional incentive tokens
- Risk: Smart contract, utilization spikes
\`\`\`

#### 3. Staking
\`\`\`
Stake governance tokens:
- Earn protocol revenue share
- Example: Curve (veCRV) earns trading fees
- Risk: Lock-up periods, price volatility
\`\`\`

#### 4. Liquidity Mining
\`\`\`
Protocols distribute tokens to users:
- Incentivizes TVL growth
- Often highest initial APYs
- Risk: Token inflation, value decline
\`\`\`

### Compound Strategies

**Leveraged Yield Farming:**
\`\`\`
1. Deposit $1000 ETH to Aave
2. Borrow $700 USDC
3. Swap to ETH, deposit again
4. Repeat (looping)
5. Effective exposure: ~3x
\`\`\`

**Yield Aggregators:**
Protocols like Yearn automatically:
- Compound rewards
- Rebalance between pools
- Optimize gas costs
- Find highest yields

### Evaluating Yield Opportunities

| Factor | What to Check |
|--------|--------------|
| APY vs APR | Is yield compounded? |
| TVL | Too low = risky; too high = diluted |
| Token emissions | Sustainable vs inflationary |
| Audit status | Has code been reviewed? |
| Team reputation | Anonymous = higher risk |
| Lock-up periods | Can you exit anytime? |

### APY Calculation Warning

\`\`\`
Advertised: 1000% APY!

Reality:
- Based on last 24h, annualized
- Includes token rewards at current price
- Token price may (will?) decline
- APY = (1 + daily_rate)^365 - 1
\`\`\`

### Yield Farming Risks

**Impermanent Loss**: AMM rebalancing
**Smart Contract Risk**: Hacks and exploits
**Rug Pulls**: Malicious developers
**Token Devaluation**: Reward token crashes
**Gas Costs**: May eat into profits
**Regulatory Risk**: Uncertain legal status

### Sustainable Yield

Ask: "Where does yield come from?"

- **Trading fees**: Sustainable (real economic activity)
- **Lending interest**: Sustainable (borrowers pay)
- **Token emissions**: Usually unsustainable (inflation)
- **Ponzi mechanics**: Definitely unsustainable
      `,
      keyTakeaway: 'Yield farming involves strategically deploying assets across DeFi protocols to maximize returns, but high advertised APYs often come from unsustainable token emissions and carry significant risks.',
      actionItem: 'Research a yield farming opportunity on DefiLlama. Calculate the realistic net APY after considering token price decline, gas costs, and potential impermanent loss.'
    }
  },
  {
    id: 'block-exp-021',
    title: 'Stablecoins: Types and Mechanisms',
    type: 'concept',
    duration: 13,
    xpReward: 125,
    content: {
      overview: 'Learn about different stablecoin designs, their mechanisms for maintaining the peg, and the tradeoffs of each approach.',
      mainContent: `
## Why Stablecoins?

Cryptocurrencies are volatile, making them challenging for:
- Everyday transactions
- Pricing goods and services
- Long-term contracts
- Risk-averse users

**Stablecoins** solve this by pegging value to stable assets (usually USD).

### Types of Stablecoins

#### 1. Fiat-Collateralized

**Mechanism**: $1 in bank = 1 stablecoin minted

| Stablecoin | Issuer | Backing |
|------------|--------|---------|
| USDT | Tether | Cash, equivalents, loans |
| USDC | Circle | Cash, short-term Treasuries |
| BUSD | Paxos | Cash, Treasuries |

**Pros**: Simple, capital efficient (1:1)
**Cons**: Centralized, requires trust, can be frozen

#### 2. Crypto-Collateralized

**Mechanism**: Over-collateralized crypto locks mint stablecoins

**Example - DAI (MakerDAO):**
\`\`\`
Deposit $150 ETH as collateral
Mint up to $100 DAI
Collateral ratio: 150%

If ETH drops, must add collateral or face liquidation
\`\`\`

**Pros**: Decentralized, transparent, censorship-resistant
**Cons**: Capital inefficient, complex, liquidation risk

#### 3. Algorithmic Stablecoins

**Mechanism**: Use algorithms to control supply

\`\`\`
Price above $1: Mint more tokens (increase supply)
Price below $1: Buy and burn tokens (decrease supply)
\`\`\`

**Examples**: FRAX (partially algorithmic)

**Note**: Pure algorithmic stablecoins (like UST) have failed dramatically.

### The Terra/UST Collapse

May 2022: UST (algorithmic stablecoin) lost its peg:

\`\`\`
UST mechanism: Burn $1 LUNA → Mint 1 UST (and vice versa)

What happened:
1. Large UST sell-off
2. Price dropped below $1
3. Arbitrageurs minted LUNA
4. LUNA price crashed
5. Death spiral: more UST sold, more LUNA minted
6. $40B+ value destroyed
\`\`\`

### Stablecoin Trilemma

\`\`\`
        Decentralization
              ▲
             / \\
            /   \\
           /     \\
          /       \\
         ▼         ▼
Capital Efficiency ◄──► Stability
\`\`\`

**USDC**: Stable + Capital Efficient, but Centralized
**DAI**: Decentralized + Stable, but Capital Inefficient
**Algorithmic**: Decentralized + Capital Efficient, but Unstable

### Depeg Risks

Factors that can cause stablecoins to lose their peg:

| Type | Risk Factors |
|------|--------------|
| Fiat-backed | Bank issues, regulatory action, reserve quality |
| Crypto-backed | Collateral crash, liquidation cascade, oracle failure |
| Algorithmic | Confidence loss, reflexive death spirals |

### Regulatory Landscape

Stablecoins face increasing scrutiny:
- Bank-like regulation proposed
- Reserve transparency requirements
- Issuer licensing requirements
- Potential CBDC competition
      `,
      keyTakeaway: 'Stablecoins maintain price stability through different mechanisms—fiat-backed offers simplicity but centralization, crypto-backed offers decentralization but inefficiency, while algorithmic approaches remain risky.',
      actionItem: 'Compare the reserve compositions of USDC, USDT, and DAI. Analyze which offers the best transparency and what risks each reserve composition presents.'
    }
  },
  {
    id: 'block-exp-022',
    title: 'DeFi Security and Risk Management',
    type: 'concept',
    duration: 14,
    xpReward: 140,
    content: {
      overview: 'Learn to identify and mitigate risks in DeFi, from smart contract vulnerabilities to economic attacks and rug pulls.',
      mainContent: `
## The DeFi Risk Landscape

DeFi offers unprecedented opportunities but with significant risks. Understanding these is crucial for protecting your assets.

### Categories of DeFi Risk

\`\`\`
┌─────────────────────────────────────────┐
│           TECHNICAL RISKS               │
│  • Smart contract bugs                  │
│  • Oracle manipulation                  │
│  • Bridge vulnerabilities               │
├─────────────────────────────────────────┤
│           ECONOMIC RISKS                │
│  • Flash loan attacks                   │
│  • Impermanent loss                     │
│  • Liquidation cascades                 │
├─────────────────────────────────────────┤
│           SYSTEMIC RISKS                │
│  • Protocol dependency chains           │
│  • Stablecoin depegs                    │
│  • Market contagion                     │
├─────────────────────────────────────────┤
│           COUNTERPARTY RISKS            │
│  • Rug pulls                            │
│  • Governance attacks                   │
│  • Admin key compromises                │
└─────────────────────────────────────────┘
\`\`\`

### Major DeFi Exploits

| Year | Protocol | Amount Lost | Attack Type |
|------|----------|-------------|-------------|
| 2016 | The DAO | $60M | Reentrancy |
| 2021 | Poly Network | $610M | Key compromise |
| 2022 | Ronin Bridge | $620M | Validator keys |
| 2022 | Wormhole | $320M | Signature verification |
| 2023 | Euler Finance | $197M | Flash loan attack |

### Smart Contract Vulnerability Patterns

**Reentrancy:**
\`\`\`solidity
// Vulnerable code
function withdraw() public {
    uint amount = balances[msg.sender];
    msg.sender.call{value: amount}("");  // Attacker re-enters here
    balances[msg.sender] = 0;  // Too late!
}
\`\`\`

**Oracle Manipulation:**
\`\`\`
1. Flash borrow huge amount
2. Manipulate DEX price (affects oracle)
3. Use manipulated price to borrow more
4. Profit from price difference
5. Repay flash loan
\`\`\`

### Risk Assessment Checklist

Before using a protocol:

- [ ] **Audits**: Multiple reputable auditors?
- [ ] **Time**: How long has code been live?
- [ ] **TVL**: Enough value to attract scrutiny?
- [ ] **Team**: Known and reputable?
- [ ] **Code**: Open source and verified?
- [ ] **Admin keys**: Multisig or renounced?
- [ ] **Dependencies**: What other protocols does it rely on?
- [ ] **Insurance**: Covered by Nexus Mutual?

### Protection Strategies

**Diversification:**
- Don't put all funds in one protocol
- Use multiple chains
- Spread across strategy types

**Position Sizing:**
- Only risk what you can afford to lose
- Larger positions in battle-tested protocols
- Small allocations to new/experimental

**Monitoring:**
- Set up alerts for large transactions
- Watch for unusual activity
- Follow security researchers on Twitter

**Insurance:**
- Nexus Mutual covers smart contract failures
- Not all risks are insurable
- Evaluate cost vs. coverage

### Red Flags to Watch

- Anonymous team with large admin control
- Unaudited contracts
- Promises of unrealistic returns
- Forked code without modifications
- Concentrated token ownership
- Aggressive marketing, little substance
      `,
      keyTakeaway: 'DeFi security requires understanding technical, economic, and counterparty risks—proper due diligence, diversification, and conservative position sizing are essential for protecting assets.',
      actionItem: 'Research a recent DeFi exploit (post-mortem). Identify the vulnerability, how it was exploited, and what protective measures could have prevented user losses.'
    }
  },

  // SECTION 5: NFTs & Digital Assets (Lessons 23-26)
  {
    id: 'block-exp-023',
    title: 'NFT Fundamentals and Standards',
    type: 'concept',
    duration: 12,
    xpReward: 115,
    content: {
      overview: 'Understand what makes NFTs unique, the technical standards that power them, and how digital ownership works on the blockchain.',
      mainContent: `
## What Are NFTs?

**Non-Fungible Tokens (NFTs)** are unique digital assets verified on a blockchain. Unlike fungible tokens (where each unit is identical), each NFT has distinct properties.

### Fungible vs. Non-Fungible

\`\`\`
FUNGIBLE (Interchangeable):
$1 bill = Any other $1 bill
1 BTC = Any other 1 BTC

NON-FUNGIBLE (Unique):
Mona Lisa ≠ Any other painting
CryptoPunk #1 ≠ CryptoPunk #2
\`\`\`

### How NFTs Work

\`\`\`
┌─────────────────────────────────────────┐
│              SMART CONTRACT             │
│  ┌─────────────────────────────────┐   │
│  │ Token ID: 1234                   │   │
│  │ Owner: 0x742d...                 │   │
│  │ Token URI: ipfs://Qm...          │   │
│  └─────────────────────────────────┘   │
│                  │                      │
│                  ▼                      │
│  ┌─────────────────────────────────┐   │
│  │ METADATA (off-chain)             │   │
│  │ {                                │   │
│  │   "name": "Cool NFT #1234",      │   │
│  │   "image": "ipfs://...",         │   │
│  │   "attributes": [...]            │   │
│  │ }                                │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
\`\`\`

### ERC-721 Standard

The primary NFT standard on Ethereum:

**Core functions:**
- \`ownerOf(tokenId)\`: Who owns this token?
- \`transferFrom(from, to, tokenId)\`: Transfer ownership
- \`approve(to, tokenId)\`: Allow another address to transfer
- \`tokenURI(tokenId)\`: Get metadata location

### ERC-1155: Multi-Token Standard

More flexible standard supporting both NFTs and fungible tokens:

**Advantages:**
- Batch transfers (cheaper gas)
- Single contract for multiple collections
- Semi-fungible tokens (limited editions)

### Metadata and Storage

**Where NFT data lives:**

| Location | Pros | Cons |
|----------|------|------|
| On-chain | Permanent, trustless | Expensive, limited |
| IPFS | Decentralized, content-addressed | Needs pinning |
| Arweave | Permanent | Higher cost |
| Centralized server | Cheap, flexible | Can disappear |

### What NFTs Actually Prove

NFTs provide:
- ✅ Proof of ownership on blockchain
- ✅ Verifiable transaction history
- ✅ Creator authenticity (if minted by known address)

NFTs don't provide:
- ❌ Copyright ownership (unless explicitly granted)
- ❌ Prevention of copying the digital file
- ❌ Guaranteed value or liquidity

### Common NFT Properties

\`\`\`json
{
  "name": "Bored Ape #5678",
  "description": "A unique Bored Ape",
  "image": "ipfs://QmXYZ...",
  "attributes": [
    {"trait_type": "Background", "value": "Blue"},
    {"trait_type": "Fur", "value": "Golden"},
    {"trait_type": "Eyes", "value": "Laser", "rarity": 0.05}
  ]
}
\`\`\`

Traits create rarity tiers that affect value.
      `,
      keyTakeaway: 'NFTs are unique digital tokens that prove ownership on blockchain, using standards like ERC-721 and ERC-1155, with metadata typically stored off-chain via IPFS or similar systems.',
      actionItem: 'Explore a popular NFT collection on OpenSea. Examine the contract on Etherscan and trace the token URI to understand how metadata is stored and retrieved.'
    }
  },
  {
    id: 'block-exp-024',
    title: 'NFT Marketplaces and Trading',
    type: 'concept',
    duration: 13,
    xpReward: 120,
    content: {
      overview: 'Explore how NFT marketplaces operate, understand different trading mechanisms, and learn about fees, royalties, and market dynamics.',
      mainContent: `
## NFT Marketplace Landscape

NFT marketplaces facilitate buying, selling, and discovering digital assets. Each has distinct features and audiences.

### Major Marketplaces

| Platform | Focus | Fees | Chain |
|----------|-------|------|-------|
| OpenSea | General | 2.5% | Multi-chain |
| Blur | Trading/Pro | 0% | Ethereum |
| Magic Eden | Solana native | 2% | Multi-chain |
| Foundation | Curated art | 5% | Ethereum |
| SuperRare | Premium 1/1 art | 15% | Ethereum |
| LooksRare | Trading rewards | 2% | Ethereum |

### Trading Mechanisms

**Fixed Price Listing:**
\`\`\`
Seller sets price: 1 ETH
Buyer pays: 1 ETH + gas
Transaction executes immediately
\`\`\`

**Auction Types:**

*English Auction:*
- Start low, bids increase
- Highest bidder wins when auction ends

*Dutch Auction:*
- Start high, price decreases over time
- First buyer at any price wins

**Offer System:**
\`\`\`
Collection offers: "I'll buy any Punk for 50 ETH"
Item offers: "I'll buy Punk #1234 for 60 ETH"
Seller can accept or reject
\`\`\`

### Royalties and Creator Economics

NFTs can include automatic royalty payments:

\`\`\`
Primary Sale:
Artist mints NFT → Sells for 10 ETH → Artist gets 10 ETH

Secondary Sale (5% royalty):
Collector A sells to Collector B for 20 ETH
- Artist gets: 1 ETH (5%)
- Marketplace: 0.5 ETH (2.5%)
- Collector A: 18.5 ETH
\`\`\`

**Royalty Controversy:**
- Some marketplaces (Blur) made royalties optional
- Creators argue royalties fund ongoing work
- Traders prefer lower fees
- ERC-2981 provides on-chain royalty standard

### Fee Structure Comparison

\`\`\`
Sale Price: 1 ETH

OpenSea (with royalties):
- Platform fee: 0.025 ETH (2.5%)
- Creator royalty: 0.05 ETH (5%)
- Seller receives: 0.925 ETH

Blur (royalty optional):
- Platform fee: 0 ETH
- Creator royalty: 0 ETH (if skipped)
- Seller receives: 1 ETH
\`\`\`

### Market Dynamics

**Floor Price:** Lowest listing price in a collection

**Volume:** Total trading activity (indicates liquidity)

**Listing Ratio:** Percentage of collection listed for sale

**Wash Trading:** Artificially inflating volume/price by trading with yourself

### Trading Strategies

- **Floor sweeping**: Buying many items at floor price
- **Sniping**: Buying underpriced listings quickly
- **Trait hunting**: Finding rare traits below value
- **Bidding**: Making offers below floor for motivated sellers

### Safety Considerations

- Verify contract addresses (scam collections mimic popular ones)
- Check metadata/image integrity
- Use hardware wallets for valuable NFTs
- Be wary of DM offers and phishing links
- Understand gas costs before transacting
      `,
      keyTakeaway: 'NFT marketplaces offer various trading mechanisms from fixed listings to auctions, with fee structures and royalty enforcement varying significantly across platforms.',
      actionItem: 'Compare the same NFT collection on OpenSea and Blur. Note differences in floor price, listing fees, and royalty handling. Consider how these affect buyer and seller incentives.'
    }
  },
  {
    id: 'block-exp-025',
    title: 'NFT Use Cases Beyond Art',
    type: 'concept',
    duration: 14,
    xpReward: 130,
    content: {
      overview: 'Discover the expanding applications of NFT technology in gaming, ticketing, identity, real-world assets, and more.',
      mainContent: `
## NFTs: More Than JPEGs

While digital art popularized NFTs, the technology enables far broader applications wherever unique digital ownership matters.

### Gaming and Virtual Worlds

**Play-to-Earn (P2E):**
\`\`\`
Traditional Gaming:
- You play, company profits
- Items locked to one game
- Progress lost if game shuts down

NFT Gaming:
- Players own in-game assets
- Assets tradeable across platforms (theoretically)
- True ownership persists
\`\`\`

**Examples:**
- Axie Infinity: Battle creatures (Axies) you own
- The Sandbox: Own virtual land and creations
- Gods Unchained: Trading card game with real ownership

### Ticketing and Events

NFT tickets solve traditional ticketing problems:

| Problem | Traditional | NFT Solution |
|---------|------------|--------------|
| Counterfeiting | Difficult to verify | Blockchain verified |
| Scalping | Uncontrolled resale | Programmable royalties/limits |
| Post-event value | Worthless stub | Collectible/membership |
| Transferability | Often restricted | Controlled on-chain |

**Example: NBA tickets as NFTs provide:**
- Entry to game
- Post-event collectible
- Access to exclusive content
- Verified resale market

### Identity and Credentials

**ENS (Ethereum Name Service):**
\`\`\`
Instead of: 0x742d35Cc6634C0532925a3b844Bc454e4438f44e
Use: alice.eth

Also provides:
- Decentralized website hosting
- Social profile
- Receiving address for any token
\`\`\`

**Credentials:**
- Educational certificates
- Professional licenses
- Course completions
- Membership cards

### Membership and Access

**Token-gated experiences:**
\`\`\`
Hold Bored Ape NFT:
- Access exclusive Discord channels
- Invite to real-world events
- Airdrops and free mints
- Commercial usage rights
\`\`\`

### Real-World Asset (RWA) Tokenization

NFTs can represent physical assets:

**Real Estate:**
- Fractional property ownership
- Simplified transfers
- Global investment access

**Luxury Goods:**
- Authentication certificates
- Provenance tracking
- Watches, art, wine

**Intellectual Property:**
- Music royalty shares
- Patent licensing
- Content rights

### Supply Chain and Provenance

Tracking product journey from source to consumer:

\`\`\`
Coffee NFT Journey:
Farm → Processor → Shipper → Roaster → Retailer → Consumer

Each step recorded on-chain:
- Origin verification
- Fair trade certification
- Quality control records
- Carbon footprint data
\`\`\`

### Challenges for Adoption

- **Scalability**: Transaction costs still limit some use cases
- **UX**: Wallet management too complex for mainstream
- **Legal framework**: NFT ownership vs. legal rights unclear
- **Interoperability**: Cross-platform functionality limited
- **Sustainability**: Environmental concerns persist
      `,
      keyTakeaway: 'NFTs extend far beyond digital art to enable verifiable ownership in gaming, ticketing, identity, and real-world assets, though adoption challenges around UX and legal frameworks remain.',
      actionItem: 'Identify a business or industry you are familiar with and design a hypothetical NFT use case. Explain what problem it solves and what challenges implementation might face.'
    }
  },
  {
    id: 'block-exp-026',
    title: 'NFT Creation and Minting',
    type: 'concept',
    duration: 13,
    xpReward: 125,
    content: {
      overview: 'Learn the process of creating and minting NFTs, from artwork preparation to smart contract deployment and listing strategies.',
      mainContent: `
## Creating Your First NFT

Minting an NFT means creating it on the blockchain. This can range from simple no-code options to custom smart contract deployment.

### The Minting Process

\`\`\`
1. Create Digital Asset
   └── Art, music, video, document, etc.

2. Prepare Metadata
   └── Name, description, attributes, file

3. Upload to Storage
   └── IPFS, Arweave, or marketplace hosting

4. Mint NFT
   └── Create on-chain token pointing to metadata

5. List for Sale (optional)
   └── Set price or auction parameters
\`\`\`

### No-Code Minting Platforms

**OpenSea:**
1. Connect wallet
2. Click "Create"
3. Upload image and fill details
4. NFT created (lazy minting—gas paid by buyer)

**Manifold Studio:**
- Create your own smart contract
- More control and customization
- Separate contract per collection

**Zora:**
- Open editions and limited editions
- Creator-friendly economics
- Custom pricing curves

### Custom Smart Contract Approach

For serious creators:

\`\`\`solidity
// Simplified NFT contract
contract MyNFTCollection is ERC721 {
    uint256 public mintPrice = 0.08 ether;
    uint256 public maxSupply = 10000;
    uint256 public totalMinted;

    function mint(uint256 quantity) external payable {
        require(msg.value >= mintPrice * quantity, "Insufficient payment");
        require(totalMinted + quantity <= maxSupply, "Sold out");

        for (uint i = 0; i < quantity; i++) {
            _mint(msg.sender, totalMinted + i);
        }
        totalMinted += quantity;
    }
}
\`\`\`

### Metadata Preparation

Standard metadata format:

\`\`\`json
{
  "name": "My NFT #1",
  "description": "A description of this unique piece",
  "image": "ipfs://QmXYZ.../1.png",
  "external_url": "https://myproject.com/nft/1",
  "attributes": [
    {
      "trait_type": "Background",
      "value": "Blue"
    },
    {
      "trait_type": "Rarity Score",
      "value": 85,
      "display_type": "number"
    }
  ]
}
\`\`\`

### Storage Considerations

**IPFS (Recommended):**
- Content-addressed (URL based on content hash)
- Decentralized but needs pinning service
- Services: Pinata, NFT.Storage, Infura

**Arweave:**
- Permanent storage (pay once)
- Higher upfront cost
- True permanence guarantee

### Minting Costs

| Chain | Typical Mint Cost |
|-------|------------------|
| Ethereum | $5-50+ (varies with gas) |
| Polygon | <$0.01 |
| Solana | ~$0.01 |
| Arbitrum/Optimism | $0.10-1 |

### Launch Strategies

**Free mint:**
- Users pay only gas
- Attracts volume
- Risk: bots, low commitment

**Fixed price:**
- Set price per mint
- Predictable revenue
- Risk: may not sell out

**Dutch auction:**
- Start high, decrease over time
- Price discovery
- Reduces gas wars

**Allowlist (Whitelist):**
- Pre-approved wallets get priority
- Rewards community
- Reduces bot activity
      `,
      keyTakeaway: 'NFT minting ranges from simple no-code platforms to custom smart contracts, with key decisions around storage permanence, pricing strategy, and launch mechanics affecting project success.',
      actionItem: 'Mint a test NFT on a testnet using OpenSea\'s Goerli/Sepolia integration. Experience the full flow from creation to listing without spending real money.'
    }
  },

  // SECTION 6: Web3 Applications (Lessons 27-30)
  {
    id: 'block-exp-027',
    title: 'Decentralized Autonomous Organizations (DAOs)',
    type: 'concept',
    duration: 14,
    xpReward: 135,
    content: {
      overview: 'Understand how DAOs enable collective governance without traditional corporate structures, and explore different DAO models and tools.',
      mainContent: `
## What is a DAO?

A **Decentralized Autonomous Organization** is an organization represented by rules encoded in a smart contract, controlled by members rather than central leadership.

### Traditional Organization vs. DAO

| Aspect | Traditional Corp | DAO |
|--------|-----------------|-----|
| Structure | Hierarchical | Flat/distributed |
| Decision making | Board/executives | Token holder voting |
| Rules | Legal documents | Smart contracts |
| Transparency | Limited | Fully public |
| Participation | Shareholder limits | Open (buy tokens) |
| Execution | Human intermediaries | Automatic |

### How DAOs Work

\`\`\`
┌─────────────────────────────────────────┐
│                  DAO                     │
│  ┌─────────────────────────────────┐    │
│  │        GOVERNANCE TOKEN          │    │
│  │   Holders have voting power      │    │
│  └─────────────────────────────────┘    │
│                  │                       │
│                  ▼                       │
│  ┌─────────────────────────────────┐    │
│  │          PROPOSALS               │    │
│  │   Anyone can submit ideas        │    │
│  └─────────────────────────────────┘    │
│                  │                       │
│                  ▼                       │
│  ┌─────────────────────────────────┐    │
│  │           VOTING                 │    │
│  │   Token-weighted decisions       │    │
│  └─────────────────────────────────┘    │
│                  │                       │
│                  ▼                       │
│  ┌─────────────────────────────────┐    │
│  │         EXECUTION                │    │
│  │   Automatic via smart contract   │    │
│  └─────────────────────────────────┘    │
│                  │                       │
│                  ▼                       │
│  ┌─────────────────────────────────┐    │
│  │          TREASURY                │    │
│  │   Collectively managed funds     │    │
│  └─────────────────────────────────┘    │
└─────────────────────────────────────────┘
\`\`\`

### Types of DAOs

**Protocol DAOs:**
Govern DeFi protocols (Uniswap, Aave, Compound)
- Vote on parameters, upgrades, treasury allocation

**Investment DAOs:**
Pool capital for investments (The LAO, MetaCartel Ventures)
- Members vote on deals

**Collector DAOs:**
Acquire assets collectively (PleasrDAO, FlamingoDAO)
- Joint ownership of expensive NFTs/art

**Social DAOs:**
Community membership (Friends With Benefits)
- Access, networking, events

**Service DAOs:**
Provide services (RaidGuild, LexDAO)
- Freelancer collectives

### Governance Mechanisms

**Token Voting:**
- 1 token = 1 vote
- Simple but plutocratic (whales dominate)

**Quadratic Voting:**
- Cost increases quadratically with votes
- Reduces whale influence

**Conviction Voting:**
- Longer you stake position, more weight
- Reduces short-term manipulation

**Delegation:**
- Delegate votes to trusted representatives
- Increases participation via proxies

### DAO Tooling

| Tool | Purpose |
|------|---------|
| Snapshot | Off-chain voting (gas-free) |
| Tally | On-chain governance |
| Gnosis Safe | Multi-sig treasury |
| Coordinape | Contributor compensation |
| Collab.Land | Token-gated access |

### DAO Challenges

- **Voter apathy**: Low participation rates
- **Plutocracy**: Wealth concentration
- **Coordination**: Slow decision making
- **Legal ambiguity**: Unclear liability
- **Security**: Governance attacks possible
      `,
      keyTakeaway: 'DAOs enable collective governance through smart contracts and token-based voting, offering transparency and decentralization but facing challenges in participation, coordination, and legal recognition.',
      actionItem: 'Join a DAO\'s Discord or governance forum (like Uniswap or ENS). Follow a proposal through its lifecycle and observe how community discussion shapes outcomes.'
    }
  },
  {
    id: 'block-exp-028',
    title: 'Decentralized Identity and Reputation',
    type: 'concept',
    duration: 13,
    xpReward: 125,
    content: {
      overview: 'Explore how blockchain enables self-sovereign identity, verifiable credentials, and portable reputation systems.',
      mainContent: `
## The Identity Problem

Today's digital identity is fragmented and controlled by platforms:
- Separate logins for every service
- Platforms own your data and reputation
- No portability between systems
- Privacy requires trusting centralized parties

### Self-Sovereign Identity (SSI)

**Principles of SSI:**

1. **User Control**: You own and control your identity
2. **Portability**: Take identity anywhere
3. **Interoperability**: Works across platforms
4. **Consent**: You decide what to share
5. **Minimization**: Share only what's necessary

### Decentralized Identifiers (DIDs)

\`\`\`
Traditional identifier:
- Email: alice@company.com (company controls)
- Social: @alice (platform controls)

Decentralized identifier:
did:ethr:0x742d35Cc6634C0532925a3b844Bc454e4438f44e
- User controls through private key
- No central authority can revoke
\`\`\`

### Verifiable Credentials

Claims about identity that can be cryptographically verified:

\`\`\`json
{
  "@context": ["https://www.w3.org/2018/credentials/v1"],
  "type": ["VerifiableCredential", "UniversityDegree"],
  "issuer": "did:ethr:0xUniversity...",
  "issuanceDate": "2024-01-15",
  "credentialSubject": {
    "id": "did:ethr:0xAlice...",
    "degree": {
      "type": "BachelorDegree",
      "name": "Computer Science"
    }
  },
  "proof": { ... }
}
\`\`\`

### On-Chain Identity Solutions

**ENS (Ethereum Name Service):**
- Human-readable names (alice.eth)
- Attach social profiles, websites, addresses
- Primary identity layer for Ethereum

**Lens Protocol:**
- Decentralized social graph
- Own your followers and content
- Portable across applications

**Soulbound Tokens (SBTs):**
- Non-transferable NFTs
- Represent credentials, achievements
- Can't be bought, must be earned

### Reputation Systems

\`\`\`
Traditional Reputation:
- Uber rating (locked to Uber)
- eBay feedback (locked to eBay)
- LinkedIn endorsements (locked to LinkedIn)

Web3 Reputation:
- On-chain transaction history
- DAO participation records
- Verifiable credentials
- Portable across platforms
\`\`\`

### Privacy Considerations

**Zero-Knowledge Proofs enable:**
- Prove you're over 21 without revealing age
- Prove you have degree without showing transcript
- Prove citizenship without revealing identity

### Real-World Applications

| Use Case | Traditional | Web3 Solution |
|----------|------------|---------------|
| Login | Username/password | Wallet signature |
| Age verification | Show ID | ZK proof of age |
| Credit history | Credit bureaus | On-chain history |
| Professional certs | Paper diplomas | Verifiable credentials |
| Reputation | Platform-locked | Portable SBTs |

### Current Limitations

- **Recovery**: Lost keys = lost identity
- **Adoption**: Few services accept DIDs
- **Scalability**: On-chain storage expensive
- **Privacy**: Public transactions traceable
- **Legal recognition**: Not accepted officially
      `,
      keyTakeaway: 'Decentralized identity puts users in control of their digital identities through DIDs and verifiable credentials, enabling portable reputation while facing adoption and privacy challenges.',
      actionItem: 'Set up an ENS name and configure your profile with social links and avatar. Experience how this single identity can be used across Web3 applications.'
    }
  },
  {
    id: 'block-exp-029',
    title: 'Web3 Governance Models',
    type: 'concept',
    duration: 14,
    xpReward: 130,
    content: {
      overview: 'Compare different approaches to decentralized governance, from token voting to futarchy, and understand their tradeoffs.',
      mainContent: `
## Why Governance Matters

Decentralized protocols need mechanisms to:
- Upgrade and evolve
- Allocate treasury funds
- Set parameters (fees, rates)
- Respond to emergencies
- Coordinate stakeholders

Without proper governance, protocols stagnate or become vulnerable.

### Token-Based Governance

**Direct Token Voting:**
\`\`\`
1 token = 1 vote
Proposal passes if: votes_for > votes_against
                    AND quorum met (e.g., 4% of supply)
\`\`\`

**Pros:**
- Simple to understand
- Direct stakeholder control
- Aligned incentives (token holders want protocol success)

**Cons:**
- Plutocratic (whales dominate)
- Low participation
- Short-term thinking (sell after vote)

### Governance Improvements

**Quadratic Voting:**
\`\`\`
Cost of n votes = n² tokens

Example:
- 1 vote costs 1 token
- 2 votes cost 4 tokens
- 3 votes cost 9 tokens

Effect: Reduces whale dominance, amplifies broad support
\`\`\`

**Time-Weighted Voting:**
\`\`\`
Longer token lockup = more voting power

veCRV model:
- Lock CRV for 4 years = 1 veCRV per CRV
- Lock CRV for 1 year = 0.25 veCRV per CRV

Effect: Aligns with long-term interests
\`\`\`

**Delegation:**
\`\`\`
Alice delegates to Bob (governance expert)
Bob votes with Alice's tokens
Alice can revoke anytime

Effect: Increases effective participation
\`\`\`

### Alternative Models

**Optimistic Governance:**
\`\`\`
Proposals auto-execute unless challenged
Challenge requires stake
Dispute resolution if challenged

Effect: Faster execution, lower coordination cost
\`\`\`

**Futarchy:**
\`\`\`
"Vote on values, bet on beliefs"
1. Define success metric
2. Create prediction markets for each proposal
3. Implement proposal market predicts best outcome

Effect: Harnesses collective intelligence
\`\`\`

**Conviction Voting:**
\`\`\`
Support accumulates over time
Longer you stake support, more weight
Proposals pass when conviction threshold met

Effect: Reduces last-minute manipulation
\`\`\`

### Governance Attack Vectors

| Attack | Description | Mitigation |
|--------|-------------|------------|
| Flash loan voting | Borrow tokens, vote, return | Time-lock snapshots |
| Bribery | Pay voters for specific outcome | Hidden voting |
| Voter apathy | Malicious proposal passes due to low turnout | Quorum requirements |
| Governance takeover | Accumulate majority tokens | Decentralized distribution |

### Governance Frameworks

**Compound Governor:**
- Most widely forked
- Propose → Vote → Timelock → Execute
- Used by: Compound, Uniswap, many others

**OpenZeppelin Governor:**
- Modular, customizable
- Easy to extend
- Security-audited

### Measuring Governance Health

- **Voter participation rate**: Higher is better
- **Proposal activity**: Healthy discussion
- **Vote distribution**: Not concentrated
- **Delegation diversity**: Many active delegates
- **Time to decision**: Efficient but not rushed
      `,
      keyTakeaway: 'Effective Web3 governance requires balancing stakeholder alignment, participation, and security—with innovations like quadratic voting and delegation addressing limitations of simple token voting.',
      actionItem: 'Review the governance documentation of a major protocol (Uniswap, Aave, or ENS). Map out the proposal lifecycle and identify what safeguards prevent governance attacks.'
    }
  },
  {
    id: 'block-exp-030',
    title: 'The Future of Web3',
    type: 'concept',
    duration: 15,
    xpReward: 150,
    content: {
      overview: 'Examine emerging trends, unsolved challenges, and the potential trajectory of Web3 technology over the coming years.',
      mainContent: `
## Web3: Where Are We Heading?

Web3 remains early-stage technology with enormous potential and significant challenges. Understanding the trajectory helps navigate opportunities and risks.

### The Web Evolution

\`\`\`
Web1 (1990s-2000s): Read
- Static websites
- One-way information
- Limited interaction

Web2 (2000s-2020s): Read + Write
- Social media, user content
- Platform-centric
- Data exploitation

Web3 (2020s+): Read + Write + Own
- User ownership of data and assets
- Decentralized infrastructure
- Programmable value
\`\`\`

### Emerging Trends

**Account Abstraction:**
\`\`\`
Current: Complex seed phrases, expensive transactions
Future: Social recovery, gas sponsorship, session keys
Impact: Mainstream-friendly UX
\`\`\`

**Cross-Chain Interoperability:**
- Bridges connecting different blockchains
- Universal messaging protocols
- Chain-agnostic applications

**Real-World Asset (RWA) Tokenization:**
- Treasury bonds on-chain
- Real estate fractionalization
- Carbon credit markets

**AI + Web3 Convergence:**
- AI agents with wallets
- Decentralized AI training
- Proof of human vs. bot

### Unsolved Challenges

**Scalability Trilemma:**
\`\`\`
        Decentralization
              ▲
             / \\
            /   \\
           /     \\
          ▼       ▼
     Security ◄─► Scalability

Can we achieve all three?
- L2s improve scalability
- But add complexity
- Research continues (sharding, data availability)
\`\`\`

**Privacy:**
- Public blockchains expose all transactions
- ZK technology enabling privacy
- Regulatory tension (privacy vs. compliance)

**User Experience:**
- Key management still complex
- Transaction signing confusing
- Error messages cryptic

**Regulation:**
- Unclear legal frameworks
- Jurisdiction shopping
- Compliance vs. decentralization

### Potential Futures

**Optimistic Scenario:**
- Seamless UX matches Web2
- Financial inclusion for billions
- User-owned digital economy
- Reduced platform power
- Programmable, transparent institutions

**Pessimistic Scenario:**
- Regulatory crackdown
- Centralized gatekeepers emerge
- Energy concerns limit adoption
- Complexity prevents mainstream use
- Captured by existing powers

**Realistic Expectation:**
- Gradual mainstream adoption
- Hybrid centralized/decentralized systems
- Regulatory frameworks mature
- Infrastructure improves
- Killer apps emerge in specific niches

### What to Watch

| Trend | Why It Matters |
|-------|---------------|
| ETH ETF adoption | Institutional legitimacy |
| CBDC development | Government crypto stance |
| L2 competition | Where activity migrates |
| Regulatory clarity | Framework for building |
| Social app breakout | Consumer adoption signal |

### Preparing for Web3's Future

**For Builders:**
- Focus on user experience
- Build for compliance flexibility
- Embrace composability

**For Users:**
- Learn to self-custody safely
- Understand what you're signing
- Stay skeptical of hype

**For Investors:**
- Long time horizons
- Diversify across thesis
- Understand technology deeply

### Final Thought

Web3 represents a fundamental shift in how we coordinate, transact, and own digital value. Whether it fulfills its promise depends on solving real problems for real users—not just financial speculation. The technology is ready; the challenge is building applications people actually need.
      `,
      keyTakeaway: 'Web3\'s future depends on solving user experience, scalability, and regulatory challenges while building applications that deliver genuine value beyond speculation—progress is steady but mainstream adoption requires significant improvement.',
      actionItem: 'Create a personal Web3 learning roadmap. Identify 2-3 areas (DeFi, NFTs, DAOs, development) to deepen your expertise, and set specific goals for the next 6 months.'
    }
  }
];
