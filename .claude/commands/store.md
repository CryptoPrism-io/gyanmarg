# Create/Update Zustand Store

Create a new Zustand store or add actions to an existing store.

## Arguments
$ARGUMENTS - Store name and purpose (e.g., "challengeStore daily challenge tracking")

## Instructions

### Store Location
`app/src/store/{storeName}Store.ts`

### Store Template
```typescript
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface {StoreName}State {
  // State properties
}

interface {StoreName}Actions {
  // Action methods
}

type {StoreName}Store = {StoreName}State & {StoreName}Actions;

export const use{StoreName}Store = create<{StoreName}Store>()(
  persist(
    (set, get) => ({
      // Initial state

      // Actions
    }),
    {
      name: 'gyanmarg-{store-name}',  // localStorage key
    }
  )
);
```

### Existing Stores Reference
- `userStore.ts` - User profile, settings, onboarding
- `progressStore.ts` - XP, levels, achievements, lessons
- `habitStore.ts` - Habit tracking, streaks

### Guidelines
- Always use `persist` middleware for localStorage
- Use `gyanmarg-` prefix for storage keys
- Keep stores focused on single responsibility
- Actions should be pure functions
- Use `get()` to access current state in actions
- Export the hook with `use` prefix

### Common Patterns
```typescript
// Add XP
addXP: (amount: number) => set((state) => ({
  xp: state.xp + amount,
  level: Math.floor((state.xp + amount) / 500) + 1
})),

// Toggle item in array
toggleItem: (id: string) => set((state) => ({
  items: state.items.includes(id)
    ? state.items.filter((i) => i !== id)
    : [...state.items, id]
})),

// Reset state
reset: () => set({ /* initial state */ })
```
