import type { SpacedRepetitionCard } from '@/types';

export const cryptoWeb3Flashcards: SpacedRepetitionCard[] = [
  // Bitcoin Fundamentals
  {
    id: 'fc-cw3-001',
    front: 'What is Bitcoin & who created it?',
    back: 'Bitcoin: decentralized digital currency; Satoshi Nakamoto created it anonymously in 2008 using peer-to-peer tech',
    category: 'Bitcoin',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'bitcoin', 'satoshi']
  },
  {
    id: 'fc-cw3-002',
    front: 'Bitcoin\'s max supply is?',
    back: '21 million BTC. Protocol hard cap makes it deflationary; last coin mined ~2140',
    category: 'Bitcoin',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'bitcoin', 'tokenomics']
  },
  {
    id: 'fc-cw3-003',
    front: 'What happens during a Bitcoin halving event?',
    back: 'Halve the block reward for miners; reduce new Bitcoin creation, increasing scarcity. Occurs ~every 4 years',
    category: 'Bitcoin',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'bitcoin', 'mining']
  },
  {
    id: 'fc-cw3-004',
    front: 'What is a UTXO (Unspent Transaction Output) in Bitcoin?',
    back: 'UTXO is unspent transaction output. Calculate Bitcoin balance by summing UTXOs associated with your addresses',
    category: 'Bitcoin',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'advanced',
    tags: ['crypto', 'bitcoin', 'transactions']
  },
  {
    id: 'fc-cw3-005',
    front: 'What does Bitcoin\'s Lightning Network do?',
    back: 'Enable fast, cheap Bitcoin transactions. Use off-chain payment channels, settle on-chain only for open/close. ID: fc-cw3-005',
    category: 'Bitcoin',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'bitcoin', 'layer2']
  },
  {
    id: 'fc-cw3-006',
    front: 'Explain Ethereum; how does it differ from Bitcoin?',
    back: 'Ethereum: platform for smart contracts & dApps.  Bitcoin: primarily a store of value; Ethereum is programmable',
    category: 'Ethereum',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'ethereum', 'smart-contracts']
  },
  {
    id: 'fc-cw3-007',
    front: 'What is a smart contract?',
    back: 'Execute code automatically on a blockchain when conditions are met. Ensure programmed actions without censorship; third-party control',
    category: 'Ethereum',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'ethereum', 'smart-contracts']
  },
  {
    id: 'fc-cw3-008',
    front: 'What is Ethereum gas?',
    back: 'Gas measures compute effort; pay gas fees (ETH) to validators for processing transactions. Gas price fluctuates with network demand. ID: fc-cw3-008',
    category: 'Ethereum',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'ethereum', 'gas']
  },
  {
    id: 'fc-cw3-009',
    front: 'What is the Ethereum Virtual Machine (EVM)?',
    back: 'Execute smart contract bytecode on Ethereum using a Turing-complete virtual machine. Ensure consistent, sandboxed runtime on all nodes; use bytecode',
    category: 'Ethereum',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'ethereum', 'evm']
  },
  {
    id: 'fc-cw3-010',
    front: 'What\'s the ERC-20 token standard?',
    back: 'ERC-20 defines rules for fungible Ethereum tokens; Implement transfer, approve, balanceOf for interoperability',
    category: 'Ethereum',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'ethereum', 'tokens']
  },
  {
    id: 'fc-cw3-011',
    front: 'What is Proof of Work (PoW)?',
    back: 'Solve puzzles to validate transactions & create blocks; winner gets reward. Bitcoin uses it',
    category: 'Consensus',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'consensus', 'pow']
  },
  {
    id: 'fc-cw3-012',
    front: 'What is Proof of Stake (PoS)?',
    back: 'Validators create blocks proportional to staked crypto; It\'s more energy-efficient than PoW. Ethereum uses it',
    category: 'Consensus',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'consensus', 'pos']
  },
  {
    id: 'fc-cw3-013',
    front: 'PoS Slashing: What action causes stake loss?',
    back: 'Penalize validators: Slash stake for malicious actions (double signing) or downtime. It incentivizes honesty; ensure chain security',
    category: 'Consensus',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'consensus', 'pos', 'security']
  },
  {
    id: 'fc-cw3-014',
    front: 'Define Delegated Proof of Stake (DPoS)',
    back: 'Token holders elect delegates; Delegates validate transactions, create blocks. Used in EOS, Tron for faster consensus',
    category: 'Consensus',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'consensus', 'dpos']
  },
  {
    id: 'fc-cw3-015',
    front: 'Explain the Byzantine Generals Problem',
    back: 'Distributed systems reach agreement despite malicious actors. Achieve Byzantine Fault Tolerance (BFT) with blockchain consensus mechanisms',
    category: 'Consensus',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'advanced',
    tags: ['crypto', 'consensus', 'security']
  },
  {
    id: 'fc-cw3-016',
    front: 'Hot wallet vs. cold wallet: What distinguishes them?',
    back: 'Hot: Online, convenient, riskier; use for frequent transactions. Cold: Offline, secure, for long-term storage; use for holding',
    category: 'Security',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'wallets', 'security']
  },
  {
    id: 'fc-cw3-017',
    front: 'What is a seed phrase (recovery phrase)?',
    back: 'Back up your crypto wallet with 12-24 words. Regenerate private keys; store offline; NEVER share!',
    category: 'Security',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'wallets', 'security']
  },
  {
    id: 'fc-cw3-018',
    front: 'Custodial vs Non-Custodial Wallets: What\'s the Key Difference?',
    back: 'Custodial: Exchange holds keys. You trust them; Non-custodial: You control keys. More responsibility',
    category: 'Security',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'wallets', 'security']
  },
  {
    id: 'fc-cw3-019',
    front: 'What does a multi-signature (multisig) wallet require?',
    back: 'Authorize transactions with multiple private keys (e.g., 2-of-3); Enhance security, prevent single failures',
    category: 'Security',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'wallets', 'security']
  },
  {
    id: 'fc-cw3-020',
    front: 'What\'s a crypto \'rug pull\'?',
    back: 'Developers abandon project; steal investor funds. Often DeFi; liquidity vanishes or contracts hide malicious functions',
    category: 'Security',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'security', 'scams']
  },
  {
    id: 'fc-cw3-021',
    front: 'Define NFT (Non-Fungible Token)',
    back: 'Represent ownership of unique digital items on a blockchain (art, music, etc.). They\'re distinct; not 1:1 exchangeable',
    category: 'NFTs',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'nft', 'web3']
  },
  {
    id: 'fc-cw3-022',
    front: 'What does Ethereum\'s ERC-721 standard define?',
    back: 'It defines NFT ownership, transfer, and approval functions. Each token possesses a unique tokenId; crucial for non-fungibility. fc-cw3-022',
    category: 'NFTs',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'nft', 'ethereum']
  },
  {
    id: 'fc-cw3-023',
    front: 'ERC-1155 vs ERC-721: What\'s the key difference?',
    back: 'ERC-1155 handles fungible & non-fungible tokens in one contract; use it for gas-efficient batch transfers, like in gaming',
    category: 'NFTs',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'nft', 'ethereum']
  },
  {
    id: 'fc-cw3-024',
    front: 'NFT Royalties: What are they?',
    back: 'Get paid a percentage on resales; encoded in smart contracts. Enforcement varies by marketplace',
    category: 'NFTs',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'nft', 'creators']
  },
  {
    id: 'fc-cw3-025',
    front: 'What is minting an NFT?',
    back: 'Create an NFT on the blockchain; Upload metadata, call mint function, pay gas to record ownership',
    category: 'NFTs',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'nft', 'minting']
  },
  {
    id: 'fc-cw3-026',
    front: 'What is a DAO (Decentralized Autonomous Organization)?',
    back: 'Execute governance via smart contracts and token voting, not hierarchy. Members decide proposals; manage treasury; change protocol',
    category: 'DAOs',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'dao', 'governance']
  },
  {
    id: 'fc-cw3-027',
    front: 'Governance token voting: What is it?',
    back: 'Token holders vote on protocol changes; power scales with holdings. Decide on treasury, parameters, upgrades',
    category: 'DAOs',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'dao', 'governance']
  },
  {
    id: 'fc-cw3-028',
    front: 'Explain quadratic voting in DAOs',
    back: 'Cost of votes increases quadratically; 1 vote = 1 token, 2 votes = 4 tokens.  Mitigates whale dominance by making extra votes increasingly expensive',
    category: 'DAOs',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'advanced',
    tags: ['crypto', 'dao', 'governance']
  },
  {
    id: 'fc-cw3-029',
    front: 'DAO Treasury: What is it?',
    back: 'It\'s DAO-controlled funds for grants, development, operations. Holds native tokens, stablecoins, and other assets; Governed by votes',
    category: 'DAOs',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'dao', 'treasury']
  },
  {
    id: 'fc-cw3-030',
    front: 'What is vote delegation in DAOs?',
    back: 'Assign voting power to a delegate; enable active governance. Delegate votes on your behalf; you don\'t need to vote directly',
    category: 'DAOs',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'dao', 'governance']
  },
  {
    id: 'fc-cw3-031',
    front: 'What is tokenomics?',
    back: 'Define a crypto\'s economic design. Consider supply, distribution, utility, incentives; align interests; create value. fc-cw3-031',
    category: 'Tokenomics',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'tokenomics', 'economics']
  },
  {
    id: 'fc-cw3-032',
    front: 'What is token vesting?',
    back: 'Control token release over time; prevent immediate sell-offs. Distribute team/investor tokens over years with cliff periods; align long-term incentives',
    category: 'Tokenomics',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'tokenomics', 'distribution']
  },
  {
    id: 'fc-cw3-033',
    front: 'Define token burn',
    back: 'Remove tokens permanently; Send to inaccessible address. Reduce supply; may increase value; Ethereum uses via EIP-1559',
    category: 'Tokenomics',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'tokenomics', 'deflationary']
  },
  {
    id: 'fc-cw3-034',
    front: 'Inflationary vs. deflationary tokens: What\'s the key difference?',
    back: 'Inflationary: Mint new tokens, no max supply. Deflationary: Burn tokens, fixed or decreasing supply; impacts token economics',
    category: 'Tokenomics',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'tokenomics', 'economics']
  },
  {
    id: 'fc-cw3-035',
    front: 'What\'s Fully Diluted Valuation (FDV)?',
    back: 'Calculate market cap if all tokens circulate (total supply x price). Compare to market cap to gauge dilution impact',
    category: 'Tokenomics',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'tokenomics', 'valuation']
  },
  {
    id: 'fc-cw3-036',
    front: 'What are Layer 2 scaling solutions for blockchains?',
    back: 'Process transactions off-chain; improve scalability by inheriting Layer 1 security; enable faster, cheaper txs',
    category: 'Layer 2',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'layer2', 'scaling']
  },
  {
    id: 'fc-cw3-037',
    front: 'Define Optimistic Rollup',
    back: 'Batch L2 txs, post to L1, assume valid. Use fraud proofs during challenge period if invalid; see Optimism, Arbitrum. ID: fc-cw3-037',
    category: 'Layer 2',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'layer2', 'rollups']
  },
  {
    id: 'fc-cw3-038',
    front: 'Define ZK-Rollup',
    back: 'Verify off-chain tx batches using zero-knowledge proofs; No challenge period needed. Examples: zkSync, StarkNet, Polygon zkEVM',
    category: 'Layer 2',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'advanced',
    tags: ['crypto', 'layer2', 'zk-proofs']
  },
  {
    id: 'fc-cw3-039',
    front: 'Explain data availability within rollups',
    back: 'Ensure transaction data is accessible to reconstruct state and verify. Post compressed data to L1; EIP-4844 lowers cost',
    category: 'Layer 2',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'advanced',
    tags: ['crypto', 'layer2', 'rollups']
  },
  {
    id: 'fc-cw3-040',
    front: 'What does a crypto bridge do?',
    back: 'Transfer assets between blockchains or L1/L2; lock assets on one chain, mint wrapped versions on another',
    category: 'Layer 2',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'layer2', 'bridges']
  },
  {
    id: 'fc-cw3-041',
    front: 'What is DeFi (Decentralized Finance)?',
    back: 'Build financial services on blockchain; Remove intermediaries. Use smart contracts for lending; borrowing; trading; yield farming',
    category: 'DeFi',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'defi', 'finance']
  },
  {
    id: 'fc-cw3-042',
    front: 'Explain Automated Market Makers (AMMs) in DeFi',
    back: 'Trade tokens via liquidity pools & math (x*y=k), not order books. LPs deposit pairs, earn fees; Uniswap popularized',
    category: 'DeFi',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'defi', 'amm']
  },
  {
    id: 'fc-cw3-043',
    front: 'What causes impermanent loss in AMM liquidity pools?',
    back: 'Price ratio changes cause it; Withdraw tokens and realize loss. Greater divergence means greater loss',
    category: 'DeFi',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'advanced',
    tags: ['crypto', 'defi', 'liquidity']
  },
  {
    id: 'fc-cw3-044',
    front: 'What is yield farming?',
    back: 'Maximize crypto returns by moving assets across DeFi protocols. Earn yields via lending; fees; liquidity mining; governance tokens',
    category: 'DeFi',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'defi', 'yield']
  },
  {
    id: 'fc-cw3-045',
    front: 'What does TVL (Total Value Locked) measure in DeFi?',
    back: 'TVL measures total assets locked in a protocol; Use it to compare adoption and trust. Higher TVL = more confidence/liquidity. ID: fc-cw3-045',
    category: 'DeFi',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'defi', 'metrics']
  },
  {
    id: 'fc-cw3-046',
    front: 'What is ENS (Ethereum Name Service)?',
    back: 'Map human-readable names to Ethereum addresses. Share and remember addresses easily; like DNS for Web3',
    category: 'Web3 Identity',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'beginner',
    tags: ['crypto', 'web3', 'identity']
  },
  {
    id: 'fc-cw3-047',
    front: 'Define Soulbound Tokens (SBTs)',
    back: 'SBTs: Non-transferable NFTs represent credentials & affiliations. Enable on-chain identity/reputation; bypass speculation. fc-cw3-047',
    category: 'Web3 Identity',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'web3', 'identity']
  },
  {
    id: 'fc-cw3-048',
    front: 'What does Sign-In with Ethereum (SIWE) accomplish?',
    back: 'Authenticate users with Ethereum wallets; Replace OAuth with crypto signatures for self-sovereign identity without passwords',
    category: 'Web3 Identity',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'intermediate',
    tags: ['crypto', 'web3', 'authentication']
  },
  {
    id: 'fc-cw3-049',
    front: 'Define DID (Decentralized Identifier)',
    back: 'DID: Globally unique, verifiable, self-sovereign digital identity. Owner-controlled; verify cryptographically',
    category: 'Web3 Identity',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'advanced',
    tags: ['crypto', 'web3', 'identity']
  },
  {
    id: 'fc-cw3-050',
    front: 'What does a zero-knowledge proof achieve in identity?',
    back: 'Prove identity claims without revealing the data itself. Enable privacy-preserving verification in Web3; e.g., age, credential ownership',
    category: 'Web3 Identity',
    source: 'Crypto & Web3',
    pathwayId: 'blockchain',
    difficulty: 'advanced',
    tags: ['crypto', 'web3', 'privacy', 'zk-proofs']
  }
];
