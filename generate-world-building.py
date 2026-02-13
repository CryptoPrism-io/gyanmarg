#!/usr/bin/env python3
"""Generate World Building lessons (levels 2-10) using Gemini AI.

World Building module lost Levels 2-10 and needs regeneration.
Total: 9 levels x 8 lessons = 72 lessons

Usage:
  python generate-world-building.py
  python generate-world-building.py --level 2
  python generate-world-building.py --dry-run
"""

import os
import sys
import time
import re
from pathlib import Path

sys.stdout.reconfigure(line_buffering=True)

try:
    from google import genai
    from dotenv import load_dotenv
except ImportError:
    print("Missing dependencies. Install with:")
    print("  pip install google-genai python-dotenv")
    sys.exit(1)

# Load .env from app/
env_path = Path(__file__).parent / 'app' / '.env'
if env_path.exists():
    load_dotenv(env_path)
else:
    load_dotenv()

API_KEY = os.getenv('GEMINI_API_KEY')
if not API_KEY:
    print("ERROR: GEMINI_API_KEY not set")
    sys.exit(1)

client = genai.Client(api_key=API_KEY)
MODEL_NAME = 'gemini-2.5-flash'

OUTPUT_FILE = Path(__file__).parent / 'app' / 'src' / 'data' / 'pathways' / 'world-building-lessons.ts'

# ============================================================================
# Level definitions for World Building (Levels 2-10)
# ============================================================================

