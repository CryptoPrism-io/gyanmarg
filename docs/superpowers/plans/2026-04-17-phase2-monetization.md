# Polymind Phase 2: Onboarding + Explore Tab + Stripe Payments

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Monetize Polymind — streamline onboarding to 3 steps with 2 free module picks, replace Review tab with Explore (119 visualizations), add Stripe Checkout for freemium subscriptions.

**Architecture:** Stripe Checkout (hosted) via Firebase Cloud Functions. Subscription state in Firestore, read by frontend subscriptionStore. Content gating via usePaywall hook. Free tier: first lesson of every module + 2 full free modules + 5 starter vizs.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind, Zustand, Firebase Auth/Firestore, Stripe Checkout, Firebase Cloud Functions.

---

## Context

Polymind is a micro-learning app with 76 modules and 4,716 lessons. The previous session delivered a complete editorial redesign and 97% bundle size reduction. Now the user wants to monetize: streamline onboarding to let users pick free modules, replace the Review tab with an Explore/Visualizations tab, and add Stripe payments for a freemium model.

**Current problems:**
- Onboarding is 8 steps (too long, collects unused data like "learning style")
- The Review/Reflect tab (spaced repetition) adds complexity nobody uses
- 119 visualization components exist but are buried in a legacy VisualLab page
- No monetization — everything is free, no revenue path

**Outcome:** 3-step onboarding → 2 free modules chosen → freemium paywall on the rest, with Stripe Checkout for subscriptions.

---

## Phase A: Streamlined Onboarding (3 Steps)

### Task A1: Update data model for free modules

**Files:**
- `app/src/types/index.ts` — Add `freeModules: string[]` to `OnboardingData`, make old fields optional
- `app/src/store/userStore.ts` — Add `freeModules: string[]` to state, add `isFreeModule(id)` action, update `completeOnboarding`
- `app/src/lib/firebase/types.ts` — Add `freeModules` to `FirestoreUserDocument`

```typescript
// types/index.ts — updated OnboardingData
export interface OnboardingData {
  name: string;
  freeModules: string[]; // 2 modules user picked as free
  // Legacy fields (optional for backward compat)
  primaryGoal?: string;
  learningStyle?: string;
  dailyTime?: number;
  selectedDomains?: string[];
  completed: boolean;
  completedAt: string | null;
}
```

### Task A2: Rewrite Onboarding (8 steps → 3 steps)

**File:** `app/src/features/onboarding/Onboarding.tsx` — full rewrite

- **Step 1**: Name + Welcome (keep current, remove story slides)
- **Step 2**: Pick 2 Free Modules (grid of 76 modules from `modules-meta.ts`, grouped by category)
- **Step 3**: You're Ready (show choices, "Enter the Library" CTA)

### Task A3: Handle existing users

Default `freeModules` to `[]` for existing users. They get free tier until subscribing.

---

## Phase B: Replace Reflect Tab with Explore

### Task B1: Update Navbar

**File:** `app/src/components/organisms/Navbar.tsx` — one-line change: Reflect → Explore

### Task B2: Create Explore page

**New file:** `app/src/features/explore/ExplorePage.tsx` — refactored from VisualLab (2,262 lines). Editorial header, category tabs, 2-col grid, lock/unlock indicators.

### Task B3: Update routes

**File:** `app/src/App.tsx` — `/explore` route, redirects for `/review` and `/visualizations`

### Task B4: Relocate spaced repetition

**File:** `app/src/features/profile/Profile.tsx` — Add "Review Cards" section. Keep data/stores untouched.

---

## Phase C: Stripe Payments (Freemium)

### Freemium model

| Tier | Access |
|------|--------|
| **Free** | First lesson of Level 1 per module + 2 free modules (onboarding pick) + 5 starter vizs |
| **Pro Monthly** | Everything |
| **Pro Annual** | Everything, discounted |
| **Lifetime** | Everything, one-time |

### Task C1: Stripe backend (Firebase Cloud Functions)

**New:** `functions/src/index.ts` — `createCheckoutSession`, `stripeWebhook`, `createPortalSession`

### Task C2: Subscription store

**New:** `app/src/store/subscriptionStore.ts` — Reads from Firestore, NOT localStorage

### Task C3: Paywall hook

**New:** `app/src/hooks/usePaywall.ts` — `canAccessModule()`, `canAccessLesson()`, `canAccessViz()`, `showPaywall()`

### Task C4: PaywallGate component

**New:** `app/src/components/organisms/PaywallGate.tsx` — Editorial modal with 3 pricing cards

### Task C5: Wire gating

Modify: `LearningPathway.tsx`, `ExplorePage.tsx`, `Dashboard.tsx`, `Profile.tsx`

### Task C6: Deploy

Update `.github/workflows/deploy.yml`, env vars, Stripe webhook config

---

## Execution Order

| # | Task | Effort | Dependency |
|---|------|--------|------------|
| 1 | A1: Data model | 15 min | None |
| 2 | A2: Rewrite Onboarding | 45 min | A1 |
| 3 | A3: Existing users | 10 min | A1 |
| 4 | B1: Navbar | 2 min | None |
| 5 | B2: ExplorePage | 60 min | B1 |
| 6 | B3: Routes | 10 min | B2 |
| 7 | B4: Spaced rep relocation | 15 min | B3 |
| 8 | C1: Stripe backend | 60 min | Stripe account |
| 9 | C2: Subscription store | 20 min | C1 |
| 10 | C3: Paywall hook | 15 min | C2, A1 |
| 11 | C4: PaywallGate | 30 min | C3 |
| 12 | C5: Wire gating | 30 min | C4 |
| 13 | C6: Deploy | 20 min | C1 |

**Total: ~5.5 hours**

---

## Critical Files

| File | Change |
|------|--------|
| `app/src/types/index.ts` | Add `freeModules` to OnboardingData |
| `app/src/store/userStore.ts` | Add `freeModules` state + `isFreeModule` action |
| `app/src/features/onboarding/Onboarding.tsx` | Full rewrite: 8 → 3 steps |
| `app/src/components/organisms/Navbar.tsx` | Swap Reflect → Explore |
| `app/src/features/explore/ExplorePage.tsx` | NEW — viz gallery |
| `app/src/App.tsx` | Route changes + redirects |
| `app/src/store/subscriptionStore.ts` | NEW — Firestore subscription state |
| `app/src/hooks/usePaywall.ts` | NEW — content gating |
| `app/src/components/organisms/PaywallGate.tsx` | NEW — upgrade modal |
| `functions/src/index.ts` | NEW — Stripe backend |
| `app/src/features/learning-pathway/LearningPathway.tsx` | Lesson lock gating |
| `app/src/features/profile/Profile.tsx` | Subscription section + review cards |
