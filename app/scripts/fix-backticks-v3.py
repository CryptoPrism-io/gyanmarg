#!/usr/bin/env python3
"""
Fix unescaped backticks inside template literal strings in lesson files.
v3: Two-pass approach:
  1. First undo any previous escaping (\\` -> `)
  2. Then properly escape backticks inside mainContent template literals
"""
import sys
from pathlib import Path

PATHWAYS_DIR = Path(__file__).parent.parent / "src" / "data" / "pathways"


def fix_file(filepath: Path) -> int:
    """Fix backticks in a single file. Returns number of fixes."""
    content = filepath.read_text(encoding='utf-8')

    # Pass 1: Undo any previous backtick escaping (restore to clean state)
    content = content.replace('\\`', '`')

    # Pass 2: Find mainContent template literals and escape internal backticks
    lines = content.split('\n')
    fixed_lines = []
    in_template = False
    template_indent = 0
    fixes = 0

    i = 0
    while i < len(lines):
        line = lines[i]

        if not in_template:
            # Check if this line starts a mainContent template literal
            if 'mainContent: `' in line:
                # Find the position of the opening backtick
                mc_idx = line.index('mainContent: `')
                bt_start = mc_idx + len('mainContent: `') - 1  # position of `
                template_indent = mc_idx  # indentation of mainContent

                before_bt = line[:bt_start]  # everything before the `
                after_bt = line[bt_start+1:]  # everything after the opening `

                # Check if template literal closes on this same line
                # The closing backtick would be at the end, followed by ,
                close_idx = find_close_on_line(after_bt)

                if close_idx >= 0:
                    # Single-line template literal
                    inner = after_bt[:close_idx]
                    rest_after = after_bt[close_idx:]  # includes closing ` and ,
                    escaped_inner = inner.replace('`', '\\`')
                    cnt = inner.count('`')
                    fixes += cnt
                    fixed_lines.append(before_bt + '`' + escaped_inner + rest_after)
                else:
                    # Multi-line: escape backticks in the rest of this line
                    escaped = after_bt.replace('`', '\\`')
                    fixes += after_bt.count('`')
                    fixed_lines.append(before_bt + '`' + escaped)
                    in_template = True
            else:
                fixed_lines.append(line)
        else:
            # Inside a multi-line template literal
            # Check if this line closes it
            close_idx = find_close_on_line_multiline(line, template_indent)

            if close_idx >= 0:
                # This line closes the template literal
                content_part = line[:close_idx]
                rest_part = line[close_idx:]  # includes closing ` and ,
                escaped = content_part.replace('`', '\\`')
                fixes += content_part.count('`')
                fixed_lines.append(escaped + rest_part)
                in_template = False
            else:
                # Still inside, escape all backticks
                escaped = line.replace('`', '\\`')
                fixes += line.count('`')
                fixed_lines.append(escaped)

        i += 1

    if fixes > 0:
        filepath.write_text('\n'.join(fixed_lines), encoding='utf-8')
    return fixes


def find_close_on_line(text: str) -> int:
    """Find closing backtick position in text after the opening backtick.
    The closing backtick is at the end of text, followed by optional comma/semicolon.
    Returns position of closing backtick, or -1."""
    stripped = text.rstrip()
    if stripped.endswith('`,'):
        # Find the last ` before the ,
        pos = len(stripped) - 2  # position of ` in stripped
        # Map back to original text
        return pos
    elif stripped.endswith('`'):
        return len(stripped) - 1
    return -1


def find_close_on_line_multiline(line: str, template_indent: int) -> int:
    """Check if this line closes a multi-line template literal.
    The closing pattern is a backtick at the end of the line (before ,).
    The closing backtick has indentation close to the mainContent field."""
    stripped = line.rstrip()

    # The closing backtick should end with `, at proper indentation
    if stripped.endswith('`,'):
        # Find the last backtick before the comma
        bt_pos = stripped.rfind('`')
        # Verify indentation: the backtick should be at a reasonable position
        # for closing the template literal (not an inline code backtick)
        # Key insight: the closing backtick is at the END of content,
        # and it's the ONLY backtick followed by comma at line end
        return bt_pos
    return -1


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
