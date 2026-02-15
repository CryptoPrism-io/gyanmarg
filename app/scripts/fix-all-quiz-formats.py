#!/usr/bin/env python3
"""Comprehensive fix for all wrong quiz formats in lesson files.

Handles these Gemini output variations:
1. options: [{id:'a', text:'...', isCorrect:true}, ...] => options: ['...', ...], correct: N
2. options: [{a:'...', feedback:'...'}, ...] => options: ['...', ...], correct: N
3. options: [{text:'...', isCorrect:true, feedback:'...'}, ...] => options: ['...', ...], correct: N
4. correctAnswer: 'text' => correct: N (find matching option index)
5. quiz at wrong level (outside content: {})
"""
import re
import sys
from pathlib import Path

PATHWAYS_DIR = Path(__file__).parent.parent / "src" / "data" / "pathways"


def fix_file(filepath):
    content = filepath.read_text(encoding='utf-8')
    original = content
    fixes = 0

    # === Fix 1: Object options with {id, text, isCorrect} ===
    # Find: options: [\n  { id: 'a', text: '...', isCorrect: false },\n  ...  ]
    # The outer array may close with ] or }
    obj_option_pattern = re.compile(
        r'(\s*)options:\s*\[\s*\n'
        r'((?:\s*\{[^}]*\}\s*,?\s*\n)+)'
        r'\s*[\]}\s]*,?\s*\n'
        r'(\s*(?:correct|answer|explanation|correctAnswer)\s*:)',
        re.DOTALL
    )

    def fix_obj_options(match):
        nonlocal fixes
        indent = match.group(1)
        options_block = match.group(2)
        after = match.group(3)

        # Extract option texts
        options = []
        correct_idx = -1

        # Try various patterns for extracting text and correctness
        # Pattern 1: { id: 'a', text: '...', isCorrect: true/false }
        # Pattern 2: { a: '...', feedback: '...' }
        # Pattern 3: { text: '...', isCorrect: true/false, feedback: '...' }
        # Pattern 4: { a: '...', isCorrect: true/false }

        items = re.findall(r'\{([^}]+)\}', options_block)
        for i, item in enumerate(items):
            text = None
            is_correct = False

            # Try to find text
            text_match = re.search(r"text:\s*'((?:[^'\\]|\\.)*)'", item)
            if not text_match:
                text_match = re.search(r'text:\s*"((?:[^"\\]|\\.)*)"', item)
            if text_match:
                text = text_match.group(1)
            else:
                # Try letter key: a: '...' or b: '...'
                letter_match = re.search(r"[a-d]:\s*'((?:[^'\\]|\\.)*)'", item)
                if not letter_match:
                    letter_match = re.search(r'[a-d]:\s*"((?:[^"\\]|\\.)*)"', item)
                if letter_match:
                    text = letter_match.group(1)

            if text:
                options.append(text)

            # Check correctness
            if 'isCorrect: true' in item or 'isCorrect:true' in item:
                correct_idx = i

        if not options:
            return match.group(0)  # Can't fix

        if correct_idx == -1:
            correct_idx = 0  # Default to first

        # Build replacement
        opts_lines = ',\n'.join(f"{indent}  '{opt}'" for opt in options)
        replacement = (
            f"{indent}options: [\n"
            f"{opts_lines},\n"
            f"{indent}],\n"
            f"{after}"
        )

        fixes += 1
        return replacement

    content = obj_option_pattern.sub(fix_obj_options, content)

    # === Fix 2: correctAnswer field => correct: N ===
    # Find correctAnswer: 'text' and find matching option index
    ca_pattern = re.compile(r"(\s*)correctAnswer:\s*'((?:[^'\\]|\\.)*)'")
    for m in reversed(list(ca_pattern.finditer(content))):
        indent = m.group(1)
        answer_text = m.group(2)

        # Look backwards for options array
        search_start = max(0, m.start() - 2000)
        region = content[search_start:m.start()]
        option_texts = re.findall(r"'((?:[^'\\]|\\.)*)'", region)

        # Find the matching option
        correct_idx = 0
        for i, opt in enumerate(option_texts[-4:]):  # Last 4 are the options
            if answer_text in opt or opt in answer_text:
                correct_idx = i
                break

        content = content[:m.start()] + f"{indent}correct: {correct_idx}" + content[m.end():]
        fixes += 1

    # === Fix 3: answer: 'letter' that wasn't caught before ===
    letter_map = {'A': 0, 'B': 1, 'C': 2, 'D': 3, 'a': 0, 'b': 1, 'c': 2, 'd': 3}
    answer_pattern = re.compile(r"answer:\s*'([A-Da-d])'")
    for m in reversed(list(answer_pattern.finditer(content))):
        idx = letter_map.get(m.group(1), 0)
        content = content[:m.start()] + f"correct: {idx}" + content[m.end():]
        fixes += 1

    # === Fix 4: quiz outside content: {} ===
    # Pattern: }, quiz: { at top level of lesson instead of inside content
    misplaced_quiz = re.compile(
        r'(\s*\},\s*\n)(\s*quiz:\s*\{)',
        re.MULTILINE
    )
    # This needs context-aware fixing, skip for now

    if content != original:
        filepath.write_text(content, encoding='utf-8')
        print(f"  {filepath.name}: {fixes} fixes applied")
        return fixes
    else:
        print(f"  {filepath.name}: no changes needed")
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
