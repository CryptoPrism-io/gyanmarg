# Polymind Image Generation Guide

Reference document for recreating all app images with consistent style.

---

## Tech Stack

| Item | Value |
|------|-------|
| **Model** | `gemini-2.5-flash-image` (Google Gemini) |
| **SDK** | `google-genai` Python package |
| **Output format** | `.webp` (modules & levels), `.png` (onboarding, domains, achievements, landing) |
| **Quality** | WebP at 85% quality |
| **Aspect ratio** | `16:9` |
| **Script** | `app/scripts/generate-ai-images.py` |

---

## API Setup

```bash
pip install google-genai python-dotenv pillow
```

Create `.env` in project root:
```
GEMINI_API_KEY=your_key_here
```

---

## Style Definitions

### Default Style (all non-Indian modules)

```
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
```

### Bharat Style (Indian/spiritual modules)

Used when filename starts with any Bharat prefix (see below).

```
Minimalist illustration blending Japanese Zen sumi-e with ancient Indian art.
Inspired by ink wash painting with subtle touches of Rajput miniature and temple art.
Dark background #0A0A0B with subtle texture.
Primary warm saffron-amber gold #F59E0B as accent.
Secondary soft purple #8B5CF6 and deep indigo wisps.
Clean brushstroke aesthetics, negative space, sacred geometry hints.
Elegant line work, contemplative mood, spiritual depth.
No text, no logos, no watermarks.
High quality digital art.
```

**Bharat prefixes** (triggers Bharat Style automatically):
`level-gita-`, `level-epic-`, `level-upan-`, `level-shiv-`, `level-ayur-`, `level-yoga-`, `level-sans-`, `level-jyot-`, `level-vedic-`, `module-bhagavad-gita`, `module-ramayana-mahabharata`, `module-upanishads`, `module-shiv-sutras`, `module-sanskrit-mantras`, `module-jyotish-vastu`, `module-vedic-wisdom`

---

## How Prompts Are Composed

The final prompt sent to Gemini is:

```
{STYLE or BHARAT_STYLE}

{individual image prompt}
```

The style block is prepended to every prompt automatically.

---

## Prompt Anatomy

Every individual prompt follows this pattern:

```
[Subject/scene description in art style], amber [key visual element], [theme/concept], purple [secondary element], zen [mood/feeling].
```

### Key elements to always include:

| Element | Purpose | Examples |
|---------|---------|----------|
| **Art technique** | Anchors the visual style | `sumi-e style`, `ink wash`, `ink brush`, `Japanese woodblock style` |
| **Amber/gold element** | Primary accent color | `amber glow`, `amber golden light`, `amber fire` |
| **Purple element** | Secondary accent | `purple wisps`, `purple energy streams`, `purple cosmic wisps` |
| **Zen/mood closer** | Sets contemplative tone | `zen mastery`, `zen self-awareness`, `zen digital protection` |
| **Conceptual metaphor** | Visual = learning concept | Brain = neuroscience, Dragon = martial arts, Lotus = enlightenment |

### What to avoid in prompts:
- No text, logos, or watermarks (already in style block)
- No photorealistic requests — always illustration/art style
- No specific human faces — use silhouettes or abstract figures
- Keep prompts under 10,000 characters

---

## Image Categories & Naming

| Category | Directory | Naming Pattern | Format |
|----------|-----------|---------------|--------|
| Modules | `assets/ai-images/modules/` | `module-{slug}.webp` | WebP |
| Levels | `assets/ai-images/levels/` | `level-{prefix}-{nn}-{topic}.webp` | WebP |
| Onboarding | `assets/ai-images/onboarding/` | `onboarding-{nn}-{name}.png` | PNG |
| Domains | `assets/ai-images/domains/` | `domain-{name}.png` | PNG |
| Achievements | `assets/ai-images/achievements/` | `achievement-{name}.png` | PNG |
| Landing | `assets/ai-images/landing/` | `hero-{name}.png` / `feature-{name}.png` | PNG |

---

## CLI Usage

```bash
cd app

# Generate all missing images
python scripts/generate-ai-images.py --missing

# Generate all images (including existing — will overwrite)
python scripts/generate-ai-images.py --all

# Generate a specific category
python scripts/generate-ai-images.py --category modules
python scripts/generate-ai-images.py --category levels

# Generate a single file
python scripts/generate-ai-images.py --file module-astronomy.webp
```

