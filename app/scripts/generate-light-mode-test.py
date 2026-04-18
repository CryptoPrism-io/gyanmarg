#!/usr/bin/env python3
"""
Light Mode Module Image Test Generator
=======================================
Generates 5 test images for Mind & Performance modules, each in a different
art style / aesthetic direction, to pick the best look for light mode.

Saves to: src/assets/ai-images/modules/light-test/
Filenames: style-{n}-{module}.webp

Usage:
  cd app
  python scripts/generate-light-mode-test.py

Requires:
  pip install google-genai python-dotenv pillow
"""

import os
import sys
import time
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

# ─── Config ──────────────────────────────────────────────────────────────────

load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    print("Error: GEMINI_API_KEY not found in .env")
    sys.exit(1)

MODEL_NAME = "gemini-2.5-flash-image"

SCRIPT_DIR = Path(__file__).parent
OUTPUT_DIR = SCRIPT_DIR.parent / "src" / "assets" / "ai-images" / "modules" / "light-test"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# ─── 5 Styles × 5 Modules ────────────────────────────────────────────────────
#
#  Each entry: (output_filename, module_title, style_name, full_prompt)
#
#  Style 1  Personal Development  →  Warm Watercolor Wash
#  Style 2  Brain Neuroscience    →  Scientific Pen-and-Ink Illustration
#  Style 3  Psychology            →  Bold Flat Editorial
#  Style 4  Bruce Lee Philosophy  →  Airy Golden-Hour Photography
#  Style 5  Emotional Intelligence→  Soft Geometric Pastel Abstract

IMAGES = [
    {
        "filename": "style1-warm-watercolor--personal-development.webp",
        "module": "Personal Development",
        "style": "Warm Watercolor Wash",
        "prompt": (
            "Warm watercolor illustration on textured cream paper background. "
            "A young seedling unfurling upward from rich soil, golden sunlight filtering through soft leaves. "
            "Gentle washes of amber, warm peach, and sage green. Hand-painted botanical feel, "
            "loose brushwork, soft ink outlines. Airy and optimistic mood. "
            "Light off-white background with subtle paper grain texture. "
            "No text, no logos. 16:9 landscape format. High quality fine-art illustration."
        ),
    },
    {
        "filename": "style2-scientific-illustration--brain-neuroscience.webp",
        "module": "Brain Neuroscience",
        "style": "Scientific Pen-and-Ink Illustration",
        "prompt": (
            "Vintage scientific illustration style on bright white background. "
            "A beautifully detailed cross-section of a human brain rendered in fine pen-and-ink line work, "
            "like a 19th-century anatomical plate. Delicate cross-hatching and stippling. "
            "Subtle watercolour washes of cobalt blue and warm amber gold highlighting neural pathways. "
            "Small handwritten-style labels floating nearby. "
            "Crisp white background with faint grid paper texture. Elegant, curious, scholarly mood. "
            "No text, no logos. 16:9 landscape format. Museum-quality scientific art."
        ),
    },
    {
        "filename": "style3-bold-flat-editorial--psychology.webp",
        "module": "Psychology",
        "style": "Bold Flat Editorial",
        "prompt": (
            "Bold flat-design editorial illustration with a clean light warm-grey background. "
            "A large stylised human head silhouette in profile, filled with geometric shapes and symbols "
            "representing thought — gears, lightning bolts, eye, speech bubble, mirror — all in "
            "flat blocks of deep coral, warm indigo, and amber yellow. "
            "Strong graphic poster aesthetic, Bauhaus-influenced. High contrast shapes. "
            "Confident, modern, intellectual mood. "
            "No text, no logos. 16:9 landscape format. Print-quality graphic design."
        ),
    },
    {
        "filename": "style4-airy-golden-hour--bruce-lee.webp",
        "module": "Bruce Lee Philosophy",
        "style": "Airy Golden-Hour Photography",
        "prompt": (
            "Ethereal golden-hour photography aesthetic on a bright luminous background. "
            "A lone silhouetted martial artist in a powerful crane stance on a rocky summit, "
            "arms extended, perfectly balanced. Warm sunrise light flooding from behind, "
            "creating a radiant golden halo. Soft lens flare, airy bokeh in the background. "
            "Sky washed in pale amber, blush, and ivory. Cinematic but light and uplifting. "
            "Sense of mastery and presence. "
            "No text, no logos. 16:9 landscape format. Fine-art photography style."
        ),
    },
    {
        "filename": "style5-soft-geometric-pastel--emotional-intelligence.webp",
        "module": "Emotional Intelligence",
        "style": "Soft Geometric Pastel Abstract",
        "prompt": (
            "Minimalist geometric abstract art on a clean white background. "
            "Overlapping translucent circles and soft ellipses in muted pastel tones — "
            "blush pink, lavender, soft mint, peach, and pale gold. "
            "Each circle represents an emotion or connection, some overlapping to show empathy. "
            "Delicate paper-cut shadow depth. Airy, sophisticated, serene. "
            "Influenced by Japanese graphic design and contemporary Scandinavian illustration. "
            "No text, no logos. 16:9 landscape format. Premium editorial design."
        ),
    },
]

# ─── Generator ───────────────────────────────────────────────────────────────

def generate_image(client, item: dict) -> bool:
    out_path = OUTPUT_DIR / item["filename"]

    if out_path.exists():
        print(f"  ✓ Already exists, skipping: {item['filename']}")
        return True

    print(f"\n[{item['style']}]  {item['module']}")
    print(f"   → {item['filename']}")

    try:
        response = client.models.generate_content(
            model=MODEL_NAME,
            contents=[item["prompt"]],
            config=types.GenerateContentConfig(
                response_modalities=["TEXT", "IMAGE"],
                image_config=types.ImageConfig(
                    aspect_ratio="16:9",
                ),
            ),
        )

        # Extract image from response parts
        image_bytes = None
        for part in response.parts:
            if part.inline_data is not None:
                image_bytes = part.inline_data.data
                break

        if not image_bytes:
            print(f"   x No image returned")
            return False

        img = Image.open(BytesIO(image_bytes))
        if img.mode in ("RGBA", "P"):
            img = img.convert("RGB")

        # Save as WebP
        img.save(out_path, "WEBP", quality=90)
        size_kb = out_path.stat().st_size // 1024
        print(f"   + Saved  {img.size[0]}x{img.size[1]}  {size_kb} KB")
        return True

    except Exception as e:
        print(f"   x Error: {e}")
        return False


def main():
    print("=" * 60)
    print("  Light Mode Module Image Test — Mind & Performance")
    print("=" * 60)
    print(f"  Output: {OUTPUT_DIR}")
    print(f"  Images: {len(IMAGES)}")
    print()

    client = genai.Client(api_key=GEMINI_API_KEY)
    success = 0

    for i, item in enumerate(IMAGES, 1):
        print(f"[{i}/{len(IMAGES)}]", end=" ")
        ok = generate_image(client, item)
        if ok:
            success += 1
        # Respect rate limits between requests
        if i < len(IMAGES):
            time.sleep(3)

    print()
    print("=" * 60)
    print(f"  Done: {success}/{len(IMAGES)} images generated")
    print(f"  Check: {OUTPUT_DIR}")
    print("=" * 60)


if __name__ == "__main__":
    main()
