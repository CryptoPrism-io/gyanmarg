# Polymind Editorial Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the entire Polymind UI from glassmorphism/rounded to a dual-theme editorial design system — Editorial Dark (Playfair Display serif + Inter, magazine aesthetic, gold #C5A368) and Minimal Swiss Light (Inter only, hairline borders, warm off-white #FAF9F6, gold #F59E0B accent).

**Architecture:** Replace the current design system (CSS variables + Tailwind config) with a new dual-theme token system. Replace Lucide React icons with Material Symbols Outlined (thin-line, premium feel). Rebuild each page component to match the Stitch mockup HTML stored in `app/public/stitch-*.html`. The theme toggle (`data-theme` attribute) already exists in the codebase and will continue to drive the switch.

**Tech Stack:** React 19, TypeScript, Tailwind CSS 3.4, Framer Motion, Material Symbols (Google Fonts), Playfair Display + Inter fonts.

**Reference Mockups (HTML):**
- `public/stitch-dark.html` — Dashboard dark
- `public/stitch-light.html` — Dashboard light
- `public/stitch-library-dark.html` — Library dark
- `public/stitch-library-light.html` — Library light
- `public/stitch-profile-dark.html` — Profile dark
- `public/stitch-profile-light-A.html` — Profile light (grid variant)
- `public/stitch-reader-dark.html` — Lesson Reader dark
- `public/stitch-review-dark.html` — Review Hub dark

---

## Phase 1: Design System Foundation (Tasks 1-3)

### Task 1: Replace Icon System — Lucide to Material Symbols

**Files:**
- Modify: `app/index.html` (add Material Symbols font link)
- Create: `app/src/components/atoms/Icon.tsx` (universal icon component)
- Modify: `app/src/components/organisms/Navbar.tsx` (swap icons)
- Modify: All files importing from `lucide-react` (102+ files — batch replace)

**Why first:** Icons are used everywhere. Changing the icon system first means every subsequent task uses the new icons.

- [ ] **Step 1: Add Material Symbols font to index.html**

Add to `<head>` in `app/index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet" />
```

- [ ] **Step 2: Add Playfair Display font to index.html**

Update the existing Google Fonts link in `app/index.html` to include Playfair Display:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Outfit:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```

- [ ] **Step 3: Create Icon component**

Create `app/src/components/atoms/Icon.tsx`:
```tsx
interface IconProps {
  name: string;
  size?: number;
  filled?: boolean;
  className?: string;
  weight?: number;
}

