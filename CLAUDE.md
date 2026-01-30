# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Gyanmarg** (ज्ञानमार्ग - "Path of Knowledge") is a gamified learning platform that transforms 45+ ebooks into interactive learning experiences using evidence-based learning science (spaced repetition, active recall, interleaving).

**Live**: https://gyanmarg-963362833537.us-central1.run.app

## Development Commands

```bash
cd app
npm install          # Install dependencies
npm run dev          # Start dev server at http://localhost:5173
npm run build        # TypeScript check + production build
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## Tech Stack

- **React 19** + **TypeScript** (strict mode)
- **Vite 7.2** (build tool)
- **TailwindCSS 3.4** (dark theme)
- **Zustand 4.5** (state with localStorage persistence)
- **Framer Motion** (animations)
- **React Router DOM 7.1** (routing)
- **Lucide React** (icons)

## Project Structure

```
Gyanmarg/
├── app/                      # Main React application
│   ├── src/
│   │   ├── components/       # Atomic design hierarchy
│   │   │   ├── atoms/        # Badge, Button, Input, ProgressBar, Skeleton, Spinner
│   │   │   ├── molecules/    # Card, FlashCard, LessonCard, PWAInstallPrompt, RichMarkdown
│   │   │   ├── organisms/    # DeepWorkTimer, LessonViewer, Navbar, Modal, LevelUpModal
│   │   │   └── templates/    # PageLayout
│   │   ├── features/         # Feature modules (see Routes below)
│   │   ├── store/            # Zustand stores
│   │   ├── data/             # Content: modules.ts, flashcards, pathways/
│   │   ├── types/            # TypeScript definitions
│   │   ├── hooks/            # Custom React hooks
│   │   └── lib/              # Utilities
│   ├── public/               # PWA assets (manifest.json, sw.js, icons/)
│   ├── Dockerfile            # Docker build
│   └── nginx.conf            # Production server config
├── .github/workflows/        # CI/CD to GCP Cloud Run
├── .claude/skills/           # Claude Code custom skills
└── docs/                     # Documentation
```

## Path Aliases

Configured in `vite.config.ts` and `tsconfig.app.json`:

```typescript
@/           → src/
@/components → src/components
@/features   → src/features
@/store      → src/store
@/data       → src/data
@/types      → src/types
@/hooks      → src/hooks
@/lib        → src/lib
@/styles     → src/styles
```

## Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | LandingPage | Public landing page |
| `/onboarding` | Onboarding | First-time user flow |
| `/dashboard` | Dashboard | Main progress overview |
| `/pathway` | LearningPathway | Current module learning path |
| `/review` | SpacedRepetition | SM-2 flashcard review |
| `/habits` | HabitCalendar | Habit tracking calendar |
| `/challenges` | DailyChallenges | Daily challenges |
| `/connections` | KnowledgeMap | Cross-concept connections |
| `/modules` | ModuleHub | Browse all 16 modules |
| `/modules/:moduleId` | ModulePage | Individual module content |

All routes except `/` and `/onboarding` require onboarding completion (ProtectedRoute).

## State Management (Zustand)

Four stores with localStorage persistence (prefix `gyanmarg-*`):

| Store | Purpose | Key State |
|-------|---------|-----------|
| `userStore.ts` | User profile | isOnboarded, name, selectedModules, pendingAchievement |
| `progressStore.ts` | Gamification | xp, level, completedLessons, achievements, pendingLevelUp |
| `habitStore.ts` | Habit tracking | habits, completions, streaks |
| `spacedRepetitionStore.ts` | Flashcards | cards, reviewQueue, SM-2 intervals |

## The 16 Learning Modules

Defined in `app/src/data/modules.ts`:

1. Personal Development - Atomic Habits, Deep Work
2. AI & Machine Learning - AI 2041, Deep Learning
3. Wealth Building - Intelligent Investor, Algo Trading
4. Negotiation & Influence - Never Split the Difference
5. Bruce Lee Philosophy - Be Water My Friend
6. Blockchain & Web3 - DeFi, Smart Contracts
7. Psychology & Decisions - Thinking Fast & Slow
8. Python & Data Science - Python, ML, Visualization
9. Life Design & Independence - Off Grid, Purpose
10. Master Synthesis - Cross-domain connections
11. Brain & Neuroscience - Cognitive optimization
12. Body & Longevity - Peter Attia, Bryan Johnson
13. Spirituality & Sadhana - Meditation, Breathwork
14. Shiva-Shakti Philosophy - Kashmir Shaivism
15. Temple Science - Vastu, Sacred Geometry
16. Polymath Mastery - Meta-learning, Mental Models

## Gamification System

- **XP**: 500 XP per level
- **Achievements**: Unlockable badges with XP rewards (defined in `data/achievements.ts`)
- **Streaks**: Consecutive days tracking
- **Celebrations**: LevelUpModal and AchievementUnlock components trigger globally

## Content Structure

**Pathways** (`data/pathways/*.ts`):
```typescript
{
  id: string;
  level: number;
  title: string;
  lessons: Lesson[];
}

interface Lesson {
  id: string;
  title: string;
  type: 'concept' | 'exercise' | 'quiz';
  duration: number;  // minutes
  xp: number;
  content: string;   // markdown
  keyTakeaways: string[];
  quiz?: QuizQuestion[];
}
```

**Flashcards** (`data/flashcards*.ts`): 2000+ cards organized by topic/batch.

## Key Conventions

- Follow atomic design (atoms → molecules → organisms → templates)
- Use TypeScript strict mode - no `any` types
- Use path aliases for all imports
- All user progress persists to Zustand stores
- Add XP rewards for completed actions
- Include quizzes with lessons
- Use Framer Motion for page transitions

## Deployment

**CI/CD**: Push to `master` triggers GitHub Actions → GCP Cloud Run

**Manual Docker**:
```bash
cd app
docker build -t gyanmarg .
docker run -p 8080:8080 gyanmarg
```

**Manual GCP**:
```bash
gcloud run deploy gyanmarg --source . --region us-central1 --allow-unauthenticated
```

## Design System

**Colors** (dark theme):
- Background: `#0A0A0B`
- Surface: `#111113`
- Amber (primary): `#F59E0B`
- Sage (success): `#22C55E`

**Typography**: Outfit (headlines), Inter (body), DM Mono (code)

## MCP Servers (.mcp.json)

- `playwright` - UI testing
- `github` - GitHub API access
- `filesystem` - Local file access
- `context7` - Context management
- `shadcn` - shadcn/ui component suggestions

## Important Rules

- NEVER use dummy/synthetic data without explicit user permission
- ALWAYS prefer editing existing files over creating new ones
- Persist user progress via Zustand stores
- Maintain the gamification loop (XP, achievements, celebrations)
- Keep content in `data/pathways/` - don't hardcode lesson content
