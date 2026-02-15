# 🎓 Polymind Module Creation Guide for AI Content Generators

## 📋 Project Context

**Polymind** (Gyanmarg) is a gamified learning platform that transforms ebooks into interactive learning pathways using spaced repetition, active recall, and interleaving techniques.

**Live App**: https://gyanmarg-963362833537.us-central1.run.app
**Tech Stack**: React 19, TypeScript (strict), Vite, Zustand, TailwindCSS
**Content Format**: Multi-level pathways with lessons, quizzes, and exercises

---

## 🎯 Your Task

Create a complete learning module for **[MODULE_NAME]** that follows Polymind's established patterns and quality standards.

---

## 📁 Project Structure Reference

```
app/src/
├── data/
│   ├── modules.ts                    # Module registry (you'll update this)
│   ├── pathways/
│   │   ├── [module-id]-lessons.ts    # YOUR LESSON CONTENT
│   │   ├── [module-id].ts            # YOUR PATHWAY STRUCTURE
│   │   └── index.ts                  # Export registry (update this)
│   └── achievements.ts
├── types/index.ts                     # TypeScript definitions
└── lib/moduleImages.ts                # Image mappings
```

---

## 📐 Content Architecture

### Module Structure
```typescript
Module = {
  id: string,                          // e.g., "emotional-intelligence"
  title: string,                       // e.g., "Emotional Intelligence"
  description: string,                 // 1-2 sentences
  category: CategoryId,                // See categories below
  icon: string,                        // emoji
  color: string,                       // tailwind class
  isAvailable: true,                   // Enable the module
  pathway: PathwayLevel[],             // 8-10 levels
}
```

### Pathway Structure
```typescript
PathwayLevel = {
  id: string,                          // "{prefix}-level{n}" e.g., "eq-level1"
  title: string,                       // e.g., "Foundation of Emotional Intelligence"
  description: string,                 // 1-2 sentences
  icon: string,                        // emoji
  color: string,                       // tailwind class (bg-{color}-500/10)
  unlockRequirement: number,           // XP: 0, 500, 1000, 1500... (500 per level)
  lessons: PathwayLesson[],            // 8 lessons per level
}
```

### Lesson Structure
```typescript
PathwayLesson = {
  id: string,                          // "{prefix}-{nnn}" e.g., "eq-001"
  title: string,                       // Clear, action-oriented
  type: LessonType,                    // 'intro' | 'concept' | 'exercise' | 'quiz' | 'reflection' | 'challenge'
  duration: number,                    // minutes (3-15)
  xpReward: number,                    // 50-150 XP
  content: {
    overview: string,                  // 2-3 sentences, hook the learner
    mainContent: string,               // Markdown, 300-800 words, EDUCATIONAL
    keyTakeaway: string,               // 1-2 sentences, memorable insight
    actionItem?: string,               // Optional, specific action (for exercise/reflection)
    quiz?: QuizQuestion,               // Required for type='quiz'
  }
}
```

### Quiz Question Structure
```typescript
QuizQuestion = {
  question: string,                    // Clear, specific question
  options: string[],                   // 4 options, all plausible
  correct: number,                     // 0-indexed (0, 1, 2, or 3)
  explanation: string,                 // 2-3 sentences explaining why correct answer is right
}
```

---

## 📚 Existing Module Examples

### Example 1: Emotional Intelligence Module
**Location**: `app/src/data/pathways/emotional-intelligence.ts`

**Pattern Used**:
- **Prefix**: `eq-` (e.g., `eq-001`, `eq-level1`)
- **Levels**: 10 levels
- **Lessons per level**: 8
- **Lesson Distribution**:
  - Level 1: 1 intro + 5 concepts + 1 quiz + 1 reflection
  - Level 2-9: 6 concepts + 1 quiz + 1 exercise/reflection
  - Level 10: 5 concepts + 1 quiz + 1 reflection + 1 challenge

**Quality Markers**:
- ✅ Clear progression from basic to advanced
- ✅ Real-world examples and scenarios
- ✅ Actionable exercises (not just theory)
- ✅ Quiz questions test understanding, not memorization

### Example 2: Bhagavad Gita Module
**Location**: `app/src/data/pathways/bhagavad-gita.ts`