LEVELS = {
    2: {
        'title': 'Geography & Physical World',
        'description': 'Design compelling terrain, climate systems, maps, and natural environments that shape civilizations',
        'lessons': [
            {'id': 'world-009', 'title': 'Geography as Destiny', 'type': 'intro'},
            {'id': 'world-010', 'title': 'Terrain & Landforms -- Mountains to Oceans', 'type': 'concept'},
            {'id': 'world-011', 'title': 'Climate Systems & Weather Patterns', 'type': 'concept'},
            {'id': 'world-012', 'title': 'Flora, Fauna & Ecosystems', 'type': 'concept'},
            {'id': 'world-013', 'title': 'Natural Resources & Their Influence', 'type': 'concept'},
            {'id': 'world-014', 'title': 'Map Making -- From Sketch to World Atlas', 'type': 'concept'},
            {'id': 'world-015', 'title': 'Build Your World Map Exercise', 'type': 'exercise'},
            {'id': 'world-016', 'title': 'Design a Complete Biome', 'type': 'challenge'},
        ],
    },
    3: {
        'title': 'History & Timeline',
        'description': 'Craft deep histories, ages, pivotal events, and legends that make your world feel ancient',
        'lessons': [
            {'id': 'world-017', 'title': 'Every World Has a Past', 'type': 'intro'},
            {'id': 'world-018', 'title': 'Creating Timelines & Ages', 'type': 'concept'},
            {'id': 'world-019', 'title': 'Pivotal Events -- Wars, Discoveries, Catastrophes', 'type': 'concept'},
            {'id': 'world-020', 'title': 'Myths, Legends & Origin Stories', 'type': 'concept'},
            {'id': 'world-021', 'title': 'Archaeological Traces & Ruins', 'type': 'concept'},
            {'id': 'world-022', 'title': 'Unreliable History & Conflicting Accounts', 'type': 'concept'},
            {'id': 'world-023', 'title': 'Timeline Construction Workshop', 'type': 'exercise'},
            {'id': 'world-024', 'title': 'Write Your World\'s Origin Myth', 'type': 'challenge'},
        ],
    },
    4: {
        'title': 'Societies & Cultures',
        'description': 'Build diverse cultures with religions, customs, social structures, and daily life',
        'lessons': [
            {'id': 'world-025', 'title': 'Culture is the Heart of Your World', 'type': 'intro'},
            {'id': 'world-026', 'title': 'Religion, Belief & Cosmology', 'type': 'concept'},
            {'id': 'world-027', 'title': 'Social Hierarchies & Class Systems', 'type': 'concept'},
            {'id': 'world-028', 'title': 'Customs, Rituals & Daily Life', 'type': 'concept'},
            {'id': 'world-029', 'title': 'Races, Species & Cultural Diversity', 'type': 'concept'},
            {'id': 'world-030', 'title': 'Art, Music & Cultural Expression', 'type': 'concept'},
            {'id': 'world-031', 'title': 'Cultural Profile Exercise', 'type': 'exercise'},
            {'id': 'world-032', 'title': 'Design a Complete Civilization', 'type': 'challenge'},
        ],
    },
    5: {
        'title': 'Magic Systems & Technology',
        'description': 'Design compelling magic systems, technology levels, and the rules that govern supernatural forces',
        'lessons': [
            {'id': 'world-033', 'title': 'Rules Make Magic Magical', 'type': 'intro'},
            {'id': 'world-034', 'title': 'Hard vs. Soft Magic Systems', 'type': 'concept'},
            {'id': 'world-035', 'title': 'Costs, Limits & Consequences', 'type': 'concept'},
            {'id': 'world-036', 'title': 'Technology Levels & Progression', 'type': 'concept'},
            {'id': 'world-037', 'title': 'Magic-Technology Interaction', 'type': 'concept'},
            {'id': 'world-038', 'title': 'Supernatural Ecology -- How Magic Shapes the World', 'type': 'concept'},
            {'id': 'world-039', 'title': 'Magic System Design Workshop', 'type': 'exercise'},
            {'id': 'world-040', 'title': 'Build Your Magic System', 'type': 'challenge'},
        ],
    },
    6: {
        'title': 'Languages & Communication',
        'description': 'Develop naming conventions, constructed languages, and writing systems',
        'lessons': [
            {'id': 'world-041', 'title': 'Words Shape Worlds', 'type': 'intro'},
            {'id': 'world-042', 'title': 'Naming Conventions & Phonetics', 'type': 'concept'},
            {'id': 'world-043', 'title': 'Constructed Languages -- Conlang Basics', 'type': 'concept'},
            {'id': 'world-044', 'title': 'Writing Systems & Literacy', 'type': 'concept'},
            {'id': 'world-045', 'title': 'Language & Power -- Who Speaks What', 'type': 'concept'},
            {'id': 'world-046', 'title': 'Communication Technology & Networks', 'type': 'concept'},
            {'id': 'world-047', 'title': 'Naming System Workshop', 'type': 'exercise'},
            {'id': 'world-048', 'title': 'Build Your World\'s Language', 'type': 'challenge'},
        ],
    },
    7: {
        'title': 'Economics & Trade',
        'description': 'Build believable economic systems, trade routes, and currencies',
        'lessons': [
            {'id': 'world-049', 'title': 'Money Makes Worlds Go Round', 'type': 'intro'},
            {'id': 'world-050', 'title': 'Currency & Value Systems', 'type': 'concept'},
            {'id': 'world-051', 'title': 'Trade Routes & Networks', 'type': 'concept'},
            {'id': 'world-052', 'title': 'Guilds, Markets & Economic Structures', 'type': 'concept'},
            {'id': 'world-053', 'title': 'Scarcity, Abundance & Conflict', 'type': 'concept'},
            {'id': 'world-054', 'title': 'Technology\'s Impact on Economy', 'type': 'concept'},
            {'id': 'world-055', 'title': 'Economic System Exercise', 'type': 'exercise'},
            {'id': 'world-056', 'title': 'Design Your World\'s Economy', 'type': 'challenge'},
        ],
    },
    8: {
        'title': 'Conflict & Power',
        'description': 'Design political systems, power structures, and driving tensions',
        'lessons': [
            {'id': 'world-057', 'title': 'Power Shapes Everything', 'type': 'intro'},
            {'id': 'world-058', 'title': 'Government Systems & Political Structure', 'type': 'concept'},
            {'id': 'world-059', 'title': 'Factions, Alliances & Rivalries', 'type': 'concept'},
            {'id': 'world-060', 'title': 'War & Military in World Building', 'type': 'concept'},
            {'id': 'world-061', 'title': 'Law, Justice & Social Control', 'type': 'concept'},
            {'id': 'world-062', 'title': 'Revolution, Reform & Change', 'type': 'concept'},
            {'id': 'world-063', 'title': 'Political Map Exercise', 'type': 'exercise'},
            {'id': 'world-064', 'title': 'Design Your Power Structure', 'type': 'challenge'},
        ],
    },
    9: {
        'title': 'Narrative Integration',
        'description': 'Weave your world seamlessly into story without info-dumps',
        'lessons': [
            {'id': 'world-065', 'title': 'Show, Don\'t Lecture', 'type': 'intro'},
            {'id': 'world-066', 'title': 'Iceberg Theory in Practice', 'type': 'concept'},
            {'id': 'world-067', 'title': 'Exposition Through Character', 'type': 'concept'},
            {'id': 'world-068', 'title': 'Environmental Storytelling', 'type': 'concept'},
            {'id': 'world-069', 'title': 'Reader Discovery & Mystery', 'type': 'concept'},
            {'id': 'world-070', 'title': 'World-Building for Different Media', 'type': 'concept'},
            {'id': 'world-071', 'title': 'Info-Dump Revision Exercise', 'type': 'exercise'},
            {'id': 'world-072', 'title': 'Write a World-Revealing Scene', 'type': 'challenge'},
        ],
    },
    10: {
        'title': 'Master World Builder',
        'description': 'Create a complete world bible and develop your philosophy',
        'lessons': [
            {'id': 'world-073', 'title': 'The Complete World Builder', 'type': 'intro'},
            {'id': 'world-074', 'title': 'The World Bible -- Your Master Document', 'type': 'concept'},
            {'id': 'world-075', 'title': 'Consistency & Continuity Management', 'type': 'concept'},
            {'id': 'world-076', 'title': 'Collaborative World Building', 'type': 'concept'},
            {'id': 'world-077', 'title': 'Transmedia World Building', 'type': 'concept'},
            {'id': 'world-078', 'title': 'Your World-Building Philosophy', 'type': 'concept'},
            {'id': 'world-079', 'title': 'World Bible Assembly', 'type': 'exercise'},
            {'id': 'world-080', 'title': 'Present Your Complete World', 'type': 'challenge'},
        ],
    },
}

