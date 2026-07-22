# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Polymind** (Gyanmarg) — Gamified learning platform transforming 45+ ebooks into interactive experiences using spaced repetition, active recall, and interleaving.

**Live**: https://ai-polymind.web.app

## Development Commands

All commands run from `app/`:

```bash
cd app
npm install          # Install dependencies
npm run dev          # Dev server at http://localhost:5173
npm run build        # TypeScript check + Vite production build
npm run lint         # ESLint
npm run preview      # Preview production build
```

**Deployment**: Push to `master` (paths `app/**`, `firebase.json`, `firestore.rules`) triggers GitHub Actions. One build, two targets:

- **Firebase Hosting** (`ai-polymind`) serves `index.html` and `public/` — keyless WIF, no service-account key.
- **S3 + CloudFront** (`gyanmarg-prod` / `E1XLQPBNNEVOB8`) serves all hashed assets — keyless AWS OIDC.

The project is on the Firebase **Spark** plan, which caps Hosting transfer per day. The ~105 MB payload (839 webp) would exhaust that in ~180 cold visits, so `vite.config.ts` rewrites built-asset URLs to CloudFront via `renderBuiltUrl` when `VITE_ASSET_BASE` is set. Firebase then serves ~2 KB per visit.

Two things this depends on — don't break them:

- **`public/` must stay same-origin.** A service worker can only control the origin it's served from, so `sw.js` has to come from Firebase; a cross-origin `manifest.json` breaks PWA install. This is why the config uses `renderBuiltUrl` rather than `base`.
- **CloudFront must return CORS headers** (`Managed-CORS-and-SecurityHeadersPolicy`). ES modules are always fetched with CORS semantics cross-origin, so without `Access-Control-Allow-Origin` every script fails and the page white-screens.

Assets are deployed **before** the HTML that references them, and the asset sync is additive (no `--delete`) so a cached `index.html` can't be left pointing at deleted objects.

## Tech Stack

React 19, TypeScript (strict), Vite 7.2, TailwindCSS 3.4, Zustand 4.5, Framer Motion, React Router DOM 7.1, Lucide React, Firebase (sync stub).

## Architecture

### Path Aliases (vite.config.ts + tsconfig.app.json)

`@/` → `src/`, `@/components`, `@/features`, `@/store`, `@/data`, `@/types`, `@/hooks`, `@/lib`, `@/styles`

### Component Hierarchy (Atomic Design)

`components/atoms/` → `molecules/` → `organisms/` → `templates/PageLayout`

### Routing (App.tsx)

**Protected** (require onboarding): `/dashboard`, `/pathway`, `/review`, `/challenges`, `/connections`, `/settings`, `/lab`, `/saved`, `/modules`, `/modules/:moduleId`

**Public**: `/`, `/science`, `/books`, `/blog`, `/blog/:articleId`, `/how-to`, `/brand-kit`

### State Management — 5 Zustand Stores

All persisted to localStorage with `gyanmarg-*` prefix:

| Store | Key | Purpose |
|-------|-----|---------|
| `userStore` | `gyanmarg-user` | Profile, onboarding, settings, favoriteModules, pendingAchievement |
| `progressStore` | `gyanmarg-progress` | XP, level, completedLessons, achievements, streaks, streak freezes, bookmarks, starred cards, weekly challenges, pendingLevelUp |
| `spacedRepetitionStore` | `gyanmarg-spaced-repetition` | SM-2 algorithm: unlockedCards, reviewHistory, easeFactor, intervals |
| `gameStore` | `gyanmarg-games` | Post-lesson mini-game scores, totalGamesPlayed, totalGameXP |
| `firebaseSync` | — | Sync trigger stub (`triggerSync()`) |

### Gamification

- 500 XP per level
- Achievements with XP rewards (`data/achievements.ts`)
- Streak tracking with 1 freeze/week
- Weekly auto-generated challenges
- LevelUpModal + AchievementUnlock trigger globally via store flags

## Content System

