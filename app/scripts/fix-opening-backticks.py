#!/usr/bin/env python3
"""
Fix opening/closing backticks of mainContent that were incorrectly escaped.
The backtick fix script (v5) may have escaped the template literal delimiters
themselves, turning `mainContent: \`` into `mainContent: \\`` which breaks TS.
"""
import re
import sys
from pathlib import Path

PATHWAYS_DIR = Path(__file__).parent.parent / "src" / "data" / "pathways"


def fix_file(filepath: Path) -> int:
    """Fix escaped opening backticks in mainContent. Returns fix count."""
    content = filepath.read_text(encoding='utf-8')
    original = content
    fixes = 0

    # Fix escaped opening backtick: mainContent: \` -> mainContent: `
    pattern = r'mainContent:\s*\\`'
    matches = re.findall(pattern, content)
    fixes += len(matches)
    content = re.sub(pattern, lambda m: m.group(0).replace('\\`', '`'), content)

    # Fix escaped closing backtick before comma+newline+field
    # Pattern: \`,[newline][spaces](keyTakeaway|actionItem|quiz):
    # Should be: `,[newline][spaces]...
    pattern2 = r'\\`(,\s*\n\s*(?:keyTakeaway|actionItem|quiz)\s*:)'
    matches2 = re.findall(pattern2, content)
    fixes += len(matches2)
    content = re.sub(pattern2, r'`\1', content)

    if content != original:
        filepath.write_text(content, encoding='utf-8')

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
            print(f"  Fixed {count} escaped delimiters in {f.name}")
            total += count

    print(f"\nTotal: {total} escaped delimiters fixed")
