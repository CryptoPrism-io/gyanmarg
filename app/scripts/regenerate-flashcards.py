#!/usr/bin/env python3
"""
Regenerate all flashcards to ultra-concise 2-liner format using Gemini API.

Target Format:
- Front: <80 chars (1 line question)
- Back: <200 chars (2 lines max, concise answer)

Usage:
    python regenerate-flashcards.py [--dry-run] [--limit N]

Environment:
    Requires GEMINI_API_KEY environment variable
"""

import os
import re
import json
import time
import argparse
from pathlib import Path
from typing import Dict, List, Any

try:
    from google import genai
    from google.genai import types
except ImportError:
    print("ERROR: google-genai not installed")
    print("Install with: pip install google-genai")
    exit(1)

# Load .env file if python-dotenv is available
try:
    from dotenv import load_dotenv
    # Load from app/.env
    env_path = Path(__file__).parent.parent / '.env'
    if env_path.exists():
        load_dotenv(env_path)
except ImportError:
    pass  # python-dotenv not installed, will try environment variable

# Gemini API configuration
API_KEY = os.getenv('GEMINI_API_KEY')
if not API_KEY:
    print("ERROR: GEMINI_API_KEY not found")
    print("Either:")
    print("  1. Set environment variable: export GEMINI_API_KEY=your_key")
    print("  2. Add to app/.env file: GEMINI_API_KEY=your_key")
    exit(1)

# Initialize Gemini client (new SDK pattern)
client = genai.Client(api_key=API_KEY)
# Use Gemini 2.0 Flash for text generation (stable, fast, cheap)
MODEL_NAME = 'gemini-2.0-flash'

# Paths
SCRIPT_DIR = Path(__file__).parent
DATA_DIR = SCRIPT_DIR.parent / 'src' / 'data'

# Cost estimation (Gemini 2.0 Flash pricing as of Feb 2026)
COST_PER_1M_INPUT_TOKENS = 0.075  # $0.075 per 1M input tokens
COST_PER_1M_OUTPUT_TOKENS = 0.30  # $0.30 per 1M output tokens
EST_TOKENS_PER_CARD = 150  # Rough estimate for input + output


PROMPT_TEMPLATE = """Convert this flashcard to ultra-concise 2-liner format.

STRICT RULES:
- Front: Maximum 80 characters, 1 line question/prompt
- Back: Maximum 200 characters total, maximum 2 lines, action-focused answer
- Keep core concept intact but be ruthlessly concise
- Use active voice, remove filler words
- Preserve technical accuracy
- NO bullet points on back (use semicolons if listing)

PRESERVE UNCHANGED:
- ID: {id}
- Category: {category}
- Tags: {tags}
- Difficulty: {difficulty}

CURRENT CARD:
Front: {front}
Back: {back}

OUTPUT FORMAT (valid JSON only):
{{"front": "...", "back": "..."}}

Respond with ONLY the JSON, no explanation."""


def extract_flashcard_batches() -> List[Path]:
    """Find all flashcard batch files."""
    # Match patterns like: flashcards-batch16-cognitive.ts, flashcards-batch2-python.ts, etc.
    batch_files = list(DATA_DIR.glob('flashcards-batch*.ts'))
    # Exclude index files
    batch_files = [f for f in batch_files if 'index' not in f.name and f.name.startswith('flashcards-batch')]
    return sorted(batch_files)


