#!/usr/bin/env python3
"""
Polymind AI Image Generator
===========================
Generates AI images for the Polymind app using Google Gemini 2.5 Flash Image.

Usage:
  python scripts/generate-ai-images.py [--all | --missing | --category <name>]

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

MODEL_NAME = "gemini-2.5-flash-image"  # Gemini 2.5 Flash Image for image generation

# Aspect ratio for module/level images (16:9)
ASPECT_RATIO = "16:9"

# Images that need regeneration with correct aspect ratio
IMAGES_TO_REGENERATE = [
    "module-western-philosophy.webp",
    "module-astronomy.webp",
    "module-temple-science.webp",
    "module-finance-investing.webp",
]

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

BHARAT_STYLE = """
Minimalist illustration blending Japanese Zen sumi-e with ancient Indian art.
Inspired by ink wash painting with subtle touches of Rajput miniature and temple art.
Dark background #0A0A0B with subtle texture.
Primary warm saffron-amber gold #F59E0B as accent.
Secondary soft purple #8B5CF6 and deep indigo wisps.
Clean brushstroke aesthetics, negative space, sacred geometry hints.
Elegant line work, contemplative mood, spiritual depth.
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

        # ============================================
        # Coming Soon Modules (17 new)
        # ============================================

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

        # ============================================
        # NEW COMING SOON MODULES (37 new)
        # ============================================

        # Mind & Performance
        "module-emotional-intelligence.webp": "Heart and brain balanced on zen scale in sumi-e style, amber emotional awareness glow, EQ mastery, purple empathy waves radiating, zen self-awareness.",

        # Technology & Code
        "module-web-development.webp": "Code brackets forming a digital doorway in ink brush, amber HTML tags glowing, web creation, purple CSS waves flowing, zen full-stack building.",
        "module-cloud-devops.webp": "Cloud formation with container ships floating in ink wash, amber deployment light, DevOps flow, purple CI/CD pipelines, zen infrastructure harmony.",

        # Wealth & Power
        "module-sales-mastery.webp": "Handshake transforming into golden deal in sumi-e, amber persuasion light, sales excellence, purple trust bridge forming, zen closing mastery.",
        "module-personal-branding.webp": "Personal seal stamp in ink brush style, amber brand essence radiating, identity crafting, purple influence aura, zen authentic presence.",
        "module-entrepreneurship-101.webp": "Seed sprouting into business tree in sumi-e, amber startup flame, founder journey, purple growth pathways, zen venture beginning.",

        # Finance & Markets
        "module-technical-analysis.webp": "Candlestick chart as mountain range in ink wash, amber support levels glowing, chart mastery, purple resistance patterns, zen price action.",
        "module-options-trading.webp": "Greek letters floating around options chain in sumi-e, amber premium glow, derivatives mastery, purple volatility waves, zen strategic positioning.",
        "module-macro-economics.webp": "Federal Reserve building with economic waves in ink brush, amber interest rate light, macro forces, purple inflation spirals, zen global understanding.",
        "module-crypto-trading.webp": "Bitcoin symbol as ancient coin in sumi-e style, amber blockchain glow, digital asset mastery, purple on-chain flows, zen crypto cycles.",

        # Spirit & Body
        "module-yoga-philosophy.webp": "Eight-petaled lotus representing yoga limbs in ink wash, amber spiritual ascent, classical yoga wisdom, purple prana channels, zen mind-body unity.",

        # Synthesis & Mastery
        "module-mental-models.webp": "Interconnected thinking frameworks as constellation in sumi-e, amber insight nodes glowing, decision frameworks, purple mental lattice, zen clarity of thought.",
        "module-first-principles.webp": "Tower deconstructed to fundamental blocks in ink brush, amber core truth glowing, reasoning from basics, purple assumption layers stripped, zen fundamental understanding.",
        "module-meta-learning.webp": "Brain learning about itself in recursive pattern, amber skill acquisition glow, learning mastery, purple knowledge spiraling inward, zen accelerated growth.",

        # Science & Universe
        "module-biology-evolution.webp": "DNA helix transforming through evolutionary stages in sumi-e, amber life force glow, evolution understanding, purple natural selection waves, zen life science.",
        "module-quantum-mechanics.webp": "Particle in superposition shown as dual waves in ink wash, amber quantum glow, reality's nature, purple probability clouds, zen uncertainty embraced.",
        "module-earth-sciences.webp": "Earth cross-section with tectonic plates in sumi-e, amber core energy, planetary systems, purple geological layers, zen understanding our world.",

        # Creative Arts
        "module-creative-writing.webp": "Quill pen dripping story characters in ink brush, amber narrative flow, fiction mastery, purple imagination streams, zen creative expression.",
        "module-content-creation.webp": "Multiple screens emanating content waves in sumi-e, amber viral light spreading, audience building, purple engagement ripples, zen digital storytelling.",
        "module-world-building.webp": "Miniature universe in cupped hands in ink wash, amber creation light, fictional worlds, purple lore threads weaving, zen universe crafting.",

        # Strategy & Systems
        "module-game-theory.webp": "Chess pieces analyzing each other in sumi-e style, amber strategic insight, Nash equilibrium, purple decision matrices, zen calculated moves.",
        "module-decision-making.webp": "Crossroads with clear amber path emerging, decision clarity, purple alternative routes fading, zen choice architecture, optimal selection.",
        "module-risk-management.webp": "Shield deflecting storm in ink brush style, amber protection glow, navigating uncertainty, purple risk waves managed, zen antifragile stance.",

        # History & Culture
        "module-ancient-empires.webp": "Colosseum and pyramid silhouettes rising in sumi-e, amber historical wisdom light, empire patterns, purple civilizational cycles, zen lessons of time.",
        "module-modern-history.webp": "Globe with 20th century events swirling in ink wash, amber knowledge of past, modern understanding, purple historical threads connecting, zen recent wisdom.",
        "module-cultural-anthropology.webp": "Diverse masks representing cultures in sumi-e style, amber human connection, cultural understanding, purple social fabric weaving, zen anthropological insight.",

        # Practical Mastery
        "module-leadership.webp": "Lone figure on mountaintop with amber guiding light, leadership presence, purple team formation below, zen commanding clarity, inspiring others.",
        "module-problem-solving.webp": "Tangled knot unraveling with amber solution light, root cause analysis, purple complexity dissolving, zen systematic thinking, clarity emerging.",
        "module-productivity-systems.webp": "Clockwork gears in perfect harmony in ink brush, amber efficiency flow, personal systems, purple workflow optimization, zen productive mastery.",

        # Relationships & Society
        "module-dating-attraction.webp": "Two figures drawn together by amber magnetic light, attraction dynamics, purple chemistry sparks, zen social connection, romantic understanding.",
        "module-networking.webp": "Web of connections with amber relationship nodes in sumi-e, social capital, purple value exchange streams, zen network building, meaningful connections.",
        "module-parenting.webp": "Parent and child silhouettes with amber nurturing light, raising children wisely, purple developmental stages, zen family wisdom, guiding growth.",
        "module-social-intelligence.webp": "Eye reading room with amber awareness glow in ink wash, reading people, purple social cues visible, zen situational mastery, charisma building.",

        # Ancient Wisdom
        "module-stoicism.webp": "Stoic philosopher silhouette with amber inner fire in sumi-e, Marcus Aurelius wisdom, purple virtue emanating, zen practical philosophy, calm in chaos.",
        "module-eastern-philosophy.webp": "Yin-yang transforming into Tao symbol in ink brush, amber balance light, Eastern wisdom, purple harmony flows, zen Oriental enlightenment.",
        "module-vedic-wisdom.webp": "Om symbol radiating Upanishadic wisdom in sumi-e, amber dharmic light, Vedic understanding, purple karmic threads, zen sanatan knowledge.",
        "module-mythology.webp": "Hero ascending with amber archetypal light in ink wash, mythological patterns, purple universal stories spiraling, zen timeless narratives, Campbell's journey.",

        # ============================================
        # Bharat Wisdom — 6 NEW modules
        # ============================================
        "module-bhagavad-gita.webp": "Krishna and Arjuna on chariot silhouette in sumi-e with Indian miniature touches, amber divine light radiating from Krishna, Kurukshetra battlefield mist, purple cosmic energy, sacred discourse, ancient Indian wisdom.",
        "module-ramayana-mahabharata.webp": "Epic bow and arrow crossing with royal crown in ink wash, amber heroic light, ancient Indian epic silhouettes, purple dharma flames, mythological grandeur, Rajput miniature style.",
        "module-upanishads.webp": "Sacred flame in forest hermitage in sumi-e style, amber Brahman light radiating outward, Upanishadic self-inquiry, purple cosmic consciousness wisps, ancient Indian sage silhouette meditating.",
        "module-shiv-sutras.webp": "Shiva in meditation with trishul and crescent moon in ink wash, amber Shakti energy spiraling upward, Kashmir Shaivism tantra, purple non-dual consciousness, sacred vibration spanda.",
        "module-sanskrit-mantras.webp": "Devanagari OM symbol dissolving into sound waves in sumi-e, amber mantra vibrations radiating, Sanskrit sacred syllables, purple Vedic chanting energy, ancient Indian calligraphy art.",
        "module-jyotish-vastu.webp": "Navagraha planetary alignment above temple floor plan in ink wash, amber celestial light, Jyotish astrology chart, purple sacred geometry Vastu mandala, ancient Indian cosmic science.",
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

        # ============================================
        # Emotional Intelligence - 10 Levels
        # ============================================
        "level-eq-01-foundations.webp": "Sumi-e heart and brain side by side, amber golden bridge connecting them, emotional intelligence foundations, purple empathy waves radiating, zen self-awareness awakening.",
        "level-eq-02-self-awareness.webp": "Ink brush figure gazing into amber reflective pool, mirror of the soul, self-awareness mastery, purple emotional patterns revealed beneath surface, zen inner knowing.",
        "level-eq-03-regulation.webp": "Stormy waves calming into still water in sumi-e style, amber anchor of stability at center, self-regulation mastery, purple turbulence dissolving into peace, zen emotional balance.",
        "level-eq-04-motivation.webp": "Inner flame rising through figure's core in ink wash, amber fire of intrinsic motivation, grit and drive, purple flow state energy spiraling upward, zen purpose ignited.",
        "level-eq-05-empathy.webp": "Two silhouette profiles facing each other with amber light flowing between minds, empathy bridge, purple compassion waves connecting hearts, zen deep understanding of others.",
        "level-eq-06-social-skills.webp": "Network of ink brush figures connected by amber golden threads, social mastery, purple rapport building energy, zen art of communication and human connection.",
        "level-eq-07-relationships.webp": "Two hands reaching toward each other in sumi-e, amber love light at touching point, relationship mastery, purple attachment bonds glowing, zen emotional intimacy.",
        "level-eq-08-leadership.webp": "Leader figure radiating amber light to team below in ink wash, resonant leadership, purple psychological safety aura protecting group, zen emotionally intelligent command.",
        "level-eq-09-dark-side.webp": "Shield deflecting dark ink tendrils in sumi-e style, amber protective awareness glowing, defense against manipulation, purple toxic patterns repelled, zen emotional armor and boundaries.",
        "level-eq-10-integration.webp": "Lotus flower with ten petals fully bloomed in ink wash, amber EQ mastery light radiating from center, complete integration, purple wisdom of all emotions unified, zen emotional transcendence.",

        # ============================================
        # Sales Mastery - 10 Levels
        # ============================================
        "level-sm-01-foundations.webp": "Sumi-e handshake with amber golden energy flowing between two hands, sales foundations, purple trust aura radiating outward, zen art of serving through selling.",
        "level-sm-02-buyers.webp": "Ink brush silhouette of a mind with amber gears turning inside, understanding buyer psychology, purple decision pathways illuminated, zen reading the customer's soul.",
        "level-sm-03-prospecting.webp": "Sumi-e figure casting amber fishing line into vast ocean of dots, prospecting and outreach, purple ripples of connection spreading, zen patient persistence.",
        "level-sm-04-discovery.webp": "Ink wash magnifying glass revealing amber golden insights beneath surface, SPIN discovery questions, purple layers of pain uncovered, zen art of deep listening.",
        "level-sm-05-pitch.webp": "Sumi-e storyteller on stage with amber spotlight radiating outward, pitch mastery, purple audience captivated in awe, zen compelling presentation.",
        "level-sm-06-objections.webp": "Ink brush shield transforming dark arrows into amber golden light, objection handling mastery, purple reframing energy, zen turning resistance into agreement.",
        "level-sm-07-closing.webp": "Two sumi-e figures with amber golden seal forming between their hands, closing the deal, purple commitment energy crystallizing, zen decisive moment.",
        "level-sm-08-relationships.webp": "Network of ink brush nodes connected by amber golden threads growing over time, relationship selling, purple trust roots deepening, zen lifelong client bonds.",
        "level-sm-09-psychology.webp": "Sumi-e brain with six amber golden orbs orbiting it, Cialdini's influence principles, purple persuasion waves emanating, zen ethical mastery of human psychology.",
        "level-sm-10-leadership.webp": "Ink wash figure atop mountain radiating amber light to team climbing below, sales leadership, purple coaching energy descending, zen building a world-class sales force.",

        # ============================================
        # Personal Branding - 10 Levels
        # ============================================
        "level-pb-01-foundations.webp": "Sumi-e diamond being polished with amber golden facets emerging, personal brand foundations, purple authentic glow radiating outward, zen discovering your unique brilliance.",
        "level-pb-02-niche.webp": "Ink brush crosshairs zeroing in on amber golden target at center, finding your niche, purple Ikigai circles overlapping, zen precision of positioning.",
        "level-pb-03-identity.webp": "Sumi-e calligraphy brush writing a glowing amber character, brand identity and messaging, purple StoryBrand framework flowing, zen crafting your brand story.",
        "level-pb-04-content.webp": "Ink wash fountain pen with amber golden ink flowing into multiple streams, content strategy, purple ideas branching into pillars, zen creative abundance.",
        "level-pb-05-platforms.webp": "Sumi-e figure standing at crossroads with amber glowing paths to different platforms, platform mastery, purple digital landscapes stretching to horizon, zen omnipresence.",
        "level-pb-06-audience.webp": "Ink brush crowd of small figures drawn toward amber golden lighthouse, audience building, purple community bonds forming, zen magnetic attraction.",
        "level-pb-07-storytelling.webp": "Sumi-e open book with amber golden characters leaping off pages, storytelling and copywriting, purple narrative threads weaving together, zen power of words.",
        "level-pb-08-monetization.webp": "Ink wash tree with amber golden coins as fruit on every branch, monetization mastery, purple value exchange flowing, zen turning influence into income.",
        "level-pb-09-thought-leadership.webp": "Sumi-e figure at podium with amber golden ideas radiating like sun rays, thought leadership, purple intellectual authority glowing, zen becoming the voice of your field.",
        "level-pb-10-legacy.webp": "Ink wash oak tree with deep amber golden roots and vast canopy, brand legacy, purple generational impact spreading, zen building something that outlasts you.",

        # ============================================
        # Entrepreneurship 101 - 10 Levels
        # ============================================
        "level-ent-01-mindset.webp": "Sumi-e figure leaping across chasm with amber golden wings forming, entrepreneurial mindset, purple courage fire burning within, zen bold leap into the unknown.",
        "level-ent-02-ideas.webp": "Ink brush lightbulb cracking open with amber golden sparks erupting, finding ideas worth building, purple problem-solution connections forming, zen moment of inspiration.",
        "level-ent-03-discovery.webp": "Sumi-e figure with ear pressed to ground hearing amber golden sound waves, customer discovery, purple user insights rising from earth, zen art of truly listening.",
        "level-ent-04-models.webp": "Ink wash canvas with nine amber golden building blocks arranged in grid, business model canvas, purple strategy flows connecting blocks, zen architectural blueprint.",
        "level-ent-05-mvp.webp": "Sumi-e potter shaping rough clay on wheel with amber golden glow, building MVP, purple rapid iteration spirals, zen minimum viable craft.",
        "level-ent-06-offers.webp": "Ink brush treasure chest overflowing with amber golden gems, grand slam offer, purple irresistible value stacking upward, zen art of the offer they can't refuse.",
        "level-ent-07-growth.webp": "Sumi-e rocket trail curving upward in amber golden streak, marketing and growth, purple viral loops expanding, zen exponential trajectory.",
        "level-ent-08-systems.webp": "Ink wash clockwork mechanism with amber golden gears meshing perfectly, operations and systems, purple efficiency flows, zen machine that runs itself.",
        "level-ent-09-funding.webp": "Sumi-e seedling growing into amber golden tree with investors watching, fundraising and finance, purple capital flowing like rain, zen nurturing growth with resources.",
        "level-ent-10-scaling.webp": "Ink wash mountain peak with amber golden flag planted at summit, scaling and leadership, purple empire spreading across landscape, zen building something extraordinary.",

        # ============================================
        # Bhagavad Gita - 10 Levels
        # ============================================
        "level-gita-01-crisis.webp": "Arjuna kneeling with bow dropped on battlefield in ink wash with Indian miniature touches, amber divine light from Krishna's silhouette, purple war mist, decision paralysis, ancient Indian chariot.",
        "level-gita-02-karma.webp": "Hands performing action with flames in sumi-e Indian style, amber karma energy radiating outward, detached action, purple consequence streams flowing, selfless service.",
        "level-gita-03-jnana.webp": "Sword of wisdom cutting through veil of illusion in ink wash, amber knowledge light piercing ego, purple maya dissolving, self-inquiry, ancient Indian sage.",
        "level-gita-04-bhakti.webp": "Heart offering lotus to cosmic void in sumi-e Indian style, amber devotion light ascending, surrender as strength, purple divine love energy, temple silhouette.",
        "level-gita-05-gunas.webp": "Three intertwined energy streams in ink wash, amber sattva light central, purple rajas and dark tamas, energy management framework, Indian sacred balance.",
        "level-gita-06-dhyana.webp": "Meditating figure with third eye radiating in sumi-e, amber meditation light expanding, mind mastery, purple thought waves stilling, Himalayan peak backdrop.",
        "level-gita-07-vibhuti.webp": "Cosmic manifestations spiraling from divine center in ink wash, amber excellence patterns, divine expressions in nature, purple greatness energy, Indian temple spire.",
        "level-gita-08-vishwarupa.webp": "Infinite cosmic form with countless eyes and arms in sumi-e, amber cosmic vision overwhelming, systems thinking, purple universal expansion, mind-bending scale.",
        "level-gita-09-kshetra.webp": "Observer watching their own mind as field in ink wash, amber awareness light, knower and known separation, purple metacognition streams, Indian mirror motif.",
        "level-gita-10-moksha.webp": "Liberated bird soaring from golden cage into infinite sky in sumi-e, amber freedom light, personal philosophy synthesis, purple enlightened peace, lotus opening below.",

        # ============================================
        # Ramayana & Mahabharata - 10 Levels
        # ============================================
        "level-epic-01-bala.webp": "Young prince drawing impossible bow in ink wash Indian style, amber heroic destiny light, royal court silhouettes, purple divine weapons, Rama's preparation.",
        "level-epic-02-exile.webp": "Royal figure walking into forest leaving palace behind in sumi-e, amber resilience flame within, exile into wilderness, purple adaptability streams, ancient Indian jungle.",
        "level-epic-03-alliance.webp": "Hanuman flying with mountain silhouette in ink wash, amber devotion and alliance energy, bridge of cooperation, purple vanara army assembling, strategic partnerships.",
        "level-epic-04-war.webp": "Epic battle with divine weapons clashing in sumi-e Indian style, amber strategic warfare light, Lanka burning distant, purple dharma vs adharma, arrows of destiny.",
        "level-epic-05-dharma.webp": "Crown being placed on throne with balance scales in ink wash, amber governance wisdom, justice and dharma, purple legacy threads, Ram Rajya ideal kingdom.",
        "level-epic-06-adi.webp": "Two rival families silhouetted with shared throne between in sumi-e, amber ambition fire, Kuru dynasty origins, purple jealousy and pride, palace intrigue.",
        "level-epic-07-sabha.webp": "Dice game with devastating stakes in ink wash Indian style, amber risk and loss, Draupadi's dignity flame, purple patience as strategy, exile beginning.",
        "level-epic-08-diplomacy.webp": "Krishna as peace envoy between two armies in sumi-e, amber negotiation light failing, war becoming inevitable, purple escalation dynamics, last chance for peace.",
        "level-epic-09-grief.webp": "Lone figure on empty battlefield at sunset in ink wash, amber mourning light, cost of victory, purple grief waves, aftermath of Kurukshetra.",
        "level-epic-10-shanti.webp": "Bhishma on arrow bed teaching governance wisdom in sumi-e, amber statecraft knowledge radiating, deathbed wisdom, purple leadership legacy, Shanti Parva teachings.",

        # ============================================
        # Upanishads - 10 Levels
        # ============================================
        "level-upan-01-intro.webp": "Forest hermitage with fire and students in ink wash Indian style, amber Brahman light emanating from fire, Upanishadic inquiry, purple consciousness wisps, guru-shishya.",
        "level-upan-02-isha.webp": "World held in open hands yet not grasped in sumi-e, amber non-attachment light, Isha living fully yet free, purple renunciation energy, lotus untouched by water.",
        "level-upan-03-katha.webp": "Nachiketa before Yama god of death in ink wash, amber immortality light, choosing good over pleasant, purple mortality awareness, chariot metaphor for self.",
        "level-upan-04-mundaka.webp": "Two birds on tree branch one eating one watching in sumi-e, amber higher knowledge light, lower vs higher wisdom, purple six questions radiating, sacred fire.",
        "level-upan-05-mandukya.webp": "OM symbol expanding through four states in ink wash, amber turiya consciousness, waking dreaming deep sleep, purple awareness beyond states, consciousness map.",
        "level-upan-06-taittiriya.webp": "Five concentric layers of self like Russian dolls in sumi-e, amber annamaya to anandamaya, five koshas, purple holistic wellness, food to bliss body.",
        "level-upan-07-chandogya.webp": "Salt dissolving into water becoming invisible yet present in ink wash, amber Tat Tvam Asi realization, that thou art, purple universal self pervading, father teaching son.",
        "level-upan-08-brihadaranyaka.webp": "Figure pointing away from everything saying neti neti in sumi-e, amber ultimate reality beyond, elimination thinking, purple not this not this, Yajnavalkya wisdom.",
        "level-upan-09-shvetashvatara.webp": "Spider spinning web from itself in ink wash Indian style, amber personal God devotion, grace and effort balance, purple creation emerging from self, meditation practice.",
        "level-upan-10-synthesis.webp": "All Upanishadic symbols merging into one golden light in sumi-e, amber integrated wisdom, modern relevance, purple timeless truth radiating, living philosophy.",

        # ============================================
        # Shiv Sutras & Tantra - 10 Levels
        # ============================================
        "level-shiv-01-kashmir.webp": "Himalayan cave with pulsating awareness light in ink wash, amber chaitanya consciousness, Kashmir Shaivism foundations, purple non-dual Shiva, snow peaks and meditation.",
        "level-shiv-02-shambhava.webp": "Lightning bolt of divine grace striking open crown in sumi-e, amber Shambhavopaya direct recognition, divine means, purple sudden awakening flash, effortless realization.",
        "level-shiv-03-shakta.webp": "Mantra vibrations spiraling around meditating figure in ink wash, amber Shaktopaya energy, empowered means, purple sacred sound waves, will and intention focused.",
        "level-shiv-04-anava.webp": "Breath pattern flowing through subtle channels in sumi-e, amber Anavopaya practice, individual means, purple pranayama energy, body as temple for realization.",
        "level-shiv-05-spanda.webp": "Cosmic heartbeat pulse radiating through everything in ink wash, amber spanda vibration, doctrine of divine pulsation, purple creative tremor, life as vibration.",
        "level-shiv-06-pratyabhijna.webp": "Face recognizing itself in cosmic mirror in sumi-e, amber self-recognition flash, Pratyabhijna philosophy, purple remembering divinity, already what you seek.",
        "level-shiv-07-vijnana.webp": "112 doorways radiating from central point in ink wash, amber meditation techniques, Vijnanabhairava centering practices, purple experiential wisdom, practical tantra.",
        "level-shiv-08-tantric.webp": "Sacred yantra geometry with ritual elements in sumi-e Indian style, amber tantric fire ceremony, practices and rituals, purple sacred technology, mantra yantra tantra.",
        "level-shiv-09-kundalini.webp": "Serpent energy rising through seven chakra lotuses in ink wash, amber kundalini ascending, chakra system psychology, purple energy awakening, spine as axis mundi.",
        "level-shiv-10-nondual.webp": "Shiva and Shakti merging into one boundless awareness in sumi-e, amber non-dual liberation light, everything is consciousness, purple absolute freedom, moksha achieved.",

        # ============================================
        # Ayurveda - 10 Levels
        # ============================================
        "level-ayur-01-foundations.webp": "Ancient healing herbs and mortar in ink wash Indian style, amber Ayurvedic wisdom light, foundations of life science, purple Dhanvantari energy, holistic health.",
        "level-ayur-02-tridosha.webp": "Three elemental forces spiraling in balance in sumi-e, amber Vata Pitta Kapha harmony, tridosha theory, purple constitutional energy, body-mind typology.",
        "level-ayur-03-prakriti.webp": "Human silhouette with elemental patterns mapped in ink wash, amber constitutional assessment, Prakriti discovery, purple unique body blueprint, personalized wellness.",
        "level-ayur-04-dinacharya.webp": "Sun rising with daily routine elements in sumi-e Indian style, amber morning ritual glow, Dinacharya daily practice, purple circadian harmony, optimal living schedule.",
        "level-ayur-05-ahara.webp": "Sacred food mandala with six tastes arranged in ink wash, amber nutritional wisdom, Ahara food science, purple digestive fire agni, mindful eating.",
        "level-ayur-06-dravyaguna.webp": "Medicinal plant garden with labeled properties in sumi-e, amber herbal medicine glow, Dravyaguna pharmacology, purple healing plant energy, nature's pharmacy.",
        "level-ayur-07-panchakarma.webp": "Five purification streams flowing through body silhouette in ink wash, amber detoxification light, Panchakarma cleansing, purple toxin removal energy, deep purification.",
        "level-ayur-08-rasa.webp": "Alchemical transformation vessel with mineral essence in sumi-e Indian style, amber Rasa Shastra transmutation, mercury and mineral medicine, purple alchemical fire, sacred chemistry.",
        "level-ayur-09-psychology.webp": "Mind layers with three gunas in sumi-e, amber sattva clarity radiating, Ayurvedic psychology, purple mental constitution mapping, emotional wellness.",
        "level-ayur-10-modern.webp": "Ancient Ayurvedic texts meeting modern lab equipment in ink wash, amber integrative medicine bridge, modern applications, purple evidence-based tradition, best of both worlds.",

        # ============================================
        # Yoga Philosophy - 10 Levels
        # ============================================
        "level-yoga-01-origins.webp": "Pashupati seal and yoga timeline flowing in ink wash Indian style, amber ancient origins light, yoga history and meaning, purple tradition river, beyond just poses.",
        "level-yoga-02-samadhi.webp": "Mind dissolving into infinite stillness in sumi-e, amber samadhi absorption light, mastering the mind, purple chitta vritti stilling, deep focus states.",
        "level-yoga-03-sadhana.webp": "Eight-limbed path ascending like temple steps in ink wash, amber ashtanga practice glow, Sadhana Pada discipline, purple klesha obstacles dissolving, systematic practice.",
        "level-yoga-04-vibhuti.webp": "Third eye radiating extraordinary perception in sumi-e, amber siddhis manifestation, Vibhuti powers through focus, purple superhuman capabilities, concentrated mind.",
        "level-yoga-05-kaivalya.webp": "Consciousness separating from matter like sunrise in ink wash, amber Kaivalya liberation, absolute freedom, purple Purusha-Prakriti distinction, final liberation.",
        "level-yoga-06-hatha.webp": "Sun and moon channels meeting at spine center in sumi-e Indian style, amber Hatha Yoga Pradipika, pranayama and bandhas, purple energy locks, embodied practice.",
        "level-yoga-07-kundalini.webp": "Coiled serpent awakening with chakra flowers blooming in ink wash, amber Kundalini tantra energy, energy systems and chakras, purple shakti rising, subtle body map.",
        "level-yoga-08-bhakti.webp": "Heart offering devotional flame to infinite in sumi-e, amber Bhakti love light, devotion and selfless service, purple Karma Yoga action, surrender and service.",
        "level-yoga-09-modern.webp": "Multiple yoga lineage trees branching from ancient root in ink wash, amber modern school diversity, Iyengar Ashtanga Yin, purple evolution of tradition, contemporary practice.",
        "level-yoga-10-integration.webp": "Yoga mat transforming into life path stretching forward in sumi-e, amber integrated living practice, yoga off the mat, purple daily embodiment, complete lifestyle.",

        # ============================================
        # Sanskrit & Mantras - 10 Levels
        # ============================================
        "level-sans-01-devanagari.webp": "Devanagari alphabet emerging from cosmic sound in ink wash Indian style, amber sacred script light, phonetics and pronunciation, purple vibrational linguistics, language of the gods.",
        "level-sans-02-grammar.webp": "Sanskrit grammatical tree with Panini's sutras in sumi-e, amber linguistic precision glow, basic grammar structures, purple sandhi connections, perfect language architecture.",
        "level-sans-03-chanting.webp": "Vedic fire ceremony with chanting waves rising in ink wash, amber Vedic recitation energy, chanting traditions, purple sonic mantras ascending, oral transmission lineage.",
        "level-sans-04-gayatri.webp": "Gayatri mantra radiating solar light in sumi-e Indian style, amber Savitri sun goddess energy, core mantras, purple divine invocation, sunrise meditation practice.",
        "level-sans-05-stotras.webp": "Devotional hymns flowing from temple bells in ink wash, amber devotional praise energy, stotras and hymns, purple bhakti sound waves, divine poetry.",
        "level-sans-06-sound.webp": "OM vibration creating concentric reality waves in sumi-e, amber Nada Brahma sound science, mantra science and vibration, purple frequency healing, sound as creation.",
        "level-sans-07-literature.webp": "Great Sanskrit texts stacked as mountain of wisdom in ink wash, amber Kalidasa literary light, Sanskrit classics, purple Mahakavya grandeur, literary heritage.",
        "level-sans-08-kavya.webp": "Poetry verse flowing like river through moonlit landscape in sumi-e Indian style, amber Kavya beauty, Sanskrit poetic art, purple rasa aesthetic emotion, artistic perfection.",
        "level-sans-09-darshana.webp": "Six philosophical schools as six pillars supporting truth in ink wash, amber Darshana wisdom light, Nyaya Vaisheshika Samkhya Yoga Mimamsa Vedanta, purple systematic thought.",
        "level-sans-10-living.webp": "Modern person speaking Sanskrit with ancient echoes in sumi-e, amber living language revival, Sanskrit today, purple tradition meeting technology, eternal language.",

        # ============================================
        # Jyotish & Vastu - 10 Levels
        # ============================================
        "level-jyot-01-foundations.webp": "Celestial chart with Nakshatras and Rashis in ink wash Indian style, amber Jyotish foundation light, astrology basics, purple cosmic timing patterns, stargazing sage.",
        "level-jyot-02-navagraha.webp": "Nine planets in sacred arrangement in sumi-e, amber Navagraha planetary influence, nine celestial bodies, purple gravitational wisdom, cosmic forces on life.",
        "level-jyot-03-rashis.webp": "Twelve zodiac signs in Indian style arranged in circle in ink wash, amber Rashi energy glow, twelve signs, purple astrological archetypes, personality patterns.",
        "level-jyot-04-bhavas.webp": "Twelve houses radiating from birth chart center in sumi-e, amber Bhava house meanings, life domains, purple karmic sectors, birth chart architecture.",
        "level-jyot-05-dashas.webp": "Timeline with planetary periods flowing like river in ink wash Indian style, amber Dasha cycle timing, planetary transits, purple life phase navigation, cosmic calendar.",
        "level-jyot-06-muhurta.webp": "Auspicious moment crystallizing from cosmic alignment in sumi-e, amber Muhurta sacred timing, electional astrology, purple perfect moment selection, when to act.",
        "level-jyot-07-vastu.webp": "House floor plan with directional energies flowing in ink wash, amber Vastu Shastra foundation, spatial harmony, purple Pancha Bhuta elements, sacred architecture.",
        "level-jyot-08-workplace.webp": "Home and office spaces optimized with energy flows in sumi-e Indian style, amber productive space design, Vastu for living, purple environmental harmony, space optimization.",
        "level-jyot-09-yantras.webp": "Sri Yantra emerging from geometric construction in ink wash, amber sacred geometry radiating, Yantras and mandalas, purple mathematical perfection, visual meditation.",
        "level-jyot-10-integration.webp": "Modern life with Jyotish and Vastu overlays guiding decisions in sumi-e, amber practical application, modern integration, purple empirical tradition, ancient meets contemporary.",

        # ============================================
        # Technical Analysis - 10 Levels
        # ============================================
        "level-ta-01-chart-reading.webp": "Sumi-e candlestick chart emerging from ink wash darkness, amber price bars glowing, chart reading foundations, purple support lines beneath, zen market observation.",
        "level-ta-02-candlesticks.webp": "Japanese candlestick patterns as zen lanterns in ink brush, amber doji and hammer shapes, candlestick mastery, purple reversal signals, ukiyo-e trading wisdom.",
        "level-ta-03-structure.webp": "Mountain range with horizontal amber support and resistance lines in sumi-e, market structure, purple price channels, zen levels holding firm, trendlines as pathways.",
        "level-ta-04-trends.webp": "Flowing river with amber moving average ribbons in ink wash, trend analysis mastery, purple momentum currents, zen following the trend, market direction.",
        "level-ta-05-momentum.webp": "Pendulum swinging with amber RSI oscillator arc in sumi-e, momentum indicators, purple MACD histogram, zen overbought oversold extremes, market energy.",
        "level-ta-06-volume.webp": "Waterfall of amber volume bars in ink wash, volume and market internals, purple accumulation distribution flow, zen market participation, conviction behind moves.",
        "level-ta-07-patterns.webp": "Geometric triangle and head-shoulders pattern in sumi-e amber outlines, chart pattern breakouts, purple measured moves projecting, zen pattern recognition, market geometry.",
        "level-ta-08-risk.webp": "Shield with amber position size grid in ink brush, risk management mastery, purple stop-loss levels protecting, zen capital preservation, disciplined sizing.",
        "level-ta-09-systems.webp": "Clockwork trading system with amber backtesting gears in sumi-e, systematic trading, purple algorithm pathways, zen mechanical approach, tested and proven.",
        "level-ta-10-psychology.webp": "Meditating trader with amber emotional balance in ink wash, trading psychology integration, purple fear and greed dissolving, zen market mindset, complete trader.",

        # ============================================
        # Quantum Mechanics - 10 Levels
        # ============================================
        "level-qm-01-quantum-world.webp": "Atom with electron cloud in sumi-e style, amber quantum glow at subatomic scale, the quantum world, purple probability haze, zen mystery of the very small.",
        "level-qm-02-wave-particle.webp": "Double-slit experiment with amber interference pattern in ink wash, wave-particle duality, purple photon paths diverging, zen nature of light, both and neither.",
        "level-qm-03-superposition.webp": "Cat silhouette half-visible half-invisible in sumi-e, amber superposition glow, probability and possibility, purple multiple states coexisting, zen being and non-being.",
        "level-qm-04-entanglement.webp": "Two particles connected by amber thread across vast distance in ink wash, quantum entanglement, purple spooky action at distance, zen instant connection, non-locality.",
        "level-qm-05-uncertainty.webp": "Blurred particle with amber position-momentum trade-off in sumi-e, uncertainty principle, purple measurement limits, zen accepting the unknowable, Heisenberg wisdom.",
        "level-qm-06-tunneling.webp": "Particle passing through amber barrier wall in ink wash, quantum tunneling, purple impossible becoming possible, zen penetrating obstacles, energy and faith.",
        "level-qm-07-computing.webp": "Qubit in superposition as amber spinning sphere in sumi-e, quantum computing, purple entangled circuit gates, zen computational revolution, beyond binary.",
        "level-qm-08-field-theory.webp": "Quantum field as amber rippling ocean surface in ink wash, quantum field theory, purple virtual particles appearing, zen everything is vibration, fields and forces.",
        "level-qm-09-interpretations.webp": "Multiple worlds branching from amber decision point in sumi-e, quantum interpretations, purple Copenhagen vs Many-Worlds, zen philosophy of reality, observer's role.",
        "level-qm-10-daily-life.webp": "Everyday objects revealing amber quantum nature beneath in ink wash, quantum thinking applied, purple practical insights radiating, zen quantum wisdom for living, integration.",

        # ============================================
        # Game Theory - 10 Levels
        # ============================================
        "level-gt-01-strategic.webp": "Chess board with amber strategic light illuminating moves in sumi-e, strategic thinking foundations, purple payoff matrix, zen rational choice, game of life.",
        "level-gt-02-prisoners.webp": "Two figures in separate cells with amber cooperation light between in ink wash, prisoner's dilemma, purple trust vs betrayal, zen cooperation paradox, defect or cooperate.",
        "level-gt-03-nash.webp": "Multiple arrows converging to amber equilibrium point in sumi-e, Nash equilibrium, purple dominant strategies radiating, zen stable balance point, no one deviates.",
        "level-gt-04-sequential.webp": "Decision tree branching downward with amber optimal path in ink wash, sequential games, purple backward induction path, zen thinking ahead, game trees.",
        "level-gt-05-mixed.webp": "Dice and probability waves in amber randomization in sumi-e, mixed strategies, purple unpredictability advantage, zen calculated randomness, keeping opponents guessing.",
        "level-gt-06-repeated.webp": "Spiral of repeated interactions with amber trust building in ink wash, repeated games and reputation, purple tit-for-tat rhythm, zen long-term thinking, shadow of future.",
        "level-gt-07-bargaining.webp": "Two hands dividing amber pie between them in sumi-e, bargaining theory, purple negotiation pressure, zen fair division, ultimatum and compromise.",
        "level-gt-08-mechanism.webp": "Auction gavel with amber mechanism design gears in ink wash, mechanism design, purple incentive alignment, zen designing the rules of the game, auction theory.",
        "level-gt-09-information.webp": "Peacock displaying amber signal feathers in sumi-e, information asymmetry and signaling, purple hidden information revealed, zen costly signals, market for lemons.",
        "level-gt-10-evolutionary.webp": "Species adapting and competing with amber survival strategies in ink wash, evolutionary game theory, purple hawk-dove dynamics, zen nature's strategies, real-world application.",

        # ============================================
        # Ancient Empires - 10 Levels
        # ============================================
        "level-ae-01-patterns.webp": "Rising and falling civilization arcs in amber curves in sumi-e, patterns of empire, purple cyclical history, zen rise and fall, lessons across ages.",
        "level-ae-02-mesopotamia.webp": "Pyramid and ziggurat silhouettes with amber Nile and Euphrates in ink wash, Egypt and Mesopotamia, purple cuneiform and hieroglyphs, zen cradle of civilization.",
        "level-ae-03-greece.webp": "Parthenon columns with amber democratic light in sumi-e, Greek democracy and philosophy, purple Athenian ideals radiating, zen birthplace of Western thought.",
        "level-ae-04-rome.webp": "Roman eagle standard with amber imperial glory in ink wash, Rome republic to empire, purple legionary paths expanding, zen law and governance, power and decline.",
        "level-ae-05-persia.webp": "Silk Road caravan with amber trade goods glowing in sumi-e, Persia and the Silk Road, purple cultural exchange flowing, zen connecting civilizations, tolerance and trade.",
        "level-ae-06-china.webp": "Great Wall stretching with amber dynastic light in ink wash, Chinese dynasties and philosophy, purple Confucian and Taoist wisdom, zen Middle Kingdom, mandate of heaven.",
        "level-ae-07-india.webp": "Ashoka pillar with amber dharma wheel in sumi-e, Maurya and Gupta India, purple golden age brilliance, zen subcontinental wisdom, science and spirituality.",
        "level-ae-08-mongols.webp": "Horseback archer with amber steppe fire in ink wash, Mongols and Ottomans, purple empire stretching across continents, zen nomadic power, military genius.",
        "level-ae-09-decline.webp": "Crumbling pillars with amber sunset light in sumi-e, why empires fall, purple decay patterns recurring, zen impermanence of power, lessons from collapse.",
        "level-ae-10-leadership.webp": "Crown with amber leadership wisdom radiating across timeline in ink wash, leadership lessons across empires, purple great leaders silhouettes, zen timeless command, history teaches.",

        # ============================================
        # Communication & Rhetoric - 10 Levels
        # ============================================
        "level-cr-01-persuasion.webp": "Rippling amber waves of influence emanating from speaker in sumi-e, foundations of persuasion, purple Aristotle's three appeals, zen art of convincing, ethos pathos logos.",
        "level-cr-02-argumentation.webp": "Logical chain links in amber with fallacy shadows in ink wash, argumentation and logic, purple syllogism structure, zen clear reasoning, sound arguments.",
        "level-cr-03-storytelling.webp": "Campfire with amber story arcs rising as smoke in sumi-e, storytelling for impact, purple narrative journey curving, zen power of story, hero's journey.",
        "level-cr-04-speaking.webp": "Lone figure at podium with amber spotlight and audience in ink wash, public speaking mastery, purple confidence aura expanding, zen commanding the room, stage presence.",
        "level-cr-05-writing.webp": "Quill pen with amber ink flowing into structured document in sumi-e, written communication mastery, purple clarity of prose, zen precise expression, words that last.",
        "level-cr-06-difficult.webp": "Two figures at table with amber bridge forming between them in ink wash, difficult conversations, purple emotional tension dissolving, zen courageous dialogue, radical candor.",
        "level-cr-07-listening.webp": "Large ear with amber sound waves entering and heart responding in sumi-e, active listening and empathy, purple understanding deepening, zen receiving fully, hearing beyond words.",
        "level-cr-08-debate.webp": "Two opposing amber flames in balanced dialectic in ink wash, debate and dialectic, purple synthesis emerging from thesis-antithesis, zen constructive disagreement, truth through opposition.",
        "level-cr-09-influence.webp": "Prism refracting amber light into multiple persuasion beams in sumi-e, influence and framing, purple perception shifts, zen shaping reality through language, frame control.",
        "level-cr-10-playbook.webp": "Open playbook with amber communication tools radiating outward in ink wash, your communication playbook, purple integrated mastery, zen complete communicator, all skills unified.",

        # ============================================
        # Stoicism - 10 Levels
        # ============================================
        "level-stoic-01-foundations.webp": "Ancient Greek column with amber Stoic flame burning steadily in sumi-e, Stoic foundations, purple philosophical wisdom, zen inner citadel, Zeno's porch.",
        "level-stoic-02-control.webp": "Two circles — inner amber circle of control, outer fading purple circle of concern in ink wash, dichotomy of control, zen acceptance, focus on what matters.",
        "level-stoic-03-virtue.webp": "Four cardinal virtues as amber pillars supporting a temple in sumi-e, courage justice temperance wisdom, purple moral excellence, zen virtuous living.",
        "level-stoic-04-seneca.webp": "Writing desk with amber candlelight and scrolls in ink wash, Seneca's letters and wisdom, purple philosophical contemplation, zen practical Stoicism, shortness of life.",
        "level-stoic-05-marcus.webp": "Emperor's laurel crown beside meditation journal in sumi-e, amber Aurelius wisdom light, Meditations, purple duty and philosophy, zen philosopher-king.",
        "level-stoic-06-psychology.webp": "Mind reframing negative thoughts into amber golden perspectives in ink wash, cognitive reappraisal, purple CBT connections, zen Stoic psychology, perception is everything.",
        "level-stoic-07-resilience.webp": "Oak tree standing firm in storm with amber roots deep in sumi-e, Stoic resilience, purple adversity as training, zen amor fati, obstacle is the way.",
        "level-stoic-08-relationships.webp": "Two Stoic figures in amber philosophical dialogue in ink wash, relationships and community, purple social virtue, zen cosmopolitan brotherhood, relating wisely.",
        "level-stoic-09-modern.webp": "Modern city skyline with amber Stoic light shining through in sumi-e, modern Stoicism, purple ancient wisdom applied today, zen daily Stoic practice.",
        "level-stoic-10-integration.webp": "Stoic sage silhouette radiating amber integrated wisdom in ink wash, complete Stoic life, purple all virtues unified, zen philosophical mastery, living the good life.",

        # ============================================
        # Eastern Philosophy - 10 Levels
        # ============================================
        "level-east-01-landscape.webp": "Vast Eastern landscape with mountains temples rivers in sumi-e, amber dawn light on Asian philosophy, purple mist of ancient wisdom, zen panoramic view of Eastern thought.",
        "level-east-02-taoism.webp": "Yin-yang symbol flowing as water in ink wash, amber Tao light, Taoist philosophy, purple wu wei effortless action, zen following the way, Lao Tzu wisdom.",
        "level-east-03-buddhism.webp": "Buddha silhouette under bodhi tree with amber enlightenment glow in sumi-e, Four Noble Truths, purple Eightfold Path radiating, zen liberation from suffering.",
        "level-east-04-zen.webp": "Empty enso circle with amber brush stroke in ink wash, Zen Buddhism, purple satori flash of insight, zen direct pointing at reality, beginner's mind.",
        "level-east-05-confucianism.webp": "Confucius teaching students with amber scroll of ren in sumi-e, social harmony, purple five relationships, zen virtuous governance, propriety and ritual.",
        "level-east-06-mindfulness.webp": "Lotus flower with amber present-moment awareness radiating in ink wash, mindfulness practice, purple breath awareness, zen here and now, vipassana clarity.",
        "level-east-07-yoga.webp": "Yogi in tree pose with amber chakra energy in sumi-e, yoga philosophy beyond poses, purple union of mind body spirit, zen ancient discipline, Patanjali's path.",
        "level-east-08-japanese.webp": "Japanese tea ceremony with amber aesthetic precision in ink wash, wabi-sabi bushido ikigai, purple Japanese philosophical traditions, zen beauty in imperfection.",
        "level-east-09-synthesis.webp": "Eastern philosophical streams merging into one amber river in sumi-e, synthesis of Eastern wisdom, purple complementary truths joining, zen unified understanding.",
        "level-east-10-integration.webp": "Modern person living with amber Eastern wisdom glow in ink wash, daily integration, purple ancient-modern bridge, zen Eastern philosophy in Western life, practical application.",

        # ============================================
        # Vedic Wisdom - 10 Levels
        # ============================================
        "level-vedic-01-tradition.webp": "Ancient Vedic fire altar with amber sacred flames in sumi-e Indian style, Vedic tradition foundations, purple oral transmission lineage, zen Rishi wisdom, cosmic order.",
        "level-vedic-02-upanishads.webp": "Forest hermitage with guru and student by amber fire in ink wash, Upanishadic inquiry, purple Brahman-Atman realization, zen secret teaching, knowledge of self.",
        "level-vedic-03-gita.webp": "Chariot on battlefield with amber divine light from charioteer in sumi-e, Bhagavad Gita essence, purple dharma guidance, zen action without attachment, Krishna's song.",
        "level-vedic-04-dharma.webp": "Dharma wheel with amber cosmic law radiating in ink wash Indian style, righteous living, purple moral order of universe, zen duty and purpose, eternal law.",
        "level-vedic-05-yoga-sutras.webp": "Eight limbs of yoga ascending like amber temple steps in sumi-e, Patanjali's Yoga Sutras, purple chitta vritti nirodhah, zen mind mastery, systematic liberation.",
        "level-vedic-06-vedanta.webp": "Wave realizing it is amber ocean in ink wash, Vedantic non-duality, purple Advaita realization, zen Brahman is everything, Shankara's wisdom, tat tvam asi.",
        "level-vedic-07-epics.webp": "Ram's bow and Krishna's flute crossing in amber light in sumi-e Indian style, Ramayana Mahabharata, purple epic wisdom, zen dharmic storytelling, mythological lessons.",
        "level-vedic-08-ayurveda.webp": "Three doshas balanced around amber healing center in ink wash, Ayurvedic wisdom, purple life science harmony, zen holistic health, ancient Indian medicine.",
        "level-vedic-09-thinkers.webp": "Lineage of Indian sages with amber wisdom passing between them in sumi-e, great Vedic thinkers, purple Vivekananda Aurobindo, zen modern Indian philosophy.",
        "level-vedic-10-living.webp": "Modern life infused with amber Vedic rituals and wisdom in ink wash, living Vedic wisdom today, purple sanatana dharma applied, zen eternal truths in modern world.",

        # ============================================
        # Mythology - 10 Levels
        # ============================================
        "level-myth-01-foundations.webp": "Ancient cave paintings coming alive with amber mythological fire in sumi-e, mythology foundations, purple archetypal patterns, zen why humans create myths, origin of stories.",
        "level-myth-02-hero-journey.webp": "Hero crossing threshold into amber adventure unknown in ink wash, Campbell's monomyth, purple departure initiation return, zen hero's journey stages, call to adventure.",
        "level-myth-03-greek.webp": "Mount Olympus with amber divine lightning in sumi-e, Greek mythology, purple Zeus Athena Apollo, zen Homeric wisdom, gods as human nature mirrors.",
        "level-myth-04-norse.webp": "Yggdrasil world tree with amber cosmic branches in ink wash, Norse mythology, purple Viking runes glowing, zen Odin's wisdom sacrifice, Ragnarok and renewal.",
        "level-myth-05-hindu.webp": "Cosmic dance of Shiva Nataraja with amber creation-destruction in sumi-e Indian style, Hindu mythology, purple divine trinity Brahma Vishnu Shiva, zen cosmic cycles.",
        "level-myth-06-egyptian.webp": "Ankh and Eye of Horus with amber afterlife light in ink wash, Egyptian mythology, purple pharaonic wisdom, zen journey of the soul, Book of the Dead.",
        "level-myth-07-world.webp": "Multiple mythological symbols from every culture merging in amber light in sumi-e, world mythology, purple universal themes connecting, zen comparative mythology, shared human stories.",
        "level-myth-08-archetypes.webp": "Jungian archetypes as amber masks floating in collective unconscious in ink wash, archetypal psychology, purple shadow anima animus, zen understanding the psyche, inner mythology.",
        "level-myth-09-modern.webp": "Modern superhero silhouette with amber mythological roots in sumi-e, modern mythology, purple Star Wars Marvel narrative, zen contemporary myth-making, stories we live by.",
        "level-myth-10-personal.webp": "Person writing their own amber life story as mythological quest in ink wash, personal mythology, purple self as hero, zen crafting your narrative, living mythically.",
    },
}

