#!/usr/bin/env python3
"""
Polymind Lesson Generator (Gemini)
====================================
Generates PathwayLesson TypeScript content using Google Gemini 2.5 Flash.
Supports single module or batch-all generation with auto-integration.

Usage:
  python scripts/generate-lessons-gemini.py --module earth-sciences
  python scripts/generate-lessons-gemini.py --all
  python scripts/generate-lessons-gemini.py --module leadership --single-level 5

Requires:
  pip install google-genai python-dotenv
"""

import os
import sys
import time
import argparse
import re
from pathlib import Path

# Force unbuffered output
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

SCRIPT_DIR = Path(__file__).parent
APP_DIR = SCRIPT_DIR.parent
PATHWAYS_DIR = APP_DIR / "src" / "data" / "pathways"

# ============================================================
# MODULE CONFIGS — All 25 modules
# ============================================================

MODULE_CONFIGS = {
    "astronomy": {
        "name": "Astronomy", "prefix": "astro", "existing_levels": 1, "existing_lessons": 8,
        "description": "Explore the cosmos from our solar system to the farthest reaches of the observable universe.",
        "levels": {
            2: {"title": "Galaxies & Cosmic Structures", "topics": "Galaxy types, Milky Way structure, galaxy clusters, superclusters, cosmic web, galaxy evolution, active galactic nuclei, dark matter halos"},
            3: {"title": "Cosmology & the Big Bang", "topics": "Big Bang theory, cosmic microwave background, inflation, expanding universe, Hubble's law, cosmic timeline, nucleosynthesis, observable universe"},
            4: {"title": "Dark Matter & Dark Energy", "topics": "Evidence for dark matter, dark matter candidates, gravitational lensing, dark energy discovery, accelerating expansion, cosmological constant, modified gravity theories, the fate of the universe"},
            5: {"title": "Space Exploration History", "topics": "Space race, Apollo missions, Space Shuttle, ISS, Mars rovers, Voyager missions, key milestones, international cooperation"},
            6: {"title": "Modern Space Missions", "topics": "James Webb Space Telescope, Mars missions 2020s, Europa Clipper, Artemis program, commercial spaceflight, SpaceX Starship, asteroid mining, future missions"},
            7: {"title": "Exoplanets & Habitable Worlds", "topics": "Detection methods (transit, radial velocity), Kepler discoveries, habitable zone, atmospheric analysis, TRAPPIST-1 system, super-Earths, hot Jupiters, biosignatures"},
            8: {"title": "Astrophysics & Relativity", "topics": "Special relativity, general relativity, gravitational waves, LIGO discoveries, neutron star mergers, spacetime curvature, time dilation, twin paradox"},
            9: {"title": "Telescopes & Observational Techniques", "topics": "Optical telescopes, radio telescopes, infrared astronomy, X-ray telescopes, gravitational wave detectors, multi-messenger astronomy, amateur astronomy, citizen science"},
            10: {"title": "The Future of Astronomy", "topics": "Next-generation telescopes, space-based observatories, interstellar travel concepts, Breakthrough Starshot, Dyson spheres, multiverse theories, cosmic mysteries unsolved, humanity's cosmic future"},
        }
    },
    "earth-sciences": {
        "name": "Earth Sciences", "prefix": "earth", "existing_levels": 1, "existing_lessons": 8,
        "description": "Explore plate tectonics, climate systems, geology, oceanography, and the dynamic processes that shape our planet.",
        "levels": {
            2: {"title": "Minerals, Rocks & the Rock Cycle", "topics": "mineral identification, igneous rocks, sedimentary rocks, metamorphic rocks, rock cycle processes, crystallization, weathering and erosion, soil formation"},
            3: {"title": "Plate Tectonics & Earth's Interior", "topics": "continental drift evidence, seafloor spreading, subduction zones, transform boundaries, mantle convection, seismic waves, Earth's core structure, hotspots and plumes"},
            4: {"title": "Earthquakes & Volcanoes", "topics": "fault types, seismology and measurement, earthquake prediction, volcanic eruption types, magma composition, pyroclastic flows, tsunami generation, volcanic hazard mitigation"},
            5: {"title": "Oceans & Hydrosphere", "topics": "ocean circulation patterns, thermohaline conveyor, tides and wave mechanics, marine sediments, coastal geomorphology, ocean chemistry, deep sea hydrothermal vents, water cycle dynamics"},
            6: {"title": "Atmosphere & Weather Systems", "topics": "atmospheric layers, air pressure and wind, frontal systems, cyclones and anticyclones, precipitation types, severe weather formation, jet streams, weather forecasting methods"},
            7: {"title": "Climate Science & Paleoclimatology", "topics": "greenhouse effect mechanisms, Milankovitch cycles, ice core records, carbon cycle, climate feedback loops, ocean-atmosphere interaction, past mass extinctions, climate modeling"},
            8: {"title": "Earth Resources & Energy", "topics": "fossil fuel formation, mineral resource extraction, groundwater and aquifers, renewable energy geology, rare earth elements, resource depletion, geothermal energy, mining and environmental impact"},
            9: {"title": "Earth System Interactions", "topics": "biogeochemical cycles, land-ocean-atmosphere coupling, El Nino and La Nina, desertification processes, glacial and interglacial periods, carbon sequestration, biodiversity and geology, planetary boundaries"},
            10: {"title": "Planetary Geology & Earth's Future", "topics": "comparative planetology, Mars geology, asteroid impacts, magnetic field reversals, supercontinent cycles, anthropocene geology, geoengineering proposals, Earth's long-term future"},
        }
    },
    "biology-evolution": {
        "name": "Biology & Evolution", "prefix": "bio", "existing_levels": 1, "existing_lessons": 8,
        "description": "Explore the mechanisms of evolution, genetics, ecology, and the incredible diversity of life across billions of years.",
        "levels": {
            2: {"title": "Cell Biology & Molecular Machines", "topics": "cell structure and organelles, DNA replication, protein synthesis, cell membrane transport, mitosis and meiosis, cellular respiration, photosynthesis, cell signaling pathways"},
            3: {"title": "Genetics & Inheritance", "topics": "Mendelian genetics, dominant and recessive alleles, polygenic traits, gene linkage and crossing over, genetic disorders, epigenetics, population genetics, Hardy-Weinberg equilibrium"},
            4: {"title": "Mechanisms of Evolution", "topics": "natural selection in depth, sexual selection, genetic drift, gene flow, speciation mechanisms, adaptive radiation, convergent evolution, coevolution"},
            5: {"title": "Ecology & Ecosystems", "topics": "food webs and trophic levels, energy flow in ecosystems, nutrient cycling, population dynamics, predator-prey relationships, keystone species, ecological succession, biome diversity"},
            6: {"title": "Microorganisms & Immunology", "topics": "bacterial diversity, viral replication, fungal ecology, innate immune system, adaptive immunity, antibiotic resistance, microbiome, parasitism and disease"},
            7: {"title": "Human Biology & Physiology", "topics": "nervous system architecture, endocrine signaling, cardiovascular system, digestive and metabolic processes, musculoskeletal system, reproductive biology, human brain evolution, aging biology"},
            8: {"title": "Evolutionary History of Life", "topics": "origin of life theories, Cambrian explosion, mass extinction events, dinosaur era, mammalian radiation, primate evolution, human evolution timeline, molecular phylogenetics"},
            9: {"title": "Modern Genetics & Biotechnology", "topics": "CRISPR gene editing, genomics and sequencing, gene therapy, synthetic biology, cloning technology, genetically modified organisms, forensic genetics, personalized medicine"},
            10: {"title": "Conservation Biology & Biodiversity", "topics": "biodiversity crisis, extinction rates, habitat fragmentation, conservation genetics, rewilding strategies, invasive species, climate change and evolution, future of life on Earth"},
        }
    },
    "history-civilizations": {
        "name": "History of Civilizations", "prefix": "hist", "existing_levels": 1, "existing_lessons": 8,
        "description": "Understand the patterns of rise, fall, and cultural transmission that define human civilization from ancient Mesopotamia to the modern era.",
        "levels": {
            2: {"title": "Mesopotamia & Ancient Egypt", "topics": "Sumerian city-states, cuneiform and writing invention, Babylonian law codes, Assyrian military empire, Egyptian pharaohs and dynasties, pyramid construction, Nile River civilization, Bronze Age collapse"},
            3: {"title": "Classical Greece & Rome", "topics": "Athenian democracy, Spartan militarism, Persian Wars, Alexander the Great, Roman Republic institutions, Punic Wars, Roman Empire expansion, fall of Rome causes"},
            4: {"title": "Asian Empires & Dynasties", "topics": "Chinese dynasties overview, Confucianism and governance, Silk Road trade networks, Mongol Empire, Japanese feudalism, Indian Maurya and Gupta empires, Southeast Asian kingdoms, Korean and Vietnamese civilizations"},
            5: {"title": "Medieval World & Islam's Golden Age", "topics": "Islamic caliphates, Islamic Golden Age science, Byzantine Empire, Crusades and consequences, feudal Europe, Viking expansion, medieval trade routes, scholasticism and universities"},
            6: {"title": "Renaissance, Reformation & Exploration", "topics": "Italian Renaissance, printing press revolution, Protestant Reformation, Age of Exploration, Columbian Exchange, Spanish and Portuguese empires, Scientific Revolution, Enlightenment philosophy"},
            7: {"title": "Revolutions & Nation Building", "topics": "English Civil War, American Revolution, French Revolution, Haitian Revolution, Industrial Revolution, nationalism and unification, Latin American independence, abolition of slavery"},
            8: {"title": "Empires, Colonialism & Resistance", "topics": "British Empire, Scramble for Africa, Opium Wars, Meiji Restoration, Ottoman decline, colonial resistance movements, Indian independence struggle, decolonization waves"},
            9: {"title": "Patterns of Civilization", "topics": "rise and fall cycles, institutional decay, technological disruption, cultural transmission, economic systems evolution, religious transformations, demographic transitions, civilizational collapse theories"},
            10: {"title": "Global History & Future Civilizations", "topics": "globalization history, Cold War legacy, post-colonial world, digital revolution, clash of civilizations debate, demographic megatrends, environmental history, future of civilization"},
        }
    },
    "strategic-thinking": {
        "name": "Strategic Thinking", "prefix": "strat", "existing_levels": 1, "existing_lessons": 8,
        "description": "Master the art of strategic thinking -- diagnosis, guiding policy, competitive positioning, and coherent action.",
        "levels": {
            2: {"title": "Competitive Strategy", "topics": "Porter's Five Forces, competitive advantage types, industry analysis, value chain analysis, cost leadership vs differentiation, blue ocean strategy, strategic group mapping, barriers to entry"},
            3: {"title": "Strategic Analysis Frameworks", "topics": "SWOT deep dive, PESTEL analysis, scenario planning, war gaming, game theory in strategy, BCG matrix, Ansoff matrix, strategic intent"},
            4: {"title": "Positioning & Market Strategy", "topics": "market positioning, first mover advantage, network effects strategy, platform strategy, disruption theory, incumbents vs challengers, niche strategy, strategic inflection points"},
            5: {"title": "Execution & Alignment", "topics": "strategy-execution gap, OKRs and strategic goals, resource allocation, organizational alignment, strategic communication, balanced scorecard, change management, strategic pivots"},
            6: {"title": "Military Strategy for Business", "topics": "Sun Tzu's principles applied, Clausewitz and friction, Boyd's OODA loop, maneuver warfare thinking, concentration of force, flanking strategies, strategic retreat, indirect approach"},
            7: {"title": "Innovation Strategy", "topics": "sustaining vs disruptive innovation, technology adoption curves, innovation portfolio management, open innovation, strategic experimentation, platform vs pipeline, ambidextrous organization, creative destruction"},
            8: {"title": "Geopolitical & Macro Strategy", "topics": "geopolitical risk assessment, trade war strategy, regulatory strategy, multi-market competition, global vs local strategy, political economy, sanctions and strategy, long-term macro positioning"},
            9: {"title": "Strategic Leadership & Decision Making", "topics": "strategic decision traps, cognitive biases in strategy, strategic patience, bold bets vs hedging, stakeholder strategy, crisis strategy, strategic narratives, visionary leadership"},
            10: {"title": "Grand Strategy & Systems", "topics": "grand strategy concepts, second and third-order effects, strategic foresight, adaptive strategy, antifragile strategy, meta-strategy, personal strategic planning, synthesizing strategic wisdom"},
        }
    },
    "systems-complexity": {
        "name": "Systems & Complexity", "prefix": "sys", "existing_levels": 1, "existing_lessons": 8,
        "description": "Learn to see feedback loops, emergence, and leverage points in complex systems from biology to economics.",
        "levels": {
            2: {"title": "Feedback Loops & Dynamics", "topics": "reinforcing feedback loops, balancing feedback loops, delays in systems, oscillation patterns, exponential growth, S-curves, system archetypes, causal loop diagrams"},
            3: {"title": "Emergence & Self-Organization", "topics": "emergent properties, self-organizing systems, cellular automata, swarm intelligence, phase transitions, spontaneous order, bottom-up complexity, stigmergy"},
            4: {"title": "Network Theory & Complexity", "topics": "network topology, small world networks, scale-free networks, network effects, hub vulnerability, cascading failures, social network analysis, information flow in networks"},
            5: {"title": "Complex Adaptive Systems", "topics": "agent-based modeling, fitness landscapes, adaptation and evolution, coevolution dynamics, edge of chaos, path dependence, lock-in effects, rugged landscapes"},
            6: {"title": "Systems Modeling & Simulation", "topics": "stock and flow diagrams, system dynamics modeling, Monte Carlo simulation, sensitivity analysis, scenario modeling, limits to growth, predator-prey models, systems mapping tools"},
            7: {"title": "Complexity in Human Systems", "topics": "organizational complexity, market complexity, urban systems, healthcare systems, education system dynamics, bureaucracy and complexity, innovation ecosystems, institutional evolution"},
            8: {"title": "Chaos Theory & Nonlinearity", "topics": "deterministic chaos, butterfly effect, strange attractors, bifurcation points, fractals in nature, power laws, black swan events, nonlinear dynamics"},
            9: {"title": "Systems Thinking in Practice", "topics": "leverage points identification, unintended consequences, system boundaries, mental models and systems, wicked problems, polarity management, systems leadership, design thinking and systems"},
            10: {"title": "Meta-Systems & Integration", "topics": "systems of systems, cybernetics, viable system model, Gaia theory, complexity economics, evolutionary systems, resilience engineering, synthesizing systems wisdom"},
        }
    },
    "western-philosophy": {
        "name": "Western Philosophy", "prefix": "wphil", "existing_levels": 1, "existing_lessons": 8,
        "description": "Master the fundamental questions and methods of Western philosophy from ancient Greece to contemporary thought.",
        "levels": {
            2: {"title": "Plato & Aristotle", "topics": "Theory of Forms, Plato's Republic, the cave allegory, Aristotelian logic, virtue ethics, Aristotle's metaphysics, political philosophy, the golden mean"},
            3: {"title": "Medieval & Renaissance Philosophy", "topics": "Augustine and faith, Aquinas and natural law, problem of universals, scholastic method, Machiavelli's realism, Erasmus and humanism, Montaigne's skepticism, early modern transition"},
            4: {"title": "Rationalism & Empiricism", "topics": "Descartes' method of doubt, Spinoza's monism, Leibniz's monadology, Locke's empiricism, Berkeley's idealism, Hume's skepticism, innate ideas debate, knowledge foundations"},
            5: {"title": "Kant & German Idealism", "topics": "Kant's critical philosophy, synthetic a priori, categorical imperative, Hegel's dialectic, phenomenology of spirit, Schopenhauer's will, Fichte and self, transcendental idealism"},
            6: {"title": "Ethics & Political Philosophy", "topics": "utilitarianism, deontological ethics, social contract theory, Rawls' justice theory, libertarianism, communitarianism, rights theory, moral relativism vs objectivism"},
            7: {"title": "Existentialism & Phenomenology", "topics": "Kierkegaard's leap of faith, Nietzsche's will to power, Husserl's phenomenology, Heidegger's Being, Sartre's radical freedom, Camus and absurdism, de Beauvoir's feminism, existential anxiety"},
            8: {"title": "Analytic Philosophy & Logic", "topics": "Frege's logic revolution, Russell's paradox, Wittgenstein's Tractatus, logical positivism, philosophy of language, Quine's naturalism, Kripke's modal logic, analytic-continental divide"},
            9: {"title": "Philosophy of Mind & Science", "topics": "mind-body problem, consciousness theories, functionalism, philosophy of perception, free will debate, philosophy of science, Kuhn's paradigm shifts, falsificationism"},
            10: {"title": "Contemporary Philosophy", "topics": "postmodernism, deconstruction, pragmatism revival, virtue ethics revival, effective altruism philosophy, philosophy of AI, environmental ethics, synthesizing philosophical wisdom"},
        }
    },
    "finance-investing": {
        "name": "Finance & Investing", "prefix": "fi", "existing_levels": 1, "existing_lessons": 8,
        "description": "Master the core principles of finance and investing -- asset classes, portfolio theory, valuation, and the psychology of successful investing.",
        "levels": {
            2: {"title": "Asset Classes & Markets", "topics": "equity markets deep dive, bond markets and yields, real estate investing, commodities and futures, ETFs and index funds, money markets, alternative investments, market microstructure"},
            3: {"title": "Fundamental Analysis", "topics": "financial statement analysis, income statement mastery, balance sheet deep dive, cash flow analysis, ratio analysis, earnings quality, competitive moat identification, intrinsic value calculation"},
            4: {"title": "Portfolio Theory & Construction", "topics": "modern portfolio theory, efficient frontier, asset allocation strategies, diversification mathematics, correlation and covariance, rebalancing strategies, risk-adjusted returns, factor investing"},
            5: {"title": "Valuation Methods", "topics": "discounted cash flow modeling, comparable company analysis, price-to-earnings ratios, enterprise value multiples, dividend discount model, sum-of-parts valuation, growth vs value investing, margin of safety"},
            6: {"title": "Behavioral Finance", "topics": "loss aversion, overconfidence bias, herd mentality, anchoring in markets, disposition effect, mental accounting, narrative economics, contrarian investing psychology"},
            7: {"title": "Fixed Income & Bonds", "topics": "yield curve analysis, duration and convexity, credit analysis, corporate bonds, government bonds, municipal bonds, bond pricing mechanics, interest rate risk management"},
            8: {"title": "Global Investing & Currencies", "topics": "international diversification, emerging market investing, currency risk and hedging, ADRs and GDRs, sovereign risk assessment, capital flows, global macro investing, frontier markets"},
            9: {"title": "Advanced Strategies", "topics": "options for portfolio protection, short selling, leverage and margin, merger arbitrage, distressed debt investing, private equity, venture capital, activist investing"},
            10: {"title": "Wealth Management & Mastery", "topics": "tax-efficient investing, retirement planning, estate planning basics, wealth preservation, investment policy statement, risk management framework, building an investment philosophy, lifelong investing mastery"},
        }
    },
    "mental-models": {
        "name": "Mental Models", "prefix": "mm", "existing_levels": 1, "existing_lessons": 8,
        "description": "Master essential thinking frameworks used by the world's best decision makers across disciplines.",
        "levels": {
            2: {"title": "Physics & Engineering Models", "topics": "critical mass, activation energy, leverage, inertia and momentum, friction, redundancy, breakpoints, margin of safety"},
            3: {"title": "Biology & Evolution Models", "topics": "natural selection thinking, adaptation, niche theory, Red Queen effect, symbiosis, ecosystem thinking, survival of the fittest, evolutionary arms race"},
            4: {"title": "Economics & Market Models", "topics": "supply and demand, opportunity cost, comparative advantage, tragedy of the commons, Gresham's law, creative destruction, marginal thinking, externalities"},
            5: {"title": "Psychology & Behavior Models", "topics": "confirmation bias, availability heuristic, Dunning-Kruger effect, social proof, reciprocity, commitment and consistency, narrative fallacy, sunk cost fallacy"},
            6: {"title": "Mathematics & Statistics Models", "topics": "Bayesian thinking, regression to the mean, power laws, compounding, normal distribution limits, law of large numbers, correlation vs causation, expected value"},
            7: {"title": "Systems & Complexity Models", "topics": "feedback loops, emergence, network effects, antifragility, Pareto principle, bottleneck theory, second-order thinking, unintended consequences"},
            8: {"title": "Strategy & Decision Models", "topics": "Occam's razor, hanlon's razor, via negativa, asymmetric upside, optionality, reversible vs irreversible decisions, premortem analysis, decision trees"},
            9: {"title": "Multi-Disciplinary Integration", "topics": "latticework of models, model selection, combining models, contradicting models, model limitations, real-world application, Munger's approach, worldly wisdom"},
            10: {"title": "Applied Mental Model Mastery", "topics": "daily model practice, model journaling, teaching models to others, building personal model library, meta-models, wisdom vs knowledge, model-based forecasting, lifetime learning system"},
        }
    },
    "first-principles": {
        "name": "First Principles Thinking", "prefix": "fp", "existing_levels": 1, "existing_lessons": 8,
        "description": "Learn to break problems down to fundamental truths and rebuild innovative solutions from the ground up.",
        "levels": {
            2: {"title": "Decomposition Techniques", "topics": "assumption mapping, five whys method, constraint identification, variable isolation, root cause analysis, functional decomposition, abstraction laddering, reductionism"},
            3: {"title": "Scientific Reasoning", "topics": "hypothesis formation, experimental design, falsification, controlled variables, Bayesian updating, reproducibility, peer review thinking, evidence hierarchy"},
            4: {"title": "Analogical vs First Principles Thinking", "topics": "analogy traps, reasoning by analogy, when analogies work, when to use first principles, pattern matching limits, transfer learning, domain expertise, cognitive shortcuts"},
            5: {"title": "Cost & Resource Analysis", "topics": "bottom-up cost estimation, physics-based cost limits, manufacturing first principles, supply chain decomposition, time cost analysis, energy cost fundamentals, scaling laws, minimum viable cost"},
            6: {"title": "First Principles in Technology", "topics": "Elon Musk's approach, physics of possibility, information theory basics, computational limits, thermodynamic constraints, materials science fundamentals, engineering trade-offs, technology feasibility"},
            7: {"title": "First Principles in Business", "topics": "customer need decomposition, market sizing from scratch, pricing from value, business model fundamentals, unit economics, competitive advantage roots, industry structure analysis, zero-based budgeting"},
            8: {"title": "Creative Reconstruction", "topics": "ideation from principles, design from constraints, combinatorial innovation, biomimicry, cross-domain application, inverting problems, lateral thinking, novel solution generation"},
            9: {"title": "Complex Problem Application", "topics": "multi-variable problems, system decomposition, interdependency mapping, simplification strategies, wicked problem approach, policy design, organizational redesign, societal challenge analysis"},
            10: {"title": "First Principles Mastery", "topics": "building a reasoning practice, teaching first principles, speed of decomposition, intuition development, philosophical foundations, integration with mental models, personal decision framework, lifelong first principles thinking"},
        }
    },
    "meta-learning": {
        "name": "Meta-Learning", "prefix": "mlearn", "existing_levels": 1, "existing_lessons": 8,
        "description": "Master the science of learning how to learn -- deliberate practice, memory techniques, and accelerated skill acquisition.",
        "levels": {
            2: {"title": "Memory & Retention Science", "topics": "spaced repetition systems, encoding strategies, memory palace technique, elaborative interrogation, interleaving practice, retrieval practice, forgetting curve management, chunking information"},
            3: {"title": "Deliberate Practice", "topics": "Ericsson's deliberate practice, skill decomposition, feedback loops in learning, plateau breaking, mental representations, practice scheduling, coach and mentor role, measuring skill progress"},
            4: {"title": "Reading & Information Processing", "topics": "speed reading techniques, active reading strategies, note-taking systems, Zettelkasten method, Feynman technique, skimming vs deep reading, information synthesis, building a knowledge base"},
            5: {"title": "Focus & Deep Work", "topics": "attention management, flow state triggers, deep work scheduling, distraction elimination, single-tasking, cognitive load theory, ultradian rhythms, environment design for focus"},
            6: {"title": "Skill Acquisition Frameworks", "topics": "Dreyfus model of expertise, 10000 hour rule revisited, rapid skill acquisition, transfer of learning, domain-general skills, T-shaped knowledge, skill stacking, ultralearning methodology"},
            7: {"title": "Cognitive Science of Learning", "topics": "dual process theory, working memory limitations, schema theory, cognitive apprenticeship, zone of proximal development, desirable difficulties, testing effect, generation effect"},
            8: {"title": "Learning Systems & Tools", "topics": "Anki and SRS tools, digital knowledge management, mind mapping, concept mapping, personal learning environment, learning analytics, AI-assisted learning, building learning habits"},
            9: {"title": "Teaching & Knowledge Sharing", "topics": "learning by teaching, explanation techniques, curriculum design, scaffolding knowledge, Socratic questioning, group learning dynamics, mentoring frameworks, knowledge communities"},
            10: {"title": "Lifelong Learning Mastery", "topics": "autodidact strategies, learning identity, intellectual curiosity cultivation, cross-disciplinary learning, learning portfolio, knowledge compounding, wisdom development, designing your learning life"},
        }
    },
    "web-development": {
        "name": "Web Development", "prefix": "webdev", "existing_levels": 1, "existing_lessons": 8,
        "description": "Master modern web development from HTML/CSS/JS foundations to full-stack applications and deployment.",
        "levels": {
            2: {"title": "CSS Mastery & Layouts", "topics": "Flexbox layout, CSS Grid, responsive design, media queries, CSS variables, animations and transitions, pseudo-elements, modern CSS techniques"},
            3: {"title": "JavaScript Deep Dive", "topics": "closures and scope, prototypes and classes, async/await and promises, event loop, DOM manipulation, error handling, modules and imports, modern ES6+ features"},
            4: {"title": "React & Component Architecture", "topics": "React fundamentals, JSX and components, state management, hooks deep dive, component lifecycle, props and data flow, context API, React patterns"},
            5: {"title": "Backend Development", "topics": "Node.js fundamentals, Express.js framework, REST API design, authentication and authorization, middleware patterns, server-side rendering, API versioning, backend architecture"},
            6: {"title": "Databases & Data Layer", "topics": "SQL fundamentals, PostgreSQL deep dive, MongoDB and NoSQL, ORMs and query builders, database design, indexing and performance, data modeling, migrations and schemas"},
            7: {"title": "TypeScript & Code Quality", "topics": "TypeScript fundamentals, type systems, generics, interfaces and types, strict mode, testing with Jest, linting and formatting, code review practices"},
            8: {"title": "DevOps & Deployment", "topics": "Git workflows, CI/CD pipelines, Docker containers, cloud deployment, environment management, monitoring and logging, performance optimization, security best practices"},
            9: {"title": "Advanced Frontend Patterns", "topics": "state management libraries, micro-frontends, web workers, service workers and PWAs, WebSocket real-time, accessibility, internationalization, performance profiling"},
            10: {"title": "Full-Stack Mastery", "topics": "system design for web, scalability patterns, caching strategies, API gateway patterns, serverless architecture, JAMstack, building SaaS products, web development career mastery"},
        }
    },
    "decision-making": {
        "name": "Decision Making", "prefix": "decide", "existing_levels": 1, "existing_lessons": 8,
        "description": "Master probabilistic thinking, bias mitigation, and decision frameworks for better choices under uncertainty.",
        "levels": {
            2: {"title": "Cognitive Biases & Traps", "topics": "anchoring bias, confirmation bias, sunk cost fallacy, availability bias, overconfidence, hindsight bias, framing effects, status quo bias"},
            3: {"title": "Probabilistic Thinking", "topics": "Bayesian reasoning, base rates, expected value, probability calibration, confidence intervals, Monte Carlo thinking, conditional probability, frequentist vs Bayesian"},
            4: {"title": "Decision Frameworks", "topics": "decision matrices, pros-cons-fixes, WRAP framework, Eisenhower matrix, regret minimization, reversible vs irreversible decisions, 10-10-10 rule, opportunity cost analysis"},
            5: {"title": "Group Decision Making", "topics": "wisdom of crowds, groupthink prevention, Delphi method, structured debate, devil's advocate role, nominal group technique, decision rights clarity, consensus vs consent"},
            6: {"title": "Decisions Under Uncertainty", "topics": "unknown unknowns, ambiguity tolerance, robust decision making, real options thinking, scenario-based decisions, adaptive strategies, black swan preparation, decision under ignorance"},
            7: {"title": "Emotional Intelligence in Decisions", "topics": "emotions as information, hot-cold empathy gap, stress and decision quality, intuition vs analysis, somatic markers, emotional regulation, decision fatigue management, mindful decision making"},
            8: {"title": "Strategic & High-Stakes Decisions", "topics": "crisis decision making, negotiation decisions, career decisions framework, investment decisions, hiring decisions, ethical dilemmas, leadership decisions, bet sizing"},
            9: {"title": "Decision Systems & Processes", "topics": "decision journals, premortem analysis, postmortem reviews, decision auditing, checklists for decisions, decision-making rituals, organizational decision processes, continuous improvement"},
            10: {"title": "Decision Mastery & Integration", "topics": "building decision intuition, speed vs quality trade-offs, meta-decision making, personal decision philosophy, teaching decision skills, compound decision effects, wisdom and judgment, lifelong decision excellence"},
        }
    },
    "risk-management": {
        "name": "Risk Management", "prefix": "risk", "existing_levels": 1, "existing_lessons": 8,
        "description": "Master tail risk protection, margin of safety, asymmetric risk-reward, and antifragility principles.",
        "levels": {
            2: {"title": "Risk Identification & Assessment", "topics": "risk taxonomy, qualitative risk assessment, quantitative risk analysis, risk registers, probability-impact matrices, risk heat maps, scenario analysis, risk appetite definition"},
            3: {"title": "Financial Risk Management", "topics": "market risk, credit risk, liquidity risk, Value at Risk, stress testing, hedging strategies, counterparty risk, financial risk metrics"},
            4: {"title": "Operational & Enterprise Risk", "topics": "operational risk categories, business continuity planning, supply chain risk, cyber risk management, regulatory risk, reputational risk, enterprise risk frameworks, COSO and ISO 31000"},
            5: {"title": "Portfolio Risk & Diversification", "topics": "portfolio risk metrics, correlation in crises, tail risk hedging, drawdown management, position sizing, Kelly criterion, risk budgeting, portfolio stress testing"},
            6: {"title": "Behavioral Risk & Decision Traps", "topics": "risk perception biases, overconfidence in risk, normalcy bias, groupthink risk, herding behavior, loss aversion in risk, illusion of control, narrative risk"},
            7: {"title": "Black Swans & Fat Tails", "topics": "Nassim Taleb's framework, fat-tailed distributions, black swan identification, antifragility in practice, barbell strategy, convexity and optionality, fragility detection, preparing for extremes"},
            8: {"title": "Systemic & Catastrophic Risk", "topics": "systemic risk in finance, contagion mechanisms, too big to fail, pandemic risk, climate risk, nuclear risk, AI existential risk, global catastrophic risk management"},
            9: {"title": "Risk Communication & Culture", "topics": "risk communication principles, building risk culture, risk governance, risk reporting, stakeholder risk management, risk transparency, psychological safety, learning from failures"},
            10: {"title": "Integrated Risk Mastery", "topics": "personal risk management system, career risk optimization, life risk portfolio, asymmetric risk-reward mastery, risk-adjusted decision making, antifragile life design, teaching risk thinking, risk wisdom integration"},
        }
    },
    "geopolitics": {
        "name": "Geopolitics", "prefix": "geo", "existing_levels": 1, "existing_lessons": 8,
        "description": "Master the geographic, resource, and economic forces that determine which nations rise and which fall.",
        "levels": {
            2: {"title": "Great Power Competition", "topics": "US hegemony, China's rise, Russia's strategy, EU as geopolitical actor, Thucydides trap, power transition theory, nuclear deterrence, great power diplomacy"},
            3: {"title": "Energy & Resource Geopolitics", "topics": "oil and gas politics, OPEC dynamics, energy transition geopolitics, rare earth supply chains, water scarcity conflicts, food security, Arctic resource competition, resource curse"},
            4: {"title": "Regional Flashpoints", "topics": "Taiwan Strait tensions, South China Sea, Middle East dynamics, India-Pakistan rivalry, Korean Peninsula, Eastern Europe, Africa's great game, Latin American geopolitics"},
            5: {"title": "Economic Warfare & Trade", "topics": "sanctions as weapons, trade wars, currency manipulation, economic coercion, SWIFT and financial warfare, technology export controls, supply chain weaponization, economic statecraft"},
            6: {"title": "Military Strategy & Defense", "topics": "naval chokepoints, military alliances, defense spending trends, cyber warfare, space militarization, drone warfare, asymmetric warfare, nuclear proliferation"},
            7: {"title": "Intelligence & Information Warfare", "topics": "intelligence agencies, espionage in geopolitics, disinformation campaigns, election interference, propaganda techniques, open-source intelligence, cyber espionage, information operations"},
            8: {"title": "International Institutions & Law", "topics": "United Nations effectiveness, WTO and trade law, ICC and international justice, NATO evolution, BRICS and new institutions, sovereignty vs intervention, international law limits, multilateralism vs unilateralism"},
            9: {"title": "Demographic & Climate Geopolitics", "topics": "population decline crisis, migration and borders, youth bulge instability, climate change security, sea level rise geopolitics, climate migration, demographic dividends, aging societies"},
            10: {"title": "Future of Geopolitics", "topics": "AI and geopolitical power, space geopolitics, biotech and power, cryptocurrency and sovereignty, multipolarity, technology blocs, civilizational geopolitics, predicting geopolitical shifts"},
        }
    },
    "cloud-devops": {
        "name": "Cloud & DevOps", "prefix": "devops", "existing_levels": 1, "existing_lessons": 8,
        "description": "Master cloud computing, containers, CI/CD, infrastructure as code, and modern DevOps practices.",
        "levels": {
            2: {"title": "Cloud Platform Fundamentals", "topics": "AWS core services, Azure overview, GCP overview, compute options, storage types, networking in cloud, IAM and security, cloud pricing models"},
            3: {"title": "Containers & Docker", "topics": "Docker fundamentals, Dockerfile best practices, container networking, Docker Compose, image optimization, registry management, container security, multi-stage builds"},
            4: {"title": "Kubernetes & Orchestration", "topics": "Kubernetes architecture, pods and deployments, services and ingress, ConfigMaps and Secrets, Helm charts, horizontal pod autoscaling, namespaces and RBAC, StatefulSets"},
            5: {"title": "CI/CD Pipelines", "topics": "Jenkins pipelines, GitHub Actions, GitLab CI, pipeline design patterns, testing in CI, deployment strategies, artifact management, pipeline security"},
            6: {"title": "Infrastructure as Code", "topics": "Terraform fundamentals, CloudFormation, Ansible automation, Pulumi, state management, modules and reusability, drift detection, IaC best practices"},
            7: {"title": "Monitoring & Observability", "topics": "Prometheus and Grafana, logging with ELK stack, distributed tracing, alerting strategies, SLIs SLOs SLAs, incident management, chaos engineering, observability culture"},
            8: {"title": "Security & Compliance", "topics": "DevSecOps practices, vulnerability scanning, secrets management, network security in cloud, compliance automation, container security, supply chain security, zero trust architecture"},
            9: {"title": "Advanced Cloud Architecture", "topics": "microservices architecture, serverless deep dive, event-driven architecture, message queues and streaming, multi-cloud strategy, hybrid cloud, edge computing, cloud-native patterns"},
            10: {"title": "DevOps Culture & Mastery", "topics": "site reliability engineering, platform engineering, developer experience, DevOps metrics and DORA, blameless postmortems, toil reduction, capacity planning, building DevOps excellence"},
        }
    },
    "modern-history": {
        "name": "Modern History", "prefix": "modhist", "existing_levels": 1, "existing_lessons": 8,
        "description": "Understand the wars, revolutions, ideological conflicts, and social transformations that created the modern world.",
        "levels": {
            2: {"title": "World War II: The Global Conflict", "topics": "rise of Nazi Germany, Pacific War, Eastern Front, D-Day and liberation, Holocaust, atomic bomb decision, war's economic impact, Nuremberg trials"},
            3: {"title": "Cold War Era", "topics": "Iron Curtain, Korean War, Cuban Missile Crisis, Vietnam War, Space Race, proxy wars, nuclear arms race, detente and diplomacy"},
            4: {"title": "Decolonization & Independence", "topics": "Indian independence, African liberation movements, Middle East formation, Southeast Asian independence, Latin American revolutions, non-aligned movement, neo-colonialism, post-colonial challenges"},
            5: {"title": "Social Revolutions", "topics": "civil rights movement, feminist waves, counterculture 1960s, labor movements, LGBTQ rights history, environmental movement, disability rights, anti-apartheid struggle"},
            6: {"title": "Economic Transformations", "topics": "Bretton Woods system, oil shocks 1970s, Reaganomics and Thatcherism, Asian Tigers rise, European integration, globalization acceleration, 2008 financial crisis, inequality debate"},
            7: {"title": "Technology & Society", "topics": "nuclear age, space exploration, computer revolution, internet emergence, social media impact, biotechnology, AI development, technology and warfare"},
            8: {"title": "Post-Cold War World", "topics": "Soviet collapse, Gulf War, Yugoslavia breakup, Rwanda genocide, September 11th, war on terror, Arab Spring, rise of populism"},
            9: {"title": "Contemporary Challenges", "topics": "China's transformation, climate crisis, pandemic response, migration crises, democratic backsliding, information warfare, global inequality, multilateral order stress"},
            10: {"title": "Lessons of Modern History", "topics": "patterns of conflict, revolution dynamics, institutional resilience, propaganda and truth, economic cycles, social progress patterns, technology disruption patterns, applying historical lessons"},
        }
    },
    "leadership": {
        "name": "Leadership", "prefix": "lead", "existing_levels": 1, "existing_lessons": 8,
        "description": "Build essential leadership skills -- executive presence, team building, decision-making, influence, and crisis management.",
        "levels": {
            2: {"title": "Emotional Intelligence for Leaders", "topics": "self-awareness practices, emotional regulation, empathy in leadership, social skills, reading the room, managing your triggers, emotional contagion, EQ assessment and development"},
            3: {"title": "Communication & Influence", "topics": "executive communication, storytelling for leaders, persuasion techniques, active listening, difficult conversations, public speaking, written communication, cross-cultural communication"},
            4: {"title": "Team Building & Management", "topics": "hiring and talent selection, team dynamics, psychological safety, delegation mastery, performance management, remote team leadership, conflict resolution, building high-performance teams"},
            5: {"title": "Strategic Leadership", "topics": "vision setting, strategic planning, organizational alignment, resource prioritization, stakeholder management, competitive positioning, long-term thinking, strategic execution"},
            6: {"title": "Leading Change", "topics": "change management models, overcoming resistance, organizational transformation, culture change, merger integration, digital transformation, restructuring, sustaining momentum"},
            7: {"title": "Crisis & Adaptive Leadership", "topics": "crisis leadership, decision-making under pressure, resilience building, adaptive challenges, leading through ambiguity, turnaround leadership, managing chaos, post-crisis recovery"},
            8: {"title": "Power, Politics & Ethics", "topics": "organizational power dynamics, political savvy, ethical leadership, building trust, servant leadership, accountability culture, whistleblowing, moral courage"},
            9: {"title": "Coaching & Developing Others", "topics": "coaching frameworks, mentoring relationships, feedback mastery, succession planning, developing leaders, talent pipelines, executive coaching, building a coaching culture"},
            10: {"title": "Leadership Mastery & Legacy", "topics": "personal leadership philosophy, executive presence mastery, board-level leadership, thought leadership, leadership brand, leaving a legacy, wisdom in leadership, continuous leadership growth"},
        }
    },
    "options-trading": {
        "name": "Options Trading", "prefix": "opt", "existing_levels": 1, "existing_lessons": 8,
        "description": "Master options pricing, the Greeks, strategies, and risk management for successful options trading.",
        "levels": {
            2: {"title": "Options Pricing & The Greeks", "topics": "Black-Scholes model, intrinsic vs extrinsic value, delta deep dive, gamma risk, theta decay, vega and volatility, rho and interest rates, Greek interactions"},
            3: {"title": "Volatility Trading", "topics": "implied vs historical volatility, volatility smile and skew, VIX index, volatility mean reversion, straddles and strangles, volatility crushes, earnings volatility, volatility surface"},
            4: {"title": "Vertical Spreads", "topics": "bull call spreads, bear put spreads, credit spreads, debit spreads, spread width selection, risk-reward analysis, probability of profit, managing vertical spreads"},
            5: {"title": "Income Strategies", "topics": "covered calls, cash-secured puts, wheel strategy, iron condors, credit spread income, dividend capture with options, premium selling philosophy, income portfolio construction"},
            6: {"title": "Advanced Multi-Leg Strategies", "topics": "butterflies, calendar spreads, diagonal spreads, ratio spreads, iron butterflies, jade lizards, broken wing butterflies, custom spread construction"},
            7: {"title": "Risk Management for Options", "topics": "position sizing, portfolio Greeks management, max loss planning, rolling techniques, adjustment strategies, correlation risk, assignment and exercise, portfolio margin"},
            8: {"title": "Technical Analysis for Options", "topics": "support and resistance for entries, volume analysis, options flow analysis, unusual options activity, open interest analysis, implied move calculations, probability cones, trade timing"},
            9: {"title": "Advanced Volatility Strategies", "topics": "dispersion trading, variance swaps, volatility arbitrage, skew trading, term structure trading, tail risk hedging with options, LEAPS strategies, synthetic positions"},
            10: {"title": "Options Trading Mastery", "topics": "trading psychology, trade journaling, building a trading plan, portfolio construction with options, backtesting strategies, scaling a trading business, continuous improvement, options trading wisdom"},
        }
    },
    "cultural-anthropology": {
        "name": "Cultural Anthropology", "prefix": "anthro", "existing_levels": 1, "existing_lessons": 8,
        "description": "Explore kinship, ritual, economic exchange, and linguistic diversity that reveal human cultural flexibility.",
        "levels": {
            2: {"title": "Kinship & Social Organization", "topics": "kinship systems and terminology, marriage practices, descent and lineage, clan and moiety structures, family cross-culturally, gender roles, age-grade systems, social stratification"},
            3: {"title": "Religion, Ritual & Belief", "topics": "animism and totemism, shamanism, rites of passage, sacred and profane, myth and cosmology, witchcraft and sorcery beliefs, millenarian movements, secularization"},
            4: {"title": "Economic Anthropology", "topics": "gift economy, reciprocity types, redistribution, market exchange, substantivism vs formalism, moral economy, debt and obligation, subsistence strategies"},
            5: {"title": "Language, Communication & Meaning", "topics": "Sapir-Whorf hypothesis, ethnography of communication, code-switching, language endangerment, discourse analysis, nonverbal communication, naming practices, linguistic anthropology methods"},
            6: {"title": "Political Anthropology & Power", "topics": "band societies, chiefdoms, state formation, political rituals, resistance and agency, colonialism's legacy, nationalism, indigenous rights movements"},
            7: {"title": "Medical & Psychological Anthropology", "topics": "culture-bound syndromes, ethnomedicine, bioethics cross-culturally, mental health across cultures, healing rituals, body modification, disability across cultures, pharmaceutical anthropology"},
            8: {"title": "Urban & Digital Anthropology", "topics": "urban ethnography, migration and diaspora, transnational communities, digital cultures, social media anthropology, virtual communities, globalization effects, cosmopolitanism"},
            9: {"title": "Applied & Visual Anthropology", "topics": "development anthropology, humanitarian anthropology, forensic anthropology, museum and heritage, ethnographic film, visual ethnography, design anthropology, corporate anthropology"},
            10: {"title": "Contemporary Anthropological Debates", "topics": "decolonizing anthropology, multi-species ethnography, ontological turn, posthumanism, climate change anthropology, AI and culture, ethics of fieldwork, future of anthropology"},
        }
    },
    "problem-solving": {
        "name": "Problem Solving", "prefix": "solve", "existing_levels": 1, "existing_lessons": 8,
        "description": "Master systematic troubleshooting, root cause analysis, debugging mindsets, and expert pattern recognition.",
        "levels": {
            2: {"title": "Root Cause Analysis", "topics": "five whys technique, fishbone diagrams, fault tree analysis, Pareto analysis, causal chain mapping, contributing factors, systemic vs symptomatic causes, documentation methods"},
            3: {"title": "Creative Problem Solving", "topics": "lateral thinking, SCAMPER technique, brainstorming methods, mind mapping, random stimulation, constraint removal, analogical thinking, forced connections"},
            4: {"title": "Analytical Problem Solving", "topics": "hypothesis-driven approach, MECE framework, issue trees, quantitative analysis, data-driven decisions, logic trees, sensitivity analysis, structured problem decomposition"},
            5: {"title": "Design Thinking", "topics": "empathize phase, define phase, ideate phase, prototype phase, test phase, iteration cycles, human-centered design, design thinking in business"},
            6: {"title": "Systems Problem Solving", "topics": "systems mapping for problems, leverage point identification, unintended consequences, feedback loop analysis, boundary setting, interconnection analysis, emergent problems, systemic interventions"},
            7: {"title": "Technical & Engineering Problem Solving", "topics": "debugging methodology, binary search debugging, rubber duck debugging, testing and validation, failure mode analysis, engineering trade-offs, optimization problems, technical debt resolution"},
            8: {"title": "Collaborative Problem Solving", "topics": "facilitation techniques, group problem solving, conflict as problem input, stakeholder analysis, negotiation, cross-functional problem solving, distributed team solving, building problem-solving culture"},
            9: {"title": "Complex & Wicked Problems", "topics": "wicked problem characteristics, adaptive management, probe-sense-respond, safe-to-fail experiments, polarity management, paradox resolution, meta-problem solving, complexity-appropriate methods"},
            10: {"title": "Problem-Solving Mastery", "topics": "building problem intuition, pattern library development, problem-solving speed, teaching problem solving, personal problem-solving toolkit, integration across methods, wisdom in problem solving, lifelong problem-solving practice"},
        }
    },
    "cybersecurity": {
        "name": "Cybersecurity", "prefix": "cyber", "existing_levels": 1, "existing_lessons": 8,
        "description": "Master digital defense from security fundamentals to advanced threat hunting, penetration testing, and security architecture.",
        "levels": {
            2: {"title": "Network Security", "topics": "TCP/IP security, firewalls and rules, VPNs and tunneling, DNS security, wireless security, network segmentation, intrusion detection systems, network monitoring"},
            3: {"title": "Cryptography & Encryption", "topics": "symmetric encryption, asymmetric encryption, hashing algorithms, digital signatures, PKI and certificates, TLS/SSL protocols, key management, post-quantum cryptography"},
            4: {"title": "Web Application Security", "topics": "OWASP Top 10, SQL injection, cross-site scripting, CSRF attacks, authentication flaws, session management, API security, secure coding practices"},
            5: {"title": "Operating System & Endpoint Security", "topics": "Windows security hardening, Linux security, macOS security, endpoint detection and response, antivirus vs EDR, patch management, privilege escalation prevention, secure boot"},
            6: {"title": "Identity & Access Management", "topics": "authentication methods, multi-factor authentication, single sign-on, OAuth and OIDC, role-based access control, zero trust identity, privileged access management, identity governance"},
            7: {"title": "Threat Intelligence & Hunting", "topics": "threat landscape analysis, MITRE ATT&CK framework, indicators of compromise, threat hunting methodology, malware analysis basics, APT groups, dark web monitoring, intelligence sharing"},
            8: {"title": "Penetration Testing & Red Team", "topics": "penetration testing methodology, reconnaissance techniques, vulnerability scanning, exploitation basics, post-exploitation, social engineering, red team operations, reporting and remediation"},
            9: {"title": "Security Operations & Incident Response", "topics": "SOC operations, SIEM management, incident response planning, digital forensics basics, chain of custody, malware incident response, breach notification, lessons learned process"},
            10: {"title": "Security Architecture & Strategy", "topics": "security architecture frameworks, defense in depth, cloud security architecture, DevSecOps, security metrics and KPIs, compliance frameworks, security program management, CISO-level thinking"},
        }
    },
    "macro-economics": {
        "name": "Macro Economics", "prefix": "macro", "existing_levels": 1, "existing_lessons": 8,
        "description": "Master central bank policy, yield curves, economic indicators, and currency dynamics that drive global markets.",
        "levels": {
            2: {"title": "Monetary Policy & Central Banking", "topics": "Federal Reserve mechanics, interest rate transmission, quantitative easing, tightening cycles, forward guidance, central bank independence, inflation targeting, monetary policy tools"},
            3: {"title": "Fiscal Policy & Government Spending", "topics": "fiscal multiplier, government debt dynamics, budget deficits, Keynesian vs austerity, automatic stabilizers, fiscal stimulus, sovereign debt crises, modern monetary theory debate"},
            4: {"title": "Inflation & Deflation", "topics": "CPI and inflation measures, demand-pull inflation, cost-push inflation, wage-price spirals, hyperinflation case studies, deflation dangers, inflation expectations, central bank credibility"},
            5: {"title": "Currency Markets & Exchange Rates", "topics": "foreign exchange mechanics, purchasing power parity, interest rate parity, carry trades, currency crises, dollar dominance, de-dollarization, capital flow dynamics"},
            6: {"title": "Business Cycles & Indicators", "topics": "GDP and output gaps, leading indicators, lagging indicators, recession identification, yield curve inversion, PMI and ISM, employment data, housing market signals"},
            7: {"title": "International Trade & Balance of Payments", "topics": "comparative advantage, trade balances, current account dynamics, capital account flows, trade wars and tariffs, supply chain economics, global value chains, trade agreements"},
            8: {"title": "Financial Markets & Macro", "topics": "equity market and macro, bond market signals, credit cycles, commodity supercycles, real estate cycles, market regime changes, risk-on risk-off dynamics, intermarket analysis"},
            9: {"title": "Economic Schools of Thought", "topics": "Keynesian economics, monetarism, Austrian economics, supply-side economics, institutional economics, behavioral macro, complexity economics, post-Keynesian thought"},
            10: {"title": "Global Macro Strategy & Mastery", "topics": "macro trading frameworks, Ray Dalio's economic machine, Soros reflexivity, regime identification, global macro portfolio, emerging market analysis, macro risk management, developing macro intuition"},
        }
    },
    "productivity-systems": {
        "name": "Productivity Systems", "prefix": "prod", "existing_levels": 1, "existing_lessons": 8,
        "description": "Master GTD, time blocking, energy management, deep work, and workflow automation for peak productivity.",
        "levels": {
            2: {"title": "Getting Things Done (GTD)", "topics": "GTD capture phase, GTD clarify process, GTD organize system, GTD reflect reviews, GTD engage action, inbox zero, context-based action lists, weekly review mastery"},
            3: {"title": "Time Management & Scheduling", "topics": "time blocking, Pomodoro technique, batching similar tasks, calendar management, meeting optimization, time auditing, scheduling philosophy, protecting deep work time"},
            4: {"title": "Energy & Attention Management", "topics": "chronotype optimization, ultradian rhythms, energy audit, nutrition for productivity, exercise and cognitive performance, sleep optimization, stress management, recovery practices"},
            5: {"title": "Digital Productivity Tools", "topics": "task management apps, note-taking systems, knowledge management, automation with Zapier, keyboard shortcuts mastery, email management, browser optimization, digital minimalism"},
            6: {"title": "Goal Setting & Planning Systems", "topics": "OKRs personal, annual planning, quarterly reviews, monthly goal setting, SMART goals evolved, vision and purpose, goal tracking systems, anti-goals"},
            7: {"title": "Deep Work & Flow States", "topics": "deep work scheduling, flow state triggers, distraction elimination, environment design, monotasking practice, creative routines, maker vs manager schedule, flow in teams"},
            8: {"title": "Habits & Routines", "topics": "habit stacking, morning routines, evening routines, keystone habits, habit tracking, breaking bad habits, identity-based habits, designing habit systems"},
            9: {"title": "Project Management & Execution", "topics": "project planning methods, agile for personal use, kanban boards, project decomposition, milestone tracking, risk in personal projects, shipping and completion, project portfolio management"},
            10: {"title": "Productivity Philosophy & Mastery", "topics": "essentialism, minimalist productivity, work-life integration, saying no effectively, burnout prevention, sustainable pace, personal operating system, lifelong productivity evolution"},
        }
    },
    "crypto-trading": {
        "name": "Crypto Trading", "prefix": "crypto", "existing_levels": 1, "existing_lessons": 8,
        "description": "Master Bitcoin, Ethereum, DeFi, on-chain analysis, and risk management for cryptocurrency trading and investing.",
        "levels": {
            2: {"title": "Blockchain Technology Deep Dive", "topics": "blockchain architecture, consensus mechanisms, proof of work vs proof of stake, smart contract platforms, layer 1 vs layer 2, sidechains and rollups, interoperability, blockchain trilemma"},
            3: {"title": "DeFi Fundamentals", "topics": "decentralized exchanges, liquidity pools, automated market makers, lending protocols, yield farming, stablecoins, flash loans, DeFi risk assessment"},
            4: {"title": "Technical Analysis for Crypto", "topics": "crypto chart patterns, volume profile, order flow analysis, support and resistance, moving averages, RSI and momentum, Fibonacci levels, crypto-specific indicators"},
            5: {"title": "On-Chain Analysis", "topics": "blockchain explorers, whale wallet tracking, exchange flow analysis, network activity metrics, HODL waves, MVRV ratio, NVT ratio, on-chain sentiment"},
            6: {"title": "Market Cycles & Psychology", "topics": "Bitcoin halving cycles, crypto market phases, fear and greed index, social sentiment analysis, market manipulation, pump and dump detection, bubble anatomy, cycle timing strategies"},
            7: {"title": "Altcoin Analysis & Selection", "topics": "tokenomics evaluation, team and community assessment, whitepaper analysis, TVL and usage metrics, token distribution, governance tokens, meme coins, altcoin portfolio construction"},
            8: {"title": "Trading Strategies & Execution", "topics": "spot vs derivatives trading, perpetual futures, funding rates, liquidation management, grid trading, DCA strategies, swing trading crypto, scalping techniques"},
            9: {"title": "Risk Management & Security", "topics": "position sizing for crypto, portfolio allocation, cold storage security, hardware wallets, private key management, exchange risk, rug pull identification, regulatory risk assessment"},
            10: {"title": "Crypto Trading Mastery", "topics": "building a trading system, trade journaling, tax implications, portfolio rebalancing, market regime adaptation, macro and crypto correlation, institutional crypto analysis, developing crypto trading edge"},
        }
    },
}

