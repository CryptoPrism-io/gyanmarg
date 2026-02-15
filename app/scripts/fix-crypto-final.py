#!/usr/bin/env python3
"""
Final comprehensive fix for crypto-trading-lessons.ts backtick issues.
1. Fix escaped opening backticks: mainContent: \` -> mainContent: `
2. Escape internal backticks within each mainContent block
"""
import re
from pathlib import Path

filepath = Path(__file__).parent.parent / "src" / "data" / "pathways" / "crypto-trading-lessons.ts"
content = filepath.read_text(encoding='utf-8')
bt = chr(96)  # backtick `
bs = chr(92)  # backslash \

# Step 1: Fix escaped opening backticks
escaped_open = "mainContent: " + bs + bt
normal_open = "mainContent: " + bt
count1 = content.count(escaped_open)
print(f"Step 1: Found {count1} escaped opening backticks")
content = content.replace(escaped_open, normal_open)

# Step 2: Fix escaped closing backticks (before keyTakeaway/actionItem/quiz)
# Pattern: \`, followed by newline+whitespace+field
escaped_close_pat = re.compile(bs + bs + bt + r'(,\s*\r?\n\s*(?:keyTakeaway|actionItem|quiz)\s*:)')
count2 = len(escaped_close_pat.findall(content))
print(f"Step 2: Found {count2} escaped closing backticks")
content = escaped_close_pat.sub(bt + r'\1', content)

# Step 3: Escape internal backticks in mainContent blocks
# Now all opening/closing backticks are plain, process with regex
MAIN_CONTENT_PATTERN = re.compile(
    r'(mainContent:\s*' + bt + r')'
    r'(.*?)'
    r'(' + bt + r',\s*\r?\n\s*(?:keyTakeaway|actionItem|quiz)\s*:)',
    re.DOTALL
)

def escape_inner(match):
    opening = match.group(1)
    inner = match.group(2)
    closing = match.group(3)
    # Undo any previous escaping in inner content
    inner = inner.replace(bs + bt, bt)
    # Re-escape all backticks
    inner = inner.replace(bt, bs + bt)
    return opening + inner + closing

matches = list(MAIN_CONTENT_PATTERN.finditer(content))
count3 = sum(m.group(2).replace(bs + bt, bt).count(bt) for m in MAIN_CONTENT_PATTERN.finditer(content))
print(f"Step 3: Found {len(matches)} mainContent blocks, {count3} internal backticks to escape")
content = MAIN_CONTENT_PATTERN.sub(escape_inner, content)

filepath.write_text(content, encoding='utf-8')
print("Done!")
