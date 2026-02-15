# ReelReader - Testing Guide

## Quick Start

The **ReelReader** is now live and ready to test!

This is an **experimental reel-style lesson viewer** that transforms lessons into a vertical swipe experience (like Instagram Reels / TikTok). Built in complete isolation from the main app - zero disruption to existing features.

## How to Test

### 1. Start Dev Server

```bash
cd app
npm run dev
```

Server will start at `http://localhost:5173`

### 2. Test URLs

Navigate to any of these URLs in your browser:

**Emotional Intelligence Module**:
- `http://localhost:5173/lab/reels/emotional-intelligence/eq-001`
- `http://localhost:5173/lab/reels/emotional-intelligence/eq-010`

**Personal Development Module**:
- `http://localhost:5173/lab/reels/personal-development/pd-001`
- `http://localhost:5173/lab/reels/personal-development/pd-020`

**Bhagavad Gita Module**:
- `http://localhost:5173/lab/reels/bhagavad-gita/gita-001`
- `http://localhost:5173/lab/reels/bhagavad-gita/gita-042`

**Brain Module**:
- `http://localhost:5173/lab/reels/brain/brain-001`

### 3. Test Features

#### Basic Navigation
- ✅ **Swipe Up** (touch or mouse drag) - next card
- ✅ **Swipe Down** - previous card
- ✅ **Arrow Keys** - Up/Down or Left/Right to navigate
- ✅ **Escape Key** - close and return
- ✅ **X Button** (top right) - close

#### Card Flow
1. **Intro Card** - Hero full-screen with lesson title
2. **Overview Card** - What you'll learn
3. **Content Cards** - Each section from lesson content (2-4 cards)
4. **Quiz Card** - Interactive quiz (if lesson has one)
5. **Takeaway Card** - Key takeaway with icon animation
6. **Action Card** - Action item (if exists)
7. **Complete Card** - Celebration with particle effects

#### Progress Tracking
- ✅ **Top Progress Bar** - Shows % completion
- ✅ **Right-side Dots** - Card indicators (golden = current, white/40 = completed, white/20 = pending)
- ✅ **Bottom Card Counter** - "X / Y"
- ✅ **Micro XP Awards** - +2 XP per card swiped
- ✅ **Lesson Completion** - Full XP award on final card

#### Quiz Interaction
- ✅ Tap/click to select answer
- ✅ Submit triggers reveal (correct/incorrect)
- ✅ Explanation shows after submit
- ✅ Can't advance until answered

#### Visual Polish
- ✅ Smooth card transitions with fade
- ✅ Gradient backgrounds per card type
- ✅ Staggered text animations
- ✅ Particle confetti on completion
- ✅ Rotating icons on takeaway card
- ✅ Bounce hint on first card

### 4. Mobile Testing

**If testing on mobile**:
1. Get your local IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
2. Visit: `http://[YOUR_IP]:5173/lab/reels/emotional-intelligence/eq-001`
3. Swipe up/down with touch gestures
4. Test portrait mode (best experience)

### 5. Edge Cases to Test

- [ ] Navigate backward from first card (should do nothing)
- [ ] Navigate forward from last card (should do nothing)
- [ ] Close on any card (progress persists via Zustand)
- [ ] Complete an already-completed lesson (shows "Already Complete!")
- [ ] Fast swipe gestures (velocity detection)
- [ ] Lesson with no quiz (flow skips quiz card)
- [ ] Lesson with no action item (flow skips action card)

## What You Should See

### Desktop Experience
- Full-screen cards with max-width 2xl centered
- Keyboard navigation works perfectly
- Mouse drag to swipe
- Smooth animations at 60fps

### Mobile Experience
- Full-screen immersive
- Touch swipe gestures
- Bottom bar always visible
- Progress bar at top edge

## Known Behavior

- **Micro XP**: You earn 2 XP per card swipe (doesn't trigger level-up modal to avoid interruption)
- **Final XP**: Full lesson XP awarded on completion card
- **Progress Persistence**: If you close mid-lesson, cards are tracked (completed set persists in state)
- **Quiz Validation**: You MUST select an answer before quiz card advances

## Troubleshooting

### Issue: "Lesson not found"
- Check that the moduleId and lessonId match exactly
- Try one of the known-good URLs above

### Issue: Build errors
- Run `npm install` to ensure dependencies
- Check that you're in the `app/` directory

### Issue: Route not found
- Clear browser cache
- Restart dev server
- Check that App.tsx has the route added

## Implementation Notes

**Location**: `app/src/features/experimental/ReelReader.tsx`

**Route**: `/lab/reels/:moduleId/:lessonId` (added to App.tsx)

**Dependencies**:
- Framer Motion (gestures, animations)
- React Router (params)
- Zustand (progress store)
- Existing modules/pathways data

**Isolation**: This component is 100% self-contained. It doesn't modify any existing features or components.

## Next Steps

If you like the experience:
1. Add a "Reel Mode" button to lesson cards in LearningPathway
2. Add voice narration toggle
3. Add share-card-as-image feature
4. Implement haptic feedback (Web Vibration API)
5. Auto-play mode with timer

Enjoy the reel experience! 🎬✨
