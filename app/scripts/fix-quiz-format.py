#!/usr/bin/env python3
"""Fix wrong quiz format in generated lessons.

Converts from:
  quiz: {
    question: '...',
    options: [
      { id: 'a', text: '...', isCorrect: false },
      { id: 'b', text: '...', isCorrect: true },
      ...
    },   // wrong closing bracket
  }

To:
  quiz: {
    question: '...',
    options: [
      '...',
      '...',
      '...',
      '...',
    ],
    correct: N,
    explanation: '...',
  }
"""
import re
import sys
from pathlib import Path

PATHWAYS_DIR = Path(__file__).parent.parent / "src" / "data" / "pathways"

def fix_quiz_blocks(content):
    """Find and fix quiz blocks with wrong format."""
    fixes = 0

    # Pattern to find quiz blocks with isCorrect format
    # Match the full quiz block from 'quiz: {' to closing '}'
    quiz_pattern = re.compile(
        r'(quiz:\s*\{\s*\n'
        r'\s*question:\s*[\'"].*?[\'"]\s*,\s*\n)'
        r'(\s*options:\s*\[\s*\n'
        r'(?:\s*\{\s*\n'
        r'\s*id:\s*[\'"][a-d][\'"]\s*,\s*\n'
        r'\s*text:\s*[\'"].*?[\'"]\s*,\s*\n'
        r'\s*isCorrect:\s*(?:true|false)\s*,?\s*\n'
        r'\s*\}\s*,?\s*\n)+'
        r'\s*[}\]]\s*,?\s*\n)',
        re.DOTALL
    )

    def replace_quiz(match):
        nonlocal fixes
        question_part = match.group(1)
        options_block = match.group(2)

        # Extract option texts and find the correct one
        option_pattern = re.compile(
            r"text:\s*'((?:[^'\\]|\\.)*)'\s*,\s*\n\s*isCorrect:\s*(true|false)",
            re.DOTALL
        )
        options = []
        correct_idx = 0
        for i, om in enumerate(option_pattern.finditer(options_block)):
            text = om.group(1)
            is_correct = om.group(2) == 'true'
            options.append(text)
            if is_correct:
                correct_idx = i

        if not options:
            # Try double-quoted text
            option_pattern2 = re.compile(
                r'text:\s*"((?:[^"\\]|\\.)*)"\s*,\s*\n\s*isCorrect:\s*(true|false)',
                re.DOTALL
            )
            for i, om in enumerate(option_pattern2.finditer(options_block)):
                text = om.group(1)
                is_correct = om.group(2) == 'true'
                options.append(text)
                if is_correct:
                    correct_idx = i

        if len(options) < 2:
            return match.group(0)  # Can't fix, return unchanged

        # Get indentation from question line
        indent_match = re.search(r'^(\s+)question:', question_part, re.MULTILINE)
        indent = indent_match.group(1) if indent_match else '      '

        # Build new options block
        opts_str = ',\n'.join(f"{indent}  '{opt}'" for opt in options)
        new_options = (
            f"{indent}options: [\n"
            f"{opts_str},\n"
            f"{indent}],\n"
            f"{indent}correct: {correct_idx},\n"
            f"{indent}explanation: '{options[correct_idx]}',\n"
        )

        fixes += 1
        return question_part + new_options

    content = quiz_pattern.sub(replace_quiz, content)
    return content, fixes


def fix_indentation(content):
    """Fix indentation issues from Gemini output."""
    fixes = 0

    # Fix pattern: },\n  { (wrong indent for array items in level arrays)
    # Should be: },\n  { (with proper 2-space indent inside array)
    # Look for lesson objects that aren't indented correctly
    # Pattern: '},\n  {' at beginning of line should be '},\n  {'
    content_fixed = re.sub(
        r'^},\s*\n\s*\{$',
        '  },\n  {',
        content,
        flags=re.MULTILINE
    )
    if content_fixed != content:
        fixes += 1
        content = content_fixed

    return content, fixes


def fix_file(filepath):
    content = filepath.read_text(encoding='utf-8')
    original = content

    content, quiz_fixes = fix_quiz_blocks(content)
    content, indent_fixes = fix_indentation(content)

    if content != original:
        filepath.write_text(content, encoding='utf-8')
        print(f"  {filepath.name}: {quiz_fixes} quiz fixes, {indent_fixes} indent fixes")
        return quiz_fixes + indent_fixes
    return 0


if __name__ == '__main__':
    files = sys.argv[1:] if len(sys.argv) > 1 else []

    if not files:
        files = sorted(PATHWAYS_DIR.glob("*-lessons.ts"))
    else:
        files = [Path(f) for f in files]

    total = 0
    for f in files:
        total += fix_file(f)

    print(f"\nTotal fixes: {total}")
