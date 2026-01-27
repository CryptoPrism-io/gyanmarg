# ज्ञानमार्ग (Gyanmarg) - The Path of Knowledge

<p align="center">
  <img src="app/public/icons/icon-192x192.png" alt="Gyanmarg Logo" width="120" />
</p>

<p align="center">
  <strong>Transform ancient wisdom into modern mastery through gamified learning</strong>
</p>

<p align="center">
  <a href="https://gyanmarg-963362833537.us-central1.run.app">Live Demo</a> •
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#tech-stack">Tech Stack</a>
</p>

---

## Overview

**Gyanmarg** (Sanskrit: ज्ञानमार्ग - "Path of Knowledge") is a gamified learning platform that transforms 45+ curated ebooks into interactive, engaging learning experiences. Using evidence-based learning science techniques like spaced repetition, active recall, and interleaving, Gyanmarg helps you truly retain what you learn.

> *"विद्या ददाति विनयम्"* — "Knowledge gives humility" (Sanskrit Proverb)

### Why Gyanmarg?

- **The Problem**: Most people forget 90% of what they read within a week
- **The Solution**: Gamified microlearning with scientifically-proven retention techniques
- **The Result**: Knowledge that sticks, skills that compound

---

## Features

### 🧠 Evidence-Based Learning
- **Spaced Repetition**: SM-2 algorithm flashcards that optimize your review schedule
- **Active Recall**: Quizzes and challenges that force retrieval from memory
- **Interleaving**: Mixed practice across topics for deeper understanding

### 🎮 Gamification
- **XP & Levels**: Earn experience points and level up as you learn
- **Achievements**: Unlock badges for milestones and streaks
- **Daily Challenges**: Keep your streak alive with daily learning goals

### 📚 10 Learning Modules

| Module | Description | Source Material |
|--------|-------------|-----------------|
| 🧠 Personal Development | Master your mindset | Atomic Habits, Deep Work, etc. |
| 🤖 AI & Machine Learning | Understand the future | Advanced AI concepts |
| 💰 Wealth Building | Billionaire strategies | Dalio, Buffett, Munger |
| 🥋 Bruce Lee Philosophy | Way of the warrior | Tao of Jeet Kune Do |
| 🔗 Blockchain & Web3 | Decentralized tech | Crypto & DeFi |
| 🧬 Psychology & Decisions | Dark psychology | Body language, influence |
| 🐍 Python & Data Science | Code your insights | Programming mastery |
| 📖 Mind Mastery | Learning how to learn | Meta-learning |
| 🕉️ Temple Science | Ancient wisdom | Vedic knowledge |
| ✨ Master Synthesis | Connect all knowledge | Integration |

### 📱 Progressive Web App (PWA)
- **Install on any device** - Works like a native app
- **Offline support** - Learn without internet
- **Push notifications** - Never miss your review sessions

---

## Live Demo

**🌐 [https://gyanmarg-963362833537.us-central1.run.app](https://gyanmarg-963362833537.us-central1.run.app)**

### Install as App

| Platform | Instructions |
|----------|--------------|
| **Desktop** | Click "Install App" button or ⋮ → "Install Gyanmarg..." |
| **Android** | Chrome ⋮ → "Add to Home screen" |
| **iPhone** | Safari Share → "Add to Home Screen" |

---

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 19 + TypeScript |
| **Build Tool** | Vite 7.2 |
| **Styling** | TailwindCSS 3.4 |
| **State Management** | Zustand 4.5 |
| **Animations** | Framer Motion |
| **Routing** | React Router DOM 7.1 |
| **Icons** | Lucide React |
| **Deployment** | GCP Cloud Run |
| **CI/CD** | GitHub Actions |
| **Container** | Docker + Nginx |

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/CryptoPrism-io/gyanmarg.git
cd gyanmarg/app

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## Deployment

### Automatic (CI/CD)

Push to `master` branch triggers automatic deployment to GCP Cloud Run via GitHub Actions.

### Manual Docker

```bash
cd app
docker build -t gyanmarg .
docker run -p 8080:8080 gyanmarg
```

### Manual GCP

```bash
gcloud run deploy gyanmarg \
  --source . \
  --region us-central1 \
  --allow-unauthenticated
```

---

## Project Structure

```
gyanmarg/
├── .github/workflows/    # CI/CD pipelines
├── app/
│   ├── public/
│   │   ├── icons/        # PWA icons
│   │   ├── manifest.json # PWA manifest
│   │   └── sw.js         # Service worker
│   ├── src/
│   │   ├── components/   # UI components (atoms/molecules/organisms)
│   │   ├── features/     # Feature modules
│   │   ├── data/         # Content & pathways
│   │   ├── store/        # Zustand stores
│   │   └── types/        # TypeScript types
│   ├── Dockerfile
│   └── nginx.conf
├── docs/
└── README.md
```

---

## Design System

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| Background | `#0A0A0B` | Main background |
| Surface | `#111113` | Cards, modals |
| Amber | `#F59E0B` | Primary accent |
| Sage | `#22C55E` | Success states |

### Typography

- **Headlines**: Outfit (600-800)
- **Body**: Inter (400-600)
- **Mono**: DM Mono

---

## The Sanskrit Connection

In Hindu philosophy, there are four paths (margas) to self-realization:

1. **ज्ञानमार्ग (Gyanmarg)** - Path of Knowledge ← *This app*
2. **भक्तिमार्ग (Bhaktimarg)** - Path of Devotion
3. **कर्ममार्ग (Karmamarg)** - Path of Action
4. **राजमार्ग (Rajamarg)** - Path of Meditation

---

## Roadmap

- [x] Core learning platform
- [x] Spaced repetition system
- [x] Gamification (XP, achievements)
- [x] Landing page
- [x] PWA support
- [x] GCP deployment
- [x] CI/CD pipeline
- [ ] User authentication
- [ ] Cloud sync
- [ ] Mobile apps

---

## License

Proprietary - All rights reserved.

---

<p align="center">
  Made with ❤️ for lifelong learners
</p>

<p align="center">
  <strong>ज्ञानं परमं बलम्</strong><br/>
  <em>"Knowledge is the supreme power"</em>
</p>