export function Icon({ name, size = 20, filled = false, className = '', weight = 300 }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined select-none ${className}`}
      style={{
        fontSize: size,
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' ${weight}, 'GRAD' 0, 'opsz' ${size}`,
      }}
    >
      {name}
    </span>
  );
}
```

- [ ] **Step 4: Create icon name mapping**

Create `app/src/lib/iconMap.ts` — maps old Lucide names to Material Symbols names:
```ts
// Lucide component name → Material Symbols icon name
export const iconMap: Record<string, string> = {
  // Navigation
  LayoutDashboard: 'grid_view',
  BookOpen: 'auto_stories',
  RotateCcw: 'history_edu',
  User: 'person',
  Search: 'search',
  X: 'close',
  ChevronLeft: 'chevron_left',
  ChevronRight: 'chevron_right',
  ChevronUp: 'expand_less',
  ArrowRight: 'arrow_forward',
  
  // Content
  Brain: 'psychology',
  Target: 'my_location',
  Zap: 'bolt',
  Sparkles: 'auto_awesome',
  Star: 'bookmark',
  Heart: 'favorite',
  Flame: 'local_fire_department',
  Trophy: 'emoji_events',
  
  // Learning
  BookMarked: 'bookmark',
  Play: 'play_arrow',
  CheckCircle2: 'check_circle',
  Clock: 'schedule',
  Lock: 'lock',
  
  // Gamification
  Medal: 'military_tech',
  Crown: 'workspace_premium',
  Gem: 'diamond',
  
  // Settings
  Settings: 'settings',
  Bell: 'notifications',
  Sun: 'light_mode',
  Moon: 'dark_mode',
  
  // Actions
  Share2: 'share',
  Download: 'download',
  Copy: 'content_copy',
  Trash: 'delete',
  Edit: 'edit',
  Plus: 'add',
  Minus: 'remove',
  Check: 'check',
  AlertCircle: 'error',
  AlertTriangle: 'warning',
  Info: 'info',
  
  // Module/category icons
  Compass: 'explore',
  Lightbulb: 'lightbulb',
  Microscope: 'biotech',
  Rocket: 'rocket_launch',
  FlaskConical: 'science',
  FileText: 'description',
};
```

- [ ] **Step 5: Update Navbar with Material Symbols**

Replace Lucide imports in `app/src/components/organisms/Navbar.tsx` with the new Icon component. The nav items become:
```ts
const navItems = [
  { id: 'dashboard', path: '/dashboard', label: 'Index', icon: 'grid_view' },
  { id: 'pathway', path: '/pathway', label: 'Archive', icon: 'auto_stories' },
  { id: 'review', path: '/review', label: 'Reflect', icon: 'history_edu' },
  { id: 'profile', path: '/profile', label: 'Profile', icon: 'person' },
];
```

- [ ] **Step 6: Build check**

Run: `cd app && npx tsc -p tsconfig.app.json --noEmit`
Expected: 0 errors (Navbar updated, other files still use Lucide — that's fine for now)

- [ ] **Step 7: Commit**

```bash
git add app/index.html app/src/components/atoms/Icon.tsx app/src/lib/iconMap.ts app/src/components/organisms/Navbar.tsx
git commit -m "feat: add Material Symbols icon system + Playfair Display font"
```

---

### Task 2: Replace Design Tokens — New Dual-Theme CSS Variables

**Files:**
- Modify: `app/src/index.css` (replace `:root` and `[data-theme="light"]` blocks)
- Modify: `app/tailwind.config.js` (update colors, fonts, borders, shadows)

This task replaces the entire color/surface/typography system with the Editorial Dark + Swiss Light tokens derived from the Stitch design systems.

- [ ] **Step 1: Replace `:root` CSS variables**

In `app/src/index.css`, replace the existing `:root` block with:
```css
:root {
  /* Ink — Tailwind's "white" resolves to this; flips per theme */
  --color-ink-rgb: 230 225 223;

  /* Editorial Dark — Surfaces */
  --bg-base-rgb: 20 19 18;
  --bg-elevated-rgb: 33 31 29;
  --bg-surface-rgb: 43 42 39;
  --bg-overlay-rgb: 55 52 50;
  --bg-highlight-rgb: 59 57 55;

  /* Text */
  --color-text-primary: #E6E1DF;
  --color-text-secondary: #D1C5B5;
  --color-text-muted: #9A8F81;
  --color-text-disabled: #4D463A;

  /* Gold accent */
  --color-accent: #C5A368;
  --color-accent-bright: #E6C183;
  --color-accent-dim: #9A7E4A;

  /* Secondary accents */
  --color-sage: #98D3B9;
  --color-lavender: #CEC6FF;
  --color-coral: #FFB4AB;

  /* Borders */
  --color-border: #262422;
  --color-border-subtle: rgba(230,225,223,0.06);
  --color-border-ghost: rgba(77,70,58,0.15);

  /* Typography */
  --font-serif: 'Playfair Display', 'Georgia', serif;
  --font-sans: 'Inter', -apple-system, system-ui, sans-serif;
  --font-display: 'Outfit', var(--font-sans);
}
```

- [ ] **Step 2: Replace `[data-theme="light"]` block**

```css
[data-theme="light"] {
  --color-ink-rgb: 26 26 26;

  --bg-base-rgb: 250 249 246;
  --bg-elevated-rgb: 255 255 255;
  --bg-surface-rgb: 244 243 241;
  --bg-overlay-rgb: 233 232 229;
  --bg-highlight-rgb: 227 226 224;

  --color-text-primary: #1A1A1A;
  --color-text-secondary: #4A4A4A;
  --color-text-muted: #717171;
  --color-text-disabled: #B0B0B0;

  --color-accent: #F59E0B;
  --color-accent-bright: #FBBF24;
  --color-accent-dim: #D97706;

  --color-sage: #059669;
  --color-lavender: #7C3AED;
  --color-coral: #DC2626;

  --color-border: #E5E5E5;
  --color-border-subtle: rgba(26,26,26,0.06);
  --color-border-ghost: rgba(26,26,26,0.08);

  /* Light mode uses Inter only — no serif display */
  --font-serif: 'Inter', -apple-system, system-ui, sans-serif;
}
```

- [ ] **Step 3: Update Tailwind config colors**

In `app/tailwind.config.js`, update the `colors` section:
```js
colors: {
  white: 'rgb(var(--color-ink-rgb) / <alpha-value>)',
  base: 'rgb(var(--bg-base-rgb) / <alpha-value>)',
  elevated: 'rgb(var(--bg-elevated-rgb) / <alpha-value>)',
  surface: 'rgb(var(--bg-surface-rgb) / <alpha-value>)',
  overlay: 'rgb(var(--bg-overlay-rgb) / <alpha-value>)',
  highlight: 'rgb(var(--bg-highlight-rgb) / <alpha-value>)',
  accent: {
    DEFAULT: 'var(--color-accent)',
    bright: 'var(--color-accent-bright)',
    dim: 'var(--color-accent-dim)',
  },
  'text-primary': 'var(--color-text-primary)',
  'text-secondary': 'var(--color-text-secondary)',
  muted: 'var(--color-text-muted)',
  sage: 'var(--color-sage)',
  lavender: 'var(--color-lavender)',
  coral: 'var(--color-coral)',
  border: 'var(--color-border)',
},
```

- [ ] **Step 4: Add serif font family to Tailwind**

```js
fontFamily: {
  serif: ['var(--font-serif)'],
  sans: ['var(--font-sans)'],
  display: ['var(--font-display)'],
  mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
},
```

- [ ] **Step 5: Update glass classes for both themes**

Replace all `.glass*` classes in `index.css` with theme-aware versions:
```css
.glass {
  background: rgb(var(--bg-elevated-rgb) / 0.7);
  backdrop-filter: blur(20px);
  border: 0.5px solid var(--color-border);
}
.glass-nav {
  background: rgb(var(--bg-base-rgb) / 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 0.5px solid var(--color-border);
}
```

- [ ] **Step 6: Build check + restart dev server**

Run: `cd app && npx tsc -p tsconfig.app.json --noEmit`
Expected: 0 errors

- [ ] **Step 7: Commit**

```bash
git add app/src/index.css app/tailwind.config.js
git commit -m "feat: new dual-theme design tokens — Editorial Dark + Swiss Light"
```

---

### Task 3: Rebuild Bottom Navigation

**Files:**
- Modify: `app/src/components/organisms/Navbar.tsx` (full rewrite of mobile nav)

The bottom nav is visible on every page and sets the tone. Rebuild to match the Stitch mockups — Editorial Dark uses serif italic labels with gold active state, Swiss Light uses uppercase tracking labels.

- [ ] **Step 1: Rewrite mobile nav**

The mobile nav (`<nav className="md:hidden ...">`) should become:
```tsx
<nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 safe-area-bottom">
  <div className="glass-nav px-6 pb-8 pt-3 flex justify-between items-center">
    {navItems.map((item) => {
      const isActive = location.pathname === item.path || location.pathname.startsWith(`${item.path}/`);
      return (
        <Link
          key={item.id}
          to={item.path}
          className={`flex flex-col items-center gap-1 ${
            isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-muted)]'
          } transition-colors`}
        >
          {isActive && <div className="w-6 h-[2px] bg-[var(--color-accent)] mb-0.5" />}
          <Icon name={item.icon} size={22} filled={isActive} weight={isActive ? 400 : 200} />
          <span className="text-[9px] uppercase tracking-[0.2em] font-semibold">{item.label}</span>
        </Link>
      );
    })}
  </div>
</nav>
```

- [ ] **Step 2: Visual check in browser**

Navigate to `http://localhost:5173/dashboard` and verify the bottom nav matches the Stitch mockup style — gold active tab with underline indicator, thin-line icons, uppercase labels.

- [ ] **Step 3: Commit**

```bash
git add app/src/components/organisms/Navbar.tsx
git commit -m "feat: editorial bottom nav with Material Symbols + gold active state"
```

---

## Phase 2: Page Rebuilds (Tasks 4-10)

Each task rebuilds one page to match the Stitch mockup HTML. The engineer should have the corresponding `stitch-*.html` file open for reference while working.

### Task 4: Rebuild Dashboard

**Files:**
- Modify: `app/src/features/dashboard/Dashboard.tsx`
- Modify: `app/src/components/organisms/ResumeCard.tsx`
- Modify: `app/src/components/organisms/DailyPowerMeter.tsx`
- Reference: `public/stitch-dark.html` and `public/stitch-light.html`

- [ ] **Step 1: Study the Stitch mockup HTML**

Read `public/stitch-dark.html`. Key design patterns to replicate:
- Hero quote section: Large serif text, gold keyword highlights, Plutarch attribution
- Greeting: "Issue No. 04" + serif "Good morning, Alex"
- Resume card: No glassmorphism — serif title, gold progress line, uppercase metadata
- Daily momentum: Large serif "27%" number, 4 activity icons in grid
- Action items: Numbered list style ("01.", "02.") with serif titles, gold XP badge
- No cards with borders — use whitespace and tonal bg shifts

- [ ] **Step 2: Rebuild Dashboard layout**

Rewrite `Dashboard.tsx` to follow the editorial layout. The main structure:
```tsx
<main className="px-6 space-y-16 mt-8 pb-24">
  {/* Hero Quote */}
  <section>
    <div className="w-12 h-[1px] bg-[var(--color-accent)] mb-8" />
    <h2 className="text-3xl md:text-5xl font-serif leading-[1.1] tracking-tight">
      "{quote.text}"
    </h2>
    <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[var(--color-text-muted)] mt-4 block">
      — {quote.author}
    </span>
  </section>

  {/* Greeting + Resume */}
  <section className="grid grid-cols-12 gap-y-12">
    {/* Left: Greeting */}
    <div className="col-span-12 md:col-span-4">
      <p className="text-xs uppercase tracking-[0.4em] font-bold text-[var(--color-text-muted)]">
        Issue No. {dayOfYear}
      </p>
      <p className="text-2xl font-serif mt-1">Good morning, {userName}.</p>
      <p className="text-sm text-[var(--color-text-muted)] italic mt-1">Your reading desk awaits.</p>
    </div>
    {/* Right: Resume Card */}
    <div className="col-span-12 md:col-start-6 md:col-span-7">
      <ResumeCard bookmark={bookmark} />
    </div>
  </section>

  {/* Daily Power + Actions */}
  <section className="grid grid-cols-12 gap-y-12 border-t border-[var(--color-border)] pt-12">
    <DailyPowerMeter />
    <ActionCards />
  </section>
</main>
```

- [ ] **Step 3: Rebuild ResumeCard**

Rewrite to editorial style — no glassmorphism card, just typography:
```tsx
<div className="group cursor-pointer" onClick={handleResume}>
  <div className="flex justify-between items-end mb-4">
    <div>
      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--color-accent)]">
        {moduleTitle}
      </p>
      <h3 className="text-2xl font-serif tracking-tight group-hover:text-[var(--color-accent)] transition-colors">
        {lessonTitle}
      </h3>
    </div>
  </div>
  <div className="w-full h-[1px] bg-[var(--color-border)] relative overflow-hidden mb-4">
    <div className="absolute left-0 top-0 h-full bg-[var(--color-accent)]" style={{ width: `${progress}%` }} />
  </div>
  <div className="flex justify-between items-center">
    <span className="text-[11px] text-[var(--color-text-muted)] tracking-wide">
      RESUMING {levelTitle}
    </span>
    <button className="text-xs uppercase tracking-widest font-bold">Resume ></button>
  </div>
</div>
```

- [ ] **Step 4: Rebuild DailyPowerMeter**

Replace the circular gradient widget with editorial typography:
```tsx
<div className="col-span-12 md:col-span-5 flex flex-col gap-8">
  <div className="flex items-end gap-4">
    <span className="text-6xl font-serif leading-none">{powerPercent}%</span>
    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--color-text-muted)] pb-2">
      Daily Momentum
    </span>
  </div>
  <div className="grid grid-cols-2 gap-y-6 gap-x-12">
    {activities.map(a => (
      <div key={a.id} className={`flex items-center gap-3 ${a.done ? '' : 'opacity-30'}`}>
        <Icon name={a.icon} size={18} filled={a.done} className={a.done ? 'text-[var(--color-accent)]' : ''} />
        <span className="text-[11px] uppercase tracking-wider font-semibold">{a.label}</span>
      </div>
    ))}
  </div>
</div>
```

- [ ] **Step 5: Build check + visual verify**

Run TypeScript check. Open browser, verify Dashboard matches `stitch-dark.html` layout. Toggle to light mode and verify it transforms to Swiss style.

- [ ] **Step 6: Commit**

```bash
git add app/src/features/dashboard/ app/src/components/organisms/ResumeCard.tsx app/src/components/organisms/DailyPowerMeter.tsx
git commit -m "feat: rebuild Dashboard — editorial dark + swiss light"
```

---

### Task 5: Rebuild Library (Learning Pathway — Module Browser)

**Files:**
- Modify: `app/src/features/learning-pathway/LearningPathway.tsx` (module list view)
- Modify: `app/src/components/molecules/NetflixModuleCard.tsx` → rename/rewrite as editorial module card
- Modify: `app/src/components/molecules/CategoryTabBar.tsx`
- Modify: `app/src/components/molecules/CategorySection.tsx`
- Reference: `public/stitch-library-dark.html` and `public/stitch-library-light.html`

Key changes:
- Category tabs: gold underline (not filled pills)
- Module cards: square images with serif title below, uppercase metadata, no rounded corners
- Section headers: serif + "N available" count
- Continue Reading: editorial resume card style

Steps follow same pattern as Task 4 — study mockup, rebuild layout, rebuild sub-components, build check, commit.

---

### Task 6: Rebuild Lesson Reader (Reels)

**Files:**
- Modify: `app/src/components/organisms/ReelsCardStack.tsx`
- Modify: `app/src/components/organisms/LessonViewer.tsx`
- Reference: `public/stitch-reader-dark.html`

Key changes:
- Full-screen immersive — remove remaining card-like styling
- Serif section headings for content cards
- Gold "INSIGHT" / "EXPLORE" type labels in uppercase tracking
- Right-edge vertical dot indicator (gold pill active)
- "SCROLL UP" cue at bottom in uppercase
- Bookmark icon (Material Symbols `bookmark`) instead of star
- Maximum readability: 15px Inter body, line-height 1.75

---

### Task 7: Rebuild Profile

**Files:**
- Modify: `app/src/features/profile/Profile.tsx`
- Reference: `public/stitch-profile-dark.html` and `public/stitch-profile-light-A.html`

Key changes:
- Large serif "Alex" name display
- Stats hero: large serif numbers separated by vertical hairlines
- Weekly momentum: simple gold/muted dots for M-S
- Tab bar: uppercase tracking with gold underline active state
- Journey section: tonal bg shift rows, no card borders

---

### Task 8: Rebuild Review Hub

**Files:**
- Modify: `app/src/features/spaced-repetition/SpacedRepetition.tsx` (hub view)
- Reference: `public/stitch-review-dark.html`

Key changes:
- Serif italic "Revisit" header
- Mastery ring: thin-stroke SVG, serif percentage
- Category list: serif names, tonal bg shifts, gold due badges
- "REVIEW N DUE CARDS" CTA: dark bg, gold text, sharp corners

---

### Task 9: Rebuild Flashcard Review (Reels session)

**Files:**
- Modify: `app/src/features/spaced-repetition/SpacedRepetition.tsx` (active review section)

Key changes:
- Full-screen immersive (same as lesson reader)
- Card front: centered serif question text
- Card back: Inter body answer text
- Rating buttons: 3 rectangles (no rounded), gold/muted/sage coloring
- Scroll-based navigation between cards

---

### Task 10: Rebuild Settings

**Files:**
- Modify: `app/src/features/profile/Profile.tsx` (Settings tab)

Key changes:
- Appearance toggle: 3 sharp-cornered buttons (Dark/Light/System)
- Preference rows: simple label + toggle, no card wrappers
- Hairline separators between sections

---

## Phase 3: Batch Icon Migration (Task 11)

### Task 11: Replace Lucide imports across all remaining files

**Files:** All 102+ files that import from `lucide-react`

- [ ] **Step 1: Create a search-and-replace script**

Write `app/scripts/migrate-icons.py` that:
1. Scans all `.tsx` files for `import { ... } from 'lucide-react'`
2. Extracts the icon names
3. Replaces the import with `import { Icon } from '@/components/atoms/Icon'`
4. Replaces JSX `<IconName className="..." />` with `<Icon name="material_name" className="..." />`
5. Uses the `iconMap` from Task 1

- [ ] **Step 2: Run the migration script**
- [ ] **Step 3: Manual fixes for edge cases**
- [ ] **Step 4: Build check — `npx tsc -p tsconfig.app.json --noEmit`**
- [ ] **Step 5: Remove `lucide-react` from dependencies**

```bash
cd app && npm uninstall lucide-react
```

- [ ] **Step 6: Final build check**
- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: complete icon migration — Lucide → Material Symbols"
```

---

## Phase 4: Polish (Tasks 12-13)

### Task 12: Landing Page Editorial Redesign

**Files:**
- Modify: `app/src/features/landing/LandingPage.tsx`

Rebuild to match editorial aesthetic — large serif headlines, asymmetric layout, minimal chrome, golden accents. Generate Stitch mockup first, then implement.

---

### Task 13: Final QA Pass

- [ ] **Step 1:** Navigate every page in dark mode, screenshot each
- [ ] **Step 2:** Toggle to light mode, navigate every page, screenshot each
- [ ] **Step 3:** Test on mobile viewport (375px width)
- [ ] **Step 4:** Fix any remaining visual inconsistencies
- [ ] **Step 5:** Final commit

```bash
git add -A
git commit -m "feat: complete editorial redesign — all pages dark + light"
```

---

## Execution Notes

- **Icon reference:** Material Symbols icon names: https://fonts.google.com/icons?icon.set=Material+Symbols
- **Font stacks:** Dark mode uses `font-serif` (Playfair Display) for headings. Light mode uses `font-sans` (Inter 300) for headings. The CSS variable `--font-serif` flips per theme.
- **Border rule:** 0.5px hairlines only. No 1px borders. No rounded corners > 4px.
- **No glassmorphism in light mode.** Light mode uses hairline borders and tonal shifts.
- **No pure black (#000) or pure white (#FFF)** anywhere.
- **Module category icons:** Replace emoji icons (currently used in module configs) with Material Symbols names over time. Low priority — emojis still work.
