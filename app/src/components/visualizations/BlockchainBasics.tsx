import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Block {
  id: number;
  data: string;
  hash: string;
  prevHash: string;
  timestamp: string;
}

export function BlockchainBasics() {
  const [blocks, setBlocks] = useState<Block[]>([
    { id: 0, data: 'Genesis Block', hash: '0x7a9f...', prevHash: '0x0000...', timestamp: '2009-01-03' },
    { id: 1, data: 'Alice → Bob: 10 BTC', hash: '0x3b4c...', prevHash: '0x7a9f...', timestamp: '2009-01-04' },
    { id: 2, data: 'Bob → Charlie: 5 BTC', hash: '0x9d2e...', prevHash: '0x3b4c...', timestamp: '2009-01-05' },
  ]);
  const [showTamper, setShowTamper] = useState(false);
  const [tamperedBlock, setTamperedBlock] = useState<number | null>(null);
  const [showConcepts, setShowConcepts] = useState(false);

  const addBlock = () => {
    const lastBlock = blocks[blocks.length - 1];
    const transactions = [
      'Charlie → Dave: 3 BTC',
      'Eve → Alice: 7 BTC',
      'Dave → Bob: 2 BTC',
      'Alice → Eve: 4 BTC',
    ];
    const newBlock: Block = {
      id: lastBlock.id + 1,
      data: transactions[Math.floor(Math.random() * transactions.length)],
      hash: `0x${Math.random().toString(16).slice(2, 6)}...`,
      prevHash: lastBlock.hash,
      timestamp: '2009-01-0' + (6 + blocks.length - 2),
    };
    setBlocks([...blocks, newBlock]);
  };

  const tamperBlock = (id: number) => {
    setTamperedBlock(id);
    // Show that tampering breaks the chain
    setTimeout(() => setTamperedBlock(null), 3000);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Dark Glassmorphism background - 88% transparent */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] via-transparent to-green-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        <div className="flex flex-col items-center gap-5">
          {/* Title */}
          <div className="text-center">
            <h3 className="text-sm font-bold text-amber-400">Blockchain Fundamentals</h3>
            <p className="text-[10px] text-gray-500">Immutable, decentralized ledger technology</p>
          </div>

          {/* Blockchain visualization */}
          <div className="w-full max-w-xs overflow-x-auto">
            <div className="flex gap-2 pb-2">
              {blocks.slice(-4).map((block, index) => (
                <motion.div
                  key={block.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className={`relative overflow-hidden flex-shrink-0 w-28 p-2 rounded-lg transition-all ${
                    tamperedBlock === block.id
                      ? ''
                      : block.id === 0
                      ? ''
                      : ''
                  }`}
                >
                  {/* Block background based on state */}
                  {tamperedBlock === block.id ? (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.15] via-red-500/[0.08] to-transparent" />
                      <div className="absolute inset-0 border border-red-500/40 rounded-lg" />
                    </>
                  ) : block.id === 0 ? (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.15] via-amber-500/[0.08] to-transparent" />
                      <div className="absolute inset-0 border border-amber-500/30 rounded-lg" />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-[var(--viz-tile)] backdrop-blur-sm" />
                      <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg" />
                    </>
                  )}

                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[8px] text-gray-500">Block #{block.id}</span>
                      {block.id !== 0 && showTamper && (
                        <button
                          onClick={() => tamperBlock(block.id)}
                          className="text-[8px] text-red-400 hover:text-red-300"
                        >
                          🔓
                        </button>
                      )}
                    </div>

                    <p className="text-[9px] text-gray-300 truncate mb-1">{block.data}</p>

                    <div className="space-y-0.5">
                      <div className="flex justify-between">
                        <span className="text-[7px] text-gray-500">Hash:</span>
                        <span className="text-[7px] text-green-400 font-mono">{block.hash}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[7px] text-gray-500">Prev:</span>
                        <span className="text-[7px] text-blue-400 font-mono">{block.prevHash}</span>
                      </div>
                    </div>
                  </div>

                  {/* Chain link */}
                  {index < blocks.slice(-4).length - 1 && (
                    <motion.div
                      className="absolute -right-2 top-1/2 -translate-y-1/2 text-gray-600 z-20"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tamper alert */}
          <AnimatePresence>
            {tamperedBlock !== null && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="relative overflow-hidden w-full max-w-xs p-3 rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.15] via-red-500/[0.08] to-transparent" />
                <div className="absolute inset-0 border border-red-500/30 rounded-xl" />
                <div className="relative z-10">
                  <p className="text-xs text-red-400 font-bold">⚠️ Tampering Detected!</p>
                  <p className="text-[10px] text-gray-400">
                    If block #{tamperedBlock} is changed, its hash changes, breaking the link to block #
                    {tamperedBlock + 1}. Every subsequent block becomes invalid!
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Controls */}
          <div className="flex gap-2">
            <motion.button
              onClick={addBlock}
              className="relative overflow-hidden px-4 py-2 rounded-lg text-xs text-green-400"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={blocks.length >= 6}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/[0.15] via-green-500/[0.08] to-transparent" />
              <div className="absolute inset-0 border border-green-500/30 rounded-lg" />
              <span className="relative z-10">⛏️ Mine New Block</span>
            </motion.button>
            <button
              onClick={() => setShowTamper(!showTamper)}
              className={`relative overflow-hidden px-4 py-2 rounded-lg text-xs transition-all ${
                showTamper ? 'text-red-400' : 'text-gray-400'
              }`}
            >
              {showTamper ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.15] via-red-500/[0.08] to-transparent" />
                  <div className="absolute inset-0 border border-red-500/30 rounded-lg" />
                </>
              ) : (
                <>
                  <div className="absolute inset-0 bg-[var(--viz-tile)]" />
                  <div className="absolute inset-0 border border-[var(--viz-border)] rounded-lg" />
                </>
              )}
              <span className="relative z-10">🔓 {showTamper ? 'Hide' : 'Try'} Tampering</span>
            </button>
          </div>

          {/* Key concepts toggle */}
          <button
            onClick={() => setShowConcepts(!showConcepts)}
            className="text-xs text-gray-500 hover:text-gray-300"
          >
            {showConcepts ? '▼ Hide' : '▶ Show'} key concepts
          </button>

          <AnimatePresence>
            {showConcepts && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="w-full max-w-xs grid grid-cols-2 gap-2"
              >
                <div className="relative overflow-hidden p-2 rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/[0.08] via-green-500/[0.04] to-transparent" />
                  <div className="absolute inset-0 border border-green-500/20 rounded-lg" />
                  <div className="relative z-10">
                    <p className="text-[10px] text-green-400 font-medium">🔗 Hash Linking</p>
                    <p className="text-[9px] text-gray-400">Each block references the previous hash</p>
                  </div>
                </div>
                <div className="relative overflow-hidden p-2 rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] via-blue-500/[0.04] to-transparent" />
                  <div className="absolute inset-0 border border-blue-500/20 rounded-lg" />
                  <div className="relative z-10">
                    <p className="text-[10px] text-blue-400 font-medium">⛏️ Mining</p>
                    <p className="text-[9px] text-gray-400">Proof of work validates new blocks</p>
                  </div>
                </div>
                <div className="relative overflow-hidden p-2 rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.08] via-purple-500/[0.04] to-transparent" />
                  <div className="absolute inset-0 border border-purple-500/20 rounded-lg" />
                  <div className="relative z-10">
                    <p className="text-[10px] text-purple-400 font-medium">🌐 Decentralized</p>
                    <p className="text-[9px] text-gray-400">No single point of control</p>
                  </div>
                </div>
                <div className="relative overflow-hidden p-2 rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.08] via-amber-500/[0.04] to-transparent" />
                  <div className="absolute inset-0 border border-amber-500/20 rounded-lg" />
                  <div className="relative z-10">
                    <p className="text-[10px] text-amber-400 font-medium">🔒 Immutable</p>
                    <p className="text-[9px] text-gray-400">Changing history is computationally impossible</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* How it works */}
          <div className="relative overflow-hidden w-full max-w-xs p-3 rounded-xl">
            <div className="absolute inset-0 bg-[var(--viz-tile)] backdrop-blur-sm" />
            <div className="absolute inset-0 border border-[var(--viz-border)] rounded-xl" />
            <div className="relative z-10">
              <p className="text-[10px] text-gray-500 mb-2">Why it's secure:</p>
              <div className="space-y-1 text-[10px] text-gray-400">
                <p>1. Each block contains a hash of the previous block</p>
                <p>2. Changing any data changes the hash</p>
                <p>3. This breaks all subsequent links</p>
                <p>4. Attacker would need to redo all work</p>
                <p>5. Network consensus rejects invalid chains</p>
              </div>
            </div>
          </div>

          {/* Key insight */}
          <div className="relative overflow-hidden rounded-xl p-4 max-w-xs">
            <div className="absolute inset-0 bg-[var(--viz-tile)] backdrop-blur-sm" />
            <div className="absolute inset-0 border border-[var(--viz-border)] rounded-xl" />
            <div className="relative z-10">
              <p className="text-xs text-gray-400 leading-relaxed">
                <span className="text-amber-400 font-medium">Satoshi Nakamoto:</span> "The root problem
                with conventional currency is all the trust that's required. With blockchain, we replace
                trust with cryptographic proof."
              </p>
            </div>
          </div>

          <p className="text-[10px] text-gray-600">From Token Economy & DeFi Foundations</p>
        </div>
      </div>
    </div>
  );
}

export default BlockchainBasics;
