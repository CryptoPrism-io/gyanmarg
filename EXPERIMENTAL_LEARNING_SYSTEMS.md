# Experimental HCI/HCD Learning Systems - Polymind

**Date**: February 2026
**Status**: ✅ Complete & Deployed

---

## Overview

Built 3 experimental learning interfaces + 1 hub page to explore different cognitive interaction models for educational content. All systems are **fully isolated** under `app/src/features/experimental/` and don't disrupt the existing app.

---

## Files Created

### 1. Lab Hub (Showcase)
**File**: `app/src/features/experimental/LabHub.tsx`
**Route**: `/lab`

Central showcase page listing all 4 experimental readers (including existing ReelReader):
- Grid layout with experiment cards
- Preview descriptions and feature lists
- Status badges (Beta, Experimental, New)
- Sample lesson links for instant testing
- Technical stack details in collapsible section

### 2. Story Mode (Cinematic Reading)
**File**: `app/src/features/experimental/StoryMode.tsx`
**Route**: `/lab/story/:moduleId/:lessonId`

**Interaction Model**: Narrative-driven scrolling experience

**Features**:
- Typewriter-style paragraph reveals (auto-advancing every 2s)
- Floating concept annotations (💡 bubbles every 3rd paragraph)
- Dynamic gradient backgrounds shifting with scroll progress
- Inline quiz integration (questions appear in story flow)
- Parallax scrolling headers
- Ambient sound toggle icon
- Reading time estimate + progress %
- Key takeaway card with gradient styling
- Action item card with border accent

**Inspiration**: Medium.com reading + interactive textbooks

### 3. Knowledge Cards (Swipe Learning)
**File**: `app/src/features/experimental/KnowledgeCards.tsx`
**Route**: `/lab/cards/:moduleId/:lessonId`

**Interaction Model**: Tinder-style card swiping

**Features**:
- Swipe right = "Got it" (mastered)
- Swipe left = "Review later" (needs review)
- 3D card stack with perspective (3 cards visible)
- Tap to flip cards (3D rotation reveal)
- Quiz cards with inline multiple choice
- Review pile tracking (cards swiped left)
- Stats screen: mastered count vs. review count
- Replay mode
- Spring physics animations (Framer Motion)

**Card Types**:
1. Overview card (lesson intro)
2. Concept cards (split from main content paragraphs)
3. Quiz card (interactive Q&A)
4. Takeaway card (key insight)
5. Action card (next steps)

**Inspiration**: Tinder, Flashcard apps, Duolingo

### 4. Mind Map Explorer (Spatial Visualization)
**File**: `app/src/features/experimental/MindMapExplorer.tsx`
**Route**: `/lab/map/:moduleId/:lessonId`

**Interaction Model**: Node-based spatial exploration

**Features**:
- Interactive node network (SVG-based)
- Central node (lesson) + radial concept nodes
- Click nodes to reveal content in side panel
- Pan and zoom controls (mouse wheel + drag)
- Animated connection lines with particle effects
- Node states: unexplored (pulsing glow), explored (solid)
- Progress tracking (X/Y nodes explored)
- Quiz nodes with inline interface
- Auto-completion button when all nodes explored

**Node Types**:
- 🎯 Central (lesson overview)
- 💡 Concept (main content)
- ❓ Quiz (test knowledge)
- 💎 Takeaway (key insight)
- 🚀 Action (next steps)

**Inspiration**: Concept maps, Obsidian graph view, force-directed graphs

---

## Routing Updates

**File**: `app/src/App.tsx`

Added routes (all protected, full-screen, no PageLayout):
```tsx
/lab                           → LabHub (showcase)
/lab/story/:moduleId/:lessonId → StoryMode
/lab/cards/:moduleId/:lessonId → KnowledgeCards
/lab/map/:moduleId/:lessonId   → MindMapExplorer
/lab/reels/:moduleId/:lessonId → ReelReader (existing)
```

Moved `/lab` from VisualLab to LabHub.
VisualLab now at `/visualizations`.

---

## Shared Technical Stack

**All systems use**:
- React 19 + TypeScript (strict mode)
- Framer Motion (animations, gestures, physics)
- Tailwind CSS (dark theme)
- Lucide React (icons)
- React Router (params: moduleId, lessonId)
- Zustand stores (progressStore for tracking)
- Existing pathway data infrastructure

**Design System**:
- Dark theme: `#0A0A0B` background, `#111113` surface
- Golden accents: `#F59E0B`
- Success green: `#22C55E` (sage)
- Typography: Outfit (headings), Inter (body)

---

## Key Design Patterns

### Content Parsing
All systems parse lesson content from existing pathway data:
```typescript
const lesson = pathway
  ?.flatMap(level => level.lessons)
  .find(l => l.id === lessonId);
```