BOOKS = '"Wonderbook" by Jeff VanderMeer, "On Writing and Worldbuilding" by Timothy Hickson, "Guns, Germs, and Steel" by Jared Diamond, "Sapiens" by Yuval Noah Harari, "The Art of Language Invention" by David J. Peterson, "Rhetorics of Fantasy" by Farah Mendlesohn, "The Writer\'s Complete Fantasy Reference" edited by Writer\'s Digest Books'

SUBJECT = 'World Building'
EXPORT_PREFIX = 'worldLessonsLevel'

# ============================================================================
# Prompt template
# ============================================================================

LESSON_PROMPT = """You are creating a lesson for a {subject} course on the Polymind learning platform.

Level: {level_num} - {level_title}
Level Description: {level_desc}

Lesson: {lesson_id} - {lesson_title}
Type: {lesson_type}

Reference books for citations: {books}

Create the lesson content following this structure:

For INTRO lessons (10 min, 100 XP):
- overview: 1-2 sentence preview
- mainContent: 800-1000 words with markdown formatting including ## headers, **bold**, *italic*, lists, tables, blockquotes
- keyTakeaway: One clear sentence
- actionItem: Practical, specific task

For CONCEPT lessons (12 min, 100 XP):
- overview: 1-2 sentence preview
- mainContent: 1000-1500 words with ## headers, ### sub-headers, **bold**, *italic*, lists, markdown tables, blockquotes
- keyTakeaway: One clear sentence
- actionItem: Specific practice exercise
- quiz: scenario-based question with 4 options (for concept lessons at positions 2,3,5,7 in each level)

For EXERCISE lessons (15 min, 125 XP):
- overview: What they will practice
- mainContent: 1200-1800 words with step-by-step instructions
- keyTakeaway: What they will learn by doing
- actionItem: Complete the exercise
- quiz: application-based question

For CHALLENGE lessons (15 min, 150 XP):
- overview: The challenge description
- mainContent: 1000-1500 words with the challenge, steps, and criteria
- keyTakeaway: Key mastery insight
- actionItem: Complete the challenge this week
- quiz: synthesis question

CRITICAL RULES:
1. Use rich markdown: ## headers, ### sub-headers, **bold**, *italic*, bullet lists, numbered lists, markdown tables (| Header | Header |), blockquotes (> "quote" -- attribution)
2. Be practical and actionable with real-world examples from famous fictional worlds
3. EVERY lesson MUST end mainContent with:
   ## Sources & Further Reading
   - **"Book Title" by Author** -- specific chapter or insight referenced
   - **Research**: Real study or finding (Year) -- what it showed
   (Include 3-5 citations per lesson)
4. For quiz: create scenario-based questions testing APPLICATION not memorization
5. IMPORTANT: Escape single quotes in ALL single-quoted strings (use \\' instead of ')
6. IMPORTANT: Do NOT use backticks inside mainContent. Use **bold** or *italic* instead of backtick code formatting.
7. Keep content engaging and conversational
8. Reference famous works: Tolkien, Martin, Le Guin, Sanderson, Herbert, Jordan, Pratchett, etc.

Output ONLY valid TypeScript object in this exact format:
{{
  id: '{lesson_id}',
  title: '{lesson_title}',
  type: '{lesson_type}',
  duration: {duration},
  xpReward: {xp},
  content: {{
    overview: 'text here',
    mainContent: `text with markdown here`,
    keyTakeaway: 'text here',
    actionItem: 'text here',{quiz_field}
  }}
}}

Do not include any explanation, just the TypeScript object."""


