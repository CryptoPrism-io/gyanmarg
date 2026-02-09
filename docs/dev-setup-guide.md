# 🚀 Setup Guide - Interactive Learning System

This guide will help you run the Module 1 Personal Development Dashboard and all its components.

---

## 📋 Prerequisites

Before starting, make sure you have:

1. **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
2. **A code editor** - VS Code recommended - [Download here](https://code.visualstudio.com/)
3. **A terminal** - Command Prompt, PowerShell, or VS Code integrated terminal

### Check if Node.js is installed:
```bash
node --version
# Should show v18.x.x or higher

npm --version
# Should show 9.x.x or higher
```

---

## 🛠️ Quick Setup (5 minutes)

### Step 1: Create a new React project

Open your terminal and navigate to your Ebooks folder:

```bash
cd "C:\Users\44776\Downloads\Ebooks-Courses\Ebooks"
```

Create a new Vite + React + TypeScript project:

```bash
npm create vite@latest learning-dashboard -- --template react-ts
```

### Step 2: Navigate into the project

```bash
cd learning-dashboard
```

### Step 3: Install dependencies

```bash
npm install
```

### Step 4: Install additional packages (for icons)

```bash
npm install lucide-react
```

### Step 5: Copy the component files

Copy all the Module 1 files into your project's `src` folder:

```bash
# From your Ebooks folder, copy these files to learning-dashboard/src/
# - Module1-PersonalDevelopmentDashboard.tsx
# - Module1-SpacedRepetition.tsx
# - Module1-HabitCalendar.tsx
# - Module1-DailyChallenges.tsx
# - Module1-KnowledgeMap.tsx
```

**Windows Command (run from Ebooks folder):**
```bash
copy Module1-*.tsx learning-dashboard\src\
```

### Step 6: Update the main App file

Replace the contents of `src/App.tsx` with:

```tsx
import { useState } from 'react'
import PersonalDevelopmentDashboard from './Module1-PersonalDevelopmentDashboard'
import SpacedRepetitionReview from './Module1-SpacedRepetition'
import HabitCalendar from './Module1-HabitCalendar'
import DailyChallenges from './Module1-DailyChallenges'
import KnowledgeMap from './Module1-KnowledgeMap'

type View = 'dashboard' | 'flashcards' | 'calendar' | 'challenges' | 'connections'

function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard')

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <PersonalDevelopmentDashboard />
      case 'flashcards':
        return <SpacedRepetitionReview />
      case 'calendar':
        return <HabitCalendar />
      case 'challenges':
        return <DailyChallenges />
      case 'connections':
        return <KnowledgeMap />
      default:
        return <PersonalDevelopmentDashboard />
    }
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Top Navigation */}
      <nav className="bg-slate-800 border-b border-slate-700 px-4 py-2 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex gap-2 overflow-x-auto">
          {[
            { id: 'dashboard', label: '🏠 Dashboard', emoji: '🏠' },
            { id: 'flashcards', label: '🧠 Flashcards', emoji: '🧠' },
            { id: 'calendar', label: '📅 Habits', emoji: '📅' },
            { id: 'challenges', label: '⚡ Challenges', emoji: '⚡' },
            { id: 'connections', label: '🔗 Connections', emoji: '🔗' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id as View)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                currentView === item.id
                  ? 'bg-orange-500 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {renderView()}
      </main>
    </div>
  )
}

export default App
```

### Step 7: Update the CSS file

Replace `src/index.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #1e293b;
}

::-webkit-scrollbar-thumb {
  background: #475569;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #64748b;
}
```

### Step 8: Install and configure Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Replace `tailwind.config.js` with:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Step 9: Run the development server

```bash
npm run dev
```

### Step 10: Open in browser

Open your browser and go to:
```
http://localhost:5173
```

🎉 **You should now see your Personal Development Dashboard!**

---

## 📁 Final Project Structure

```
learning-dashboard/
├── node_modules/
├── public/
├── src/
│   ├── Module1-PersonalDevelopmentDashboard.tsx  ← Main dashboard
│   ├── Module1-SpacedRepetition.tsx              ← Flashcards
│   ├── Module1-HabitCalendar.tsx                 ← Habit tracker
│   ├── Module1-DailyChallenges.tsx               ← Daily challenges
│   ├── Module1-KnowledgeMap.tsx                  ← Knowledge connections
│   ├── App.tsx                                    ← Main app with navigation
│   ├── index.css                                  ← Styles
│   └── main.tsx                                   ← Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🎮 How to Use Each Component

### 🏠 Dashboard (Main)
- View your XP and level progress
- Browse lessons from all 5 books
- Complete quizzes to earn XP
- Track habits and deep work time
- Manage your F*ck Budget
- Design your Future Self

### 🧠 Flashcards (Spaced Repetition)
- Review cards that adapt to your memory
- Rate your recall: Again, Hard, Good, Easy
- Cards you struggle with appear more often
- Earn XP for reviews

### 📅 Habit Calendar
- Add habits with emoji and color
- Click dates to mark completion
- Track streaks visually
- See monthly stats

### ⚡ Daily Challenges
- 5 random challenges each day
- Action, Reflection, and Experiment types
- Complete all 5 for bonus XP
- Refresh for new challenges

### 🔗 Knowledge Connections
- See how concepts link across books
- Filter by specific book
- Expand connections for insights
- Discover the meta-patterns

---

## 🔧 Troubleshooting

### "Module not found" error
Make sure all component files are in `src/` folder and have `.tsx` extension.

### Tailwind styles not working
1. Check `tailwind.config.js` has correct content paths
2. Make sure `index.css` has the `@tailwind` directives
3. Restart the dev server: `npm run dev`

### TypeScript errors
The components are written in TypeScript. If you see type errors:
```bash
npm install --save-dev @types/react @types/react-dom
```

### Port already in use
If port 5173 is busy:
```bash
npm run dev -- --port 3000
```

---

## 🚀 Next Steps

### Add Data Persistence
Currently, data resets on page refresh. To save progress:

1. **Local Storage** (simple):
```tsx
// Save to localStorage
localStorage.setItem('userProgress', JSON.stringify(progress))

// Load from localStorage
const saved = localStorage.getItem('userProgress')
if (saved) setProgress(JSON.parse(saved))
```

2. **Database** (advanced):
- Supabase (free tier available)
- Firebase
- Your own backend

### Deploy Online
Share your learning dashboard:

1. **Vercel** (easiest):
```bash
npm install -g vercel
vercel
```

2. **Netlify**:
```bash
npm run build
# Drag 'dist' folder to netlify.com
```

3. **GitHub Pages**:
```bash
npm install -D gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d dist"
npm run build
npm run deploy
```

---

## 📱 Mobile Support

The components are responsive! Test on mobile by:
1. Opening Chrome DevTools (F12)
2. Clicking the device toggle icon
3. Selecting a mobile device

---

## 🎨 Customization

### Change Colors
Edit Tailwind classes in components:
- `bg-orange-500` → `bg-blue-500`
- `text-purple-400` → `text-green-400`

### Add More Content
Edit the `bookContent` object in `Module1-PersonalDevelopmentDashboard.tsx` to add more lessons.

### Add More Flashcards
Edit `initialFlashcards` array in `Module1-SpacedRepetition.tsx`.

### Add More Challenges
Edit `challengePool` array in `Module1-DailyChallenges.tsx`.

---

## 📞 Need Help?

If you run into issues:
1. Check the browser console for errors (F12 → Console)
2. Make sure all dependencies are installed (`npm install`)
3. Try deleting `node_modules` and reinstalling:
   ```bash
   rm -rf node_modules
   npm install
   ```

---

## 🎯 Quick Reference Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install a new package
npm install <package-name>
```

---

**Happy Learning! 🚀📚**

Remember: Small steps, consistent practice. 1% better every day = 37x better in a year!
