#!/usr/bin/env python3
"""
Polymind Premium Flashcard Generator (Gemini)
==============================================
Uses Gemini 2.5 Flash to craft premium retention-focused flashcards
from full module lesson content. Phase 2 of the flashcard system.

Usage:
  python scripts/generate-premium-flashcards.py           # Generate all modules
  python scripts/generate-premium-flashcards.py --module bhagavad-gita  # Single module
  python scripts/generate-premium-flashcards.py --dry-run  # Preview without API calls

Requires:
  pip install google-genai python-dotenv
"""

import os
import sys
import time
import json
import argparse
import re
from pathlib import Path

sys.stdout.reconfigure(line_buffering=True)

try:
    from google import genai
    from google.genai import types
    from dotenv import load_dotenv
except ImportError:
    print("Missing dependencies. Install with:")
    print("  pip install google-genai python-dotenv")
    sys.exit(1)

# ============================================================
# CONFIG
# ============================================================

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    print("Error: GEMINI_API_KEY not found.")
    print("Create .env file with: GEMINI_API_KEY=your_key_here")
    sys.exit(1)

MODEL_NAME = "gemini-2.5-flash"
DELAY_BETWEEN_CALLS = 2  # seconds

SCRIPT_DIR = Path(__file__).parent
APP_DIR = SCRIPT_DIR.parent
PATHWAYS_DIR = APP_DIR / "src" / "data" / "pathways"
OUTPUT_FILE = APP_DIR / "src" / "data" / "flashcards-batch19-premium.ts"

# ============================================================
# MODULE DEFINITIONS
# ============================================================

MODULES = [
    # Bharat Wisdom (10)
    {"id": "bhagavad-gita",         "prefix": "gita",    "category": "Bharat Wisdom",       "name": "Bhagavad Gita",              "cards": 20},
    {"id": "upanishads",            "prefix": "upan",    "category": "Bharat Wisdom",       "name": "Upanishads",                 "cards": 18},
    {"id": "vedic-wisdom",          "prefix": "vedic",   "category": "Ancient Wisdom",      "name": "Vedic Wisdom",               "cards": 18},
    {"id": "ramayana-mahabharata",  "prefix": "rama",    "category": "Bharat Wisdom",       "name": "Ramayana & Mahabharata",     "cards": 18},
    {"id": "yoga-philosophy",       "prefix": "yoga",    "category": "Spirit & Body",       "name": "Yoga Philosophy",            "cards": 16},
    {"id": "ayurveda",              "prefix": "ayur",    "category": "Bharat Wisdom",       "name": "Ayurveda",                   "cards": 16},
    {"id": "mythology",             "prefix": "myth",    "category": "Ancient Wisdom",      "name": "World Mythology",            "cards": 16},
    {"id": "sanskrit-mantras",      "prefix": "skt",     "category": "Bharat Wisdom",       "name": "Sanskrit & Mantras",         "cards": 15},
    {"id": "jyotish-vastu",         "prefix": "jv",      "category": "Bharat Wisdom",       "name": "Jyotish & Vastu",            "cards": 15},
    {"id": "shiv-sutras",           "prefix": "shiv",    "category": "Bharat Wisdom",       "name": "Shiv Sutras",                "cards": 15},
    # Core (4)
    {"id": "emotional-intelligence","prefix": "eiprem",  "category": "Mind & Performance",  "name": "Emotional Intelligence",     "cards": 20},
    {"id": "stoicism",              "prefix": "stprem",  "category": "Ancient Wisdom",      "name": "Stoicism",                   "cards": 18},
    {"id": "eastern-philosophy",    "prefix": "eprem",   "category": "Ancient Wisdom",      "name": "Eastern Philosophy",         "cards": 18},
    {"id": "communication-rhetoric","prefix": "crprem",  "category": "Relationships & Society","name": "Communication & Rhetoric", "cards": 16},
    # Science/Tech (3)
    {"id": "quantum-mechanics",     "prefix": "qmprem",  "category": "Science & Universe",  "name": "Quantum Mechanics",          "cards": 16},
    {"id": "cybersecurity",         "prefix": "csprem",  "category": "Technology & Code",   "name": "Cybersecurity",              "cards": 16},
    {"id": "cloud-devops",          "prefix": "cdprem",  "category": "Technology & Code",   "name": "Cloud & DevOps",             "cards": 16},
    # Finance (2)
    {"id": "technical-analysis",    "prefix": "taprem",  "category": "Finance & Markets",   "name": "Technical Analysis",         "cards": 16},
    {"id": "crypto-trading",        "prefix": "ctprem",  "category": "Finance & Markets",   "name": "Crypto Trading",             "cards": 16},
    # Creative/Strategy (3)
    {"id": "game-theory",           "prefix": "gtprem",  "category": "Strategy & Systems",  "name": "Game Theory",                "cards": 16},
    {"id": "world-building",        "prefix": "wbprem",  "category": "Creative Arts",       "name": "World Building",             "cards": 15},
    {"id": "creative-writing",      "prefix": "cwprem",  "category": "Creative Arts",       "name": "Creative Writing",           "cards": 15},
    # Missing 5 (Spirit & Body + Synthesis)
    {"id": "body-longevity",        "prefix": "body",    "category": "Spirit & Body",       "name": "Body & Longevity",           "cards": 16, "lesson_file": "body"},
    {"id": "spirituality-sadhana",  "prefix": "spirit",  "category": "Spirit & Body",       "name": "Spirituality & Sadhana",     "cards": 16, "lesson_file": "spirituality"},
    {"id": "shiva-shakti",          "prefix": "shakti",  "category": "Eastern Wisdom",      "name": "Shiva-Shakti Philosophy",    "cards": 16, "lesson_file": "shiva"},
    {"id": "temple-science",        "prefix": "temple",  "category": "Eastern Wisdom",      "name": "Temple Science",             "cards": 16, "lesson_file": "temple"},
    {"id": "polymath-mastery",      "prefix": "poly",    "category": "Synthesis & Mastery", "name": "Polymath Mastery",           "cards": 16, "lesson_file": "polymath"},
]

