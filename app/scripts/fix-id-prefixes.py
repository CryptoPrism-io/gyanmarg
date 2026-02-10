#!/usr/bin/env python3
"""Strip ID prefixes from flashcard front fields.

Patterns handled:
  front: 'fc-XXX-NNN: Actual question'  →  front: 'Actual question'
  front: 'fc-XXX-NNN Actual question'   →  front: 'Actual question'
  front: 'ID: fc-XXX-NNN. Actual question' → front: 'Actual question'
"""

import re
import glob
import os

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(SCRIPT_DIR, '..', 'src', 'data')

# Match front: 'fc-...-NNN: ' or 'fc-...-NNN ' or 'ID: fc-...-NNN. '
PATTERN = re.compile(
    r"(front:\s*')(?:ID:\s*)?fc-[a-z]+-\d+[:\.\s]+\s*"
)

total_fixes = 0

for filepath in sorted(glob.glob(os.path.join(DATA_DIR, 'flashcards-batch*.ts'))):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content, count = PATTERN.subn(r'\1', content)

    if count > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        filename = os.path.basename(filepath)
        print(f"  Fixed {count} ID prefixes in {filename}")
        total_fixes += count

print(f"\nTotal: {total_fixes} ID prefixes removed")
