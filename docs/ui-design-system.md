# Polymind Design Methodology
> A reusable system for AI-generated visuals and creative typography

---

## Table of Contents
1. [AI Image Generation System](#ai-image-generation-system)
2. [Typography System](#typography-system)
3. [Implementation Guide](#implementation-guide)

---

## AI Image Generation System

### Philosophy
We developed a **"Style-First, Prompt-Second"** approach. Instead of writing individual prompts, we defined a cohesive visual language first, then applied it consistently across all images.

### Step 1: Define Your Visual Style

Create a single style block that gets prepended to ALL prompts:

```python
STYLE = """
Japanese Zen minimalist illustration style.
Inspired by sumi-e ink wash and ukiyo-e woodblock prints.
Dark background #0A0A0B with subtle texture.
Primary warm amber gold #F59E0B as accent.
Secondary soft purple #8B5CF6 wisps.
Clean brushstroke aesthetics, negative space.
Wabi-sabi imperfect beauty, mindful simplicity.
Elegant line work, contemplative mood.
No text, no logos, no watermarks.
High quality digital art.
"""
```

**Key elements of a good style block:**
| Element | Purpose | Example |
|---------|---------|---------|
| Art style reference | Gives AI a visual anchor | "sumi-e ink wash", "ukiyo-e woodblock" |
| Background color | Consistency across images | "#0A0A0B dark background" |
| Primary accent | Brand color prominence | "amber gold #F59E0B" |
| Secondary accent | Depth and variety | "purple #8B5CF6 wisps" |
| Aesthetic keywords | Mood and feel | "wabi-sabi", "contemplative" |
| Exclusions | Prevent unwanted elements | "No text, no logos" |

### Step 2: Create Prompt Templates by Category

Organize prompts by where they'll be used:

```python
PROMPTS = {
    "onboarding": {
        "slide-01.png": "Short evocative description...",
        "slide-02.png": "Short evocative description...",
    },
    "landing": {
        "hero-main.png": "...",
        "feature-card.png": "...",
    },
    "achievements": {
        "first-lesson.png": "...",
        "streak-7.png": "...",
    },
}
```

### Step 3: Write Evocative Prompts (Not Literal)

**Bad prompt (too literal):**
```
A user learning from a book with a brain icon
```

**Good prompt (evocative + on-brand):**
```
Stack of books dissolving into flying origami cranes,
amber paper birds, knowledge taking flight,
transformation, peaceful.
```

**Prompt writing principles:**
1. **Use metaphors** - "knowledge taking flight" not "learning"
2. **Include motion** - "dissolving", "flowing", "ascending"
3. **Add emotion** - "peaceful", "triumphant", "contemplative"
4. **Reference the style** - "origami", "ink brush", "zen"
5. **Keep it short** - 15-30 words max (style block handles the rest)

### Step 4: The Generation Script

```python
#!/usr/bin/env python3
"""
AI Image Generator
==================
Generates images using Google Gemini with consistent styling.

Usage:
  python generate-images.py [--all | --missing | --category <name>]

Requires:
  pip install google-generativeai python-dotenv
"""

import os
import sys
import time
import argparse
from pathlib import Path

import google.generativeai as genai
from dotenv import load_dotenv

# ============================================================
# CONFIG
# ============================================================

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    print("Error: GEMINI_API_KEY not found in .env")
    sys.exit(1)

MODEL_NAME = "gemini-2.5-flash-image"  # Image generation model

SCRIPT_DIR = Path(__file__).parent
ASSETS_DIR = SCRIPT_DIR.parent / "src" / "assets" / "ai-images"

OUTPUT_DIRS = {
    "onboarding": ASSETS_DIR / "onboarding",
    "landing": ASSETS_DIR / "landing",
    # Add more categories as needed
}

for dir_path in OUTPUT_DIRS.values():
    dir_path.mkdir(parents=True, exist_ok=True)

# ============================================================
# STYLE (Prepended to all prompts)
# ============================================================

STYLE = """
Your style block here...
"""

# ============================================================
# PROMPTS
# ============================================================

PROMPTS = {
    "onboarding": {
        "image-name.png": "Evocative prompt...",
    },
    # More categories...
}

# ============================================================
# FUNCTIONS
# ============================================================

def is_missing(path: Path) -> bool:
    return not path.exists() or path.stat().st_size == 0


def generate_image(model, prompt: str, output_path: Path, retries: int = 3) -> bool:
    for attempt in range(retries):
        try:
            full_prompt = f"{STYLE}\n\n{prompt}"
            response = model.generate_content(full_prompt)

            if response.candidates:
                candidate = response.candidates[0]
                if candidate.content and candidate.content.parts:
                    for part in candidate.content.parts:
                        if hasattr(part, 'inline_data') and part.inline_data:
                            with open(output_path, "wb") as f:
                                f.write(part.inline_data.data)
                            return True

            if attempt < retries - 1:
                print(f"retry {attempt + 2}...", end=" ", flush=True)
                time.sleep(5)

        except Exception as e:
            if "429" in str(e):  # Rate limit
                wait = 30 * (attempt + 1)
                print(f"rate limit, waiting {wait}s...", end=" ", flush=True)
                time.sleep(wait)
            else:
                print(f"Error: {e}")

    return False


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--all", action="store_true", help="Regenerate all")
    parser.add_argument("--category", choices=list(PROMPTS.keys()))
    args = parser.parse_args()

    only_missing = not args.all

    genai.configure(api_key=GEMINI_API_KEY)
    model = genai.GenerativeModel(MODEL_NAME)

    categories = [args.category] if args.category else list(PROMPTS.keys())

    for cat in categories:
        print(f"\n[{cat.upper()}]")
        output_dir = OUTPUT_DIRS[cat]

        for filename, prompt in PROMPTS[cat].items():
            path = output_dir / filename

            if only_missing and not is_missing(path):
                print(f"  SKIP {filename}")
                continue

            print(f"  GEN  {filename}...", end=" ", flush=True)

            if generate_image(model, prompt, path):
                kb = path.stat().st_size / 1024
                print(f"OK ({kb:.0f}KB)")
                time.sleep(3)  # Delay between generations
            else:
                print("FAILED")
                time.sleep(10)

    print("\nDone!")


if __name__ == "__main__":
    main()
```

### Step 5: Environment Setup

Create `.env` file (gitignored):
```bash
# Get your key at: https://aistudio.google.com/apikey
GEMINI_API_KEY=your_key_here
```

Create `.env.example` (committed):
```bash
# AI Image Generation
# Get your key at: https://aistudio.google.com/apikey
GEMINI_API_KEY=your_gemini_api_key_here
```

Add to `.gitignore`:
```
.env
.env.local
.env.*.local
```

### Step 6: Version Your Styles

When experimenting with different styles, backup before switching:

```bash
# Backup current style
cp -r src/assets/ai-images src/assets/ai-images-v1-cosmic

# Update STYLE block in script
# Regenerate all images
python scripts/generate-ai-images.py --all
```

### Style Examples We Used

**v1: Cosmic Neural Minimalism**
```python
STYLE = """
Cosmic Neural Minimalism style.
Dark background #0A0A0B.
Primary amber gold #F59E0B glow.
Secondary purple #8B5CF6 glow.
Ethereal cinematic lighting.
High contrast, ultra-detailed.
No text, no logos, no watermarks.
8k quality.
"""
```

**v2: Japanese Zen Minimalism** (Current)
```python
STYLE = """
Japanese Zen minimalist illustration style.
Inspired by sumi-e ink wash and ukiyo-e woodblock prints.
Dark background #0A0A0B with subtle texture.
Primary warm amber gold #F59E0B as accent.
Secondary soft purple #8B5CF6 wisps.
Clean brushstroke aesthetics, negative space.
Wabi-sabi imperfect beauty, mindful simplicity.
Elegant line work, contemplative mood.
No text, no logos, no watermarks.
High quality digital art.
"""
```

---

## Typography System

### Philosophy
**"Hierarchy Through Contrast"** - Use dramatic size differences, weight variations, and color accents to create visual hierarchy without relying on many font families.

### The Typography Toolkit

#### 1. Giant Background Numbers
Use oversized, low-opacity numbers as visual anchors:

```jsx
<h2 className="text-3xl font-serif mb-4">
  {/* Giant background number */}
  <span className="text-7xl md:text-8xl font-bold text-sage/20 block -mb-8">3</span>
  <span className="relative z-10 block">Steps to Building</span>
  <span className="relative z-10 block text-sage">Your Polymind</span>
</h2>
```

**When to use:** Section headers with numbers, statistics, key metrics

#### 2. Gradient Text
Apply gradients to key phrases for emphasis:

```jsx
<span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
  Permanent Memory
</span>
```

**When to use:** Hero headlines, CTAs, brand phrases

#### 3. SVG Brush Stroke Underlines
Add hand-drawn feel with SVG underlines:

```jsx
<span className="relative inline-block">
  <span className="text-amber-500">Retain</span>
  {/* Brush stroke underline */}
  <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 12" preserveAspectRatio="none">
    <path
      d="M0,8 Q25,2 50,6 T100,4"
      stroke="url(#brushGradient)"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    />
    <defs>
      <linearGradient id="brushGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.3" />
        <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.3" />
      </linearGradient>
    </defs>
  </svg>
</span>
```

**When to use:** Key action words, brand terms

#### 4. Vertical Accent Text
Add Japanese-inspired vertical text:

```jsx
<span
  className="hidden md:block absolute -left-16 top-0 text-amber-500/20 text-sm tracking-[0.5em] font-light"
  style={{ writingMode: 'vertical-rl' }}
>
  知識の道
</span>
```

**When to use:** Hero sections, decorative accents (desktop only)

#### 5. Weight Contrast
Mix light and bold in same headline:

```jsx
<span className="font-light text-white/80">Built on the Science of</span>
<span className="font-semibold text-amber-500">Permanent Memory</span>
```

**When to use:** Two-part headlines, "from X to Y" statements

#### 6. Strikethrough Transformation
Show before/after with strikethrough:

```jsx
<span className="text-white/60 font-light line-through decoration-coral/40 decoration-2">
  Stop Forgetting.
</span>
<span className="text-amber-500 font-semibold">
  Build Your Polymind.
</span>
```

**When to use:** Problem → Solution headlines, transformation messaging

#### 7. Dot/Bullet Separators
Elegant phrase separation:

```jsx
<p className="text-lg text-gray-400">
  <span>1000+ bestselling authors.</span>
  <span className="mx-2 text-amber-500/50">·</span>
  <span>The world's most powerful ideas.</span>
</p>
```

**When to use:** Feature lists, taglines with multiple phrases

#### 8. Centered Underline Accents
Subtle underlines below text:

```jsx
<span className="block relative">
  <span className="text-amber-500">Permanent Memory</span>
  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
</span>
```

**When to use:** Section titles, emphasized phrases

### Typography Hierarchy Rules

| Level | Size | Weight | Color | Example |
|-------|------|--------|-------|---------|
| Hero H1 | 4xl-7xl | serif | white/gradient | Main headline |
| Section H2 | 3xl-4xl | serif | white + accent | Section titles |
| Card H3 | xl | semibold | white | Card titles |
| Body | base-lg | normal | gray-400 | Paragraphs |
| Caption | sm-xs | light | gray-400 | Subtitles, meta |
| Accent | varies | varies | amber-500 | Key words |

### Color Usage for Text

```
white/90     → Primary headlines
white/80     → Secondary headlines
white/70     → Tertiary text
gray-400     → Body text (readable)
gray-500     → Avoid (low contrast)
gray-600     → Avoid (unreadable)
amber-500    → Accent/emphasis
coral        → Warning/problem
sage         → Success/positive
lavender     → Info/secondary accent
```

---

## Implementation Guide

### Quick Start Checklist

#### For New Project Images:

1. [ ] Install dependencies: `pip install google-generativeai python-dotenv`
2. [ ] Create `.env` with `GEMINI_API_KEY`
3. [ ] Define your STYLE block (reference existing styles)
4. [ ] Create PROMPTS dictionary organized by category
5. [ ] Set up OUTPUT_DIRS for each category
6. [ ] Run: `python scripts/generate-images.py`
7. [ ] Import images in React components

#### For Typography:

1. [ ] Use gray-400 minimum for body text (contrast)
2. [ ] Apply gradient text to 1-2 key phrases per section
3. [ ] Use giant background numbers for stats
4. [ ] Add brush underlines to action words
5. [ ] Mix font weights (light + bold) for hierarchy
6. [ ] Use amber-500 as primary accent color
7. [ ] Add dot separators for multi-phrase taglines

### File Structure

```
project/
├── scripts/
│   └── generate-ai-images.py
├── src/
│   └── assets/
│       └── ai-images/
│           ├── onboarding/
│           ├── landing/
│           ├── domains/
│           └── achievements/
├── .env              # (gitignored)
├── .env.example      # (committed)
└── docs/
    └── DESIGN-METHODOLOGY.md
```

---

## Appendix: Full Prompt Library

### Onboarding Prompts (Zen Style)
```
onboarding-01-forgetting: "Zen ink wash painting, a serene face in profile with memories drifting away like autumn leaves, amber gold accents, empty space, contemplative loss, sumi-e brushstrokes."

onboarding-02-breakthrough: "Minimalist ink illustration, a single lotus emerging from dark water, golden light rays breaking through, moment of awakening, Japanese brush art, peaceful hope."

onboarding-03-polymind: "Elegant ink drawing, meditating figure with interconnected circles forming a mandala above head, amber and purple wisps, enlightened mind, zen simplicity."
```

### Landing Page Prompts (Zen Style)
```
hero-main: "Vast zen landscape, distant mountain silhouettes, amber moon rising, infinite path of stepping stones fading into mist, contemplative journey."

hero-books-transform: "Stack of books dissolving into flying origami cranes, amber paper birds, knowledge taking flight, transformation, peaceful."

feature-spaced-repetition: "Waves on shore, each wave amber-tipped and stronger, memory building like tides, rhythmic reinforcement, Japanese wave art."

feature-gamification: "Stone steps ascending through clouds, each step glowing warmer amber, journey upward, zen progression, mindful growth."
```

### Domain Prompts (Zen Style)
```
psychology: "Sumi-e style, enso circle containing a delicate brain pattern, lavender mist, self-reflection, ink wash texture, mindful."

ai: "Japanese woodblock style, geometric origami crane made of circuit patterns, amber core glowing, tradition meets future, clean lines."

wealth: "Ink brush bamboo growing upward, golden coins as leaves, prosperity through patience, zen abundance, simple elegance."

philosophy: "Yin yang transforming into infinity symbol, ink wash gradient, amber and purple balance, eternal wisdom, zen void."
```

---

*Document created: January 2025*
*Version: 2.0 (Zen Minimalism)*