**Pattern Used**:
- **Prefix**: `gita-`
- **Structure**: 8 levels following the 18 chapters
- **Approach**: Progressive revelation of philosophical concepts
- **Style**: Ancient wisdom made accessible for modern learners

---

## 🎨 Available Categories

```typescript
const CATEGORIES = {
  'mind-performance': 'Mind & Performance',
  'tech-code': 'Technology & Code',
  'wealth-power': 'Wealth & Power',
  'finance-markets': 'Finance & Markets',
  'spirit-body': 'Spirit & Body',
  'synthesis-mastery': 'Synthesis & Mastery',
  'science-universe': 'Science & Universe',
  'creative-arts': 'Creative Arts',
  'strategy-systems': 'Strategy & Systems',
  'history-culture': 'History & Culture',
  'practical-mastery': 'Practical Mastery',
  'relationships-society': 'Relationships & Society',
  'ancient-wisdom': 'Ancient Wisdom',
  'bharat-wisdom': 'Bharat Wisdom',
};
```

---

## ✍️ Writing Style Guidelines

### Content Tone
- **Conversational but authoritative** - Like a knowledgeable friend teaching
- **Active voice** - "You will learn" not "It will be learned"
- **Specific over abstract** - Concrete examples, not vague concepts
- **Story-driven** - Use narratives, case studies, scenarios
- **Action-oriented** - Focus on "what to do" not just "what to know"

### Markdown Formatting
```markdown
## Section Title

Regular paragraph with **bold** for emphasis and *italics* for subtle points.

### Subsection

- Bullet points for lists
- Keep them concise
- Each point = one idea

> Use blockquotes for important callouts or key insights

1. Numbered lists for sequential steps
2. Make each step actionable
3. Keep it practical
```

### Content Length
- **Overview**: 100-150 words (2-3 sentences)
- **Main Content**: 300-800 words
  - Intro: Hook + context (50-100 words)
  - Body: 3-5 key concepts with examples (200-600 words)
  - Summary: Reinforce learning (50-100 words)
- **Key Takeaway**: 50-100 words (1-2 sentences)
- **Action Item**: 50-100 words (specific, doable)

### Example: Good vs Bad Content

❌ **BAD** (Too abstract, theoretical):
```
Emotional intelligence is the ability to understand and manage emotions.
It involves self-awareness, self-regulation, motivation, empathy, and social skills.
Research shows EQ is important for success.
```

✅ **GOOD** (Concrete, story-driven, actionable):
```
Imagine you're in a heated meeting. Your colleague criticizes your project.
Your heart races, your jaw clenches. Do you snap back defensively, or pause
to understand their perspective?

This moment reveals your emotional intelligence (EQ) - the ability to recognize
your emotions, understand what's driving them, and choose how to respond rather
than react. Unlike IQ, which stays relatively fixed, EQ can be developed through
practice.

**Real-world impact**: Studies at Google found that the highest-performing teams
weren't those with the smartest members, but those with the highest collective EQ.
Team members who could read emotional cues, manage conflicts, and create
psychological safety outperformed technically superior teams by 30%.
```

---

## 🧪 Quiz Quality Standards

### Good Quiz Questions

✅ **DO**:
- Test understanding, not memorization
- Use realistic scenarios
- Make all options plausible (avoid obvious wrong answers)
- Explain the reasoning in the explanation

❌ **DON'T**:
- Use "all of the above" or "none of the above"
- Make answers too obvious
- Test trivial facts
- Write confusing or ambiguous questions

### Example: Good Quiz

```typescript
{
  question: "You're leading a team meeting when a usually quiet member suddenly storms out. What's the most emotionally intelligent first response?",
  options: [
    "Continue the meeting as planned - they'll come back when ready",
    "Follow them immediately to ask what's wrong",
    "Take a brief break, then check in privately after the meeting",
    "Ask the team if anyone knows what upset them"
  ],
  correct: 2,
  explanation: "Taking a brief break shows you noticed and care, while respecting their space. Checking in privately after the meeting allows them to compose themselves and avoids putting them on the spot publicly. Following immediately might overwhelm them, while continuing shows insensitivity. Asking others violates their privacy."
}
```

---

## 📦 File Creation Checklist

