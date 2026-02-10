#!/usr/bin/env python3
"""
Generate Startups & Innovation + Relationships & Social modules
Total: 128 lessons (64 each)
"""

# Startups & Innovation - 8 levels, 64 lessons
startup_levels = [
    {
        "level": 1,
        "title": "Startup Mindset",
        "lessons": [
            {"id": "001", "title": "The Entrepreneurial Mindset", "type": "intro", "duration": 12, "xp": 80},
            {"id": "002", "title": "Why Startups Fail (and Succeed)", "type": "concept", "duration": 15, "xp": 100},
            {"id": "003", "title": "First Principles Thinking", "type": "concept", "duration": 15, "xp": 100},
            {"id": "004", "title": "Embracing Uncertainty", "type": "concept", "duration": 15, "xp": 100},
            {"id": "005", "title": "Building in Public", "type": "concept", "duration": 15, "xp": 100},
            {"id": "006", "title": "The Power of Naive Optimism", "type": "concept", "duration": 15, "xp": 100},
            {"id": "007", "title": "Founder Psychology Exercise", "type": "exercise", "duration": 20, "xp": 120},
            {"id": "008", "title": "Startup Mindset Quiz", "type": "quiz", "duration": 10, "xp": 100},
        ]
    },
    {
        "level": 2,
        "title": "Ideation & Validation",
        "lessons": [
            {"id": "009", "title": "Finding Problems Worth Solving", "type": "concept", "duration": 15, "xp": 100},
            {"id": "010", "title": "Customer Discovery Interviews", "type": "concept", "duration": 15, "xp": 100},
            {"id": "011", "title": "Jobs to Be Done Framework", "type": "concept", "duration": 15, "xp": 100},
            {"id": "012", "title": "Validating Your Idea", "type": "concept", "duration": 15, "xp": 100},
            {"id": "013", "title": "The Mom Test", "type": "concept", "duration": 15, "xp": 100},
            {"id": "014", "title": "Market Sizing and TAM", "type": "concept", "duration": 15, "xp": 100},
            {"id": "015", "title": "Customer Interview Exercise", "type": "exercise", "duration": 20, "xp": 120},
            {"id": "016", "title": "Validation Quiz", "type": "quiz", "duration": 10, "xp": 100},
        ]
    },
    {
        "level": 3,
        "title": "Lean Methodology",
        "lessons": [
            {"id": "017", "title": "The Lean Startup Principles", "type": "concept", "duration": 15, "xp": 100},
            {"id": "018", "title": "Build-Measure-Learn Loop", "type": "concept", "duration": 15, "xp": 100},
            {"id": "019", "title": "Minimum Viable Product", "type": "concept", "duration": 15, "xp": 100},
            {"id": "020", "title": "Rapid Prototyping", "type": "concept", "duration": 15, "xp": 100},
            {"id": "021", "title": "Validated Learning", "type": "concept", "duration": 15, "xp": 100},
            {"id": "022", "title": "Pivoting vs Persevering", "type": "concept", "duration": 15, "xp": 100},
            {"id": "023", "title": "MVP Design Exercise", "type": "exercise", "duration": 20, "xp": 120},
            {"id": "024", "title": "Lean Methodology Quiz", "type": "quiz", "duration": 10, "xp": 100},
        ]
    },
    {
        "level": 4,
        "title": "Product-Market Fit",
        "lessons": [
            {"id": "025", "title": "What is Product-Market Fit?", "type": "concept", "duration": 15, "xp": 100},
            {"id": "026", "title": "Measuring PMF: The Sean Ellis Test", "type": "concept", "duration": 15, "xp": 100},
            {"id": "027", "title": "Key Metrics That Matter", "type": "concept", "duration": 15, "xp": 100},
            {"id": "028", "title": "Retention and Engagement", "type": "concept", "duration": 15, "xp": 100},
            {"id": "029", "title": "The Pivot Decision", "type": "concept", "duration": 15, "xp": 100},
            {"id": "030", "title": "Finding Your North Star Metric", "type": "concept", "duration": 15, "xp": 100},
            {"id": "031", "title": "PMF Metrics Exercise", "type": "exercise", "duration": 20, "xp": 120},
            {"id": "032", "title": "Product-Market Fit Quiz", "type": "quiz", "duration": 10, "xp": 100},
        ]
    },
    {
        "level": 5,
        "title": "Building Teams & Culture",
        "lessons": [
            {"id": "033", "title": "Hiring Your First Employees", "type": "concept", "duration": 15, "xp": 100},
            {"id": "034", "title": "Building Startup Culture", "type": "concept", "duration": 15, "xp": 100},
            {"id": "035", "title": "Equity and Compensation", "type": "concept", "duration": 15, "xp": 100},
            {"id": "036", "title": "Remote vs In-Person Teams", "type": "concept", "duration": 15, "xp": 100},
            {"id": "037", "title": "The Founding Team Dynamic", "type": "concept", "duration": 15, "xp": 100},
            {"id": "038", "title": "Managing Startup Operations", "type": "concept", "duration": 15, "xp": 100},
            {"id": "039", "title": "Team Building Exercise", "type": "exercise", "duration": 20, "xp": 120},
            {"id": "040", "title": "Team & Culture Quiz", "type": "quiz", "duration": 10, "xp": 100},
        ]
    },
    {
        "level": 6,
        "title": "Fundraising",
        "lessons": [
            {"id": "041", "title": "Fundraising Fundamentals", "type": "concept", "duration": 15, "xp": 100},
            {"id": "042", "title": "Understanding Cap Tables", "type": "concept", "duration": 15, "xp": 100},
            {"id": "043", "title": "Crafting Your Pitch Deck", "type": "concept", "duration": 15, "xp": 100},
            {"id": "044", "title": "Angel Investors vs VCs", "type": "concept", "duration": 15, "xp": 100},
            {"id": "045", "title": "Due Diligence Process", "type": "concept", "duration": 15, "xp": 100},
            {"id": "046", "title": "Term Sheets and Negotiations", "type": "concept", "duration": 15, "xp": 100},
            {"id": "047", "title": "Pitch Deck Exercise", "type": "exercise", "duration": 20, "xp": 120},
            {"id": "048", "title": "Fundraising Quiz", "type": "quiz", "duration": 10, "xp": 100},
        ]
    },
    {
        "level": 7,
        "title": "Growth & Scaling",
        "lessons": [
            {"id": "049", "title": "Growth Hacking Fundamentals", "type": "concept", "duration": 15, "xp": 100},
            {"id": "050", "title": "Viral Loops and Network Effects", "type": "concept", "duration": 15, "xp": 100},
            {"id": "051", "title": "Distribution Channels", "type": "concept", "duration": 15, "xp": 100},
            {"id": "052", "title": "Customer Acquisition Cost", "type": "concept", "duration": 15, "xp": 100},
            {"id": "053", "title": "Scaling Systems and Processes", "type": "concept", "duration": 15, "xp": 100},
            {"id": "054", "title": "Managing Hypergrowth", "type": "concept", "duration": 15, "xp": 100},
            {"id": "055", "title": "Growth Strategy Exercise", "type": "exercise", "duration": 20, "xp": 120},
            {"id": "056", "title": "Growth & Scaling Quiz", "type": "quiz", "duration": 10, "xp": 100},
        ]
    },
    {
        "level": 8,
        "title": "Leadership & Exit",
        "lessons": [
            {"id": "057", "title": "Leadership at Scale", "type": "concept", "duration": 15, "xp": 100},
            {"id": "058", "title": "CEO Responsibilities", "type": "concept", "duration": 15, "xp": 100},
            {"id": "059", "title": "IPO vs Acquisition", "type": "concept", "duration": 15, "xp": 100},
            {"id": "060", "title": "Building for the Long Term", "type": "concept", "duration": 15, "xp": 100},
            {"id": "061", "title": "Your Startup Legacy", "type": "reflection", "duration": 15, "xp": 100},
            {"id": "062", "title": "Lessons from Failed Startups", "type": "concept", "duration": 15, "xp": 100},
            {"id": "063", "title": "Startup Mastery Quiz", "type": "quiz", "duration": 15, "xp": 120},
            {"id": "064", "title": "Your Entrepreneurial Journey", "type": "reflection", "duration": 15, "xp": 100},
        ]
    }
]

