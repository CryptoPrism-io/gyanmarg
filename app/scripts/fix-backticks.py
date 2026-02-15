#!/usr/bin/env python3
"""
Fix unescaped backticks inside template literal strings in lesson files.
Backticks used for inline code in markdown (e.g., `variable`) break
TypeScript template literals. This script escapes them.
"""
import re
import sys
from pathlib import Path

PATHWAYS_DIR = Path(__file__).parent.parent / "src" / "data" / "pathways"

def fix_template_literals(content: str) -> str:
    """Find all template literal strings and escape internal backticks."""
    result = []
    i = 0
    fixes = 0

    while i < len(content):
        # Look for mainContent: ` pattern (template literal start)
        if content[i] == '`':
            # Check if this is the start of a template literal
            # by looking for `: ` or `= ` before it
            before = content[max(0, i-50):i].rstrip()
            if before.endswith(':') or before.endswith('='):
                # This is a template literal. Find the matching close backtick.
                result.append('`')
                i += 1
                depth = 1  # Track template literal nesting via ${}

                while i < len(content) and depth > 0:
                    if content[i] == '\\':
                        # Escaped character, keep as-is
                        result.append(content[i])
                        result.append(content[i+1] if i+1 < len(content) else '')
                        i += 2
                        continue
                    elif content[i] == '$' and i+1 < len(content) and content[i+1] == '{':
                        # Template expression start
                        result.append('${')
                        i += 2
                        # Skip until matching }
                        brace_depth = 1
                        while i < len(content) and brace_depth > 0:
                            if content[i] == '{':
                                brace_depth += 1
                            elif content[i] == '}':
                                brace_depth -= 1
                            result.append(content[i])
                            i += 1
                        continue
                    elif content[i] == '`':
                        # This is either the closing backtick or an internal one
                        # Check what follows: if it looks like it ends the template
                        # (followed by , or ; or newline with proper indentation)
                        after = content[i+1:i+20].lstrip()
                        if after and (after[0] in ',;\n' or after.startswith('//')):
                            # This is the closing backtick
                            result.append('`')
                            i += 1
                            depth = 0
                        else:
                            # Check if this backtick is part of inline code markdown
                            # and should be escaped
                            # Look ahead: if there's matching backtick on same/nearby line
                            rest = content[i+1:]
                            next_bt = rest.find('`')
                            if next_bt == -1:
                                # No more backticks - this must be the closing one
                                result.append('`')
                                i += 1
                                depth = 0
                            elif next_bt < 200 and '\n\n' not in rest[:next_bt]:
                                # There's a nearby backtick - this is likely inline code
                                # Escape both this and the matching one
                                result.append('\\`')
                                i += 1
                                fixes += 1
                            else:
                                # Far away backtick - this is the closing one
                                result.append('`')
                                i += 1
                                depth = 0
                    else:
                        result.append(content[i])
                        i += 1
            else:
                result.append(content[i])
                i += 1
        else:
            result.append(content[i])
            i += 1

    return ''.join(result), fixes


def fix_file(filepath: Path) -> int:
    """Fix a single file. Returns number of fixes made."""
    content = filepath.read_text(encoding='utf-8')
    fixed, count = fix_template_literals(content)
    if count > 0:
        filepath.write_text(fixed, encoding='utf-8')
    return count


if __name__ == '__main__':
    files = sys.argv[1:] if len(sys.argv) > 1 else []

    if not files:
        # Fix all lesson files
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
