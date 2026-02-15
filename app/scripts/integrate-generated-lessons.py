#!/usr/bin/env python3
"""
Polymind Generated Lesson Integrator
=====================================
Automatically integrates -generated.ts files into existing pathway lesson files.
Designed to run after generate-lessons-gemini.py batch generation.

Usage:
  python scripts/integrate-generated-lessons.py           # Integrate all found -generated.ts files
  python scripts/integrate-generated-lessons.py --module earth-sciences  # Integrate one module
  python scripts/integrate-generated-lessons.py --dry-run  # Preview what would be done

Performs these steps for each module:
  1. Reads the -generated.ts file (levels 2-10)
  2. Appends generated content to existing -lessons.ts (excluding duplicate import)
  3. Rewrites the pathway .ts file with imports for all 10 levels + level entries
  4. Deletes the -generated.ts file
"""

import os
import sys
import re
import argparse
from pathlib import Path

sys.stdout.reconfigure(line_buffering=True)

SCRIPT_DIR = Path(__file__).parent
APP_DIR = SCRIPT_DIR.parent
PATHWAYS_DIR = APP_DIR / "src" / "data" / "pathways"

# ============================================================
# LEVEL METADATA: titles, descriptions, icons, colors
# Sourced from MODULE_CONFIGS in generate-lessons-gemini.py
# ============================================================

ICON_PALETTE = [
    "🔬", "🧪", "🌟", "💡", "🎯", "⚡", "🔥", "🧠", "🌍", "🚀",
    "📊", "🏛️", "⚔️", "🎨", "🔮", "💎", "🌊", "🦠", "📡", "🛡️",
]

COLOR_PALETTE = [
    "from-emerald-500 to-teal-500",
    "from-teal-500 to-cyan-500",
    "from-cyan-500 to-blue-500",
    "from-blue-500 to-indigo-500",
    "from-indigo-500 to-violet-500",
    "from-violet-500 to-purple-500",
    "from-purple-500 to-fuchsia-500",
    "from-fuchsia-500 to-pink-500",
    "from-pink-500 to-rose-500",
]

