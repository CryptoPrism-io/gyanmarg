import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@/components/atoms/Icon';
import { getDailyQuote, getPastQuotes, formatQuoteDate, authorInfo } from '@/data/quotes';

function AuthorPopover({ author, source, onClose }: { author: string; source?: string; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const info = authorInfo[author];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  if (!info) return null;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 4 }}
      transition={{ duration: 0.15 }}
      className="absolute z-50 top-full mt-2 w-72 p-4 rounded-xl bg-elevated border border-white/10 shadow-xl"
    >
      <div className="flex items-start justify-between mb-2">
        <div>
          <p className="text-sm font-semibold text-text-primary">{author}</p>
          {info.years && (
            <p className="text-[11px] text-text-muted/70">{info.years}</p>
          )}
        </div>
        <button onClick={onClose} className="p-0.5 hover:bg-white/10 rounded">
          <Icon name="close" size={14} className="text-text-muted" />
        </button>
      </div>
      <p className="text-xs text-text-secondary leading-relaxed">{info.bio}</p>
      {source && (
        <p className="text-[11px] text-text-muted/60 mt-2 italic">Source: {source}</p>
      )}
    </motion.div>
  );
}

function QuoteHistory({ onClose }: { onClose: () => void }) {
  const pastQuotes = getPastQuotes(60);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="relative w-full sm:max-w-lg max-h-[75vh] sm:max-h-[70vh] rounded-t-2xl sm:rounded-2xl bg-surface border border-white/10 overflow-hidden flex flex-col"
      >
        <div className="flex items-center justify-between p-4 border-b border-white/5">
          <p className="text-sm font-semibold text-text-primary">Quote History</p>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-lg">
            <Icon name="close" size={18} className="text-text-muted" />
          </button>
        </div>
        <div className="overflow-y-auto flex-1 p-4 space-y-4">
          {pastQuotes.map(({ date, quote }, i) => (
            <div key={i} className="pb-4 border-b border-white/5 last:border-0">
              <p className="text-[10px] uppercase tracking-[0.15em] text-text-muted/50 mb-1">
                {formatQuoteDate(date)}
              </p>
              <p className="text-sm text-text-primary leading-relaxed">
                &ldquo;{quote.text}&rdquo;
              </p>
              <p className="text-[11px] text-text-muted/70 mt-1">
                — {quote.author}
                {quote.source && <span className="text-text-muted/40">, {quote.source}</span>}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function QuoteSection() {
  const [dayOffset, setDayOffset] = useState(0);
  const [showAuthor, setShowAuthor] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  const date = new Date();
  date.setDate(date.getDate() - dayOffset);
  const quote = getDailyQuote(date);

  const words = quote.text.split(' ');
  const highlightIndex = Math.floor(words.length / 3);

  return (
    <>
      <motion.section
        key={dayOffset}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="w-12 h-[1px] bg-[var(--color-accent)]" />
          <div className="flex items-center gap-2">
            <button
              onClick={() => { setDayOffset(d => d + 1); setShowAuthor(false); }}
              className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-text-muted/50 hover:text-text-primary"
            >
              <Icon name="chevron_left" size={16} />
            </button>
            <button
              onClick={() => { setDayOffset(d => Math.max(0, d - 1)); setShowAuthor(false); }}
              disabled={dayOffset === 0}
              className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-text-muted/50 hover:text-text-primary disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <Icon name="chevron_right" size={16} />
            </button>
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-serif leading-[1.1] tracking-tight mb-6">
          &ldquo;{words.map((word, i) =>
            i === highlightIndex && word.length > 4
              ? <span key={i} className="text-[var(--color-accent)] italic">{word} </span>
              : <span key={i}>{word} </span>
          )}&rdquo;
        </h2>

        <div className="flex items-center gap-3">
          <span
            className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[var(--color-text-muted)] cursor-pointer hover:text-[var(--color-accent)] transition-colors relative"
            onClick={() => setShowAuthor(!showAuthor)}
          >
            — {quote.author}
          </span>
          <AnimatePresence>
            {showAuthor && (
              <AuthorPopover author={quote.author} source={quote.source} onClose={() => setShowAuthor(false)} />
            )}
          </AnimatePresence>
          {dayOffset > 0 && (
            <span className="text-[10px] text-text-muted/40 italic">
              {formatQuoteDate(date)}
            </span>
          )}
          <button
            onClick={() => setShowHistory(true)}
            className="ml-auto text-[10px] uppercase tracking-[0.15em] text-text-muted/40 hover:text-text-muted transition-colors"
          >
            History
          </button>
        </div>
      </motion.section>

      <AnimatePresence>
        {showHistory && <QuoteHistory onClose={() => setShowHistory(false)} />}
      </AnimatePresence>
    </>
  );
}
