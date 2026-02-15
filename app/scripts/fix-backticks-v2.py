#!/usr/bin/env python3
"""
Fix unescaped backticks inside template literal strings in lesson files.
v2: More robust approach using line-by-line state tracking.
"""
import re
import sys
from pathlib import Path

PATHWAYS_DIR = Path(__file__).parent.parent / "src" / "data" / "pathways"


def fix_file(filepath: Path) -> int:
    """Fix unescaped backticks inside template literals."""
    lines = filepath.read_text(encoding='utf-8').split('\n')
    fixed_lines = []
    in_template = False
    fixes = 0

    for i, line in enumerate(lines):
        if not in_template:
            # Check if this line starts a template literal
            # Pattern: mainContent: `  (template literal for content)
            stripped = line.strip()
            if 'mainContent: `' in line or 'mainContent:`' in line:
                # Find the backtick position
                bt_pos = line.index('`', line.index('mainContent'))
                # Check if the template literal also closes on this line
                # (single-line template literal)
                rest = line[bt_pos+1:]
                # Look for closing backtick that's not escaped
                close_pos = find_closing_backtick(rest)
                if close_pos >= 0:
                    # Single-line: escape internal backticks
                    inner = rest[:close_pos]
                    escaped, cnt = escape_backticks(inner)
                    fixes += cnt
                    fixed_lines.append(line[:bt_pos+1] + escaped + rest[close_pos:])
                else:
                    # Multi-line: start escaping, this line's content after backtick
                    content_part = line[bt_pos+1:]
                    escaped, cnt = escape_backticks(content_part)
                    fixes += cnt
                    fixed_lines.append(line[:bt_pos+1] + escaped)
                    in_template = True
            else:
                fixed_lines.append(line)
        else:
            # We're inside a template literal
            # Check if this line closes it
            # Closing patterns: ends with `, or `; or just `
            stripped = line.rstrip()

            # Find if there's a closing backtick on this line
            close_pos = find_closing_backtick_in_template_line(line)

            if close_pos >= 0:
                # This line closes the template literal
                # Escape backticks in the content part (before the closing backtick)
                content_part = line[:close_pos]
                rest = line[close_pos:]  # includes the closing backtick and whatever after
                escaped, cnt = escape_backticks(content_part)
                fixes += cnt
                fixed_lines.append(escaped + rest)
                in_template = False
            else:
                # Still inside template literal, escape all backticks
                escaped, cnt = escape_backticks(line)
                fixes += cnt
                fixed_lines.append(escaped)

    if fixes > 0:
        filepath.write_text('\n'.join(fixed_lines), encoding='utf-8')
    return fixes


def find_closing_backtick(text: str) -> int:
    """Find the position of a closing backtick in text (not escaped, not part of ${})."""
    i = 0
    while i < len(text):
        if text[i] == '\\':
            i += 2  # skip escaped char
        elif text[i] == '$' and i+1 < len(text) and text[i+1] == '{':
            # Skip template expression
            i += 2
            depth = 1
            while i < len(text) and depth > 0:
                if text[i] == '{': depth += 1
                elif text[i] == '}': depth -= 1
                i += 1
        elif text[i] == '`':
            return i
        else:
            i += 1
    return -1


def find_closing_backtick_in_template_line(line: str) -> int:
    """Check if a line closes a template literal.
    The closing backtick is followed by , or ; or end of meaningful content.
    Returns position of closing backtick, or -1 if line doesn't close the template."""
    stripped = line.rstrip()

    # Common closing patterns for mainContent template literals:
    # - Line ends with `,  (backtick-comma)
    # - Line ends with `;  (backtick-semicolon)
    # But we need to be careful: a line like "Use `code` for..." has backticks
    # that are NOT closing the template.

    # The closing backtick+comma pattern at line end is the most reliable indicator
    if stripped.endswith('`,'):
        return stripped.rindex('`')
    if stripped.endswith('`;'):
        return stripped.rindex('`')
    if stripped.endswith('`'):
        # Could be closing, check next line context
        # For safety, only treat as closing if it's at a reasonable indentation
        indent = len(line) - len(line.lstrip())
        if indent <= 6:  # mainContent closes at ~6 spaces indent
            return stripped.rindex('`')

    return -1


def escape_backticks(text: str) -> tuple:
    """Escape unescaped backticks in text. Returns (escaped_text, count)."""
    result = []
    count = 0
    i = 0
    while i < len(text):
        if text[i] == '\\' and i+1 < len(text):
            # Already escaped, keep as-is
            result.append(text[i])
            result.append(text[i+1])
            i += 2
        elif text[i] == '`':
            result.append('\\`')
            count += 1
            i += 1
        else:
            result.append(text[i])
            i += 1
    return ''.join(result), count


if __name__ == '__main__':
    files = sys.argv[1:] if len(sys.argv) > 1 else []

    if not files:
        files = sorted(PATHWAYS_DIR.glob("*-lessons.ts"))
    else:
        files = [Path(f) for f in files]

    total_fixes = 0
    for f in files:
        count = fix_file(f)
        if count > 0:
            print(f"  Fixed {count} backticks in {f.name}")
            total_fixes += count

    print(f"\nTotal: {total_fixes} backtick fixes across {len(files)} files")
