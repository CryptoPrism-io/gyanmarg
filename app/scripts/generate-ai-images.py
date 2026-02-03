#!/usr/bin/env python3
"""
Polymind AI Image Generator
===========================
Generates AI images for the Polymind app using Google Gemini.

Usage:
  python scripts/generate-ai-images.py [--all | --missing | --category <name>]

Requires:
  pip install google-generativeai python-dotenv
"""

import os
import sys
import time
import argparse
from pathlib import Path

try:
    import google.generativeai as genai
    from dotenv import load_dotenv
except ImportError:
    print("Missing dependencies. Install with:")
    print("  pip install google-generativeai python-dotenv")
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

SCRIPT_DIR = Path(__file__).parent
APP_DIR = SCRIPT_DIR.parent
ASSETS_DIR = APP_DIR / "src" / "assets" / "ai-images"

OUTPUT_DIRS = {
    "onboarding": ASSETS_DIR / "onboarding",
    "domains": ASSETS_DIR / "domains",
    "achievements": ASSETS_DIR / "achievements",
    "landing": ASSETS_DIR / "landing",
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

# ============================================================
# PROMPTS
# ============================================================

PROMPTS = {
    "onboarding": {
        "onboarding-01-forgetting.png": "Zen ink wash painting, a serene face in profile with memories drifting away like autumn leaves, amber gold accents, empty space, contemplative loss, sumi-e brushstrokes.",
        "onboarding-02-breakthrough.png": "Minimalist ink illustration, a single lotus emerging from dark water, golden light rays breaking through, moment of awakening, Japanese brush art, peaceful hope.",
        "onboarding-03-polymind.png": "Elegant ink drawing, meditating figure with interconnected circles forming a mandala above head, amber and purple wisps, enlightened mind, zen simplicity.",
    },
    "domains": {
        "domain-psychology.png": "Sumi-e style, enso circle containing a delicate brain pattern, lavender mist, self-reflection, ink wash texture, mindful.",
        "domain-ai.png": "Japanese woodblock style, geometric origami crane made of circuit patterns, amber core glowing, tradition meets future, clean lines.",
        "domain-wealth.png": "Ink brush bamboo growing upward, golden coins as leaves, prosperity through patience, zen abundance, simple elegance.",
        "domain-productivity.png": "Single focused arrow cutting through scattered ink drops, amber tip, clarity emerging from chaos, zen precision.",
        "domain-health.png": "Graceful ink brush figure in tai chi pose, energy flowing as amber wisps, vitality and balance, minimalist body.",
        "domain-leadership.png": "Mountain peak with radiating amber light, small figures ascending path, guiding presence, Japanese landscape style.",
        "domain-philosophy.png": "Yin yang transforming into infinity symbol, ink wash gradient, amber and purple balance, eternal wisdom, zen void.",
        "domain-writing.png": "Calligraphy brush mid-stroke, ink transforming into flying birds, creative expression, amber accent, artistic flow.",
        "domain-science.png": "Minimalist atom as enso circle, electrons as ink dots orbiting, amber nucleus, discovery, scientific zen.",
        "domain-creativity.png": "Ink splash becoming a blooming cherry blossom, amber petals, spontaneous beauty, creative spark, wabi-sabi.",
    },
    "achievements": {
        "achievement-first-lesson.png": "Simple torii gate with golden light beyond, first step on path, zen gateway, invitation to learn.",
        "achievement-streak-7.png": "Seven stones stacked in zen cairn, amber glow at peak, balance and persistence, meditative achievement.",
        "achievement-streak-30.png": "Majestic crane in flight, amber sun behind, mastery and grace, Japanese woodblock style, legendary journey.",
        "achievement-xp-1000.png": "Bonsai tree with golden leaves, patient growth, amber light, reaching milestone, cultivated wisdom.",
        "achievement-xp-5000.png": "Full moon reflected in still water, thousands of amber ripples, mastery, infinite depth, zen perfection.",
        "achievement-level-up.png": "Koi fish leaping upward becoming dragon, amber transformation, ascension, Japanese mythology, breakthrough.",
        "achievement-first-review.png": "Two ink brush circles overlapping, connection restored, amber intersection, remembrance, zen reinforcement.",
        "achievement-all-domains.png": "Ten-petaled chrysanthemum, each petal a different subtle hue, amber center, complete harmony, mastery mandala.",
    },
    "landing": {
        "hero-main.png": "Vast zen landscape, distant mountain silhouettes, amber moon rising, infinite path of stepping stones fading into mist, contemplative journey.",
        "hero-books-transform.png": "Stack of books dissolving into flying origami cranes, amber paper birds, knowledge taking flight, transformation, peaceful.",
        "hero-mind-unlock.png": "Simple ink lock opening, key made of light, knowledge flowing out as amber streams, liberation, zen simplicity.",
        "feature-spaced-repetition.png": "Waves on shore, each wave amber-tipped and stronger, memory building like tides, rhythmic reinforcement, Japanese wave art.",
        "feature-visual-learning.png": "Single eye rendered in ink brush style, amber iris, seeing clearly, perception and wisdom united, zen observation.",
        "feature-gamification.png": "Stone steps ascending through clouds, each step glowing warmer amber, journey upward, zen progression, mindful growth.",
        "cta-section-bg.png": "Horizontal flowing river of amber light, subtle ink texture banks, movement and momentum, zen energy stream.",
    },
    "modules": {
        # SHELF 1: Mind & Mindset
        "module-personal-development.webp": "Sumi-e ink wash, a seedling sprouting with amber golden light, growth and transformation, zen minimalist, dark background, purple wisps, contemplative journey.",
        "module-psychology-decisions.webp": "Japanese brush art, a glowing lightbulb made of amber brushstrokes, wisdom illuminating darkness, purple neural threads, ink wash style, minimalist.",
        "module-brain-neuroscience.webp": "Zen ink illustration, DNA helix intertwined with brain neurons, amber gold synapses firing, purple energy streams, sumi-e on dark void.",

        # SHELF 2: Technology & AI
        "module-ai-machine-learning.webp": "Japanese woodblock style, geometric origami robot with amber glowing core, circuit patterns as brush strokes, purple data streams, futuristic zen.",
        "module-python-data-science.webp": "Sumi-e serpent coiling around data points, amber scales, purple code wisps, elegant python form, dark background, minimalist tech.",
        "module-blockchain-web3.webp": "Ink brush chain links forming infinity symbol, amber connections glowing, decentralized network as constellation, purple nodes, zen digital.",

        # SHELF 3: Wealth & Finance
        "module-wealth-building.webp": "Zen bamboo growing upward with golden coin leaves, abundance through patience, amber light prosperity, purple mist, ink brush simplicity.",

        # SHELF 4: Communication & Influence
        "module-negotiation-influence.webp": "Two hands in ink brush style reaching toward amber golden handshake, bridge of trust, purple energy exchange, zen diplomacy, dark void.",

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
    },
    "levels": {
        # ============================================
        # Personal Development - 10 Levels (DONE)
        # ============================================
        "level-pd-01-foundation.webp": "Sumi-e single seed cracking open, amber root emerging into soil, first growth, zen beginnings, dark background, purple earth energy, foundation being laid.",
        "level-pd-02-deep-work.webp": "Ink brush laser beam of amber light cutting through darkness, absolute focus, zen concentration, purple distractions dissolving, single point meditation.",
        "level-pd-03-future-self.webp": "Ink wash silhouette looking at amber mirror reflection of elevated self, bridge between now and future, purple time wisps, zen transformation.",
        "level-pd-04-purpose.webp": "Compass needle pointing to amber north star, finding direction, purple cosmic dust, zen clarity of purpose, minimalist navigation.",
        "level-pd-05-values.webp": "Balanced zen stones stack with amber glow at center, priorities in harmony, purple mist, what matters most, mindful arrangement.",
        "level-pd-06-mental-models.webp": "Interconnected amber geometric shapes floating in void, mental frameworks, purple neural connections, zen thinking patterns, clarity of thought.",
        "level-pd-07-productivity.webp": "Ink brush flowing river with amber current, systems flowing smoothly, purple banks guiding flow, zen efficiency, natural productivity.",
        "level-pd-08-emotional.webp": "Heart rendered in sumi-e with amber warmth radiating, emotional awareness, purple feeling waves, zen emotional mastery, inner peace.",
        "level-pd-09-learning.webp": "Open book with amber knowledge light rising, pages as stepping stones, purple wisdom streams, zen learning, memory palace.",
        "level-pd-10-integration.webp": "All previous symbols merged into one golden mandala, complete integration, purple cosmic wholeness, zen mastery achieved, transformation complete.",

        # ============================================
        # AI & Machine Learning - 4 Levels
        # ============================================
        "level-ai-01-intelligence.webp": "Sumi-e brain evolving from primitive to complex, amber neural spark, evolution of intelligence, purple synaptic glow, zen understanding of mind.",
        "level-ai-02-future.webp": "Futuristic cityscape in ink wash, amber AI light illuminating streets, purple digital rain, 2041 future scenarios, zen technological harmony.",
        "level-ai-03-mastery.webp": "Human and machine hands reaching toward amber light between them, AI mastery, purple code streams, zen human-machine collaboration.",
        "level-ai-04-cutting-edge.webp": "Quantum particles orbiting amber core, cutting edge technology, purple energy waves, 2026 innovations, zen future visualization.",

        # ============================================
        # Psychology / Dark Psychology - 10 Levels
        # ============================================
        "level-dp-01-personality.webp": "Ink brush theater masks - light and dark faces, amber eyes glowing, dark personality recognition, purple shadow psychology, zen awareness.",
        "level-dp-02-manipulation.webp": "Puppet strings in sumi-e style, amber puppet breaking free, manipulation awareness, purple tangled threads, zen liberation from control.",
        "level-dp-03-persuasion.webp": "Rippling amber waves emanating from center point, persuasion science, purple influence circles, zen understanding of human nature.",
        "level-dp-04-biases.webp": "Optical illusion in ink wash, amber clarity cutting through, cognitive biases revealed, purple mental fog lifting, zen clear thinking.",
        "level-dp-05-body-language.webp": "Minimalist figure in ink brush, amber body language signals radiating, micro-expressions, purple emotional aura, zen nonverbal communication.",
        "level-dp-06-deception.webp": "Two-faced ink mask splitting apart, amber truth light shining through, deception detection, purple shadows fleeing, zen honesty.",
        "level-dp-07-social-engineering.webp": "Digital lock being opened by ink brush key, amber security glow, social engineering defense, purple hack attempts fading, zen protection.",
        "level-dp-08-emotional-manipulation.webp": "Heart protected by amber shield of awareness, emotional manipulation defense, purple toxic waves deflected, zen emotional armor.",
        "level-dp-09-power.webp": "Chess pieces in sumi-e style, amber king radiating power, power dynamics understanding, purple strategic moves, zen leadership.",
        "level-dp-10-ethics.webp": "Warrior monk in defensive stance, amber protective aura, ethical defense mastery, purple dark forces held at bay, zen moral strength.",

        # ============================================
        # Python & Data Science - 7 Levels
        # ============================================
        "level-python-01-fundamentals.webp": "Ink brush serpent coiling into amber code symbols, Python fundamentals, purple data streams, zen programming foundations.",
        "level-python-02-analysis.webp": "Data charts rising like mountains in sumi-e style, amber insight peaks, data visualization, purple trend lines flowing, zen data understanding.",
        "level-python-03-deepdive.webp": "Diving figure into ocean of amber code, deep dive into Python, purple syntax waves, zen mastery through depth.",
        "level-python-04-pandas.webp": "Bamboo (pandas) forest with amber data leaves, data wrangling, purple dataframe patterns, zen data manipulation.",
        "level-python-05-visualization.webp": "Fireworks of charts and graphs in ink wash, amber visualization explosion, data beauty, purple color gradients, zen data art.",
        "level-python-06-ml.webp": "Neural network as zen garden, amber nodes connected, machine learning, purple algorithm paths, zen artificial intelligence.",
        "level-python-07-projects.webp": "Multiple completed structures in ink brush style, amber project achievements, real-world mastery, purple connections between projects, zen completion.",

        # ============================================
        # Wealth Building - 11 Levels
        # ============================================
        "level-wealth-01-mindset.webp": "Seed growing into money tree in sumi-e style, amber golden leaves, wealth mindset foundations, purple abundance energy, zen prosperity.",
        "level-wealth-02-investing.webp": "Value scale balancing in ink wash, amber coins weighing true worth, value investing, purple market noise fading, zen patient wealth.",
        "level-wealth-03-leads.webp": "Funnel capturing amber golden opportunities, lead generation, purple prospect streams flowing in, zen business growth.",
        "level-wealth-04-business.webp": "Building rising from ground in ink brush, amber business foundation, income fundamentals, purple revenue streams, zen entrepreneurship.",
        "level-wealth-05-advanced-investing.webp": "Complex financial chart as mountain range, amber peaks of returns, advanced investing, purple market patterns, zen long-term vision.",
        "level-wealth-06-building.webp": "Empire of connected buildings in sumi-e, amber business network glowing, business building, purple expansion waves, zen empire creation.",
        "level-wealth-07-realestate.webp": "Properties as zen stones stacking upward, amber real estate glow, property investing, purple passive income streams, zen landlord wisdom.",
        "level-wealth-08-tax.webp": "Maze transforming into clear path, amber tax optimization light, tax strategy, purple savings accumulating, zen financial efficiency.",
        "level-wealth-09-psychology.webp": "Mind and money merging in ink wash, amber wealthy mindset, wealth psychology, purple limiting beliefs dissolving, zen abundance.",
        "level-wealth-10-fire.webp": "Phoenix rising with amber flames, financial independence achieved, FIRE movement, purple freedom glow, zen early retirement.",
        "level-wealth-11-billionaire.webp": "Cosmic scale wealth symbols floating, amber billionaire strategies, extreme wealth, purple infinite abundance, zen mastery of money.",

        # ============================================
        # Negotiation - 4 Levels
        # ============================================
        "level-neg-01-fbi.webp": "FBI badge in sumi-e style with amber tactical glow, negotiation tactics, purple psychological insight, zen hostage negotiator calm.",
        "level-neg-02-words.webp": "Words flowing as amber calligraphy, powerful language, purple persuasion waves, zen communication mastery, words that work.",
        "level-neg-03-mastery.webp": "Two hands shaking with amber deal glow, negotiation mastery, purple win-win energy, zen mutual benefit achieved.",
        "level-neg-04-advanced.webp": "Advanced chess game in ink brush, amber strategic moves, FBI advanced tactics, purple psychological warfare, zen tactical superiority.",

        # ============================================
        # Bruce Lee Philosophy - 5 Levels
        # ============================================
        "level-bruce-01-water.webp": "Water taking shape of container in ink wash, amber fluid energy, be water philosophy, purple adaptability flow, zen formlessness.",
        "level-bruce-02-noway.webp": "Empty dojo with amber light, the way of no way, purple absence of fixed form, zen martial freedom, Jeet Kune Do.",
        "level-bruce-03-mindbody.webp": "Martial artist in perfect stance, amber chi energy radiating, mind-body unity, purple spirit flow, zen physical mastery.",
        "level-bruce-04-actualization.webp": "Figure breaking through ceiling into amber light, self-actualization, purple potential unleashed, zen becoming your true self.",
        "level-bruce-05-legacy.webp": "Eternal flame reflected in still water, amber dragon legacy, impact across generations, purple timeless wisdom, zen immortal teachings.",

        # ============================================
        # Blockchain & Web3 - 3 Levels
        # ============================================
        "level-blockchain-01-fundamentals.webp": "Chain links forming in sumi-e style, amber cryptographic connections, blockchain basics, purple decentralized nodes, zen distributed trust.",
        "level-blockchain-02-deepdive.webp": "Diving into digital ocean of amber blocks, Web3 deep dive, purple smart contract glow, zen decentralized mastery.",
        "level-blockchain-03-cutting-edge.webp": "Futuristic blockchain city in ink wash, amber innovation light, 2025-2026 developments, purple DeFi streams, zen crypto future.",

        # ============================================
        # Life Design - 3 Levels
        # ============================================
        "level-life-01-design.webp": "Architect drafting life blueprint in ink brush, amber design elements, life planning, purple possibility pathways, zen intentional living.",
        "level-life-02-financial.webp": "Breaking free from chains in sumi-e, amber financial independence light, freedom achieved, purple corporate shadows left behind, zen autonomy.",
        "level-life-03-advanced.webp": "Multi-dimensional life in ink wash, amber mastery glow, advanced life design, purple integrated success, zen complete freedom.",

        # ============================================
        # Master Synthesis - 3 Levels
        # ============================================
        "level-synthesis-01-dots.webp": "Stars connecting into constellations, amber knowledge dots linking, connecting wisdom, purple insight pathways, zen pattern recognition.",
        "level-synthesis-02-legacy.webp": "Master teaching student in ink brush, amber wisdom transfer, legacy building, purple generational knowledge, zen passing the torch.",
        "level-synthesis-03-advanced.webp": "All knowledge streams merging into one amber river, advanced synthesis, purple unified understanding, zen total integration.",

        # ============================================
        # Brain & Neuroscience - 3 Levels
        # ============================================
        "level-brain-01-foundations.webp": "Brain cross-section in sumi-e style, amber neural pathways glowing, neuroscience basics, purple synaptic connections, zen mind understanding.",
        "level-brain-02-optimization.webp": "Brain leveling up with amber enhancements, cognitive optimization, purple neuroplasticity waves, zen mental performance.",
        "level-brain-03-advanced.webp": "Transcendent brain floating in cosmos, amber enlightened neurons, advanced brain science, purple quantum consciousness, zen neural mastery.",

        # ============================================
        # Body & Longevity - 3 Levels
        # ============================================
        "level-body-01-longevity.webp": "Fountain of youth in ink wash style, amber life force flowing, longevity foundations, purple vitality streams, zen eternal health.",
        "level-body-02-physical.webp": "Athlete in perfect form in sumi-e, amber peak performance glow, physical optimization, purple strength aura, zen body mastery.",
        "level-body-03-biohacking.webp": "Human merging with technology in ink brush, amber biohacking light, advanced optimization, purple enhanced biology, zen transhuman potential.",

        # ============================================
        # Spirituality & Sadhana - 3 Levels
        # ============================================
        "level-spirit-01-sadhana.webp": "Morning meditation scene in ink wash, amber spiritual practice glow, sadhana foundations, purple devotion light, zen daily discipline.",
        "level-spirit-02-meditation.webp": "Breath visualized as amber spiral, meditation and breathwork, purple prana flow, zen inner stillness, pranayama mastery.",
        "level-spirit-03-advanced.webp": "Yogi in samadhi state, amber enlightenment aura, advanced practices, purple cosmic consciousness, zen spiritual transcendence.",

        # ============================================
        # Shiva-Shakti Philosophy - 3 Levels
        # ============================================
        "level-shiva-01-kashmir.webp": "Himalayan peak with amber trishul, Kashmir Shaivism foundations, purple cosmic dance, zen non-dual awareness, Shiva consciousness.",
        "level-shiva-02-tattvas.webp": "36 elements spiraling in ink wash, amber tattva light, cosmic principles, purple creation layers, zen understanding reality.",
        "level-shiva-03-nondual.webp": "Shiva-Shakti union in sumi-e, amber divine embrace, non-dual practice, purple unified consciousness, zen ultimate truth.",

        # ============================================
        # Temple Science - 3 Levels
        # ============================================
        "level-temple-01-foundations.webp": "Ancient temple entrance in ink brush, amber sacred geometry glow, temple science basics, purple divine proportions, zen sacred architecture.",
        "level-temple-02-architecture.webp": "Temple blueprint with amber measurements, sacred architecture, purple vastu energy lines, zen divine design principles.",
        "level-temple-03-energy.webp": "Temple radiating amber energy waves, temple energy systems, purple ley line networks, zen cosmic power centers.",

        # ============================================
        # Polymath Mastery - 3 Levels
        # ============================================
        "level-polymath-01-foundations.webp": "Leonardo da Vinci style notebook in sumi-e, amber curiosity light, polymath foundations, purple multi-domain sketches, zen renaissance mind.",
        "level-polymath-02-learning.webp": "Multiple skill trees growing from one root, amber learning systems, knowledge acquisition, purple cross-pollination, zen meta-learning.",
        "level-polymath-03-mastery.webp": "Expert-generalist crowned in amber light, polymath mastery achieved, purple infinite domains, zen ultimate knowledge integration.",
    },
}

# ============================================================
# FUNCTIONS
# ============================================================

def is_missing(path: Path) -> bool:
    return not path.exists() or path.stat().st_size == 0


def generate_image(model, prompt: str, output_path: Path, retries: int = 3) -> bool:
    for attempt in range(retries):
        try:
            full_prompt = f"{STYLE}\n\n{prompt}"
            response = model.generate_content(full_prompt)

            # Try to extract image data
            if response.candidates:
                candidate = response.candidates[0]
                if candidate.content and candidate.content.parts:
                    for part in candidate.content.parts:
                        if hasattr(part, 'inline_data') and part.inline_data and part.inline_data.data:
                            with open(output_path, "wb") as f:
                                f.write(part.inline_data.data)
                            return True

            if attempt < retries - 1:
                print(f"retry {attempt + 2}...", end=" ", flush=True)
                time.sleep(5)
            else:
                print(f"No image data")

        except Exception as e:
            if "429" in str(e):
                if attempt < retries - 1:
                    wait = 30 * (attempt + 1)
                    print(f"rate limit, waiting {wait}s...", end=" ", flush=True)
                    time.sleep(wait)
                else:
                    print(f"Rate limited")
            else:
                print(f"Error: {e}")

    return False


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--all", action="store_true", help="Regenerate all")
    parser.add_argument("--category", choices=list(PROMPTS.keys()))
    args = parser.parse_args()

    only_missing = not args.all

    print("=" * 50)
    print("POLYMIND IMAGE GENERATOR")
    print("=" * 50)

    genai.configure(api_key=GEMINI_API_KEY)
    model = genai.GenerativeModel(MODEL_NAME)

    categories = [args.category] if args.category else list(PROMPTS.keys())

    for cat in categories:
        print(f"\n[{cat.upper()}]")
        output_dir = OUTPUT_DIRS[cat]

        for filename, prompt in PROMPTS[cat].items():
            path = output_dir / filename

            if only_missing and not is_missing(path):
                print(f"  SKIP {filename}")
                continue

            print(f"  GEN  {filename}...", end=" ", flush=True)

            if generate_image(model, prompt, path):
                kb = path.stat().st_size / 1024
                print(f"OK ({kb:.0f}KB)")
                time.sleep(3)  # Delay between successful generations
            else:
                print("FAILED")
                time.sleep(10)  # Longer delay after failure

    print("\nDone!")


if __name__ == "__main__":
    main()