def parse_flashcard_file(file_path: Path) -> Dict[str, Any]:
    """Parse TypeScript flashcard file to extract cards."""
    content = file_path.read_text(encoding='utf-8')

    # Extract the array content (everything between [ and ];)
    # Matches: export const xxxFlashcards = [ ... ];
    array_match = re.search(r'export const \w+Flashcards(?:Batch\d+)?: SpacedRepetitionCard\[\] = (\[[\s\S]+?\]);', content)
    if not array_match:
        raise ValueError(f"Could not find flashcard array in {file_path}")

    array_content = array_match.group(1)

    # Parse individual card objects - simpler approach
    # Split by card boundaries (look for id: pattern)
    card_splits = re.split(r'(?=\{\s*id:)', array_content)

    cards = []
    for card_text in card_splits:
        if not card_text.strip() or 'id:' not in card_text:
            continue

        # Extract each field individually
        id_match = re.search(r"id:\s*['\"]([^'\"]+)['\"]", card_text)
        front_match = re.search(r"front:\s*['\"]([^'\"]*(?:\\.[^'\"]*)*?)['\"]", card_text, re.DOTALL)
        back_match = re.search(r"back:\s*['\"]([^'\"]*(?:\\.[^'\"]*)*?)['\"]", card_text, re.DOTALL)
        category_match = re.search(r"category:\s*['\"]([^'\"]+)['\"]", card_text)
        source_match = re.search(r"source:\s*['\"]([^'\"]+)['\"]", card_text)
        pathway_match = re.search(r"pathwayId:\s*['\"]([^'\"]+)['\"]", card_text)
        tags_match = re.search(r"tags:\s*(\[[^\]]+\])", card_text)
        difficulty_match = re.search(r"difficulty:\s*['\"]([^'\"]+)['\"]", card_text)

        if not all([id_match, front_match, back_match, category_match, tags_match, difficulty_match]):
            continue

        card_id = id_match.group(1)
        front = front_match.group(1).replace("\\'", "'").replace('\\"', '"')
        back = back_match.group(1).replace("\\'", "'").replace('\\"', '"')
        category = category_match.group(1)
        source = source_match.group(1) if source_match else None
        pathway_id = pathway_match.group(1) if pathway_match else None
        tags_str = tags_match.group(1)
        difficulty = difficulty_match.group(1)

        cards.append({
            'id': card_id,
            'front': front,
            'back': back,
            'category': category,
            'source': source,
            'pathwayId': pathway_id,
            'tags': tags_str,
            'difficulty': difficulty,
            'original_match': card_text.strip().rstrip(',')
        })

    return {
        'file_path': file_path,
        'content': content,
        'cards': cards
    }


def regenerate_card(card: Dict[str, Any], dry_run: bool = False) -> Dict[str, str]:
    """Regenerate a single card using Gemini API."""
    if dry_run:
        return {
            'front': card['front'][:80],
            'back': card['back'][:200]
        }

    prompt = PROMPT_TEMPLATE.format(
        id=card['id'],
        category=card['category'],
        tags=card['tags'],
        difficulty=card['difficulty'],
        front=card['front'],
        back=card['back']
    )

    try:
        # Use new SDK pattern for text generation
        contents = [
            types.Content(
                role="user",
                parts=[types.Part.from_text(text=prompt)],
            ),
        ]

        response = client.models.generate_content(
            model=MODEL_NAME,
            contents=contents,
        )
        result_text = response.text.strip()

        # Extract JSON from markdown code blocks if present
        if '```json' in result_text:
            result_text = re.search(r'```json\s*(\{.*?\})\s*```', result_text, re.DOTALL).group(1)
        elif '```' in result_text:
            result_text = re.search(r'```\s*(\{.*?\})\s*```', result_text, re.DOTALL).group(1)

        result = json.loads(result_text)

        # Validate lengths
        if len(result['front']) > 80:
            print(f"  ⚠️  Front too long ({len(result['front'])} chars): {card['id']}")
        if len(result['back']) > 200:
            print(f"  ⚠️  Back too long ({len(result['back'])} chars): {card['id']}")

        return result

    except Exception as e:
        print(f"  ❌ Error regenerating {card['id']}: {e}")
        # Fallback: truncate original
        return {
            'front': card['front'][:80],
            'back': card['back'][:200]
        }


def escape_for_typescript(text: str) -> str:
    """Escape text for TypeScript single-quoted string."""
    # Replace single quotes with escaped quotes
    text = text.replace("'", "\\'")
    # Escape backslashes that aren't already escaping quotes
    text = re.sub(r'\\(?![\'\"])', r'\\\\', text)
    return text


