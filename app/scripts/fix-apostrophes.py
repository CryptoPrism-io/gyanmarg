#!/usr/bin/env python3
"""
Fix unescaped apostrophes in TypeScript string literals.

This script finds all single-quoted strings with unescaped apostrophes
in TypeScript files and properly escapes them.

Common in AI-generated content where apostrophes in strings like:
  front: 'What's the difference...'  ❌
Should be:
  front: 'What\'s the difference...'  ✅

Usage:
    python fix-apostrophes.py [path]
"""

import re
import argparse
from pathlib import Path
from typing import List, Tuple


def find_typescript_files(root_path: Path) -> List[Path]:
    """Find all TypeScript files in the given path."""
    if root_path.is_file() and root_path.suffix in ['.ts', '.tsx']:
        return [root_path]

    return list(root_path.glob('**/*.ts')) + list(root_path.glob('**/*.tsx'))


def fix_unescaped_apostrophes(content: str) -> Tuple[str, int]:
    """
    Fix unescaped apostrophes in single-quoted strings.

    Returns:
        (fixed_content, num_fixes)
    """
    num_fixes = 0

    # Pattern to match single-quoted strings
    # This captures: 'text with possible \' escaped quotes'
    pattern = r"'([^'\\]*(?:\\.[^'\\]*)*)'"

    def replacer(match):
        nonlocal num_fixes
        original = match.group(1)

        # Check if there are any unescaped apostrophes
        # (apostrophes not preceded by backslash)
        if re.search(r"(?<!\\)'", original):
            # Fix: escape all unescaped apostrophes
            fixed = re.sub(r"(?<!\\)'", r"\'", original)
            num_fixes += 1
            return f"'{fixed}'"
        else:
            return match.group(0)

    fixed_content = re.sub(pattern, replacer, content)
    return fixed_content, num_fixes


def fix_double_escapes(content: str) -> Tuple[str, int]:
    """
    Fix double-escaped apostrophes (\\' → \').

    This can happen when the script runs multiple times.

    Returns:
        (fixed_content, num_fixes)
    """
    # Find instances of \\' that should be \'
    num_fixes = content.count("\\\\'")
    fixed_content = content.replace("\\\\'", "\\'")
    return fixed_content, num_fixes


def process_file(file_path: Path, dry_run: bool = False) -> Tuple[int, int]:
    """
    Process a single TypeScript file.

    Returns:
        (apostrophe_fixes, double_escape_fixes)
    """
    content = file_path.read_text(encoding='utf-8')

    # Fix unescaped apostrophes
    fixed_content, apostrophe_fixes = fix_unescaped_apostrophes(content)

    # Fix double escapes
    fixed_content, double_escape_fixes = fix_double_escapes(fixed_content)

    if apostrophe_fixes > 0 or double_escape_fixes > 0:
        if not dry_run:
            file_path.write_text(fixed_content, encoding='utf-8')
        return apostrophe_fixes, double_escape_fixes

    return 0, 0


def main():
    parser = argparse.ArgumentParser(description='Fix unescaped apostrophes in TypeScript files')
    parser.add_argument('path', nargs='?', default='src',
                        help='Path to TypeScript file or directory (default: src)')
    parser.add_argument('--dry-run', action='store_true',
                        help='Preview changes without modifying files')
    args = parser.parse_args()

    # Resolve path relative to script location (app directory)
    script_dir = Path(__file__).parent
    app_dir = script_dir.parent
    target_path = app_dir / args.path

    if not target_path.exists():
        print(f"ERROR: Path does not exist: {target_path}")
        return 1

    print(f"🔍 Scanning TypeScript files in: {target_path}")

    ts_files = find_typescript_files(target_path)
    print(f"📝 Found {len(ts_files)} TypeScript files")

    if args.dry_run:
        print("⚠️  DRY RUN - No files will be modified\n")

    total_apostrophe_fixes = 0
    total_double_escape_fixes = 0
    files_modified = 0

    for ts_file in ts_files:
        apostrophe_fixes, double_escape_fixes = process_file(ts_file, args.dry_run)

        if apostrophe_fixes > 0 or double_escape_fixes > 0:
            files_modified += 1
            total_apostrophe_fixes += apostrophe_fixes
            total_double_escape_fixes += double_escape_fixes

            rel_path = ts_file.relative_to(app_dir)
            fixes_str = []
            if apostrophe_fixes > 0:
                fixes_str.append(f"{apostrophe_fixes} apostrophes")
            if double_escape_fixes > 0:
                fixes_str.append(f"{double_escape_fixes} double escapes")

            status = "Would fix" if args.dry_run else "Fixed"
            print(f"  ✏️  {status} {', '.join(fixes_str)}: {rel_path}")

    print(f"\n📊 Summary:")
    print(f"  Files scanned: {len(ts_files)}")
    print(f"  Files modified: {files_modified}")
    print(f"  Apostrophes fixed: {total_apostrophe_fixes}")
    print(f"  Double escapes fixed: {total_double_escape_fixes}")

    if args.dry_run and files_modified > 0:
        print(f"\n💡 Run without --dry-run to apply changes")

    return 0


if __name__ == '__main__':
    exit(main())
