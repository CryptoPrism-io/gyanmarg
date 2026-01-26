# Gyanmarg - The Path of Knowledge

## Project Overview
Gyanmarg is a gamified, interactive learning platform that transforms a 45+ ebook collection into engaging, memorable learning experiences using evidence-based learning science.

## Tech Stack
- **Frontend**: React 19 + TypeScript (strict mode)
- **Build**: Vite 7.2
- **Styling**: TailwindCSS 3.4 (dark theme, slate colors)
- **State**: Zustand 5.0 with localStorage persistence
- **Animation**: Framer Motion 11.15
- **Icons**: Lucide React
- **Routing**: React Router DOM 7.1

## Project Structure
```
Gyanmarg/
├── app/                          # Main React application
│   ├── src/
│   │   ├── components/           # Atomic design (atoms, molecules, organisms, templates)
│   │   ├── features/             # Feature modules (dashboard, learning-pathway, etc.)
│   │   ├── store/                # Zustand stores (userStore, progressStore, habitStore)
│   │   ├── data/                 # Content and pathways for all 10 modules
│   │   ├── types/                # TypeScript definitions
│   │   ├── hooks/                # Custom React hooks
│   │   └── lib/                  # Utilities
│   └── public/                   # Static assets
├── docs/                         # Documentation (plan.md, SETUP-GUIDE.md)
└── src/                          # Original pre-refactor components
```

## The 10 Learning Modules
1. Personal Development (Atomic Habits, Deep Work, etc.)
2. AI & Machine Learning
3. Wealth Building
4. Negotiation & Influence
5. Bruce Lee Philosophy
6. Blockchain & Web3
7. Psychology & Decision Science
8. Python & Data Science
9. Life Design & Independence
10. Master Synthesis (cross-domain connections)

## Key Patterns & Conventions

### Component Architecture (Atomic Design)
- **Atoms**: Basic components (Badge, Button, Input, ProgressBar, Skeleton, Spinner)
- **Molecules**: Composite components (Card, FlashCard, HabitItem, LessonCard)
- **Organisms**: Complex components (DeepWorkTimer, Modal, Navbar)
- **Templates**: Layout wrappers (PageLayout)

### Path Aliases
Use these import aliases (configured in vite.config.ts):
- `@/components` → src/components
- `@/features` → src/features
- `@/store` → src/store
- `@/data` → src/data
- `@/types` → src/types
- `@/hooks` → src/hooks
- `@/lib` → src/lib

### State Management (Zustand)
- `userStore.ts` - User profile, onboarding status, settings
- `progressStore.ts` - XP, levels, achievements, lesson completion
- `habitStore.ts` - Habit tracking and streaks

All state persists to localStorage with prefix `gyanmarg-*`

### Gamification System
- XP: 500 XP per level
- Achievements: Unlockable badges with XP rewards
- Streaks: Consecutive days of activity
- Daily Challenges: 5 random challenges per day

### Learning Science Implementation
- Active Recall (quizzes in every lesson)
- Spaced Repetition (SM-2 algorithm)
- Interleaving (mix concepts from different books)
- Elaborative Interrogation ("Why?" and "How?" prompts)
- Dual Coding (icons, colors, visuals + text)
- Generation Effect (users create habits, action plans)

## Development Commands
```bash
cd app
npm install        # Install dependencies
npm run dev        # Start dev server (http://localhost:5173)
npm run build      # Production build
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## Important Guidelines

### DO
- Follow atomic design for new components
- Use TypeScript strict mode - no `any` types
- Use Tailwind utility classes for styling
- Persist user progress to Zustand stores
- Add XP rewards for completed actions
- Include quizzes with lessons
- Use Framer Motion for page transitions

### DON'T
- Use dummy/synthetic data without explicit user permission
- Create new files when editing existing ones works
- Skip TypeScript types
- Hardcode content - use data files in `/data/pathways/`
- Break the gamification loop

## Pathway Structure
Each pathway in `/data/pathways/` follows this structure:
```typescript
{
  id: string,
  title: string,
  description: string,
  lessons: [
    {
      id: string,
      title: string,
      type: 'intro' | 'concept' | 'challenge',
      duration: number,  // minutes
      xp: number,
      content: string,   // markdown
      keyTakeaways: string[],
      actionItems: string[],
      quiz?: QuizQuestion[]
    }
  ]
}
```

## Routes
- `/onboarding` - First-time user flow
- `/dashboard` - Main progress overview
- `/pathway` - Current module learning path
- `/review` - Spaced repetition flashcards
- `/habits` - Habit calendar tracker
- `/challenges` - Daily challenges
- `/connections` - Knowledge map
- `/modules` - Browse all 10 modules
- `/modules/:moduleId` - Individual module page
