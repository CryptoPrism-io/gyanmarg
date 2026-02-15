#!/usr/bin/env python3
"""
Fix missing keyTakeaway in lesson content objects.
Adds keyTakeaway derived from the overview text when it's missing.
"""
import re
import sys
from pathlib import Path

PATHWAYS_DIR = Path(__file__).parent.parent / "src" / "data" / "pathways"


def fix_file(filepath: Path) -> int:
    """Fix missing keyTakeaway in a single file. Returns number of fixes."""
    content = filepath.read_text(encoding='utf-8')
    original = content
    fixes = 0

    # Pattern: content object that has overview, mainContent, actionItem but no keyTakeaway
    # We look for actionItem followed by quiz (without keyTakeaway in between)
    # The pattern matches:
    #   actionItem: '...',
    #   quiz: {
    # And inserts keyTakeaway before actionItem

    # Strategy: find all content: { ... } blocks and check if keyTakeaway is missing
    # We'll do line-by-line analysis

    lines = content.split('\n')
    fixed_lines = []
    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        # Check for actionItem line that's followed by quiz (meaning keyTakeaway is missing)
        # We need to verify there's no keyTakeaway between the mainContent closing and this actionItem
        if stripped.startswith("actionItem:") and i > 0:
            # Look back to find if keyTakeaway exists between mainContent end and here
            has_keytakeaway = False
            # Look back up to 5 lines for keyTakeaway
            for j in range(max(0, i - 5), i):
                if 'keyTakeaway:' in lines[j]:
                    has_keytakeaway = True
                    break

            if not has_keytakeaway:
                # Look back to find the overview to derive keyTakeaway
                overview_text = ''
                for j in range(max(0, i - 100), i):
                    if 'overview:' in lines[j]:
                        # Extract the overview text
                        m = re.search(r"overview:\s*['\"](.+?)['\"]", lines[j])
                        if m:
                            overview_text = m.group(1)
                        break

                # Also look back for the mainContent closing backtick
                mainContent_end = -1
                for j in range(i - 1, max(0, i - 5) - 1, -1):
                    if lines[j].strip().endswith('`,') or lines[j].strip().endswith("`,"):
                        mainContent_end = j
                        break

                if mainContent_end >= 0 or overview_text:
                    # Create keyTakeaway from overview (shortened)
                    if overview_text:
                        # Use overview as keyTakeaway, escaping single quotes
                        kt = overview_text.replace("'", "\\'")
                    else:
                        kt = 'Understanding these concepts is essential for mastery.'

                    # Get the indent of the actionItem line
                    indent = len(line) - len(line.lstrip())
                    indent_str = ' ' * indent

                    # Insert keyTakeaway before actionItem
                    fixed_lines.append(f"{indent_str}keyTakeaway: '{kt}',")
                    fixes += 1

        fixed_lines.append(line)
        i += 1

    if fixes > 0:
        filepath.write_text('\n'.join(fixed_lines), encoding='utf-8')

    return fixes


if __name__ == '__main__':
    files = sys.argv[1:] if len(sys.argv) > 1 else []

    if not files:
        files = sorted(PATHWAYS_DIR.glob("*-lessons.ts"))
    else:
        files = [Path(f) for f in files]

    total = 0
    for f in files:
        count = fix_file(f)
        if count > 0:
            print(f"  Fixed {count} missing keyTakeaway in {f.name}")
            total += count

    print(f"\nTotal: {total} keyTakeaway fields added")