def regenerate_batch_file(file_data: Dict[str, Any], dry_run: bool = False, limit: int = None) -> str:
    """Regenerate all cards in a batch file."""
    cards = file_data['cards']
    if limit:
        cards = cards[:limit]

    print(f"\n📝 Processing {file_data['file_path'].name} ({len(cards)} cards)...")

    new_content = file_data['content']
    total_cards = len(cards)

    for i, card in enumerate(cards, 1):
        print(f"  [{i}/{total_cards}] {card['id']}...", end=' ')

        # Regenerate card
        new_card = regenerate_card(card, dry_run)

        # Create new card object text (preserve source and pathwayId if present)
        new_card_obj = f"{{\n    id: '{card['id']}',\n"
        new_card_obj += f"    front: '{escape_for_typescript(new_card['front'])}',\n"
        new_card_obj += f"    back: '{escape_for_typescript(new_card['back'])}',\n"
        new_card_obj += f"    category: '{card['category']}',\n"

        if card.get('source'):
            new_card_obj += f"    source: '{card['source']}',\n"

        if card.get('pathwayId'):
            new_card_obj += f"    pathwayId: '{card['pathwayId']}',\n"

        new_card_obj += f"    difficulty: '{card['difficulty']}',\n"
        new_card_obj += f"    tags: {card['tags']}\n"
        new_card_obj += f"  }}"

        # Replace in content
        new_content = new_content.replace(card['original_match'], new_card_obj)

        print("✅")

        # Rate limiting (Gemini free tier: 15 RPM)
        if not dry_run and i < total_cards:
            time.sleep(4.2)  # ~14 requests per minute

    return new_content


def estimate_cost(total_cards: int) -> float:
    """Estimate API cost in USD."""
    total_tokens = total_cards * EST_TOKENS_PER_CARD
    input_cost = (total_tokens * 0.6) / 1_000_000 * COST_PER_1M_INPUT_TOKENS
    output_cost = (total_tokens * 0.4) / 1_000_000 * COST_PER_1M_OUTPUT_TOKENS
    return input_cost + output_cost


def main():
    parser = argparse.ArgumentParser(description='Regenerate flashcards to 2-liner format')
    parser.add_argument('--dry-run', action='store_true', help='Preview without API calls')
    parser.add_argument('--limit', type=int, help='Limit cards per file (for testing)')
    parser.add_argument('--files', nargs='+', help='Specific batch files to process (e.g., batch-1.ts)')
    parser.add_argument('--yes', '-y', action='store_true', help='Skip confirmation prompt')
    args = parser.parse_args()

    # Find all batch files
    all_batch_files = extract_flashcard_batches()

    if args.files:
        # Filter to specific files
        batch_files = [f for f in all_batch_files if f.name in args.files]
        if not batch_files:
            print(f"ERROR: No matching files found. Available: {[f.name for f in all_batch_files]}")
            return
    else:
        batch_files = all_batch_files

    print(f"🔍 Found {len(batch_files)} flashcard batch files")

    # Parse all files to count cards
    all_file_data = []
    total_cards = 0

    for batch_file in batch_files:
        try:
            file_data = parse_flashcard_file(batch_file)
            all_file_data.append(file_data)
            card_count = len(file_data['cards'])
            if args.limit:
                card_count = min(card_count, args.limit)
            total_cards += card_count
        except Exception as e:
            print(f"❌ Error parsing {batch_file.name}: {e}")
            continue

    print(f"📊 Total cards to regenerate: {total_cards}")

    # Cost estimation
    if not args.dry_run:
        estimated_cost = estimate_cost(total_cards)
        print(f"💰 Estimated API cost: ${estimated_cost:.4f}")
        print(f"⏱️  Estimated time: {total_cards * 4.5 / 60:.1f} minutes (rate limited)")

        if not args.yes:
            confirm = input(f"\nProceed with regeneration? (yes/no): ")
            if confirm.lower() not in ['yes', 'y']:
                print("Aborted.")
                return
        else:
            print("✅ Auto-confirmed with --yes flag")

    # Process each file
    for file_data in all_file_data:
        new_content = regenerate_batch_file(file_data, args.dry_run, args.limit)

        if not args.dry_run:
            # Write back to file
            file_data['file_path'].write_text(new_content, encoding='utf-8')
            print(f"  ✅ Saved {file_data['file_path'].name}")
        else:
            print(f"  ℹ️  Dry run - {file_data['file_path'].name} not modified")

    print("\n✨ Regeneration complete!")
    print("\n📋 Next steps:")
    print("  1. Review a sample of regenerated cards for quality")
    print("  2. Run: python app/scripts/fix-apostrophes.py")
    print("  3. Build and test: cd app && npm run build")
    print("  4. Update FlashCard component heights for 2-liner format")


if __name__ == '__main__':
    main()
