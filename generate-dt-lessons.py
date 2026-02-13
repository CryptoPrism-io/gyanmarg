#!/usr/bin/env python3
"""Generate Design Thinking lessons for levels 3-8 using Gemini AI"""

import os
from pathlib import Path

try:
    from google import genai
    from google.genai import types
except ImportError:
    print("ERROR: google-genai not installed (new SDK)")
    print("Install with: pip install google-genai")
    print("Note: This replaces the old 'google-generativeai' package")
    exit(1)

# Load .env if available
try:
    from dotenv import load_dotenv
    env_path = Path(__file__).parent / 'app' / '.env'
    if env_path.exists():
        load_dotenv(env_path)
except ImportError:
    pass

# Configure Gemini API (new SDK)
API_KEY = os.getenv('GEMINI_API_KEY')
if not API_KEY:
    print("❌ Error: GEMINI_API_KEY environment variable not set")
    print("   Get your API key from: https://aistudio.google.com/apikey")
    print("   Then set it: export GEMINI_API_KEY='your-key-here'")
    exit(1)

# Use new SDK client + gemini-2.0-flash (cheaper & faster than 1.5-flash)
client = genai.Client(api_key=API_KEY)
MODEL_NAME = 'gemini-2.0-flash'

# Level structures
LEVELS = {
    3: {
        'title': 'Define Problems',
        'description': 'Problem framing, POV statements, HMW questions',
        'lessons': [
            {'id': 'dt-017', 'title': 'The Art of Problem Framing', 'type': 'intro'},
            {'id': 'dt-018', 'title': 'Point of View Statements', 'type': 'concept'},
            {'id': 'dt-019', 'title': 'How Might We Questions', 'type': 'concept'},
            {'id': 'dt-020', 'title': 'Reframing Techniques', 'type': 'concept'},
            {'id': 'dt-021', 'title': 'Problem vs Solution Space', 'type': 'concept'},
            {'id': 'dt-022', 'title': 'Problem Definition Quiz', 'type': 'quiz'},
            {'id': 'dt-023', 'title': 'Problem Framing Exercise', 'type': 'exercise'},
            {'id': 'dt-024', 'title': 'Level 3 Reflection', 'type': 'reflection'},
        ]
    },
    4: {
        'title': 'Ideation',
        'description': 'Brainstorming, creative techniques, divergent thinking',
        'lessons': [
            {'id': 'dt-025', 'title': 'Introduction to Ideation', 'type': 'intro'},
            {'id': 'dt-026', 'title': 'Brainstorming Rules & Techniques', 'type': 'concept'},
            {'id': 'dt-027', 'title': 'SCAMPER Method', 'type': 'concept'},
            {'id': 'dt-028', 'title': 'Mind Mapping & Forced Connections', 'type': 'concept'},
            {'id': 'dt-029', 'title': 'Overcoming Creative Blocks', 'type': 'concept'},
            {'id': 'dt-030', 'title': 'Ideation Quiz', 'type': 'quiz'},
            {'id': 'dt-031', 'title': 'Ideation Workshop', 'type': 'exercise'},
            {'id': 'dt-032', 'title': 'Level 4 Reflection', 'type': 'reflection'},
        ]
    },
    5: {
        'title': 'Prototyping',
        'description': 'Low-fi to hi-fi prototypes, rapid iteration',
        'lessons': [
            {'id': 'dt-033', 'title': 'Why Prototype?', 'type': 'intro'},
            {'id': 'dt-034', 'title': 'Low-Fidelity Prototypes', 'type': 'concept'},
            {'id': 'dt-035', 'title': 'Paper Prototyping', 'type': 'concept'},
            {'id': 'dt-036', 'title': 'Digital Prototyping Tools', 'type': 'concept'},
            {'id': 'dt-037', 'title': 'Prototyping Principles', 'type': 'concept'},
            {'id': 'dt-038', 'title': 'Prototyping Quiz', 'type': 'quiz'},
            {'id': 'dt-039', 'title': 'Build Your First Prototype', 'type': 'exercise'},
            {'id': 'dt-040', 'title': 'Level 5 Reflection', 'type': 'reflection'},
        ]
    },
    6: {
        'title': 'Testing & Iteration',
        'description': 'User testing, feedback loops, pivoting',
        'lessons': [
            {'id': 'dt-041', 'title': 'The Testing Mindset', 'type': 'intro'},
            {'id': 'dt-042', 'title': 'Usability Testing Methods', 'type': 'concept'},
            {'id': 'dt-043', 'title': 'Running User Tests', 'type': 'concept'},
            {'id': 'dt-044', 'title': 'Analyzing Test Results', 'type': 'concept'},
            {'id': 'dt-045', 'title': 'Iteration Strategies', 'type': 'concept'},
            {'id': 'dt-046', 'title': 'Testing Quiz', 'type': 'quiz'},
            {'id': 'dt-047', 'title': 'Test Your Prototype', 'type': 'exercise'},
            {'id': 'dt-048', 'title': 'Level 6 Reflection', 'type': 'reflection'},
        ]
    },
    7: {
        'title': 'Advanced Methods',
        'description': 'Design sprints, service design, systems thinking',
        'lessons': [
            {'id': 'dt-049', 'title': 'Introduction to Design Sprints', 'type': 'intro'},
            {'id': 'dt-050', 'title': 'The 5-Day Sprint Process', 'type': 'concept'},
            {'id': 'dt-051', 'title': 'Service Design Blueprints', 'type': 'concept'},
            {'id': 'dt-052', 'title': 'Systems Thinking in Design', 'type': 'concept'},
            {'id': 'dt-053', 'title': 'Co-Creation Workshops', 'type': 'concept'},
            {'id': 'dt-054', 'title': 'Advanced Methods Quiz', 'type': 'quiz'},
            {'id': 'dt-055', 'title': 'Plan a Mini Design Sprint', 'type': 'exercise'},
            {'id': 'dt-056', 'title': 'Level 7 Reflection', 'type': 'reflection'},
        ]
    },
    8: {
        'title': 'Mastery',
        'description': 'Design leadership, building culture, portfolio',
        'lessons': [
            {'id': 'dt-057', 'title': 'Design Leadership', 'type': 'intro'},
            {'id': 'dt-058', 'title': 'Building Design Culture', 'type': 'concept'},
            {'id': 'dt-059', 'title': 'Communicating Design Decisions', 'type': 'concept'},
            {'id': 'dt-060', 'title': 'Design Thinking in Organizations', 'type': 'concept'},
            {'id': 'dt-061', 'title': 'Your Design Portfolio', 'type': 'concept'},
            {'id': 'dt-062', 'title': 'Mastery Quiz', 'type': 'quiz'},
            {'id': 'dt-063', 'title': 'Your Design Thinking Manifesto', 'type': 'exercise'},
            {'id': 'dt-064', 'title': 'Final Reflection', 'type': 'reflection'},
        ]
    }
}

