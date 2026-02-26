#!/usr/bin/env python3
"""
Polymind Library Image Generator
=================================
Generates library-themed images for the "Infinite Library" repositioning.
Replaces old retention/forgetting imagery with vast library and exploration visuals.

Usage:
  python scripts/generate-library-images.py [--all | --landing | --onboarding]

Requires:
  pip install google-genai python-dotenv pillow
"""

import os
import sys
import time
import argparse
from pathlib import Path
from io import BytesIO

try:
    from google import genai
    from google.genai import types
    from dotenv import load_dotenv
    from PIL import Image
except ImportError:
    print("Missing dependencies. Install with:")
    print("  pip install google-genai python-dotenv pillow")
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

MODEL_NAME = "gemini-2.5-flash-image"
ASPECT_RATIO = "16:9"

SCRIPT_DIR = Path(__file__).parent
APP_DIR = SCRIPT_DIR.parent
ASSETS_DIR = APP_DIR / "src" / "assets" / "ai-images"

OUTPUT_DIRS = {
    "landing": ASSETS_DIR / "landing",
    "onboarding": ASSETS_DIR / "onboarding",
}

for dir_path in OUTPUT_DIRS.values():
    dir_path.mkdir(parents=True, exist_ok=True)

# ============================================================
# STYLE — Same sumi-e zen aesthetic, library-themed
# ============================================================

STYLE = """
Japanese Zen minimalist illustration style.
Inspired by sumi-e ink wash and ukiyo-e woodblock prints.
Dark background #0A0A0B with subtle texture.
Primary warm amber gold #F59E0B as accent.
Secondary soft purple #8B5CF6 wisps.
Clean brushstroke aesthetics, negative space.
Wabi-sabi imperfect beauty, mindful simplicity.
Elegant line work, contemplative mood.
No text, no logos, no watermarks.
High quality digital art.
"""

# ============================================================
# PROMPTS — Library-themed replacements
# ============================================================