def get_duration_xp(lesson_type):
    durations = {'intro': 10, 'concept': 12, 'exercise': 15, 'challenge': 15}
    xps = {'intro': 100, 'concept': 100, 'exercise': 125, 'challenge': 150}
    return durations.get(lesson_type, 12), xps.get(lesson_type, 100)


def needs_quiz(lesson_type, position):
    if lesson_type in ('exercise', 'challenge'):
        return True
    if lesson_type == 'concept' and position in (1, 2, 4, 6):
        return True
    return False


def generate_lesson(level_num, level_data, lesson_data, position):
    duration, xp = get_duration_xp(lesson_data['type'])
    has_quiz = needs_quiz(lesson_data['type'], position)

    quiz_field = ''
    if has_quiz:
        quiz_field = "\n    quiz: { question: 'question', options: ['A', 'B', 'C', 'D'], correct: 0, explanation: 'explanation' }"

    prompt = LESSON_PROMPT.format(
        subject=SUBJECT,
        level_num=level_num,
        level_title=level_data['title'],
        level_desc=level_data['description'],
        lesson_id=lesson_data['id'],
        lesson_title=lesson_data['title'],
        lesson_type=lesson_data['type'],
        books=BOOKS,
        duration=duration,
        xp=xp,
        quiz_field=quiz_field,
    )

    print(f"  Generating {lesson_data['id']}: {lesson_data['title']}...", end=' ', flush=True)

    for attempt in range(3):
        try:
            response = client.models.generate_content(
                model=MODEL_NAME,
                contents=[prompt],
            )
            content = response.text.strip()

            # Clean up response
            if content.startswith('```typescript'):
                content = content[len('```typescript'):]
            elif content.startswith('```ts'):
                content = content[len('```ts'):]
            if content.startswith('```'):
                content = content[3:]
            if content.endswith('```'):
                content = content[:-3]
            content = content.strip()

            if not content.endswith(','):
                content += ','

            print("OK")
            return content

        except Exception as e:
            err_str = str(e)
            if '429' in err_str or 'RESOURCE_EXHAUSTED' in err_str:
                wait = 30 * (attempt + 1)
                print(f"rate limited, waiting {wait}s...", end=' ', flush=True)
                time.sleep(wait)
            elif '400' in err_str or 'INVALID_ARGUMENT' in err_str:
                print(f"SKIP (bad request)")
                return None
            else:
                print(f"error: {e}")
                if attempt < 2:
                    time.sleep(5)
                else:
                    return None

    return None


