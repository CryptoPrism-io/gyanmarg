#!/usr/bin/env python3
"""Check for unescaped backticks in mainContent template literals."""
import re
import sys
from pathlib import Path

filepath = Path(sys.argv[1])
content = filepath.read_text(encoding='utf-8')

MAIN_CONTENT_PATTERN = re.compile(
    r'(mainContent:\s*`)'       # opening
    r'(.*?)'                    # content (non-greedy)
    r'(`,\s*\n\s*(?:keyTakeaway|actionItem|quiz)\s*:)',  # closing
    re.DOTALL
)

for m in MAIN_CONTENT_PATTERN.finditer(content):
    inner = m.group(2)
    start_line = content[:m.start()].count('\n') + 1
    # Count unescaped backticks in inner content
    unescaped = []
    for i, ch in enumerate(inner):
        if ch == '`' and (i == 0 or inner[i-1] != '\\'):
            line_num = start_line + inner[:i].count('\n')
            context = inner[max(0,i-20):i+20].replace('\n', '\\n')
            unescaped.append((line_num, context))

    if unescaped:
        for ln, ctx in unescaped:
            print(f"  Line ~{ln}: unescaped backtick: ...{ctx}...")

print(f"\nTotal mainContent blocks: {len(list(MAIN_CONTENT_PATTERN.finditer(content)))}")
