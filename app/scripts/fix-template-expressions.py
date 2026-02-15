#!/usr/bin/env python3
"""
Fix unescaped ${...} template expressions inside mainContent template literals.
These occur when Gemini generates code examples with template literal syntax
inside the mainContent backtick strings.
"""
import re
import sys
from pathlib import Path

PATHWAYS_DIR = Path(__file__).parent.parent / "src" / "data" / "pathways"

# Pattern to match mainContent template literals
MAIN_CONTENT_PATTERN = re.compile(
    r'(mainContent:\s*`)'       # opening
    r'(.*?)'                    # content (non-greedy)
    r'(`\s*,\s*\n\s*(?:keyTakeaway|actionItem|quiz)\s*:)',  # closing
    re.DOTALL
)


def escape_template_expressions(match):
    """Escape ${...} inside mainContent template literals."""
    opening = match.group(1)
    content = match.group(2)
    closing = match.group(3)

    # Replace unescaped ${...} with \${...}
    # First undo any previous escaping
    content = content.replace('\\${', '${')
    # Then escape all occurrences
    content = content.replace('${', '\\${')

    return opening + content + closing


def fix_file(filepath: Path) -> int:
    """Fix unescaped template expressions in a single file. Returns fix count."""
    content = filepath.read_text(encoding='utf-8')
    original = content

    # Count ${...} before fix
    before_count = len(re.findall(r'(?<!\\)\$\{', content))

    content = MAIN_CONTENT_PATTERN.sub(escape_template_expressions, content)

    if content != original:
        filepath.write_text(content, encoding='utf-8')
        after_count = len(re.findall(r'(?<!\\)\$\{', content))
        return before_count - after_count

    return 0


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
            print(f"  Fixed {count} template expressions in {f.name}")
            total += count

    print(f"\nTotal: {total} template expressions escaped")