LESSON_PROMPT_TEMPLATE = """You are creating a lesson for a Design Thinking course based on books: "The Design of Everyday Things", "Sprint", and "Creative Confidence".

Level: {level_num} - {level_title}
Level Description: {level_desc}

Lesson: {lesson_id} - {lesson_title}
Type: {lesson_type}

Create the lesson content following this structure:

For INTRO lessons (8-10 min, 75 XP):
- overview: 1-2 sentence preview
- mainContent: 800-1000 words with markdown formatting. Include:
  * Welcome and context
  * Why this level matters
  * What you'll learn
  * Connection to design thinking process
- keyTakeaway: One clear sentence
- actionItem: Practical, specific, achievable task

For CONCEPT lessons (10-15 min, 75-100 XP):
- overview: 1-2 sentence preview
- mainContent: 1000-1500 words with:
  * Clear definition and explanation
  * Real-world examples
  * Step-by-step breakdown
  * Common mistakes to avoid
  * Practical tips
- keyTakeaway: One clear sentence
- actionItem: Specific practice exercise

For QUIZ lessons (5 min, 50 XP):
- overview: What the quiz tests
- mainContent: (leave empty)
- keyTakeaway: (leave empty)
- quiz: Object with:
  * question: Scenario-based question testing understanding
  * options: Array of 4 options
  * correct: Index (0-3) of correct answer
  * explanation: Why that answer is correct (2-3 sentences)

For EXERCISE lessons (15-30 min, 100-150 XP):
- overview: What they'll practice
- mainContent: 1200-1800 words with:
  * The challenge description
  * Step-by-step instructions
  * What to deliver
  * Reflection questions
- keyTakeaway: What they'll learn by doing
- actionItem: Complete the exercise with deadline

For REFLECTION lessons (6-8 min, 50 XP):
- overview: What to reflect on
- mainContent: 600-800 words with:
  * What was covered in this level
  * Reflection prompts (3-5 questions)
  * Connection to next level
  * Integration exercise
- keyTakeaway: Key insight from this level
- actionItem: Integration practice for next week

IMPORTANT RULES:
1. Use markdown formatting with ## headers, **bold**, lists
2. Be practical and actionable, not theoretical
3. Include real examples from everyday life
4. Match the tone and quality of the provided sample lessons
5. For quiz questions, create scenario-based problems that test application, not memorization
6. Escape single quotes in text (use \' instead of ')
7. Keep content engaging and conversational
8. Reference the books when relevant

Output ONLY valid TypeScript object in this exact format:
{{
  id: '{lesson_id}',
  title: '{lesson_title}',
  type: '{lesson_type}',
  duration: {duration},
  xpReward: {xp},
  content: {{
    overview: 'text',
    mainContent: `text with markdown`,
    keyTakeaway: 'text',
    actionItem: 'text',
    quiz: {{ question: '', options: [], correct: 0, explanation: '' }} // only for quiz type
  }}
}}

Do not include any explanation, just the TypeScript object.
"""

