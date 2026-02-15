# Polymind — Manual Test Sheet

**Covers commits:** `b364c77` → `823cadf` → `ad9a8c9`
**Features:** Navigation refactor, Global search, Onboarding gate, Share card, Visual of the Day, Unified Profile

---

## Quick Checklist

```
ROUTING & ONBOARDING
[ ] Fresh install → redirects to /onboarding
[ ] Completing onboarding → lands on /dashboard
[ ] Protected routes (/dashboard, /pathway, /review, /profile) all gate on onboarding
[ ] Public routes (/, /science, /books, /blog, /how-to, /brand-kit, /changelog) work without onboarding
[ ] /settings → redirects to /profile
[ ] /saved → redirects to /profile
[ ] /connections → redirects to /pathway
[ ] /invalid-route → redirects to /
[ ] Page transitions animate (fade + slide)
[ ] Lazy-loaded pages show spinner while loading

NAVBAR (Desktop)
[ ] 4 tabs: Home, Learn, Review, Profile
[ ] Active tab has amber underline + highlight
[ ] Underline animates between tabs (layoutId spring)
[ ] Logo click → /dashboard
[ ] Logo hover: scale 1.05 + rotate 5°
[ ] "POLYMIND" text visible on sm+ screens
[ ] Search button visible with "Ctrl K" hint
[ ] Streak badge shows only when > 0 (coral, Flame icon)
[ ] XP badge always visible (golden, formatted with commas)
[ ] User avatar shows when signed in
[ ] Sign-in button shows when signed out (hidden on mobile)

NAVBAR (Mobile)
[ ] Bottom nav with 4 tabs (Home, Learn, Review, Profile)
[ ] Desktop nav hidden on mobile
[ ] Active tab has glow + top bar indicator
[ ] Labels visible under icons
[ ] Tap targets large enough (min 60px wide)
[ ] Safe area bottom respected on notch devices
[ ] Content doesn't get hidden behind nav

SEARCH
[ ] Ctrl+K / Cmd+K opens search modal
[ ] Ctrl+K again closes it (toggle)
[ ] Escape closes modal
[ ] Clicking backdrop closes modal
[ ] Clicking inside modal does NOT close it
[ ] Input auto-focuses on open
[ ] Placeholder shows lesson count ("Search 4,716 lessons...")
[ ] Typing < 2 chars → "Type at least 2 characters" message
[ ] No results → "No results for 'query'" message
[ ] Results grouped by module name
[ ] Module header shows match count ("3 matches")
[ ] Lesson type badges color-coded (intro=sunrise, concept=lavender, etc.)
[ ] Result shows: type badge, title, level name, XP reward
[ ] Footer shows total result count
[ ] Max 20 results shown
[ ] Title matches rank higher than overview matches
[ ] Case-insensitive ("REACT" = "react")
[ ] Multi-word search works ("daily habit")
[ ] Clicking result → navigates to /pathway/:mod/:level/:lesson
[ ] Modal closes after result click
[ ] Query cleared after close
[ ] Search re-opens empty

DASHBOARD
[ ] Greeting changes by time: morning (<12), afternoon (<17), evening
[ ] Shows user name if available, just greeting if not
[ ] Daily quote displays with author + source
[ ] "Past week" button toggles 7-day quote backlog
[ ] Backlog collapses smoothly (AnimatePresence)
[ ] "Today's Path" section title visible
[ ] "Continue Lesson" button (if in-progress) or "Start a Lesson" (if not)
[ ] Lesson button → navigates to /pathway
[ ] "+50 XP" badge on lesson button
[ ] "Review Flashcards" button always visible
[ ] Due card count shows when cards are due
[ ] "All caught up!" when no cards due
[ ] Review button → navigates to /review
[ ] Weekly quest shows progress bar when active + not completed
[ ] Weekly quest shows "Complete!" card when done + unclaimed
[ ] Visual of the Day renders below Today's Path
[ ] Stats card shows Level + XP badge
[ ] Progress bar to next level (glows when > 50%)
[ ] 3-column stats: Total XP, Day Streak, Lessons

PROFILE — HERO
[ ] Avatar shows user photo (or golden placeholder)
[ ] Name displays (profile name > displayName > "Learner")
[ ] Streak + lessons count in sub-line
[ ] Level progress bar with "Level N" / "Level N+1"
[ ] 4-stat grid: XP, Best Streak, Badges, Achievements
[ ] "Share My Stats" button visible
[ ] Share button shows "Generating..." while working
[ ] On mobile: native share sheet opens (if supported)
[ ] On desktop: downloads polymind-stats.png
[ ] Generated image has: brand, name, level, 4 stats, footer

PROFILE — TABS
[ ] 4 tabs: Overview, Badges, Saved, Data
[ ] Badge count shows next to Badges tab
[ ] Saved count shows next to Saved tab
[ ] Active tab has sunrise highlight
[ ] Tab content switches with fade animation
[ ] Default tab is Overview

PROFILE — OVERVIEW TAB
[ ] Achievements list with icon, name, description, XP
[ ] Unlocked achievements: golden bg
[ ] Locked achievements: grayed (50% opacity)
[ ] "X of Y unlocked" subtitle
[ ] Weekly Challenge link → /challenges
[ ] Cloud sync status (if signed in): icon + "Synced: X ago"
[ ] Sync button triggers manual sync

PROFILE — BADGES TAB
[ ] Filter buttons: All (N), Earned (N), Locked (N)
[ ] All filter shows everything
[ ] Earned filter shows only unlocked
[ ] Locked filter shows only locked
[ ] Unlocked badges sorted first
[ ] BadgeCard shows progress for locked badges
[ ] Empty state: "No badges earned yet" (Earned filter, 0 earned)

PROFILE — SAVED TAB
[ ] Saved cards list sorted by most recent
[ ] Card type badges color-coded (Overview=sunrise, etc.)
[ ] Module filter chips appear when cards from 2+ modules
[ ] "All (N)" chip + per-module chips with counts
[ ] Clicking module chip filters cards
[ ] Clicking same chip again shows All
[ ] Card click expands to show content
[ ] Content type renders markdown (for 'content' type)
[ ] "Saved [date]" shows in expanded view
[ ] "Remove" button deletes card with exit animation
[ ] Empty state: "No saved cards yet" message with icon

PROFILE — DATA TAB
[ ] Cloud Sync section (if configured): user photo, name, email
[ ] Sign Out button works
[ ] Sign In button shows when signed out
[ ] Export button downloads gyanmarg-backup-YYYY-MM-DD.json
[ ] Export shows green "Done!" for 3 seconds
[ ] Import opens file chooser (.json only)
[ ] Import shows "Restore from [date]?" confirmation
[ ] Import Confirm restores data + reloads page
[ ] Import Cancel dismisses without importing
[ ] Import invalid file → error message
[ ] Storage size displays (X.X KB)
[ ] Danger Zone: "Reset All Data" button
[ ] Reset shows confirmation with warning
[ ] Confirm delete: clears all stores + reloads → lands on onboarding
[ ] Cancel dismiss confirmation
[ ] App Info: version number displays
[ ] "Update" button clears service worker + caches + reloads
[ ] "Changelog" link → /changelog

STATE PERSISTENCE
[ ] isOnboarded persists (refresh after onboarding → still onboarded)
[ ] Profile data persists (name, goals, etc.)
[ ] Streak count persists across refreshes
[ ] Favorite modules persist
[ ] Onboarding progress persists (resume interrupted onboarding)
[ ] Settings changes persist
[ ] localStorage key: gyanmarg-user

DAILY LOGIN & STREAKS
[ ] First ever login: streak = 1, reward = 50 XP
[ ] Same day refresh: no double-count
[ ] Next consecutive day: streak increments
[ ] Skipped day: streak resets to 1
[ ] Daily reward modal shows on new day
[ ] Reward only claimable once per day
[ ] Reward amounts: Day 1=50, Day 2=75, Day 3=100, Day 7+=250

CELEBRATION MODALS
[ ] Achievement modal appears on unlock
[ ] Level up modal appears on level up
[ ] Multiple celebrations queue (one after another)
[ ] Daily reward modal on first login of day
[ ] No duplicate celebrations on page refresh

EDGE CASES
[ ] XP displays with comma formatting (e.g., 1,000)
[ ] Streak badge hidden when streak = 0
[ ] No due flashcards → "All caught up!" message
[ ] No saved cards → empty state message
[ ] No badges earned → empty state on Earned filter
[ ] Search with no matches → "No results" message
[ ] 404 route → redirect to /
```

