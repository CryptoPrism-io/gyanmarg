#!/usr/bin/env python3
"""
Polymind Comprehensive Flashcard Generator (Gemini)
====================================================
Uses Gemini 2.5 Flash to generate 35 premium retention-focused flashcards
for EVERY module (76 total). Replaces the fragmented batch system.

Usage:
  python scripts/generate-all-flashcards-gemini.py           # Generate all
  python scripts/generate-all-flashcards-gemini.py --module bhagavad-gita
  python scripts/generate-all-flashcards-gemini.py --dry-run
  python scripts/generate-all-flashcards-gemini.py --append   # Skip already-done modules
  python scripts/generate-all-flashcards-gemini.py --batch 1  # Run batch 1 of 4 (~19 modules)

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
DELAY_BETWEEN_CALLS = 3  # seconds (conservative for 76 modules)
CARDS_PER_MODULE = 35

SCRIPT_DIR = Path(__file__).parent
APP_DIR = SCRIPT_DIR.parent
PATHWAYS_DIR = APP_DIR / "src" / "data" / "pathways"
OUTPUT_FILE = APP_DIR / "src" / "data" / "flashcards-gemini-all.ts"

# ============================================================
# ALL 76 MODULES
# ============================================================

MODULES = [
    # --- Original 16 (use direct pathway files or -expanded.ts) ---
    {"id": "personal-development",  "prefix": "pd",      "category": "Mind & Performance",    "name": "Personal Development",       "files": ["personal-development.ts"]},
    {"id": "ai-ml",                 "prefix": "aiml",    "category": "Technology & Code",     "name": "AI & Machine Learning",      "files": ["ai-ml.ts", "ai-ml-expanded.ts"]},
    {"id": "wealth-building",       "prefix": "wb",      "category": "Wealth & Power",        "name": "Wealth Building",            "files": ["wealth-building.ts", "wealth-investing.ts", "wealth-business.ts", "wealth-realestate.ts", "wealth-tax.ts", "wealth-psychology.ts", "wealth-fire.ts", "wealth-billionaire.ts"]},
    {"id": "negotiation",           "prefix": "neg",     "category": "Wealth & Power",        "name": "Negotiation & Influence",    "files": ["negotiation.ts", "negotiation-expanded.ts", "negotiation-fbi-advanced.ts"]},
    {"id": "bruce-lee",             "prefix": "blee",    "category": "Mind & Performance",    "name": "Bruce Lee Philosophy",       "files": ["bruce-lee.ts", "bruce-lee-expanded.ts"]},
    {"id": "blockchain",            "prefix": "bc",      "category": "Technology & Code",     "name": "Blockchain & Web3",          "files": ["blockchain.ts", "blockchain-expanded.ts", "blockchain-advanced-2026.ts"]},
    {"id": "psychology",            "prefix": "psy",     "category": "Mind & Performance",    "name": "Psychology & Decisions",      "files": ["psychology.ts", "psychology-expanded.ts"]},
    {"id": "python-data",           "prefix": "pyds",    "category": "Technology & Code",     "name": "Python & Data Science",      "files": ["python-data.ts", "python-data-expanded.ts"]},
    {"id": "life-design",           "prefix": "ld",      "category": "Mind & Performance",    "name": "Life Design & Independence", "files": ["life-design.ts", "life-design-expanded.ts"]},
    {"id": "master-synthesis",      "prefix": "ms",      "category": "Synthesis & Mastery",   "name": "Master Synthesis",           "files": ["master-synthesis.ts", "master-synthesis-expanded.ts"]},
    {"id": "brain-neuroscience",    "prefix": "brain",   "category": "Mind & Performance",    "name": "Brain & Neuroscience",       "files": ["brain.ts", "brain-mastery.ts"]},
    {"id": "body-longevity",        "prefix": "body",    "category": "Spirit & Body",         "name": "Body & Longevity",           "files": ["body-longevity.ts"]},
    {"id": "spirituality-sadhana",  "prefix": "spirit",  "category": "Spirit & Body",         "name": "Spirituality & Sadhana",     "files": ["spirituality-sadhana.ts"]},
    {"id": "shiva-shakti",          "prefix": "shakti",  "category": "Bharat Wisdom",         "name": "Shiva-Shakti Philosophy",    "files": ["shiva-shakti.ts"]},
    {"id": "temple-science",        "prefix": "temple",  "category": "Bharat Wisdom",         "name": "Temple Science",             "files": ["temple-science.ts"]},
    {"id": "polymath-mastery",      "prefix": "poly",    "category": "Synthesis & Mastery",   "name": "Polymath Mastery",           "files": ["polymath-mastery.ts"]},

    # --- Modules 17-76 (use -lessons.ts pattern) ---
    {"id": "finance-investing",     "prefix": "fi",      "category": "Finance & Markets",     "name": "Finance & Investing"},
    {"id": "astronomy",             "prefix": "astro",   "category": "Science & Universe",    "name": "Astronomy & Cosmos"},
    {"id": "physics-engineering",   "prefix": "phys",    "category": "Science & Universe",    "name": "Physics & Engineering"},
    {"id": "writing-storytelling",  "prefix": "ws",      "category": "Creative Arts",         "name": "Writing & Storytelling"},
    {"id": "music-sound",           "prefix": "mus",     "category": "Creative Arts",         "name": "Music & Sound"},
    {"id": "strategic-thinking",    "prefix": "strat",   "category": "Strategy & Systems",    "name": "Strategic Thinking"},
    {"id": "systems-complexity",    "prefix": "sys",     "category": "Strategy & Systems",    "name": "Systems & Complexity"},
    {"id": "history-civilizations", "prefix": "hist",    "category": "History & Culture",     "name": "History & Civilizations"},
    {"id": "western-philosophy",    "prefix": "wphil",   "category": "History & Culture",     "name": "Western Philosophy"},
    {"id": "design-thinking",       "prefix": "dsgn",    "category": "Practical Mastery",     "name": "Design Thinking"},
    {"id": "cybersecurity",         "prefix": "csec",    "category": "Technology & Code",     "name": "Cybersecurity"},
    {"id": "startups-innovation",   "prefix": "start",   "category": "Wealth & Power",        "name": "Startups & Innovation"},
    {"id": "relationships-social",  "prefix": "rel",     "category": "Relationships & Society","name": "Relationships & Social Intelligence"},
    {"id": "geopolitics",           "prefix": "geo",     "category": "History & Culture",     "name": "Geopolitics"},
    {"id": "communication-rhetoric","prefix": "comm",    "category": "Relationships & Society","name": "Communication & Rhetoric"},
    {"id": "ayurveda",              "prefix": "ayur",    "category": "Bharat Wisdom",         "name": "Ayurveda"},
    {"id": "mathematics-patterns",  "prefix": "math",    "category": "Science & Universe",    "name": "Mathematics & Patterns"},
    {"id": "emotional-intelligence","prefix": "eq",      "category": "Mind & Performance",    "name": "Emotional Intelligence"},
    {"id": "web-development",       "prefix": "webdev",  "category": "Technology & Code",     "name": "Web Development"},
    {"id": "cloud-devops",          "prefix": "cdev",    "category": "Technology & Code",     "name": "Cloud & DevOps"},
    {"id": "sales-mastery",         "prefix": "sales",   "category": "Wealth & Power",        "name": "Sales Mastery"},
    {"id": "personal-branding",     "prefix": "pbrand",  "category": "Wealth & Power",        "name": "Personal Branding"},
    {"id": "entrepreneurship-101",  "prefix": "ent",     "category": "Wealth & Power",        "name": "Entrepreneurship 101",       "files": ["entrepreneurship-lessons.ts"]},
    {"id": "technical-analysis",    "prefix": "ta",      "category": "Finance & Markets",     "name": "Technical Analysis"},
    {"id": "options-trading",       "prefix": "opt",     "category": "Finance & Markets",     "name": "Options Trading"},
    {"id": "macro-economics",       "prefix": "macro",   "category": "Finance & Markets",     "name": "Macro Economics"},
    {"id": "crypto-trading",        "prefix": "crypto",  "category": "Finance & Markets",     "name": "Crypto Trading"},
    {"id": "yoga-philosophy",       "prefix": "yoga",    "category": "Spirit & Body",         "name": "Yoga Philosophy"},
    {"id": "mental-models",         "prefix": "mm",      "category": "Synthesis & Mastery",   "name": "Mental Models"},
    {"id": "first-principles",      "prefix": "fp",      "category": "Synthesis & Mastery",   "name": "First Principles"},
    {"id": "meta-learning",         "prefix": "meta",    "category": "Mind & Performance",    "name": "Meta-Learning"},
    {"id": "biology-evolution",     "prefix": "bio",     "category": "Science & Universe",    "name": "Biology & Evolution"},
    {"id": "quantum-mechanics",     "prefix": "qm",      "category": "Science & Universe",    "name": "Quantum Mechanics"},
    {"id": "earth-sciences",        "prefix": "earth",   "category": "Science & Universe",    "name": "Earth Sciences"},
    {"id": "creative-writing",      "prefix": "cw",      "category": "Creative Arts",         "name": "Creative Writing"},
    {"id": "content-creation",      "prefix": "cc",      "category": "Creative Arts",         "name": "Content Creation"},
    {"id": "world-building",        "prefix": "world",   "category": "Creative Arts",         "name": "World-Building"},
    {"id": "game-theory",           "prefix": "gt",      "category": "Strategy & Systems",    "name": "Game Theory"},
    {"id": "decision-making",       "prefix": "dm",      "category": "Strategy & Systems",    "name": "Decision Making"},
    {"id": "risk-management",       "prefix": "risk",    "category": "Strategy & Systems",    "name": "Risk Management"},
    {"id": "ancient-empires",       "prefix": "ae",      "category": "History & Culture",     "name": "Ancient Empires"},
    {"id": "modern-history",        "prefix": "mhist",   "category": "History & Culture",     "name": "Modern History"},
    {"id": "cultural-anthropology", "prefix": "cult",    "category": "History & Culture",     "name": "Cultural Anthropology"},
    {"id": "leadership",            "prefix": "lead",    "category": "Practical Mastery",     "name": "Leadership"},
    {"id": "problem-solving",       "prefix": "solve",   "category": "Practical Mastery",     "name": "Problem Solving"},
    {"id": "productivity-systems",  "prefix": "prod",    "category": "Practical Mastery",     "name": "Productivity Systems"},
    {"id": "dating-attraction",     "prefix": "da",      "category": "Relationships & Society","name": "Dating & Attraction"},
    {"id": "networking",            "prefix": "net",     "category": "Relationships & Society","name": "Networking"},
    {"id": "parenting",             "prefix": "par",     "category": "Relationships & Society","name": "Parenting"},
    {"id": "social-intelligence",   "prefix": "si",      "category": "Relationships & Society","name": "Social Intelligence"},
    {"id": "stoicism",              "prefix": "stoic",   "category": "Ancient Wisdom",        "name": "Stoicism"},
    {"id": "eastern-philosophy",    "prefix": "east",    "category": "Ancient Wisdom",        "name": "Eastern Philosophy"},
    {"id": "vedic-wisdom",          "prefix": "vedic",   "category": "Ancient Wisdom",        "name": "Vedic Wisdom"},
    {"id": "mythology",             "prefix": "myth",    "category": "Ancient Wisdom",        "name": "World Mythology"},
    {"id": "bhagavad-gita",         "prefix": "gita",    "category": "Bharat Wisdom",         "name": "Bhagavad Gita"},
    {"id": "ramayana-mahabharata",  "prefix": "rama",    "category": "Bharat Wisdom",         "name": "Ramayana & Mahabharata"},
    {"id": "upanishads",            "prefix": "upan",    "category": "Bharat Wisdom",         "name": "Upanishads"},
    {"id": "shiv-sutras",           "prefix": "shiv",    "category": "Bharat Wisdom",         "name": "Shiv Sutras & Tantra"},
    {"id": "sanskrit-mantras",      "prefix": "skt",     "category": "Bharat Wisdom",         "name": "Sanskrit & Mantras"},
    {"id": "jyotish-vastu",         "prefix": "jv",      "category": "Bharat Wisdom",         "name": "Jyotish & Vastu"},
]

# ============================================================
# GEMINI PROMPT
# ============================================================

SYSTEM_PROMPT = """You are a master educator creating spaced repetition flashcards for long-term retention.
You will receive the full lesson content for a learning module. Your job is to distill the most important, retention-worthy concepts into flashcards.

