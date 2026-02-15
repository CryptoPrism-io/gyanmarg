#!/usr/bin/env python3
"""
Generate flashcards from lesson quiz questions for all uncovered modules.
Reads all pathway lesson files, extracts quizzes, and outputs a single
flashcards-batch18-universal.ts file with ~10-20 cards per category group.
"""

import os
import re
import json
from pathlib import Path
from collections import defaultdict

PATHWAYS_DIR = Path(__file__).parent.parent / "src" / "data" / "pathways"
OUTPUT_FILE = Path(__file__).parent.parent / "src" / "data" / "flashcards-batch18-universal.ts"

# Map lesson file prefixes to category groups and pathwayIds
# Category group -> (pathwayId, display name, lesson file patterns)
CATEGORY_GROUPS = {
    'brain': {
        'pathwayId': 'brain',
        'name': 'Brain & Neuroscience',
        'files': ['brain-mastery.ts'],
        'prefixes': ['brain-'],
    },
    'emotional-intelligence': {
        'pathwayId': 'emotional-intelligence',
        'name': 'Emotional Intelligence',
        'files': ['emotional-intelligence-lessons.ts'],
        'prefixes': ['eq-'],
    },
    'body': {
        'pathwayId': 'body',
        'name': 'Body & Longevity',
        'files': ['body-lessons.ts'],
        'prefixes': ['body-'],
    },
    'spirituality': {
        'pathwayId': 'spirituality',
        'name': 'Spirituality & Sadhana',
        'files': ['spirituality-lessons.ts'],
        'prefixes': ['spirit-'],
    },
    'stoicism': {
        'pathwayId': 'stoicism',
        'name': 'Stoicism',
        'files': ['stoicism-lessons.ts'],
        'prefixes': ['stoic-'],
    },
    'eastern-philosophy': {
        'pathwayId': 'eastern-philosophy',
        'name': 'Eastern Philosophy',
        'files': ['eastern-philosophy-lessons.ts'],
        'prefixes': ['east-'],
    },
    'bhagavad-gita': {
        'pathwayId': 'bhagavad-gita',
        'name': 'Bhagavad Gita',
        'files': ['bhagavad-gita-lessons.ts'],
        'prefixes': ['gita-'],
    },
    'vedic-wisdom': {
        'pathwayId': 'vedic-wisdom',
        'name': 'Vedic Wisdom',
        'files': ['vedic-wisdom-lessons.ts'],
        'prefixes': ['vedic-'],
    },
    'ramayana': {
        'pathwayId': 'ramayana-mahabharata',
        'name': 'Ramayana & Mahabharata',
        'files': ['ramayana-mahabharata-lessons.ts'],
        'prefixes': ['epic-'],
    },
    'upanishads': {
        'pathwayId': 'upanishads',
        'name': 'Upanishads',
        'files': ['upanishads-lessons.ts'],
        'prefixes': ['upan-'],
    },
    'shiv-sutras': {
        'pathwayId': 'shiv-sutras',
        'name': 'Shiv Sutras',
        'files': ['shiv-sutras-lessons.ts'],
        'prefixes': ['shiv-'],
    },
    'sanskrit-mantras': {
        'pathwayId': 'sanskrit-mantras',
        'name': 'Sanskrit & Mantras',
        'files': ['sanskrit-mantras-lessons.ts'],
        'prefixes': ['sans-'],
    },
    'jyotish-vastu': {
        'pathwayId': 'jyotish-vastu',
        'name': 'Jyotish & Vastu',
        'files': ['jyotish-vastu-lessons.ts'],
        'prefixes': ['jyot-'],
    },
    'shiva-shakti': {
        'pathwayId': 'shiva-shakti',
        'name': 'Shiva & Shakti',
        'files': ['shiva-lessons.ts'],
        'prefixes': ['shiva-'],
    },
    'temple-science': {
        'pathwayId': 'temple-science',
        'name': 'Temple Science',
        'files': ['temple-lessons.ts'],
        'prefixes': ['temple-'],
    },
    'yoga': {
        'pathwayId': 'yoga-philosophy',
        'name': 'Yoga Philosophy',
        'files': ['yoga-philosophy-lessons.ts'],
        'prefixes': ['yoga-'],
    },
    'ayurveda': {
        'pathwayId': 'ayurveda',
        'name': 'Ayurveda',
        'files': ['ayurveda-lessons.ts'],
        'prefixes': ['ayur-'],
    },
    'mythology': {
        'pathwayId': 'mythology',
        'name': 'Mythology',
        'files': ['mythology-lessons.ts'],
        'prefixes': ['myth-'],
    },
    'sales-mastery': {
        'pathwayId': 'sales-mastery',
        'name': 'Sales Mastery',
        'files': ['sales-mastery-lessons.ts'],
        'prefixes': ['sm-'],
    },
    'entrepreneurship': {
        'pathwayId': 'entrepreneurship-101',
        'name': 'Entrepreneurship',
        'files': ['entrepreneurship-lessons.ts'],
        'prefixes': ['ent-'],
    },
    'personal-branding': {
        'pathwayId': 'personal-branding',
        'name': 'Personal Branding',
        'files': ['personal-branding-lessons.ts'],
        'prefixes': ['pb-'],
    },
    'finance-investing': {
        'pathwayId': 'finance-investing',
        'name': 'Finance & Investing',
        'files': ['finance-investing-lessons.ts'],
        'prefixes': ['fi-'],
    },
    'technical-analysis': {
        'pathwayId': 'technical-analysis',
        'name': 'Technical Analysis',
        'files': ['technical-analysis-lessons.ts'],
        'prefixes': ['ta-'],
    },
    'options-trading': {
        'pathwayId': 'options-trading',
        'name': 'Options Trading',
        'files': ['options-trading-lessons.ts'],
        'prefixes': ['opt-'],
    },
    'macro-economics': {
        'pathwayId': 'macro-economics',
        'name': 'Macro Economics',
        'files': ['macro-economics-lessons.ts'],
        'prefixes': ['macro-'],
    },
    'crypto-trading': {
        'pathwayId': 'crypto-trading',
        'name': 'Crypto Trading',
        'files': ['crypto-trading-lessons.ts'],
        'prefixes': ['crypto-'],
    },
    'cybersecurity': {
        'pathwayId': 'cybersecurity',
        'name': 'Cybersecurity',
        'files': ['cybersecurity-lessons.ts'],
        'prefixes': ['cyber-'],
    },
    'web-development': {
        'pathwayId': 'web-development',
        'name': 'Web Development',
        'files': ['web-development-lessons.ts'],
        'prefixes': ['webdev-'],
    },
    'cloud-devops': {
        'pathwayId': 'cloud-devops',
        'name': 'Cloud & DevOps',
        'files': ['cloud-devops-lessons.ts'],
        'prefixes': ['devops-'],
    },
    'astronomy': {
        'pathwayId': 'astronomy',
        'name': 'Astronomy',
        'files': ['astronomy-lessons.ts'],
        'prefixes': ['astro-'],
    },
    'biology': {
        'pathwayId': 'biology-evolution',
        'name': 'Biology & Evolution',
        'files': ['biology-evolution-lessons.ts'],
        'prefixes': ['bio-'],
    },
    'quantum-mechanics': {
        'pathwayId': 'quantum-mechanics',
        'name': 'Quantum Mechanics',
        'files': ['quantum-mechanics-lessons.ts'],
        'prefixes': ['qm-'],
    },
    'earth-sciences': {
        'pathwayId': 'earth-sciences',
        'name': 'Earth Sciences',
        'files': ['earth-sciences-lessons.ts'],
        'prefixes': ['earth-'],
    },
    'writing-storytelling': {
        'pathwayId': 'writing-storytelling',
        'name': 'Writing & Storytelling',
        'files': ['writing-storytelling-lessons.ts'],
        'prefixes': ['ws-'],
    },
    'music': {
        'pathwayId': 'music-sound',
        'name': 'Music & Sound',
        'files': ['music-sound-lessons.ts'],
        'prefixes': ['mus-'],
    },
    'creative-writing': {
        'pathwayId': 'creative-writing',
        'name': 'Creative Writing',
        'files': ['creative-writing-lessons.ts'],
        'prefixes': ['cw-'],
    },
    'content-creation': {
        'pathwayId': 'content-creation',
        'name': 'Content Creation',
        'files': ['content-creation-lessons.ts'],
        'prefixes': ['content-'],
    },
    'world-building': {
        'pathwayId': 'world-building',
        'name': 'World Building',
        'files': ['world-building-lessons.ts'],
        'prefixes': ['world-'],
    },
    'strategic-thinking': {
        'pathwayId': 'strategic-thinking',
        'name': 'Strategic Thinking',
        'files': ['strategic-thinking-lessons.ts'],
        'prefixes': ['strat-'],
    },
    'systems-complexity': {
        'pathwayId': 'systems-complexity',
        'name': 'Systems & Complexity',
        'files': ['systems-complexity-lessons.ts'],
        'prefixes': ['sys-'],
    },
    'game-theory': {
        'pathwayId': 'game-theory',
        'name': 'Game Theory',
        'files': ['game-theory-lessons.ts'],
        'prefixes': ['gt-'],
    },
    'decision-making': {
        'pathwayId': 'decision-making',
        'name': 'Decision Making',
        'files': ['decision-making-lessons.ts'],
        'prefixes': ['decide-'],
    },
    'risk-management': {
        'pathwayId': 'risk-management',
        'name': 'Risk Management',
        'files': ['risk-management-lessons.ts'],
        'prefixes': ['risk-'],
    },
    'history': {
        'pathwayId': 'history-civilizations',
        'name': 'History & Civilizations',
        'files': ['history-civilizations-lessons.ts'],
        'prefixes': ['hist-'],
    },
    'western-philosophy': {
        'pathwayId': 'western-philosophy',
        'name': 'Western Philosophy',
        'files': ['western-philosophy-lessons.ts'],
        'prefixes': ['wphil-'],
    },
    'geopolitics': {
        'pathwayId': 'geopolitics',
        'name': 'Geopolitics',
        'files': ['geopolitics-lessons.ts'],
        'prefixes': ['geo-'],
    },
    'ancient-empires': {
        'pathwayId': 'ancient-empires',
        'name': 'Ancient Empires',
        'files': ['ancient-empires-lessons.ts'],
        'prefixes': ['ae-'],
    },
    'modern-history': {
        'pathwayId': 'modern-history',
        'name': 'Modern History',
        'files': ['modern-history-lessons.ts'],
        'prefixes': ['modhist-'],
    },
    'anthropology': {
        'pathwayId': 'cultural-anthropology',
        'name': 'Cultural Anthropology',
        'files': ['cultural-anthropology-lessons.ts'],
        'prefixes': ['anthro-'],
    },
    'design-thinking': {
        'pathwayId': 'design-thinking',
        'name': 'Design Thinking',
        'files': ['design-thinking-lessons.ts'],
        'prefixes': ['dt-'],
    },
    'startups': {
        'pathwayId': 'startups-innovation',
        'name': 'Startups & Innovation',
        'files': ['startups-innovation-lessons.ts'],
        'prefixes': ['startup-'],
    },
    'relationships': {
        'pathwayId': 'relationships-social',
        'name': 'Relationships & Social',
        'files': ['relationships-social-lessons.ts'],
        'prefixes': ['rel-'],
    },
    'communication': {
        'pathwayId': 'communication-rhetoric',
        'name': 'Communication & Rhetoric',
        'files': ['communication-rhetoric-lessons.ts'],
        'prefixes': ['cr-'],
    },
    'dating': {
        'pathwayId': 'dating-attraction',
        'name': 'Dating & Attraction',
        'files': ['dating-attraction-lessons.ts'],
        'prefixes': ['da-'],
    },
    'networking-social': {
        'pathwayId': 'networking',
        'name': 'Networking',
        'files': ['networking-lessons.ts'],
        'prefixes': ['net-'],
    },
    'parenting': {
        'pathwayId': 'parenting',
        'name': 'Parenting',
        'files': ['parenting-lessons.ts'],
        'prefixes': ['par-'],
    },
    'social-intelligence': {
        'pathwayId': 'social-intelligence',
        'name': 'Social Intelligence',
        'files': ['social-intelligence-lessons.ts'],
        'prefixes': ['si-'],
    },
    'polymath': {
        'pathwayId': 'polymath-mastery',
        'name': 'Polymath Mastery',
        'files': ['polymath-lessons.ts'],
        'prefixes': ['poly-'],
    },
    'mental-models-module': {
        'pathwayId': 'mental-models',
        'name': 'Mental Models',
        'files': ['mental-models-lessons.ts'],
        'prefixes': ['mm-'],
    },
    'first-principles': {
        'pathwayId': 'first-principles',
        'name': 'First Principles',
        'files': ['first-principles-lessons.ts'],
        'prefixes': ['fp-'],
    },
    'meta-learning': {
        'pathwayId': 'meta-learning',
        'name': 'Meta-Learning',
        'files': ['meta-learning-lessons.ts'],
        'prefixes': ['mlearn-'],
    },
    'physics': {
        'pathwayId': 'physics-engineering',
        'name': 'Physics & Engineering',
        'files': ['physics-engineering-lessons.ts'],
        'prefixes': ['phys-'],
    },
    'leadership-module': {
        'pathwayId': 'leadership',
        'name': 'Leadership',
        'files': ['leadership-lessons.ts'],
        'prefixes': ['lead-'],
    },
    'problem-solving': {
        'pathwayId': 'problem-solving',
        'name': 'Problem Solving',
        'files': ['problem-solving-lessons.ts'],
        'prefixes': ['solve-'],
    },
    'productivity-module': {
        'pathwayId': 'productivity-systems',
        'name': 'Productivity Systems',
        'files': ['productivity-systems-lessons.ts'],
        'prefixes': ['prod-'],
    },
    'mathematics': {
        'pathwayId': 'mathematics-patterns',
        'name': 'Mathematics & Patterns',
        'files': ['mathematics-patterns-lessons.ts'],
        'prefixes': ['math-'],
    },
}

