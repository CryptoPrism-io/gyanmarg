#!/usr/bin/env python3
"""Fix escaped opening/closing backticks in crypto-trading mainContent fields."""
from pathlib import Path

filepath = Path(__file__).parent.parent / "src" / "data" / "pathways" / "crypto-trading-lessons.ts"
content = filepath.read_text(encoding='utf-8')

BACKTICK = chr(96)  # `

# Fix escaped opening backticks: mainContent: \` -> mainContent: `
escaped_open = 'mainContent: \\' + BACKTICK
normal_open = 'mainContent: ' + BACKTICK
count = content.count(escaped_open)
print(f"Found {count} escaped opening backticks")
content = content.replace(escaped_open, normal_open)

# Fix escaped closing backticks: \`, -> `,
# Only fix when followed by newline+whitespace+keyTakeaway/actionItem/quiz
import re
escaped_close = '\\' + BACKTICK + ','
normal_close = BACKTICK + ','
# Use regex for more precise matching
pattern = re.compile(r'\\' + BACKTICK + r'(,\s*\r?\n\s*(?:keyTakeaway|actionItem|quiz)\s*:)')
matches = pattern.findall(content)
count2 = len(matches)
print(f"Found {count2} escaped closing backticks")
content = pattern.sub(BACKTICK + r'\1', content)

filepath.write_text(content, encoding='utf-8')
print(f"Fixed {count + count2} escaped delimiters")