# Module-specific level metadata
# Each module maps level_num -> { title, description, icon, color }
MODULE_LEVELS = {
    "history-civilizations": {
        "prefix": "hist", "var_prefix": "hist",
        2: {"title": "Mesopotamia & Ancient Egypt", "icon": "🏛️", "color": "from-amber-500 to-yellow-500"},
        3: {"title": "Classical Greece & Rome", "icon": "⚔️", "color": "from-red-500 to-orange-500"},
        4: {"title": "Asian Empires & Dynasties", "icon": "🐉", "color": "from-rose-500 to-red-500"},
        5: {"title": "Medieval World & Islam's Golden Age", "icon": "🕌", "color": "from-emerald-500 to-teal-500"},
        6: {"title": "Renaissance, Reformation & Exploration", "icon": "🧭", "color": "from-blue-500 to-indigo-500"},
        7: {"title": "Revolutions & Nation Building", "icon": "🗽", "color": "from-indigo-500 to-violet-500"},
        8: {"title": "Empires, Colonialism & Resistance", "icon": "🌍", "color": "from-violet-500 to-purple-500"},
        9: {"title": "Patterns of Civilization", "icon": "📊", "color": "from-purple-500 to-fuchsia-500"},
        10: {"title": "Global History & Future Civilizations", "icon": "🔮", "color": "from-fuchsia-500 to-pink-500"},
    },
    "strategic-thinking": {
        "prefix": "strat", "var_prefix": "strat",
        2: {"title": "Competitive Strategy", "icon": "🏆", "color": "from-blue-500 to-indigo-500"},
        3: {"title": "Strategic Analysis Frameworks", "icon": "📐", "color": "from-indigo-500 to-violet-500"},
        4: {"title": "Positioning & Market Strategy", "icon": "🎯", "color": "from-emerald-500 to-teal-500"},
        5: {"title": "Execution & Alignment", "icon": "⚙️", "color": "from-amber-500 to-orange-500"},
        6: {"title": "Military Strategy for Business", "icon": "⚔️", "color": "from-red-500 to-rose-500"},
        7: {"title": "Innovation Strategy", "icon": "💡", "color": "from-cyan-500 to-blue-500"},
        8: {"title": "Geopolitical & Macro Strategy", "icon": "🌐", "color": "from-violet-500 to-purple-500"},
        9: {"title": "Strategic Leadership & Decision Making", "icon": "👑", "color": "from-purple-500 to-fuchsia-500"},
        10: {"title": "Grand Strategy & Systems", "icon": "🔮", "color": "from-fuchsia-500 to-pink-500"},
    },
    "systems-complexity": {
        "prefix": "sys", "var_prefix": "sys",
        2: {"title": "Feedback Loops & Dynamics", "icon": "🔄", "color": "from-blue-500 to-cyan-500"},
        3: {"title": "Emergence & Self-Organization", "icon": "🦋", "color": "from-emerald-500 to-teal-500"},
        4: {"title": "Network Theory & Complexity", "icon": "🕸️", "color": "from-violet-500 to-purple-500"},
        5: {"title": "Complex Adaptive Systems", "icon": "🧬", "color": "from-teal-500 to-cyan-500"},
        6: {"title": "Systems Modeling & Simulation", "icon": "📊", "color": "from-indigo-500 to-blue-500"},
        7: {"title": "Complexity in Human Systems", "icon": "🏙️", "color": "from-amber-500 to-orange-500"},
        8: {"title": "Chaos Theory & Nonlinearity", "icon": "🌀", "color": "from-rose-500 to-red-500"},
        9: {"title": "Systems Thinking in Practice", "icon": "🛠️", "color": "from-purple-500 to-fuchsia-500"},
        10: {"title": "Meta-Systems & Integration", "icon": "🔮", "color": "from-fuchsia-500 to-pink-500"},
    },
    "western-philosophy": {
        "prefix": "wphil", "var_prefix": "wphil",
        2: {"title": "Plato & Aristotle", "icon": "🏛️", "color": "from-blue-500 to-indigo-500"},
        3: {"title": "Medieval & Renaissance Philosophy", "icon": "📜", "color": "from-amber-500 to-orange-500"},
        4: {"title": "Rationalism & Empiricism", "icon": "🔬", "color": "from-teal-500 to-cyan-500"},
        5: {"title": "Kant & German Idealism", "icon": "🧠", "color": "from-indigo-500 to-violet-500"},
        6: {"title": "Ethics & Political Philosophy", "icon": "⚖️", "color": "from-emerald-500 to-teal-500"},
        7: {"title": "Existentialism & Phenomenology", "icon": "🌑", "color": "from-violet-500 to-purple-500"},
        8: {"title": "Analytic Philosophy & Logic", "icon": "🔢", "color": "from-cyan-500 to-blue-500"},
        9: {"title": "Philosophy of Mind & Science", "icon": "💭", "color": "from-purple-500 to-fuchsia-500"},
        10: {"title": "Contemporary Philosophy", "icon": "🔮", "color": "from-fuchsia-500 to-pink-500"},
    },
    "finance-investing": {
        "prefix": "fi", "var_prefix": "fi",
        2: {"title": "Asset Classes & Markets", "icon": "📈", "color": "from-green-500 to-emerald-500"},
        3: {"title": "Fundamental Analysis", "icon": "🔍", "color": "from-blue-500 to-indigo-500"},
        4: {"title": "Portfolio Theory & Construction", "icon": "📊", "color": "from-indigo-500 to-violet-500"},
        5: {"title": "Valuation Methods", "icon": "💰", "color": "from-amber-500 to-yellow-500"},
        6: {"title": "Behavioral Finance", "icon": "🧠", "color": "from-rose-500 to-red-500"},
        7: {"title": "Fixed Income & Bonds", "icon": "📋", "color": "from-teal-500 to-cyan-500"},
        8: {"title": "Global Investing & Currencies", "icon": "🌐", "color": "from-violet-500 to-purple-500"},
        9: {"title": "Advanced Strategies", "icon": "⚡", "color": "from-purple-500 to-fuchsia-500"},
        10: {"title": "Wealth Management & Mastery", "icon": "🔮", "color": "from-fuchsia-500 to-pink-500"},
    },
    "mental-models": {
        "prefix": "mm", "var_prefix": "mm",
        2: {"title": "Physics & Engineering Models", "icon": "⚙️", "color": "from-blue-500 to-indigo-500"},
        3: {"title": "Biology & Evolution Models", "icon": "🧬", "color": "from-green-500 to-emerald-500"},
        4: {"title": "Economics & Market Models", "icon": "📊", "color": "from-amber-500 to-orange-500"},
        5: {"title": "Psychology & Behavior Models", "icon": "🧠", "color": "from-rose-500 to-red-500"},
        6: {"title": "Mathematics & Statistics Models", "icon": "📐", "color": "from-indigo-500 to-violet-500"},
        7: {"title": "Systems & Complexity Models", "icon": "🕸️", "color": "from-teal-500 to-cyan-500"},
        8: {"title": "Strategy & Decision Models", "icon": "♟️", "color": "from-violet-500 to-purple-500"},
        9: {"title": "Multi-Disciplinary Integration", "icon": "🔗", "color": "from-purple-500 to-fuchsia-500"},
        10: {"title": "Applied Mental Model Mastery", "icon": "🔮", "color": "from-fuchsia-500 to-pink-500"},
    },
    "first-principles": {
        "prefix": "fp", "var_prefix": "fp",
        2: {"title": "Decomposition Techniques", "icon": "🔧", "color": "from-blue-500 to-indigo-500"},
        3: {"title": "Scientific Reasoning", "icon": "🔬", "color": "from-emerald-500 to-teal-500"},
        4: {"title": "Analogical vs First Principles", "icon": "⚖️", "color": "from-amber-500 to-orange-500"},
        5: {"title": "Cost & Resource Analysis", "icon": "💰", "color": "from-green-500 to-emerald-500"},
        6: {"title": "First Principles in Technology", "icon": "🚀", "color": "from-indigo-500 to-violet-500"},
        7: {"title": "First Principles in Business", "icon": "📊", "color": "from-teal-500 to-cyan-500"},
        8: {"title": "Creative Reconstruction", "icon": "🎨", "color": "from-violet-500 to-purple-500"},
        9: {"title": "Complex Problem Application", "icon": "🧩", "color": "from-purple-500 to-fuchsia-500"},
        10: {"title": "First Principles Mastery", "icon": "🔮", "color": "from-fuchsia-500 to-pink-500"},
    },
    "meta-learning": {
        "prefix": "mlearn", "var_prefix": "mlearn",
        2: {"title": "Memory & Retention Science", "icon": "🧠", "color": "from-blue-500 to-indigo-500"},
        3: {"title": "Deliberate Practice", "icon": "🎯", "color": "from-emerald-500 to-teal-500"},
        4: {"title": "Reading & Information Processing", "icon": "📚", "color": "from-amber-500 to-orange-500"},
        5: {"title": "Focus & Deep Work", "icon": "🔦", "color": "from-indigo-500 to-violet-500"},
        6: {"title": "Skill Acquisition Frameworks", "icon": "📈", "color": "from-teal-500 to-cyan-500"},
        7: {"title": "Cognitive Science of Learning", "icon": "🔬", "color": "from-violet-500 to-purple-500"},
        8: {"title": "Learning Systems & Tools", "icon": "🛠️", "color": "from-cyan-500 to-blue-500"},
        9: {"title": "Teaching & Knowledge Sharing", "icon": "👨‍🏫", "color": "from-purple-500 to-fuchsia-500"},
        10: {"title": "Lifelong Learning Mastery", "icon": "🔮", "color": "from-fuchsia-500 to-pink-500"},
    },
    "web-development": {
        "prefix": "webdev", "var_prefix": "webdev",
        2: {"title": "CSS Mastery & Layouts", "icon": "🎨", "color": "from-blue-500 to-indigo-500"},
        3: {"title": "JavaScript Deep Dive", "icon": "⚡", "color": "from-yellow-500 to-amber-500"},
        4: {"title": "React & Component Architecture", "icon": "⚛️", "color": "from-cyan-500 to-blue-500"},
        5: {"title": "Backend Development", "icon": "🖥️", "color": "from-emerald-500 to-teal-500"},
        6: {"title": "Databases & Data Layer", "icon": "🗄️", "color": "from-indigo-500 to-violet-500"},
        7: {"title": "TypeScript & Code Quality", "icon": "📐", "color": "from-blue-600 to-blue-500"},
        8: {"title": "DevOps & Deployment", "icon": "🚀", "color": "from-violet-500 to-purple-500"},
        9: {"title": "Advanced Frontend Patterns", "icon": "🧩", "color": "from-purple-500 to-fuchsia-500"},
        10: {"title": "Full-Stack Mastery", "icon": "🔮", "color": "from-fuchsia-500 to-pink-500"},
    },
    "decision-making": {
        "prefix": "decide", "var_prefix": "decide",
        2: {"title": "Cognitive Biases & Traps", "icon": "🧠", "color": "from-rose-500 to-red-500"},
        3: {"title": "Probabilistic Thinking", "icon": "🎲", "color": "from-blue-500 to-indigo-500"},
        4: {"title": "Decision Frameworks", "icon": "📐", "color": "from-emerald-500 to-teal-500"},
        5: {"title": "Group Decision Making", "icon": "👥", "color": "from-amber-500 to-orange-500"},
        6: {"title": "Decisions Under Uncertainty", "icon": "🌫️", "color": "from-indigo-500 to-violet-500"},
        7: {"title": "Emotional Intelligence in Decisions", "icon": "❤️", "color": "from-pink-500 to-rose-500"},
        8: {"title": "Strategic & High-Stakes Decisions", "icon": "⚡", "color": "from-violet-500 to-purple-500"},
        9: {"title": "Decision Systems & Processes", "icon": "⚙️", "color": "from-purple-500 to-fuchsia-500"},
        10: {"title": "Decision Mastery & Integration", "icon": "🔮", "color": "from-fuchsia-500 to-pink-500"},
    },
    "risk-management": {
        "prefix": "risk", "var_prefix": "risk",
        2: {"title": "Risk Identification & Assessment", "icon": "🔍", "color": "from-amber-500 to-orange-500"},
        3: {"title": "Financial Risk Management", "icon": "💰", "color": "from-green-500 to-emerald-500"},
        4: {"title": "Operational & Enterprise Risk", "icon": "🏢", "color": "from-blue-500 to-indigo-500"},
        5: {"title": "Portfolio Risk & Diversification", "icon": "📊", "color": "from-indigo-500 to-violet-500"},
        6: {"title": "Behavioral Risk & Decision Traps", "icon": "🧠", "color": "from-rose-500 to-red-500"},
        7: {"title": "Black Swans & Fat Tails", "icon": "🦢", "color": "from-violet-500 to-purple-500"},
        8: {"title": "Systemic & Catastrophic Risk", "icon": "🌪️", "color": "from-red-600 to-rose-500"},
        9: {"title": "Risk Communication & Culture", "icon": "📢", "color": "from-purple-500 to-fuchsia-500"},
        10: {"title": "Integrated Risk Mastery", "icon": "🔮", "color": "from-fuchsia-500 to-pink-500"},
    },
    "geopolitics": {
        "prefix": "geo", "var_prefix": "geo",
        2: {"title": "Great Power Competition", "icon": "🦅", "color": "from-blue-500 to-indigo-500"},
        3: {"title": "Energy & Resource Geopolitics", "icon": "⛽", "color": "from-amber-500 to-orange-500"},
        4: {"title": "Regional Flashpoints", "icon": "🔥", "color": "from-red-500 to-rose-500"},
        5: {"title": "Economic Warfare & Trade", "icon": "💵", "color": "from-green-500 to-emerald-500"},
        6: {"title": "Military Strategy & Defense", "icon": "🛡️", "color": "from-indigo-500 to-violet-500"},
        7: {"title": "Intelligence & Information Warfare", "icon": "🕵️", "color": "from-violet-500 to-purple-500"},
        8: {"title": "International Institutions & Law", "icon": "⚖️", "color": "from-teal-500 to-cyan-500"},
        9: {"title": "Demographic & Climate Geopolitics", "icon": "🌡️", "color": "from-purple-500 to-fuchsia-500"},
        10: {"title": "Future of Geopolitics", "icon": "🔮", "color": "from-fuchsia-500 to-pink-500"},
    },
    "cloud-devops": {
        "prefix": "devops", "var_prefix": "devops",
        2: {"title": "Cloud Platform Fundamentals", "icon": "☁️", "color": "from-blue-500 to-cyan-500"},
        3: {"title": "Containers & Docker", "icon": "🐳", "color": "from-cyan-500 to-blue-500"},
        4: {"title": "Kubernetes & Orchestration", "icon": "☸️", "color": "from-indigo-500 to-blue-500"},
        5: {"title": "CI/CD Pipelines", "icon": "🔄", "color": "from-emerald-500 to-teal-500"},
        6: {"title": "Infrastructure as Code", "icon": "📝", "color": "from-violet-500 to-indigo-500"},
        7: {"title": "Monitoring & Observability", "icon": "📊", "color": "from-amber-500 to-orange-500"},
        8: {"title": "Security & Compliance", "icon": "🔒", "color": "from-red-500 to-rose-500"},
        9: {"title": "Advanced Cloud Architecture", "icon": "🏗️", "color": "from-purple-500 to-fuchsia-500"},
        10: {"title": "DevOps Culture & Mastery", "icon": "🔮", "color": "from-fuchsia-500 to-pink-500"},
    },
    "modern-history": {
        "prefix": "modhist", "var_prefix": "modhist",
        2: {"title": "World War II: The Global Conflict", "icon": "⚔️", "color": "from-red-500 to-rose-500"},
        3: {"title": "Cold War Era", "icon": "🧊", "color": "from-blue-500 to-indigo-500"},
        4: {"title": "Decolonization & Independence", "icon": "🗽", "color": "from-emerald-500 to-teal-500"},
        5: {"title": "Social Revolutions", "icon": "✊", "color": "from-amber-500 to-orange-500"},
        6: {"title": "Economic Transformations", "icon": "📈", "color": "from-green-500 to-emerald-500"},
        7: {"title": "Technology & Society", "icon": "💻", "color": "from-indigo-500 to-violet-500"},
        8: {"title": "Post-Cold War World", "icon": "🌍", "color": "from-violet-500 to-purple-500"},
        9: {"title": "Contemporary Challenges", "icon": "🌡️", "color": "from-purple-500 to-fuchsia-500"},
        10: {"title": "Lessons of Modern History", "icon": "🔮", "color": "from-fuchsia-500 to-pink-500"},
    },
    "leadership": {
        "prefix": "lead", "var_prefix": "lead",
        2: {"title": "Emotional Intelligence for Leaders", "icon": "❤️", "color": "from-pink-500 to-rose-500"},
        3: {"title": "Communication & Influence", "icon": "🎤", "color": "from-blue-500 to-indigo-500"},
        4: {"title": "Team Building & Management", "icon": "👥", "color": "from-emerald-500 to-teal-500"},
        5: {"title": "Strategic Leadership", "icon": "🎯", "color": "from-indigo-500 to-violet-500"},
        6: {"title": "Leading Change", "icon": "🔄", "color": "from-amber-500 to-orange-500"},
        7: {"title": "Crisis & Adaptive Leadership", "icon": "🌪️", "color": "from-red-500 to-rose-500"},
        8: {"title": "Power, Politics & Ethics", "icon": "⚖️", "color": "from-violet-500 to-purple-500"},
        9: {"title": "Coaching & Developing Others", "icon": "🌱", "color": "from-teal-500 to-cyan-500"},
        10: {"title": "Leadership Mastery & Legacy", "icon": "🔮", "color": "from-fuchsia-500 to-pink-500"},
    },
    "options-trading": {
        "prefix": "opt", "var_prefix": "opt",
        2: {"title": "Options Pricing & The Greeks", "icon": "📐", "color": "from-blue-500 to-indigo-500"},
        3: {"title": "Volatility Trading", "icon": "📊", "color": "from-amber-500 to-orange-500"},
        4: {"title": "Vertical Spreads", "icon": "📈", "color": "from-emerald-500 to-teal-500"},
        5: {"title": "Income Strategies", "icon": "💰", "color": "from-green-500 to-emerald-500"},
        6: {"title": "Advanced Multi-Leg Strategies", "icon": "🧩", "color": "from-indigo-500 to-violet-500"},
        7: {"title": "Risk Management for Options", "icon": "🛡️", "color": "from-red-500 to-rose-500"},
        8: {"title": "Technical Analysis for Options", "icon": "🔍", "color": "from-violet-500 to-purple-500"},
        9: {"title": "Advanced Volatility Strategies", "icon": "⚡", "color": "from-purple-500 to-fuchsia-500"},
        10: {"title": "Options Trading Mastery", "icon": "🔮", "color": "from-fuchsia-500 to-pink-500"},
    },
    "cultural-anthropology": {
        "prefix": "anthro", "var_prefix": "anthro",
        2: {"title": "Kinship & Social Organization", "icon": "👨‍👩‍👧‍👦", "color": "from-amber-500 to-orange-500"},
        3: {"title": "Religion, Ritual & Belief", "icon": "🕯️", "color": "from-indigo-500 to-violet-500"},
        4: {"title": "Economic Anthropology", "icon": "🎁", "color": "from-green-500 to-emerald-500"},
        5: {"title": "Language, Communication & Meaning", "icon": "💬", "color": "from-blue-500 to-indigo-500"},
        6: {"title": "Political Anthropology & Power", "icon": "👑", "color": "from-red-500 to-rose-500"},
        7: {"title": "Medical & Psychological Anthropology", "icon": "🏥", "color": "from-teal-500 to-cyan-500"},
        8: {"title": "Urban & Digital Anthropology", "icon": "🌆", "color": "from-violet-500 to-purple-500"},
        9: {"title": "Applied & Visual Anthropology", "icon": "🎬", "color": "from-purple-500 to-fuchsia-500"},
        10: {"title": "Contemporary Anthropological Debates", "icon": "🔮", "color": "from-fuchsia-500 to-pink-500"},
    },
    "problem-solving": {
        "prefix": "solve", "var_prefix": "solve",
        2: {"title": "Root Cause Analysis", "icon": "🔍", "color": "from-blue-500 to-indigo-500"},
        3: {"title": "Creative Problem Solving", "icon": "💡", "color": "from-yellow-500 to-amber-500"},
        4: {"title": "Analytical Problem Solving", "icon": "📊", "color": "from-indigo-500 to-violet-500"},
        5: {"title": "Design Thinking", "icon": "🎨", "color": "from-emerald-500 to-teal-500"},
        6: {"title": "Systems Problem Solving", "icon": "🕸️", "color": "from-teal-500 to-cyan-500"},
        7: {"title": "Technical & Engineering Problem Solving", "icon": "🔧", "color": "from-amber-500 to-orange-500"},
        8: {"title": "Collaborative Problem Solving", "icon": "👥", "color": "from-violet-500 to-purple-500"},
        9: {"title": "Complex & Wicked Problems", "icon": "🌀", "color": "from-purple-500 to-fuchsia-500"},
        10: {"title": "Problem-Solving Mastery", "icon": "🔮", "color": "from-fuchsia-500 to-pink-500"},
    },
    "cybersecurity": {
        "prefix": "cyber", "var_prefix": "cyber",
        2: {"title": "Network Security", "icon": "🌐", "color": "from-blue-500 to-indigo-500"},
        3: {"title": "Cryptography & Encryption", "icon": "🔐", "color": "from-indigo-500 to-violet-500"},
        4: {"title": "Web Application Security", "icon": "🕸️", "color": "from-amber-500 to-orange-500"},
        5: {"title": "Operating System & Endpoint Security", "icon": "🖥️", "color": "from-emerald-500 to-teal-500"},
        6: {"title": "Identity & Access Management", "icon": "🪪", "color": "from-teal-500 to-cyan-500"},
        7: {"title": "Threat Intelligence & Hunting", "icon": "🕵️", "color": "from-red-500 to-rose-500"},
        8: {"title": "Penetration Testing & Red Team", "icon": "🎯", "color": "from-violet-500 to-purple-500"},
        9: {"title": "Security Operations & Incident Response", "icon": "🚨", "color": "from-purple-500 to-fuchsia-500"},
        10: {"title": "Security Architecture & Strategy", "icon": "🔮", "color": "from-fuchsia-500 to-pink-500"},
    },
    "macro-economics": {
        "prefix": "macro", "var_prefix": "macro",
        2: {"title": "Monetary Policy & Central Banking", "icon": "🏦", "color": "from-blue-500 to-indigo-500"},
        3: {"title": "Fiscal Policy & Government Spending", "icon": "📜", "color": "from-amber-500 to-orange-500"},
        4: {"title": "Inflation & Deflation", "icon": "📈", "color": "from-red-500 to-rose-500"},
        5: {"title": "Currency Markets & Exchange Rates", "icon": "💱", "color": "from-green-500 to-emerald-500"},
        6: {"title": "Business Cycles & Indicators", "icon": "📊", "color": "from-indigo-500 to-violet-500"},
        7: {"title": "International Trade & Balance of Payments", "icon": "🚢", "color": "from-teal-500 to-cyan-500"},
        8: {"title": "Financial Markets & Macro", "icon": "💹", "color": "from-violet-500 to-purple-500"},
        9: {"title": "Economic Schools of Thought", "icon": "📚", "color": "from-purple-500 to-fuchsia-500"},
        10: {"title": "Global Macro Strategy & Mastery", "icon": "🔮", "color": "from-fuchsia-500 to-pink-500"},
    },
    "productivity-systems": {
        "prefix": "prod", "var_prefix": "prod",
        2: {"title": "Getting Things Done (GTD)", "icon": "📋", "color": "from-blue-500 to-indigo-500"},
        3: {"title": "Time Management & Scheduling", "icon": "⏰", "color": "from-amber-500 to-orange-500"},
        4: {"title": "Energy & Attention Management", "icon": "⚡", "color": "from-emerald-500 to-teal-500"},
        5: {"title": "Digital Productivity Tools", "icon": "🛠️", "color": "from-indigo-500 to-violet-500"},
        6: {"title": "Goal Setting & Planning Systems", "icon": "🎯", "color": "from-teal-500 to-cyan-500"},
        7: {"title": "Deep Work & Flow States", "icon": "🧘", "color": "from-violet-500 to-purple-500"},
        8: {"title": "Habits & Routines", "icon": "🔄", "color": "from-green-500 to-emerald-500"},
        9: {"title": "Project Management & Execution", "icon": "📊", "color": "from-purple-500 to-fuchsia-500"},
        10: {"title": "Productivity Philosophy & Mastery", "icon": "🔮", "color": "from-fuchsia-500 to-pink-500"},
    },
    "crypto-trading": {
        "prefix": "crypto", "var_prefix": "crypto",
        2: {"title": "Blockchain Technology Deep Dive", "icon": "⛓️", "color": "from-blue-500 to-indigo-500"},
        3: {"title": "DeFi Fundamentals", "icon": "🏦", "color": "from-emerald-500 to-teal-500"},
        4: {"title": "Technical Analysis for Crypto", "icon": "📊", "color": "from-amber-500 to-orange-500"},
        5: {"title": "On-Chain Analysis", "icon": "🔍", "color": "from-indigo-500 to-violet-500"},
        6: {"title": "Market Cycles & Psychology", "icon": "🧠", "color": "from-rose-500 to-red-500"},
        7: {"title": "Altcoin Analysis & Selection", "icon": "🪙", "color": "from-teal-500 to-cyan-500"},
        8: {"title": "Trading Strategies & Execution", "icon": "⚡", "color": "from-violet-500 to-purple-500"},
        9: {"title": "Risk Management & Security", "icon": "🛡️", "color": "from-red-500 to-rose-500"},
        10: {"title": "Crypto Trading Mastery", "icon": "🔮", "color": "from-fuchsia-500 to-pink-500"},
    },
}