def extract_quoted_string(content, start_pos):
    """Extract a string from content starting at a quote character, handling escapes."""
    if start_pos >= len(content):
        return None, start_pos
    quote_char = content[start_pos]
    if quote_char not in "'\"`":
        return None, start_pos

    i = start_pos + 1
    result = []
    while i < len(content):
        ch = content[i]
        if ch == '\\' and i + 1 < len(content):
            next_ch = content[i + 1]
            if next_ch == quote_char:
                result.append(next_ch)
                i += 2
                continue
            elif next_ch == 'n':
                result.append(' ')
                i += 2
                continue
            else:
                result.append(ch)
                i += 1
                continue
        elif ch == quote_char:
            return ''.join(result), i + 1
        else:
            result.append(ch)
            i += 1
    return None, start_pos


def extract_quizzes_from_file(filepath):
    """Extract quiz questions from a TypeScript lesson file."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"  Error reading {filepath}: {e}")
        return []

    quizzes = []

    # Find all quiz blocks
    quiz_starts = [m.start() for m in re.finditer(r'quiz:\s*\{', content)]

    for qstart in quiz_starts:
        # Find the block boundaries (rough: next 1500 chars should cover a quiz)
        block_end = min(qstart + 1500, len(content))
        block = content[qstart:block_end]

        # Extract question using our robust parser
        q_key = re.search(r'question:\s*([\'"`])', block)
        if not q_key:
            continue
        q_str_start = qstart + q_key.start() + len(q_key.group(0)) - 1
        question, _ = extract_quoted_string(content, q_str_start)
        if not question or len(question) < 10:
            continue

        # Extract options array
        opts_match = re.search(r'options:\s*\[', block)
        if not opts_match:
            continue

        # Find the closing bracket for options
        opts_start = opts_match.end()
        bracket_depth = 1
        i = opts_start
        block_content = content[qstart:]
        while i < len(block_content) and bracket_depth > 0:
            if block_content[i] == '[':
                bracket_depth += 1
            elif block_content[i] == ']':
                bracket_depth -= 1
            i += 1

        opts_raw = block_content[opts_start:i-1]

        # Extract options - handle escaped quotes
        options = []
        opt_positions = list(re.finditer(r"['\"`]", opts_raw))
        j = 0
        while j < len(opt_positions):
            pos = opt_positions[j].start()
            opt_str, end_pos = extract_quoted_string(opts_raw, pos)
            if opt_str is not None:
                options.append(opt_str)
                # Skip to next position after end_pos
                j += 1
                while j < len(opt_positions) and opt_positions[j].start() < end_pos:
                    j += 1
            else:
                j += 1

        if len(options) < 2:
            continue

        # Extract correct answer index
        correct_match = re.search(r'correct:\s*(\d+)', block)
        if not correct_match:
            continue
        correct_idx = int(correct_match.group(1))
        if correct_idx >= len(options):
            continue

        correct_answer = options[correct_idx]

        # Extract explanation
        expl_key = re.search(r'explanation:\s*([\'"`])', block)
        explanation = ""
        if expl_key:
            expl_str_start = qstart + expl_key.start() + len(expl_key.group(0)) - 1
            explanation, _ = extract_quoted_string(content, expl_str_start)
            if explanation is None:
                explanation = ""
            explanation = explanation.strip()

        quizzes.append({
            'question': question.strip(),
            'correct_answer': correct_answer.strip(),
            'explanation': explanation,
            'has_explanation': bool(explanation),
            'options_count': len(options),
        })

    return quizzes


def select_best_quizzes(quizzes, max_count=15):
    """Select the best quizzes, prioritizing those with explanations."""
    # Prioritize quizzes with explanations
    with_expl = [q for q in quizzes if q['has_explanation']]
    without_expl = [q for q in quizzes if not q['has_explanation']]

    selected = []
    # Take quizzes with explanations first
    selected.extend(with_expl[:max_count])
    # Fill remaining slots with ones without explanations
    remaining = max_count - len(selected)
    if remaining > 0:
        selected.extend(without_expl[:remaining])

    return selected


def escape_ts_string(s):
    """Escape a string for use in TypeScript single-quoted strings."""
    s = s.replace("\\", "\\\\")
    s = s.replace("'", "\\'")
    s = s.replace("\n", " ")
    s = s.replace("\r", "")
    return s.strip()


def determine_difficulty(question, answer, explanation):
    """Heuristic to assign difficulty based on content complexity."""
    combined = f"{question} {answer} {explanation}".lower()
    advanced_signals = ['quantum', 'theorem', 'algorithm', 'derivative', 'integral',
                       'topology', 'entropy', 'eigenvalue', 'fourier', 'tensor',
                       'paradigm', 'epistemology', 'ontology', 'dialectic',
                       'advanced', 'complex', 'sophisticated', 'nuanced']
    beginner_signals = ['what is', 'what does', 'basic', 'first', 'simple',
                       'introduction', 'define', 'meaning of', 'primary']

    if any(sig in combined for sig in advanced_signals):
        return 'advanced'
    if any(sig in combined for sig in beginner_signals):
        return 'beginner'
    return 'intermediate'


def generate_tags(category_key, question):
    """Generate relevant tags from the question and category."""
    tags = [category_key]
    # Extract key terms from question (lowercase, hyphenated)
    words = re.findall(r'\b[A-Za-z]{4,}\b', question.lower())
    # Pick top 2 unique meaningful words
    stopwords = {'what', 'which', 'that', 'this', 'with', 'from', 'they', 'have',
                'does', 'most', 'your', 'about', 'when', 'following', 'between',
                'called', 'during', 'would', 'their', 'these', 'than', 'been',
                'more', 'best', 'known', 'many', 'each', 'other', 'into', 'some'}
    meaningful = [w for w in words if w not in stopwords]
    unique = list(dict.fromkeys(meaningful))  # preserve order, remove dupes
    tags.extend(unique[:2])
    return tags


def main():
    print("=== Flashcard Extraction from Lesson Quizzes ===\n")

    all_cards = []
    card_counter = 0
    stats = {}

    for cat_key, cat_info in CATEGORY_GROUPS.items():
        quizzes = []
        for filename in cat_info['files']:
            filepath = PATHWAYS_DIR / filename
            if filepath.exists():
                extracted = extract_quizzes_from_file(filepath)
                quizzes.extend(extracted)
                print(f"  {filename}: {len(extracted)} quizzes")
            else:
                print(f"  {filename}: FILE NOT FOUND")

        if not quizzes:
            print(f"  [{cat_key}] No quizzes found, skipping\n")
            stats[cat_key] = 0
            continue

        # Select best 10-15 quizzes per category
        max_cards = min(15, len(quizzes))
        selected = select_best_quizzes(quizzes, max_cards)

        print(f"  [{cat_key}] Selected {len(selected)}/{len(quizzes)} quizzes\n")
        stats[cat_key] = len(selected)

        for quiz in selected:
            card_counter += 1
            back = quiz['correct_answer']
            if quiz['explanation']:
                back = f"{quiz['correct_answer']}. {quiz['explanation']}"

            difficulty = determine_difficulty(quiz['question'], quiz['correct_answer'], quiz['explanation'])
            tags = generate_tags(cat_key, quiz['question'])

            all_cards.append({
                'id': f'fc-uni-{card_counter:03d}',
                'front': quiz['question'],
                'back': back,
                'category': cat_info['name'],
                'pathwayId': cat_info['pathwayId'],
                'difficulty': difficulty,
                'tags': tags,
            })

    # Generate TypeScript output
    print(f"\n=== Generating {len(all_cards)} flashcards ===")

    lines = []
    lines.append("import type { SpacedRepetitionCard } from '@/types';")
    lines.append("")
    lines.append("/**")
    lines.append(f" * Universal Flashcards — Auto-extracted from lesson quizzes")
    lines.append(f" * Total: {len(all_cards)} cards across {sum(1 for v in stats.values() if v > 0)} categories")
    lines.append(" * Generated by generate-review-cards.py")
    lines.append(" */")
    lines.append("")
    lines.append("export const universalFlashcards: SpacedRepetitionCard[] = [")

    current_category = None
    for card in all_cards:
        if card['category'] != current_category:
            current_category = card['category']
            lines.append(f"  // === {current_category} ===")

        tags_str = ", ".join(f"'{t}'" for t in card['tags'])
        lines.append("  {")
        lines.append(f"    id: '{card['id']}',")
        lines.append(f"    front: '{escape_ts_string(card['front'])}',")
        lines.append(f"    back: '{escape_ts_string(card['back'])}',")
        lines.append(f"    category: '{escape_ts_string(card['category'])}',")
        lines.append(f"    pathwayId: '{card['pathwayId']}',")
        lines.append(f"    difficulty: '{card['difficulty']}',")
        lines.append(f"    tags: [{tags_str}],")
        lines.append("  },")

    lines.append("];")
    lines.append("")

    # Group exports by pathway for easier use
    pathway_ids = sorted(set(c['pathwayId'] for c in all_cards))
    lines.append("/** Get flashcards for a specific pathway */")
    lines.append("export function getFlashcardsForPathway(pathwayId: string): SpacedRepetitionCard[] {")
    lines.append("  return universalFlashcards.filter(c => c.pathwayId === pathwayId);")
    lines.append("}")
    lines.append("")

    # Write file
    output = "\n".join(lines)
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(output)

    print(f"\nWritten to: {OUTPUT_FILE}")
    print(f"Total cards: {len(all_cards)}")
    print(f"\nPer-category breakdown:")
    for cat, count in sorted(stats.items(), key=lambda x: -x[1]):
        if count > 0:
            print(f"  {cat}: {count}")
    non_zero = sum(1 for v in stats.values() if v > 0)
    zero = sum(1 for v in stats.values() if v == 0)
    print(f"\nCategories with cards: {non_zero}")
    print(f"Categories without lesson files: {zero}")


if __name__ == '__main__':
    main()
