#!/usr/bin/env python3
"""Generate the TypeScript import + levelImages additions for moduleImages.ts."""

# Module prefix -> (display name, level count, list of filename suffixes)
# Suffix list derived from generate-missing-level-images.py filenames

MODULES = {
    "fi": ("Finance & Investing", 10, [
        "foundations", "assets", "fundamental", "portfolio", "valuation",
        "behavioral", "bonds", "global", "advanced", "mastery"
    ]),
    "astro": ("Astronomy", 10, [
        "cosmic", "galaxies", "cosmology", "dark", "exploration",
        "missions", "exoplanets", "astrophysics", "telescopes", "future"
    ]),
    "strat": ("Strategic Thinking", 10, [
        "fundamentals", "competitive", "frameworks", "positioning", "execution",
        "military", "innovation", "geopolitical", "leadership", "grand"
    ]),
    "sys": ("Systems & Complexity", 10, [
        "fundamentals", "feedback", "emergence", "network", "adaptive",
        "modeling", "human", "chaos", "practice", "meta"
    ]),
    "hist": ("History & Civilizations", 10, [
        "foundations", "mesopotamia", "classical", "asian", "medieval",
        "renaissance", "revolutions", "empires", "patterns", "global"
    ]),
    "wphil": ("Western Philosophy", 10, [
        "ancient", "plato", "medieval", "rationalism", "kant",
        "ethics", "existential", "analytic", "mind", "contemporary"
    ]),
    "cyber": ("Cybersecurity", 10, [
        "fundamentals", "network", "crypto", "webapp", "endpoint",
        "identity", "threat", "pentest", "secops", "architecture"
    ]),
    "startup": ("Startups & Innovation", 8, [
        "mindset", "ideation", "lean", "pmf", "team",
        "funding", "growth", "leadership"
    ]),
    "rel": ("Relationships & Social", 8, [
        "connection", "attachment", "communication", "eq", "conflict",
        "friendship", "romantic", "social"
    ]),
    "geo": ("Geopolitics", 10, [
        "power", "great-power", "energy", "flashpoints", "economic",
        "military", "intelligence", "institutions", "demographic", "future"
    ]),
    "webdev": ("Web Development", 10, [
        "foundations", "css", "javascript", "react", "backend",
        "database", "typescript", "devops", "advanced", "fullstack"
    ]),
    "devops": ("Cloud & DevOps", 10, [
        "essentials", "platform", "containers", "kubernetes", "cicd",
        "iac", "monitoring", "security", "architecture", "culture"
    ]),
    "opt": ("Options Trading", 10, [
        "fundamentals", "greeks", "volatility", "verticals", "income",
        "multileg", "risk", "technical", "advanced-vol", "mastery"
    ]),
    "macro": ("Macro Economics", 10, [
        "fundamentals", "monetary", "fiscal", "inflation", "currency",
        "cycles", "trade", "markets", "schools", "strategy"
    ]),
    "crypto": ("Crypto Trading", 10, [
        "fundamentals", "blockchain", "defi", "technical", "onchain",
        "cycles", "altcoins", "strategies", "risk", "mastery"
    ]),
    "mm": ("Mental Models", 10, [
        "core", "physics", "biology", "economics", "psychology",
        "math", "systems", "strategy", "integration", "mastery"
    ]),
    "fp": ("First Principles", 10, [
        "fundamentals", "decomposition", "scientific", "analogical", "cost",
        "technology", "business", "creative", "complex", "mastery"
    ]),
    "mlearn": ("Meta-Learning", 10, [
        "foundations", "memory", "deliberate", "reading", "focus",
        "skills", "cognitive", "systems", "teaching", "lifelong"
    ]),
    "bio": ("Biology & Evolution", 10, [
        "life", "cell", "evolution", "human", "ecosystems",
        "molecular", "micro", "neuro", "biotech", "future"
    ]),
    "earth": ("Earth Sciences", 10, [
        "dynamic", "tectonics", "atmosphere", "oceans", "climate",
        "disasters", "resources", "environment", "ice-ages", "future"
    ]),
    "decide": ("Decision Making", 10, [
        "fundamentals", "biases", "probabilistic", "frameworks", "group",
        "uncertainty", "emotional", "strategic", "systems", "mastery"
    ]),
    "risk": ("Risk Management", 10, [
        "fundamentals", "identification", "financial", "operational", "portfolio",
        "behavioral", "black-swan", "systemic", "communication", "mastery"
    ]),
    "modhist": ("Modern History", 10, [
        "wars", "wwii", "coldwar", "decolonization", "social",
        "economic", "technology", "postcold", "contemporary", "lessons"
    ]),
    "anthro": ("Cultural Anthropology", 10, [
        "foundations", "kinship", "religion", "economic", "language",
        "political", "medical", "urban", "applied", "debates"
    ]),
    "lead": ("Leadership", 10, [
        "fundamentals", "eq", "communication", "team", "strategic",
        "change", "crisis", "power", "coaching", "legacy"
    ]),
    "solve": ("Problem Solving", 10, [
        "core", "root", "creative", "analytical", "design",
        "systems", "technical", "collaborative", "complex", "mastery"
    ]),
    "prod": ("Productivity Systems", 10, [
        "core", "gtd", "time", "energy", "digital",
        "goals", "deep", "habits", "projects", "philosophy"
    ]),
}


def camel(prefix):
    """Convert prefix like 'fi' or 'webdev' to CamelCase."""
    parts = prefix.split("-") if "-" in prefix else [prefix]
    return "".join(p.capitalize() for p in parts)


def gen_imports():
    lines = []
    for prefix, (name, count, suffixes) in MODULES.items():
        cc = camel(prefix)
        lines.append(f"// Level images - {name} ({count})")
        for i, suffix in enumerate(suffixes, 1):
            num = f"{i:02d}"
            lines.append(
                f"import level{cc}{num} from '@/assets/ai-images/levels/level-{prefix}-{num}-{suffix}.webp';"
            )
        lines.append("")
    return "\n".join(lines)


def gen_mappings():
    lines = []
    for prefix, (name, count, suffixes) in MODULES.items():
        cc = camel(prefix)
        lines.append(f"  // {name} ({count})")
        for i in range(1, count + 1):
            num = f"{i:02d}"
            lines.append(f"  '{prefix}-level{i}': level{cc}{num},")
        lines.append("")
    return "\n".join(lines)


if __name__ == "__main__":
    print("// ============================================")
    print("// IMPORTS (paste after existing level image imports)")
    print("// ============================================")
    print()
    print(gen_imports())
    print()
    print("// ============================================")
    print("// LEVEL MAPPINGS (paste into levelImages record)")
    print("// ============================================")
    print()
    print(gen_mappings())