### Module Registry: 76 modules, 37 available

Defined in `app/src/data/modules.ts`. Each module has an `isAvailable` flag — `true` means it has full pathway content, `false` shows as "Coming Soon".

**14 Categories**: Mind & Performance, Technology & Code, Wealth & Power, Finance & Markets, Spirit & Body, Synthesis & Mastery, Science & Universe, Creative Arts, Strategy & Systems, History & Culture, Practical Mastery, Relationships & Society, Ancient Wisdom, Bharat Wisdom.

### Pathway Content Types

```typescript
type LessonType = 'intro' | 'concept' | 'exercise' | 'quiz' | 'reflection' | 'challenge';

interface PathwayLesson {
  id: string;              // e.g., "eq-001", "gita-042"
  title: string;
  type: LessonType;
  duration: number;        // minutes
  xpReward: number;
  content: {
    overview: string;
    mainContent: string;   // markdown
    keyTakeaway: string;
    actionItem?: string;
    quiz?: QuizQuestion;   // { question, options[], correct (0-indexed), explanation }
  };
}

interface PathwayLevel {
  id: string;              // e.g., "eq-level1", "gita-level5"
  title: string;
  description: string;
  icon: string;            // emoji
  color: string;           // tailwind class
  lessons: PathwayLesson[];
  unlockRequirement: number; // XP: 0, 500, 1000, 1500...
}
```

### Pathway File Pattern (two files per module)

1. `data/pathways/{module-id}-lessons.ts` — exports named arrays: `{prefix}LessonsLevel1[]`, `{prefix}LessonsLevel2[]`, etc.
2. `data/pathways/{module-id}.ts` — imports lesson arrays, exports `PathwayLevel[]` as default

**ID conventions**: Level IDs `{prefix}-level{n}`, Lesson IDs `{prefix}-{nnn}`. Typically 8 lessons/level, 6-8 quizzes per level.

### Image System (`lib/moduleImages.ts`)

- Module images: `assets/ai-images/modules/module-{id}.webp`
- Level images: `assets/ai-images/levels/level-{prefix}-{n}.webp`
- `moduleImages` record maps module ID → import, `levelImages` maps level ID → import
- Fallback: missing level image → module image → personalDevelopment default

## Adding a New Module (Checklist)

1. **Create** `data/pathways/{module-id}-lessons.ts` — export `PathwayLesson[]` arrays per level
2. **Create** `data/pathways/{module-id}.ts` — import lessons, export `PathwayLevel[]` default
3. **Update** `data/pathways/index.ts` — add export
4. **Update** `data/modules.ts` — import pathway, add module config with `isAvailable: true` and `pathway` prop
5. **Update** `lib/moduleImages.ts` — import + register module image and all level images
6. **Create** image files in `assets/ai-images/levels/` and `assets/ai-images/modules/`

## Utility Scripts (`app/scripts/`)

| Script | Purpose |
|--------|---------|
| `generate-ai-images.py` | Generate module/level images via Gemini API |
| `compress-images.py` | Batch compress images |
| `convert-to-webp.mjs` | Convert images to WebP |
| `generate-icons.cjs` | Generate PWA icon assets |

## Design System

**Dark theme**: Background `#0A0A0B`, Surface `#111113`, Amber primary `#F59E0B`, Sage success `#22C55E`

**Typography**: Outfit (headlines), Inter (body), DM Mono (code)

## Known Gotchas

- Generated TS lesson content often has **unescaped apostrophes** in single-quoted strings — always check after generating
- Chunk/temp files (L1L2, L3L4 patterns) get compiled by Vite — delete them after use
- The `gyanmarg-*` localStorage prefix is legacy from early naming — don't change it, breaks existing users

## Important Rules

- NEVER use dummy/synthetic data without explicit user permission
- ALWAYS prefer editing existing files over creating new ones
- Persist all user progress via Zustand stores
- Maintain the gamification loop (XP, achievements, celebrations)
- Keep lesson content in `data/pathways/` — never hardcode