---

## 5 Sample Modules (Complete Prompt Sets)

### 1. Emotional Intelligence (Default Style)

**Module image** — `module-emotional-intelligence.webp`:
```
Heart and brain balanced on zen scale in sumi-e style, amber emotional awareness glow, EQ mastery, purple empathy waves radiating, zen self-awareness.
```

**Level images:**
| File | Prompt |
|------|--------|
| `level-eq-01-foundations.webp` | Sumi-e heart and brain side by side, amber golden bridge connecting them, emotional intelligence foundations, purple empathy waves radiating, zen self-awareness awakening. |
| `level-eq-02-self-awareness.webp` | Ink brush figure gazing into amber reflective pool, mirror of the soul, self-awareness mastery, purple emotional patterns revealed beneath surface, zen inner knowing. |
| `level-eq-03-regulation.webp` | Stormy waves calming into still water in sumi-e style, amber anchor of stability at center, self-regulation mastery, purple turbulence dissolving into peace, zen emotional balance. |
| `level-eq-04-motivation.webp` | Inner flame rising through figure's core in ink wash, amber fire of intrinsic motivation, grit and drive, purple flow state energy spiraling upward, zen purpose ignited. |
| `level-eq-05-empathy.webp` | Two silhouette profiles facing each other with amber light flowing between minds, empathy bridge, purple compassion waves connecting hearts, zen deep understanding of others. |
| `level-eq-06-social-skills.webp` | Network of ink brush figures connected by amber golden threads, social mastery, purple rapport building energy, zen art of communication and human connection. |
| `level-eq-07-relationships.webp` | Two hands reaching toward each other in sumi-e, amber love light at touching point, relationship mastery, purple attachment bonds glowing, zen emotional intimacy. |
| `level-eq-08-leadership.webp` | Leader figure radiating amber light to team below in ink wash, resonant leadership, purple psychological safety aura protecting group, zen emotionally intelligent command. |
| `level-eq-09-dark-side.webp` | Shield deflecting dark ink tendrils in sumi-e style, amber protective awareness glowing, defense against manipulation, purple toxic patterns repelled, zen emotional armor and boundaries. |
| `level-eq-10-integration.webp` | Lotus flower with ten petals fully bloomed in ink wash, amber EQ mastery light radiating from center, complete integration, purple wisdom of all emotions unified, zen emotional transcendence. |

---

### 2. Bhagavad Gita (Bharat Style)

**Module image** — `module-bhagavad-gita.webp`:
```
Krishna and Arjuna on chariot silhouette in sumi-e with Indian miniature touches, amber divine light radiating from Krishna, Kurukshetra battlefield mist, purple cosmic energy, sacred discourse, ancient Indian wisdom.
```

**Level images:**
| File | Prompt |
|------|--------|
| `level-gita-01-crisis.webp` | Arjuna kneeling with bow dropped on battlefield in ink wash with Indian miniature touches, amber divine light from Krishna's silhouette, purple war mist, decision paralysis, ancient Indian chariot. |
| `level-gita-02-karma.webp` | Hands performing action with flames in sumi-e Indian style, amber karma energy radiating outward, detached action, purple consequence streams flowing, selfless service. |
| `level-gita-03-jnana.webp` | Sword of wisdom cutting through veil of illusion in ink wash, amber knowledge light piercing ego, purple maya dissolving, self-inquiry, ancient Indian sage. |
| `level-gita-04-bhakti.webp` | Heart offering lotus to cosmic void in sumi-e Indian style, amber devotion light ascending, surrender as strength, purple divine love energy, temple silhouette. |
| `level-gita-05-gunas.webp` | Three intertwined energy streams in ink wash, amber sattva light central, purple rajas and dark tamas, energy management framework, Indian sacred balance. |
| `level-gita-06-dhyana.webp` | Meditating figure with third eye radiating in sumi-e, amber meditation light expanding, mind mastery, purple thought waves stilling, Himalayan peak backdrop. |
| `level-gita-07-vibhuti.webp` | Cosmic manifestations spiraling from divine center in ink wash, amber excellence patterns, divine expressions in nature, purple greatness energy, Indian temple spire. |
| `level-gita-08-vishwarupa.webp` | Infinite cosmic form with countless eyes and arms in sumi-e, amber cosmic vision overwhelming, systems thinking, purple universal expansion, mind-bending scale. |
| `level-gita-09-kshetra.webp` | Observer watching their own mind as field in ink wash, amber awareness light, knower and known separation, purple metacognition streams, Indian mirror motif. |
| `level-gita-10-moksha.webp` | Liberated bird soaring from golden cage into infinite sky in sumi-e, amber freedom light, personal philosophy synthesis, purple enlightened peace, lotus opening below. |

