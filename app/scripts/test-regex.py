#!/usr/bin/env python3
"""Test regex patterns for backtick matching."""
import re

bt = chr(96)  # backtick `
bs = chr(92)  # backslash \

# Simulating file content: mainContent: \`content here`,\n      keyTakeaway: 'test',
text = (
    "      mainContent: " + bs + bt + "## Test Content\n"
    "Some content here" + bt + ",\n"
    "      keyTakeaway: 'test',"
)

print("Text repr:", repr(text[:80]))
print()

# Pattern 1: escaped opening
pat1_str = r'(mainContent:\s*)' + '\\\\' + bt + r'(.*?)(' + '\\\\?' + bt + r',\s*\r?\n\s*(?:keyTakeaway|actionItem|quiz)\s*:)'
print("Pattern 1:", repr(pat1_str[:60]))
pat1 = re.compile(pat1_str, re.DOTALL)
m1 = pat1.search(text)
print(f"Escaped pattern match: {m1 is not None}")

# Pattern 2: normal opening
pat2_str = r'(mainContent:\s*' + bt + r')(.*?)(' + bt + r',\s*\r?\n\s*(?:keyTakeaway|actionItem|quiz)\s*:)'
print("Pattern 2:", repr(pat2_str[:60]))
pat2 = re.compile(pat2_str, re.DOTALL)
m2 = pat2.search(text)
print(f"Normal pattern match: {m2 is not None}")

# Try a simpler approach: just do string replacement
test2 = text.replace("mainContent: " + bs + bt, "mainContent: " + bt)
print(f"\nAfter string replace:")
print(repr(test2[:80]))
m3 = pat2.search(test2)
print(f"Normal pattern match after fix: {m3 is not None}")