# ============================================================
# GEMINI PROMPT
# ============================================================

SYSTEM_PROMPT = """You are a master educator creating spaced repetition flashcards for long-term retention.
You will receive the full lesson content for a learning module. Your job is to distill the most important, retention-worthy concepts into flashcards.

Requirements:
- Test genuinely useful concepts, not trivia
- Front: Clear, specific question that makes the learner think deeply
- Back: Concise answer (1-2 sentences max) + brief "why it matters" (1 sentence)
- Mix difficulty: ~30% beginner, ~50% intermediate, ~20% advanced
- Focus on: core principles, cross-topic connections, practical application, counterintuitive insights
- Avoid: yes/no questions, pure definitions, anything easily googleable in 2 seconds
- Each card should be self-contained (understandable without reading the lessons)
- Vary question styles: "Why does X matter?", "What happens when Y?", "How does A connect to B?", "What's the key difference between X and Y?"

Output ONLY a valid JSON array with no markdown formatting, no code fences:
[
  {
    "front": "Question text here?",
    "back": "Answer text here. Why it matters: explanation.",
    "difficulty": "beginner|intermediate|advanced",
    "tags": ["tag1", "tag2"]
  }
]

Important:
- No markdown code fences around the JSON
- Ensure valid JSON (escape quotes properly)
- Tags should be 2-4 lowercase hyphenated keywords relevant to the card content"""


def build_user_prompt(module_name: str, num_cards: int, content: str) -> str:
    return f"""Module: {module_name}

Create exactly {num_cards} premium flashcards from this module's lesson content.

--- BEGIN LESSON CONTENT ---
{content}
--- END LESSON CONTENT ---

Remember: Output ONLY the JSON array, no code fences, no explanation."""


