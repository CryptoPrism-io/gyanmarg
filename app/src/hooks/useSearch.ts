import { useMemo, useState, useCallback } from 'react';
import { modules } from '@/data/modules';

export interface SearchResult {
  moduleId: string;
  moduleName: string;
  moduleIcon: string;
  levelId: string;
  levelName: string;
  lessonId: string;
  lessonTitle: string;
  lessonType: string;
  overview: string;
  xpReward: number;
}

// Build flat index once — ~4,700 entries
function buildSearchIndex(): SearchResult[] {
  const index: SearchResult[] = [];
  for (const mod of modules) {
    if (!mod.isAvailable || !mod.pathway) continue;
    for (const level of mod.pathway) {
      for (const lesson of level.lessons) {
        index.push({
          moduleId: mod.id,
          moduleName: mod.title,
          moduleIcon: mod.icon,
          levelId: level.id,
          levelName: level.title,
          lessonId: lesson.id,
          lessonTitle: lesson.title,
          lessonType: lesson.type,
          overview: lesson.content.overview,
          xpReward: lesson.xpReward,
        });
      }
    }
  }
  return index;
}

// Simple fuzzy match — case-insensitive substring
function matchScore(text: string, query: string): number {
  const lower = text.toLowerCase();
  const q = query.toLowerCase();
  if (lower === q) return 100;
  if (lower.startsWith(q)) return 80;
  if (lower.includes(q)) return 60;
  // Check individual words
  const words = q.split(/\s+/);
  const matchedWords = words.filter(w => lower.includes(w));
  if (matchedWords.length === words.length) return 50;
  if (matchedWords.length > 0) return 30 * (matchedWords.length / words.length);
  return 0;
}

export function useSearch() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const index = useMemo(() => buildSearchIndex(), []);

  const results = useMemo(() => {
    if (!query || query.length < 2) return [];

    const scored: { result: SearchResult; score: number }[] = [];

    for (const item of index) {
      // Score on title (highest weight), module name, overview
      const titleScore = matchScore(item.lessonTitle, query) * 3;
      const moduleScore = matchScore(item.moduleName, query) * 2;
      const overviewScore = matchScore(item.overview, query);
      const totalScore = titleScore + moduleScore + overviewScore;

      if (totalScore > 0) {
        scored.push({ result: item, score: totalScore });
      }
    }

    // Sort by score descending, limit to 20
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 20).map(s => s.result);
  }, [query, index]);

  // Group results by module
  const groupedResults = useMemo(() => {
    const groups: Record<string, { moduleName: string; moduleIcon: string; results: SearchResult[] }> = {};
    for (const r of results) {
      if (!groups[r.moduleId]) {
        groups[r.moduleId] = { moduleName: r.moduleName, moduleIcon: r.moduleIcon, results: [] };
      }
      groups[r.moduleId].results.push(r);
    }
    return Object.entries(groups);
  }, [results]);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => { setIsOpen(false); setQuery(''); }, []);

  return {
    query,
    setQuery,
    results,
    groupedResults,
    isOpen,
    open,
    close,
    totalIndexed: index.length,
  };
}