# Relationships & Social - 8 levels, 64 lessons
relationships_levels = [
    {
        "level": 1,
        "title": "Connection Foundations",
        "lessons": [
            {"id": "001", "title": "The Psychology of Human Connection", "type": "intro", "duration": 12, "xp": 80},
            {"id": "002", "title": "Why Relationships Matter", "type": "concept", "duration": 15, "xp": 100},
            {"id": "003", "title": "The Loneliness Epidemic", "type": "concept", "duration": 15, "xp": 100},
            {"id": "004", "title": "Social Needs and Belonging", "type": "concept", "duration": 15, "xp": 100},
            {"id": "005", "title": "Quality vs Quantity of Relationships", "type": "concept", "duration": 15, "xp": 100},
            {"id": "006", "title": "Vulnerability and Authenticity", "type": "concept", "duration": 15, "xp": 100},
            {"id": "007", "title": "Connection Self-Assessment", "type": "exercise", "duration": 20, "xp": 120},
            {"id": "008", "title": "Connection Foundations Quiz", "type": "quiz", "duration": 10, "xp": 100},
        ]
    },
    {
        "level": 2,
        "title": "Attachment Theory",
        "lessons": [
            {"id": "009", "title": "Understanding Attachment Styles", "type": "concept", "duration": 15, "xp": 100},
            {"id": "010", "title": "Secure Attachment", "type": "concept", "duration": 15, "xp": 100},
            {"id": "011", "title": "Anxious Attachment", "type": "concept", "duration": 15, "xp": 100},
            {"id": "012", "title": "Avoidant Attachment", "type": "concept", "duration": 15, "xp": 100},
            {"id": "013", "title": "Disorganized Attachment", "type": "concept", "duration": 15, "xp": 100},
            {"id": "014", "title": "Healing Insecure Attachment", "type": "concept", "duration": 15, "xp": 100},
            {"id": "015", "title": "Attachment Style Exercise", "type": "exercise", "duration": 20, "xp": 120},
            {"id": "016", "title": "Attachment Theory Quiz", "type": "quiz", "duration": 10, "xp": 100},
        ]
    },
    {
        "level": 3,
        "title": "Communication Mastery",
        "lessons": [
            {"id": "017", "title": "The Art of Active Listening", "type": "concept", "duration": 15, "xp": 100},
            {"id": "018", "title": "Nonviolent Communication", "type": "concept", "duration": 15, "xp": 100},
            {"id": "019", "title": "Speaking Your Truth", "type": "concept", "duration": 15, "xp": 100},
            {"id": "020", "title": "Understanding Body Language", "type": "concept", "duration": 15, "xp": 100},
            {"id": "021", "title": "Difficult Conversations", "type": "concept", "duration": 15, "xp": 100},
            {"id": "022", "title": "The Power of Questions", "type": "concept", "duration": 15, "xp": 100},
            {"id": "023", "title": "Communication Practice", "type": "exercise", "duration": 20, "xp": 120},
            {"id": "024", "title": "Communication Quiz", "type": "quiz", "duration": 10, "xp": 100},
        ]
    },
    {
        "level": 4,
        "title": "Emotional Intelligence in Relationships",
        "lessons": [
            {"id": "025", "title": "EQ in Relationships", "type": "concept", "duration": 15, "xp": 100},
            {"id": "026", "title": "Emotional Regulation with Others", "type": "concept", "duration": 15, "xp": 100},
            {"id": "027", "title": "Empathy and Perspective-Taking", "type": "concept", "duration": 15, "xp": 100},
            {"id": "028", "title": "Validating Others Emotions", "type": "concept", "duration": 15, "xp": 100},
            {"id": "029", "title": "Managing Emotional Triggers", "type": "concept", "duration": 15, "xp": 100},
            {"id": "030", "title": "Co-Regulation", "type": "concept", "duration": 15, "xp": 100},
            {"id": "031", "title": "EQ Practice Exercise", "type": "exercise", "duration": 20, "xp": 120},
            {"id": "032", "title": "Emotional Intelligence Quiz", "type": "quiz", "duration": 10, "xp": 100},
        ]
    },
    {
        "level": 5,
        "title": "Conflict & Repair",
        "lessons": [
            {"id": "033", "title": "Healthy Conflict", "type": "concept", "duration": 15, "xp": 100},
            {"id": "034", "title": "The Four Horsemen of Relationships", "type": "concept", "duration": 15, "xp": 100},
            {"id": "035", "title": "Repair Attempts", "type": "concept", "duration": 15, "xp": 100},
            {"id": "036", "title": "Apologies That Work", "type": "concept", "duration": 15, "xp": 100},
            {"id": "037", "title": "Boundaries in Relationships", "type": "concept", "duration": 15, "xp": 100},
            {"id": "038", "title": "Forgiveness and Letting Go", "type": "concept", "duration": 15, "xp": 100},
            {"id": "039", "title": "Conflict Resolution Exercise", "type": "exercise", "duration": 20, "xp": 120},
            {"id": "040", "title": "Conflict & Repair Quiz", "type": "quiz", "duration": 10, "xp": 100},
        ]
    },
    {
        "level": 6,
        "title": "Friendships",
        "lessons": [
            {"id": "041", "title": "The Science of Friendship", "type": "concept", "duration": 15, "xp": 100},
            {"id": "042", "title": "Making Friends as Adults", "type": "concept", "duration": 15, "xp": 100},
            {"id": "043", "title": "Maintaining Friendships", "type": "concept", "duration": 15, "xp": 100},
            {"id": "044", "title": "Friend Circles and Social Ecosystems", "type": "concept", "duration": 15, "xp": 100},
            {"id": "045", "title": "Toxic Friendships", "type": "concept", "duration": 15, "xp": 100},
            {"id": "046", "title": "Long-Distance Friendships", "type": "concept", "duration": 15, "xp": 100},
            {"id": "047", "title": "Friendship Audit Exercise", "type": "exercise", "duration": 20, "xp": 120},
            {"id": "048", "title": "Friendships Quiz", "type": "quiz", "duration": 10, "xp": 100},
        ]
    },
    {
        "level": 7,
        "title": "Romantic Relationships",
        "lessons": [
            {"id": "049", "title": "The Science of Attraction", "type": "concept", "duration": 15, "xp": 100},
            {"id": "050", "title": "Dating with Intention", "type": "concept", "duration": 15, "xp": 100},
            {"id": "051", "title": "Building Emotional Intimacy", "type": "concept", "duration": 15, "xp": 100},
            {"id": "052", "title": "Love Languages", "type": "concept", "duration": 15, "xp": 100},
            {"id": "053", "title": "Maintaining Long-Term Relationships", "type": "concept", "duration": 15, "xp": 100},
            {"id": "054", "title": "When to Stay, When to Go", "type": "concept", "duration": 15, "xp": 100},
            {"id": "055", "title": "Relationship Vision Exercise", "type": "exercise", "duration": 20, "xp": 120},
            {"id": "056", "title": "Romantic Relationships Quiz", "type": "quiz", "duration": 10, "xp": 100},
        ]
    },
    {
        "level": 8,
        "title": "Social Mastery",
        "lessons": [
            {"id": "057", "title": "Social Dynamics and Status", "type": "concept", "duration": 15, "xp": 100},
            {"id": "058", "title": "Charisma and Presence", "type": "concept", "duration": 15, "xp": 100},
            {"id": "059", "title": "Influence and Persuasion", "type": "concept", "duration": 15, "xp": 100},
            {"id": "060", "title": "Reading Social Cues", "type": "concept", "duration": 15, "xp": 100},
            {"id": "061", "title": "Building Your Social Capital", "type": "concept", "duration": 15, "xp": 100},
            {"id": "062", "title": "Giving and Receiving Support", "type": "reflection", "duration": 15, "xp": 100},
            {"id": "063", "title": "Social Mastery Quiz", "type": "quiz", "duration": 15, "xp": 120},
            {"id": "064", "title": "Your Relationship Journey", "type": "reflection", "duration": 15, "xp": 100},
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
- Action steps

## Deep Dive

Understanding {title.lower()} requires both knowledge and practice.

## Summary

{title} provides essential insights for mastering {module_name.lower()}."""

    key_takeaway = f"Understanding {title.lower()} is crucial for success in {module_name.lower()}."

    action_item = f"Apply {title.lower()} concepts to your real-world situation."

    # Quiz for quiz-type lessons
    quiz = None
    if lesson_type == "quiz":
        quiz = {
            "question": f"What is the most important concept in {title.lower()}?",
            "options": [
                "Understanding the fundamentals",
                "Memorizing facts",
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
        "actionItem": action_item if lesson_type not in ["quiz", "reflection"] else None,
        "quiz": quiz
    }

def escape_string(s):
    """Escape quotes and special characters for TypeScript"""
    if s is None:
        return None
    return s.replace("'", "\\'").replace('"', '\\"')

def generate_module_lessons(module_name, prefix, levels):
    """Generate all lessons for a module"""
    output = f"""import type {{ PathwayLesson }} from '@/types';

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
print("Generating Startups & Innovation lessons...")
startup_content = generate_module_lessons("Startups & Innovation", "startup", startup_levels)

with open("app/src/data/pathways/startups-innovation-lessons.ts", "w", encoding="utf-8") as f:
    f.write(startup_content)

print("✓ Generated startups-innovation-lessons.ts (64 lessons)")

print("\nGenerating Relationships & Social lessons...")
relationships_content = generate_module_lessons("Relationships & Social", "rel", relationships_levels)

with open("app/src/data/pathways/relationships-social-lessons.ts", "w", encoding="utf-8") as f:
    f.write(relationships_content)

print("✓ Generated relationships-social-lessons.ts (64 lessons)")

print("\n✅ Generated 128 lessons total!")
print("\nNext steps:")
print("1. Create pathway files (startups-innovation.ts, relationships-social.ts)")
print("2. Update modules.ts to enable both modules")
print("3. Update pathways/index.ts")
print("4. Build and test")