PROMPTS = {
    "landing": {
        # Hero: Vast infinite library — the core visual metaphor
        "hero-main.webp": (
            "A vast infinite library extending into darkness, sumi-e ink wash style. "
            "Towering bookshelves curve and spiral like a cosmic cathedral of knowledge. "
            "Warm amber golden light streams through gaps between shelves, illuminating paths. "
            "Multiple branching paths lead in different directions, each to a different world. "
            "Books glow softly with amber light as if they are doorways to other realms. "
            "Sense of wonder, awe, and infinite possibility. Contemplative, meditative scale. "
            "A single small figure stands at the entrance, dwarfed by the immensity of knowledge."
        ),

        # Hero secondary: Books opening to reveal worlds
        "hero-books-transform.webp": (
            "Open books releasing different worlds from their pages, sumi-e ink wash style. "
            "One book opens to reveal a galaxy with amber stars, another reveals an ancient temple, "
            "another shows neural networks, another blooming gardens. Knowledge domains escaping "
            "as ink wisps — science, philosophy, art, history — all interconnected with amber threads. "
            "Cross-domain connections visible as golden threads linking the worlds together. "
            "Purple wisps of mystery and discovery. Reading as portal to all human knowledge."
        ),

        # Feature 1: Immersive Reading (replaces spaced-repetition)
        "feature-spaced-repetition.webp": (
            "A person deeply absorbed in reading, rendered in sumi-e ink wash. "
            "They sit in a zen-like meditative posture with an open book. "
            "Knowledge flows upward from the pages as amber streams of light, "
            "forming constellations of ideas above their head. Deep focus and immersion. "
            "The surrounding world fades into soft purple mist — only the reader and "
            "the knowledge exist. Depth over speed. Immersion over summary. "
            "Warm amber glow radiating from the pages, illuminating the reader's face."
        ),

        # Feature 2: Cross-Domain Discovery (replaces visual-learning)
        "feature-visual-learning.webp": (
            "Multiple domain symbols interconnected in a vast network, sumi-e ink wash style. "
            "An atom (science), a brain (neuroscience), an ancient scroll (philosophy), "
            "a code bracket (technology), a lotus (spirituality), a mountain (leadership), "
            "a DNA helix (biology), a golden ratio spiral (mathematics). "
            "All connected by amber golden threads forming a beautiful web of knowledge. "
            "Purple wisps flow between domains showing cross-pollination of ideas. "
            "The polymath's mind visualized as a constellation of all human knowledge."
        ),

        # Feature 3: Your Pace, Your Path (replaces gamification)
        "feature-gamification.webp": (
            "A winding path through diverse landscapes, sumi-e ink wash journey metaphor. "
            "The path begins in a bamboo forest, crosses over mountain ridges, "
            "passes through ancient libraries, winds along ocean cliffs, "
            "and disappears into a starlit horizon. Each landscape represents a different "
            "domain of knowledge — nature, wisdom, science, art. "
            "Amber stepping stones mark the path, glowing warmly. "
            "Purple mist at the edges suggests undiscovered territories. "
            "Personal journey at your own pace. No rush, no pressure, just exploration."
        ),

        # CTA background: Library atmosphere
        "cta-section-bg.webp": (
            "Horizontal panoramic view of an infinite library corridor, sumi-e ink wash. "
            "Bookshelves extend infinitely on both sides, converging at a vanishing point "
            "of pure amber golden light. Soft purple ambient glow from between the shelves. "
            "Atmospheric, inviting, warm. The light at the end beckons the viewer forward. "
            "Subtle ink texture, zen energy stream, momentum toward knowledge."
        ),
    },

    "onboarding": {
        # Slide 1: The Opportunity (replaces forgetting/loss)
        "onboarding-01-forgetting.webp": (
            "Thousands of books scattered across an infinite dark landscape, sumi-e ink wash. "
            "Books as far as the eye can see, some open, some closed, floating, stacked, scattered. "
            "A warm amber glow illuminates the vastness — so much knowledge, so many domains. "
            "The enormity of human wisdom laid bare. Not loss, but overwhelming abundance. "
            "76 worlds of knowledge waiting to be explored. Purple wisps of mystery "
            "rising from the books. Awe-inspiring, inviting, the beginning of a journey."
        ),

        # Slide 2: Breakthrough — Curated paths through knowledge
        "onboarding-02-breakthrough.webp": (
            "A single luminous golden pathway cutting through a vast library, sumi-e ink wash. "
            "Bookshelves tower on either side but the path is clear, curated, inviting. "
            "Amber light guides the way forward. Books along the path glow — they've been "
            "selected, distilled, crafted into a reading journey. Order from abundance. "
            "Purple wisps mark side paths to explore later. The curated experience — "
            "1000+ authors distilled into immersive reading. Peaceful clarity, not chaos."
        ),

        # Slide 3: Polymind — The transformed reader
        "onboarding-03-polymind.webp": (
            "A figure standing at the center of a vast knowledge mandala, sumi-e ink wash. "
            "Interconnected circles of different domains orbit around the figure — "
            "science, philosophy, art, technology, wisdom, history, nature, spirit. "
            "Each circle glows with amber golden light. The figure radiates understanding, "
            "connections visible as golden threads between all domains. "
            "Purple energy of synthesis and discovery. A polymath awakened. "
            "The Polymind — one who reads everything, connects everything, knows everything."
        ),
    },
}


# ============================================================
# FUNCTIONS
# ============================================================

def is_missing(path: Path) -> bool:
    return not path.exists() or path.stat().st_size == 0


