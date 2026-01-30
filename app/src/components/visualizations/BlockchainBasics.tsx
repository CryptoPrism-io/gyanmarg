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
              className={`flex-shrink-0 w-28 p-2 rounded-lg border transition-all ${
                tamperedBlock === block.id
                  ? 'bg-red-500/20 border-red-500'
                  : block.id === 0
                  ? 'bg-amber-500/20 border-amber-500'
                  : 'bg-[#111113] border-gray-700'
              }`}
            >
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

              {/* Chain link */}
              {index < blocks.slice(-4).length - 1 && (
                <motion.div
                  className="absolute -right-2 top-1/2 -translate-y-1/2 text-gray-600"
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
            className="w-full max-w-xs p-3 bg-red-500/20 border border-red-500/50 rounded-xl"
          >
            <p className="text-xs text-red-400 font-bold">⚠️ Tampering Detected!</p>
            <p className="text-[10px] text-gray-400">
              If block #{tamperedBlock} is changed, its hash changes, breaking the link to block #
              {tamperedBlock + 1}. Every subsequent block becomes invalid!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Controls */}
      <div className="flex gap-2">
        <motion.button
          onClick={addBlock}
          className="px-4 py-2 rounded-lg text-xs bg-green-500/20 border border-green-500/50 text-green-400"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={blocks.length >= 6}
        >
          ⛏️ Mine New Block
        </motion.button>
        <button
          onClick={() => setShowTamper(!showTamper)}
          className={`px-4 py-2 rounded-lg text-xs border transition-all ${
            showTamper
              ? 'bg-red-500/20 border-red-500/50 text-red-400'
              : 'bg-gray-800 border-gray-700 text-gray-400'
          }`}
        >
          🔓 {showTamper ? 'Hide' : 'Try'} Tampering
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
            <div className="p-2 bg-green-500/10 border border-green-500/30 rounded-lg">
              <p className="text-[10px] text-green-400 font-medium">🔗 Hash Linking</p>
              <p className="text-[9px] text-gray-400">Each block references the previous hash</p>
            </div>
            <div className="p-2 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <p className="text-[10px] text-blue-400 font-medium">⛏️ Mining</p>
              <p className="text-[9px] text-gray-400">Proof of work validates new blocks</p>
            </div>
            <div className="p-2 bg-purple-500/10 border border-purple-500/30 rounded-lg">
              <p className="text-[10px] text-purple-400 font-medium">🌐 Decentralized</p>
              <p className="text-[9px] text-gray-400">No single point of control</p>
            </div>
            <div className="p-2 bg-amber-500/10 border border-amber-500/30 rounded-lg">
              <p className="text-[10px] text-amber-400 font-medium">🔒 Immutable</p>
              <p className="text-[9px] text-gray-400">Changing history is computationally impossible</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* How it works */}
      <div className="w-full max-w-xs p-3 bg-[#111113] border border-gray-800 rounded-xl">
        <p className="text-[10px] text-gray-500 mb-2">Why it's secure:</p>
        <div className="space-y-1 text-[10px] text-gray-400">
          <p>1. Each block contains a hash of the previous block</p>
          <p>2. Changing any data changes the hash</p>
          <p>3. This breaks all subsequent links</p>
          <p>4. Attacker would need to redo all work</p>
          <p>5. Network consensus rejects invalid chains</p>
        </div>
      </div>

      {/* Key insight */}
      <div className="bg-[#111113] border border-gray-800 rounded-xl p-4 max-w-xs">
        <p className="text-xs text-gray-400 leading-relaxed">
          <span className="text-amber-400 font-medium">Satoshi Nakamoto:</span> "The root problem
          with conventional currency is all the trust that's required. With blockchain, we replace
          trust with cryptographic proof."
        </p>
      </div>

      <p className="text-[10px] text-gray-600">From Token Economy & DeFi Foundations</p>
    </div>
  );
}

export default BlockchainBasics;
