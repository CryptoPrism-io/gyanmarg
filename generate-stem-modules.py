#!/usr/bin/env python3
"""
Generate Mathematics & Patterns + Physics & Engineering modules
Total: 128 lessons (64 each)
"""

# Mathematics & Patterns - 8 levels, 64 lessons
mathematics_levels = [
    {
        "level": 1,
        "title": "Mathematical Foundations",
        "lessons": [
            {"id": "001", "title": "The Language of Mathematics", "type": "intro", "duration": 12, "xp": 80},
            {"id": "002", "title": "Number Systems Through History", "type": "concept", "duration": 15, "xp": 100},
            {"id": "003", "title": "The Beauty of Prime Numbers", "type": "concept", "duration": 15, "xp": 100},
            {"id": "004", "title": "Mathematical Thinking Patterns", "type": "concept", "duration": 15, "xp": 100},
            {"id": "005", "title": "Problem Solving Strategies", "type": "exercise", "duration": 20, "xp": 120},
            {"id": "006", "title": "Logic and Reasoning", "type": "concept", "duration": 15, "xp": 100},
            {"id": "007", "title": "Mathematical Proofs Basics", "type": "concept", "duration": 15, "xp": 100},
            {"id": "008", "title": "Foundations Quiz", "type": "quiz", "duration": 10, "xp": 100},
        ]
    },
    {
        "level": 2,
        "title": "Geometry & Spatial Thinking",
        "lessons": [
            {"id": "009", "title": "Euclidean Geometry Foundations", "type": "concept", "duration": 15, "xp": 100},
            {"id": "010", "title": "Triangles and Their Properties", "type": "concept", "duration": 15, "xp": 100},
            {"id": "011", "title": "Circles and Pi", "type": "concept", "duration": 15, "xp": 100},
            {"id": "012", "title": "Symmetry in Mathematics", "type": "concept", "duration": 15, "xp": 100},
            {"id": "013", "title": "3D Geometry and Solids", "type": "concept", "duration": 15, "xp": 100},
            {"id": "014", "title": "Transformations and Tessellations", "type": "exercise", "duration": 20, "xp": 120},
            {"id": "015", "title": "Non-Euclidean Geometry", "type": "concept", "duration": 15, "xp": 100},
            {"id": "016", "title": "Geometry Quiz", "type": "quiz", "duration": 10, "xp": 100},
        ]
    },
    {
        "level": 3,
        "title": "Patterns in Nature",
        "lessons": [
            {"id": "017", "title": "The Fibonacci Sequence", "type": "concept", "duration": 15, "xp": 100},
            {"id": "018", "title": "The Golden Ratio (Phi)", "type": "concept", "duration": 15, "xp": 100},
            {"id": "019", "title": "Fractals and Self-Similarity", "type": "concept", "duration": 15, "xp": 100},
            {"id": "020", "title": "Spirals in Nature", "type": "concept", "duration": 15, "xp": 100},
            {"id": "021", "title": "Pascal's Triangle", "type": "concept", "duration": 15, "xp": 100},
            {"id": "022", "title": "Patterns Exercise", "type": "exercise", "duration": 20, "xp": 120},
            {"id": "023", "title": "Chaos Theory Basics", "type": "concept", "duration": 15, "xp": 100},
            {"id": "024", "title": "Nature Patterns Quiz", "type": "quiz", "duration": 10, "xp": 100},
        ]
    },
    {
        "level": 4,
        "title": "Sacred Geometry",
        "lessons": [
            {"id": "025", "title": "Sacred Geometry Origins", "type": "concept", "duration": 15, "xp": 100},
            {"id": "026", "title": "Platonic Solids", "type": "concept", "duration": 15, "xp": 100},
            {"id": "027", "title": "The Flower of Life", "type": "concept", "duration": 15, "xp": 100},
            {"id": "028", "title": "Metatron's Cube", "type": "concept", "duration": 15, "xp": 100},
            {"id": "029", "title": "Vesica Piscis", "type": "concept", "duration": 15, "xp": 100},
            {"id": "030", "title": "The Torus and Unity", "type": "concept", "duration": 15, "xp": 100},
            {"id": "031", "title": "Sacred Geometry Exercise", "type": "exercise", "duration": 20, "xp": 120},
            {"id": "032", "title": "Sacred Geometry Quiz", "type": "quiz", "duration": 10, "xp": 100},
        ]
    },
    {
        "level": 5,
        "title": "Algebra & Logic",
        "lessons": [
            {"id": "033", "title": "Algebraic Thinking", "type": "concept", "duration": 15, "xp": 100},
            {"id": "034", "title": "Variables and Expressions", "type": "concept", "duration": 15, "xp": 100},
            {"id": "035", "title": "Equations and Inequalities", "type": "concept", "duration": 15, "xp": 100},
            {"id": "036", "title": "Functions and Graphs", "type": "concept", "duration": 15, "xp": 100},
            {"id": "037", "title": "Boolean Logic", "type": "concept", "duration": 15, "xp": 100},
            {"id": "038", "title": "Set Theory Basics", "type": "concept", "duration": 15, "xp": 100},
            {"id": "039", "title": "Algebra Problem Solving", "type": "exercise", "duration": 20, "xp": 120},
            {"id": "040", "title": "Algebra Quiz", "type": "quiz", "duration": 10, "xp": 100},
        ]
    },
    {
        "level": 6,
        "title": "Probability & Statistics",
        "lessons": [
            {"id": "041", "title": "Understanding Randomness", "type": "concept", "duration": 15, "xp": 100},
            {"id": "042", "title": "Probability Fundamentals", "type": "concept", "duration": 15, "xp": 100},
            {"id": "043", "title": "Distributions and Bell Curves", "type": "concept", "duration": 15, "xp": 100},
            {"id": "044", "title": "Statistics in Daily Life", "type": "concept", "duration": 15, "xp": 100},
            {"id": "045", "title": "Correlation vs Causation", "type": "concept", "duration": 15, "xp": 100},
            {"id": "046", "title": "Bayesian Thinking", "type": "concept", "duration": 15, "xp": 100},
            {"id": "047", "title": "Statistics Exercise", "type": "exercise", "duration": 20, "xp": 120},
            {"id": "048", "title": "Probability Quiz", "type": "quiz", "duration": 10, "xp": 100},
        ]
    },
    {
        "level": 7,
        "title": "Calculus & Change",
        "lessons": [
            {"id": "049", "title": "The Concept of Limits", "type": "concept", "duration": 15, "xp": 100},
            {"id": "050", "title": "Derivatives: Rate of Change", "type": "concept", "duration": 15, "xp": 100},
            {"id": "051", "title": "Integrals: Area Under Curves", "type": "concept", "duration": 15, "xp": 100},
            {"id": "052", "title": "The Fundamental Theorem", "type": "concept", "duration": 15, "xp": 100},
            {"id": "053", "title": "Optimization Problems", "type": "exercise", "duration": 20, "xp": 120},
            {"id": "054", "title": "Differential Equations", "type": "concept", "duration": 15, "xp": 100},
            {"id": "055", "title": "Calculus in Nature", "type": "concept", "duration": 15, "xp": 100},
            {"id": "056", "title": "Calculus Quiz", "type": "quiz", "duration": 10, "xp": 100},
        ]
    },
    {
        "level": 8,
        "title": "Mathematical Beauty & Mastery",
        "lessons": [
            {"id": "057", "title": "Number Theory Gems", "type": "concept", "duration": 15, "xp": 100},
            {"id": "058", "title": "Topology: Rubber Sheet Geometry", "type": "concept", "duration": 15, "xp": 100},
            {"id": "059", "title": "Infinity and Paradoxes", "type": "concept", "duration": 15, "xp": 100},
            {"id": "060", "title": "Gödel's Incompleteness", "type": "concept", "duration": 15, "xp": 100},
            {"id": "061", "title": "Mathematical Beauty", "type": "reflection", "duration": 15, "xp": 100},
            {"id": "062", "title": "Unsolved Problems", "type": "concept", "duration": 15, "xp": 100},
            {"id": "063", "title": "Mathematics Mastery Quiz", "type": "quiz", "duration": 15, "xp": 120},
            {"id": "064", "title": "Your Mathematical Journey", "type": "reflection", "duration": 15, "xp": 100},
        ]
    }
]

