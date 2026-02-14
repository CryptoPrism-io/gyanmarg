import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, BookOpen, ChevronRight } from 'lucide-react';
import { useSearch } from '@/hooks/useSearch';

export function SearchModal() {
  const navigate = useNavigate();
  const { query, setQuery, groupedResults, results, isOpen, open, close, totalIndexed } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut: Ctrl+K or Cmd+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) close();
        else open();
      }
      if (e.key === 'Escape' && isOpen) {
        close();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, open, close]);

  // Auto-focus input when opening
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSelect = (moduleId: string, levelId: string, lessonId: string) => {
    close();
    navigate(`/pathway/${moduleId}/${levelId}/${lessonId}`);
  };

  const lessonTypeColors: Record<string, string> = {
    intro: 'text-sunrise bg-sunrise/10',
    concept: 'text-lavender bg-lavender/10',
    exercise: 'text-sage bg-sage/10',
    quiz: 'text-golden bg-golden/10',
    reflection: 'text-coral bg-coral/10',
    challenge: 'text-sky bg-sky/10',
  };

  if (!isOpen) {
    return (
      <button
        onClick={open}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-white/15 text-text-muted hover:text-text-secondary transition-all text-xs"
        title="Search (Ctrl+K)"
      >
        <Search className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-white/[0.06] text-[10px] font-mono text-text-muted ml-1">
          Ctrl K
        </kbd>
      </button>
    );
  }

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-start justify-center pt-[10vh] px-4"
        onClick={close}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg bg-elevated border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Search Input */}
          <div className="flex items-center gap-3 p-4 border-b border-white/[0.06]">
            <Search className="w-5 h-5 text-text-muted shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${totalIndexed.toLocaleString()} lessons...`}
              className="flex-1 bg-transparent text-text-primary text-base placeholder:text-text-muted outline-none"
              autoComplete="off"
              spellCheck={false}
            />
            <button
              onClick={close}
              className="w-7 h-7 rounded-lg bg-white/[0.06] hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-text-muted" />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-[50vh] overflow-y-auto">
            {query.length < 2 ? (
              <div className="p-6 text-center">
                <BookOpen className="w-8 h-8 text-text-muted/30 mx-auto mb-2" />
                <p className="text-sm text-text-muted">Type at least 2 characters to search</p>
                <p className="text-[11px] text-text-muted/60 mt-1">
                  Search lesson titles, topics, and overviews
                </p>
              </div>
            ) : results.length === 0 ? (
              <div className="p-6 text-center">
                <p className="text-sm text-text-muted">No results for &ldquo;{query}&rdquo;</p>
                <p className="text-[11px] text-text-muted/60 mt-1">Try different keywords</p>
              </div>
            ) : (
              <div className="py-2">
                {groupedResults.map(([moduleId, group]) => (
                  <div key={moduleId}>
                    {/* Module header */}
                    <div className="px-4 py-2 flex items-center gap-2">
                      <span className="text-xs font-semibold text-text-muted uppercase tracking-wide">
                        {group.moduleName}
                      </span>
                      <span className="text-[10px] text-text-muted/50">
                        {group.results.length} match{group.results.length !== 1 ? 'es' : ''}
                      </span>
                    </div>

                    {/* Lessons */}
                    {group.results.map((r) => (
                      <button
                        key={r.lessonId}
                        onClick={() => handleSelect(r.moduleId, r.levelId, r.lessonId)}
                        className="w-full text-left px-4 py-2.5 hover:bg-white/[0.04] transition-colors flex items-center gap-3 group"
                      >
                        <div className={`shrink-0 px-1.5 py-0.5 rounded text-[9px] font-semibold ${lessonTypeColors[r.lessonType] || 'text-text-muted bg-white/5'}`}>
                          {r.lessonType}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-text-primary truncate group-hover:text-sunrise transition-colors">
                            {r.lessonTitle}
                          </p>
                          <p className="text-[11px] text-text-muted truncate mt-0.5">
                            {r.levelName} &middot; {r.xpReward} XP
                          </p>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-text-muted/30 group-hover:text-sunrise transition-colors shrink-0" />
                      </button>
                    ))}
                  </div>
                ))}

                {/* Result count */}
                <div className="px-4 py-2 border-t border-white/[0.06]">
                  <p className="text-[10px] text-text-muted text-center">
                    {results.length} result{results.length !== 1 ? 's' : ''} found
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

export default SearchModal;