### Step 1: Create Lessons File
**File**: `app/src/data/pathways/[module-id]-lessons.ts`

```typescript
import type { PathwayLesson } from '@/types';

// Level 1 Lessons (8 lessons)
export const [prefix]LessonsLevel1: PathwayLesson[] = [
  {
    id: '[prefix]-001',
    title: 'Welcome to [Module Name]',
    type: 'intro',
    duration: 5,
    xpReward: 50,
    content: {
      overview: '...',
      mainContent: '...',
      keyTakeaway: '...',
    },
  },
  // ... 7 more lessons
];

// Level 2 Lessons (8 lessons)
export const [prefix]LessonsLevel2: PathwayLesson[] = [
  // ... 8 lessons
];

// ... Levels 3-8 (or 3-10 depending on module depth)
```

### Step 2: Create Pathway File
**File**: `app/src/data/pathways/[module-id].ts`

```typescript
import type { PathwayLevel } from '@/types';
import {
  [prefix]LessonsLevel1,
  [prefix]LessonsLevel2,
  // ... import all levels
} from './[module-id]-lessons';

const [moduleId]Pathway: PathwayLevel[] = [
  {
    id: '[prefix]-level1',
    title: 'Foundation',
    description: 'Build a strong foundation in [topic]',
    icon: '🌱',
    color: 'bg-emerald-500/10',
    unlockRequirement: 0,
    lessons: [prefix]LessonsLevel1,
  },
  {
    id: '[prefix]-level2',
    title: 'Core Concepts',
    description: 'Master the essential principles',
    icon: '🎯',
    color: 'bg-blue-500/10',
    unlockRequirement: 500,
    lessons: [prefix]LessonsLevel2,
  },
  // ... more levels
];

export default [moduleId]Pathway;
```

### Step 3: Update Pathway Index
**File**: `app/src/data/pathways/index.ts`

Add your export:
```typescript
export { default as [moduleId]Pathway } from './[module-id]';
```

### Step 4: Update Modules Registry
**File**: `app/src/data/modules.ts`

```typescript
import { [moduleId]Pathway } from './pathways';

// Add to modules array
{
  id: '[module-id]',
  title: '[Module Title]',
  description: '[1-2 sentence description]',
  category: '[category-id]',
  icon: '[emoji]',
  color: '[tailwind-color]',
  order: [number],
  estimatedHours: [8-10],
  isAvailable: true,
  pathway: [moduleId]Pathway,
}
```

---

## 🎯 Module Creation Template

**Use this exact prompt structure when asking an AI to create a module:**

```
Create a complete learning module for Polymind following these specifications:

**Module Topic**: [TOPIC NAME]
**Category**: [CATEGORY FROM LIST ABOVE]
**Target Audience**: [Beginner/Intermediate/Advanced]
**Learning Outcomes**: [What will students be able to do after completing this module?]

**Structure Requirements**:
- 8 levels total
- 8 lessons per level (64 lessons total)
- Each level unlocks at 500 XP intervals (0, 500, 1000, 1500, 2000, 2500, 3000, 3500)
- Lesson ID prefix: [choose 2-4 letter prefix]

**Lesson Distribution per Level**:
- Level 1: 1 intro + 5 concepts + 1 quiz + 1 reflection
- Levels 2-7: 6 concepts + 1 quiz + 1 exercise
- Level 8: 5 concepts + 1 quiz + 1 reflection + 1 challenge

**Content Guidelines**:
- Use storytelling and real-world examples
- Include specific, actionable exercises
- Quiz questions should test understanding, not memorization
- Progressive difficulty: start accessible, end challenging
- Maintain conversational but authoritative tone

**Quality Standards**:
- Main content: 300-800 words per lesson
- All quiz questions must have 4 plausible options
- Explanations must be 2-3 sentences minimum
- No typos or grammatical errors
- Consistent markdown formatting

**Output Format**:
Provide 2 TypeScript files:
1. `[module-id]-lessons.ts` - All lesson content
2. `[module-id].ts` - Pathway structure

Follow the exact TypeScript interfaces shown in the guide.
```

---

## 🔍 Quality Checklist

Before submitting content, verify:

### Content Quality
- [ ] All lessons have clear learning objectives
- [ ] Examples are specific and relatable
- [ ] No jargon without explanation
- [ ] Progressive difficulty across levels
- [ ] Action items are specific and doable
- [ ] Quizzes test understanding, not trivia

### Technical Quality
- [ ] TypeScript compiles with no errors
- [ ] All IDs follow naming convention (`[prefix]-[nnn]` for lessons, `[prefix]-level[n]` for levels)
- [ ] XP progression is correct (0, 500, 1000, 1500...)
- [ ] Lesson types are distributed appropriately
- [ ] All required fields are present
- [ ] No escaped apostrophes in strings (use proper quoting)

### Formatting Quality
- [ ] Markdown is properly formatted
- [ ] No lines exceed 120 characters
- [ ] Consistent indentation (2 spaces)
- [ ] No trailing whitespace
- [ ] Proper use of bold, italics, lists

---

## 📊 Example Module Request

Here's how you'd request a specific module:

```
Create a complete learning module for Polymind following these specifications:

**Module Topic**: Stoic Philosophy
**Category**: ancient-wisdom
**Target Audience**: Beginners to philosophy, practical application focus
**Learning Outcomes**:
- Understand core Stoic principles (dichotomy of control, virtue, logic)
- Apply Stoic practices to modern challenges (stress, setbacks, relationships)
- Develop emotional resilience and rational decision-making

**Structure Requirements**:
- 8 levels total
- 8 lessons per level (64 lessons total)
- Lesson ID prefix: `stoic-`
- Level progression: 0, 500, 1000, 1500, 2000, 2500, 3000, 3500 XP

**Level Themes**:
1. Foundation - Core principles from Marcus Aurelius, Seneca, Epictetus
2. Dichotomy of Control - What we can/cannot control
3. The Four Virtues - Wisdom, Justice, Courage, Temperance
4. Negative Visualization - Premeditatio malorum practice
5. Memento Mori - Death awareness and urgency
6. Emotional Resilience - Handling adversity like a Stoic
7. Practical Ethics - Stoic decision-making in daily life
8. Living Philosophy - Integration and mastery

**Lesson Distribution per Level**:
- Level 1: 1 intro + 5 concepts + 1 quiz + 1 reflection
- Levels 2-7: 6 concepts + 1 quiz + 1 exercise
- Level 8: 5 concepts + 1 quiz + 1 reflection + 1 challenge

**Content Guidelines**:
- Use Marcus Aurelius, Seneca, Epictetus quotes sparingly (1-2 per lesson max)
- Focus on modern applications: work stress, social media, relationships
- Include "Stoic Exercise" sections with specific practices
- Avoid academic philosophy jargon
- Make ancient wisdom accessible for 2026 context

**Quality Standards**:
- Main content: 400-700 words per lesson
- Real-world scenarios in every concept lesson
- Quiz explanations reference Stoic principles
- Action items are daily practices (journaling, reflection exercises)

**Output Format**:
1. `stoic-philosophy-lessons.ts` - All lesson content
2. `stoic-philosophy.ts` - Pathway structure
```

---

## 🚀 Testing Your Generated Content

After generation, verify:

1. **TypeScript Compilation**
```bash
cd app && npm run build
```

2. **No Syntax Errors**
```bash
python app/scripts/fix-apostrophes.py
```

3. **Manual Review**
- Read 3-5 random lessons
- Take 1-2 quizzes
- Check if content flows logically

4. **Content Quality Spot Check**
- Are examples specific or generic?
- Do quizzes test understanding?
- Is the tone engaging?

---

## 📝 Final Notes

**Key Success Factors**:
1. **Follow the structure exactly** - Don't deviate from TypeScript interfaces
2. **Quality over quantity** - 8 great levels > 10 mediocre ones
3. **Tell stories** - People remember narratives, not bullet points
4. **Test understanding** - Quizzes should make learners think
5. **Be actionable** - Every lesson should have a "so what?" moment

**Common Pitfalls to Avoid**:
- ❌ Too academic/theoretical
- ❌ Obvious quiz answers
- ❌ Vague action items ("think about X")
- ❌ Inconsistent difficulty progression
- ❌ Missing examples or context

---

**Ready to generate content?** Use the template above and create something amazing! 🎓
