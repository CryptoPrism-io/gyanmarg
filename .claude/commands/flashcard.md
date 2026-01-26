# Create Flashcards

Generate spaced repetition flashcards for a topic or lesson.

## Arguments
$ARGUMENTS - Topic, book, or lesson to create flashcards for

## Instructions

Create flashcards optimized for the SM-2 spaced repetition algorithm.

### Flashcard Structure
```typescript
{
  id: string,
  front: string,  // Question or prompt
  back: string,   // Answer or explanation
  category: string,  // Topic category
  difficulty: 'easy' | 'medium' | 'hard'
}
```

### Flashcard Types
1. **Definition** - "What is [term]?" → Definition
2. **Application** - "How would you apply [concept] to [scenario]?" → Application
3. **Comparison** - "What's the difference between [A] and [B]?" → Key differences
4. **Example** - "Give an example of [concept]" → Concrete example
5. **Why** - "Why does [concept] work?" → Underlying principle

### Guidelines
- Keep front side concise (one clear question)
- Back side should be comprehensive but scannable
- Use bullet points on back for multiple items
- Include mnemonics where helpful
- Reference source book/chapter
- Mix difficulty levels

### Example Flashcards
```typescript
{
  id: 'ah-001',
  front: 'What are the Four Laws of Behavior Change?',
  back: '1. Make it obvious\n2. Make it attractive\n3. Make it easy\n4. Make it satisfying\n\n(Atomic Habits, Ch. 3)',
  category: 'Atomic Habits',
  difficulty: 'easy'
},
{
  id: 'ah-002',
  front: 'How does habit stacking work?',
  back: 'Link a new habit to an existing one using the formula:\n\n"After I [CURRENT HABIT], I will [NEW HABIT]."\n\nThis leverages the existing neural pathway of the current habit.',
  category: 'Atomic Habits',
  difficulty: 'medium'
}
```

Generate 5-10 flashcards based on the given topic.