Requirements:
- Test genuinely useful concepts, not trivia
- Front: Clear, specific question that makes the learner think deeply (15-30 words)
- Back: Concise answer (1-3 sentences max) that teaches, not just states
- Mix difficulty: ~30% beginner, ~40% intermediate, ~30% advanced
- Focus on: core principles, cross-topic connections, practical application, counterintuitive insights, memorable frameworks
- Avoid: yes/no questions, pure definitions, anything easily googleable in 2 seconds
- Each card should be self-contained (understandable without reading the lessons)
- Vary question styles: "Why does X matter?", "What happens when Y?", "How does A connect to B?", "What's the key difference between X and Y?", "If you could only remember one thing about X, what would it be?"

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
- Tags should be 2-4 lowercase hyphenated keywords relevant to the card content
- Cover ALL levels/topics in the module, not just the first few"""


def build_user_prompt(module_name: str, num_cards: int, content: str) -> str:
    return f"""Module: {module_name}

Create exactly {num_cards} premium flashcards from this module's lesson content.
Make sure to cover content from ALL levels in the module, not just the beginning.
Prioritize the most impactful, retention-worthy ideas across the entire curriculum.

--- BEGIN LESSON CONTENT ---
{content}
--- END LESSON CONTENT ---

Remember: Output ONLY the JSON array, no code fences, no explanation."""


# ============================================================
# HELPERS
# ============================================================

def read_module_content(module: dict) -> str | None:
    """Read all lesson files for a module and return combined content."""
    files = module.get("files")

    if files:
        # Explicit file list (original 16 modules with custom file patterns)
        all_content = []
        for f in files:
            filepath = PATHWAYS_DIR / f
            if filepath.exists():
                all_content.append(filepath.read_text(encoding="utf-8"))
        if all_content:
            content = "\n\n".join(all_content)
        else:
            print(f"  WARNING: No files found for {module['id']}")
            return None
    else:
        # Standard -lessons.ts pattern
        lesson_file = PATHWAYS_DIR / f"{module['id']}-lessons.ts"
        if not lesson_file.exists():
            print(f"  WARNING: Lesson file not found: {lesson_file.name}")
            return None
        content = lesson_file.read_text(encoding="utf-8")

    # Truncate if too large (keep first 250K chars)
    if len(content) > 250_000:
        content = content[:250_000] + "\n\n... [truncated for length]"
        print(f"  Note: Content truncated to 250K chars")

    return content


def fix_json_escaping(text: str) -> str:
    """Fix common JSON escaping issues from Gemini output."""
    lines = text.split('\n')
    fixed_lines = []
    for line in lines:
        match = re.match(r'^(\s*"(?:front|back|difficulty)"\s*:\s*")(.*?)(",?\s*)$', line, re.DOTALL)
        if match:
            prefix, value, suffix = match.groups()
            value = value.replace('\\"', '\x00')
            value = value.replace('"', '\\"')
            value = value.replace('\x00', '\\"')
            line = prefix + value + suffix
        fixed_lines.append(line)
    return '\n'.join(fixed_lines)


def extract_json_from_response(text: str) -> list | None:
    """Extract JSON array from Gemini response."""
    text = text.strip()
    if text.startswith("```"):
        text = re.sub(r'^```\w*\n?', '', text)
        text = re.sub(r'\n?```$', '', text)
        text = text.strip()

    # Handle truncation
    stripped = text.rstrip()
    if not stripped.endswith(']'):
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

    # Try direct parse
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

    # Try to find array
    match = re.search(r'\[[\s\S]*\]', text)
    if match:
        try:
            return json.loads(match.group())
        except json.JSONDecodeError:
            fixed_match = fix_json_escaping(match.group())
            try:
                return json.loads(fixed_match)
            except json.JSONDecodeError as e:
                print(f"  ERROR: Failed to parse JSON: {e}")
                return None

    print(f"  ERROR: No JSON array found in response")
    return None


def escape_ts_string(s: str) -> str:
    """Escape a string for use in TypeScript single-quoted strings."""
    s = s.replace("\\", "\\\\")
    s = s.replace("'", "\\'")
    s = s.replace("\n", "\\n")
    s = s.replace("\r", "")
    return s


def generate_ts_output(all_cards: list[dict]) -> str:
    """Generate the TypeScript output file content."""
    # Group cards by category for organized output
    by_category = {}
    for card in all_cards:
        cat = card["category"]
        if cat not in by_category:
            by_category[cat] = []
        by_category[cat].append(card)

    lines = [
        "import type { SpacedRepetitionCard } from '@/types';",
        "",
        "/**",
        " * Gemini-Generated Premium Flashcards (All Modules)",
        f" * {len(all_cards)} cards across {len(set(c['pathwayId'] for c in all_cards))} modules",
        " * Generated with Gemini 2.5 Flash for maximum retention value",
        f" * Generated: {time.strftime('%Y-%m-%d')}",
        " */",
        "",
        "export const geminiFlashcards: SpacedRepetitionCard[] = [",
    ]

    current_pathway = None
    for card in all_cards:
        if card["pathwayId"] != current_pathway:
            current_pathway = card["pathwayId"]
            lines.append(f"")
            lines.append(f"  // === {card['category']}: {card['pathwayId']} ===")

        safe_tags = [t.replace("'", "").replace("\\", "") for t in card["tags"]]
        tags_str = ", ".join(f"'{t}'" for t in safe_tags[:4])  # Max 4 tags
        lines.append("  {")
        lines.append(f"    id: '{card['id']}',")
        lines.append(f"    front: '{escape_ts_string(card['front'])}',")
        lines.append(f"    back: '{escape_ts_string(card['back'])}',")
        lines.append(f"    category: '{escape_ts_string(card['category'])}',")
        lines.append(f"    source: 'Gemini Premium',")
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
    parser = argparse.ArgumentParser(description="Generate flashcards for all 76 modules via Gemini")
    parser.add_argument("--module", type=str, help="Generate for a single module ID")
    parser.add_argument("--dry-run", action="store_true", help="Preview without API calls")
    parser.add_argument("--append", action="store_true", help="Skip modules already in output file")
    parser.add_argument("--batch", type=int, choices=[1,2,3,4], help="Run batch 1-4 (~19 modules each)")
    parser.add_argument("--cards", type=int, default=CARDS_PER_MODULE, help=f"Cards per module (default: {CARDS_PER_MODULE})")
    args = parser.parse_args()

    num_cards = args.cards

    # Filter modules
    modules = MODULES
    if args.module:
        modules = [m for m in MODULES if m["id"] == args.module]
        if not modules:
            print(f"Error: Module '{args.module}' not found.")
            print(f"Available: {', '.join(m['id'] for m in MODULES)}")
            sys.exit(1)

    if args.batch:
        batch_size = len(MODULES) // 4 + 1
        start = (args.batch - 1) * batch_size
        end = min(start + batch_size, len(MODULES))
        modules = MODULES[start:end]
        print(f"Batch {args.batch}: modules {start+1}-{end} ({len(modules)} modules)")

    # Check for already-generated modules in append mode
    existing_pathways = set()
    if args.append and OUTPUT_FILE.exists():
        existing_content = OUTPUT_FILE.read_text(encoding="utf-8")
        for match in re.finditer(r"pathwayId:\s*'([^']+)'", existing_content):
            existing_pathways.add(match.group(1))
        print(f"Append mode: {len(existing_pathways)} modules already generated\n")

    print(f"{'='*60}")
    print(f"Polymind Flashcard Generator (All Modules)")
    print(f"Model: {MODEL_NAME}")
    print(f"Modules: {len(modules)}")
    print(f"Cards per module: {num_cards}")
    print(f"Expected total: ~{len(modules) * num_cards}")
    print(f"Output: {OUTPUT_FILE}")
    print(f"{'='*60}\n")

    # Initialize Gemini client
    client = genai.Client(api_key=GEMINI_API_KEY)

    all_cards = []
    success_count = 0
    fail_count = 0
    skip_count = 0

    for i, module in enumerate(modules):
        module_id = module["id"]
        module_name = module["name"]
        prefix = module["prefix"]
        category = module["category"]

        print(f"[{i+1}/{len(modules)}] {module_name} ({module_id})")

        # Skip if already generated
        if module_id in existing_pathways:
            print(f"  SKIP (already in output)\n")
            skip_count += 1
            continue

        # Read content
        content = read_module_content(module)
        if not content:
            fail_count += 1
            print()
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
                debug_file = SCRIPT_DIR / f"debug-{module_id}.txt"
                debug_file.write_text(raw_text, encoding="utf-8")
                print(f"  Debug saved: {debug_file.name}")
                continue

            # Process cards
            card_count = 0
            for j, card in enumerate(cards):
                card_id = f"gem-{prefix}-{j+1:03d}"
                processed = {
                    "id": card_id,
                    "front": card.get("front", "").strip(),
                    "back": card.get("back", "").strip(),
                    "category": category,
                    "pathwayId": module_id,
                    "difficulty": card.get("difficulty", "intermediate").lower().strip(),
                    "tags": [t.strip().lower() for t in card.get("tags", []) if isinstance(t, str)],
                }
                # Validate
                if processed["front"] and processed["back"]:
                    if processed["difficulty"] not in ("beginner", "intermediate", "advanced"):
                        processed["difficulty"] = "intermediate"
                    all_cards.append(processed)
                    card_count += 1

            print(f"  SUCCESS: {card_count} cards")
            success_count += 1

        except Exception as e:
            print(f"  ERROR: {e}")
            fail_count += 1

        # Rate limiting
        if i < len(modules) - 1:
            time.sleep(DELAY_BETWEEN_CALLS)

        print()

    if args.dry_run:
        print(f"\nDry run complete. No files written.")
        return

    if not all_cards:
        print(f"\nNo cards generated. Nothing to write.")
        return

    # If appending, load existing cards and merge
    if args.append and OUTPUT_FILE.exists():
        print("Merging with existing cards...")
        existing_content = OUTPUT_FILE.read_text(encoding="utf-8")
        # Parse existing cards from TS (rough but works)
        existing_ids = set()
        for match in re.finditer(r"id:\s*'([^']+)'", existing_content):
            existing_ids.add(match.group(1))

        # We need to regenerate the full file. Parse existing cards from TS.
        # Easier approach: read existing, extract card blocks, merge
        # For simplicity, just write new cards to a separate temp file
        merge_file = OUTPUT_FILE.with_name("flashcards-gemini-new.ts")
        ts_content = generate_ts_output(all_cards)
        merge_file.write_text(ts_content, encoding="utf-8")
        print(f"\nNew cards written to: {merge_file.name}")
        print(f"Merge manually with {OUTPUT_FILE.name}")
    else:
        # Write full output
        ts_content = generate_ts_output(all_cards)
        OUTPUT_FILE.write_text(ts_content, encoding="utf-8")

    print(f"\n{'='*60}")
    print(f"COMPLETE")
    print(f"  Modules success: {success_count}")
    print(f"  Modules failed:  {fail_count}")
    print(f"  Modules skipped: {skip_count}")
    print(f"  Total cards:     {len(all_cards)}")
    print(f"  Output:          {OUTPUT_FILE}")
    print(f"{'='*60}")

    # Difficulty breakdown
    by_diff = {}
    for c in all_cards:
        d = c["difficulty"]
        by_diff[d] = by_diff.get(d, 0) + 1
    print(f"\nDifficulty breakdown:")
    for d in ("beginner", "intermediate", "advanced"):
        count = by_diff.get(d, 0)
        pct = (count / len(all_cards) * 100) if all_cards else 0
        print(f"  {d}: {count} ({pct:.0f}%)")

    # Per-module breakdown
    by_module = {}
    for c in all_cards:
        by_module[c["pathwayId"]] = by_module.get(c["pathwayId"], 0) + 1
    print(f"\nPer-module card counts:")
    for mid, count in sorted(by_module.items()):
        print(f"  {mid}: {count}")

    print(f"\nNext steps:")
    print(f"  1. Review cards: {OUTPUT_FILE.name}")
    print(f"  2. Update flashcards-index.ts to import geminiFlashcards")
    print(f"  3. Build: cd app && npx tsc -p tsconfig.app.json --noEmit")


if __name__ == "__main__":
    main()