---

## Detailed Test Scenarios

### 1. First-Time User Flow (End-to-End)

| Step | Action | Expected |
|------|--------|----------|
| 1 | Clear localStorage, visit app | Landing page loads at `/` |
| 2 | Click "Get Started" or navigate to `/dashboard` | Redirects to `/onboarding` |
| 3 | Enter name, click Continue | Step 2: "The hard truth" story slide |
| 4 | Continue through 3 story slides | Steps 2-4 are educational, auto-proceed |
| 5 | Select primary goal | Continue enabled |
| 6 | Select learning style | Continue enabled |
| 7 | Select time commitment | Continue enabled |
| 8 | Select 3+ domains, click "Build My Polymind" | Navigates to `/dashboard` |
| 9 | Dashboard loads | Greeting shows, daily reward modal appears |
| 10 | Check localStorage | `gyanmarg-user` has `isOnboarded: true` |

### 2. Onboarding Resume Flow

| Step | Action | Expected |
|------|--------|----------|
| 1 | Start onboarding, reach step 4 (goal selection) | Progress saved |
| 2 | Close browser / refresh page | Page reloads |
| 3 | Visit `/dashboard` | Redirects to `/onboarding` |
| 4 | Onboarding resumes at step 4 | Name + previous data preserved |

### 3. Search Flow (End-to-End)

