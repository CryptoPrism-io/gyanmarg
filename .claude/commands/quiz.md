# Generate Quiz

Generate quiz questions for a lesson or topic.

## Arguments
$ARGUMENTS - Topic or lesson ID to generate quiz questions for

## Instructions

Create engaging multiple-choice quiz questions that test understanding, not just recall.

### Quiz Question Structure
```typescript
{
  question: string,
  options: string[],  // 4 options (A, B, C, D)
  correctAnswer: number,  // 0-3 index
  explanation: string  // Why the answer is correct
}
```

### Question Types to Include
1. **Conceptual Understanding** - Tests grasp of core ideas
2. **Application** - Applies concept to a scenario
3. **Analysis** - Requires reasoning about the concept
4. **Synthesis** - Connects multiple concepts

### Guidelines
- Write clear, unambiguous questions
- Make incorrect options plausible (avoid obviously wrong answers)
- Explanations should teach, not just confirm
- Reference specific content from the lesson/books
- Vary difficulty (1 easy, 1 medium, 1 challenging per set)
- Avoid trick questions

### Example
```typescript
{
  question: 'According to Atomic Habits, what is the most effective way to build a new habit?',
  options: [
    'Set ambitious goals and use willpower',
    'Make the habit obvious, attractive, easy, and satisfying',
    'Track your progress in a journal daily',
    'Announce your intentions publicly for accountability'
  ],
  correctAnswer: 1,
  explanation: 'James Clear\'s Four Laws of Behavior Change (make it obvious, attractive, easy, and satisfying) are the core framework for habit formation in Atomic Habits.'
}
```

Generate 3-5 quiz questions based on the given topic.
