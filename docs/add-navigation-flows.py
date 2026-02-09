#!/usr/bin/env python3
"""Add navigation flow information to each SVG page"""

import os
import re

# Navigation data for each page
navigation_flows = {
    '01-landing-page.svg': {
        'entry': ['Direct URL', 'Marketing campaigns', 'Search engines'],
        'exit': ['Sign up → Dashboard', 'Learn More → Science page', 'Explore domains']
    },
    '02-dashboard.svg': {
        'entry': ['After sign up/login', 'Navbar: Home', 'App default route'],
        'exit': ['Module Hub (Learn)', 'Learning Pathway', 'Spaced Repetition', 'Challenges', 'All navbar links']
    },
    '03-module-hub.svg': {
        'entry': ['Dashboard', 'Navbar: Learn', 'Learning Pathway'],
        'exit': ['Module Page (click module)', 'Dashboard', 'Start recommended module']
    },
    '04-module-page.svg': {
        'entry': ['Module Hub', 'Learning Pathway', 'Dashboard module cards'],
        'exit': ['Lesson Viewer (click lesson)', 'Module Hub (back)', 'Continue current lesson']
    },
    '05-lesson-viewer.svg': {
        'entry': ['Module Page', 'Learning Pathway', 'Dashboard Continue', 'Previous lesson'],
        'exit': ['Next Lesson', 'Module Page (close)', 'Spaced Repetition (review)', 'Save card → Saved Cards']
    },
    '06-learning-pathway.svg': {
        'entry': ['Dashboard', 'Navbar: Learn', 'Module Hub'],
        'exit': ['Lesson Viewer', 'Module Page', 'Module Hub', 'Continue reading']
    },
    '07-spaced-repetition.svg': {
        'entry': ['Dashboard: Review Cards', 'After lesson completion', 'Navbar'],
        'exit': ['Dashboard', 'Continue session', 'Category selection']
    },
    '08-daily-challenges.svg': {
        'entry': ['Dashboard: Daily Challenge', 'Navbar: Challenges'],
        'exit': ['Dashboard', 'Submit response', 'View completed']
    },
    '09-knowledge-map.svg': {
        'entry': ['Dashboard: Explore Connections', 'Navbar'],
        'exit': ['Related lessons', 'Dashboard', 'Connection details']
    },
    '10-visual-lab.svg': {
        'entry': ['Dashboard: Visual of Day', 'Navbar: Visuals'],
        'exit': ['Full screen viewer', 'Dashboard', 'Filter by module']
    },
    '11-saved-cards.svg': {
        'entry': ['Navbar: Saved', 'Lesson Viewer: Star button'],
        'exit': ['Original lesson (Go to Lesson)', 'Dashboard', 'Unsave card']
    },
    '12-settings.svg': {
        'entry': ['Navbar: Settings', 'Avatar dropdown menu'],
        'exit': ['Dashboard', 'Sign out', 'Export/Import data']
    },
    '13-desktop-navbar.svg': {
        'entry': ['Always visible on desktop (>1024px)'],
        'exit': ['Home, Learn, Visuals, Challenges, Saved, Settings', 'Avatar menu', 'XP details']
    },
    '14-mobile-navbar.svg': {
        'entry': ['Always visible on mobile (<768px)'],
        'exit': ['Home (Dashboard)', 'Learn (Pathway)', 'Saved', 'Settings']
    },
    '15-modals.svg': {
        'entry': ['Level Up: XP threshold crossed', 'Achievement: Criteria met', 'Sign In Gate: Protected routes'],
        'exit': ['Dismiss/Continue to underlying page', 'Sign in with Google', 'Guest mode']
    },
    '16-legend.svg': {
        'entry': ['Reference guide (no navigation)'],
        'exit': ['N/A - Informational only']
    }
}

def create_navigation_section(entries, exits, theme='dark'):
    """Create SVG markup for navigation flow section"""
    if theme == 'dark':
        bg_color = '#111113'
        text_color = '#E5E5E5'
        secondary_color = '#888'
        accent_color = '#F59E0B'
        border_color = '#333'
    else:  # light theme
        bg_color = '#F8F8F8'
        text_color = '#1A1A1D'
        secondary_color = '#666666'
        accent_color = '#D97706'
        border_color = '#CCCCCC'

    # Calculate height based on number of items
    max_items = max(len(entries), len(exits))
    item_height = 18
    base_height = 80
    section_height = base_height + (max_items * item_height)

    svg_section = f'''
  <!-- Navigation Flow -->
  <rect x="20" y="880" width="1040" height="{section_height}" fill="{bg_color}" stroke="{border_color}" stroke-width="1" rx="6"/>
  <text x="540" y="910" font-family="Outfit, sans-serif" font-size="13" font-weight="600" fill="{accent_color}" text-anchor="middle">🔀 Navigation Flow</text>

  <!-- Entry Points -->
  <text x="40" y="935" font-family="Outfit, sans-serif" font-size="11" font-weight="600" fill="{text_color}">Ways to reach this page ({len(entries)}):</text>
'''

    # Add entry points
    y_pos = 955
    for i, entry in enumerate(entries):
        svg_section += f'  <text x="60" y="{y_pos}" font-family="Inter, sans-serif" font-size="10" fill="{secondary_color}">• {entry}</text>\n'
        y_pos += item_height

    # Exit Points
    exit_y_start = 935
    svg_section += f'  <text x="560" y="{exit_y_start}" font-family="Outfit, sans-serif" font-size="11" font-weight="600" fill="{text_color}">Where you can go ({len(exits)}):</text>\n'

    # Add exit points
    y_pos = 955
    for i, exit_point in enumerate(exits):
        svg_section += f'  <text x="580" y="{y_pos}" font-family="Inter, sans-serif" font-size="10" fill="{secondary_color}">→ {exit_point}</text>\n'
        y_pos += item_height

    return svg_section

def add_navigation_to_file(filepath, entries, exits, theme='dark'):
    """Add navigation section to an SVG file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove closing </svg> tag
    content = content.replace('</svg>', '').rstrip()

    # Add navigation section
    nav_section = create_navigation_section(entries, exits, theme)
    content += nav_section

    # Add closing tag
    content += '\n</svg>\n'

    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# Process dark theme files
print('Adding navigation flows to dark theme pages...\n')
for filename, flows in navigation_flows.items():
    filepath = f'pages/{filename}'
    if os.path.exists(filepath):
        add_navigation_to_file(filepath, flows['entry'], flows['exit'], theme='dark')
        print(f'✓ Added navigation to {filename}')

print('\n' + '='*60)
print('Adding navigation flows to light theme pages...\n')

# Process light theme files
for filename, flows in navigation_flows.items():
    filepath = f'pages-bw/{filename}'
    if os.path.exists(filepath):
        add_navigation_to_file(filepath, flows['entry'], flows['exit'], theme='light')
        print(f'✓ Added navigation to {filename}')

print('\n✅ Done! Navigation flows added to all 32 files (16 dark + 16 light)')
print('   Each page now shows entry points and exit destinations!')
