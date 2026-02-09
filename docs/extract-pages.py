#!/usr/bin/env python3
"""Extract individual pages from the 4x4 grid SVG"""

import re

# Read the source SVG
with open('polymind-product-map.svg', 'r', encoding='utf-8') as f:
    content = f.read()

# Define the 16 pages with their translations and names
pages = [
    # Row 1
    ('01-landing-page.svg', 'translate(60, 60)', 'LANDING PAGE'),
    ('02-dashboard.svg', 'translate(1260, 60)', 'DASHBOARD'),
    ('03-module-hub.svg', 'translate(2460, 60)', 'MODULE HUB'),
    ('04-module-page.svg', 'translate(3660, 60)', 'MODULE PAGE'),
    # Row 2
    ('05-lesson-viewer.svg', 'translate(60, 1260)', 'LESSON VIEWER'),
    ('06-learning-pathway.svg', 'translate(1260, 1260)', 'LEARNING PATHWAY'),
    ('07-spaced-repetition.svg', 'translate(2460, 1260)', 'SPACED REPETITION'),
    ('08-daily-challenges.svg', 'translate(3660, 1260)', 'DAILY CHALLENGES'),
    # Row 3
    ('09-knowledge-map.svg', 'translate(60, 2460)', 'KNOWLEDGE MAP'),
    ('10-visual-lab.svg', 'translate(1260, 2460)', 'VISUAL LAB'),
    ('11-saved-cards.svg', 'translate(2460, 2460)', 'SAVED CARDS'),
    ('12-settings.svg', 'translate(3660, 2460)', 'SETTINGS'),
    # Row 4
    ('13-desktop-navbar.svg', 'translate(60, 3660)', 'DESKTOP NAVBAR'),
    ('14-mobile-navbar.svg', 'translate(1260, 3660)', 'MOBILE NAVBAR'),
    ('15-modals.svg', 'translate(2460, 3660)', 'MODALS'),
    ('16-legend.svg', 'translate(3660, 3660)', 'PRODUCT MAP GUIDE'),
]

# SVG template
svg_template = '''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080">
  <defs>
    <filter id="shadow">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-opacity="0.3"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1080" height="1080" fill="#0A0A0B"/>

{content}
</svg>'''

for filename, transform, title in pages:
    print(f'Extracting {filename}...')

    # Find the group with this transform
    pattern = f'<g transform="{re.escape(transform)}">(.*?)</g>\\n\\n  <!-- '
    match = re.search(pattern, content, re.DOTALL)

    if match:
        group_content = match.group(1)
        # Remove the transform attribute from the content
        group_content = group_content.replace(f' transform="{transform}"', '')

        # Create the new SVG
        svg_content = svg_template.format(content=group_content)

        # Write to file
        with open(f'pages/{filename}', 'w', encoding='utf-8') as f:
            f.write(svg_content)

        print(f'✓ Created pages/{filename}')
    else:
        print(f'✗ Could not find content for {filename}')

print(f'\\nDone! Created {len(pages)} individual page files in pages/ directory')
