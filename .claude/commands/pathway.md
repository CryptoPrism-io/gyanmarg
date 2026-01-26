# Create Learning Pathway

Create a complete learning pathway for a module.

## Arguments
$ARGUMENTS - Module name and books to include (e.g., "blockchain 'Blockchain Illustrated Guide' 'Blockchain for Dummies'")

## Instructions

Design a complete learning pathway that takes users from beginner to mastery.

### Pathway File Location
Create at: `app/src/data/pathways/{module-name}.ts`

### Pathway Structure
```typescript
import { Pathway } from '@/types';

export const {moduleName}Pathway: Pathway = {
  id: '{module-name}',
  title: 'Module Title',
  description: 'What users will learn and achieve',
  books: [
    { id: 'book-1', title: 'Book Title', author: 'Author Name' }
  ],
  lessons: [
    // Foundation Phase (3-5 lessons)
    // Deep Dive Phase (5-8 lessons)
    // Integration Phase (3-5 lessons)
  ],
  totalXP: 1500,  // Sum of all lesson XP
  estimatedHours: 8  // Total learning time
};
```

### Lesson Progression
1. **Foundation Phase** (Intro lessons)
   - Overview and "why this matters"
   - Core terminology and concepts
   - Mental models and frameworks

2. **Deep Dive Phase** (Concept lessons)
   - Detailed exploration of key ideas
   - Examples and case studies
   - Practice exercises

3. **Integration Phase** (Challenge lessons)
   - Apply concepts to real scenarios
   - Cross-reference with other modules
   - Create personal action plans

### Guidelines
- Each phase should build on the previous
- Include quizzes after every 2-3 lessons
- Vary lesson types (intro, concept, challenge)
- Total pathway: 12-15 lessons
- Include action items that connect to real life
- Reference specific book chapters/pages
- Add cross-connections to other Gyanmarg modules

### Export
Add to `app/src/data/pathways/index.ts`:
```typescript
export { {moduleName}Pathway } from './{module-name}';
```
