#!/usr/bin/env python3
"""Convert dark theme SVGs to black & white light theme"""

import os
import glob

# Color mapping from dark to light theme (order matters!)
color_map = {
    # Special pattern cases first (before general colors)
    'fill="#0A0A0B"': 'fill="#FFFFFF"',
    'fill="#1A1A1D"': 'fill="#FFFFFF"',
    'fill="#111113"': 'fill="#F8F8F8"',
    'stroke="#333"': 'stroke="#CCCCCC"',
    'stroke="#555"': 'stroke="#999999"',
    'stroke="#888"': 'stroke="#AAAAAA"',

    # Backgrounds
    '#0A0A0B': '#FFFFFF',  # Main dark bg → white
    '#1A1A1D': '#FFFFFF',  # Dark surface → white
    '#111113': '#F8F8F8',  # Dark container → light gray

    # Text colors
    '#E5E5E5': '#1A1A1D',  # Light text → dark text
    '#888888': '#666666',  # Gray text (8 chars first)
    '#888': '#666666',     # Gray text (3 chars)
    '#666': '#888888',     # Dim text → medium gray

    # Accent colors - darken for print visibility
    '#F59E0B': '#D97706',  # Amber → darker amber
    '#22C55E': '#16A34A',  # Green → darker green
    '#EF4444': '#DC2626',  # Red → darker red

    # Strokes (single values, not in attributes)
    '#333': '#CCCCCC',     # Dark stroke → light gray stroke
    '#555': '#999999',     # Medium stroke → medium gray stroke
}

# Additional replacements for specific patterns
pattern_replacements = {
    'fill-opacity="0.2"': 'fill-opacity="0.1"',
    'fill-opacity="0.3"': 'fill-opacity="0.2"',
    'opacity="0.2"': 'opacity="0.15"',
    'opacity="0.3"': 'opacity="0.2"',
    'opacity="0.6"': 'opacity="0.4"',
}

def convert_file(input_path, output_path):
    """Convert a single SVG from dark to light theme"""
    with open(input_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Apply color replacements
    for old_color, new_color in color_map.items():
        content = content.replace(old_color, new_color)

    # Apply pattern replacements
    for old_pattern, new_pattern in pattern_replacements.items():
        content = content.replace(old_pattern, new_pattern)

    # Write to output
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(content)

# Create output directory
os.makedirs('pages-bw', exist_ok=True)

# Convert all SVG files
svg_files = sorted(glob.glob('pages/*.svg'))
print(f'Converting {len(svg_files)} files to black & white...\n')

for svg_file in svg_files:
    filename = os.path.basename(svg_file)
    output_file = os.path.join('pages-bw', filename)

    convert_file(svg_file, output_file)
    print(f'✓ Converted {filename}')

print(f'\n✅ Done! All {len(svg_files)} files converted to pages-bw/ directory')
print('   Light background with dark text - perfect for printing!')
