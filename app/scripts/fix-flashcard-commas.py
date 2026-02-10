#!/usr/bin/env python3
"""
Fix missing commas between flashcard objects in TypeScript files.

Common syntax error: Missing comma after closing brace of an object.
  }
  {  ← Missing comma here

Should be:
  },
  {
"""

import re
from pathlib import Path

SCRIPT_DIR = Path(__file__).parent
DATA_DIR = SCRIPT_DIR.parent / 'src' / 'data'

def fix_missing_commas(file_path: Path) -> int:
    """Fix missing commas in flashcard file."""
    content = file_path.read_text(encoding='utf-8')
    original = content

    # Pattern: closing brace followed by newline and opening brace (missing comma)
    # Match: }\n  { or }\n\n  {
    pattern = r'\}(\s*\n\s*)\{'

    def replacer(match):
        whitespace = match.group(1)
        return f'}},{whitespace}{{'

    content = re.sub(pattern, replacer, content)

    fixes = content.count('},') - original.count('},')

    if fixes > 0:
        file_path.write_text(content, encoding='utf-8')

    return fixes

def main():
    print("🔧 Fixing missing commas in flashcard files...")

    flashcard_files = list(DATA_DIR.glob('flashcards-batch*.ts'))
    flashcard_files = [f for f in flashcard_files if 'index' not in f.name]

    total_fixes = 0

    for file_path in flashcard_files:
        fixes = fix_missing_commas(file_path)
        if fixes > 0:
            total_fixes += fixes
            print(f"  ✅ Fixed {fixes} commas in {file_path.name}")

    print(f"\n📊 Total commas fixed: {total_fixes}")

    if total_fixes == 0:
        print("✅ No issues found!")

if __name__ == '__main__':
    main()
