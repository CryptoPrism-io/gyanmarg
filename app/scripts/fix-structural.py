#!/usr/bin/env python3
"""
Fix structural issues in generated lesson files:
1. Remove stray `; lines after ];
2. Add missing }, to close lesson objects
"""
import re
import sys
from pathlib import Path

PATHWAYS_DIR = Path(__file__).parent.parent / "src" / "data" / "pathways"


def fix_file(filepath: Path) -> dict:
    """Fix structural issues in a single file."""
    content = filepath.read_text(encoding='utf-8')
    original = content
    fixes = {"stray_backtick": 0, "missing_close": 0}

    # Fix 1: Remove stray `; lines
    # Pattern: a line that is just `; (with optional whitespace)
    lines = content.split('\n')
    fixed_lines = []
    for i, line in enumerate(lines):
        stripped = line.strip()
        if stripped == '`;':
            # Check if the previous non-empty line ends with ]; or similar
            # This is a stray backtick-semicolon from generation
            fixes["stray_backtick"] += 1
            continue  # Skip this line
        fixed_lines.append(line)

    content = '\n'.join(fixed_lines)

    # Fix 2: Add missing }, to close lesson objects
    # Pattern: a line with "    }," (closing content) followed by "  {" (opening next lesson)
    # without "  }," (closing lesson) in between
    lines = content.split('\n')
    fixed_lines = []
    for i, line in enumerate(lines):
        fixed_lines.append(line)
        stripped = line.strip()

        # Check if this line closes the 'content' object (4-space indent })
        # and the next line opens a new lesson (2-space indent {)
        if stripped == '},' and i + 1 < len(lines):
            indent = len(line) - len(line.lstrip())
            next_line = lines[i + 1].strip()
            next_indent = len(lines[i + 1]) - len(lines[i + 1].lstrip())

            # If current indent is 4 (closing content) and next is 2 (opening lesson)
            # then we're missing the 2-space indent }, to close the lesson
            if indent == 4 and next_indent == 2 and next_line == '{':
                fixed_lines.append('  },')
                fixes["missing_close"] += 1

    content = '\n'.join(fixed_lines)

    if content != original:
        filepath.write_text(content, encoding='utf-8')

    return fixes


if __name__ == '__main__':
    files = sys.argv[1:] if len(sys.argv) > 1 else []

    if not files:
        files = sorted(PATHWAYS_DIR.glob("*-lessons.ts"))
    else:
        files = [Path(f) for f in files]

    total_stray = 0
    total_missing = 0
    for f in files:
        fixes = fix_file(f)
        if fixes["stray_backtick"] > 0 or fixes["missing_close"] > 0:
            parts = []
            if fixes["stray_backtick"]:
                parts.append(f'{fixes["stray_backtick"]} stray backticks')
            if fixes["missing_close"]:
                parts.append(f'{fixes["missing_close"]} missing closes')
            print(f"  Fixed {', '.join(parts)} in {f.name}")
            total_stray += fixes["stray_backtick"]
            total_missing += fixes["missing_close"]

    print(f"\nTotal: {total_stray} stray backticks, {total_missing} missing closes")