# ============================================================
# SYSTEM PROMPT FOR GEMINI
# ============================================================

SYSTEM_PROMPT = """You are an expert educational content creator for Polymind, a gamified learning platform.
Your task is to generate high-quality lesson content in TypeScript format.

CRITICAL RULES:
1. Output ONLY valid TypeScript code. No markdown fences, no explanations.
2. Each lesson must be educational, engaging, and substantive (300-600 words for mainContent).
3. Use backtick template literals (`) for mainContent fields — this allows apostrophes without escaping.
4. Use single quotes (') for ALL other string values. Escape apostrophes in single-quoted strings with \\'.
5. mainContent should use markdown formatting: ## headings, **bold**, > blockquotes, bullet lists.
6. Include real facts, real people, real research. Never fabricate citations.
7. Quiz questions must have exactly 4 options with `correct` being a 0-indexed number.
8. Quiz explanations should be thorough (2-3 sentences).
9. Each lesson gets xpReward: 100 and a duration between 8-15 minutes.
10. Include actionItem for non-quiz lessons (practical exercise the learner can do).
11. Type field must be one of: 'intro', 'concept', 'exercise', 'quiz', 'reflection', 'challenge'
12. Every lesson MUST have a quiz field (even non-quiz type lessons).

EXAMPLE LESSON FORMAT:
  {
    id: 'PREFIX-NNN',
    title: 'Lesson Title Here',
    type: 'concept',
    duration: 12,
    xpReward: 100,
    content: {
      overview: 'Brief one-sentence overview of this lesson.',
      mainContent: `## Section Title

First paragraph with **bold terms** and real facts.

Second paragraph expanding on the concept with specific examples, numbers, and research.

> A relevant quote from a notable figure. — Attribution

Third paragraph with practical implications or deeper analysis.

**Key Concept**: A highlighted important concept or framework.

Final paragraph tying everything together.`,
      keyTakeaway: 'One clear sentence summarizing the most important lesson.',
      actionItem: 'A specific, practical thing the learner can do today.',
      quiz: {
        question: 'A thought-provoking question testing understanding?',
        options: [
          'Correct answer with specific detail',
          'Plausible but wrong answer',
          'Another plausible wrong answer',
          'Fourth option that tests common misconception',
        ],
        correct: 0,
        explanation: 'Detailed explanation of why the correct answer is right. Include additional context that reinforces learning.',
      },
    },
  },
"""