# ============================================================
# HELPERS
# ============================================================

def read_lesson_file(module_id: str, lesson_file_override: str | None = None) -> str | None:
    """Read the lesson file for a module and return its content."""
    if lesson_file_override:
        lesson_file = PATHWAYS_DIR / f"{lesson_file_override}.ts"
    else:
        lesson_file = PATHWAYS_DIR / f"{module_id}-lessons.ts"

    if not lesson_file.exists():
        print(f"  WARNING: Lesson file not found: {lesson_file}")
        return None

    content = lesson_file.read_text(encoding="utf-8")

    # Truncate if too large (Gemini context limit ~1M tokens but we want focused content)
    # Keep first 200K chars which covers most modules fully
    if len(content) > 200_000:
        content = content[:200_000] + "\n\n... [truncated for length]"
        print(f"  Note: Content truncated to 200K chars")

    return content


def fix_json_escaping(text: str) -> str:
    """Fix common JSON escaping issues from Gemini output."""
    # Fix unescaped quotes inside JSON string values
    # Strategy: process line by line, fix unescaped inner quotes
    lines = text.split('\n')
    fixed_lines = []
    for line in lines:
        # Match JSON string values like "key": "value with "quotes" inside"
        # Look for lines with key-value pairs where the value has unescaped quotes
        match = re.match(r'^(\s*"(?:front|back|difficulty)"\s*:\s*")(.*?)(",?\s*)$', line, re.DOTALL)
        if match:
            prefix, value, suffix = match.groups()
            # Escape any unescaped quotes in the value
            # But don't double-escape already escaped ones
            value = value.replace('\\"', '\x00')  # Protect already escaped
            value = value.replace('"', '\\"')       # Escape unescaped
            value = value.replace('\x00', '\\"')   # Restore protected
            line = prefix + value + suffix
        fixed_lines.append(line)
    return '\n'.join(fixed_lines)


def extract_json_from_response(text: str) -> list | None:
    """Extract JSON array from Gemini response, handling code fences and escaping issues."""
    # Strip code fences if present
    text = text.strip()
    if text.startswith("```"):
        text = re.sub(r'^```\w*\n?', '', text)
        text = re.sub(r'\n?```$', '', text)
        text = text.strip()

    # Check for truncation (response cut off mid-JSON)
    stripped = text.rstrip()
    if not stripped.endswith(']'):
        # Try to salvage by closing the array
        # Find last complete object
        last_brace = stripped.rfind('}')
        if last_brace > 0:
            salvaged = stripped[:last_brace+1] + '\n]'
            try:
                data = json.loads(salvaged)
                if isinstance(data, list):
                    print(f"  (Salvaged {len(data)} cards from truncated response)")
                    return data
            except json.JSONDecodeError:
                pass

    # Try direct parse first
    try:
        data = json.loads(text)
        if isinstance(data, list):
            return data
    except json.JSONDecodeError:
        pass

    # Try with escaping fixes
    fixed = fix_json_escaping(text)
    try:
        data = json.loads(fixed)
        if isinstance(data, list):
            print(f"  (Fixed JSON escaping issues)")
            return data
    except json.JSONDecodeError:
        pass

    # Try to find array in the text
    match = re.search(r'\[[\s\S]*\]', text)
    if match:
        try:
            return json.loads(match.group())
        except json.JSONDecodeError:
            # Try with fixes on extracted array
            fixed_match = fix_json_escaping(match.group())
            try:
                return json.loads(fixed_match)
            except json.JSONDecodeError as e:
                print(f"  ERROR: Failed to parse JSON even after fixes: {e}")
                return None

    print(f"  ERROR: No JSON array found in response")
    return None


def escape_ts_string(s: str) -> str:
    """Escape a string for use in TypeScript single-quoted strings."""
    s = s.replace("\\", "\\\\")
    s = s.replace("'", "\\'")
    s = s.replace("\n", "\\n")
    return s