# Physics & Engineering - 8 levels, 64 lessons
physics_levels = [
    {
        "level": 1,
        "title": "Classical Mechanics",
        "lessons": [
            {"id": "001", "title": "Introduction to Physics", "type": "intro", "duration": 12, "xp": 80},
            {"id": "002", "title": "Newton's Laws of Motion", "type": "concept", "duration": 15, "xp": 100},
            {"id": "003", "title": "Forces and Free Body Diagrams", "type": "concept", "duration": 15, "xp": 100},
            {"id": "004", "title": "Work, Energy, and Power", "type": "concept", "duration": 15, "xp": 100},
            {"id": "005", "title": "Conservation Laws", "type": "concept", "duration": 15, "xp": 100},
            {"id": "006", "title": "Momentum and Collisions", "type": "concept", "duration": 15, "xp": 100},
            {"id": "007", "title": "Mechanics Problem Solving", "type": "exercise", "duration": 20, "xp": 120},
            {"id": "008", "title": "Classical Mechanics Quiz", "type": "quiz", "duration": 10, "xp": 100},
        ]
    },
    {
        "level": 2,
        "title": "Thermodynamics",
        "lessons": [
            {"id": "009", "title": "Temperature and Heat", "type": "concept", "duration": 15, "xp": 100},
            {"id": "010", "title": "The First Law of Thermodynamics", "type": "concept", "duration": 15, "xp": 100},
            {"id": "011", "title": "The Second Law and Entropy", "type": "concept", "duration": 15, "xp": 100},
            {"id": "012", "title": "Heat Engines and Efficiency", "type": "concept", "duration": 15, "xp": 100},
            {"id": "013", "title": "Phase Transitions", "type": "concept", "duration": 15, "xp": 100},
            {"id": "014", "title": "Statistical Mechanics Basics", "type": "concept", "duration": 15, "xp": 100},
            {"id": "015", "title": "Thermodynamics Exercise", "type": "exercise", "duration": 20, "xp": 120},
            {"id": "016", "title": "Thermodynamics Quiz", "type": "quiz", "duration": 10, "xp": 100},
        ]
    },
    {
        "level": 3,
        "title": "Waves & Oscillations",
        "lessons": [
            {"id": "017", "title": "Simple Harmonic Motion", "type": "concept", "duration": 15, "xp": 100},
            {"id": "018", "title": "Wave Properties", "type": "concept", "duration": 15, "xp": 100},
            {"id": "019", "title": "Sound and Acoustics", "type": "concept", "duration": 15, "xp": 100},
            {"id": "020", "title": "Resonance and Standing Waves", "type": "concept", "duration": 15, "xp": 100},
            {"id": "021", "title": "The Doppler Effect", "type": "concept", "duration": 15, "xp": 100},
            {"id": "022", "title": "Interference and Diffraction", "type": "concept", "duration": 15, "xp": 100},
            {"id": "023", "title": "Wave Mechanics Exercise", "type": "exercise", "duration": 20, "xp": 120},
            {"id": "024", "title": "Waves Quiz", "type": "quiz", "duration": 10, "xp": 100},
        ]
    },
    {
        "level": 4,
        "title": "Electromagnetism",
        "lessons": [
            {"id": "025", "title": "Electric Charge and Fields", "type": "concept", "duration": 15, "xp": 100},
            {"id": "026", "title": "Electric Potential and Voltage", "type": "concept", "duration": 15, "xp": 100},
            {"id": "027", "title": "Electric Circuits", "type": "concept", "duration": 15, "xp": 100},
            {"id": "028", "title": "Magnetism and Magnetic Fields", "type": "concept", "duration": 15, "xp": 100},
            {"id": "029", "title": "Electromagnetic Induction", "type": "concept", "duration": 15, "xp": 100},
            {"id": "030", "title": "Maxwell's Equations", "type": "concept", "duration": 15, "xp": 100},
            {"id": "031", "title": "Electromagnetism Exercise", "type": "exercise", "duration": 20, "xp": 120},
            {"id": "032", "title": "Electromagnetism Quiz", "type": "quiz", "duration": 10, "xp": 100},
        ]
    },
    {
        "level": 5,
        "title": "Modern Physics",
        "lessons": [
            {"id": "033", "title": "Special Relativity", "type": "concept", "duration": 15, "xp": 100},
            {"id": "034", "title": "Time Dilation and Length Contraction", "type": "concept", "duration": 15, "xp": 100},
            {"id": "035", "title": "E=mc²: Mass-Energy Equivalence", "type": "concept", "duration": 15, "xp": 100},
            {"id": "036", "title": "Quantum Mechanics Basics", "type": "concept", "duration": 15, "xp": 100},
            {"id": "037", "title": "Wave-Particle Duality", "type": "concept", "duration": 15, "xp": 100},
            {"id": "038", "title": "The Uncertainty Principle", "type": "concept", "duration": 15, "xp": 100},
            {"id": "039", "title": "Modern Physics Exercise", "type": "exercise", "duration": 20, "xp": 120},
            {"id": "040", "title": "Modern Physics Quiz", "type": "quiz", "duration": 10, "xp": 100},
        ]
    },
    {
        "level": 6,
        "title": "Engineering Fundamentals",
        "lessons": [
            {"id": "041", "title": "Introduction to Engineering", "type": "concept", "duration": 15, "xp": 100},
            {"id": "042", "title": "Statics and Equilibrium", "type": "concept", "duration": 15, "xp": 100},
            {"id": "043", "title": "Dynamics and Motion", "type": "concept", "duration": 15, "xp": 100},
            {"id": "044", "title": "Materials Science", "type": "concept", "duration": 15, "xp": 100},
            {"id": "045", "title": "Stress, Strain, and Strength", "type": "concept", "duration": 15, "xp": 100},
            {"id": "046", "title": "Structural Engineering Basics", "type": "concept", "duration": 15, "xp": 100},
            {"id": "047", "title": "Engineering Design Exercise", "type": "exercise", "duration": 20, "xp": 120},
            {"id": "048", "title": "Engineering Quiz", "type": "quiz", "duration": 10, "xp": 100},
        ]
    },
    {
        "level": 7,
        "title": "Applied Engineering",
        "lessons": [
            {"id": "049", "title": "Fluid Mechanics", "type": "concept", "duration": 15, "xp": 100},
            {"id": "050", "title": "Heat Transfer", "type": "concept", "duration": 15, "xp": 100},
            {"id": "051", "title": "Control Systems", "type": "concept", "duration": 15, "xp": 100},
            {"id": "052", "title": "Mechanical Design", "type": "concept", "duration": 15, "xp": 100},
            {"id": "053", "title": "Electrical Engineering Basics", "type": "concept", "duration": 15, "xp": 100},
            {"id": "054", "title": "Systems Thinking", "type": "concept", "duration": 15, "xp": 100},
            {"id": "055", "title": "Engineering Application Exercise", "type": "exercise", "duration": 20, "xp": 120},
            {"id": "056", "title": "Applied Engineering Quiz", "type": "quiz", "duration": 10, "xp": 100},
        ]
    },
    {
        "level": 8,
        "title": "Cutting Edge Physics",
        "lessons": [
            {"id": "057", "title": "General Relativity", "type": "concept", "duration": 15, "xp": 100},
            {"id": "058", "title": "Black Holes and Spacetime", "type": "concept", "duration": 15, "xp": 100},
            {"id": "059", "title": "Quantum Field Theory", "type": "concept", "duration": 15, "xp": 100},
            {"id": "060", "title": "Particle Physics", "type": "concept", "duration": 15, "xp": 100},
            {"id": "061", "title": "Cosmology and the Universe", "type": "concept", "duration": 15, "xp": 100},
            {"id": "062", "title": "Future of Physics", "type": "reflection", "duration": 15, "xp": 100},
            {"id": "063", "title": "Physics Mastery Quiz", "type": "quiz", "duration": 15, "xp": 120},
            {"id": "064", "title": "Your Physics Journey", "type": "reflection", "duration": 15, "xp": 100},
        ]
    }
]