# ============================================================
# FUNCTIONS
# ============================================================

def generate_level_lessons(client, module_config: dict, level_num: int, start_lesson_id: int) -> str:
    """Generate 8 lessons for one level using Gemini."""
    prefix = module_config["prefix"]
    level_info = module_config["levels"][level_num]
    level_title = level_info["title"]
    topics = level_info["topics"]
    module_name = module_config["name"]

    lesson_ids = [f"{prefix}-{str(start_lesson_id + i).zfill(3)}" for i in range(8)]

    prompt = f"""Generate exactly 8 lessons for Level {level_num}: "{level_title}" of the {module_name} module.

Module: {module_name} - {module_config['description']}
Level {level_num}: {level_title}
Topics to cover: {topics}

Lesson IDs (in order): {', '.join(lesson_ids)}

Lesson type sequence (MUST follow exactly):
1. {lesson_ids[0]} — type: 'intro' (Introduction to {level_title})
2. {lesson_ids[1]} — type: 'concept' (Core concept)
3. {lesson_ids[2]} — type: 'concept' (Deeper concept)
4. {lesson_ids[3]} — type: 'concept' (Another important concept)
5. {lesson_ids[4]} — type: 'exercise' (Practical exercise/application)
6. {lesson_ids[5]} — type: 'concept' (Advanced concept)
7. {lesson_ids[6]} — type: 'reflection' (Reflection on the level's themes)
8. {lesson_ids[7]} — type: 'challenge' (Challenge combining all concepts)

Output the TypeScript array variable. The variable name MUST be: {prefix}LessonsLevel{level_num}

Start with:
export const {prefix}LessonsLevel{level_num}: PathwayLesson[] = [

End with:
];

IMPORTANT: Every lesson MUST have a quiz property with question, 4 options, correct (0-indexed), and explanation.
IMPORTANT: Use backticks (`) for mainContent, single quotes (') for everything else.
IMPORTANT: Escape apostrophes in single-quoted strings with \\'.
IMPORTANT: Make content educational and substantive — 300-600 words per mainContent.
IMPORTANT: Reference real scientists, discoveries, and dates where applicable."""

    for attempt in range(3):
        try:
            response = client.models.generate_content(
                model=MODEL_NAME,
                contents=[prompt],
                config=types.GenerateContentConfig(
                    system_instruction=SYSTEM_PROMPT,
                    temperature=0.7,
                    max_output_tokens=16000,
                )
            )

            text = None
            try:
                text = response.text
            except Exception:
                pass

            if text is None:
                if hasattr(response, 'candidates') and response.candidates:
                    candidate = response.candidates[0]
                    if hasattr(candidate, 'content') and candidate.content:
                        parts = candidate.content.parts
                        if parts:
                            text = ''.join(p.text for p in parts if hasattr(p, 'text') and p.text)

            if not text:
                if hasattr(response, 'candidates') and response.candidates:
                    candidate = response.candidates[0]
                    if hasattr(candidate, 'finish_reason'):
                        print(f"  WARN: finish_reason={candidate.finish_reason}")
                if hasattr(response, 'prompt_feedback'):
                    print(f"  WARN: prompt_feedback={response.prompt_feedback}")
                if attempt < 2:
                    print(f"  Empty response, retrying ({attempt + 2}/3)...")
                    time.sleep(10)
                    continue
                print(f"  ERROR: No text in response after 3 attempts")
                return None

            text = re.sub(r'^```(?:typescript|ts)?\s*\n', '', text, flags=re.MULTILINE)
            text = re.sub(r'\n```\s*$', '', text, flags=re.MULTILINE)
            text = text.strip()

            if not text.startswith('export const'):
                match = re.search(r'(export const \w+LessonsLevel\d+[\s\S]*];)', text, re.DOTALL)
                if match:
                    text = match.group(1)

            return text

        except Exception as e:
            err_str = str(e)
            if "429" in err_str or "RESOURCE_EXHAUSTED" in err_str:
                wait = 30 * (attempt + 1)
                print(f"  Rate limited, waiting {wait}s...")
                time.sleep(wait)
            else:
                print(f"  ERROR: {e}")
                if attempt < 2:
                    time.sleep(5)
                else:
                    return None

    return None