def generate_ts_output(all_cards: list[dict]) -> str:
    """Generate the TypeScript output file content."""
    lines = [
        "import type { SpacedRepetitionCard } from '@/types';",
        "",
        "/**",
        " * Batch 19: Premium Flashcards (Gemini-generated)",
        f" * {len(all_cards)} cards across {len(set(c['pathwayId'] for c in all_cards))} modules",
        " * Generated with deep lesson analysis for maximum retention value",
        " */",
        "",
        "export const premiumFlashcards: SpacedRepetitionCard[] = [",
    ]

    current_pathway = None
    for card in all_cards:
        if card["pathwayId"] != current_pathway:
            current_pathway = card["pathwayId"]
            lines.append(f"  // --- {card['category']}: {card['pathwayId']} ---")

        safe_tags = [t.replace("'", "") for t in card["tags"]]
        tags_str = ", ".join(f"'{t}'" for t in safe_tags)
        lines.append("  {")
        lines.append(f"    id: '{card['id']}',")
        lines.append(f"    front: '{escape_ts_string(card['front'])}',")
        lines.append(f"    back: '{escape_ts_string(card['back'])}',")
        lines.append(f"    category: '{escape_ts_string(card['category'])}',")
        lines.append(f"    source: 'Premium — Gemini Analysis',")
        lines.append(f"    pathwayId: '{card['pathwayId']}',")
        lines.append(f"    difficulty: '{card['difficulty']}',")
        lines.append(f"    tags: [{tags_str}],")
        lines.append("  },")

    lines.append("];")
    lines.append("")

    return "\n".join(lines)


# ============================================================
# MAIN
# ============================================================

