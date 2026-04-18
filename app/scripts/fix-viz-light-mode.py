#!/usr/bin/env python3
"""
fix-viz-light-mode.py
=====================
Replace hardcoded dark-mode color tokens in viz components with
CSS variable references so they respond to the app's light/dark theme.

Run from app/:
  python scripts/fix-viz-light-mode.py
"""

import os
import re
from pathlib import Path

VIZ_DIR = Path(__file__).parent.parent / "src" / "components" / "visualizations"

# ─── Replacement rules ────────────────────────────────────────────────────────
# Each entry: (pattern, replacement, description)
# Patterns are applied in order, so be specific first.

TAILWIND_RULES = [
    # ── Text colours ──
    # Muted text (50% / 40% opacity white)
    (r'text-white/50', 'text-[var(--viz-muted)]', 'white/50 → muted'),
    (r'text-white/40', 'text-[var(--viz-muted)]', 'white/40 → muted'),
    (r'text-white/30', 'text-[var(--viz-muted)]', 'white/30 → muted'),
    # Secondary text (60-80% opacity white)
    (r'text-white/60', 'text-[var(--viz-secondary)]', 'white/60 → secondary'),
    (r'text-white/70', 'text-[var(--viz-secondary)]', 'white/70 → secondary'),
    (r'text-white/80', 'text-[var(--viz-secondary)]', 'white/80 → secondary'),
    (r'text-white/90', 'text-[var(--viz-secondary)]', 'white/90 → secondary'),
    # Primary text (must be after all fractional variants)
    # Only replace bare `text-white` not followed by `/` digit
    (r'text-white(?!/)', 'text-[var(--viz-text)]', 'white → text'),

    # ── Hover text variants ──
    (r'hover:text-white(?!/)', 'hover:text-[var(--viz-text)]', 'hover:white → text'),
    (r'hover:text-white/70', 'hover:text-[var(--viz-secondary)]', 'hover:white/70'),
    (r'hover:text-white/80', 'hover:text-[var(--viz-secondary)]', 'hover:white/80'),

    # ── Background colours ──
    # Very faint tile backgrounds
    (r'bg-white/\[0\.01\]', 'bg-[var(--viz-tile)]', 'bg white/0.01'),
    (r'bg-white/\[0\.02\]', 'bg-[var(--viz-tile)]', 'bg white/0.02'),
    (r'bg-white/\[0\.03\]', 'bg-[var(--viz-tile)]', 'bg white/0.03'),
    (r'bg-white/\[0\.04\]', 'bg-[var(--viz-tile)]', 'bg white/0.04'),
    (r'bg-white/\[0\.05\]', 'bg-[var(--viz-tile)]', 'bg white/0.05'),
    (r'bg-white/\[0\.06\]', 'bg-[var(--viz-tile-md)]', 'bg white/0.06'),
    (r'bg-white/\[0\.08\]', 'bg-[var(--viz-tile-md)]', 'bg white/0.08'),
    (r'bg-white/\[0\.10\]', 'bg-[var(--viz-tile-md)]', 'bg white/0.10'),
    (r'bg-white/\[0\.1\]', 'bg-[var(--viz-tile-md)]', 'bg white/0.1'),
    (r'bg-white/\[0\.15\]', 'bg-[var(--viz-tile-md)]', 'bg white/0.15'),
    (r'bg-white/\[0\.2\]', 'bg-[var(--viz-tile-md)]', 'bg white/0.2'),
    # Dark inner box backgrounds (chart areas)
    (r'bg-black/40', 'bg-[var(--viz-inner)]', 'bg black/40'),
    (r'bg-black/30', 'bg-[var(--viz-inner)]', 'bg black/30'),
    (r'bg-black/20', 'bg-[var(--viz-inner)]', 'bg black/20'),
    (r'bg-black/60', 'bg-[var(--viz-inner-dark)]', 'bg black/60'),
    (r'bg-black/90', 'bg-[var(--viz-inner-dark)]', 'bg black/90'),
    # Explicit near-black backgrounds
    (r'bg-zinc-950', 'bg-[var(--viz-bg)]', 'bg zinc-950'),

    # ── Border colours ──
    (r'border-white/\[0\.06\]', 'border-[var(--viz-border)]', 'border white/0.06'),
    (r'border-white/\[0\.08\]', 'border-[var(--viz-border)]', 'border white/0.08'),
    (r'border-white/\[0\.09\]', 'border-[var(--viz-border)]', 'border white/0.09'),
    (r'border-white/\[0\.1\]', 'border-[var(--viz-border-light)]', 'border white/0.1'),
    (r'border-white/\[0\.10\]', 'border-[var(--viz-border-light)]', 'border white/0.10'),
    (r'border-white/\[0\.12\]', 'border-[var(--viz-border-light)]', 'border white/0.12'),
    (r'border-white/\[0\.15\]', 'border-[var(--viz-border-light)]', 'border white/0.15'),
    (r'border-white/10', 'border-[var(--viz-border-light)]', 'border white/10 Tailwind'),
    (r'hover:border-white/\[0\.15\]', 'hover:border-[var(--viz-border-light)]', 'hover:border'),
    (r'hover:border-white/\[0\.10\]', 'hover:border-[var(--viz-border-light)]', 'hover:border 0.10'),
    # Glassmorphism outer border + top shine
    # "via-white/20" in top-shine gradient
    (r'via-white/20', 'via-[var(--viz-line)]', 'via white/20 gradient'),
]

