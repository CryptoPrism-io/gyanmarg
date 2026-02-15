#!/usr/bin/env python3
"""
Generate ALL missing level images for 27 modules (~268 images).
Uses Gemini 2.5 Flash Image API.

Usage:
  python scripts/generate-missing-level-images.py [--module MODULE_ID]

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

load_dotenv(Path(__file__).parent.parent / ".env")

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    print("Error: GEMINI_API_KEY not found in app/.env")
    sys.exit(1)

MODEL_NAME = "gemini-2.5-flash-image"
SCRIPT_DIR = Path(__file__).parent
LEVELS_DIR = SCRIPT_DIR.parent / "src" / "assets" / "ai-images" / "levels"
LEVELS_DIR.mkdir(parents=True, exist_ok=True)

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
# ALL MISSING LEVEL IMAGE PROMPTS (27 modules, ~268 images)
# ============================================================

LEVEL_PROMPTS = {
    # ========================================
    # Finance & Investing (fi-)
    # ========================================
    "level-fi-01-foundations.webp": "Sumi-e golden coins stacked as foundation blocks, amber investment light radiating, financial fundamentals, purple market energy, zen wealth building basics.",
    "level-fi-02-assets.webp": "Multiple asset classes as ink brush symbols — stocks bonds real estate, amber diversified portfolio glow, purple market sectors, zen asset allocation.",
    "level-fi-03-fundamental.webp": "Balance sheet transforming into amber insight crystal in sumi-e, fundamental analysis, purple financial statements, zen value discovery, reading between numbers.",
    "level-fi-04-portfolio.webp": "Efficient frontier curve with amber optimal point in ink wash, portfolio theory, purple risk-return tradeoff, zen Markowitz wisdom, balanced construction.",
    "level-fi-05-valuation.webp": "Diamond being appraised under amber magnifying glass in sumi-e, valuation methods, purple DCF cashflows, zen intrinsic worth, price versus value.",
    "level-fi-06-behavioral.webp": "Mind playing tricks with amber clarity cutting through in ink wash, behavioral finance, purple cognitive bias fog, zen rational awareness, market psychology.",
    "level-fi-07-bonds.webp": "Bond yield curves as flowing amber rivers in sumi-e, fixed income mastery, purple duration and convexity, zen steady income, debt as instrument.",
    "level-fi-08-global.webp": "Globe with amber currency flows connecting markets in ink wash, global investing, purple forex streams, zen international diversification, world markets.",
    "level-fi-09-advanced.webp": "Complex derivatives and hedging symbols in amber sumi-e patterns, advanced strategies, purple options overlay, zen sophisticated positioning, alpha generation.",
    "level-fi-10-mastery.webp": "Mature oak tree with amber golden leaves of wealth in ink wash, wealth management mastery, purple legacy planning, zen financial wisdom complete, stewardship.",

    # ========================================
    # Astronomy (astro-)
    # ========================================
    "level-astro-01-cosmic.webp": "Night sky with amber telescope pointed at stars in sumi-e, cosmic foundations, purple constellation patterns, zen wonder of the universe, stargazing.",
    "level-astro-02-galaxies.webp": "Spiral galaxy with amber core glowing in ink wash, galaxies and cosmic structures, purple stellar formations, zen cosmic scale, Milky Way wonder.",
    "level-astro-03-cosmology.webp": "Big Bang expansion with amber primordial light in sumi-e, cosmology, purple spacetime fabric stretching, zen origin of everything, cosmic microwave background.",
    "level-astro-04-dark.webp": "Invisible matter bending amber light around galaxy cluster in ink wash, dark matter and energy, purple gravitational lensing, zen the unseen universe, cosmic mystery.",
    "level-astro-05-exploration.webp": "Rocket silhouette with amber exhaust trail through history in sumi-e, space exploration history, purple milestone markers, zen human reaching for stars, Apollo to ISS.",
    "level-astro-06-missions.webp": "Mars rover with amber discovery light on red landscape in ink wash, modern space missions, purple satellite constellation, zen exploring new worlds, robotic pioneers.",
    "level-astro-07-exoplanets.webp": "Habitable zone with amber Earth-like planet orbiting distant star in sumi-e, exoplanets, purple transit detection signal, zen other worlds, possibility of life.",
    "level-astro-08-astrophysics.webp": "Black hole with amber accretion disk warping spacetime in ink wash, astrophysics and relativity, purple gravitational waves, zen cosmic physics, Einstein's universe.",
    "level-astro-09-telescopes.webp": "Multiple telescopes from optical to radio in amber light in sumi-e, observational techniques, purple electromagnetic spectrum, zen seeing further, instruments of discovery.",
    "level-astro-10-future.webp": "Space station and interstellar craft in amber future vision in ink wash, future of astronomy, purple next-generation discoveries, zen cosmic destiny, humanity among stars.",

    # ========================================
    # Strategic Thinking (strat-)
    # ========================================
    "level-strat-01-fundamentals.webp": "Chess board with amber strategic overview in sumi-e, strategy fundamentals, purple game pieces positioned, zen art of thinking ahead, first moves.",
    "level-strat-02-competitive.webp": "Two tigers circling with amber competitive tension in ink wash, competitive strategy, purple Porter's five forces, zen market positioning, winning moves.",
    "level-strat-03-frameworks.webp": "Multiple analytical lenses in amber focusing on same problem in sumi-e, strategic analysis frameworks, purple SWOT and BCG matrices, zen structured thinking.",
    "level-strat-04-positioning.webp": "Flag planted at amber optimal market position in ink wash, positioning and market strategy, purple competitive landscape mapped, zen finding your ground, differentiation.",
    "level-strat-05-execution.webp": "Bridge from amber strategy to action in sumi-e, execution and alignment, purple OKR cascading, zen turning plans into reality, disciplined action.",
    "level-strat-06-military.webp": "Sun Tzu's art of war scrolls with amber strategic wisdom in ink wash, military strategy for business, purple battlefield terrain, zen ancient warrior wisdom, indirect approach.",
    "level-strat-07-innovation.webp": "Disruption wave with amber creative destruction in sumi-e, innovation strategy, purple blue ocean emerging, zen creative strategic thinking, new value creation.",
    "level-strat-08-geopolitical.webp": "World map with amber geopolitical pressure points in ink wash, geopolitical and macro strategy, purple global forces, zen big-picture thinking, macro trends.",
    "level-strat-09-leadership.webp": "Leader at decision crossroads with amber clarity path in sumi-e, strategic leadership, purple decision trees branching, zen wisdom under pressure, leader as strategist.",
    "level-strat-10-grand.webp": "Grand master viewing entire game from above in amber wisdom light in ink wash, grand strategy and systems, purple integrated mastery, zen complete strategic vision.",

    # ========================================
    # Systems & Complexity (sys-)
    # ========================================
    "level-sys-01-fundamentals.webp": "Interconnected nodes forming amber web in sumi-e, systems thinking fundamentals, purple connections between parts, zen seeing the whole, beyond reductionism.",
    "level-sys-02-feedback.webp": "Circular arrows with amber amplifying and balancing loops in ink wash, feedback loops and dynamics, purple reinforcing spirals, zen circular causality, dynamic equilibrium.",
    "level-sys-03-emergence.webp": "Individual ink dots forming amber collective pattern in sumi-e, emergence and self-organization, purple flocking birds, zen more than sum of parts, order from chaos.",
    "level-sys-04-network.webp": "Network graph with amber hub nodes glowing in ink wash, network theory and complexity, purple small-world connections, zen six degrees, network power.",
    "level-sys-05-adaptive.webp": "Evolving amber organism adapting to environment in sumi-e, complex adaptive systems, purple fitness landscape, zen adaptation and evolution, living systems.",
    "level-sys-06-modeling.webp": "System dynamics model with amber stocks and flows in ink wash, systems modeling and simulation, purple causal loop diagrams, zen mapping reality, computer models.",
    "level-sys-07-human.webp": "City as living amber system with human interactions in sumi-e, complexity in human systems, purple organizational dynamics, zen social complexity, markets and societies.",
    "level-sys-08-chaos.webp": "Butterfly effect with amber sensitivity rippling outward in ink wash, chaos theory and nonlinearity, purple strange attractor pattern, zen sensitive dependence, beautiful disorder.",
    "level-sys-09-practice.webp": "Systems thinker applying amber leverage points in sumi-e, systems thinking in practice, purple intervention design, zen practical application, making change happen.",
    "level-sys-10-meta.webp": "Systems within systems in amber recursive fractal in ink wash, meta-systems and integration, purple unified understanding, zen complete systems mastery, thinking about thinking.",

    # ========================================
    # History & Civilizations (hist-)
    # ========================================
    "level-hist-01-foundations.webp": "Ancient cave paintings leading to amber civilization light in sumi-e, foundations of civilizations, purple timeline stretching, zen dawn of humanity, first settlements.",
    "level-hist-02-mesopotamia.webp": "Ziggurat and pyramid with amber Nile and Euphrates in ink wash, Mesopotamia and Egypt, purple cuneiform tablets, zen cradle of civilization, first writing.",
    "level-hist-03-classical.webp": "Parthenon and Colosseum with amber classical light in sumi-e, Greece and Rome, purple democratic ideals, zen Western foundations, republic and empire.",
    "level-hist-04-asian.webp": "Great Wall and pagoda with amber Eastern dynasty light in ink wash, Asian empires, purple silk road flowing, zen Eastern civilizations, Mandate of Heaven.",
    "level-hist-05-medieval.webp": "Medieval castle and mosque with amber golden age light in sumi-e, medieval world and Islam, purple knowledge preservation, zen dark ages to renaissance, faith and reason.",
    "level-hist-06-renaissance.webp": "Sailing ship and printing press with amber discovery light in ink wash, Renaissance and exploration, purple Gutenberg revolution, zen rebirth of learning, new worlds.",
    "level-hist-07-revolutions.webp": "Revolutionary flag with amber freedom fire in sumi-e, revolutions and nation building, purple declaration of rights, zen liberty equality fraternity, birth of nations.",
    "level-hist-08-empires.webp": "Colonial map with amber resistance movements in ink wash, empires colonialism and resistance, purple independence movements, zen power and liberation, colonial legacy.",
    "level-hist-09-patterns.webp": "Recurring amber cycles visible across civilizational timeline in sumi-e, patterns of civilization, purple Toynbee's challenge-response, zen history rhymes, lessons learned.",
    "level-hist-10-global.webp": "Connected amber globe with all civilizations linked in ink wash, global history, purple future of civilizations, zen interconnected world, where we go from here.",

    # ========================================
    # Western Philosophy (wphil-)
    # ========================================
    "level-wphil-01-ancient.webp": "Socrates drinking hemlock with amber truth light in sumi-e, ancient foundations, purple questioning everything, zen examined life, pre-Socratics to Socrates.",
    "level-wphil-02-plato.webp": "Cave with amber sunlight beyond and shadows on wall in ink wash, Plato and Aristotle, purple forms and substance, zen idealism meets realism, the Academy.",
    "level-wphil-03-medieval.webp": "Cathedral stained glass with amber divine reason in sumi-e, medieval and Renaissance philosophy, purple faith and reason, zen Aquinas and Machiavelli, God and power.",
    "level-wphil-04-rationalism.webp": "Cogito ergo sum with amber thinking light in ink wash, rationalism and empiricism, purple Descartes vs Locke, zen mind versus senses, knowledge foundations.",
    "level-wphil-05-kant.webp": "Starry sky above and moral law within in amber sumi-e, Kant and German idealism, purple categorical imperative, zen duty and freedom, transcendental philosophy.",
    "level-wphil-06-ethics.webp": "Trolley problem with amber ethical dilemma in ink wash, ethics and political philosophy, purple utilitarian vs deontological, zen the good life, justice and rights.",
    "level-wphil-07-existential.webp": "Lone figure facing amber void of existence in sumi-e, existentialism, purple freedom and anxiety, zen authentic being, Kierkegaard Nietzsche Sartre.",
    "level-wphil-08-analytic.webp": "Logical symbols and language analysis with amber clarity in ink wash, analytic philosophy, purple Wittgenstein's ladder, zen precise thinking, logic and language.",
    "level-wphil-09-mind.webp": "Brain and consciousness puzzle with amber awareness in sumi-e, philosophy of mind, purple hard problem of consciousness, zen what is mind, qualia and experience.",
    "level-wphil-10-contemporary.webp": "Multiple philosophical streams merging into amber modern discourse in ink wash, contemporary philosophy, purple post-modern currents, zen living philosophy, present-day thought.",

    # ========================================
    # Cybersecurity (cyber-)
    # ========================================
    "level-cyber-01-fundamentals.webp": "Digital shield with amber CIA triad light in sumi-e, security fundamentals, purple threat landscape, zen defensive mindset, first principles of protection.",
    "level-cyber-02-network.webp": "Network topology with amber firewall barriers in ink wash, network security, purple packet flows monitored, zen perimeter defense, securing connections.",
    "level-cyber-03-crypto.webp": "Lock and key with amber encryption mathematics in sumi-e, cryptography, purple cipher algorithms, zen secret communication, mathematical security.",
    "level-cyber-04-webapp.webp": "Web browser with amber security scanner revealing vulnerabilities in ink wash, web application security, purple OWASP top ten, zen secure coding, injection defense.",
    "level-cyber-05-endpoint.webp": "Computer fortress with amber OS hardening in sumi-e, endpoint security, purple malware detection, zen system protection, operating system defense.",
    "level-cyber-06-identity.webp": "Digital identity with amber authentication gates in ink wash, identity and access management, purple zero trust architecture, zen who goes there, verified access.",
    "level-cyber-07-threat.webp": "Hunter tracking amber threat indicators through digital forest in sumi-e, threat intelligence, purple adversary patterns, zen proactive defense, knowing the enemy.",
    "level-cyber-08-pentest.webp": "Red team operator finding amber vulnerability in defenses in ink wash, penetration testing, purple ethical hacking, zen thinking like attacker, authorized assault.",
    "level-cyber-09-secops.webp": "Security operations center with amber alert dashboard in sumi-e, incident response, purple SIEM monitoring, zen rapid response, containing breaches.",
    "level-cyber-10-architecture.webp": "Complete security architecture blueprint with amber defense layers in ink wash, security strategy, purple enterprise protection, zen holistic security, architect's vision.",

    # ========================================
    # Startups & Innovation (startup-) — 8 levels
    # ========================================
    "level-startup-01-mindset.webp": "Entrepreneur leaping into amber unknown with confidence in sumi-e, startup mindset, purple fear dissolving, zen founder courage, risk and reward.",
    "level-startup-02-ideation.webp": "Lightbulb shattering to reveal amber diamond idea within in ink wash, ideation and validation, purple customer discovery, zen finding problems worth solving.",
    "level-startup-03-lean.webp": "Build-measure-learn cycle with amber iterating spiral in sumi-e, lean methodology, purple rapid experimentation, zen minimum viable product, validated learning.",
    "level-startup-04-pmf.webp": "Puzzle piece clicking perfectly into amber market gap in ink wash, product-market fit, purple retention curves improving, zen the magic moment, customers pulling.",
    "level-startup-05-team.webp": "Diverse team members forming amber collaborative circle in sumi-e, building teams and culture, purple trust bonds, zen the people, culture as foundation.",
    "level-startup-06-funding.webp": "Seed growing into amber funded tree with investor silhouettes in ink wash, fundraising, purple term sheets, zen capital for growth, pitching and partnerships.",
    "level-startup-07-growth.webp": "Exponential amber growth curve breaking through ceiling in sumi-e, growth and scaling, purple viral loops, zen hockey stick moment, accelerating trajectory.",
    "level-startup-08-leadership.webp": "Founder evolving into amber leader with company behind in ink wash, leadership and exit, purple succession planning, zen building to last, the long game.",

    # ========================================
    # Relationships & Social (rel-) — 8 levels
    # ========================================
    "level-rel-01-connection.webp": "Two hands reaching toward amber connection light in sumi-e, connection foundations, purple attachment theory roots, zen human need for belonging, first bonds.",
    "level-rel-02-attachment.webp": "Different attachment styles as amber bonding patterns in ink wash, attachment theory, purple secure base, zen understanding your style, childhood patterns.",
    "level-rel-03-communication.webp": "Two figures with amber communication bridge forming between in sumi-e, communication mastery, purple nonviolent connection, zen speaking and hearing, dialogue art.",
    "level-rel-04-eq.webp": "Heart with amber emotional antenna sensing others in ink wash, emotional intelligence in relationships, purple empathy radar, zen feeling with others, emotional attunement.",
    "level-rel-05-conflict.webp": "Broken amber vase being repaired with gold kintsugi in sumi-e, conflict and repair, purple Gottman's four horsemen, zen stronger at broken places, rupture to repair.",
    "level-rel-06-friendship.webp": "Two friends walking amber parallel paths in ink wash, friendships, purple Dunbar's circles, zen true friendship, quality over quantity, chosen family.",
    "level-rel-07-romantic.webp": "Yin-yang of lovers with amber passionate harmony in sumi-e, romantic relationships, purple love languages, zen intimate partnership, deep romantic knowing.",
    "level-rel-08-social.webp": "Social butterfly with amber charisma radiating in ink wash, social mastery, purple networking web, zen effortless connection, reading any room.",

    # ========================================
    # Geopolitics (geo-)
    # ========================================
    "level-geo-01-power.webp": "Globe with amber pressure points of power in sumi-e, foundations of power, purple Mackinder's heartland, zen geography as destiny, who controls what.",
    "level-geo-02-great-power.webp": "Eagle and dragon facing off with amber tension in ink wash, great power competition, purple US China rivalry, zen Thucydides trap, power transitions.",
    "level-geo-03-energy.webp": "Oil derrick and wind turbine with amber energy flows in sumi-e, energy geopolitics, purple pipeline routes, zen resource curse, power of energy.",
    "level-geo-04-flashpoints.webp": "Map with amber hotspot fires at critical regions in ink wash, regional flashpoints, purple Taiwan Strait tension, zen crisis zones, where conflict brews.",
    "level-geo-05-economic.webp": "Trade war weapons — tariffs sanctions — with amber economic fire in sumi-e, economic warfare, purple SWIFT exclusion, zen money as weapon, financial statecraft.",
    "level-geo-06-military.webp": "Military chess pieces on amber global board in ink wash, military strategy and defense, purple nuclear deterrence, zen balance of power, force projection.",
    "level-geo-07-intelligence.webp": "Shadow figure with amber intelligence gathering web in sumi-e, intelligence and information warfare, purple cyber operations, zen invisible war, knowing before acting.",
    "level-geo-08-institutions.webp": "UN building and international scales with amber justice in ink wash, international institutions, purple rules-based order, zen global governance, cooperation and law.",
    "level-geo-09-demographic.webp": "Population pyramid with amber climate change overlay in sumi-e, demographic and climate geopolitics, purple migration flows, zen slow forces that shape everything.",
    "level-geo-10-future.webp": "Crystal ball showing amber future world order in ink wash, future of geopolitics, purple emerging powers, zen what comes next, multipolar world.",

    # ========================================
    # Web Development (webdev-)
    # ========================================
    "level-webdev-01-foundations.webp": "HTML CSS JS trinity as amber building blocks in sumi-e, web foundations, purple browser window, zen first web page, hello world.",
    "level-webdev-02-css.webp": "CSS flexbox and grid layout as amber geometric harmony in ink wash, CSS mastery, purple responsive design flows, zen styling the web, visual beauty.",
    "level-webdev-03-javascript.webp": "JavaScript engine with amber execution context in sumi-e, JS deep dive, purple async await flows, zen language mastery, closures and prototypes.",
    "level-webdev-04-react.webp": "React component tree with amber state flowing down in ink wash, React architecture, purple virtual DOM diffing, zen component thinking, declarative UI.",
    "level-webdev-05-backend.webp": "Server racks with amber API endpoints in sumi-e, backend development, purple request-response cycle, zen server-side logic, Node Express routes.",
    "level-webdev-06-database.webp": "Database schema as amber relational web in ink wash, databases and data layer, purple SQL queries flowing, zen data modeling, persistence and retrieval.",
    "level-webdev-07-typescript.webp": "TypeScript type system as amber safety net under code in sumi-e, TypeScript and code quality, purple type checking, zen type safety, fewer bugs.",
    "level-webdev-08-devops.webp": "CI/CD pipeline as amber conveyor belt deploying code in ink wash, DevOps and deployment, purple Docker containers, zen automated delivery, ship with confidence.",
    "level-webdev-09-advanced.webp": "Advanced UI patterns with amber performance optimizations in sumi-e, advanced frontend, purple state management, zen pixel-perfect craft, performance tuning.",
    "level-webdev-10-fullstack.webp": "Complete web stack with amber mastery light connecting all layers in ink wash, full-stack mastery, purple end-to-end understanding, zen complete web developer.",

    # ========================================
    # Cloud & DevOps (devops-)
    # ========================================
    "level-devops-01-essentials.webp": "Cloud symbol with amber infrastructure light in sumi-e, cloud and DevOps essentials, purple automation gears, zen modern infrastructure, cloud-first thinking.",
    "level-devops-02-platform.webp": "Three cloud pillars — AWS Azure GCP — with amber compute in ink wash, cloud platforms, purple service catalog, zen platform fluency, IaaS PaaS SaaS.",
    "level-devops-03-containers.webp": "Docker whale carrying amber containers in sumi-e, containers and Docker, purple microservices, zen packaging applications, portable and consistent.",
    "level-devops-04-kubernetes.webp": "Kubernetes helm steering amber pod cluster in ink wash, Kubernetes orchestration, purple auto-scaling, zen container choreography, declarative infrastructure.",
    "level-devops-05-cicd.webp": "Pipeline stages with amber automated flow in sumi-e, CI/CD pipelines, purple test gates passing, zen continuous delivery, code to production.",
    "level-devops-06-iac.webp": "Terraform blueprint with amber infrastructure provisioning in ink wash, infrastructure as code, purple version-controlled infra, zen repeatable environments, code defines reality.",
    "level-devops-07-monitoring.webp": "Dashboard with amber metrics and alert signals in sumi-e, monitoring and observability, purple log streams, zen seeing your systems, three pillars of observability.",
    "level-devops-08-security.webp": "Shield with amber DevSecOps integration in ink wash, security and compliance, purple shift-left security, zen secure by default, compliance as code.",
    "level-devops-09-architecture.webp": "Distributed system with amber resilience patterns in sumi-e, advanced cloud architecture, purple multi-region availability, zen building for scale, architectural excellence.",
    "level-devops-10-culture.webp": "Team collaboration with amber DevOps infinity loop in ink wash, DevOps culture and mastery, purple continuous improvement, zen people and process, complete transformation.",

    # ========================================
    # Options Trading (opt-)
    # ========================================
    "level-opt-01-fundamentals.webp": "Options contract with amber call put symbols in sumi-e, options fundamentals, purple expiration timeline, zen right but not obligation, derivatives basics.",
    "level-opt-02-greeks.webp": "Greek letters delta gamma theta vega as amber mathematical forces in ink wash, options pricing and Greeks, purple Black-Scholes formula, zen measuring risk, sensitivity analysis.",
    "level-opt-03-volatility.webp": "Volatility smile with amber implied vol curve in sumi-e, volatility trading, purple VIX fear gauge, zen riding the vol, mean reversion.",
    "level-opt-04-verticals.webp": "Bull and bear spread diagrams with amber profit zones in ink wash, vertical spreads, purple risk-defined trades, zen controlled exposure, credit and debit spreads.",
    "level-opt-05-income.webp": "Theta decay feeding amber income stream in sumi-e, income strategies, purple covered calls and puts, zen time as ally, consistent premium collection.",
    "level-opt-06-multileg.webp": "Iron condor butterfly straddle as amber complex positions in ink wash, advanced multi-leg strategies, purple payoff diagrams, zen sophisticated positioning, strategy combinations.",
    "level-opt-07-risk.webp": "Portfolio protection with amber hedge positions in sumi-e, risk management for options, purple position sizing, zen protecting capital, never blow up.",
    "level-opt-08-technical.webp": "Chart patterns with amber options overlay signals in ink wash, technical analysis for options, purple timing entries, zen chart meets options, visual edge.",
    "level-opt-09-advanced-vol.webp": "Volatility surface with amber skew analysis in sumi-e, advanced volatility strategies, purple term structure, zen vol as an asset class, dispersion trading.",
    "level-opt-10-mastery.webp": "Complete options toolkit with amber mastery glow in ink wash, options trading mastery, purple integrated strategies, zen complete options trader, market maker mindset.",

    # ========================================
    # Macro Economics (macro-)
    # ========================================
    "level-macro-01-fundamentals.webp": "GDP and economic cycle with amber growth light in sumi-e, macro fundamentals, purple supply demand equilibrium, zen big-picture economics, aggregate forces.",
    "level-macro-02-monetary.webp": "Federal Reserve building with amber interest rate lever in ink wash, monetary policy, purple money supply waves, zen central banking, controlling the money.",
    "level-macro-03-fiscal.webp": "Government budget with amber spending and taxation in sumi-e, fiscal policy, purple deficit and surplus, zen government's role, Keynes vs austerity.",
    "level-macro-04-inflation.webp": "Prices rising with amber inflation heat in ink wash, inflation and deflation, purple purchasing power eroding, zen money's value, CPI and real rates.",
    "level-macro-05-currency.webp": "Currency pairs swirling with amber exchange rate in sumi-e, currency markets, purple forex flows, zen money across borders, dollar hegemony.",
    "level-macro-06-cycles.webp": "Business cycle with amber expansion and contraction waves in ink wash, business cycles, purple leading indicators, zen economic rhythms, boom and bust.",
    "level-macro-07-trade.webp": "Container ships with amber trade flows connecting nations in sumi-e, international trade, purple comparative advantage, zen global commerce, balance of payments.",
    "level-macro-08-markets.webp": "Financial markets responding to amber macro signals in ink wash, financial markets and macro, purple yield curve, zen macro drives markets, top-down analysis.",
    "level-macro-09-schools.webp": "Economic thinkers debating with amber ideas clashing in sumi-e, economic schools of thought, purple Keynesian vs Austrian, zen competing frameworks, intellectual history.",
    "level-macro-10-strategy.webp": "Global macro trader reading amber economic signals in ink wash, global macro strategy mastery, purple cross-asset positioning, zen macro as edge, complete economist.",

    # ========================================
    # Crypto Trading (crypto-)
    # ========================================
    "level-crypto-01-fundamentals.webp": "Bitcoin genesis block with amber cryptographic light in sumi-e, crypto fundamentals, purple decentralized network, zen digital money, Satoshi's vision.",
    "level-crypto-02-blockchain.webp": "Blockchain architecture with amber consensus mechanism in ink wash, blockchain deep dive, purple merkle tree, zen immutable ledger, trustless technology.",
    "level-crypto-03-defi.webp": "DeFi protocols as amber financial legos stacking in sumi-e, DeFi fundamentals, purple liquidity pools, zen decentralized finance, permissionless banking.",
    "level-crypto-04-technical.webp": "Crypto chart with amber support resistance and patterns in ink wash, technical analysis for crypto, purple 24/7 market cycles, zen reading crypto charts, volatile beauty.",
    "level-crypto-05-onchain.webp": "Blockchain explorer revealing amber whale movements in sumi-e, on-chain analysis, purple wallet flows, zen data on the ledger, transparent markets.",
    "level-crypto-06-cycles.webp": "Bitcoin halving cycle with amber bull and bear phases in ink wash, market cycles and psychology, purple fear greed index, zen crypto seasons, four-year rhythm.",
    "level-crypto-07-altcoins.webp": "Multiple altcoin symbols orbiting amber Bitcoin center in sumi-e, altcoin analysis, purple token economics, zen picking winners, fundamental evaluation.",
    "level-crypto-08-strategies.webp": "Trading setup with amber entry and exit signals on chart in ink wash, trading strategies, purple DCA and swing, zen execution discipline, strategy over emotion.",
    "level-crypto-09-risk.webp": "Hardware wallet with amber security shield in sumi-e, risk management and security, purple cold storage protection, zen not your keys not your coins, surviving.",
    "level-crypto-10-mastery.webp": "Complete crypto trader with amber mastery across all dimensions in ink wash, crypto trading mastery, purple multi-strategy integration, zen digital asset master.",

    # ========================================
    # Mental Models (mm-)
    # ========================================
    "level-mm-01-core.webp": "Lattice of amber interconnected frameworks floating in sumi-e, core mental models, purple Munger's worldly wisdom, zen thinking tools, cognitive toolkit.",
    "level-mm-02-physics.webp": "Newton's cradle with amber energy transfer in ink wash, physics and engineering models, purple first principles, zen physical thinking, leverage and inertia.",
    "level-mm-03-biology.webp": "Evolution tree with amber natural selection in sumi-e, biology and evolution models, purple adaptation patterns, zen biological thinking, survival and fitness.",
    "level-mm-04-economics.webp": "Invisible hand with amber market forces in ink wash, economics and market models, purple incentive structures, zen economic thinking, supply demand and pricing.",
    "level-mm-05-psychology.webp": "Mind with amber cognitive bias map in sumi-e, psychology and behavior models, purple heuristics and biases, zen understanding minds, predictable irrationality.",
    "level-mm-06-math.webp": "Probability distributions with amber Bayesian updating in ink wash, mathematics and statistics models, purple bell curves and power laws, zen quantitative thinking.",
    "level-mm-07-systems.webp": "Feedback loops with amber emergence patterns in sumi-e, systems and complexity models, purple second-order effects, zen systemic thinking, unintended consequences.",
    "level-mm-08-strategy.webp": "Game theory payoff matrix with amber optimal strategies in ink wash, strategy and decision models, purple competitive positioning, zen strategic thinking, calculated moves.",
    "level-mm-09-integration.webp": "Multiple models combining into amber super-model in sumi-e, multi-disciplinary integration, purple cross-domain insights, zen connecting frameworks, polymath reasoning.",
    "level-mm-10-mastery.webp": "Mind radiating amber wisdom through all mental models in ink wash, applied mental model mastery, purple practical decisions improved, zen thinking clearly, wise action.",

    # ========================================
    # First Principles (fp-)
    # ========================================
    "level-fp-01-fundamentals.webp": "Tower deconstructed to amber fundamental blocks in sumi-e, first principles fundamentals, purple assumptions stripped away, zen reasoning from basics, Aristotle's method.",
    "level-fp-02-decomposition.webp": "Complex problem broken into amber atomic components in ink wash, decomposition techniques, purple root elements revealed, zen breaking things down, analytical dissection.",
    "level-fp-03-scientific.webp": "Scientific method cycle with amber hypothesis testing in sumi-e, scientific reasoning, purple falsification, zen evidence-based thinking, Feynman's approach.",
    "level-fp-04-analogical.webp": "Analogy bridge versus amber first principles ladder in ink wash, analogical vs first principles, purple when to use each, zen choosing your approach, incremental vs fundamental.",
    "level-fp-05-cost.webp": "Cost structure revealed at amber atomic level in sumi-e, cost and resource analysis, purple Musk's rocket cost, zen engineering from scratch, what things really cost.",
    "level-fp-06-technology.webp": "Technology invention emerging from amber fundamental physics in ink wash, first principles in technology, purple SpaceX Tesla examples, zen building the impossible.",
    "level-fp-07-business.webp": "Business model rebuilt from amber customer needs in sumi-e, first principles in business, purple value chain reimagined, zen challenging assumptions, industry disruption.",
    "level-fp-08-creative.webp": "Deconstructed elements recombining into amber novel creation in ink wash, creative reconstruction, purple innovation from fundamentals, zen new from old, recombination.",
    "level-fp-09-complex.webp": "Wicked problem yielding to amber first principles analysis in sumi-e, complex problem application, purple multi-layered decomposition, zen tackling the impossible.",
    "level-fp-10-mastery.webp": "Mind naturally reasoning from amber fundamentals in all domains in ink wash, first principles mastery, purple automatic deep reasoning, zen thinking from the ground up.",

    # ========================================
    # Meta-Learning (mlearn-)
    # ========================================
    "level-mlearn-01-foundations.webp": "Brain accelerating with amber learning speed trails in sumi-e, accelerated learning foundations, purple neural pathway formation, zen learning how to learn, ultralearning.",
    "level-mlearn-02-memory.webp": "Memory palace with amber stored knowledge in ink wash, memory and retention science, purple spaced repetition curves, zen remembering forever, Ebbinghaus defeated.",
    "level-mlearn-03-deliberate.webp": "Athlete at amber edge of competence pushing further in sumi-e, deliberate practice, purple Ericsson's principles, zen 10000 hours, focused improvement.",
    "level-mlearn-04-reading.webp": "Book pages flowing into amber processed knowledge in ink wash, reading and information processing, purple speed reading synthesis, zen extracting wisdom, deep reading.",
    "level-mlearn-05-focus.webp": "Laser beam of amber deep focus cutting through distractions in sumi-e, focus and deep work, purple Cal Newport's principles, zen flow state, undistracted work.",
    "level-mlearn-06-skills.webp": "Skill acquisition curve with amber rapid improvement in ink wash, skill acquisition frameworks, purple Josh Kaufman's 20 hours, zen learning anything fast, practical mastery.",
    "level-mlearn-07-cognitive.webp": "Brain architecture with amber cognitive load management in sumi-e, cognitive science of learning, purple working memory optimization, zen how brains learn, schema building.",
    "level-mlearn-08-systems.webp": "Personal learning system with amber tools and workflows in ink wash, learning systems and tools, purple Zettelkasten and Anki, zen organized knowledge, productivity for learning.",
    "level-mlearn-09-teaching.webp": "Teacher passing amber knowledge torch to student in sumi-e, teaching and knowledge sharing, purple Feynman technique, zen learning by teaching, explanation mastery.",
    "level-mlearn-10-lifelong.webp": "Infinite amber learning spiral ascending through life stages in ink wash, lifelong learning mastery, purple curiosity never ending, zen eternal student, growth mindset.",

    # ========================================
    # Biology & Evolution (bio-)
    # ========================================
    "level-bio-01-life.webp": "First cell emerging in amber primordial soup in sumi-e, life's grand design, purple RNA world origin, zen spark of life, what makes us alive.",
    "level-bio-02-cell.webp": "Cell with amber DNA helix and organelles in ink wash, cell biology and genetics, purple mitosis division, zen building blocks of life, genetic code.",
    "level-bio-03-evolution.webp": "Darwin's tree of life with amber natural selection in sumi-e, evolution and natural selection, purple adaptation branches, zen survival of the fittest, deep time.",
    "level-bio-04-human.webp": "Human evolution silhouettes walking toward amber future in ink wash, human evolution, purple Homo sapiens emergence, zen our ancestral journey, cognitive revolution.",
    "level-bio-05-ecosystems.webp": "Food web with amber energy flowing through trophic levels in sumi-e, ecosystems and ecology, purple biodiversity web, zen interconnected life, balance of nature.",
    "level-bio-06-molecular.webp": "DNA double helix with amber protein synthesis in ink wash, molecular biology, purple central dogma, zen code of life, CRISPR revolution.",
    "level-bio-07-micro.webp": "Microscopic world with amber bacteria and viruses in sumi-e, microbiology and viruses, purple immune response, zen invisible war, pandemic preparedness.",
    "level-bio-08-neuro.webp": "Neuron firing amber signal through synaptic network in ink wash, neuroscience and behavior, purple neural circuits, zen brain as behavior, consciousness question.",
    "level-bio-09-biotech.webp": "Gene editing tool with amber CRISPR precision in sumi-e, biotechnology, purple synthetic biology, zen engineering life, the biotech revolution.",
    "level-bio-10-future.webp": "Future of life with amber evolutionary possibilities in ink wash, the future of life, purple transhumanism, zen where biology goes next, life's next chapter.",

    # ========================================
    # Earth Sciences (earth-)
    # ========================================
    "level-earth-01-dynamic.webp": "Earth cross-section with amber core energy in sumi-e, dynamic planet, purple geological layers, zen understanding our world, living planet.",
    "level-earth-02-tectonics.webp": "Tectonic plates shifting with amber magma glow in ink wash, plate tectonics and geology, purple continental drift, zen earth in motion, forces beneath.",
    "level-earth-03-atmosphere.webp": "Weather systems swirling with amber atmospheric energy in sumi-e, atmosphere and weather, purple cloud formations, zen sky science, storms and calm.",
    "level-earth-04-oceans.webp": "Deep ocean with amber hydrothermal vents in ink wash, oceans and marine science, purple ocean currents, zen the blue planet, marine ecosystems.",
    "level-earth-05-climate.webp": "Temperature graph with amber warming trend in sumi-e, climate science, purple greenhouse effect, zen understanding climate, the data speaks.",
    "level-earth-06-disasters.webp": "Earthquake fault line with amber seismic energy in ink wash, natural disasters, purple volcanic eruption, zen earth's fury, preparedness and resilience.",
    "level-earth-07-resources.webp": "Mining and amber mineral deposits in sumi-e, earth's resources, purple water cycle, zen finite planet, sustainable extraction.",
    "level-earth-08-environment.webp": "Ecosystem with amber conservation effort in ink wash, environmental science, purple biodiversity protection, zen caring for earth, human impact.",
    "level-earth-09-ice-ages.webp": "Glacial landscape with amber paleoclimate data in sumi-e, ice ages and earth history, purple geological timeline, zen deep time, earth's ancient story.",
    "level-earth-10-future.webp": "Earth from space with amber sustainable future vision in ink wash, future of earth, purple terraforming and conservation, zen our responsibility, planetary stewardship.",

    # ========================================
    # Decision Making (decide-)
    # ========================================
    "level-decide-01-fundamentals.webp": "Crossroads with amber clarity emerging from confusion in sumi-e, decision fundamentals, purple choice architecture, zen art of choosing, rational foundations.",
    "level-decide-02-biases.webp": "Mind with amber awareness revealing hidden biases in ink wash, cognitive biases and traps, purple anchoring and framing, zen seeing clearly, bias inoculation.",
    "level-decide-03-probabilistic.webp": "Bayesian probability updating with amber evidence in sumi-e, probabilistic thinking, purple expected value, zen thinking in bets, calibrated confidence.",
    "level-decide-04-frameworks.webp": "Decision matrix with amber weighted criteria in ink wash, decision frameworks, purple pros-cons-irreversibility, zen structured choice, organized thinking.",
    "level-decide-05-group.webp": "Group of figures reaching amber consensus with diverse perspectives in sumi-e, group decision making, purple wisdom of crowds, zen collective intelligence, avoiding groupthink.",
    "level-decide-06-uncertainty.webp": "Fog lifting to reveal amber path forward in ink wash, decisions under uncertainty, purple scenario planning, zen embracing the unknown, robust choices.",
    "level-decide-07-emotional.webp": "Heart and mind collaborating with amber balanced decision in sumi-e, emotional intelligence in decisions, purple gut feeling validated, zen intuition meets analysis.",
    "level-decide-08-strategic.webp": "High-stakes amber decision with consequences branching in ink wash, strategic and high-stakes decisions, purple irreversible choices, zen when it matters most, courage.",
    "level-decide-09-systems.webp": "Decision system with amber automated protocols in sumi-e, decision systems and processes, purple delegation frameworks, zen deciding how to decide, meta-decisions.",
    "level-decide-10-mastery.webp": "Wise figure making amber decisions effortlessly in ink wash, decision mastery, purple integrated wisdom, zen natural good judgment, complete decision-maker.",

    # ========================================
    # Risk Management (risk-)
    # ========================================
    "level-risk-01-fundamentals.webp": "Risk probability matrix with amber awareness in sumi-e, risk fundamentals, purple threat landscape, zen understanding risk, first principles of safety.",
    "level-risk-02-identification.webp": "Radar scanning for amber risk signals in ink wash, risk identification, purple assessment heat map, zen seeing threats early, proactive detection.",
    "level-risk-03-financial.webp": "Financial instruments with amber VaR hedging in sumi-e, financial risk management, purple market risk measured, zen protecting wealth, quantitative risk.",
    "level-risk-04-operational.webp": "Enterprise with amber operational resilience in ink wash, operational and enterprise risk, purple business continuity, zen organizational protection, systemic defense.",
    "level-risk-05-portfolio.webp": "Diversified portfolio with amber correlation matrix in sumi-e, portfolio risk and diversification, purple uncorrelated assets, zen not putting eggs in one basket.",
    "level-risk-06-behavioral.webp": "Mind falling into amber trap then escaping in ink wash, behavioral risk, purple prospect theory, zen psychology of risk, overconfidence and loss aversion.",
    "level-risk-07-black-swan.webp": "Black swan with amber Taleb wisdom in sumi-e, black swans and fat tails, purple extreme events, zen expecting the unexpected, antifragility.",
    "level-risk-08-systemic.webp": "Domino cascade with amber containment barrier in ink wash, systemic and catastrophic risk, purple cascading failure, zen preventing collapse, too big to fail.",
    "level-risk-09-communication.webp": "Risk dashboard with amber clear communication in sumi-e, risk communication, purple culture of safety, zen speaking about risk, transparent reporting.",
    "level-risk-10-mastery.webp": "Complete risk manager with amber 360-degree awareness in ink wash, integrated risk mastery, purple all risks unified, zen total risk intelligence, wise guardian.",

    # ========================================
    # Modern History (modhist-)
    # ========================================
    "level-modhist-01-wars.webp": "WWI trenches with amber historical fire in sumi-e, wars and revolutions, purple empires falling, zen why wars happen, 1914-1945.",
    "level-modhist-02-wwii.webp": "D-Day landing with amber liberation light in ink wash, World War II, purple global conflict, zen total war, the greatest generation.",
    "level-modhist-03-coldwar.webp": "Iron curtain with amber nuclear tension in sumi-e, Cold War era, purple MAD deterrence, zen superpower rivalry, ideological conflict.",
    "level-modhist-04-decolonization.webp": "Colonial chains breaking with amber independence light in ink wash, decolonization, purple new nations rising, zen freedom movements, post-colonial identity.",
    "level-modhist-05-social.webp": "Protest march with amber civil rights flame in sumi-e, social revolutions, purple feminist and rights movements, zen social change, people power.",
    "level-modhist-06-economic.webp": "Economic growth graph with amber globalization wave in ink wash, economic transformations, purple Asian tigers rising, zen wealth and inequality, boom and bust.",
    "level-modhist-07-technology.webp": "Computer and internet with amber digital revolution in sumi-e, technology and society, purple information age, zen digital transformation, silicon valley spirit.",
    "level-modhist-08-postcold.webp": "Berlin Wall falling with amber new world order in ink wash, post-Cold War world, purple 9/11 aftermath, zen unipolar moment, terrorism and response.",
    "level-modhist-09-contemporary.webp": "2020s challenges with amber pandemic and climate in sumi-e, contemporary challenges, purple populism and polarization, zen current crises, where we are now.",
    "level-modhist-10-lessons.webp": "History book closing with amber wisdom light in ink wash, lessons of modern history, purple patterns repeated, zen learning from the past, what history teaches.",

    # ========================================
    # Cultural Anthropology (anthro-)
    # ========================================
    "level-anthro-01-foundations.webp": "Diverse human faces forming amber cultural mosaic in sumi-e, cultural foundations, purple ethnographic gaze, zen understanding humanity, what culture means.",
    "level-anthro-02-kinship.webp": "Family tree with amber kinship bonds in ink wash, kinship and social organization, purple clan structures, zen how societies organize, bonds of blood.",
    "level-anthro-03-religion.webp": "Sacred rituals with amber spiritual light across cultures in sumi-e, religion ritual and belief, purple sacred profane boundary, zen why we believe, ritual power.",
    "level-anthro-04-economic.webp": "Gift exchange with amber reciprocity in ink wash, economic anthropology, purple Kula ring, zen how cultures trade, beyond market logic.",
    "level-anthro-05-language.webp": "Multiple scripts with amber Sapir-Whorf insight in sumi-e, language and communication, purple linguistic relativity, zen words shape worlds, symbolic meaning.",
    "level-anthro-06-political.webp": "Chief and council with amber power dynamics in ink wash, political anthropology, purple stateless societies, zen power without kings, how order emerges.",
    "level-anthro-07-medical.webp": "Healing practices with amber cross-cultural medicine in sumi-e, medical anthropology, purple illness narratives, zen culture and health, body beliefs.",
    "level-anthro-08-urban.webp": "City and digital space with amber urban tribes in ink wash, urban and digital anthropology, purple virtual communities, zen modern tribes, digital culture.",
    "level-anthro-09-applied.webp": "Anthropologist in field with amber practical application in sumi-e, applied anthropology, purple visual ethnography, zen fieldwork, making a difference.",
    "level-anthro-10-debates.webp": "Multiple perspectives converging on amber truth in ink wash, contemporary debates, purple cultural relativism, zen anthropology today, ongoing questions.",

    # ========================================
    # Leadership (lead-)
    # ========================================
    "level-lead-01-fundamentals.webp": "Lone figure casting amber leadership light on path ahead in sumi-e, leadership fundamentals, purple influence radiating, zen what makes a leader, foundations of command.",
    "level-lead-02-eq.webp": "Leader's heart with amber emotional intelligence sensors in ink wash, EQ for leaders, purple resonant leadership, zen leading with heart, emotional attunement.",
    "level-lead-03-communication.webp": "Leader speaking with amber persuasive waves reaching team in sumi-e, communication and influence, purple storytelling power, zen words that move, commanding attention.",
    "level-lead-04-team.webp": "Team members forming amber high-performance unit in ink wash, team building, purple trust framework, zen creating culture, the leader's team.",
    "level-lead-05-strategic.webp": "Leader at helm steering amber ship through uncertainty in sumi-e, strategic leadership, purple vision casting, zen seeing further, the leader as navigator.",
    "level-lead-06-change.webp": "Organization transforming with amber change momentum in ink wash, leading change, purple Kotter's steps, zen change as constant, guiding transformation.",
    "level-lead-07-crisis.webp": "Leader calm in amber storm of crisis in sumi-e, crisis and adaptive leadership, purple Heifetz's principles, zen leading under fire, grace under pressure.",
    "level-lead-08-power.webp": "Power dynamics with amber ethical compass in ink wash, power politics and ethics, purple servant leadership, zen responsible power, the ethical leader.",
    "level-lead-09-coaching.webp": "Leader developing amber next generation of leaders in sumi-e, coaching and developing others, purple mentorship, zen multiplying leadership, growing people.",
    "level-lead-10-legacy.webp": "Leadership legacy as amber eternal flame in ink wash, leadership mastery and legacy, purple impact across generations, zen the leader remembered, lasting influence.",

    # ========================================
    # Problem Solving (solve-)
    # ========================================
    "level-solve-01-core.webp": "Tangled knot beginning to unravel with amber clarity in sumi-e, core problem-solving, purple structured approach, zen finding the thread, systematic thinking.",
    "level-solve-02-root.webp": "Five whys drilling down to amber root cause in ink wash, root cause analysis, purple fishbone diagram, zen going deeper, why before how.",
    "level-solve-03-creative.webp": "Lateral thinking with amber creative solution spark in sumi-e, creative problem solving, purple brainstorming explosions, zen thinking differently, unconventional paths.",
    "level-solve-04-analytical.webp": "Data analysis with amber pattern recognition in ink wash, analytical problem solving, purple MECE framework, zen structured decomposition, hypothesis-driven.",
    "level-solve-05-design.webp": "Human-centered amber solution emerging from empathy in sumi-e, design thinking for problems, purple prototype iteration, zen solving for people, empathy first.",
    "level-solve-06-systems.webp": "System leverage point with amber intervention in ink wash, systems problem solving, purple second-order effects, zen fixing systems not symptoms, holistic approach.",
    "level-solve-07-technical.webp": "Engineering blueprint with amber technical solution in sumi-e, technical problem solving, purple debugging workflow, zen engineering mindset, first principles approach.",
    "level-solve-08-collaborative.webp": "Diverse team combining amber perspectives into solution in ink wash, collaborative problem solving, purple collective intelligence, zen many minds one answer, facilitation.",
    "level-solve-09-complex.webp": "Wicked problem with amber adaptive approach in sumi-e, complex and wicked problems, purple no right answer, zen embracing complexity, iterative progress.",
    "level-solve-10-mastery.webp": "Master problem solver with amber toolkit of all methods in ink wash, problem-solving mastery, purple any challenge ready, zen wisdom in approach, complete solver.",

    # ========================================
    # Productivity Systems (prod-)
    # ========================================
    "level-prod-01-core.webp": "Productivity system with amber efficiency engine in sumi-e, core productivity systems, purple workflow optimization, zen getting things done, personal operating system.",
    "level-prod-02-gtd.webp": "GTD capture process with amber next actions flowing in ink wash, Getting Things Done, purple David Allen's five steps, zen mind like water, stress-free productivity.",
    "level-prod-03-time.webp": "Calendar and clock with amber time blocks in sumi-e, time management, purple scheduling mastery, zen time as resource, intentional allocation.",
    "level-prod-04-energy.webp": "Energy levels with amber peak performance windows in ink wash, energy and attention management, purple ultradian rhythms, zen working with biology, not against it.",
    "level-prod-05-digital.webp": "Digital workspace with amber tool ecosystem in sumi-e, digital productivity tools, purple Notion Obsidian workflow, zen tools that amplify, digital leverage.",
    "level-prod-06-goals.webp": "North star with amber goal cascade to daily actions in ink wash, goal setting and planning, purple OKR framework, zen vision to action, strategic planning.",
    "level-prod-07-deep.webp": "Monk in amber deep focus session in sumi-e, deep work and flow, purple Cal Newport's rules, zen undistracted creation, flow state mastery.",
    "level-prod-08-habits.webp": "Habit loop with amber cue routine reward in ink wash, habits and routines, purple atomic habits, zen compound effect, daily rituals that transform.",
    "level-prod-09-projects.webp": "Project timeline with amber milestones in sumi-e, project management, purple agile sprints, zen shipping consistently, execution excellence.",
    "level-prod-10-philosophy.webp": "Productive life philosophy with amber balanced mastery in ink wash, productivity philosophy, purple essentialism, zen doing less better, meaningful productivity.",
}


# ============================================================
# IMAGE GENERATION
# ============================================================

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
                        aspect_ratio="16:9"
                    )
                )
            )

            for part in response.parts:
                if part.inline_data is not None:
                    image_bytes = part.inline_data.data
                    pil_image = Image.open(BytesIO(image_bytes))
                    if pil_image.mode in ('RGBA', 'P'):
                        pil_image = pil_image.convert('RGB')
                    pil_image.save(str(output_path), 'WEBP', quality=85)
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
                print(f"Bad request: {err_str[:120]}")
                return False
            else:
                print(f"Error: {e}")
                if attempt < retries - 1:
                    time.sleep(5)

    return False


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--module", type=str, help="Only generate for specific module prefix (e.g., 'fi', 'astro')")
    parser.add_argument("--all", action="store_true", help="Regenerate all, even existing")
    args = parser.parse_args()

    print("=" * 60)
    print("POLYMIND MISSING LEVEL IMAGE GENERATOR")
    print(f"Model: {MODEL_NAME}")
    print(f"Total prompts: {len(LEVEL_PROMPTS)}")
    print(f"Output: {LEVELS_DIR}")
    print("=" * 60)

    client = genai.Client(api_key=GEMINI_API_KEY)

    # Filter by module if specified
    prompts = LEVEL_PROMPTS
    if args.module:
        prefix = f"level-{args.module}-"
        prompts = {k: v for k, v in LEVEL_PROMPTS.items() if k.startswith(prefix)}
        print(f"\nFiltering to module prefix '{args.module}': {len(prompts)} images")

    generated = 0
    skipped = 0
    failed = 0
    total = len(prompts)

    for i, (filename, prompt) in enumerate(prompts.items(), 1):
        output_path = LEVELS_DIR / filename

        if output_path.exists() and output_path.stat().st_size > 0 and not args.all:
            skipped += 1
            continue

        print(f"[{i}/{total}] {filename}...", end=" ", flush=True)

        if generate_image(client, prompt, output_path):
            generated += 1
            print(f"OK ({output_path.stat().st_size // 1024}KB)")
        else:
            failed += 1
            print(f"FAILED")

        # Rate limit: ~10 images/min for Gemini image gen
        if generated % 5 == 0 and generated > 0:
            time.sleep(3)

    print("\n" + "=" * 60)
    print(f"DONE: {generated} generated, {skipped} skipped, {failed} failed")
    print(f"Total images in levels dir: {len(list(LEVELS_DIR.glob('*.webp')))}")
    print("=" * 60)


if __name__ == "__main__":
    main()
