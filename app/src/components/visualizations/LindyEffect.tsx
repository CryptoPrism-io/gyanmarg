import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface Item {
  id: string;
  name: string;
  age: number;
  expectedLife: number;
  category: string;
}

const items: Item[] = [
  { id: 'bible', name: 'The Bible', age: 2000, expectedLife: 2000, category: 'Books' },
  { id: 'wheel', name: 'The Wheel', age: 5500, expectedLife: 5500, category: 'Technology' },
  { id: 'democracy', name: 'Democracy', age: 2500, expectedLife: 2500, category: 'Ideas' },
  { id: 'chess', name: 'Chess', age: 1500, expectedLife: 1500, category: 'Games' },
  { id: 'meditation', name: 'Meditation', age: 3000, expectedLife: 3000, category: 'Practices' },
  { id: 'iphone', name: 'iPhone', age: 17, expectedLife: 17, category: 'Technology' },
  { id: 'tiktok', name: 'TikTok', age: 8, expectedLife: 8, category: 'Apps' },
  { id: 'crypto', name: 'Bitcoin', age: 15, expectedLife: 15, category: 'Technology' },
];

export function LindyEffect() {
  const [selectedItems, setSelectedItems] = useState<string[]>(['bible', 'iphone']);

  const toggleItem = (id: string) => {
    setSelectedItems(prev =>
      prev.includes(id)
        ? prev.filter(i => i !== id)
        : prev.length < 3
        ? [...prev, id]
        : prev
    );
  };

  const maxAge = Math.max(...items.map(i => i.age));

  const selected = items.filter(i => selectedItems.includes(i.id));

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]">
      {/* Glass layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.12] via-black/[0.08] to-black/[0.05] backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] via-transparent to-green-500/[0.02]" />
      <div className="absolute inset-0 border border-[var(--viz-border-light)] rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--viz-line)] to-transparent" />

      <div className="relative z-10 p-5">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(245, 158, 11, 0.1) 100%)' }}
          >
            <Clock className="w-4 h-4 text-amber-400" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-[var(--viz-secondary)]">Lindy Effect</h3>
            <p className="text-[10px] text-[var(--viz-muted)]">From Nassim Taleb's Antifragile</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          {/* Timeline visualization */}
          <div className="w-full max-w-xs">
            <div
              className="relative h-32 border border-[var(--viz-border)] rounded-lg p-4 overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* Center line (now) */}
              <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-amber-500/50" />
              <div className="absolute left-1/2 top-0 -translate-x-1/2 text-[10px] text-amber-400">
                NOW
              </div>

              {/* Past label */}
              <div className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] text-[var(--viz-muted)] [writing-mode:vertical-lr] rotate-180">
                PAST
              </div>

              {/* Future label */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-[var(--viz-muted)] [writing-mode:vertical-lr]">
                FUTURE
              </div>

              {/* Selected items */}
              {selected.map((item, idx) => {
                const pastWidth = Math.min(45, (item.age / maxAge) * 45);
                const futureWidth = pastWidth; // Lindy: expected future = past survived

                return (
                  <motion.div
                    key={item.id}
                    className="absolute flex items-center"
                    style={{ top: `${25 + idx * 30}%` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {/* Past bar */}
                    <motion.div
                      className="h-4 rounded-l"
                      style={{
                        backgroundColor: '#3B82F6',
                        position: 'absolute',
                        right: '50%',
                      }}
                      animate={{ width: `${pastWidth}%` }}
                    />

                    {/* Future bar */}
                    <motion.div
                      className="h-4 rounded-r"
                      style={{
                        backgroundColor: '#22C55E',
                        position: 'absolute',
                        left: '50%',
                      }}
                      animate={{ width: `${futureWidth}%` }}
                    />

                    {/* Label */}
                    <div
                      className="absolute text-[10px] font-medium text-[var(--viz-text)] whitespace-nowrap"
                      style={{ left: '50%', transform: 'translateX(-50%)' }}
                    >
                      {item.name}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex justify-center gap-4 mt-2 text-[10px]">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded bg-blue-500" />
                <span className="text-[var(--viz-muted)]">Age (survived)</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded bg-green-500" />
                <span className="text-[var(--viz-muted)]">Expected future</span>
              </div>
            </div>
          </div>

          {/* Item selector */}
          <div className="w-full max-w-xs">
            <p className="text-[10px] text-[var(--viz-muted)] uppercase tracking-wide mb-2">
              Select up to 3 to compare:
            </p>
            <div className="grid grid-cols-2 gap-2">
              {items.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`relative p-2 rounded-lg border text-left text-xs transition-all overflow-hidden ${
                    selectedItems.includes(item.id)
                      ? 'bg-amber-500/10 border-amber-500/30'
                      : 'border-[var(--viz-border)] hover:border-[var(--viz-border-light)]'
                  }`}
                  style={!selectedItems.includes(item.id) ? { background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' } : undefined}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="flex justify-between items-center">
                    <span className={selectedItems.includes(item.id) ? 'text-amber-400' : 'text-[var(--viz-secondary)]'}>
                      {item.name}
                    </span>
                    <span className="text-[10px] text-[var(--viz-muted)]">
                      {item.age > 100 ? `${(item.age / 1000).toFixed(1)}k` : item.age}y
                    </span>
                  </div>
                  <p className="text-[10px] text-[var(--viz-muted)]">{item.category}</p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Comparison */}
          {selected.length > 1 && (
            <div
              className="relative w-full max-w-xs border border-[var(--viz-border)] rounded-lg p-3 overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <p className="text-[10px] text-[var(--viz-muted)] uppercase tracking-wide mb-2">
                Expected additional lifespan:
              </p>
              {selected.map(item => (
                <div key={item.id} className="flex justify-between text-xs mb-1">
                  <span className="text-[var(--viz-secondary)]">{item.name}</span>
                  <span className="text-green-400">+{item.expectedLife.toLocaleString()} years</span>
                </div>
              ))}
            </div>
          )}

          {/* Key insight */}
          <div
            className="relative border border-[var(--viz-border)] rounded-lg p-3 max-w-xs text-center overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="text-xs text-[var(--viz-secondary)]">
              <span className="text-amber-400 font-medium">Lindy Effect:</span> For non-perishable
              things, every day of survival increases expected future lifespan. Old books that
              survived will likely outlast new bestsellers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LindyEffect;