# SVG inline attribute replacements
SVG_RULES = [
    # Faint grid / decorative lines
    ('stroke="rgba(255,255,255,0.03)"', 'stroke="var(--viz-grid-faint)"'),
    ('stroke="rgba(255,255,255,0.05)"', 'stroke="var(--viz-grid-faint)"'),
    ('stroke="rgba(255,255,255,0.07)"', 'stroke="var(--viz-grid)"'),
    ('stroke="rgba(255,255,255,0.08)"', 'stroke="var(--viz-grid)"'),
    ('stroke="rgba(255,255,255,0.1)"',  'stroke="var(--viz-grid)"'),
    ('stroke="rgba(255,255,255,0.12)"', 'stroke="var(--viz-grid)"'),
    ('stroke="rgba(255,255,255,0.15)"', 'stroke="var(--viz-line-light)"'),
    ('stroke="rgba(255,255,255,0.2)"',  'stroke="var(--viz-line)"'),
    ('stroke="rgba(255,255,255,0.25)"', 'stroke="var(--viz-line)"'),
    ('stroke="rgba(255,255,255,0.3)"',  'stroke="var(--viz-line)"'),
    # Fill
    ('fill="rgba(255,255,255,0.1)"',  'fill="var(--viz-grid)"'),
    ('fill="rgba(255,255,255,0.2)"',  'fill="var(--viz-line-light)"'),
    ('fill="rgba(255,255,255,0.3)"',  'fill="var(--viz-line)"'),
    ('fill="rgba(255,255,255,0.4)"',  'fill="var(--viz-secondary)"'),
    ('fill="rgba(255,255,255,0.5)"',  'fill="var(--viz-muted)"'),
    ('fill="rgba(255,255,255,0.8)"',  'fill="var(--viz-text)"'),
]

# Outer container: add viz-bg to the root wrapper if missing
OUTER_CONTAINER = 'className="relative overflow-hidden rounded-2xl"'
OUTER_CONTAINER_NEW = 'className="relative overflow-hidden rounded-2xl bg-[var(--viz-bg)]"'


def process_file(path: Path) -> tuple[int, list[str]]:
    """Apply all replacement rules to a file. Returns (change_count, change_descriptions)."""
    original = path.read_text(encoding='utf-8')
    text = original
    changes = []

    # Fix outer container
    if OUTER_CONTAINER in text and OUTER_CONTAINER_NEW not in text:
        text = text.replace(OUTER_CONTAINER, OUTER_CONTAINER_NEW, 1)
        changes.append('  + outer container bg')

    # Tailwind class replacements
    for pattern, replacement, desc in TAILWIND_RULES:
        new_text = re.sub(pattern, replacement, text)
        if new_text != text:
            count = len(re.findall(pattern, text))
            changes.append(f'  + {desc} ({count}x)')
            text = new_text

    # SVG inline attribute replacements
    for old, new in SVG_RULES:
        if old in text:
            count = text.count(old)
            text = text.replace(old, new)
            changes.append(f'  + SVG {old[:30]}… ({count}x)')

    if text != original:
        path.write_text(text, encoding='utf-8')
        return len(changes), changes
    return 0, []


def main():
    tsx_files = sorted(VIZ_DIR.glob('*.tsx'))
    # Exclude the barrel index
    tsx_files = [f for f in tsx_files if f.name != 'index.ts']

    print(f'Processing {len(tsx_files)} viz files...\n')
    total_files = 0
    total_changes = 0

    for path in tsx_files:
        n, changes = process_file(path)
        if n:
            total_files += 1
            total_changes += n
            print(f'{path.name}')
            for c in changes:
                print(c)
            print()

    print(f'Done: {total_files}/{len(tsx_files)} files updated, {total_changes} replacements')


if __name__ == '__main__':
    main()
