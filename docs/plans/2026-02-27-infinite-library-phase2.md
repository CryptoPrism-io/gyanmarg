# Infinite Library Phase 2: Content Pages + Images

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Update all remaining content pages (Science, How-To, Blog) and generate new images to complete the "Infinite Library" repositioning.

**Architecture:** Direct file edits to Science page, How-To page, and blog data. New Gemini image generation script for library-themed images. All changes are copy/content — no structural React changes needed.

**Tech Stack:** React/TypeScript (existing pages), Python + Gemini 2.5 Flash Image API (image generation)

---

## Task 1: Rewrite Learning Science Page

**Files:**
- Modify: `app/src/features/science/LearningSciencePage.tsx`

**What changes:**
The entire page shifts from "Why You Forget & How to Remember" to "The Science of Cross-Domain Reading." Keep the educational rigor and interactive elements, but reframe around WHY reading across domains makes you smarter.

### Step 1: Update technique data array (lines 33-110)

Replace the 4 techniques with new library-aligned versions:

```typescript
const techniques = [
  {
    id: 'cross-domain',
    icon: Shuffle,
    title: 'Cross-Domain Reading',
    subtitle: 'The polymath advantage',
    color: 'amber',
    description: 'Reading across multiple domains creates richer neural networks. When you connect Stoic philosophy to AI ethics, or neuroscience to leadership, your brain builds stronger, more flexible knowledge structures.',
    stats: [
      { value: '43%', label: 'Better problem solving' },
      { value: '3x', label: 'Better knowledge transfer' },
    ],
    howItWorks: [
      'Read psychology for 20 minutes',
      'Switch to AI or science',
      'Then philosophy or history',
      'Return to psychology with fresh eyes',
      'Connections form naturally across domains',
    ],
  },
  {
    id: 'immersive-reading',
    icon: Brain,
    title: 'Immersive Reading',
    subtitle: 'Depth, not summaries',
    color: 'sage',
    description: 'Unlike book summaries that strip away nuance, immersive reading preserves the depth of ideas. Each lesson is crafted to feel like reading the best chapters of the best books — distilled, not diluted.',
    stats: [
      { value: '76', label: 'Domains to explore' },
      { value: '4700+', label: 'Immersive lessons' },
    ],
    howItWorks: [
      'Choose a domain that interests you',
      'Read curated lessons from top authors',
      'Engage with quizzes that test understanding',
      'See key takeaways crystallized',
      'Move to a new domain or go deeper',
    ],
  },
  {
    id: 'neuroplasticity',
    icon: Target,
    title: 'Neuroplasticity',
    subtitle: 'Your brain grows by reading',
    color: 'lavender',
    description: 'Every time you explore a new domain, your brain physically rewires. Neuroscience shows that diverse intellectual stimulation increases gray matter density and creates new neural pathways that enhance all thinking.',
    stats: [
      { value: '14', label: 'Knowledge categories' },
      { value: '1000+', label: 'Authors distilled' },
    ],
    howItWorks: [
      'New domains activate new brain regions',
      'Diverse reading builds cognitive flexibility',
      'Cross-domain patterns strengthen connections',
      'Regular reading compounds brain growth',
      'Over time, thinking becomes richer and faster',
    ],
  },
  {
    id: 'curiosity-driven',
    icon: Trophy,
    title: 'Curiosity-Driven Learning',
    subtitle: 'Follow your interests',
    color: 'coral',
    description: 'Research shows that curiosity activates the brain\'s reward system and enhances memory formation. When you read what genuinely interests you — across any domain — you absorb and retain far more.',
    stats: [
      { value: '89%', label: 'Higher engagement' },
      { value: '5x', label: 'More consistent readers' },
    ],
    howItWorks: [
      'Browse 76 domains freely',
      'Start wherever curiosity leads',
      'Read at your own pace — no pressure',
      'Track your exploration journey',
      'Celebrate breadth of knowledge',
    ],
  },
];
```

### Step 2: Update techniqueImages map (lines 26-31)

