import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Trash2, BookOpen } from 'lucide-react';
import { useProgressStore } from '@/store/progressStore';
import type { StarredCard } from '@/store/progressStore';
import { modules } from '@/data/modules';
import { RichMarkdown } from '@/components/molecules/RichMarkdown';

const cardTypeLabels: Record<string, string> = {
  overview: 'Overview',
  content: 'Key Insight',
  quiz: 'Quiz',
  takeaway: 'Takeaway',
  action: 'Action',
};

const cardTypeColors: Record<string, string> = {
  overview: 'text-sunrise bg-sunrise/10 border-sunrise/20',
  content: 'text-text-secondary bg-white/5 border-white/10',
  quiz: 'text-lavender bg-lavender/10 border-lavender/20',
  takeaway: 'text-sage bg-sage/10 border-sage/20',
  action: 'text-golden bg-golden/10 border-golden/20',
};

function SavedCardItem({ card, onUnstar }: { card: StarredCard; onUnstar: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const mod = modules.find((m) => m.id === card.moduleId);
  const colorClass = cardTypeColors[card.cardType] || cardTypeColors.content;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="rounded-2xl border border-white/[0.08] bg-elevated/60 backdrop-blur-sm overflow-hidden"
    >
      {/* Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-4 flex items-start gap-3 hover:bg-white/[0.02] transition-colors"
      >
        <div className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold border ${colorClass}`}>
          {cardTypeLabels[card.cardType] || card.cardType}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-text-primary truncate">{card.title}</p>
          {mod && (
            <p className="text-[11px] text-text-muted mt-0.5">{mod.title}</p>
          )}
        </div>
        <Star className="w-4 h-4 text-golden fill-golden shrink-0 mt-0.5" />
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 border-t border-white/[0.06]">
              <div className="pt-3 prose prose-invert prose-sm max-h-60 overflow-y-auto">
                {card.cardType === 'content' ? (
                  <RichMarkdown content={card.content} />
                ) : (
                  <p className="text-text-secondary text-sm leading-relaxed">{card.content}</p>
                )}
              </div>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/[0.06]">
                <span className="text-[10px] text-text-muted">
                  Saved {new Date(card.starredAt).toLocaleDateString()}
                </span>
                <button
                  onClick={(e) => { e.stopPropagation(); onUnstar(); }}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs text-coral/70 hover:text-coral hover:bg-coral/10 transition-colors"
                >
                  <Trash2 className="w-3 h-3" />
                  Remove
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function SavedCards() {
  const starredCards = useProgressStore((s) => s.starredCards);
  const unstarCard = useProgressStore((s) => s.unstarCard);
  const [filterModule, setFilterModule] = useState<string | null>(null);

  // Get unique modules that have starred cards
  const modulesWithCards = useMemo(() => {
    const ids = [...new Set(starredCards.map((c) => c.moduleId))];
    return ids
      .map((id) => modules.find((m) => m.id === id))
      .filter((m): m is typeof modules[number] => m !== undefined);
  }, [starredCards]);

  // Filtered cards
  const filteredCards = useMemo(() => {
    const cards = filterModule
      ? starredCards.filter((c) => c.moduleId === filterModule)
      : starredCards;
    return [...cards].sort((a, b) => new Date(b.starredAt).getTime() - new Date(a.starredAt).getTime());
  }, [starredCards, filterModule]);

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="px-4 pt-6 pb-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-golden/20 to-golden/5 border border-golden/20 flex items-center justify-center shadow-lg shadow-golden/10">
            <Star className="w-6 h-6 text-golden fill-golden" />
          </div>
          <div>
            <h1 className="text-2xl font-display font-bold text-text-primary">Saved Cards</h1>
            <p className="text-sm text-text-secondary">
              {starredCards.length} card{starredCards.length !== 1 ? 's' : ''} saved from lessons
            </p>
          </div>
        </div>

        {/* Module Filter */}
        {modulesWithCards.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <button
              onClick={() => setFilterModule(null)}
              className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                !filterModule
                  ? 'bg-golden/15 text-golden border-golden/25'
                  : 'bg-white/[0.03] text-text-muted border-white/[0.08] hover:border-white/15'
              }`}
            >
              All ({starredCards.length})
            </button>
            {modulesWithCards.map((mod) => {
              const count = starredCards.filter((c) => c.moduleId === mod.id).length;
              return (
                <button
                  key={mod.id}
                  onClick={() => setFilterModule(mod.id === filterModule ? null : mod.id)}
                  className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                    filterModule === mod.id
                      ? 'bg-golden/15 text-golden border-golden/25'
                      : 'bg-white/[0.03] text-text-muted border-white/[0.08] hover:border-white/15'
                  }`}
                >
                  {mod.title} ({count})
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Cards */}
      <div className="px-4">
        {filteredCards.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-elevated/80 border border-white/[0.08] flex items-center justify-center">
              <BookOpen className="w-10 h-10 text-text-muted/40" />
            </div>
            <h3 className="text-xl font-display font-bold text-text-primary mb-2">
              No saved cards yet
            </h3>
            <p className="text-sm text-text-secondary max-w-xs mx-auto leading-relaxed">
              Tap the star icon on any lesson card to save it here for quick reference.
            </p>
          </motion.div>
        ) : (
          <div className="space-y-2.5">
            <AnimatePresence>
              {filteredCards.map((card) => (
                <SavedCardItem
                  key={card.cardId}
                  card={card}
                  onUnstar={() => unstarCard(card.cardId)}
                />
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}

export default SavedCards;
