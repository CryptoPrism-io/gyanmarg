#!/usr/bin/env python3
"""
Comprehensive fix for crypto-trading-lessons.ts:
1. Fix mainContent blocks closed with single quote instead of backtick
2. Fix escaped closing backtick on line 983 (the underscore exercise line)
3. Remove keyTakeTakeaway typo line
"""
import re
from pathlib import Path

filepath = Path(__file__).parent.parent / "src" / "data" / "pathways" / "crypto-trading-lessons.ts"
content = filepath.read_text(encoding='utf-8')
original = content

bt = chr(96)  # backtick
bs = chr(92)  # backslash

fixes = 0

# Fix 1: Replace single-quote closings with backtick closings
# Pattern: inside a mainContent template literal, a line ending with ',\n followed by keyTakeaway/actionItem/quiz
# But the ' should be ` since mainContent was opened with `
# We look for: some text ending with ',\n      keyTakeaway:
# where the ' is actually meant to be a backtick
# Strategy: find all mainContent openings, then for each, find the first
# keyTakeaway/actionItem/quiz line, and check if the closing delimiter is '

opens = list(re.finditer(r'mainContent:\s*' + bt, content))
print(f"Found {len(opens)} mainContent openings")

# Process in reverse order to preserve positions
single_quote_fixes = []
for i, m in enumerate(opens):
    start = m.end()
    # Walk through to find closing - check if it's a proper backtick
    pos = start
    while pos < len(content):
        ch = content[pos]
        if ch == bs:
            pos += 2
            continue
        if ch == bt:
            # Found closing backtick - check if comma follows
            after = content[pos+1:pos+2]
            if after == ',':
                break  # proper close, move on
            else:
                break  # problem but different issue
        pos += 1

    # Now check if there's a keyTakeaway BEFORE this closing backtick
    # that has a single-quote closing instead
    line_num = content[:m.start()].count('\n') + 1
    # Search for pattern: ',\n   keyTakeaway: (with single quote closing)
    search_region = content[start:pos]  # content between open and found close
    sq_close = re.search(r"'(,\s*\r?\n\s*keyTakeaway:\s*['\"])", search_region)
    if sq_close:
        # This means a single quote closes the mainContent before the expected backtick close
        # The single quote position in the full content
        sq_pos = start + sq_close.start()
        single_quote_fixes.append((sq_pos, line_num))

print(f"\nFound {len(single_quote_fixes)} mainContent blocks closed with single quote")
# Apply fixes in reverse order
for sq_pos, line_num in reversed(single_quote_fixes):
    close_line = content[:sq_pos].count('\n') + 1
    print(f"  Fixing single-quote close at line {close_line} (mainContent opened at line {line_num})")
    content = content[:sq_pos] + bt + content[sq_pos+1:]
    fixes += 1

# Fix 2: Fix the escaped closing backtick on the underscore exercise line
# Pattern: a long line of \_\_\_\_ ending with \`, before keyTakeaway/keyTakeTakeaway
# The \` should be just ` (the backslash escapes the closing backtick)
escaped_close = re.compile(
    r'(\_)' + bs + bs + '(' + bt + r',\s*\r?\n\s*keyTake)'
)
matches = list(escaped_close.finditer(content))
if matches:
    for em in reversed(matches):
        pos = em.start(1) + 1  # position of the backslash before backtick
        line_num = content[:pos].count('\n') + 1
        print(f"\nFixing escaped closing backtick at line {line_num}")
        content = content[:pos] + content[pos+1:]  # remove the backslash
        fixes += 1

# Fix 3: Remove keyTakeTakeaway typo line (it's a duplicate/wrong field name)
typo_pattern = re.compile(r'\s*keyTakeTakeaway:.*\n')
typo_matches = list(typo_pattern.finditer(content))
for tm in reversed(typo_matches):
    line_num = content[:tm.start()].count('\n') + 1
    print(f"\nRemoving keyTakeTakeaway typo at line {line_num}")
    content = content[:tm.start()] + content[tm.end():]
    fixes += 1

if content != original:
    filepath.write_text(content, encoding='utf-8')
    print(f"\nTotal fixes applied: {fixes}")
else:
    print("\nNo changes needed")