---

### 3. Bruce Lee Philosophy (Default Style)

**Module image** — `module-bruce-lee-philosophy.webp`:
```
Ink wash dragon coiling with water, amber eyes glowing, be like water flowing form, purple chi energy, martial zen, powerful yet graceful.
```

**Level images:**
| File | Prompt |
|------|--------|
| `level-bruce-01-water.webp` | Water taking shape of container in ink wash, amber fluid energy, be water philosophy, purple adaptability flow, zen formlessness. |
| `level-bruce-02-noway.webp` | Empty dojo with amber light, the way of no way, purple absence of fixed form, zen martial freedom, Jeet Kune Do. |
| `level-bruce-03-mindbody.webp` | Martial artist in perfect stance, amber chi energy radiating, mind-body unity, purple spirit flow, zen physical mastery. |
| `level-bruce-04-actualization.webp` | Figure breaking through ceiling into amber light, self-actualization, purple potential unleashed, zen becoming your true self. |
| `level-bruce-05-legacy.webp` | Eternal flame reflected in still water, amber dragon legacy, impact across generations, purple timeless wisdom, zen immortal teachings. |

---

### 4. Blockchain & Web3 (Default Style)

**Module image** — `module-blockchain-web3.webp`:
```
Ink brush chain links forming infinity symbol, amber connections glowing, decentralized network as constellation, purple nodes, zen digital.
```

**Level images:**
| File | Prompt |
|------|--------|
| `level-blockchain-01-fundamentals.webp` | Chain links forming in sumi-e style, amber cryptographic connections, blockchain basics, purple decentralized nodes, zen distributed trust. |
| `level-blockchain-02-deepdive.webp` | Diving into digital ocean of amber blocks, Web3 deep dive, purple smart contract glow, zen decentralized mastery. |
| `level-blockchain-03-cutting-edge.webp` | Futuristic blockchain city in ink wash, amber innovation light, 2025-2026 developments, purple DeFi streams, zen crypto future. |

---

### 5. Body & Longevity (Default Style)

**Module image** — `module-body-longevity.webp`:
```
Sumi-e heart pulsing with amber golden life force, vitality radiating outward, purple energy meridians, zen wellness, eternal youth symbol.
```

**Level images:**
| File | Prompt |
|------|--------|
| `level-body-01-longevity.webp` | Fountain of youth in ink wash style, amber life force flowing, longevity foundations, purple vitality streams, zen eternal health. |
| `level-body-02-physical.webp` | Athlete in perfect form in sumi-e, amber peak performance glow, physical optimization, purple strength aura, zen body mastery. |
| `level-body-03-biohacking.webp` | Human merging with technology in ink brush, amber biohacking light, advanced optimization, purple enhanced biology, zen transhuman potential. |

---

## Writing New Prompts (Template)

### Module image prompt template:
```
[Central metaphor/symbol] in sumi-e style, amber [primary glow/light], [module theme], purple [secondary energy/element], zen [mood].
```

### Level image prompt template:
```
[Scene depicting level topic] in [ink wash/sumi-e/ink brush] style, amber [topic-specific light], [level concept], purple [supporting element], zen [feeling].
```

### Tips:
1. Each level prompt should be visually distinct — vary the scene, not just the adjectives
2. Use the level topic as the visual metaphor (e.g., "crisis" = dropped weapon, "karma" = hands with flames)
3. Keep prompts 1-2 sentences, ~20-40 words
4. For Bharat modules, add Indian art references: "Indian miniature touches", "temple silhouette", "Himalayan backdrop"
5. The style block handles colors, background, and technical specs — the prompt handles composition and subject

---

## Post-Generation

After generating images, compress and register them:

```bash
# Compress all images
python scripts/compress-images.py

# Convert to WebP if needed
node scripts/convert-to-webp.mjs

# Update moduleImages.ts with new imports
# (manual — add import + register in levelImages/moduleImages records)
```

Update `app/src/lib/moduleImages.ts` to register new images in the app.
