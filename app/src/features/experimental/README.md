# Experimental Features

This directory contains experimental UI/UX features for Polymind. These are **in silo** implementations that don't affect the main app.

## Lab Hub - Experimental Learning Modes Showcase

**Location**: `LabHub.tsx`

**Route**: `/lab`

Central hub showcasing all experimental learning interfaces. Provides:
- Grid of experiment cards with descriptions
- Sample lesson links for each mode
- Technical stack details
- Status badges (Beta, Experimental, New)

---

## 1. Story Mode - Cinematic Lesson Experience

**Location**: `StoryMode.tsx`

**Route**: `/lab/story/:moduleId/:lessonId`

### What It Does

Transforms lessons into an **immersive narrative experience** with cinematic typography and effects:

- Typewriter-style paragraph reveals (one at a time)
- Floating concept annotations on the side
- Dynamic gradient backgrounds that shift as you progress
- Inline quiz questions within the narrative flow
- Parallax scrolling effects on headers
- Ambient sound toggle
- Reading time estimate and progress percentage

### Features

- **Progressive Reveal** - Paragraphs appear sequentially with animations
- **Floating Annotations** - Key concept bubbles (💡) appear every 3rd paragraph
- **Color Transitions** - Background gradient evolves based on scroll position
- **Inline Quizzes** - Questions integrated into story flow, not separate screens
- **Parallax Effects** - Section headers move at different speeds
- **Key Takeaway Card** - Beautiful gradient card with main lesson insight
- **Responsive** - Mobile and desktop optimized

### Example URLs
- `/lab/story/emotional-intelligence/eq-001`
- `/lab/story/bhagavad-gita/gita-001`

---

## 2. Knowledge Cards - Tinder-style Swipeable Learning

**Location**: `KnowledgeCards.tsx`

**Route**: `/lab/cards/:moduleId/:lessonId`

### What It Does

Breaks lessons into **bite-sized knowledge cards** with swipe interactions:

- Swipe right = "Got it" (mastered)
- Swipe left = "Review later" (needs review)
- 3D card stack with perspective effect
- Tap to flip for deeper explanations
- Quiz cards mixed into the deck
- End screen with mastered vs. review stats

### Card Types

1. **Concept Cards** - Front: key point, Back: full explanation
2. **Quiz Cards** - Multiple choice with instant feedback
3. **Takeaway Cards** - Main lesson insights
4. **Action Cards** - Practical next steps

### Features

- **Spring Physics** - Realistic card swipe animations (Framer Motion)
- **Card Stack** - 3D depth with next 2 cards visible behind
- **Review Pile** - Cards swiped left are tracked for later review
- **Flip Animation** - 3D rotation to reveal back content
- **Stats Screen** - Shows mastered count, review count, XP earned
- **Replay Mode** - Restart the deck after completion

### Example URLs
- `/lab/cards/emotional-intelligence/eq-001`
- `/lab/cards/python-data/py-001`

---

## 3. Mind Map Explorer - Spatial Concept Visualization

**Location**: `MindMapExplorer.tsx`

**Route**: `/lab/map/:moduleId/:lessonId`

### What It Does

Displays lesson concepts as an **interactive node network** in 2D space:

- Central node (lesson title) with branching concept nodes
- Click nodes to explore content in side panel
- Radial layout with force-directed positioning
- Pan and zoom controls
- Animated connection lines with particle effects
- Node states: unexplored (pulsing), explored (solid)

### Node Types

- 🎯 **Central Node** - Lesson overview
- 💡 **Concept Nodes** - Key ideas from main content
- ❓ **Quiz Node** - Test knowledge
- 💎 **Takeaway Node** - Main insight
- 🚀 **Action Node** - Next steps

### Features

- **Interactive Graph** - Click nodes to reveal content
- **Pan & Zoom** - Mouse wheel zoom, click-drag pan
- **Progress Tracking** - X/Y nodes explored
- **Particle Effects** - Animated dots travel along active connections
- **Side Panel** - Node details with quiz interface
- **Color Coding** - Different colors per node type
- **Completion Check** - Button appears when all nodes explored

### Example URLs
- `/lab/map/emotional-intelligence/eq-001`
- `/lab/map/stoicism/stoic-001`

---

## 4. ReelReader - Instagram/TikTok-Style Lesson Viewer

**Location**: `ReelReader.tsx`

**Route**: `/lab/reels/:moduleId/:lessonId`

### What It Does

Transforms traditional lesson content into a **vertical swipe-up experience** similar to Instagram Reels or TikTok:

- Each lesson is broken into 3-5 full-screen cards
- Vertical swipe gestures (touch + mouse)
- Smooth animations and transitions
- Progress indicators (dots on right side, like IG stories)
- Quiz cards with interactive answers
- Celebration animations on completion

### Card Flow

1. **Intro Card** - Hero full-screen with lesson title, overview, duration, XP
2. **Overview Card** - "What You'll Learn"
3. **Content Cards** - Each `## heading` from mainContent becomes a card
4. **Quiz Card** - Interactive quiz (if lesson has one)
5. **Takeaway Card** - Key lesson takeaway
6. **Action Card** - Action item (if exists)
7. **Complete Card** - Celebration with confetti effect

### Features

- **Vertical Swipe Navigation** - Up = next, Down = previous
- **Keyboard Support** - Arrow keys, Escape to close
- **Progress Bar** - Top edge shows completion %
- **Card Indicators** - Right side dots (current/completed/pending)
- **Micro XP** - Earn 2 XP per card swiped (non-intrusive)
- **Quiz Validation** - Must answer before advancing
- **Responsive** - Mobile-first, works on desktop

### How to Test

1. Start dev server: `npm run dev`
2. Navigate to any lesson in the Learning Pathway
3. Manually visit: `/lab/reels/{moduleId}/{lessonId}`

**Example URLs**:
- `/lab/reels/emotional-intelligence/eq-001`
- `/lab/reels/personal-development/pd-001`
- `/lab/reels/bhagavad-gita/gita-001`

### Design System

- **Dark Theme** - Background `#0A0A0B`, gradients per card
- **Typography** - Outfit headings, Inter body
- **Colors** - Amber/Golden accents, card-specific gradients
- **Animations** - Framer Motion for all transitions
- **Icons** - Lucide React

### Tech Stack

- React 19 + TypeScript
- Framer Motion (drag gestures, animations)
- React Router (params)
- Zustand (progress tracking)
- Tailwind CSS

### Future Enhancements

- [ ] Haptic feedback (Web Vibration API)
- [ ] Sound effects on swipe
- [ ] Share card as image
- [ ] Bookmark individual cards
- [ ] Swipe-to-dismiss lesson
- [ ] Auto-play mode (timer-based)
- [ ] Voice narration toggle

### Notes

- This is a **HCI experiment** - isolated from main app flow
- No changes to existing LessonViewer or LearningPathway
- Fully self-contained component
- Uses existing store/data/types infrastructure