def generate_lesson(level_num, level_data, lesson_data):
    """Generate a single lesson using Gemini"""

    # Determine duration and XP based on type
    durations = {'intro': 10, 'concept': 12, 'quiz': 5, 'exercise': 20, 'reflection': 6}
    xp_rewards = {'intro': 75, 'concept': 85, 'quiz': 50, 'exercise': 120, 'reflection': 50}

    duration = durations.get(lesson_data['type'], 10)
    xp = xp_rewards.get(lesson_data['type'], 75)

    prompt = LESSON_PROMPT_TEMPLATE.format(
        level_num=level_num,
        level_title=level_data['title'],
        level_desc=level_data['description'],
        lesson_id=lesson_data['id'],
        lesson_title=lesson_data['title'],
        lesson_type=lesson_data['type'],
        duration=duration,
        xp=xp
    )

    print(f"  Generating {lesson_data['id']}: {lesson_data['title']}...", end=' ')

    try:
        response = client.models.generate_content(
            model=MODEL_NAME,
            contents=[prompt],
        )
        content = response.text.strip()

        # Clean up the response
        if content.startswith('```typescript'):
            content = content[13:]
        if content.startswith('```'):
            content = content[3:]
        if content.endswith('```'):
            content = content[:-3]
        content = content.strip()

        # Add comma at the end
        if not content.endswith(','):
            content += ','

        print("✓")
        return content

    except Exception as e:
        print(f"✗ Error: {e}")
        return None

def generate_all_levels():
    """Generate all remaining levels (3-8)"""

    output_lines = []

    for level_num in [3, 4, 5, 6, 7, 8]:
        level_data = LEVELS[level_num]
        print(f"\n📝 Level {level_num}: {level_data['title']}")
        print("="*60)

        level_var_name = f"dtLessonsLevel{level_num}"
        output_lines.append(f"\n// Level {level_num}: {level_data['title']}")
        output_lines.append(f"export const {level_var_name}: PathwayLesson[] = [")

        for lesson_data in level_data['lessons']:
            lesson_content = generate_lesson(level_num, level_data, lesson_data)
            if lesson_content:
                output_lines.append(f"  {lesson_content}")
            else:
                print(f"  ⚠️  Failed to generate {lesson_data['id']}, using placeholder")
                output_lines.append(f"  // TODO: Generate {lesson_data['id']}")

        output_lines.append("];")

    return '\n'.join(output_lines)

def main():
    print("🤖 Design Thinking Lesson Generator")
    print("="*60)
    print(f"Generating 48 lessons for levels 3-8...")
    print(f"Using model: {MODEL_NAME}")
    print()

    # Generate lessons
    generated_content = generate_all_levels()

    # Read existing file
    lessons_file = Path('app/src/data/pathways/design-thinking-lessons.ts')
    with open(lessons_file, 'r', encoding='utf-8') as f:
        existing_content = f.read()

    # Find where to insert new content (after Level 2)
    # Remove placeholder exports for levels 3-8
    lines = existing_content.split('\n')
    new_lines = []
    skip_placeholders = False

    for line in lines:
        if 'Placeholder for remaining levels' in line:
            skip_placeholders = True
            continue
        if skip_placeholders and line.startswith('export const dtLessonsLevel'):
            continue
        new_lines.append(line)

    # Add generated content
    updated_content = '\n'.join(new_lines).rstrip() + '\n' + generated_content + '\n'

    # Write back
    with open(lessons_file, 'w', encoding='utf-8') as f:
        f.write(updated_content)

    print("\n" + "="*60)
    print("✅ Done! Generated 48 lessons for levels 3-8")
    print(f"📄 Updated: {lessons_file}")
    print("\n⚠️  Review the generated content and:")
    print("   - Check for escaped quotes")
    print("   - Verify markdown formatting")
    print("   - Test quiz questions make sense")
    print("   - Adjust any content that seems off")

if __name__ == '__main__':
    main()