def generate_image(client, prompt: str, output_path: Path, retries: int = 3) -> bool:
    if not prompt or not prompt.strip():
        print(f"SKIP (empty prompt)")
        return False

    for attempt in range(retries):
        try:
            full_prompt = f"{STYLE}\n\n{prompt}"

            response = client.models.generate_content(
                model=MODEL_NAME,
                contents=[full_prompt],
                config=types.GenerateContentConfig(
                    response_modalities=['TEXT', 'IMAGE'],
                    image_config=types.ImageConfig(
                        aspect_ratio=ASPECT_RATIO
                    )
                )
            )

            for part in response.parts:
                if part.inline_data is not None:
                    image_bytes = part.inline_data.data
                    pil_image = Image.open(BytesIO(image_bytes))

                    if pil_image.mode in ('RGBA', 'P'):
                        pil_image = pil_image.convert('RGB')

                    if str(output_path).endswith('.webp'):
                        pil_image.save(str(output_path), 'WEBP', quality=85)
                    elif str(output_path).endswith('.png'):
                        pil_image.save(str(output_path), 'PNG')
                    else:
                        pil_image.save(str(output_path))
                    return True

            if attempt < retries - 1:
                print(f"retry {attempt + 2}...", end=" ", flush=True)
                time.sleep(5)
            else:
                print(f"No image data")

        except Exception as e:
            err_str = str(e)
            if "429" in err_str or "RESOURCE_EXHAUSTED" in err_str:
                if attempt < retries - 1:
                    wait = 30 * (attempt + 1)
                    print(f"rate limit, waiting {wait}s...", end=" ", flush=True)
                    time.sleep(wait)
                else:
                    print(f"Rate limited")
            elif "400" in err_str or "INVALID_ARGUMENT" in err_str:
                print(f"Bad request (400): {err_str[:100]}")
                return False
            else:
                print(f"Error: {e}")
                if attempt < retries - 1:
                    time.sleep(5)

    return False


# ============================================================
# MAIN
# ============================================================

def main():
    parser = argparse.ArgumentParser(description="Generate library-themed images for Polymind")
    parser.add_argument("--all", action="store_true", help="Regenerate all images (even existing)")
    parser.add_argument("--landing", action="store_true", help="Only generate landing images")
    parser.add_argument("--onboarding", action="store_true", help="Only generate onboarding images")
    parser.add_argument("--file", type=str, help="Generate a specific file by name")
    args = parser.parse_args()

    only_missing = not args.all

    print("=" * 50)
    print("POLYMIND LIBRARY IMAGE GENERATOR")
    print(f"Model: {MODEL_NAME}")
    print("Generating Infinite Library themed images")
    print("=" * 50)

    client = genai.Client(api_key=GEMINI_API_KEY)

    # Single file mode
    if args.file:
        for cat, prompts in PROMPTS.items():
            if args.file in prompts:
                output_dir = OUTPUT_DIRS[cat]
                path = output_dir / args.file
                prompt = prompts[args.file]

                print(f"\n  GEN  {args.file}...", end=" ", flush=True)
                if generate_image(client, prompt, path):
                    kb = path.stat().st_size / 1024
                    print(f"OK ({kb:.0f}KB)")
                else:
                    print("FAILED")
                print("\nDone!")
                return

        print(f"File {args.file} not found in any category")
        return

    # Category selection
    if args.landing:
        categories = ["landing"]
    elif args.onboarding:
        categories = ["onboarding"]
    else:
        categories = list(PROMPTS.keys())

    total = sum(len(PROMPTS[cat]) for cat in categories)
    generated = 0
    failed = 0

    for cat in categories:
        print(f"\n[{cat.upper()}]")
        output_dir = OUTPUT_DIRS[cat]

        for filename, prompt in PROMPTS[cat].items():
            path = output_dir / filename

            if only_missing and not is_missing(path):
                print(f"  SKIP {filename} (exists)")
                continue

            print(f"  GEN  {filename}...", end=" ", flush=True)

            if generate_image(client, prompt, path):
                kb = path.stat().st_size / 1024
                print(f"OK ({kb:.0f}KB)")
                generated += 1
                time.sleep(3)
            else:
                print("FAILED")
                failed += 1
                time.sleep(10)

    print(f"\n{'=' * 50}")
    print(f"Generated: {generated}  Failed: {failed}  Total: {total}")
    print("Done!")


if __name__ == "__main__":
    main()
