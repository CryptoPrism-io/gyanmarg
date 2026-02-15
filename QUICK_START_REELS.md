# ReelReader - Quick Start ⚡

## 🚀 Launch in 3 Steps

### 1. Start Server
```bash
cd app
npm run dev
```

### 2. Open Browser
Visit: `http://localhost:5173`

### 3. Try These URLs

**Best Demo Lessons**:

```
http://localhost:5173/lab/reels/emotional-intelligence/eq-001
http://localhost:5173/lab/reels/personal-development/pd-001
http://localhost:5173/lab/reels/bhagavad-gita/gita-001
```

## 🎮 Controls

| Action | Desktop | Mobile |
|--------|---------|--------|
| Next card | **↑** or **→** or **Swipe Up** | **Swipe Up** |
| Previous card | **↓** or **←** or **Swipe Down** | **Swipe Down** |
| Close | **Esc** or **X button** | **X button** |

## 🎯 What to Expect

1. **Intro Card** - Full-screen hero with lesson title
2. **Overview Card** - What you'll learn
3. **Content Cards** - 2-4 cards of lesson content
4. **Quiz Card** - Interactive question (tap to answer)
5. **Takeaway Card** - Key insight with animation
6. **Action Card** - Next step (if exists)
7. **Complete Card** - Celebration with confetti 🎉

## 📊 Features

- ✅ **Progress bar** at top
- ✅ **Card dots** on right side (like IG stories)
- ✅ **+2 XP** per card swiped
- ✅ **Full lesson XP** on completion
- ✅ **Quiz validation** - must answer to proceed
- ✅ **Smooth animations** everywhere

## 📱 Mobile Testing

Get your computer's IP:
```bash
ipconfig  # Windows
ifconfig  # Mac/Linux
```

Then visit from phone:
```
http://[YOUR_IP]:5173/lab/reels/emotional-intelligence/eq-001
```

## 🐛 Issues?

**Lesson not found?**
- Check moduleId and lessonId are correct
- Try one of the example URLs above

**Build errors?**
- Run `npm install`
- Restart dev server
- Clear browser cache

## 📚 More Info

- Full testing guide: `REEL_READER_TEST.md`
- Implementation details: `IMPLEMENTATION_SUMMARY.md`
- Technical docs: `app/src/features/experimental/README.md`

---

**Status**: ✨ Ready to Test
**Location**: `app/src/features/experimental/ReelReader.tsx`
**Route**: `/lab/reels/:moduleId/:lessonId`
