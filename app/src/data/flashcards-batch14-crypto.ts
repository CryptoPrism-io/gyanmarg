import type { SpacedRepetitionCard } from '@/types';

export const cryptoWeb3Flashcards: SpacedRepetitionCard[] = [
  // Bitcoin Fundamentals
  {
    id: 'fc-cw3-001',
    front: 'What is Bitcoin and who created it?',
    back: 'Bitcoin is a decentralized digital currency created in 2008 by an anonymous person or group using the pseudonym Satoshi Nakamoto. It operates without a central authority and uses peer-to-peer technology for transactions.',
    category: 'Bitcoin',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'bitcoin', 'satoshi']
  },
  {
    id: 'fc-cw3-002',
    front: 'What is the maximum supply of Bitcoin?',
    back: '21 million BTC. This hard cap is built into the Bitcoin protocol and makes Bitcoin a deflationary asset. The last Bitcoin is expected to be mined around the year 2140.',
    category: 'Bitcoin',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'bitcoin', 'tokenomics']
  },
  {
    id: 'fc-cw3-003',
    front: 'What is Bitcoin halving?',
    back: 'Bitcoin halving is an event that occurs approximately every 4 years (every 210,000 blocks) where the block reward for miners is cut in half. This reduces the rate of new Bitcoin creation and contributes to its scarcity.',
    category: 'Bitcoin',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'bitcoin', 'mining']
  },
  {
    id: 'fc-cw3-004',
    front: 'What is a UTXO in Bitcoin?',
    back: 'UTXO (Unspent Transaction Output) is the output of a transaction that has not yet been spent. Bitcoin uses the UTXO model where your balance is the sum of all UTXOs associated with your addresses.',
    category: 'Bitcoin',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'advanced',
    tags: ['crypto', 'bitcoin', 'transactions']
  },
  {
    id: 'fc-cw3-005',
    front: 'What is the Lightning Network?',
    back: 'The Lightning Network is a Layer 2 scaling solution for Bitcoin that enables fast, low-cost transactions through payment channels. Transactions occur off-chain and are only settled on the main blockchain when channels are opened or closed.',
    category: 'Bitcoin',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'bitcoin', 'layer2']
  },

  // Ethereum and Smart Contracts
  {
    id: 'fc-cw3-006',
    front: 'What is Ethereum and how does it differ from Bitcoin?',
    back: 'Ethereum is a decentralized blockchain platform that enables smart contracts and decentralized applications (dApps). Unlike Bitcoin which is primarily a store of value, Ethereum is a programmable blockchain with Turing-complete functionality.',
    category: 'Ethereum',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'ethereum', 'smart-contracts']
  },
  {
    id: 'fc-cw3-007',
    front: 'What is a smart contract?',
    back: 'A smart contract is self-executing code stored on a blockchain that automatically enforces the terms of an agreement when predetermined conditions are met. They run exactly as programmed without downtime, censorship, or third-party interference.',
    category: 'Ethereum',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'ethereum', 'smart-contracts']
  },
  {
    id: 'fc-cw3-008',
    front: 'What is gas in Ethereum?',
    back: 'Gas is the unit measuring computational effort required to execute operations on Ethereum. Users pay gas fees (in ETH) to compensate validators for processing transactions. Gas price varies based on network demand.',
    category: 'Ethereum',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'ethereum', 'gas']
  },
  {
    id: 'fc-cw3-009',
    front: 'What is the EVM (Ethereum Virtual Machine)?',
    back: 'The EVM is a Turing-complete virtual machine that executes smart contract bytecode on Ethereum. It provides a sandboxed runtime environment ensuring that code runs identically on all nodes in the network.',
    category: 'Ethereum',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'ethereum', 'evm']
  },
  {
    id: 'fc-cw3-010',
    front: 'What are ERC-20 tokens?',
    back: 'ERC-20 is a technical standard for fungible tokens on Ethereum. It defines a common set of rules (like transfer, approve, balanceOf) that all compliant tokens must implement, ensuring interoperability across the ecosystem.',
    category: 'Ethereum',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'ethereum', 'tokens']
  },

  // Consensus Mechanisms
  {
    id: 'fc-cw3-011',
    front: 'What is Proof of Work (PoW)?',
    back: 'Proof of Work is a consensus mechanism where miners compete to solve complex mathematical puzzles to validate transactions and create new blocks. The first to solve the puzzle gets the block reward. Used by Bitcoin.',
    category: 'Consensus',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'consensus', 'pow']
  },
  {
    id: 'fc-cw3-012',
    front: 'What is Proof of Stake (PoS)?',
    back: 'Proof of Stake is a consensus mechanism where validators are selected to create blocks based on the amount of cryptocurrency they have staked as collateral. It is more energy-efficient than PoW. Used by Ethereum post-Merge.',
    category: 'Consensus',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'consensus', 'pos']
  },
  {
    id: 'fc-cw3-013',
    front: 'What is slashing in Proof of Stake?',
    back: 'Slashing is a penalty mechanism in PoS systems where validators lose a portion of their staked tokens for malicious behavior (like double signing) or extended downtime. It incentivizes honest participation.',
    category: 'Consensus',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'consensus', 'pos', 'security']
  },
  {
    id: 'fc-cw3-014',
    front: 'What is Delegated Proof of Stake (DPoS)?',
    back: 'DPoS is a variant of PoS where token holders vote for a limited number of delegates who validate transactions and create blocks on their behalf. Used by networks like EOS and Tron for faster consensus.',
    category: 'Consensus',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'consensus', 'dpos']
  },
  {
    id: 'fc-cw3-015',
    front: 'What is the Byzantine Generals Problem?',
    back: 'A computer science problem describing how distributed systems can reach agreement despite potentially malicious actors. Blockchain consensus mechanisms solve this by achieving Byzantine Fault Tolerance (BFT).',
    category: 'Consensus',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'advanced',
    tags: ['crypto', 'consensus', 'security']
  },

  // Wallets and Security
  {
    id: 'fc-cw3-016',
    front: 'What is the difference between a hot wallet and cold wallet?',
    back: 'A hot wallet is connected to the internet (mobile apps, browser extensions) for convenience but higher risk. A cold wallet is offline (hardware wallets, paper wallets) providing better security for long-term storage.',
    category: 'Security',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'wallets', 'security']
  },
  {
    id: 'fc-cw3-017',
    front: 'What is a seed phrase (recovery phrase)?',
    back: 'A seed phrase is a series of 12-24 words that serves as a backup for your crypto wallet. It can regenerate all your private keys and should be stored securely offline. Never share it with anyone.',
    category: 'Security',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'wallets', 'security']
  },
  {
    id: 'fc-cw3-018',
    front: 'What is the difference between custodial and non-custodial wallets?',
    back: 'Custodial wallets (like exchanges) hold your private keys on your behalf. Non-custodial wallets give you full control of your private keys. "Not your keys, not your coins" emphasizes self-custody importance.',
    category: 'Security',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'wallets', 'security']
  },
  {
    id: 'fc-cw3-019',
    front: 'What is a multi-signature (multisig) wallet?',
    back: 'A multisig wallet requires multiple private keys to authorize a transaction (e.g., 2-of-3). It provides enhanced security for organizations and large holdings by preventing single points of failure.',
    category: 'Security',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'wallets', 'security']
  },
  {
    id: 'fc-cw3-020',
    front: 'What is a rug pull in crypto?',
    back: 'A rug pull is a scam where developers abandon a project and run away with investor funds. Common in DeFi when liquidity is suddenly removed or token contracts have hidden malicious functions.',
    category: 'Security',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'security', 'scams']
  },

  // NFT Basics
  {
    id: 'fc-cw3-021',
    front: 'What is an NFT (Non-Fungible Token)?',
    back: 'An NFT is a unique digital asset on a blockchain representing ownership of items like art, music, or collectibles. Unlike fungible tokens (where each unit is identical), each NFT has distinct properties and cannot be exchanged 1:1.',
    category: 'NFTs',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'nft', 'web3']
  },
  {
    id: 'fc-cw3-022',
    front: 'What is the ERC-721 standard?',
    back: 'ERC-721 is the Ethereum standard for non-fungible tokens. It defines functions for tracking ownership, transferring tokens, and approving others to manage tokens. Each token has a unique tokenId.',
    category: 'NFTs',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'nft', 'ethereum']
  },
  {
    id: 'fc-cw3-023',
    front: 'What is ERC-1155 and how does it differ from ERC-721?',
    back: 'ERC-1155 is a multi-token standard that can handle both fungible and non-fungible tokens in a single contract. It is more gas-efficient for batch transfers and commonly used in gaming for items and currencies.',
    category: 'NFTs',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'nft', 'ethereum']
  },
  {
    id: 'fc-cw3-024',
    front: 'What are NFT royalties?',
    back: 'NFT royalties are percentages paid to original creators on secondary sales. They are typically encoded in smart contracts (though enforcement varies by marketplace), enabling creators to earn from future resales.',
    category: 'NFTs',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'nft', 'creators']
  },
  {
    id: 'fc-cw3-025',
    front: 'What is minting an NFT?',
    back: 'Minting is the process of creating an NFT on the blockchain. It involves uploading metadata (usually to IPFS), calling the smart contract mint function, and paying gas fees to record ownership on-chain.',
    category: 'NFTs',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'nft', 'minting']
  },

  // DAOs
  {
    id: 'fc-cw3-026',
    front: 'What is a DAO (Decentralized Autonomous Organization)?',
    back: 'A DAO is an organization governed by smart contracts and token-based voting rather than traditional hierarchical management. Members collectively make decisions on proposals, treasury management, and protocol changes.',
    category: 'DAOs',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'dao', 'governance']
  },
  {
    id: 'fc-cw3-027',
    front: 'What is governance token voting?',
    back: 'Governance tokens grant holders voting rights on protocol decisions. Voting power is typically proportional to token holdings. Proposals may cover treasury spending, parameter changes, or protocol upgrades.',
    category: 'DAOs',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'dao', 'governance']
  },
  {
    id: 'fc-cw3-028',
    front: 'What is quadratic voting in DAOs?',
    back: 'Quadratic voting is a mechanism where the cost of additional votes increases quadratically (1 vote = 1 token, 2 votes = 4 tokens, etc.). It reduces plutocracy by making it expensive for whales to dominate decisions.',
    category: 'DAOs',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'advanced',
    tags: ['crypto', 'dao', 'governance']
  },
  {
    id: 'fc-cw3-029',
    front: 'What is a DAO treasury?',
    back: 'A DAO treasury is a pool of funds controlled by the DAO through governance votes. It typically holds native tokens, stablecoins, and other assets used for grants, development funding, and operational expenses.',
    category: 'DAOs',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'dao', 'treasury']
  },
  {
    id: 'fc-cw3-030',
    front: 'What is vote delegation in DAOs?',
    back: 'Vote delegation allows token holders to assign their voting power to another address (a delegate) who votes on their behalf. This enables more active governance participation without requiring all holders to vote directly.',
    category: 'DAOs',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'dao', 'governance']
  },

  // Tokenomics
  {
    id: 'fc-cw3-031',
    front: 'What is tokenomics?',
    back: 'Tokenomics refers to the economic design of a cryptocurrency including supply mechanics, distribution, utility, incentives, and monetary policy. Good tokenomics aligns stakeholder interests and creates sustainable value.',
    category: 'Tokenomics',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'tokenomics', 'economics']
  },
  {
    id: 'fc-cw3-032',
    front: 'What is token vesting?',
    back: 'Vesting is a schedule that restricts when tokens become transferable. Team and investor tokens often vest over 2-4 years with a cliff period. This prevents immediate selling and aligns long-term incentives.',
    category: 'Tokenomics',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'tokenomics', 'distribution']
  },
  {
    id: 'fc-cw3-033',
    front: 'What is a token burn?',
    back: 'Token burning permanently removes tokens from circulation by sending them to an inaccessible address. Burns reduce supply, potentially increasing scarcity and value. Ethereum burns base fees through EIP-1559.',
    category: 'Tokenomics',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'tokenomics', 'deflationary']
  },
  {
    id: 'fc-cw3-034',
    front: 'What is the difference between inflationary and deflationary tokens?',
    back: 'Inflationary tokens have no max supply and continuously mint new tokens (often for staking rewards). Deflationary tokens have fixed or decreasing supply through burns. Each model has different economic implications.',
    category: 'Tokenomics',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'tokenomics', 'economics']
  },
  {
    id: 'fc-cw3-035',
    front: 'What is fully diluted valuation (FDV)?',
    back: 'FDV is the theoretical market cap if all tokens were in circulation (total supply x current price). Comparing FDV to current market cap reveals how much supply inflation could dilute current holders.',
    category: 'Tokenomics',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'tokenomics', 'valuation']
  },

  // Layer 2 Solutions
  {
    id: 'fc-cw3-036',
    front: 'What are Layer 2 scaling solutions?',
    back: 'Layer 2 solutions are protocols built on top of Layer 1 blockchains to improve scalability. They process transactions off the main chain while inheriting its security, enabling faster and cheaper transactions.',
    category: 'Layer 2',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'layer2', 'scaling']
  },
  {
    id: 'fc-cw3-037',
    front: 'What is an Optimistic Rollup?',
    back: 'Optimistic Rollups batch transactions off-chain and post them to L1 assuming they are valid (optimistically). A challenge period allows fraud proofs if invalid transactions are detected. Used by Optimism and Arbitrum.',
    category: 'Layer 2',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'layer2', 'rollups']
  },
  {
    id: 'fc-cw3-038',
    front: 'What is a ZK-Rollup?',
    back: 'ZK-Rollups use zero-knowledge proofs to cryptographically verify off-chain transaction batches. No challenge period needed as validity is mathematically proven. Used by zkSync, StarkNet, and Polygon zkEVM.',
    category: 'Layer 2',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'advanced',
    tags: ['crypto', 'layer2', 'zk-proofs']
  },
  {
    id: 'fc-cw3-039',
    front: 'What is data availability in rollups?',
    back: 'Data availability ensures that transaction data is accessible so anyone can reconstruct the state and verify correctness. Rollups typically post compressed data to L1, though solutions like EIP-4844 reduce costs.',
    category: 'Layer 2',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'advanced',
    tags: ['crypto', 'layer2', 'rollups']
  },
  {
    id: 'fc-cw3-040',
    front: 'What is a bridge in crypto?',
    back: 'A bridge is a protocol that enables transferring assets between different blockchains or between L1 and L2. Bridges typically lock assets on one chain and mint wrapped versions on another.',
    category: 'Layer 2',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'layer2', 'bridges']
  },

  // DeFi Protocols
  {
    id: 'fc-cw3-041',
    front: 'What is DeFi (Decentralized Finance)?',
    back: 'DeFi refers to financial services built on blockchain without traditional intermediaries. It includes lending, borrowing, trading, and yield farming through smart contracts, offering permissionless and transparent finance.',
    category: 'DeFi',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'defi', 'finance']
  },
  {
    id: 'fc-cw3-042',
    front: 'What is an AMM (Automated Market Maker)?',
    back: 'An AMM is a DEX mechanism using liquidity pools and mathematical formulas (like x*y=k) instead of order books. Liquidity providers deposit token pairs and earn fees from trades. Uniswap popularized this model.',
    category: 'DeFi',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'defi', 'amm']
  },
  {
    id: 'fc-cw3-043',
    front: 'What is impermanent loss?',
    back: 'Impermanent loss occurs when providing liquidity to an AMM and the price ratio of deposited tokens changes. The loss compared to simply holding becomes permanent when you withdraw. Greater price divergence means greater loss.',
    category: 'DeFi',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'advanced',
    tags: ['crypto', 'defi', 'liquidity']
  },
  {
    id: 'fc-cw3-044',
    front: 'What is yield farming?',
    back: 'Yield farming involves strategically moving crypto across DeFi protocols to maximize returns. Users earn yields from lending interest, trading fees, liquidity mining rewards, and governance token incentives.',
    category: 'DeFi',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'defi', 'yield']
  },
  {
    id: 'fc-cw3-045',
    front: 'What is TVL (Total Value Locked)?',
    back: 'TVL measures the total value of assets deposited in a DeFi protocol. It is a key metric for comparing protocol adoption and trust. Higher TVL generally indicates more user confidence and liquidity depth.',
    category: 'DeFi',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'defi', 'metrics']
  },

  // Web3 Identity
  {
    id: 'fc-cw3-046',
    front: 'What is ENS (Ethereum Name Service)?',
    back: 'ENS is a decentralized naming system that maps human-readable names (like vitalik.eth) to Ethereum addresses and other resources. It functions like DNS for Web3, making addresses easier to share and remember.',
    category: 'Web3 Identity',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'web3', 'identity']
  },
  {
    id: 'fc-cw3-047',
    front: 'What are Soulbound Tokens (SBTs)?',
    back: 'Soulbound Tokens are non-transferable NFTs representing credentials, achievements, or affiliations. Proposed by Vitalik Buterin, they enable on-chain identity and reputation without the speculation of tradeable tokens.',
    category: 'Web3 Identity',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'web3', 'identity']
  },
  {
    id: 'fc-cw3-048',
    front: 'What is Sign-In with Ethereum (SIWE)?',
    back: 'SIWE is an authentication standard allowing users to sign in to applications using their Ethereum wallet. It provides self-sovereign identity without passwords, replacing traditional OAuth with cryptographic signatures.',
    category: 'Web3 Identity',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'web3', 'authentication']
  },
  {
    id: 'fc-cw3-049',
    front: 'What is a DID (Decentralized Identifier)?',
    back: 'A DID is a globally unique identifier that enables verifiable, self-sovereign digital identity. DIDs are controlled by the identity owner, not centralized registries, and can be verified cryptographically.',
    category: 'Web3 Identity',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'advanced',
    tags: ['crypto', 'web3', 'identity']
  },
  {
    id: 'fc-cw3-050',
    front: 'What is a zero-knowledge proof in identity verification?',
    back: 'Zero-knowledge proofs allow proving statements (like being over 18 or owning a credential) without revealing underlying data. In Web3 identity, they enable privacy-preserving verification of claims and credentials.',
    category: 'Web3 Identity',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'advanced',
    tags: ['crypto', 'web3', 'privacy', 'zk-proofs']
  }
];
