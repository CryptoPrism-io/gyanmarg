/**
 * Review Categories — Auto-generated per-module
 *
 * Each module in modules.ts becomes its own ReviewCategory.
 * Uses the same pathwayId matching as lesson-flashcard-map.ts.
 */

import { modules } from './modules';

export interface ReviewCategory {
  id: string;          // Same as module ID
  name: string;        // Module title
  icon: string;        // Emoji icon
  color: string;       // Review Hub color palette key
  pathwayIds: string[];  // All pathwayId variants that match this module's flashcards
  xpPerCard: number;
  description: string; // Module subtitle
}

/**
 * Map module lucide icon names → emojis for the Review Hub
 */
const iconToEmoji: Record<string, string> = {
  brain: '🧠', cpu: '🤖', 'trending-up': '💰', 'message-square': '🤝',
  zap: '🥋', link: '🔗', lightbulb: '🎯', code: '🐍',
  home: '🏠', network: '🎓', dna: '🧬', heart: '❤️',
  'book-open': '📖', compass: '🧭', shield: '🛡️', target: '🎯',
  star: '⭐', flame: '🔥', globe: '🌍', microscope: '🔬',
  music: '🎵', pen: '✍️', camera: '📸', 'book-copy': '📚',
  palette: '🎨', users: '👥', scale: '⚖️', trophy: '🏆',
  telescope: '🔭', atom: '⚛️', leaf: '🌿', mountain: '🏔️',
  rocket: '🚀', sparkles: '✨', swords: '⚔️', scroll: '📜',
  crown: '👑', puzzle: '🧩', building: '🏛️', dollar: '💲',
  'chart-line': '📈', lock: '🔒', earth: '🌎', layers: '📊',
  feather: '🪶', gamepad: '🎮', hexagon: '⬡', infinity: '♾️',
  key: '🔑', lotus: '🪷', om: '🕉️', sun: '☀️',
  wand: '🪄', wrench: '🔧', activity: '💪', grid: '📐',
};

/**
 * Map module color names → Review Hub palette keys
 */
const colorToReviewColor: Record<string, string> = {
  orange: 'golden', blue: 'electric', emerald: 'sage', purple: 'lavender',
  amber: 'golden', cyan: 'electric', rose: 'coral', green: 'sage',
  teal: 'sage', indigo: 'lavender', red: 'coral', yellow: 'golden',
  pink: 'coral', violet: 'lavender', lime: 'sage', sky: 'electric',
  slate: 'lavender', zinc: 'lavender', fuchsia: 'coral', stone: 'golden',
};

/**
 * Build pathwayId match set for a module (same logic as lesson-flashcard-map.ts).
 * Includes the module ID itself + lesson prefix variants.
 */
function buildMatchPathwayIds(mod: typeof modules[0]): string[] {
  const matchSet = new Set<string>();
  matchSet.add(mod.id);

  if (mod.pathway) {
    for (const level of mod.pathway) {
      for (const lesson of level.lessons) {
        const match = lesson.id.match(/^(.+?)-\d+$/);
        if (match) {
          matchSet.add(match[1]);
        }
      }
    }
  }

  return Array.from(matchSet);
}

/**
 * Auto-generate one ReviewCategory per module
 */
export const reviewCategories: ReviewCategory[] = modules
  .filter(mod => mod.isAvailable && mod.pathway && mod.pathway.length > 0)
  .map(mod => ({
    id: mod.id,
    name: mod.title,
    icon: iconToEmoji[mod.icon] || '📚',
    color: colorToReviewColor[mod.color] || 'lavender',
    pathwayIds: buildMatchPathwayIds(mod),
    xpPerCard: 20,
    description: mod.subtitle,
  }));

/**
 * Get category by ID
 */
export function getCategoryById(id: string): ReviewCategory | undefined {
  return reviewCategories.find(c => c.id === id);
}

/**
 * Get category for a flashcard based on its pathwayId.
 * Uses exact matching against each category's pathwayIds set.
 */
export function getCategoryForPathwayId(pathwayId: string): ReviewCategory | undefined {
  if (!pathwayId) return undefined;
  return reviewCategories.find(cat =>
    cat.pathwayIds.includes(pathwayId)
  );
}