# ============================================================
# FUNCTIONS
# ============================================================

def is_missing(path: Path) -> bool:
    return not path.exists() or path.stat().st_size == 0


BHARAT_PREFIXES = (
    "level-gita-", "level-epic-", "level-upan-", "level-shiv-",
    "level-ayur-", "level-yoga-", "level-sans-", "level-jyot-",
    "level-vedic-",
    "module-bhagavad-gita", "module-ramayana-mahabharata",
    "module-upanishads", "module-shiv-sutras",
    "module-sanskrit-mantras", "module-jyotish-vastu",
    "module-vedic-wisdom",
)


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
                    # Get raw image bytes and load with PIL
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
    parser = argparse.ArgumentParser()
    parser.add_argument("--all", action="store_true", help="Regenerate all")
    parser.add_argument("--category", choices=list(PROMPTS.keys()))
    parser.add_argument("--regenerate", action="store_true", help="Regenerate only the 4 problematic 1:1 images with 16:9 aspect ratio")
    parser.add_argument("--file", type=str, help="Regenerate a specific file by name")
    args = parser.parse_args()

    only_missing = not args.all and not args.regenerate and not args.file

    print("=" * 50)
    print("POLYMIND IMAGE GENERATOR")
    print(f"Model: {MODEL_NAME}")
    print("=" * 50)

    # Create Gemini client with API key
    client = genai.Client(api_key=GEMINI_API_KEY)

    # If --regenerate flag is set, only regenerate the specific 4 images
    if args.regenerate:
        print(f"\nRegenerating {len(IMAGES_TO_REGENERATE)} images with 16:9 aspect ratio...")
        output_dir = OUTPUT_DIRS["modules"]

        for filename in IMAGES_TO_REGENERATE:
            if filename not in PROMPTS["modules"]:
                print(f"  SKIP {filename} (not found in prompts)")
                continue

            path = output_dir / filename
            prompt = PROMPTS["modules"][filename]

            print(f"  GEN  {filename}...", end=" ", flush=True)

            style = BHARAT_STYLE if filename.startswith(BHARAT_PREFIXES) else None
            if generate_image(client, prompt, path, aspect_ratio=ASPECT_RATIO, style=style):
                kb = path.stat().st_size / 1024
                print(f"OK ({kb:.0f}KB)")
                time.sleep(3)
            else:
                print("FAILED")
                time.sleep(10)

        print("\nDone!")
        return

    # If --file flag is set, regenerate a specific file
    if args.file:
        found = False
        for cat, prompts in PROMPTS.items():
            if args.file in prompts:
                output_dir = OUTPUT_DIRS[cat]
                path = output_dir / args.file
                prompt = prompts[args.file]

                print(f"\n  GEN  {args.file}...", end=" ", flush=True)

                style = BHARAT_STYLE if args.file.startswith(BHARAT_PREFIXES) else None
                if generate_image(client, prompt, path, aspect_ratio=ASPECT_RATIO, style=style):
                    kb = path.stat().st_size / 1024
                    print(f"OK ({kb:.0f}KB)")
                else:
                    print("FAILED")

                found = True
                break

        if not found:
            print(f"File {args.file} not found in any category")

        print("\nDone!")
        return

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

            style = BHARAT_STYLE if filename.startswith(BHARAT_PREFIXES) else None
            if generate_image(client, prompt, path, aspect_ratio=ASPECT_RATIO, style=style):
                kb = path.stat().st_size / 1024
                print(f"OK ({kb:.0f}KB)")
                time.sleep(3)  # Delay between successful generations
            else:
                print("FAILED")
                time.sleep(10)  # Longer delay after failure

    print("\nDone!")


if __name__ == "__main__":
    main()
