#!/usr/bin/env python3
"""Analyze crypto-trading-lessons.ts for unclosed template literals - detailed."""
import re
from pathlib import Path

filepath = Path(__file__).parent.parent / "src" / "data" / "pathways" / "crypto-trading-lessons.ts"
content = filepath.read_text(encoding='utf-8')

bt = chr(96)  # backtick
bs = chr(92)  # backslash

# Find all mainContent openings
opens = list(re.finditer(r'mainContent:\s*' + bt, content))
print(f"Found {len(opens)} mainContent openings\n")

problems = []

for i, m in enumerate(opens):
    start = m.end()
    line_num = content[:m.start()].count('\n') + 1

    pos = start
    found_close = False
    while pos < len(content):
        ch = content[pos]
        if ch == bs:
            pos += 2
            continue
        if ch == bt:
            close_line = content[:pos].count('\n') + 1
            after = content[pos+1:pos+200].lstrip()
            if not after.startswith(','):
                problems.append({
                    'num': i+1,
                    'open_line': line_num,
                    'close_line': close_line,
                    'issue': 'NO COMMA after close backtick',
                    'after': after[:60].replace('\n', '\\n')
                })
            found_close = True
            break
        pos += 1

    if not found_close:
        problems.append({'num': i+1, 'open_line': line_num, 'issue': 'NO CLOSE FOUND'})

print(f"Found {len(problems)} problematic blocks:\n")
for p in problems:
    print(f"  #{p['num']} Open line {p['open_line']}: {p['issue']}")
    if 'after' in p:
        print(f"    After: {p['after']}")
    if 'close_line' in p:
        print(f"    Close line: {p['close_line']}")
    print()

# Now for each problem, find the expected closing position
# Look for keyTakeaway/actionItem/quiz that should follow the closing backtick
print("--- Detailed analysis of each problem ---\n")
for p in problems:
    if 'close_line' not in p:
        continue
    open_line = p['open_line']
    # Find the line where the mainContent opening is
    line_start = 0
    for _ in range(open_line - 1):
        line_start = content.index('\n', line_start) + 1

    # Search for the pattern: keyTakeaway: or actionItem: or quiz: after the opening
    # These should appear OUTSIDE the template literal
    search_from = line_start
    kt_pattern = re.compile(r"^\s+keyTakeaway:\s*['\"]", re.MULTILINE)
    matches = list(kt_pattern.finditer(content, search_from))
    if matches:
        first_kt = matches[0]
        kt_line = content[:first_kt.start()].count('\n') + 1
        # Check what's right before keyTakeaway - should be a closing backtick+comma
        before_kt = content[max(0, first_kt.start()-20):first_kt.start()]
        before_repr = repr(before_kt)
        print(f"  #{p['num']} (open line {open_line}): First keyTakeaway after open is at line {kt_line}")
        print(f"    Before keyTakeaway: {before_repr}")
        # Check if there's a proper closing `,\n` before keyTakeaway
        if bt + ',' in before_kt:
            print(f"    -> Proper close found before keyTakeaway")
        elif bs + bt + ',' in before_kt:
            print(f"    -> ESCAPED close found before keyTakeaway")
        elif "'," in before_kt:
            print(f"    -> Single quote close found (WRONG DELIMITER)")
        else:
            print(f"    -> No proper close found before keyTakeaway")
        print()