```typescript
const techniqueImages: Record<string, string> = {
  'cross-domain': imgBreakthrough,
  'immersive-reading': imgSpacedRepetition,
  'neuroplasticity': imgVisualLearning,
  'curiosity-driven': imgGamification,
};
```

### Step 3: Update hero section (lines 198-227)

- Badge: "THE SCIENCE" stays
- Headline: "Why You Forget" / "How to Remember Forever" → "Why Reading Across Domains" / "Makes You Smarter"
- Subtitle: "140+ years of cognitive science" → "The neuroscience behind polymathic thinking — and why reading broadly is the most powerful way to grow your mind."

### Step 4: Reframe "The Problem" section → "The Opportunity" (lines 231-367)

- Badge: "THE PROBLEM" → "THE BRAIN SCIENCE"
- Replace forgetting curve with "Knowledge Network" visualization
- Headline: "The Ebbinghaus Forgetting Curve" → "Your Brain on Cross-Domain Reading"
- Replace the forgetting curve SVG with a network diagram showing how cross-domain knowledge connects
- Key insight cards: "Without Intervention" / "With Spaced Repetition" → "Narrow Reading" / "Cross-Domain Reading"
- "Narrow Reading": "Reading only in your field creates isolated knowledge silos. Ideas don't connect. Thinking becomes rigid."
- "Cross-Domain Reading": "Reading across 76 domains creates rich neural networks. Ideas compound. Thinking becomes flexible and creative."

### Step 5: Update "The Solution" section (lines 370-453)

- Badge: "THE SOLUTION" → "THE FOUR PILLARS"
- Headline: "4 Evidence-Based Techniques" → "4 Pillars of Polymathic Reading"
- Subtitle: "Polymind combines four proven learning methods" → "Why the world's greatest thinkers read across every domain"

### Step 6: Update "The Polymind Way" section (lines 456-497)

- Keep structure, update copy:
- Headline: "All Four Techniques Working Together" → "All Four Pillars Working Together"
- Subtitle: "Most apps use one technique" → "Most reading apps focus on one domain. Polymind opens all 76."
- Replace "92% retention rate" stat with "76 domains, 4700+ lessons, 1000+ authors"

### Step 7: Update CTA section (lines 500-517)

- Headline: "Ready to Never Forget?" → "Ready to Read Everything?"
- Subtitle: "Start building your Polymind with science-backed learning." → "Step into the library. 76 worlds of knowledge await."
- Button: "Build Your Polymind — Free" → "Enter the Library — Free"

### Step 8: Update footer tagline (line 529)

- "Your mind, unlimited." → "Read everything. Know everything."

### Step 9: Verify build

Run: `cd app && npx tsc -p tsconfig.app.json --noEmit`
Expected: No errors

### Step 10: Commit

```bash
git add app/src/features/science/LearningSciencePage.tsx
git commit -m "Rewrite Science page: from forgetting curves to cross-domain reading science"
```

---

## Task 2: Rewrite How-To Page

**Files:**
- Modify: `app/src/features/how-to/HowToPage.tsx`

**What changes:**
Reframe from "flashcard mastery" to "Your Guide to the Infinite Library." Keep the interactive demos but change framing.

### Step 1: Update hero (lines 62-86)

- Badge: "HOW IT WORKS" → "YOUR GUIDE"
- Headline: "Master Polymind in 5 Minutes" → "Navigate the Library in 5 Minutes"
- Subtitle: "Interactive guides to help you get the most out of your learning journey." → "Interactive guides to help you explore 76 worlds of knowledge. Try the demos below!"

### Step 2: Reframe Section 1 (lines 90-106)

- Title: "Lessons That Stick" → "Immersive Reading"
- Subtitle: "Swipe-based learning makes studying intuitive" → "Swipe through curated lessons from the world's best authors"
- Body: Reframe around reading experience, not retention

### Step 3: Reframe Section 2 (lines 108-151)