def generate_lesson_content(module_name, prefix, lesson_id, title, lesson_type):
    """Generate content for a lesson"""
    overview = f"Master {title.lower()} through clear explanations and practical examples."

    main_content = f"""# {title}

## Introduction

This lesson explores {title.lower()} and its significance in {module_name.lower()}.

## Key Concepts

- Fundamental principles
- Practical applications
- Real-world examples
- Problem-solving strategies

## Deep Dive

Understanding {title.lower()} requires both theoretical knowledge and practical application.

## Summary

{title} provides essential insights for mastering {module_name.lower()}."""

    key_takeaway = f"Understanding {title.lower()} is crucial for advancing in {module_name.lower()}."

    action_item = f"Practice applying {title.lower()} concepts to real-world problems."

    # Quiz for quiz-type lessons
    quiz = None
    if lesson_type == "quiz":
        quiz = {
            "question": f"What is the most important concept in {title.lower()}?",
            "options": [
                "Understanding the fundamentals",
                "Memorizing formulas",
                "Skipping the basics",
                "Avoiding practice"
            ],
            "correct": 0,
            "explanation": "Understanding fundamentals provides the foundation for all advanced topics."
        }

    return {
        "overview": overview,
        "mainContent": main_content,
        "keyTakeaway": key_takeaway,
        "actionItem": action_item if lesson_type != "quiz" else None,
        "quiz": quiz
    }