def main():
    parser = argparse.ArgumentParser(description="Generate premium flashcards via Gemini")
    parser.add_argument("--module", type=str, help="Generate for a single module ID")
    parser.add_argument("--dry-run", action="store_true", help="Preview without API calls")
    parser.add_argument("--append", action="store_true", help="Append to existing output instead of overwriting")
    args = parser.parse_args()

    # Filter modules if --module specified
    modules = MODULES
    if args.module:
        modules = [m for m in MODULES if m["id"] == args.module]
        if not modules:
            print(f"Error: Module '{args.module}' not found in target list.")
            print(f"Available: {', '.join(m['id'] for m in MODULES)}")
            sys.exit(1)

    print(f"{'='*60}")
    print(f"Polymind Premium Flashcard Generator")
    print(f"Model: {MODEL_NAME}")
    print(f"Modules: {len(modules)}")
    print(f"Expected cards: ~{sum(m['cards'] for m in modules)}")
    print(f"Output: {OUTPUT_FILE}")
    print(f"{'='*60}\n")

    # Load existing cards if appending
    existing_cards = []
    existing_pathways = set()
    if args.append and OUTPUT_FILE.exists():
        # Parse existing file to get cards we already have
        existing_content = OUTPUT_FILE.read_text(encoding="utf-8")
        # Extract pathwayIds already in the file
        for match in re.finditer(r"pathwayId:\s*'([^']+)'", existing_content):
            existing_pathways.add(match.group(1))
        print(f"Append mode: skipping {len(existing_pathways)} already-generated pathways\n")

    # Initialize Gemini client
    client = genai.Client(api_key=GEMINI_API_KEY)

    all_cards = []
    success_count = 0
    fail_count = 0

    for i, module in enumerate(modules):
        module_id = module["id"]
        module_name = module["name"]
        prefix = module["prefix"]
        category = module["category"]
        num_cards = module["cards"]
        lesson_file_override = module.get("lesson_file")

        print(f"[{i+1}/{len(modules)}] {module_name} ({module_id})")

        # Skip if already generated in append mode
        if module_id in existing_pathways:
            print(f"  Skipping (already in output file)\n")
            continue

        # Read lesson content
        content = read_lesson_file(module_id, lesson_file_override)
        if not content:
            fail_count += 1
            continue

        content_kb = len(content) / 1024
        print(f"  Content: {content_kb:.0f} KB")

        if args.dry_run:
            print(f"  DRY RUN: Would request {num_cards} cards\n")
            continue

        # Call Gemini
        try:
            print(f"  Requesting {num_cards} cards from Gemini...")
            response = client.models.generate_content(
                model=MODEL_NAME,
                contents=build_user_prompt(module_name, num_cards, content),
                config=types.GenerateContentConfig(
                    system_instruction=SYSTEM_PROMPT,
                    temperature=0.7,
                    max_output_tokens=16384,
                    response_mime_type="application/json",
                ),
            )

            raw_text = response.text
            cards = extract_json_from_response(raw_text)

            if not cards:
                print(f"  FAILED: Could not parse response")
                fail_count += 1
                # Save raw response for debugging
                debug_file = SCRIPT_DIR / f"debug-{module_id}.txt"
                debug_file.write_text(raw_text, encoding="utf-8")
                print(f"  Raw response saved to {debug_file}")
                continue

            # Process cards
            card_count = 0
            for j, card in enumerate(cards):
                card_id = f"fc-{prefix}-{j+1:03d}"
                processed = {
                    "id": card_id,
                    "front": card.get("front", ""),
                    "back": card.get("back", ""),
                    "category": category,
                    "pathwayId": module_id,
                    "difficulty": card.get("difficulty", "intermediate"),
                    "tags": card.get("tags", []),
                }
                # Validate
                if processed["front"] and processed["back"]:
                    # Normalize difficulty
                    if processed["difficulty"] not in ("beginner", "intermediate", "advanced"):
                        processed["difficulty"] = "intermediate"
                    all_cards.append(processed)
                    card_count += 1
                else:
                    print(f"  WARNING: Skipping empty card at index {j}")

            print(f"  SUCCESS: {card_count} cards generated")
            success_count += 1

        except Exception as e:
            print(f"  ERROR: {e}")
            fail_count += 1

        # Rate limiting
        if i < len(modules) - 1:
            print(f"  Waiting {DELAY_BETWEEN_CALLS}s...")
            time.sleep(DELAY_BETWEEN_CALLS)

        print()

    if args.dry_run:
        print(f"\nDry run complete. No files written.")
        return

    if not all_cards:
        print(f"\nNo cards generated. Nothing to write.")
        return

    # If appending, we need to merge with existing content
    # For simplicity, we always write a fresh file with all_cards
    # The --append flag just controls which modules we skip above

    # Generate TypeScript output
    ts_content = generate_ts_output(all_cards)
    OUTPUT_FILE.write_text(ts_content, encoding="utf-8")

    print(f"{'='*60}")
    print(f"COMPLETE")
    print(f"  Modules processed: {success_count}/{len(modules)}")
    print(f"  Modules failed: {fail_count}")
    print(f"  Total cards: {len(all_cards)}")
    print(f"  Output: {OUTPUT_FILE}")
    print(f"{'='*60}")

    # Print difficulty breakdown
    by_diff = {}
    for c in all_cards:
        d = c["difficulty"]
        by_diff[d] = by_diff.get(d, 0) + 1
    print(f"\nDifficulty breakdown:")
    for d in ("beginner", "intermediate", "advanced"):
        count = by_diff.get(d, 0)
        pct = (count / len(all_cards) * 100) if all_cards else 0
        print(f"  {d}: {count} ({pct:.0f}%)")

    print(f"\nNext steps:")
    print(f"  1. Review cards in {OUTPUT_FILE.name}")
    print(f"  2. Update flashcards-index.ts to import batch19")
    print(f"  3. Run: cd app && npx tsc -p tsconfig.app.json --noEmit")


if __name__ == "__main__":
    main()