def module_id_to_camel(module_id: str) -> str:
    """Convert module-id to camelCase: 'strategic-thinking' -> 'strategicThinking'"""
    parts = module_id.split("-")
    return parts[0] + "".join(p.capitalize() for p in parts[1:])


def get_description_for_level(module_id: str, level_num: int, title: str) -> str:
    """Generate a description for a level based on its title."""
    return f"Explore advanced concepts in {title.lower()} — building on previous levels with deeper analysis, practical frameworks, and real-world applications."


def integrate_module(module_id: str, dry_run: bool = False):
    """Integrate a single module's generated lessons."""
    generated_file = PATHWAYS_DIR / f"{module_id}-lessons-generated.ts"
    lessons_file = PATHWAYS_DIR / f"{module_id}-lessons.ts"
    pathway_file = PATHWAYS_DIR / f"{module_id}.ts"

    if not generated_file.exists():
        print(f"  SKIP {module_id} — no generated file found")
        return False

    if not lessons_file.exists():
        print(f"  ERROR {module_id} — lessons file not found: {lessons_file.name}")
        return False

    if not pathway_file.exists():
        print(f"  ERROR {module_id} — pathway file not found: {pathway_file.name}")
        return False

    if module_id not in MODULE_LEVELS:
        print(f"  ERROR {module_id} — no level metadata configured in MODULE_LEVELS")
        return False

    config = MODULE_LEVELS[module_id]
    prefix = config["prefix"]

    print(f"\n  Integrating: {module_id} (prefix: {prefix})")

    # ---- Step 1: Read generated content ----
    gen_content = generated_file.read_text(encoding="utf-8")
    gen_lines = gen_content.split("\n")

    # Strip import line(s) from generated content
    content_lines = []
    for line in gen_lines:
        if line.strip().startswith("import "):
            continue
        content_lines.append(line)

    # Remove leading blank lines
    while content_lines and content_lines[0].strip() == "":
        content_lines.pop(0)

    gen_clean = "\n".join(content_lines)
    print(f"    Generated content: {len(gen_content)} chars, cleaned: {len(gen_clean)} chars")

    # Verify we have the expected exports
    expected_exports = [f"{prefix}LessonsLevel{i}" for i in range(2, 11)]
    found_exports = re.findall(rf"export const ({prefix}LessonsLevel\d+)", gen_clean)
    missing = [e for e in expected_exports if e not in found_exports]
    if missing:
        print(f"    WARNING: Missing exports: {missing}")

    print(f"    Found {len(found_exports)} level exports in generated file")

    if dry_run:
        print(f"    [DRY RUN] Would append to {lessons_file.name}")
        print(f"    [DRY RUN] Would rewrite {pathway_file.name}")
        print(f"    [DRY RUN] Would delete {generated_file.name}")
        return True

    # ---- Step 2: Append to lessons file ----
    existing_content = lessons_file.read_text(encoding="utf-8")
    if existing_content.endswith("\n"):
        combined = existing_content + "\n" + gen_clean + "\n"
    else:
        combined = existing_content + "\n\n" + gen_clean + "\n"

    lessons_file.write_text(combined, encoding="utf-8")
    print(f"    Appended to {lessons_file.name} ({len(combined)} chars total)")

    # ---- Step 3: Rewrite pathway file ----
    # Read existing to get variable name and Level 1 info
    pathway_content = pathway_file.read_text(encoding="utf-8")

    # Extract pathway variable name
    var_match = re.search(r"const (\w+Pathway)\s*:", pathway_content)
    if not var_match:
        print(f"    ERROR: Could not find pathway variable name in {pathway_file.name}")
        return False
    pathway_var = var_match.group(1)

    # Extract Level 1 info
    level1_match = re.search(
        r'\{\s*id:\s*"' + re.escape(prefix) + r'-level1".*?unlockRequirement:\s*0\s*,?\s*\}',
        pathway_content, re.DOTALL
    )
    if not level1_match:
        print(f"    ERROR: Could not find Level 1 entry in {pathway_file.name}")
        return False
    level1_block = level1_match.group(0)

    # Build imports
    import_names = ",\n".join([f"  {prefix}LessonsLevel{i}" for i in range(1, 11)])
    import_block = f'import {{\n{import_names},\n}} from "./{module_id}-lessons";'

    # Build level entries
    level_entries = [f"  {level1_block}"]
    for lvl in range(2, 11):
        lvl_meta = config.get(lvl)
        if not lvl_meta:
            continue
        title = lvl_meta["title"]
        icon = lvl_meta["icon"]
        color = lvl_meta["color"]
        desc = get_description_for_level(module_id, lvl, title)
        entry = f"""  {{
    id: "{prefix}-level{lvl}",
    title: "{title}",
    description: "{desc}",
    icon: "{icon}",
    color: "{color}",
    lessons: {prefix}LessonsLevel{lvl},
    unlockRequirement: {(lvl - 1) * 500},
  }}"""
        level_entries.append(entry)

    levels_block = ",\n".join(level_entries)

    new_pathway = f'''import type {{ PathwayLevel }} from "@/types";
{import_block}

const {pathway_var}: PathwayLevel[] = [
{levels_block},
];

export default {pathway_var};
'''

    pathway_file.write_text(new_pathway, encoding="utf-8")
    print(f"    Rewrote {pathway_file.name} with 10 levels")

    # ---- Step 4: Delete generated file ----
    generated_file.unlink()
    print(f"    Deleted {generated_file.name}")

    # ---- Step 5: Verify ----
    verify_content = lessons_file.read_text(encoding="utf-8")
    all_exports = re.findall(rf"export const ({prefix}LessonsLevel\d+)", verify_content)
    print(f"    Verified: {len(all_exports)} level exports in lessons file")

    return True


