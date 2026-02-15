#!/usr/bin/env python3
"""Check for mainContent template literals closed with wrong delimiter."""
import re
import sys
from pathlib import Path

filepath = Path(sys.argv[1]) if len(sys.argv) > 1 else None
if not filepath:
    print("Usage: python check-template-closings.py <file>")
    sys.exit(1)

content = filepath.read_text(encoding='utf-8')
bt = chr(96)
bs = chr(92)

opens = list(re.finditer(r'mainContent:\s*' + bt, content))
print(f"Found {len(opens)} mainContent openings")

problems = []
for i, m in enumerate(opens):
    start = m.end()
    line_num = content[:m.start()].count('\n') + 1
    pos = start
    while pos < len(content):
        ch = content[pos]
        if ch == bs:
            pos += 2
            continue
        if ch == bt:
            after = content[pos+1:pos+2]
            if after != ',':
                close_line = content[:pos].count('\n') + 1
                after_text = content[pos+1:pos+60].replace('\n', '\\n')
                problems.append(f"  #{i+1} Line {line_num}: close at line {close_line}, after: {after_text}")
            break
        pos += 1

if problems:
    print(f"\n{len(problems)} PROBLEMS found:")
    for p in problems:
        print(p)
else:
    print("All mainContent blocks close properly!")
