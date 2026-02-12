#!/usr/bin/env python3
"""
Polymind Relationships & Society Image Generator
=================================================
Generates AI level images for 4 new Relationships & Society modules:
  - Dating & Attraction (da-) — 10 levels
  - Networking (net-) — 10 levels
  - Parenting (par-) — 10 levels
  - Social Intelligence (si-) — 10 levels

Total: 40 level images + 4 module images = 44 images

Usage:
  python scripts/generate-relationships-images.py [--all | --missing | --module <name>]

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
    "modules": ASSETS_DIR / "modules",
    "levels": ASSETS_DIR / "levels",
}

for dir_path in OUTPUT_DIRS.values():
    dir_path.mkdir(parents=True, exist_ok=True)

# ============================================================
# STYLE
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

# Module-specific style overrides that blend with the base style
DATING_STYLE = """
Japanese Zen minimalist illustration style.
Inspired by sumi-e ink wash and ukiyo-e woodblock prints.
Dark background #0A0A0B with subtle texture.
Primary warm rose-pink #F43F5E and soft red #EF4444 as accents.
Secondary amber gold #F59E0B warmth and soft purple #8B5CF6 wisps.
Clean brushstroke aesthetics, negative space.
Romantic, magnetic, warm connection energy.
Elegant line work, contemplative mood.
No text, no logos, no watermarks.
High quality digital art.
"""

NETWORKING_STYLE = """
Japanese Zen minimalist illustration style.
Inspired by sumi-e ink wash and ukiyo-e woodblock prints.
Dark background #0A0A0B with subtle texture.
Primary electric blue #3B82F6 and cyan #06B6D4 as accents.
Secondary amber gold #F59E0B nodes and soft purple #8B5CF6 wisps.
Clean brushstroke aesthetics, negative space.
Interconnected, web-like, professional energy.
Elegant line work, contemplative mood.
No text, no logos, no watermarks.
High quality digital art.
"""

PARENTING_STYLE = """
Japanese Zen minimalist illustration style.
Inspired by sumi-e ink wash and ukiyo-e woodblock prints.
Dark background #0A0A0B with subtle texture.
Primary warm teal #14B8A6 and emerald #10B981 as accents.
Secondary amber gold #F59E0B warmth and soft purple #8B5CF6 wisps.
Clean brushstroke aesthetics, negative space.
Nurturing, protective, growth-oriented energy.
Elegant line work, contemplative mood.
No text, no logos, no watermarks.
High quality digital art.
"""

SOCIAL_INTEL_STYLE = """
Japanese Zen minimalist illustration style.
Inspired by sumi-e ink wash and ukiyo-e woodblock prints.
Dark background #0A0A0B with subtle texture.
Primary deep purple #7C3AED and violet #8B5CF6 as accents.
Secondary amber gold #F59E0B neural highlights and soft blue wisps.
Clean brushstroke aesthetics, negative space.
Perceptive, neural, socially aware energy.
Elegant line work, contemplative mood.
No text, no logos, no watermarks.
High quality digital art.
"""

# ============================================================
# PROMPTS
# ============================================================

PROMPTS = {
    "modules": {
        # Module cover images (these likely already exist but included for completeness)
        "module-dating-attraction.webp": "Two figures drawn together by warm rose-pink magnetic light in ink wash, attraction dynamics, amber chemistry sparks flying between silhouettes, purple romantic energy, zen social connection, understanding the dance of desire.",
        "module-networking.webp": "Web of interconnected professional nodes in sumi-e style, electric blue connection threads radiating outward, amber golden hubs glowing with social capital, purple value exchange streams, zen network building, meaningful professional connections.",
        "module-parenting.webp": "Parent and child silhouettes with warm teal nurturing light embracing them in ink wash, amber golden growth rays rising from child, purple developmental stages ascending, zen family wisdom, guiding the next generation.",
        "module-social-intelligence.webp": "Eye reading a room with violet awareness glow in sumi-e style, amber neural pathways mapping social cues, purple charisma aura radiating, zen situational mastery, reading people and building rapport.",
    },
    "levels": {
        # ============================================
        # Dating & Attraction - 10 Levels
        # ============================================
        "level-da-1.webp": "Sumi-e mirror reflection revealing inner confidence light, warm rose-pink self-assurance glow from within, foundation of attraction, amber self-worth radiating outward, zen self-improvement as magnetic force, dark background.",
        "level-da-2.webp": "Two ink brush silhouettes with rose-pink body language signals radiating between them, non-verbal attraction cues, amber eye contact beam connecting, purple micro-expression ripples, zen reading romantic signals.",
        "level-da-3.webp": "Flowing ink conversation between two figures with warm rose energy, amber golden words floating as cherry blossoms, the art of flirting, purple playful banter sparks, zen conversational chemistry.",
        "level-da-4.webp": "Heart with magnetic field lines in sumi-e style, rose-pink attraction forces pulling inward, amber desire warmth, psychology of desire and chemistry, purple dopamine spirals, zen understanding what draws people together.",
        "level-da-5.webp": "First date scene as ink wash landscape, two figures on amber golden bridge over moonlit water, rose-pink lanterns lighting the path, purple excitement energy, zen art of creating memorable experiences.",
        "level-da-6.webp": "Ink brush figure radiating rose-pink charisma in social setting, amber social proof glow, multiple admirers drawn in, purple confidence aura expanding, zen social dynamics and status, dark void background.",
        "level-da-7.webp": "Digital devices connecting two distant silhouettes with rose-pink light threads in sumi-e, amber profile glow, modern dating and technology, purple algorithmic love, zen navigating online connection.",
        "level-da-8.webp": "Two intertwined roses growing from separate roots in ink wash, amber emotional intimacy light at junction, rose-pink vulnerability petals opening, purple trust deepening, zen building emotional connection.",
        "level-da-9.webp": "Storm clouds dissolving into clear sky with rose-pink clarity in sumi-e, amber resilience light through heartbreak, navigating rejection and setbacks, purple healing energy, zen growth through romantic adversity.",
        "level-da-10.webp": "Two figures walking together into amber golden horizon in ink wash, rose-pink unified aura surrounding both, long-term attraction mastery, purple enduring chemistry, zen sustainable romantic connection, complete integration.",

        # ============================================
        # Networking - 10 Levels
        # ============================================
        "level-net-1.webp": "Single ink brush node with electric blue connection potential radiating outward, amber golden core identity, networking foundations, purple first contact sparks, zen art of introduction, dark background.",
        "level-net-2.webp": "Three nodes forming triangle with blue energy flowing between in sumi-e, amber trust bridges forming, building initial connections, purple rapport threads, zen quality over quantity.",
        "level-net-3.webp": "Ink wash figure walking into room of silhouettes with electric blue social radar, amber confidence glow, working a room, purple strategic positioning, zen event networking mastery.",
        "level-net-4.webp": "Spider web pattern in sumi-e with blue silk threads connecting amber nodes, network architecture, purple weak tie bridges, zen structural holes and bridging, strategic network design.",
        "level-net-5.webp": "Two hands exchanging amber golden gifts with electric blue reciprocity energy in ink wash, value creation and exchange, purple generosity loops, zen giving before asking, social capital building.",
        "level-net-6.webp": "Digital constellation of blue connected profiles in sumi-e style, amber LinkedIn/platform nodes glowing, digital networking, purple online presence radiating, zen virtual relationship building.",
        "level-net-7.webp": "Ink brush mentorship scene with senior figure radiating blue wisdom to junior figure, amber knowledge transfer, mentorship and sponsorship, purple career guidance flowing, zen learning from masters.",
        "level-net-8.webp": "Conference stage with blue spotlight on speaker and amber audience connections forming in ink wash, thought leadership networking, purple influence expanding outward, zen becoming a connector.",
        "level-net-9.webp": "Tree with deep blue roots feeding amber golden fruit above in sumi-e, nurturing long-term relationships, purple perennial value exchange, zen maintaining and deepening bonds over time.",
        "level-net-10.webp": "Vast constellation network with blue and amber nodes spanning entire canvas in ink wash, network mastery, purple hub-and-spoke empire, zen becoming indispensable connector, complete integration.",

        # ============================================
        # Parenting - 10 Levels
        # ============================================
        "level-par-1.webp": "Teal seed being planted by nurturing hands in sumi-e style, amber golden potential light within seed, parenting foundations, purple growth energy, zen understanding child development, dark background.",
        "level-par-2.webp": "Infant cradled in teal protective embrace in ink wash, amber warmth of secure attachment bonding, early years nurturing, purple trust formation, zen building the foundation of safety.",
        "level-par-3.webp": "Teal compass guiding small footsteps along path in sumi-e, amber discipline light balanced with warmth, boundary setting with love, purple consistent structure, zen firm but kind authority.",
        "level-par-4.webp": "Child brain with teal neural pathways forming in ink wash, amber emotional intelligence connections, developing emotional skills, purple empathy pathways lighting up, zen raising emotionally aware children.",
        "level-par-5.webp": "Two parent silhouettes forming teal protective arch over child in sumi-e, amber golden united front, co-parenting and family dynamics, purple communication bridges, zen unified parenting approach.",
        "level-par-6.webp": "Teal chrysalis transforming into butterfly in ink wash, amber adolescent identity forming, navigating teenage years, purple independence wings emerging, zen letting go while holding close.",
        "level-par-7.webp": "Open book with teal educational light radiating to curious child figure in sumi-e, amber cognitive growth, education and learning support, purple curiosity spirals expanding, zen fostering love of learning.",
        "level-par-8.webp": "Shield with teal digital protection in ink wash, amber screen-time boundaries glowing, technology and modern parenting challenges, purple healthy tech relationship, zen digital age wisdom.",
        "level-par-9.webp": "Teal oak tree with deep roots and child climbing branches in sumi-e, amber resilience teaching moments, building grit and character, purple life lessons flowing through bark, zen raising resilient children.",
        "level-par-10.webp": "Parent and adult child standing side by side as equals in ink wash, teal legacy wisdom passing between, amber generational light, complete parenting journey, purple family bond enduring, zen lifelong relationship.",

        # ============================================
        # Social Intelligence - 10 Levels
        # ============================================
        "level-si-1.webp": "Violet eye opening to perceive social world in sumi-e style, amber awareness spark, social intelligence foundations, purple perception awakening, zen beginning to see what others miss, dark background.",
        "level-si-2.webp": "Ink brush face with violet micro-expression waves emanating in layers, amber emotional recognition light, reading emotions and body language, purple nonverbal decoding, zen seeing the unsaid.",
        "level-si-3.webp": "Violet empathy bridge forming between two minds in sumi-e, amber compassion warmth, perspective-taking mastery, purple walking in another's shoes, zen deep understanding of others.",
        "level-si-4.webp": "Social scene with violet awareness grid mapping group dynamics in ink wash, amber power structure visible, reading rooms and group dynamics, purple status hierarchies revealed, zen social situational awareness.",
        "level-si-5.webp": "Chameleon shifting violet hues in sumi-e style, amber adaptive glow, social adaptability and code-switching, purple contextual shapeshifting, zen fitting any social situation.",
        "level-si-6.webp": "Two figures navigating stormy ink wash sea with violet lighthouse of tact, amber diplomatic words calming waves, conflict resolution, purple de-escalation energy, zen turning tension into harmony.",
        "level-si-7.webp": "Figure radiating violet magnetic aura attracting others in sumi-e, amber charisma flame at center, influence without authority, purple persuasion field, zen natural leadership through social skill.",
        "level-si-8.webp": "Ink wash stage with violet spotlight on speaker feeling audience mood, amber crowd resonance, emotional contagion and group influence, purple collective emotion waves, zen reading and moving groups.",
        "level-si-9.webp": "Shield deflecting violet manipulation arrows while maintaining composure in sumi-e, amber boundaries firm, detecting and handling manipulation, purple dark triad defense, zen protecting yourself socially.",
        "level-si-10.webp": "Master figure at center of harmonious violet social web in ink wash, amber wisdom radiating to all connections, social intelligence mastery, purple complete integration of all skills, zen the socially wise life.",
    },
}

# Map filenames to their style overrides
STYLE_MAP = {
    "da-": DATING_STYLE,
    "dating-attraction": DATING_STYLE,
    "net-": NETWORKING_STYLE,
    "networking": NETWORKING_STYLE,
    "par-": PARENTING_STYLE,
    "parenting": PARENTING_STYLE,
    "si-": SOCIAL_INTEL_STYLE,
    "social-intelligence": SOCIAL_INTEL_STYLE,
}


def get_style_for_file(filename: str) -> str:
    """Return the appropriate style for a given filename."""
    for prefix, style in STYLE_MAP.items():
        if prefix in filename:
            return style
    return STYLE


# ============================================================
# FUNCTIONS
# ============================================================

def is_missing(path: Path) -> bool:
    return not path.exists() or path.stat().st_size == 0


def generate_image(client, prompt: str, output_path: Path, retries: int = 3, aspect_ratio: str = "16:9", style: str = None) -> bool:
    for attempt in range(retries):
        try:
            chosen_style = style or STYLE
            full_prompt = f"{chosen_style}\n\n{prompt}"

            response = client.models.generate_content(
                model=MODEL_NAME,
                contents=[full_prompt],
                config=types.GenerateContentConfig(
                    response_modalities=['TEXT', 'IMAGE'],
                    image_config=types.ImageConfig(
                        aspect_ratio=aspect_ratio
                    )
                )
            )

            # Try to extract image data from response parts
            for part in response.parts:
                if part.inline_data is not None:
                    image_bytes = part.inline_data.data
                    pil_image = Image.open(BytesIO(image_bytes))

                    # Convert to RGB if necessary (for webp compatibility)
                    if pil_image.mode in ('RGBA', 'P'):
                        pil_image = pil_image.convert('RGB')

                    # Save as webp format
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
            if "429" in str(e) or "RESOURCE_EXHAUSTED" in str(e):
                if attempt < retries - 1:
                    wait = 30 * (attempt + 1)
                    print(f"rate limit, waiting {wait}s...", end=" ", flush=True)
                    time.sleep(wait)
                else:
                    print(f"Rate limited")
            else:
                print(f"Error: {e}")
                if attempt < retries - 1:
                    time.sleep(5)

    return False


def main():
    parser = argparse.ArgumentParser(description="Generate Relationships & Society module images for Polymind")
    parser.add_argument("--all", action="store_true", help="Regenerate all images (even existing ones)")
    parser.add_argument("--module", choices=["dating-attraction", "networking", "parenting", "social-intelligence"],
                        help="Generate images for a specific module only")
    parser.add_argument("--levels-only", action="store_true", help="Only generate level images (skip module covers)")
    parser.add_argument("--modules-only", action="store_true", help="Only generate module cover images (skip levels)")
    parser.add_argument("--file", type=str, help="Regenerate a specific file by name (e.g., level-da-1.webp)")
    args = parser.parse_args()

    only_missing = not args.all and not args.file

    print("=" * 60)
    print("POLYMIND RELATIONSHIPS & SOCIETY IMAGE GENERATOR")
    print(f"Model: {MODEL_NAME}")
    print(f"Modules: Dating & Attraction, Networking, Parenting, Social Intelligence")
    print(f"Total images: 44 (40 level + 4 module)")
    print("=" * 60)

    # Create Gemini client
    client = genai.Client(api_key=GEMINI_API_KEY)

    # If --file flag is set, regenerate a specific file
    if args.file:
        found = False
        for cat, prompts in PROMPTS.items():
            if args.file in prompts:
                output_dir = OUTPUT_DIRS[cat]
                path = output_dir / args.file
                prompt = prompts[args.file]
                style = get_style_for_file(args.file)

                print(f"\n  GEN  {args.file}...", end=" ", flush=True)

                if generate_image(client, prompt, path, aspect_ratio=ASPECT_RATIO, style=style):
                    kb = path.stat().st_size / 1024
                    print(f"OK ({kb:.0f}KB)")
                else:
                    print("FAILED")

                found = True
                break

        if not found:
            print(f"File '{args.file}' not found in prompts")

        print("\nDone!")
        return

    # Filter by module if specified
    module_prefixes = {
        "dating-attraction": ("da-", "dating-attraction"),
        "networking": ("net-", "networking"),
        "parenting": ("par-", "parenting"),
        "social-intelligence": ("si-", "social-intelligence"),
    }

    # Determine which categories to process
    categories = []
    if not args.levels_only:
        categories.append("modules")
    if not args.modules_only:
        categories.append("levels")

    generated = 0
    skipped = 0
    failed = 0

    for cat in categories:
        print(f"\n{'=' * 40}")
        print(f"[{cat.upper()}]")
        print(f"{'=' * 40}")

        output_dir = OUTPUT_DIRS[cat]

        for filename, prompt in PROMPTS[cat].items():
            # Filter by module if --module is specified
            if args.module:
                prefixes = module_prefixes[args.module]
                if not any(p in filename for p in prefixes):
                    continue

            path = output_dir / filename

            if only_missing and not is_missing(path):
                print(f"  SKIP {filename} (exists)")
                skipped += 1
                continue

            style = get_style_for_file(filename)

            print(f"  GEN  {filename}...", end=" ", flush=True)

            if generate_image(client, prompt, path, aspect_ratio=ASPECT_RATIO, style=style):
                kb = path.stat().st_size / 1024
                print(f"OK ({kb:.0f}KB)")
                generated += 1
                time.sleep(3)  # Delay between successful generations
            else:
                print("FAILED")
                failed += 1
                time.sleep(10)  # Longer delay after failure

    print(f"\n{'=' * 60}")
    print(f"SUMMARY")
    print(f"  Generated: {generated}")
    print(f"  Skipped:   {skipped}")
    print(f"  Failed:    {failed}")
    print(f"{'=' * 60}")
    print("Done!")


if __name__ == "__main__":
    main()