def main():
    import argparse
    parser = argparse.ArgumentParser(description='Generate World Building lessons (Levels 2-10)')
    parser.add_argument('--level', '-l', type=int, help='Specific level (2-10)')
    parser.add_argument('--dry-run', action='store_true', help='Show plan only')
    args = parser.parse_args()

    levels_to_gen = [args.level] if args.level else sorted(LEVELS.keys())
    total_lessons = sum(len(LEVELS[l]['lessons']) for l in levels_to_gen)

    print("World Building Lesson Generator (Levels 2-10)")
    print("=" * 60)
    print(f"Model: {MODEL_NAME}")
    print(f"Levels: {levels_to_gen}")
    print(f"Total lessons: {total_lessons}")

    for l in levels_to_gen:
        print(f"  Level {l}: {LEVELS[l]['title']} ({len(LEVELS[l]['lessons'])} lessons)")

    if args.dry_run:
        print("\n[DRY RUN] Would generate the above.")
        return

    print()

    all_output = []

    for level_num in levels_to_gen:
        level_data = LEVELS[level_num]
        print(f"\n{'=' * 60}")
        print(f"Level {level_num}: {level_data['title']}")
        print(f"{'=' * 60}")

        var_name = f"{EXPORT_PREFIX}{level_num}"
        all_output.append(f"\n// Level {level_num}: {level_data['title']}")
        all_output.append(f"export const {var_name}: PathwayLesson[] = [")

        for i, lesson_data in enumerate(level_data['lessons']):
            lesson_content = generate_lesson(level_num, level_data, lesson_data, i)
            if lesson_content:
                all_output.append(f"  {lesson_content}")
            else:
                duration, xp = get_duration_xp(lesson_data['type'])
                all_output.append(
                    f"  {{ id: '{lesson_data['id']}', title: '{lesson_data['title']}', "
                    f"type: '{lesson_data['type']}', duration: {duration}, xpReward: {xp}, "
                    f"content: {{ overview: 'Coming soon.', mainContent: `# {lesson_data['title']}\\n\\nContent coming soon.`, "
                    f"keyTakeaway: 'Coming soon.', actionItem: 'Stay tuned.' }} }},"
                )
            time.sleep(1)

        all_output.append("];")

    # Read existing file and append
    existing = OUTPUT_FILE.read_text(encoding='utf-8').rstrip()
    new_content = existing + '\n' + '\n'.join(all_output) + '\n'
    OUTPUT_FILE.write_text(new_content, encoding='utf-8')

    print(f"\n{'=' * 60}")
    print(f"DONE! Generated {total_lessons} lessons.")
    print(f"Updated: {OUTPUT_FILE}")
    print("\nNext steps:")
    print("  1. Run: python app/scripts/fix-backticks-v5.py")
    print("  2. Run: cd app && npx tsc -p tsconfig.app.json --noEmit")
    print("  3. Update world-building.ts to import all 10 levels")


if __name__ == '__main__':
    main()
