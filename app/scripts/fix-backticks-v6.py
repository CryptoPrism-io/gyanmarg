#!/usr/bin/env python3
"""
Fix unescaped backticks inside mainContent template literals.
v6: Like v5 but handles the undo+re-escape correctly per-block,
and preserves opening/closing backtick delimiters.
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
    r'(`,\s*\r?\n\s*(?:keyTakeaway|actionItem|quiz)\s*:)',  # closing
    re.DOTALL
)

# Also match escaped opening backtick: mainContent: \`
ESCAPED_OPEN_PATTERN = re.compile(
    r'(mainContent:\s*)\\(`)'   # escaped opening: mainContent: \`
    r'(.*?)'                    # content (non-greedy)
    r'(\\?`,\s*\r?\n\s*(?:keyTakeaway|actionItem|quiz)\s*:)',  # closing (possibly escaped)
    re.DOTALL
)


def fix_block(match):
    """Fix backticks in a single mainContent block."""
    opening = match.group(1)
    content = match.group(2)
    closing = match.group(3)

    # Undo any previous escaping in the content only
    content = content.replace('\\`', '`')
    # Re-escape all backticks in the content
    content = content.replace('`', '\\`')

    return opening + content + closing


def fix_escaped_block(match):
    """Fix a mainContent block that has an escaped opening backtick."""
    prefix = match.group(1)  # mainContent:
    backtick = match.group(2)  # `
    content = match.group(3)
    closing = match.group(4)

    # Fix the closing - remove any escape from closing backtick
    if closing.startswith('\\`'):
        closing = closing[1:]  # Remove the backslash

    # Undo any previous escaping in the content only
    content = content.replace('\\`', '`')
    # Re-escape all backticks in the content
    content = content.replace('`', '\\`')

    return prefix + backtick + content + closing


def fix_file(filepath: Path) -> int:
    """Fix backticks in mainContent template literals."""
    content = filepath.read_text(encoding='utf-8')
    original = content

    # First, fix any escaped opening backticks (mainContent: \`)
    content = ESCAPED_OPEN_PATTERN.sub(fix_escaped_block, content)

    # Then, fix normal opening backticks (mainContent: `)
    content = MAIN_CONTENT_PATTERN.sub(fix_block, content)

    if content != original:
        filepath.write_text(content, encoding='utf-8')
        # Count changes
        orig_backticks = original.count('\\`')
        new_backticks = content.count('\\`')
        return abs(new_backticks - orig_backticks)

    return 0


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
            print(f"  Fixed backticks in {f.name} (delta: {count})")
            total_fixes += count
            fixed_count += 1

    print(f"\nTotal: {total_fixes} backtick changes in {fixed_count} of {len(files)} files")
