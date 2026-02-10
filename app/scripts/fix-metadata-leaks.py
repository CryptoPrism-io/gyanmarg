#!/usr/bin/env python3
"""Strip leaked metadata from flashcard front/back fields."""

import re
import glob
import os

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(SCRIPT_DIR, '..', 'src', 'data')

# Ordered list of regex patterns to strip from field values
STRIP_PATTERNS = [
    # Full: "Category: X; Tags: [...]; Difficulty: Y;"
    r"Category:\s*[^;.]+[;.]\s*Tags:\s*\[[^\]]*\][;.]\s*Difficulty:\s*\w+[;.]*\s*",
    # Cat+Tags: "Category: X; Tags: [...];"
    r"Category:\s*[^;.]+[;.]\s*Tags:\s*\[[^\]]*\][;.]*\s*",
    # Tags+Diff: "Tags: [...]; Difficulty: Y;"
    r"Tags:\s*\[[^\]]*\][;.]\s*Difficulty:\s*\w+[;.]*\s*",
    # Standalone Tags: "Tags: [...];"
    r"Tags:\s*\[[^\]]*\][;.]*\s*",
    # "Health; Tags: [...];" (bare category name at start)
    r"^(?:Health|Psychology|Business|Communication|Wealth Building|Personal Development|Master Synthesis|Negotiation|Relationships \(Psychology\))[;.]\s*Tags:\s*\[[^\]]*\][;.]*\s*(?:Diff?:\s*\w+[;.]*\s*)?",
    # Trailing "Category: X"
    r"[;.]\s*Category:\s*[A-Z][A-Za-z &]+\s*$",
    # Trailing "Cat: X"
    r"[;.]\s*Cat:\s*[A-Z][A-Za-z &]+\s*$",
    # Leading "Category: X; " or "Category: X. "
    r"^Category:\s*[A-Z][A-Za-z &]+[;.]\s*",
    # Trailing "; Difficulty: X"
    r"[;.]\s*Difficulty:\s*\w+\.?\s*$",
    # Trailing "Communication; topic-list; level." pattern
    r"[;.]\s*(?:Communication|Business|Health|Psychology)[;.]\s*[\w, -]+[;.]\s*(?:beginner|intermediate|advanced)\.?\s*$",
    # "Origin: X; Category" at end
    r"[;.]\s*Origin:\s*[^;]+[;.]\s*[A-Z][A-Za-z &]+\s*$",
    # Standalone "Category: X" (entire value is just metadata)
    r"^Category:\s*[A-Z][A-Za-z &]+\s*$",
]


def clean_value(value):
    """Apply all strip patterns to a field value."""
    original = value
    for pattern in STRIP_PATTERNS:
        value = re.sub(pattern, '', value)
    # Clean up leading/trailing junk from stripping
    value = re.sub(r'^[\s;.]+', '', value)
    value = re.sub(r'[\s;.]+$', '', value)
    # Capitalize first letter if needed
    if value and value[0].islower() and original[0].isupper():
        value = value[0].upper() + value[1:]
    return value


total_fixes = 0

for filepath in sorted(glob.glob(os.path.join(DATA_DIR, 'flashcards-batch*.ts'))):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    new_lines = []
    file_fixes = 0

    for line in lines:
        # Match front: '...' or back: '...' lines
        m = re.match(r"^(\s+(?:front|back):\s*')((?:[^'\\]|\\.)*)(',?\s*)$", line)
        if m:
            prefix = m.group(1)
            value = m.group(2)
            suffix = m.group(3)
            cleaned = clean_value(value)
            if cleaned != value and cleaned:
                new_lines.append(f"{prefix}{cleaned}{suffix}")
                file_fixes += 1
                continue
        new_lines.append(line)

    if file_fixes > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        filename = os.path.basename(filepath)
        print(f"  Cleaned {file_fixes} metadata leaks in {filename}")
        total_fixes += file_fixes

print(f"\nTotal: {total_fixes} metadata fragments cleaned")
