#!/usr/bin/env python3
"""
Polymind Light Mode Module Image Generator
==========================================
Generates light mode cover images for all 76 modules using Google Imagen 3 Fast.

Saves to: src/assets/ai-images/modules-light/
Filenames match dark mode images (e.g. module-personal-development.webp)

Usage:
  cd app
  python scripts/generate-light-images.py

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

# ============================================================
# CONFIG
# ============================================================

# Load .env from the app/ directory (where the script is run from)
load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    print("Error: GEMINI_API_KEY not found.")
    print("Create app/.env with: GEMINI_API_KEY=your_key_here")
    sys.exit(1)

MODEL = "gemini-2.5-flash-image"

SCRIPT_DIR = Path(__file__).parent
APP_DIR = SCRIPT_DIR.parent
OUTPUT_DIR = APP_DIR / "src" / "assets" / "ai-images" / "modules-light"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

BATCH_SIZE = 5
BATCH_SLEEP = 2  # seconds between batches

# ============================================================
# LIGHT MODE STYLE PREAMBLE
# ============================================================

LIGHT_STYLE = """Japanese Zen minimalist illustration style.
Inspired by sumi-e ink wash and ukiyo-e woodblock prints.
Soft cream paper background #FAF9F6, warm and bright.
Delicate amber-gold #D97706 ink brushstrokes as accent.
Soft indigo #4F46E5 wisps, subtle and airy.
Clean, delicate line work with generous white space.
Wabi-sabi imperfect beauty, airy and contemplative.
No text, no logos, no watermarks.
High quality digital art, light and ethereal."""

BHARAT_LIGHT_STYLE = """Minimalist illustration blending Japanese Zen sumi-e with ancient Indian art.
Inspired by ink wash painting with subtle touches of Rajput miniature and temple art.
Soft cream paper background #FAF9F6, warm and bright.
Delicate saffron-amber gold #D97706 ink brushstrokes as accent.
Soft indigo #4F46E5 and deep saffron wisps, subtle and airy.
Clean, delicate line work with generous white space, sacred geometry hints.
Wabi-sabi imperfect beauty, airy, contemplative, and spiritually luminous.
No text, no logos, no watermarks.
High quality digital art, light and ethereal."""

# ============================================================
# MODULE PROMPTS (subject-matter portion only, from generate-ai-images.py)
# ============================================================

MODULE_PROMPTS = {
    # SHELF 1: Mind & Mindset
    "module-personal-development.webp": "Sumi-e ink wash, a seedling sprouting with amber golden light, growth and transformation, zen minimalist, dark background, purple wisps, contemplative journey.",
    "module-psychology-decisions.webp": "Japanese brush art, a glowing lightbulb made of amber brushstrokes, wisdom illuminating darkness, purple neural threads, ink wash style, minimalist.",
    "module-brain-neuroscience.webp": "Zen ink illustration, DNA helix intertwined with brain neurons, amber gold synapses firing, purple energy streams, sumi-e minimalist.",

    # SHELF 2: Technology & AI
    "module-ai-machine-learning.webp": "Japanese woodblock style, geometric origami robot with amber glowing core, circuit patterns as brush strokes, purple data streams, futuristic zen.",
    "module-python-data-science.webp": "Sumi-e serpent coiling around data points, amber scales, purple code wisps, elegant python form, minimalist tech.",
    "module-blockchain-web3.webp": "Ink brush chain links forming infinity symbol, amber connections glowing, decentralized network as constellation, purple nodes, zen digital.",

    # SHELF 3: Wealth & Finance
    "module-wealth-building.webp": "Zen bamboo growing upward with golden coin leaves, abundance through patience, amber light prosperity, purple mist, ink brush simplicity.",

    # SHELF 4: Communication & Influence
    "module-negotiation-influence.webp": "Two hands in ink brush style reaching toward amber golden handshake, bridge of trust, purple energy exchange, zen diplomacy.",

    # SHELF 5: Martial Arts & Philosophy
    "module-bruce-lee-philosophy.webp": "Ink wash dragon coiling with water, amber eyes glowing, be like water flowing form, purple chi energy, martial zen, powerful yet graceful.",

    # SHELF 6: Health & Longevity
    "module-body-longevity.webp": "Sumi-e heart pulsing with amber golden life force, vitality radiating outward, purple energy meridians, zen wellness, eternal youth symbol.",

    # SHELF 7: Spirituality & Wisdom
    "module-spirituality-sadhana.webp": "Ink brush meditating figure in lotus, amber aura expanding, third eye glowing, purple cosmic wisps, zen enlightenment, inner peace.",
    "module-shiva-shakti.webp": "Trident (trishul) in sumi-e style, amber flames at tips, cosmic dance energy, purple shakti spirals, divine masculine feminine balance, zen mysticism.",
    "module-temple-science.webp": "Sacred temple silhouette with amber dome light, geometric mandala patterns, purple sacred energy, vastu harmony, zen architecture, spiritual technology.",

    # SHELF 8: Life Design
    "module-life-design.webp": "Ink brush bonsai tree with house at roots, amber leaves of intention, purple wind of change, zen independence, self-sufficient beauty.",

    # SHELF 9: Integration & Mastery
    "module-master-synthesis.webp": "Multiple ink brush circles overlapping like Venn diagram, amber intersection glowing brightest, purple connections, unified knowledge, zen integration.",
    "module-polymath-mastery.webp": "Graduation cap transforming into wings, amber feathers of wisdom, flying toward stars, purple cosmic trail, renaissance spirit, zen mastery achieved.",

    # Finance & Markets
    "module-finance-investing.webp": "Sumi-e golden bull charging upward, amber stock chart ascending, financial markets mastery, purple candlestick patterns, zen investor mindset, market wisdom.",

    # Science & Universe
    "module-astronomy.webp": "Ink brush telescope pointed at amber galaxy spiral, cosmic exploration, purple nebula wisps, stargazer seeking truth, zen universe wonder.",
    "module-physics-engineering.webp": "Atom structure in sumi-e style, amber electron orbits glowing, first principles thinking, purple quantum energy waves, zen understanding of reality.",

    # Creative Arts
    "module-writing-storytelling.webp": "Calligraphy brush flowing into amber ink river of words, storytelling magic, purple narrative streams, zen creative expression, writer's flow.",
    "module-music-sound.webp": "Treble clef as ink brush stroke, amber sound waves emanating, sonic mastery, purple musical notes floating, zen auditory harmony.",

    # Strategy & Systems
    "module-strategic-thinking.webp": "Chess king piece in sumi-e style, amber strategic light radiating, game theory mastery, purple decision trees branching, zen calculated moves.",
    "module-systems-complexity.webp": "Interconnected network nodes in ink wash, amber hub connections glowing, complex systems understanding, purple feedback loops flowing, zen emergence patterns.",

    # History & Culture
    "module-history-civilizations.webp": "Ancient pyramid and colosseum silhouettes in ink brush, amber torch of knowledge, lessons from history, purple timeline flowing, zen civilizations wisdom.",
    "module-western-philosophy.webp": "Owl of Athena in sumi-e style, amber philosophical light in eyes, great thinkers wisdom, purple thought bubbles rising, zen western enlightenment.",

    # Practical Mastery
    "module-design-thinking.webp": "Lightbulb with human silhouette inside in ink brush, amber innovation glow, human-centered design, purple empathy waves radiating, zen creative problem solving.",
    "module-cybersecurity.webp": "Digital shield with lock in sumi-e style, amber security glow protecting, cyber defense mastery, purple encrypted data streams, zen digital protection.",
    "module-startups-innovation.webp": "Rocket launching from ink brush launchpad, amber entrepreneurial flame, startup journey, purple unicorn silhouette in clouds, zen venture building.",

    # Relationships & Society
    "module-relationships-social.webp": "Two silhouette profiles facing each other in ink wash, amber heart connection between them, human bonds, purple social threads linking, zen relationship wisdom.",
    "module-geopolitics.webp": "Globe with chess pieces positioned strategically in sumi-e, amber power centers glowing, global strategy, purple influence lines crossing, zen world understanding.",
    "module-communication-rhetoric.webp": "Speech bubble transforming into amber wave of influence, rhetorical mastery, purple persuasion spirals, zen art of communication, words as power.",

    # Ancient Wisdom
    "module-ayurveda.webp": "Lotus flower with three dosha symbols in ink brush, amber healing light, ancient medicine wisdom, purple life force energy, zen holistic health.",
    "module-mathematics-patterns.webp": "Flower of life sacred geometry in sumi-e style, amber golden ratio spiraling, universal patterns, purple mathematical harmonies, zen numerical wisdom.",

    # Mind & Performance (new)
    "module-emotional-intelligence.webp": "Heart and brain balanced on zen scale in sumi-e style, amber emotional awareness glow, EQ mastery, purple empathy waves radiating, zen self-awareness.",

    # Technology & Code (new)
    "module-web-development.webp": "Code brackets forming a digital doorway in ink brush, amber HTML tags glowing, web creation, purple CSS waves flowing, zen full-stack building.",
    "module-cloud-devops.webp": "Cloud formation with container ships floating in ink wash, amber deployment light, DevOps flow, purple CI/CD pipelines, zen infrastructure harmony.",

    # Wealth & Power (new)
    "module-sales-mastery.webp": "Handshake transforming into golden deal in sumi-e, amber persuasion light, sales excellence, purple trust bridge forming, zen closing mastery.",
    "module-personal-branding.webp": "Personal seal stamp in ink brush style, amber brand essence radiating, identity crafting, purple influence aura, zen authentic presence.",
    "module-entrepreneurship-101.webp": "Seed sprouting into business tree in sumi-e, amber startup flame, founder journey, purple growth pathways, zen venture beginning.",

    # Finance & Markets (new)
    "module-technical-analysis.webp": "Candlestick chart as mountain range in ink wash, amber support levels glowing, chart mastery, purple resistance patterns, zen price action.",
    "module-options-trading.webp": "Greek letters floating around options chain in sumi-e, amber premium glow, derivatives mastery, purple volatility waves, zen strategic positioning.",
    "module-macro-economics.webp": "Federal Reserve building with economic waves in ink brush, amber interest rate light, macro forces, purple inflation spirals, zen global understanding.",
    "module-crypto-trading.webp": "Bitcoin symbol as ancient coin in sumi-e style, amber blockchain glow, digital asset mastery, purple on-chain flows, zen crypto cycles.",

    # Spirit & Body (new)
    "module-yoga-philosophy.webp": "Eight-petaled lotus representing yoga limbs in ink wash, amber spiritual ascent, classical yoga wisdom, purple prana channels, zen mind-body unity.",

    # Synthesis & Mastery (new)
    "module-mental-models.webp": "Interconnected thinking frameworks as constellation in sumi-e, amber insight nodes glowing, decision frameworks, purple mental lattice, zen clarity of thought.",
    "module-first-principles.webp": "Tower deconstructed to fundamental blocks in ink brush, amber core truth glowing, reasoning from basics, purple assumption layers stripped, zen fundamental understanding.",
    "module-meta-learning.webp": "Brain learning about itself in recursive pattern, amber skill acquisition glow, learning mastery, purple knowledge spiraling inward, zen accelerated growth.",

    # Science & Universe (new)
    "module-biology-evolution.webp": "DNA helix transforming through evolutionary stages in sumi-e, amber life force glow, evolution understanding, purple natural selection waves, zen life science.",
    "module-quantum-mechanics.webp": "Particle in superposition shown as dual waves in ink wash, amber quantum glow, reality's nature, purple probability clouds, zen uncertainty embraced.",
    "module-earth-sciences.webp": "Earth cross-section with tectonic plates in sumi-e, amber core energy, planetary systems, purple geological layers, zen understanding our world.",

    # Creative Arts (new)
    "module-creative-writing.webp": "Quill pen dripping story characters in ink brush, amber narrative flow, fiction mastery, purple imagination streams, zen creative expression.",
    "module-content-creation.webp": "Multiple screens emanating content waves in sumi-e, amber viral light spreading, audience building, purple engagement ripples, zen digital storytelling.",
    "module-world-building.webp": "Miniature universe in cupped hands in ink wash, amber creation light, fictional worlds, purple lore threads weaving, zen universe crafting.",

    # Strategy & Systems (new)
    "module-game-theory.webp": "Chess pieces analyzing each other in sumi-e style, amber strategic insight, Nash equilibrium, purple decision matrices, zen calculated moves.",
    "module-decision-making.webp": "Crossroads with clear amber path emerging, decision clarity, purple alternative routes fading, zen choice architecture, optimal selection.",
    "module-risk-management.webp": "Shield deflecting storm in ink brush style, amber protection glow, navigating uncertainty, purple risk waves managed, zen antifragile stance.",

    # History & Culture (new)
    "module-ancient-empires.webp": "Colosseum and pyramid silhouettes rising in sumi-e, amber historical wisdom light, empire patterns, purple civilizational cycles, zen lessons of time.",
    "module-modern-history.webp": "Globe with 20th century events swirling in ink wash, amber knowledge of past, modern understanding, purple historical threads connecting, zen recent wisdom.",
    "module-cultural-anthropology.webp": "Diverse masks representing cultures in sumi-e style, amber human connection, cultural understanding, purple social fabric weaving, zen anthropological insight.",

    # Practical Mastery (new)
    "module-leadership.webp": "Lone figure on mountaintop with amber guiding light, leadership presence, purple team formation below, zen commanding clarity, inspiring others.",
    "module-problem-solving.webp": "Tangled knot unraveling with amber solution light, root cause analysis, purple complexity dissolving, zen systematic thinking, clarity emerging.",
    "module-productivity-systems.webp": "Clockwork gears in perfect harmony in ink brush, amber efficiency flow, personal systems, purple workflow optimization, zen productive mastery.",

    # Relationships & Society (new)
    "module-dating-attraction.webp": "Two figures drawn together by amber magnetic light, attraction dynamics, purple chemistry sparks, zen social connection, romantic understanding.",
    "module-networking.webp": "Web of connections with amber relationship nodes in sumi-e, social capital, purple value exchange streams, zen network building, meaningful connections.",
    "module-parenting.webp": "Parent and child silhouettes with amber nurturing light, raising children wisely, purple developmental stages, zen family wisdom, guiding growth.",
    "module-social-intelligence.webp": "Eye reading room with amber awareness glow in ink wash, reading people, purple social cues visible, zen situational mastery, charisma building.",

    # Ancient Wisdom (new)
    "module-stoicism.webp": "Stoic philosopher silhouette with amber inner fire in sumi-e, Marcus Aurelius wisdom, purple virtue emanating, zen practical philosophy, calm in chaos.",
    "module-eastern-philosophy.webp": "Yin-yang transforming into Tao symbol in ink brush, amber balance light, Eastern wisdom, purple harmony flows, zen Oriental enlightenment.",
    "module-vedic-wisdom.webp": "Om symbol radiating Upanishadic wisdom in sumi-e, amber dharmic light, Vedic understanding, purple karmic threads, zen sanatan knowledge.",
    "module-mythology.webp": "Hero ascending with amber archetypal light in ink wash, mythological patterns, purple universal stories spiraling, zen timeless narratives, Campbell's journey.",

    # Bharat Wisdom
    "module-bhagavad-gita.webp": "Krishna and Arjuna on chariot silhouette in sumi-e with Indian miniature touches, amber divine light radiating from Krishna, Kurukshetra battlefield mist, purple cosmic energy, sacred discourse, ancient Indian wisdom.",
    "module-ramayana-mahabharata.webp": "Epic bow and arrow crossing with royal crown in ink wash, amber heroic light, ancient Indian epic silhouettes, purple dharma flames, mythological grandeur, Rajput miniature style.",
    "module-upanishads.webp": "Sacred flame in forest hermitage in sumi-e style, amber Brahman light radiating outward, Upanishadic self-inquiry, purple cosmic consciousness wisps, ancient Indian sage silhouette meditating.",
    "module-shiv-sutras.webp": "Shiva in meditation with trishul and crescent moon in ink wash, amber Shakti energy spiraling upward, Kashmir Shaivism tantra, purple non-dual consciousness, sacred vibration spanda.",
    "module-sanskrit-mantras.webp": "Devanagari OM symbol dissolving into sound waves in sumi-e, amber mantra vibrations radiating, Sanskrit sacred syllables, purple Vedic chanting energy, ancient Indian calligraphy art.",
    "module-jyotish-vastu.webp": "Navagraha planetary alignment above temple floor plan in ink wash, amber celestial light, Jyotish astrology chart, purple sacred geometry Vastu mandala, ancient Indian cosmic science.",
}

# Bharat modules use the BHARAT_LIGHT_STYLE instead of LIGHT_STYLE
BHARAT_FILENAMES = {
    "module-bhagavad-gita.webp",
    "module-ramayana-mahabharata.webp",
    "module-upanishads.webp",
    "module-shiv-sutras.webp",
    "module-sanskrit-mantras.webp",
    "module-jyotish-vastu.webp",
    "module-vedic-wisdom.webp",
    "module-shiva-shakti.webp",
    "module-temple-science.webp",
    "module-spirituality-sadhana.webp",
    "module-ayurveda.webp",
    "module-yoga-philosophy.webp",
}

# ============================================================
# GENERATE FUNCTION
# ============================================================

def generate_image(client, filename: str, subject_prompt: str) -> bool:
    """Generate a single light-mode image and save to OUTPUT_DIR."""
    out_path = OUTPUT_DIR / filename

    style = BHARAT_LIGHT_STYLE if filename in BHARAT_FILENAMES else LIGHT_STYLE
    full_prompt = f"{style}\n\n{subject_prompt}"

    for attempt in range(3):
        try:
            response = client.models.generate_content(
                model=MODEL,
                contents=[full_prompt],
                config=types.GenerateContentConfig(
                    response_modalities=['TEXT', 'IMAGE'],
                    image_config=types.ImageConfig(aspect_ratio="16:9"),
                ),
            )

            for part in response.parts:
                if part.inline_data is not None:
                    img = Image.open(BytesIO(part.inline_data.data))
                    if img.mode in ("RGBA", "P"):
                        img = img.convert("RGB")
                    img.save(str(out_path), "WEBP", quality=85)
                    kb = out_path.stat().st_size // 1024
                    print(f"OK ({kb}KB)")
                    return True

            print(f"No image data", end=" ")
            if attempt < 2:
                time.sleep(5)
                print(f"retry...", end=" ")

        except Exception as e:
            err = str(e)
            if "429" in err or "RESOURCE_EXHAUSTED" in err:
                wait = 30 * (attempt + 1)
                print(f"rate limit, waiting {wait}s...", end=" ", flush=True)
                time.sleep(wait)
            elif "400" in err or "INVALID_ARGUMENT" in err:
                print(f"Bad request: {err[:120]}")
                return False
            else:
                print(f"Error: {err[:120]}")
                if attempt < 2:
                    time.sleep(5)

    return False


# ============================================================
# MAIN
# ============================================================

def main():
    total = len(MODULE_PROMPTS)
    print("=" * 60)
    print("  POLYMIND — Light Mode Module Image Generator")
    print(f"  Model: {MODEL}")
    print(f"  Output: {OUTPUT_DIR}")
    print(f"  Total modules: {total}")
    print("=" * 60)

    client = genai.Client(api_key=GEMINI_API_KEY)
    print(f"\nUsing model: {MODEL}\n")

    success = 0
    skipped = 0
    failed = 0
    items = list(MODULE_PROMPTS.items())

    for i, (filename, subject_prompt) in enumerate(items, 1):
        out_path = OUTPUT_DIR / filename

        # Skip already-generated files
        if out_path.exists() and out_path.stat().st_size > 0:
            print(f"[{i:02d}/{total}] SKIP {filename} (already exists)")
            skipped += 1
            continue

        print(f"[{i:02d}/{total}] Generating {filename}... ", end="", flush=True)

        ok = generate_image(client, filename, subject_prompt)

        if ok:
            success += 1
        else:
            failed += 1
            print(f"  FAILED — skipping")

        # Rate limit safety: pause between batches
        if i % BATCH_SIZE == 0 and i < total:
            print(f"\n  [Batch pause {BATCH_SLEEP}s...]\n")
            time.sleep(BATCH_SLEEP)

    print()
    print("=" * 60)
    print(f"  Generated : {success}")
    print(f"  Skipped   : {skipped}")
    print(f"  Failed    : {failed}")
    print(f"  Output    : {OUTPUT_DIR}")
    print("=" * 60)


if __name__ == "__main__":
    main()
