#!/usr/bin/env python3
"""Fix structural issues in world-building-lessons.ts.

1. Remove code fence separators between lessons
2. Fix 'answer' field to 'correct' field in quizzes
3. Fix indentation of lesson objects
"""
import re
from pathlib import Path

filepath = Path(__file__).parent.parent / "src" / "data" / "pathways" / "world-building-lessons.ts"
content = filepath.read_text(encoding='utf-8')
original = content
bt = chr(96)

# Fix 1: Remove code fences between lessons
# Pattern: }\n``````typescript\n{  =>  },\n  {
fence_pattern = re.compile(
    r'\}(\s*\n)' + bt + '{3,}typescript\s*\n(\s*)\{'
)
count1 = len(fence_pattern.findall(content))
content = fence_pattern.sub(r'},\1  {', content)
print(f"Fix 1: Removed {count1} code fence separators")

# Fix 2: Convert 'answer' to 'correct' with proper index
# Pattern: answer: 'A' => correct: 0, answer: 'B' => correct: 1, etc.
letter_to_idx = {'A': 0, 'B': 1, 'C': 2, 'D': 3}

def fix_answer_field(match):
    letter = match.group(1)
    idx = letter_to_idx.get(letter.upper(), 0)
    return f'correct: {idx}'

# Simple letter answer: answer: 'B'
simple_answer = re.compile(r"answer:\s*'([A-Da-d])'")
count2a = len(simple_answer.findall(content))
content = simple_answer.sub(fix_answer_field, content)

# Also handle: answer: "B"
simple_answer2 = re.compile(r'answer:\s*"([A-Da-d])"')
count2b = len(simple_answer2.findall(content))
content = simple_answer2.sub(fix_answer_field, content)

# Handle longer answer values that need to be converted
# Pattern: answer: 'Their primary architecture...' => find which option matches
# For now, find remaining answer: fields
remaining = list(re.finditer(r"answer:\s*'[^']{2,}'", content))
if remaining:
    print(f"  WARNING: {len(remaining)} complex answer fields need manual review")
    for m in remaining:
        line = content[:m.start()].count('\n') + 1
        print(f"    Line {line}: {content[m.start():m.start()+50]}...")

print(f"Fix 2: Converted {count2a + count2b} answer fields to correct")

# Fix 3: Fix bare closing braces that should have commas
# Pattern: }\n  { at top level (lesson separator)
# Ensure lesson objects are properly comma-separated
# Find patterns: }  \n  { where the } is the end of a lesson object
content = re.sub(r'\}\s*\n(\s*)\{(\s*\n\s*id:)', r'},\n\1{\2', content)

if content != original:
    filepath.write_text(content, encoding='utf-8')
    print(f"\nFile updated: {filepath.name}")
else:
    print("\nNo changes needed")
