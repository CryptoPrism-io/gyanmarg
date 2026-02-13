#!/usr/bin/env python3
"""
Fix unescaped backticks inside mainContent template literals.
v5: Uses regex with structural knowledge of the lesson format.
"""
import re
import sys
from pathlib import Path

PATHWAYS_DIR = Path(__file__).parent.parent / "src" / "data" / "pathways"

# This regex captures:
# Group 1: "mainContent: `" (the opening)
# Group 2: the content (non-greedy, everything between opening and closing)
# Group 3: "`,\n      keyTakeaway:" or similar (the closing + next field)
MAIN_CONTENT_PATTERN = re.compile(
    r'(mainContent:\s*`)'       # opening: mainContent: `
    r'(.*?)'                    # content (non-greedy)
    r'(`\s*,\s*\n\s*(?:keyTakeaway|actionItem|quiz)\s*:)',  # closing: `,\n      keyTakeaway:
    re.DOTALL
)


def escape_content_backticks(match):
    """Replace function for regex: escape backticks in the content group."""
    opening = match.group(1)
    content = match.group(2)
    closing = match.group(3)

    # Escape all backticks in the content
    escaped = content.replace('`', '\\`')
    return opening + escaped + closing


def fix_file(filepath: Path) -> int:
    """Fix backticks in mainContent template literals."""
    content = filepath.read_text(encoding='utf-8')

    # Step 1: Undo any previous backtick escaping to get a clean state
    content = content.replace('\\`', '`')

    # Step 2: Count backticks that will be escaped
    # Find all matches first
    matches = list(MAIN_CONTENT_PATTERN.finditer(content))
    backtick_count = sum(m.group(2).count('`') for m in matches)

    # Step 3: Apply fixes
    if backtick_count > 0:
        fixed = MAIN_CONTENT_PATTERN.sub(escape_content_backticks, content)
        filepath.write_text(fixed, encoding='utf-8')

    return backtick_count


if __name__ == '__main__':
    files = sys.argv[1:] if len(sys.argv) > 1 else []

    if not files:
        files = sorted(PATHWAYS_DIR.glob("*-lessons.ts"))
    else:
        files = [Path(f) for f in files]

    total_fixes = 0
    fixed_count = 0
    for f in files:
        count = fix_file(f)
        if count > 0:
            print(f"  Fixed {count} backticks in {f.name}")
            total_fixes += count
            fixed_count += 1

    print(f"\nTotal: {total_fixes} backtick fixes in {fixed_count} of {len(files)} files")