def fix_apostrophes(content: str) -> str:
    """Fix unescaped apostrophes in single-quoted strings."""
    lines = content.split('\n')
    fixed_lines = []
    in_backtick = False

    for line in lines:
        backtick_count = line.count('`')

        if in_backtick:
            fixed_lines.append(line)
            if backtick_count % 2 == 1:
                in_backtick = False
            continue

        if backtick_count % 2 == 1:
            in_backtick = True
            fixed_lines.append(line)
            continue

        result = []
        i = 0
        in_single_quote = False

        while i < len(line):
            if not in_single_quote:
                if line[i] == "'":
                    in_single_quote = True
                result.append(line[i])
            else:
                if line[i] == "'" and (i == 0 or line[i-1] != '\\'):
                    rest = line[i+1:].lstrip()
                    if (rest == '' or rest.startswith(',') or rest.startswith(']') or
                        rest.startswith('}') or rest.startswith(';') or rest.startswith(')') or
                        rest.startswith(':') or rest.startswith('\n')):
                        in_single_quote = False
                        result.append(line[i])
                    else:
                        result.append("\\'")
                else:
                    result.append(line[i])
            i += 1

        fixed_lines.append(''.join(result))

    return '\n'.join(fixed_lines)


def generate_module(client, module_id: str, config: dict):
    """Generate all missing levels for a single module and write to -generated.ts."""
    prefix = config["prefix"]
    existing_levels = config["existing_levels"]
    existing_lessons = config["existing_lessons"]

    start_level = existing_levels + 1
    end_level = 10
    total_levels = end_level - start_level + 1
    total_lessons = total_levels * 8

    print(f"\n{'=' * 60}")
    print(f"MODULE: {config['name']} ({module_id})")
    print(f"Prefix: {prefix}")
    print(f"Generating: Level {start_level} to Level {end_level} ({total_levels} levels, {total_lessons} lessons)")
    print(f"{'=' * 60}")

    all_generated = []

    for level in range(start_level, end_level + 1):
        if level not in config["levels"]:
            print(f"\n  SKIP Level {level} — no config defined")
            continue

        level_info = config["levels"][level]
        lesson_start_id = existing_lessons + (level - existing_levels - 1) * 8 + 1

        print(f"\n  [{level}/{end_level}] Generating Level {level}: {level_info['title']}...")
        print(f"        Lesson IDs: {prefix}-{str(lesson_start_id).zfill(3)} to {prefix}-{str(lesson_start_id + 7).zfill(3)}")

        result = generate_level_lessons(client, config, level, lesson_start_id)

        if result:
            result = fix_apostrophes(result)
            all_generated.append(f"\n// ============================================")
            all_generated.append(f"// Level {level}: {level_info['title']}")
            all_generated.append(f"// ============================================")
            all_generated.append(result)
            print(f"        OK ({len(result)} chars)")

            if level < end_level:
                print(f"        Waiting 5s for rate limit...")
                time.sleep(5)
        else:
            print(f"        FAILED — skipping")

    if not all_generated:
        print(f"\n  No content generated for {module_id}. Skipping.")
        return False

    output = "\n\n".join(all_generated)
    output_file = PATHWAYS_DIR / f"{module_id}-lessons-generated.ts"
    full_output = f"import type {{ PathwayLesson }} from '@/types';\n\n{output}\n"

    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(full_output)

    print(f"\n  SUCCESS! Generated {total_lessons} lessons for {config['name']}")
    print(f"  Output: {output_file.name}")
    return True


