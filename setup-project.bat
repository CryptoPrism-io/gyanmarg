@echo off
echo ========================================
echo   GYANMARG - The Path of Knowledge
echo   Interactive Learning System Setup
echo   Module 1: Personal Development
echo ========================================
echo.

:: Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js is not installed!
    echo Please download and install from: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo [1/8] Node.js found:
node --version
echo.

:: Create project
echo [2/8] Creating React project...
call npm create vite@latest app -- --template react-ts
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Failed to create project
    pause
    exit /b 1
)
echo.

:: Enter project directory
cd app

:: Install dependencies
echo [3/8] Installing dependencies...
call npm install
echo.

echo [4/8] Installing Lucide icons...
call npm install lucide-react
echo.

echo [5/8] Installing Tailwind CSS...
call npm install -D tailwindcss postcss autoprefixer
call npx tailwindcss init -p
echo.

:: Copy module files from src folder
echo [6/8] Copying Module 1 components...
copy "..\src\Module1-PersonalDevelopmentDashboard.tsx" "src\"
copy "..\src\Module1-SpacedRepetition.tsx" "src\"
copy "..\src\Module1-HabitCalendar.tsx" "src\"
copy "..\src\Module1-DailyChallenges.tsx" "src\"
copy "..\src\Module1-KnowledgeMap.tsx" "src\"
echo.

:: Create App.tsx
echo [7/8] Creating App.tsx...
(
echo import { useState } from 'react'
echo import PersonalDevelopmentDashboard from './Module1-PersonalDevelopmentDashboard'
echo import SpacedRepetitionReview from './Module1-SpacedRepetition'
echo import HabitCalendar from './Module1-HabitCalendar'
echo import DailyChallenges from './Module1-DailyChallenges'
echo import KnowledgeMap from './Module1-KnowledgeMap'
echo.
echo type View = 'dashboard' ^| 'flashcards' ^| 'calendar' ^| 'challenges' ^| 'connections'
echo.
echo function App^(^) {
echo   const [currentView, setCurrentView] = useState^<View^>^('dashboard'^)
echo.
echo   const renderView = ^(^) =^> {
echo     switch ^(currentView^) {
echo       case 'dashboard': return ^<PersonalDevelopmentDashboard /^>
echo       case 'flashcards': return ^<SpacedRepetitionReview /^>
echo       case 'calendar': return ^<HabitCalendar /^>
echo       case 'challenges': return ^<DailyChallenges /^>
echo       case 'connections': return ^<KnowledgeMap /^>
echo       default: return ^<PersonalDevelopmentDashboard /^>
echo     }
echo   }
echo.
echo   return ^(
echo     ^<div className="min-h-screen bg-slate-900"^>
echo       ^<nav className="bg-slate-800 border-b border-slate-700 px-4 py-2 sticky top-0 z-50"^>
echo         ^<div className="max-w-4xl mx-auto flex gap-2 overflow-x-auto"^>
echo           {[
echo             { id: 'dashboard', label: 'Dashboard' },
echo             { id: 'flashcards', label: 'Flashcards' },
echo             { id: 'calendar', label: 'Habits' },
echo             { id: 'challenges', label: 'Challenges' },
echo             { id: 'connections', label: 'Connections' },
echo           ].map^(^(item^) =^> ^(
echo             ^<button
echo               key={item.id}
echo               onClick={^(^) =^> setCurrentView^(item.id as View^)}
echo               className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
echo                 currentView === item.id
echo                   ? 'bg-orange-500 text-white'
echo                   : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
echo               }`}
echo             ^>
echo               {item.label}
echo             ^</button^>
echo           ^)^)}
echo         ^</div^>
echo       ^</nav^>
echo       ^<main^>{renderView^(^)}^</main^>
echo     ^</div^>
echo   ^)
echo }
echo.
echo export default App
) > src\App.tsx

:: Create index.css with Tailwind
echo [8/8] Setting up Tailwind CSS...
(
echo @tailwind base;
echo @tailwind components;
echo @tailwind utilities;
echo.
echo * { margin: 0; padding: 0; box-sizing: border-box; }
echo body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }
echo ::-webkit-scrollbar { width: 8px; }
echo ::-webkit-scrollbar-track { background: #1e293b; }
echo ::-webkit-scrollbar-thumb { background: #475569; border-radius: 4px; }
) > src\index.css

:: Update tailwind.config.js
(
echo /** @type {import^('tailwindcss'^).Config} */
echo export default {
echo   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
echo   theme: { extend: {} },
echo   plugins: [],
echo }
) > tailwind.config.js

echo.
echo ========================================
echo   Setup Complete!
echo ========================================
echo.
echo To start Gyanmarg:
echo   1. cd app
echo   2. npm run dev
echo   3. Open http://localhost:5173
echo.
echo ========================================
echo.
echo   "vidya dadati vinayam"
echo   "Knowledge gives humility"
echo.
echo ========================================
pause