| Step | Action | Expected |
|------|--------|----------|
| 1 | Press Ctrl+K | Search modal opens, input focused |
| 2 | Type "st" | "Type at least 2 characters" (still shows) |
| 3 | Type "sto" | Results appear (Stoicism, etc.) |
| 4 | See results grouped by module | Module headers visible |
| 5 | Click a result | Navigates to lesson, modal closes |
| 6 | Press Ctrl+K again | Modal opens empty (query cleared) |
| 7 | Press Escape | Modal closes |

### 4. Share Stats Flow

| Step | Action | Expected |
|------|--------|----------|
| 1 | Navigate to `/profile` | Profile page loads |
| 2 | Click "Share My Stats" | Button changes to "Generating..." |
| 3 | Wait for generation | On mobile: native share sheet. On desktop: PNG downloads |
| 4 | Open downloaded PNG | Shows branded card with name, level, XP, streak, badges |

### 5. Data Export/Import Flow

| Step | Action | Expected |
|------|--------|----------|
| 1 | Go to Profile → Data tab | Backup & Restore section visible |
| 2 | Click Export | JSON file downloads |
| 3 | Button shows "Done!" for 3 seconds | Then returns to "Export" |
| 4 | Click Import → select the exported file | Confirmation: "Restore from [date]?" |
| 5 | Click Confirm | Page reloads with restored data |

### 6. Reset All Data Flow

| Step | Action | Expected |
|------|--------|----------|
| 1 | Go to Profile → Data tab → Danger Zone | "Reset All Data" button visible |
| 2 | Click Reset All Data | Confirmation dialog appears |
| 3 | Click "Delete Everything" | All localStorage cleared, page reloads |
| 4 | App loads | Redirects to `/onboarding` (isOnboarded reset) |

---

## Test Environment Notes

- **Breakpoints**: Mobile (<768px), Tablet (768-1024px), Desktop (>1024px)
- **localStorage keys**: `gyanmarg-user`, `gyanmarg-progress`, `gyanmarg-habits`, `gyanmarg-spaced-repetition-v3`
- **Dev server**: `npm run dev` → http://localhost:5173
- **Build check**: `npm run build` (TypeScript + Vite)
- **Type check only**: `npx tsc -p tsconfig.app.json --noEmit`

---

## Automated Smoke Test Report

**Date:** 2026-02-14
**Tool:** Playwright MCP (Chromium)
**Server:** `npm run dev` → http://localhost:5173
**Viewport:** Desktop 1280x720, Mobile 375x812

### Test Results Summary