def main():
    parser = argparse.ArgumentParser(description="Integrate generated lesson files")
    parser.add_argument("--module", help="Single module to integrate")
    parser.add_argument("--dry-run", action="store_true", help="Preview without modifying files")
    args = parser.parse_args()

    print("=" * 60)
    print("POLYMIND LESSON INTEGRATOR")
    print("=" * 60)

    if args.module:
        success = integrate_module(args.module, dry_run=args.dry_run)
        if success:
            print(f"\nDone! Module {args.module} integrated.")
        else:
            print(f"\nFailed to integrate {args.module}")
        return

    # Find all -generated.ts files
    generated_files = sorted(PATHWAYS_DIR.glob("*-lessons-generated.ts"))

    if not generated_files:
        print("\nNo generated files found. Waiting for batch generation to complete...")
        print(f"Looking in: {PATHWAYS_DIR}")
        return

    print(f"\nFound {len(generated_files)} generated files to integrate:")
    for f in generated_files:
        module_id = f.stem.replace("-lessons-generated", "")
        print(f"  - {module_id}")

    print()
    success_count = 0
    fail_count = 0

    for f in generated_files:
        module_id = f.stem.replace("-lessons-generated", "")
        try:
            if integrate_module(module_id, dry_run=args.dry_run):
                success_count += 1
            else:
                fail_count += 1
        except Exception as e:
            print(f"    EXCEPTION: {e}")
            fail_count += 1

    print(f"\n{'=' * 60}")
    print(f"INTEGRATION COMPLETE: {success_count} succeeded, {fail_count} failed")
    print(f"{'=' * 60}")


if __name__ == "__main__":
    main()