### Progress Tracking
All use existing `progressStore`:
```typescript
const completeLesson = useProgressStore((s) => s.completeLesson);
const isLessonCompleted = useProgressStore((s) => s.isLessonCompleted);
```

### Mobile Responsive
- Touch gestures (swipe, drag, pinch)
- Responsive layouts (Tailwind breakpoints)
- Mobile-first approach

---

## Testing

**Sample URLs** (using Emotional Intelligence module):
- `/lab` → Hub showcase
- `/lab/story/emotional-intelligence/eq-001` → Story Mode
- `/lab/cards/emotional-intelligence/eq-001` → Knowledge Cards
- `/lab/map/emotional-intelligence/eq-001` → Mind Map Explorer
- `/lab/reels/emotional-intelligence/eq-001` → Reel Reader (existing)

**Works with any module/lesson**:
- `/lab/story/bhagavad-gita/gita-001`
- `/lab/cards/python-data/py-001`
- `/lab/map/stoicism/stoic-001`

---

## HCI/HCD Research Goals

### Story Mode
**Cognitive Model**: Linear narrative processing
**Hypothesis**: Gradual reveal reduces cognitive load, parallax creates depth perception
**Metrics**: Time on page, completion rate, scroll depth

### Knowledge Cards
**Cognitive Model**: Spaced repetition + active decision-making
**Hypothesis**: Swipe gestures increase engagement, forced choice improves retention
**Metrics**: Swipe direction distribution, replay rate, review pile size

### Mind Map Explorer
**Cognitive Model**: Spatial memory + non-linear exploration
**Hypothesis**: Visual structure aids conceptual understanding, user-driven path increases autonomy
**Metrics**: Node click patterns, exploration order, time to completion

---

## Future Enhancements

### Story Mode
- [ ] Audio narration toggle
- [ ] Bookmark paragraphs
- [ ] Highlight text to save quotes
- [ ] Adjustable reveal speed
- [ ] Dark/light theme toggle

### Knowledge Cards
- [ ] Haptic feedback on swipe
- [ ] Share cards as images
- [ ] Custom deck creation
- [ ] Spaced repetition scheduling
- [ ] Card difficulty ratings

### Mind Map Explorer
- [ ] Export as PNG/SVG
- [ ] Custom node layouts (tree, radial, force)
- [ ] Node search/filter
- [ ] Connection strength indicators
- [ ] Zoom to node animation

---

## Implementation Notes

### Isolation Strategy
- All files in `features/experimental/` directory
- Zero changes to existing lesson viewers
- No shared state with main app (except progressStore)
- Routes use `:moduleId/:lessonId` params like existing features

### TypeScript Compliance
- All files pass strict TypeScript checks
- Proper type imports (`type PanInfo`)
- No unused imports/variables
- Full type safety on stores and data

### Performance
- Lazy loaded routes (code splitting)
- Optimized animations (GPU acceleration)
- Debounced scroll/drag handlers
- Minimal re-renders (React.memo where needed)

---

## Known Limitations

1. **Content Chunking**: Story Mode and Knowledge Cards split content by paragraphs/sentences, which may not always align with semantic boundaries
2. **Mobile Optimization**: Mind Map Explorer is best on desktop (pan/zoom with mouse); touch gestures work but are less intuitive
3. **Quiz Integration**: Only supports single quiz per lesson (current pathway structure)
4. **Browser Support**: Requires modern browsers with CSS backdrop-filter, motion API support

---

## Success Metrics

After launch, track:
- Usage distribution across 4 modes
- Completion rates per mode
- User feedback/preferences
- Learning outcome comparisons (A/B testing potential)

---

## Files Modified

1. `app/src/App.tsx` - Added 4 new routes, lazy imports
2. `app/src/features/experimental/README.md` - Updated docs

## Files Created

1. `app/src/features/experimental/LabHub.tsx` - Hub showcase
2. `app/src/features/experimental/StoryMode.tsx` - Cinematic reader
3. `app/src/features/experimental/KnowledgeCards.tsx` - Swipe cards
4. `app/src/features/experimental/MindMapExplorer.tsx` - Spatial graph
5. `EXPERIMENTAL_LEARNING_SYSTEMS.md` - This document

---

## Deployment Checklist

- [x] TypeScript compilation passes
- [x] All routes added to App.tsx
- [x] Mobile responsive tested
- [x] Dark theme compliance
- [x] Progress tracking integrated
- [x] Sample URLs documented
- [x] README updated

**Status**: Ready for deployment 🚀

---

**Built by**: Claude Sonnet 4.5
**Platform**: Polymind (Gyanmarg)
**Paradigm**: HCI/HCD Experimental Learning Systems
