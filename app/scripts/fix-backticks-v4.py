#!/usr/bin/env python3
"""
Fix unescaped backticks inside mainContent template literals.
v4: Uses document structure (keyTakeaway follows mainContent) to reliably
    find template literal boundaries.
"""
import re
import sys
from pathlib import Path

PATHWAYS_DIR = Path(__file__).parent.parent / "src" / "data" / "pathways"


def fix_file(filepath: Path) -> int:
    """Fix backticks in mainContent template literals."""
    content = filepath.read_text(encoding='utf-8')

    # Step 1: Undo any previous backtick escaping to get a clean state
    content = content.replace('\\`', '`')

    # Step 2: Find and fix all mainContent template literals
    # Strategy: find "mainContent: `" and then find the next "keyTakeaway:"
    # or "actionItem:" or "quiz:" at the expected indentation.
    # The closing backtick of mainContent is right before that next field.

    fixes = 0
    result_parts = []
    search_start = 0

    while True:
        # Find next mainContent template literal
        mc_idx = content.find('mainContent: `', search_start)
        if mc_idx == -1:
            result_parts.append(content[search_start:])
            break

        # Find the opening backtick
        bt_open = mc_idx + len('mainContent: `') - 1

        # Append everything before and including "mainContent: `"
        result_parts.append(content[search_start:bt_open + 1])

        # Now find where the template literal ENDS.
        # Look for the next field at the same indentation level.
        # The pattern is: the closing `, is on its own conceptual line,
        # followed by a property like keyTakeaway, actionItem, or quiz.

        # Find the indentation of mainContent
        line_start = content.rfind('\n', 0, mc_idx) + 1
        mc_indent = mc_idx - line_start

        # The next field (keyTakeaway/actionItem/quiz) will be at the same indent
        # Search for the next field marker after the opening backtick
        next_field_pattern = re.compile(
            r'\n' + ' ' * mc_indent + r'(keyTakeaway|actionItem|quiz)\s*:',
        )

        match = next_field_pattern.search(content, bt_open + 1)
        if match:
            # The closing `, is right before this next field's line
            # Find the backtick-comma that closes the template literal
            # It should be on the line before the next field
            field_line_start = match.start() + 1  # skip the \n

            # Look backwards from field_line_start for the closing `,
            region_before_field = content[bt_open + 1:field_line_start]

            # The closing backtick + comma is at the end of this region
            # (possibly with trailing whitespace)
            stripped_region = region_before_field.rstrip()
            if stripped_region.endswith('`,'):
                # The closing `, is at the end of the content
                close_bt_relative = stripped_region.rfind('`')
                close_bt_abs = bt_open + 1 + close_bt_relative

                # Extract the content between opening and closing backticks
                inner = content[bt_open + 1:close_bt_abs]

                # Escape all backticks in the inner content
                cnt = inner.count('`')
                escaped = inner.replace('`', '\\`')
                fixes += cnt

                result_parts.append(escaped)
                search_start = close_bt_abs  # continue from closing backtick
            else:
                # Fallback: couldn't find proper closing, skip this one
                print(f"  WARNING: Could not find closing backtick for mainContent at position {mc_idx}")
                result_parts.append(content[bt_open + 1:bt_open + 2])
                search_start = bt_open + 2
        else:
            # No next field found, skip
            print(f"  WARNING: Could not find next field after mainContent at position {mc_idx}")
            result_parts.append(content[bt_open + 1:bt_open + 2])
            search_start = bt_open + 2

    new_content = ''.join(result_parts)

    if fixes > 0:
        filepath.write_text(new_content, encoding='utf-8')

    return fixes


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
