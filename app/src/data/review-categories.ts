/**
 * Review Categories — Built from lightweight manifests
 *
 * ZERO-WEIGHT: Uses modules-meta.ts (11 KB) + lesson-manifest.ts (54 KB)
 * Total: 65 KB. Does NOT import modules.ts (26 MB pathway chain).
 */

import { modulesMeta } from './modules-meta';
import { lessonManifest, moduleToPathwayKey } from './lesson-manifest';

export interface ReviewCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  pathwayIds: string[];
  xpPerCard: number;
  description: string;
}

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

const colorToReviewColor: Record<string, string> = {
  orange: 'golden', blue: 'electric', emerald: 'sage', purple: 'lavender',
  amber: 'golden', cyan: 'electric', rose: 'coral', green: 'sage',
  teal: 'sage', indigo: 'lavender', red: 'coral', yellow: 'golden',
  pink: 'coral', violet: 'lavender', lime: 'sage', sky: 'electric',
  slate: 'lavender', zinc: 'lavender', fuchsia: 'coral', stone: 'golden',
};

// Build categories from lightweight metadata — NO pathway data needed
export const reviewCategories: ReviewCategory[] = modulesMeta
  .filter(mod => {
    // Check if module has lessons in the manifest (equivalent to checking isAvailable + has pathway)
    const pathwayKey = moduleToPathwayKey[mod.id];
    return mod.isAvailable && pathwayKey && lessonManifest[pathwayKey]?.length > 0;
  })
  .map(mod => {
    const pathwayKey = moduleToPathwayKey[mod.id];
    const lessonIds = lessonManifest[pathwayKey] || [];

    const matchSet = new Set<string>();
    matchSet.add(mod.id);
    for (const lessonId of lessonIds) {
      const match = lessonId.match(/^(.+?)-\d+$/);
      if (match) matchSet.add(match[1]);
    }

    return {
      id: mod.id,
      name: mod.title,
      icon: iconToEmoji[mod.icon] || '📚',
      color: colorToReviewColor[mod.color] || 'lavender',
      pathwayIds: Array.from(matchSet),
      xpPerCard: 20,
      description: mod.subtitle,
    };
  });

export function getCategoryById(id: string): ReviewCategory | undefined {
  return reviewCategories.find(c => c.id === id);
}

export function getCategoryForPathwayId(pathwayId: string): ReviewCategory | undefined {
  if (!pathwayId) return undefined;
  return reviewCategories.find(cat => cat.pathwayIds.includes(pathwayId));
}