- Title: "Flashcard Mastery" → "Quick Revisit"
- Subtitle: "Spaced repetition that actually works" → "Revisit concepts at the perfect moment"
- Body: Reframe flashcards as "revisit" mechanism, not primary feature

### Step 4: Reframe Section 3 (lines 153-188)

- Title: "XP, Levels & Achievements" → "Track Your Journey"
- Subtitle: "Progress you can see and feel" → "See how much of the library you've explored"
- Body: Reframe around exploration breadth, not gamification

### Step 5: Reframe Section 4 (lines 190-238)

- Title: "Build Habits" → "Daily Reading"
- Subtitle: "Consistency beats intensity" → "A few minutes of reading every day"
- Body: About reading habit, not "learning" habit

### Step 6: Reframe Section 5 (lines 240-262)

- Title: "Daily Challenges" → "Weekly Explorations"
- Body: Frame as exploration challenges, not study tasks

### Step 7: Update Pro Tips (lines 331-348)

- "Review at the same time daily" → "Read at the same time daily"
- "Start with 2-3 domains" → "Start with 2-3 worlds, then expand"
- Keep "Be honest with ratings" and "Look for connections"

### Step 8: Update CTA (lines 354-382)

- Headline: "Ready to Start Learning?" → "Ready to Explore?"
- Subtitle: "Your unforgettable mind is waiting." → "76 worlds of knowledge await. Step into the library."
- Button: "Get Started Free" stays

### Step 9: Verify build and commit

```bash
cd app && npx tsc -p tsconfig.app.json --noEmit
git add app/src/features/how-to/HowToPage.tsx
git commit -m "Rewrite How-To page: from flashcard mastery to library navigation guide"
```

---

## Task 3: Update Blog Articles

**Files:**
- Modify: `app/src/data/blogArticles.ts`

**What changes:**
Update articles that conflict with new positioning. The key articles to rewrite are:
1. `science-of-forgetting` — needs complete reframe
2. `why-you-forget` — needs complete reframe
3. `how-polymind-works` — needs updated framing
4. `first-seven-days` — needs updated language
5. `building-polymind-guide` — needs updated language
6. `flashcards-that-work` — needs lighter touch (flashcards still exist, just de-emphasized)
7. `10-books-change-thinking` — final section needs update
8. `cross-domain-connections` — already aligned, leave as-is
9. `daily-habits-challenges` — mostly fine, minor language tweaks
10. `swipe-learning-guide` — mostly fine, minor tweaks

### Step 1: Rewrite `science-of-forgetting` article

Change title: "The Science of Forgetting" → "The Science of Cross-Domain Reading"
Change excerpt: Focus on why reading across domains makes you smarter
Rewrite content: From Ebbinghaus forgetting to neuroplasticity of broad reading

### Step 2: Rewrite `why-you-forget` article

Change title: "Why You Forget 90% of Books" → "Why Polymaths Read Across Every Domain"
Change content: From forgetting to the power of cross-domain synthesis

### Step 3: Update `how-polymind-works` article

Change content references from "retention" to "exploration"
Update final paragraph from "permanent memory" to "explore every domain"

### Step 4: Update `first-seven-days` article

Update framing from "learning habit" to "reading exploration"
Change day-by-day language to be exploration-focused

### Step 5: Update `building-polymind-guide` article

Change title: "How to Build Your Polymind" → "Your Guide to the Infinite Library"
Update content to focus on domain exploration

### Step 6: Update `flashcards-that-work` article

Lighter touch — keep the technical content but reframe intro/outro
Change CTA language

### Step 7: Update `10-books-change-thinking` final section

Change "Retaining them is where Polymind comes in" → "Exploring the ideas within them is where Polymind comes in"
Change closing from retention language to exploration language

### Step 8: Verify build and commit

```bash
cd app && npx tsc -p tsconfig.app.json --noEmit
git add app/src/data/blogArticles.ts
git commit -m "Rewrite blog articles: from retention/forgetting to cross-domain reading"
```

---

## Task 4: Generate New Landing/Feature Images