def escape_string(s):
    """Escape quotes and special characters for TypeScript"""
    if s is None:
        return None
    return s.replace("'", "\\'").replace('"', '\\"')

def generate_module_lessons(module_name, prefix, levels):
    """Generate all lessons for a module"""
    output = f"""import type {{ PathwayLesson, QuizQuestion }} from '@/types';

/**
 * {module_name} - All Lessons
 * Total: 64 lessons across 8 levels
 */

"""

    for level_data in levels:
        level_num = level_data["level"]
        output += f"export const {prefix}LessonsLevel{level_num}: PathwayLesson[] = [\n"

        for lesson in level_data["lessons"]:
            lesson_id = f"{prefix}-{lesson['id']}"
            content = generate_lesson_content(module_name, prefix, lesson_id, lesson["title"], lesson["type"])

            output += f"""  {{
    id: '{lesson_id}',
    title: '{escape_string(lesson["title"])}',
    type: '{lesson["type"]}',
    duration: {lesson["duration"]},
    xpReward: {lesson["xp"]},
    content: {{
      overview: '{escape_string(content["overview"])}',
      mainContent: `{content["mainContent"]}`,
      keyTakeaway: '{escape_string(content["keyTakeaway"])}',
"""

            if content["actionItem"]:
                output += f"      actionItem: '{escape_string(content['actionItem'])}',\n"

            if content["quiz"]:
                q = content["quiz"]
                output += f"""      quiz: {{
        question: '{escape_string(q["question"])}',
        options: [
          '{escape_string(q["options"][0])}',
          '{escape_string(q["options"][1])}',
          '{escape_string(q["options"][2])}',
          '{escape_string(q["options"][3])}'
        ],
        correct: {q["correct"]},
        explanation: '{escape_string(q["explanation"])}'
      }}
    }}
"""
            else:
                output += "    }\n"

            output += "  },\n"

        output += "];\n\n"

    return output

# Generate both modules
print("Generating Mathematics & Patterns lessons...")
math_content = generate_module_lessons("Mathematics & Patterns", "math", mathematics_levels)

with open("app/src/data/pathways/mathematics-patterns-lessons.ts", "w", encoding="utf-8") as f:
    f.write(math_content)

print("✓ Generated mathematics-patterns-lessons.ts (64 lessons)")

print("\nGenerating Physics & Engineering lessons...")
physics_content = generate_module_lessons("Physics & Engineering", "phys", physics_levels)

with open("app/src/data/pathways/physics-engineering-lessons.ts", "w", encoding="utf-8") as f:
    f.write(physics_content)

print("✓ Generated physics-engineering-lessons.ts (64 lessons)")

print("\n✅ Generated 128 lessons total!")
print("\nNext steps:")
print("1. Create pathway files (mathematics-patterns.ts, physics-engineering.ts)")
print("2. Update modules.ts to enable both modules")
print("3. Update pathways/index.ts")
print("4. Build and test")