def main():
    parser = argparse.ArgumentParser(description="Generate Polymind lessons using Gemini")
    parser.add_argument("--module", choices=list(MODULE_CONFIGS.keys()),
                       help="Single module to generate lessons for")
    parser.add_argument("--all", action="store_true",
                       help="Generate lessons for ALL modules that need expansion")
    parser.add_argument("--start-level", type=int, default=None)
    parser.add_argument("--end-level", type=int, default=None)
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--single-level", type=int, default=None)
    parser.add_argument("--skip", nargs="*", default=[],
                       help="Module IDs to skip in --all mode")
    args = parser.parse_args()

    if not args.module and not args.all:
        parser.error("Either --module or --all is required")

    client = genai.Client(api_key=GEMINI_API_KEY)

    if args.all:
        # Batch mode — generate all thin modules
        skip = set(args.skip) if args.skip else set()
        skip.add("astronomy")  # Already completed

        # Check which modules still need generation
        modules_to_generate = []
        for mod_id, config in MODULE_CONFIGS.items():
            if mod_id in skip:
                continue
            generated_file = PATHWAYS_DIR / f"{mod_id}-lessons-generated.ts"
            if generated_file.exists():
                print(f"  SKIP {mod_id} — generated file already exists")
                continue
            modules_to_generate.append((mod_id, config))

        print(f"\n{'=' * 60}")
        print(f"BATCH GENERATION: {len(modules_to_generate)} modules")
        print(f"Estimated time: ~{len(modules_to_generate) * 5} minutes")
        print(f"{'=' * 60}")

        completed = 0
        failed = []
        for i, (mod_id, config) in enumerate(modules_to_generate):
            print(f"\n[{i+1}/{len(modules_to_generate)}] ", end="")
            try:
                success = generate_module(client, mod_id, config)
                if success:
                    completed += 1
                else:
                    failed.append(mod_id)
            except Exception as e:
                print(f"\n  FATAL ERROR for {mod_id}: {e}")
                failed.append(mod_id)

            # Longer delay between modules to avoid rate limits
            if i < len(modules_to_generate) - 1:
                print(f"\n  Waiting 10s before next module...")
                time.sleep(10)

        print(f"\n\n{'=' * 60}")
        print(f"BATCH COMPLETE!")
        print(f"  Completed: {completed}/{len(modules_to_generate)}")
        if failed:
            print(f"  Failed: {', '.join(failed)}")
        print(f"{'=' * 60}")
        return

    # Single module mode
    config = MODULE_CONFIGS[args.module]
    prefix = config["prefix"]
    existing_levels = config["existing_levels"]
    existing_lessons = config["existing_lessons"]

    if args.single_level:
        start_level = args.single_level
        end_level = args.single_level
    else:
        start_level = args.start_level or (existing_levels + 1)
        end_level = args.end_level or 10

    if start_level > end_level:
        print(f"Error: start-level ({start_level}) > end-level ({end_level})")
        sys.exit(1)

    total_levels = end_level - start_level + 1
    total_lessons = total_levels * 8

    print("=" * 60)
    print(f"POLYMIND LESSON GENERATOR (Gemini)")
    print(f"Module: {config['name']} ({args.module})")
    print(f"Prefix: {prefix}")
    print(f"Generating: Level {start_level} to Level {end_level} ({total_levels} levels, {total_lessons} lessons)")
    print(f"Model: {MODEL_NAME}")
    print("=" * 60)

    lessons_file = PATHWAYS_DIR / f"{args.module}-lessons.ts"
    if not lessons_file.exists():
        print(f"Error: {lessons_file} not found")
        sys.exit(1)

    all_generated = []

    for level in range(start_level, end_level + 1):
        if level not in config["levels"]:
            print(f"\n  SKIP Level {level} — no config defined")
            continue

        level_info = config["levels"][level]
        lesson_start_id = existing_lessons + (level - existing_levels - 1) * 8 + 1

        print(f"\n  [{level}/{end_level}] Generating Level {level}: {level_info['title']}...")
        print(f"        Lesson IDs: {prefix}-{str(lesson_start_id).zfill(3)} to {prefix}-{str(lesson_start_id + 7).zfill(3)}")

        result = generate_level_lessons(client, config, level, lesson_start_id)

        if result:
            result = fix_apostrophes(result)
            all_generated.append(f"\n// ============================================")
            all_generated.append(f"// Level {level}: {level_info['title']}")
            all_generated.append(f"// ============================================")
            all_generated.append(result)
            print(f"        OK ({len(result)} chars)")

            if level < end_level:
                print(f"        Waiting 5s for rate limit...")
                time.sleep(5)
        else:
            print(f"        FAILED — skipping")

    if not all_generated:
        print("\nNo content generated. Exiting.")
        sys.exit(1)

    output = "\n\n".join(all_generated)

    if args.dry_run:
        print("\n" + "=" * 60)
        print("DRY RUN — Generated content:")
        print("=" * 60)
        print(output)
    else:
        output_file = PATHWAYS_DIR / f"{args.module}-lessons-generated.ts"
        full_output = f"import type {{ PathwayLesson }} from '@/types';\n\n{output}\n"

        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(full_output)

        print(f"\n{'=' * 60}")
        print(f"SUCCESS! Generated {total_lessons} lessons across {total_levels} levels")
        print(f"Output written to: {output_file}")

    print(f"\nDone!")


if __name__ == "__main__":
    main()
