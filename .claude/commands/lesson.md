# Create Lesson

Create a new lesson for a learning pathway module.

## Arguments
$ARGUMENTS - Module name and lesson topic (e.g., "personal-development habit stacking")

## Instructions

Parse the arguments to extract:
1. **Module name** (kebab-case matching pathway file name)
2. **Lesson topic**

### Pathway File Location
`app/src/data/pathways/{module-name}.ts`

### Lesson Structure
```typescript
{
  id: '{module}-lesson-{number}',
  title: 'Lesson Title',
  type: 'intro' | 'concept' | 'challenge',
  duration: 15,  // minutes (typically 10-20)
  xp: 75,        // XP reward (50-100)
  content: `
    ## Overview
    [Introduction to the concept]

    ## Key Concepts
    [Main teaching content with examples]

    ## Why This Matters
    [Connect to real-world application]

    ## In Practice
    [Practical examples and scenarios]
  `,
  keyTakeaways: [
    'First key insight',
    'Second key insight',
    'Third key insight'
  ],
  actionItems: [
    'Specific action to take today',
    'Practice exercise',
    'Reflection prompt'
  ],
  quiz: [
    {
      question: 'Quiz question text?',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswer: 0,  // index of correct option
      explanation: 'Why this answer is correct'
    }
  ]
}
```

### Lesson Types
- **intro**: Overview/introduction lessons (first lesson of a section)
- **concept**: Core teaching content with theory and examples
- **challenge**: Application-focused with exercises and scenarios

### Guidelines
- Write engaging, conversational content
- Include real-world examples from the source books
- Add 2-3 quiz questions per lesson
- Keep action items specific and achievable
- Use markdown formatting for readability
- Reference the Gyanmarg learning science principles (active recall, spaced repetition, etc.)