| # | Test | Result | Screenshot |
|---|------|--------|------------|
| 1 | Landing page loads | PASS | `01-landing-page.png` |
| 2 | Daily reward modal on first login | PASS | `01-landing-page.png` (modal overlay) |
| 3 | Onboarding gate — `/dashboard` redirects to `/onboarding` | PASS | `02-onboarding-gate.png` |
| 4 | Onboarding flow — all 8 steps complete | PASS | `03-05` series |
| 5 | Onboarding → Dashboard landing | PASS | `06-dashboard.png` |
| 6 | Dashboard — greeting, quote, Today's Path, Visual of the Day, stats | PASS | `06-dashboard.png` |
| 7 | Desktop navbar — 4 tabs (Home, Learn, Review, Profile) | PASS | `07-navbar-desktop.png` |
| 8 | Search — Ctrl+K opens modal, input auto-focused | PASS | `08-search-empty.png` |
| 9 | Search — results for "stoicism" grouped by module | PASS | `09-search-results.png` |
| 10 | Learn/Pathway — all 76 modules across 14 categories | PASS | `10-pathway-modules.png` |
| 11 | Review Hub — empty state with locked topics | PASS | `11-review-hub.png` |
| 12 | Profile — Overview tab (achievements, weekly challenge) | PASS | `12-profile-overview.png` |
| 13 | Profile — Badges tab (26 badges, filter buttons) | PASS | `13-profile-badges.png` |
| 14 | Profile — Saved tab (empty state) | PASS | `14-profile-saved-empty.png` |
| 15 | Profile — Data tab (Cloud Sync, Backup, Danger Zone) | PASS | `15-profile-data.png` |
| 16 | Legacy redirect `/settings` → `/profile` | PASS | — |
| 17 | Legacy redirect `/saved` → `/profile` | PASS | — |
| 18 | Legacy redirect `/connections` → `/pathway` | PASS | — |
| 19 | 404 route `/nonexistent-page` → `/` | PASS | — |
| 20 | Mobile (375px) — bottom nav with 4 tabs | PASS | `16-mobile-dashboard.png` |
| 21 | Mobile — dashboard fully responsive | PASS | `16-mobile-dashboard.png` |
| 22 | Mobile — profile fully responsive | PASS | `17-mobile-profile.png` |
| 23 | PWA prompt hidden for new users (<3 lessons) | PASS | `16-mobile-dashboard.png` (no prompt) |
| 24 | Share My Stats button visible on profile | PASS | `12-profile-overview.png` |
| 25 | XP badge shows 190 XP (formatted) in navbar | PASS | `07-navbar-desktop.png` |
| 26 | Zero console errors across all pages | PASS | — |

### Result: 26/26 PASS

### Issues Found & Fixed During Testing

1. **PWA Install Prompt showing too early** — The PWA install prompt was appearing immediately for new users during onboarding, blocking UI interactions. **Fixed:** Added `isEngagedUser` gate (requires `isOnboarded === true` AND `lessonsCompleted >= 3`) to `PWAInstallPrompt.tsx`. Component now returns `null` for new/casual users.

### Screenshots Directory

All screenshots saved to `test-results/`:

```
test-results/
  01-landing-page.png       — Landing page with daily reward modal
  02-onboarding-gate.png    — Onboarding step 1 (name entry)
  03-onboarding-story.png   — Onboarding story slide
  04-onboarding-goal.png    — Goal selection step
  05-onboarding-domains.png — Domain selection (3+ required)
  06-dashboard.png          — Full dashboard (desktop, full page)
  07-navbar-desktop.png     — Desktop navbar close-up
  08-search-empty.png       — Search modal empty state
  09-search-results.png     — Search results for "stoicism"
  10-pathway-modules.png    — Learning pathway (lesson viewer)
  11-review-hub.png         — Review hub with locked topics
  12-profile-overview.png   — Profile overview tab (full page)
  13-profile-badges.png     — Profile badges tab
  14-profile-saved-empty.png — Profile saved tab (empty)
  15-profile-data.png       — Profile data/settings tab
  16-mobile-dashboard.png   — Mobile dashboard (375px)
  17-mobile-profile.png     — Mobile profile (375px)
```