**Files:**
- Create: `app/scripts/generate-library-images.py`
- Output to: `app/src/assets/ai-images/landing/` and `app/src/assets/ai-images/onboarding/`

**What changes:**
Create a new Python script based on the existing `generate-ai-images.py` that generates library-themed images for the repositioned landing page and onboarding.

### Step 1: Create the image generation script

Based on existing script pattern (`generate-ai-images.py`), create `generate-library-images.py` that generates:

**Landing page images** (replace existing):
1. `hero-main.webp` — Vast infinite library, sumi-e style, warm amber light streaming through shelves, paths branching in every direction, books as doorways to worlds
2. `hero-books-transform.webp` — Books opening to reveal different worlds (science, philosophy, art), sumi-e ink wash, amber golden light, cross-domain connections
3. `feature-spaced-repetition.webp` → renamed conceptually to "feature-immersive-reading.webp" — Person deeply absorbed in reading, zen-like focus, knowledge flowing, amber warmth
4. `feature-visual-learning.webp` → "feature-cross-domain.webp" — Multiple domain symbols interconnected (atom, brain, scroll, code, lotus), sumi-e network visualization
5. `feature-gamification.webp` → "feature-your-pace.webp" — Winding path through diverse landscapes (mountain, ocean, forest, city), sumi-e journey metaphor

**Onboarding images** (replace existing):
1. `onboarding-01-forgetting.webp` → `onboarding-01-opportunity.webp` — Thousands of books scattered, too many to read, amber glow on the impossibility of it all
2. `onboarding-02-breakthrough.webp` → stays — But refine prompt to show "curated paths through knowledge"
3. `onboarding-03-polymind.webp` → stays — Polymind transformation still fits

**Script structure:**
```python
import google.genai as genai
from dotenv import load_dotenv
import os

load_dotenv()
client = genai.Client(api_key=os.getenv('GEMINI_API_KEY'))

STYLE = """Japanese Zen minimalist illustration style. Inspired by sumi-e ink wash.
Dark background #0A0A0B with subtle texture. Primary warm amber gold #F59E0B accent.
Secondary soft purple #8B5CF6 wisps. No text, no logos, no watermarks. 16:9 aspect ratio."""

IMAGES = {
    'landing/hero-main': f'{STYLE} A vast infinite library extending into darkness, sumi-e ink wash style. Towering bookshelves curve and spiral like a cosmic cathedral. Warm amber golden light streams through gaps between shelves. Multiple paths branch in different directions, each leading to a different world of knowledge. Books as doorways glowing with amber light. Sense of wonder and infinite possibility. Contemplative, awe-inspiring.',
    # ... more prompts
}

for name, prompt in IMAGES.items():
    response = client.models.generate_images(
        model='gemini-2.5-flash-image',
        prompt=prompt,
        config={'number_of_images': 1}
    )
    # Save to assets directory
```

### Step 2: Run the image generation

```bash
cd app && python scripts/generate-library-images.py
```

### Step 3: Compress images

```bash
cd app && python scripts/compress-images.py
```

### Step 4: Verify images render correctly

Run dev server and check landing page

### Step 5: Commit

```bash
git add app/src/assets/ai-images/ app/scripts/generate-library-images.py
git commit -m "Generate new library-themed images for landing and onboarding"
```

---

## Task 5: Final Verification and Deploy

### Step 1: Full build check

```bash
cd app && npm run build
```

### Step 2: Visual check — run dev server and verify all pages

```bash
cd app && npm run dev
```

Check: Landing page, Science page, How-To page, Blog articles, Onboarding flow, Dashboard

### Step 3: Push to deploy

```bash
git push origin master
```

---

## Execution Order

Tasks 1-3 are independent and can run in parallel (all text edits).
Task 4 depends on having a Gemini API key in `.env` and takes time to generate.
Task 5 is the final verification after all others complete.

**Recommended**: Run Tasks 1, 2, 3 as parallel subagents. Then Task 4. Then Task 5.
